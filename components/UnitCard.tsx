import Link from "next/link";
import type { Unit } from "@/data/units";
import { AppIcon } from "@/components/ui/AppIcon";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { getDifficultyTone, getUnitIcon } from "@/lib/visuals";

interface UnitCardProps {
  unit: Unit;
  publishedCount: number;
}

export default function UnitCard({ unit, publishedCount }: UnitCardProps) {
  const difficultyTone = getDifficultyTone(unit.difficulty);
  const progressValue = publishedCount / unit.lessonCount;

  return (
    <Link href={`/learn/${unit.slug}`} className="group block h-full">
      <article className="premium-panel card-hover h-full rounded-[28px] p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <IconBadge tone="cyan">
              <AppIcon name={getUnitIcon(unit.slug)} />
            </IconBadge>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Unit {String(unit.lessonCount).padStart(2, "0")}
              </p>
              <Badge tone={difficultyTone} className="mt-2">
                {unit.difficulty}
              </Badge>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            {unit.estimatedHours} hrs
          </span>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-50 transition-colors group-hover:text-white">
            {unit.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-cyan-300/90">{unit.tagline}</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">{unit.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {unit.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-7 space-y-4 border-t border-white/10 pt-5">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Lessons</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-50">
                {publishedCount}/{unit.lessonCount}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Path</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-50">
                0%
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">CTA</p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-transform group-hover:translate-x-1">
                Explore unit
                <AppIcon name="spark" className="h-3.5 w-3.5" />
              </p>
            </div>
          </div>

          <ProgressBar value={progressValue} max={1} label="Published" />
        </div>
      </article>
    </Link>
  );
}
