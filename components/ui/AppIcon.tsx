import type { SVGProps } from "react";
import {
  Activity,
  BarChart3,
  BookOpen,
  Boxes,
  Brain,
  Check,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  FlaskConical,
  Gauge,
  GraduationCap,
  Layers3,
  Lightbulb,
  Orbit,
  Plane,
  Rocket,
  Satellite,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waves,
  Wrench,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName =
  | "orbit"
  | "plane"
  | "rocket"
  | "wings"
  | "target"
  | "layers"
  | "gauge"
  | "activity"
  | "cpu"
  | "book"
  | "graduation"
  | "users"
  | "flask"
  | "chart"
  | "shield"
  | "brain"
  | "wrench"
  | "bulb"
  | "satellite"
  | "compass"
  | "boxes"
  | "clipboard"
  | "timeline"
  | "check"
  | "spark"
  | "code";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const iconMap = {
  orbit: Orbit,
  plane: Plane,
  rocket: Rocket,
  wings: Waves,
  target: Target,
  layers: Layers3,
  gauge: Gauge,
  activity: Activity,
  cpu: Cpu,
  book: BookOpen,
  graduation: GraduationCap,
  users: Users,
  flask: FlaskConical,
  chart: BarChart3,
  shield: ShieldCheck,
  brain: Brain,
  wrench: Wrench,
  bulb: Lightbulb,
  satellite: Satellite,
  compass: Compass,
  boxes: Boxes,
  clipboard: ClipboardCheck,
  timeline: Workflow,
  check: Check,
  spark: Sparkles,
  code: Code2,
} as const satisfies Record<IconName, React.ComponentType<SVGProps<SVGSVGElement>>>;

export function AppIcon({ name, className, ...props }: AppIconProps) {
  const Icon = iconMap[name];

  return (
    <Icon
      className={cn("h-5 w-5 stroke-[1.85]", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
