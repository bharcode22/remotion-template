export const TOTAL_VIDEO_FRAMES = 1600; // 53.33s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1591; // 53.04s (public/planing AI.wav)

export const PLANNING_COLORS = {
  // Base Obsidian & Deep Space
  bgDark: "#030712",
  bgSurface: "rgba(11, 16, 27, 0.95)",
  cardBorder: "rgba(139, 92, 246, 0.25)",

  // Typography
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // Modern AI Violet & Purple
  aiViolet: "#8b5cf6",
  aiPurple: "#a855f7",
  aiIndigo: "#6366f1",
  aiGlow: "rgba(139, 92, 246, 0.35)",

  // Developer Cyan & Sky
  cyberCyan: "#06b6d4",
  skyBlue: "#38bdf8",
  cyanGlow: "rgba(6, 182, 212, 0.35)",

  // Structured Foundation & Architecture Emerald
  structureGreen: "#10b981",
  mintGlow: "rgba(16, 185, 129, 0.35)",

  // Value Amber & Question Accent
  valueAmber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.35)",
  dangerRose: "#f43f5e",
};

// Scene Timings for Naskah 13 (Voiceover: public/planing AI.wav)
export const SCENE_TIMINGS = {
  // Scene 1: Hook - Ketika semua orang bisa buat aplikasi pake AI, apa nilai tambah developer? (Lines 1 - 2: F0 - F225)
  scene1: { start: 0, end: 225 },
  // Scene 2: The Core Answer - Memahami apa yang ingin dibangun & mengarahkan AI (Lines 4 - 5: F225 - F460)
  scene2: { start: 225, end: 460 },
  // Scene 3: Step 1 - Menentukan Tech Stack Terlebih Dahulu (Lines 7 - 8: F460 - F645)
  scene3: { start: 460, end: 645 },
  // Scene 4: Step 2 - Memberikan Prompt Secara Bertahap (Line 10: F645 - F805)
  scene4: { start: 645, end: 805 },
  // Scene 5: Lines 12 - 13: Struktur DB, Tipe Data, Relasi, Backend, Frontend (F805 - F1080)
  scene5: { start: 805, end: 1080 },
  // Scene 6: Benefit - Fondasi Terstruktur (Line 15: F1080 - F1205)
  scene6: { start: 1080, end: 1205 },
  scene7: { start: 1080, end: 1205 },
  // Scene 8: Long-term Impact - Mudah Maintenance & Revisi (Line 16: F1205 - F1410)
  scene8: { start: 1205, end: 1410 },
  // Scene 9: Conclusion / Golden Rule - Jangan Asal Prompt AI (Line 17: F1410 - F1600)
  scene9: { start: 1410, end: 1600 },
};

