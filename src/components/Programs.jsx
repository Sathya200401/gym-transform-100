import React from 'react';
import { PROGRAMS } from '../data/gymData';
import { Dumbbell, Flame, Zap, Shield, ArrowRight } from 'lucide-react';

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Zap: Zap,
  Shield: Shield
};

export default function Programs({ onOpenTrialModal }) {
  return (
    <section id="programs" className="py-20 bg-[#0D0D0F] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Specialized Disciplines
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
              CORE CLUB <span className="text-[#C8FF00]">PROGRAMS</span>
            </h2>
            <p className="text-base text-[#A1A1AA] max-w-xl mt-2">
              Four elite pillars designed to fuse heavy compound power with light-footed speed and a chiseled flat core.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="btn-iron-secondary text-sm px-6 py-3 whitespace-nowrap self-start md:self-auto"
          >
            <span>Claim 7-Day Class Pass</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => {
            const IconComponent = iconMap[prog.icon] || Zap;

            return (
              <div 
                key={prog.id}
                className="bg-[#18181B] border border-[#27272A] p-6 flex flex-col justify-between group hover:border-[#C8FF00] hover:shadow-[0_0_20px_rgba(200,255,0,0.15)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#0D0D0F] transition-colors duration-200">
                      <IconComponent className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#0D0D0F] text-[#A1A1AA] border border-[#27272A]">
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading text-[#F4F4F5] uppercase mb-2 group-hover:text-[#C8FF00] transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272A] space-y-2">
                  <div className="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">
                    Key Performance Indicators:
                  </div>
                  {prog.metrics.map((m, i) => (
                    <div key={i} className="text-xs font-semibold text-[#F4F4F5] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#C8FF00] inline-block" />
                      {m}
                    </div>
                  ))}

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full mt-4 py-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] text-[#F4F4F5] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
                  >
                    Try Free Class
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
