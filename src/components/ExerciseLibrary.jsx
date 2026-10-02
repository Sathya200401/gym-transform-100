import React, { useState } from 'react';
import { EXERCISE_LIBRARY } from '../data/gymData';
import { BookOpen, Search, Filter, ShieldCheck, ChevronRight, Zap } from 'lucide-react';
import { playTick } from '../utils/audio';

export default function ExerciseLibrary({ onSelectExercise, soundEnabled }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core & Belly Fat', 'Agility & Footwork'];

  const exercises = Object.values(EXERCISE_LIBRARY);

  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ex.target.toLowerCase().includes(searchTerm.toLowerCase());
    if (categoryFilter === 'All') return matchesSearch;
    if (categoryFilter === 'Core & Belly Fat') {
      return matchesSearch && (ex.category.toLowerCase().includes('core') || ex.category.toLowerCase().includes('belly'));
    }
    if (categoryFilter === 'Agility & Footwork') {
      return matchesSearch && (ex.category.toLowerCase().includes('agility') || ex.category.toLowerCase().includes('speed'));
    }
    return matchesSearch && ex.category.toLowerCase().includes(categoryFilter.toLowerCase());
  });

  const handleCardClick = (ex) => {
    if (soundEnabled) playTick();
    onSelectExercise(ex);
  };

  return (
    <section className="py-12 bg-[#0D0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="bg-[#18181B] border border-[#27272A] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#27272A]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D0F] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                Exercise Biomechanics Encyclopedia
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading text-[#F4F4F5] uppercase tracking-tight">
                VISUAL EXERCISE <span className="text-[#C8FF00]">FORM LIBRARY (30 LIFTS)</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mt-1">
                Zero trainer guesswork. High-definition vector diagrams, biomechanical cues, and common mistakes to avoid for all 30 exercises in your 100-day split.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search exercise or muscle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#0D0D0F] border border-[#27272A] text-xs text-[#F4F4F5] placeholder-[#71717A] focus:outline-none focus:border-[#C8FF00]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-heading font-black tracking-wider uppercase transition-colors border ${
                  categoryFilter === cat
                    ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                    : 'bg-[#0D0D0F] text-[#A1A1AA] border-[#27272A] hover:text-[#F4F4F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 30 Exercises Grid with SVG diagrams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map((ex) => (
            <div
              key={ex.id || ex.name}
              onClick={() => handleCardClick(ex)}
              className="bg-[#18181B] border border-[#27272A] p-5 cursor-pointer hover:border-[#C8FF00] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* SVG Artwork container */}
                <div className="aspect-[16/10] bg-[#0D0D0F] border border-[#27272A] p-4 flex items-center justify-center mb-4 group-hover:border-[#C8FF00]/50 transition-colors relative overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 right-2 text-[9px] font-black uppercase px-2 py-0.5 bg-[#C8FF00] text-[#0D0D0F]">
                    INSPECT FORM
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C8FF00]">
                    {ex.category}
                  </span>
                  <span className="text-[#3F3F46]">•</span>
                  <span className="text-[10px] text-[#A1A1AA] truncate">
                    {ex.equipment}
                  </span>
                </div>

                <h3 className="text-xl font-heading text-[#F4F4F5] uppercase group-hover:text-[#C8FF00] transition-colors leading-tight">
                  {ex.name}
                </h3>

                <p className="text-xs text-[#A1A1AA] mt-2 line-clamp-2">
                  {ex.postureBenefit}
                </p>
              </div>

              <div className="pt-4 border-t border-[#27272A] mt-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#71717A] uppercase">
                  Target: {ex.target.split(',')[0]}
                </span>
                <span className="text-xs text-[#C8FF00] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Guide &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
