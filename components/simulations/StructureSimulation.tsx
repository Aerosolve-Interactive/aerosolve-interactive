'use client';

import { useState, useMemo } from 'react';

interface Node { x: number; y: number; fixed: boolean }
interface Member { a: number; b: number }

// Simple Pratt truss — top chord, bottom chord, verticals, diagonals
const NODES: Node[] = [
  { x: 60,  y: 80, fixed: true  },  // 0 left support
  { x: 140, y: 80, fixed: false },  // 1
  { x: 220, y: 80, fixed: false },  // 2
  { x: 300, y: 80, fixed: false },  // 3
  { x: 380, y: 80, fixed: true  },  // 4 right support (roller)
  { x: 60,  y: 150, fixed: false }, // 5 top left
  { x: 140, y: 150, fixed: false }, // 6
  { x: 220, y: 150, fixed: false }, // 7 apex
  { x: 300, y: 150, fixed: false }, // 8
  { x: 380, y: 150, fixed: false }, // 9 top right
];

const MEMBERS: Member[] = [
  // Bottom chord
  { a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 },
  // Top chord
  { a: 5, b: 6 }, { a: 6, b: 7 }, { a: 7, b: 8 }, { a: 8, b: 9 },
  // Verticals
  { a: 0, b: 5 }, { a: 1, b: 6 }, { a: 2, b: 7 }, { a: 3, b: 8 }, { a: 4, b: 9 },
  // Diagonals (Pratt — inward from load points)
  { a: 5, b: 1 }, { a: 6, b: 2 }, { a: 7, b: 3 }, { a: 8, b: 4 },
];

// Simplified force analysis: assume simply supported, uniform load
// For a Pratt truss this gives reasonable approximations
function analyzeTruss(load: number): number[] {
  const span = 320; // pixels between supports
  const h = 70;    // truss height in pixels
  const n = MEMBERS.length;
  const forces: number[] = new Array(n).fill(0);

  // Reaction at each support = load/2 (symmetric)
  const R = load / 2;

  // Approximate member forces using method of sections logic
  // Bottom chord: in tension, max at midspan
  // Top chord: in compression, max at midspan
  // Verticals: small
  // Diagonals: shear carriers

  MEMBERS.forEach((m, i) => {
    const A = NODES[m.a];
    const B = NODES[m.b];
    const L = Math.hypot(B.x - A.x, B.y - A.y);
    const isBottomChord = A.y < 100 && B.y < 100;
    const isTopChord = A.y >= 100 && B.y >= 100;
    const isVertical = Math.abs(A.x - B.x) < 5;
    const isDiagonal = !isBottomChord && !isTopChord && !isVertical;

    const xMid = (A.x + B.x) / 2;
    // Distance from nearer support (normalized 0..1)
    const posFromLeft = (xMid - 60) / span;
    const shear = Math.abs(R - load * posFromLeft);

    if (isBottomChord) {
      // Max tension at midspan panel
      const moment = R * (xMid - 60) - (load / span) * (xMid - 60) * (xMid - 60) / 2;
      forces[i] = moment / h; // positive = tension
    } else if (isTopChord) {
      const moment = R * (xMid - 60) - (load / span) * (xMid - 60) * (xMid - 60) / 2;
      forces[i] = -moment / h; // negative = compression
    } else if (isVertical) {
      forces[i] = shear * 0.3;
    } else if (isDiagonal) {
      forces[i] = -shear * (L / h); // compression in Pratt diagonals
    }
  });

  return forces;
}

export default function StructureSimulation() {
  const [load, setLoad] = useState(5000);   // lbs, uniform distributed
  const [section, setSection] = useState<'I-beam' | 'tube' | 'solid'>('I-beam');

  const forces = useMemo(() => analyzeTruss(load), [load]);

  const maxForce = Math.max(...forces.map(Math.abs), 1);

  // Section properties
  const sectionProps = {
    'I-beam': { area: 8.24, I: 290, desc: 'Steel W8×31 I-beam', color: '#4FC3F7' },
    'tube':   { area: 5.46, I: 61,  desc: '3" diameter thin-wall tube', color: '#4ade80' },
    'solid':  { area: 12.56, I: 79,  desc: '4" solid round bar', color: '#F4C842' },
  };

  const props = sectionProps[section];

  // Max stress at critical member (max force / area) — in ksi
  const maxMemberForce = Math.max(...forces.map(Math.abs));
  const maxStress = maxMemberForce / (props.area * 1000); // convert area in^2 to proper units
  const yieldStress = 36; // ksi, A36 steel
  const safetyFactor = yieldStress / Math.max(maxStress, 0.001);

  const isFailing = safetyFactor < 1.5;

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-1">Interactive</p>
          <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">Pratt Truss Analysis</h3>
          <p className="font-sans text-xs text-[#536B84] mt-1">Tension = blue · Compression = red · Width = force magnitude</p>
        </div>
        {isFailing && (
          <span className="px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-widest bg-[#FF6B5B]/15 border border-[#FF6B5B]/40 text-[#FF6B5B]">
            ⚠ Low Safety Factor
          </span>
        )}
      </div>

      {/* SVG Truss */}
      <div className="overflow-x-auto">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <pattern id="st-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(79,195,247,0.04)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="440" height="220" fill="url(#st-grid)" rx="8" />

          {/* Load arrows — distributed */}
          {[140, 180, 220, 260, 300].map((x) => (
            <g key={x}>
              <line x1={x} y1={150} x2={x} y2={165} stroke="#F4C842" strokeWidth="1" />
              <polygon points={`${x},170 ${x - 4},160 ${x + 4},160`} fill="#F4C842" />
            </g>
          ))}
          <line x1={120} y1={150} x2={320} y2={150} stroke="#F4C842" strokeWidth="1" opacity="0.5" />
          <text x="220" y="148" fill="#F4C842" fontSize="9" fontFamily="monospace" textAnchor="middle">
            {load.toLocaleString()} lb distributed
          </text>

          {/* Members */}
          {MEMBERS.map((m, i) => {
            const A = NODES[m.a];
            const B = NODES[m.b];
            const force = forces[i];
            const isTension = force >= 0;
            const color = isTension ? '#4FC3F7' : '#FF6B5B';
            const strokeW = Math.max(1, Math.min(5, (Math.abs(force) / maxForce) * 5));
            return (
              <line
                key={i}
                x1={A.x} y1={A.y}
                x2={B.x} y2={B.y}
                stroke={color}
                strokeWidth={strokeW}
                opacity={0.85}
              />
            );
          })}

          {/* Nodes */}
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x} cy={n.y} r={n.fixed ? 5 : 3.5}
              fill={n.fixed ? '#F4C842' : '#1C2A3E'}
              stroke={n.fixed ? '#F4C842' : '#4FC3F7'}
              strokeWidth="1.5"
            />
          ))}

          {/* Support symbols */}
          <polygon points="60,85 50,100 70,100" fill="#F4C842" opacity="0.6" />
          <line x1="42" y1="103" x2="78" y2="103" stroke="#F4C842" strokeWidth="1" />
          <polygon points="380,85 370,100 390,100" fill="#536B84" opacity="0.6" />
          <line x1="362" y1="103" x2="398" y2="103" stroke="#536B84" strokeWidth="1" />

          {/* Labels */}
          <text x="55" y="115" fill="#F4C842" fontSize="9" fontFamily="monospace" textAnchor="middle">Pin</text>
          <text x="385" y="115" fill="#536B84" fontSize="9" fontFamily="monospace" textAnchor="middle">Roller</text>

          {/* Reaction arrows */}
          <line x1="60" y1="100" x2="60" y2="85" stroke="#F4C842" strokeWidth="2" />
          <polygon points="60,80 55,90 65,90" fill="#F4C842" />
          <text x="40" y="78" fill="#F4C842" fontSize="9" fontFamily="monospace">{(load / 2 / 1000).toFixed(1)}k</text>

          <line x1="380" y1="100" x2="380" y2="85" stroke="#536B84" strokeWidth="2" />
          <polygon points="380,80 375,90 385,90" fill="#536B84" />
          <text x="385" y="78" fill="#536B84" fontSize="9" fontFamily="monospace">{(load / 2 / 1000).toFixed(1)}k</text>

          {/* Legend */}
          <rect x="145" y="190" width="20" height="2" fill="#4FC3F7" />
          <text x="168" y="196" fill="#4FC3F7" fontSize="9" fontFamily="monospace">Tension</text>
          <rect x="225" y="190" width="20" height="2" fill="#FF6B5B" />
          <text x="248" y="196" fill="#FF6B5B" fontSize="9" fontFamily="monospace">Compression</text>
          <circle cx="315" cy="191" r="3" fill="#F4C842" />
          <text x="321" y="196" fill="#F4C842" fontSize="9" fontFamily="monospace">Support</text>
        </svg>
      </div>

      {/* Controls */}
      <div className="space-y-5">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC]">Applied Load</span>
            <span className="font-mono text-sm font-bold text-[#F4C842]">{load.toLocaleString()} lb</span>
          </div>
          <input
            type="range" min={500} max={30000} step={500} value={load}
            onChange={(e) => setLoad(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #F4C842 0%, #F4C842 ${((load - 500) / 29500) * 100}%, #1C2A3E ${((load - 500) / 29500) * 100}%, #1C2A3E 100%)`,
            }}
          />
        </div>

        {/* Section selector */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#8FA3BC] mb-2">Member Cross-Section</p>
          <div className="flex gap-2">
            {(Object.keys(sectionProps) as Array<keyof typeof sectionProps>).map(s => (
              <button
                key={s}
                onClick={() => setSection(s)}
                className={`flex-1 px-3 py-2 rounded-lg border font-mono text-xs transition-colors ${section === s ? 'border-[#4FC3F7] bg-[#4FC3F7]/15 text-[#4FC3F7]' : 'border-[#1C2A3E] text-[#536B84] hover:border-[#4FC3F7]/40'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="font-sans text-[10px] text-[#536B84] mt-1">{props.desc}</p>
        </div>
      </div>

      {/* Stress readout */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#1C2A3E]">
        {[
          { label: 'Max Force', value: `${(maxMemberForce / 1000).toFixed(1)} kip`, color: maxMemberForce > 0 ? '#4FC3F7' : '#FF6B5B' },
          { label: 'Stress', value: `${maxStress.toFixed(2)} ksi`, color: maxStress > yieldStress * 0.8 ? '#FF6B5B' : '#4ade80' },
          { label: 'Safety Factor', value: safetyFactor < 99 ? `${safetyFactor.toFixed(1)}×` : '>99×', color: isFailing ? '#FF6B5B' : '#4ade80' },
        ].map(item => (
          <div key={item.label} className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">{item.label}</p>
            <p className="font-mono text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="font-sans text-[11px] text-[#536B84]">
        A36 steel · Fy = 36 ksi · Min safety factor = 1.5 for aerospace · Member width ∝ force magnitude
      </p>
    </div>
  );
}
