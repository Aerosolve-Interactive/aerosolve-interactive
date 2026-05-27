import Link from "next/link";
import type { Lesson } from "@/data/lessons";
import { AppIcon } from "@/components/ui/AppIcon";
import Badge from "@/components/ui/Badge";

interface LessonCardProps {
  lesson: Lesson;
  unitSlug: string;
}

export default function LessonCard({ lesson, unitSlug }: LessonCardProps) {
  const isPublished = lesson.status === "published";
  const href = `/learn/${unitSlug}/${lesson.slug}`;

  const card = (
    <article
      className={[
        "group rounded-[24px] border p-5 transition-all duration-300 md:p-6",
        isPublished
          ? "premium-panel card-hover"
          : "border-white/8 bg-white/[0.03] opacity-75",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            {String(lesson.order).padStart(2, "0")}
          </span>
          <div>
            <Badge tone={isPublished ? "green" : "neutral"}>
              {isPublished ? "Published" : "Coming soon"}
            </Badge>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              {lesson.duration}
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Quiz
          </span>
          <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Activity
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.03em] text-slate-50">
          {lesson.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {lesson.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Learning path module
        </span>
        {isPublished ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-transform group-hover:translate-x-1">
            Open lesson
            <AppIcon name="spark" className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span className="text-sm text-slate-500">In production</span>
        )}
      </div>
    </article>
  );

  return isPublished ? <Link href={href}>{card}</Link> : card;
}
