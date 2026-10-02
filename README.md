# ⚡ IronTransform 100: Autonomous 100-Day Personal Training System

A dedicated React-powered 100-day fitness application and day-by-day roadmap engineered for a beginner (10 days experience, 73 kg, 5'7"–5'8") to **eliminate stubborn belly fat**, reverse **anterior pelvic tilt**, and develop **explosive athletic agility and fitness**—with **zero dependency on trainers**.

---

## 🎨 Design System: "Iron" Theme & 6-Token Architecture

The UI is built according to the **Iron** specification (Powerlifting, CrossFit, MMA, Raw Strength & Athletic Agility):

### 1. The Six CSS Variables (`:root`)
You can re-skin the entire web application simply by modifying these six values in `src/styles/iron.css`:
```css
:root {
  --bg: #0D0D0F;         /* Pitch Black Background */
  --surface: #18181B;    /* Dark Carbon Zinc Surface */
  --text: #F4F4F5;       /* Crisp Off-White */
  --muted: #A1A1AA;      /* Muted Zinc Gray */
  --accent: #C8FF00;     /* High-Voltage Electric Lime */
  --on-accent: #0D0D0F;  /* Pitch Black Text on Accent */
}
```

### 2. Typography & Shapes
- **Headings**: Bebas Neue & Barlow Condensed (Condensed uppercase athletic power).
- **Body**: Inter (Clean, modern readability).
- **Corner Radii**: Sharp 0–4px (`rounded-none`, `rounded-sm`), tactical industrial borders, and diagonal accents.

---

## 🎯 Primary Goal: The Skinny-Fat Belly & Agility Solution

If you feel your arms are lean but you have a soft lower belly pouch and lack springiness/agility:
1. **Never starve down to 55 kg**: Aggressively cutting calories without muscle strips existing lean mass, slows your metabolism, and leaves stubborn visceral fat clinging to a weak frame.
2. **Reverse Anterior Pelvic Tilt (APT)**: Prolonged sitting weakens glutes and tightens hip flexors, tilting the pelvis forward. This forces your lower abdominal organs to spill outward. Strengthening glutes, hamstrings, and deep transverse core pulls the pelvis neutral, flattening the lower belly by 1–2 inches immediately!
3. **Train the Transverse Abdominis (TVA)**: Traditional crunches push abdominal contents outward. Stomach vacuums, deadbugs, and RKC planks train the TVA (your natural 360° internal belt) to cinch your waist tight even when standing relaxed.
4. **V-Taper Optical Ratio**: Building wider lats and side delts physically expands the upper torso, visually narrowing your waistline by 2–3 inches.
5. **Explosive Agility Footwork**: Skater bounds, turf fast-feet, and multi-planar agility drills recruit fast-twitch muscle fibers, generating high excess post-exercise oxygen consumption (EPOC) that burns visceral belly fat for 24 hours.

---

## 🚀 How to Run the Web Application

The application is completely standalone and zero-dependency (no Node.js server or build tools required to run in the browser).

### Option 1: Direct Browser Launch (Instant)
1. Open this folder in File Explorer:
   `C:\Users\SATYA GNANESH\OneDrive\Documents\Desktop\Gym`
2. Double-click **`index.html`** or right-click &rarr; *Open With* &rarr; *Google Chrome* / *Microsoft Edge*.
3. The app opens immediately with full functionality, offline storage, local visual workout illustrations, and interactive audio timers!

### Option 2: Using on Your Mobile Phone at the Gym
To use the app on your smartphone while working out:
- **Local Network**: Run a simple server from this folder:
  ```powershell
  python -m http.server 8080
  # OR: npx serve .
  ```
  Open your mobile browser and visit `http://<YOUR_PC_IP>:8080`.
- **Add to Home Screen**: In Chrome/Safari on mobile, tap the menu &rarr; **"Add to Home Screen"**. It will behave like a native gym training app with an app icon and sticky rest timer!
- **Zero Internet Required**: All 100 days of workouts, form guides, and vector workout images (`assets/exercises/*.svg`) are embedded locally and persist via `localStorage`.

---

## 📱 App Key Features (Autonomous Trainer Experience)

| Feature | Description |
| :--- | :--- |
| **🏋️ Today's Workout (Day 1 to 100)** | Displays the exact day's routine, phase goals, duration, and exercise breakdown. |
| **🛡️ Biomechanics Coach Tip** | Daily posture guidance explaining mind-muscle connection and pelvic alignment so you never need a personal trainer. |
| **🖼️ 30 High-Resolution Vector Diagrams** | Local SVG exercise diagrams in `assets/exercises/` showing motion vectors and target muscles (chest, lats, delts, glutes, TVA core). |
| **🔢 Interactive Weight & Rep Steppers** | Fast `[-]` / `[+]` stepper buttons for weights (2.5kg steps) and reps (1 step) with a locked 2.5kg beginner baseline. |
| **🔄 Gym &harr; Room Toggle** | Working from home or gym closed for a public holiday? One click instantly converts that day into a 0-equipment room routine! |
| **⏱️ Dynamic Island Rest Timer HUD** | Floating workout timer with circular SVG progress ring, 30s/60s/90s presets, +15s button, and automatic auto-start upon checking off any set! |
| **🔔 Web Audio Synthesizer** | High-grade synthesized audio chimes for set clicks, 3-2-1 countdown ticks, rest finish bells, and victory fanfares without external audio files. |
| **🎊 Confetti Celebration Modal** | Completing a day's workout triggers a 60fps confetti explosion and displays a celebration summary with streak count and calories burned. |
| **📖 Visual Form & 30s Drill Modal** | Biomechanics posture cues, mind-muscle tips, beginner mistakes, and a live **30s Practice Form Drill** timer with sound! |
| **🗺️ 100-Day Transformation Map** | Complete interactive calendar across Phase 1 (Foundation), Phase 2 (V-Taper), and Phase 3 (Peak Shred), with phase and location filters. |
| **💧 Daily Hydration Tracker** | Interactive water glasses counter to track your daily 3.5L hydration goal (essential to flush stubborn belly water retention). |
| **🥑 Belly Fat & Fuel Strategy** | Personalized calorie target (1,850 kcal/day), 125g protein guide, 5 scientific truths about skinny-fat, and grocery directory. |
| **📏 Waist & Weight Tracker** | Log your weekly belly-button circumference and scale weight with a history table and change calculator. |
| **💾 Backup Data (JSON)** | Export your entire training journey to a JSON file or reset anytime. |

---

## 🗓️ 100-Day Weekly Structure

- **Monday (Gym)**: Upper Push, Shoulder Posture & Footwork (Chest, Delts, Triceps, Agility Warmup)
- **Tuesday (Gym)**: Back & Lats V-Taper, Biceps & Deep Core (Lat Pulldown, Cable Row, Deadbugs, Knee Raises)
- **Wednesday (Gym)**: Athletic Legs & Pelvic Alignment (Goblet Squats, Romanian Deadlifts, Walking Lunges, Glute Bridges)
- **Thursday (Gym)**: Posture Sculpt, Delts & Transverse Abdominis (Seated DB Press, Face Pulls, RKC Plank, Hammer Curls)
- **Friday (Gym)**: Functional Agility & Heavy Farmer's Carries (Grip, Rotational Obliques, Skater Hops, Climbers)
- **Saturday (Room)**: Zero-Equipment Athletic Agility & Calisthenics Circuit (Skater Hops, Fast Feet, Pushups, Bridges)
- **Sunday (Room / Outdoors)**: Active Mobility, Hip Opening & 10,000 Step Fat Oxidation Milestone

---

## 🛠️ Development & Build Commands

To recompile the React bundle and Tailwind styles:
```powershell
# Build both JavaScript and CSS bundles
npm run build

# Or build individually
npm run build:js
npm run build:css
```
