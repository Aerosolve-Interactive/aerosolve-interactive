'use client';

import { useState, useMemo } from 'react';

export default function AttitudeSimulation() {
  const [pitch, setPitch] = useState(0);   // degrees, + = nose up
  const [roll, setRoll] = useState(0);     // degrees, + = right wing down
  const [yaw, setYaw] = useState(0);       // degrees, + = nose right

  // Clamp helpers
  const pitchRad = (pitch * Math.PI) / 180;
  const rollRad = (roll * Math.PI) / 180;

  // Attitude Indicator — artificial horizon
  // Sky/ground split based on pitch and roll
  const cx = 100, cy = 100, r = 85;
  const horizonY = cy + Math.sin(pitchRad) * r * 0.6;

  // Horizon line endpoints (rotated by roll)
  const horizonLen = r;
  const hx1 = cx - horizonLen * Math.cos(rollRad);
  const hy1 = horizonY + horizonLen * Math.sin(rollRad);
  const hx2 = cx + horizonLen * Math.cos(rollRad);
  const hy2 = horizonY - horizonLen * Math.sin(rollRad);

  // Clip path circle
  const clipId = 'attitude-clip';

  // Wing reference bars
  const wingY = cy + 10;

  // Pitch ladder marks
  const pitchMarks = useMemo(() => {
    const marks: { y: number; label: string; isMajor: boolean }[] = [];
    [-20, -10, -5, 5, 10, 20].forEach(deg => {
      const yOffset = -deg * (r * 0.6) / 30;
      marks.push({
        y: horizonY + yOffset,
        label: `${Math.abs(deg)}`,
        isMajor: Math.abs(deg) % 10 === 0,
      });
    });
    return marks;
  }, [horizonY, r]);

  // State descriptions
  const pitchDesc = pitch > 5 ? 'Climbing' : pitch < -5 ? 'Descending' : 'Level';
  const rollDesc = Math.abs(roll) < 5 ? 'Wings level' : roll > 0 ? `${roll}° right bank` : `${Math.abs(roll)}° left bank`;
  const yawDesc = Math.abs(yaw) < 5 ? 'Coordinated' : yaw > 0 ? `${yaw}° right' turn` : `${Math.abs(yaw)}° left turn`;

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
        <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">Three Axes of Control</h3>
        <p className="font-sans text-xs text-[#536B84] mt-1">Pitch · Roll · Yaw — the three degrees of rotational freedom</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Attitude Indicator */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84]">Attitude Indicator</p>
          <svg width="220" height="220" viewBox="0 0 200 200">
            <defs>
              <clipPath id={clipId}>
                <circle cx={cx} cy={cy} r={r} />
              </clipPath>
            </defs>

            {/* Bezel */}
            <circle cx={cx} cy={cy} r={r + 4} fill="#080C12" stroke="#536B84" strokeWidth="2" />

            {/* Sky — upper half relative to horizon */}
            <g clipPath={`url(#${clipId})`}>
              <rect x={0} y={0} width={200} height={200} fill="#1a3a5c" />

              {/* Horizon fill: ground */}
              <polygon
                points={`${hx1},${hy1} ${hx2},${hy2} 200,200 0,200`}
                fill="#4a2f0e"
              />
              <polygon
                points={`${hx1},${hy1} ${hx2},${hy2} 200,0 0,0`}
                fill="#1a3a5c"
              />

              {/* Pitch ladder */}
              {pitchMarks.map((m, i) => (
                <g key={i}>
                  <line
                    x1={cx - (m.isMajor ? 22 : 12)}
                    y1={m.y}
                    x2={cx + (m.isMajor ? 22 : 12)}
                    y2={m.y}
                    stroke="white"
                    strokeWidth={m.isMajor ? 1 : 0.7}
                    opacity="0.6"
                    transform={`rotate(${-roll} ${cx} ${cy})`}
                  />
                  {m.isMajor && (
                    <text
                      x={cx + 26}
                      y={m.y + 3}
                      fill="white"
                      fontSize="7"
                      fontFamily="monospace"
                      opacity="0.6"
                      transform={`rotate(${-roll} ${cx} ${cy})`}
                    >
                      {m.label}
                    </text>
                  )}
                </g>
              ))}

              {/* Horizon line */}
              <line x1={hx1} y1={hy1} x2={hx2} y2={hy2} stroke="white" strokeWidth="1.5" />
            </g>

            {/* Roll scale */}
            {[-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60].map((deg) => {
              const rad2 = ((deg - 90) * Math.PI) / 180;
              const inner = r - 6;
              const outer = r;
              return (
                <line
                  key={deg}
                  x1={cx + inner * Math.cos(rad2)}
                  y1={cy + inner * Math.sin(rad2)}
                  x2={cx + outer * Math.cos(rad2)}
                  y2={cy + outer * Math.sin(rad2)}
                  stroke={deg === 0 ? '#4FC3F7' : '#536B84'}
                  strokeWidth={deg === 0 ? 2 : 1}
                />
              );
            })}

            {/* Roll pointer (triangle pointing at current roll) */}
            {(() => {
              const rollDeg = roll;
              const rad2 = ((-rollDeg - 90) * Math.PI) / 180;
              const tipR = r - 2;
              const tx = cx + tipR * Math.cos(rad2);
              const ty = cy + tipR * Math.sin(rad2);
              return (
                <polygon
                  points={`${tx},${ty} ${tx - 5},${ty - 10} ${tx + 5},${ty - 10}`}
                  fill="#4FC3F7"
                  transform={`rotate(${-rollDeg} ${tx} ${ty})`}
                />
              );
            })()}

            {/* Aircraft symbol — fixed reference */}
            <line x1={cx - 30} y1={wingY} x2={cx - 10} y2={wingY} stroke="#F4C842" strokeWidth="2.5" />
            <line x1={cx + 10} y1={wingY} x2={cx + 30} y2={wingY} stroke="#F4C842" strokeWidth="2.5" />
            <circle cx={cx} cy={wingY} r="3" fill="#F4C842" />

            {/* Outer ring */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1C2A3E" strokeWidth="1" />
          </svg>

          {/* Compass rose for yaw */}
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="#0E1520" stroke="#1C2A3E" strokeWidth="1" />
              {['N', 'E', 'S', 'W'].map((dir, i) => {
                const a = (i * 90 - 90) * Math.PI / 180;
                return (
                  <g key={dir}>
                    <text
                      x={60 + 42 * Math.cos(a)}
                      y={60 + 42 * Math.sin(a) + 4}
                      fill={dir === 'N' ? '#FF6B5B' : '#8FA3BC'}
                      fontSize="12" fontFamily="monospace"
                      textAnchor="middle" fontWeight="bold"
                    >{dir}</text>
                  </g>
                );
              })}
              {/* Heading tick marks */}
              {Array.from({ length: 36 }).map((_, i) => {
                const a = (i * 10 - 90) * Math.PI / 180;
                const isMajor = i % 9 === 0;
                return (
                  <line
                    key={i}
                    x1={60 + (isMajor ? 46 : 50) * Math.cos(a)}
                    y1={60 + (isMajor ? 46 : 50) * Math.sin(a)}
                    x2={60 + 54 * Math.cos(a)}
                    y2={60 + 54 * Math.sin(a)}
                    stroke="#536B84" strokeWidth={isMajor ? 1.5 : 0.8}
                  />
                );
              })}
              {/* Aircraft heading pointer */}
              <g transform={`rotate(${yaw} 60 60)`}>
                <polygon points="60,18 55,38 65,38" fill="#4FC3F7" />
                <polygon points="60,102 55,82 65,82" fill="#536B84" />
              </g>
              <circle cx="60" cy="60" r="4" fill="#4FC3F7" />
            </svg>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-5">
          <SliderRow
            label="Pitch (Elevator)"
            value={pitch} min={-30} max={30} step={1} unit="°"
            color={pitch >= 0 ? '#4ade80' : '#FF6B5B'}
            onChange={setPitch}
          />
          <SliderRow
            label="Roll (Ailerons)"
            value={roll} min={-60} max={60} step={1} unit="°"
            color="#4FC3F7"
            onChange={setRoll}
          />
          <SliderRow
            label="Yaw (Rudder)"
            value={yaw} min={-45} max={45} step={1} unit="°"
            color="#F4C842"
            onChange={setYaw}
          />

          {/* Quick presets */}
          <div className="pt-2 border-t border-[#1C2A3E]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-2">Preset Maneuvers</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Level Cruise', p: 2, r: 0, y: 0 },
                { label: 'Climb', p: 15, r: 0, y: 0 },
                { label: '30° Bank Turn', p: 5, r: 30, y: 10 },
                { label: 'Steep Descent', p: -20, r: 0, y: 0 },
              ].map(preset => (
                <button
                  key={preset.label}
                  onClick={() => { setPitch(preset.p); setRoll(preset.r); setYaw(preset.y); }}
                  className="px-3 py-2 rounded-lg border border-[#1C2A3E] text-[#8FA3BC] font-mono text-[10px] hover:border-[#4FC3F7]/40 hover:text-[#4FC3F7] transition-colors text-left"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* State readout */}
          <div className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3 space-y-1.5">
            {[
              { label: 'Pitch', val: `${pitch}°`, desc: pitchDesc, color: pitch >= 0 ? '#4ade80' : '#FF6B5B' },
              { label: 'Roll', val: `${roll}°`, desc: rollDesc, color: '#4FC3F7' },
              { label: 'Yaw', val: `${yaw}°`, desc: yawDesc, color: '#F4C842' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#536B84] w-10">{item.label}</span>
                  <span className="font-mono text-sm font-bold" style={{ color: item.color }}>{item.val}</span>
                </div>
                <span className="font-sans text-[10px] text-[#536B84]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-sans text-[11px] text-[#536B84]">
        Pitch → elevator · Roll → ailerons · Yaw → rudder · Coordinated turns use all three axes simultaneously
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
          {value}{unit}
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
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[9px] text-[#536B84]">{min}{unit}</span>
        <span className="font-mono text-[9px] text-[#536B84]">0°</span>
        <span className="font-mono text-[9px] text-[#536B84]">{max}{unit}</span>
      </div>
    </div>
  );
}
