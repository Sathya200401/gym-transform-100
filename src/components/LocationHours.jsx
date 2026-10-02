import React from 'react';
import { MapPin, Clock, Phone, Navigation, Key, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LocationHours() {
  return (
    <section id="location" className="py-20 bg-[#0D0D0F] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Downtown Facility
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F4F5] uppercase tracking-tight">
            LOCATION &amp; <span className="text-[#C8FF00]">24/7 ACCESS</span>
          </h2>
          <p className="text-base text-[#A1A1AA] mt-2">
            Centrally located with validated private parking, 24/7 biometric keycard doors, and full locker amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Location & Hours Details */}
          <div className="lg:col-span-6 bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-[#C8FF00] rounded-none animate-ping inline-block" />
                  <span className="text-xs font-heading font-black tracking-widest text-[#F4F4F5] uppercase">
                    OPEN 24/7 RIGHT NOW
                  </span>
                </div>
                <span className="text-xs font-mono text-[#C8FF00] font-bold">
                  BIOMETRIC DIGITAL ENTRY
                </span>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#F4F4F5] uppercase">
                    Iron Strength &amp; Agility Club
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5">
                    450 Ironworks Boulevard, Athletic District, Suite 100
                  </p>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    (Next to Central Metro Station • Validated Underground Parking)
                  </p>
                </div>
              </div>

              {/* Operating Hours Breakdown */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D0D0F] border border-[#27272A] flex items-center justify-center text-[#C8FF00] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-[#F4F4F5] uppercase">
                    Access &amp; Staffed Hours
                  </h3>
                  <div className="mt-2 space-y-1.5 text-xs text-[#A1A1AA]">
                    <div className="flex justify-between py-1 border-b border-[#27272A]">
                      <span className="font-bold text-[#F4F4F5]">Member 24/7 Access:</span>
                      <span className="text-[#C8FF00] font-bold font-mono">24 Hours / 7 Days a Week</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#27272A]">
                      <span>Staffed Front Desk &amp; Trainers:</span>
                      <span className="font-mono text-[#F4F4F5]">Mon – Fri: 06:00 AM – 10:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Weekend Staffed Hours:</span>
                      <span className="font-mono text-[#F4F4F5]">Sat – Sun: 07:00 AM – 08:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities List */}
              <div className="p-4 bg-[#0D0D0F] border border-[#27272A] space-y-2">
                <div className="text-[11px] font-bold text-[#C8FF00] uppercase tracking-wider">
                  Facility Amenities:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" /> Private Showers &amp; Lockers
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" /> High-Speed Member Wi-Fi
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" /> Infrared Sauna &amp; Plunge
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" /> Filtered Chilled Water Bars
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 mt-6 border-t border-[#27272A] flex flex-wrap gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn-iron-primary text-xs px-5 py-3 flex-1 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href="tel:+18005554766"
                className="btn-iron-secondary text-xs px-5 py-3 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Dark-Mode Styled Map */}
          <div className="lg:col-span-6 bg-[#18181B] border border-[#27272A] relative min-h-[380px] overflow-hidden flex flex-col justify-between">
            {/* Visual Dark Map Simulation with Street Grid */}
            <div className="absolute inset-0 bg-[#0D0D0F]">
              {/* Map grid lines */}
              <div 
                className="w-full h-full opacity-30" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #27272A 1px, transparent 1px),
                    linear-gradient(to bottom, #27272A 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              {/* Diagonal arterial roads */}
              <div className="absolute top-0 left-1/4 w-3 h-full bg-[#1E1E24] transform rotate-45 origin-top-left" />
              <div className="absolute top-1/3 left-0 w-full h-4 bg-[#1E1E24]" />
              <div className="absolute top-2/3 left-0 w-full h-3 bg-[#1E1E24]" />

              {/* Pulsing Pin for Iron Club */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#C8FF00]/25 rounded-none animate-ping absolute -inset-2" />
                  <div className="w-10 h-10 bg-[#C8FF00] text-[#0D0D0F] font-black flex items-center justify-center shadow-[0_0_25px_#C8FF00] z-10 relative">
                    <MapPin className="w-6 h-6 stroke-[3]" />
                  </div>
                </div>
                <div className="mt-3 px-3 py-1.5 bg-[#0D0D0F] border border-[#C8FF00] text-xs font-heading font-black text-[#F4F4F5] uppercase tracking-wider shadow-2xl">
                  IRON CLUB HQ
                </div>
              </div>
            </div>

            {/* Map Controls Overlay */}
            <div className="relative z-10 p-4 flex justify-between items-start pointer-events-none">
              <span className="px-2.5 py-1 bg-[#0D0D0F]/90 text-[10px] font-bold text-[#A1A1AA] border border-[#27272A]">
                GPS: 37.7749° N, 122.4194° W
              </span>
              <span className="px-2.5 py-1 bg-[#C8FF00] text-[#0D0D0F] text-[10px] font-black uppercase">
                FREE PARKING VALIDATION
              </span>
            </div>

            <div className="relative z-10 p-4 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/80 to-transparent flex items-center justify-between">
              <div className="text-xs text-[#A1A1AA]">
                Transit: <strong className="text-[#F4F4F5]">Lines 4, 12, Blue Express</strong>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#C8FF00] font-bold hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
