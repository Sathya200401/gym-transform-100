import React, { useState } from 'react';
import { 
  WORKOUT_PLANS, 
  EXERCISE_LIBRARY, 
  WEEKLY_SPLIT 
} from '../data/gymData';
import { 
  Flame, 
  Zap, 
  Shield, 
  Dumbbell, 
  Info, 
  Check, 
  Plus, 
  Minus, 
  Timer, 
  ChevronRight, 
  Calendar,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function WorkoutPlans({ 
  onSelectExercise, 
  onStartRestTimer,
  onCompleteWorkout 
}) {
  const [activeTab, setActiveTab] = useState('belly-shred-core');
  const [equipmentMode, setEquipmentMode] = useState('gym'); // 'gym' | 'room'
  const [loggedSets, setLoggedSets] = useState({}); // { "planId_exIdx_setIdx": { checked: boolean, weight: string, reps: string } }

  const handleToggleSet = (planId, exIdx, setIdx, restSec) => {
    const key = `${planId}_${exIdx}_${setIdx}`;
    const current = loggedSets[key] || { checked: false };
    const nextChecked = !current.checked;

    setLoggedSets(prev => ({
      ...prev,
      [key]: {
        ...current,
        checked: nextChecked
      }
    }));

    if (nextChecked) {
      playSuccessChime();
      if (onStartRestTimer) {
        onStartRestTimer(restSec || 60);
      }
    } else {
      playTick();
    }
  };

  const isZeroWeightEx = (ex, item) => {
    if (activeTab === 'room-agility-core') return true;
    const exId = ex?.id || item?.exerciseId || '';
    const bodyweightIds = [
      'pushup_standard', 'deadbug', 'forearm_plank', 'hanging_knee_raise',
      'glute_bridge', 'mountain_climber', 'air_squat_reach', 'bear_crawl_hold',
      'skater_hops', 'fast_feet_shadow'
    ];
    if (bodyweightIds.includes(exId)) return true;
    const equip = (ex?.equipment || '').toLowerCase();
    const targetW = (item?.targetWeight || '').toLowerCase();
    return equip.includes('bodyweight') || 
           equip.includes('zero equipment') || 
           targetW.includes('bodyweight') ||
           targetW.includes('speed') ||
           targetW.includes('hold');
  };

  const parseDefaultReps = (item) => {
    if (!item) return '12';
    const repStr = (item.targetReps || item.reps || '').toString();
    const match = repStr.match(/\d+/);
    return match ? match[0] : '12';
  };

  const isTimeBased = (item) => {
    if (!item) return false;
    const str = (item.targetReps || item.reps || '').toString().toLowerCase();
    return str.includes('sec') || str.includes('hold');
  };

  const handleUpdateStepper = (planId, exIdx, setIdx, field, delta, fallbackVal) => {
    playTick();
    const key = `${planId}_${exIdx}_${setIdx}`;
    const current = loggedSets[key] || { 
      checked: false, 
      weight: fallbackVal.weight || '10', 
      reps: fallbackVal.reps || '12' 
    };

    let val = parseFloat(current[field]) || 0;
    val = Math.max(0, val + delta);

    // Format clean numbers
    const formatted = field === 'weight' ? (val % 1 === 0 ? val.toString() : val.toFixed(1)) : Math.round(val).toString();

    setLoggedSets(prev => ({
      ...prev,
      [key]: {
        ...current,
        [field]: formatted
      }
    }));
  };

  const getSetValues = (planId, exIdx, setIdx, ex, item) => {
    const key = `${planId}_${exIdx}_${setIdx}`;
    const logged = loggedSets[key];
    const isBW = isZeroWeightEx(ex, item);
    const defReps = parseDefaultReps(item);
    if (logged) {
      return {
        checked: logged.checked || false,
        weight: isBW ? 'BW' : (logged.weight || '10'),
        reps: logged.reps || defReps
      };
    }
    return {
      checked: false,
      weight: isBW ? 'BW' : '10',
      reps: defReps
    };
  };

  const currentPlan = WORKOUT_PLANS.find(p => p.id === activeTab) || WORKOUT_PLANS[0];

  return (
    <section id="workout-plans" className="py-20 bg-[#0D0D0F] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Complete Body Workout System
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
              TARGETED BODY <span className="text-[#C8FF00]">WORKOUT PLANS</span>
            </h2>
            <p className="text-base text-[#A1A1AA] max-w-2xl mt-2">
              Engineered with a primary focus on <strong className="text-[#F4F4F5]">reducing belly fat</strong> through transverse core cinching and visceral fat oxidation, paired with <strong className="text-[#C8FF00]">explosive agility &amp; springy footwork</strong>.
            </p>
          </div>

          {/* Quick Gym / Room Toggle */}
          <div className="flex items-center gap-2 p-1 bg-[#18181B] border border-[#27272A]">
            <button
              onClick={() => setEquipmentMode('gym')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                equipmentMode === 'gym'
                  ? 'bg-[#C8FF00] text-[#0D0D0F]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              🏋️ Corporate Gym Mode
            </button>
            <button
              onClick={() => setEquipmentMode('room')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                equipmentMode === 'room'
                  ? 'bg-[#C8FF00] text-[#0D0D0F]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              🏠 0-Equipment Room Mode
            </button>
          </div>
        </div>

        {/* Tab Filters for Targeted Body Areas */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#27272A] scrollbar-thin">
          <button
            onClick={() => setActiveTab('belly-shred-core')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'belly-shred-core'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            ⚡ Flat Belly &amp; Deep Core (Primary)
          </button>

          <button
            onClick={() => setActiveTab('agility-speed')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'agility-speed'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            🏃 Agility, Speed &amp; Footwork
          </button>

          <button
            onClick={() => setActiveTab('v-taper-upper')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'v-taper-upper'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            🛡️ Upper V-Taper (Chest, Back, Lats)
          </button>

          <button
            onClick={() => setActiveTab('legs-pelvic-tilt')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'legs-pelvic-tilt'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            💥 Legs &amp; Pelvic Alignment (Metabolic Torch)
          </button>

          <button
            onClick={() => setActiveTab('arms-delts')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'arms-delts'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            💪 Arms &amp; Delts Armor
          </button>

          <button
            onClick={() => setActiveTab('weekly-split')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === 'weekly-split'
                ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
            }`}
          >
            🗓️ 7-Day Complete Weekly Split
          </button>
        </div>

        {/* ==================================================================== */}
        {/* VIEW 1: 7-DAY WEEKLY SPLIT VIEW                                      */}
        {/* ==================================================================== */}
        {activeTab === 'weekly-split' ? (
          <div className="space-y-6">
            <div className="bg-[#18181B] border border-[#27272A] p-6 text-left">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#27272A] pb-4 mb-4">
                <div>
                  <h3 className="text-2xl font-heading text-[#F4F4F5] uppercase">
                    100-DAY ATHLETIC RECOMPOSITION SPLIT (7-DAY ROTATION)
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Structured for corporate gym workouts on weekdays and zero-equipment agility in your room on weekends.
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#C8FF00]/15 text-[#C8FF00] text-xs font-bold border border-[#C8FF00]/30">
                  BALANCED RECOMPOSITION
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {WEEKLY_SPLIT.map((item, idx) => (
                  <div 
                    key={item.day}
                    className="p-5 bg-[#0D0D0F] border border-[#27272A] hover:border-[#C8FF00]/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 bg-[#C8FF00] text-[#0D0D0F] text-[11px] font-black uppercase">
                          {item.day}
                        </span>
                        <span className="text-[11px] font-bold text-[#A1A1AA] flex items-center gap-1">
                          📍 {item.location} • {item.duration}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#F4F4F5] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#C8FF00] font-medium mb-3">
                        🎯 {item.focus}
                      </p>
                      
                      <div className="space-y-1 pt-2 border-t border-[#27272A]/60">
                        {item.keyLifts.map((lift, i) => (
                          <div key={i} className="text-xs text-[#A1A1AA] flex items-center gap-1.5">
                            <span className="text-[#C8FF00]">•</span> {lift}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab(item.planId)}
                      className="mt-4 w-full py-2 bg-[#18181B] hover:bg-[#C8FF00] hover:text-[#0D0D0F] text-[#F4F4F5] text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1"
                    >
                      <span>View Workout Drills</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ==================================================================== */
          /* VIEW 2: DEDICATED WORKOUT PLAN DETAILS WITH INTERACTIVE STEPPERS     */
          /* ==================================================================== */
          <div className="space-y-6">
            
            {/* Plan Header Card */}
            <div className="bg-[#18181B] border border-[#27272A] p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#27272A]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#C8FF00] text-[#0D0D0F] text-[11px] font-black uppercase tracking-wider">
                      {currentPlan.badge}
                    </span>
                    <span className="text-xs text-[#A1A1AA] uppercase font-bold tracking-wider">
                      Duration: {currentPlan.duration}
                    </span>
                    <span className="text-[#27272A]">•</span>
                    <span className="text-xs text-[#C8FF00] font-bold">
                      Est. Burn: {currentPlan.caloriesEst}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-heading text-[#F4F4F5] uppercase tracking-wide">
                    {currentPlan.name}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-3xl mt-1">
                    {currentPlan.summary}
                  </p>
                </div>

                <button
                  onClick={() => onCompleteWorkout && onCompleteWorkout(currentPlan.name)}
                  className="btn-iron-primary text-sm px-6 py-3 whitespace-nowrap self-start lg:self-center"
                >
                  <Check className="w-4 h-4 mr-1 stroke-[3]" /> Finish &amp; Log Workout
                </button>
              </div>

              {/* Scientific Rationale Callout Box */}
              <div className="mt-6 p-4 bg-[#0D0D0F] border-l-2 border-[#C8FF00] border-y border-r border-[#27272A] flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C8FF00] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C8FF00]">
                    Biomechanical Strategy &amp; Flat Belly Impact
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5 leading-relaxed">
                    {currentPlan.scienceRationale}
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise List */}
            <div className="space-y-4">
              {currentPlan.exercises.map((item, exIdx) => {
                const ex = EXERCISE_LIBRARY[item.exerciseId];
                if (!ex) return null;

                return (
                  <div 
                    key={item.exerciseId}
                    className="bg-[#18181B] border border-[#27272A] hover:border-[#2E2E33] transition-colors p-5 sm:p-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      
                      {/* Left: Thumbnail & Name */}
                      <div className="lg:col-span-5 flex items-start sm:items-center gap-4">
                        <div 
                          onClick={() => onSelectExercise(ex)}
                          className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0D0D0F] border border-[#27272A] flex-shrink-0 p-1 cursor-pointer group relative overflow-hidden flex items-center justify-center hover:border-[#C8FF00] transition-colors"
                          title="Click to view HD technique photo"
                        >
                          <img
                            src={ex.image || `assets/exercises/${ex.id}.jpg`}
                            alt={ex.name}
                            className="w-full h-full object-cover rounded-sm filter brightness-95 group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `assets/exercises/${ex.id || 'db_flat_bench_press'}.jpg`;
                            }}
                          />
                          <span className="absolute bottom-1 right-1 text-[8px] bg-[#C8FF00] text-[#0D0D0F] font-black px-1 uppercase">
                            HD PHOTO
                          </span>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-[#C8FF00] uppercase tracking-wider">
                              Exercise {exIdx + 1}
                            </span>
                            <span className="text-[#3F3F46]">•</span>
                            <span className="text-[10px] font-semibold text-[#A1A1AA]">
                              {ex.category}
                            </span>
                          </div>

                          <h4 
                            onClick={() => onSelectExercise(ex)}
                            className="text-lg sm:text-xl font-heading text-[#F4F4F5] hover:text-[#C8FF00] cursor-pointer transition-colors leading-tight"
                          >
                            {ex.name}
                          </h4>

                          <p className="text-xs text-[#A1A1AA] mt-1 line-clamp-2">
                            {item.bellyTip}
                          </p>

                          <div className="flex items-center gap-3 mt-2 text-xs font-semibold text-[#A1A1AA]">
                            <span>🎯 {item.targetSets} Sets × {item.targetReps}</span>
                            <span>⏱️ {item.restSec}s Rest</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Interactive Set Logging Steppers */}
                      <div className="lg:col-span-7">
                        <div className="bg-[#0D0D0F] border border-[#27272A] p-3 sm:p-4">
                          <div className="flex items-center justify-between text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider pb-2 border-b border-[#27272A] mb-3">
                            <span>{isZeroWeightEx(ex, item) ? "Zero-Weights Breakdown (Bodyweight)" : "Set Breakdown (2.5kg Stepper)"}</span>
                            <span className="text-[#C8FF00]">Check = Auto Rest Timer</span>
                          </div>

                          <div className="space-y-2">
                            {[...Array(item.targetSets)].map((_, setIdx) => {
                              const isBW = isZeroWeightEx(ex, item);
                              const setVal = getSetValues(currentPlan.id, exIdx, setIdx, ex, item);
                              const isTime = isTimeBased(item);

                              return (
                                <div 
                                  key={setIdx}
                                  className={`flex items-center justify-between gap-3 p-2 border transition-colors ${
                                    setVal.checked 
                                      ? 'bg-[#18181B] border-[#C8FF00]/40' 
                                      : 'bg-[#121215] border-[#27272A]'
                                  }`}
                                >
                                  {/* Set Label */}
                                  <span className="text-xs font-heading text-[#A1A1AA] w-12 tracking-wider">
                                    SET {setIdx + 1}
                                  </span>

                                  {/* If zero weight, show badge; otherwise KG stepper */}
                                  {isBW ? (
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#18181B] border border-[#C8FF00]/30 text-[#C8FF00]">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] inline-block animate-pulse" />
                                      <span className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
                                        0 WEIGHTS • BODYWEIGHT
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-[#71717A] uppercase font-bold hidden sm:inline">
                                        KG
                                      </span>
                                      <button
                                        onClick={() => handleUpdateStepper(currentPlan.id, exIdx, setIdx, 'weight', -2.5, setVal)}
                                        className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                        title="Subtract 2.5 kg"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="w-12 text-center text-xs font-mono font-bold text-[#F4F4F5]">
                                        {setVal.weight} <span className="text-[10px] text-[#71717A]">kg</span>
                                      </span>
                                      <button
                                        onClick={() => handleUpdateStepper(currentPlan.id, exIdx, setIdx, 'weight', 2.5, setVal)}
                                        className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                        title="Add 2.5 kg"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                  )}

                                  {/* Reps or Seconds Stepper */}
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-[#71717A] uppercase font-bold hidden sm:inline">
                                      {isTime ? 'SECS' : 'REPS'}
                                    </span>
                                    <button
                                      onClick={() => handleUpdateStepper(currentPlan.id, exIdx, setIdx, 'reps', isTime ? -5 : -1, setVal)}
                                      className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                      title={isTime ? "Subtract 5 seconds" : "Subtract 1 rep"}
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="w-10 text-center text-xs font-mono font-bold text-[#F4F4F5]">
                                      {setVal.reps} <span className="text-[10px] text-[#71717A]">{isTime ? 's' : ''}</span>
                                    </span>
                                    <button
                                      onClick={() => handleUpdateStepper(currentPlan.id, exIdx, setIdx, 'reps', isTime ? 5 : 1, setVal)}
                                      className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                      title={isTime ? "Add 5 seconds" : "Add 1 rep"}
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>

                                  {/* Checkbox Triggering Rest Timer HUD */}
                                  <button
                                    onClick={() => handleToggleSet(currentPlan.id, exIdx, setIdx, item.restSec)}
                                    className={`w-8 h-8 flex items-center justify-center border transition-all ${
                                      setVal.checked
                                        ? 'bg-[#C8FF00] border-[#C8FF00] text-[#0D0D0F]'
                                        : 'bg-[#18181B] border-[#27272A] text-transparent hover:border-[#C8FF00]/60'
                                    }`}
                                    title={setVal.checked ? "Completed! Click to uncheck" : "Click to mark set completed & start rest timer"}
                                  >
                                    <Check className="w-4 h-4 stroke-[3]" />
                                  </button>

                                </div>
                              );
                            })}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cardio & Recovery Finisher Box */}
            {currentPlan.finisher && (
              <div className="bg-[#18181B] border border-[#27272A] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black text-[#C8FF00] uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-4 h-4" /> POST-WORKOUT CARDIO &amp; DECOMPRESSION FINISHER
                  </div>
                  <h4 className="text-xl font-heading text-[#F4F4F5] mt-1">
                    {currentPlan.finisher.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1 max-w-2xl">
                    {currentPlan.finisher.protocol}
                  </p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="text-[11px] font-bold text-[#A1A1AA] block uppercase">Fat Oxidation Impact</span>
                  <span className="text-xs text-[#C8FF00] font-bold block max-w-xs sm:ml-auto">
                    {currentPlan.finisher.benefit}
                  </span>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
