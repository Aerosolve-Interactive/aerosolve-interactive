export interface WiringRow {
  wire: string;
  connectTo: string;
}

export interface DataTable {
  columns: string[];
  rows: string[][];
}

export interface BuildStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  tags: string[];
  description: string;
  materials: string[];
  skills: string[];
  objective: string;
  buildSteps: BuildStep[];
  testProcedure: string[];
  dataTable?: DataTable;
  reflectionQuestions?: string[];
  safetyNotes?: string[];
  extensions?: string[];
  code?: string;
  wiringTable?: WiringRow[];
}

export const projects: Project[] = [
  {
    slug: "paper-glider-optimization-challenge",
    title: "Paper Glider Optimization Challenge",
    difficulty: "Beginner",
    time: "45–60 min",
    tags: ["Aerodynamics", "Data Collection", "No Electronics", "Beginner"],
    description:
      "Design, build, and systematically test three paper glider configurations. Collect real flight data, calculate averages, and use evidence to determine which design achieves the best combination of distance and stability.",
    materials: [
      "9 sheets of standard copy paper (3 per design)",
      "Ruler and pencil",
      "Tape measure or long measuring tape",
      "Masking tape (small amount for adjustments)",
      "Paperclips (optional, for nose ballast experiments)",
      "Stopwatch (optional, for measuring hang time)",
      "Indoor space at least 8 meters long with no wind",
      "Data recording sheet (provided in this project)",
    ],
    skills: [
      "Scientific method and controlled testing",
      "Data collection and averaging",
      "Aerodynamic tradeoffs (stability vs. distance)",
      "Iterative design improvement",
    ],
    objective:
      "Determine which of three glider designs (dart, wide-wing, and delta) achieves the greatest average flight distance, and explain your results using the four forces of flight and aerodynamic principles.",
    buildSteps: [
      {
        step: 1,
        title: "Build the Dart Glider",
        description:
          "Fold a standard sheet lengthwise in half (hotdog fold). Fold both top corners inward to the center crease to form a pointed nose. Fold the resulting diagonal edges again toward the center crease. Fold the plane in half along the original crease so the two wing halves face outward. Adjust the wings to be level and symmetric. This design prioritizes speed and low drag — the long, narrow profile reduces parasitic drag significantly.",
      },
      {
        step: 2,
        title: "Build the Wide-Wing Glider",
        description:
          "Fold a sheet lengthwise, but only 1/3 of the way (creating a thicker fuselage). Fold the front down twice to create a blunt nose with ballast mass. Fold the wings out wide — approximately 15 cm span on each side. Add a small upward bend at each wingtip to create winglets. This design prioritizes lift surface area and slow, stable glides with short duration flight at low speed.",
      },
      {
        step: 3,
        title: "Build the Delta Glider",
        description:
          "Fold the paper diagonally from one corner so that one edge aligns with the opposite long edge. Repeat for the other side, creating a swept triangular shape. Flatten the fuselage and crease all folds sharply. Adjust the leading edge sweep to approximately 45 degrees. Delta-wing designs have high drag but exceptional stability at a wide range of angles of attack — they are hard to stall.",
      },
      {
        step: 4,
        title: "Establish Launch Protocol",
        description:
          "Consistency is critical for valid data. Always launch: from the same point (mark a strip of tape on the floor), at the same height (shoulder height, elbow extended but not above head), with the same throw force (a gentle, smooth release — not a throw), with wings level at launch. Practice each glider once before recording data.",
      },
      {
        step: 5,
        title: "Run All Trials and Record Data",
        description:
          "Launch each glider three times per design, measuring the straight-line horizontal distance from the launch point to the first landing point. Record in the data table. Also note any crashes, spirals, or unusual behavior under the 'Stability Rating' column: Excellent (straight flight), Good (slight arc), Fair (wobbled but glided), Poor (crashed or spun).",
      },
      {
        step: 6,
        title: "Calculate Averages and Analyze",
        description:
          "Calculate the average distance for each design. Identify the best performer. Look at stability ratings — does the glider with the longest average distance also have the best stability? This is the aerodynamic tradeoff between distance and controllability. Write a brief analysis connecting your results to lift, drag, and stability principles.",
      },
    ],
    testProcedure: [
      "Mark a launch line with tape on the floor.",
      "Stand behind the line and hold the glider at shoulder height, wings level.",
      "Release with a smooth horizontal push — consistent force, not an upward throw.",
      "Measure and record the straight-line distance to the first landing point.",
      "Repeat 3 times per glider design.",
      "Note any unusual flight behavior (spiral, dive, stall) in the Notes column.",
    ],
    dataTable: {
      columns: [
        "Glider Design",
        "Trial 1 (m)",
        "Trial 2 (m)",
        "Trial 3 (m)",
        "Average (m)",
        "Stability Rating",
        "Notes",
      ],
      rows: [
        ["Dart", "", "", "", "", "", ""],
        ["Wide-Wing", "", "", "", "", "", ""],
        ["Delta", "", "", "", "", "", ""],
      ],
    },
    reflectionQuestions: [
      "Which glider traveled the furthest on average? Which was the most stable? Are these the same design or different ones — and what does this tell you about the tradeoff between distance and stability?",
      "Looking at the Dart design: how does its narrow wing profile affect lift versus drag? Use the lift equation (L = ½ρV²SCL) to explain why a smaller wing area (S) affects performance.",
      "The Delta glider has a highly swept wing. How does wing sweep affect the angle at which airflow meets the leading edge? How does this relate to its stall resistance?",
      "If you were designing a glider to compete in a distance competition, what would you change about your best-performing design? What tradeoffs would your changes introduce?",
      "The Wright Brothers' first powered flight at Kitty Hawk covered 37 meters. How does your best glider compare? What advantages did the Flyer have over a paper glider — and what disadvantages?",
    ],
    safetyNotes: [
      "Launch only in a clear area free of people in front of the flight path.",
      "Do not throw gliders near eyes — maintain a safe side clearance of at least 2 meters from bystanders.",
      "Recycle all test paper when experiments are complete.",
    ],
    extensions: [
      "Add paperclip nose ballast to each design and repeat all trials. How does nose weight affect stability and distance?",
      "Measure hang time (airborne duration) in addition to distance. Which design has the best glide ratio (distance ÷ altitude lost)?",
      "Try the same three designs in an outdoor setting with a measured wind speed. How does wind affect each design differently? Which is most wind-sensitive?",
      "Research the 'Whittle Mk1' paper airplane world record distance. What design principles make the record-holding design exceptional?",
    ],
  },

  {
    slug: "arduino-shake-table-structural-test",
    title: "Arduino Shake Table Structural Test",
    difficulty: "Intermediate",
    time: "3–4 hours",
    tags: ["Arduino", "Structures", "Intermediate", "Electronics"],
    description:
      "Build an Arduino-controlled shake table that simulates vibration loads on miniature structures. Test cardboard building models to failure, record the vibration frequency and amplitude that triggers collapse, and connect your observations to aerospace structural fatigue principles.",
    materials: [
      "Arduino Uno (or compatible board)",
      "Servo motor (standard size, e.g., SG90 or MG90S)",
      "Small breadboard",
      "4× AA battery pack with switch and connector",
      "Jumper wires (6–10)",
      "USB cable for Arduino",
      "Laptop with Arduino IDE installed",
      "Corrugated cardboard (approximately 2 A4 sheets for test structures)",
      "Hot glue gun and glue sticks",
      "Ruler and scissors",
      "Masking tape",
      "Small platform material: stiff cardboard or plywood piece (~15 cm × 10 cm)",
      "Optional: accelerometer module (MPU-6050) for actual vibration measurement",
    ],
    skills: [
      "Arduino programming fundamentals",
      "Servo motor control",
      "Structural load testing",
      "Scientific data collection under controlled conditions",
      "Connecting electronics to mechanical systems",
    ],
    objective:
      "Build a motorized shake table, construct three different structural designs in cardboard, and determine which structure survives the highest vibration amplitude before failure. Relate findings to real aerospace fatigue and vibration testing methods.",
    buildSteps: [
      {
        step: 1,
        title: "Assemble the Shake Table Base",
        description:
          "Hot-glue or tape the servo motor securely to a heavy, stable base (a thick book or weighted board works well). The servo should not move during testing — only its output shaft rotates. Cut a platform piece (approximately 15 cm × 10 cm) from stiff cardboard or thin plywood. Drill or punch a small hole through the center of one end. Connect the platform to the servo horn using the hole — the horn-to-platform connection creates an eccentric linkage. When the servo oscillates, the platform shakes side to side.",
      },
      {
        step: 2,
        title: "Wire the Circuit",
        description:
          "Connect the servo to the Arduino using the wiring table below. The servo requires its own power supply (battery pack) — do not power a standard servo directly from the Arduino 5V pin, as it will draw too much current and reset the Arduino. Connect Arduino GND to the battery pack negative terminal to share a common ground.",
      },
      {
        step: 3,
        title: "Upload and Test the Arduino Code",
        description:
          "Open Arduino IDE. Create a new sketch and paste the code provided in the Code section. Upload to the Arduino. The servo should begin oscillating between two positions (center minus amplitude, center plus amplitude) with the defined delay between moves. Test on a smooth surface first — no structure loaded. Adjust the amplitude and delayTime variables to understand their effect before testing structures.",
      },
      {
        step: 4,
        title: "Build Cardboard Test Structure A — Simple Column",
        description:
          "Cut a 3 cm × 15 cm strip of corrugated cardboard. Score and fold into a square cross-section column approximately 5 cm tall with a 3 cm footprint. Glue the column seam. Glue to a small cardboard base plate (5 cm × 5 cm). Mount the base plate on the shake table platform with a small piece of removable tape so it can be removed after testing.",
      },
      {
        step: 5,
        title: "Build Cardboard Test Structure B — Triangulated Truss Tower",
        description:
          "Cut multiple thin strips approximately 1 cm × 8 cm. Glue them into a triangulated tower with a square footprint and 4 triangular braced panels on each side. Height should match Structure A (approximately 5 cm). The goal is to replicate a braced structural frame as opposed to a hollow column. Mount identically.",
      },
      {
        step: 6,
        title: "Build Cardboard Test Structure C — Unbraced Frame",
        description:
          "Build a square frame tower with the same height and footprint as Structures A and B, but with no diagonal bracing — only vertical corner columns connected by horizontal rings. This simulates an unbaced frame that must resist lateral loads through bending of the columns rather than axial truss action. This should be the weakest design under lateral shake loads.",
      },
      {
        step: 7,
        title: "Run the Vibration Tests",
        description:
          "Start with the lowest amplitude setting (amplitude = 10 in the code) and delayTime = 200ms. Place Structure C on the platform. Observe. If it survives 30 seconds, increase amplitude by 5 and reduce delayTime by 20ms. Record the amplitude and frequency at which each structure fails or shows first visible deformation. Repeat for all three structures. Record results in the data table.",
      },
    ],
    testProcedure: [
      "Set amplitude = 10, delayTime = 200 in the code. Upload to Arduino.",
      "Secure the test structure to the shake table platform.",
      "Power the servo via the battery pack. Observe for 30 seconds.",
      "If the structure survives, increase amplitude by 5 and reduce delayTime by 20ms. Re-upload and re-test.",
      "Record: (a) amplitude at first deformation, (b) amplitude at collapse, (c) failure mode (base failure, mid-height buckling, joint failure).",
      "Repeat for all three structure types.",
    ],
    dataTable: {
      columns: [
        "Structure Type",
        "Amplitude at First Deformation",
        "Amplitude at Collapse",
        "delayTime at Collapse (ms)",
        "Failure Mode",
        "Notes",
      ],
      rows: [
        ["A — Simple Column", "", "", "", "", ""],
        ["B — Triangulated Truss", "", "", "", "", ""],
        ["C — Unbraced Frame", "", "", "", "", ""],
      ],
    },
    code: `#include <Servo.h>

Servo shaker;
int center = 90;
int amplitude = 30;
int delayTime = 150;

void setup() {
  shaker.attach(9);
}

void loop() {
  shaker.write(center - amplitude);
  delay(delayTime);
  shaker.write(center + amplitude);
  delay(delayTime);
}`,
    wiringTable: [
      { wire: "Orange/Yellow (signal)", connectTo: "Arduino D9" },
      { wire: "Red (power)", connectTo: "Battery pack positive" },
      { wire: "Brown/Black (ground)", connectTo: "Battery pack negative" },
      { wire: "Arduino GND", connectTo: "Battery pack negative" },
    ],
    reflectionQuestions: [
      "Which structure survived the highest vibration amplitude? What structural features made it most resistant to lateral loads?",
      "The unbraced frame (Structure C) fails by racking — the rectangular frame distorts into a parallelogram. How does diagonal bracing prevent this? Draw a free body diagram of a braced and unbraced panel under a lateral force.",
      "Aerospace structures experience vibration from engines, turbulence, and acoustic loads. How does repeated low-amplitude vibration differ from a single high-amplitude impact in terms of structural damage? Look up 'fatigue failure' and describe in one paragraph.",
      "The delayTime in the code controls the period of oscillation. Convert your delayTime values to frequency (in Hz): frequency = 1000 ÷ (2 × delayTime). Did structures fail at a specific frequency? Can you identify a resonant frequency in any structure?",
    ],
    safetyNotes: [
      "Keep fingers clear of the moving servo and platform during operation.",
      "Do not power the servo directly from the Arduino 5V pin — use a separate battery pack to prevent damaging the Arduino.",
      "Disconnect battery pack before adjusting wiring.",
      "Hot glue guns get very hot — use caution and adult supervision if under 14.",
    ],
    extensions: [
      "Add an MPU-6050 accelerometer to the shake table platform and use the Arduino Serial Monitor to read actual acceleration in g-forces during each test.",
      "Test the same structure designs with and without added mass on top (simulating a payload). How does top-loading affect stability?",
      "Research how Northrop Grumman or Boeing performs vibration qualification testing on satellite components. What is a 'vibration test profile' and how does it differ from your shake table test?",
    ],
  },

  {
    slug: "straw-rocket-propulsion-lab",
    title: "Straw Rocket Propulsion Lab",
    difficulty: "Beginner",
    time: "30–45 min",
    tags: ["Propulsion", "Newton's Laws", "No Electronics", "Beginner"],
    description:
      "Build and launch paper straw rockets using your breath as the propellant source. Systematically vary fin design, nose cone shape, and launch angle to measure the effect on range. Connect observations directly to Newton's Third Law and drag principles.",
    materials: [
      "Plastic drinking straws (at least 6, all the same diameter)",
      "Copy paper and tape",
      "Scissors",
      "Ruler and measuring tape",
      "Protractor (for measuring launch angle)",
      "Marker",
    ],
    skills: [
      "Newton's Third Law application",
      "Fin and nose cone aerodynamics",
      "Controlled variable experimentation",
      "Data collection and graphing",
    ],
    objective:
      "Determine which combination of nose cone shape, fin configuration, and launch angle produces the maximum horizontal range for a straw rocket launched with a consistent breath pressure.",
    buildSteps: [
      {
        step: 1,
        title: "Build the Basic Rocket Body",
        description:
          "Roll a piece of paper tightly around a straw to form a cylinder. Tape the seam. Crimp and tape the top end closed to form a sealed nose. This becomes your standard rocket body — build 6 of these so you can test multiple configurations without rebuilding.",
      },
      {
        step: 2,
        title: "Make Three Fin Configurations",
        description:
          "Cut fins from paper: (A) No fins — plain tube. (B) 3 small fins (2 cm × 2 cm triangles) evenly spaced. (C) 4 large fins (3 cm × 4 cm rectangles) evenly spaced. Tape fins to the rear of the rocket body, ensuring they are symmetric and perpendicular to the rocket axis.",
      },
      {
        step: 3,
        title: "Make Two Nose Cone Shapes",
        description:
          "Blunt nose: leave the crimped end as-is. Pointed cone: roll a small paper cone and tape to the front end. This tests how nose shape affects drag and flight stability.",
      },
      {
        step: 4,
        title: "Design Launch Apparatus",
        description:
          "Use a longer straw as your launch tube — slide the rocket over it with the rocket's open end facing your mouth. A stack of books can prop the launch straw at different angles. Mark three angles with tape on the wall: 30°, 45°, 60° elevation.",
      },
      {
        step: 5,
        title: "Run Tests",
        description:
          "Establish a standard breath: a single sharp puff of consistent force (not a long blow). Mark a launch station with tape. Test each configuration 3 times at each launch angle. Measure the straight-line horizontal distance to landing. Record all data.",
      },
      {
        step: 6,
        title: "Calculate and Graph",
        description:
          "Calculate the average distance for each configuration and angle. Create a bar chart or scatter plot of launch angle vs. distance for each fin type. Identify your winning combination and explain why it performed best.",
      },
    ],
    testProcedure: [
      "Place the launch tube at the desired angle using book props.",
      "Slide the rocket over the launch tube with the open end toward your mouth.",
      "Apply one consistent sharp puff of breath. Do not blow continuously.",
      "Measure horizontal distance from launch point to landing point.",
      "Record 3 trials per configuration per angle.",
    ],
    dataTable: {
      columns: [
        "Configuration",
        "Launch Angle",
        "Trial 1 (m)",
        "Trial 2 (m)",
        "Trial 3 (m)",
        "Average (m)",
      ],
      rows: [
        ["No fins, blunt", "45°", "", "", "", ""],
        ["3 small fins, blunt", "45°", "", "", "", ""],
        ["3 small fins, pointed", "45°", "", "", "", ""],
        ["4 large fins, pointed", "30°", "", "", "", ""],
        ["4 large fins, pointed", "45°", "", "", "", ""],
        ["4 large fins, pointed", "60°", "", "", "", ""],
      ],
    },
    reflectionQuestions: [
      "How did fins affect flight stability? Explain in terms of the relationship between the center of mass and center of pressure.",
      "Which launch angle produced the greatest distance? Is this consistent with the physics of projectile motion? Why might the optimal angle differ from the theoretical 45°?",
      "The breath supplies propulsive impulse. How does Newton's Third Law describe what happens when air exits the straw rocket's rear?",
    ],
    safetyNotes: [
      "Launch only in the intended direction with no people in the flight path.",
      "Never aim a straw rocket at anyone's face or eyes.",
    ],
    extensions: [
      "Add a payload compartment (a small paper cup glued to the rocket) and repeat tests. How does added nose weight change stability and range?",
      "Research NASA's Ames Research Center paper rocket curriculum. How does their design differ from yours?",
    ],
  },

  {
    slug: "wind-tunnel-airfoil-test",
    title: "DIY Wind Tunnel: Airfoil Lift & Drag",
    difficulty: "Intermediate",
    time: "2–3 hours",
    tags: ["Aerodynamics", "Measurement", "Intermediate", "Build"],
    description:
      "Construct a simple wind tunnel from cardboard boxes and a household fan. Mount paper airfoils on a balance and measure the deflection caused by lift and drag forces at multiple angles of attack.",
    materials: [
      "Large cardboard box (test section, min 30 cm × 30 cm cross-section)",
      "Household fan (box fan preferred)",
      "Cardboard for airfoils and balance",
      "Thin wooden dowels or kebab skewers",
      "Thread and small weights (pennies)",
      "Tape and scissors",
      "Protractor",
      "Ruler",
    ],
    skills: [
      "Wind tunnel principles",
      "Lift and drag force measurement",
      "Angle of attack effects",
      "Balance and measurement techniques",
    ],
    objective:
      "Measure the relative lift and drag forces on a NACA 2412-style airfoil at angles of attack from 0° to 20° and identify the stall angle in your wind tunnel model.",
    buildSteps: [
      {
        step: 1,
        title: "Prepare the Test Section",
        description:
          "Cut both ends off the large cardboard box to create an open tunnel. Reinforce the interior edges with tape. The fan mounts at one end — if your fan is smaller than the box opening, build a cardboard inlet cone to smooth the flow transition.",
      },
      {
        step: 2,
        title: "Build Airfoil Models",
        description:
          "Cut 3 identical airfoil shapes from stiff cardboard — approximately 10 cm chord, 15 cm span. Use a NACA 2412 profile: curved upper surface, flatter lower surface, maximum thickness at roughly 30% chord. A printable template can be scaled from the NACA 2412 coordinates available online.",
      },
      {
        step: 3,
        title: "Build the Force Balance",
        description:
          "Mount each airfoil on a skewer running through its span center (the pivot point). Attach thread to the airfoil leading edge and a small reference hook. Suspend a measured counterweight. The deflection of the counterweight thread gives a qualitative measure of lift force.",
      },
      {
        step: 4,
        title: "Run Angle-of-Attack Sweep",
        description:
          "Set the fan to low speed. Adjust the airfoil to 0° AoA, then 4°, 8°, 12°, 16°, 20°. At each angle, observe and sketch the thread deflection. Note the angle at which the thread angle suddenly decreases — this is the stall.",
      },
    ],
    testProcedure: [
      "Run the fan at constant speed throughout all tests.",
      "Set each AoA precisely using a protractor referenced to the chord line.",
      "Allow flow to stabilize 5 seconds before reading the balance.",
      "Record qualitative lift force (thread angle) at each AoA.",
    ],
    dataTable: {
      columns: [
        "Angle of Attack (°)",
        "Thread Deflection (mm or degrees)",
        "Stall? (Y/N)",
        "Notes",
      ],
      rows: [
        ["0", "", "N", ""],
        ["4", "", "N", ""],
        ["8", "", "N", ""],
        ["12", "", "", ""],
        ["16", "", "", ""],
        ["20", "", "", ""],
      ],
    },
    reflectionQuestions: [
      "At what angle of attack did you observe a sudden decrease in lift? How does this compare to the theoretical stall angle for a NACA 2412 (~16°)?",
      "What limitations does your DIY wind tunnel have compared to a professional low-speed wind tunnel? List at least three sources of measurement error.",
    ],
    safetyNotes: [
      "Keep fingers and loose materials away from the running fan.",
      "Secure all cardboard pieces so they cannot be sucked into the fan.",
    ],
  },

  {
    slug: "bottle-rocket-with-parachute",
    title: "Water Bottle Rocket with Parachute Recovery",
    difficulty: "Intermediate",
    time: "2–3 hours (plus outdoor launch)",
    tags: ["Propulsion", "Recovery Systems", "Outdoor", "Intermediate"],
    description:
      "Build a pressurized water bottle rocket with a parachute deployment system. Optimize the water fill fraction to maximize altitude, then design a reliable deployment mechanism to return the rocket undamaged.",
    materials: [
      "2-liter plastic soda bottle",
      "Bicycle pump with pressure gauge",
      "Stopper-and-launch-pin mechanism (DIY or purchased kit)",
      "Thin plastic garbage bag for parachute",
      "String (nylon preferred)",
      "Tape, scissors, cardboard for fins",
      "Measuring cup",
      "Safe outdoor launch site with 30m radius clear space",
    ],
    skills: [
      "Propulsion principles (water as reaction mass)",
      "Recovery system engineering",
      "Pressure and safety awareness",
      "Altitude optimization via fill ratio testing",
    ],
    objective:
      "Build a functional water rocket and parachute recovery system. Test three different water fill fractions (25%, 50%, 75%) to determine which provides maximum altitude.",
    buildSteps: [
      {
        step: 1,
        title: "Build the Rocket",
        description:
          "Attach 3–4 cardboard fins symmetrically to the bottom of the inverted 2-liter bottle. Construct a nose cone from a plastic bottle cap or paper cone. The bottle neck (nozzle) points downward.",
      },
      {
        step: 2,
        title: "Parachute Assembly",
        description:
          "Cut a 40 cm diameter circle from the plastic bag. Attach 4 equal-length strings (each 30 cm) to the edges at 90° intervals. Tie all strings to the payload container (a small cardboard box glued to the nose cone). Fold the parachute and pack into the nose cone so it deploys on descent.",
      },
      {
        step: 3,
        title: "Launch System",
        description:
          "Insert the stopper into the bottle neck. Connect the bicycle pump tubing. The launch pin holds the stopper in place until sufficient pressure is reached and the pin is pulled.",
      },
      {
        step: 4,
        title: "Test Three Fill Fractions",
        description:
          "Fill to 25%, 50%, then 75% of bottle capacity with water. Pump to 50 psi. Launch and observe altitude qualitatively (or measure with a simple altimeter/angle measurement). Record which fill fraction reached highest altitude.",
      },
    ],
    testProcedure: [
      "Clear a 30-meter radius of all people before pressurizing.",
      "Pump to no more than 80 psi for a standard 2-liter bottle.",
      "Stand at least 5 meters away when pulling the launch pin.",
      "Observer with safety glasses should be standing beside the launch pad to observe and call all-clear.",
    ],
    dataTable: {
      columns: [
        "Water Fill Fraction",
        "Pressure (psi)",
        "Estimated Altitude",
        "Parachute Deploy (Y/N)",
        "Notes",
      ],
      rows: [
        ["25%", "50 psi", "", "", ""],
        ["50%", "50 psi", "", "", ""],
        ["75%", "50 psi", "", "", ""],
      ],
    },
    reflectionQuestions: [
      "Which fill fraction achieved the greatest altitude? Explain this using the impulse-momentum theorem: how does water volume affect total impulse?",
      "The parachute adds drag deliberately. How does this trade altitude/range for soft landing? Name a real spacecraft recovery system that uses the same principle.",
    ],
    safetyNotes: [
      "NEVER exceed 80 psi in a standard 2-liter bottle.",
      "Always wear safety glasses. All observers must be outside the hazard radius.",
      "Adult supervision required for all pressurized launches.",
      "Never stand over or in front of a pressurized bottle.",
    ],
    extensions: [
      "Vary the launch angle and measure horizontal range vs. altitude tradeoff.",
      "Add an altimeter (available cheaply online) to measure actual peak altitude.",
    ],
  },

  {
    slug: "cardboard-truss-bridge-competition",
    title: "Cardboard Truss Bridge Engineering Challenge",
    difficulty: "Beginner",
    time: "60–90 min",
    tags: ["Structures", "Materials", "Teamwork", "Beginner"],
    description:
      "Design and build the most weight-efficient bridge possible using only corrugated cardboard, tape, and glue. Compete for the highest efficiency score — mass supported divided by bridge mass.",
    materials: [
      "Corrugated cardboard (2 A4/Letter sheets per team)",
      "Clear tape (30 cm limit)",
      "White glue or hot glue (one application each)",
      "Scissors or craft knife",
      "Two stacks of books as supports, 30 cm apart",
      "Paper cup for loading",
      "Pennies or known weights for loading",
      "Kitchen scale for weighing the bridge and load",
    ],
    skills: [
      "Truss design principles",
      "Structural load path analysis",
      "Material efficiency optimization",
      "Failure mode analysis",
    ],
    objective:
      "Build the strongest-per-gram bridge structure spanning 30 centimeters from a limited supply of cardboard and tape, maximizing load-to-bridge-mass efficiency.",
    buildSteps: [
      {
        step: 1,
        title: "Sketch Multiple Designs",
        description:
          "Before cutting any cardboard, sketch at least three structural concepts. Consider: flat plate, arch bridge, Pratt truss, Warren truss, I-beam deck, box section. Label which members will be in tension, which in compression.",
      },
      {
        step: 2,
        title: "Build Your Chosen Design",
        description:
          "Spend no more than 15 minutes building. Focus on crisp, sharp folds and solid glue joints — connection failures are the most common way bridges fail. Ensure the bridge is exactly 30 cm or more in length to span the supports.",
      },
      {
        step: 3,
        title: "Weigh the Bridge",
        description:
          "Weigh your completed, unloaded bridge on the scale. Record the mass. This is the denominator in your efficiency score.",
      },
      {
        step: 4,
        title: "Load Test to Failure",
        description:
          "Place a small paper cup on the bridge deck at mid-span. Add pennies one at a time. Record the total load at first visible deformation and at failure (total structural collapse). Photograph the failure mode.",
      },
    ],
    testProcedure: [
      "Position bridge on supports with no preloading.",
      "Place paper cup at mid-span.",
      "Add pennies one at a time, waiting 5 seconds between each.",
      "Record load at first deformation and at final collapse.",
    ],
    dataTable: {
      columns: [
        "Design Name",
        "Bridge Mass (g)",
        "Load at First Deformation (g)",
        "Load at Failure (g)",
        "Efficiency Score",
        "Failure Mode",
      ],
      rows: [
        ["Your Design", "", "", "", "", ""],
        ["Comparison A", "", "", "", "", ""],
        ["Comparison B", "", "", "", "", ""],
      ],
    },
    reflectionQuestions: [
      "Where did your bridge fail? Was it tension, compression, buckling, or joint failure? How would you reinforce specifically that failure point in a redesign?",
      "Calculate your efficiency score: failure load ÷ bridge mass. How does this compare to the best historical cardboard bridge efficiency ratios (which can exceed 1000:1 with careful design)?",
      "The Boeing 787 carbon fiber fuselage achieves incredible strength-to-weight ratio through material selection. If you could replace your cardboard with carbon fiber of the same geometry, estimate how much stronger your bridge would be.",
    ],
    safetyNotes: [
      "Hot glue guns reach high temperatures — use caution.",
      "Keep fingers clear of scissors and craft knives.",
    ],
    extensions: [
      "Repeat with a cardboard vs. balsa wood comparison. The same structural design — different material. Which achieves higher efficiency?",
      "Research the Firth of Forth Railway Bridge in Scotland. How does its cantilever truss design demonstrate the same triangulation principles you used?",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
