import React from 'react';
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, Flame, Compass, Play } from 'lucide-react';

export default function Hero({ onOpenTrialModal }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0D0F]">
      {/* Background Graphic & Video/Poster with Accent-Tinted Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&auto=format&fit=crop&q=80"
          alt="Iron Strength & Agility Gym Floor"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.25] grayscale-[0.3]"
          fetchPriority="high"
        />
        {/* Dark Vignette & Industrial Diagonal Cuts Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/70 to-[#0D0D0F]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,255,0,0.12),transparent_65%)]" />
        {/* Subtle Diagonal Section Accent Slash */}
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#C8FF00]/5 to-transparent pointer-events-none transform skew-x-[-18deg] translate-x-32" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & Conversion Core */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Pill Badge matching Realtime Colors screenshot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#18181B] border border-[#27272A] rounded-none text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-none bg-[#C8FF00] animate-pulse" />
              <span>Strength Club</span>
              <span className="text-[#3F3F46]">•</span>
              <span className="text-[#F4F4F5]">24/7 Access</span>
              <span className="text-[#3F3F46]">•</span>
              <span className="text-[#C8FF00]">Powerlifting, CrossFit &amp; Agility</span>
            </div>

            {/* Massive Bold Athletic Condensed Headline */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#F4F4F5] tracking-tight leading-[0.88] uppercase">
              EARN EVERY <span className="text-[#C8FF00] inline-block">REP.</span>
            </h1>

            {/* Subheadline directly addressing belly fat, agility, and full body recomposition */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-normal leading-relaxed">
              Full-body athletic recomposition engineered for real results. Target stubborn visceral belly fat with deep transverse core conditioning, while building explosive agility, high springiness, and an unbreakable upper V-taper frame.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenTrialModal}
                className="btn-iron-primary text-lg sm:text-xl px-8 py-4 h-14"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
              
              <a
                href="#workout-plans"
                className="btn-iron-secondary text-base sm:text-lg px-7 py-4 h-14"
              >
                <span>Explore Workout Plans</span>
              </a>
            </div>

            {/* Social Proof near CTA (Required: Member counts, ratings, Recomposition stats) */}
            <div className="pt-4 border-t border-[#27272A]/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-10 h-10 rounded-none border border-[#0D0D0F] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Member avatar"
                  />
                  <img
                    className="w-10 h-10 rounded-none border border-[#0D0D0F] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Member avatar"
                  />
                  <img
                    className="w-10 h-10 rounded-none border border-[#0D0D0F] object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                    alt="Member avatar"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#C8FF00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8FF00] stroke-none" />
                    ))}
                    <span className="text-xs font-bold text-[#F4F4F5] ml-1">4.9 / 5.0</span>
                  </div>
                  <span className="text-xs text-[#A1A1AA] font-medium">
                    2,840+ Active Members
                  </span>
                </div>
              </div>

              <div className="h-8 w-px bg-[#27272A] hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#C8FF00]">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F4F4F5]">
                    -4.8" Avg Waist Reduction
                  </div>
                  <div className="text-xs text-[#A1A1AA]">
                    APT Reversal &amp; TVA Corset Training
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Visual Card (Matching the Realtime Colors preview card style) */}
          <div className="lg:col-span-4">
            <div className="bg-[#18181B] border border-[#27272A] p-6 shadow-2xl relative rounded-none hover:border-[#C8FF00]/60 transition-colors duration-300">
              
              {/* Tactical Top Tag */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#C8FF00] rounded-none inline-block" />
                  <span className="text-xs font-heading tracking-widest text-[#F4F4F5] uppercase">
                    ACTIVE SESSIONS TODAY
                  </span>
                </div>
                <span className="text-xs font-mono text-[#C8FF00] font-bold">LIVE 24/7</span>
              </div>

              {/* Workout Stat Highlights */}
              <div className="space-y-4">
                <div className="p-4 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider">
                      Primary Focus
                    </div>
                    <div className="text-base font-heading text-[#F4F4F5] tracking-wide mt-0.5">
                      Belly Fat Shred &amp; Deep Core
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30">
                    TVA Cinch
                  </span>
                </div>

                <div className="p-4 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider">
                      Athletic Requirement
                    </div>
                    <div className="text-base font-heading text-[#F4F4F5] tracking-wide mt-0.5">
                      Light-Footed Agility &amp; Speed
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30">
                    Turf Bounds
                  </span>
                </div>

                <div className="p-4 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider">
                      Full Body Split
                    </div>
                    <div className="text-base font-heading text-[#F4F4F5] tracking-wide mt-0.5">
                      Chest, Back, Delts &amp; Legs
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#27272A] text-[#F4F4F5]">
                    7-Day System
                  </span>
                </div>
              </div>

              {/* Instant Action Button */}
              <div className="mt-6 pt-4 border-t border-[#27272A]">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-3.5 bg-[#C8FF00] hover:bg-[#b5e600] text-[#0D0D0F] font-heading text-lg font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Claim 7-Day Free Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
