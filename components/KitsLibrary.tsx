"use client";

import { useMemo, useState } from "react";
import KitCard from "@/components/KitCard";
import Badge from "@/components/ui/Badge";
import type { Kit } from "@/data/kits";
import { getKitCostCeiling } from "@/data/kits";

type FilterKey = "All" | "Basic" | "Advanced" | "CAD-ready" | "Under $1" | "Under $10" | "Under $25";

const filters: FilterKey[] = ["All", "Basic", "Advanced", "CAD-ready", "Under $1", "Under $10", "Under $25"];

function matchesFilter(kit: Kit, filter: FilterKey) {
  const ceiling = getKitCostCeiling(kit);

  switch (filter) {
    case "All":
      return true;
    case "Basic":
      return kit.level === "Basic";
    case "Advanced":
      return kit.level === "Advanced";
    case "CAD-ready":
      return kit.level === "Advanced" && Boolean(kit.cadFiles?.length);
    case "Under $1":
      return ceiling <= 1;
    case "Under $10":
      return ceiling <= 10;
    case "Under $25":
      return ceiling <= 25;
    default:
      return true;
  }
}

export default function KitsLibrary({ kits }: { kits: Kit[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered = useMemo(
    () => kits.filter((kit) => matchesFilter(kit, activeFilter)),
    [activeFilter, kits],
  );

  const basicKits = filtered.filter((kit) => kit.level === "Basic");
  const advancedKits = filtered.filter((kit) => kit.level === "Advanced");

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all",
                active
                  ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                  : "border-white/8 bg-white/[0.03] text-slate-400 hover:border-white/14 hover:text-slate-200",
              ].join(" ")}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Basic Outreach Kits</p>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-50">
              Low-cost guides for classrooms, libraries, and volunteer events.
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="cyan">{basicKits.length} shown</Badge>
            <Badge tone="blue">Best for fast setup</Badge>
          </div>
        </div>

        {basicKits.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {basicKits.map((kit) => (
              <KitCard key={kit.slug} kit={kit} />
            ))}
          </div>
        ) : (
          <div className="premium-panel rounded-[24px] p-6 text-sm text-slate-300">
            No basic guides match the current filter.
          </div>
        )}
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Advanced CAD-Ready Kits</p>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-50">
              More structured builds with optional 3D-printable parts.
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="indigo">CAD support</Badge>
            <Badge tone="gold">Up to $25</Badge>
            <Badge tone="blue">3D-printable parts optional</Badge>
          </div>
        </div>

        {advancedKits.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {advancedKits.map((kit) => (
              <KitCard key={kit.slug} kit={kit} />
            ))}
          </div>
        ) : (
          <div className="premium-panel rounded-[24px] p-6 text-sm text-slate-300">
            No advanced guides match the current filter.
          </div>
        )}
      </section>
    </div>
  );
}
