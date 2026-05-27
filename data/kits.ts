export interface KitGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  ageRange: string;
  difficulty: "Beginner" | "Intermediate";
  estimatedTime: string;
  estimatedMaterialCost: string;
  concepts: string[];
  materials: string[];
  objective: string;
  volunteerPrepSteps: string[];
  kidBuildSteps: string[];
  safetyNotes: string[];
  stemExplanation: string;
  challengeActivity: string;
  reflectionQuestions: string[];
  donationChecklist: string[];
  extensionIdeas: string[];
}

export const kitImpactStats = [
  { label: "Kits built", value: "0" },
  { label: "Kids reached", value: "0" },
  { label: "Volunteer hours", value: "0" },
  { label: "Nonprofit partners", value: "0" },
] as const;

export const kitBuildProcess = [
  "Choose a kit guide",
  "Gather low-cost materials",
  "Prepare volunteer assembly stations",
  "Build and quality-check kits",
  "Donate or run a workshop",
  "Track impact and improve the next version",
] as const;

export const kitTestingIdeas: Record<string, string[]> = {
  "foam-glider-stem-kit": [
    "Record the distance of three launches for each glider.",
    "Rate stability on a 1-5 scale after each flight.",
    "Compare launch results before and after one design change.",
  ],
  "paper-helicopter-drop-test-kit": [
    "Time each helicopter drop with a stopwatch.",
    "Compare average drop time for different blade lengths.",
    "Track how many trials spin smoothly versus wobble.",
  ],
  "straw-rocket-launcher-kit": [
    "Measure launch distance for three launch angles.",
    "Record which fin design flies straightest.",
    "Compare the number of successful launches before and after a redesign.",
  ],
  "parachute-drop-challenge-kit": [
    "Time how long each parachute stays in the air.",
    "Record whether the payload lands safely or flips over.",
    "Compare results for different canopy sizes or string lengths.",
  ],
  "wing-shape-experiment-kit": [
    "Count how many paper strips lift upward under airflow.",
    "Compare glide or lift response for three wing shapes.",
    "Track how changing angle of attack affects performance.",
  ],
  "rocket-fin-stability-kit": [
    "Rate each rocket flight as stable, borderline, or unstable.",
    "Measure how far each design travels before curving off-axis.",
    "Compare flight behavior before and after adding fins or nose mass.",
  ],
};

export const kits: KitGuide[] = [
  {
    id: "kit-foam-glider",
    slug: "foam-glider-stem-kit",
    title: "Foam Glider STEM Kit",
    description:
      "A simple flight activity guide that helps kids build a hand-launched foam glider, test trim changes, and connect flight performance to lift, balance, and stability.",
    ageRange: "7-12",
    difficulty: "Beginner",
    estimatedTime: "15-25 min",
    estimatedMaterialCost: "~$0.50-$1.00 per kit",
    concepts: ["Lift", "Stability", "Center of mass", "Testing"],
    materials: [
      "Foam glider body pieces or lightweight foam sheet parts",
      "Small tape strips",
      "Marker for names or wing labels",
      "Paperclips or clay for nose-weight testing",
      "Printed instruction sheet",
    ],
    objective:
      "Kids build a basic foam glider, launch it safely, and learn how balance and wing shape affect stable flight.",
    volunteerPrepSteps: [
      "Pre-cut or sort the foam body, wing, and tail pieces into one set per kit.",
      "Test one sample glider before the event to confirm the wing slot and tail slot fit correctly.",
      "Bundle tape, printed instructions, and optional nose-weight pieces so each station can run quickly.",
      "Set up a clear launch area with a start line and a safe retrieval path.",
    ],
    kidBuildSteps: [
      "Slide the main wing into the center slot of the foam body.",
      "Attach the tail piece so it sits straight behind the wing.",
      "Write your name on the glider and check that both wings are level.",
      "Launch the glider gently from shoulder height and watch its path.",
      "If it dives, try a small change to wing angle or remove weight. If it stalls, move a little weight toward the nose.",
    ],
    safetyNotes: [
      "Launch only into a clear space away from faces and crowded walkways.",
      "Use only soft foam or lightweight parts designed for hand launching.",
      "Adult or volunteer supervision is recommended during testing.",
      "Keep small nose-weight pieces away from very young children.",
    ],
    stemExplanation:
      "A glider stays in the air when the wings create lift. It also needs the center of mass in a good location so the nose does not pitch up or down too much. Engineers test gliders many times and make small changes until the flight becomes smoother and more stable.",
    challengeActivity:
      "Change one variable, such as wing angle or a small amount of nose weight, and test again. Compare which setup gives the straightest and longest glide.",
    reflectionQuestions: [
      "What happened when your glider was too nose-heavy or too tail-heavy?",
      "How did one small adjustment change the flight path?",
      "Why do engineers test the same design more than once?",
    ],
    donationChecklist: [
      "Materials prepared and counted",
      "Instruction sheets printed",
      "Kit parts sorted by glider set",
      "Safety check completed",
      "Partner organization or workshop site confirmed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Test different wing shapes and compare glide distance.",
      "Measure average distance across three launches.",
      "Graph flight distance before and after a redesign.",
      "Compare which design is most stable in a classroom or gym.",
    ],
  },
  {
    id: "kit-paper-helicopter",
    slug: "paper-helicopter-drop-test-kit",
    title: "Paper Helicopter Drop Test Kit",
    description:
      "A quick rotation and drag experiment where kids build a paper helicopter, drop it from a safe height, and test how blade changes affect descent time.",
    ageRange: "6-11",
    difficulty: "Beginner",
    estimatedTime: "10-20 min",
    estimatedMaterialCost: "~$0.10-$0.30 per kit",
    concepts: ["Drag", "Gravity", "Rotation", "Testing"],
    materials: [
      "Pre-cut paper helicopter templates",
      "Crayons or markers",
      "Tape or one small paperclip",
      "Safe scissors if trimming is part of the activity",
      "Printed instruction card",
    ],
    objective:
      "Kids build a spinning paper helicopter and observe how drag slows the fall compared with a plain sheet of paper.",
    volunteerPrepSteps: [
      "Print and pre-cut helicopter templates for each participant.",
      "Set out one sample build at each table to make the folding steps easier to follow.",
      "Choose a safe drop zone such as a hallway, stage edge, or low stair landing with clear supervision.",
      "Prepare a simple timing sheet so volunteers can help record drop times.",
    ],
    kidBuildSteps: [
      "Color or label the helicopter template before folding.",
      "Fold the center body section so it becomes stiffer.",
      "Fold the two top blades in opposite directions.",
      "Add one small paperclip or tape fold at the bottom if the guide calls for it.",
      "Drop the helicopter from a safe height and watch how it spins as it falls.",
    ],
    safetyNotes: [
      "Use only safe scissors and supervised cutting if trimming is required.",
      "Drop helicopters only in a clear area with no one directly below.",
      "Keep paperclips and small parts away from very young children.",
      "Adult supervision is recommended during stair or platform drops.",
    ],
    stemExplanation:
      "Gravity pulls the helicopter downward, but the spinning blades create drag. Drag is a force that resists motion through air. When the blades are shaped well, the helicopter falls more slowly and spins more smoothly.",
    challengeActivity:
      "Change one blade length or add a small amount of weight, then drop again and compare the time it stays in the air.",
    reflectionQuestions: [
      "Which design stayed in the air the longest?",
      "What do you think the spinning blades were doing to the air?",
      "Why is repeating the drop test useful?",
    ],
    donationChecklist: [
      "Templates printed and sorted",
      "Instruction sheet included",
      "Small weights or tape pieces counted",
      "Safety check completed",
      "Workshop or donation destination confirmed",
      "Impact notes recorded after use",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Compare short blades and long blades.",
      "Measure average drop time over three trials.",
      "Graph which design falls the slowest.",
      "Test whether adding a little weight improves spinning stability.",
    ],
  },
  {
    id: "kit-straw-rocket",
    slug: "straw-rocket-launcher-kit",
    title: "Straw Rocket Launcher Kit",
    description:
      "A launch-and-test activity guide where kids build paper straw rockets, vary fin designs, and compare how thrust and launch angle affect distance and stability.",
    ageRange: "7-13",
    difficulty: "Beginner",
    estimatedTime: "15-25 min",
    estimatedMaterialCost: "~$0.25-$0.75 per kit",
    concepts: ["Thrust", "Launch angle", "Stability", "Fins"],
    materials: [
      "Wide paper straws or rolled paper launch tubes",
      "Narrow launch straws",
      "Rocket body paper templates",
      "Tape",
      "Safe scissors",
      "Printed build guide",
    ],
    objective:
      "Kids build a simple air-powered rocket, launch it safely, and test how shape and fins affect the flight path.",
    volunteerPrepSteps: [
      "Print rocket body templates and sort them with launch straws into individual build sets.",
      "Build one sample rocket with clear fins so volunteers can demonstrate the expected shape.",
      "Mark a launch zone and a retrieval zone before the workshop starts.",
      "Prepare clipboards or printed data sheets for recording launch distance and stability.",
    ],
    kidBuildSteps: [
      "Wrap the rocket body template around the wider straw or rod to form the body tube.",
      "Tape the seam and pinch the nose closed so air does not escape from the front.",
      "Attach small fins near the rear of the rocket.",
      "Place the rocket on the launch straw and aim into a safe open area.",
      "Blow through the straw to launch and watch how straight the rocket flies.",
    ],
    safetyNotes: [
      "Do not aim straw rockets at people, faces, windows, or lights.",
      "Use safe scissors and supervised cutting.",
      "Keep small fin parts and scraps away from very young children.",
      "Adult or volunteer supervision is recommended during launches.",
    ],
    stemExplanation:
      "When you blow into the straw, moving air pushes the rocket forward. Fins help keep the rear of the rocket trailing behind so the nose points in the direction of travel. Engineers test rockets many times because even small shape changes can affect stability.",
    challengeActivity:
      "Launch the same rocket at different angles, then redesign the fins and compare both distance and straightness.",
    reflectionQuestions: [
      "Which fin design helped the rocket fly straightest?",
      "How did launch angle affect distance?",
      "Why do rockets need the rear section to stay behind the nose in flight?",
    ],
    donationChecklist: [
      "Rocket templates printed and sorted",
      "Launch straws included",
      "Instruction sheets packed",
      "Safety review completed",
      "Host site or nonprofit contact confirmed",
      "Impact counts recorded after the event",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Compare three launch angles and graph distance.",
      "Test different nose shapes.",
      "Measure average launch distance over multiple trials.",
      "Compare a rocket with fins to one without fins.",
    ],
  },
  {
    id: "kit-parachute",
    slug: "parachute-drop-challenge-kit",
    title: "Parachute Drop Challenge Kit",
    description:
      "A payload-protection activity guide where kids build a simple parachute, test drop times, and learn how drag and surface area affect safe landings.",
    ageRange: "7-12",
    difficulty: "Beginner",
    estimatedTime: "20-30 min",
    estimatedMaterialCost: "~$0.30-$0.80 per kit",
    concepts: ["Drag", "Gravity", "Surface area", "Payload protection"],
    materials: [
      "Plastic bag squares, tissue paper, or lightweight canopy material",
      "String or yarn",
      "Tape",
      "Small lightweight payload such as an eraser or paper figure",
      "Printed instruction sheet",
    ],
    objective:
      "Kids build a parachute that helps a small payload land slowly and compare how canopy size changes performance.",
    volunteerPrepSteps: [
      "Pre-cut canopy squares and string lengths into equal sets for each participant.",
      "Prepare one tested sample parachute so volunteers can show correct string attachment.",
      "Choose a safe drop location with enough height and clear floor space.",
      "Set up a timing station and a results sheet to compare parachute designs.",
    ],
    kidBuildSteps: [
      "Attach four strings to the corners of the parachute canopy with tape.",
      "Tie or tape the string ends to a small payload.",
      "Check that the strings are close to the same length.",
      "Drop the parachute from a safe height and watch how slowly it falls.",
      "Change one feature, such as canopy size or payload mass, and test again.",
    ],
    safetyNotes: [
      "Drop only in a clear area with no one standing below.",
      "Use lightweight payloads only.",
      "Avoid sharp tools or heavy objects in the build.",
      "Adult supervision is recommended during testing from raised areas.",
    ],
    stemExplanation:
      "A parachute works because a large canopy increases drag. More drag slows the fall, giving the payload more time to land gently. Aerospace engineers use similar ideas when designing recovery systems and landing protection.",
    challengeActivity:
      "Test a larger and smaller canopy with the same payload, then compare which setup gives the slowest and smoothest landing.",
    reflectionQuestions: [
      "What happened when the canopy got larger or smaller?",
      "How did the payload affect the parachute behavior?",
      "Why would engineers care about slow, controlled landings?",
    ],
    donationChecklist: [
      "Canopy pieces and string sets prepared",
      "Instruction sheets printed",
      "Payload pieces sorted",
      "Safety check completed",
      "Workshop or donation destination confirmed",
      "Impact totals recorded after the event",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Compare parachute sizes and graph drop time.",
      "Test different payload masses.",
      "Measure average descent time across three drops.",
      "Try different canopy shapes such as square and circle.",
    ],
  },
  {
    id: "kit-wing-shape",
    slug: "wing-shape-experiment-kit",
    title: "Wing Shape Experiment Kit",
    description:
      "A guided aerodynamics activity where kids compare wing shapes, basic airfoil curves, and angle-of-attack changes using simple low-cost materials.",
    ageRange: "9-14",
    difficulty: "Intermediate",
    estimatedTime: "25-40 min",
    estimatedMaterialCost: "~$0.50-$1.50 per kit",
    concepts: ["Airfoils", "Lift", "Drag", "Angle of attack"],
    materials: [
      "Card stock or index cards",
      "Paper strips or lightweight wing templates",
      "Tape",
      "Pencils or straws for handles",
      "Small fan or hand-held airflow source if available",
      "Printed comparison sheet",
    ],
    objective:
      "Kids compare different wing shapes and observe how curved wings and angle changes influence lift and drag.",
    volunteerPrepSteps: [
      "Pre-cut at least two wing shapes per participant, such as flat and curved.",
      "Set up labeled stations showing which wing template is being tested.",
      "Test the airflow source before the event so the activity works consistently.",
      "Prepare simple data sheets for recording which wing shape lifts more effectively.",
    ],
    kidBuildSteps: [
      "Tape a handle or support to each wing sample so it can be held safely during testing.",
      "Observe the difference between a flat wing and a curved wing.",
      "Place the wing into moving air or run it through the air by hand in a controlled way.",
      "Change the angle slightly and watch what happens to lift and drag.",
      "Record which wing shape performs best and explain why.",
    ],
    safetyNotes: [
      "Keep fingers, hair, and loose paper clear of fans.",
      "Use safe scissors and supervised cutting if trimming is part of the activity.",
      "Avoid sharp wire or stiff plastic edges.",
      "Adult or volunteer supervision is recommended for airflow testing stations.",
    ],
    stemExplanation:
      "Wing shape matters because airflow changes when it moves around a curved surface. A well-shaped wing can help create lift, but if the angle of attack becomes too steep, drag rises and the wing may stall. Engineers compare many shapes before choosing one.",
    challengeActivity:
      "Test the same wing at different angles of attack, then compare how much lift you observe and where drag starts becoming a problem.",
    reflectionQuestions: [
      "Which wing shape seemed to create more lift?",
      "What changed when you increased the angle of attack too far?",
      "Why do aircraft designers compare many wing options instead of using one shape for everything?",
    ],
    donationChecklist: [
      "Wing templates cut and sorted",
      "Instruction sheets printed",
      "Testing station checked",
      "Safety review completed",
      "Partner site or event plan confirmed",
      "Impact notes recorded after the event",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Compare flat, curved, and swept wing shapes.",
      "Graph observations for different angles of attack.",
      "Measure how many successful lift demonstrations each design produces.",
      "Discuss which shape might work best for a glider versus a fast aircraft.",
    ],
  },
  {
    id: "kit-rocket-fin",
    slug: "rocket-fin-stability-kit",
    title: "Rocket Fin Stability Kit",
    description:
      "A stability-focused build guide where kids compare paper rocket designs with different fin layouts and nose balance to understand why rockets need the center of pressure behind the center of mass.",
    ageRange: "9-14",
    difficulty: "Intermediate",
    estimatedTime: "25-40 min",
    estimatedMaterialCost: "~$0.50-$1.25 per kit",
    concepts: ["Center of mass", "Center of pressure", "Stability", "Fins"],
    materials: [
      "Paper rocket body templates",
      "Tape",
      "Card stock fins",
      "Clay or paperclips for nose weight",
      "Launch straw or safe low-force launch tool",
      "Printed stability guide",
    ],
    objective:
      "Kids build and compare small paper rockets to see how fin placement and nose mass affect whether a rocket flies straight or wobbles off course.",
    volunteerPrepSteps: [
      "Pre-cut rocket bodies and several fin shapes for comparison.",
      "Prepare a sample stable rocket and an intentionally unstable comparison model.",
      "Mark a launch area with clear directional control and safe observer spacing.",
      "Print a stability worksheet that helps participants label center of mass and center of pressure ideas.",
    ],
    kidBuildSteps: [
      "Roll the rocket body and tape the seam closed.",
      "Seal or fold the nose so the front stays pointed.",
      "Attach fins near the rear of the rocket.",
      "Add a small amount of nose mass if the guide calls for it.",
      "Launch the rocket safely and observe whether it flies straight or turns off course.",
    ],
    safetyNotes: [
      "Do not aim launches at people, faces, or fragile objects.",
      "Use only low-force launch methods for this activity.",
      "Keep small weights and fin parts away from very young children.",
      "Adult or volunteer supervision is recommended during launches.",
    ],
    stemExplanation:
      "A stable rocket needs the center of mass ahead of the center of pressure. Fins help move the center of pressure backward, while nose weight moves the center of mass forward. When those points are in the right order, the rocket tends to point back into the airflow and fly straighter.",
    challengeActivity:
      "Compare one rocket with larger fins or more nose weight to one without those changes, then rate which design is most stable across multiple launches.",
    reflectionQuestions: [
      "How did fins change the flight path?",
      "What did added nose mass do to stability?",
      "Why is it useful to test two similar rockets with only one change at a time?",
    ],
    donationChecklist: [
      "Rocket body templates prepared",
      "Fin sets sorted",
      "Instruction sheets printed",
      "Safety check completed",
      "Workshop or partner plan confirmed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if applicable",
    ],
    extensionIdeas: [
      "Compare different fin sizes and shapes.",
      "Rate stability over several launches and graph the results.",
      "Measure average launch distance for each design.",
      "Compare a rocket with no added nose weight to one with a small balance adjustment.",
    ],
  },
];

export function getKitBySlug(kitSlug: string) {
  return kits.find((kit) => kit.slug === kitSlug);
}
