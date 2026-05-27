import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizCard from "@/components/QuizCard";
import SimulationEmbed from "@/components/SimulationEmbed";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { AppIcon } from "@/components/ui/AppIcon";
import { units } from "@/data/units";
import { lessons, getLessonBySlug, getLessonsByUnit } from "@/data/lessons";
import { getDifficultyTone, getUnitIcon } from "@/lib/visuals";

const SIMULATION_ROUTES: Record<string, string> = {
  "the-four-forces-of-flight": "/simulations/four-forces",
  "what-is-an-airfoil": "/simulations/airfoil",
  "newtons-third-law-and-thrust": "/simulations/rocket-launch",
  "pitch-roll-and-yaw": "/simulations/attitude",
  "strength-to-weight-ratio": "/simulations/structures",
  "lift-and-drag": "/simulations/drag",
};

export function generateStaticParams() {
  return lessons
    .filter((lesson) => lesson.status === "published")
    .map((lesson) => ({
      unitSlug: lesson.unitSlug,
      lessonSlug: lesson.slug,
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

  const unit = units.find((entry) => entry.slug === unitSlug);
  const unitLessons = getLessonsByUnit(unitSlug);
  const currentIndex = unitLessons.findIndex((entry) => entry.slug === lessonSlug);
  const prevLesson = currentIndex > 0 ? unitLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < unitLessons.length - 1 ? unitLessons[currentIndex + 1] : null;

  const difficultyTone = unit ? getDifficultyTone(unit.difficulty) : "cyan";
  const sectionOutline = lesson.sections?.map((section) => section.heading) ?? [];
  const lessonHasSimulation = lessonSlug in SIMULATION_ROUTES;

  function renderSectionBody(body: string) {
    return body.split("\n\n").map((paragraph, paragraphIndex) => {
      if (paragraph.match(/^\d\.\s/)) {
        const items = paragraph.split("\n").filter(Boolean);
        return (
          <ol
            key={paragraphIndex}
            className="mb-5 list-decimal space-y-2 pl-6 text-slate-300"
          >
            {items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="leading-7"
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^\d+\.\s/, "")
                    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </ol>
        );
      }

      return (
        <p
          key={paragraphIndex}
          dangerouslySetInnerHTML={{
            __html: paragraph
              .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
              .replace(/\n/g, "<br/>"),
          }}
        />
      );
    });
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <div className="border-b border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <Link href="/learn" className="transition-colors hover:text-slate-200">
              Learn
            </Link>
            <span>/</span>
            <Link href={`/learn/${unitSlug}`} className="transition-colors hover:text-slate-200">
              {unit?.title ?? unitSlug}
            </Link>
            <span>/</span>
            <span className="truncate text-slate-300">{lesson.title}</span>
          </div>
        </div>

        <section className="section-shell border-b border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={difficultyTone}>Lesson module</Badge>
                <Badge tone="neutral">
                  Lesson {lesson.order} of {unitLessons.length}
                </Badge>
                <Badge tone="blue">{lesson.duration}</Badge>
              </div>
              <div className="mt-6 flex items-center gap-4">
                {unit ? (
                  <IconBadge tone="cyan" className="h-14 w-14">
                    <AppIcon name={getUnitIcon(unit.slug)} className="h-5 w-5" />
                  </IconBadge>
                ) : null}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {unit?.title ?? "Learning path"}
                  </p>
                  <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-slate-50 md:text-5xl">
                    {lesson.title}
                  </h1>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {lesson.description}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-12">
            {lesson.objectives && lesson.objectives.length > 0 ? (
              <section>
                <div className="mb-5 flex items-center justify-between">
                  <p className="eyebrow">Learning Objectives</p>
                  <Badge tone="green">Module ready</Badge>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {lesson.objectives.map((objective, index) => (
                    <article key={objective} className="premium-panel rounded-[24px] p-5">
                      <div className="flex items-center gap-3">
                        <IconBadge tone="cyan" className="h-10 w-10 rounded-xl">
                          <AppIcon name="check" className="h-4 w-4" />
                        </IconBadge>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{objective}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {lesson.sections && lesson.sections.length > 0 ? (
              <section className="lesson-prose">
                <p className="eyebrow mb-5">Lesson Content</p>
                <div className="space-y-6">
                  {lesson.sections.map((section) => (
                    <article key={section.heading} className="premium-panel rounded-[28px] p-6 md:p-7">
                      <h2>{section.heading}</h2>
                      {renderSectionBody(section.body)}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {lesson.realWorldExample ? (
              <section>
                <p className="eyebrow mb-5">Mission Example</p>
                <article className="rounded-[28px] border border-amber-400/18 bg-amber-400/[0.07] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.22)] md:p-7">
                  <div className="flex items-start gap-4">
                    <IconBadge tone="gold">
                      <AppIcon name="satellite" />
                    </IconBadge>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                        {lesson.realWorldExample.title}
                      </h3>
                      <div className="mt-4 space-y-4">
                        {lesson.realWorldExample.body.split("\n\n").map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-sm leading-7 text-slate-200"
                            dangerouslySetInnerHTML={{
                              __html: paragraph
                                .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                                .replace(/\n/g, "<br/>"),
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            ) : null}

            {lesson.keyTerms && lesson.keyTerms.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Key Terms</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {lesson.keyTerms.map((term) => (
                    <article key={term.term} className="premium-panel rounded-[24px] p-5">
                      <div className="flex items-center gap-3">
                        <IconBadge tone="blue" className="h-10 w-10 rounded-xl">
                          <AppIcon name="layers" className="h-4 w-4" />
                        </IconBadge>
                        <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                          {term.term}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{term.definition}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {lessonHasSimulation ? (
              <section>
                <p className="eyebrow mb-5">Try It — Interactive Simulation</p>
                <div className="premium-panel-strong rounded-[28px] p-4 md:p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Adjust parameters to see real-time changes
                  </p>
                  <div className="mt-4">
                    <SimulationEmbed lessonSlug={lessonSlug} />
                  </div>
                  {SIMULATION_ROUTES[lessonSlug] ? (
                    <div className="mt-4 flex justify-end">
                      <Link
                        href={SIMULATION_ROUTES[lessonSlug]}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                      >
                        Open full simulator
                        <AppIcon name="spark" className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            {lesson.quiz && lesson.quiz.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Quick Check</p>
                <QuizCard questions={lesson.quiz} />
              </section>
            ) : null}

            {lesson.activity ? (
              <section>
                <p className="eyebrow mb-5">Engineering Challenge</p>
                <article className="rounded-[28px] border border-orange-400/18 bg-orange-400/[0.07] p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <IconBadge tone="gold">
                      <AppIcon name="wrench" />
                    </IconBadge>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                        {lesson.activity.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        {lesson.activity.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    <div className="premium-panel rounded-[24px] p-5">
                      <div className="flex items-center gap-3">
                        <IconBadge tone="blue" className="h-10 w-10 rounded-xl">
                          <AppIcon name="boxes" className="h-4 w-4" />
                        </IconBadge>
                        <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                          Materials
                        </p>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {lesson.activity.materials.map((material) => (
                          <li key={material} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                            <AppIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="premium-panel rounded-[24px] p-5">
                      <div className="flex items-center gap-3">
                        <IconBadge tone="cyan" className="h-10 w-10 rounded-xl">
                          <AppIcon name="timeline" className="h-4 w-4" />
                        </IconBadge>
                        <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                          Build-Test-Improve
                        </p>
                      </div>
                      <ol className="mt-4 space-y-4">
                        {lesson.activity.steps.map((step, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                              {index + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {lesson.activity.reflectionQuestions && lesson.activity.reflectionQuestions.length > 0 ? (
                    <div className="mt-4 premium-panel rounded-[24px] p-5">
                      <div className="flex items-center gap-3">
                        <IconBadge tone="indigo" className="h-10 w-10 rounded-xl">
                          <AppIcon name="brain" className="h-4 w-4" />
                        </IconBadge>
                        <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                          Reflection Questions
                        </p>
                      </div>
                      <ul className="mt-4 space-y-4">
                        {lesson.activity.reflectionQuestions.map((question, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                              0{index + 1}
                            </span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </section>
            ) : null}

            <section className="premium-panel-strong rounded-[28px] p-6 md:p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow mb-3">Next Step</p>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    Continue the learning path.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    Move to the next lesson or return to the unit overview to pick another
                    module. The curriculum is designed to keep momentum without losing context.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {prevLesson && prevLesson.status === "published" ? (
                    <Link
                      href={`/learn/${unitSlug}/${prevLesson.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200"
                    >
                      <AppIcon name="timeline" className="h-3.5 w-3.5" />
                      Previous
                    </Link>
                  ) : (
                    <Link
                      href={`/learn/${unitSlug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200"
                    >
                      <AppIcon name="layers" className="h-3.5 w-3.5" />
                      Unit overview
                    </Link>
                  )}

                  {nextLesson && nextLesson.status === "published" ? (
                    <Link
                      href={`/learn/${unitSlug}/${nextLesson.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_14px_32px_rgba(37,99,235,0.24)]"
                    >
                      Next lesson
                      <AppIcon name="spark" className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <Link
                      href={`/learn/${unitSlug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_14px_32px_rgba(37,99,235,0.24)]"
                    >
                      Back to unit
                      <AppIcon name="spark" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Lesson Summary</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Progress
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Lesson {lesson.order} of {unitLessons.length}
                  </p>
                </div>
                <ProgressBar value={lesson.order} max={unitLessons.length} label="Path position" />
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Duration
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {lesson.duration}
                  </p>
                </div>
              </div>
            </div>

            {sectionOutline.length > 0 ? (
              <div className="premium-panel rounded-[28px] p-5">
                <p className="eyebrow">Lesson Outline</p>
                <ul className="mt-5 space-y-3">
                  {sectionOutline.map((heading, index) => (
                    <li key={heading} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        0{index + 1}
                      </span>
                      {heading}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Module Type</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <AppIcon name="book" className="h-4 w-4 text-cyan-300" />
                  Written lesson
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <AppIcon name="clipboard" className="h-4 w-4 text-cyan-300" />
                  Quick check
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <AppIcon name="wrench" className="h-4 w-4 text-cyan-300" />
                  Engineering challenge
                </div>
                {lessonHasSimulation ? (
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <AppIcon name="activity" className="h-4 w-4 text-cyan-300" />
                    Interactive simulator
                  </div>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
