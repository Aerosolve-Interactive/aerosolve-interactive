import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitCard from "@/components/UnitCard";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";

export const metadata = {
  title: "Learn Aerospace Engineering — AeroSolve Interactive",
  description:
    "Six structured units covering flight fundamentals, aerodynamics, propulsion, structures, and more.",
};

export default function LearnPage() {
  const totalPublished = lessons.filter((l) => l.status === "published").length;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
            Curriculum
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl tracking-[-0.04em] leading-tight mb-3">
                The Full Curriculum
              </h1>
              <p className="font-sans text-[#8FA3BC] text-lg max-w-xl leading-relaxed">
                Six units building from basic flight physics to advanced structures
                and propulsion. Work through them in order, or jump to what interests you.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] px-5 py-4 text-center">
                <p className="font-display font-extrabold text-3xl text-white tracking-[-0.04em]">
                  {totalPublished}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#4FC3F7] mt-1">
                  Live Lessons
                </p>
              </div>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] px-5 py-4 text-center">
                <p className="font-display font-extrabold text-3xl text-white tracking-[-0.04em]">
                  6
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#4FC3F7] mt-1">
                  Units
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Units grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map((unit) => {
              const published = lessons.filter(
                (l) => l.unitSlug === unit.slug && l.status === "published"
              ).length;
              return <UnitCard key={unit.slug} unit={unit} publishedCount={published} />;
            })}
          </div>
        </section>

        {/* Learning path explainer */}
        <section className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-6">
              How it works
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Read the lesson",
                  desc: "Each lesson is a fully written piece — no video required, no account needed. Real content, every time.",
                  color: "#4FC3F7",
                },
                {
                  num: "02",
                  title: "Take the quiz",
                  desc: "Five questions with instant feedback and full explanations for every answer. Letter labels, progress dots, final score.",
                  color: "#F4C842",
                },
                {
                  num: "03",
                  title: "Try the activity",
                  desc: "Every lesson ends with a hands-on activity using everyday materials. Build it, test it, connect it to the theory.",
                  color: "#FF6B5B",
                },
              ].map(({ num, title, desc, color }) => (
                <div key={num} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6">
                  <p className="font-mono text-3xl font-bold mb-3" style={{ color }}>
                    {num}
                  </p>
                  <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em] mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-sm text-[#536B84] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
