"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AppIcon } from "@/components/ui/AppIcon";
import IconBadge from "@/components/ui/IconBadge";

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/simulations", label: "Simulations" },
  { href: "/projects", label: "Projects" },
  { href: "/kits", label: "Kits" },
  { href: "/outreach", label: "Outreach" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <IconBadge tone="cyan" className="h-11 w-11 rounded-2xl">
            <AppIcon name="orbit" className="h-4 w-4" />
          </IconBadge>
          <div>
            <p className="font-display text-[1.02rem] font-semibold leading-none tracking-[-0.03em] text-slate-50">
              AeroSolve Interactive
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
              Aerospace Systems Lab
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.025] px-2 py-1.5">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-all duration-300",
                      "font-medium text-slate-400 hover:text-white",
                      active && "bg-white/[0.05] text-slate-50 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/learn"
            className="btn-primary px-5 py-2.5"
          >
            Start Learning
            <AppIcon name="spark" className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.035] text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn("block h-0.5 w-5 bg-current transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-transform", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/8 bg-slate-950/94 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-sm transition-all",
                    active
                      ? "border-cyan-400/14 bg-cyan-400/[0.05] text-slate-50"
                      : "border-white/8 bg-white/[0.03] text-slate-300",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/learn"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center rounded-2xl px-4 py-3"
            >
              Start Learning
              <AppIcon name="spark" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
