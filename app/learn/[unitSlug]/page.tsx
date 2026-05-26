import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LessonCard from "@/components/LessonCard";
import { units, getUnitBySlug } from "@/data/units";
import { getLessonsByUnit } from "@/data/lessons";

export function generateStaticParams() {
  return units.map((u) => ({ unitSlug: u.slug }));
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
  const publishedCount = unitLessons.filter((l) => l.status === "published").length;

  const difficultyColors: Record<string, string> = {
    Beginner: "#4FC3F7",
    Intermediate: "#F4C842",
    Advanced: "#FF6B5B",
  };
  const diffColor = difficultyColors[unit.difficulty] ?? "#4FC3F7";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Breadcrumb */}
        <div className="border-b border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#536B84]">
              <Link href="/learn" className="hover:text-[#8FA3BC] transition-colors">
                Learn
              </Link>
              <span>/</span>
              <span className="text-[#8FA3BC]">{unit.title}</span>
            </div>
          </div>
        </div>

        {/* Unit header */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-[#0E1520] border border-[#1C2A3E] flex items-center justify-center text-2xl">
                  {unit.icon}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md"
                  style={{ color: diffColor, backgroundColor: `${diffColor}15` }}
                >
                  {unit.difficulty}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-2">
                {unit.title}
              </h1>
              <p className="font-sans text-sm text-[#4FC3F7] mb-4 font-medium">
                {unit.tagline}
              </p>
              <p className="font-sans text-[#8FA3BC] leading-relaxed">
                {unit.description}
              </p>
            </div>

            {/* Unit meta */}
            <div className="shrink-0 rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 min-w-[200px]">
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">
                    Progress
                  </p>
                  <p className="font-mono text-xl text-white">
                    {publishedCount}
                    <span className="text-[#536B84] text-sm">/{unit.lessonCount} lessons</span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">
                    Est. Time
                  </p>
                  <p className="font-mono text-sm text-white">{unit.estimatedHours} hours</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-2">
                    Topics
                  </p>
                  <ul className="space-y-1">
                    {unit.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#1C2A3E] inline-block" />
                        <span className="font-sans text-xs text-[#536B84]">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons list */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-6">
            Lessons
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
