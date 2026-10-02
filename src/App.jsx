import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodayWorkout from './components/TodayWorkout';
import TransformationMap from './components/TransformationMap';
import BellyFatGuide from './components/BellyFatGuide';
import ExerciseLibrary from './components/ExerciseLibrary';
import WaistTracker from './components/WaistTracker';
import RestTimerHUD from './components/RestTimerHUD';
import ExerciseModal from './components/ExerciseModal';
import JumpDayModal from './components/JumpDayModal';
import CelebrationModal from './components/CelebrationModal';
import { 
  WORKOUT_DAYS, 
  EXERCISE_LIBRARY 
} from './data/gymData';
import { Download, RotateCcw, Zap, Flame, Shield, Check } from 'lucide-react';
import { playSuccessChime } from './utils/audio';

const STORAGE_KEY = "iron_transform_100_v2";

const defaultState = {
  currentDay: 1,
  completedDays: [],
  modeOverrides: {},
  loggedSets: {},
  soundEnabled: true,
  measurements: [
    {
      id: "baseline",
      date: new Date().toISOString().split("T")[0],
      weight: 73.0,
      waist: 35.0,
      energy: 8
    }
  ]
};

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Also check legacy key
      const legacyRaw = localStorage.getItem("gymtransform_100_state");
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw);
        return { ...defaultState, ...legacy };
      }
      return defaultState;
    }
    return { ...defaultState, ...JSON.parse(raw) };
  } catch (e) {
    return defaultState;
  }
}

export default function App() {
  const [state, setState] = useState(() => loadStoredState());
  const [activeSection, setActiveSection] = useState('today'); // 'today' | 'roadmap' | 'belly-fat' | 'exercises' | 'tracker'
  
  // Modals state
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [jumpModalOpen, setJumpModalOpen] = useState(false);
  const [celebrationDay, setCelebrationDay] = useState(null);

  // Rest Timer HUD State
  const [restTime, setRestTime] = useState(60);
  const [timerInitial, setTimerInitial] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  const handleStartRestTimer = (seconds = 60) => {
    setRestTime(seconds);
    setTimerInitial(seconds);
    setTimerActive(true);
  };

  const handleResetRestTimer = (seconds = 60) => {
    setRestTime(seconds);
    setTimerInitial(seconds);
    setTimerActive(false);
  };

  const handleDayChange = (newDay) => {
    setState(prev => ({
      ...prev,
      currentDay: Math.max(1, Math.min(100, newDay))
    }));
    setActiveSection('today');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteDay = (dayNum) => {
    setState(prev => {
      const isAlreadyCompleted = prev.completedDays.includes(dayNum);
      const nextCompleted = isAlreadyCompleted 
        ? prev.completedDays 
        : [...prev.completedDays, dayNum];

      return {
        ...prev,
        completedDays: nextCompleted
      };
    });

    setCelebrationDay(dayNum);
  };

  const handleToggleModeOverride = (dayNum) => {
    setState(prev => {
      const current = prev.modeOverrides[dayNum] || (WORKOUT_DAYS[dayNum - 1]?.type || 'gym');
      const nextMode = current === 'gym' ? 'home' : 'gym';

      return {
        ...prev,
        modeOverrides: {
          ...prev.modeOverrides,
          [dayNum]: nextMode
        }
      };
    });
  };

  const handleUpdateLoggedSet = (key, data) => {
    setState(prev => ({
      ...prev,
      loggedSets: {
        ...prev.loggedSets,
        [key]: data
      }
    }));
  };

  const handleAddMeasurement = (m) => {
    setState(prev => ({
      ...prev,
      measurements: [...prev.measurements, m]
    }));
  };

  const handleDeleteMeasurement = (id) => {
    setState(prev => ({
      ...prev,
      measurements: prev.measurements.filter(m => m.id !== id)
    }));
  };

  const handleToggleSound = () => {
    setState(prev => ({
      ...prev,
      soundEnabled: !prev.soundEnabled
    }));
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `iron_transform_day${state.currentDay}_backup.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to reset your 100-day progress? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      setState(defaultState);
    }
  };

  // Streak calculation
  const calculateStreak = () => {
    if (!state.completedDays || state.completedDays.length === 0) return 0;
    const sorted = [...state.completedDays].sort((a, b) => a - b);
    let streak = 0;
    let expected = state.currentDay;
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i] === expected || sorted[i] === expected - 1) {
        streak++;
        expected = sorted[i];
      }
    }
    return Math.max(1, streak);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F4F4F5] flex flex-col selection:bg-[#C8FF00] selection:text-[#0D0D0F]">
      
      {/* 1. Header Navigation */}
      <Navbar
        currentDay={state.currentDay}
        completedCount={state.completedDays.length}
        currentStreak={calculateStreak()}
        onOpenJumpModal={() => setJumpModalOpen(true)}
        soundEnabled={state.soundEnabled}
        onToggleSound={handleToggleSound}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* 2. Main Content View Selector */}
      <main className="flex-1 pb-24">
        {activeSection === 'today' && (
          <TodayWorkout
            currentDay={state.currentDay}
            onChangeDay={handleDayChange}
            onSelectExercise={setSelectedExercise}
            onStartRestTimer={handleStartRestTimer}
            onCompleteDay={handleCompleteDay}
            completedDays={state.completedDays}
            modeOverrides={state.modeOverrides}
            onToggleModeOverride={handleToggleModeOverride}
            loggedSets={state.loggedSets}
            onUpdateLoggedSet={handleUpdateLoggedSet}
            soundEnabled={state.soundEnabled}
          />
        )}

        {activeSection === 'roadmap' && (
          <TransformationMap
            currentDay={state.currentDay}
            completedDays={state.completedDays}
            onSelectDay={handleDayChange}
            soundEnabled={state.soundEnabled}
          />
        )}

        {activeSection === 'belly-fat' && (
          <BellyFatGuide />
        )}

        {activeSection === 'exercises' && (
          <ExerciseLibrary
            onSelectExercise={setSelectedExercise}
            soundEnabled={state.soundEnabled}
          />
        )}

        {activeSection === 'tracker' && (
          <WaistTracker
            measurements={state.measurements}
            onAddMeasurement={handleAddMeasurement}
            onDeleteMeasurement={handleDeleteMeasurement}
            soundEnabled={state.soundEnabled}
          />
        )}
      </main>

      {/* 3. Floating Rest Timer HUD */}
      <RestTimerHUD
        restTime={restTime}
        initialTime={timerInitial}
        isActive={timerActive}
        onTimeChange={setRestTime}
        onToggleActive={setTimerActive}
        onReset={handleResetRestTimer}
        soundEnabled={state.soundEnabled}
      />

      {/* 4. Exercise Detail Modal */}
      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
          soundEnabled={state.soundEnabled}
        />
      )}

      {/* 5. Jump Day Modal */}
      <JumpDayModal
        isOpen={jumpModalOpen}
        onClose={() => setJumpModalOpen(false)}
        onJump={handleDayChange}
        soundEnabled={state.soundEnabled}
      />

      {/* 6. Celebration Confetti Modal */}
      <CelebrationModal
        isOpen={!!celebrationDay}
        onClose={() => setCelebrationDay(null)}
        completedDay={celebrationDay}
        currentStreak={calculateStreak()}
        onNextDay={handleDayChange}
        soundEnabled={state.soundEnabled}
      />

      {/* 7. Bottom App Footer & Data Backup */}
      <footer className="bg-[#121215] border-t border-[#27272A] py-8 text-xs text-[#A1A1AA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg text-[#F4F4F5] uppercase">
              IRON<span className="text-[#C8FF00]">TRANSFORM 100</span>
            </span>
            <span className="text-[#3F3F46]">•</span>
            <span>Zero-Trainer Autonomous Recomposition</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleExportData}
              className="hover:text-[#C8FF00] flex items-center gap-1 transition-colors"
              title="Download your logged workouts as JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup Data (JSON)</span>
            </button>
            <span className="text-[#3F3F46]">•</span>
            <button
              onClick={handleResetData}
              className="hover:text-rose-400 transition-colors"
            >
              Reset Progress
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
