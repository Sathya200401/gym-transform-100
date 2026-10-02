import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Flame, Zap, ArrowRight, X } from 'lucide-react';
import { playVictoryFanfare } from '../utils/audio';

export default function CelebrationModal({ 
  isOpen, 
  onClose, 
  completedDay, 
  currentStreak,
  onNextDay,
  soundEnabled 
}) {
  useEffect(() => {
    if (isOpen) {
      if (soundEnabled) playVictoryFanfare();

      // Trigger high-voltage neon confetti explosion
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C8FF00', '#F4F4F5', '#18181B', '#38BDF8', '#10B981']
        });
      } catch (e) {}
    }
  }, [isOpen, soundEnabled]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#18181B] border-2 border-[#C8FF00] max-w-sm w-full p-6 sm:p-8 shadow-[0_0_35px_rgba(200,255,0,0.25)] relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#71717A] hover:text-[#F4F4F5]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 bg-[#0D0D0F] border border-[#C8FF00] text-[#C8FF00] mx-auto flex items-center justify-center mb-4">
          <Trophy className="w-8 h-8 stroke-[2.5]" />
        </div>

        <span className="text-[11px] font-black uppercase tracking-wider text-[#C8FF00] block mb-1">
          WORKOUT COMPLETED!
        </span>

        <h3 className="text-3xl font-heading text-[#F4F4F5] uppercase tracking-wide">
          DAY {completedDay} CRUSHED
        </h3>

        <p className="text-xs text-[#A1A1AA] mt-2 leading-relaxed">
          Outstanding work! You locked in your form, protected your joints, and strengthened your deep transverse core.
        </p>

        <div className="grid grid-cols-2 gap-3 my-6">
          <div className="p-3 bg-[#0D0D0F] border border-[#27272A]">
            <span className="text-[10px] font-bold text-[#71717A] uppercase block">Current Streak</span>
            <span className="text-lg font-black font-heading text-amber-400 mt-0.5 block flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" />
              {currentStreak} Days
            </span>
          </div>

          <div className="p-3 bg-[#0D0D0F] border border-[#27272A]">
            <span className="text-[10px] font-bold text-[#71717A] uppercase block">Est. Calorie Burn</span>
            <span className="text-lg font-black font-heading text-[#C8FF00] mt-0.5 block">
              ~380 kcal
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            if (onNextDay && completedDay < 100) {
              onNextDay(completedDay + 1);
            }
          }}
          className="btn-iron-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
        >
          <span>Advance to Day {Math.min(100, completedDay + 1)}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
