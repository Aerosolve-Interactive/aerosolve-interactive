import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitCard from "@/components/UnitCard";
import PageHeader from "@/components/ui/PageHeader";
import IconBadge from "@/components/ui/IconBadge";
import Badge from "@/components/ui/Badge";
import { AppIcon } from "@/components/ui/AppIcon";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";

export const metadata = {
  title: "Learn Aerospace Engineering — AeroSolve Interactive",
  description:
    "Six structured units covering flight fundamentals, aerodynamics, propulsion, structures, and more.",
};

export default function LearnPage() {
  const totalPublished = lessons.filter((lesson) => lesson.status === "published").length;

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <PageHeader
          eyebrow="Learning Dashboard"
          title="Structured aerospace learning paths."
          description="Move through six connected units that teach flight, rockets, aerodynamics, structures, and engineering design in a sequence built for students, teachers, and STEM programs."
          meta={
            <div className="grid min-w-[280px] gap-3 sm:grid-cols-2">
              {[
                ["30+", "Published lessons"],
                ["6", "Course units"],
              ].map(([value, label]) => (
                <div key={label} className="premium-panel rounded-[24px] px-5 py-5 text-left">
                  <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-slate-50">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          }
        />

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              {
                icon: "graduation" as const,
                title: "Guided path",
                description: "Units are sequenced to build vocabulary, equations, intuition, and applied design judgment.",
              },
              {
                icon: "clipboard" as const,
                title: "Quick checks",
                description: "Every lesson ends with a short assessment and explanation so students can verify understanding immediately.",
              },
              {
                icon: "flask" as const,
                title: "Hands-on labs",
                description: "Activities and projects are framed as engineering challenges with materials, tests, and data collection.",
              },
              {
                icon: "orbit" as const,
                title: `${totalPublished} live now`,
                description: "The current branch contains a full 30-lesson path across six aerospace domains.",
              },
            ].map((item, index) => (
              <article key={item.title} className="premium-panel rounded-[24px] p-5">
                <div className="flex items-center justify-between">
                  <IconBadge tone={index === 1 ? "blue" : index === 2 ? "gold" : "cyan"}>
                    <AppIcon name={item.icon} />
                  </IconBadge>
                  <Badge tone="neutral">Learning path</Badge>
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">All Units</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Choose a module or follow the full sequence.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Every unit keeps the same structure: mission framing, written lesson content,
              quick checks, key terms, and engineering challenges.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {units.map((unit) => {
              const published = lessons.filter(
                (lesson) => lesson.unitSlug === unit.slug && lesson.status === "published",
              ).length;
              return <UnitCard key={unit.slug} unit={unit} publishedCount={published} />;
            })}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="eyebrow mb-4">How It Works</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                  Read, test, build, improve.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                  The platform is designed to feel like a serious engineering workflow,
                  not a content feed. Students move from concept to challenge to review
                  in one continuous loop.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Read the lesson",
                    text: "Written modules prioritize clarity, scanability, and real aerospace language over filler.",
                    icon: "book" as const,
                  },
                  {
                    number: "02",
                    title: "Take the quick check",
                    text: "Short quizzes reinforce concepts immediately with feedback and explanations.",
                    icon: "clipboard" as const,
                  },
                  {
                    number: "03",
                    title: "Try the challenge",
                    text: "Activities and labs push students to build, measure, analyze, and iterate.",
                    icon: "wrench" as const,
                  },
                ].map((step, index) => (
                  <article key={step.number} className="premium-panel rounded-[24px] p-5">
                    <div className="flex items-center justify-between">
                      <IconBadge tone={index === 2 ? "gold" : "cyan"}>
                        <AppIcon name={step.icon} />
                      </IconBadge>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
