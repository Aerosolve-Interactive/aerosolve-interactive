export type KitLevel = "Basic" | "Advanced";
export type KitDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type CadFile = {
  label: string;
  description: string;
  fileName: string;
  filePath: string;
  fileType: "STEP";
  status: "Available" | "Coming Soon";
};

export type KitMaterial = {
  item: string;
  quantity: string;
  estimatedCost?: string;
  notes?: string;
};

export type Kit = {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  level: KitLevel;
  difficulty: KitDifficulty;
  description: string;
  ageRange: string;
  estimatedTime: string;
  estimatedMaterialCost: string;
  maxMaterialCost?: string;
  concepts: string[];
  materials: KitMaterial[];
  toolsRequired: string[];
  objective: string;
  volunteerPrepSteps: string[];
  kidBuildSteps: string[];
  testingProcedure: string[];
  dataToCollect: string[];
  safetyNotes: string[];
  stemExplanation: string;
  challengeActivity: string;
  reflectionQuestions: string[];
  donationChecklist: string[];
  extensionIdeas: string[];
  cadFiles?: CadFile[];
};

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

// Real STEP files should be placed in:
// public/cad/kits/[kitSlug]/[fileName].step
// The matching public URL is:
// /cad/kits/[kitSlug]/[fileName].step
function cadFile(
  kitSlug: string,
  fileName: string,
  label: string,
  description: string,
  status: CadFile["status"],
): CadFile {
  return {
    label,
    description,
    fileName,
    filePath: `/cad/kits/${kitSlug}/${fileName}.step`,
    fileType: "STEP",
    status,
  };
}

export const kits: Kit[] = [
  {
    id: "kit-foam-glider",
    slug: "foam-glider-stem-kit",
    title: "Foam Glider STEM Kit",
    shortTitle: "Foam Glider",
    level: "Basic",
    difficulty: "Beginner",
    description:
      "A low-cost build guide that helps kids assemble a simple foam or cardstock glider, test flight distance, and learn how tiny trim changes affect stability.",
    ageRange: "7-12",
    estimatedTime: "15-25 min",
    estimatedMaterialCost: "$0.50-$1.00 per kit",
    concepts: ["Lift", "Stability", "Center of mass", "Testing", "Iteration"],
    materials: [
      { item: "Foam sheet or cardstock template", quantity: "1 set", estimatedCost: "$0.25-$0.50", notes: "One fuselage, wing, and tail per kit." },
      { item: "Paperclip nose weight", quantity: "1-2", estimatedCost: "$0.05", notes: "Used to test center-of-mass changes." },
      { item: "Tape", quantity: "2-3 short strips", estimatedCost: "$0.05", notes: "For securing wing or tail adjustments." },
      { item: "Scissors", quantity: "1 pair per station", notes: "Shared tool rather than disposable kit material." },
      { item: "Printed template", quantity: "1", estimatedCost: "$0.05" },
      { item: "Optional markers or stickers", quantity: "Shared set", estimatedCost: "$0.10-$0.30", notes: "For personalization at the end." },
    ],
    toolsRequired: ["Scissors", "Measuring tape or meter stick", "Open launch space", "Clipboards or printed data sheet"],
    objective:
      "Kids build a simple glider, launch it safely, track how far it flies, and see how moving the paperclip or changing wing position affects stable flight.",
    volunteerPrepSteps: [
      "Pre-cut the glider parts or print one template set per participant.",
      "Build one tested sample so volunteers can demonstrate a stable starting configuration.",
      "Mark a launch line and a retrieval zone before the activity begins.",
      "Sort paperclips, tape, and printed instructions into small table bins for faster setup.",
    ],
    kidBuildSteps: [
      "Cut out the glider body, wing, and tail if they are not already prepared.",
      "Slide or tape the wing onto the body so it sits level.",
      "Attach the tail and check that it is straight.",
      "Add one paperclip to the nose and launch gently from shoulder height.",
      "Move the paperclip or make one small wing adjustment, then test again and compare results.",
    ],
    testingProcedure: [
      "Launch the glider from the same line each time.",
      "Measure the distance from the launch line to the first landing point.",
      "Record whether the glider flew straight, dove, or stalled upward.",
      "Move the paperclip forward or backward and repeat three more launches.",
    ],
    dataToCollect: [
      "Flight distance",
      "Stability rating",
      "Number of successful flights",
      "Effect of moving the paperclip forward or backward",
    ],
    safetyNotes: [
      "Launch only into a clear open space away from faces and crowded walkways.",
      "Use safe scissors and supervised cutting for younger participants.",
      "Keep small paperclips away from very young children.",
      "Adult or volunteer supervision is recommended during testing.",
    ],
    stemExplanation:
      "Gliders fly when their wings create lift. They also need the center of mass in a useful location so the nose does not pitch too far up or down. Engineers test one change at a time because even small balance changes can make a glider fly much better or much worse.",
    challengeActivity:
      "Change one variable, such as nose weight or tail position, and test again. Compare which change improves both stability and average distance.",
    reflectionQuestions: [
      "What happened when the paperclip moved farther forward or farther back?",
      "Which setup gave the straightest flight?",
      "Why do engineers repeat the same launch more than once?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Materials sorted into kit groups",
      "Glider parts checked for completeness",
      "Nonprofit or classroom contact confirmed",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare two wing shapes using the same body and nose weight.",
      "Measure average distance over three launches and graph the result.",
      "Test whether a larger tail improves stability.",
      "Challenge students to redesign for the longest stable glide.",
    ],
  },
  {
    id: "kit-paper-helicopter",
    slug: "paper-helicopter-drop-test-kit",
    title: "Paper Helicopter Drop Test Kit",
    shortTitle: "Paper Helicopter",
    level: "Basic",
    difficulty: "Beginner",
    description:
      "A quick build guide for paper helicopters that helps kids test how blade size changes drop time, rotation, and average descent behavior.",
    ageRange: "6-11",
    estimatedTime: "10-20 min",
    estimatedMaterialCost: "$0.10-$0.30 per kit",
    concepts: ["Drag", "Gravity", "Rotation", "Descent time", "Controlled variables"],
    materials: [
      { item: "Paper helicopter template", quantity: "1", estimatedCost: "$0.03-$0.05" },
      { item: "Paperclip", quantity: "1", estimatedCost: "$0.02" },
      { item: "Scissors", quantity: "1 pair per station", notes: "Shared cutting tool." },
      { item: "Ruler", quantity: "1 per station", notes: "Used to compare blade lengths." },
      { item: "Timer or phone stopwatch", quantity: "1 per station", notes: "For timing drops." },
    ],
    toolsRequired: ["Safe scissors", "Ruler", "Stopwatch", "Open drop zone"],
    objective:
      "Kids build paper helicopters and test how changing blade length affects rotation speed and time in the air.",
    volunteerPrepSteps: [
      "Print the helicopter templates and cut one sample for each table.",
      "Choose a safe drop area such as a hallway, low stair landing, or stage edge with supervision.",
      "Prepare one timing sheet per table so students can record multiple trials.",
      "Demonstrate how to keep one variable constant while changing blade length.",
    ],
    kidBuildSteps: [
      "Cut out the paper helicopter template.",
      "Fold the center body so it becomes stiffer.",
      "Fold the two top blades in opposite directions.",
      "Add the paperclip to the bottom of the body.",
      "Drop the helicopter from the same height and time how long it stays in the air.",
    ],
    testingProcedure: [
      "Drop the helicopter from the same height three times.",
      "Record the drop time for each trial.",
      "Count or estimate how many rotations happen during the descent.",
      "Trim the blades to a different length and repeat the test.",
    ],
    dataToCollect: [
      "Drop time",
      "Blade length",
      "Number of rotations",
      "Average descent time",
    ],
    safetyNotes: [
      "Drop only in a clear area with no one standing below.",
      "Use safe scissors and supervised cutting.",
      "Keep paperclips away from very young children.",
      "Adult supervision is recommended when using stairs or raised drop areas.",
    ],
    stemExplanation:
      "Gravity pulls the helicopter downward, but the spinning blades create drag. Drag slows the fall. By changing blade length and comparing average descent time, students see how engineers test one variable at a time to improve a design.",
    challengeActivity:
      "Make one helicopter with longer blades and one with shorter blades, then compare which version stays in the air longer over three trials.",
    reflectionQuestions: [
      "Which blade length stayed in the air the longest?",
      "Why is timing three trials better than timing only one?",
      "How did rotation change when the blades got longer or shorter?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Templates prepared",
      "Paperclips counted",
      "Drop zone confirmed",
      "Safety review completed",
      "Impact totals recorded after the workshop",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Graph average descent time for three blade lengths.",
      "Test the effect of a heavier or lighter paperclip.",
      "Compare square and rounded blade tips.",
      "Ask students to redesign for the slowest controlled descent.",
    ],
  },
  {
    id: "kit-straw-rocket",
    slug: "straw-rocket-launcher-kit",
    title: "Straw Rocket Launcher Kit",
    shortTitle: "Straw Rocket",
    level: "Basic",
    difficulty: "Beginner",
    description:
      "A paper rocket build guide that helps kids compare fin design and launch angle while testing distance, stability, and straightness.",
    ageRange: "7-13",
    estimatedTime: "15-25 min",
    estimatedMaterialCost: "$0.25-$0.75 per kit",
    concepts: ["Thrust", "Launch angle", "Fins", "Stability", "Projectile motion"],
    materials: [
      { item: "Paper rocket body template", quantity: "1", estimatedCost: "$0.05-$0.10" },
      { item: "Straw", quantity: "1 launch straw and 1 build straw", estimatedCost: "$0.05-$0.10" },
      { item: "Tape", quantity: "3-4 short strips", estimatedCost: "$0.05" },
      { item: "Cardstock fins", quantity: "1 set", estimatedCost: "$0.05-$0.10" },
      { item: "Scissors", quantity: "1 pair per station", notes: "Shared tool." },
      { item: "Ruler or measuring tape", quantity: "1 per station", notes: "For distance measurement." },
    ],
    toolsRequired: ["Safe scissors", "Ruler or measuring tape", "Open launch area", "Clipboards or data sheet"],
    objective:
      "Kids build a paper rocket, launch it from a straw, and compare how fin shape and launch angle affect flight distance and stability.",
    volunteerPrepSteps: [
      "Print and sort rocket body templates with fin sets before the event.",
      "Build one tested sample rocket with clearly visible fins.",
      "Mark a launch zone and a safe observer line.",
      "Set up a distance measurement station and a simple angle chart for students to use.",
    ],
    kidBuildSteps: [
      "Wrap the rocket body template around a straw or dowel to form the body tube.",
      "Tape the seam closed and pinch the nose so the front is sealed.",
      "Attach fins near the rear of the rocket.",
      "Place the rocket on the launch straw and point it into a safe open area.",
      "Launch, measure the distance, then test again with one fin or angle change.",
    ],
    testingProcedure: [
      "Launch from the same line each time.",
      "Choose one launch angle and run three trials.",
      "Measure distance and record whether the rocket flew straight or curved.",
      "Change fin shape or launch angle and repeat the test.",
    ],
    dataToCollect: [
      "Launch distance",
      "Launch angle",
      "Fin shape",
      "Stability rating",
    ],
    safetyNotes: [
      "Do not aim straw rockets at people, faces, windows, or lights.",
      "Use safe scissors and supervised cutting.",
      "Keep small fin scraps away from very young children.",
      "Adult or volunteer supervision is recommended during launches.",
    ],
    stemExplanation:
      "When students blow through the straw, air pushes the rocket forward. Fins help keep the rear of the rocket behind the nose so the flight stays straighter. Changing launch angle also changes the path through the air, which is why engineers test many launch conditions rather than assuming one setup is best.",
    challengeActivity:
      "Launch the same rocket at three different angles, then test a second fin design and compare which setup gives the best mix of distance and straight flight.",
    reflectionQuestions: [
      "Which launch angle produced the best result and why?",
      "How did fin design change stability?",
      "Why does changing only one design variable at a time make the test more useful?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Rocket templates prepared",
      "Straws sorted",
      "Launch area confirmed",
      "Safety review completed",
      "Impact counts recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare triangular fins and rectangular fins.",
      "Measure average launch distance over three trials.",
      "Graph distance versus launch angle.",
      "Challenge students to optimize for straightness rather than raw distance.",
    ],
  },
  {
    id: "kit-parachute-payload",
    slug: "parachute-payload-drop-kit",
    title: "Parachute Payload Drop Kit",
    shortTitle: "Parachute Payload",
    level: "Basic",
    difficulty: "Beginner",
    description:
      "A parachute build guide that helps kids test how canopy size affects descent speed, stability, and payload protection during a controlled drop.",
    ageRange: "7-12",
    estimatedTime: "20-30 min",
    estimatedMaterialCost: "$0.30-$0.80 per kit",
    concepts: ["Drag", "Gravity", "Surface area", "Payload protection", "Testing"],
    materials: [
      { item: "Plastic bag, tissue paper, or coffee filter canopy", quantity: "1", estimatedCost: "$0.05-$0.15" },
      { item: "String", quantity: "4 pieces", estimatedCost: "$0.05" },
      { item: "Tape", quantity: "4-6 short strips", estimatedCost: "$0.05" },
      { item: "Small cup or lightweight payload", quantity: "1", estimatedCost: "$0.10-$0.25" },
      { item: "Paperclip", quantity: "1", estimatedCost: "$0.02", notes: "Optional for balancing or weighting." },
      { item: "Ruler", quantity: "1 per station", notes: "Shared tool for canopy measurement." },
    ],
    toolsRequired: ["Ruler", "Stopwatch", "Open drop area", "Clipboards or data sheet"],
    objective:
      "Kids build a parachute for a small payload and test how canopy size affects descent time, landing stability, and payload safety.",
    volunteerPrepSteps: [
      "Pre-cut canopy material and string lengths into equal sets.",
      "Prepare a sample parachute so volunteers can show proper string attachment.",
      "Pick a safe drop area with clear floor space and consistent drop height.",
      "Set up a results sheet for timing, payload condition, and descent behavior.",
    ],
    kidBuildSteps: [
      "Tape one string to each corner of the canopy.",
      "Attach the string ends to the payload cup or holder.",
      "Check that all strings are close to the same length.",
      "Drop the parachute from a safe height and watch how it falls.",
      "Change canopy size or payload mass and test again.",
    ],
    testingProcedure: [
      "Drop the parachute from the same height for three trials.",
      "Measure descent time with a stopwatch.",
      "Record whether the payload lands upright, tilts, or flips.",
      "Change canopy size or payload mass and repeat the test.",
    ],
    dataToCollect: [
      "Drop time",
      "Parachute size",
      "Payload condition",
      "Stability during descent",
    ],
    safetyNotes: [
      "Drop only in a clear area with no one standing below.",
      "Use lightweight payloads only.",
      "Avoid sharp tools or heavy objects in the build.",
      "Adult supervision is recommended when testing from raised areas.",
    ],
    stemExplanation:
      "A parachute works because a larger canopy increases drag. More drag slows the fall, which can protect the payload during landing. Aerospace engineers use the same idea when planning safe recovery systems and payload protection.",
    challengeActivity:
      "Test one larger canopy and one smaller canopy with the same payload, then compare which setup gives the best landing time and payload condition.",
    reflectionQuestions: [
      "Which canopy size slowed the fall the most?",
      "How did the payload mass affect the descent?",
      "Why might a slower descent be valuable in aerospace systems?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Canopy pieces sorted",
      "String sets prepared",
      "Drop area confirmed",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare circular and square canopies.",
      "Measure average descent time over three trials.",
      "Graph the relationship between canopy size and descent time.",
      "Challenge students to protect a slightly more delicate payload.",
    ],
  },
  {
    id: "kit-rocket-fin",
    slug: "rocket-fin-stability-kit",
    title: "Rocket Fin Stability Kit",
    shortTitle: "Rocket Fin Stability",
    level: "Basic",
    difficulty: "Intermediate",
    description:
      "A paper rocket stability guide that uses interchangeable fins and small nose-weight changes to show why center of mass and center of pressure matter.",
    ageRange: "9-14",
    estimatedTime: "25-40 min",
    estimatedMaterialCost: "$0.50-$1.25 per kit",
    concepts: ["Center of mass", "Center of pressure", "Fins", "Stability", "Spin testing"],
    materials: [
      { item: "Paper rocket tube", quantity: "1", estimatedCost: "$0.10-$0.15" },
      { item: "Cardstock fins", quantity: "2-3 fin sets", estimatedCost: "$0.10-$0.20" },
      { item: "Tape", quantity: "4-6 short strips", estimatedCost: "$0.05" },
      { item: "Paperclips or clay", quantity: "1-2 small pieces", estimatedCost: "$0.05-$0.10", notes: "For nose weight experiments." },
      { item: "Straw or launcher", quantity: "1", estimatedCost: "$0.05-$0.15" },
      { item: "Measuring tape", quantity: "1 per station", notes: "Shared tool for flight distance." },
    ],
    toolsRequired: ["Safe scissors", "Measuring tape", "Launch space", "Data sheet or clipboard"],
    objective:
      "Kids compare fin designs and nose-weight position on a paper rocket to identify which setup gives the most stable flight.",
    volunteerPrepSteps: [
      "Prepare several fin sets so students can swap them without rebuilding the rocket body.",
      "Build one stable sample rocket and one intentionally unstable sample for comparison.",
      "Set up a safe launch lane with observers behind the launch line.",
      "Prepare a stability worksheet that helps students label center of mass and center of pressure ideas.",
    ],
    kidBuildSteps: [
      "Build the paper rocket body and seal the nose.",
      "Attach one fin design near the rear of the body.",
      "Add a small amount of nose weight if the guide calls for it.",
      "Launch the rocket safely and record how straight it flies.",
      "Swap to a different fin set or move the nose weight and test again.",
    ],
    testingProcedure: [
      "Launch from the same line with the same launch method each time.",
      "Run three trials for one fin setup.",
      "Record flight distance and a stability rating after each trial.",
      "Change fin shape or nose weight position and repeat the test.",
    ],
    dataToCollect: [
      "Fin shape",
      "Flight distance",
      "Stability rating",
      "Nose weight position",
    ],
    safetyNotes: [
      "Do not aim launches at people, faces, or fragile objects.",
      "Use only low-force launch methods for this activity.",
      "Keep small weights away from very young children.",
      "Adult or volunteer supervision is recommended during launches.",
    ],
    stemExplanation:
      "A rocket is more stable when its center of mass stays ahead of its center of pressure. Fins help move the center of pressure backward, while nose weight moves the center of mass forward. Students can see that stable flight usually comes from balancing both of those design decisions together.",
    challengeActivity:
      "Pick one fin shape and run three launches, then change only the nose weight position and compare whether stability improves.",
    reflectionQuestions: [
      "Which fin design was most stable?",
      "How did the nose weight affect the flight path?",
      "Why is it helpful to test one rocket body with multiple fin sets?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Rocket bodies prepared",
      "Fin sets sorted",
      "Launch area confirmed",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare fin area while keeping the rocket body the same.",
      "Measure average distance over three trials.",
      "Graph stability rating against fin shape.",
      "Challenge students to explain why one setup worked better than another.",
    ],
  },
  {
    id: "kit-glider-launch-stand",
    slug: "glider-launcher-stand",
    title: "3D-Printed Glider Launcher Stand",
    shortTitle: "Glider Launcher Stand",
    level: "Advanced",
    difficulty: "Intermediate",
    description:
      "An advanced build guide for a repeatable glider launch stand that helps students control launch angle and compare glider performance more scientifically.",
    ageRange: "10-16",
    estimatedTime: "45-90 min",
    estimatedMaterialCost: "$8-$18",
    maxMaterialCost: "Up to $25",
    concepts: ["Launch angle", "Repeatable testing", "Experimental control", "Glider optimization"],
    materials: [
      { item: "Cardboard or foam board base", quantity: "1", estimatedCost: "$1-$3", notes: "Main structure for the stand." },
      { item: "Rubber bands", quantity: "2-4", estimatedCost: "$0.25-$0.75", notes: "Used for launch force." },
      { item: "Wooden dowel or skewer", quantity: "1-2", estimatedCost: "$0.25-$1.00" },
      { item: "Binder clips", quantity: "2", estimatedCost: "$0.50-$1.00" },
      { item: "Tape or hot glue", quantity: "Shared supply", estimatedCost: "$0.50-$1.50" },
      { item: "Optional 3D-printed angle bracket", quantity: "1", estimatedCost: "$2-$5", notes: "Optional CAD-supported part." },
      { item: "Optional 3D-printed glider cradle", quantity: "1", estimatedCost: "$2-$5", notes: "Optional CAD-supported part." },
      { item: "Protractor", quantity: "1", estimatedCost: "$1-$3" },
    ],
    toolsRequired: ["Scissors or craft knife", "Hot glue gun", "Ruler", "Protractor", "Open launch space"],
    objective:
      "Students build a launch stand that releases gliders from controlled angles so they can compare flight distance and stability under more repeatable conditions.",
    volunteerPrepSteps: [
      "Cut the base material and test the stand dimensions before the event.",
      "Assemble one sample stand and verify that the glider releases cleanly.",
      "If using 3D-printed parts, print and label them before the event.",
      "Prepare a launch data sheet with space for angle, distance, and stability notes.",
    ],
    kidBuildSteps: [
      "Build or assemble the stand base so it sits flat and stable.",
      "Attach the launch arm or cradle and set an initial angle with the protractor.",
      "Load the glider onto the stand carefully and release it from the same setup.",
      "Measure the flight distance and record a stability rating.",
      "Adjust the launch angle or glider trim and test again.",
    ],
    testingProcedure: [
      "Set one launch angle and run three glider launches.",
      "Measure distance for each launch and record a stability rating.",
      "Change launch angle and repeat three more launches.",
      "Compare which angle gives the most consistent average result.",
    ],
    dataToCollect: [
      "Launch angle",
      "Glider distance",
      "Stability rating",
      "Average distance over 3 trials",
    ],
    safetyNotes: [
      "Use safe cutting and hot glue practices with adult or volunteer supervision.",
      "Keep launch directions pointed into a clear open area.",
      "Do not overstretch rubber bands toward people or faces.",
      "Adult supervision is recommended when assembling the stand.",
    ],
    stemExplanation:
      "A good test setup removes unnecessary variation. By holding launch angle and release position more constant, students can compare glider changes more fairly and make better engineering decisions from their data.",
    challengeActivity:
      "Keep the glider the same, change only launch angle, and compare average distance. Then keep the angle fixed and test a glider trim change.",
    reflectionQuestions: [
      "Why does repeatable launch angle make your test better?",
      "Which angle gave the most consistent result?",
      "What part of the setup reduced human variation the most?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Base materials cut and sorted",
      "Optional 3D-print parts checked",
      "Workshop site confirmed",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare two glider designs using the same launch stand.",
      "Graph average distance versus launch angle.",
      "Add a more precise angle scale for better repeatability.",
      "Discuss how controlled test rigs help aerospace engineers trust their results.",
    ],
    cadFiles: [
      cadFile("glider-launcher-stand", "angle-bracket", "Angle bracket", "Optional bracket for setting and holding a repeatable launch angle.", "Available"),
      cadFile("glider-launcher-stand", "glider-cradle", "Glider cradle", "Optional support piece that holds the glider in a more consistent launch position.", "Available"),
    ],
  },
  {
    id: "kit-mini-wind-tunnel",
    slug: "mini-wind-tunnel-flow-visualizer",
    title: "Mini Wind Tunnel Flow Visualizer",
    shortTitle: "Mini Wind Tunnel",
    level: "Advanced",
    difficulty: "Advanced",
    description:
      "A desktop airflow build guide that uses a fan, cardboard walls, and simple flow markers to help students observe drag, airfoil behavior, and visible flow separation.",
    ageRange: "12-17",
    estimatedTime: "1-2 hours",
    estimatedMaterialCost: "$15-$25",
    maxMaterialCost: "Up to $25",
    concepts: ["Airflow", "Drag", "Airfoils", "Flow straightening", "Testing"],
    materials: [
      { item: "Small USB fan or PC fan", quantity: "1", estimatedCost: "$8-$15" },
      { item: "Cardboard or foam board", quantity: "1 set", estimatedCost: "$2-$5" },
      { item: "Drinking straws for flow straightener", quantity: "20-40", estimatedCost: "$1-$2" },
      { item: "Tape or hot glue", quantity: "Shared supply", estimatedCost: "$1-$2" },
      { item: "Tissue strips or yarn tufts", quantity: "1 small set", estimatedCost: "$0.25-$1.00" },
      { item: "Optional 3D-printed airfoil test mount", quantity: "1", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
      { item: "Optional 3D-printed wing sample", quantity: "1", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
    ],
    toolsRequired: ["Hot glue gun", "Ruler", "Craft knife or scissors", "Power source for fan", "Notebook or data sheet"],
    objective:
      "Students build a small airflow tunnel and compare how different wing shapes or angles of attack change the visible airflow pattern.",
    volunteerPrepSteps: [
      "Test the fan and tunnel size before the event to confirm the airflow is strong enough.",
      "Cut the tunnel wall panels and flow-straightener bundle in advance.",
      "Prepare one sample airfoil and one flat-plate comparison shape.",
      "If using 3D-printed parts, print them before the workshop and label each piece clearly.",
    ],
    kidBuildSteps: [
      "Assemble the tunnel walls and place the fan at the inlet end.",
      "Add the straw flow straightener so the airflow becomes smoother.",
      "Place yarn tufts or tissue strips near the test area.",
      "Insert one wing shape or test mount into the airflow and observe the pattern.",
      "Change the wing shape or angle and compare what happens to the airflow.",
    ],
    testingProcedure: [
      "Run the same fan setting for every comparison.",
      "Observe one wing shape at a low angle of attack.",
      "Increase the angle and note when smooth flow starts to break up.",
      "Compare the pattern against a second wing shape.",
    ],
    dataToCollect: [
      "Airflow smoothness",
      "Wing shape",
      "Angle of attack",
      "Visible flow separation or turbulence",
    ],
    safetyNotes: [
      "Keep fingers, hair, and loose clothing away from the fan blades.",
      "Use guarded fan setups or close supervision for younger participants.",
      "Use safe cutting and hot glue practices.",
      "Adult supervision is recommended for all powered airflow stations.",
    ],
    stemExplanation:
      "Airflow is easier to understand when you can see it. The tunnel helps students observe how different wing shapes guide air and how excessive angle of attack can create disturbed flow. That same idea matters in real aircraft and wind tunnel research.",
    challengeActivity:
      "Test one wing shape at three different angles, then compare it against a second shape and explain which setup shows the cleanest airflow.",
    reflectionQuestions: [
      "Which wing shape kept the airflow smoothest?",
      "What changed when the angle of attack became too large?",
      "Why do aerospace engineers use controlled airflow experiments before building larger systems?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Tunnel panels cut and sorted",
      "Fan and power source checked",
      "Optional 3D-print parts prepared",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare a flat plate and a curved airfoil.",
      "Add simple measurement marks to record angle changes.",
      "Use the same setup to compare drag on multiple shapes.",
      "Discuss how classroom observations relate to professional wind tunnel testing.",
    ],
    cadFiles: [
      cadFile("mini-wind-tunnel-flow-visualizer", "airfoil-test-mount", "Airfoil test mount", "Optional holder that positions a wing sample at repeatable angles in the tunnel.", "Available"),
      cadFile("mini-wind-tunnel-flow-visualizer", "sample-airfoil-wing", "Sample airfoil wing", "Optional wing sample that can be tested inside the tunnel.", "Available"),
    ],
  },
  {
    id: "kit-shake-table",
    slug: "arduino-shake-table-structural-test-rig",
    title: "Arduino Shake Table Structural Test Rig",
    shortTitle: "Shake Table Test Rig",
    level: "Advanced",
    difficulty: "Intermediate",
    description:
      "A servo-powered structure testing guide that helps students compare cardboard towers under repeated vibration and connect bracing choices to stability and strength-to-weight ideas.",
    ageRange: "11-17",
    estimatedTime: "1-2 hours",
    estimatedMaterialCost: "$10-$25",
    maxMaterialCost: "Up to $25",
    concepts: ["Vibration", "Structures", "Bracing", "Resonance", "Strength-to-weight ratio", "Data testing"],
    materials: [
      { item: "Arduino Nano", quantity: "1", estimatedCost: "$4-$8" },
      { item: "Small servo", quantity: "1", estimatedCost: "$3-$6" },
      { item: "Battery pack", quantity: "1", estimatedCost: "$2-$4" },
      { item: "Cardboard platform", quantity: "1", estimatedCost: "$1-$2" },
      { item: "Straws, skewers, or sliders", quantity: "1 small bundle", estimatedCost: "$1-$2" },
      { item: "Tape or hot glue", quantity: "Shared supply", estimatedCost: "$1-$2" },
      { item: "Paperclip linkage", quantity: "1-2", estimatedCost: "$0.05-$0.10" },
      { item: "Optional 3D-printed servo mount", quantity: "1", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
      { item: "Optional 3D-printed platform slider bracket", quantity: "1", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
    ],
    toolsRequired: ["Hot glue gun", "Small screwdriver", "Computer for Arduino code upload", "Scissors or craft knife", "Testing data sheet"],
    objective:
      "Students build a small shake table and compare how different cardboard tower designs respond to repeated vibration and wobble.",
    volunteerPrepSteps: [
      "Pre-test the Arduino and servo so the motion range is safe and repeatable.",
      "Cut the cardboard platform pieces and sample tower materials before the event.",
      "Prepare one example tower with bracing and one without bracing for comparison.",
      "If using optional 3D-print parts, print and label them before the workshop.",
    ],
    kidBuildSteps: [
      "Assemble the shake-table base and connect the servo linkage.",
      "Build one cardboard tower with a chosen bracing pattern.",
      "Place the tower on the test platform and start the vibration cycle.",
      "Observe how much the tower wobbles and when it begins to fail.",
      "Change the tower design or shake intensity and test again.",
    ],
    testingProcedure: [
      "Run one tower design at a low shake intensity for a fixed amount of time.",
      "Record wobble, visible deformation, and survival time.",
      "Increase shake intensity or change tower bracing and repeat the test.",
      "Compare which structure survives the longest with the least wobble.",
    ],
    dataToCollect: [
      "Tower design",
      "Bracing type",
      "Shake intensity",
      "Survival time",
      "Wobble rating",
      "Failure point",
    ],
    safetyNotes: [
      "Adult or volunteer supervision is recommended for wiring and powered testing.",
      "Keep fingers clear of moving servo linkages.",
      "Use safe hot glue and cutting practices.",
      "Disconnect power before adjusting the mechanism by hand.",
    ],
    stemExplanation:
      "Structures do not fail only because of weight. Repeated vibration can cause wobble, bending, and eventual failure if the bracing pattern is weak. Engineers study those patterns so they can build lighter structures that still handle motion safely.",
    challengeActivity:
      "Build two tower designs with the same amount of material but different bracing, then compare which one survives longer under the same shake setting.",
    reflectionQuestions: [
      "Which tower design resisted vibration best?",
      "How did bracing change the wobble behavior?",
      "Why do engineers care about repeatable test rigs instead of random shaking by hand?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Electronics checked",
      "Tower materials sorted",
      "Optional 3D-print parts prepared",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare towers with equal height but different bracing styles.",
      "Graph wobble rating versus shake intensity.",
      "Discuss how vibration testing relates to aircraft and launch vehicles.",
      "Add a second round of testing after redesigning the weakest tower.",
    ],
    cadFiles: [
      cadFile("arduino-shake-table-structural-test-rig", "servo-mount", "Servo mount", "Optional part that gives the servo a more repeatable attachment point on the base.", "Available"),
      cadFile("arduino-shake-table-structural-test-rig", "platform-slider-bracket", "Platform slider bracket", "Optional guide bracket that helps the platform move more consistently.", "Available"),
    ],
  },
  {
    id: "kit-fin-fixture",
    slug: "adjustable-rocket-fin-test-fixture",
    title: "Adjustable Rocket Fin Test Fixture",
    shortTitle: "Rocket Fin Test Fixture",
    level: "Advanced",
    difficulty: "Intermediate",
    description:
      "A repeatable rocket test guide that uses a shared body and interchangeable fin mounting so students can compare stability variables without rebuilding everything each time.",
    ageRange: "11-16",
    estimatedTime: "45-90 min",
    estimatedMaterialCost: "$8-$20",
    maxMaterialCost: "Up to $25",
    concepts: ["Rocket stability", "Fin area", "Center of pressure", "Spin testing", "Design iteration"],
    materials: [
      { item: "Paper rocket tube", quantity: "1", estimatedCost: "$0.10-$0.20" },
      { item: "Cardstock or plastic fins", quantity: "Multiple sets", estimatedCost: "$1-$3" },
      { item: "Tape", quantity: "Shared supply", estimatedCost: "$0.50-$1.00" },
      { item: "Straw launcher", quantity: "1", estimatedCost: "$0.05-$0.15" },
      { item: "Paperclips or clay", quantity: "Small supply", estimatedCost: "$0.10-$0.50" },
      { item: "Optional 3D-printed fin collar", quantity: "1", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
      { item: "Optional 3D-printed fin slots", quantity: "1 set", estimatedCost: "$2-$4", notes: "Optional CAD-supported part." },
    ],
    toolsRequired: ["Scissors", "Ruler", "Launch area", "Data sheet or clipboard"],
    objective:
      "Students build a shared rocket test fixture that lets them swap fin shapes quickly and compare stability without rebuilding the whole rocket body.",
    volunteerPrepSteps: [
      "Prepare one rocket body and multiple fin sets before the event.",
      "Test the shared launcher and fixture so the rocket releases cleanly.",
      "If using optional 3D-print parts, print and label them before the event.",
      "Set up a stable launch lane and a worksheet for fin comparisons.",
    ],
    kidBuildSteps: [
      "Assemble the shared rocket body and attach the first fin set.",
      "Add a small amount of nose weight if needed.",
      "Launch the rocket and record distance and stability.",
      "Swap the fin set without rebuilding the whole body.",
      "Repeat the test and compare how the new fin design changes flight.",
    ],
    testingProcedure: [
      "Run three launches for one fin design.",
      "Record distance and a stability rating after each flight.",
      "Change only the fin design or fin size, then repeat the launches.",
      "Compare which setup gives the best straight-flight behavior.",
    ],
    dataToCollect: [
      "Fin shape",
      "Fin size",
      "Flight distance",
      "Stability rating",
      "Nose weight",
    ],
    safetyNotes: [
      "Do not aim launches at people or fragile objects.",
      "Use only low-force launch methods.",
      "Keep small weights and detachable parts away from very young children.",
      "Adult or volunteer supervision is recommended during launches.",
    ],
    stemExplanation:
      "A good engineering test changes one variable at a time. By keeping the rocket body the same and swapping only the fins, students can compare how fin shape and area influence the center of pressure and overall stability.",
    challengeActivity:
      "Choose two fin shapes that are the same size but different geometry, then compare which one gives straighter flight over three trials.",
    reflectionQuestions: [
      "Which fin design produced the best stability?",
      "Why is this fixture better than rebuilding a completely new rocket every time?",
      "What did you learn about testing one variable at a time?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Rocket body and fin sets sorted",
      "Optional 3D-print parts prepared",
      "Launch area confirmed",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare fin area while keeping fin shape similar.",
      "Graph stability rating for each fin set.",
      "Add a second round that changes only nose weight.",
      "Discuss why modular fixtures help professional test programs move faster.",
    ],
    cadFiles: [
      cadFile("adjustable-rocket-fin-test-fixture", "fin-collar", "Fin collar", "Optional collar that gives the rocket body a repeatable mounting point for interchangeable fins.", "Available"),
      cadFile("adjustable-rocket-fin-test-fixture", "interchangeable-fin-slot", "Interchangeable fin slot", "Optional slot part that makes fin swaps faster between trials.", "Available"),
    ],
  },
  {
    id: "kit-payload-capsule",
    slug: "payload-parachute-capsule-challenge",
    title: "Payload Parachute Capsule Challenge",
    shortTitle: "Parachute Capsule Challenge",
    level: "Advanced",
    difficulty: "Intermediate",
    description:
      "A payload recovery guide that asks students to design a small capsule and parachute system that protects a fragile payload during a controlled drop.",
    ageRange: "10-16",
    estimatedTime: "45-90 min",
    estimatedMaterialCost: "$6-$18",
    maxMaterialCost: "Up to $25",
    concepts: ["Drag", "Impact protection", "Payload design", "Mass", "Descent rate", "Iteration"],
    materials: [
      { item: "Coffee filters, plastic bag, or tissue canopy", quantity: "1-2", estimatedCost: "$0.10-$0.30" },
      { item: "String", quantity: "4-6 lengths", estimatedCost: "$0.05-$0.10" },
      { item: "Tape", quantity: "Shared supply", estimatedCost: "$0.50-$1.00" },
      { item: "Cotton balls or foam padding", quantity: "Small bundle", estimatedCost: "$0.50-$1.50" },
      { item: "Small plastic cup", quantity: "1", estimatedCost: "$0.20-$0.75" },
      { item: "Egg substitute or small fragile object", quantity: "1", estimatedCost: "$1-$3", notes: "Use a safe classroom-appropriate fragile payload." },
      { item: "Optional 3D-printed capsule shell", quantity: "1", estimatedCost: "$2-$5", notes: "Optional CAD-supported part." },
      { item: "Optional 3D-printed parachute attachment ring", quantity: "1", estimatedCost: "$1-$3", notes: "Optional CAD-supported part." },
    ],
    toolsRequired: ["Scissors", "Ruler", "Stopwatch", "Safe drop zone", "Data sheet or clipboard"],
    objective:
      "Students design a small payload capsule with a parachute system and compare how mass, canopy size, and padding affect landing success.",
    volunteerPrepSteps: [
      "Sort canopy materials, string, and capsule components into build sets.",
      "Prepare one tested sample capsule and one low-performing sample for comparison.",
      "Choose a safe drop location with consistent height and clear supervision.",
      "If using optional 3D-print parts, print and label them before the workshop.",
    ],
    kidBuildSteps: [
      "Build or assemble the capsule that will carry the payload.",
      "Add padding inside the capsule or cup.",
      "Attach the parachute strings and canopy.",
      "Drop the capsule from a safe height and observe descent time and landing condition.",
      "Change one variable, such as canopy size or capsule mass, and test again.",
    ],
    testingProcedure: [
      "Drop from the same height for each trial.",
      "Measure descent time with a stopwatch.",
      "Inspect the payload and record whether it stayed protected.",
      "Change one design variable and repeat the test.",
    ],
    dataToCollect: [
      "Drop height",
      "Descent time",
      "Payload survival",
      "Parachute size",
      "Capsule mass",
    ],
    safetyNotes: [
      "Drop only in a clear area with no one below.",
      "Use safe classroom-friendly payloads rather than hazardous fragile items.",
      "Use safe cutting and tape practices.",
      "Adult supervision is recommended for all drop testing.",
    ],
    stemExplanation:
      "Recovery systems have to manage both drag and impact. A larger parachute may slow the descent, but the payload capsule also needs enough structure and padding to survive landing. Aerospace engineers test many versions before trusting a recovery design.",
    challengeActivity:
      "Keep the same payload but test two parachute sizes or two padding layouts, then compare which design protects the payload best.",
    reflectionQuestions: [
      "Which change helped the payload survive best?",
      "How did capsule mass affect the landing?",
      "Why does a safer landing system need both drag control and payload protection?",
    ],
    donationChecklist: [
      "Instructions printed",
      "Capsule and canopy materials sorted",
      "Drop zone confirmed",
      "Optional 3D-print parts prepared",
      "Safety review completed",
      "Impact numbers recorded after the event",
      "Photo or video permission handled if needed",
    ],
    extensionIdeas: [
      "Compare two capsule shapes with the same parachute.",
      "Graph descent time versus parachute size.",
      "Test whether extra padding or less mass helps more.",
      "Connect the challenge to landers and payload recovery systems.",
    ],
    cadFiles: [
      cadFile("payload-parachute-capsule-challenge", "capsule-shell", "Capsule shell", "Optional shell that gives the payload a more repeatable protective structure.", "Available"),
      cadFile("payload-parachute-capsule-challenge", "parachute-attachment-ring", "Parachute attachment ring", "Optional ring that keeps parachute lines evenly spaced on the capsule.", "Available"),
    ],
  },
];

export function getKitBySlug(kitSlug: string) {
  return kits.find((kit) => kit.slug === kitSlug);
}

export function getKitCostCeiling(kit: Kit) {
  if (kit.maxMaterialCost) {
    const amount = Number(kit.maxMaterialCost.replace(/[^0-9.]/g, ""));
    if (!Number.isNaN(amount)) return amount;
  }

  const matches = kit.estimatedMaterialCost.match(/\$([0-9]+(?:\.[0-9]+)?)/g);
  if (!matches || matches.length === 0) return Number.POSITIVE_INFINITY;

  const values = matches
    .map((match) => Number(match.replace("$", "")))
    .filter((value) => !Number.isNaN(value));

  return values.length > 0 ? Math.max(...values) : Number.POSITIVE_INFINITY;
}
