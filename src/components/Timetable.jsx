import React, { useState } from 'react';
import { TIMETABLE_CLASSES } from '../data/gymData';
import { Calendar, Clock, Flame, User, Check, ArrowRight } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const categories = ['All', 'Agility', 'Core', 'Strength', 'Combat', 'Mobility'];

export default function Timetable({ onOpenTrialModal }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClasses = TIMETABLE_CLASSES.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="timetable" className="py-20 bg-[#121215] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Live Training Schedule
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
              CLASS <span className="text-[#C8FF00]">TIMETABLE</span>
            </h2>
            <p className="text-base text-[#A1A1AA] max-w-xl mt-2">
              Book high-energy turf agility, belly shred TVA conditioning, and heavy powerlifting sessions.
            </p>
          </div>

          <div className="text-xs font-bold text-[#A1A1AA] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#C8FF00] inline-block animate-pulse" />
            <span>24/7 Free Floor Access Between Classes</span>
          </div>
        </div>

        {/* Day Selector Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 text-xs font-heading font-black tracking-wider uppercase transition-colors whitespace-nowrap border ${
                selectedDay === day
                  ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                  : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:border-[#C8FF00]/50 hover:text-[#F4F4F5]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-[#71717A] uppercase mr-2">Discipline:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#27272A] text-[#C8FF00] border border-[#C8FF00]/40'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Class Slots Grid */}
        <div className="bg-[#18181B] border border-[#27272A] divide-y divide-[#27272A]">
          {filteredClasses.map((cls, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1E1E22] transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-24 text-sm font-mono font-bold text-[#C8FF00] flex items-center gap-1.5 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                  {cls.time}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#0D0D0F] text-[#A1A1AA] border border-[#27272A]">
                      {cls.category}
                    </span>
                    <span className="text-xs text-[#71717A] font-bold">
                      {cls.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-[#F4F4F5] uppercase tracking-wide">
                    {cls.name}
                  </h3>
                  <div className="text-xs text-[#A1A1AA] flex items-center gap-2 mt-0.5">
                    <User className="w-3.5 h-3.5 text-[#C8FF00]" /> Coach: {cls.coach}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className={`text-[11px] font-bold uppercase px-2.5 py-1 ${
                  cls.intensity === 'Extreme'
                    ? 'bg-rose-950/40 text-rose-400 border border-rose-800/40'
                    : (cls.intensity === 'Heavy' ? 'bg-amber-950/40 text-amber-400 border border-amber-800/40' : 'bg-[#0D0D0F] text-[#C8FF00] border border-[#C8FF00]/30')
                }`}>
                  {cls.intensity} Intensity
                </span>

                <button
                  onClick={onOpenTrialModal}
                  className="px-4 py-2 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] text-[#F4F4F5] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
