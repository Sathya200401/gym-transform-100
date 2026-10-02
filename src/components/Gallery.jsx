import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { Camera, ZoomIn, X, Zap } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);

  const categories = ['All', 'Turf & Agility', 'Free Weights', 'Combat & MMA', 'Belly Shred Zone', 'Recovery'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#121215] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Inside The Iron Club
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
              FACILITY <span className="text-[#C8FF00]">GALLERY</span>
            </h2>
            <p className="text-base text-[#A1A1AA] max-w-xl mt-2">
              Tour our dedicated 40m turf sprint lane, Olympic lifting platforms, heavy bag deck, and private recovery suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-[#C8FF00] text-[#0D0D0F] border-[#C8FF00]'
                    : 'bg-[#18181B] text-[#A1A1AA] border-[#27272A] hover:text-[#F4F4F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Sharp 0-4px corners, accent-tinted overlay) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setPreviewImage(item)}
              className="group relative aspect-[16/10] overflow-hidden bg-[#0D0D0F] border border-[#27272A] cursor-pointer hover:border-[#C8FF00] transition-colors"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Overlay with Details */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C8FF00] block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading text-[#F4F4F5] uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 bg-[#0D0D0F]/90 border border-[#27272A] flex items-center justify-center text-[#C8FF00] group-hover:border-[#C8FF00]">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {previewImage && (
          <div 
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-[#18181B] border border-[#C8FF00]/50 max-w-4xl w-full p-4 relative shadow-2xl"
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-[#0D0D0F] text-[#F4F4F5] hover:text-[#C8FF00] border border-[#27272A] flex items-center justify-center"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="w-full max-h-[75vh] object-cover mb-4"
              />

              <div className="flex items-center justify-between pt-2 border-t border-[#27272A]">
                <div>
                  <span className="text-xs font-bold text-[#C8FF00] uppercase">
                    {previewImage.category}
                  </span>
                  <h4 className="text-2xl font-heading text-[#F4F4F5] uppercase">
                    {previewImage.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#A1A1AA]">
                  24/7 Facility
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
