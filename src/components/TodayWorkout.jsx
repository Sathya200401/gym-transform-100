import React, { useState } from 'react';
import { 
  WORKOUT_DAYS, 
  EXERCISE_LIBRARY 
} from '../data/gymData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  Zap, 
  Check, 
  Plus, 
  Minus, 
  Info, 
  Clock, 
  RotateCcw,
  Sparkles,
  Shield,
  Activity,
  Calendar,
  Layers,
  Home,
  Building2
} from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function TodayWorkout({ 
  currentDay, 
  onChangeDay, 
  onSelectExercise, 
  onStartRestTimer,
  onCompleteDay,
  completedDays = [],
  modeOverrides = {},
  onToggleModeOverride,
  loggedSets = {},
  onUpdateLoggedSet,
  soundEnabled
}) {
  const [checkedWarmups, setCheckedWarmups] = useState({});

  const dayIndex = Math.max(1, Math.min(100, currentDay)) - 1;
  const dayData = WORKOUT_DAYS[dayIndex] || WORKOUT_DAYS[0];

  const currentMode = modeOverrides[currentDay] || dayData.type; // 'gym' or 'home'
  const isCompleted = completedDays.includes(currentDay);

  // Week days calculation for 7-day scrubber
  const currentWeek = dayData.week;
  const weekStartDay = (currentWeek - 1) * 7 + 1;
  const weekDays = [0, 1, 2, 3, 4, 5, 6].map(i => weekStartDay + i).filter(d => d <= 100);

  const toggleWarmup = (idx) => {
    if (soundEnabled) playTick();
    const key = `${currentDay}_warmup_${idx}`;
    setCheckedWarmups(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleToggleSet = (exId, setIdx, restSec) => {
    const key = `${currentDay}_${exId}_${setIdx}`;
    const current = loggedSets[key] || { checked: false };
    const nextChecked = !current.checked;

    onUpdateLoggedSet(key, {
      ...current,
      checked: nextChecked
    });

    if (nextChecked) {
      if (soundEnabled) playSuccessChime();
      if (onStartRestTimer) {
        onStartRestTimer(restSec || 60);
      }
    } else {
      if (soundEnabled) playTick();
    }
  };

  const handleUpdateStepper = (exId, setIdx, field, delta, fallbackVal) => {
    if (soundEnabled) playTick();
    const key = `${currentDay}_${exId}_${setIdx}`;
    const current = loggedSets[key] || { 
      checked: false, 
      weight: fallbackVal.weight || '10', 
      reps: fallbackVal.reps || '12' 
    };

    let val = parseFloat(current[field]) || 0;
    val = Math.max(0, val + delta);

    const formatted = field === 'weight' ? (val % 1 === 0 ? val.toString() : val.toFixed(1)) : Math.round(val).toString();

    onUpdateLoggedSet(key, {
      ...current,
      [field]: formatted
    });
  };

  const getSetValues = (exId, setIdx) => {
    const key = `${currentDay}_${exId}_${setIdx}`;
    const logged = loggedSets[key];
    if (logged) {
      return {
        checked: logged.checked || false,
        weight: logged.weight || '10',
        reps: logged.reps || '12'
      };
    }
    return {
      checked: false,
      weight: '10',
      reps: '12'
    };
  };

  // Determine exercises to render (gym vs room routine)
  const isRoomMode = currentMode === 'home';
  const exercisesToRender = isRoomMode && dayData.roomRoutine 
    ? dayData.roomRoutine.exercises 
    : dayData.exercises;

  return (
    <section className="py-8 bg-[#0D0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* ================================================================== */}
        {/* 1. TOP 7-DAY WEEK SCRUBBER & DAY JUMP CONTROLS                     */}
        {/* ================================================================== */}
        <div className="bg-[#18181B] border border-[#27272A] p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#27272A]">
            
            {/* Week & Phase Title */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#C8FF00]">
                  WEEK {dayData.week} OF 15
                </span>
                <span className="text-[#3F3F46]">•</span>
                <span className="text-xs text-[#A1A1AA] uppercase font-bold tracking-wider">
                  {dayData.phaseName}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading text-[#F4F4F5] uppercase tracking-wide mt-0.5">
                DAY {dayData.day}: {dayData.dayName.toUpperCase()} — {dayData.title}
              </h2>
            </div>

            {/* Prev / Next Day Stepper */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={() => onChangeDay(Math.max(1, currentDay - 1))}
                disabled={currentDay <= 1}
                className="px-3 py-2 bg-[#0D0D0F] hover:bg-[#27272A] disabled:opacity-30 disabled:pointer-events-none text-[#F4F4F5] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase flex items-center gap-1"
                aria-label="Previous Day"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Day</span>
              </button>

              <button
                onClick={() => onChangeDay(Math.min(100, currentDay + 1))}
                disabled={currentDay >= 100}
                className="px-3 py-2 bg-[#0D0D0F] hover:bg-[#27272A] disabled:opacity-30 disabled:pointer-events-none text-[#F4F4F5] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase flex items-center gap-1"
                aria-label="Next Day"
              >
                <span>Next Day</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* 7-Day Carousel Scrubber */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
            {weekDays.map((dNum) => {
              const dObj = WORKOUT_DAYS[dNum - 1] || {};
              const isSelected = dNum === currentDay;
              const isDayCompleted = completedDays.includes(dNum);

              return (
                <button
                  key={dNum}
                  onClick={() => onChangeDay(dNum)}
                  className={`p-2 sm:p-3 border transition-all ${
                    isSelected
                      ? 'bg-[#C8FF00] border-[#C8FF00] text-[#0D0D0F] shadow-[0_0_15px_rgba(200,255,0,0.3)]'
                      : (isDayCompleted 
                          ? 'bg-[#18181B] border-[#C8FF00]/40 text-[#F4F4F5]' 
                          : 'bg-[#0D0D0F] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46]')
                  }`}
                >
                  <div className="text-[10px] font-black uppercase tracking-wider">
                    {dObj.dayName ? dObj.dayName.slice(0, 3) : ''}
                  </div>
                  <div className={`text-base sm:text-xl font-heading font-black mt-0.5 ${isSelected ? 'text-[#0D0D0F]' : 'text-[#F4F4F5]'}`}>
                    {dNum}
                  </div>
                  <div className="text-[9px] font-bold mt-1 uppercase flex items-center justify-center gap-0.5">
                    {isDayCompleted ? (
                      <span className="text-emerald-400 font-bold">✓ DONE</span>
                    ) : (
                      <span>{dObj.type === 'home' ? '🏠 ROOM' : '🏋️ GYM'}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================== */}
        {/* 2. POSTURE & BIOMECHANICS COACH TIP (NO TRAINER NEEDED)             */}
        {/* ================================================================== */}
        <div className="bg-[#18181B] border-l-4 border-[#C8FF00] border-y border-r border-[#27272A] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] flex-shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-[#C8FF00] uppercase tracking-wider">
                  TODAY'S BIOMECHANICS &amp; POSTURE COACH TIP (ZERO TRAINER DEPENDENCY)
                </div>
                <p className="text-xs sm:text-sm text-[#F4F4F5] mt-1 leading-relaxed max-w-4xl">
                  {dayData.postureTip}
                </p>
              </div>
            </div>

            {/* Gym ↔ Room Routine Switcher Toggle */}
            {dayData.roomRoutine && (
              <button
                onClick={() => onToggleModeOverride(currentDay)}
                className="px-4 py-2 bg-[#0D0D0F] hover:bg-[#27272A] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase text-[#C8FF00] whitespace-nowrap self-start sm:self-center flex items-center gap-1.5"
              >
                {isRoomMode ? (
                  <>
                    <Building2 className="w-4 h-4" />
                    <span>Switch to Gym Mode</span>
                  </>
                ) : (
                  <>
                    <Home className="w-4 h-4" />
                    <span>Switch to Room Mode</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ================================================================== */}
        {/* 3. DYNAMIC WARM-UP CHECKLIST                                       */}
        {/* ================================================================== */}
        {dayData.warmup && dayData.warmup.length > 0 && (
          <div className="bg-[#18181B] border border-[#27272A] p-5 sm:p-6">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#C8FF00]" />
                <h3 className="text-lg font-heading text-[#F4F4F5] uppercase tracking-wide">
                  MANDATORY JOINT WARM-UP &amp; HIP ACTIVATION
                </h3>
              </div>
              <span className="text-[11px] text-[#A1A1AA] font-bold">
                5-7 mins • Prepares joints &amp; prevents injury
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {dayData.warmup.map((w, idx) => {
                const key = `${currentDay}_warmup_${idx}`;
                const isChecked = checkedWarmups[key];

                return (
                  <button
                    key={idx}
                    onClick={() => toggleWarmup(idx)}
                    className={`p-3 text-left border flex items-center justify-between transition-colors ${
                      isChecked
                        ? 'bg-[#0D0D0F] border-[#C8FF00]/40 text-[#C8FF00]'
                        : 'bg-[#121215] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#F4F4F5]">{w.name}</div>
                      <div className="text-[11px] text-[#71717A] mt-0.5">{w.reps}</div>
                    </div>
                    <div className={`w-5 h-5 border flex items-center justify-center ${
                      isChecked ? 'bg-[#C8FF00] border-[#C8FF00] text-[#0D0D0F]' : 'border-[#27272A]'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* 4. MAIN EXERCISES LIST (WITH HIGH RES SVG ARTWORK & STEPPERS)       */}
        {/* ================================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-heading text-[#F4F4F5] uppercase tracking-wide">
              {isRoomMode ? 'ROOM WORKOUT PROTOCOL (0 EQUIPMENT)' : 'MAIN RESISTANCE LIFTS & CORE PROTOCOL'}
            </h3>
            <span className="text-xs text-[#C8FF00] font-bold">
              {exercisesToRender.length} Exercises Scheduled
            </span>
          </div>

          {exercisesToRender.map((item, exIdx) => {
            const ex = EXERCISE_LIBRARY[item.id];
            if (!ex) return null;

            return (
              <div 
                key={item.id}
                className="bg-[#18181B] border border-[#27272A] p-5 sm:p-6 hover:border-[#2E2E33] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Exercise Image & Information */}
                  <div className="lg:col-span-5 flex items-start sm:items-center gap-4">
                    
                    {/* SVG Vector Exercise Diagram */}
                    <div
                      onClick={() => onSelectExercise(ex)}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0D0D0F] border border-[#27272A] flex-shrink-0 p-2 cursor-pointer group relative overflow-hidden flex items-center justify-center hover:border-[#C8FF00] transition-colors"
                      title="Click to view technique diagram & biomechanics"
                    >
                      <img
                        src={ex.image}
                        alt={ex.name}
                        className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 text-[8px] bg-[#C8FF00] text-[#0D0D0F] font-black px-1 uppercase">
                        DIAGRAM
                      </span>
                    </div>

                    {/* Exercise Info */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#C8FF00]">
                          EXERCISE {exIdx + 1}
                        </span>
                        <span className="text-[#3F3F46]">•</span>
                        <span className="text-[10px] font-bold text-[#A1A1AA] uppercase">
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
                        {ex.postureBenefit}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-semibold text-[#A1A1AA]">
                        <span className="text-[#F4F4F5]">🎯 {item.sets} Sets × {item.reps}</span>
                        <span>⏱️ {item.rest}s Rest</span>
                        <span className="text-[#C8FF00]">Scale: {item.targetWeight}</span>
                      </div>

                      <button
                        onClick={() => onSelectExercise(ex)}
                        className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[#C8FF00] hover:underline flex items-center gap-1"
                      >
                        <span>Inspect Form Guide &amp; 30s Drill</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                  {/* Right: Interactive Steppers for Sets, Weights, and Reps */}
                  <div className="lg:col-span-7">
                    <div className="bg-[#0D0D0F] border border-[#27272A] p-3 sm:p-4">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider pb-2 border-b border-[#27272A] mb-3">
                        <span>Set Logging (Locked 2.5kg Baseline)</span>
                        <span className="text-[#C8FF00]">Check = Auto Rest Countdown</span>
                      </div>

                      <div className="space-y-2">
                        {[...Array(item.sets)].map((_, setIdx) => {
                          const setVal = getSetValues(item.id, setIdx);

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

                              {/* Weight Stepper (2.5kg increments) */}
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-[#71717A] uppercase font-bold hidden sm:inline">
                                  KG
                                </span>
                                <button
                                  onClick={() => handleUpdateStepper(item.id, setIdx, 'weight', -2.5, setVal)}
                                  className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                  title="Subtract 2.5 kg"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-12 text-center text-xs font-mono font-bold text-[#F4F4F5]">
                                  {setVal.weight} <span className="text-[10px] text-[#71717A]">kg</span>
                                </span>
                                <button
                                  onClick={() => handleUpdateStepper(item.id, setIdx, 'weight', 2.5, setVal)}
                                  className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                  title="Add 2.5 kg"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              {/* Reps Stepper */}
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-[#71717A] uppercase font-bold hidden sm:inline">
                                  REPS
                                </span>
                                <button
                                  onClick={() => handleUpdateStepper(item.id, setIdx, 'reps', -1, setVal)}
                                  className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                  title="Subtract 1 rep"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-10 text-center text-xs font-mono font-bold text-[#F4F4F5]">
                                  {setVal.reps}
                                </span>
                                <button
                                  onClick={() => handleUpdateStepper(item.id, setIdx, 'reps', 1, setVal)}
                                  className="w-7 h-7 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#F4F4F5] flex items-center justify-center text-xs font-bold"
                                  title="Add 1 rep"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              {/* Set Checkbox Triggering Rest Timer HUD */}
                              <button
                                onClick={() => handleToggleSet(item.id, setIdx, item.rest)}
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

        {/* ================================================================== */}
        {/* 5. POST-WORKOUT CARDIO FINISHER & COOLDOWN                         */}
        {/* ================================================================== */}
        {dayData.cardioFinisher && (
          <div className="bg-[#18181B] border border-[#27272A] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-black text-[#C8FF00] uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> POST-WORKOUT VISCERAL FAT CARDIO FINISHER
              </div>
              <h4 className="text-xl font-heading text-[#F4F4F5] mt-1">
                {dayData.cardioFinisher.name}
              </h4>
              <p className="text-xs text-[#A1A1AA] mt-1 max-w-2xl">
                {dayData.cardioFinisher.protocol}
              </p>
            </div>
            <div className="sm:text-right flex-shrink-0">
              <span className="text-[11px] font-bold text-[#A1A1AA] block uppercase">Fat Oxidation Impact</span>
              <span className="text-xs text-[#C8FF00] font-bold block max-w-xs sm:ml-auto">
                {dayData.cardioFinisher.benefit}
              </span>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* 6. COMPLETE DAY WORKOUT CTA                                         */}
        {/* ================================================================== */}
        <div className="p-6 bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-heading text-[#F4F4F5] uppercase">
              {isCompleted ? `🎉 DAY ${currentDay} CRUSHED & LOGGED!` : `READY TO LOCK IN DAY ${currentDay}?`}
            </h4>
            <p className="text-xs text-[#A1A1AA]">
              {isCompleted 
                ? "You have already completed this session. Advance to tomorrow's workout to keep your streak!" 
                : "Checking all sets and logging finishes this day on your 100-Day Recomposition Map."}
            </p>
          </div>

          <button
            onClick={() => onCompleteDay(currentDay)}
            className={`btn-iron-primary text-sm px-8 py-3.5 whitespace-nowrap ${
              isCompleted ? 'bg-emerald-400 text-[#0D0D0F]' : ''
            }`}
          >
            <Check className="w-5 h-5 mr-1 stroke-[3]" />
            <span>{isCompleted ? `Day ${currentDay} Completed ✓` : `Complete Day ${currentDay} Workout`}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
