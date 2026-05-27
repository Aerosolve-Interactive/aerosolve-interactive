import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LessonCard from "@/components/LessonCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { AppIcon } from "@/components/ui/AppIcon";
import { units, getUnitBySlug } from "@/data/units";
import { getLessonsByUnit } from "@/data/lessons";
import { getDifficultyTone, getUnitIcon } from "@/lib/visuals";

export function generateStaticParams() {
  return units.map((unit) => ({ unitSlug: unit.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ unitSlug: string }>;
}) {
  const { unitSlug } = await params;
  const unit = getUnitBySlug(unitSlug);
  if (!unit) return {};

  return {
    title: `${unit.title} — AeroSolve Interactive`,
    description: unit.description,
  };
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unitSlug: string }>;
}) {
  const { unitSlug } = await params;
  const unit = getUnitBySlug(unitSlug);
  if (!unit) notFound();

  const unitLessons = getLessonsByUnit(unitSlug);
  const publishedCount = unitLessons.filter((lesson) => lesson.status === "published").length;
  const difficultyTone = getDifficultyTone(unit.difficulty);

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <Link href="/learn" className="transition-colors hover:text-slate-200">
              Learn
            </Link>
            <span>/</span>
            <span className="text-slate-300">{unit.title}</span>
          </div>
        </div>

        <section className="section-shell border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Badge tone={difficultyTone}>Unit module</Badge>
              <div className="mt-6 flex items-center gap-4">
                <IconBadge tone="cyan" className="h-14 w-14">
                  <AppIcon name={getUnitIcon(unit.slug)} className="h-5 w-5" />
                </IconBadge>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {unit.tagline}
                  </p>
                  <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-slate-50 md:text-5xl">
                    {unit.title}
                  </h1>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {unit.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {unit.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <aside className="premium-panel rounded-[28px] p-6 lg:sticky lg:top-28">
              <p className="eyebrow">Unit summary</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Lessons
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                    {publishedCount}/{unit.lessonCount}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Difficulty
                  </p>
                  <div className="mt-2">
                    <Badge tone={difficultyTone}>{unit.difficulty}</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                    {unit.estimatedHours}h
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <ProgressBar value={publishedCount} max={unit.lessonCount} label="Published path" />
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Skills learned
                </p>
                <ul className="mt-4 space-y-3">
                  {unit.topics.slice(0, 4).map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <AppIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Learning Path</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Five guided modules in sequence.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Published modules are fully accessible today. Future lessons, if any,
              remain visible with a clean in-production state rather than broken links.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {unitLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} unitSlug={unitSlug} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
