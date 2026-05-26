import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SIMULATIONS = [
  {
    slug: "four-forces",
    title: "Four Forces of Flight",
    desc: "Adjust airspeed, weight, and thrust to see how lift, drag, weight, and thrust interact. Real-time force arrows and flight-state detection.",
    unit: "Unit 1 — Flight Fundamentals",
    tags: ["Lift", "Drag", "Thrust", "Weight"],
    color: "#4FC3F7",
    icon: "✈",
    lessonSlug: "/learn/flight-fundamentals/the-four-forces-of-flight",
  },
  {
    slug: "airfoil",
    title: "NACA 2412 Airfoil",
    desc: "Rotate a real NACA 2412 airfoil and watch the pressure distribution change. See C_L, C_D, and L/D update live — stall when you exceed 16°.",
    unit: "Unit 3 — Wings & Lift",
    tags: ["AoA", "C_L", "C_D", "Stall"],
    color: "#4ade80",
    icon: "🛩",
    lessonSlug: "/learn/wings-and-lift/angle-of-attack",
  },
  {
    slug: "rocket-launch",
    title: "Rocket Equation Calculator",
    desc: "Dial in specific impulse and mass ratio to compute delta-v using the Tsiolkovsky equation. Check mission capability for LEO, the Moon, and Mars.",
    unit: "Unit 5 — Rockets & Propulsion",
    tags: ["Δv", "Isp", "Mass Ratio", "Staging"],
    color: "#FF6B5B",
    icon: "🚀",
    lessonSlug: "/learn/rockets-and-propulsion/thrust-and-exhaust",
  },
  {
    slug: "attitude",
    title: "Three Axes of Control",
    desc: "Pitch, roll, and yaw an aircraft with an interactive attitude indicator and compass rose. Preset maneuvers included: climb, bank, steep descent.",
    unit: "Unit 4 — Stability & Control",
    tags: ["Pitch", "Roll", "Yaw", "Euler Angles"],
    color: "#F4C842",
    icon: "🎯",
    lessonSlug: "/learn/stability-and-control/pitch-roll-and-yaw",
  },
  {
    slug: "structures",
    title: "Pratt Truss Analysis",
    desc: "Load a Pratt truss and watch members light up in tension or compression. Switch cross-section shapes and see how safety factor changes.",
    unit: "Unit 6 — Structures & Materials",
    tags: ["Tension", "Compression", "Stress", "Safety Factor"],
    color: "#a78bfa",
    icon: "🏗",
    lessonSlug: "/learn/structures-and-materials/trusses-and-bracing",
  },
  {
    slug: "drag",
    title: "Drag Coefficient Comparator",
    desc: "Compare drag forces across six shapes — flat plate to NACA airfoil. Interactive drag-vs-speed chart shows parasitic and induced drag components.",
    unit: "Unit 3 — Wings & Lift",
    tags: ["C_D", "Parasitic Drag", "Induced Drag", "D = ½ρV²SC_D"],
    color: "#fb923c",
    icon: "💨",
    lessonSlug: "/learn/wings-and-lift/lift-and-drag",
  },
];

export const metadata = {
  title: "Simulations — AeroSolve Interactive",
  description: "Six interactive aerospace engineering simulations. Explore airfoil physics, rocket equations, structural analysis, and more.",
};

export default function SimulationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-3">
              Interactive Tools
            </p>
            <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl tracking-[-0.04em] leading-tight mb-4">
              Six simulations.
              <br />
              <span className="text-[#4FC3F7]">Real aerospace physics.</span>
            </h1>
            <p className="font-sans text-[#8FA3BC] text-lg leading-relaxed">
              Hands-on tools that let you manipulate the variables and see what happens. No install. No account.
              Paired with the lessons that teach the underlying theory.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIMULATIONS.map((sim) => (
              <Link
                key={sim.slug}
                href={`/simulations/${sim.slug}`}
                className="group rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 card-hover flex flex-col"
              >
                {/* Icon + unit */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{ borderColor: sim.color + '40', backgroundColor: sim.color + '15' }}
                  >
                    {sim.icon}
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border"
                    style={{ color: sim.color, borderColor: sim.color + '40', backgroundColor: sim.color + '10' }}
                  >
                    Interactive
                  </span>
                </div>

                {/* Title & desc */}
                <h2 className="font-display font-bold text-white text-lg tracking-[-0.02em] mb-2 group-hover:text-[#4FC3F7] transition-colors">
                  {sim.title}
                </h2>
                <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed mb-4 flex-1">
                  {sim.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sim.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider border border-[#1C2A3E] text-[#536B84]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1C2A3E]">
                  <span className="font-sans text-[11px] text-[#536B84]">{sim.unit}</span>
                  <div className="flex items-center gap-1 font-mono text-xs" style={{ color: sim.color }}>
                    Launch
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-3">Learn the theory too</p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-[-0.03em] mb-4">
              Simulations pair with lessons.
            </h2>
            <p className="font-sans text-[#8FA3BC] mb-8 max-w-md mx-auto">
              Each simulation is embedded in its matching lesson so you can read the theory and test it immediately.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-sm hover:bg-[#7dd9ff] transition-colors"
            >
              Browse All Lessons
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
