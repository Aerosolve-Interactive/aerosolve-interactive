import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KitCard from "@/components/KitCard";
import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { kitBuildProcess, kitImpactStats, kits } from "@/data/kits";

export const metadata = {
  title: "AeroKits - AeroSolve Interactive",
  description:
    "Free aerospace STEM build guides for volunteers, teachers, students, and nonprofit outreach programs.",
};

export default function KitsPage() {
  return (
    <>
      <Navbar />
      <main className="grid-texture flex-1 pt-[72px]">
        <PageHeader
          eyebrow="AeroKits"
          title="Build aerospace STEM kits. Share engineering with kids."
          description="AeroKits provides free build guides for low-cost hands-on aerospace activities that volunteers, teachers, and students can use for outreach, classrooms, libraries, and nonprofit programs."
          meta={
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="#kit-library" className="btn-primary px-5 py-3">
                Explore Build Guides
                <AppIcon name="boxes" className="h-3.5 w-3.5" />
              </Link>
              <Link href="#build-event" className="btn-secondary px-5 py-3">
                Plan a Build Event
              </Link>
            </div>
          }
        />

        <section className="mx-auto max-w-7xl px-6 pt-8">
          <div className="rounded-[22px] border border-cyan-400/14 bg-cyan-400/[0.05] px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
              Free guides. No kits are sold here.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Mission</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Student-led outreach, built around simple aerospace activities.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              AeroKits helps student volunteers turn aerospace learning into community impact by
              building simple, safe, low-cost STEM activities for kids.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Learn",
                text: "Kids explore flight, rockets, stability, and design through guided hands-on aerospace activities.",
                icon: "graduation" as const,
                tone: "cyan" as const,
              },
              {
                title: "Build",
                text: "Volunteers assemble simple STEM activity kits using low-cost materials they can gather and sort themselves.",
                icon: "wrench" as const,
                tone: "gold" as const,
              },
              {
                title: "Share",
                text: "The finished guides can support workshops or donation-ready builds for nonprofits, schools, libraries, and youth programs.",
                icon: "users" as const,
                tone: "blue" as const,
              },
            ].map((item) => (
              <article key={item.title} className="premium-panel card-hover rounded-[28px] p-6">
                <div className="flex items-start gap-4">
                  <IconBadge tone={item.tone}>
                    <AppIcon name={item.icon} />
                  </IconBadge>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="kit-library" className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3">Kit Library</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                  Six free build guides for outreach and classroom use.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                These are educational guide cards, not products. Each one outlines materials
                needed, volunteer prep, kid build steps, and a science explanation that can be
                used in a workshop or donation setting.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {kits.map((kit) => (
                <KitCard key={kit.slug} kit={kit} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8">
            <p className="eyebrow mb-3">Build Event Process</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
              A simple workflow for volunteer-led kit building.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-6">
            {kitBuildProcess.map((step, index) => (
              <article key={step} className="premium-panel rounded-[24px] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  0{index + 1}
                </p>
                <p className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07111f]/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-8">
              <p className="eyebrow mb-3">Impact Tracker</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                Placeholder metrics for the first build event.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                These numbers are placeholders until the first build event is completed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {kitImpactStats.map((stat) => (
                <article key={stat.label} className="premium-panel rounded-[24px] p-5">
                  <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-slate-50 md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="build-event" className="mx-auto max-w-7xl px-6 pb-24 pt-20">
          <div className="premium-panel-strong rounded-[32px] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="eyebrow mb-3">Build Event Planning</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
                  Planning a STEM outreach event?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Use AeroKits guides to organize a volunteer build day, prepare donation-ready
                  activities, or run a hands-on aerospace workshop for kids.
                </p>
              </div>

              <div className="grid gap-4">
                <a href="#" className="btn-primary justify-center px-6 py-3.5">
                  Volunteer Interest Form
                  <AppIcon name="users" className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="btn-secondary justify-center px-6 py-3.5">
                  Nonprofit Partner Form
                </a>
                <p className="text-xs leading-6 text-slate-500">
                  {/* PASTE YOUR GOOGLE FORM LINK HERE for volunteer interest */}
                  {/* PASTE YOUR GOOGLE FORM LINK HERE for nonprofit partners */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
