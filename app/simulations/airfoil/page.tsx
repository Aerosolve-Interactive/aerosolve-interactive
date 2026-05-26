import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AirfoilSimulation from "@/components/simulations/AirfoilSimulation";
import Link from "next/link";

export const metadata = {
  title: "NACA 2412 Airfoil — Simulations — AeroSolve Interactive",
  description: "Rotate a NACA 2412 airfoil cross-section and watch pressure distributions change in real time. See C_L, C_D, and L/D, and experience aerodynamic stall.",
};

export default function AirfoilPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">NACA 2412 Airfoil</span>
          </nav>

          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 3 — Wings & Lift
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              NACA 2412 Airfoil
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              The NACA 2412 is the classic training airfoil — 2% camber, maximum camber at 40% chord, 12% thickness.
              It&apos;s used in Cessna 172s and countless other general aviation aircraft. Increase the angle of attack
              past 16° to experience aerodynamic stall.
            </p>
          </div>

          <AirfoilSimulation />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Angle of Attack vs Pitch",
                desc: "AoA is the angle between the chord line and the incoming airflow — not the nose attitude. You can have a high pitch angle but low AoA in a dive, or vice versa.",
              },
              {
                title: "C_L increases linearly until stall",
                desc: "For a thin airfoil, lift coefficient increases about 0.11 per degree of AoA. At the critical angle (~16°), the boundary layer separates and lift drops sharply.",
              },
              {
                title: "Induced drag grows with C_L²",
                desc: "C_Di = C_L² / (π × e × AR). At high AoA (high C_L), induced drag dominates. At high speed (low AoA, low C_L), parasitic drag dominates.",
              },
              {
                title: "Best L/D at moderate AoA",
                desc: "Maximum lift-to-drag ratio — the most efficient flight condition — occurs at a specific AoA where the ratio C_L/C_D peaks. For NACA 2412 this is around 4–6°.",
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
            <Link href="/learn/wings-and-lift/angle-of-attack" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
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
