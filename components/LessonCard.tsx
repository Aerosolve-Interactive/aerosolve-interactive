import Link from "next/link";
import type { Lesson } from "@/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
  unitSlug: string;
}

export default function LessonCard({ lesson, unitSlug }: LessonCardProps) {
  const isPublished = lesson.status === "published";

  const cardContent = (
    <div
      className={[
        "relative rounded-xl border p-5 transition-all duration-200",
        isPublished
          ? "border-[#1C2A3E] bg-[#0E1520] hover:border-[#4FC3F7]/40 hover:bg-[#0E1520] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(79,195,247,0.08)] cursor-pointer"
          : "border-[#1C2A3E] bg-[#0B1018] cursor-default opacity-70",
      ].join(" ")}
    >
      {/* Status badge */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={[
            "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md",
            isPublished
              ? "bg-[#4FC3F7]/10 text-[#4FC3F7]"
              : "bg-[#1C2A3E] text-[#536B84]",
          ].join(" ")}
        >
          {isPublished ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] inline-block" />
              Available
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#536B84] inline-block" />
              Coming Soon
            </>
          )}
        </span>
        <span className="font-mono text-[10px] text-[#536B84]">
          {lesson.duration}
        </span>
      </div>

      {/* Lesson number + title */}
      <div className="flex items-start gap-3">
        <span className="shrink-0 font-mono text-[11px] text-[#536B84] mt-0.5 w-5 text-right">
          {String(lesson.order).padStart(2, "0")}
        </span>
        <div>
          <h3
            className={[
              "font-display font-bold text-base leading-tight tracking-[-0.02em] mb-1",
              isPublished ? "text-white" : "text-[#8FA3BC]",
            ].join(" ")}
          >
            {lesson.title}
          </h3>
          {isPublished && lesson.description && (
            <p className="font-sans text-xs text-[#536B84] leading-relaxed line-clamp-2">
              {lesson.description}
            </p>
          )}
          {!isPublished && (
            <p className="font-sans text-xs text-[#536B84] leading-relaxed">
              {lesson.description}
            </p>
          )}
        </div>
      </div>

      {/* Read arrow for published */}
      {isPublished && (
        <div className="flex justify-end mt-4">
          <span className="font-mono text-[11px] text-[#4FC3F7] flex items-center gap-1">
            Read lesson
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  if (isPublished) {
    return (
      <Link href={`/learn/${unitSlug}/${lesson.slug}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
