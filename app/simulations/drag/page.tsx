import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DragSimulation from "@/components/simulations/DragSimulation";
import Link from "next/link";

export const metadata = {
  title: "Drag Coefficient Comparator — Simulations — AeroSolve Interactive",
  description: "Compare drag forces across six body shapes using D = ½ρV²SC_D. Interactive drag-vs-speed chart shows parasitic and induced drag components.",
};

export default function DragPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">Drag Coefficient Comparator</span>
          </nav>

          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 3 — Wings & Lift
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              Drag Coefficient Comparator
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              Aerodynamic drag equals ½ρV²SC<sub>D</sub>. The shape determines C<sub>D</sub> — ranging from 2.0 for a
              flat plate to 0.012 for a NACA airfoil. That&apos;s a 167× difference in drag force from shape alone.
              The drag polar chart shows how parasitic and induced drag trade off with speed.
            </p>
          </div>

          <DragSimulation />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Drag equation: D = ½ρV²SC_D",
                desc: "Dynamic pressure (½ρV²) multiplied by reference area (S) and drag coefficient (C_D). At twice the speed, drag is four times greater — the V² relationship drives everything about aircraft design.",
              },
              {
                title: "Parasitic drag grows with V²",
                desc: "Form drag, skin friction, and interference drag all increase with the square of velocity. A sleek airfoil cuts C_D by 100× compared to a flat plate — critical at high speeds.",
              },
              {
                title: "Induced drag falls with V²",
                desc: "Induced drag (from lift generation) decreases as speed increases because C_L decreases. At low speed (high C_L), induced drag dominates. This creates a drag minimum at the best L/D speed.",
              },
              {
                title: "Total drag minimum = best range",
                desc: "Where total drag is minimum is where L/D is maximum — this is the best-range airspeed for a jet aircraft. Flying faster or slower than this point increases fuel consumption.",
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
            <Link href="/learn/wings-and-lift/lift-and-drag" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
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
