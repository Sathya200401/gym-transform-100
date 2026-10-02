/**
 * IRON STRENGTH & AGILITY CLUB - MASTER GYM DATA
 * Direction: Iron (Powerlifting, CrossFit, MMA, Raw Strength & Athletic Agility)
 * Color Tokens:
 *   --bg: #0D0D0F
 *   --surface: #18181B
 *   --text: #F4F4F5
 *   --muted: #A1A1AA
 *   --accent: #C8FF00
 *   --on-accent: #0D0D0F
 */
import { WORKOUT_DAYS, NUTRITION_DATA } from '../../data.js';
export { WORKOUT_DAYS, NUTRITION_DATA };

export const EXERCISE_LIBRARY = {
  // CORE & BELLY FAT REDUCTION (TRANSVERSE ABDOMINIS & VISCERAL FAT BURN)
  "deadbug": {
    id: "deadbug",
    name: "Deadbug (Deep Transverse Core)",
    category: "Belly Fat & Core",
    target: "Transverse Abdominis, Obliques, Pelvic Stabilizers",
    image: "assets/exercises/deadbug.svg",
    postureBenefit: "Crucial anterior pelvic tilt fix! Pulls the lower abdominal wall inward like a natural corset, eliminating the lower belly pouch.",
    steps: [
      "Lie flat on your back with arms pointing straight to the ceiling and knees bent at 90 degrees above hips.",
      "CRITICAL: Press your lower back completely flush against the floor. Imagine squashing a grape under your spine; do not let light pass through.",
      "Slowly lower your right arm behind your head while extending your left leg straight forward, hovering 2 inches off the floor.",
      "Exhale forcefully and pull back to center using your deep lower core. Repeat with opposite arm and leg."
    ],
    cues: ["Lower back glued to floor", "Exhale all air on extension", "Slow 3-second descent"],
    proTip: "If your lower back arches off the mat even 1mm, shorten your leg extension. The abdominal flattening effect comes from keeping the pelvis locked neutral.",
    mistake: "Letting the lower back arch and flare the ribs, which turns off the transverse abdominis and strains the hip flexors."
  },
  "hanging_knee_raise": {
    id: "hanging_knee_raise",
    name: "Hanging Knee-to-Chest Raise",
    category: "Belly Fat & Core",
    target: "Lower Rectus Abdominis, Hip Flexor Decompression",
    image: "assets/exercises/hanging_knee_raise.svg",
    postureBenefit: "Decompresses lumbar spine while rolling the pelvis upward to target stubborn lower abdominal stubborn fat zones.",
    steps: [
      "Hang from a pull-up bar with an overhand shoulder-width grip. Engage shoulders down away from ears.",
      "Roll your pelvis backward (posterior pelvic tilt) before initiating the pull.",
      "Drive your knees up toward your chest, tucking your hips under you at the peak.",
      "Lower legs slowly under strict 3-second control without swinging or using momentum."
    ],
    cues: ["Tuck the tailbone up", "Zero swinging", "3-second descent"],
    proTip: "Do not just lift your thighs—curl your pelvis up toward your ribcage to contract the lower abs maximally.",
    mistake: "Using pendulum momentum to kick legs up, which only works hip flexors and bypasses the abdominals."
  },
  "cable_woodchopper": {
    id: "cable_woodchopper",
    name: "Cable Rotational Woodchopper",
    category: "Belly Fat & Core",
    target: "Internal/External Obliques, Rotational Agility, Core Sheath",
    image: "assets/exercises/cable_woodchopper.svg",
    postureBenefit: "Builds athletic rotational torque, trims the love handles, and tightens the lateral waistline.",
    steps: [
      "Set cable pulley to shoulder height. Stand sideways to the machine in an athletic stance, feet shoulder-width apart.",
      "Grip the handle with both hands, arms extended with a slight elbow bend.",
      "Pivot on your back foot and rotate your torso diagonally across your body with explosive core power.",
      "Control the return smoothly, resisting the cable's pull back to start."
    ],
    cues: ["Initiate rotation from hips and core", "Pivot back foot like a boxer", "Arms stay long"],
    proTip: "Power comes from hips and obliques, not arms. Think of throwing a rotational discus.",
    mistake: "Bending elbows and pulling with bicep strength instead of rotating the core cylinder."
  },
  "forearm_plank": {
    id: "forearm_plank",
    name: "Forearm RKC Plank (Vacuum Tuck)",
    category: "Belly Fat & Core",
    target: "Transverse Abdominis, Glute-Pelvic Lock, Serratus",
    image: "assets/exercises/forearm_plank.svg",
    postureBenefit: "Teaches 360-degree intra-abdominal bracing to keep the belly flat 24 hours a day even while standing relaxed.",
    steps: [
      "Place forearms on the floor, elbows directly under shoulders, feet hip-width.",
      "Engage a slight posterior pelvic tilt (tuck tailbone under, squeeze glutes like holding a coin).",
      "Pull your belly button actively up and into your spine while pulling your elbows toward your toes.",
      "Breathe through tight braced abs without letting your hips sag or hike."
    ],
    cues: ["Tuck tailbone under", "Squeeze glutes hard", "Pull elbows toward toes"],
    proTip: "30 seconds of maximum tension RKC plank burns 3x more core fibers than 2 minutes of a lazy sagging plank.",
    mistake: "Arching lower back, dropping hips, or holding breath until dizziness occurs."
  },
  "farmers_walk": {
    id: "farmers_walk",
    name: "Heavy Dumbbell Farmer's Carry",
    category: "Belly Fat & Core",
    target: "Full Body Metabolic Burn, Grip, Deep Oblique Bracing, Traps",
    image: "assets/exercises/farmers_walk.svg",
    postureBenefit: "The ultimate anti-lateral flexion lift. Forces the entire core to brace upright against gravity, burning visceral fat at high metabolic rates.",
    steps: [
      "Deadlift two dumbbells or kettlebells with a flat back and proud chest.",
      "Pack shoulders back and down, pull ribs down, and lock your core as if taking a punch.",
      "Walk in a measured straight line taking heel-to-toe athletic steps. Do not lean side to side.",
      "Turn smoothly and walk back for the target distance or time."
    ],
    cues: ["Tall spine like walking with a crown", "Glutes locked", "Short, fast, deliberate steps"],
    proTip: "Keep dumbbells from brushing or resting on your thighs. Hold them floating 1 inch away to keep core fully loaded.",
    mistake: "Slouching shoulders forward and taking wide, wobbly steps."
  },

  // AGILITY, SPEED & ATHLETIC FOOTWORK
  "skater_hops": {
    id: "skater_hops",
    name: "Lateral Skater Hops & Stick",
    category: "Agility & Athletic Speed",
    target: "Lateral Gluteus Medius, Ankle Stiffness, Dynamic Balance, Calorie Burn",
    image: "assets/exercises/skater_hops.svg",
    postureBenefit: "Develops rapid lateral agility and single-leg deceleration. Eliminates clumsy footwork and strengthens hips to stabilize the pelvis.",
    steps: [
      "Start standing on your right leg with a soft knee bend and athletic forward torso angle.",
      "Explosively push off your right foot, bounding laterally to your left.",
      "Land softly on your left foot, absorbing impact through hip and knee, sweeping right leg behind you.",
      "Pause for 1 second to stick the landing before bounding back to the right."
    ],
    cues: ["Land softly like a ninja", "Stick and freeze 1 second", "Drive with lateral hip"],
    proTip: "Focus on horizontal distance and instant braking stability rather than vertical height.",
    mistake: "Stiff-legged landings or letting the knee collapse inward on touchdown."
  },
  "fast_feet_shadow": {
    id: "fast_feet_shadow",
    name: "Fast-Feet Agility Ladder / Shadow Sprints",
    category: "Agility & Athletic Speed",
    target: "Fast-Twitch Motor Units, Calves, Cardiovascular Threshold, Foot Speed",
    image: "assets/exercises/fast_feet_shadow.svg",
    postureBenefit: "Enhances neuromuscular reactivity, torches visceral belly calories, and builds explosive spring in every step.",
    steps: [
      "Get into a quarter squat athletic stance with weight on the balls of your feet.",
      "Tap feet in an alternating rapid sprint pattern (in-in, out-out or rapid turf taps) as fast as humanly possible.",
      "Keep hands active in a sprint pump rhythm, core braced tightly.",
      "Perform in 20-30 second maximum-velocity bursts."
    ],
    cues: ["Stay on balls of feet", "Fast hands = fast feet", "Chest proud and eyes up"],
    proTip: "Imagine the turf is blazing hot. Minimum ground contact time is the goal.",
    mistake: "Letting heels slam into the floor or standing up straight out of the athletic ready position."
  },
  "mountain_climber": {
    id: "mountain_climber",
    name: "Piston Mountain Climber Sprint",
    category: "Agility & Athletic Speed",
    target: "Rectus Abdominis, Hip Flexor Agility, High-Intensity Cardio Output",
    image: "assets/exercises/mountain_climber.svg",
    postureBenefit: "Combines strict plank core stabilization with high-tempo sprint cadence for rapid belly fat calorie expenditure.",
    steps: [
      "Start in a rigid high plank position with hands directly under shoulders.",
      "Drive one knee toward your chest without letting your hips pike upward into the air.",
      "Quickly switch legs in a sprinting piston motion, keeping core braced like iron.",
      "Maintain a smooth rhythm without bouncing your lower back."
    ],
    cues: ["Hips stay dead level", "Piston legs forward", "Hands grip floor firmly"],
    proTip: "Do not let your toes touch the ground when your knee is under your chest; only touch down when the foot returns to back plank.",
    mistake: "Bouncing hips up and down like a trampoline, taking tension off the abs."
  },
  "bear_crawl_hold": {
    id: "bear_crawl_hold",
    name: "Bear Crawl Hover & Step",
    category: "Agility & Athletic Speed",
    target: "Serratus Anterior, Transverse Abdominis, Quad Endurance, Multi-Planar Agility",
    image: "assets/exercises/bear_crawl_hold.svg",
    postureBenefit: "Connects opposite shoulder to opposite hip across the anterior sling, tightening the abdominal wall.",
    steps: [
      "Begin on hands and knees with wrists under shoulders and knees directly under hips.",
      "Tuck toes and lift knees just 1 to 2 inches off the ground (hover position).",
      "Keep back completely flat like a tabletop—imagine balancing a cup of water on your spine.",
      "Take slow, deliberate cross-pattern steps forward (right hand + left foot, left hand + right foot)."
    ],
    cues: ["Knees 1 inch off floor", "Tabletop flat spine", "Tiny controlled steps"],
    proTip: "If crawling is too demanding, hold the static hover for 35-45 seconds without letting knees touch.",
    mistake: "Piking hips high in the air to escape quad and core tension."
  },

  // UPPER BODY & V-TAPER (CHEST, BACK & SHOULDERS)
  "db_incline_bench_press": {
    id: "db_incline_bench_press",
    name: "Incline Dumbbell Bench Press",
    category: "Upper V-Taper",
    target: "Upper Chest (Clavicular Pectorals), Anterior Delts, Triceps",
    image: "assets/exercises/db_incline_bench_press.svg",
    postureBenefit: "Fills out upper chest shelf to create a proud, commanding athletic posture that elevates the entire torso.",
    steps: [
      "Set bench to 30 degrees incline. Sit with dumbbells on knees and kick back into position.",
      "Pin shoulder blades firmly into pad, puff chest proud, feet flat on the floor.",
      "Lower dumbbells smoothly with elbows at 45-60 degrees until level with upper chest.",
      "Press upward in a slight arc, squeezing upper pecs at top without clanking dumbbells."
    ],
    cues: ["Bench at 30°", "Tuck elbows 45°", "Squeeze upper chest at top"],
    proTip: "Over-arching turns this into a flat press. Keep lower back in a gentle natural curve and drive through heels.",
    mistake: "Setting the incline to 60°+, turning it into a front delt press instead of an upper chest builder."
  },
  "db_flat_bench_press": {
    id: "db_flat_bench_press",
    name: "Dumbbell Flat Bench Press",
    category: "Upper V-Taper",
    target: "Pectoralis Major, Sternal Head, Front Deltoids, Triceps",
    image: "assets/exercises/db_flat_bench_press.svg",
    postureBenefit: "Builds dense pressing power and balances push-pull muscle distribution across the chest wall.",
    steps: [
      "Lie flat on the bench, feet planted firmly. Retract shoulder blades together into the padding.",
      "Hold dumbbells over chest, lower with control over 2-3 seconds until dumbbells touch chest height.",
      "Drive dumbbells up smoothly, squeezing chest at the top."
    ],
    cues: ["Retract shoulder blades", "Drive through feet", "Controlled descent"],
    proTip: "Imagine bringing your biceps toward each other at the apex of the press for maximum chest recruitment.",
    mistake: "Flaring elbows out to 90 degrees, which crushes shoulder labrums."
  },
  "lat_pulldown": {
    id: "lat_pulldown",
    name: "Wide-Grip Lat Pulldown",
    category: "Upper V-Taper",
    target: "Latissimus Dorsi, Teres Major, Biceps, Rhomboids",
    image: "assets/exercises/lat_pulldown.svg",
    postureBenefit: "NUMBER ONE EXERCISE for the V-taper illusion! Broadens upper back, which visually cuts waist circumference in half.",
    steps: [
      "Sit with thighs locked under pads. Take a grip 1.5x shoulder width.",
      "Lean torso back slightly (10-15 degrees), chest lifted toward the cable.",
      "Pull the bar down toward upper chest by driving elbows down and back toward your pockets.",
      "Slowly extend arms overhead to feel a full, deep lat stretch at the top."
    ],
    cues: ["Lead with elbows", "Chest high to bar", "Deep lat stretch at top"],
    proTip: "Think of your hands as hooks; initiate the movement by pulling your shoulder blades down first.",
    mistake: "Swinging whole body backward like a rowing machine to heave heavy weight."
  },
  "seated_cable_row": {
    id: "seated_cable_row",
    name: "Seated Cable Row (Mid-Back Thickness)",
    category: "Upper V-Taper",
    target: "Rhomboids, Middle Trapezius, Latissimus Dorsi, Biceps",
    image: "assets/exercises/seated_cable_row.svg",
    postureBenefit: "Instantly reverses forward rounded shoulders and tech-neck from desk work, pulling shoulders back.",
    steps: [
      "Sit upright with feet on footplates and knees soft (never locked out). Grip close-grip V-handle.",
      "Sit tall with proud chest. Pull handle to belly button, driving elbows directly backward.",
      "Pause for 1-2 seconds at the torso, squeezing shoulder blades together hard.",
      "Return slowly, allowing shoulder blades to stretch forward without rounding lumbar spine."
    ],
    cues: ["Pull to lower ribs", "Pinch shoulder blades 1 sec", "Spine stays tall"],
    proTip: "Keep shoulders down and away from ears throughout the row to avoid over-working the upper traps.",
    mistake: "Leaning back excessively on the pull and rounding forward into a slump on the release."
  },
  "cable_face_pull": {
    id: "cable_face_pull",
    name: "Cable Face Pull (Posture & Rear Delts)",
    category: "Upper V-Taper",
    target: "Rear Deltoids, Infraspinatus, Teres Minor, Rhomboids",
    image: "assets/exercises/cable_face_pull.svg",
    postureBenefit: "The golden posture correction movement. Fixes rounded shoulders, lifts chest, and balances heavy pressing.",
    steps: [
      "Set cable pulley to eye level with rope attachment. Grip rope with thumbs pointing back toward yourself.",
      "Step back for tension. Pull the rope directly toward the bridge of your nose.",
      "Externally rotate your shoulders at peak: spread rope apart so your thumbs end up behind your ears.",
      "Hold peak squeeze for 2 seconds before slowly returning."
    ],
    cues: ["Pull rope to eyes", "Spread rope apart", "Hold peak squeeze 2 seconds"],
    proTip: "Use moderate weight. This is a rotator cuff & rear delt postural exercise, not an ego lift.",
    mistake: "Pulling down toward throat with elbows pointing down instead of high and wide."
  },
  "cable_chest_fly": {
    id: "cable_chest_fly",
    name: "Standing Cable Chest Fly",
    category: "Upper V-Taper",
    target: "Inner & Lower Chest Squeeze, Pectoralis Minor Stretch",
    image: "assets/exercises/cable_chest_fly.svg",
    postureBenefit: "Builds defined chest striations without putting excessive strain on rotator cuffs.",
    steps: [
      "Set pulleys at chest height. Take handles, step forward with staggered feet for stable balance.",
      "Keep a gentle bend in elbows and bring hands together in a wide hugging motion.",
      "Squeeze inner pecs hard for 1 second when hands meet in front of chest.",
      "Open arms smoothly to feel a full chest stretch."
    ],
    cues: ["Hug a wide tree", "Maintain soft elbow angle", "Squeeze at peak"],
    proTip: "Focus on bringing inner biceps together rather than just clapping hands.",
    mistake: "Pressing the weight straight forward like a bench press instead of sweeping in an arc."
  },

  // LEGS & LOWER BODY (METABOLIC TORCH & PELVIC ALIGNMENT)
  "goblet_squat": {
    id: "goblet_squat",
    name: "Dumbbell Goblet Squat (Pelvic Reset)",
    category: "Legs & Pelvic Alignment",
    target: "Quadriceps, Glutes, Adductors, Core Anti-Flexion",
    image: "assets/exercises/goblet_squat.svg",
    postureBenefit: "Holding the dumbbell anteriorly forces the torso upright, activates the deep core, and trains deep hip mobility.",
    steps: [
      "Hold a dumbbell vertically against your sternum with both hands cupping the top head.",
      "Stand with feet shoulder-width, toes angled slightly out (15-30 degrees).",
      "Descend by sending hips back and down, keeping chest proud and knees tracking in line with toes.",
      "Break parallel (elbows touch inside knees), then drive through midfoot and heels to stand tall."
    ],
    cues: ["Chest stays proud", "Knees push out", "Drive through whole foot"],
    proTip: "The counterbalance of the weight in front actually makes perfect squat form easier than a barbell back squat.",
    mistake: "Letting knees collapse inward or folding forward like a lawn chair."
  },
  "db_romanian_deadlift": {
    id: "db_romanian_deadlift",
    name: "Dumbbell Romanian Deadlift (RDL)",
    category: "Legs & Pelvic Alignment",
    target: "Hamstrings, Gluteus Maximus, Lower Back Spinal Erectors",
    image: "assets/exercises/db_romanian_deadlift.svg",
    postureBenefit: "Directly strengthens posterior chain to pull the forward-tilted pelvis backward, permanently flattening belly bulge.",
    steps: [
      "Stand tall with dumbbells in front of thighs, feet hip-width apart.",
      "Keep knees slightly soft (unlocked but fixed). Hinge at hips by pushing your butt straight back to the wall behind you.",
      "Slide dumbbells down close along your shins until you feel a deep, intense stretch in hamstrings.",
      "Squeeze glutes hard to drive hips forward back to tall standing position."
    ],
    cues: ["Push hips back to wall", "Weights shave the shins", "Flat neutral spine"],
    proTip: "This is a horizontal hip hinge, not a vertical squat. Think of closing a car door with your butt.",
    mistake: "Rounding the lower spine or squatting down with knees traveling forward."
  },
  "walking_lunges": {
    id: "walking_lunges",
    name: "Dumbbell Walking Lunges",
    category: "Legs & Pelvic Alignment",
    target: "Glutes, Quads, Hamstrings, Unilateral Balance, Calf Agility",
    image: "assets/exercises/walking_lunges.svg",
    postureBenefit: "Stretches tight hip flexors (psoas) of the rear leg while strengthening glute stabilizers of the front leg.",
    steps: [
      "Hold dumbbells at sides with tall athletic posture. Take a generous step forward.",
      "Lower hips until front thigh is parallel to floor and back knee hovers 1 inch off turf.",
      "Drive through front heel to step directly forward into the next lunge step.",
      "Keep torso upright and core braced; avoid leaning forward over front knee."
    ],
    cues: ["90° angle on both knees", "Step tall and smooth", "Torso stays vertical"],
    proTip: "A slightly longer stride targets more glutes and hamstrings; a shorter stride targets more quads.",
    mistake: "Slamming back knee onto hard gym floor or letting front knee track way past toes."
  },
  "glute_bridge": {
    id: "glute_bridge",
    name: "Single-Leg & Double Glute Bridge",
    category: "Legs & Pelvic Alignment",
    target: "Gluteus Maximus, Hamstrings, Posterior Pelvic Rotators",
    image: "assets/exercises/glute_bridge.svg",
    postureBenefit: "Wakes up dormant glutes caused by prolonged sitting. Squeezing glutes pulls pelvis backward to flatten the lower abdomen.",
    steps: [
      "Lie on back with knees bent and feet flat on floor, hip-width apart, heels 6 inches from butt.",
      "Drive through heels to lift hips until thighs and torso form a straight diagonal line.",
      "At peak, squeeze glutes with maximum force for 2 full seconds (imagine holding a \$100 bill between glutes).",
      "Lower under control, barely grazing the floor before driving up again."
    ],
    cues: ["Drive through heels", "Squeeze glutes 2 seconds at top", "Do not hyperextend spine"],
    proTip: "Place fingertips on your glutes to ensure they are firing rock-hard rather than your lower back muscles taking over.",
    mistake: "Arching lower back at top instead of extending at the hip joints."
  },
  "standing_calf_raise": {
    id: "standing_calf_raise",
    name: "Standing Dumbbell Calf Raise",
    category: "Legs & Pelvic Alignment",
    target: "Gastrocnemius, Soleus, Achilles Tendon Elasticity",
    image: "assets/exercises/standing_calf_raise.svg",
    postureBenefit: "Strengthens Achilles stiffness for springy agility footwork and athletic jump power.",
    steps: [
      "Stand on an elevated step or plate with balls of feet on edge and heels hanging off.",
      "Lower heels down into a deep 2-second calf stretch.",
      "Explode up onto big toes, squeezing calves hard at peak elevation.",
      "Pause for 1 second at top before descending."
    ],
    cues: ["Full stretch at bottom", "Hold 1 sec at peak", "Press through big toe"],
    proTip: "Bouncing removes muscle work. A 2-second dead stop at the bottom trains true muscular power.",
    mistake: "Fast bouncing without full stretch or peak contraction."
  },

  // SHOULDERS & ARMS (UPPER ATHLETIC FRAME)
  "db_lateral_raise": {
    id: "db_lateral_raise",
    name: "Dumbbell Lateral Raise (Shoulder Widening)",
    category: "Arms & Delts",
    target: "Lateral (Side) Deltoids",
    image: "assets/exercises/db_lateral_raise.svg",
    postureBenefit: "Directly widens the shoulders. Broader shoulders make your waistline look 2-3 inches smaller by visual ratio.",
    steps: [
      "Stand tall holding dumbbells at sides, slight hinge at hips (5-10 degrees), soft knees.",
      "Raise arms out to sides leading with elbows, maintaining a slight bend in elbows.",
      "Lift until arms are parallel with the floor at shoulder height (pinkies slightly tilted up).",
      "Lower dumbbells smoothly over 2-3 seconds without swinging."
    ],
    cues: ["Lead with elbows", "Pour the water pitcher", "Zero swinging from hips"],
    proTip: "Use light dumbbells (2.5kg to 5kg to start). Side delts respond to precision and time under tension, not heavy flinging.",
    mistake: "Shrugging traps up to ears to hoist too-heavy weights."
  },
  "db_seated_shoulder_press": {
    id: "db_seated_shoulder_press",
    name: "Seated Dumbbell Overhead Shoulder Press",
    category: "Arms & Delts",
    target: "Anterior & Lateral Deltoids, Triceps, Upper Traps",
    image: "assets/exercises/db_seated_shoulder_press.svg",
    postureBenefit: "Strengthens overhead pressing mechanics and creates rounded athletic shoulder caps.",
    steps: [
      "Set adjustable bench to high incline (75-80°). Kick dumbbells up to shoulder level.",
      "Brace core tightly to protect lower back. Angle elbows slightly forward into scapular plane (30° in).",
      "Press dumbbells straight overhead in a smooth path until arms are extended.",
      "Lower under control for 2 seconds until dumbbells are level with chin/ears."
    ],
    cues: ["Core locked tight", "Elbows slightly forward", "Controlled descent"],
    proTip: "Never press with elbows flared straight out at 180°—angling them forward keeps the shoulder capsule healthy.",
    mistake: "Severely arching lower back away from bench to turn it into an incline chest press."
  },
  "cable_tricep_pushdown": {
    id: "cable_tricep_pushdown",
    name: "Cable Tricep Rope Pushdown",
    category: "Arms & Delts",
    target: "Lateral & Medial Triceps Heads (60% of Upper Arm Mass)",
    image: "assets/exercises/cable_tricep_pushdown.svg",
    postureBenefit: "Tones arms and firms the back of the arms for athletic definition.",
    steps: [
      "Attach rope to high cable pulley. Grip rope with neutral grip, step back slightly.",
      "Pin elbows against ribcage. They must stay motionless like door hinges.",
      "Push rope down and flare ends apart at the bottom, locking out triceps with a hard squeeze.",
      "Allow forearms to rise to 90 degrees before pushing down again."
    ],
    cues: ["Elbows glued to ribs", "Spread rope apart at bottom", "Hold 1 sec squeeze"],
    proTip: "Spreading the rope apart at the bottom recruits the lateral tricep head for that horseshoe definition.",
    mistake: "Letting elbows drift forward and backward, using shoulders to swing the weight."
  },
  "hammer_curl": {
    id: "hammer_curl",
    name: "Dumbbell Neutral-Grip Hammer Curl",
    category: "Arms & Delts",
    target: "Brachialis, Biceps Brachii, Forearm Grip",
    image: "assets/exercises/hammer_curl.svg",
    postureBenefit: "Builds the brachialis muscle underneath the bicep, pushing the peak up and widening arm thickness.",
    steps: [
      "Stand tall holding dumbbells with palms facing each other (neutral grip).",
      "Keeping elbows pinned at sides, curl weights up toward shoulders.",
      "Squeeze biceps and forearms hard at peak contraction.",
      "Lower under strict control for 2 seconds."
    ],
    cues: ["Palms face each other", "Elbows stay stationary", "Strict 2-second descent"],
    proTip: "Hammer curls build dense forearm grip strength, which directly improves heavy carries and deadlifts.",
    mistake: "Swinging back and hips to generate momentum."
  },
  "pushup_standard": {
    id: "pushup_standard",
    name: "Athletic Standard / Incline Pushup",
    category: "Upper V-Taper",
    target: "Chest, Triceps, Anterior Delts, Serratus, Core Plank",
    image: "assets/exercises/pushup_standard.svg",
    postureBenefit: "The ultimate traveling bodyweight move. Builds chest strength while demanding a 60-second core plank hold simultaneously.",
    steps: [
      "Place hands slightly wider than shoulder width on floor (or elevated on desk/bench for beginners).",
      "Keep body in a rigid straight line from heels to ears, glutes squeezed and abs braced.",
      "Lower chest to 2 inches off floor with elbows at 45 degrees.",
      "Drive through palms to return to full lockout, spreading shoulder blades apart at top."
    ],
    cues: ["Rigid plank alignment", "Elbows tucked 45°", "Touch chest to floor"],
    proTip: "Elevate your hands on a sturdy bench or desk to nail strict form if you cannot do 10 floor reps yet.",
    mistake: "Sagging lower back or craning neck toward floor."
  }
};

/**
 * TARGETED WORKOUT PLANS
 * Explicitly designed around the user's primary goals:
 * 1) Reducing Belly Fat & Flattening Lower Abdomen (TVA activation, visceral fat burn, pelvic tilt alignment)
 * 2) Agility, Footwork, Springiness & Athletic Fitness
 * 3) Full-Body Muscle Tone & V-Taper Frame
 */
export const WORKOUT_PLANS = [
  {
    id: "belly-shred-core",
    name: "Belly Fat Shred & Flat Stomach Protocol",
    focus: "Visceral Fat Burn, Transverse Abdominis Vacuum & Pelvic Tilt Alignment",
    badge: "PRIMARY FOCUS",
    duration: "45-55 mins",
    intensity: "High Metabolic Burn",
    caloriesEst: "~420 kcal",
    summary: "Specifically designed to cinch the waistline 360°, eliminate the lower stomach bulge caused by anterior pelvic tilt, and mobilize visceral belly fat through high-metabolic core circuits.",
    scienceRationale: "Traditional crunches push abdominal contents outward. This protocol trains the deep Transverse Abdominis (TVA)—your body's internal girdle—while using heavy compound carries and metabolic circuits to force systemic fat loss.",
    exercises: [
      {
        exerciseId: "deadbug",
        targetSets: 4,
        targetReps: "12 reps each side (3-sec tempo)",
        targetWeight: "Bodyweight",
        restSec: 45,
        bellyTip: "Forces lower spine flat against floor, activating the deepest transverse corset fibers."
      },
      {
        exerciseId: "hanging_knee_raise",
        targetSets: 3,
        targetReps: "10-12 reps",
        targetWeight: "Bodyweight",
        restSec: 60,
        bellyTip: "Rolls the pelvis upward to target stubborn lower abdominal subcutaneous fat."
      },
      {
        exerciseId: "forearm_plank",
        targetSets: 3,
        targetReps: "40 seconds maximum tension",
        targetWeight: "Bodyweight",
        restSec: 45,
        bellyTip: "Posterior pelvic tuck engages inner abdominal wall to prevent belly protrusion."
      },
      {
        exerciseId: "cable_woodchopper",
        targetSets: 3,
        targetReps: "12 reps each side",
        targetWeight: "7.5 kg - 12.5 kg",
        restSec: 45,
        bellyTip: "Trims lateral waistline and strengthens rotational core sheath."
      },
      {
        exerciseId: "farmers_walk",
        targetSets: 4,
        targetReps: "45 seconds continuous walk",
        targetWeight: "12.5 kg - 20 kg per hand",
        restSec: 60,
        bellyTip: "Massive caloric torch. Forces entire core cylinder to stay locked upright under load."
      }
    ],
    finisher: {
      title: "10-Min Fast-Walk Fat Oxidation Finisher",
      protocol: "Incline treadmill at 10-12% incline, 4.5-5.0 km/h speed, or brisk outdoor stride. Never hold handrails.",
      benefit: "Keeps heart rate in Zone 2 to burn pure mobilized fatty acids from the belly region without catabolizing muscle."
    }
  },
  {
    id: "agility-speed",
    name: "Explosive Athletic Agility & Footwork",
    focus: "Speed Ladders, Multi-Planar Bounds, Fast Feet & Light-Footed Springiness",
    badge: "AGILITY & ATHLETICISM",
    duration: "45-50 mins",
    intensity: "Explosive / Plyometric",
    caloriesEst: "~450 kcal",
    summary: "Replaces heavy stiffness with springy, reactive, light-footed athleticism. Combines rapid deceleration, lateral hops, and sprint footwork with core bracing.",
    scienceRationale: "Sprint and plyometric deceleration recruits high-threshold Type-IIb fast-twitch motor units. This elevates excess post-exercise oxygen consumption (EPOC), burning belly fat for 24 hours post-workout.",
    exercises: [
      {
        exerciseId: "skater_hops",
        targetSets: 4,
        targetReps: "35 seconds continuous bound & stick",
        targetWeight: "Bodyweight",
        restSec: 45,
        bellyTip: "Demands deep pelvic stabilization and burns massive calories through lateral propulsion."
      },
      {
        exerciseId: "fast_feet_shadow",
        targetSets: 4,
        targetReps: "25 seconds maximum speed taps",
        targetWeight: "Maximum Footwork",
        restSec: 40,
        bellyTip: "Neuromuscular reactivity drill that spikes heart rate into the peak fat-burn zone."
      },
      {
        exerciseId: "bear_crawl_hold",
        targetSets: 3,
        targetReps: "35 seconds hover crawl",
        targetWeight: "Bodyweight",
        restSec: 45,
        bellyTip: "Connects opposite shoulder to opposite hip, cinching the waist while building quad stamina."
      },
      {
        exerciseId: "mountain_climber",
        targetSets: 4,
        targetReps: "30 seconds rapid piston sprint",
        targetWeight: "Bodyweight",
        restSec: 40,
        bellyTip: "High-tempo hip flexor turnover with stationary core isometric bracing."
      },
      {
        exerciseId: "standing_calf_raise",
        targetSets: 3,
        targetReps: "15 reps (2 sec pause at top)",
        targetWeight: "Dumbbells / Bodyweight",
        restSec: 45,
        bellyTip: "Builds ankle stiffness and Achilles elasticity for reactive speed on the turf."
      }
    ],
    finisher: {
      title: "Turf Cone Shuffle & Deceleration Sprints",
      protocol: "Set 3 markers 5 meters apart: 5-10-5 lateral shuffle with sharp brake-and-sprint turns x 6 rounds.",
      benefit: "Trains instant change of direction, balance, and spatial body awareness."
    }
  },
  {
    id: "v-taper-upper",
    name: "Upper Body V-Taper & Posture Frame",
    focus: "Lats, Upper Chest, Side Delts (Narrows Waist Illusion)",
    badge: "V-TAPER PHYSIQUE",
    duration: "55-60 mins",
    intensity: "Hypertrophy & Posture",
    caloriesEst: "~380 kcal",
    summary: "Builds broad back lats and rounded shoulder caps. This creates the optical V-taper illusion that makes your waist and belly appear 2 to 3 inches slimmer immediately.",
    scienceRationale: "By widening the latissimus dorsi and lateral deltoids while strengthening the rhomboids and rear delts, you expand your upper shoulder width and pull back slouching posture.",
    exercises: [
      {
        exerciseId: "db_incline_bench_press",
        targetSets: 4,
        targetReps: "10-12 reps",
        targetWeight: "10 kg - 16 kg DBs",
        restSec: 60,
        bellyTip: "Opens the anterior chest shelf to eliminate slouching forward."
      },
      {
        exerciseId: "lat_pulldown",
        targetSets: 4,
        targetReps: "10-12 reps",
        targetWeight: "35 kg - 45 kg",
        restSec: 60,
        bellyTip: "Widening your lats creates the inverted triangle that narrows your waist appearance."
      },
      {
        exerciseId: "cable_face_pull",
        targetSets: 3,
        targetReps: "15 reps (2-sec hold)",
        targetWeight: "12.5 kg - 17.5 kg",
        restSec: 45,
        bellyTip: "Number one posture lift to cure rounded shoulders and puff chest proud."
      },
      {
        exerciseId: "db_lateral_raise",
        targetSets: 4,
        targetReps: "12-15 reps",
        targetWeight: "4 kg - 7.5 kg DBs",
        restSec: 45,
        bellyTip: "Adds side delt width to further enhance the narrow waistline contrast."
      },
      {
        exerciseId: "seated_cable_row",
        targetSets: 3,
        targetReps: "10-12 reps",
        targetWeight: "30 kg - 40 kg",
        restSec: 60,
        bellyTip: "Pulls the scapulae together, creating upper back athletic density."
      }
    ],
    finisher: {
      title: "Dead Hang Spine Decompression",
      protocol: "Hang completely relaxed from a pull-up bar for 3 sets of 45-60 seconds. Deep belly breathing.",
      benefit: "Decompresses spinal discs compressed by gravity and desk sitting."
    }
  },
  {
    id: "legs-pelvic-tilt",
    name: "Athletic Legs & Pelvic Alignment (Metabolic Engine)",
    focus: "Quads, Glutes, Hamstrings & Anterior Pelvic Tilt Reversal",
    badge: "METABOLIC ENGINE",
    duration: "55-60 mins",
    intensity: "High Load & High Burn",
    caloriesEst: "~480 kcal",
    summary: "Legs and glutes represent over 50% of total body muscle. Training them torching the highest systemic calorie expenditure while pulling forward-tilted pelvis into neutral alignment.",
    scienceRationale: "Weak glutes and tight hip flexors tilt your pelvis forward, causing the lower belly to spill out even at low body fat. Strengthening glutes and hamstrings flattens the abdomen instantly.",
    exercises: [
      {
        exerciseId: "goblet_squat",
        targetSets: 4,
        targetReps: "10-12 reps",
        targetWeight: "12 kg - 20 kg DB",
        restSec: 60,
        bellyTip: "Holding weight in front demands intense transverse abdominal counter-bracing."
      },
      {
        exerciseId: "db_romanian_deadlift",
        targetSets: 4,
        targetReps: "10-12 reps",
        targetWeight: "12 kg - 18 kg DBs",
        restSec: 60,
        bellyTip: "Directly strengthens hamstrings & glutes to tilt pelvis backward and pull stomach flat."
      },
      {
        exerciseId: "walking_lunges",
        targetSets: 3,
        targetReps: "12 steps each leg",
        targetWeight: "7.5 kg - 12 kg DBs",
        restSec: 60,
        bellyTip: "Stretches tight hip flexors while building unilateral athletic balance."
      },
      {
        exerciseId: "glute_bridge",
        targetSets: 3,
        targetReps: "15 reps (2 sec hard squeeze)",
        targetWeight: "Bodyweight / Plate on hips",
        restSec: 45,
        bellyTip: "Reverses desk-glute amnesia to restore neutral pelvic posture."
      },
      {
        exerciseId: "standing_calf_raise",
        targetSets: 3,
        targetReps: "15 reps",
        targetWeight: "Dumbbells",
        restSec: 45,
        bellyTip: "Strengthens lower leg elastic rebound for agile springiness."
      }
    ],
    finisher: {
      title: "Couch Hip-Flexor Stretch & Glute Activation",
      protocol: "Place rear foot up against a wall in a deep lunge stretch for 60 seconds each side. Squeeze glute on rear leg.",
      benefit: "Lengthens tight psoas muscles that pull the pelvis forward and create the fake belly pooch."
    }
  },
  {
    id: "arms-delts",
    name: "Arms, Delts & Functional Armor",
    focus: "Shoulders, Triceps, Biceps & Grip Strength",
    badge: "ARM SCULPT",
    duration: "45-50 mins",
    intensity: "Moderate Hypertrophy",
    caloriesEst: "~340 kcal",
    summary: "Balanced arm and shoulder development that enhances functional sports performance, grip strength, and athletic aesthetics.",
    scienceRationale: "Strengthening the triceps and grip enhances lockout strength on bench press and carrying capacity on farmer walks.",
    exercises: [
      {
        exerciseId: "db_seated_shoulder_press",
        targetSets: 4,
        targetReps: "10-12 reps",
        targetWeight: "10 kg - 16 kg DBs",
        restSec: 60,
        bellyTip: "Vertical pressing with a braced core trains the abdominal wall to support heavy overhead loads."
      },
      {
        exerciseId: "cable_tricep_pushdown",
        targetSets: 3,
        targetReps: "12-15 reps",
        targetWeight: "15 kg - 22.5 kg",
        restSec: 45,
        bellyTip: "Isolates the lateral tricep head for sculpted, athletic arm definition."
      },
      {
        exerciseId: "hammer_curl",
        targetSets: 3,
        targetReps: "10-12 reps",
        targetWeight: "7.5 kg - 12 kg DBs",
        restSec: 45,
        bellyTip: "Builds forearm grip and brachialis to support heavy deadlifts and carries."
      },
      {
        exerciseId: "db_lateral_raise",
        targetSets: 4,
        targetReps: "15 reps",
        targetWeight: "4 kg - 7.5 kg DBs",
        restSec: 45,
        bellyTip: "Adds 3D width to side delts, accentuating upper torso width."
      },
      {
        exerciseId: "pushup_standard",
        targetSets: 3,
        targetReps: "12-15 reps",
        targetWeight: "Bodyweight",
        restSec: 45,
        bellyTip: "Demands full-body plank integration while burning chest and triceps."
      }
    ],
    finisher: {
      title: "Plate Pinch / Bar Hang Grip Burnout",
      protocol: "Pinch two 5kg smooth plates together or hang from a thick pull-up bar until grip fails (x 2 sets).",
      benefit: "Develops iron forearm strength and forearm tendon resilience."
    }
  }
];

/**
 * 7-DAY COMPLETE WEEKLY SPLIT BLUEPRINT
 */
export const WEEKLY_SPLIT = [
  {
    day: "Monday",
    code: "MON",
    location: "Gym",
    title: "Upper Push, Shoulder Posture & Footwork",
    focus: "Chest, Lateral Delts, Triceps, Agility Warmup",
    planId: "v-taper-upper",
    duration: "60 mins",
    keyLifts: ["DB Incline Bench Press", "DB Lateral Raise", "Cable Tricep Pushdown", "Fast Feet Ladder"]
  },
  {
    day: "Tuesday",
    code: "TUE",
    location: "Gym",
    title: "Back V-Taper, Biceps & Deep Core Cinch",
    focus: "Lats, Cable Rows, TVA Deadbugs, Transverse Core",
    planId: "belly-shred-core",
    duration: "65 mins",
    keyLifts: ["Wide-Grip Lat Pulldown", "Seated Cable Row", "Deadbugs", "Hanging Knee Raises"]
  },
  {
    day: "Wednesday",
    code: "WED",
    location: "Gym",
    title: "Athletic Legs & Anterior Pelvic Tilt Reversal",
    focus: "Glutes, Hamstrings, Quads, Pelvic Alignment",
    planId: "legs-pelvic-tilt",
    duration: "60 mins",
    keyLifts: ["Goblet Squats", "Romanian Deadlifts (RDLs)", "Walking Lunges", "Glute Bridges"]
  },
  {
    day: "Thursday",
    code: "THU",
    location: "Gym",
    title: "Posture Sculpt, Delts & Transverse Abdominis",
    focus: "Rear Delts, Face Pulls, RKC Plank, Overhead Press",
    planId: "arms-delts",
    duration: "55 mins",
    keyLifts: ["Cable Face Pulls", "Seated DB Press", "Forearm RKC Plank", "Hammer Curls"]
  },
  {
    day: "Friday",
    code: "FRI",
    location: "Gym",
    title: "Functional Agility, Core Sheath & Farmer's Carries",
    focus: "Grip, Rotational Obliques, Lateral Deceleration",
    planId: "agility-speed",
    duration: "55 mins",
    keyLifts: ["Heavy Farmer's Carries", "Cable Woodchoppers", "Skater Hops", "Piston Climbers"]
  },
  {
    day: "Saturday",
    code: "SAT",
    location: "Room / Turf",
    title: "Zero-Equipment Athletic Agility & Calisthenics",
    focus: "Foot Speed, Plyometrics, Pushups, Glute Activation",
    planId: "agility-speed",
    duration: "40 mins",
    keyLifts: ["Skater Hops", "Fast Feet Sprints", "Athletic Pushups", "Bear Crawl Holds"]
  },
  {
    day: "Sunday",
    code: "SUN",
    location: "Outdoors",
    title: "Active Mobility, Hip Opening & 10k Steps Fat Loss",
    focus: "Spine Decompression, Couch Stretch, Zone-2 Fat Burn",
    planId: "belly-shred-core",
    duration: "45 mins walk + stretch",
    keyLifts: ["10,000 Step Brisk Walk", "Couch Hip-Flexor Stretch", "Pigeon Opener", "Diaphragm Breathing"]
  }
];

/**
 * 4 CORE CLUB PROGRAMS
 */
export const PROGRAMS = [
  {
    id: "powerlifting",
    title: "Iron Powerlifting & Raw Strength",
    badge: "FOUNDATION",
    desc: "Progressive compound bar mechanics, barbell deadlifts, squat depth, and bench press mastery. Build unstoppable raw power and structural joint density.",
    metrics: ["+30% Strength in 12 Wks", "Barbell & Dumbbell Mastery", "Safe Joint Alignment"],
    icon: "Dumbbell"
  },
  {
    id: "belly-shred",
    title: "Belly Shred & Core Cinch",
    badge: "PRIMARY FOCUS",
    desc: "Targeted protocol to strip stubborn visceral belly fat, reverse anterior pelvic tilt, and tighten the deep transverse abdominis for a flat, chiseled stomach.",
    metrics: ["-4.8 Avg Waist Inches", "TVA Internal Corset", "Zero Back Strain"],
    icon: "Flame"
  },
  {
    id: "agility-turf",
    title: "Turf Agility & Athletic Speed",
    badge: "SPRINGINESS",
    desc: "Speed ladder drills, lateral bounds, plyometric deceleration, and explosive footwork. Stay light, springy, and athletic on your feet at any bodyweight.",
    metrics: ["Sub-300ms Foot Reactivity", "Lateral Stability", "Cardio Threshold"],
    icon: "Zap"
  },
  {
    id: "mma-conditioning",
    title: "MMA & Combat Functional Core",
    badge: "HIGH ENDURANCE",
    desc: "Rotational power, heavy bag strikes, medicine ball torque, and intense conditioning rounds inspired by championship combat athletes.",
    metrics: ["Rotational Kinetic Power", "Iron Grip Endurance", "High-Intensity Stamina"],
    icon: "Shield"
  }
];

/**
 * TRAINERS
 */
export const TRAINERS = [
  {
    name: "Marcus 'Viper' Cole",
    role: "Head Agility & Athletic Performance Director",
    credentials: "CSCS, Ex-Track & Field Decathlete",
    bio: "Specializes in lightning-fast footwork, sprint acceleration, and converting gym strength into explosive, light-footed sports agility.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80",
    specialty: "Agility Ladders, Plyometrics & Foot Speed"
  },
  {
    name: "Sarah Jenkins",
    role: "Core Recomposition & Posture Specialist",
    credentials: "MS Exercise Science, CPT, FMS Level 2",
    bio: "Pioneered the 'Flat Belly & Pelvic Lock' method: helping hundreds eliminate lower belly bulge by addressing anterior pelvic tilt and deep TVA vacuums.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80",
    specialty: "Visceral Fat Shred & TVA Vacuum Conditioning"
  },
  {
    name: "Viktor Vance",
    role: "Master Strength & Powerlifting Coach",
    credentials: "National Powerlifting Record Holder, USAPL Senior Coach",
    bio: "Teaches bulletproof lifting mechanics, progressive overload principles, and building an unbreakable upper body V-taper frame.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80",
    specialty: "Powerlifting, V-Taper Hypertrophy & Barbell Mastery"
  },
  {
    name: "Elena Rostova",
    role: "Combat Conditioning & Mobility Coach",
    credentials: "Black Belt Krav Maga, Functional Range Conditioning (FRC)",
    bio: "Focuses on multi-planar rotational power, joint decompressions, heavy bag stamina, and injury prevention for high-impact athletes.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    specialty: "MMA Stamina, Rotational Core & Dynamic Hip Mobility"
  }
];

/**
 * PRICING TIERS
 */
export const PRICING_TIERS = [
  {
    id: "basic",
    name: "Iron Base",
    tagline: "Standard weight floor & cardio equipment",
    monthlyPrice: 49,
    annualPrice: 39,
    isPopular: false,
    features: [
      "Access to full dumbbell & strength floor",
      "Locker room & private shower suites",
      "Standard cardio & treadmill zone",
      "Iron mobile training app access",
      "Staffed hours entry (6am - 10pm)"
    ],
    cta: "Join Base"
  },
  {
    id: "pro",
    name: "Iron Pro Club",
    tagline: "The complete transformation & agility experience",
    monthlyPrice: 79,
    annualPrice: 63,
    isPopular: true,
    popularBadge: "MOST POPULAR • BEST VALUE",
    features: [
      "⚡ 24/7 Unlimited Digital Keycard Access",
      "Full 40m indoor turf & agility sprint lanes",
      "Unlimited Belly Shred & Core classes",
      "Personalized 100-Day Recomp & Nutrition Plan",
      "Recovery suite: Infrared sauna & cold plunge",
      "Complimentary monthly body composition scan",
      "Bring a training partner free 2x / month"
    ],
    cta: "Start 7-Day Free Trial"
  },
  {
    id: "elite",
    name: "VIP Elite Athletic",
    tagline: "Dedicated 1-on-1 coaching & athletic mastery",
    monthlyPrice: 129,
    annualPrice: 103,
    isPopular: false,
    features: [
      "All Iron Pro Club privileges included",
      "4 monthly 1-on-1 coaching sessions with head trainers",
      "Bi-weekly DEXA body fat & visceral fat tracking",
      "Customized sports nutrition & macro blueprint",
      "Private lifting platform & cage reservation",
      "Exclusive Iron Club athlete gear kit & shaker"
    ],
    cta: "Claim VIP Status"
  }
];

/**
 * TIMETABLE / CLASS SCHEDULE
 */
export const TIMETABLE_CLASSES = [
  { time: "06:00 AM", name: "Dawn Turf Agility & Footwork", category: "Agility", coach: "Marcus Cole", duration: "45 min", intensity: "High" },
  { time: "07:15 AM", name: "Flat Belly TVA & Core Cinch", category: "Core", coach: "Sarah Jenkins", duration: "45 min", intensity: "High" },
  { time: "08:30 AM", name: "Powerlifting Compound Mastery", category: "Strength", coach: "Viktor Vance", duration: "60 min", intensity: "Heavy" },
  { time: "12:00 PM", name: "Midday Metabolic Shred Circuit", category: "Core", coach: "Sarah Jenkins", duration: "45 min", intensity: "Extreme" },
  { time: "05:30 PM", name: "V-Taper Chest & Back Hypertrophy", category: "Strength", coach: "Viktor Vance", duration: "60 min", intensity: "Moderate" },
  { time: "06:45 PM", name: "MMA Combat Core & Heavy Bag", category: "Combat", coach: "Elena Rostova", duration: "50 min", intensity: "Extreme" },
  { time: "08:00 PM", name: "Pelvic Alignment & Spine Restoration", category: "Mobility", coach: "Elena Rostova", duration: "45 min", intensity: "Restorative" }
];

/**
 * TESTIMONIALS
 */
export const TESTIMONIALS = [
  {
    name: "Karan Mehta",
    age: 26,
    achievement: "-5.4 inches off waist • Sprint speed +24%",
    text: "I was the classic skinny-fat beginner: lean arms but a stubborn lower tummy pouch that wouldn't budge. Sarah taught me how to fix my anterior pelvic tilt with deadbugs and TVA vacuums. Within 8 weeks, my stomach flattened completely and my posture is night and day!",
    rating: 5,
    tag: "Skinny-Fat Recomp"
  },
  {
    name: "David Chen",
    age: 31,
    achievement: "74kg → 71kg Shredded • 24/7 Member",
    text: "The 24/7 keycard access is unmatched. Having the agility turf right next to heavy powerlifting racks means I never have to choose between getting strong and staying springy on my feet. Best gym environment in the city.",
    rating: 5,
    tag: "Agility & Strength"
  },
  {
    name: "Samantha Wright",
    age: 28,
    achievement: "-4.2 inches off waist • V-Taper definition",
    text: "The V-taper workouts changed everything. Building my upper back and side delts gave me an hourglass athletic waist without starving myself. The coaches here genuinely care about mechanics over ego.",
    rating: 5,
    tag: "Belly Shred & Core"
  }
];

/**
 * GALLERY IMAGES
 */
export const GALLERY_ITEMS = [
  {
    category: "Turf & Agility",
    title: "40m Sprint & Sled Turf Lane",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Free Weights",
    title: "Olympic Calibrated Racks & Cages",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Combat & MMA",
    title: "Heavy Bag Rotational Power Deck",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Belly Shred Zone",
    title: "Dedicated Cable & Core Pods",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Free Weights",
    title: "Precision Dumbbells 2.5kg to 50kg",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Recovery",
    title: "Infrared Sauna & Cold Plunge Suites",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
  }
];

/**
 * FREQUENTLY ASKED QUESTIONS (FAQ)
 */
export const FAQ_ITEMS = [
  {
    q: "Can I specifically reduce belly fat while gaining agility and muscle tone?",
    a: "Yes! While you cannot 'spot-reduce' fat through crunches alone, you achieve a flat stomach via two simultaneous mechanisms: 1) Systemic calorie deficit and high-protein nutrition that forces your body to oxidize visceral fat, and 2) Strengthening your transverse abdominis and reversing anterior pelvic tilt (APT). Most people have 1-2 inches of fake belly bulge caused by their pelvis tilting forward from sitting. Our protocol fixes this alignment so your lower stomach pulls flat immediately."
  },
  {
    q: "I am a beginner with only 2.5kg to 5kg starting strength. Is this gym right for me?",
    a: "Absolutely. Our dumbbell racks start at 2.5 kg, and every exercise has a built-in beginner progression (such as incline desk pushups or goblet squats with light dumbbells). What matters is mastering biomechanics, posture alignment, and controlled eccentric tempo—not lifting heavy with bad form."
  },
  {
    q: "How does the 24/7 digital access work?",
    a: "Iron Pro and VIP members receive a secure encrypted digital keycard on their phone (Apple Wallet & Google Wallet compatible). Simply tap your phone at the front biometric scanner at any hour of the day or night. The facility is fully monitored with secure CCTV and emergency stations."
  },
  {
    q: "Will heavy lifting make me stiff and slow down my agility?",
    a: "No—only bodybuilding bro-splits without mobility do that! Our Iron curriculum alternates heavy compound resistance with explosive lateral skater hops, fast-feet ladders, and multi-planar hip opening drills. This builds 'functional armor'—you get the aesthetic muscle of a lifter with the springy, light-footed reactivity of a boxer or soccer winger."
  },
  {
    q: "What is included in the 7-Day Free Trial Pass?",
    a: "Your 7-Day Free Trial gives you full uninhibited access to the gym floor, agility turf lanes, unlimited classes (Belly Shred & Agility), and a complimentary 30-minute posture & body composition assessment with one of our head trainers. Zero cancellation fees or hidden commitments."
  }
];
