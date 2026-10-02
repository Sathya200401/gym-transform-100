import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, MessageSquare, Shield, Zap, Sparkles } from 'lucide-react';

export default function Header({ onOpenTrialModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Workouts', href: '#workout-plans' },
    { label: 'Belly & Agility', href: '#belly-fat-guide' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Timetable', href: '#timetable' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#27272A] py-3 shadow-xl' 
          : 'bg-[#0D0D0F]/70 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#C8FF00] rounded-none flex items-center justify-center text-[#0D0D0F] font-black transform -skew-x-6 group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-6 h-6 stroke-[3]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl tracking-wider text-[#F4F4F5] leading-none">
              IRON<span className="text-[#C8FF00]">CLUB</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#A1A1AA] uppercase font-bold">
              Strength • Agility • Recomp
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C8FF00] transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+18005554766"
            className="flex items-center justify-center w-11 h-11 border border-[#27272A] text-[#A1A1AA] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors rounded-none"
            title="Call Front Desk"
            aria-label="Call Front Desk"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenTrialModal}
            className="btn-iron-primary text-sm px-5 py-2.5 h-11"
          >
            Start Free Trial
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#F4F4F5] hover:text-[#C8FF00] border border-[#27272A] rounded-none min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0D0D0F] border-b border-[#27272A] p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-heading text-[#F4F4F5] hover:text-[#C8FF00] tracking-wider py-2 border-b border-[#18181B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="btn-iron-primary w-full py-3.5 text-base"
            >
              Start Free Trial Pass
            </button>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href="https://wa.me/18005554766?text=Hi%20Iron%20Club!%20I%20would%20like%20to%20know%20more%20about%20the%20recomp%20and%20agility%20programs."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 border border-[#27272A] text-xs font-bold text-[#F4F4F5] hover:border-[#C8FF00]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" /> WhatsApp
              </a>
              <a
                href="tel:+18005554766"
                className="flex items-center justify-center gap-2 py-3 border border-[#27272A] text-xs font-bold text-[#F4F4F5] hover:border-[#C8FF00]"
              >
                <Phone className="w-4 h-4 text-[#C8FF00]" /> Call Gym
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
