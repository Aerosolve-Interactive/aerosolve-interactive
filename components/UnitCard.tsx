import Link from "next/link";
import type { Unit } from "@/data/units";

interface UnitCardProps {
  unit: Unit;
  publishedCount: number;
}

const difficultyColors: Record<string, string> = {
  Beginner: "#4FC3F7",
  Intermediate: "#F4C842",
  Advanced: "#FF6B5B",
};

export default function UnitCard({ unit, publishedCount }: UnitCardProps) {
  const diffColor = difficultyColors[unit.difficulty] ?? "#4FC3F7";

  return (
    <Link href={`/learn/${unit.slug}`} className="block group">
      <div className="card-hover rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 h-full flex flex-col">
        {/* Icon + difficulty */}
        <div className="flex items-center justify-between mb-5">
          <span className="w-10 h-10 rounded-lg bg-[#080C12] border border-[#1C2A3E] flex items-center justify-center text-xl">
            {unit.icon}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md"
            style={{
              color: diffColor,
              backgroundColor: `${diffColor}15`,
            }}
          >
            {unit.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-lg tracking-[-0.03em] leading-tight mb-1 group-hover:text-[#e2ecf4] transition-colors">
          {unit.title}
        </h3>
        <p className="font-sans text-[11px] text-[#536B84] mb-3">
          {unit.tagline}
        </p>
        <p className="font-sans text-xs text-[#536B84] leading-relaxed flex-1">
          {unit.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[#1C2A3E]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-0.5">
              Lessons
            </p>
            <p className="font-mono text-sm text-white">
              {publishedCount}
              <span className="text-[#536B84]">/{unit.lessonCount}</span>
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-0.5">
              Est. Time
            </p>
            <p className="font-mono text-sm text-white">{unit.estimatedHours}h</p>
          </div>
          <div className="ml-auto font-mono text-[11px] text-[#4FC3F7] flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
