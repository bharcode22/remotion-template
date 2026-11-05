export const TOTAL_VIDEO_FRAMES = 1710; // 57.0s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1701; // 56.68s (public/basic.wav)

export const INTRO_COLORS = {
  // Base Obsidian & Slate
  bgDark: "#030712",
  bgSurface: "rgba(10, 18, 36, 0.94)",
  cardBorder: "rgba(56, 189, 248, 0.25)",

  // Typography
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // IoT & Wellness Green
  wellnessGreen: "#10b981",
  wellnessMint: "#34d399",
  wellnessGlow: "rgba(16, 185, 129, 0.35)",

  // Cloud & Connectivity Cyan / Sky
  cyberCyan: "#06b6d4",
  skyBlue: "#38bdf8",
  cloudBlue: "#0284c7",
  cyanGlow: "rgba(6, 182, 212, 0.35)",

  // Debian Red & Hardware Accent
  debianRed: "#e11d48",
  debianRuby: "#be123c",
  debianGlow: "rgba(225, 29, 72, 0.35)",

  // Hardware Amber / Sensor
  sensorAmber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.35)",
};

// Scene Timings for Naskah 12 (Voiceover: public/basic.wav)
export const SCENE_TIMINGS = {
  // Scene 1: Hook - Sebelum membahas arsitektur software... (Line 1: F0 - F100)
  scene1: { start: 0, end: 100 },
  // Scene 2: Terminal Intro - Kenalan dulu dengan produk yang aku kembangkan (Line 2: F100 - F200)
  scene2: { start: 100, end: 200 },
  // Scene 3: Camera Journey - IoT & Wellness ➔ Pod Capsule ➔ Debian PC (Lines 4 - 6: F200 - F575)
  scene3: { start: 200, end: 575 },
  // Scene 4: Interconnected Architecture - PC Pusat Kendali Hardware & Software (Line 8: F575 - F770)
  scene4: { start: 575, end: 770 },
  // Scene 5: The Challenge - Harus Tetap Berjalan Online Maupun Offline (Lines 10 - 11: F770 - F980)
  scene5: { start: 770, end: 980 },
  // Scene 6: Two-Way Synchronization Mechanism Hook (Line 13: F980 - F1110)
  scene6: { start: 980, end: 1110 },
  // Scene 7: Downstream Distribution - Dari Cloud ke Produk (Line 14: F1110 - F1295)
  scene7: { start: 1110, end: 1295 },
  // Scene 8: Upstream Telemetry - Dari Produk ke Cloud (Line 15: F1295 - F1470)
  scene8: { start: 1295, end: 1470 },
  // Scene 9: Grand Finale - Hybrid Edge-Cloud Synthesis (Line 17: F1470 - F1710)
  scene9: { start: 1470, end: 1710 },
};

