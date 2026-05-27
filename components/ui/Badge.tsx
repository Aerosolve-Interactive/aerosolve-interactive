import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "cyan" | "blue" | "gold" | "green" | "orange" | "indigo";
  className?: string;
}

const toneMap = {
  neutral: "border-white/10 bg-white/[0.035] text-slate-300",
  cyan: "border-cyan-400/14 bg-cyan-400/[0.06] text-cyan-300",
  blue: "border-blue-400/14 bg-blue-400/[0.06] text-blue-300",
  gold: "border-amber-400/14 bg-amber-400/[0.06] text-amber-300",
  green: "border-emerald-400/14 bg-emerald-400/[0.06] text-emerald-300",
  orange: "border-orange-400/14 bg-orange-400/[0.06] text-orange-300",
  indigo: "border-indigo-400/14 bg-indigo-400/[0.06] text-indigo-300",
} as const;

export default function Badge({
  children,
  tone = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
