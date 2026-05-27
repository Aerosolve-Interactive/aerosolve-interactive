import Link from "next/link";
import type { Project } from "@/data/projects";
import { AppIcon } from "@/components/ui/AppIcon";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { getDifficultyTone } from "@/lib/visuals";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const difficultyTone = getDifficultyTone(project.difficulty);

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="premium-panel card-hover h-full rounded-[28px] p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <IconBadge tone={project.difficulty === "Intermediate" ? "gold" : "cyan"}>
              <AppIcon
                name={project.tags.some((tag) => tag.toLowerCase().includes("arduino")) ? "cpu" : "flask"}
              />
            </IconBadge>
            <div>
              <Badge tone={difficultyTone}>{project.difficulty}</Badge>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {project.time}
              </p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            {project.tags.length} tags
          </span>
        </div>

        <div className="mt-7">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-50 transition-colors group-hover:text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Materials preview
            </p>
            <ul className="mt-3 space-y-2">
              {project.materials.slice(0, 3).map((material) => (
                <li key={material} className="text-sm text-slate-300">
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Skills learned
            </p>
            <ul className="mt-3 space-y-2">
              {project.skills.slice(0, 3).map((skill) => (
                <li key={skill} className="text-sm text-slate-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Data-driven project
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-transform group-hover:translate-x-1">
            View project
            <AppIcon name="spark" className="h-3.5 w-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
