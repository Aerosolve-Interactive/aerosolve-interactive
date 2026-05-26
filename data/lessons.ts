export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  answerIndex: number;
  explanation: string;
}

export interface LessonSection {
  heading: string;
  body: string;
}

export interface LessonActivity {
  title: string;
  description: string;
  materials: string[];
  steps: string[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface Lesson {
  slug: string;
  unitSlug: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  status: "published" | "coming-soon";
  objectives?: string[];
  sections?: LessonSection[];
  realWorldExample?: { title: string; body: string };
  keyTerms?: KeyTerm[];
  quiz?: QuizQuestion[];
  activity?: LessonActivity;
}

export const lessons: Lesson[] = [
  // ─── UNIT 1: FLIGHT FUNDAMENTALS ────────────────────────────────────────────

  {
    slug: "what-is-aerospace-engineering",
    unitSlug: "flight-fundamentals",
    title: "What Is Aerospace Engineering?",
    description:
      "Define the field, meet the vehicle families, and understand why great aerospace engineering demands both rigorous math and creative tradeoff thinking.",
    duration: "25 min",
    order: 1,
    status: "published",
    objectives: [
      "Define aerospace engineering and explain the difference between aeronautics and astronautics.",
      "Name at least four categories of aerospace vehicle and give one example of each.",
      "Describe each step of the Engineering Design Process.",
      "Explain what a design tradeoff is and give a real-world example.",
    ],
    sections: [
      {
        heading: "Aeronautics vs. Astronautics",
        body: "Aerospace engineering is the branch of engineering concerned with the design, development, and operation of vehicles that travel through air or space. It splits into two major disciplines: **aeronautics** — the study of flight within Earth's atmosphere — and **astronautics** — the study of travel beyond it.\n\nAeronautics covers everything from a paper airplane to a supersonic fighter jet. Its challenges revolve around managing the forces of lift, drag, thrust, and weight inside a medium — the atmosphere — that constantly changes with altitude, temperature, and weather.\n\nAstronautics deals with the near-vacuum of space where there is no air to generate lift or slow a vehicle down. Here, the challenges shift to orbital mechanics, life support, extreme thermal environments, and communication across millions of kilometers.",
      },
      {
        heading: "Four Families of Aerospace Vehicles",
        body: "Aerospace vehicles fall into four broad families:\n\n**Fixed-wing aircraft** generate lift using wings of constant shape as the vehicle moves forward. Examples: commercial airliners, fighter jets, gliders, and most unmanned aerial vehicles (UAVs).\n\n**Rotorcraft** generate lift by spinning wings — called rotor blades — through the air, allowing vertical takeoff and hovering. Examples: helicopters, autogyros, quadcopters.\n\n**Lighter-than-air craft** float because their overall density is lower than the surrounding air, either through buoyancy (blimps and balloons filled with helium or hot air) or hybrid lift systems.\n\n**Spacecraft** operate primarily outside Earth's atmosphere. Suborbital vehicles (like early X-15 flights) briefly touch space; orbital vehicles (like the ISS) maintain continuous orbit; deep-space probes leave Earth's gravity well entirely.",
      },
      {
        heading: "The Engineering Design Process",
        body: "Engineers don't stumble upon great designs — they iterate toward them through a structured process:\n\n1. **Define the Problem**: State requirements precisely. What must the vehicle do? How fast? How far? With what payload? Under what conditions?\n2. **Research**: Study existing solutions. What works? What doesn't? What are the physical constraints?\n3. **Brainstorm**: Generate many candidate solutions without judgment. Quantity first, quality later.\n4. **Prototype**: Build a testable version of a promising concept. This might be a scale model, a computer simulation, or a section of structure.\n5. **Test & Evaluate**: Run the prototype against requirements. Collect data. Identify failure modes.\n6. **Iterate**: Revise the design based on test results. Return to an earlier step if needed.\n\nThe key word is *iterate*. Real engineering almost never gets it right the first time. The Wright Brothers built and crashed three major gliders before achieving powered flight. SpaceX deliberately exploded early Starship prototypes to learn rapidly.",
      },
      {
        heading: "The Art of the Tradeoff",
        body: "Every design decision in aerospace involves competing priorities. Making a structure stronger usually makes it heavier. Making a vehicle faster usually increases drag and fuel consumption. Increasing payload capacity usually reduces range.\n\nEngineers use the concept of a **tradeoff** to navigate these tensions: a deliberate choice to sacrifice one desirable property to gain another that is more critical for the mission. Good engineers quantify these tradeoffs — they don't just feel their way through them. A weight budget, a drag polar, a cost model — these tools turn fuzzy tradeoffs into defensible decisions.",
      },
    ],
    realWorldExample: {
      title: "The Boeing 737 MAX: A Tradeoff Gone Wrong",
      body: "In the early 2010s, Boeing faced a dilemma: Airbus had launched the A320neo with new, larger, more fuel-efficient engines. Boeing needed to respond with an updated 737 — but its decades-old design had limited ground clearance. The new CFM LEAP engines were too large to fit in the 737's existing engine mounts.\n\nBoeing's solution: move the engines further forward and higher on the wing. This changed the aircraft's aerodynamic behavior, causing the nose to pitch up unexpectedly at high angles of attack. Rather than redesign the airframe — an expensive, multi-year effort — Boeing engineers implemented a software patch called MCAS (Maneuvering Characteristics Augmentation System) that automatically pushed the nose down when sensors detected a high pitch angle.\n\nThe tradeoff: speed to market and cost savings over fundamental design integrity. When the MCAS system activated based on a single faulty sensor, with pilots inadequately trained on its existence, two crashes killed 346 people. The 737 MAX was grounded worldwide for 20 months.\n\nThe lesson is not that MCAS was the wrong concept — automated stability systems exist on many aircraft safely. The failure was treating a software patch as a substitute for understanding the full system, and compressing the design process to avoid the cost of proper iteration.",
    },
    keyTerms: [
      {
        term: "Aeronautics",
        definition:
          "The science and practice of flight within Earth's atmosphere, encompassing the design of aircraft, their propulsion, and their operation.",
      },
      {
        term: "Astronautics",
        definition:
          "The science and engineering of spacecraft, covering navigation, propulsion, and operation beyond Earth's atmosphere.",
      },
      {
        term: "Prototype",
        definition:
          "An early model of a design, built specifically to test and refine the concept before committing to full production.",
      },
      {
        term: "Tradeoff",
        definition:
          "A deliberate engineering decision to sacrifice one desirable quality in order to gain another that is more critical to the mission's success.",
      },
      {
        term: "Engineering Design Process",
        definition:
          "The iterative cycle of defining a problem, researching, brainstorming, prototyping, testing, and revising used by engineers to develop solutions.",
      },
    ],
    quiz: [
      {
        question: "What does 'aeronautics' specifically study?",
        options: [
          "Spacecraft operating beyond Earth's atmosphere",
          "Aircraft that fly within Earth's atmosphere",
          "Underwater propulsion vehicles",
          "Satellites in geosynchronous orbit",
        ],
        answerIndex: 1,
        explanation:
          "Aeronautics covers flight within the atmosphere — planes, helicopters, blimps, and drones. Astronautics handles everything beyond the atmosphere.",
      },
      {
        question:
          "Which best describes the Engineering Design Process?",
        options: [
          "A straight line from concept to finished product",
          "An iterative cycle of designing, testing, and improving",
          "A one-time calculation to find the mathematically perfect solution",
          "A random process of trial and error with no structure",
        ],
        answerIndex: 1,
        explanation:
          "The Design Process is iterative — engineers expect to cycle through prototype and test phases multiple times, each time learning from failure to improve the design.",
      },
      {
        question:
          "What was the primary engineering tradeoff in the Boeing 737 MAX design?",
        options: [
          "Trading speed for improved fuel efficiency",
          "Mounting larger engines differently, then patching the resulting handling change with software",
          "Replacing metal structural members with plastic composites",
          "Removing horizontal stabilizers to reduce aerodynamic drag",
        ],
        answerIndex: 1,
        explanation:
          "Boeing moved engines forward and higher to fit the larger CFM LEAP powerplants, then used MCAS software to mask the resulting pitch-up tendency rather than redesigning the airframe.",
      },
      {
        question: "Which of these is an example of a spacecraft?",
        options: [
          "A nuclear-powered submarine",
          "A Maglev high-speed train",
          "A geostationary communications satellite",
          "A hovercraft operating over water",
        ],
        answerIndex: 2,
        explanation:
          "A geostationary satellite orbits roughly 35,786 km above Earth, entirely outside the atmosphere — making it a spacecraft. The others operate in or on Earth's surface or oceans.",
      },
      {
        question: "In engineering, a 'prototype' is:",
        options: [
          "The final production-ready version of a product",
          "A mathematical simulation run entirely on a computer",
          "An early physical or virtual model built to test and refine a concept",
          "A legal patent document describing a new invention",
        ],
        answerIndex: 2,
        explanation:
          "A prototype is intentionally imperfect — it exists to gather data and expose problems early, while changes are still cheap to make.",
      },
    ],
    activity: {
      title: "Design a Mission — Paper Sketch Activity",
      description:
        "Before you can build any vehicle, you need to know what it must accomplish. In this activity you'll define a mission and sketch the vehicle that could complete it.",
      materials: [
        "Blank paper (at least 2 sheets)",
        "Pencil and eraser",
        "Colored pencils or markers (optional)",
        "Ruler",
      ],
      steps: [
        "Choose one of these mission briefs: (A) Deliver a package from New York to London in under 8 hours; (B) Survey volcanic activity on a remote island with no runway; (C) Deploy a weather-monitoring satellite to low Earth orbit.",
        "Write down three specific requirements your vehicle must meet. Be as precise as possible — use numbers where you can (e.g., 'must carry 500 kg of payload', 'must operate for 48 hours without refueling').",
        "List three tradeoffs your vehicle design will face. For each tradeoff, state which side you're prioritizing and why.",
        "Sketch your vehicle from the side and from above. Label the major components (wings, engines, payload bay, control surfaces, etc.).",
        "Write a 2-3 sentence 'Mission Statement' that summarizes what your vehicle does, how it does it, and why your tradeoff choices were correct for this mission.",
        "Share your design with a partner. Can they identify at least one additional tradeoff you didn't list?",
      ],
    },
  },

  {
    slug: "the-four-forces-of-flight",
    unitSlug: "flight-fundamentals",
    title: "The Four Forces of Flight",
    description:
      "Lift, weight, thrust, drag — every aircraft is a negotiation between these four forces. Learn what each one is, where it comes from, and how they must balance for controlled flight.",
    duration: "30 min",
    order: 2,
    status: "published",
    objectives: [
      "Name and define the four forces acting on an aircraft in flight.",
      "Explain the conditions for steady, level, unaccelerated flight.",
      "Calculate the lift required to support the weight of a real aircraft.",
      "Describe what happens to each force during climbing, descending, and accelerating flight.",
    ],
    sections: [
      {
        heading: "Meet the Four Forces",
        body: "Every aircraft in flight is subject to exactly four forces. Understanding how they interact is the foundation of all flight mechanics.\n\n**Lift** acts perpendicular to the direction of flight (mostly upward), generated primarily by the wings as they move through air. The faster the aircraft moves and the more curved the wing, the more lift it produces.\n\n**Weight** acts straight downward toward Earth's center, equal to the aircraft's mass multiplied by the acceleration due to gravity (W = mg, where g ≈ 9.8 m/s²). Weight doesn't change during flight — a full fuel load weighs just as much at 35,000 feet as on the ground. It does change as fuel burns.\n\n**Thrust** acts forward in the direction of flight, produced by the engines — whether piston-propeller, turbofan, turbojet, or rocket. Thrust overcomes resistance and accelerates the aircraft.\n\n**Drag** acts rearward, opposing the aircraft's motion through the air. It is the price paid for moving through a fluid. Higher speed means dramatically more drag — drag scales with the square of velocity.",
      },
      {
        heading: "Equilibrium: The Key to Steady Flight",
        body: "In steady, level, unaccelerated flight — the cruise phase most passengers experience — the forces are balanced in two pairs:\n\n**Lift = Weight**: The wings generate exactly as much upward force as gravity pulls downward. If lift exceeds weight, the aircraft climbs. If weight exceeds lift, it descends.\n\n**Thrust = Drag**: The engines generate exactly as much forward force as the air's resistance. If thrust exceeds drag, the aircraft accelerates. If drag exceeds thrust, it decelerates.\n\nThis is Newton's First Law in action: a body in equilibrium remains in its current state of motion. The art of piloting is continuously adjusting these four forces to maintain, change, or recover the desired flight state.\n\nDuring **climb**: Thrust > Drag (to accelerate upward) and Lift > Weight (initially). In a steady climb, Thrust still roughly equals Drag, but a component of thrust now supports some of the weight.\n\nDuring **descent**: The pilot reduces thrust. Weight component along the flight path now accelerates the aircraft forward, and drag is managed via throttle and pitch.\n\nDuring **acceleration** (e.g., takeoff roll): Thrust greatly exceeds Drag. As speed builds, lift increases until it equals weight and the aircraft lifts off.",
      },
      {
        heading: "Two Types of Drag",
        body: "Drag is not a single phenomenon. It has two main contributors:\n\n**Parasitic drag** (also called form drag and skin friction) is the drag created by pushing any object through a fluid. It depends on the shape, size, and surface roughness of the aircraft, and it increases with the square of airspeed. A smooth, streamlined fuselage has far less parasitic drag than a blunt, flat-nosed object of the same frontal area.\n\n**Induced drag** is the penalty paid for generating lift. Every wing that produces lift also creates trailing vortices at its tips — swirling regions where high-pressure air from below spills over to the low-pressure region above. These vortices extract energy from the aircraft. Induced drag is highest at low speeds and high angles of attack (when lots of lift is needed) and decreases at higher speeds.\n\nTotal drag = Parasitic drag + Induced drag. There is an optimum airspeed where the sum of both is minimized — this is the speed for maximum range in many aircraft.",
      },
      {
        heading: "Lift Formula: The Big Picture",
        body: "The lift equation shows exactly what governs how much lift a wing produces:\n\n**L = ½ × ρ × V² × S × CL**\n\nWhere:\n- **L** = lift force (Newtons)\n- **ρ** (rho) = air density (kg/m³) — decreases with altitude\n- **V** = airspeed (m/s)\n- **S** = wing planform area (m²)\n- **CL** = lift coefficient, a dimensionless number capturing the wing's shape and angle of attack\n\nThis equation has profound implications. At high altitude where ρ is lower, the aircraft must fly faster or increase CL (by raising angle of attack or deploying flaps) to generate the same lift. At landing, the aircraft is slow and heavy — flaps increase CL dramatically to compensate.",
      },
    ],
    realWorldExample: {
      title: "The Boeing 747: Lifting a Small Town Into the Sky",
      body: "The Boeing 747-400 has a maximum takeoff weight (MTOW) of approximately 412,775 kg — roughly the mass of 280 average cars. For this aircraft to maintain level flight, its wings must generate a lift force equal to its weight:\n\nL = mg = 412,775 kg × 9.8 m/s² ≈ **4,045,195 Newtons** — about 4 meganewtons.\n\nThe 747's wings span 64.4 meters and have a total planform area of roughly 541 m². At cruise altitude (≈ 11,000 m), air density is about 0.364 kg/m³. At cruise speed (≈ 252 m/s, or Mach 0.85), the lift coefficient required is approximately 0.26 — a gentle, efficient operating point well below the stall CL of around 1.5.\n\nNow consider landing: the 747 approaches at roughly 75 m/s (145 knots). Density is close to sea level (1.225 kg/m³). With deployed flaps, CL rises to about 2.2. Even so, some fuel is burned before landing to reduce weight, because generating that much lift at low speed would require extreme angle-of-attack or impractically large flaps. Weight management — burning fuel strategically — is a core part of airline operations, not just a fuel cost issue.",
    },
    keyTerms: [
      {
        term: "Lift",
        definition:
          "The aerodynamic force acting perpendicular to the direction of flight, generated primarily by the wings, that supports the aircraft against gravity.",
      },
      {
        term: "Weight",
        definition:
          "The force due to gravity acting downward on the aircraft, equal to its mass multiplied by g (≈ 9.8 m/s²).",
      },
      {
        term: "Thrust",
        definition:
          "The forward force generated by the aircraft's propulsion system to overcome drag and accelerate the vehicle.",
      },
      {
        term: "Drag",
        definition:
          "The aerodynamic resistance force acting rearward, opposing the aircraft's motion through the air. Increases with the square of airspeed.",
      },
      {
        term: "Equilibrium",
        definition:
          "The condition in which all forces acting on an aircraft are balanced, resulting in constant velocity (no acceleration).",
      },
      {
        term: "Induced Drag",
        definition:
          "A component of drag that is an unavoidable byproduct of generating lift, caused by wingtip vortices. Highest at low speeds and high angles of attack.",
      },
    ],
    quiz: [
      {
        question:
          "In steady, level, unaccelerated flight, which statement correctly describes force balance?",
        options: [
          "Thrust is greater than drag; lift equals weight",
          "Lift equals thrust; weight equals drag",
          "Lift equals weight; thrust equals drag",
          "All four forces are at maximum values",
        ],
        answerIndex: 2,
        explanation:
          "In equilibrium, the two vertical forces balance (L = W) and the two horizontal forces balance (T = D). Any imbalance causes acceleration in that direction.",
      },
      {
        question:
          "The Boeing 747 has a maximum takeoff weight of about 412,775 kg. The lift its wings must generate in level flight is approximately:",
        options: [
          "412,775 Newtons",
          "412,775 pounds",
          "4,045,000 Newtons",
          "4,045,000 kg of force",
        ],
        answerIndex: 2,
        explanation:
          "Lift = mg = 412,775 × 9.8 ≈ 4,045,195 N ≈ 4 MN. Weight in Newtons is mass (kg) times gravitational acceleration (9.8 m/s²).",
      },
      {
        question: "What force directly opposes an aircraft's forward motion?",
        options: ["Weight", "Lift", "Thrust", "Drag"],
        answerIndex: 3,
        explanation:
          "Drag acts rearward, in the direction opposite to the aircraft's motion. Thrust must overcome drag to maintain or increase airspeed.",
      },
      {
        question:
          "As an aircraft climbs to higher altitude, air density decreases. To maintain the same lift, the pilot must:",
        options: [
          "Decrease airspeed to reduce drag",
          "Increase airspeed or angle of attack to compensate for lower density",
          "Reduce engine thrust to prevent overspeed",
          "Retract flaps to reduce induced drag",
        ],
        answerIndex: 1,
        explanation:
          "From the lift equation L = ½ρV²SCL, if ρ decreases, V or CL must increase to maintain the same L. In practice, aircraft fly faster or maintain a higher angle of attack at altitude.",
      },
      {
        question: "Induced drag is highest when:",
        options: [
          "The aircraft is flying at high speed in level cruise",
          "The aircraft is flying at low speed with high lift demand (e.g., landing)",
          "The engines are producing maximum thrust",
          "The landing gear is retracted",
        ],
        answerIndex: 1,
        explanation:
          "Induced drag increases with CL (the lift coefficient) and is highest at low speeds when the wing must work hard — steep angle of attack, high CL — to support the aircraft's weight.",
      },
    ],
    activity: {
      title: "Four Forces Diagram — Free Body Drawing",
      description:
        "Free body diagrams are how engineers visualize force systems. You'll draw accurate diagrams for four distinct flight scenarios and explain what each one tells you about the aircraft's motion.",
      materials: [
        "Blank paper or graph paper",
        "Pencil",
        "Ruler",
        "Four different colored pens or markers (one per force)",
        "Protractor (optional)",
      ],
      steps: [
        "Draw a simple side-view aircraft silhouette (a rectangle with a triangle at the back works fine) in the center of your paper.",
        "Choose a color for each force: Lift (blue), Weight (red), Thrust (green), Drag (orange). Draw arrows on your aircraft showing each force direction. Arrow length represents force magnitude.",
        "Scenario 1 — Steady Level Cruise: Draw a diagram where Lift = Weight and Thrust = Drag. All four arrows should be equal in length within their axis pairs.",
        "Scenario 2 — Takeoff Roll: Thrust is large (greater than Drag), but Lift is still less than Weight (the aircraft hasn't left the ground yet). Draw and label appropriately.",
        "Scenario 3 — Climbing at Constant Speed: Thrust slightly exceeds Drag; Lift approximately equals Weight. Draw and explain how the thrust vector now partially supports the aircraft vertically.",
        "Scenario 4 — Power-off Glide: Thrust = zero. Weight, Drag, and Lift are all acting. Draw the diagram and explain in one sentence how the aircraft can still maintain controlled flight without any engine power.",
      ],
    },
  },

  {
    slug: "atmosphere-and-altitude",
    unitSlug: "flight-fundamentals",
    title: "The Atmosphere & Altitude Effects",
    description:
      "Air gets thinner as you climb. Discover how atmospheric layers, pressure, temperature, and density affect every aircraft performance number.",
    duration: "25 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "speed-and-mach",
    unitSlug: "flight-fundamentals",
    title: "Airspeed, Groundspeed & Mach Number",
    description:
      "Airspeed indicators, Mach number, and the speed of sound — why pilots care about all three and what happens when you approach Mach 1.",
    duration: "20 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "mission-profiles",
    unitSlug: "flight-fundamentals",
    title: "Mission Profiles & Flight Envelopes",
    description:
      "Every aircraft has a flight envelope — a boundary of safe operating conditions. Learn how mission profiles are planned within these limits.",
    duration: "20 min",
    order: 5,
    status: "coming-soon",
  },

  // ─── UNIT 2: FORCES & MOTION ────────────────────────────────────────────────

  {
    slug: "newtons-third-law-and-thrust",
    unitSlug: "forces-and-motion",
    title: "Newton's Third Law & Thrust",
    description:
      "For every action there is an equal and opposite reaction — the single sentence that explains rockets, jets, and propellers. Understand why rockets work in the vacuum of space and what made the Saturn V the most powerful machine ever built.",
    duration: "30 min",
    order: 1,
    status: "published",
    objectives: [
      "State Newton's Third Law and correctly identify action–reaction pairs in propulsion systems.",
      "Explain how rockets, jet engines, and propellers each generate thrust using this law.",
      "Explain why rockets can operate in space where there is no atmosphere.",
      "Describe the Saturn V's thrust output in terms that illustrate its scale.",
    ],
    sections: [
      {
        heading: "Newton's Three Laws — A Quick Review",
        body: "Before focusing on the third law, a brief recap of all three is worthwhile:\n\n**First Law (Inertia)**: An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net external force. This is why a spacecraft in deep space — with no friction, no drag, and no gravity to speak of — needs no engine to keep moving.\n\n**Second Law (F = ma)**: A net force on an object causes an acceleration proportional to the force and inversely proportional to the object's mass. This governs how quickly a rocket accelerates as it burns propellant.\n\n**Third Law (Action–Reaction)**: For every action force, there is an equal in magnitude and opposite in direction reaction force. Crucially, these forces act on *different objects*. The rocket pushes exhaust backward; the exhaust pushes the rocket forward.",
      },
      {
        heading: "How Rockets Generate Thrust",
        body: "A rocket engine burns propellant — a combination of fuel and oxidizer — in a combustion chamber. The high-pressure, high-temperature gases expand through a nozzle, accelerating to extremely high velocities (often 2,000–4,000 m/s at the nozzle exit).\n\nThe **action**: the engine expels this mass of gas at high velocity out the back.\nThe **reaction**: the rocket is pushed forward with an equal and opposite force.\n\nThis is quantified by the **impulse-momentum theorem**: Thrust = (mass flow rate of propellant) × (effective exhaust velocity). A rocket that burns 1,000 kg/s of propellant and exhausts it at 3,000 m/s generates 3,000,000 N (3 MN) of thrust.\n\nNotice what is *not* required: there is no air, no ground, no reference point. The rocket simply exchanges momentum with its exhaust. This is why rockets work in the vacuum of space — they carry their own reaction mass (propellant) with them.",
      },
      {
        heading: "Jet Engines: Thrust from Atmosphere",
        body: "A jet engine also uses Newton's Third Law, but in a fundamentally different way: it takes in air from the atmosphere, adds energy to it via fuel combustion, and expels it much faster than it arrived.\n\nA **turbojet** compresses incoming air through a series of compressor stages, injects and burns fuel in a combustion chamber, and expels the hot, high-velocity gases through a turbine and nozzle. The net rearward momentum of the exhaust creates a forward thrust force.\n\nA **turbofan** (used in almost all modern airliners) adds a large front fan that accelerates a large mass of air around the core engine. This 'bypassed' air contributes significantly to thrust at lower velocity, making turbofans far more fuel-efficient than turbojets at subsonic speeds.\n\nThe key difference from rockets: jet engines need atmospheric oxygen to burn their fuel. No atmosphere — no combustion. This is why you cannot put a jet engine on a spacecraft.",
      },
      {
        heading: "Propellers: Pushing Air Backward",
        body: "A propeller is a rotating wing. Each blade is an airfoil, angled to generate aerodynamic force as it spins. The net result: the propeller pushes a large mass of air rearward at moderate velocity.\n\nAction: propeller accelerates air backward.\nReaction: aircraft is pushed forward.\n\nPropellers are highly efficient at low speeds and altitudes. They become inefficient as airspeed approaches the speed of sound, because the blade tips begin to experience compressibility effects. This is why propeller-driven aircraft are rarely seen above about 500 mph (800 km/h) in commercial service.\n\nTurboprops bridge the gap: a gas turbine core drives a propeller through a gearbox, combining the fuel flexibility of a gas turbine with the low-speed efficiency of a propeller.",
      },
      {
        heading: "Why Rockets Work in Space",
        body: "The most common misconception about rocket propulsion is that rockets push against the air behind them — that they 'need something to push on.' This is wrong.\n\nA rocket operates on the principle of conservation of momentum. Before ignition, the rocket + propellant system has zero momentum (assuming it starts at rest). After expelling propellant backward, the propellant has negative momentum (rearward), so the rocket must gain equal positive momentum (forward) to keep the total at zero.\n\nIn the vacuum of space:\n- There is no atmospheric drag (no air)\n- There is no medium to 'push against'\n- But the rocket carries its own reaction mass — its propellant\n\nThe rocket's exhaust products carry momentum rearward. The rocket hull carries momentum forward. Space does not need to be involved. This is also why, contrary to science fiction, a rocket in space does not need to 'push' the exhaust against anything — the exhaust and the rocket simply fly apart from each other.",
      },
    ],
    realWorldExample: {
      title: "Saturn V: The Most Powerful Machine Ever Built",
      body: "The Saturn V rocket that carried Apollo astronauts to the Moon stands as an engineering monument. At liftoff, its five F-1 engines — each the size of a Volkswagen Beetle — consumed 12,900 liters of kerosene and liquid oxygen per second and produced a combined thrust of **33.8 meganewtons** (MN). To put that in perspective:\n\n- The Saturn V at liftoff weighed about 2.97 million kg\n- Its thrust-to-weight ratio at ignition was approximately 1.16 — just enough to lift off\n- The exhaust velocity of the F-1 engine was approximately 2,580 m/s (8,460 fps)\n- In 2.5 minutes, the first stage burned 2,100 metric tons of propellant\n\nBy Newton's Second Law (F = ma), the rocket's acceleration at ignition was modest — barely above 1g — because its mass was enormous. As the first stage burned, mass decreased rapidly. By stage separation, the first stage had consumed over 70% of its propellant, and the remaining rocket was accelerating much faster despite lower thrust.\n\nThis is the rocket equation's core tension: you need propellant to accelerate, but propellant is mass, and mass requires more propellant to accelerate. The Saturn V solved this through **staging** — discarding each empty propellant tank when it was no longer needed, dramatically improving the effective mass ratio for each subsequent stage.",
    },
    keyTerms: [
      {
        term: "Newton's Third Law",
        definition:
          "For every action force, there is an equal in magnitude and opposite in direction reaction force acting on a different object.",
      },
      {
        term: "Thrust",
        definition:
          "The propulsive force generated by expelling mass (exhaust or accelerated air) in one direction, producing motion in the opposite direction.",
      },
      {
        term: "Propellant",
        definition:
          "The combination of fuel and oxidizer carried by a rocket and consumed to produce thrust. Rockets carry both components; jets use atmospheric oxygen.",
      },
      {
        term: "Oxidizer",
        definition:
          "The oxygen-supplying component in a rocket propellant system, enabling combustion in the vacuum of space where no atmospheric oxygen exists.",
      },
      {
        term: "Specific Impulse (Isp)",
        definition:
          "A measure of propulsive efficiency — the thrust produced per unit mass flow rate of propellant (seconds). Higher Isp means more thrust per kilogram of propellant burned.",
      },
      {
        term: "Mass Flow Rate",
        definition:
          "The mass of propellant consumed per unit time (kg/s). Combined with exhaust velocity, it determines the thrust force produced.",
      },
    ],
    quiz: [
      {
        question:
          "When a rocket expels gas downward at high velocity, what happens to the rocket according to Newton's Third Law?",
        options: [
          "The gas pushes the rocket sideways",
          "The rocket is pushed upward with an equal and opposite force",
          "The rocket slows down because it has lost mass",
          "Nothing — the forces cancel and the rocket stays still",
        ],
        answerIndex: 1,
        explanation:
          "The gas (action) and the rocket (reaction) are the two objects in the force pair. The rocket receives a force equal in magnitude and opposite in direction to the force it exerts on the exhaust.",
      },
      {
        question:
          "Why can rockets operate in the vacuum of space, but jet engines cannot?",
        options: [
          "Rockets are inherently faster than jet engines",
          "Rockets use hydrogen fuel that doesn't need oxygen",
          "Rockets carry their own oxidizer, while jet engines rely on atmospheric oxygen for combustion",
          "Space has less gravity, making jet engines unnecessary",
        ],
        answerIndex: 2,
        explanation:
          "Jet engines ingest atmospheric air to supply the oxygen needed for fuel combustion. In space there is no atmosphere, so no oxygen supply — jet combustion is impossible. Rockets carry liquid oxygen (or another oxidizer) in onboard tanks.",
      },
      {
        question:
          "A rocket engine burns propellant at a mass flow rate of 500 kg/s with an exhaust velocity of 3,200 m/s. What thrust does it produce?",
        options: [
          "500 Newtons",
          "3,200 Newtons",
          "1,600,000 Newtons (1.6 MN)",
          "6.4 Newtons",
        ],
        answerIndex: 2,
        explanation:
          "Thrust = mass flow rate × exhaust velocity = 500 kg/s × 3,200 m/s = 1,600,000 N = 1.6 MN.",
      },
      {
        question:
          "In a turbofan engine, the large front fan contributes to thrust by:",
        options: [
          "Burning fuel before the main combustion chamber",
          "Accelerating a large mass of bypass air rearward at moderate velocity",
          "Compressing inlet air to increase the combustion pressure",
          "Reducing the temperature of exhaust gases to improve safety",
        ],
        answerIndex: 1,
        explanation:
          "The bypass fan moves a large mass of air around the core engine. This bypass flow contributes significantly to total thrust at subsonic speeds and is more fuel-efficient than accelerating a smaller mass to very high velocity.",
      },
      {
        question:
          "The statement 'rockets push against the air behind them' is:",
        options: [
          "Correct — rockets rely on atmospheric backpressure for thrust",
          "Partially correct — true at sea level but not in vacuum",
          "Incorrect — rockets work by conservation of momentum, requiring no external medium",
          "Correct — without air to push against, rockets produce zero net force",
        ],
        answerIndex: 2,
        explanation:
          "Rockets exchange momentum with their exhaust mass. The exhaust moves rearward; the rocket moves forward. No external medium (air, ground, or otherwise) is involved or required.",
      },
    ],
    activity: {
      title: "Balloon Rocket",
      description:
        "Build a working rocket propulsion demonstration using nothing but a balloon, string, a straw, and tape. You'll measure distance traveled and investigate how 'propellant mass' affects performance.",
      materials: [
        "Long balloons (at least 3)",
        "10+ meters of smooth string or fishing line",
        "Plastic drinking straw",
        "Tape (clear or masking)",
        "Tape measure or meter stick",
        "Marker for labeling",
        "Chair or anchor points at each end of your string",
      ],
      steps: [
        "Stretch the string between two anchor points (chair backs, doorknobs, or helpers) at least 5 meters apart. Thread the straw onto the string before tying off.",
        "Blow up a balloon to what you estimate is 'small', 'medium', and 'large' — mark the uninflated balloon with lines at those approximate widths as reference points. Don't tie the balloon.",
        "While pinching the balloon closed, tape it to the straw so it lies parallel to the string. Release the balloon from one end of the string.",
        "Measure and record how far the balloon rocket traveled along the string. Record the approximate inflation size.",
        "Repeat three times for each inflation size (small, medium, large) and record all results in a table: Inflation Size | Trial 1 | Trial 2 | Trial 3 | Average.",
        "Predict: what would happen if you inflate two balloons taped together ('staging') and release them in sequence? Test it if possible.",
        "Write a one-paragraph explanation connecting your results to Newton's Third Law: what was the 'action' in your experiment, and what was the 'reaction'?",
      ],
    },
  },

  {
    slug: "momentum-and-impulse",
    unitSlug: "forces-and-motion",
    title: "Momentum, Impulse & the Rocket Equation",
    description:
      "The Tsiolkovsky rocket equation reveals a brutal truth: most of a rocket's mass must be propellant. Explore momentum conservation and why staging is the only practical solution.",
    duration: "35 min",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "gravity-and-orbital-mechanics",
    unitSlug: "forces-and-motion",
    title: "Gravity & Orbital Mechanics",
    description:
      "Orbiting means falling forever without hitting the ground. Understand circular orbits, Kepler's laws, and delta-v — the currency of spaceflight.",
    duration: "40 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "aerodynamic-drag-in-depth",
    unitSlug: "forces-and-motion",
    title: "Aerodynamic Drag: Form, Friction & Wave",
    description:
      "Not all drag is the same. Explore the three regimes of drag — subsonic, transonic, and supersonic — and why the sound barrier is not actually a barrier.",
    duration: "30 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "center-of-mass-and-balance",
    unitSlug: "forces-and-motion",
    title: "Center of Mass & Aircraft Balance",
    description:
      "CG position determines whether a plane is safe to fly or will tumble uncontrollably. Learn how to calculate center of gravity and why the loading envelope matters.",
    duration: "25 min",
    order: 5,
    status: "coming-soon",
  },

  // ─── UNIT 3: WINGS & LIFT ───────────────────────────────────────────────────

  {
    slug: "what-is-an-airfoil",
    unitSlug: "wings-and-lift",
    title: "What Is an Airfoil?",
    description:
      "Dissect the cross-section of a wing, understand Bernoulli's principle in context, learn what angle of attack really means, and dispel the most persistent myth in aviation education.",
    duration: "35 min",
    order: 1,
    status: "published",
    objectives: [
      "Identify the key anatomical features of an airfoil by name.",
      "Explain Bernoulli's principle and correctly apply it to wing lift generation.",
      "Define angle of attack and describe how varying it affects lift and drag.",
      "Explain the aerodynamic stall and what causes it.",
      "Decode a NACA four-digit airfoil designation.",
    ],
    sections: [
      {
        heading: "Airfoil Anatomy",
        body: "An **airfoil** is the cross-sectional shape of a wing, tail surface, propeller blade, or turbine blade — any surface designed to produce aerodynamic force. Understanding the anatomy of an airfoil is the starting point for all aerodynamics:\n\n**Leading edge**: The forward-most point of the airfoil. Typically rounded to gently divide incoming airflow.\n\n**Trailing edge**: The rearmost point where upper and lower surface flows rejoin. Sharp on most airfoils to ensure smooth flow departure.\n\n**Chord line**: An imaginary straight line connecting the leading edge to the trailing edge. Its length — the *chord length* — is a key reference dimension.\n\n**Camber line (mean camber line)**: The curve running equidistant between the upper and lower surfaces. A symmetric airfoil has a straight camber line coinciding with the chord. A cambered airfoil curves the mean line upward.\n\n**Camber**: The maximum deviation of the camber line from the chord line, expressed as a percentage of chord length. Higher camber means more curvature — generally more lift but also more drag.\n\n**Thickness**: The maximum vertical distance between upper and lower surfaces, expressed as a percentage of chord. A 'thick' wing (t/c > 15%) tolerates higher angles of attack before stalling; a 'thin' wing (t/c < 6%) has less drag at high speeds.",
      },
      {
        heading: "Bernoulli's Principle and Why Wings Lift",
        body: "**Bernoulli's principle** states that in a steady, incompressible fluid flow, an increase in velocity corresponds to a decrease in static pressure, and vice versa. It follows from the conservation of energy: faster-moving fluid has more kinetic energy, leaving less for pressure energy.\n\nA cambered airfoil is shaped so that air flowing over the curved upper surface must follow a longer, more curved path than air flowing beneath it. By continuity (conservation of mass), air over the top surface accelerates to traverse this longer path in roughly the same time. By Bernoulli's principle, this faster-moving air has lower static pressure.\n\nResult: **lower pressure above the wing, higher pressure below** → net upward force = **lift**.\n\nImportant nuance: Bernoulli's principle is not the *only* mechanism generating lift, and a symmetric airfoil at zero angle of attack generates zero lift via Bernoulli alone. At an angle of attack, flow deflection (Newton's Third Law) contributes significant lift as well. Both mechanisms operate simultaneously in real wings.",
      },
      {
        heading: "The Equal-Transit-Time Myth",
        body: "The most pervasive misconception in aviation education is the **equal-transit-time theory**: the idea that air molecules that split at the leading edge must rejoin simultaneously at the trailing edge, and because the upper path is longer, the upper air must travel faster.\n\nThis sounds logical, but it is **wrong**. There is no physical law requiring the two parcels of air to arrive at the trailing edge at the same moment. Real measurements show that upper-surface air actually arrives at the trailing edge *much earlier* than lower-surface air — the acceleration is greater than the equal-transit theory predicts.\n\nThe correct explanation involves the Kutta condition (flow must leave smoothly from the trailing edge), circulation theory (the airfoil adds angular momentum to the airflow), and the net pressure distribution — which can be calculated using computational fluid dynamics without any reference to transit times.\n\nWhy does this matter? Because misunderstanding the mechanism leads to misunderstanding stalls, high-lift devices, and supersonic flight — where different physics entirely govern lift generation.",
      },
      {
        heading: "Angle of Attack and Its Effects",
        body: "The **angle of attack (AoA)** is the angle between the airfoil's chord line and the direction of the incoming relative airflow (the relative wind). It is one of the most important parameters in aerodynamics.\n\nAs AoA increases from zero:\n- **Lift increases**: the wing 'bites' more air, creating a larger pressure differential.\n- **Drag increases**: the frontal area presented to the flow grows, and induced drag rises.\n- **Nose-up pitching moment** typically increases.\n\nThis continues until the **critical angle of attack** is reached — typically 15–18° for most conventional airfoils. Beyond this:\n\n**Stall**: the smooth, attached airflow over the upper surface suddenly separates. The boundary layer can no longer navigate the steep adverse pressure gradient on the upper surface and 'detaches,' forming a large turbulent wake. Lift drops abruptly. Drag spikes. The aircraft pitches nose-down (a design feature for recovery).\n\nStall depends on angle of attack, not airspeed. An aircraft can stall at any speed if it exceeds the critical AoA — including at high speed in a steep turn.",
      },
      {
        heading: "The NACA Airfoil System",
        body: "The **National Advisory Committee for Aeronautics** (NACA, forerunner to NASA) systematized airfoil design in the 1930s–40s, creating families of airfoils defined by simple numbering codes. The **NACA 4-digit series** remains widely used today.\n\nFor a NACA **MPXX** airfoil:\n- **M** = Maximum camber as a percentage of chord\n- **P** = Position of maximum camber, in tenths of chord from the leading edge\n- **XX** = Maximum thickness as a percentage of chord\n\n**Example: NACA 2412**\n- Maximum camber: **2%** of chord\n- Maximum camber located at: **40%** chord (4 × 10% = 40%)\n- Maximum thickness: **12%** of chord\n\nThe NACA 2412 is a classic, versatile airfoil used in countless light general-aviation aircraft. It balances good lift characteristics with manageable stall behavior — a gentle, progressive stall rather than an abrupt, violent one.\n\nA NACA **0012** has zero camber (symmetric airfoil, M=0, P=0) and 12% thickness. Symmetric airfoils generate no lift at zero AoA but are used in aerobatic aircraft and tail surfaces where equal performance in both directions is needed.",
      },
    ],
    realWorldExample: {
      title: "The NACA 2412 and Why Cessna Still Uses It",
      body: "The Cessna 172 — the most-produced airplane in history with over 44,000 built — uses a modified NACA 2412 series airfoil on its wing. Introduced in 1956 and still manufactured today, the 172 has accumulated more flight hours than any other aircraft type in history.\n\nThe NACA 2412's enduring popularity for training aircraft comes from its forgiving stall characteristics. As AoA increases toward the critical angle, the stall begins at the wing root (nearest the fuselage) and progresses outward toward the tips. This means the ailerons — located at the wingtips — retain effectiveness even as the inboard section stalls. The pilot feels buffet (turbulent airflow disruption) and a nose-drop before full stall, giving ample warning and control authority throughout.\n\nIn contrast, high-performance racing and aerobatic aircraft use thinner, less-cambered airfoils that generate less drag at high speed but stall more abruptly. Every airfoil choice is a tradeoff between maximum lift capability, drag in cruise, stall behavior, and structural considerations. The 172's designers chose a profile that would be maximally forgiving for student pilots with varying skill levels.",
    },
    keyTerms: [
      {
        term: "Airfoil",
        definition:
          "The cross-sectional shape of a wing or other surface designed to generate aerodynamic lift as it moves through a fluid.",
      },
      {
        term: "Chord",
        definition:
          "The straight-line distance from the leading edge to the trailing edge of an airfoil. Used as the reference length for expressing camber and thickness as percentages.",
      },
      {
        term: "Camber",
        definition:
          "The curvature of the mean line of an airfoil relative to the chord line. Cambered airfoils generate lift even at zero angle of attack.",
      },
      {
        term: "Angle of Attack (AoA)",
        definition:
          "The angle between the chord line of a wing and the direction of the incoming relative airflow. Increasing AoA increases lift until the critical angle is exceeded.",
      },
      {
        term: "Stall",
        definition:
          "The sudden loss of lift that occurs when a wing exceeds its critical angle of attack and smooth airflow over the upper surface separates into turbulence.",
      },
      {
        term: "Bernoulli's Principle",
        definition:
          "In steady, incompressible fluid flow, an increase in fluid velocity corresponds to a decrease in static pressure. Contributes to wing lift generation alongside flow deflection.",
      },
    ],
    quiz: [
      {
        question:
          "What is the 'camber' of an airfoil?",
        options: [
          "The thickness of the wing measured at the trailing edge",
          "The curvature of the mean line relative to the chord line",
          "The angle between the wing and the oncoming wind",
          "The ratio of wingspan to chord length",
        ],
        answerIndex: 1,
        explanation:
          "Camber describes how curved the airfoil's mean line is. A highly cambered airfoil generates more lift at low angles of attack but also more drag.",
      },
      {
        question: "The equal-transit-time theory of lift is:",
        options: [
          "Correct — air molecules must arrive at the trailing edge simultaneously",
          "Correct for thick airfoils but not thin ones",
          "A myth — upper-surface air actually arrives at the trailing edge significantly earlier than lower-surface air",
          "Correct only at subsonic speeds below Mach 0.3",
        ],
        answerIndex: 2,
        explanation:
          "Equal transit time is a well-documented myth. Real flow measurements show upper-surface air moving much faster than equal transit time predicts. The correct explanation involves the Kutta condition and circulation theory.",
      },
      {
        question:
          "A wing stalls when:",
        options: [
          "Airspeed drops below a fixed minimum value",
          "The engine loses power",
          "The angle of attack exceeds the critical angle and smooth upper-surface airflow separates",
          "The aircraft flies above its maximum altitude",
        ],
        answerIndex: 2,
        explanation:
          "Stall is an aerodynamic phenomenon dependent on angle of attack, not airspeed. An aircraft can stall at any speed — even at high speed in a steep turn — if the critical AoA is exceeded.",
      },
      {
        question:
          "What does the NACA 2412 airfoil designation tell you?",
        options: [
          "Designed in 1924 for the 12th wind tunnel experiment",
          "Maximum camber 2% at 40% chord, maximum thickness 12% of chord",
          "Wing span 2.4m, tested at Mach 0.12",
          "Series 24, test model 12 from the NACA archive",
        ],
        answerIndex: 1,
        explanation:
          "NACA 4-digit series: first digit = max camber %, second digit = camber position in tenths of chord, last two digits = max thickness %. NACA 2412: 2% camber at 40% chord, 12% max thickness.",
      },
      {
        question:
          "According to Bernoulli's principle, where is the static pressure lowest on a lifting wing in flight?",
        options: [
          "At the leading edge, where velocity is highest",
          "On the lower surface, where pressure builds up to support the aircraft",
          "On the upper surface, where air accelerates around the curve",
          "At the trailing edge, where upper and lower flows rejoin",
        ],
        answerIndex: 2,
        explanation:
          "Air over the curved upper surface of a cambered wing accelerates, and by Bernoulli's principle this higher velocity corresponds to lower static pressure. This lower pressure above vs. higher pressure below creates the net upward lift force.",
      },
    ],
    activity: {
      title: "Paper Strip Bernoulli Demo",
      description:
        "A piece of paper, your breath, and a few variations demonstrate the pressure difference that lifts a 400-ton airliner. Observe, predict, and explain what you see.",
      materials: [
        "Strip of paper approximately 5cm × 25cm (a notebook page torn lengthwise works well)",
        "Ruler",
        "Scissors",
        "Your breath",
        "Optional: a hair dryer on low cool setting",
      ],
      steps: [
        "Hold one short end of the paper strip against your lower lip, letting the rest hang down. Blow a steady stream of air across the top surface of the paper. Observe and record what happens.",
        "Predict: if you blow harder, does the paper rise higher, fall, or stay the same? Test it and compare your prediction to the result.",
        "Now curve the paper strip slightly (like an airfoil) by dragging it over a pencil. Hold the curved end under your lower lip and blow across the convex (upper) surface. How does the lift response compare to the flat paper?",
        "Try blowing under the paper (lower surface). Does this provide more or less lift than blowing over the top? Explain using Bernoulli's principle.",
        "Challenge: fold the paper lengthwise to create a simple airfoil cross-section (flat bottom, curved top). Hold it at different angles — simulating angle of attack — and blow air across it. At what angle does the paper seem to generate the most upward force before it becomes unstable?",
        "Write two to three sentences explaining what your observations demonstrate about pressure, velocity, and lift. Specifically address: why does faster air = lower pressure?",
      ],
    },
  },

  {
    slug: "wing-planforms-and-geometry",
    unitSlug: "wings-and-lift",
    title: "Wing Planforms & Aspect Ratio",
    description:
      "Rectangular, tapered, swept, delta — wing planform dramatically affects performance. Why do gliders have long narrow wings while fighters have short stubby ones?",
    duration: "25 min",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "high-lift-devices",
    unitSlug: "wings-and-lift",
    title: "Flaps, Slats & High-Lift Devices",
    description:
      "How does a 400-ton airliner slow to 140 knots for landing without stalling? Explore the clever engineering of leading-edge slats and trailing-edge flaps.",
    duration: "25 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "supersonic-aerodynamics",
    unitSlug: "wings-and-lift",
    title: "Supersonic Aerodynamics & Shock Waves",
    description:
      "When airspeed exceeds Mach 1, Bernoulli breaks down and shock waves take over. The physics of supersonic flight is stranger than science fiction.",
    duration: "35 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "boundary-layer",
    unitSlug: "wings-and-lift",
    title: "The Boundary Layer & Turbulence",
    description:
      "The thin layer of air clinging to every surface is where drag is born. Understand laminar vs. turbulent flow and why golf balls have dimples.",
    duration: "25 min",
    order: 5,
    status: "coming-soon",
  },

  // ─── UNIT 4: STABILITY & CONTROL ───────────────────────────────────────────

  {
    slug: "pitch-roll-and-yaw",
    unitSlug: "stability-and-control",
    title: "Pitch, Roll & Yaw",
    description:
      "Three axes of motion, three families of control surface — and the Wright Brothers solved the puzzle before anyone else. Master the geometry of aircraft control.",
    duration: "30 min",
    order: 1,
    status: "published",
    objectives: [
      "Name the three axes of aircraft rotation and the control surface primarily responsible for each.",
      "Explain how elevators, ailerons, and rudder each generate their control forces.",
      "Describe a coordinated turn and explain why rudder is needed alongside aileron.",
      "Explain how the Wright Brothers achieved roll control before modern ailerons existed.",
    ],
    sections: [
      {
        heading: "The Three Axes of Rotation",
        body: "Any rigid body in three-dimensional space can rotate about three independent axes. For an aircraft, all three axes pass through the aircraft's **center of gravity** (CG):\n\n**Lateral axis** (wing-to-wing, side to side): Rotation about this axis is called **pitch** — the nose goes up or down. Imagine tilting the aircraft like you're pushing the nose toward or away from the ground.\n\n**Longitudinal axis** (nose to tail, front to back): Rotation about this axis is called **roll** — the wings bank left or right. Imagine the aircraft spinning like a slow-motion log roll.\n\n**Vertical axis** (straight up/down through the fuselage): Rotation about this axis is called **yaw** — the nose swings left or right while the aircraft remains wings-level. Imagine the aircraft swiveling on a vertical pole through its center.\n\nIn a real maneuver, an aircraft typically rotates about all three axes simultaneously. Skilled pilots coordinate all three controls to produce the desired result.",
      },
      {
        heading: "The Elevator: Controlling Pitch",
        body: "The **elevator** is a movable control surface located on the horizontal stabilizer at the tail. When the pilot pulls the control stick or yoke back, the elevator deflects upward:\n\n- Upward elevator deflection increases the camber of the horizontal tail, generating downward aerodynamic force on the tail.\n- This downward tail force rotates the nose upward — positive pitch.\n\nWhen the pilot pushes forward, the elevator deflects downward, pushing the tail up and rotating the nose down — negative pitch.\n\nThe horizontal stabilizer provides **pitch stability**: if the aircraft is disturbed nose-up, the stabilizer generates a restoring force that tends to push the nose back down. The elevator overrides this stability to allow the pilot to command pitch changes.",
      },
      {
        heading: "Ailerons: Controlling Roll",
        body: "**Ailerons** are hinged control surfaces on the outer trailing edge of each wing. They work differentially — when one goes up, the other goes down.\n\nWhen the pilot moves the stick or wheel to the right:\n- Right aileron deflects upward → reduces lift on the right wing\n- Left aileron deflects downward → increases lift on the left wing\n- Result: right wing drops, left wing rises → aircraft rolls right\n\nAilerons are the primary means of initiating a turn. A bank creates an unequal lift distribution: the lower wing's lift vector has a horizontal component toward the direction of the turn, curving the flight path.\n\n**Adverse yaw** is a complication: the downward-deflected aileron (creating more lift) also creates more induced drag, yawing the nose slightly in the wrong direction. To correct this, pilots apply **coordinated rudder** in the direction of the turn.",
      },
      {
        heading: "The Rudder: Controlling Yaw",
        body: "The **rudder** is a movable surface on the vertical stabilizer. Pushing the left rudder pedal deflects the rudder left, creating an aerodynamic force that pushes the tail right and swings the nose left.\n\nIn most aircraft, rudder alone is not the primary turning tool — it is used to:\n1. **Coordinate turns** — counteract adverse yaw when banking with ailerons.\n2. **Correct for crosswinds** — during landing, hold the nose into the wind to track the centerline.\n3. **Control in an engine-out emergency** — when one engine fails on a multi-engine aircraft, the asymmetric thrust produces strong yaw toward the dead engine. Rudder counters this.\n4. **Spin recovery** — applying opposite rudder breaks the yaw rotation in an aerodynamic spin.\n\nThe vertical stabilizer provides **yaw stability**: a gust that yaws the nose will generate a restoring force pointing the nose back into the wind (weather-vane effect).",
      },
      {
        heading: "The Coordinated Turn",
        body: "A smooth, efficient turn in an aircraft requires all three axes working together:\n\n1. **Apply aileron** in the direction of the desired turn to bank the wings. The bank angle determines the rate of turn.\n2. **Apply back pressure** on the elevator (pitch up) to maintain altitude. In a bank, the wings' lift vector is no longer vertical — some lift is now horizontal, providing centripetal force. To maintain altitude, total lift must increase to compensate for the vertical component lost to the bank. This requires raising AoA with back elevator.\n3. **Apply slight rudder** in the direction of the turn to counteract adverse yaw.\n\nIn a **steep turn** (>45° bank), the load factor (G-force) on the aircraft increases rapidly. At 60° bank, load factor is 2G — the wings must generate twice the normal lift. Stall speed increases with the square root of load factor. At 60° bank, stall speed is √2 ≈ 1.41 times the normal stall speed — a critical consideration for tight maneuvering.",
      },
    ],
    realWorldExample: {
      title: "The Wright Brothers and the Wing-Warping Problem",
      body: "Before the Wright Brothers solved controlled flight in 1903, others had built aircraft that could lift off — but couldn't turn or stay level. The Austrian pioneer Otto Lilienthal made hundreds of successful glider flights in the 1890s before dying in a crash, unable to control roll. He tried to manage roll by shifting his body weight, which was too slow and limited.\n\nWilbur Wright observed buzzards and noticed they twisted their wingtips to roll. This observation led to **wing warping**: cables attached to the wingtips could twist the entire wing slightly, increasing camber and lift on one side and decreasing it on the other. This was the first practical roll control system in aviation history.\n\nThe 1903 Flyer used this system successfully. By 1908, ailerons — hinged surfaces that achieved the same effect more efficiently and with less structural stress — had largely replaced wing warping. Glenn Curtiss flew an aileron-equipped aircraft across Keuka Lake in 1908, igniting a fierce patent dispute with the Wright Brothers over whether ailerons infringed the wing-warping patent.\n\nThe core insight — that you need differential wing lift to control roll — was the breakthrough. The mechanical implementation evolved, but the aerodynamic principle the Wrights identified is unchanged in the ailerons of every aircraft flying today.",
    },
    keyTerms: [
      {
        term: "Pitch",
        definition:
          "Rotation about the lateral axis (wing-to-wing). Nose-up pitch is positive. Controlled primarily by the elevator.",
      },
      {
        term: "Roll",
        definition:
          "Rotation about the longitudinal axis (nose-to-tail). Wings banking left or right. Controlled primarily by the ailerons.",
      },
      {
        term: "Yaw",
        definition:
          "Rotation about the vertical axis. Nose swinging left or right while remaining wings-level. Controlled primarily by the rudder.",
      },
      {
        term: "Aileron",
        definition:
          "Hinged control surfaces on the outer trailing edge of each wing, moving differentially to create roll. The downgoing aileron increases lift; the upgoing aileron decreases lift.",
      },
      {
        term: "Elevator",
        definition:
          "Movable horizontal surface on the tail that controls pitch by creating downward or upward force on the horizontal stabilizer.",
      },
      {
        term: "Rudder",
        definition:
          "Movable vertical surface on the tail that controls yaw. Used primarily to coordinate turns, manage crosswinds, and handle asymmetric thrust in multi-engine aircraft.",
      },
      {
        term: "Coordinated Turn",
        definition:
          "A banked turn executed with aileron, elevator back pressure, and rudder working together, such that no adverse yaw or sideslip is present.",
      },
    ],
    quiz: [
      {
        question:
          "Which control surface primarily controls an aircraft's roll?",
        options: [
          "Elevator (horizontal tail surface)",
          "Rudder (vertical tail surface)",
          "Ailerons (outer wing trailing edges)",
          "Flaps (inner wing trailing edges)",
        ],
        answerIndex: 2,
        explanation:
          "Ailerons deflect differentially — one up, one down — creating unequal lift across the two wings and causing the aircraft to roll.",
      },
      {
        question:
          "The Wright Brothers achieved roll control on the 1903 Flyer by:",
        options: [
          "Installing hinged ailerons similar to modern aircraft",
          "Using rudder pedals to swing the nose into a turn",
          "Warping (twisting) the entire wing surface using cables",
          "Shifting their body weight from side to side",
        ],
        answerIndex: 2,
        explanation:
          "Wing warping used cables to twist the wingtips, increasing camber and lift on one side and decreasing it on the other. Modern ailerons achieve the same aerodynamic result with a hinged surface.",
      },
      {
        question:
          "In a coordinated turn, why must the pilot add back elevator pressure as the bank angle increases?",
        options: [
          "To prevent the rudder from overloading",
          "Because the lift vector tilts with the bank, reducing its vertical component; more AoA is needed to maintain altitude",
          "To counteract the adverse yaw created by the ailerons",
          "To prevent the aircraft from exceeding its maximum speed",
        ],
        answerIndex: 1,
        explanation:
          "In a bank, total lift is tilted — part of it provides centripetal force horizontally. The remaining vertical component is less than in wings-level flight, so AoA (and thus CL) must increase via back elevator pressure to maintain altitude.",
      },
      {
        question:
          "What is 'adverse yaw' and when does it occur?",
        options: [
          "A sudden pitch-up when power is increased rapidly",
          "The tendency of the nose to yaw opposite to the direction of the roll, caused by differential induced drag from the ailerons",
          "Excessive altitude gain caused by too much elevator back pressure",
          "Wing buffet that occurs near the stall angle of attack",
        ],
        answerIndex: 1,
        explanation:
          "The downgoing aileron generates more lift — and more induced drag. This extra drag on the high-lift wing yaws the nose toward that wing, opposite to the intended direction of turn. Coordinated rudder corrects this.",
      },
      {
        question:
          "All three axes of aircraft rotation pass through the aircraft's:",
        options: [
          "Nose (leading tip of the fuselage)",
          "Center of gravity",
          "Geometric center of the wingspan",
          "Engine centerlines",
        ],
        answerIndex: 1,
        explanation:
          "By definition, rotational axes pass through the center of mass (center of gravity). CG position affects how the aircraft responds to control inputs and determines stability characteristics.",
      },
    ],
    activity: {
      title: "Paper Airplane Control Surface Test",
      description:
        "Add real control surfaces to a paper airplane and observe how each one affects flight. You'll fly, adjust, observe, and connect each result to the aerodynamics you've learned.",
      materials: [
        "Three sheets of copy paper",
        "Scissors",
        "Transparent tape",
        "Ruler",
        "Marker",
        "Open space at least 5 meters long",
      ],
      steps: [
        "Fold a standard dart-style paper airplane from the first sheet. Fly it 5 times to establish a baseline flight path. Record: straight, banks left, banks right, pitches up, pitches down.",
        "On the second airplane, after folding, cut two small slits (approximately 1.5 cm) in the trailing edge of each wing symmetrically. Bend these tabs up slightly. Fly 5 times. What happened to the pitch? Why?",
        "Reset those tabs to neutral. Now bend one tab up and one tab down (left and right wings differently). Fly 5 times. What happened to the roll? Which direction did the aircraft bank?",
        "On the third airplane, add a small fin at the tail. Cut a slit and bend a rudder tab left. Fly 5 times. What happened to yaw?",
        "Try combining a right aileron deflection with a left rudder deflection. What happens? Does this mirror what adverse yaw correction looks like?",
        "Draw a diagram of your best airplane with each control surface labeled, showing the deflection direction and the resulting aircraft motion.",
      ],
    },
  },

  {
    slug: "static-dynamic-stability",
    unitSlug: "stability-and-control",
    title: "Static & Dynamic Stability",
    description:
      "Why do some aircraft recover automatically from disturbances while others diverge into uncontrollable oscillation? The mathematics of stability governs the answer.",
    duration: "30 min",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "fly-by-wire",
    unitSlug: "stability-and-control",
    title: "Fly-By-Wire & Flight Control Computers",
    description:
      "Modern fighters and airliners are intentionally aerodynamically unstable — only computers flying control inputs 40 times per second make them flyable. Inside fly-by-wire.",
    duration: "30 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "spiral-spin-recovery",
    unitSlug: "stability-and-control",
    title: "Spirals, Spins & Recovery",
    description:
      "A stall combined with yaw becomes a spin — the most dramatic maneuver in aviation training. Learn the physics and the recovery procedure.",
    duration: "25 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "high-speed-control",
    unitSlug: "stability-and-control",
    title: "High-Speed & Supersonic Control",
    description:
      "Control reversal, Mach tuck, and all-moving tails — the control challenges of transonic and supersonic flight that nearly killed Chuck Yeager.",
    duration: "30 min",
    order: 5,
    status: "coming-soon",
  },

  // ─── UNIT 5: ROCKETS & PROPULSION ──────────────────────────────────────────

  {
    slug: "solid-vs-liquid-propellants",
    unitSlug: "rockets-and-propulsion",
    title: "Solid vs. Liquid Propellants",
    description:
      "Two completely different philosophies of rocket propulsion — solid motors that are simple but unstoppable, and liquid engines that are throttleable but fiendishly complex.",
    duration: "30 min",
    order: 1,
    status: "coming-soon",
  },
  {
    slug: "rocket-nozzle-design",
    unitSlug: "rockets-and-propulsion",
    title: "The de Laval Nozzle & Supersonic Flow",
    description:
      "How does a converging-diverging nozzle accelerate a gas to Mach 5 inside a rocket engine? The counterintuitive physics of nozzle design.",
    duration: "35 min",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "staging-and-rocket-equation",
    unitSlug: "rockets-and-propulsion",
    title: "Staging & the Tsiolkovsky Equation",
    description:
      "The rocket equation is brutal: most of a rocket's mass must be propellant. Staging is the elegant solution. Calculate what it actually takes to reach orbit.",
    duration: "40 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "reusability",
    unitSlug: "rockets-and-propulsion",
    title: "Reusability: SpaceX and the New Paradigm",
    description:
      "Landing a rocket booster on a drone ship in the ocean — how SpaceX made the once-impossible routine, and why reusability changed the economics of spaceflight.",
    duration: "30 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "ion-drives-and-electric-propulsion",
    unitSlug: "rockets-and-propulsion",
    title: "Ion Drives & Electric Propulsion",
    description:
      "Chemical propulsion is powerful but wasteful. Electric propulsion is extraordinarily efficient but weak. When each approach is the right choice — and how Dawn and Hayabusa proved it.",
    duration: "25 min",
    order: 5,
    status: "coming-soon",
  },

  // ─── UNIT 6: STRUCTURES & MATERIALS ────────────────────────────────────────

  {
    slug: "strength-to-weight-ratio",
    unitSlug: "structures-and-materials",
    title: "Strength-to-Weight Ratio",
    description:
      "Every gram added to an aircraft requires more fuel, more structure, and less payload. Learn why the triangle is the engineer's best friend — and why adding more material can sometimes make a structure weaker.",
    duration: "30 min",
    order: 1,
    status: "published",
    objectives: [
      "Define strength-to-weight ratio and explain why it is critical in aerospace design.",
      "Explain why triangles are the fundamental shape in truss structures.",
      "Describe how the Boeing 787's composite construction reduces weight.",
      "Explain the paradox of how adding material can increase structural stress in certain configurations.",
    ],
    sections: [
      {
        heading: "Why Every Gram Counts",
        body: "In most engineering fields, adding a bit of extra material 'just to be safe' is an inexpensive precaution. In aerospace, it is a cascade of penalties:\n\n**The weight spiral**: If a structure is 10 kg too heavy, the aircraft needs more fuel to fly the same mission. More fuel means heavier tanks and a heavier fuselage to support them. Heavier fuselage needs stronger — and heavier — structure. Which needs more fuel... The spiral of weight additions can compound a small initial overweight into a significant aircraft performance penalty.\n\nThe governing metric is the **strength-to-weight ratio** — the load a structure can carry divided by its own weight. For a material:\n**σ/ρ** = yield strength (Pa) ÷ density (kg/m³)\n\nHigh-strength steel has tremendous absolute strength but is dense. Carbon fiber composites have comparable or greater strength at less than one-third the density. In aerospace, the structural mass fraction (structure weight ÷ total weight) is minimized while maintaining required safety factors — typically 1.5× ultimate load for aircraft structures.",
      },
      {
        heading: "The Triangle: Nature's Rigid Shape",
        body: "A **truss** is a structural framework composed of interconnected triangles. The triangle is special among polygons because:\n\n**It is the only polygon that cannot change shape without changing the length of at least one of its sides.** A square can shear into a rhombus without any side changing length. A pentagon and hexagon can similarly distort. But a triangle with fixed side lengths has exactly one possible shape — it is inherently rigid.\n\nIn a truss structure, triangles transmit loads through their members primarily as **tension** (stretching) or **compression** (squeezing). Materials can typically carry these axial loads very efficiently — a slender rod can carry enormous tension. Compare this to **bending**: a beam loaded in bending must carry both tension and compression simultaneously, with complex stress distributions, and requires considerably more material.\n\nThis is why bridges, cranes, aircraft fuselage frames, landing gear, and space station trusses all use triangulated structure. The Eiffel Tower's framework, the wing box of a commercial airliner, and a bicycle frame all share the same geometric principle.",
      },
      {
        heading: "Bracing and the I-Beam",
        body: "Beyond triangles, two other structural concepts dominate aerospace design:\n\n**Bracing**: Adding diagonal members to rectangular frameworks converts them into triangulated (and therefore rigid) structures. This is why the steel framework of a building requires diagonal cross-bracing — without it, the rectangular bays would rack (change shape) under sideways wind loads.\n\n**The I-beam** (and its close relative, the box beam) is a masterpiece of material efficiency. In a beam loaded in bending:\n- The top surface is in compression\n- The bottom surface is in tension\n- The center is nearly unstressed\n\nAn I-beam concentrates material in the flanges (top and bottom) where stresses are highest, and uses a thin web to connect them and resist shear. The result: far more bending stiffness and strength per unit weight than a solid rectangular beam of the same weight. Wing spars — the primary structural elements of aircraft wings — are almost universally I-beams or box-section beams.",
      },
      {
        heading: "How Adding Material Can Make It Weaker",
        body: "This seems paradoxical, but it is a real effect with important implications:\n\nWhen you add mass to a structure, you increase the **inertial loads** it generates during acceleration (such as during flight maneuvers or ground impacts). In a long beam, mass distributed along its length creates **bending moments** — the product of force and distance from the support. Add material near the ends of a cantilevered wing, and you increase the bending moment at the root, requiring more structure at the root to resist it.\n\nA second mechanism: in buckling-critical structures (thin panels, slender columns), adding thickness on the wrong side of a neutral axis can actually reduce the buckling resistance. This appears in the design of very thin aerospace skins — sheet metal optimized for buckling, not just direct stress.\n\nThe lesson: structural design is a global optimization problem. Local reinforcement must always be evaluated for its effect on the entire load path, not just the reinforced region.",
      },
      {
        heading: "Composite Materials in Modern Aerospace",
        body: "A **composite material** consists of two components: a strong fiber (typically carbon, glass, or aramid) embedded in a matrix (typically epoxy resin). Neither component alone is ideal for aerospace: the fiber is strong but brittle; the resin is tough but weak. Together they combine the fiber's directional strength with the resin's toughness.\n\n**Carbon fiber reinforced polymer (CFRP)** is the dominant aerospace composite today:\n- Tensile strength: approximately 1,500 MPa (vs. ~270 MPa for 2024-T3 aluminum)\n- Density: approximately 1,600 kg/m³ (vs. ~2,700 kg/m³ for aluminum)\n- Strength-to-weight ratio: ~3–4× better than typical aircraft aluminum\n\nCFRP is anisotropic — its strength depends on direction. Engineers orient fibers in multiple directions in carefully calculated layup sequences to handle the complex multi-axial stresses in real components.\n\nThe trade: CFRP is expensive, difficult to repair in the field, and cannot be detected for internal damage by visual inspection (requiring ultrasound or X-ray). Every material choice is — again — a tradeoff.",
      },
    ],
    realWorldExample: {
      title: "The Boeing 787 Dreamliner: 50% Composite by Weight",
      body: "The 787 Dreamliner, which entered service in 2011, was the first commercial airliner to use carbon fiber composites as the primary structural material — approximately 50% of the airframe by weight, including the entire fuselage barrel and wings.\n\nThe results:\n- **20% better fuel efficiency** compared to the similarly sized 767 it replaced, attributable to both lighter structure and more efficient engines.\n- **Structural weight reduction** of approximately 3,000 kg versus an equivalent aluminum structure, enabling a larger fuselage cross-section (wider cabin, larger windows, higher cabin pressure) without prohibitive weight penalties.\n- **Higher cabin pressure altitude** (6,000 feet equivalent vs. the traditional 8,000 feet in aluminum jets), reducing passenger fatigue on long-haul flights — possible because composite fuselages are more resistant to fatigue cracking from repeated pressurization cycles.\n\nThe challenge Boeing faced: manufacturing. The 787 fuselage is assembled in large barrel sections from single-piece composite panels — eliminating thousands of fasteners compared to aluminum assembly. But this required entirely new manufacturing technology, supply chain management, and inspection protocols. The 787 program ran roughly three years late and billions over budget partly due to these manufacturing challenges.\n\nThe lesson: material innovation in aerospace is not just a materials science problem — it is a manufacturing, inspection, and supply chain engineering problem simultaneously.",
    },
    keyTerms: [
      {
        term: "Strength-to-Weight Ratio",
        definition:
          "The load-carrying capacity of a material or structure divided by its own weight. Maximizing this ratio is a primary goal of aerospace structural design.",
      },
      {
        term: "Truss",
        definition:
          "A structural framework composed of interconnected triangles, carrying loads primarily as tension or compression in its members with minimal bending.",
      },
      {
        term: "Bending Moment",
        definition:
          "The tendency of a force applied at a distance from a support to rotate or bend a structure. The product of force magnitude and perpendicular distance from the support.",
      },
      {
        term: "I-beam",
        definition:
          "A structural beam with an I-shaped cross-section, designed to concentrate material in the flanges where bending stresses are highest, maximizing stiffness per unit weight.",
      },
      {
        term: "CFRP (Carbon Fiber Reinforced Polymer)",
        definition:
          "A composite material consisting of carbon fiber strands embedded in an epoxy matrix. Approximately 3-4× better strength-to-weight ratio than aircraft aluminum, used extensively in modern aerospace structures.",
      },
      {
        term: "Composite Material",
        definition:
          "A material made from two or more components with different properties combined to achieve characteristics superior to either component alone.",
      },
    ],
    quiz: [
      {
        question:
          "Why does a high strength-to-weight ratio matter so critically in aerospace structures?",
        options: [
          "Heavy aircraft are more stable in turbulence and safer for passengers",
          "Every kilogram saved in structure can be used for payload, fuel, or range improvement",
          "Lighter materials always cost less to manufacture at scale",
          "Weight doesn't matter as long as the engines are powerful enough",
        ],
        answerIndex: 1,
        explanation:
          "In aerospace, weight is never 'free.' Every kilogram of unnecessary structure requires more fuel to carry, which adds more weight, which requires more fuel — a compounding penalty. Weight saved in structure directly translates to payload, range, or fuel efficiency.",
      },
      {
        question:
          "Why is a triangle the fundamental shape in structural trusses?",
        options: [
          "Triangles look aerodynamic and reduce drag",
          "Triangles are the only polygon that cannot change shape without changing a side length — making them inherently rigid",
          "Triangles distribute loads equally to all three corners",
          "Triangles are cheaper to manufacture than four-sided shapes",
        ],
        answerIndex: 1,
        explanation:
          "A square can deform into a rhombus without changing side lengths. A triangle cannot — once all three side lengths are fixed, the shape is fully determined. This geometric rigidity makes triangles load-carrying without bending.",
      },
      {
        question:
          "The Boeing 787 Dreamliner uses approximately 50% carbon fiber composite by weight. Its primary structural advantage over aluminum is:",
        options: [
          "CFRP is cheaper and faster to repair than aluminum in the field",
          "CFRP is lighter and stronger, yielding roughly 20% better fuel efficiency and enabling a larger, higher-pressure cabin",
          "CFRP can be manufactured in any color without additional painting",
          "CFRP is more resistant to bird strikes than aluminum",
        ],
        answerIndex: 1,
        explanation:
          "CFRP's ~3-4× better specific strength vs. aluminum enables significant weight reduction, higher cabin pressure (better passenger comfort), and contributes substantially to the 787's ~20% fuel efficiency improvement.",
      },
      {
        question:
          "How can adding more material to a structure sometimes make it weaker?",
        options: [
          "More material means construction workers rush, reducing quality control",
          "Additional mass increases inertial loads during maneuvers, and if poorly placed, raises bending moments and stresses at critical locations",
          "Heavier structures always vibrate more, causing fatigue cracks",
          "Inspectors trust more material and perform fewer checks",
        ],
        answerIndex: 1,
        explanation:
          "Additional mass adds to bending moments (force × distance). Adding mass far from a structural support increases the moment arm, requiring more — not less — material at the support to carry the increased load.",
      },
      {
        question:
          "In a cardboard bridge design challenge, which approach most effectively increases load-carrying capacity?",
        options: [
          "Laying the cardboard completely flat for maximum surface contact",
          "Using the full unfolded width to maximize material usage",
          "Folding or forming the cardboard into a truss or I-beam shape to resist bending",
          "Wetting the cardboard to increase material density",
        ],
        answerIndex: 2,
        explanation:
          "Form follows function: an I-beam or truss shape concentrates material where stresses are highest and uses the geometry of the structure to carry loads efficiently. A flat sheet of the same material will buckle or bend easily.",
      },
    ],
    activity: {
      title: "Cardboard Bridge Challenge",
      description:
        "Design, build, and load-test a bridge using only corrugated cardboard and tape. Your goal: span 30 centimeters and support as much weight as possible using the minimum amount of cardboard.",
      materials: [
        "Corrugated cardboard (one A4/Letter sheet per team member)",
        "Clear tape (maximum 30 cm of tape allowed)",
        "Scissors or craft knife",
        "Two stacks of books as bridge supports, spaced 30 cm apart",
        "A small paper cup",
        "Pennies or coins for loading (or known weights)",
        "Scale or balance for measuring total load",
        "Ruler",
      ],
      steps: [
        "Rules: You may use one sheet of cardboard (any orientation) and 30 cm of tape maximum. The bridge must span exactly 30 cm between supports. A paper cup must rest on the bridge deck to hold test weights.",
        "Before cutting anything, sketch at least two different bridge designs on paper. Consider: flat deck, arch, truss, I-beam section, or a combination. Label which parts carry tension and which carry compression.",
        "Build your design. Time limit: 15 minutes.",
        "Test: Add weights to the paper cup one at a time (pennies, small weights). Record the load at which the bridge first shows visible deformation, and the load at failure (collapse).",
        "Examine the failure. Where did the bridge break? Was it the deck, a support leg, a joint? What type of failure was it — buckling, crushing, tearing?",
        "Calculate your bridge's efficiency score: (maximum load in grams) ÷ (mass of bridge structure in grams). Compare scores across designs.",
        "Redesign iteration: Based on the failure mode, sketch one modification that would address the specific failure point. Would this add mass? Would the efficiency score go up or down?",
      ],
    },
  },

  {
    slug: "fatigue-and-fracture",
    unitSlug: "structures-and-materials",
    title: "Fatigue, Fracture & Safe-Life Design",
    description:
      "The de Havilland Comet was the first jet airliner — and three catastrophic failures grounded the entire fleet. How fatigue cracks grow and how engineers now prevent them.",
    duration: "30 min",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "thermal-protection",
    unitSlug: "structures-and-materials",
    title: "Thermal Protection Systems",
    description:
      "Reentry heats a spacecraft to 1,600°C — hotter than molten steel. The engineering of heat shields, ablative materials, and the Space Shuttle's ceramic tiles.",
    duration: "30 min",
    order: 3,
    status: "coming-soon",
  },
  {
    slug: "landing-gear-design",
    unitSlug: "structures-and-materials",
    title: "Landing Gear: Absorbing the Impact",
    description:
      "Every landing is a controlled crash. Oleo struts, retraction mechanisms, and the structural challenge of absorbing 400 tons at 3 meters per second.",
    duration: "25 min",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "additive-manufacturing",
    unitSlug: "structures-and-materials",
    title: "3D Printing in Aerospace",
    description:
      "GE Aviation's LEAP engine uses 3D-printed fuel nozzles that would be impossible to manufacture any other way. How additive manufacturing is reshaping aerospace production.",
    duration: "25 min",
    order: 5,
    status: "coming-soon",
  },
];

export function getLessonBySlug(
  unitSlug: string,
  lessonSlug: string
): Lesson | undefined {
  return lessons.find(
    (l) => l.unitSlug === unitSlug && l.slug === lessonSlug
  );
}

export function getLessonsByUnit(unitSlug: string): Lesson[] {
  return lessons
    .filter((l) => l.unitSlug === unitSlug)
    .sort((a, b) => a.order - b.order);
}
