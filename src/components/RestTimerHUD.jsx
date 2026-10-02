import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FastForward, Plus, Timer, X, Volume2 } from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function RestTimerHUD({ 
  restTime, 
  initialTime = 60,
  isActive, 
  onTimeChange, 
  onToggleActive, 
  onReset,
  soundEnabled 
}) {
  const [minimized, setMinimized] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && restTime > 0) {
      interval = setInterval(() => {
        onTimeChange(prev => {
          if (prev <= 1) {
            if (soundEnabled) playSuccessChime();
            onToggleActive(false);
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
  }, [isActive, restTime, soundEnabled]);

  // Circumference for 64px circle with r=28
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = initialTime > 0 ? (restTime / initialTime) * circumference : 0;

  const minutes = Math.floor(restTime / 60);
  const seconds = restTime % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const setPreset = (sec) => {
    if (soundEnabled) playTick();
    onReset(sec);
    onToggleActive(true);
  };

  const add15 = () => {
    if (soundEnabled) playTick();
    onTimeChange(prev => prev + 15);
  };

  if (minimized) {
    return (
      <div 
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 z-50 bg-[#18181B] border border-[#C8FF00] p-3 shadow-2xl cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
        title="Click to expand rest timer"
      >
        <Timer className="w-5 h-5 text-[#C8FF00] animate-pulse" />
        <span className="font-mono font-bold text-sm text-[#F4F4F5]">{formattedTime}</span>
      </div>
    );
  }

  return (
    <aside 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#18181B] border-2 border-[#27272A] p-4 shadow-2xl max-w-xs w-full transition-all duration-300"
      aria-label="Workout Rest Timer"
    >
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#27272A]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#C8FF00] inline-block animate-ping" />
          <span className="text-[11px] font-heading font-black tracking-wider text-[#F4F4F5] uppercase">
            REST TIMER HUD
          </span>
        </div>
        <button
          onClick={() => setMinimized(true)}
          className="p-1 text-[#71717A] hover:text-[#F4F4F5]"
          title="Minimize timer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* SVG Circular Progress Ring */}
        <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              stroke="#27272A"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="32"
              cy="32"
            />
            <circle
              stroke="#C8FF00"
              strokeWidth="4"
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="32"
              cy="32"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference - progress,
                transition: 'stroke-dashoffset 1s linear'
              }}
            />
          </svg>
          <div className="absolute font-mono font-black text-xs text-[#F4F4F5]">
            {formattedTime}
          </div>
        </div>

        {/* Controls & Presets */}
        <div className="flex-1 space-y-2">
          {/* Preset Buttons */}
          <div className="grid grid-cols-4 gap-1">
            {[30, 60, 90].map(s => (
              <button
                key={s}
                onClick={() => setPreset(s)}
                className="py-1 text-[10px] font-mono font-bold bg-[#0D0D0F] hover:bg-[#27272A] border border-[#27272A] text-[#A1A1AA] hover:text-[#C8FF00]"
              >
                {s}s
              </button>
            ))}
            <button
              onClick={add15}
              className="py-1 text-[10px] font-mono font-bold bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] border border-[#27272A] text-[#C8FF00]"
              title="Add 15 seconds"
            >
              +15s
            </button>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-1.5 pt-1">
            <button
              onClick={() => onToggleActive(!isActive)}
              className="flex-1 py-1.5 bg-[#C8FF00] text-[#0D0D0F] font-heading font-black text-xs uppercase flex items-center justify-center gap-1"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-[#0D0D0F]" />}
              <span>{isActive ? 'Pause' : 'Start'}</span>
            </button>
            <button
              onClick={() => onReset(60)}
              className="p-1.5 bg-[#0D0D0F] hover:bg-[#27272A] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5]"
              title="Reset timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
