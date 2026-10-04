import React, { useState } from 'react';
import { 
  Zap, 
  Flame, 
  Calendar, 
  Volume2, 
  VolumeX, 
  Compass, 
  Menu, 
  X,
  Target,
  BookOpen,
  Activity,
  TrendingDown
} from 'lucide-react';

export default function Navbar({ 
  currentDay, 
  completedCount, 
  currentStreak,
  onOpenJumpModal,
  soundEnabled,
  onToggleSound,
  activeSection,
  onSelectSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phase = currentDay <= 30 ? 1 : (currentDay <= 65 ? 2 : 3);
  const phaseLabel = phase === 1 ? 'Phase 1: Foundation' : (phase === 2 ? 'Phase 2: V-Taper & Core' : 'Phase 3: Peak Shred');

  const navItems = [
    { id: 'today', label: "Today's Workout", icon: Target },
    { id: 'roadmap', label: '100-Day Map', icon: Calendar },
    { id: 'belly-fat', label: 'Flat Belly & Agility', icon: Flame },
    { id: 'exercises', label: 'Exercise Form (30)', icon: BookOpen },
    { id: 'tracker', label: 'Waist & Weight', icon: TrendingDown },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#27272A] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand & Day Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C8FF00] rounded-none flex items-center justify-center text-[#0D0D0F] font-black transform -skew-x-6">
            <Zap className="w-6 h-6 stroke-[3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl tracking-wider text-[#F4F4F5] leading-none">
                IRON<span className="text-[#C8FF00]">TRANSFORM</span>
              </span>
              <span className="text-xs font-mono font-bold text-[#0D0D0F] bg-[#C8FF00] px-1.5 py-0.2 uppercase">
                DAY {currentDay}/100
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-[#A1A1AA] uppercase font-bold hidden sm:block">
              {phaseLabel} • 73kg Recomp
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#141417]/80 p-1 border border-[#27272A] rounded-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-heading font-black tracking-wider uppercase transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#1F1F24] text-[#C8FF00] border border-[#C8FF00]/50 shadow-[0_0_15px_rgba(200,255,0,0.15)]'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#18181B]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C8FF00]' : 'text-[#71717A]'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#C8FF00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Streak, Sound & Jump Button */}
        <div className="flex items-center gap-2">
          
          {/* Streak Badge */}
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#F4F4F5]">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{currentStreak} Streak</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="w-9 h-9 bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#C8FF00] flex items-center justify-center transition-colors"
            title={soundEnabled ? "Mute audio cues" : "Enable audio cues"}
            aria-label="Toggle workout sound chimes"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#C8FF00]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Jump to Any Day */}
          <button
            onClick={onOpenJumpModal}
            className="btn-iron-primary text-xs px-3.5 py-2 h-9"
          >
            Jump to Day
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F4F4F5] border border-[#27272A] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0F] border-b border-[#27272A] p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 text-left font-heading text-base uppercase tracking-wider ${
                  isActive
                    ? 'bg-[#18181B] text-[#C8FF00] border-l-2 border-[#C8FF00]'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                }`}
              >
                <Icon className="w-4 h-4 text-[#C8FF00]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
