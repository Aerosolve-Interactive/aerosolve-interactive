import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitCard from "@/components/UnitCard";
import ProjectCard from "@/components/ProjectCard";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";
import { projects } from "@/data/projects";

const MARQUEE_ITEMS = [
  "Lift & Drag",
  "Newton's Laws",
  "Rocket Propulsion",
  "Airfoil Design",
  "Stability & Control",
  "Carbon Fiber",
  "Wing Warping",
  "Saturn V",
  "Truss Structures",
  "Bernoulli Effect",
  "The Stall",
  "Three Axes of Flight",
  "Specific Impulse",
  "NACA 2412",
  "Mach Number",
];

export default function HomePage() {
  const publishedCount = lessons.filter((l) => l.status === "published").length;

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16 grid-texture">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28"
          style={{ overflow: "hidden", paddingRight: "2rem" }}
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1C2A3E] bg-[#0E1520] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#4FC3F7]">
                {publishedCount} lessons live — more launching weekly
              </span>
            </div>

            <h1
              className="font-display font-extrabold text-white leading-[0.95] tracking-[-0.04em] mb-6"
              style={{
                maxWidth: "700px",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              <span className="block" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>Aerospace</span>
              <span className="block text-[#4FC3F7]" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>Engineering</span>
              <span className="block" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>Unlocked.</span>
            </h1>

            <p className="font-sans font-light text-[#8FA3BC] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Six structured units. Hands-on projects. Real aerospace content — from the four
              forces of flight to rocket propulsion. Free for every student, everywhere.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-sm hover:bg-[#7dd9ff] transition-colors"
              >
                Start Learning
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[#1C2A3E] text-[#8FA3BC] font-mono text-sm hover:border-[#4FC3F7]/40 hover:text-[#e2ecf4] transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
        <div className="border-y border-[#1C2A3E] py-4 overflow-hidden">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 px-6 font-mono text-xs uppercase tracking-widest text-[#536B84] whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-[#4FC3F7]/40 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS BAND ───────────────────────────────────────────────────── */}
        <section className="border-b border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "6", label: "Units", sub: "Structured curriculum" },
                { value: "30", label: "Lessons", sub: "Total planned" },
                { value: String(publishedCount), label: "Live Now", sub: "Published & ready" },
                { value: "6", label: "Projects", sub: "Hands-on builds" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6">
                  <p className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-[-0.04em] leading-none mb-1">
                    {value}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#4FC3F7] mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-xs text-[#536B84]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNITS GRID ───────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
                Curriculum
              </p>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-[-0.03em] leading-tight">
                Six units.
                <br />
                One complete foundation.
              </h2>
            </div>
            <Link
              href="/learn"
              className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors"
            >
              All units
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map((unit) => {
              const published = lessons.filter(
                (l) => l.unitSlug === unit.slug && l.status === "published"
              ).length;
              return <UnitCard key={unit.slug} unit={unit} publishedCount={published} />;
            })}
          </div>
        </section>

        {/* ── FEATURE CALLOUT ──────────────────────────────────────────────── */}
        <section className="border-y border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#F4C842] mb-4">
                  Interactive Learning
                </p>
                <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-[-0.03em] leading-tight mb-6">
                  Lessons designed
                  <br />
                  like textbooks should be.
                </h2>
                <p className="font-sans text-[#8FA3BC] leading-relaxed mb-8">
                  Every published lesson includes real aerospace content, worked examples
                  from actual aircraft, a five-question quiz with instant feedback, and a
                  hands-on activity. No video required. No account needed.
                </p>
                <Link
                  href="/learn/flight-fundamentals/what-is-aerospace-engineering"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#F4C842]/30 text-[#F4C842] font-mono text-sm hover:bg-[#F4C842]/10 transition-colors"
                >
                  Try Lesson 1 Free
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "📖", title: "Full Written Lessons", desc: "Real aerospace content. No placeholder text, ever." },
                  { icon: "🔬", title: "Real-World Examples", desc: "Boeing 747, Saturn V, Wright Flyer — content rooted in history." },
                  { icon: "✅", title: "5-Question Quizzes", desc: "Instant feedback, letter labels, full explanations." },
                  { icon: "🛠", title: "Hands-On Activities", desc: "Paper rockets, bridge challenges, Arduino projects." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-xl border border-[#1C2A3E] bg-[#0E1520]">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-display font-bold text-white text-sm tracking-[-0.01em] mb-0.5">{title}</p>
                      <p className="font-sans text-xs text-[#536B84]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS PREVIEW ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">Projects</p>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-[-0.03em] leading-tight">
                Build things.
                <br />
                Test them.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors"
            >
              All projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
        <section className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">Ready?</p>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-6">
              Your first lesson
              <br />
              is one click away.
            </h2>
            <p className="font-sans text-[#8FA3BC] mb-10 max-w-md mx-auto">
              No account. No cost. Start with the fundamentals and work your way to orbital mechanics.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-base hover:bg-[#7dd9ff] transition-colors"
            >
              Begin Unit 1
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
