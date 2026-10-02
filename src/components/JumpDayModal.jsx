import React, { useState } from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';
import { playTick, playSuccessChime } from '../utils/audio';

export default function JumpDayModal({ isOpen, onClose, onJump, soundEnabled }) {
  const [inputVal, setInputVal] = useState('1');

  if (!isOpen) return null;

  const handleJump = (d) => {
    if (soundEnabled) playSuccessChime();
    onJump(d);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const d = parseInt(inputVal, 10);
    if (d >= 1 && d <= 100) {
      handleJump(d);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#18181B] border border-[#27272A] max-w-sm w-full p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A]">
          <h3 className="text-lg font-heading text-[#F4F4F5] uppercase flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#C8FF00]" />
            Jump to Workout Day
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-[#71717A] hover:text-[#F4F4F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#A1A1AA] mb-4">
          Select a major transformation milestone or enter any specific day (1 to 100):
        </p>

        {/* Milestone Quick Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => handleJump(1)}
            className="p-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
          >
            Day 1 (Foundation)
          </button>
          <button
            onClick={() => handleJump(31)}
            className="p-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
          >
            Day 31 (Phase 2)
          </button>
          <button
            onClick={() => handleJump(66)}
            className="p-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
          >
            Day 66 (Phase 3)
          </button>
          <button
            onClick={() => handleJump(100)}
            className="p-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
          >
            Day 100 (Peak Shred)
          </button>
        </div>

        {/* Custom Input */}
        <form onSubmit={handleCustomSubmit} className="flex gap-2">
          <input
            type="number"
            min="1"
            max="100"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Day (1-100)"
            className="flex-1 px-3 py-2 bg-[#0D0D0F] border border-[#27272A] text-sm font-bold font-mono text-center text-[#F4F4F5] focus:outline-none focus:border-[#C8FF00]"
          />
          <button
            type="submit"
            className="btn-iron-primary text-xs px-5 py-2"
          >
            Go
          </button>
        </form>

      </div>
    </div>
  );
}
