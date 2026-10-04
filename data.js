/**
 * GymTransform 100 - Comprehensive Workout & Nutrition Curriculum
 * Tailored for Body Recomposition, Belly Fat Reduction, Posture Correction, and Athletic Agility.
 * Starting Profile: 73 kg, 5'7" - 5'8", Beginner (10 days experience).
 */

const NUTRITION_DATA = {
  profile: {
    startWeightKg: 73,
    height: "5'7\" - 5'8\" (171 cm)",
    experience: "Beginner (10 days)",
    primaryGoal: "Body Recomposition, Belly Fat Loss, Posture Alignment & Agility"
  },
  calories: {
    bmr: 1620,
    tdeeEstimated: 2250,
    targetDailyCalories: 1850,
    dailyDeficit: 400,
    strategy: "Mild recomposition deficit: burns visceral belly fat while supplying energy to build lean muscle and maintain agility."
  },
  macros: {
    proteinGrams: 125,
    proteinCalories: 500,
    proteinRationale: "1.7g per kg bodyweight. Crucial to preserve and tone muscle while shedding belly fat.",
    carbsGrams: 190,
    carbsCalories: 760,
    carbsRationale: "Fuels high-energy 60-75 min workouts and athletic agility drills without sluggishness.",
    fatsGrams: 55,
    fatsCalories: 495,
    fatsRationale: "Maintains optimal hormone balance, joint health, and fat-soluble vitamin absorption."
  },
  hydration: {
    dailyTargetLiters: 3.5,
    tips: [
      "Drink 500ml water immediately upon waking to kickstart metabolism.",
      "Sip 500-750ml water throughout your 60-75 min workout.",
      "Avoid drinking huge amounts of water immediately with large meals to assist digestion."
    ]
  },
  bellyFatTruths: [
    {
      title: "Posture Creates The 'False Belly' (Anterior Pelvic Tilt)",
      desc: "Sitting for long hours weakens glutes/core and tightens hip flexors, tilting the pelvis forward and forcing the lower abdomen to spill outward. Strengthening glutes, hamstrings, and the transverse abdominis flattens the belly by 1-2 inches even before fat loss!"
    },
    {
      title: "Targeting Belly Fat Directly is Impossible (Spot Reduction Myth)",
      desc: "Doing 1,000 crunches will NOT burn belly fat. Visceral belly fat is mobilized as total body fat drops through consistent calorie deficit, resistance training, and high protein."
    },
    {
      title: "Transverse Abdominis is Your 'Internal Belt'",
      desc: "Traditional sit-ups push the belly outward. Planks, deadbugs, and stomach vacuums train the transverse abdominis, which cinches your waistline inward 360 degrees."
    },
    {
      title: "The V-Taper Optical Illusion",
      desc: "Building wider lats (back) and lateral delts (shoulders) physically broadens your upper torso, making your waist and belly appear significantly slimmer by comparison."
    },
    {
      title: "Cortisol & Sleep Connection",
      desc: "Chronic stress and less than 7 hours of sleep spike cortisol, prompting the body to store stubborn visceral fat around abdominal organs. Prioritize 7.5-8 hours of quality sleep."
    }
  ],
  foodSources: [
    {
      category: "High Protein Sources (Non-Veg & Veg)",
      items: [
        { name: "Whole Eggs / Egg Whites", serving: "3 whole eggs + 2 whites", protein: "26g", calories: "240 kcal" },
        { name: "Chicken Breast (Cooked)", serving: "150g", protein: "46g", calories: "245 kcal" },
        { name: "Low-Fat Paneer / Cottage Cheese", serving: "100g", protein: "18-20g", calories: "180 kcal" },
        { name: "Tofu (Firm)", serving: "150g", protein: "22g", calories: "180 kcal" },
        { name: "Greek Yogurt / Thick Curd", serving: "200g", protein: "18-20g", calories: "130 kcal" },
        { name: "Whey Protein Isolate/Concentrate", serving: "1 scoop (30g)", protein: "24g", calories: "120 kcal" },
        { name: "Lentils / Dal / Chickpeas (Cooked)", serving: "1 cup (200g)", protein: "14-16g", calories: "230 kcal" },
        { name: "Sprouts / Moong Dal", serving: "1 cup (150g)", protein: "12g", calories: "160 kcal" }
      ]
    },
    {
      category: "Clean Carbs for Agility & Fuel",
      items: [
        { name: "Rolled Oats", serving: "50g raw", carbs: "33g", benefit: "Slow-digesting energy, high beta-glucan fiber." },
        { name: "Brown Rice / Basmati Rice", serving: "150g cooked", carbs: "42g", benefit: "Clean glycogen replenishment post-workout." },
        { name: "Sweet Potato / Boiled Potato", serving: "150g", carbs: "30g", benefit: "Potassium rich, prevents muscle cramps." },
        { name: "Whole Grain / Roti (Wheat)", serving: "2 rotis", carbs: "36g", benefit: "High fiber and steady stamina." },
        { name: "Bananas & Berries", serving: "1 medium banana", carbs: "27g", benefit: "Ideal 30 mins before workout." }
      ]
    },
    {
      category: "Essential Healthy Fats",
      items: [
        { name: "Almonds & Walnuts", serving: "20g (handful)", fats: "12g", benefit: "Omega-3s, brain focus, hormone synthesis." },
        { name: "Peanut Butter (Natural, no added sugar)", serving: "1 tbsp (16g)", fats: "8g", benefit: "Satiety and healthy fats." },
        { name: "Extra Virgin Olive Oil / Ghee", serving: "1 tsp (5ml)", fats: "5g", benefit: "Joint lubrication and vitamin absorption." }
      ]
    }
  ]
};

const EXERCISE_LIBRARY = {
  // PUSH / CHEST & SHOULDERS
  "db_flat_bench_press": {
    image: "assets/exercises/db_flat_bench_press.jpg",
    name: "Dumbbell Flat Bench Press",
    category: "Chest",
    equipment: "Dumbbells, Flat Bench",
    target: "Pectoralis Major, Anterior Deltoids, Triceps",
    postureBenefit: "Balances pressing strength against rowing; opens up anterior chest when performed with retracted scapulae.",
    steps: [
      "Sit on the bench with dumbbells resting on your knees. Kick your knees up one by one to lie back securely.",
      "Retract your shoulder blades: pull them down and squeeze them together against the bench padding. Keep a gentle natural arch in your lower back.",
      "Lower the dumbbells smoothly with elbows at a 45-60 degree angle to your torso (never flared out 90 degrees).",
      "Press upward in a smooth arc, squeezing your chest at the top without banging the weights together."
    ],
    cues: ["Elbows tucked 45°", "Squeeze shoulder blades into bench", "Controlled 2-sec descent"],
    proTip: "Imagine bending the dumbbells toward each other at the top to maximally contract the pectoral fibers.",
    mistake: "Flaring elbows straight out at 90°, which impinges the rotator cuff and strains shoulders."
  },
  "db_incline_bench_press": {
    image: "assets/exercises/db_incline_bench_press.jpg",
    name: "Dumbbell Incline Bench Press",
    category: "Chest",
    equipment: "Dumbbells, Incline Bench (30-45°)",
    target: "Upper Chest (Clavicular Head), Front Deltoids, Triceps",
    postureBenefit: "Builds upper chest fullness to create a lifted, proud athletic chest posture.",
    steps: [
      "Set bench to a 30-degree incline (too steep shifts the work to shoulders).",
      "Lie back with chest pushed proud and feet planted firmly on the floor.",
      "Lower dumbbells to just outside upper chest level, feeling an upper chest stretch.",
      "Drive weights up smoothly while keeping shoulder blades glued to the pad."
    ],
    cues: ["Bench at 30°", "Drive through feet", "Press with upper chest"],
    proTip: "Don't set incline too high (above 45°) or it turns into an overhead shoulder press.",
    mistake: "Bouncing weights or arching lower back excessively off the incline seat."
  },
  "cable_chest_fly": {
    image: "assets/exercises/cable_chest_fly.jpg",
    name: "Cable Standing Chest Fly",
    category: "Chest",
    equipment: "Cable Crossover Tower",
    target: "Inner & Outer Chest Squeeze",
    postureBenefit: "Isolates chest contractions without compressing shoulder joints.",
    steps: [
      "Set pulleys at chest height. Take one handle in each hand and take a staggered step forward.",
      "Keep a slight bend in your elbows and a slight forward lean at the hips.",
      "Bring hands together in a hugging motion, crossing or meeting in front of chest.",
      "Slowly return to starting position until you feel a comfortable chest stretch."
    ],
    cues: ["Hug a big tree", "Maintain soft elbow bend", "Pause 1 sec at peak squeeze"],
    proTip: "Think about bringing your inner biceps together rather than just touching your hands.",
    mistake: "Bending and straightening elbows like a press instead of keeping arms in a locked fly arc."
  },
  "db_seated_shoulder_press": {
    image: "assets/exercises/db_seated_shoulder_press.jpg",
    name: "Dumbbell Seated Shoulder Press",
    category: "Shoulders",
    equipment: "Dumbbells, Adjustable Bench (75-85°)",
    target: "Anterior & Lateral Deltoids, Triceps",
    postureBenefit: "Strengthens overhead stability and builds rounded athletic shoulder caps.",
    steps: [
      "Set bench to nearly upright (75-80°). Kick dumbbells to shoulder height, palms forward.",
      "Brace your core tight so your lower back doesn't over-arch.",
      "Press dumbbells directly upward until arms are extended overhead (do not lock out elbows harshly).",
      "Lower under control for 2 seconds until dumbbells are level with ears."
    ],
    cues: ["Core braced tight", "Elbows slightly forward", "Controlled descent"],
    proTip: "Angle elbows slightly inward (in the scapular plane) to protect your shoulder joints.",
    mistake: "Over-arching the lower back to turn it into an incline chest press."
  },
  "db_lateral_raise": {
    image: "assets/exercises/db_lateral_raise.jpg",
    name: "Dumbbell Lateral Raise",
    category: "Shoulders",
    equipment: "Light Dumbbells",
    target: "Lateral (Side) Deltoids",
    postureBenefit: "Directly widens the shoulders, which accentuates the V-taper and makes the waist look slimmer.",
    steps: [
      "Stand tall or sit with dumbbells at your sides, knees soft, chest proud.",
      "Hinge hips slightly (5 degrees) so you aren't leaning backwards.",
      "Raise arms out to the sides leading with your elbows, like pouring water from a pitcher.",
      "Stop when arms reach parallel with the floor (shoulder height). Lower slowly."
    ],
    cues: ["Lead with elbows", "Pinkies slightly higher than thumbs", "Never swing your torso"],
    proTip: "Use lighter weights! Ego-lifting here ruins form and strains traps instead of side delts.",
    mistake: "Shrugging the neck and traps up to yank heavy weights."
  },
  "cable_face_pull": {
    image: "assets/exercises/cable_face_pull.jpg",
    name: "Cable Face Pull (Crucial Posture Fix)",
    category: "Back / Shoulders",
    equipment: "Cable Machine, Rope Attachment",
    target: "Rear Deltoids, Rhomboids, Rotator Cuffs",
    postureBenefit: "NUMBER ONE EXERCISE to cure rounded desk shoulders and slouching! Instantly pulls shoulders back.",
    steps: [
      "Set cable pulley to eye level with a rope attachment.",
      "Grip the ends of the rope with thumbs pointing backward.",
      "Step back for tension. Pull the rope directly toward your eyes/bridge of your nose.",
      "As you pull back, flare your hands outward and rotate wrists back so your thumbs finish behind your ears."
    ],
    cues: ["Pull rope to eyes", "Spread ends apart", "Squeeze upper back & rear delts"],
    proTip: "Pause for 2 full seconds in the contracted position feeling the pinch between your shoulder blades.",
    mistake: "Pulling down to the chin with elbows low, missing the external rotation."
  },
  "cable_tricep_pushdown": {
    image: "assets/exercises/cable_tricep_pushdown.jpg",
    name: "Cable Tricep Pushdown",
    category: "Arms",
    equipment: "Cable Machine, Rope or Straight Bar",
    target: "Triceps (Lateral and Medial Heads)",
    postureBenefit: "Builds arm tone and elbow joint stability.",
    steps: [
      "Stand facing cable with pulley at top. Pin elbows firmly against your ribs.",
      "Push attachment down toward your thighs by extending your forearms only.",
      "At the bottom, squeeze triceps hard for 1 second.",
      "Slowly let forearms rise to 90 degrees without letting elbows drift forward."
    ],
    cues: ["Pin elbows to ribs", "Full extension squeeze", "Control return to 90°"],
    proTip: "If using a rope, spread the rope ends apart at the bottom to maximize the peak contraction.",
    mistake: "Swinging elbows back and forth and using bodyweight momentum."
  },
  "db_overhead_tricep_extension": {
    image: "assets/exercises/db_overhead_tricep_extension.jpg",
    name: "Dumbbell Overhead Tricep Extension",
    category: "Arms",
    equipment: "Single Dumbbell, Bench",
    target: "Triceps Long Head",
    postureBenefit: "Stretches and builds the long head of the tricep which shapes the back of the arm.",
    steps: [
      "Sit on bench holding one dumbbell vertically with both hands forming a diamond under the top plate.",
      "Press the dumbbell overhead with elbows pointing forward.",
      "Lower the dumbbell behind your head by bending elbows, feeling a deep tricep stretch.",
      "Drive back to full extension above head."
    ],
    cues: ["Keep elbows pointing forward", "Deep stretch behind head", "Keep ribcage down"],
    proTip: "Don't let your elbows flare out wide; keeping them parallel increases long-head tension.",
    mistake: "Letting lower back overarch when pressing up."
  },

  // PULL / BACK & BICEPS
  "lat_pulldown": {
    image: "assets/exercises/lat_pulldown.jpg",
    name: "Wide-Grip Lat Pulldown",
    category: "Back",
    equipment: "Lat Pulldown Machine",
    target: "Latissimus Dorsi, Teres Major, Biceps",
    postureBenefit: "Builds upper back width for the V-taper that visually shrinks the waistline.",
    steps: [
      "Sit with thighs snug under pads. Grip bar slightly wider than shoulder width.",
      "Lean torso back approximately 10-15 degrees and push chest proud.",
      "Initiate the pull by driving elbows straight down toward your hip pockets.",
      "Pull bar to upper chest/collarbone, squeeze lats, and let bar return up slowly under full control."
    ],
    cues: ["Drive elbows down to hips", "Chest up to meet the bar", "Slow 3-sec stretch up"],
    proTip: "Think of your hands as passive hooks; pull with your elbows and lats, not your forearms.",
    mistake: "Swinging torso backward drastically to yank heavy weight down."
  },
  "seated_cable_row": {
    image: "assets/exercises/seated_cable_row.jpg",
    name: "Seated Cable Row (Close-Grip)",
    category: "Back",
    equipment: "Low Cable Row Station, V-Bar",
    target: "Middle Traps, Rhomboids, Lats",
    postureBenefit: "Directly combats hunched spine from laptop work by strengthening scapular retractors.",
    steps: [
      "Sit with knees slightly bent on footplates. Grab V-handle and sit tall with spine neutral.",
      "Pull handle directly toward lower abdomen / belly button.",
      "Squeeze shoulder blades firmly together as handle touches your stomach.",
      "Slowly extend arms forward allowing upper back to stretch without rounding lower spine."
    ],
    cues: ["Pull to belly button", "Chest tall & proud", "Squeeze shoulder blades together"],
    proTip: "Keep shoulders depressed (down away from ears) during the entire pull.",
    mistake: "Leaning way forward and rounding the lower back under tension."
  },
  "db_single_arm_row": {
    image: "assets/exercises/db_single_arm_row.jpg",
    name: "Dumbbell Single-Arm Row",
    category: "Back",
    equipment: "Dumbbell, Flat Bench",
    target: "Lats, Rhomboids, Core Stabilizers",
    postureBenefit: "Unilateral strength eliminates muscle imbalances and builds core anti-rotational stability.",
    steps: [
      "Place left knee and left hand on bench. Keep back flat like a tabletop.",
      "Hold dumbbell in right hand hanging straight down under shoulder.",
      "Pull dumbbell up toward your hip pocket, keeping elbow close to your side.",
      "Pause for a second at the top, then lower dumbbell slowly back down."
    ],
    cues: ["Pull dumbbell to hip pocket", "Back flat as a tabletop", "Feel stretch at bottom"],
    proTip: "Don't pull straight up to your chest; pull in a gentle J-curve toward your hip.",
    mistake: "Twisting the torso wildly at the top to cheat the weight up."
  },
  "db_bicep_curl": {
    image: "assets/exercises/db_bicep_curl.jpg",
    name: "Dumbbell Incline or Standing Bicep Curl",
    category: "Arms",
    equipment: "Dumbbells",
    target: "Biceps Brachii, Brachialis",
    postureBenefit: "Strengthens pulling chain and arm definition.",
    steps: [
      "Stand tall with dumbbells by sides, palms facing inward (neutral grip).",
      "As you curl weights up, rotate wrists outward so palms face shoulders at top (supination).",
      "Squeeze bicep at peak contraction without lifting elbows forward.",
      "Lower under control for 2 seconds back to sides."
    ],
    cues: ["Rotate palms up as you curl", "Keep elbows locked at sides", "No torso swinging"],
    proTip: "Control the negative descent; 50% of muscle growth occurs during the lowering phase.",
    mistake: "Swinging hips and shoulders to launch weights."
  },
  "hammer_curl": {
    image: "assets/exercises/hammer_curl.jpg",
    name: "Dumbbell Hammer Curl",
    category: "Arms",
    equipment: "Dumbbells",
    target: "Brachialis, Brachioradialis (Forearms)",
    postureBenefit: "Thickens the side of the arm and builds grip strength for heavier rows.",
    steps: [
      "Hold dumbbells with neutral grip (palms facing each other) throughout entire movement.",
      "Curl weights up toward shoulder height keeping palms facing each other.",
      "Pause briefly at top, then lower with control."
    ],
    cues: ["Palms face each other", "Elbows pinned", "Solid grip"],
    proTip: "This targets the brachialis muscle beneath the bicep, pushing the bicep peak higher.",
    mistake: "Rocking back and forth."
  },

  // LEGS / POSTURE & LOWER BODY
  "goblet_squat": {
    image: "assets/exercises/goblet_squat.jpg",
    name: "Dumbbell Goblet Squat",
    category: "Legs",
    equipment: "Single Dumbbell",
    target: "Quadriceps, Glutes, Core, Upper Back",
    postureBenefit: "The anterior weight placement naturally forces torso upright, training perfect squat posture safely without spinal compression.",
    steps: [
      "Hold dumbbell vertically against your chest, cupping the top weight with both hands.",
      "Stand with feet shoulder-width apart, toes flared slightly out (15-30°).",
      "Initiate by sitting hips back and down between knees, keeping chest tall and elbows inside knees.",
      "Squat until hips are at or just below parallel. Drive through midfoot and heels to stand."
    ],
    cues: ["Keep dumbbell glued to chest", "Knees track over toes", "Drive through midfoot"],
    proTip: "Push knees out in line with toes so your elbows pass inside your thighs at bottom.",
    mistake: "Letting heels peel off floor or collapsing chest forward."
  },
  "db_romanian_deadlift": {
    image: "assets/exercises/db_romanian_deadlift.jpg",
    name: "Dumbbell Romanian Deadlift (RDL)",
    category: "Legs / Posture",
    equipment: "Dumbbells",
    target: "Hamstrings, Gluteus Maximus, Erector Spinae",
    postureBenefit: "CRITICAL FOR CURING ANTERIOR PELVIC TILT! Strengthens weak glutes and hamstrings to level out the pelvis and flatten the lower belly.",
    steps: [
      "Stand tall holding dumbbells in front of thighs, feet hip-width apart.",
      "Unlock knees slightly (keep this slight knee bend fixed throughout).",
      "Hinge at the hips: push your butt straight back toward the wall behind you.",
      "Slide dumbbells down along your shins until you feel a deep hamstring stretch (just below knees).",
      "Drive hips forward and squeeze glutes hard at the top to stand."
    ],
    cues: ["Push hips back to wall", "Shins stay vertical", "Squeeze glutes at top"],
    proTip: "Think about closing a car door with your butt; this is a pure hip hinge, not a squat.",
    mistake: "Rounding the lower back or squatting down with the knees."
  },
  "leg_press": {
    image: "assets/exercises/leg_press.jpg",
    name: "Leg Press (Machine)",
    category: "Legs",
    equipment: "Leg Press Machine",
    target: "Quadriceps, Glutes, Hamstrings",
    postureBenefit: "Safe heavy leg loading with back supported, building metabolic leg muscle that burns fat 24/7.",
    steps: [
      "Sit back firmly against seat with lower back and tailbone glued to pad.",
      "Place feet middle of platform, shoulder-width apart.",
      "Release safety catches and lower weight until knees are at 90 degrees.",
      "Press through whole foot to return to start, stopping just short of locking knees."
    ],
    cues: ["Glue lower back to pad", "Knees don't cave in", "Never lock knees out"],
    proTip: "Never allow your tailbone/lower back to roll off the pad at the bottom.",
    mistake: "Hyperextending and violently snapping knees straight at top."
  },
  "walking_lunges": {
    image: "assets/exercises/walking_lunges.jpg",
    name: "Walking Dumbbell Lunges",
    category: "Legs / Agility",
    equipment: "Bodyweight or Light Dumbbells",
    target: "Quads, Glutes, Hamstrings, Single-Leg Balance",
    postureBenefit: "Fixes hip asymmetry, stretches tight hip flexors on trailing leg, and sharpens athletic agility.",
    steps: [
      "Stand tall with dumbbells in hands or hands on hips.",
      "Take a comfortable stride forward with right leg.",
      "Lower hips until front thigh is parallel to floor and rear knee hovers 1 inch off ground.",
      "Drive through front heel to step directly into the next stride with the left leg."
    ],
    cues: ["90° bend in both knees", "Chest upright like a soldier", "Smooth fluid strides"],
    proTip: "A slightly longer stride targets glutes; a shorter stride targets quads.",
    mistake: "Letting front knee slam inward or torso lean lazily onto front thigh."
  },
  "standing_calf_raise": {
    image: "assets/exercises/standing_calf_raise.jpg",
    name: "Standing Dumbbell / Machine Calf Raise",
    category: "Legs",
    equipment: "Dumbbells or Machine, Step Platform",
    target: "Gastrocnemius, Soleus, Ankle Agility",
    postureBenefit: "Builds ankle stiffness and reactivity essential for sprint speed, jump height, and agility.",
    steps: [
      "Stand on balls of feet on an elevated ledge or flat ground.",
      "Lower heels below level of step for a deep 2-second calf stretch.",
      "Explode up onto balls of big toes, squeezing calves at top for 1 full second."
    ],
    cues: ["Deep stretch at bottom", "Hold 1 sec at top", "Press through big toe"],
    proTip: "Bouncing removes muscle work; pause 1 sec at bottom to kill the elastic stretch reflex.",
    mistake: "Rapid bouncy reps without stretching."
  },

  // CORE & BELLY-FAT CINCHING
  "deadbug": {
    image: "assets/exercises/deadbug.jpg",
    name: "Deadbug (Transverse Abdominis Activator)",
    category: "Core",
    equipment: "Bodyweight / Mat",
    target: "Deep Core, Transverse Abdominis, Pelvic Stabilizers",
    postureBenefit: "THE BEST EXERCISE FOR A FLAT STOMACH. Pulls the lower abdomen flat by actively teaching the pelvis to resist tilting forward.",
    steps: [
      "Lie on back with arms pointing straight toward ceiling, knees bent at 90 degrees above hips.",
      "CRITICAL: Flatten your lower back firmly into the floor—imagine squashing a grape under your spine.",
      "Slowly extend right arm overhead and left leg straight toward floor while keeping lower back pressed flat.",
      "Return to center and switch to left arm and right leg."
    ],
    cues: ["Lower back GLUED to floor", "Exhale all air out as limbs extend", "Move slowly & controlled"],
    proTip: "If your lower back arches off floor even slightly, don't extend your leg as far.",
    mistake: "Allowing lower back to arch off the floor, which disengages core and strains spine."
  },
  "forearm_plank": {
    image: "assets/exercises/forearm_plank.jpg",
    name: "Active Forearm Plank",
    category: "Core",
    equipment: "Bodyweight / Mat",
    target: "Full Core Cylinder, Glutes, Serratus Anterior",
    postureBenefit: "Toughens the entire abdominal wall like a natural corset.",
    steps: [
      "Rest on forearms with elbows directly under shoulders, feet hip-width apart.",
      "Squeeze glutes hard, tuck pelvis slightly under (posterior pelvic tilt), and brace abs.",
      "Actively pull your elbows down toward your toes and toes toward your elbows (isometric squeeze).",
      "Breathe steadily without letting hips sag or pike high."
    ],
    cues: ["Squeeze glutes rock hard", "Pull elbows toward toes", "Breathe smoothly through nose"],
    proTip: "A 30-second active plank where you pull elbows to toes works 10x better than a lazy 2-minute sagging plank.",
    mistake: "Sagging lower back or hiking hips in a triangle."
  },
  "hanging_knee_raise": {
    image: "assets/exercises/hanging_knee_raise.jpg",
    name: "Captain's Chair / Hanging Knee Raise",
    category: "Core",
    equipment: "Captain's Chair or Pull-up Bar",
    target: "Lower Rectus Abdominis, Hip Flexor Control",
    postureBenefit: "Tightens the lower belly pooch by curling the pelvis upward.",
    steps: [
      "Support yourself on captain's chair pads or hang from bar with shoulders packed.",
      "Exhale and curl your knees up toward your chest.",
      "At top, tilt your pelvis upward toward your ribs to actively contract the lower abs.",
      "Lower legs slowly without swinging back and forth."
    ],
    cues: ["Curl pelvis up to ribs", "No swinging or momentum", "Control the descent"],
    proTip: "Don't just lift your thighs; actively round your lower spine to curl your hips upward.",
    mistake: "Using pendulum momentum to swing legs up."
  },
  "cable_woodchopper": {
    image: "assets/exercises/cable_woodchopper.jpg",
    name: "Cable Rotational Woodchopper",
    category: "Core / Agility",
    equipment: "Cable Machine, D-Handle",
    target: "Internal & External Obliques, Rotational Power",
    postureBenefit: "Develops rotational agility for sports and cinches the waist laterally.",
    steps: [
      "Set cable to shoulder height. Stand sideways to cable with feet wider than shoulder-width.",
      "Grip handle with both hands, arms extended.",
      "Pivot on back foot and rotate torso diagonally across body, keeping arms mostly straight.",
      "Control the return back to the stack with your core."
    ],
    cues: ["Pivot back foot", "Rotate with torso and hips", "Arms stay extended"],
    proTip: "The rotation comes from your hips and thoracic spine, not your arms.",
    mistake: "Bending arms and pulling like a row."
  },
  "farmers_walk": {
    image: "assets/exercises/farmers_walk.jpg",
    name: "Dumbbell Farmer's Walk",
    category: "Full Body / Core / Agility",
    equipment: "Pair of Moderate/Heavy Dumbbells",
    target: "Grip, Traps, Obliques, Core Stability, Athletic Carriage",
    postureBenefit: "Teaches tall, upright carriage; builds indestructible core bracing while walking.",
    steps: [
      "Pick up two dumbbells with a deadlift posture.",
      "Stand completely upright: shoulders back, chest proud, eyes straight ahead.",
      "Walk forward in smooth, controlled heel-to-toe strides for 40-50 steps without swaying.",
      "Turn carefully and walk back. Keep core braced like you're about to be punched."
    ],
    cues: ["Shoulders pinned back", "Take short, rhythmic steps", "Do not sway side to side"],
    proTip: "Walk like you have a stack of books balanced on your head.",
    mistake: "Slouching forward or letting weights bang against thighs."
  },

  // AGILITY & ROOM (NO-EQUIPMENT) DRILLS
  "skater_hops": {
    image: "assets/exercises/skater_hops.jpg",
    name: "Lateral Skater Hops (Agility & Glute Burn)",
    category: "Agility / Home",
    equipment: "Zero Equipment (Room)",
    target: "Gluteus Medius, Lateral Agility, Ankle Balance",
    postureBenefit: "Develops lateral springiness, improves joint stability, and torches calories.",
    steps: [
      "Start in a mini-squat on your right foot.",
      "Bound laterally to the left, landing softly on your left foot while sweeping your right leg behind.",
      "Immediately push off left foot to bound back to the right.",
      "Keep chest up and use arms in an athletic running rhythm for balance."
    ],
    cues: ["Land softly on midfoot", "Absorb impact with knee and hip", "Bound side to side smoothly"],
    proTip: "Focus on stick-and-hold balance for 1 second each side when starting out.",
    mistake: "Stiff-legged heavy landings."
  },
  "fast_feet_shadow": {
    image: "assets/exercises/fast_feet_shadow.jpg",
    name: "Fast-Feet Agility Drills (Room Speed Ladder)",
    category: "Agility / Home",
    equipment: "Zero Equipment (Room)",
    target: "Calves, Foot Speed, Cardio Capacity, Coordination",
    postureBenefit: "Builds quick reactive neurological pathways so you feel light and fast on your feet.",
    steps: [
      "Stand in athletic stance (knees soft, hips back, balls of feet).",
      "Patter your feet as fast as possible in place (in-in, out-out rhythm).",
      "Every 5 seconds, perform a quick 90-degree hop turn and resume fast feet.",
      "Pump arms rapidly in sync with feet."
    ],
    cues: ["Stay on balls of feet", "Fast rapid cadence", "Core engaged"],
    proTip: "Imagine the floor is hot coals; minimize ground contact time.",
    mistake: "Landing flat-footed on heels."
  },
  "pushup_standard": {
    image: "assets/exercises/pushup_standard.jpg",
    name: "Standard Push-Up (or Incline Desk Push-Up)",
    category: "Chest / Core / Home",
    equipment: "Zero Equipment (Room/Bed/Desk)",
    target: "Chest, Triceps, Anterior Delts, Plank Core",
    postureBenefit: "Integrates upper body pressing with full-body core plank stability.",
    steps: [
      "Place hands slightly wider than shoulder-width, fingers spread, body in a straight plank line.",
      "(If full push-ups are too difficult, place hands elevated on a sturdy desk or bed frame—never do knee pushups as elevated hands teach proper plank mechanics).",
      "Lower chest to within 2 inches of floor/desk, keeping elbows at 45 degrees.",
      "Press back up explosively while keeping glutes squeezed tight."
    ],
    cues: ["Body is one straight plank", "Elbows at 45°", "Squeeze glutes to protect lower back"],
    proTip: "Tuck your pelvis under slightly; your abs should feel just as active as your chest.",
    mistake: "Sagging hips or poking neck down toward floor."
  },
  "glute_bridge": {
    image: "assets/exercises/glute_bridge.jpg",
    name: "Glute Bridge & Hold",
    category: "Glutes / Posture / Home",
    equipment: "Zero Equipment (Room)",
    target: "Gluteus Maximus, Hamstrings, Pelvic Alignment",
    postureBenefit: "Awakens dormant glutes caused by sitting; restores normal pelvis angle to flatten the belly.",
    steps: [
      "Lie on back with knees bent, feet flat on floor hip-width apart, arms by sides.",
      "Flatten lower back into floor, then drive through heels to lift hips toward ceiling.",
      "At top, squeeze glutes fiercely for 2 full seconds—body should form a straight line from knees to shoulders.",
      "Lower hips with control."
    ],
    cues: ["Drive through heels", "Maximum glute squeeze at top", "Do not over-arch lumbar spine"],
    proTip: "Put your fingertips on your butt cheeks to physically confirm they are rock hard at the top.",
    mistake: "Hyperextending the lower back instead of hinging from hips."
  },
  "mountain_climber": {
    image: "assets/exercises/mountain_climber.jpg",
    name: "Athletic Mountain Climbers",
    category: "Core / Agility / Home",
    equipment: "Zero Equipment (Room)",
    target: "Core, Hip Flexor Speed, Shoulder Endurance",
    postureBenefit: "Burns high calories and conditions abdominal compression during rapid movement.",
    steps: [
      "Begin in a high push-up plank position with hands under shoulders.",
      "Drive right knee rapidly toward chest without letting hips bounce up.",
      "Switch quickly, driving left knee forward as right leg extends.",
      "Maintain a steady, rhythmic athletic pace."
    ],
    cues: ["Keep hips level", "Hands firmly planted", "Drive knees straight to chest"],
    proTip: "Focus on controlled speed; bouncing your hips high in the air takes work off your abs.",
    mistake: "Hips floating up in a pike."
  },
  "air_squat_reach": {
    image: "assets/exercises/air_squat_reach.jpg",
    name: "Bodyweight Squat to Overhead Reach",
    category: "Legs / Posture / Home",
    equipment: "Zero Equipment (Room)",
    target: "Quads, Glutes, Thoracic Spine Mobility",
    postureBenefit: "Opens up hunched thoracic spine while working leg stamina.",
    steps: [
      "Stand with feet shoulder-width apart.",
      "Squat down deeply, keeping heels pinned.",
      "As you stand up explosively, reach both arms high overhead and extend spine tall.",
      "Inhale on way down, exhale as you reach high."
    ],
    cues: ["Deep squat", "Tall proud reach", "Open the ribcage"],
    proTip: "Look slightly upward during the reach to stretch the entire anterior chain.",
    mistake: "Rounding shoulders forward."
  },
  "bear_crawl_hold": {
    image: "assets/exercises/bear_crawl_hold.jpg",
    name: "Bear Crawl Hover & Hold",
    category: "Core / Agility / Home",
    equipment: "Zero Equipment (Room)",
    target: "Deep Abdominals, Quadriceps, Shoulder Stability",
    postureBenefit: "Massive tension on the transverse abdominis without any lower back strain.",
    steps: [
      "Start on all fours with hands under shoulders and knees directly under hips.",
      "Tuck toes and hover knees just 1 to 2 inches off the floor.",
      "Brace core, keep spine completely flat, and hold this hover while taking calm breaths.",
      "(Optional progression: Take 2 small steps forward and 2 steps backward)."
    ],
    cues: ["Knees 1 inch off floor", "Tabletop flat back", "Breathe through brace"],
    proTip: "Balance a water bottle on your lower back—it shouldn't fall off.",
    mistake: "Hiking knees 6 inches high or sagging belly."
  }
};

// 7-Day Weekly Template generator for 100 Days across 3 Phases
// Ensure all 30 exercise entries have id and valid image path
Object.keys(EXERCISE_LIBRARY).forEach(k => {
  EXERCISE_LIBRARY[k].id = k;
  EXERCISE_LIBRARY[k].image = `assets/exercises/${k}.jpg`;
});

function generate100Days() {
  const days = [];
  
  for (let d = 1; d <= 100; d++) {
    const week = Math.ceil(d / 7);
    const dayOfWeekNum = ((d - 1) % 7); // 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun
    const phase = d <= 30 ? 1 : (d <= 65 ? 2 : 3);
    
    let phaseName = "";
    if (phase === 1) phaseName = "Phase 1: Foundation, Posture & Agility (Days 1–30)";
    else if (phase === 2) phaseName = "Phase 2: Muscle Density, V-Taper & Conditioning (Days 31–65)";
    else phaseName = "Phase 3: Peak Shred, Core Cinch & Athleticism (Days 66–100)";
    
    let dayData = {};

    // Monday (Gym) - Upper Push & Posture Focus
    if (dayOfWeekNum === 0) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Monday",
        type: "gym",
        title: phase === 1 
          ? "Dedicated Chest & Upper Push (Flat & Incline DB Press)" 
          : (phase === 2 ? "Chest Hypertrophy & Shoulder Caps" : "High-Density Chest & Push Conditioning"),
        focus: "Chest, Shoulders, Triceps, Rotator Cuffs, Footwork",
        duration: "65-75 min",
        postureTip: "Retract scapulae: pull your shoulder blades down and back as if sliding them into your back jeans pockets.",
        warmup: [
          { name: "Arm Circles & Chest Hugs", reps: "15 reps each direction" },
          { name: "Scapular Wall Slides", reps: "12 reps (opens chest, fixes hunch)" },
          { name: "Light Jog / Incline Treadmill Walk", reps: "5 mins (elevate core temp)" }
        ],
        exercises: [
          {
            id: "db_flat_bench_press",
            sets: phase === 1 ? 3 : (phase === 2 ? 4 : 4),
            reps: phase === 1 ? "10-12" : (phase === 2 ? "8-10" : "10-12"),
            rest: 60,
            targetWeight: phase === 1 ? "7.5 - 10 kg DBs" : "12.5 - 15 kg DBs"
          },
          {
            id: "db_incline_bench_press",
            sets: 3,
            reps: "10-12",
            rest: 60,
            targetWeight: "7.5 - 10 kg DBs"
          },
          {
            id: "cable_face_pull",
            sets: phase === 1 ? 3 : 4,
            reps: "15",
            rest: 45,
            targetWeight: "10 - 15 kg (focus on 2-sec hold)"
          },
          {
            id: "db_lateral_raise",
            sets: 3,
            reps: "12-15",
            rest: 45,
            targetWeight: "4 - 6 kg (strict form)"
          },
          {
            id: "cable_tricep_pushdown",
            sets: 3,
            reps: "12",
            rest: 45,
            targetWeight: "12.5 - 17.5 kg"
          }
        ],
        cardioFinisher: {
          name: "Incline Treadmill Agility Stride",
          protocol: "12 minutes: Incline 8-10%, Speed 4.5-5.2 km/h. Walk tall with chest high and shoulders back. No holding the handrails!",
          benefit: "Burns visceral belly fat without breaking down upper body muscle."
        },
        cooldown: [
          { name: "Doorway Chest Stretch", reps: "30s each side" },
          { name: "Cross-Body Shoulder Stretch", reps: "30s each side" }
        ],
        roomRoutine: {
          title: "Alternative Room Routine: Upper Push & Speed (Zero Equipment)",
          duration: "35 mins",
          exercises: [
            { id: "pushup_standard", sets: 4, reps: "10-15 reps", rest: 45, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "fast_feet_shadow", sets: 4, reps: "40 secs", rest: 30, targetWeight: "Bodyweight / Speed (Zero Weights Required)" },
            { id: "deadbug", sets: 3, reps: "12 reps/side", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "forearm_plank", sets: 3, reps: "45 sec hold", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" }
          ]
        }
      };
    }

    // Tuesday (Gym) - Back, Lats V-Taper & Deep Core
    else if (dayOfWeekNum === 1) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Tuesday",
        type: "gym",
        title: phase === 1 
          ? "Lats V-Taper, Back Rows & Core Cinch" 
          : (phase === 2 ? "Lat Width & Rotational Core Power" : "V-Taper Density & Deep Abdominal Sculpt"),
        focus: "Lats (Width), Rhomboids, Biceps, Transverse Abdominis",
        duration: "65-75 min",
        postureTip: "Pull with your elbows, not your hands. This engages the lats rather than straining the biceps.",
        warmup: [
          { name: "Cat-Cow Spine Mobilization", reps: "10 reps" },
          { name: "Deadbug Core Priming", reps: "8 reps per side" },
          { name: "Rowing Machine or Elliptical", reps: "5 mins" }
        ],
        exercises: [
          {
            id: "lat_pulldown",
            sets: phase === 1 ? 3 : 4,
            reps: phase === 1 ? "10-12" : "8-10",
            rest: 60,
            targetWeight: "25 - 35 kg"
          },
          {
            id: "seated_cable_row",
            sets: 3,
            reps: "10-12",
            rest: 60,
            targetWeight: "25 - 35 kg"
          },
          {
            id: "deadbug",
            sets: 3,
            reps: "10 each side",
            rest: 45,
            targetWeight: "Bodyweight (Focus on squashing grape under lower spine)"
          },
          {
            id: "db_bicep_curl",
            sets: 3,
            reps: "12",
            rest: 45,
            targetWeight: "6 - 8 kg DBs"
          },
          {
            id: "cable_woodchopper",
            sets: 3,
            reps: "12 each side",
            rest: 45,
            targetWeight: "10 - 15 kg"
          }
        ],
        cardioFinisher: {
          name: "Elliptical / Rower Agility Intervals",
          protocol: "12 minutes: 45 seconds moderate pace + 15 seconds high-resistance sprint x 10 rounds.",
          benefit: "Drives oxygen consumption (EPOC) to elevate metabolic burn for 12 hours."
        },
        cooldown: [
          { name: "Lat Child's Pose Stretch", reps: "45 seconds" },
          { name: "Cobra / Sphinx Abdominal Stretch", reps: "30 seconds" }
        ],
        roomRoutine: {
          title: "Alternative Room Routine: Posture Pull & Core Cinch (Zero Equipment)",
          duration: "35 mins",
          exercises: [
            { id: "deadbug", sets: 4, reps: "12 reps/side", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "bear_crawl_hold", sets: 4, reps: "35 sec hold", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "glute_bridge", sets: 3, reps: "15 reps with 2s squeeze", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "skater_hops", sets: 3, reps: "45 secs", rest: 30, targetWeight: "Bodyweight / Speed (Zero Weights Required)" }
          ]
        }
      };
    }

    // Wednesday (Gym) - Athletic Legs & Pelvic Balance (Fix Anterior Pelvic Tilt)
    else if (dayOfWeekNum === 2) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Wednesday",
        type: "gym",
        title: phase === 1 
          ? "Athletic Legs & Pelvic Realignment" 
          : (phase === 2 ? "Posterior Chain Strength & Single-Leg Balance" : "Explosive Leg Power & Conditioning"),
        focus: "Quads, Glutes, Hamstrings, Pelvic Alignment, Ankle Stiffness",
        duration: "65-75 min",
        postureTip: "Tight hamstrings and weak glutes pull the pelvis out of line. Squeeze glutes at the top of every rep to lock pelvis neutral.",
        warmup: [
          { name: "Bodyweight Glute Bridges", reps: "15 reps" },
          { name: "World's Greatest Hip Flexor Stretch", reps: "5 per side" },
          { name: "Bodyweight Air Squats", reps: "10 reps" }
        ],
        exercises: [
          {
            id: "goblet_squat",
            sets: phase === 1 ? 3 : 4,
            reps: "10-12",
            rest: 60,
            targetWeight: "10 - 15 kg DB"
          },
          {
            id: "db_romanian_deadlift",
            sets: phase === 1 ? 3 : 4,
            reps: "10-12",
            rest: 60,
            targetWeight: "10 - 15 kg DBs (Feel deep hamstring stretch)"
          },
          {
            id: "leg_press",
            sets: 3,
            reps: "12",
            rest: 60,
            targetWeight: "40 - 60 kg"
          },
          {
            id: "walking_lunges",
            sets: 3,
            reps: "10 steps each leg",
            rest: 60,
            targetWeight: "Bodyweight or 5 kg DBs"
          },
          {
            id: "standing_calf_raise",
            sets: 3,
            reps: "15",
            rest: 45,
            targetWeight: "Bodyweight or 10 kg DB"
          }
        ],
        cardioFinisher: {
          name: "Stairmaster or Steep Incline Walk",
          protocol: "10 minutes steady climb. Keep posture erect—do not slump onto the handlebars.",
          benefit: "Fires glute-hamstring tie-in and tones legs while burning visceral fat."
        },
        cooldown: [
          { name: "Kneeling Couch / Hip Flexor Stretch", reps: "45s each side (releases tight hips)" },
          { name: "Standing Quad & Hamstring Stretch", reps: "30s each" }
        ],
        roomRoutine: {
          title: "Alternative Room Routine: Legs & Hip Mobility (Zero Equipment)",
          duration: "35 mins",
          exercises: [
            { id: "air_squat_reach", sets: 4, reps: "15 reps", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "glute_bridge", sets: 4, reps: "15 reps", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "skater_hops", sets: 4, reps: "40 secs", rest: 30, targetWeight: "Bodyweight / Agility (Zero Weights Required)" },
            { id: "bear_crawl_hold", sets: 3, reps: "30 sec hold", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" }
          ]
        }
      };
    }

    // Thursday (Gym) - Dedicated Upper Body Hypertrophy & Core (Chest, Back, Delts & Arms)
    else if (dayOfWeekNum === 3) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Thursday",
        type: "gym",
        title: phase === 1 
          ? "Upper Body Hypertrophy, Chest Fly & Core" 
          : (phase === 2 ? "Complete Upper Body Density & V-Taper" : "Peak Upper Body Athletic Sculpt"),
        focus: "Chest, Lats, Deltoids, Scapular Posture, Transverse Core",
        duration: "60-70 min",
        postureTip: "Keep your neck relaxed when doing lateral raises. Don't shrug your traps into your ears.",
        warmup: [
          { name: "Band or Cable Pull-Aparts", reps: "15 reps" },
          { name: "Shoulder CARs (Controlled Articular Rotations)", reps: "5 circles each arm" },
          { name: "Incline Treadmill Walk", reps: "5 mins" }
        ],
        exercises: [
          {
            id: "db_seated_shoulder_press",
            sets: 3,
            reps: "10-12",
            rest: 60,
            targetWeight: "7.5 - 10 kg DBs"
          },
          {
            id: "db_single_arm_row",
            sets: 3,
            reps: "10 each arm",
            rest: 60,
            targetWeight: "10 - 14 kg DB"
          },
          {
            id: "cable_chest_fly",
            sets: 3,
            reps: "12",
            rest: 45,
            targetWeight: "7.5 - 12.5 kg"
          },
          {
            id: "db_lateral_raise",
            sets: 3,
            reps: "12-15",
            rest: 45,
            targetWeight: "4 - 6 kg DBs (Smooth control)"
          },
          {
            id: "forearm_plank",
            sets: 3,
            reps: "40-45 sec active hold",
            rest: 45,
            targetWeight: "Bodyweight (Pull elbows to toes)"
          }
        ],
        cardioFinisher: {
          name: "Fast Walking Incline Interval",
          protocol: "12 minutes: 2 mins Speed 5.5 km/h at 6% incline, 1 min Speed 4.5 km/h at 2% recovery x 4 rounds.",
          benefit: "Keeps aerobic engine primed and agility sharp."
        },
        cooldown: [
          { name: "Overhead Tricep & Lat Stretch", reps: "30s each" },
          { name: "Upper Back Thread-the-Needle", reps: "30s each side" }
        ],
        roomRoutine: {
          title: "Alternative Room Routine: Shoulder & Core Conditioning (Zero Equipment)",
          duration: "30 mins",
          exercises: [
            { id: "pushup_standard", sets: 3, reps: "12 reps", rest: 45, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "forearm_plank", sets: 4, reps: "40 sec active hold", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "fast_feet_shadow", sets: 3, reps: "45 secs", rest: 30, targetWeight: "Bodyweight / Speed (Zero Weights Required)" },
            { id: "mountain_climber", sets: 3, reps: "30 secs", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" }
          ]
        }
      };
    }

    // Friday (Gym) - Functional Athletic Conditioning & Full-Body Burn
    else if (dayOfWeekNum === 4) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Friday",
        type: "gym",
        title: phase === 1 
          ? "Functional Agility, Farmer's Carry & Metabolic Burn" 
          : (phase === 2 ? "Athletic Strength & Full-Body Conditioning" : "Championship Circuit & Core Tightening"),
        focus: "Full-Body Coordination, Grip, Posture Carriage, Metabolic Rate",
        duration: "65-75 min",
        postureTip: "During farmer's walks, walk as tall as a king with shoulders pinned back and head high.",
        warmup: [
          { name: "Lateral Leg Swings", reps: "10 each leg" },
          { name: "Bear Crawl Hold", reps: "30 seconds" },
          { name: "Jumping Jacks / Light Skips", reps: "40 reps" }
        ],
        exercises: [
          {
            id: "farmers_walk",
            sets: 4,
            reps: "40-50 paces",
            rest: 60,
            targetWeight: "12 - 16 kg DB in each hand"
          },
          {
            id: "pushup_standard",
            sets: 3,
            reps: "12-15 reps (elevate hands if needed)",
            rest: 45,
            targetWeight: "Bodyweight"
          },
          {
            id: "hammer_curl",
            sets: 3,
            reps: "12",
            rest: 45,
            targetWeight: "7.5 - 10 kg DBs"
          },
          {
            id: "db_overhead_tricep_extension",
            sets: 3,
            reps: "12",
            rest: 45,
            targetWeight: "10 - 15 kg single DB"
          },
          {
            id: "hanging_knee_raise",
            sets: 3,
            reps: "10-12",
            rest: 45,
            targetWeight: "Bodyweight (Curl pelvis up)"
          }
        ],
        cardioFinisher: {
          name: "Sprint / Walk Metabolic Intervals",
          protocol: "12 minutes: 30 seconds brisk run/jog (8-9 km/h) + 60 seconds walking recovery (4.5 km/h) x 8 cycles.",
          benefit: "Teaches explosive foot turnover and shreds visceral belly fat."
        },
        cooldown: [
          { name: "Full Body Standing Stretch", reps: "40 seconds" },
          { name: "Seated Butterfly Groin Stretch", reps: "45 seconds" }
        ],
        roomRoutine: {
          title: "Alternative Room Routine: Full-Body HIIT Burn (Zero Equipment)",
          duration: "35 mins",
          exercises: [
            { id: "skater_hops", sets: 4, reps: "45 secs", rest: 30, targetWeight: "Bodyweight / Agility (Zero Weights Required)" },
            { id: "pushup_standard", sets: 3, reps: "12 reps", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "mountain_climber", sets: 3, reps: "35 secs", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" },
            { id: "deadbug", sets: 3, reps: "10 reps/side", rest: 30, targetWeight: "Bodyweight (Zero Weights Required)" }
          ]
        }
      };
    }

    // Saturday (Home / Room) - Zero Equipment Athletic Agility & Calisthenics Circuit
    else if (dayOfWeekNum === 5) {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Saturday",
        type: "home",
        title: phase === 1 
          ? "Room Agility, Foot Speed & Core Tightening" 
          : (phase === 2 ? "Athletic Calisthenics & Explosive Power" : "Warrior Room Circuit & Core Shred"),
        focus: "Foot Speed, Lateral Agility, Rotational Balance, Zero Equipment",
        duration: "35-45 min (In your room)",
        postureTip: "Stay on the balls of your feet during agility drills. Feel how light and springy your body becomes.",
        warmup: [
          { name: "High Knees in Place (Soft Landing)", reps: "30 seconds" },
          { name: "Torso Rotations & Arm Swings", reps: "15 reps" },
          { name: "Inchworm Walkouts", reps: "6 reps" }
        ],
        exercises: [
          {
            id: "skater_hops",
            sets: 4,
            reps: "40 seconds continuous",
            rest: 40,
            targetWeight: "Bodyweight (Focus on explosive bound & balance)"
          },
          {
            id: "pushup_standard",
            sets: 3,
            reps: "10-15 reps (elevate hands on desk if needed)",
            rest: 45,
            targetWeight: "Bodyweight"
          },
          {
            id: "fast_feet_shadow",
            sets: 4,
            reps: "30 seconds sprint feet",
            rest: 30,
            targetWeight: "Maximum speed"
          },
          {
            id: "glute_bridge",
            sets: 3,
            reps: "15 reps (2 sec hard squeeze at top)",
            rest: 30,
            targetWeight: "Bodyweight"
          },
          {
            id: "bear_crawl_hold",
            sets: 3,
            reps: "35 seconds hover hold",
            rest: 45,
            targetWeight: "Bodyweight (Keep knees 1 inch off floor)"
          },
          {
            id: "mountain_climber",
            sets: 3,
            reps: "30 seconds rapid pace",
            rest: 45,
            targetWeight: "Bodyweight"
          }
        ],
        cardioFinisher: {
          name: "Outdoor / Neighborhood Brisk Walk",
          protocol: "20-30 minutes brisk walking outdoors. Keep posture upright, swing arms naturally, and aim for 4,000-5,000 steps.",
          benefit: "Clears mental fog, promotes fat oxidation, and enhances weekend recovery."
        },
        cooldown: [
          { name: "Pigeon Hip Opener", reps: "45s each leg" },
          { name: "Standing Hamstring Fold", reps: "45s" }
        ],
        roomRoutine: null // Already a home routine
      };
    }

    // Sunday (Home / Room) - Active Mobility, Pelvic Alignment & Step Milestone
    else {
      dayData = {
        day: d,
        phase,
        phaseName,
        week,
        dayName: "Sunday",
        type: "home",
        title: phase === 1 
          ? "Deep Hip Opening, Spine Decompression & 10k Steps" 
          : (phase === 2 ? "Functional Mobility, Breathwork & Recomposition Check" : "Peak Recovery, Dynamic Restoration & Step Target"),
        focus: "Joint Mobility, Anterior Pelvic Tilt Release, Nervous System Reset",
        duration: "30-40 min mobility + brisk outdoor walking",
        postureTip: "Deep belly breathing into the diaphragm calms the nervous system, drastically lowering cortisol—the hormone that holds onto belly fat.",
        warmup: [
          { name: "Diaphragmatic Breathing in Savasana", reps: "2 minutes" },
          { name: "Gentle Neck and Shoulder Rolls", reps: "10 rolls each" }
        ],
        exercises: [
          {
            id: "glute_bridge",
            sets: 3,
            reps: "12 reps with 3 sec glute squeeze",
            rest: 30,
            targetWeight: "Bodyweight"
          },
          {
            id: "deadbug",
            sets: 3,
            reps: "10 reps each side (precision focus)",
            rest: 30,
            targetWeight: "Bodyweight"
          },
          {
            id: "air_squat_reach",
            sets: 3,
            reps: "12 slow, deep, mobility reps",
            rest: 30,
            targetWeight: "Bodyweight"
          }
        ],
        cardioFinisher: {
          name: "Sunday 8,000 to 10,000 Step Milestone",
          protocol: "Get outside for a continuous 45-60 minute walk in a park, neighborhood, or campus. Put on an inspiring podcast or music. Track steps on phone or smartwatch.",
          benefit: "Burns 300+ pure fat calories with ZERO fatigue on muscles, resetting you fresh for Monday."
        },
        cooldown: [
          { name: "Couch Stretch (Deep Hip Flexor)", reps: "60s each leg (reverses 5 days of sitting)" },
          { name: "Child's Pose with Lat Reach", reps: "60s" },
          { name: "Lying Spinal Twist", reps: "45s each side" }
        ],
        roomRoutine: null
      };
    }

    days.push(dayData);
  }

  return days;
}

const WORKOUT_DAYS = generate100Days();

export { NUTRITION_DATA, EXERCISE_LIBRARY, WORKOUT_DAYS, generate100Days };
if (typeof window !== "undefined") {
  window.NUTRITION_DATA = NUTRITION_DATA;
  window.EXERCISE_LIBRARY = EXERCISE_LIBRARY;
  window.WORKOUT_DAYS = WORKOUT_DAYS;
}
