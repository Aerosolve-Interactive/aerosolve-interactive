import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ projectSlug: p.slug }));
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

const difficultyColors: Record<string, string> = {
  Beginner: "#4FC3F7",
  Intermediate: "#F4C842",
  Advanced: "#FF6B5B",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();

  const diffColor = difficultyColors[project.difficulty] ?? "#4FC3F7";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-[#1C2A3E] bg-[#080C12]">
          <div className="max-w-4xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#536B84]">
              <Link href="/projects" className="hover:text-[#8FA3BC] transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-[#8FA3BC] truncate">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Project header */}
        <div className="border-b border-[#1C2A3E] bg-[#0E1520]">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md"
                style={{ color: diffColor, backgroundColor: `${diffColor}15` }}
              >
                {project.difficulty}
              </span>
              <span className="font-mono text-[10px] text-[#536B84]">{project.time}</span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-[#080C12] border border-[#1C2A3E] text-[#536B84]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              {project.title}
            </h1>
            <p className="font-sans text-[#8FA3BC] text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">
          {/* Objective */}
          <section>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
              Objective
            </p>
            <div className="rounded-xl border border-[#4FC3F7]/20 bg-[#4FC3F7]/5 p-5">
              <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed">{project.objective}</p>
            </div>
          </section>

          {/* Materials + Skills */}
          <section className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Materials
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5">
                <ul className="space-y-2">
                  {project.materials.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans text-xs text-[#8FA3BC]">
                      <span className="w-1 h-1 rounded-full bg-[#4FC3F7]/60 mt-1.5 shrink-0 inline-block" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Skills Practiced
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5">
                <ul className="space-y-2">
                  {project.skills.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans text-xs text-[#8FA3BC]">
                      <span className="w-1 h-1 rounded-full bg-[#F4C842]/60 mt-1.5 shrink-0 inline-block" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Build steps */}
          <section>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
              Build Steps
            </p>
            <div className="space-y-3">
              {project.buildSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 flex gap-4"
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-[#4FC3F7]"
                    style={{ backgroundColor: "#4FC3F715" }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <p className="font-display font-bold text-white text-sm tracking-[-0.01em] mb-1">
                      {step.title}
                    </p>
                    <p className="font-sans text-xs text-[#536B84] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Arduino code */}
          {project.code && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Arduino Code
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#040810] p-5 overflow-x-auto">
                <pre className="font-mono text-xs text-[#4FC3F7] leading-relaxed whitespace-pre">
                  {project.code}
                </pre>
              </div>
            </section>
          )}

          {/* Wiring table */}
          {project.wiringTable && project.wiringTable.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Wiring Connections
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1C2A3E]">
                      <th className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] text-left px-5 py-3">
                        Servo Wire
                      </th>
                      <th className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] text-left px-5 py-3">
                        Connect To
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.wiringTable.map((row, i) => (
                      <tr key={i} className="border-b border-[#1C2A3E] last:border-0">
                        <td className="font-mono text-xs text-[#4FC3F7] px-5 py-3">{row.wire}</td>
                        <td className="font-mono text-xs text-[#8FA3BC] px-5 py-3">{row.connectTo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Test procedure */}
          <section>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
              Test Procedure
            </p>
            <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5">
              <ol className="space-y-2">
                {project.testProcedure.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-xs text-[#8FA3BC] leading-relaxed">
                    <span className="shrink-0 font-mono text-[10px] w-5 h-5 rounded-md bg-[#080C12] border border-[#1C2A3E] text-[#536B84] flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Data table */}
          {project.dataTable && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Data Collection Table
              </p>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[#1C2A3E]">
                      {project.dataTable.columns.map((col) => (
                        <th
                          key={col}
                          className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] text-left px-4 py-3 whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.dataTable.rows.map((row, i) => (
                      <tr key={i} className="border-b border-[#1C2A3E] last:border-0">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={[
                              "px-4 py-3 text-xs",
                              j === 0
                                ? "font-mono text-[#8FA3BC]"
                                : "font-sans text-[#536B84]",
                            ].join(" ")}
                          >
                            {cell || (j === 0 ? cell : "—")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Reflection */}
          {project.reflectionQuestions && project.reflectionQuestions.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Reflection Questions
              </p>
              <div className="space-y-3">
                {project.reflectionQuestions.map((q, i) => (
                  <div key={i} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-4 flex gap-3">
                    <span className="shrink-0 font-mono text-xs text-[#F4C842] w-4">{i + 1}.</span>
                    <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Safety notes */}
          {project.safetyNotes && project.safetyNotes.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#FF6B5B] mb-4">
                Safety Notes
              </p>
              <div className="rounded-xl border border-[#FF6B5B]/20 bg-[#FF6B5B]/5 p-5">
                <ul className="space-y-2">
                  {project.safetyNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans text-xs text-[#8FA3BC]">
                      <span className="shrink-0 text-[#FF6B5B] mt-0.5">⚠</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Extensions */}
          {project.extensions && project.extensions.length > 0 && (
            <section>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Extensions & Challenges
              </p>
              <div className="space-y-2">
                {project.extensions.map((ext, i) => (
                  <div key={i} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-4 flex gap-3">
                    <span className="shrink-0 text-[#4FC3F7] text-sm">+</span>
                    <p className="font-sans text-sm text-[#536B84] leading-relaxed">{ext}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="border-t border-[#1C2A3E] pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#536B84] hover:text-[#4FC3F7] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
