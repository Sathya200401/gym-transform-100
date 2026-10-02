import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, ShieldCheck, AlertTriangle, Lightbulb, Timer } from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function ExerciseModal({ exercise, onClose, soundEnabled }) {
  const [practiceActive, setPracticeActive] = useState(false);
  const [practiceSec, setPracticeSec] = useState(30);

  useEffect(() => {
    let interval = null;
    if (practiceActive && practiceSec > 0) {
      interval = setInterval(() => {
        setPracticeSec(prev => {
          if (prev <= 1) {
            if (soundEnabled) playSuccessChime();
            setPracticeActive(false);
            return 0;
          }
          if (prev <= 4 && prev > 1 && soundEnabled) {
            playTick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [practiceActive, practiceSec, soundEnabled]);

  if (!exercise) return null;

  const startDrill = () => {
    if (soundEnabled) playTick();
    setPracticeSec(30);
    setPracticeActive(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#18181B] border border-[#27272A] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#27272A]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#0D0D0F] text-[#C8FF00] border border-[#C8FF00]/40">
                {exercise.category}
              </span>
              <span className="text-xs text-[#71717A]">•</span>
              <span className="text-xs text-[#A1A1AA] font-bold">
                {exercise.equipment}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-[#F4F4F5] uppercase tracking-wide">
              {exercise.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#0D0D0F] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin">
          
          {/* High Resolution Vector Exercise Artwork */}
          <div className="aspect-[16/10] bg-[#0D0D0F] border border-[#27272A] p-6 flex items-center justify-center relative overflow-hidden">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-full object-contain filter brightness-95"
            />
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#71717A] uppercase">
              Target: <strong className="text-[#F4F4F5]">{exercise.target}</strong>
            </div>
          </div>

          {/* Posture & Recomposition Impact */}
          <div className="p-4 bg-[#0D0D0F] border-l-2 border-[#C8FF00] border-y border-r border-[#27272A]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C8FF00] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Posture &amp; Belly Fat Impact
            </div>
            <p className="text-xs sm:text-sm text-[#F4F4F5] mt-1 leading-relaxed">
              {exercise.postureBenefit}
            </p>
          </div>

          {/* Step-by-Step Biomechanics */}
          <div>
            <h4 className="text-base font-heading text-[#F4F4F5] uppercase mb-3">
              Step-by-Step Biomechanics Execution:
            </h4>
            <ol className="space-y-2.5">
              {exercise.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  <span className="w-5 h-5 bg-[#0D0D0F] border border-[#27272A] text-[#C8FF00] font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Pro Mind-Muscle Cue */}
          <div className="p-4 bg-[#0D0D0F] border border-[#27272A] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pro Mind-Muscle Connection Cue:
              </div>
              <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">
                {exercise.proTip}
              </p>
            </div>
          </div>

          {/* Common Beginner Mistake */}
          <div className="p-4 bg-rose-950/20 border border-rose-900/40 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Beginner Mistake to Avoid:
              </div>
              <p className="text-xs text-rose-200 mt-0.5 leading-relaxed">
                {exercise.mistake}
              </p>
            </div>
          </div>

          {/* 30s Practice Form Drill Timer */}
          <div className="p-4 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#C8FF00] font-mono font-black text-sm">
                {practiceSec}s
              </div>
              <div>
                <div className="text-xs font-bold text-[#F4F4F5] uppercase">
                  30-Second Practice Form Drill
                </div>
                <div className="text-[11px] text-[#71717A]">
                  Practice 1 slow set with light 2.5kg weights before logging
                </div>
              </div>
            </div>

            <button
              onClick={practiceActive ? () => setPracticeActive(false) : startDrill}
              className="btn-iron-primary text-xs px-4 py-2"
            >
              {practiceActive ? 'Pause' : 'Start 30s Drill'}
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#27272A] mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn-iron-secondary text-xs px-6 py-2.5"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
