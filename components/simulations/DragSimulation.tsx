'use client';

import { useState, useMemo } from 'react';

interface ShapeOption {
  label: string;
  CD: number;
  icon: string;
  desc: string;
  color: string;
}

const SHAPES: ShapeOption[] = [
  { label: 'Flat Plate',      CD: 2.0,  icon: '▬', desc: 'Perpendicular to flow',      color: '#FF6B5B' },
  { label: 'Sphere',          CD: 0.47, icon: '●', desc: 'Classic bluff body',          color: '#F4C842' },
  { label: 'Cylinder',        CD: 1.0,  icon: '◼', desc: 'Cross-flow cylinder',         color: '#a78bfa' },
  { label: 'Streamlined Body',CD: 0.04, icon: '◆', desc: 'Fairing / teardrop',          color: '#4ade80' },
  { label: 'Airfoil NACA 0012',CD:0.012,icon: '⬩', desc: 'At 0° AoA (pressure drag)',  color: '#4FC3F7' },
  { label: 'Blunt Nose Cone', CD: 0.15, icon: '▲', desc: 'Rocket nose cone',            color: '#fb923c' },
];

export default function DragSimulation() {
  const [speed, setSpeed] = useState(200);        // knots
  const [altitude, setAltitude] = useState(5000); // ft
  const [refArea, setRefArea] = useState(100);     // ft^2
  const [selectedShapes, setSelectedShapes] = useState<Set<number>>(new Set([0, 3]));

  // Air density at altitude
  const sigma = altitude < 36089
    ? Math.pow(1 - altitude / 145442, 4.255)
    : 0.2971 * Math.exp(-(altitude - 36089) / 20806);
  const rhoSL = 0.002377;
  const rho = rhoSL * sigma;
  const V = speed * 1.68781; // ft/s

  const qBar = 0.5 * rho * V * V; // dynamic pressure, psf

  // Drag for each shape
  const dragValues = useMemo(() =>
    SHAPES.map(s => Math.round(qBar * s.CD * refArea)),
    [qBar, refArea]
  );

  const maxDrag = Math.max(...dragValues, 1);

  // Induced vs parasitic drag chart
  const AR = 9;
  const e = 0.85;
  const wingArea = refArea;

  const speeds = useMemo(() => {
    const pts: { v: number; parasitic: number; induced: number; total: number }[] = [];
    for (let v = 50; v <= 400; v += 10) {
      const Vf = v * 1.68781;
      const q = 0.5 * rho * Vf * Vf;
      const weight = 50000; // lb reference
      const CL = weight / (q * wingArea);
      const CDi = (CL * CL) / (Math.PI * e * AR);
      const CD0 = 0.02;
      const Di = Math.round(q * CDi * wingArea);
      const D0 = Math.round(q * CD0 * wingArea);
      pts.push({ v, parasitic: D0, induced: Di, total: D0 + Di });
    }
    return pts;
  }, [rho, wingArea]);

  const maxTotal = Math.max(...speeds.map(s => s.total), 1);
  const svgW = 340, svgH = 120;

  // Mark current speed on chart
  const currentIdx = Math.floor((speed - 50) / 10);
  const currentPt = speeds[Math.max(0, Math.min(speeds.length - 1, currentIdx))];

  // Toggle shape selection
  const toggleShape = (i: number) => {
    setSelectedShapes(prev => {
      const next = new Set(prev);
      if (next.has(i)) { if (next.size > 1) next.delete(i); }
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
        <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">Drag Coefficient Comparator</h3>
        <p className="font-sans text-xs text-[#536B84] mt-1">D = ½ρV²SC<sub>D</sub> · Compare how shape affects drag force</p>
      </div>

      {/* Shape selection */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-3">Select Shapes to Compare</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SHAPES.map((s, i) => (
            <button
              key={i}
              onClick={() => toggleShape(i)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-colors text-left ${selectedShapes.has(i) ? 'border-opacity-60 bg-opacity-15' : 'border-[#1C2A3E] text-[#536B84] hover:border-[#4FC3F7]/30'}`}
              style={selectedShapes.has(i) ? {
                borderColor: s.color + '80',
                backgroundColor: s.color + '18',
              } : undefined}
            >
              <span className="text-base" style={{ color: selectedShapes.has(i) ? s.color : '#536B84' }}>
                {s.icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] font-bold truncate" style={{ color: selectedShapes.has(i) ? s.color : '#536B84' }}>
                  {s.label}
                </p>
                <p className="font-sans text-[9px] text-[#536B84] truncate">C<sub>D</sub> = {s.CD}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bar chart of drag forces */}
      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84]">Drag Force at {speed} kts, {altitude.toLocaleString()} ft</p>
        {SHAPES.map((s, i) => {
          if (!selectedShapes.has(i)) return null;
          const d = dragValues[i];
          const barWidth = Math.max(2, (d / maxDrag) * 100);
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="w-28 flex-shrink-0">
                <p className="font-mono text-[10px]" style={{ color: s.color }}>{s.label}</p>
              </div>
              <div className="flex-1 relative h-6 flex items-center">
                <div
                  className="h-4 rounded-sm transition-all duration-300"
                  style={{ width: `${barWidth}%`, backgroundColor: s.color, opacity: 0.85 }}
                />
              </div>
              <div className="w-24 text-right">
                <span className="font-mono text-xs" style={{ color: s.color }}>
                  {d.toLocaleString()} lb
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Drag polar chart */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-3">Drag vs Speed (W=50,000 lb reference)</p>
        <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} className="w-full overflow-visible">
          <defs>
            <pattern id="drag-grid" width="34" height="12" patternUnits="userSpaceOnUse">
              <path d="M 34 0 L 0 0 0 12" fill="none" stroke="rgba(79,195,247,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width={svgW} height={svgH} fill="url(#drag-grid)" rx="4" />

          {/* Parasitic drag curve */}
          <polyline
            points={speeds.map((s, i) => `${(i / speeds.length) * svgW},${svgH - (s.parasitic / maxTotal) * (svgH - 12)}`).join(' ')}
            fill="none" stroke="#4ade80" strokeWidth="1.5" opacity="0.8"
          />

          {/* Induced drag curve */}
          <polyline
            points={speeds.map((s, i) => `${(i / speeds.length) * svgW},${svgH - (s.induced / maxTotal) * (svgH - 12)}`).join(' ')}
            fill="none" stroke="#F4C842" strokeWidth="1.5" opacity="0.8" strokeDasharray="5 3"
          />

          {/* Total drag curve */}
          <polyline
            points={speeds.map((s, i) => `${(i / speeds.length) * svgW},${svgH - (s.total / maxTotal) * (svgH - 12)}`).join(' ')}
            fill="none" stroke="#4FC3F7" strokeWidth="2"
          />

          {/* Current speed marker */}
          {currentPt && (
            <line
              x1={(currentIdx / speeds.length) * svgW}
              y1={0}
              x2={(currentIdx / speeds.length) * svgW}
              y2={svgH}
              stroke="white" strokeWidth="1" opacity="0.4" strokeDasharray="3 2"
            />
          )}

          {/* Axes labels */}
          <text x="2" y="10" fill="#536B84" fontSize="8" fontFamily="monospace">lb</text>
          <text x={svgW - 24} y={svgH - 2} fill="#536B84" fontSize="8" fontFamily="monospace">kts</text>
          <text x="4" y={svgH / 2} fill="#536B84" fontSize="8" fontFamily="monospace" transform={`rotate(-90 4 ${svgH / 2})`}>Drag</text>
        </svg>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-0.5 bg-[#4ade80]" />
            <span className="font-mono text-[9px] text-[#4ade80]">Parasitic (D₀)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-0.5 bg-[#F4C842] border-t border-dashed border-[#F4C842]" />
            <span className="font-mono text-[9px] text-[#F4C842]">Induced (Dᵢ)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-0.5 bg-[#4FC3F7]" />
            <span className="font-mono text-[9px] text-[#4FC3F7]">Total</span>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#1C2A3E]">
        <SliderRow label="Airspeed" value={speed} min={50} max={400} step={5} unit=" kts" color="#4FC3F7" onChange={setSpeed} />
        <SliderRow label="Altitude" value={altitude} min={0} max={35000} step={1000} unit=" ft" color="#4ade80" onChange={setAltitude} />
        <SliderRow label="Ref Area" value={refArea} min={10} max={500} step={10} unit=" ft²" color="#F4C842" onChange={setRefArea} />
      </div>

      <p className="font-sans text-[11px] text-[#536B84]">
        q̄ = {Math.round(qBar)} psf · ρ = {rho.toFixed(5)} sl/ft³ · Induced drag minimum near best L/D speed
      </p>
    </div>
  );
}

function SliderRow({
  label, value, min, max, step, unit, color, onChange
}: {
  label: string; value: number; min: number; max: number; step: number;
  unit: string; color: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC]">{label}</span>
        <span className="font-mono text-xs font-bold" style={{ color }}>
          {value.toLocaleString()}{unit}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${color} 0%, ${color} ${((value - min) / (max - min)) * 100}%, #1C2A3E ${((value - min) / (max - min)) * 100}%, #1C2A3E 100%)`,
          accentColor: color,
        }}
      />
    </div>
  );
}
