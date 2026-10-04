import React, { useState } from 'react';
import { 
  Flame, 
  Droplets, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Compass, 
  HelpCircle,
  TrendingDown,
  Plus,
  Minus
} from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function BellyFatGuide() {
  const [waterGlasses, setWaterGlasses] = useState(4); // 350ml per glass
  const [currentWeight, setCurrentWeight] = useState(73); // Starting 73kg

  const handleWaterClick = (idx) => {
    playSuccessChime();
    setWaterGlasses(idx + 1);
  };

  const totalWaterLiters = ((waterGlasses * 350) / 1000).toFixed(1);

  return (
    <section id="belly-fat-guide" className="py-20 bg-[#121215] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            Science of Belly Fat &amp; Agility
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            HOW TO GET A <span className="text-[#C8FF00]">FLAT BELLY &amp; ATHLETIC AGILITY</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-3">
            Never starve down to 55kg or do 1,000 useless crunches. Here is the exact biomechanical and metabolic science behind flattening your lower abdomen while building springy, light-footed agility.
          </p>
        </div>

        {/* 4 Core Scientific Truths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Anterior Pelvic Tilt */}
          <div className="bg-[#18181B]/95 backdrop-blur-sm border border-[#27272A] p-6 hover:border-[#C8FF00] hover:shadow-[0_8px_30px_rgba(200,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] font-bold text-lg mb-4 group-hover:border-[#C8FF00]/40 transition-colors">
                01
              </div>
              <h3 className="text-xl font-heading text-[#F4F4F5] uppercase mb-2">
                The "False Belly" (Pelvic Tilt)
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Sitting for hours tightens hip flexors and weakens glutes. This tilts your pelvis forward, forcing your lower abdominal organs to spill forward. Deadbugs, glute bridges, and RDLs pull the pelvis back, instantly flattening the lower stomach by 1–2 inches!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#27272A] text-[11px] font-bold text-[#C8FF00] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              Fix: Strengthen Glutes &amp; Hamstrings
            </div>
          </div>

          {/* Card 2: The TVA Corset */}
          <div className="bg-[#18181B]/95 backdrop-blur-sm border border-[#27272A] p-6 hover:border-[#C8FF00] hover:shadow-[0_8px_30px_rgba(200,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] font-bold text-lg mb-4 group-hover:border-[#C8FF00]/40 transition-colors">
                02
              </div>
              <h3 className="text-xl font-heading text-[#F4F4F5] uppercase mb-2">
                Transverse Abdominis (TVA)
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Standard sit-ups push abdominal contents outward. The Transverse Abdominis is your body’s deep internal belt. Stomach vacuums, RKC planks, and farmer's carries train this muscle to cinch your waist inward 360° even when relaxed.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#27272A] text-[11px] font-bold text-[#C8FF00] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              Fix: Daily Stomach Vacuums &amp; Planks
            </div>
          </div>

          {/* Card 3: The V-Taper Optical Illusion */}
          <div className="bg-[#18181B]/95 backdrop-blur-sm border border-[#27272A] p-6 hover:border-[#C8FF00] hover:shadow-[0_8px_30px_rgba(200,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] font-bold text-lg mb-4 group-hover:border-[#C8FF00]/40 transition-colors">
                03
              </div>
              <h3 className="text-xl font-heading text-[#F4F4F5] uppercase mb-2">
                V-Taper Optical Ratio
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                A 32-inch waist looks wide if your upper back and shoulders are narrow. By building broad latissimus dorsi (lat pulldowns) and rounded side delts, your waist visually appears 2–3 inches smaller immediately due to the classic athletic V-taper.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#27272A] text-[11px] font-bold text-[#C8FF00] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              Fix: Lat Pulldowns &amp; Lateral Raises
            </div>
          </div>

          {/* Card 4: Agility & Visceral Fat Oxidation */}
          <div className="bg-[#18181B]/95 backdrop-blur-sm border border-[#27272A] p-6 hover:border-[#C8FF00] hover:shadow-[0_8px_30px_rgba(200,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] font-bold text-lg mb-4 group-hover:border-[#C8FF00]/40 transition-colors">
                04
              </div>
              <h3 className="text-xl font-heading text-[#F4F4F5] uppercase mb-2">
                Agility Turf EPOC Burn
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Slow boring cardio makes you sluggish. Explosive skater hops, fast-feet sprints, and deceleration drills recruit high-threshold fast-twitch muscle fibers, burning visceral belly fat for up to 24 hours post-workout via high excess post-exercise oxygen consumption.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#27272A] text-[11px] font-bold text-[#C8FF00] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              Fix: Fast-Twitch Plyo Footwork
            </div>
          </div>

        </div>

        {/* Interactive Recomposition & Hydration Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Recomposition Target Calculator */}
          <div className="lg:col-span-7 bg-[#18181B] border border-[#27272A] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8FF00]">
                  Target Blueprint
                </span>
                <h3 className="text-2xl font-heading text-[#F4F4F5] uppercase">
                  DAILY NUTRITION FOR 73KG ATHLETIC RECOMPOSITION
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 bg-[#0D0D0F] border border-[#27272A] text-[#A1A1AA]">
                400 kcal Deficit
              </span>
            </div>

            {/* Macro Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-4 bg-[#0D0D0F] border border-[#27272A]">
                <div className="text-[10px] font-bold text-[#A1A1AA] uppercase">Target Calories</div>
                <div className="text-2xl font-black text-[#C8FF00] font-heading mt-1">1,850</div>
                <div className="text-[10px] text-[#71717A]">kcal / day</div>
              </div>

              <div className="p-4 bg-[#0D0D0F] border border-[#27272A]">
                <div className="text-[10px] font-bold text-[#A1A1AA] uppercase">Protein (Muscle)</div>
                <div className="text-2xl font-black text-[#F4F4F5] font-heading mt-1">125g</div>
                <div className="text-[10px] text-[#71717A]">1.7g / kg bodyweight</div>
              </div>

              <div className="p-4 bg-[#0D0D0F] border border-[#27272A]">
                <div className="text-[10px] font-bold text-[#A1A1AA] uppercase">Carbs (Agility)</div>
                <div className="text-2xl font-black text-[#F4F4F5] font-heading mt-1">190g</div>
                <div className="text-[10px] text-[#71717A]">Oats, rice, fruit</div>
              </div>

              <div className="p-4 bg-[#0D0D0F] border border-[#27272A]">
                <div className="text-[10px] font-bold text-[#A1A1AA] uppercase">Fats (Hormones)</div>
                <div className="text-2xl font-black text-[#F4F4F5] font-heading mt-1">55g</div>
                <div className="text-[10px] text-[#71717A]">Nuts, olive oil</div>
              </div>
            </div>

            <div className="p-4 bg-[#0D0D0F] border border-[#27272A] space-y-2">
              <div className="text-xs font-bold uppercase text-[#F4F4F5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00]" />
                Top High-Protein Sources (125g Daily Target):
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Whole Eggs &amp; Whites, Chicken Breast, Low-fat Paneer/Cottage Cheese, Firm Tofu, Greek Yogurt, Whey Isolate, and Cooked Lentils/Chickpeas.
              </p>
            </div>
          </div>

          {/* Right: Daily 3.5L Hydration Tracker */}
          <div className="lg:col-span-5 bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-4">
                <div className="flex items-center gap-2 text-[#C8FF00]">
                  <Droplets className="w-5 h-5" />
                  <h3 className="text-xl font-heading text-[#F4F4F5] uppercase">
                    3.5L DAILY HYDRATION GOAL
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#C8FF00] font-mono">
                  {totalWaterLiters} / 3.5 L
                </span>
              </div>

              <p className="text-xs text-[#A1A1AA] mb-4">
                Critical for shedding belly water retention: Dehydration causes the body to cling to subcutaneous water in the lower stomach. Tap each glass (350ml) as you drink throughout the day:
              </p>

              {/* 10 Water Glasses Interactive Clicker */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {[...Array(10)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleWaterClick(i)}
                    className={`py-3 px-2 border flex flex-col items-center justify-center transition-all ${
                      i < waterGlasses
                        ? 'bg-[#C8FF00] border-[#C8FF00] text-[#0D0D0F]'
                        : 'bg-[#0D0D0F] border-[#27272A] text-[#71717A] hover:border-[#C8FF00]/50'
                    }`}
                    title={`Glass ${i + 1} (350ml)`}
                  >
                    <Droplets className="w-4 h-4 mb-1" />
                    <span className="text-[10px] font-bold font-mono">
                      {((i + 1) * 0.35).toFixed(1)}L
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#0D0D0F] border border-[#27272A] text-[11px] text-[#A1A1AA] flex items-center justify-between">
              <span>Status: {waterGlasses >= 10 ? '🎉 Goal Achieved!' : `${10 - waterGlasses} glasses remaining`}</span>
              <button 
                onClick={() => setWaterGlasses(0)}
                className="text-[10px] font-bold uppercase text-[#71717A] hover:text-[#C8FF00]"
              >
                Reset
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
