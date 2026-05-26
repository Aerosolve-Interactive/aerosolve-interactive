import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — AeroSolve Interactive",
  description:
    "Hands-on aerospace engineering projects from beginner paper gliders to Arduino shake table structural tests.",
};

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export default function ProjectsPage() {
  const beginnerProjects = projects.filter((p) => p.difficulty === "Beginner");
  const intermediateProjects = projects.filter((p) => p.difficulty === "Intermediate");

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-[#1C2A3E]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
            Hands-On Engineering
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl tracking-[-0.04em] leading-tight mb-3">
                Projects
              </h1>
              <p className="font-sans text-[#8FA3BC] text-lg max-w-xl leading-relaxed">
                Real engineering challenges with real data collection. From paper
                gliders to Arduino-controlled shake tables — build it, test it,
                explain it.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 font-mono text-[10px] uppercase tracking-widest">
              {DIFFICULTIES.slice(1).map((d) => {
                const colors: Record<string, string> = {
                  Beginner: "#4FC3F7",
                  Intermediate: "#F4C842",
                  Advanced: "#FF6B5B",
                };
                return (
                  <span
                    key={d}
                    className="px-3 py-1.5 rounded-md border"
                    style={{
                      color: colors[d],
                      borderColor: `${colors[d]}30`,
                      backgroundColor: `${colors[d]}10`,
                    }}
                  >
                    {d}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beginner section */}
        {beginnerProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#4FC3F7]">
                Beginner
              </span>
              <span className="flex-1 h-px bg-[#1C2A3E]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {beginnerProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Intermediate section */}
        {intermediateProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#F4C842]">
                Intermediate
              </span>
              <span className="flex-1 h-px bg-[#1C2A3E]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {intermediateProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-3">
              Coming Soon
            </p>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-3">
              More projects in development
            </h2>
            <p className="font-sans text-[#536B84] max-w-md mx-auto">
              Wind tunnel airfoil testing, rocket altimeter builds, and a full
              CNC-cut model aircraft challenge are in production.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
