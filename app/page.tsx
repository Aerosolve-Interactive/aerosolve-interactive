import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitCard from "@/components/UnitCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBadge from "@/components/ui/IconBadge";
import Badge from "@/components/ui/Badge";
import { AppIcon } from "@/components/ui/AppIcon";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";
import { projects } from "@/data/projects";

const MARQUEE_ITEMS = [
  "Lift & Drag",
  "Newton's Laws",
  "Rocket Propulsion",
  "Airfoil Design",
  "Stability & Control",
  "Carbon Fiber",
  "Orbital Mechanics",
  "Flight Test Data",
  "Stall Recovery",
  "Specific Impulse",
  "Structures Lab",
  "Mission Design",
];

const missionCards = [
  {
    icon: "book" as const,
    title: "Learn the concepts",
    description:
      "Work through structured aerospace modules with real examples, engineered explanations, and clear progression from fundamentals to systems thinking.",
  },
  {
    icon: "flask" as const,
    title: "Build real projects",
    description:
      "Use the curriculum to move from theory into paper gliders, structural shake tables, data tables, and engineering challenge workflows.",
  },
  {
    icon: "chart" as const,
    title: "Test with data",
    description:
      "Every project and activity is framed around measurement, evidence, iteration, and explaining why a design improved or failed.",
  },
];

const interactiveCards = [
  {
    title: "Quick Check",
    description: "Five-question quizzes with guided explanations and progress tracking.",
    icon: "clipboard" as const,
    tone: "cyan" as const,
  },
  {
    title: "Engineering Challenge",
    description: "Build-Test-Improve activities that connect equations to hands-on decisions.",
    icon: "wrench" as const,
    tone: "gold" as const,
  },
  {
    title: "Key Terms",
    description: "Crisp technical vocabulary cards that make the lesson easier to review fast.",
    icon: "layers" as const,
    tone: "indigo" as const,
  },
];

const heroStats = [
  ["6", "Learning units"],
  [String(lessons.filter((lesson) => lesson.status === "published").length), "Lessons live"],
  ["6", "Hands-on projects"],
  ["Free", "Forever"],
] as const;

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="grid-texture flex-1 pt-[72px]">
        <section className="section-shell overflow-visible">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-18 md:pb-24 md:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <Badge tone="cyan" className="mb-6">
                Free aerospace STEM platform
              </Badge>
              <h1 className="max-w-4xl overflow-visible pb-4 font-display text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[1.06] tracking-[-0.07em] text-slate-50">
                <span className="block pb-[0.13em]">Solve aerospace problems.</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text pb-[0.13em] text-transparent">
                  Build real engineering skills.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                AeroSolve Interactive helps students learn flight, rockets,
                structures, and engineering design through interactive lessons,
                quizzes, hands-on projects, and outreach challenges.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_46px_rgba(37,99,235,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Start learning
                  <AppIcon name="spark" className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:text-white"
                >
                  Explore projects
                </Link>
                <Link
                  href="/outreach"
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
                >
                  View outreach
                </Link>
              </div>

              <div className="mt-10 flex max-w-3xl flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                {heroStats.map(([value, label]) => (
                  <div key={label} className="min-w-[120px]">
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                      {value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 top-10 h-64 rounded-full bg-cyan-400/20 blur-[120px]" />
              <div className="premium-panel-strong floating-card relative rounded-[32px] p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="eyebrow">Aerospace systems lab</p>
                    <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                      Flight Systems Module
                    </h2>
                  </div>
                  <IconBadge tone="cyan" className="h-12 w-12">
                    <AppIcon name="plane" />
                  </IconBadge>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Lift / Drag", "8.4"],
                    ["Stability", "92%"],
                    ["Lessons", "30+"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                        {value}
                      </p>
                      <div className="mt-3 h-1.5 rounded-full bg-white/[0.06]">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width: `${[72, 92, 84][index]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-[#081120] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Trajectory preview
                    </p>
                    <AppIcon name="orbit" className="h-4 w-4 text-cyan-300" />
                  </div>
                  <svg viewBox="0 0 240 140" className="mt-4 h-36 w-full">
                    <defs>
                      <linearGradient id="trajectory" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#67E8F9" />
                        <stop offset="55%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="240" height="140" rx="18" fill="rgba(255,255,255,0.02)" />
                    <path d="M18 104c22-10 43-31 64-46 29-22 59-31 140-34" stroke="url(#trajectory)" strokeWidth="2.4" fill="none" className="hero-orbit" />
                    <path d="M18 112h206" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
                    <circle cx="18" cy="104" r="4" fill="#67E8F9" />
                    <circle cx="153" cy="39" r="5" fill="#38BDF8" />
                    <circle cx="222" cy="24" r="4" fill="#6366F1" />
                  </svg>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge tone="blue">Lesson progress ready</Badge>
                    <Badge tone="indigo">Project workflows live</Badge>
                    <Badge tone="gold">Simulation-led learning</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-white/10 bg-[#07111f]/70 py-4">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-4 px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Mission"
            title="A premium learning dashboard for aerospace fundamentals."
            description="AeroSolve is built to feel like a serious engineering platform. Students learn core theory, run quick checks, move into labs, and connect each module to real aerospace systems."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {missionCards.map((card, index) => (
              <article key={card.title} className="premium-panel card-hover rounded-[28px] p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <IconBadge tone={index === 1 ? "gold" : index === 2 ? "indigo" : "cyan"}>
                    <AppIcon name={card.icon} />
                  </IconBadge>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/70">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Learning Paths"
              title="Six units. One guided aerospace foundation."
              description="Each unit feels like a real course module: clear scope, technical framing, and a progression from first principles into applied engineering."
              action={
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  Open the curriculum
                  <AppIcon name="spark" className="h-3.5 w-3.5" />
                </Link>
              }
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {units.map((unit) => {
                const published = lessons.filter(
                  (lesson) => lesson.unitSlug === unit.slug && lesson.status === "published",
                ).length;

                return <UnitCard key={unit.slug} unit={unit} publishedCount={published} />;
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Interactive Learning</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-slate-50 md:text-4xl">
                Lessons that feel guided, not static.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                AeroSolve combines written modules, quick checks, challenge boxes,
                and simulations so students can move between explanation, feedback,
                testing, and iteration without leaving the lesson flow.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Badge tone="cyan">Problem-solving modules</Badge>
                <Badge tone="blue">Interactive simulations</Badge>
                <Badge tone="green">Build-Test-Improve</Badge>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {interactiveCards.slice(0, 2).map((card) => (
                <article key={card.title} className="premium-panel card-hover rounded-[28px] p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <IconBadge tone={card.tone}>
                      <AppIcon name={card.icon} />
                    </IconBadge>
                    <div>
                      <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              <article className="premium-panel-strong rounded-[28px] p-6 md:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Mission Example
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                      Boeing, Saturn V, Wright Flyer, Falcon 9
                    </h3>
                  </div>
                  <IconBadge tone="blue">
                    <AppIcon name="satellite" />
                  </IconBadge>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Real aerospace examples anchor the platform so students learn
                  engineering decisions in context, not as isolated trivia.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Hands-On Labs"
              title="Projects framed like engineering challenges."
              description="Project pages are structured as lab guides with objectives, materials, build steps, test procedures, data tables, and extension paths."
              action={
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  Explore all labs
                  <AppIcon name="spark" className="h-3.5 w-3.5" />
                </Link>
              }
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Outreach Initiative</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-slate-50 md:text-4xl">
                Built for classrooms, nonprofits, and community STEM programs.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                AeroSolve Outreach packages aerospace learning into credible,
                low-cost, classroom-ready kit programs that schools and nonprofit
                partners can run without complex equipment.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Badge tone="cyan">Glider kits</Badge>
                <Badge tone="gold">Rocket kits</Badge>
                <Badge tone="blue">Engineering challenge kits</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/outreach"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300"
                >
                  View outreach
                  <AppIcon name="users" className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200"
                >
                  Why AeroSolve
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Kit Design", "Timeline"],
                ["Volunteer Build", "Build-ready"],
                ["Partner Delivery", "Mission-ready"],
              ].map(([title, status], index) => (
                <article key={title} className="premium-panel card-hover rounded-[28px] p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge tone={index % 2 === 0 ? "cyan" : "gold"}>
                      <AppIcon name={index === 0 ? "timeline" : index === 1 ? "boxes" : "users"} />
                    </IconBadge>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {status}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {index === 0
                      ? "Each outreach module is designed as a repeatable aerospace learning experience, not a one-off activity."
                      : index === 1
                        ? "Volunteer teams assemble, label, and quality-check each kit before it reaches a classroom."
                        : "Partner-facing materials are built to feel reliable, organized, and easy for educators to trust."}
                  </p>
                </article>
              ))}
              <article className="premium-panel-strong rounded-[28px] p-6 md:col-span-2">
                <div className="flex items-center gap-4">
                  <IconBadge tone="blue">
                    <AppIcon name="clipboard" />
                  </IconBadge>
                  <div>
                    <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                      Transparent impact reporting
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Outreach metrics stay honest, updateable, and easy to communicate to teachers, donors, and nonprofit partners.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="premium-panel-strong rounded-[32px] px-6 py-12 text-center md:px-10 md:py-16">
            <p className="eyebrow mx-auto w-fit">Next Step</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl">
              Start with flight fundamentals.
              <span className="block">Stay for the engineering mindset.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              AeroSolve is structured to help students read like engineers, build like
              engineers, and explain results like engineers.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_46px_rgba(37,99,235,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Start learning
                <AppIcon name="spark" className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25"
              >
                Explore projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
