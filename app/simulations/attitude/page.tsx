import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttitudeSimulation from "@/components/simulations/AttitudeSimulation";
import Link from "next/link";

export const metadata = {
  title: "Three Axes of Control — Simulations — AeroSolve Interactive",
  description: "Interactive attitude indicator showing pitch, roll, and yaw. Explore the three rotational degrees of freedom with preset maneuvers.",
};

export default function AttitudePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-[#536B84] mb-8">
            <Link href="/simulations" className="hover:text-[#4FC3F7] transition-colors">Simulations</Link>
            <span>/</span>
            <span className="text-[#8FA3BC]">Three Axes of Control</span>
          </nav>

          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Unit 4 — Stability & Control
            </p>
            <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-tight mb-3">
              Three Axes of Control
            </h1>
            <p className="font-sans text-[#8FA3BC] leading-relaxed max-w-2xl">
              An aircraft rotates about three independent axes: pitch (nose up/down via elevator),
              roll (wings bank via ailerons), and yaw (nose left/right via rudder). Real flight combines
              all three simultaneously — a coordinated turn uses all three axes at once.
            </p>
          </div>

          <AttitudeSimulation />

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Pitch — Elevator",
                desc: "The elevator (horizontal tail surface) deflects to pitch the nose up or down. Nose-up increases angle of attack and generates more lift — up to the stall angle.",
              },
              {
                title: "Roll — Ailerons",
                desc: "Ailerons on the outer wing trailing edge deflect differentially: one up, one down. The up aileron reduces lift, the down aileron increases it — rolling the aircraft.",
              },
              {
                title: "Yaw — Rudder",
                desc: "The rudder (vertical tail) swings the nose left or right. In a banked turn, rudder corrects adverse yaw — the tendency of the low wing to drag backwards.",
              },
              {
                title: "Coordinated turns",
                desc: "A proper turn uses aileron to bank, elevator to maintain altitude (load factor increases), and rudder to stay coordinated (ball centered). All three axes work together.",
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
            <Link href="/learn/stability-and-control/pitch-roll-and-yaw" className="flex items-center gap-2 font-mono text-sm text-[#4FC3F7] hover:text-[#7dd9ff] transition-colors">
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
