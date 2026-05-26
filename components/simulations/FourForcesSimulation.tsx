'use client';

import { useState, useMemo } from 'react';

export default function FourForcesSimulation() {
  const [speed, setSpeed] = useState(150);       // knots
  const [weight, setWeight] = useState(70000);   // lbs
  const [thrust, setThrust] = useState(40000);   // lbs
  const [altitude, setAltitude] = useState(0);   // ft, 0=sea level

  // Air density ratio (sigma) — simplified ISA
  const sigma = useMemo(() => {
    if (altitude < 36089) return Math.pow(1 - altitude / 145442, 4.255);
    return 0.2971 * Math.exp(-(altitude - 36089) / 20806);
  }, [altitude]);

  // Lift: L = 0.5 * rho * V^2 * S * CL
  // For simplicity, assume S=1000 ft^2 (generic airliner), CL=0.5 baseline
  // Convert speed to ft/s: knots * 1.68781
  const rhoSL = 0.002377; // slugs/ft^3
  const rho = rhoSL * sigma;
  const S = 1000; // ft^2
  const CL = 1.2;  // representative cruise CL
  const speedFtS = speed * 1.68781;
  const lift = Math.round(0.5 * rho * speedFtS * speedFtS * S * CL);

  // Drag: assume L/D = 15 for generic jet
  const LD = 15;
  const drag = Math.round(lift / LD);

  const netVertical = lift - weight;
  const netHorizontal = thrust - drag;

  const isClimbing = netVertical > 500;
  const isDiving = netVertical < -500;
  const isAccel = netHorizontal > 500;
  const isDecel = netHorizontal < -500;

  let flightState = 'Steady cruise';
  if (isClimbing && isAccel) flightState = 'Climbing & accelerating';
  else if (isClimbing) flightState = 'Climbing';
  else if (isDiving && isDecel) flightState = 'Descending & decelerating';
  else if (isDiving) flightState = 'Descending';
  else if (isAccel) flightState = 'Accelerating';
  else if (isDecel) flightState = 'Decelerating';

  const stateColor =
    flightState === 'Steady cruise' ? '#4FC3F7' :
    isClimbing ? '#4ade80' :
    isDiving ? '#F4C842' : '#FF6B5B';

  // Arrow scale factors for SVG
  const cx = 200, cy = 160;
  const maxArrow = 70;

  const scaleArrow = (val: number, ref: number) =>
    Math.min(maxArrow, Math.max(8, (Math.abs(val) / ref) * maxArrow));

  const liftLen = scaleArrow(lift, weight);
  const weightLen = scaleArrow(weight, weight);
  const thrustLen = scaleArrow(thrust, 60000);
  const dragLen = scaleArrow(drag, 60000);

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
          <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">Four Forces of Flight</h3>
        </div>
        <span
          className="px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-widest border"
          style={{ color: stateColor, borderColor: stateColor + '50', background: stateColor + '15' }}
        >
          {flightState}
        </span>
      </div>

      {/* SVG Diagram */}
      <div className="flex justify-center">
        <svg width="400" height="320" viewBox="0 0 400 320" className="overflow-visible">
          {/* Background grid */}
          <defs>
            <pattern id="ff-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(79,195,247,0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="320" fill="url(#ff-grid)" rx="8" />

          {/* Ground line */}
          <line x1="0" y1="290" x2="400" y2="290" stroke="#1C2A3E" strokeWidth="1" />
          <text x="10" y="308" fill="#536B84" fontSize="10" fontFamily="monospace">Ground</text>

          {/* Altitude indicator */}
          <text x="370" y="15" fill="#536B84" fontSize="9" fontFamily="monospace" textAnchor="end">
            {altitude.toLocaleString()} ft
          </text>

          {/* Aircraft body — simple side-view silhouette */}
          <g transform={`translate(${cx}, ${cy})`}>
            {/* Fuselage */}
            <ellipse cx="0" cy="0" rx="40" ry="12" fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />
            {/* Wing */}
            <path d="M-10,-2 L-5,-14 L30,-6 L28,0 Z" fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />
            {/* Tail */}
            <path d="M-35,-2 L-40,-14 L-28,-8 L-28,0 Z" fill="#1C2A3E" stroke="#4FC3F7" strokeWidth="1" />
            {/* Nose */}
            <path d="M40,0 L52,-4 L52,4 Z" fill="#4FC3F7" opacity="0.6" />
            {/* Engine */}
            <ellipse cx="10" cy="8" rx="8" ry="4" fill="#0E1520" stroke="#536B84" strokeWidth="1" />
          </g>

          {/* LIFT arrow — up */}
          <g>
            <line
              x1={cx} y1={cy - 12}
              x2={cx} y2={cy - 12 - liftLen}
              stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"
            />
            <polygon
              points={`${cx},${cy - 12 - liftLen - 8} ${cx - 6},${cy - 12 - liftLen + 2} ${cx + 6},${cy - 12 - liftLen + 2}`}
              fill="#4ade80"
            />
            <text x={cx + 8} y={cy - 12 - liftLen / 2} fill="#4ade80" fontSize="11" fontFamily="monospace">
              L = {lift.toLocaleString()} lb
            </text>
          </g>

          {/* WEIGHT arrow — down */}
          <g>
            <line
              x1={cx} y1={cy + 12}
              x2={cx} y2={cy + 12 + weightLen}
              stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round"
            />
            <polygon
              points={`${cx},${cy + 12 + weightLen + 8} ${cx - 6},${cy + 12 + weightLen - 2} ${cx + 6},${cy + 12 + weightLen - 2}`}
              fill="#FF6B5B"
            />
            <text x={cx + 8} y={cy + 12 + weightLen / 2 + 4} fill="#FF6B5B" fontSize="11" fontFamily="monospace">
              W = {weight.toLocaleString()} lb
            </text>
          </g>

          {/* THRUST arrow — left (forward) */}
          <g>
            <line
              x1={cx + 52} y1={cy}
              x2={cx + 52 + thrustLen} y2={cy}
              stroke="#F4C842" strokeWidth="2.5" strokeLinecap="round"
            />
            <polygon
              points={`${cx + 52 + thrustLen + 8},${cy} ${cx + 52 + thrustLen - 2},${cy - 6} ${cx + 52 + thrustLen - 2},${cy + 6}`}
              fill="#F4C842"
            />
            <text x={cx + 52 + thrustLen / 2 - 20} y={cy - 8} fill="#F4C842" fontSize="11" fontFamily="monospace">
              T = {thrust.toLocaleString()} lb
            </text>
          </g>

          {/* DRAG arrow — right (backward) */}
          <g>
            <line
              x1={cx - 40} y1={cy}
              x2={cx - 40 - dragLen} y2={cy}
              stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"
            />
            <polygon
              points={`${cx - 40 - dragLen - 8},${cy} ${cx - 40 - dragLen + 2},${cy - 6} ${cx - 40 - dragLen + 2},${cy + 6}`}
              fill="#a78bfa"
            />
            <text x={cx - 40 - dragLen / 2 - 30} y={cy - 8} fill="#a78bfa" fontSize="11" fontFamily="monospace">
              D = {drag.toLocaleString()} lb
            </text>
          </g>

          {/* Labels */}
          <text x="10" y="20" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold">▲ LIFT</text>
          <text x="10" y="35" fill="#FF6B5B" fontSize="10" fontFamily="monospace" fontWeight="bold">▼ WEIGHT</text>
          <text x="10" y="50" fill="#F4C842" fontSize="10" fontFamily="monospace" fontWeight="bold">▶ THRUST</text>
          <text x="10" y="65" fill="#a78bfa" fontSize="10" fontFamily="monospace" fontWeight="bold">◀ DRAG</text>
        </svg>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SliderRow
          label="Airspeed"
          value={speed}
          min={60} max={350} step={5}
          unit="kts"
          color="#4FC3F7"
          onChange={setSpeed}
        />
        <SliderRow
          label="Aircraft Weight"
          value={weight}
          min={20000} max={200000} step={5000}
          unit="lb"
          color="#FF6B5B"
          onChange={setWeight}
        />
        <SliderRow
          label="Engine Thrust"
          value={thrust}
          min={5000} max={100000} step={2500}
          unit="lb"
          color="#F4C842"
          onChange={setThrust}
        />
        <SliderRow
          label="Altitude"
          value={altitude}
          min={0} max={40000} step={1000}
          unit="ft"
          color="#4ade80"
          onChange={setAltitude}
        />
      </div>

      {/* Net force readout */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#1C2A3E]">
        <div className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">Net Vertical</p>
          <p className={`font-mono text-base font-bold ${netVertical >= 0 ? 'text-[#4ade80]' : 'text-[#FF6B5B]'}`}>
            {netVertical >= 0 ? '+' : ''}{netVertical.toLocaleString()} lb
          </p>
          <p className="font-sans text-[10px] text-[#536B84] mt-1">
            {netVertical > 500 ? 'Climbing' : netVertical < -500 ? 'Descending' : 'Level flight'}
          </p>
        </div>
        <div className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">Net Horizontal</p>
          <p className={`font-mono text-base font-bold ${netHorizontal >= 0 ? 'text-[#F4C842]' : 'text-[#a78bfa]'}`}>
            {netHorizontal >= 0 ? '+' : ''}{netHorizontal.toLocaleString()} lb
          </p>
          <p className="font-sans text-[10px] text-[#536B84] mt-1">
            {netHorizontal > 500 ? 'Accelerating' : netHorizontal < -500 ? 'Decelerating' : 'Constant speed'}
          </p>
        </div>
      </div>

      <p className="font-sans text-[11px] text-[#536B84] pt-1">
        Air density ratio at altitude: σ = {sigma.toFixed(4)} · L/D ratio: {LD} · ρ = {rho.toFixed(6)} slug/ft³
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
          {value.toLocaleString()} {unit}
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
