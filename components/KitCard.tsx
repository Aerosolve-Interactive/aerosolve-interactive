import Link from "next/link";
import type { Kit } from "@/data/kits";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";
import { getDifficultyTone, getKitIcon } from "@/lib/visuals";

interface KitCardProps {
  kit: Kit;
}

export default function KitCard({ kit }: KitCardProps) {
  const difficultyTone = getDifficultyTone(kit.difficulty);
  const levelTone = kit.level === "Advanced" ? "indigo" : "cyan";

  return (
    <Link href={`/kits/${kit.slug}`} className="group block h-full">
      <article className="premium-panel card-hover h-full rounded-[28px] p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <IconBadge tone={kit.level === "Advanced" ? "gold" : "cyan"}>
              <AppIcon name={getKitIcon(kit.slug)} />
            </IconBadge>
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone={levelTone}>{kit.level}</Badge>
                <Badge tone={difficultyTone}>{kit.difficulty}</Badge>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Ages {kit.ageRange}
              </p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            {kit.estimatedTime}
          </span>
        </div>

        <div className="mt-7">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-50 transition-colors group-hover:text-white">
            {kit.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{kit.description}</p>
        </div>

        <div className="mt-6 grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.025] p-4 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Estimated material cost
            </p>
            <p className="mt-2 text-sm text-slate-200">{kit.estimatedMaterialCost}</p>
            {kit.maxMaterialCost ? (
              <p className="mt-1 text-xs text-slate-500">{kit.maxMaterialCost}</p>
            ) : null}
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Concepts taught
            </p>
            <p className="mt-2 text-sm text-slate-200">{kit.concepts.slice(0, 2).join(" | ")}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {kit.level === "Advanced" ? <Badge tone="indigo">CAD support</Badge> : null}
          {kit.level === "Advanced" ? <Badge tone="blue">3D-printable parts optional</Badge> : null}
          {kit.level === "Advanced" && kit.maxMaterialCost ? <Badge tone="gold">{kit.maxMaterialCost}</Badge> : null}
          {kit.concepts.slice(0, 3).map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400"
            >
              {concept}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Materials preview
          </p>
          <ul className="mt-3 space-y-2">
            {kit.materials.slice(0, 3).map((material) => (
              <li key={material.item} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>
                  {material.item}
                  <span className="text-slate-500"> · {material.quantity}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Free build guide
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition-transform group-hover:translate-x-1">
            View build guide
            <AppIcon name="spark" className="h-3.5 w-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
