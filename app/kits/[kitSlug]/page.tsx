import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { getKitBySlug, kits, kitTestingIdeas } from "@/data/kits";
import { getDifficultyTone, getKitIcon } from "@/lib/visuals";

export function generateStaticParams() {
  return kits.map((kit) => ({ kitSlug: kit.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kitSlug: string }>;
}) {
  const { kitSlug } = await params;
  const kit = getKitBySlug(kitSlug);

  if (!kit) return {};

  return {
    title: `${kit.title} - AeroKits`,
    description: kit.description,
  };
}

export default async function KitDetailPage({
  params,
}: {
  params: Promise<{ kitSlug: string }>;
}) {
  const { kitSlug } = await params;
  const kit = getKitBySlug(kitSlug);

  if (!kit) notFound();

  const difficultyTone = getDifficultyTone(kit.difficulty);
  const testingIdeas = kitTestingIdeas[kit.slug] ?? [];

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <div className="border-b border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <Link href="/kits" className="transition-colors hover:text-slate-200">
              Kits
            </Link>
            <span>/</span>
            <span className="truncate text-slate-300">{kit.title}</span>
          </div>
        </div>

        <section className="section-shell border-b border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14">
            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={difficultyTone}>{kit.difficulty}</Badge>
                <Badge tone="blue">Ages {kit.ageRange}</Badge>
                <Badge tone="neutral">{kit.estimatedTime}</Badge>
                <Badge tone="neutral">{kit.estimatedMaterialCost}</Badge>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <IconBadge tone={kit.difficulty === "Intermediate" ? "gold" : "cyan"} className="h-14 w-14">
                  <AppIcon name={getKitIcon(kit.slug)} className="h-5 w-5" />
                </IconBadge>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    AeroKits build guide
                  </p>
                  <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-slate-50 md:text-5xl">
                    {kit.title}
                  </h1>
                </div>
              </div>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                {kit.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {kit.concepts.map((concept) => (
                  <Badge key={concept} tone="cyan">
                    {concept}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/kits" className="btn-secondary px-5 py-3">
                  Back to Kits
                </Link>
                <a href="#" className="btn-primary px-5 py-3">
                  Print Guide
                  <AppIcon name="clipboard" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-12">
            <section>
              <p className="eyebrow mb-5">Objective</p>
              <div className="premium-panel-strong rounded-[28px] p-6 md:p-7">
                <p className="text-base leading-8 text-slate-200">{kit.objective}</p>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Materials Needed</p>
              <div className="premium-panel rounded-[28px] p-6">
                <p className="text-sm leading-7 text-slate-400">
                  Volunteers gather and sort these materials before the build event. AeroKits
                  provides the guide only; materials are sourced locally by the team running the activity.
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {kit.materials.map((material) => (
                    <div
                      key={material}
                      className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                    >
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Volunteer Prep Steps</p>
              <div className="space-y-3">
                {kit.volunteerPrepSteps.map((step, index) => (
                  <article key={index} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-300">{step}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Kid Build Steps</p>
              <div className="space-y-4">
                {kit.kidBuildSteps.map((step, index) => (
                  <article key={index} className="premium-panel rounded-[28px] p-6">
                    <div className="flex gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                        {index + 1}
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                          Step {index + 1}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{step}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">STEM Explanation</p>
              <div className="premium-panel-strong rounded-[28px] p-6 md:p-7">
                <p className="text-base leading-8 text-slate-200">{kit.stemExplanation}</p>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Challenge Activity</p>
              <div className="rounded-[28px] border border-cyan-400/14 bg-cyan-400/[0.05] p-6 md:p-7">
                <p className="text-base leading-8 text-slate-200">{kit.challengeActivity}</p>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Data or Testing Section</p>
              <div className="grid gap-3">
                {testingIdeas.map((item) => (
                  <article key={item} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-4">
                      <IconBadge tone="blue" className="h-10 w-10 rounded-xl">
                        <AppIcon name="chart" className="h-4 w-4" />
                      </IconBadge>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Reflection Questions</p>
              <div className="space-y-3">
                {kit.reflectionQuestions.map((question, index) => (
                  <article key={question} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-4">
                      <IconBadge tone="indigo" className="h-10 w-10 rounded-xl">
                        <AppIcon name="brain" className="h-4 w-4" />
                      </IconBadge>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          Prompt {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{question}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Safety Notes</p>
              <div className="rounded-[28px] border border-orange-400/18 bg-orange-400/[0.07] p-6">
                <div className="space-y-3">
                  {kit.safetyNotes.map((note) => (
                    <div key={note} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                      <AppIcon name="shield" className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Donation Checklist</p>
              <div className="grid gap-3 md:grid-cols-2">
                {kit.donationChecklist.map((item) => (
                  <article key={item} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <AppIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Extension Ideas</p>
              <div className="grid gap-3">
                {kit.extensionIdeas.map((item) => (
                  <article key={item} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-4">
                      <IconBadge tone="cyan" className="h-10 w-10 rounded-xl">
                        <AppIcon name="spark" className="h-4 w-4" />
                      </IconBadge>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Guide Snapshot</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Age range
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {kit.ageRange}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{kit.estimatedTime}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Materials estimate
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{kit.estimatedMaterialCost}</p>
                </div>
              </div>
            </div>

            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Concepts Taught</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {kit.concepts.map((concept) => (
                  <Badge key={concept} tone="neutral">
                    {concept}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Use For Outreach</p>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                This guide is designed for student-led outreach, volunteer build days, classroom
                workshops, and community nonprofit programs.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
