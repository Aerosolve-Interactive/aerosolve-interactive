import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import IconBadge from "@/components/ui/IconBadge";
import Badge from "@/components/ui/Badge";
import { AppIcon, type IconName } from "@/components/ui/AppIcon";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";
import { getUnitIcon } from "@/lib/visuals";

export const metadata = {
  title: "About — AeroSolve Interactive",
  description:
    "The mission behind AeroSolve Interactive: making aerospace engineering education accessible to every student.",
};

const VALUES: Array<{
  icon: IconName;
  title: string;
  description: string;
  tone: "cyan" | "gold" | "blue" | "indigo";
}> = [
  {
    icon: "target",
    title: "Accuracy First",
    description:
      "Lessons stay grounded in real aerospace engineering and are written to correct myths instead of repeating them for convenience.",
    tone: "cyan",
  },
  {
    icon: "shield",
    title: "Accessible By Default",
    description:
      "No paywall, no required account, and no inflated production barrier. The goal is reliable access, not gated access.",
    tone: "gold",
  },
  {
    icon: "chart",
    title: "Evidence-Based Learning",
    description:
      "Projects and activities ask students to measure, average, compare, explain, and iterate using data.",
    tone: "blue",
  },
  {
    icon: "book",
    title: "Written For Real Study",
    description:
      "The platform is built for reference, re-reading, and active problem solving rather than passive watching.",
    tone: "indigo",
  },
];

export default function AboutPage() {
  const publishedCount = lessons.filter((lesson) => lesson.status === "published").length;

  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <PageHeader
          eyebrow="About AeroSolve"
          title="A student-built platform designed to feel bigger than a school project."
          description="AeroSolve Interactive started from a simple gap: serious aerospace learning resources for students are harder to find than they should be. So the goal became to build one that feels modern, credible, and genuinely useful."
          meta={
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [String(publishedCount), "Published lessons"],
                [String(units.length), "Structured units"],
              ].map(([value, label]) => (
                <div key={label} className="premium-panel rounded-[24px] px-5 py-5">
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

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow mb-3">Why It Started</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              Aerospace deserves better student-facing learning tools.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Too often, aerospace education for students is either oversimplified into
              trivia or hidden behind expensive programs. AeroSolve was built to sit in the
              middle: serious enough to respect the subject, accessible enough for a student
              to open it and start learning right away.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The design goal is not just “make a website.” It is to make a learning platform
              that feels trustworthy to teachers, useful to students, and credible to the
              nonprofits and community programs that want to use it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Accessibility", "Free forever. No account wall. No ad-driven friction."],
              ["Engineering", "Lessons focus on systems, forces, tradeoffs, and applied reasoning."],
              ["Curiosity", "The platform invites students to ask why things work and then test it."],
              ["Service", "Outreach turns the curriculum outward to schools and partners that need it most."],
            ].map(([title, text], index) => (
              <article key={title} className="premium-panel rounded-[24px] p-5">
                <Badge tone={index % 2 === 0 ? "cyan" : "blue"}>{title}</Badge>
                <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="eyebrow mb-3">Values</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              What guides the platform.
            </h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {VALUES.map((value) => (
                <article key={value.title} className="premium-panel card-hover rounded-[28px] p-6">
                  <div className="flex items-center gap-4">
                    <IconBadge tone={value.tone}>
                      <AppIcon name={value.icon} />
                    </IconBadge>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                      {value.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Curriculum Roadmap</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                The platform grows through the learning path.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              The order matters: fundamentals first, then motion, lift, control,
              propulsion, and structures. It’s built as a real engineering sequence.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {units.map((unit, index) => (
              <Link key={unit.slug} href={`/learn/${unit.slug}`} className="group block">
                <article className="premium-panel card-hover h-full rounded-[28px] p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge tone="cyan">
                      <AppIcon name={getUnitIcon(unit.slug)} />
                    </IconBadge>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {unit.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300/90">{unit.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{unit.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <article className="premium-panel rounded-[28px] p-6">
                <p className="eyebrow mb-3">Outreach Connection</p>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                  The curriculum is meant to leave the screen.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The same platform that teaches lift, structures, and propulsion can be
                  packaged into kits for schools and community programs. That’s why outreach
                  is not separate from AeroSolve. It is the service arm of the same idea.
                </p>
              </article>
              <article className="premium-panel rounded-[28px] p-6">
                <p className="eyebrow mb-3">Future Roadmap</p>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                  More simulations, more labs, deeper engineering tools.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The platform should keep evolving toward richer simulations, stronger lab
                  documentation, and a learning experience good enough to show teachers,
                  nonprofits, and college programs with confidence.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="premium-panel-strong rounded-[32px] p-8 text-center md:p-10">
            <p className="eyebrow mx-auto w-fit">Next Step</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl">
              Start learning or help the program grow.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              AeroSolve is equal parts curriculum, engineering practice, and service project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950"
              >
                Start learning
                <AppIcon name="spark" className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/outreach"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200"
              >
                Outreach program
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
