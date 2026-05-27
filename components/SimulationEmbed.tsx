"use client";

import type { ReactNode } from "react";
import FourForcesSimulation from "@/components/simulations/FourForcesSimulation";
import AirfoilSimulation from "@/components/simulations/AirfoilSimulation";
import RocketSimulation from "@/components/simulations/RocketSimulation";
import AttitudeSimulation from "@/components/simulations/AttitudeSimulation";
import StructureSimulation from "@/components/simulations/StructureSimulation";
import DragSimulation from "@/components/simulations/DragSimulation";

const SIMULATION_MAP: Record<string, ReactNode> = {
  "the-four-forces-of-flight": <FourForcesSimulation />,
  "what-is-an-airfoil": <AirfoilSimulation />,
  "newtons-third-law-and-thrust": <RocketSimulation />,
  "pitch-roll-and-yaw": <AttitudeSimulation />,
  "strength-to-weight-ratio": <StructureSimulation />,
  "lift-and-drag": <DragSimulation />,
};

interface SimulationEmbedProps {
  lessonSlug: string;
}

export default function SimulationEmbed({ lessonSlug }: SimulationEmbedProps) {
  const simulation = SIMULATION_MAP[lessonSlug];
  if (!simulation) return null;
  return <>{simulation}</>;
}

export function hasSimulation(lessonSlug: string): boolean {
  return lessonSlug in SIMULATION_MAP;
}
