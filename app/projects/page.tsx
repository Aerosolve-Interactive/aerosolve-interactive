import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — AeroSolve Interactive",
  description:
    "Hands-on aerospace engineering projects from beginner paper gliders to Arduino shake table structural tests.",
};

export default function ProjectsPage() {
  const beginnerProjects = projects.filter((project) => project.difficulty === "Beginner");
  const intermediateProjects = projects.filter((project) => project.difficulty === "Intermediate");

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <PageHeader
          eyebrow="Hands-On Lab"
          title="Engineering projects built around measurement."
          description="Project pages are structured as lab guides: objective, materials, build steps, test procedure, data collection, reflection, and extension paths."
          meta={
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["6", "Projects"],
                ["2", "Detailed builds"],
                ["Data", "Driven"],
              ].map(([value, label]) => (
                <div key={label} className="premium-panel rounded-[24px] px-5 py-5 text-left">
                  <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-slate-50">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          }
        />

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Build",
                text: "Students construct a working design with constraints and an explicit engineering objective.",
                icon: "wrench" as const,
                tone: "cyan" as const,
              },
              {
                title: "Test",
                text: "Each project includes a repeatable test procedure so results can be compared fairly.",
                icon: "activity" as const,
                tone: "gold" as const,
              },
              {
                title: "Measure",
                text: "Data tables and reflection questions push every project beyond crafting into analysis.",
                icon: "chart" as const,
                tone: "blue" as const,
              },
            ].map((item) => (
              <article key={item.title} className="premium-panel rounded-[24px] p-5">
                <div className="flex items-center gap-4">
                  <IconBadge tone={item.tone}>
                    <AppIcon name={item.icon} />
                  </IconBadge>
                  <div>
                    <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {beginnerProjects.length > 0 ? (
          <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="eyebrow mb-3">Beginner Labs</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                  Quick-start aerospace builds.
                </h2>
              </div>
              <Badge tone="cyan">Beginner</Badge>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {beginnerProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ) : null}

        {intermediateProjects.length > 0 ? (
          <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="eyebrow mb-3">Intermediate Labs</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                  Engineering challenges with electronics and testing.
                </h2>
              </div>
              <Badge tone="gold">Intermediate</Badge>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {intermediateProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
