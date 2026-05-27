import Link from "next/link";
import { AppIcon } from "@/components/ui/AppIcon";
import IconBadge from "@/components/ui/IconBadge";

const learnLinks = [
  ["Flight Fundamentals", "/learn/flight-fundamentals"],
  ["Forces & Motion", "/learn/forces-and-motion"],
  ["Wings & Lift", "/learn/wings-and-lift"],
  ["Stability & Control", "/learn/stability-and-control"],
  ["Rockets & Propulsion", "/learn/rockets-and-propulsion"],
  ["Structures & Materials", "/learn/structures-and-materials"],
] as const;

const programLinks = [
  ["Simulations", "/simulations"],
  ["Projects", "/projects"],
  ["Kits", "/kits"],
  ["Outreach", "/outreach"],
  ["About", "/about"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-slate-950/62 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="premium-panel rounded-[28px] p-7">
            <div className="flex items-center gap-3">
              <IconBadge tone="cyan" className="h-11 w-11 rounded-2xl">
                <AppIcon name="orbit" className="h-4.5 w-4.5" />
              </IconBadge>
              <div>
                <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                  AeroSolve Interactive
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  Learn. Solve. Build. Improve.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              Learn aerospace engineering through interactive lessons, projects, and
              real-world problem solving. Built to feel like a serious engineering
              platform, and kept free so students, teachers, and community programs
              can use it without barriers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/learn" className="btn-secondary px-4 py-2 text-cyan-200">
                <AppIcon name="graduation" className="h-3.5 w-3.5" />
                Learning Paths
              </Link>
              <Link href="/projects" className="btn-secondary px-4 py-2">
                <AppIcon name="flask" className="h-3.5 w-3.5" />
                Hands-On Labs
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Curriculum</p>
            <ul className="space-y-3">
              {learnLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Platform</p>
            <ul className="space-y-3">
              {programLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.18em]">
            Copyright {new Date().getFullYear()} AeroSolve Interactive
          </p>
          <p className="text-sm text-slate-400">
            Free forever for students, teachers, and outreach partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
