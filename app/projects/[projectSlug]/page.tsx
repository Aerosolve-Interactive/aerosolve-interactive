import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { projects, getProjectBySlug } from "@/data/projects";
import { getDifficultyTone } from "@/lib/visuals";

export function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) return {};

  return {
    title: `${project.title} — AeroSolve Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();

  const difficultyTone = getDifficultyTone(project.difficulty);
  const isArduinoProject = project.tags.some((tag) => tag.toLowerCase().includes("arduino"));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <div className="border-b border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <Link href="/projects" className="transition-colors hover:text-slate-200">
              Projects
            </Link>
            <span>/</span>
            <span className="truncate text-slate-300">{project.title}</span>
          </div>
        </div>

        <section className="section-shell border-b border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={difficultyTone}>{project.difficulty}</Badge>
                <Badge tone="blue">{project.time}</Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} tone="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <IconBadge tone={isArduinoProject ? "gold" : "cyan"} className="h-14 w-14">
                  <AppIcon name={isArduinoProject ? "cpu" : "flask"} className="h-5 w-5" />
                </IconBadge>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Engineering challenge
                  </p>
                  <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-slate-50 md:text-5xl">
                    {project.title}
                  </h1>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-12">
            <section>
              <p className="eyebrow mb-5">Engineering Objective</p>
              <div className="premium-panel-strong rounded-[28px] p-6 md:p-7">
                <p className="text-base leading-8 text-slate-200">{project.objective}</p>
              </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
              <article className="premium-panel rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <IconBadge tone="cyan">
                    <AppIcon name="boxes" />
                  </IconBadge>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    Materials
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {project.materials.map((material) => (
                    <div
                      key={material}
                      className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                    >
                      {material}
                    </div>
                  ))}
                </div>
              </article>

              <article className="premium-panel rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <IconBadge tone="blue">
                    <AppIcon name="brain" />
                  </IconBadge>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    Skills Learned
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {project.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            </section>

            <section>
              <p className="eyebrow mb-5">{isArduinoProject ? "Build · Test · Measure · Graph · Improve" : "Build Steps"}</p>
              <div className="space-y-4">
                {project.buildSteps.map((step) => (
                  <article key={step.step} className="premium-panel rounded-[28px] p-6">
                    <div className="flex gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                        {step.step}
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                          {step.title}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {project.code ? (
              <section>
                <p className="eyebrow mb-5">Code Block</p>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#020817]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <IconBadge tone="indigo" className="h-10 w-10 rounded-xl">
                        <AppIcon name="code" className="h-4 w-4" />
                      </IconBadge>
                      <div>
                        <p className="font-display text-lg font-semibold tracking-[-0.03em] text-slate-50">
                          Arduino Control Sketch
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Motor oscillation loop
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto px-5 py-5">
                    <pre className="min-w-[640px] font-mono text-sm leading-7 text-cyan-200">
                      {project.code}
                    </pre>
                  </div>
                </div>
              </section>
            ) : null}

            {project.wiringTable && project.wiringTable.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Wiring Table</p>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
                  <table className="w-full">
                    <thead className="bg-white/[0.03]">
                      <tr className="border-b border-white/10">
                        <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Servo wire
                        </th>
                        <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Connect to
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.wiringTable.map((row, index) => (
                        <tr key={index} className="border-b border-white/10 last:border-0">
                          <td className="px-5 py-4 font-mono text-sm text-cyan-300">{row.wire}</td>
                          <td className="px-5 py-4 text-sm text-slate-300">{row.connectTo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            <section>
              <p className="eyebrow mb-5">{isArduinoProject ? "Data Collection" : "Test Procedure"}</p>
              <div className="space-y-3">
                {project.testProcedure.map((step, index) => (
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

            {project.dataTable ? (
              <section>
                <p className="eyebrow mb-5">Data Table Example</p>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                      <thead className="bg-white/[0.03]">
                        <tr className="border-b border-white/10">
                          {project.dataTable.columns.map((column) => (
                            <th
                              key={column}
                              className="px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.dataTable.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-white/10 last:border-0">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`px-4 py-4 text-sm ${
                                  cellIndex === 0 ? "font-medium text-slate-200" : "text-slate-400"
                                }`}
                              >
                                {cell || "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ) : null}

            {project.reflectionQuestions && project.reflectionQuestions.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Reflection Questions</p>
                <div className="space-y-3">
                  {project.reflectionQuestions.map((question, index) => (
                    <article key={index} className="premium-panel rounded-[24px] p-5">
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
            ) : null}

            {project.safetyNotes && project.safetyNotes.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Safety Notes</p>
                <div className="rounded-[28px] border border-orange-400/18 bg-orange-400/[0.07] p-6">
                  <div className="space-y-3">
                    {project.safetyNotes.map((note) => (
                      <div key={note} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                        <AppIcon name="shield" className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : null}

            {project.extensions && project.extensions.length > 0 ? (
              <section>
                <p className="eyebrow mb-5">Next-Level Upgrades</p>
                <div className="grid gap-3">
                  {project.extensions.map((extension) => (
                    <article key={extension} className="premium-panel rounded-[24px] p-5">
                      <div className="flex items-start gap-4">
                        <IconBadge tone="cyan" className="h-10 w-10 rounded-xl">
                          <AppIcon name="spark" className="h-4 w-4" />
                        </IconBadge>
                        <p className="text-sm leading-7 text-slate-300">{extension}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Lab Snapshot</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Difficulty
                  </p>
                  <div className="mt-2">
                    <Badge tone={difficultyTone}>{project.difficulty}</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {project.time}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Project mode
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {isArduinoProject
                      ? "Build, drive vibration, measure deformation, graph structural performance."
                      : "Build, launch or test, record data, compare results, improve the design."}
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Project Tags</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} tone="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="premium-panel rounded-[28px] p-5">
              <p className="eyebrow">Back To Lab Gallery</p>
              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300"
              >
                <AppIcon name="flask" className="h-3.5 w-3.5" />
                All projects
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
