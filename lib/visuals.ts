import type { IconName } from "@/components/ui/AppIcon";

export function getUnitIcon(slug: string): IconName {
  switch (slug) {
    case "flight-fundamentals":
      return "plane";
    case "forces-and-motion":
      return "rocket";
    case "wings-and-lift":
      return "wings";
    case "stability-and-control":
      return "compass";
    case "rockets-and-propulsion":
      return "orbit";
    case "structures-and-materials":
      return "layers";
    default:
      return "spark";
  }
}

export function getDifficultyTone(
  difficulty: "Beginner" | "Intermediate" | "Advanced",
): "cyan" | "gold" | "orange" {
  switch (difficulty) {
    case "Beginner":
      return "cyan";
    case "Intermediate":
      return "gold";
    case "Advanced":
      return "orange";
  }
}

export function getKitIcon(slug: string): IconName {
  switch (slug) {
    case "foam-glider-stem-kit":
      return "plane";
    case "paper-helicopter-drop-test-kit":
      return "activity";
    case "straw-rocket-launcher-kit":
      return "rocket";
    case "parachute-payload-drop-kit":
      return "shield";
    case "glider-launcher-stand":
      return "target";
    case "mini-wind-tunnel-flow-visualizer":
      return "wings";
    case "arduino-shake-table-structural-test-rig":
      return "activity";
    case "adjustable-rocket-fin-test-fixture":
      return "rocket";
    case "payload-parachute-capsule-challenge":
      return "boxes";
    case "rocket-fin-stability-kit":
      return "target";
    default:
      return "boxes";
  }
}
