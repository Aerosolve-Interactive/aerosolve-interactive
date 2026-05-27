import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon, type IconName } from "@/components/ui/AppIcon";

export const metadata = {
  title: "Outreach — AeroSolve Interactive",
  description:
    "AeroSolve Interactive Outreach is a volunteer-based aerospace toy and model building program focused on community impact, STEM inspiration, and meaningful service.",
};

const MISSION_CARDS: Array<{
  title: string;
  description: string;
  icon: IconName;
  tone: "cyan" | "gold" | "blue";
}> = [
  {
    title: "Build",
    description:
      "Volunteers help create aerospace-themed toys, models, and simple hands-on learning objects.",
    icon: "wrench",
    tone: "cyan",
  },
  {
    title: "Donate",
    description:
      "Completed projects can be donated to children, schools, nonprofits, libraries, hospitals, shelters, or other community partners.",
    icon: "boxes",
    tone: "gold",
  },
  {
    title: "Inspire",
    description:
      "Each build is meant to introduce younger kids to aerospace, engineering, flight, and space in a fun and approachable way.",
    icon: "spark",
    tone: "blue",
  },
];

const BUILD_EXAMPLES: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Gliders & Flyers",
    description:
      "Simple aircraft-themed builds that make lift, balance, and control surfaces feel tangible.",
    icon: "plane",
  },
  {
    title: "Rocket Models",
    description:
      "Small rocket-themed creations that can introduce thrust, staging, and space exploration in an approachable way.",
    icon: "rocket",
  },
  {
    title: "Space & Flight Toys",
    description:
      "Friendly aerospace-themed objects designed to spark imagination and curiosity in younger students.",
    icon: "orbit",
  },
];

const PROCESS_STEPS = [
  {
    title: "Choose a Build",
    description:
      "We select a simple aerospace-themed toy or educational model that can be made safely and affordably.",
  },
  {
    title: "Recruit Volunteers",
    description:
      "Students and community volunteers sign up to help with building, organizing materials, packaging, and outreach.",
  },
  {
    title: "Build Together",
    description:
      "Volunteers meet during organized build sessions to assemble the toys or models.",
  },
  {
    title: "Donate the Projects",
    description:
      "Finished builds are donated to community partners so they can reach children who may benefit from hands-on STEM inspiration.",
  },
  {
    title: "Grow the Impact",
    description:
      "As the program expands, AeroSolve Interactive can track builds, partners, volunteers, and outreach events.",
  },
];

const VOLUNTEER_ROLES: Array<{
  title: string;
  description: string;
  icon: IconName;
  tone: "cyan" | "gold" | "blue" | "indigo";
}> = [
  {
    title: "Builders",
    description:
      "Assemble aerospace-themed toys and models during volunteer build sessions.",
    icon: "wrench",
    tone: "cyan",
  },
  {
    title: "Project Leads",
    description:
      "Help plan build events, guide volunteers, and keep projects organized from start to finish.",
    icon: "target",
    tone: "gold",
  },
  {
    title: "Materials Team",
    description:
      "Organize supplies, prep build instructions, and keep each event ready to run smoothly.",
    icon: "clipboard",
    tone: "blue",
  },
  {
    title: "Partner Outreach Team",
    description:
      "Connect with schools, nonprofits, and community groups that may want to receive donated builds.",
    icon: "users",
    tone: "indigo",
  },
  {
    title: "Media Team",
    description:
      "Document events, capture photos, and help tell the story of the program’s impact.",
    icon: "satellite",
    tone: "cyan",
  },
];

const IMPACT_STATS = [
  ["Coming Soon", "Toys Built"],
  ["Coming Soon", "Volunteer Hours"],
  ["Coming Soon", "Outreach Events"],
  ["Coming Soon", "Community Partners"],
] as const;

const FUTURE_VISION = [
  "Larger aerospace toy-building drives led by students and volunteers.",
  "Student-led STEM workshops connected to local service events.",
  "School and nonprofit partnerships that align online learning with real community impact.",
  "Donation events focused on aerospace craft days for younger students.",
  "Volunteer leadership roles that let older students organize and mentor others.",
  "A stronger connection between AeroSolve Interactive’s online lessons and physical outreach projects.",
] as const;

export default function OutreachPage() {
  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <section className="section-shell border-b border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.18),transparent_24%),linear-gradient(180deg,rgba(7,17,31,0.92),rgba(3,7,18,0.88))]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-18 md:pb-24 md:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <Badge tone="cyan" className="mb-6">
                Volunteer-based aerospace outreach
              </Badge>
              <h1 className="max-w-4xl font-display text-[clamp(2.9rem,6vw,5.1rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-slate-50">
                Building Aerospace Toys.
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  Inspiring Future Engineers.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                AeroSolve Interactive Outreach brings students and volunteers together
                to create aerospace-themed toys and educational models that can be
                donated to children and community organizations.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_46px_rgba(37,99,235,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Volunteer With Us
                  <AppIcon name="users" className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#partner"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25"
                >
                  Partner With Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-6 top-6 h-64 rounded-full bg-cyan-400/20 blur-[120px]" />
              <div className="premium-panel-strong relative rounded-[32px] p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="eyebrow">Outreach Flight Deck</p>
                    <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                      Student-Led Build Sessions
                    </h2>
                  </div>
                  <IconBadge tone="cyan" className="h-12 w-12">
                    <AppIcon name="rocket" />
                  </IconBadge>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Build", "Toys & models"],
                    ["Serve", "Community impact"],
                    ["Inspire", "Future engineers"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-slate-50">
                        {value}
                      </p>
                      <div className="mt-3 h-1.5 rounded-full bg-white/[0.06]">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width: `${[76, 68, 84][index]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-[#081120] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Volunteer mission flow
                    </p>
                    <AppIcon name="orbit" className="h-4 w-4 text-cyan-300" />
                  </div>
                  <svg viewBox="0 0 260 150" className="mt-4 h-40 w-full">
                    <defs>
                      <linearGradient id="outreach-arc" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#67E8F9" />
                        <stop offset="55%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="260" height="150" rx="18" fill="rgba(255,255,255,0.02)" />
                    <path
                      d="M22 112c18-12 38-30 62-42 33-16 71-20 154-18"
                      stroke="url(#outreach-arc)"
                      strokeWidth="2.4"
                      fill="none"
                      className="hero-orbit"
                    />
                    <circle cx="22" cy="112" r="4" fill="#67E8F9" />
                    <circle cx="111" cy="63" r="5" fill="#38BDF8" />
                    <circle cx="236" cy="52" r="4" fill="#6366F1" />
                    <text x="18" y="132" fill="#94A3B8" fontSize="9" fontFamily="monospace">Build</text>
                    <text x="96" y="46" fill="#94A3B8" fontSize="9" fontFamily="monospace">Donate</text>
                    <text x="214" y="36" fill="#94A3B8" fontSize="9" fontFamily="monospace">Inspire</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Our Outreach Mission</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Hands-on aerospace learning with real community purpose.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              At AeroSolve Interactive, we believe aerospace should feel exciting,
              understandable, and accessible. Our outreach program is designed to
              bring volunteers together to build simple aerospace-themed toys and
              educational models that can spark curiosity in younger students and
              children across the community.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {MISSION_CARDS.map((card) => (
              <article key={card.title} className="premium-panel card-hover rounded-[28px] p-6">
                <div className="flex items-center gap-4">
                  <IconBadge tone={card.tone}>
                    <AppIcon name={card.icon} />
                  </IconBadge>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {BUILD_EXAMPLES.map((item) => (
              <article key={item.title} className="premium-panel rounded-[24px] p-5">
                <div className="flex items-center gap-3">
                  <IconBadge tone="blue" className="h-10 w-10 rounded-xl">
                    <AppIcon name={item.icon} className="h-4 w-4" />
                  </IconBadge>
                  <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              A clear path from volunteering to impact.
            </h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <article key={step.title} className="premium-panel rounded-[24px] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Volunteer Through Aerospace Outreach</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Service, teamwork, leadership, and STEM.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              This program gives students a way to earn service hours, practice
              teamwork, build leadership skills, and contribute to a real
              community-focused aerospace project.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {VOLUNTEER_ROLES.map((role) => (
              <article key={role.title} className="premium-panel card-hover rounded-[28px] p-6">
                <div className="flex items-center gap-4">
                  <IconBadge tone={role.tone}>
                    <AppIcon name={role.icon} />
                  </IconBadge>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                    {role.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="eyebrow mb-3">Impact Section</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              Transparent progress, no inflated claims.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              We are not claiming outcomes that have not happened yet. These
              placeholders leave room for the program to grow honestly.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {IMPACT_STATS.map(([value, label]) => (
                <article key={label} className="premium-panel rounded-[24px] p-5">
                  <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-slate-50 md:text-5xl">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partner" className="mx-auto max-w-7xl px-6 py-20">
          <div className="premium-panel-strong rounded-[32px] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="eyebrow mb-3">Partner With AeroSolve Interactive</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                  A growing outreach initiative for schools and community organizations.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  We are looking to connect with schools, libraries, nonprofits,
                  children&apos;s organizations, hospitals, shelters, and community
                  groups interested in receiving aerospace-themed toy donations or
                  supporting STEM outreach.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  The goal is to build something organized, welcoming, and useful:
                  a program that parents, educators, nonprofits, and sponsors can
                  look at and recognize as thoughtful and credible.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="premium-panel rounded-[24px] p-5">
                  <div className="flex items-center gap-3">
                    <IconBadge tone="cyan" className="h-10 w-10 rounded-xl">
                      <AppIcon name="users" className="h-4 w-4" />
                    </IconBadge>
                    <div>
                      <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                        Community-ready partnerships
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Outreach partners can help connect donated builds to younger
                        students and children who may benefit from accessible STEM inspiration.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_46px_rgba(37,99,235,0.26)]"
                >
                  Contact Us About a Partnership
                  <AppIcon name="spark" className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-200"
                >
                  Volunteer With Us
                </a>
                <p className="text-xs leading-6 text-slate-500">
                  {/* PASTE YOUR GOOGLE FORM LINK HERE */}
                  {/* PASTE YOUR NONPROFIT CONTACT FORM LINK HERE */}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="premium-panel rounded-[32px] p-8 md:p-10">
            <p className="eyebrow mb-3">Where Outreach Can Grow</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              A future built around service and aerospace curiosity.
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {FUTURE_VISION.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
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
