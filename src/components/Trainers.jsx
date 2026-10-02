import React from 'react';
import { TRAINERS } from '../data/gymData';
import { Award, Zap, Instagram, MessageCircle } from 'lucide-react';

export default function Trainers({ onOpenTrialModal }) {
  return (
    <section id="trainers" className="py-20 bg-[#121215] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Elite Coaching Staff
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            MEET YOUR <span className="text-[#C8FF00]">TRAINERS</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-2">
            No generic influencers. Certified sports scientists, national powerlifting competitors, and agility coaches dedicated to your recomposition.
          </p>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer, idx) => (
            <div 
              key={trainer.name}
              className="bg-[#18181B] border border-[#27272A] overflow-hidden group hover:border-[#C8FF00] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with uniform high-contrast color grade and lime accent border */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0D0D0F]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80" />
                  
                  {/* Specialty Tag overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 bg-[#0D0D0F]/90 text-[#C8FF00] border border-[#C8FF00]/40 inline-block backdrop-blur-sm">
                      {trainer.specialty}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-heading text-[#F4F4F5] uppercase leading-none group-hover:text-[#C8FF00] transition-colors">
                    {trainer.name}
                  </h3>
                  <div className="text-xs text-[#C8FF00] font-bold mt-1">
                    {trainer.role}
                  </div>
                  <div className="text-[11px] text-[#71717A] font-mono mt-0.5">
                    {trainer.credentials}
                  </div>
                  
                  <p className="text-xs text-[#A1A1AA] mt-3 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-2.5 bg-[#0D0D0F] hover:bg-[#C8FF00] hover:text-[#0D0D0F] text-[#F4F4F5] border border-[#27272A] text-xs font-heading font-black tracking-wider uppercase transition-colors"
                >
                  Book 1-on-1 Consult
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
