import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/gymData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { playTick } from '../utils/audio';

export default function Faq({ onOpenTrialModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    playTick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#121215] border-t border-[#27272A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Answers &amp; Protocols
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-[#C8FF00]">QUESTIONS</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-2">
            Got questions about burning belly fat, building agility, or starting out as a beginner?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#18181B] border border-[#27272A] overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading text-[#F4F4F5] uppercase tracking-wide">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 flex items-center justify-center bg-[#0D0D0F] border border-[#27272A] text-[#C8FF00] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 bg-[#C8FF00] text-[#0D0D0F]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#27272A]/50 mt-2 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#F4F4F5]">
              Still have a specific question about your routine?
            </div>
            <div className="text-xs text-[#A1A1AA] mt-0.5">
              Chat directly with our head coaching desk on WhatsApp anytime.
            </div>
          </div>
          <a
            href="https://wa.me/18005554766?text=Hi%20Iron%20Club!%20I%20have%20a%20question%20about%20starting%20the%20recomp%20program."
            target="_blank"
            rel="noreferrer"
            className="btn-iron-secondary text-xs px-5 py-2.5 flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
