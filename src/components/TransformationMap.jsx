import React, { useState } from 'react';
import { WORKOUT_DAYS } from '../data/gymData';
import { 
  Calendar, 
  Check, 
  Flame, 
  Lock, 
  Zap, 
  Filter, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { playTick } from '../utils/audio';

export default function TransformationMap({ 
  currentDay, 
  completedDays = [], 
  onSelectDay,
  soundEnabled 
}) {
  const [phaseFilter, setPhaseFilter] = useState('all'); // 'all' | '1' | '2' | '3' | 'completed' | 'gym' | 'home'

  const filteredDays = WORKOUT_DAYS.filter((d) => {
    if (phaseFilter === '1') return d.phase === 1;
    if (phaseFilter === '2') return d.phase === 2;
    if (phaseFilter === '3') return d.phase === 3;
    if (phaseFilter === 'completed') return completedDays.includes(d.day);
    if (phaseFilter === 'gym') return d.type === 'gym';
    if (phaseFilter === 'home') return d.type === 'home';
    return true;
  });

  const percentComplete = Math.round((completedDays.length / 100) * 100);

  const handleDayClick = (d) => {
    if (soundEnabled) playTick();
    onSelectDay(d);
  };

  return (
    <section className="py-12 bg-[#0D0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header & Overall 100-Day Progress Bar */}
        <div className="bg-[#18181B] border border-[#27272A] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#27272A]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D0F] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Complete 100-Day Curriculum
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading text-[#F4F4F5] uppercase tracking-tight">
                100-DAY ATHLETIC <span className="text-[#C8FF00]">TRANSFORMATION MAP</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mt-1">
                Your complete 100-day autonomous blueprint. Click on any day to inspect its full routine, exercises, target weights, and room alternatives.
              </p>
            </div>

            {/* Overall Progress Stats */}
            <div className="flex items-center gap-4 bg-[#0D0D0F] border border-[#27272A] p-4">
              <div className="text-center">
                <div className="text-xs text-[#A1A1AA] uppercase font-bold">Completed</div>
                <div className="text-2xl font-black font-heading text-[#C8FF00] mt-0.5">
                  {completedDays.length} / 100
                </div>
              </div>
              <div className="h-8 w-px bg-[#27272A]" />
              <div className="text-center">
                <div className="text-xs text-[#A1A1AA] uppercase font-bold">Progress</div>
                <div className="text-2xl font-black font-heading text-[#F4F4F5] mt-0.5">
                  {percentComplete}%
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar Line */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-[#A1A1AA] font-bold uppercase mb-2">
              <span>Phase 1 (Days 1–30)</span>
              <span>Phase 2 (Days 31–65)</span>
              <span>Phase 3 (Days 66–100)</span>
            </div>
            <div className="w-full h-3 bg-[#0D0D0F] border border-[#27272A] overflow-hidden">
              <div 
                className="h-full bg-[#C8FF00] transition-all duration-500 shadow-[0_0_12px_rgba(200,255,0,0.5)]"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-[#27272A]">
            <span className="text-xs font-bold text-[#71717A] uppercase mr-2">Filter Roadmap:</span>
            {[
              { id: 'all', label: 'All 100 Days' },
              { id: '1', label: 'Phase 1: Foundation (1–30)' },
              { id: '2', label: 'Phase 2: V-Taper (31–65)' },
              { id: '3', label: 'Phase 3: Peak Shred (66–100)' },
              { id: 'gym', label: '🏋️ Gym Days Only' },
              { id: 'home', label: '🏠 Room Days Only' },
              { id: 'completed', label: `✓ Completed (${completedDays.length})` }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setPhaseFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-heading font-black tracking-wider uppercase transition-colors border ${
                  phaseFilter === f.id
                    ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                    : 'bg-[#0D0D0F] text-[#A1A1AA] border-[#27272A] hover:text-[#F4F4F5]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 100 Days Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2">
          {filteredDays.map((d) => {
            const isCurrent = d.day === currentDay;
            const isDone = completedDays.includes(d.day);

            return (
              <button
                key={d.day}
                onClick={() => handleDayClick(d.day)}
                className={`p-3 text-left border flex flex-col justify-between min-h-[92px] transition-all duration-200 group ${
                  isCurrent
                    ? 'bg-[#C8FF00] border-[#C8FF00] text-[#0D0D0F] shadow-[0_0_15px_rgba(200,255,0,0.3)] transform -translate-y-1'
                    : (isDone
                        ? 'bg-[#18181B] border-[#C8FF00]/40 text-[#F4F4F5]'
                        : 'bg-[#121215] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46] hover:bg-[#18181B]')
                }`}
                title={`Day ${d.day}: ${d.title}`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-black uppercase ${isCurrent ? 'text-[#0D0D0F]' : 'text-[#71717A]'}`}>
                    {d.dayName ? d.dayName.slice(0, 3) : ''}
                  </span>
                  {isDone ? (
                    <Check className={`w-3.5 h-3.5 stroke-[3] ${isCurrent ? 'text-[#0D0D0F]' : 'text-emerald-400'}`} />
                  ) : (
                    <span className={`text-[9px] font-bold ${isCurrent ? 'text-[#0D0D0F]' : 'text-[#71717A]'}`}>
                      {d.type === 'home' ? '🏠' : '🏋️'}
                    </span>
                  )}
                </div>

                <div>
                  <div className={`text-xl font-heading font-black leading-none ${isCurrent ? 'text-[#0D0D0F]' : 'text-[#F4F4F5]'}`}>
                    {d.day}
                  </div>
                  <div className={`text-[9px] font-bold truncate mt-1 ${isCurrent ? 'text-[#0D0D0F]' : 'text-[#A1A1AA]'}`}>
                    {d.title.split(' ')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
