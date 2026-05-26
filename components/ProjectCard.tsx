import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const difficultyColors: Record<string, string> = {
  Beginner: "#4FC3F7",
  Intermediate: "#F4C842",
  Advanced: "#FF6B5B",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const diffColor = difficultyColors[project.difficulty] ?? "#4FC3F7";

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="card-hover rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md"
            style={{ color: diffColor, backgroundColor: `${diffColor}15` }}
          >
            {project.difficulty}
          </span>
          <span className="font-mono text-[10px] text-[#536B84]">
            {project.time}
          </span>
        </div>

        {/* Title + Description */}
        <h3 className="font-display font-bold text-white text-lg tracking-[-0.03em] leading-tight mb-2 group-hover:text-[#e2ecf4] transition-colors">
          {project.title}
        </h3>
        <p className="font-sans text-xs text-[#536B84] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-[#080C12] border border-[#1C2A3E] text-[#536B84]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-4 pt-4 border-t border-[#1C2A3E]">
          <span className="font-mono text-[11px] text-[#4FC3F7] flex items-center gap-1 group-hover:gap-2 transition-all">
            View Project
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
