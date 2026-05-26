import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructureSimulation from "@/components/simulations/StructureSimulation";
import Link from "next/link";

export const metadata = {
  title: "Pratt Truss Analysis — Simulations — AeroSolve Interactive",
  description: "Load a Pratt truss and visualize tension and compression in each member. Change cross-section shapes and track the safety factor.",
};

export default function StructuresPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">Pratt Truss Analysis</span>
          </nav>

          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 6 — Structures & Materials
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              Pratt Truss Analysis
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              Trusses appear in aircraft wing internal structure, fuselage frames, and early biplane designs.
              The Pratt configuration puts vertical members in compression and diagonals in tension — the opposite
              of a Howe truss. Member width shows relative force magnitude.
            </p>
          </div>

          <StructureSimulation />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Tension vs Compression",
                desc: "Bottom chord members carry tension (being pulled apart). Top chord members carry compression (being squeezed). This is exactly like a simply-supported beam with the neutral axis in the middle.",
              },
              {
                title: "Safety Factor",
                desc: "Safety factor = yield stress / actual stress. Aerospace structures typically need SF ≥ 1.5 (limit load) to 2.0 (ultimate load). Below 1.5 means the structure may yield under design loads.",
              },
              {
                title: "Triangles are rigid",
                desc: "A triangle cannot deform without changing member lengths. Quadrilaterals can — they become parallelograms. This is why trusses use triangulated geometry: maximum stiffness per unit mass.",
              },
              {
                title: "Cross-section efficiency",
                desc: "An I-beam concentrates material far from the neutral axis, maximizing second moment of area (I) per unit weight. A hollow tube resists both bending and torsion. A solid rod wastes material in the middle.",
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
            <Link href="/learn/structures-and-materials/trusses-and-bracing" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
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
