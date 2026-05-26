import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { lessons } from "@/data/lessons";
import { units as unitData } from "@/data/units";

export const metadata = {
  title: "About — AeroSolve Interactive",
  description:
    "The mission behind AeroSolve Interactive: making aerospace engineering education accessible to every student.",
};

const VALUES = [
  {
    icon: "🎯",
    title: "Accuracy First",
    description:
      "Every lesson is grounded in real aerospace engineering. We never simplify to the point of inaccuracy. We debunk myths (equal-transit-time theory, for one) rather than perpetuate them for convenience.",
    color: "#4FC3F7",
  },
  {
    icon: "🔓",
    title: "Genuinely Free",
    description:
      "No paywalls, no account requirements, no ads. The full curriculum is accessible to every student with an internet connection. This is a design constraint, not a marketing claim.",
    color: "#F4C842",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    description:
      "Activities are designed around the scientific method. Students collect data, calculate averages, identify variables, and explain results — not just follow instructions.",
    color: "#FF6B5B",
  },
  {
    icon: "✍",
    title: "Written, Not Watched",
    description:
      "Lessons are fully written text — not video summaries or slide decks. Students can read at their own pace, re-read sections, and reference specific content while doing an activity.",
    color: "#4FC3F7",
  },
];

export default function AboutPage() {
  const publishedCount = lessons.filter((l) => l.status === "published").length;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 border-b border-[#1C2A3E]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
            About
          </p>
          <h1 className="font-display font-extrabold text-white text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-6 max-w-3xl">
            Why we built this.
          </h1>
          <p className="font-sans text-[#8FA3BC] text-lg leading-relaxed max-w-2xl">
            AeroSolve Interactive exists because quality aerospace education — the
            kind that connects physics to real aircraft, that takes students
            seriously as future engineers — is harder to find than it should be.
            We decided to build it ourselves.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-[#1C2A3E]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                Mission
              </p>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] leading-tight mb-6">
                Make the best aerospace curriculum available to every student — not just the ones who can afford it.
              </h2>
              <p className="font-sans text-[#8FA3BC] leading-relaxed mb-4">
                The aerospace industry is one of the most technically demanding — and
                most economically significant — sectors in the global economy. The next
                generation of engineers, technicians, and designers who will staff it
                is being educated right now.
              </p>
              <p className="font-sans text-[#536B84] leading-relaxed">
                Too many of those future engineers are in classrooms where aerospace
                means a poster of the solar system and a video about the Wright Brothers.
                AeroSolve is the curriculum that should exist — built by people who care
                about changing that.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  stat: String(publishedCount),
                  label: "Published Lessons",
                  color: "#4FC3F7",
                },
                {
                  stat: String(unitData.length),
                  label: "Structured Units",
                  color: "#F4C842",
                },
                {
                  stat: "100%",
                  label: "Free Forever",
                  color: "#FF6B5B",
                },
                {
                  stat: "0",
                  label: "Ads or Paywalls",
                  color: "#4FC3F7",
                },
              ].map(({ stat, label, color }) => (
                <div key={label} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 flex items-center gap-5">
                  <p className="font-display font-extrabold text-3xl tracking-[-0.04em] w-16 text-right" style={{ color }}>
                    {stat}
                  </p>
                  <p className="font-mono text-sm text-[#8FA3BC] uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-[#1C2A3E]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
            Design Principles
          </p>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-10">
            What guides every decision.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{v.icon}</span>
                  <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">
                    {v.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#536B84] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum overview */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-[#1C2A3E]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
            Curriculum
          </p>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-6">
            What we teach — and why that order.
          </h2>
          <p className="font-sans text-[#8FA3BC] leading-relaxed mb-10 max-w-2xl">
            The six units are sequenced to build on each other. Flight Fundamentals
            establishes the vocabulary and the four forces. Forces & Motion connects
            Newton&apos;s laws to real propulsion. Wings & Lift explains the mechanism
            in depth. Stability & Control shows how pilots use what they've learned.
            Rockets & Propulsion takes students beyond the atmosphere. Structures &
            Materials ties it together with the question of how to build any of it
            without it falling apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unitData.map((unit, i) => (
              <Link key={unit.slug} href={`/learn/${unit.slug}`} className="block group">
                <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 card-hover h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-[#536B84]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl">{unit.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base tracking-[-0.02em] mb-1 group-hover:text-[#4FC3F7] transition-colors">
                    {unit.title}
                  </h3>
                  <p className="font-sans text-xs text-[#536B84] leading-relaxed">{unit.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-10 text-center">
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-3">
              If this sounds like something you&apos;d build too — join us.
            </h2>
            <p className="font-sans text-[#8FA3BC] mb-8 max-w-lg mx-auto">
              We&apos;re always looking for people who care about education quality, love aerospace,
              and want to build something that lasts. Volunteer with our outreach program,
              or just start learning.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-sm hover:bg-[#7dd9ff] transition-colors"
              >
                Start Learning
              </Link>
              <Link
                href="/outreach"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1C2A3E] text-[#8FA3BC] font-mono text-sm hover:border-[#4FC3F7]/40 hover:text-[#e2ecf4] transition-colors"
              >
                Outreach Program
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
