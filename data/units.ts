export interface Unit {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  lessonCount: number;
  estimatedHours: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
}

export const units: Unit[] = [
  {
    slug: "flight-fundamentals",
    title: "Flight Fundamentals",
    tagline: "Why things fly — and why they don't.",
    description:
      "Start here. Understand what aerospace engineering is, meet the four forces that govern every flight, and see how engineers balance competing priorities in real aircraft.",
    icon: "✈",
    accentColor: "#4FC3F7",
    lessonCount: 5,
    estimatedHours: 2,
    difficulty: "Beginner",
    topics: [
      "Aeronautics vs. Astronautics",
      "Four Forces of Flight",
      "Engineering Design Process",
      "Aircraft Tradeoffs",
      "Mission Design",
    ],
  },
  {
    slug: "forces-and-motion",
    title: "Forces & Motion",
    tagline: "Newton's laws meet jet exhaust.",
    description:
      "Dig into the physics behind thrust. How do rockets and jet engines harness Newton's Third Law? Why do rockets work in space when there's nothing to push against?",
    icon: "🚀",
    accentColor: "#FF6B5B",
    lessonCount: 5,
    estimatedHours: 2,
    difficulty: "Beginner",
    topics: [
      "Newton's Three Laws",
      "Action–Reaction Pairs",
      "Rocket Propulsion",
      "Jet Engine Cycles",
      "Specific Impulse",
    ],
  },
  {
    slug: "wings-and-lift",
    title: "Wings & Lift",
    tagline: "The science of the curved surface.",
    description:
      "Why does a wing shape generate lift? Explore Bernoulli's principle, airfoil geometry, angle of attack, and the stall — and debunk the equal-transit-time myth once and for all.",
    icon: "🛩",
    accentColor: "#F4C842",
    lessonCount: 5,
    estimatedHours: 2.5,
    difficulty: "Beginner",
    topics: [
      "Airfoil Anatomy",
      "Bernoulli & Pressure",
      "Angle of Attack",
      "Stall Mechanics",
      "NACA Airfoil System",
    ],
  },
  {
    slug: "stability-and-control",
    title: "Stability & Control",
    tagline: "Three axes, three surfaces, one smooth flight.",
    description:
      "Pitch, roll, yaw — the three axes of aircraft motion. Learn how elevators, ailerons, and rudders work together to keep a pilot precisely in command of every maneuver.",
    icon: "🎯",
    accentColor: "#4FC3F7",
    lessonCount: 5,
    estimatedHours: 2.5,
    difficulty: "Intermediate",
    topics: [
      "Three Axes of Motion",
      "Primary Control Surfaces",
      "Coordinated Turns",
      "Static & Dynamic Stability",
      "Fly-By-Wire Systems",
    ],
  },
  {
    slug: "rockets-and-propulsion",
    title: "Rockets & Propulsion",
    tagline: "Escaping gravity, one staged burn at a time.",
    description:
      "From solid rockets to liquid bipropellants, explore how propulsion systems overcome gravity. Understand staging, the rocket equation, and what it really takes to reach orbit.",
    icon: "🔥",
    accentColor: "#FF6B5B",
    lessonCount: 5,
    estimatedHours: 3,
    difficulty: "Intermediate",
    topics: [
      "Propellant Types",
      "The Tsiolkovsky Equation",
      "Multi-Stage Rockets",
      "Nozzle Design",
      "Orbital Mechanics Intro",
    ],
  },
  {
    slug: "structures-and-materials",
    title: "Structures & Materials",
    tagline: "Strong as possible. Light as possible. Both.",
    description:
      "Every gram counts in aerospace. Learn why triangles are the engineer's best friend, how carbon fiber changed everything, and why adding more material can sometimes make a structure weaker.",
    icon: "🔩",
    accentColor: "#F4C842",
    lessonCount: 5,
    estimatedHours: 2.5,
    difficulty: "Intermediate",
    topics: [
      "Strength-to-Weight Ratio",
      "Truss Structures",
      "Composite Materials",
      "Fatigue & Safety Factors",
      "Boeing 787 Case Study",
    ],
  },
];

export function getUnitBySlug(slug: string): Unit | undefined {
  return units.find((u) => u.slug === slug);
}
