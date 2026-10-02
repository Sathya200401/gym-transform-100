import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/gymData';
import { Check, Zap, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenTrialModal }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-[#0D0D0F] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Transparent Memberships
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            MEMBERSHIP <span className="text-[#C8FF00]">TIERS</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-2">
            No lock-in contracts. 24/7 keycard access, unlimited agility turf and belly shred classes.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-[#18181B] border border-[#27272A] mt-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-xs font-heading font-black tracking-wider uppercase transition-colors ${
                !isAnnual 
                  ? 'bg-[#C8FF00] text-[#0D0D0F]' 
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-xs font-heading font-black tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
                isAnnual 
                  ? 'bg-[#C8FF00] text-[#0D0D0F]' 
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-[#0D0D0F] text-[#C8FF00] px-1.5 py-0.5 font-bold border border-[#C8FF00]/40">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tiers Grid (Middle One Highlighted) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#18181B] border-2 border-[#C8FF00] shadow-[0_0_35px_rgba(200,255,0,0.18)] lg:-translate-y-3 z-10'
                    : 'bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46]'
                } p-8`}
              >
                {/* Popular Highlight Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#C8FF00] text-[#0D0D0F] text-xs font-heading font-black tracking-widest uppercase px-4 py-1">
                    {tier.popularBadge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-heading text-[#F4F4F5] uppercase">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] mt-1">
                        {tier.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="py-6 border-y border-[#27272A] my-6 flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-black font-heading text-[#F4F4F5]">
                      ${price}
                    </span>
                    <span className="text-sm font-bold text-[#A1A1AA] uppercase">
                      / month {isAnnual && <span className="text-[#C8FF00] block text-xs">(billed annually)</span>}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pb-8">
                    <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-wider mb-2">
                      Included Privileges:
                    </div>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#E4E4E7]">
                        <Check className="w-4 h-4 text-[#C8FF00] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4 border-t border-[#27272A]">
                  <button
                    onClick={onOpenTrialModal}
                    className={`w-full py-4 text-base font-heading font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#C8FF00] hover:bg-[#b5e600] text-[#0D0D0F] shadow-[0_0_20px_rgba(200,255,0,0.3)]'
                        : 'bg-[#0D0D0F] hover:bg-[#27272A] text-[#F4F4F5] border border-[#27272A]'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center text-[10px] text-[#71717A] mt-2">
                    Instant activation • Cancel anytime online
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
