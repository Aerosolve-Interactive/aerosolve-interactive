import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RocketSimulation from "@/components/simulations/RocketSimulation";
import Link from "next/link";

export const metadata = {
  title: "Rocket Equation Calculator — Simulations — AeroSolve Interactive",
  description: "Interactive Tsiolkovsky rocket equation calculator. Adjust Isp and mass ratio to compute delta-v and check mission capability.",
};

export default function RocketLaunchPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">Rocket Equation Calculator</span>
          </nav>

          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 5 — Rockets & Propulsion
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              Rocket Equation Calculator
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              Tsiolkovsky&apos;s rocket equation, Δv = V<sub>e</sub> × ln(m₀/m<sub>f</sub>), is the fundamental
              constraint on all rocket missions. Your delta-v budget determines where you can go — and the
              &quot;tyranny of the rocket equation&quot; means propellant mass grows exponentially with mission demand.
            </p>
          </div>

          <RocketSimulation />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Specific Impulse (Isp)",
                desc: "Isp measures propellant efficiency — how much thrust per pound of propellant per second. H₂/O₂ achieves ~450s; solid rockets ~250s; ion drives ~3000s (tiny thrust).",
              },
              {
                title: "Mass Ratio Tyranny",
                desc: "Doubling your delta-v doesn't double propellant — it exponentiates it. A rocket needing 9 km/s delta-v with Isp=350 needs a mass ratio of ~13.5, meaning 93% of launch mass is propellant.",
              },
              {
                title: "Staging multiplies capability",
                desc: "Each stage discards dead structural mass (empty tanks, engines) before igniting the next stage. Three-stage vehicles like Saturn V can reach the Moon even with relatively modest propellant efficiency.",
              },
              {
                title: "Delta-v budget to LEO",
                desc: "Getting to Low Earth Orbit requires ~9.3 km/s total delta-v: ~7.8 km/s orbital velocity plus ~1.5 km/s for gravity and aerodynamic drag losses during ascent.",
              },
            ].map(c => (
              <div key={c.title} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5">
                <h3 className="font-display font-bold text-white text-sm mb-2 tracking-[-0.01em]">{c.title}</h3>
                <p className="font-sans text-xs text-[#8FA3BC] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between pt-6 border-t border-[#1C2A3E]">
            <Link href="/simulations" className="flex items-center gap-2 font-mono text-sm text-[#536B84] hover:text-[#4FC3F7] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.5 6H2.5M5.5 9L2.5 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Simulations
            </Link>
            <Link href="/learn/rockets-and-propulsion/thrust-and-exhaust" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
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
