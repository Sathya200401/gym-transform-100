/**
 * GymTransform 100 - Master Application Logic
 * High-Energy 10/10 UX • Interactive Stepper Logging • Visual Exercise Gallery
 * Dynamic Island Rest Timer HUD • Confetti Celebrations • Recomposition Tracking
 */

// ============================================================================
// GLOBAL STATE & STORAGE
// ============================================================================
const STATE_KEY = "gymtransform_100_state";

const defaultState = {
  currentDay: 1,
  completedDays: [], // array of day numbers [1, 2, ...]
  modeOverrides: {}, // { dayNumber: 'gym' | 'room' }
  loggedSets: {},    // { "day_exId_setIdx": { checked: true, weight: "10", reps: "12" } }
  waterGlasses: 0,   // Number of 350ml glasses logged today (0-10)
  waterDate: new Date().toISOString().split("T")[0],
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

let appState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch (e) {
    console.error("Failed to parse state from localStorage:", e);
    return defaultState;
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(appState));
    updateHeaderStats();
  } catch (e) {
    console.error("Failed to save state to localStorage:", e);
  }
}

// Reset water count if new day
if (appState.waterDate !== new Date().toISOString().split("T")[0]) {
  appState.waterGlasses = 0;
  appState.waterDate = new Date().toISOString().split("T")[0];
  saveState();
}

// ============================================================================
// AUDIO SYNTHESIZER (Web Audio API - Zero External Dependencies)
// ============================================================================
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === "click") {
      // Crisp click for set completion
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } 
    else if (type === "warning") {
      // 3-2-1 countdown tick
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
    else if (type === "timerFinish") {
      // Rest timer completion dual chime
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(880, now); // A5
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1320, now + 0.18); // E6
      gain2.gain.setValueAtTime(0.35, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.7);
    }
    else if (type === "celebrate") {
      // Triumphant Fanfare for workout finish
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.3, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.6);
      });
    }
    else if (type === "water") {
      // Gentle water droplet bubble
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (err) {
    console.warn("Audio chime could not play:", err);
  }
}

// Sound toggle listeners
const soundToggleBtn = document.getElementById("header-sound-toggle");
const soundIcon = document.getElementById("sound-icon");
if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundIcon) soundIcon.textContent = soundEnabled ? "🔔" : "🔕";
    soundToggleBtn.title = soundEnabled ? "Sound enabled" : "Sound muted";
  });
}

// ============================================================================
// DYNAMIC REST TIMER HUD
// ============================================================================
let timerDurationSec = 60;
let timerRemainingSec = 60;
let timerInterval = null;
let isTimerRunning = false;

const timerDisplay = document.getElementById("timer-display");
const timerProgressCircle = document.getElementById("timer-progress-circle");
const btnTimerStart = document.getElementById("btn-timer-start");
const btnTimerReset = document.getElementById("btn-timer-reset");
const btnTimerSkip = document.getElementById("btn-timer-skip");
const btnTimerAdd15 = document.getElementById("btn-timer-add15");
const restTimerWidget = document.getElementById("rest-timer-widget");

const CIRCUMFERENCE = 2 * Math.PI * 28; // r=28 -> 175.93

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = formatSeconds(timerRemainingSec);
  }

  // Update SVG progress ring
  if (timerProgressCircle) {
    const fraction = timerDurationSec > 0 ? timerRemainingSec / timerDurationSec : 0;
    const offset = CIRCUMFERENCE * (1 - fraction);
    timerProgressCircle.style.strokeDashoffset = offset;
    
    if (timerRemainingSec <= 5 && timerRemainingSec > 0) {
      timerProgressCircle.style.stroke = "var(--accent-coral)";
      if (timerDisplay) timerDisplay.style.color = "var(--accent-coral-light)";
    } else {
      timerProgressCircle.style.stroke = "var(--accent-cyan)";
      if (timerDisplay) timerDisplay.style.color = "var(--accent-cyan-light)";
    }
  }
}

function startTimer(duration) {
  initAudio();
  if (duration !== undefined) {
    timerDurationSec = duration;
    timerRemainingSec = duration;
  }
  
  if (timerInterval) clearInterval(timerInterval);
  isTimerRunning = true;
  if (btnTimerStart) {
    btnTimerStart.textContent = "⏸ Pause";
    btnTimerStart.style.color = "var(--accent-amber-light)";
  }

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerRemainingSec > 0) {
      timerRemainingSec--;
      updateTimerDisplay();

      // Audio tick at 3, 2, 1
      if (timerRemainingSec <= 3 && timerRemainingSec > 0) {
        playSound("warning");
      }

      if (timerRemainingSec === 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (btnTimerStart) {
          btnTimerStart.textContent = "▶ Start";
          btnTimerStart.style.color = "var(--accent-emerald-light)";
        }
        playSound("timerFinish");
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (timerInterval) clearInterval(timerInterval);
  isTimerRunning = false;
  if (btnTimerStart) {
    btnTimerStart.textContent = "▶ Resume";
    btnTimerStart.style.color = "var(--accent-emerald-light)";
  }
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  isTimerRunning = false;
  timerRemainingSec = timerDurationSec;
  if (btnTimerStart) {
    btnTimerStart.textContent = "▶ Start";
    btnTimerStart.style.color = "var(--accent-emerald-light)";
  }
  updateTimerDisplay();
}

// Preset button handlers
document.querySelectorAll(".btn-timer-preset[data-sec]").forEach(btn => {
  btn.addEventListener("click", () => {
    const sec = parseInt(btn.dataset.sec, 10);
    startTimer(sec);
  });
});

if (btnTimerAdd15) {
  btnTimerAdd15.addEventListener("click", () => {
    timerRemainingSec += 15;
    timerDurationSec += 15;
    updateTimerDisplay();
    if (!isTimerRunning) startTimer();
  });
}

if (btnTimerStart) {
  btnTimerStart.addEventListener("click", () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      if (timerRemainingSec === 0) {
        timerRemainingSec = timerDurationSec;
      }
      startTimer();
    }
  });
}

if (btnTimerReset) {
  btnTimerReset.addEventListener("click", resetTimer);
}

if (btnTimerSkip) {
  btnTimerSkip.addEventListener("click", () => {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = false;
    timerRemainingSec = 0;
    updateTimerDisplay();
    if (btnTimerStart) {
      btnTimerStart.textContent = "▶ Start";
      btnTimerStart.style.color = "var(--accent-emerald-light)";
    }
  });
}

// ============================================================================
// HEADER STATS & MASTER PROGRESS BAR
// ============================================================================
function updateHeaderStats() {
  const completedCount = appState.completedDays.length;
  const streakCount = calculateStreak();

  const elCompleted = document.getElementById("header-completed-count");
  const elStreak = document.getElementById("header-streak-count");
  const elProgressBar = document.getElementById("master-progress-bar");
  const elPercentLabel = document.getElementById("header-percent-label");

  if (elCompleted) elCompleted.textContent = completedCount;
  if (elStreak) elStreak.textContent = streakCount;

  const pct = Math.min(100, Math.round((completedCount / 100) * 100));
  if (elProgressBar) elProgressBar.style.width = `${Math.max(1, pct)}%`;
  if (elPercentLabel) elPercentLabel.textContent = `${pct}% Complete (${completedCount}/100)`;

  // Update active phase marker in header
  const curDay = appState.currentDay || 1;
  const p1 = document.getElementById("marker-p1");
  const p2 = document.getElementById("marker-p2");
  const p3 = document.getElementById("marker-p3");

  if (p1) p1.classList.toggle("active", curDay <= 30);
  if (p2) p2.classList.toggle("active", curDay > 30 && curDay <= 65);
  if (p3) p3.classList.toggle("active", curDay > 65);
}

function calculateStreak() {
  if (!appState.completedDays.length) return 0;
  const sorted = [...appState.completedDays].sort((a, b) => b - a);
  let streak = 0;
  let currentTarget = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === currentTarget) {
      streak++;
      currentTarget--;
    } else {
      break;
    }
  }
  return streak;
}

// Header phase marker click navigation
document.querySelectorAll(".phase-marker").forEach(marker => {
  marker.addEventListener("click", () => {
    const phaseNum = parseInt(marker.dataset.phase, 10);
    if (phaseNum === 1) appState.currentDay = 1;
    else if (phaseNum === 2) appState.currentDay = 31;
    else if (phaseNum === 3) appState.currentDay = 66;
    saveState();
    renderTodayWorkout();
    switchTab("tab-today");
  });
});

// Brand logo click navigates to Today's workout
const brandHomeBtn = document.getElementById("brand-home-btn");
if (brandHomeBtn) {
  brandHomeBtn.addEventListener("click", () => {
    switchTab("tab-today");
  });
}

// ============================================================================
// NAVIGATION TABS
// ============================================================================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabViews = document.querySelectorAll(".tab-view");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetTabId = btn.dataset.tab;
    switchTab(targetTabId);
  });
});

function switchTab(tabId) {
  tabButtons.forEach(b => {
    const isActive = b.dataset.tab === tabId;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-selected", isActive);
  });

  tabViews.forEach(view => {
    const isActive = view.id === tabId;
    view.classList.toggle("active", isActive);
  });

  // Re-render views if necessary
  if (tabId === "tab-today") {
    renderTodayWorkout();
  } else if (tabId === "tab-roadmap") {
    renderCalendarGrid();
  } else if (tabId === "tab-library") {
    renderExerciseLibrary();
  } else if (tabId === "tab-nutrition") {
    renderNutritionView();
  } else if (tabId === "tab-progress") {
    renderProgressTable();
    renderProgressChart();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// 7-DAY WEEK SCRUBBER CAROUSEL
// ============================================================================
function renderWeekScrubber() {
  const container = document.getElementById("scrubber-days-container");
  const titleBadge = document.getElementById("scrubber-week-title");
  if (!container) return;

  const curDay = appState.currentDay;
  const currentWeek = Math.ceil(curDay / 7);
  const totalWeeks = Math.ceil(100 / 7);

  if (titleBadge) {
    titleBadge.textContent = `Week ${currentWeek} of ${totalWeeks} (Days ${(currentWeek - 1) * 7 + 1}–${Math.min(100, currentWeek * 7)})`;
  }

  // Generate 7 days for the current week
  const startDay = (currentWeek - 1) * 7 + 1;
  const dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let html = "";
  for (let i = 0; i < 7; i++) {
    const dayNum = startDay + i;
    if (dayNum > 100) break;

    const isCompleted = appState.completedDays.includes(dayNum);
    const isActive = dayNum === curDay;
    const dayData = WORKOUT_DAYS.find(d => d.day === dayNum);
    const isWeekend = i >= 5;

    html += `
      <div class="week-day-pill ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
           onclick="window.jumpToDay(${dayNum})" title="${dayData ? dayData.title : ''}">
        <span class="day-code">${dayNamesShort[i]}</span>
        <span class="day-number">${dayNum}</span>
        ${isCompleted ? '<span class="day-status-dot"></span>' : ''}
      </div>
    `;
  }

  container.innerHTML = html;

  // Arrow navigation
  const btnPrevWeek = document.getElementById("btn-scrubber-prev-week");
  const btnNextWeek = document.getElementById("btn-scrubber-next-week");
  if (btnPrevWeek) {
    btnPrevWeek.disabled = currentWeek <= 1;
    btnPrevWeek.onclick = () => {
      const prevWeekStart = Math.max(1, (currentWeek - 2) * 7 + 1);
      window.jumpToDay(prevWeekStart);
    };
  }
  if (btnNextWeek) {
    btnNextWeek.disabled = currentWeek >= totalWeeks;
    btnNextWeek.onclick = () => {
      const nextWeekStart = Math.min(100, currentWeek * 7 + 1);
      window.jumpToDay(nextWeekStart);
    };
  }
}

// Global jump helper
window.jumpToDay = function(dayNum) {
  appState.currentDay = Math.max(1, Math.min(100, dayNum));
  saveState();
  renderTodayWorkout();
  closeJumpModal();
};

// ============================================================================
// TODAY'S WORKOUT VIEW RENDERING
// ============================================================================
function getDayData(dayNum) {
  const original = WORKOUT_DAYS.find(d => d.day === dayNum) || WORKOUT_DAYS[0];
  const override = appState.modeOverrides[dayNum];
  
  if (override === "room" && original.roomRoutine) {
    return {
      ...original,
      isRoomOverride: true,
      type: "home",
      title: original.roomRoutine.title,
      duration: original.roomRoutine.duration,
      exercises: original.roomRoutine.exercises.map(rx => ({
        ...rx,
        targetWeight: "Bodyweight (Speed & Form)"
      }))
    };
  }
  return original;
}

function renderTodayWorkout() {
  const dayNum = appState.currentDay;
  const day = getDayData(dayNum);

  // Update Week Scrubber
  renderWeekScrubber();

  // Navigation labels
  const prevBtn = document.getElementById("btn-prev-day");
  const nextBtn = document.getElementById("btn-next-day");
  const labelPrev = document.getElementById("label-prev-day-num");
  const labelNext = document.getElementById("label-next-day-num");
  const labelComplete = document.getElementById("label-complete-day-num");

  if (prevBtn) prevBtn.disabled = dayNum <= 1;
  if (nextBtn) nextBtn.disabled = dayNum >= 100;
  if (labelPrev) labelPrev.textContent = dayNum > 1 ? dayNum - 1 : "-";
  if (labelNext) labelNext.textContent = dayNum < 100 ? dayNum + 1 : "-";
  if (labelComplete) labelComplete.textContent = dayNum;

  // Header Details
  document.getElementById("today-day-title").textContent = `Day ${day.day}: ${day.title}`;
  document.getElementById("today-day-focus").textContent = day.focus;
  document.getElementById("today-duration").textContent = day.duration;
  document.getElementById("today-day-name").textContent = day.dayName;
  document.getElementById("today-posture-tip").textContent = day.postureTip;

  // Phase Badge
  const badgePhase = document.getElementById("badge-day-phase");
  if (badgePhase) {
    badgePhase.className = `badge phase${day.phase}`;
    badgePhase.textContent = `Phase ${day.phase}`;
  }

  // Location / Mode Banner
  const locType = document.getElementById("today-location-type");
  const modeStatus = document.getElementById("mode-status-text");
  const modeDesc = document.getElementById("mode-desc-text");
  const btnToggleMode = document.getElementById("btn-toggle-mode");

  const isWeekendHome = (day.dayName === "Saturday" || day.dayName === "Sunday");

  if (isWeekendHome) {
    if (locType) locType.textContent = "Room / Outdoors (Weekend)";
    if (modeStatus) modeStatus.textContent = "🏠 Weekend Room Agility Routine";
    if (modeDesc) modeDesc.textContent = "Zero equipment required. High agility and active recovery right in your room.";
    if (btnToggleMode) btnToggleMode.style.display = "none";
  } else {
    if (btnToggleMode) btnToggleMode.style.display = "inline-flex";
    if (day.isRoomOverride) {
      if (locType) locType.textContent = "Room (Holiday/WFH)";
      if (modeStatus) modeStatus.textContent = "🏠 Room Workout Mode Active";
      if (modeDesc) modeDesc.textContent = "Swapped to 0-equipment agility & core exercises for home/holidays.";
      btnToggleMode.className = "mode-btn is-room";
      btnToggleMode.innerHTML = "<span>🏢</span> Switch back to Gym Routine";
    } else {
      if (locType) locType.textContent = "Corporate Gym";
      if (modeStatus) modeStatus.textContent = "🏢 Corporate Gym Routine";
      if (modeDesc) modeDesc.textContent = "On holiday or working from home today? Convert this routine into 0-equipment room exercises!";
      btnToggleMode.className = "mode-btn";
      btnToggleMode.innerHTML = "<span>🔄</span> Switch to Room Workout";
    }
  }

  // Warmup Accordion
  const warmupContainer = document.getElementById("warmup-list");
  if (warmupContainer) {
    warmupContainer.innerHTML = day.warmup.map(item => `
      <div class="drill-item">
        <span>${item.name}</span>
        <span class="reps">${item.reps}</span>
      </div>
    `).join("");
  }

  // Cooldown Accordion
  const cooldownContainer = document.getElementById("cooldown-list");
  if (cooldownContainer) {
    cooldownContainer.innerHTML = day.cooldown.map(item => `
      <div class="drill-item">
        <span>${item.name}</span>
        <span class="reps">${item.reps}</span>
      </div>
    `).join("");
  }

  // Cardio Finisher
  const cardioName = document.getElementById("cardio-finisher-name");
  const cardioProto = document.getElementById("cardio-finisher-protocol");
  const cardioBenefit = document.getElementById("cardio-finisher-benefit");
  if (cardioName) cardioName.textContent = day.cardioFinisher.name;
  if (cardioProto) cardioProto.textContent = day.cardioFinisher.protocol;
  if (cardioBenefit) cardioBenefit.textContent = `✓ ${day.cardioFinisher.benefit}`;

  // Main Exercises List
  renderExerciseCards(day);

  // Complete Day Button State
  const btnComplete = document.getElementById("btn-complete-day");
  const isDayDone = appState.completedDays.includes(dayNum);
  if (btnComplete) {
    if (isDayDone) {
      btnComplete.className = "btn-complete-day is-completed";
      btnComplete.innerHTML = `<span>✓</span> Day ${dayNum} Completed! (Click to Undo)`;
    } else {
      btnComplete.className = "btn-complete-day";
      btnComplete.innerHTML = `<span>⚡</span> Complete Day ${dayNum} Workout`;
    }
  }
}

function renderExerciseCards(day) {
  const container = document.getElementById("exercises-container");
  if (!container) return;
  container.innerHTML = "";

  day.exercises.forEach(ex => {
    const libEntry = EXERCISE_LIBRARY[ex.id] || {
      name: ex.id.replace(/_/g, " "),
      category: "Full Body",
      target: "Athletic Conditioning",
      equipment: "Gym Equipment",
      postureBenefit: "Maintains athletic posture.",
      image: `assets/exercises/${ex.id}.svg`,
      cues: ["Maintain core brace", "Breathe smoothly"],
      proTip: "Keep good posture and smooth tempo.",
      mistake: "Avoid rushing reps."
    };

    const imageSrc = libEntry.image || `assets/exercises/${ex.id}.svg`;

    const card = document.createElement("div");
    card.className = "exercise-card";

    // Build Set Rows with Stepper Controls
    const setRowsHtml = [];
    for (let s = 1; s <= ex.sets; s++) {
      const setKey = `${day.day}_${ex.id}_${s}`;
      const savedSet = appState.loggedSets[setKey] || { checked: false, weight: "", reps: "" };

      // Default weight/reps suggestions
      const defaultWeight = savedSet.weight !== "" ? savedSet.weight : (ex.targetWeight ? ex.targetWeight.split(" ")[0].replace(/[^0-9.]/g, '') : "10");
      const defaultReps = savedSet.reps !== "" ? savedSet.reps : (typeof ex.reps === 'string' ? ex.reps.split("-")[0].replace(/[^0-9]/g, '') : "10");

      setRowsHtml.push(`
        <div class="set-row ${savedSet.checked ? 'done' : ''}" id="row-${setKey}">
          <div class="set-label">Set ${s}</div>
          <div class="set-inputs-wrap">
            
            <!-- Weight Stepper -->
            <div class="stepper-control" title="Weight used">
              <button type="button" class="stepper-btn" onclick="window.stepValue('${setKey}', 'weight', -2.5)">-</button>
              <input type="text" value="${savedSet.weight || defaultWeight}" 
                     data-key="${setKey}" data-field="weight" class="stepper-input set-val-input">
              <span class="stepper-unit">kg</span>
              <button type="button" class="stepper-btn" onclick="window.stepValue('${setKey}', 'weight', 2.5)">+</button>
            </div>

            <!-- Reps Stepper -->
            <div class="stepper-control" title="Reps completed">
              <button type="button" class="stepper-btn" onclick="window.stepValue('${setKey}', 'reps', -1)">-</button>
              <input type="text" value="${savedSet.reps || defaultReps}" 
                     data-key="${setKey}" data-field="reps" class="stepper-input set-val-input">
              <span class="stepper-unit">reps</span>
              <button type="button" class="stepper-btn" onclick="window.stepValue('${setKey}', 'reps', 1)">+</button>
            </div>

            <button class="quick-timer-btn" data-rest="${ex.rest || 60}" title="Start ${ex.rest || 60}s rest timer">
              ⏱️ ${ex.rest || 60}s
            </button>

            <button class="set-check-btn ${savedSet.checked ? 'checked' : ''}" 
                    data-key="${setKey}" data-rest="${ex.rest || 60}" title="Mark set finished & start rest timer">
              ${savedSet.checked ? '✓' : ''}
            </button>
          </div>
        </div>
      `);
    }

    card.innerHTML = `
      <div class="exercise-layout-grid">
        <!-- Visual Exercise Artwork Image -->
        <div class="exercise-image-wrap" onclick="window.openExerciseModal('${ex.id}')" title="Click to view technique & posture guide">
          <img src="${imageSrc}" alt="${libEntry.name}" loading="lazy" 
               onerror="this.onerror=null; this.src='assets/exercises/db_flat_bench_press.svg';">
          <div class="exercise-image-overlay">
            <span>📖</span> Form Guide
          </div>
        </div>

        <!-- Exercise Details & Sets Column -->
        <div class="exercise-details-col">
          <div class="exercise-top-row">
            <div class="exercise-title-group">
              <h3>${libEntry.name}</h3>
              <div class="exercise-target-line">
                <span>🎯</span> ${libEntry.target}
              </div>
            </div>
            <div class="exercise-actions">
              <button class="guide-btn" onclick="window.openExerciseModal('${ex.id}')">
                <span>📖</span> Technique
              </button>
            </div>
          </div>

          <div class="exercise-meta-pills">
            <div class="pill">Sets: <strong>${ex.sets}</strong></div>
            <div class="pill">Target: <strong>${ex.reps} reps</strong></div>
            <div class="pill">Rest: <strong>${ex.rest || 60}s</strong></div>
            <div class="pill">Suggested: <strong>${ex.targetWeight || 'Bodyweight'}</strong></div>
          </div>

          <div class="sets-grid">
            ${setRowsHtml.join("")}
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach input listeners
  container.querySelectorAll(".set-val-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const key = e.target.dataset.key;
      const field = e.target.dataset.field;
      if (!appState.loggedSets[key]) appState.loggedSets[key] = { checked: false, weight: "", reps: "" };
      appState.loggedSets[key][field] = e.target.value.trim();
      saveState();
    });
  });

  // Set checkmark triggers
  container.querySelectorAll(".set-check-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const restSec = parseInt(btn.dataset.rest, 10) || 60;
      if (!appState.loggedSets[key]) appState.loggedSets[key] = { checked: false, weight: "", reps: "" };
      
      const newStatus = !appState.loggedSets[key].checked;
      appState.loggedSets[key].checked = newStatus;
      
      const row = document.getElementById(`row-${key}`);
      if (row) row.classList.toggle("done", newStatus);
      btn.classList.toggle("checked", newStatus);
      btn.textContent = newStatus ? "✓" : "";

      playSound("click");
      saveState();

      // If checked, launch rest timer automatically!
      if (newStatus) {
        startTimer(restSec);
      }
    });
  });

  // Quick timer button triggers
  container.querySelectorAll(".quick-timer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const sec = parseInt(btn.dataset.rest, 10) || 60;
      startTimer(sec);
    });
  });
}

// Stepper numeric modifier helper
window.stepValue = function(key, field, delta) {
  if (!appState.loggedSets[key]) {
    appState.loggedSets[key] = { checked: false, weight: "", reps: "" };
  }
  const row = document.getElementById(`row-${key}`);
  if (!row) return;

  const input = row.querySelector(`input[data-field="${field}"]`);
  if (!input) return;

  let currentVal = parseFloat(input.value) || 0;
  let newVal = Math.max(0, currentVal + delta);
  if (field === "reps") newVal = Math.round(newVal);
  else newVal = parseFloat(newVal.toFixed(1));

  input.value = newVal;
  appState.loggedSets[key][field] = String(newVal);
  saveState();
  playSound("click");
};

// Prev / Next day click handlers
const btnPrev = document.getElementById("btn-prev-day");
const btnNext = document.getElementById("btn-next-day");
if (btnPrev) {
  btnPrev.addEventListener("click", () => {
    if (appState.currentDay > 1) {
      appState.currentDay--;
      saveState();
      renderTodayWorkout();
    }
  });
}
if (btnNext) {
  btnNext.addEventListener("click", () => {
    if (appState.currentDay < 100) {
      appState.currentDay++;
      saveState();
      renderTodayWorkout();
    }
  });
}

// Gym vs Room switcher button
const btnToggleMode = document.getElementById("btn-toggle-mode");
if (btnToggleMode) {
  btnToggleMode.addEventListener("click", () => {
    const dayNum = appState.currentDay;
    const currentOverride = appState.modeOverrides[dayNum];
    if (currentOverride === "room") {
      delete appState.modeOverrides[dayNum];
    } else {
      appState.modeOverrides[dayNum] = "room";
    }
    saveState();
    renderTodayWorkout();
  });
}

// Complete Day Button Handler with Confetti & Modal Celebration
const btnCompleteDay = document.getElementById("btn-complete-day");
if (btnCompleteDay) {
  btnCompleteDay.addEventListener("click", () => {
    const dayNum = appState.currentDay;
    const idx = appState.completedDays.indexOf(dayNum);
    if (idx >= 0) {
      // Undo completion
      appState.completedDays.splice(idx, 1);
      saveState();
      renderTodayWorkout();
    } else {
      // Complete day!
      appState.completedDays.push(dayNum);
      saveState();
      renderTodayWorkout();
      playSound("celebrate");
      triggerConfetti();
      openCelebrationModal(dayNum);
    }
  });
}

// Accordion Toggles
const warmupToggle = document.getElementById("warmup-toggle");
const cooldownToggle = document.getElementById("cooldown-toggle");
if (warmupToggle) {
  warmupToggle.addEventListener("click", () => {
    const list = document.getElementById("warmup-list");
    const acc = document.getElementById("warmup-accordion");
    if (list && acc) {
      const isHidden = list.style.display === "none";
      list.style.display = isHidden ? "grid" : "none";
      acc.classList.toggle("open", isHidden);
    }
  });
}
if (cooldownToggle) {
  cooldownToggle.addEventListener("click", () => {
    const list = document.getElementById("cooldown-list");
    const acc = document.getElementById("cooldown-accordion");
    if (list && acc) {
      const isHidden = list.style.display === "none";
      list.style.display = isHidden ? "grid" : "none";
      acc.classList.toggle("open", isHidden);
    }
  });
}

// ============================================================================
// VIEW 2: 100-DAY ROADMAP & CALENDAR
// ============================================================================
let currentRoadmapFilter = "all";

function renderCalendarGrid() {
  const container = document.getElementById("calendar-grid-container");
  if (!container) return;
  container.innerHTML = "";

  const filteredDays = WORKOUT_DAYS.filter(d => {
    const isCompleted = appState.completedDays.includes(d.day);
    if (currentRoadmapFilter === "phase1") return d.phase === 1;
    if (currentRoadmapFilter === "phase2") return d.phase === 2;
    if (currentRoadmapFilter === "phase3") return d.phase === 3;
    if (currentRoadmapFilter === "gym") return d.type === "gym";
    if (currentRoadmapFilter === "home") return d.type === "home";
    if (currentRoadmapFilter === "completed") return isCompleted;
    return true;
  });

  filteredDays.forEach(d => {
    const isCompleted = appState.completedDays.includes(d.day);
    const isCurrent = appState.currentDay === d.day;
    const card = document.createElement("div");
    card.className = `day-badge-card ${isCompleted ? 'completed' : ''} ${isCurrent ? 'active-day' : ''}`;
    
    card.innerHTML = `
      <div class="day-badge-top">
        <span class="day-num">D${d.day}</span>
        <span class="badge ${d.type === 'gym' ? 'gym' : 'home'}">${d.type === 'gym' ? 'Gym' : 'Room'}</span>
      </div>
      <div class="day-badge-title">${d.dayName}: ${d.title.split(":")[0]}</div>
      <div class="day-badge-footer">
        <span class="badge phase${d.phase}">P${d.phase}</span>
        <span>${isCompleted ? '✅ Done' : '○ Pending'}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      appState.currentDay = d.day;
      saveState();
      renderTodayWorkout();
      switchTab("tab-today");
    });

    container.appendChild(card);
  });
}

// Filter chips in roadmap
document.querySelectorAll("#roadmap-filter-group .filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#roadmap-filter-group .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentRoadmapFilter = chip.dataset.filter;
    renderCalendarGrid();
  });
});

// ============================================================================
// VIEW 3: EXERCISE & AGILITY LIBRARY (Visual Gallery)
// ============================================================================
let currentLibCategory = "all";
let searchKeyword = "";

function renderExerciseLibrary() {
  const container = document.getElementById("lib-cards-container");
  if (!container) return;
  container.innerHTML = "";

  const exerciseEntries = Object.entries(EXERCISE_LIBRARY);

  const filtered = exerciseEntries.filter(([id, ex]) => {
    const matchesCat = currentLibCategory === "all" || ex.category.includes(currentLibCategory);
    const textTarget = (ex.name + " " + ex.target + " " + ex.category + " " + ex.equipment + " " + (ex.cues ? ex.cues.join(" ") : "")).toLowerCase();
    const matchesSearch = !searchKeyword || textTarget.includes(searchKeyword.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 30px; grid-column: 1/-1; text-align: center;">No exercises found matching your search.</p>`;
    return;
  }

  filtered.forEach(([id, ex]) => {
    const imageSrc = ex.image || `assets/exercises/${id}.svg`;
    const card = document.createElement("div");
    card.className = "lib-card";
    
    card.innerHTML = `
      <div class="lib-card-img-wrap" onclick="window.openExerciseModal('${id}')" title="View form cues">
        <img src="${imageSrc}" alt="${ex.name}" loading="lazy"
             onerror="this.onerror=null; this.src='assets/exercises/db_flat_bench_press.svg';">
      </div>
      <div class="lib-card-body">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <h4 style="font-size: 1.05rem; font-weight: 800;">${ex.name}</h4>
            <span class="badge phase1">${ex.category}</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--accent-cyan-light); font-weight: 600;">🎯 ${ex.target}</p>
          <p style="font-size: 0.76rem; color: var(--text-dim); margin-top: 4px;">🛠️ ${ex.equipment}</p>
          
          <div class="lib-posture-box">
            <strong>Posture &amp; Waist Benefit:</strong><br>
            ${ex.postureBenefit}
          </div>
        </div>

        <button class="btn-primary" style="margin-top: 14px; font-size: 0.84rem; padding: 10px;" onclick="window.openExerciseModal('${id}')">
          📖 View Step-by-Step Form &amp; Mistakes
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Search input listener
const libSearchInput = document.getElementById("lib-search-input");
if (libSearchInput) {
  libSearchInput.addEventListener("input", (e) => {
    searchKeyword = e.target.value.trim();
    renderExerciseLibrary();
  });
}

// Category filter listener
document.querySelectorAll("#lib-category-filters .filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#lib-category-filters .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentLibCategory = chip.dataset.cat;
    renderExerciseLibrary();
  });
});

// ============================================================================
// VIEW 4: BELLY FAT & RECOMPOSITION NUTRITION
// ============================================================================
function renderNutritionView() {
  // Render Belly Fat Insights
  const insightsContainer = document.getElementById("belly-fat-insights");
  if (insightsContainer) {
    insightsContainer.innerHTML = NUTRITION_DATA.bellyFatTruths.map(truth => `
      <div class="insight-item">
        <h4><span>🛡️</span> ${truth.title}</h4>
        <p>${truth.desc}</p>
      </div>
    `).join("");
  }

  // Render High-Protein Food Sources Table
  const foodTableBody = document.getElementById("food-table-body");
  if (foodTableBody) {
    const proteinFoods = NUTRITION_DATA.foodSources[0].items;
    foodTableBody.innerHTML = proteinFoods.map(item => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.serving}</td>
        <td style="color: var(--accent-emerald-light); font-weight: 800;">${item.protein}</td>
        <td>${item.calories}</td>
      </tr>
    `).join("");
  }

  // Render Water Glasses
  renderWaterTracker();
}

function renderWaterTracker() {
  const container = document.getElementById("water-glasses-container");
  if (!container) return;

  const totalGlasses = 10; // 10 * 350ml = 3.5L
  let html = "";
  for (let i = 1; i <= totalGlasses; i++) {
    const isFilled = i <= appState.waterGlasses;
    html += `
      <div class="water-glass-btn ${isFilled ? 'filled' : ''}" onclick="window.toggleWaterGlass(${i})" title="Glass ${i}: 350ml">
        <span>${isFilled ? '💧' : '🥛'}</span>
        <span class="glass-label">${i * 350}ml</span>
      </div>
    `;
  }
  container.innerHTML = html;
}

window.toggleWaterGlass = function(glassIndex) {
  if (appState.waterGlasses === glassIndex) {
    appState.waterGlasses = glassIndex - 1;
  } else {
    appState.waterGlasses = glassIndex;
    playSound("water");
  }
  saveState();
  renderWaterTracker();
};

const btnResetWater = document.getElementById("btn-reset-water");
if (btnResetWater) {
  btnResetWater.addEventListener("click", () => {
    appState.waterGlasses = 0;
    saveState();
    renderWaterTracker();
  });
}

// ============================================================================
// VIEW 5: PROGRESS & WAIST MEASUREMENT TRACKER
// ============================================================================
const measurementForm = document.getElementById("measurement-log-form");
if (measurementForm) {
  const dateInput = document.getElementById("log-date");
  if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];

  measurementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("log-date").value;
    const weight = parseFloat(document.getElementById("log-weight").value);
    const waist = parseFloat(document.getElementById("log-waist").value);
    const energy = parseInt(document.getElementById("log-notes").value, 10) || 8;

    if (!date || isNaN(weight) || isNaN(waist)) {
      alert("Please provide valid date, weight, and waist measurements.");
      return;
    }

    const newEntry = {
      id: "log_" + Date.now(),
      date,
      weight,
      waist,
      energy
    };

    appState.measurements.push(newEntry);
    appState.measurements.sort((a, b) => new Date(a.date) - new Date(b.date));
    saveState();

    measurementForm.reset();
    if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];

    renderProgressTable();
    renderProgressChart();
  });
}

function renderProgressTable() {
  const tableBody = document.getElementById("progress-log-table-body");
  if (!tableBody) return;

  if (!appState.measurements.length) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 20px;">No measurements logged yet.</td></tr>`;
    return;
  }

  tableBody.innerHTML = [...appState.measurements].reverse().map(m => `
    <tr>
      <td><strong>${m.date}</strong></td>
      <td style="color: var(--accent-cyan-light); font-weight: 800;">${m.weight.toFixed(1)} kg</td>
      <td style="color: var(--accent-coral-light); font-weight: 800;">${m.waist.toFixed(1)}"</td>
      <td>${m.energy ? m.energy + "/10 ⚡" : "-"}</td>
      <td>
        <button class="day-nav-btn" style="padding: 4px 10px; font-size: 0.74rem; color: var(--accent-coral-light);" 
                onclick="window.deleteMeasurement('${m.id}')">Delete</button>
      </td>
    </tr>
  `).join("");
}

window.deleteMeasurement = function(id) {
  if (confirm("Delete this measurement entry?")) {
    appState.measurements = appState.measurements.filter(m => m.id !== id);
    saveState();
    renderProgressTable();
    renderProgressChart();
  }
};

function renderProgressChart() {
  const svg = document.getElementById("progress-svg-chart");
  if (!svg) return;

  const logs = appState.measurements;
  if (!logs || logs.length < 1) {
    svg.innerHTML = `<text x="250" y="100" text-anchor="middle" fill="#64748b" font-size="14">Log measurements to view trend lines</text>`;
    return;
  }

  const width = 500;
  const height = 200;
  const padLeft = 45;
  const padRight = 35;
  const padTop = 30;
  const padBottom = 30;

  const weights = logs.map(l => l.weight);
  const waists = logs.map(l => l.waist);

  const minWeight = Math.min(...weights) - 1;
  const maxWeight = Math.max(...weights) + 1;
  const minWaist = Math.min(...waists) - 1;
  const maxWaist = Math.max(...waists) + 1;

  const pointsCount = logs.length;
  const xStep = pointsCount > 1 ? (width - padLeft - padRight) / (pointsCount - 1) : 0;

  // Weight coordinates (Cyan)
  const weightPoints = logs.map((l, i) => {
    const x = pointsCount === 1 ? width / 2 : padLeft + i * xStep;
    const yRange = maxWeight - minWeight || 1;
    const y = height - padBottom - ((l.weight - minWeight) / yRange) * (height - padTop - padBottom);
    return { x, y, val: l.weight, date: l.date };
  });

  // Waist coordinates (Coral)
  const waistPoints = logs.map((l, i) => {
    const x = pointsCount === 1 ? width / 2 : padLeft + i * xStep;
    const yRange = maxWaist - minWaist || 1;
    const y = height - padBottom - ((l.waist - minWaist) / yRange) * (height - padTop - padBottom);
    return { x, y, val: l.waist, date: l.date };
  });

  const weightPathD = pointsCount > 1 
    ? "M " + weightPoints.map(p => `${p.x},${p.y}`).join(" L ") 
    : "";
  const waistPathD = pointsCount > 1 
    ? "M " + waistPoints.map(p => `${p.x},${p.y}`).join(" L ") 
    : "";

  let svgContent = `
    <!-- Grid -->
    <line x1="${padLeft}" y1="${padTop}" x2="${width - padRight}" y2="${padTop}" stroke="#1e293b" stroke-dasharray="4" />
    <line x1="${padLeft}" y1="${(padTop + height - padBottom) / 2}" x2="${width - padRight}" y2="${(padTop + height - padBottom) / 2}" stroke="#1e293b" stroke-dasharray="4" />
    <line x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}" stroke="#334155" />
    
    <!-- Paths -->
    ${weightPathD ? `<path d="${weightPathD}" fill="none" stroke="var(--accent-cyan)" stroke-width="3" stroke-linecap="round" />` : ""}
    ${waistPathD ? `<path d="${waistPathD}" fill="none" stroke="var(--accent-coral)" stroke-width="3" stroke-linecap="round" />` : ""}
  `;

  weightPoints.forEach(p => {
    svgContent += `
      <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--accent-cyan)" />
      <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" fill="var(--accent-cyan-light)" font-size="10" font-weight="bold">${p.val}k</text>
    `;
  });

  waistPoints.forEach(p => {
    svgContent += `
      <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--accent-coral)" />
      <text x="${p.x}" y="${p.y + 16}" text-anchor="middle" fill="var(--accent-coral-light)" font-size="10" font-weight="bold">${p.val}"</text>
    `;
  });

  svg.innerHTML = svgContent;
}

// Export Backup & Print View
const btnExport = document.getElementById("btn-export-data");
if (btnExport) {
  btnExport.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `gymtransform100_backup_${new Date().toISOString().split("T")[0]}.json`);
    dlAnchor.click();
  });
}

const btnPrint = document.getElementById("btn-print-summary");
if (btnPrint) {
  btnPrint.addEventListener("click", () => {
    window.print();
  });
}

// ============================================================================
// MODAL DIALOGS (Form Guide, Quick Jump, Celebration)
// ============================================================================
const modalDialog = document.getElementById("exercise-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnPracticeTimer = document.getElementById("btn-modal-practice-timer");

window.openExerciseModal = function(exId) {
  const entry = EXERCISE_LIBRARY[exId];
  if (!entry || !modalDialog) return;

  document.getElementById("modal-exercise-name").textContent = entry.name;
  document.getElementById("modal-exercise-target").textContent = entry.target;
  document.getElementById("modal-posture-benefit").textContent = entry.postureBenefit;
  document.getElementById("modal-pro-tip").textContent = entry.proTip;
  document.getElementById("modal-mistake").textContent = entry.mistake;

  const modalImg = document.getElementById("modal-exercise-image");
  if (modalImg) {
    modalImg.src = entry.image || `assets/exercises/${exId}.svg`;
  }

  const stepList = document.getElementById("modal-step-list");
  if (stepList && entry.steps) {
    stepList.innerHTML = entry.steps.map(s => `<li>${s}</li>`).join("");
  }

  modalDialog.showModal();
};

if (btnCloseModal && modalDialog) {
  btnCloseModal.addEventListener("click", () => {
    modalDialog.close();
  });

  modalDialog.addEventListener("click", (e) => {
    const rect = modalDialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modalDialog.close();
    }
  });
}

if (btnPracticeTimer) {
  btnPracticeTimer.addEventListener("click", () => {
    if (modalDialog) modalDialog.close();
    startTimer(30);
  });
}

// Quick Jump Modal
const jumpModal = document.getElementById("jump-modal");
const btnQuickJump = document.getElementById("btn-quick-jump");
const btnCloseJumpModal = document.getElementById("btn-close-jump-modal");
const btnConfirmJump = document.getElementById("btn-confirm-jump");
const jumpDayInput = document.getElementById("jump-day-input");

if (btnQuickJump && jumpModal) {
  btnQuickJump.addEventListener("click", () => {
    jumpModal.showModal();
    if (jumpDayInput) jumpDayInput.focus();
  });
}

function closeJumpModal() {
  if (jumpModal) jumpModal.close();
}

if (btnCloseJumpModal) {
  btnCloseJumpModal.addEventListener("click", closeJumpModal);
}

if (btnConfirmJump && jumpDayInput) {
  btnConfirmJump.addEventListener("click", () => {
    const val = parseInt(jumpDayInput.value, 10);
    if (!isNaN(val)) {
      window.jumpToDay(val);
    }
  });
}

// Celebration Modal
const celebrationModal = document.getElementById("celebration-modal");
const btnCloseCelebration = document.getElementById("btn-close-celebration-modal");
const btnCelebrationNextDay = document.getElementById("btn-celebration-next-day");

function openCelebrationModal(dayNum) {
  if (!celebrationModal) return;
  document.getElementById("celebration-heading").textContent = `Day ${dayNum} Completed!`;
  document.getElementById("celebration-streak-val").textContent = `${calculateStreak()} Days 🔥`;
  celebrationModal.showModal();
}

if (btnCloseCelebration && celebrationModal) {
  btnCloseCelebration.addEventListener("click", () => celebrationModal.close());
}

if (btnCelebrationNextDay && celebrationModal) {
  btnCelebrationNextDay.addEventListener("click", () => {
    celebrationModal.close();
    if (appState.currentDay < 100) {
      appState.currentDay++;
      saveState();
      renderTodayWorkout();
    }
  });
}

// ============================================================================
// LIGHTWEIGHT CANVAS CONFETTI (Zero External CDN)
// ============================================================================
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const count = 120;
  const colors = ["#06b6d4", "#10b981", "#f43f5e", "#f59e0b", "#8b5cf6", "#ffffff"];

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animationId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  updateConfetti();
}

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateHeaderStats();
  renderTodayWorkout();
  renderNutritionView();
  updateTimerDisplay();
});
