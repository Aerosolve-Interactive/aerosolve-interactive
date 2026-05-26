'use client';

import { useState, useMemo } from 'react';

export default function RocketSimulation() {
  const [isp, setIsp] = useState(350);        // seconds (kerosene/LOX typical)
  const [massRatio, setMassRatio] = useState(8); // m0/mf
  const [stages, setStages] = useState(2);
  const [payload, setPayload] = useState(10);  // % of initial mass

  const g0 = 9.80665; // m/s^2
  const Ve = isp * g0; // effective exhaust velocity, m/s

  // Single-stage delta-v
  const dvSingle = useMemo(() => Ve * Math.log(massRatio), [Ve, massRatio]);

  // Multi-stage: assume equal mass ratio per stage
  const dvMulti = useMemo(() => {
    const perStageMR = Math.pow(massRatio, 1 / stages);
    return Ve * Math.log(perStageMR) * stages;
  }, [Ve, massRatio, stages]);

  // Practical delta-v budget reference
  const leo = 9300; // m/s approx to LEO including gravity/drag losses
  const lunar = 13700; // m/s to lunar orbit
  const mars = 16500; // m/s to Mars transfer

  const canReachLEO = dvSingle >= leo;
  const canReachMoon = dvSingle >= lunar;
  const canReachMars = dvSingle >= mars;

  // Propellant mass fraction
  const propMassFrac = Math.round((1 - 1 / massRatio) * 100);

  // Burnout velocity as fraction of orbital speed
  const orbitalFrac = Math.min(100, Math.round((dvSingle / leo) * 100));

  // SVG rocket visual
  const rocketHeight = 180;
  const rocketX = 200;
  const flameLength = Math.min(60, 20 + (dvSingle / 1000) * 2);

  const stageColors = ['#4FC3F7', '#4ade80', '#F4C842', '#a78bfa'];

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
        <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">Rocket Equation Calculator</h3>
        <p className="font-sans text-xs text-[#536B84] mt-1">Δv = V<sub>e</sub> × ln(m₀/m<sub>f</sub>)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* SVG Rocket */}
        <div className="flex justify-center">
          <svg width="200" height="320" viewBox="0 0 200 320">
            <defs>
              <radialGradient id="flame-grad" cx="50%" cy="0%" r="80%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#F4C842" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="stage1-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#0E1520" />
                <stop offset="50%" stopColor="#1C2A3E" />
                <stop offset="100%" stopColor="#0E1520" />
              </linearGradient>
            </defs>

            {/* Stars */}
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 37 + 15) % 190 + 5}
                cy={(i * 61 + 20) % 200 + 10}
                r="0.8"
                fill="white"
                opacity={0.3 + (i % 4) * 0.15}
              />
            ))}

            {/* Stages (drawn bottom to top) */}
            {Array.from({ length: stages }).map((_, si) => {
              const stageIndex = stages - 1 - si;
              const segH = 140 / stages;
              const y = 200 - segH * (si + 1) + 20;
              const w = 34 - si * 2;
              return (
                <g key={si}>
                  <rect
                    x={100 - w / 2} y={y}
                    width={w} height={segH - 2}
                    fill="url(#stage1-grad)"
                    stroke={stageColors[stageIndex % stageColors.length]}
                    strokeWidth="1"
                    rx="2"
                  />
                  <text
                    x={100} y={y + segH / 2 + 4}
                    fill={stageColors[stageIndex % stageColors.length]}
                    fontSize="9" fontFamily="monospace" textAnchor="middle"
                  >
                    S{si + 1}
                  </text>
                  {si < stages - 1 && (
                    <line x1={100 - w / 2 - 2} y1={y + segH - 2} x2={100 + w / 2 + 2} y2={y + segH - 2}
                      stroke="#F4C842" strokeWidth="0.8" strokeDasharray="3 2" />
                  )}
                </g>
              );
            })}

            {/* Nose cone */}
            <path d={`M100,40 L117,85 L83,85 Z`} fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />

            {/* Fins */}
            <path d="M83,190 L70,220 L83,210 Z" fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />
            <path d="M117,190 L130,220 L117,210 Z" fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />

            {/* Nozzle */}
            <path d="M90,210 L85,228 L115,228 L110,210 Z" fill="#1C2A3E" stroke="#536B84" strokeWidth="1" />

            {/* Flame */}
            <ellipse
              cx={100} cy={228 + flameLength / 2}
              rx={10 + flameLength / 6} ry={flameLength}
              fill="url(#flame-grad)"
              opacity={0.85}
            />

            {/* Δv label */}
            <text x={100} y={295} fill="#4FC3F7" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              Δv = {(dvSingle / 1000).toFixed(2)} km/s
            </text>
            <text x={100} y={310} fill="#536B84" fontSize="9" fontFamily="monospace" textAnchor="middle">
              {dvMulti > dvSingle ? `(${stages}-stage: ${(dvMulti / 1000).toFixed(2)} km/s)` : ''}
            </text>
          </svg>
        </div>

        {/* Controls + readouts */}
        <div className="space-y-5">
          {/* Sliders */}
          <SliderRow
            label="Specific Impulse (Isp)"
            value={isp} min={150} max={500} step={5} unit="s" color="#4FC3F7"
            onChange={setIsp}
          />
          <SliderRow
            label="Mass Ratio (m₀/mf)"
            value={massRatio} min={2} max={20} step={0.5} unit="×" color="#4ade80"
            onChange={setMassRatio}
          />
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC]">Stages</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(s => (
                  <button
                    key={s}
                    onClick={() => setStages(s)}
                    className={`px-3 py-1 rounded font-mono text-xs border transition-colors ${stages === s ? 'border-[#4FC3F7] bg-[#4FC3F7]/15 text-[#4FC3F7]' : 'border-[#1C2A3E] text-[#536B84] hover:border-[#4FC3F7]/40'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mission targets */}
          <div className="pt-2 border-t border-[#1C2A3E] space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84]">Mission Capability</p>
            {[
              { label: 'Low Earth Orbit', dv: leo, reachable: canReachLEO },
              { label: 'Lunar Orbit', dv: lunar, reachable: canReachMoon },
              { label: 'Mars Transfer', dv: mars, reachable: canReachMars },
            ].map(m => (
              <div key={m.label} className="flex items-center justify-between">
                <span className="font-sans text-xs text-[#8FA3BC]">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#536B84]">{(m.dv / 1000).toFixed(1)} km/s</span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${m.reachable ? 'bg-[#4ade80]/20 text-[#4ade80]' : 'bg-[#FF6B5B]/20 text-[#FF6B5B]'}`}>
                    {m.reachable ? '✓' : '✕'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 pt-2 border-t border-[#1C2A3E]">
        {[
          { label: 'V_exhaust', value: `${(Ve / 1000).toFixed(2)} km/s`, color: '#4FC3F7' },
          { label: 'Propellant', value: `${propMassFrac}%`, color: '#4ade80' },
          { label: 'Δv / LEO', value: `${orbitalFrac}%`, color: '#F4C842' },
          { label: 'Isp × g₀', value: `${Ve.toFixed(0)} m/s`, color: '#a78bfa' },
        ].map(item => (
          <div key={item.label} className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">{item.label}</p>
            <p className="font-mono text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="font-sans text-[11px] text-[#536B84]">
        Isp range: H₂/O₂ ~450s · RP-1/O₂ ~350s · Solid ~250s · Ion ~3000s (low thrust) · LEO Δv budget includes ~1.5 km/s gravity+drag losses
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
        <span className="font-mono text-sm font-bold" style={{ color }}>
          {value} {unit}
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
