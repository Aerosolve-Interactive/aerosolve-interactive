import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FourForcesSimulation from "@/components/simulations/FourForcesSimulation";
import Link from "next/link";

export const metadata = {
  title: "Four Forces of Flight — Simulations — AeroSolve Interactive",
  description: "Interactive simulation of lift, drag, thrust, and weight. Adjust airspeed, altitude, and thrust to explore equilibrium flight conditions.",
};

export default function FourForcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">Four Forces of Flight</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 1 — Flight Fundamentals
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              Four Forces of Flight
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              Every aircraft in steady level flight has four forces in balance: <strong className="text-[#b8cfe0]">lift</strong> equals weight, and{" "}
              <strong className="text-[#b8cfe0]">thrust</strong> equals drag. Disturb that balance and the aircraft climbs,
              descends, accelerates, or decelerates. Adjust the sliders to explore.
            </p>
          </div>

          <FourForcesSimulation />

          {/* Concepts */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Lift = ½ρV²SC_L",
                desc: "Lift increases with the square of airspeed and is proportional to air density. At higher altitudes (lower ρ), you need more speed to generate the same lift.",
              },
              {
                title: "Drag = Lift / (L/D)",
                desc: "For a given lift-to-drag ratio, drag is determined by the lift required. A cleaner aircraft (higher L/D) produces less drag for the same lift.",
              },
              {
                title: "Net vertical force",
                desc: "When lift exceeds weight, the aircraft climbs. When weight exceeds lift, it descends. Zero net force means level flight — Newton's first law.",
              },
              {
                title: "Net horizontal force",
                desc: "When thrust exceeds drag, speed increases (Newton's second law: F=ma). In cruise, T=D so acceleration is zero and speed is constant.",
              },
            ].map(c => (
              <div key={c.title} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5">
                <h3 className="font-display font-bold text-white text-sm mb-2 tracking-[-0.01em]">{c.title}</h3>
                <p className="font-sans text-xs text-[#8FA3BC] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-[#1C2A3E]">
            <Link href="/simulations" className="flex items-center gap-2 font-mono text-sm text-[#536B84] hover:text-[#4FC3F7] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.5 6H2.5M5.5 9L2.5 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Simulations
            </Link>
            <Link href="/learn/flight-fundamentals/the-four-forces-of-flight" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
              Read Lesson
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
