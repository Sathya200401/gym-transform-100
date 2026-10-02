# ⚡ GymTransform 100: Athletic Recomposition, Belly Fat Loss & Agility

A dedicated, interactive 100-day fitness application and roadmap engineered for a beginner (10 days experience, 73 kg, 5'7"–5'8") with access to a standard corporate gym on weekdays and no equipment on weekends/holidays.

---

## 🎯 Primary Goal: The Skinny-Fat & Agility Solution

If you feel your body is lean but you have a soft lower belly and lack springiness/agility:
1. **Never starve down to 55 kg**: Aggressively cutting calories without muscle strips your existing muscle, lowers metabolism, and leaves stubborn belly fat clinging to a weak frame.
2. **Body Recomposition**: Build upper-body frame width (lats, lateral shoulders, chest) to form a natural **V-Taper** that visually narrows your waist, while strengthening glutes and the deep **transverse abdominis core** to reverse anterior pelvic tilt and pull the stomach flat.
3. **Athletic Agility**: Fast-feet agility ladders, skater hops, and multi-planar movements train reactive footwork and light-footed athleticism.

---

## 🚀 How to Run the Web Application

The application is completely standalone and zero-dependency (no Node.js server or build tools required).

### Option 1: Direct Browser Launch (Instant)
1. Open this folder in File Explorer:
   `C:\Users\SATYA GNANESH\OneDrive\Documents\Desktop\Gym`
2. Double-click **`index.html`** or right-click &rarr; *Open With* &rarr; *Google Chrome* / *Microsoft Edge*.
3. The app opens immediately with full functionality, offline storage, local visual workout illustrations, and interactive audio timers!

### Option 2: Using on Your Mobile Phone at the Gym
To use the app on your smartphone while working out in the company gym:
- **Local Network**: Run a simple Python or Node server from this folder:
  ```powershell
  python -m http.server 8080
  ```
  Open your mobile browser and visit `http://<YOUR_PC_IP>:8080`.
- **Add to Home Screen**: In Chrome/Safari on mobile, tap the menu (or Share button) &rarr; **"Add to Home Screen"**. It will behave like a native gym training app with an app icon and bottom navigation bar!
- **Zero Internet Required**: All 100 days of workouts, form guides, and vector workout images (`assets/exercises/*.svg`) are embedded locally and persist via `localStorage`.

---

## 📱 App Key Features (10/10 UX Overhaul)

| Feature | Description |
| :--- | :--- |
| **🖼️ Visual Workout Artwork** | Dedicated vector exercise diagrams for all 30 exercises in `assets/exercises/`, highlighting target muscle zones (chest, lats, delts, glutes, core) and motion vectors. |
| **🏋️ Today's Workout & Week Scrubber** | 7-Day carousel scrubber (Mon–Sun) to quickly switch days, dynamic warm-up checklist, main exercises, and post-workout cardio. |
| **🔢 Interactive Numeric Steppers** | Fast `[-]` / `[+]` stepper buttons for weights (2.5kg steps) and reps (1 step), making gym logging effortless on mobile with sweaty hands. |
| **🔄 Gym &harr; Room Toggle** | Working from home or gym closed for a public holiday? Click **"Switch to Room Workout"** to instantly convert that day into a 0-equipment room routine! |
| **⏱️ Dynamic Island Rest Timer HUD** | Floating workout timer with circular SVG progress ring, 30s/60s/90s/120s presets, +15s button, and automatic auto-start upon checking off any set! |
| **🔔 Web Audio Synthesizer** | High-grade synthesized audio chimes for set clicks, 3-2-1 countdown ticks, rest finish bells, and victory fanfares without external audio files. |
| **🎊 Confetti Celebration Modal** | Completing a day's workout triggers a 60fps confetti explosion and displays a celebration summary with streak count, calories burned, and next-day advance. |
| **📖 Visual Form & Technique Modal** | Displays high-resolution exercise diagrams, biomechanics posture cues, mind-muscle tips, beginner mistakes, and a live **30s Practice Form Drill** timer! |
| **🗺️ 100-Day Transformation Map** | Complete interactive calendar across Phase 1 (Foundation), Phase 2 (V-Taper), and Phase 3 (Peak Shred), with phase and location filters. |
| **💧 Daily Hydration Tracker** | Interactive water glasses counter to track your daily 3.5L hydration goal (essential to flush sodium and stubborn belly water retention). |
| **🥑 Belly Fat & Fuel Strategy** | Personalized calorie target (1,850 kcal/day), 125g protein guide, 5 scientific truths about skinny-fat, and grocery directory (veg & non-veg). |
| **📏 Waist & Weight Tracker** | Log your weekly belly-button circumference and scale weight with a dual-line SVG chart with smooth curves and hover stats. |
| **💾 Backup & Print** | Export your entire training journey to a JSON file or open a clean print view for paper logs. |

---

## 🗓️ 100-Day Weekly Structure

- **Monday (Gym)**: Upper Push, Shoulder Posture & Footwork (Chest, Delts, Triceps)
- **Tuesday (Gym)**: Back & Lats V-Taper, Biceps & Deep Core (Lat Pulldown, Cable Row, Deadbugs)
- **Wednesday (Gym)**: Athletic Legs & Pelvic Alignment (Goblet Squats, Romanian Deadlifts, Lunges)
- **Thursday (Gym)**: Posture Sculpt, Delts & Transverse Abdominis (Shoulder Press, Rows, Planks)
- **Friday (Gym)**: Functional Conditioning & Farmer's Carries (Grip, Agility, Intervals)
- **Saturday (Room)**: Zero-Equipment Athletic Agility & Calisthenics Circuit (Skater Hops, Fast Feet, Pushups, Bridges)
- **Sunday (Room / Outdoors)**: Active Mobility, Hip Opening & 8,000–10,000 Step Milestone

---

## 🥑 Daily Nutrition Target Summary (For 73 kg Recomposition)

- **Daily Calories**: ~1,850 kcal (400 kcal healthy deficit)
- **Protein**: 125 grams (1.7g / kg bodyweight)
- **Carbs**: 190 grams (Oats, rice, whole grains, fruits)
- **Healthy Fats**: 55 grams (Nuts, peanut butter, olive oil)
- **Hydration**: 3.5 Litres water daily
- **Sleep**: 7.5 – 8 hours (Critical: Sleep deprivation spikes cortisol, which directs fat storage to the lower belly!)
