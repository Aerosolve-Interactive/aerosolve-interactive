import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CADFilesPanel from "@/components/CADFilesPanel";
import PrintGuideButton from "@/components/PrintGuideButton";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { getKitBySlug, kits } from "@/data/kits";
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

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        {/* Breadcrumb — hidden in print */}
        <div className="border-b border-white/10 bg-slate-950/70 print:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <Link href="/kits" className="transition-colors hover:text-slate-200">
              Kits
            </Link>
            <span>/</span>
            <span className="truncate text-slate-300">{kit.title}</span>
          </div>
        </div>

        {/* Hero / header — white in print */}
        <section className="section-shell border-b border-white/10 bg-[#07111f]/60 print:bg-white print:border-slate-200">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14">
            <div className="max-w-5xl">
              {/* Print-only compact header that sits above the badges */}
              <div className="print-only mb-6 border-b border-slate-300 pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                  AeroKits Build Guide · aerosolve-interactive.com
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 mt-1">
                  {kit.title}
                </h1>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {kit.description}
                </p>
                <div className="mt-3 grid grid-cols-3 gap-x-6 gap-y-1 text-sm">
                  <div><span className="font-semibold text-slate-700">Level: </span><span className="text-slate-600">{kit.level}</span></div>
                  <div><span className="font-semibold text-slate-700">Difficulty: </span><span className="text-slate-600">{kit.difficulty}</span></div>
                  <div><span className="font-semibold text-slate-700">Ages: </span><span className="text-slate-600">{kit.ageRange}</span></div>
                  <div><span className="font-semibold text-slate-700">Time: </span><span className="text-slate-600">{kit.estimatedTime}</span></div>
                  <div><span className="font-semibold text-slate-700">Material cost: </span><span className="text-slate-600">{kit.estimatedMaterialCost}</span></div>
                  {kit.maxMaterialCost ? (
                    <div><span className="font-semibold text-slate-700">Max cost: </span><span className="text-slate-600">{kit.maxMaterialCost}</span></div>
                  ) : null}
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-slate-700">Concepts: </span>
                  <span className="text-slate-600">{kit.concepts.join(' · ')}</span>
                </div>
                <p className="mt-3 text-[10px] text-slate-400 italic">
                  Free build guide for educational, nonprofit, and volunteer use. Not for commercial reproduction.
                </p>
              </div>

              {/* Screen badges — visible on screen, hidden in print (print-only header replaces them) */}
              <div className="print:hidden flex flex-wrap items-center gap-3">
                <Badge tone={kit.level === "Advanced" ? "indigo" : "cyan"}>{kit.level}</Badge>
                <Badge tone={difficultyTone}>{kit.difficulty}</Badge>
                <Badge tone="blue">Ages {kit.ageRange}</Badge>
                <Badge tone="neutral">{kit.estimatedTime}</Badge>
                <Badge tone="neutral">{kit.estimatedMaterialCost}</Badge>
                {kit.maxMaterialCost ? <Badge tone="gold">{kit.maxMaterialCost}</Badge> : null}
              </div>

              <div className="mt-6 flex items-center gap-4 print:hidden">
                <IconBadge tone={kit.level === "Advanced" ? "gold" : "cyan"} className="h-14 w-14">
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

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 print:hidden">
                {kit.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 print:hidden">
                {kit.concepts.map((concept) => (
                  <Badge key={concept} tone="cyan">
                    {concept}
                  </Badge>
                ))}
              </div>

              {/* Action buttons — hidden in print */}
              <div className="mt-8 flex flex-wrap gap-4 print:hidden">
                <Link href="/kits" className="btn-secondary px-5 py-3">
                  Back to Kits
                </Link>
                <PrintGuideButton />
                {kit.cadFiles?.length ? (
                  <a href="#cad-files" className="btn-secondary px-5 py-3">
                    CAD Files
                    <AppIcon name="code" className="h-3.5 w-3.5" />
                  </a>
                ) : null}
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

              {/* Screen: full table (hidden in print) */}
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] print:hidden">
                <div className="border-b border-white/10 px-5 py-4 text-sm leading-7 text-slate-400">
                  Volunteers gather these materials themselves before the build event. The guide explains the process; the site does not provide or sell materials.
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px]">
                    <thead className="bg-white/[0.03]">
                      <tr className="border-b border-white/10">
                        <th className="px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Item</th>
                        <th className="px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Quantity</th>
                        <th className="px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Estimated cost</th>
                        <th className="px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kit.materials.map((material) => (
                        <tr key={material.item} className="border-b border-white/10 last:border-0">
                          <td className="px-4 py-4 text-sm font-medium text-slate-200">{material.item}</td>
                          <td className="px-4 py-4 text-sm text-slate-300">{material.quantity}</td>
                          <td className="px-4 py-4 text-sm text-slate-300">{material.estimatedCost ?? "-"}</td>
                          <td className="px-4 py-4 text-sm text-slate-400">{material.notes ?? "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Print: checklist with checkbox squares */}
              <div className="print-only">
                <p className="text-xs text-slate-500 mb-3">
                  Volunteers gather these materials before the event. The site does not provide or sell materials.
                </p>
                <div className="print-checklist">
                  {kit.materials.map((material) => (
                    <div key={material.item} className="print-checklist-item">
                      <span className="print-checklist-box" aria-hidden="true" />
                      <span>
                        <strong>{material.item}</strong>
                        {" — "}{material.quantity}
                        {material.estimatedCost ? ` · ${material.estimatedCost}` : ""}
                        {material.notes ? (
                          <span className="text-slate-500"> · {material.notes}</span>
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Tools Required</p>
              <div className="grid gap-3 md:grid-cols-2">
                {kit.toolsRequired.map((tool) => (
                  <article key={tool} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <AppIcon name="wrench" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {tool}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-5">Volunteer Prep Steps</p>
              <div className="space-y-3">
                {kit.volunteerPrepSteps.map((step, index) => (
                  <article key={`${kit.slug}-prep-${index}`} className="premium-panel rounded-[24px] p-5">
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
                  <article key={`${kit.slug}-kid-${index}`} className="premium-panel rounded-[28px] p-6">
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
              <p className="eyebrow mb-5">Testing Procedure</p>
              <div className="space-y-3">
                {kit.testingProcedure.map((step, index) => (
                  <article key={`${kit.slug}-test-${index}`} className="premium-panel rounded-[24px] p-5">
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
              <p className="eyebrow mb-5">Data to Collect</p>
              <div className="grid gap-3 md:grid-cols-2">
                {kit.dataToCollect.map((item) => (
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
              <p className="eyebrow mb-5">Reflection Questions</p>
              <div className="space-y-3">
                {kit.reflectionQuestions.map((question, index) => (
                  <article key={`${kit.slug}-reflection-${index}`} className="premium-panel rounded-[24px] p-5">
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

              {/* Screen: icon cards (hidden in print) */}
              <div className="grid gap-3 md:grid-cols-2 print:hidden">
                {kit.donationChecklist.map((item) => (
                  <article key={item} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <AppIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </div>
                  </article>
                ))}
              </div>

              {/* Print: checkbox list */}
              <div className="print-only print-checklist">
                {kit.donationChecklist.map((item) => (
                  <div key={item} className="print-checklist-item">
                    <span className="print-checklist-box" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
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

            {kit.cadFiles && kit.cadFiles.length > 0 ? (
              <CADFilesPanel kitSlug={kit.slug} cadFiles={kit.cadFiles} />
            ) : null}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit print:hidden">
            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Guide Snapshot</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Level
                  </p>
                  <div className="mt-2">
                    <Badge tone={kit.level === "Advanced" ? "indigo" : "cyan"}>{kit.level}</Badge>
                  </div>
                </div>
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
                    Estimated material cost
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{kit.estimatedMaterialCost}</p>
                  {kit.maxMaterialCost ? <p className="text-sm text-slate-400">{kit.maxMaterialCost}</p> : null}
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
                This guide is designed for student-led outreach, classroom workshops, volunteer build
                days, and nonprofit programs that want a free, structured aerospace activity.
              </p>
            </div>

            {kit.cadFiles?.length ? (
              <div className="premium-panel rounded-[28px] p-5">
                <p className="eyebrow">CAD Support</p>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  This advanced guide includes optional CAD-ready parts. Jump to the CAD section for STEP file status and download instructions.
                </p>
                <a href="#cad-files" className="btn-secondary mt-5 px-5 py-3">
                  Go to CAD Files
                </a>
              </div>
            ) : null}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
