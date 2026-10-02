import React, { useState } from 'react';
import { TrendingDown, Scale, Target, Plus, Trash2, ShieldCheck, Sparkles } from 'lucide-react';
import { playSuccessChime, playTick } from '../utils/audio';

export default function WaistTracker({ 
  measurements = [], 
  onAddMeasurement, 
  onDeleteMeasurement,
  soundEnabled 
}) {
  const [newWeight, setNewWeight] = useState('73.0');
  const [newWaist, setNewWaist] = useState('35.0');
  const [newEnergy, setNewEnergy] = useState('8');

  const handleAdd = (e) => {
    e.preventDefault();
    const w = parseFloat(newWeight);
    const wst = parseFloat(newWaist);
    const eng = parseInt(newEnergy, 10);

    if (isNaN(w) || isNaN(wst)) return;

    if (soundEnabled) playSuccessChime();

    onAddMeasurement({
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      weight: w,
      waist: wst,
      energy: eng || 8
    });
  };

  const initialWaist = measurements[0]?.waist || 35.0;
  const latestWaist = measurements[measurements.length - 1]?.waist || 35.0;
  const waistDiff = (latestWaist - initialWaist).toFixed(1);

  return (
    <section className="py-12 bg-[#0D0D0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="bg-[#18181B] border border-[#27272A] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#27272A]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D0F] border border-[#27272A] text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-2">
                <TrendingDown className="w-3.5 h-3.5" />
                Recomposition Progress Metrics
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading text-[#F4F4F5] uppercase tracking-tight">
                WAIST CIRCUMFERENCE &amp; <span className="text-[#C8FF00]">WEIGHT TRACKER</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mt-1">
                For a skinny-fat recomposition, waist circumference at the belly button is 10x more important than scale weight. Track your waist tightening as your transverse abdominis pulls your stomach flat!
              </p>
            </div>

            {/* Quick Transformation Stat */}
            <div className="bg-[#0D0D0F] border border-[#27272A] p-4 flex items-center gap-6">
              <div>
                <span className="text-[10px] font-bold text-[#A1A1AA] uppercase">Waist Change</span>
                <div className={`text-2xl font-black font-heading mt-0.5 ${parseFloat(waistDiff) <= 0 ? 'text-[#C8FF00]' : 'text-rose-400'}`}>
                  {parseFloat(waistDiff) <= 0 ? `${waistDiff}"` : `+${waistDiff}"`}
                </div>
              </div>
              <div className="h-8 w-px bg-[#27272A]" />
              <div>
                <span className="text-[10px] font-bold text-[#A1A1AA] uppercase">Current Weight</span>
                <div className="text-2xl font-black font-heading text-[#F4F4F5] mt-0.5">
                  {measurements[measurements.length - 1]?.weight || 73.0} kg
                </div>
              </div>
            </div>
          </div>

          {/* Log Entry Form */}
          <form onSubmit={handleAdd} className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold uppercase text-[#A1A1AA] mb-1">
                Waist at Navel (Inches)
              </label>
              <input
                type="number"
                step="0.1"
                min="20"
                max="55"
                value={newWaist}
                onChange={(e) => setNewWaist(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0D0D0F] border border-[#27272A] text-sm font-bold text-[#F4F4F5] focus:outline-none focus:border-[#C8FF00]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#A1A1AA] mb-1">
                Body Weight (kg)
              </label>
              <input
                type="number"
                step="0.1"
                min="40"
                max="150"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0D0D0F] border border-[#27272A] text-sm font-bold text-[#F4F4F5] focus:outline-none focus:border-[#C8FF00]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#A1A1AA] mb-1">
                Energy Rating (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={newEnergy}
                onChange={(e) => setNewEnergy(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0D0D0F] border border-[#27272A] text-sm font-bold text-[#F4F4F5] focus:outline-none focus:border-[#C8FF00]"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-iron-primary text-xs px-6 py-2.5 h-[42px] flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Log Entry</span>
            </button>
          </form>
        </div>

        {/* Measurement History Table */}
        <div className="bg-[#18181B] border border-[#27272A] p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A]">
            <h3 className="text-xl font-heading text-[#F4F4F5] uppercase">
              RECORDED PROGRESS HISTORY
            </h3>
            <span className="text-xs text-[#A1A1AA]">
              {measurements.length} check-ins recorded
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#27272A] text-[#71717A] uppercase">
                  <th className="py-2.5">Date</th>
                  <th className="py-2.5">Waist (Inches)</th>
                  <th className="py-2.5">Weight (kg)</th>
                  <th className="py-2.5">Energy</th>
                  <th className="py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A]/50">
                {measurements.map((m) => (
                  <tr key={m.id} className="hover:bg-[#0D0D0F]/40 transition-colors">
                    <td className="py-3 font-mono font-bold text-[#F4F4F5]">{m.date}</td>
                    <td className="py-3 font-mono font-bold text-[#C8FF00]">{m.waist}"</td>
                    <td className="py-3 font-mono text-[#F4F4F5]">{m.weight} kg</td>
                    <td className="py-3 font-mono text-[#A1A1AA]">{m.energy || 8}/10</td>
                    <td className="py-3 text-right">
                      {m.id !== 'baseline' && (
                        <button
                          onClick={() => onDeleteMeasurement(m.id)}
                          className="p-1 text-[#71717A] hover:text-rose-400 transition-colors"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
