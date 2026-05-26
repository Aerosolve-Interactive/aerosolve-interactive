'use client';

import FourForcesSimulation from '@/components/simulations/FourForcesSimulation';
import AirfoilSimulation from '@/components/simulations/AirfoilSimulation';
import RocketSimulation from '@/components/simulations/RocketSimulation';
import AttitudeSimulation from '@/components/simulations/AttitudeSimulation';
import StructureSimulation from '@/components/simulations/StructureSimulation';
import DragSimulation from '@/components/simulations/DragSimulation';

// Map: lessonSlug → simulation component
const SIMULATION_MAP: Record<string, React.ReactNode> = {
  'the-four-forces-of-flight': <FourForcesSimulation />,
  'angle-of-attack':           <AirfoilSimulation />,
  'lift-and-drag':             <DragSimulation />,
  'pitch-roll-and-yaw':        <AttitudeSimulation />,
  'thrust-and-exhaust':        <RocketSimulation />,
  'trusses-and-bracing':       <StructureSimulation />,
};

interface SimulationEmbedProps {
  lessonSlug: string;
}

export default function SimulationEmbed({ lessonSlug }: SimulationEmbedProps) {
  const sim = SIMULATION_MAP[lessonSlug];
  if (!sim) return null;
  return <>{sim}</>;
}

export function hasSimulation(lessonSlug: string): boolean {
  return lessonSlug in SIMULATION_MAP;
}
