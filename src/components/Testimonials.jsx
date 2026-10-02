import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, TrendingDown, ArrowRight } from 'lucide-react';

export default function Testimonials({ onOpenTrialModal }) {
  return (
    <section className="py-20 bg-[#0D0D0F] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#C8FF00] stroke-none" />
            Verified Member Transformations
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            REAL MEMBERS. <span className="text-[#C8FF00]">REAL RESULTS.</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-2">
            See how real beginners and corporate athletes reversed skinny-fat belly bulge and built explosive turf agility.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.name}
              className="bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8FF00] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C8FF00] gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8FF00] stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#0D0D0F] text-[#C8FF00] border border-[#C8FF00]/40">
                    {item.tag}
                  </span>
                </div>

                <div className="p-3 bg-[#0D0D0F] border border-[#27272A] mb-4">
                  <div className="text-xs font-bold text-[#C8FF00] uppercase tracking-wide flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" />
                    {item.achievement}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#27272A] mt-6 flex items-center justify-between">
                <div>
                  <div className="text-base font-heading text-[#F4F4F5] uppercase">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#71717A]">
                    Age {item.age} • Active Member
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00]">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-heading text-[#F4F4F5] uppercase">
              Ready to Cinch Your Waist &amp; Unleash Your Agility?
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Join over 2,800 members executing the Iron recomposition protocol today.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="btn-iron-primary text-sm px-6 py-3 whitespace-nowrap"
          >
            <span>Start Free Trial Pass</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
