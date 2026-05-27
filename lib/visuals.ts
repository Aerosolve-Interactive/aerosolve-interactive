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
    case "parachute-drop-challenge-kit":
      return "shield";
    case "wing-shape-experiment-kit":
      return "wings";
    case "rocket-fin-stability-kit":
      return "target";
    default:
      return "boxes";
  }
}
