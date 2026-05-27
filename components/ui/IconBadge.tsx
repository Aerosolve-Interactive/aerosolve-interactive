import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "cyan" | "blue" | "gold" | "indigo" | "green";
}

const toneMap = {
  cyan: "text-cyan-300 border-white/10 bg-white/[0.03]",
  blue: "text-blue-300 border-white/10 bg-white/[0.03]",
  gold: "text-amber-300 border-white/10 bg-white/[0.03]",
  indigo: "text-indigo-300 border-white/10 bg-white/[0.03]",
  green: "text-emerald-300 border-white/10 bg-white/[0.03]",
} as const;

export default function IconBadge({
  children,
  className,
  tone = "cyan",
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur-sm",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
