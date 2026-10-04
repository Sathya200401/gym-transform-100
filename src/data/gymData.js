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
import { WORKOUT_DAYS, NUTRITION_DATA, EXERCISE_LIBRARY } from '../../data.js';
export { WORKOUT_DAYS, NUTRITION_DATA, EXERCISE_LIBRARY };

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
