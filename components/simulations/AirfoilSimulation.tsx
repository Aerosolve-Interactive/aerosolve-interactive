'use client';

import { useState, useMemo } from 'react';

// NACA 4-digit airfoil coordinate generator (simplified)
function nacaCoords(aoa: number): { upper: [number,number][]; lower: [number,number][] } {
  // NACA 2412: m=0.02, p=0.4, t=0.12
  const m = 0.02, p = 0.4, t = 0.12;
  const pts = 40;
  const upper: [number,number][] = [];
  const lower: [number,number][] = [];

  for (let i = 0; i <= pts; i++) {
    const x = i / pts;
    // Thickness
    const yt = (t / 0.2) * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x);
    // Camber line
    let yc = 0;
    if (x < p) yc = (m / (p * p)) * (2 * p * x - x * x);
    else yc = (m / ((1 - p) * (1 - p))) * (1 - 2 * p + 2 * p * x - x * x);

    // Camber line slope
    let dyc_dx = 0;
    if (x < p) dyc_dx = (2 * m / (p * p)) * (p - x);
    else dyc_dx = (2 * m / ((1 - p) * (1 - p))) * (p - x);
    const theta = Math.atan(dyc_dx);

    upper.push([x - yt * Math.sin(theta), yc + yt * Math.cos(theta)]);
    lower.push([x + yt * Math.sin(theta), yc - yt * Math.cos(theta)]);
  }

  // Rotate by angle of attack
  const rad = (-aoa * Math.PI) / 180;
  const rotate = ([x, y]: [number, number]): [number, number] => [
    x * Math.cos(rad) - y * Math.sin(rad),
    x * Math.sin(rad) + y * Math.cos(rad),
  ];

  return {
    upper: upper.map(rotate),
    lower: lower.map(rotate),
  };
}

function toSvg([x, y]: [number, number], scale = 280, ox = 60, oy = 160): [number, number] {
  return [ox + x * scale, oy - y * scale];
}

export default function AirfoilSimulation() {
  const [aoa, setAoa] = useState(5);     // degrees
  const [speed, setSpeed] = useState(120); // knots

  // Aerodynamic model — NACA 2412 approximation
  // CL ≈ 2π(α + α_L0) where α_L0 ≈ -2° for NACA 2412, stall ~16°
  const alphaL0 = -2.0;
  const CLRaw = useMemo(() => {
    if (aoa < 16) return 0.11 * (aoa - alphaL0);  // per degree slope ~0.11
    // Post-stall drop-off
    return 0.11 * (16 - alphaL0) * (1 - (aoa - 16) / 8);
  }, [aoa]);
  const CL = Math.max(-0.4, Math.round(CLRaw * 100) / 100);

  // CD — simplified polar: CD0=0.006 + CL^2/(π*e*AR), e=0.85, AR=9
  const e = 0.85, AR = 9;
  const CD = Math.round((0.006 + (CL * CL) / (Math.PI * e * AR)) * 1000) / 1000;
  const LD = CD !== 0 ? Math.round(CL / CD) : 0;

  const isStalled = aoa >= 16;

  // Generate airfoil shape
  const { upper, lower } = useMemo(() => nacaCoords(aoa), [aoa]);

  const svgUpper = upper.map(p => toSvg(p));
  const svgLower = lower.map(p => toSvg(p));

  const upperPath = svgUpper.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const lowerPath = [...svgLower].reverse().map((p, i) => `${i === 0 ? 'L' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const airfoilPath = upperPath + ' ' + lowerPath + ' Z';

  // Pressure arrows — simplified: suction on upper, pressure on lower
  const pressureArrows = useMemo(() => {
    const arrows: { x: number; y: number; dy: number; color: string }[] = [];
    const positions = [0.1, 0.2, 0.35, 0.5, 0.65, 0.8];
    positions.forEach((xPos) => {
      const i = Math.round(xPos * 40);
      if (upper[i] && lower[i]) {
        const [ux, uy] = toSvg(upper[i]);
        const [lx, ly] = toSvg(lower[i]);
        // Upper surface: suction (arrows pointing away from surface upward)
        const uLen = Math.max(6, (1 - xPos) * CL * 40 * (isStalled ? 0.3 : 1));
        // Lower surface: pressure (arrows pointing into surface)
        const lLen = Math.max(4, xPos < 0.7 ? 12 : 6);
        arrows.push({ x: ux, y: uy, dy: -uLen, color: '#4ade80' });
        arrows.push({ x: lx, y: ly, dy: lLen, color: '#FF6B5B' });
      }
    });
    return arrows;
  }, [upper, lower, CL, isStalled]);

  // Flow lines
  const flowLines = useMemo(() => {
    const lines: { y0: number; y1: number; separated: boolean }[] = [];
    const rad = (aoa * Math.PI) / 180;
    for (let j = -3; j <= 4; j++) {
      const y0 = 160 + j * 25;
      let y1 = y0;
      // Deflect flow above airfoil
      if (j >= 0 && j <= 2 && !isStalled) y1 = y0 - aoa * 1.5;
      else if (j < 0) y1 = y0 + aoa * 0.5;
      lines.push({ y0, y1, separated: isStalled && j >= 0 && j <= 2 });
    }
    return lines;
  }, [aoa, isStalled]);

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
          <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">NACA 2412 Airfoil</h3>
        </div>
        {isStalled && (
          <span className="px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-widest bg-[#FF6B5B]/15 border border-[#FF6B5B]/40 text-[#FF6B5B]">
            ⚠ STALLED
          </span>
        )}
      </div>

      {/* SVG */}
      <div className="flex justify-center">
        <svg width="400" height="300" viewBox="0 0 400 300" className="overflow-visible">
          <defs>
            <pattern id="af-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(79,195,247,0.04)" strokeWidth="0.5" />
            </pattern>
            <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
            </marker>
            <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#FF6B5B" />
            </marker>
          </defs>
          <rect width="400" height="300" fill="url(#af-grid)" rx="8" />

          {/* Flow lines */}
          {flowLines.map((fl, i) => (
            <path
              key={i}
              d={fl.separated
                ? `M 10,${fl.y0} C 100,${fl.y0} 150,${fl.y0 - 30} 250,${fl.y0 - 60} S 380,${fl.y1 - 40} 390,${fl.y1 - 20}`
                : `M 10,${fl.y0} C 80,${fl.y0} 140,${fl.y1} 250,${fl.y1} S 350,${fl.y0} 390,${fl.y0}`
              }
              fill="none"
              stroke={fl.separated ? '#FF6B5B' : 'rgba(79,195,247,0.25)'}
              strokeWidth={fl.separated ? '1' : '0.8'}
              strokeDasharray={fl.separated ? '4 3' : undefined}
            />
          ))}

          {/* Pressure arrows */}
          {pressureArrows.map((a, i) => (
            <line
              key={i}
              x1={a.x} y1={a.y}
              x2={a.x} y2={a.y + a.dy}
              stroke={a.color}
              strokeWidth="1.5"
              opacity="0.7"
            />
          ))}

          {/* Airfoil */}
          <path d={airfoilPath} fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1.5" />

          {/* Chord line */}
          <line
            x1={toSvg([0, 0])[0]} y1={toSvg([0, 0])[1]}
            x2={toSvg([1, 0])[0]} y2={toSvg([1, 0])[1]}
            stroke="#536B84" strokeWidth="0.75" strokeDasharray="4 3"
          />

          {/* AoA angle indicator */}
          <text x="300" y="25" fill="#F4C842" fontSize="12" fontFamily="monospace" fontWeight="bold">
            α = {aoa}°
          </text>
          <text x="300" y="42" fill="#536B84" fontSize="9" fontFamily="monospace">
            {aoa < 0 ? 'Negative lift' : aoa < 8 ? 'Low α region' : aoa < 14 ? 'High α region' : aoa < 16 ? 'Pre-stall' : 'Post-stall'}
          </text>

          {/* Legend */}
          <rect x="10" y="265" width="10" height="3" fill="#4ade80" />
          <text x="25" y="272" fill="#4ade80" fontSize="9" fontFamily="monospace">Suction (low P)</text>
          <rect x="140" y="265" width="10" height="3" fill="#FF6B5B" />
          <text x="155" y="272" fill="#FF6B5B" fontSize="9" fontFamily="monospace">Pressure (high P)</text>
          <line x1="270" y1="268" x2="285" y2="268" stroke="rgba(79,195,247,0.4)" strokeWidth="1" />
          <text x="290" y="272" fill="#536B84" fontSize="9" fontFamily="monospace">Streamlines</text>
        </svg>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC]">Angle of Attack</span>
            <span className={`font-mono text-sm font-bold ${isStalled ? 'text-[#FF6B5B]' : 'text-[#4FC3F7]'}`}>
              {aoa}°
            </span>
          </div>
          <input
            type="range" min={-8} max={24} step={1} value={aoa}
            onChange={(e) => setAoa(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${isStalled ? '#FF6B5B' : '#4FC3F7'} 0%, ${isStalled ? '#FF6B5B' : '#4FC3F7'} ${((aoa + 8) / 32) * 100}%, #1C2A3E ${((aoa + 8) / 32) * 100}%, #1C2A3E 100%)`,
            }}
          />
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[9px] text-[#536B84]">-8°</span>
            <span className="font-mono text-[9px] text-[#FF6B5B]">Stall ~16°</span>
            <span className="font-mono text-[9px] text-[#536B84]">+24°</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC]">Airspeed</span>
            <span className="font-mono text-sm font-bold text-[#F4C842]">{speed} kts</span>
          </div>
          <input
            type="range" min={60} max={350} step={5} value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #F4C842 0%, #F4C842 ${((speed - 60) / 290) * 100}%, #1C2A3E ${((speed - 60) / 290) * 100}%, #1C2A3E 100%)`,
            }}
          />
        </div>
      </div>

      {/* Data readout */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#1C2A3E]">
        {[
          { label: 'C_L', value: CL.toFixed(2), color: '#4ade80', desc: 'Lift coefficient' },
          { label: 'C_D', value: CD.toFixed(3), color: '#a78bfa', desc: 'Drag coefficient' },
          { label: 'L/D', value: isStalled ? '—' : String(LD), color: '#F4C842', desc: 'Lift-to-drag ratio' },
        ].map(item => (
          <div key={item.label} className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">{item.label}</p>
            <p className="font-mono text-xl font-bold" style={{ color: item.color }}>{item.value}</p>
            <p className="font-sans text-[10px] text-[#536B84] mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="font-sans text-[11px] text-[#536B84]">
        NACA 2412 · AR = 9 · e = 0.85 · C<sub>L,max</sub> ≈ 1.54 at 16° · Zero-lift α = {alphaL0}°
      </p>
    </div>
  );
}
