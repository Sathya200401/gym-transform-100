/**
 * GymTransform 100 - Main Application Logic
 * State management, rest timer, interactive set tracking, 
 * waist/weight SVG charting, and modal interactions.
 */

// Global State
const STATE_KEY = "gymtransform_100_state";

const defaultState = {
  currentDay: 1,
  completedDays: [], // array of day numbers [1, 2, ...]
  modeOverrides: {}, // { dayNumber: 'gym' | 'room' }
  loggedSets: {},    // { "day_exId_setIdx": { checked: true, weight: "10", reps: "12" } }
  measurements: [
    {
      id: "baseline",
      date: new Date().toISOString().split("T")[0],
      weight: 73.0,
      waist: 35.0,
      energy: 7
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

// ============================================================================
// AUDIO SYNTHESIZER (Web Audio API - Zero External Files)
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

function playTimerChime() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Beep 1
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, now); // A5 note
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    // Beep 2 (Higher pitch finish)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1320, now + 0.18); // E6 note
    gain2.gain.setValueAtTime(0.35, now + 0.18);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.18);
    osc2.stop(now + 0.7);
  } catch (err) {
    console.warn("Web Audio chime could not play:", err);
  }
}

// ============================================================================
// REST TIMER LOGIC
// ============================================================================
let timerDurationSec = 60;
let timerRemainingSec = 60;
let timerInterval = null;
let isTimerRunning = false;

const timerDisplay = document.getElementById("timer-display");
const btnTimerStart = document.getElementById("btn-timer-start");
const btnTimerReset = document.getElementById("btn-timer-reset");
const btnTimerSound = document.getElementById("btn-timer-sound");

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = formatSeconds(timerRemainingSec);
    if (timerRemainingSec <= 5 && timerRemainingSec > 0) {
      timerDisplay.style.color = "var(--accent-coral)";
    } else if (timerRemainingSec === 0) {
      timerDisplay.style.color = "var(--accent-emerald)";
    } else {
      timerDisplay.style.color = "var(--accent-coral)";
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
    btnTimerStart.style.color = "var(--accent-amber)";
  }

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerRemainingSec > 0) {
      timerRemainingSec--;
      updateTimerDisplay();
      if (timerRemainingSec === 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (btnTimerStart) {
          btnTimerStart.textContent = "▶ Start";
          btnTimerStart.style.color = "var(--accent-emerald)";
        }
        playTimerChime();
        // Visual vibration if supported
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
    btnTimerStart.style.color = "var(--accent-emerald)";
  }
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  isTimerRunning = false;
  timerRemainingSec = timerDurationSec;
  if (btnTimerStart) {
    btnTimerStart.textContent = "▶ Start";
    btnTimerStart.style.color = "var(--accent-emerald)";
  }
  updateTimerDisplay();
}

// Preset button handlers
document.querySelectorAll(".btn-timer-preset").forEach(btn => {
  btn.addEventListener("click", () => {
    const sec = parseInt(btn.dataset.sec, 10);
    startTimer(sec);
  });
});

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

if (btnTimerSound) {
  btnTimerSound.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    btnTimerSound.textContent = soundEnabled ? "🔔 Sound On" : "🔕 Sound Off";
    btnTimerSound.style.color = soundEnabled ? "var(--text-main)" : "var(--accent-coral)";
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
  const elPhaseLabel = document.getElementById("header-phase-label");

  if (elCompleted) elCompleted.textContent = completedCount;
  if (elStreak) elStreak.textContent = streakCount;

  const pct = Math.min(100, Math.round((completedCount / 100) * 100));
  if (elProgressBar) elProgressBar.style.width = `${Math.max(1, pct)}%`;
  if (elPercentLabel) elPercentLabel.textContent = `${pct}% Complete (${completedCount}/100)`;

  // Determine active phase for current day
  const curDay = appState.currentDay || 1;
  let phaseText = "Phase 1: Foundation & Posture";
  if (curDay > 65) phaseText = "Phase 3: Peak Shred & Agility";
  else if (curDay > 30) phaseText = "Phase 2: Muscle Density & V-Taper";
  if (elPhaseLabel) elPhaseLabel.textContent = phaseText;
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
  if (tabId === "tab-roadmap") {
    renderCalendarGrid();
  } else if (tabId === "tab-library") {
    renderExerciseLibrary();
  } else if (tabId === "tab-progress") {
    renderProgressTable();
    renderProgressChart();
  }
}

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
        targetWeight: "Bodyweight (Focus on speed & form)"
      }))
    };
  }
  return original;
}

function renderTodayWorkout() {
  const dayNum = appState.currentDay;
  const day = getDayData(dayNum);

  // Update navigation labels
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
    if (modeDesc) modeDesc.textContent = "No equipment required. High agility and active recovery in your room.";
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
      if (modeDesc) modeDesc.textContent = "On holiday or working from home today? Switch to a 0-equipment room workout!";
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
      target: "Full Body",
      proTip: "Keep good posture and breathe smoothly.",
      mistake: "Avoid rushing reps."
    };

    const card = document.createElement("div");
    card.className = "exercise-card";

    // Build Set Rows
    const setRowsHtml = [];
    for (let s = 1; s <= ex.sets; s++) {
      const setKey = `${day.day}_${ex.id}_${s}`;
      const savedSet = appState.loggedSets[setKey] || { checked: false, weight: "", reps: "" };

      setRowsHtml.push(`
        <div class="set-row ${savedSet.checked ? 'done' : ''}" id="row-${setKey}">
          <div class="set-label">Set ${s}</div>
          <div class="set-inputs">
            <div class="set-input-group">
              <input type="text" placeholder="${ex.targetWeight || 'kg'}" value="${savedSet.weight}" 
                     data-key="${setKey}" data-field="weight" class="set-val-input" title="Weight used">
              <span>kg</span>
            </div>
            <div class="set-input-group">
              <input type="text" placeholder="${ex.reps}" value="${savedSet.reps}" 
                     data-key="${setKey}" data-field="reps" class="set-val-input" title="Reps completed">
              <span>reps</span>
            </div>
            <button class="quick-timer-btn" data-rest="${ex.rest || 60}" title="Start ${ex.rest || 60}s rest timer">
              ⏱️ ${ex.rest || 60}s
            </button>
            <button class="set-check-btn ${savedSet.checked ? 'checked' : ''}" 
                    data-key="${setKey}" title="Mark set finished">
              ${savedSet.checked ? '✓' : ''}
            </button>
          </div>
        </div>
      `);
    }

    card.innerHTML = `
      <div class="exercise-header">
        <div class="exercise-title-group">
          <h3>${libEntry.name}</h3>
          <div class="exercise-target">🎯 ${libEntry.target}</div>
        </div>
        <button class="guide-btn" data-exid="${ex.id}">
          <span>📖</span> Form Guide
        </button>
      </div>

      <div class="exercise-meta-pills">
        <div class="pill">Sets: <strong>${ex.sets}</strong></div>
        <div class="pill">Target Reps: <strong>${ex.reps}</strong></div>
        <div class="pill">Rest: <strong>${ex.rest || 60}s</strong></div>
        <div class="pill">Suggested: <strong>${ex.targetWeight || 'Bodyweight'}</strong></div>
      </div>

      <div class="sets-grid">
        ${setRowsHtml.join("")}
      </div>
    `;

    container.appendChild(card);
  });

  // Attach event listeners for inputs, checks, and rest triggers
  container.querySelectorAll(".set-val-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const key = e.target.dataset.key;
      const field = e.target.dataset.field;
      if (!appState.loggedSets[key]) appState.loggedSets[key] = { checked: false, weight: "", reps: "" };
      appState.loggedSets[key][field] = e.target.value.trim();
      saveState();
    });
  });

  container.querySelectorAll(".set-check-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const key = btn.dataset.key;
      if (!appState.loggedSets[key]) appState.loggedSets[key] = { checked: false, weight: "", reps: "" };
      appState.loggedSets[key].checked = !appState.loggedSets[key].checked;
      
      const row = document.getElementById(`row-${key}`);
      if (row) row.classList.toggle("done", appState.loggedSets[key].checked);
      btn.classList.toggle("checked", appState.loggedSets[key].checked);
      btn.textContent = appState.loggedSets[key].checked ? "✓" : "";

      saveState();

      // If checked, automatically start the rest timer!
      if (appState.loggedSets[key].checked) {
        const restBtn = row.querySelector(".quick-timer-btn");
        const restSec = restBtn ? parseInt(restBtn.dataset.rest, 10) : 60;
        startTimer(restSec);
      }
    });
  });

  container.querySelectorAll(".quick-timer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const sec = parseInt(btn.dataset.rest, 10) || 60;
      startTimer(sec);
    });
  });

  container.querySelectorAll(".guide-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openExerciseModal(btn.dataset.exid);
    });
  });
}

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

// Mark Day Completed button
const btnCompleteDay = document.getElementById("btn-complete-day");
if (btnCompleteDay) {
  btnCompleteDay.addEventListener("click", () => {
    const dayNum = appState.currentDay;
    const idx = appState.completedDays.indexOf(dayNum);
    if (idx >= 0) {
      appState.completedDays.splice(idx, 1);
    } else {
      appState.completedDays.push(dayNum);
      // Play celebratory chime
      playTimerChime();
    }
    saveState();
    renderTodayWorkout();
  });
}

// Accordion Collapses
const warmupToggle = document.getElementById("warmup-toggle");
const cooldownToggle = document.getElementById("cooldown-toggle");
if (warmupToggle) {
  warmupToggle.addEventListener("click", () => {
    const list = document.getElementById("warmup-list");
    if (list) list.style.display = list.style.display === "none" ? "grid" : "none";
  });
}
if (cooldownToggle) {
  cooldownToggle.addEventListener("click", () => {
    const list = document.getElementById("cooldown-list");
    if (list) list.style.display = list.style.display === "none" ? "grid" : "none";
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
        <span>${isCompleted ? '✅' : '○'}</span>
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
// VIEW 3: EXERCISE & AGILITY LIBRARY
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
    const textTarget = (ex.name + " " + ex.target + " " + ex.category + " " + ex.equipment).toLowerCase();
    const matchesSearch = !searchKeyword || textTarget.includes(searchKeyword.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 20px;">No exercises found matching your search.</p>`;
    return;
  }

  filtered.forEach(([id, ex]) => {
    const card = document.createElement("div");
    card.className = "lib-card";
    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <h4>${ex.name}</h4>
          <span class="badge phase1">${ex.category}</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 600;">🎯 ${ex.target}</p>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">🛠️ ${ex.equipment}</p>
        
        <div class="lib-posture-box">
          <strong>Posture &amp; Waist Benefit:</strong><br>
          ${ex.postureBenefit}
        </div>
      </div>

      <button class="btn-primary" style="margin-top: 12px; font-size: 0.8rem; padding: 8px;" data-exid="${id}">
        📖 View Step-by-Step Form &amp; Mistakes
      </button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openExerciseModal(id);
    });

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
        <td style="color: var(--accent-emerald); font-weight: 700;">${item.protein}</td>
        <td>${item.calories}</td>
      </tr>
    `).join("");
  }
}

// ============================================================================
// VIEW 5: PROGRESS & WAIST MEASUREMENT TRACKER
// ============================================================================
const measurementForm = document.getElementById("measurement-log-form");
if (measurementForm) {
  // Pre-fill today's date
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
    // Sort chronologically
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
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No measurements logged yet.</td></tr>`;
    return;
  }

  tableBody.innerHTML = [...appState.measurements].reverse().map(m => `
    <tr>
      <td>${m.date}</td>
      <td style="color: var(--accent-cyan); font-weight: 700;">${m.weight.toFixed(1)} kg</td>
      <td style="color: var(--accent-coral); font-weight: 700;">${m.waist.toFixed(1)}"</td>
      <td>${m.energy ? m.energy + "/10 ⚡" : "-"}</td>
      <td>
        <button class="day-nav-btn" style="padding: 3px 8px; font-size: 0.72rem; color: var(--accent-coral);" 
                onclick="deleteMeasurement('${m.id}')">Delete</button>
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
  const padLeft = 40;
  const padRight = 30;
  const padTop = 30;
  const padBottom = 30;

  // Min and max for waist (inches) and weight (kg)
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
    <!-- Background Grid Lines -->
    <line x1="${padLeft}" y1="${padTop}" x2="${width - padRight}" y2="${padTop}" stroke="#1e293b" stroke-dasharray="4" />
    <line x1="${padLeft}" y1="${(padTop + height - padBottom) / 2}" x2="${width - padRight}" y2="${(padTop + height - padBottom) / 2}" stroke="#1e293b" stroke-dasharray="4" />
    <line x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}" stroke="#334155" />
    
    <!-- Trend Paths -->
    ${weightPathD ? `<path d="${weightPathD}" fill="none" stroke="var(--accent-cyan)" stroke-width="3" stroke-linecap="round" />` : ""}
    ${waistPathD ? `<path d="${waistPathD}" fill="none" stroke="var(--accent-coral)" stroke-width="3" stroke-linecap="round" />` : ""}
  `;

  // Draw Weight Points
  weightPoints.forEach(p => {
    svgContent += `
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--accent-cyan)" />
      <text x="${p.x}" y="${p.y - 8}" text-anchor="middle" fill="var(--accent-cyan)" font-size="10" font-weight="bold">${p.val}k</text>
    `;
  });

  // Draw Waist Points
  waistPoints.forEach(p => {
    svgContent += `
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--accent-coral)" />
      <text x="${p.x}" y="${p.y + 14}" text-anchor="middle" fill="var(--accent-coral)" font-size="10" font-weight="bold">${p.val}"</text>
    `;
  });

  svg.innerHTML = svgContent;
}

// Export Backup and Print View handlers
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
// EXERCISE TECHNIQUE MODAL DIALOG
// ============================================================================
const modalDialog = document.getElementById("exercise-modal");
const btnCloseModal = document.getElementById("btn-close-modal");

function openExerciseModal(exId) {
  const entry = EXERCISE_LIBRARY[exId];
  if (!entry || !modalDialog) return;

  document.getElementById("modal-exercise-name").textContent = entry.name;
  document.getElementById("modal-exercise-target").textContent = entry.target;
  document.getElementById("modal-posture-benefit").textContent = entry.postureBenefit;
  document.getElementById("modal-pro-tip").textContent = entry.proTip;
  document.getElementById("modal-mistake").textContent = entry.mistake;

  const stepList = document.getElementById("modal-step-list");
  if (stepList) {
    stepList.innerHTML = entry.steps.map(s => `<li>${s}</li>`).join("");
  }

  modalDialog.showModal();
}

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

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateHeaderStats();
  renderTodayWorkout();
  renderNutritionView();
  updateTimerDisplay();
});
