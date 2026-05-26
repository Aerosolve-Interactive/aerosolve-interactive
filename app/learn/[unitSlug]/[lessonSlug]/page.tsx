import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizCard from "@/components/QuizCard";
import SimulationEmbed from "@/components/SimulationEmbed";
import { units } from "@/data/units";
import { lessons, getLessonBySlug, getLessonsByUnit } from "@/data/lessons";

const SIMULATION_SLUGS = new Set([
  'the-four-forces-of-flight',
  'angle-of-attack',
  'lift-and-drag',
  'pitch-roll-and-yaw',
  'thrust-and-exhaust',
  'trusses-and-bracing',
]);

export function generateStaticParams() {
  return lessons
    .filter((l) => l.status === "published")
    .map((l) => ({
      unitSlug: l.unitSlug,
      lessonSlug: l.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ unitSlug: string; lessonSlug: string }>;
}) {
  const { unitSlug, lessonSlug } = await params;
  const lesson = getLessonBySlug(unitSlug, lessonSlug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — AeroSolve Interactive`,
    description: lesson.description,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ unitSlug: string; lessonSlug: string }>;
}) {
  const { unitSlug, lessonSlug } = await params;
  const lesson = getLessonBySlug(unitSlug, lessonSlug);
  if (!lesson || lesson.status !== "published") notFound();

  const unit = units.find((u) => u.slug === unitSlug);
  const unitLessons = getLessonsByUnit(unitSlug);
  const currentIndex = unitLessons.findIndex((l) => l.slug === lessonSlug);
  const prevLesson = currentIndex > 0 ? unitLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < unitLessons.length - 1 ? unitLessons[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-[#1C2A3E] bg-[#080C12]">
          <div className="max-w-4xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#536B84]">
              <Link href="/learn" className="hover:text-[#8FA3BC] transition-colors">
                Learn
              </Link>
              <span>/</span>
              <Link href={`/learn/${unitSlug}`} className="hover:text-[#8FA3BC] transition-colors">
                {unit?.title ?? unitSlug}
              </Link>
              <span>/</span>
              <span className="text-[#8FA3BC] truncate max-w-[200px]">{lesson.title}</span>
            </div>
          </div>
        </div>

        {/* Lesson header */}
        <div className="border-b border-[#1C2A3E] bg-[#0E1520]">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] px-2 py-1 rounded-md bg-[#080C12] border border-[#1C2A3E]">
                Lesson {lesson.order} of {unitLessons.length}
              </span>
              <span className="font-mono text-[10px] text-[#536B84]">{lesson.duration}</span>
            </div>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              {lesson.title}
            </h1>
            <p className="font-sans text-[#8FA3BC] text-lg leading-relaxed max-w-2xl">
              {lesson.description}
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Objectives */}
          {lesson.objectives && lesson.objectives.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Learning Objectives
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6">
                <ul className="space-y-3">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 font-mono text-[10px] w-5 h-5 rounded-md bg-[#4FC3F7]/10 text-[#4FC3F7] flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-sans text-sm text-[#8FA3BC] leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Sections */}
          {lesson.sections && lesson.sections.length > 0 && (
            <section className="lesson-prose space-y-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] !mt-0">
                Lesson Content
              </p>
              {lesson.sections.map((section, i) => (
                <div key={i}>
                  <h2>{section.heading}</h2>
                  {section.body.split("\n\n").map((para, j) => {
                    if (para.startsWith("**") && para.includes("**:")) {
                      return (
                        <p key={j} dangerouslySetInnerHTML={{
                          __html: para
                            .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                            .replace(/\n/g, "<br/>")
                        }} />
                      );
                    }
                    if (para.match(/^\d\.\s/)) {
                      const items = para.split("\n").filter(Boolean);
                      return (
                        <ol key={j} style={{ listStyle: "decimal", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                          {items.map((item, k) => (
                            <li key={k} className="text-[#8FA3BC] font-sans text-sm leading-relaxed mb-1"
                              dangerouslySetInnerHTML={{
                                __html: item.replace(/^\d+\.\s/, "").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                              }} />
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={j} dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                          .replace(/\n/g, "<br/>")
                      }} />
                    );
                  })}
                </div>
              ))}
            </section>
          )}

          {/* Real-world example */}
          {lesson.realWorldExample && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Real-World Example
              </p>
              <div className="rounded-xl border border-[#F4C842]/20 bg-[#F4C842]/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C842] inline-block" />
                  <h3 className="font-display font-bold text-[#F4C842] text-base tracking-[-0.02em]">
                    {lesson.realWorldExample.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {lesson.realWorldExample.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="font-sans text-sm text-[#8FA3BC] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*([^*]+)\*\*/g, "<strong style='color:#b8cfe0'>$1</strong>")
                          .replace(/\n/g, "<br/>")
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Key terms */}
          {lesson.keyTerms && lesson.keyTerms.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Key Terms
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lesson.keyTerms.map((kt) => (
                  <div key={kt.term} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-4">
                    <p className="font-mono text-xs text-[#4FC3F7] mb-1">{kt.term}</p>
                    <p className="font-sans text-xs text-[#536B84] leading-relaxed">{kt.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Simulation — Try It */}
          {SIMULATION_SLUGS.has(lessonSlug) && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Try It — Interactive Simulation
              </p>
              <SimulationEmbed lessonSlug={lessonSlug} />
              <div className="mt-3 flex justify-end">
                <Link
                  href={`/simulations/${
                    lessonSlug === 'the-four-forces-of-flight' ? 'four-forces' :
                    lessonSlug === 'angle-of-attack' ? 'airfoil' :
                    lessonSlug === 'lift-and-drag' ? 'drag' :
                    lessonSlug === 'pitch-roll-and-yaw' ? 'attitude' :
                    lessonSlug === 'thrust-and-exhaust' ? 'rocket-launch' :
                    'structures'
                  }`}
                  className="font-mono text-[11px] text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors flex items-center gap-1"
                >
                  Open full simulation
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </section>
          )}

          {/* Quiz */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Knowledge Check
              </p>
              <QuizCard questions={lesson.quiz} />
            </section>
          )}

          {/* Activity */}
          {lesson.activity && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Hands-On Activity
              </p>
              <div className="rounded-xl border border-[#FF6B5B]/20 bg-[#FF6B5B]/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B5B] inline-block" />
                  <h3 className="font-display font-bold text-[#FF6B5B] text-base tracking-[-0.02em]">
                    {lesson.activity.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed mb-5">
                  {lesson.activity.description}
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-2">
                      Materials Needed
                    </p>
                    <ul className="space-y-1.5">
                      {lesson.activity.materials.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-xs text-[#8FA3BC]">
                          <span className="w-1 h-1 rounded-full bg-[#536B84] mt-1.5 inline-block shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-2">
                      Steps
                    </p>
                    <ol className="space-y-2">
                      {lesson.activity.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-[#8FA3BC] leading-relaxed">
                          <span className="shrink-0 font-mono text-[10px] w-4 h-4 rounded bg-[#080C12] border border-[#1C2A3E] text-[#536B84] flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Lesson navigation */}
          <div className="border-t border-[#1C2A3E] pt-8 flex items-center justify-between gap-4">
            {prevLesson && prevLesson.status === "published" ? (
              <Link
                href={`/learn/${unitSlug}/${prevLesson.slug}`}
                className="flex items-center gap-2 font-mono text-sm text-[#536B84] hover:text-[#4FC3F7] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Prev: {prevLesson.title}
              </Link>
            ) : (
              <Link
                href={`/learn/${unitSlug}`}
                className="flex items-center gap-2 font-mono text-sm text-[#536B84] hover:text-[#4FC3F7] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to {unit?.title}
              </Link>
            )}

            {nextLesson && nextLesson.status === "published" ? (
              <Link
                href={`/learn/${unitSlug}/${nextLesson.slug}`}
                className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors"
              >
                Next: {nextLesson.title}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : nextLesson ? (
              <span className="font-mono text-sm text-[#536B84]">
                Next: {nextLesson.title} (Coming Soon)
              </span>
            ) : (
              <Link
                href={`/learn/${unitSlug}`}
                className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors"
              >
                Back to unit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
