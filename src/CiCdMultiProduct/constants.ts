export const TOTAL_VIDEO_FRAMES = 1440; // 48.0s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1432; // 47.72s (public/cicd_multi_product.wav)

export const MULTI_COLORS = {
  // Backgrounds
  bgDark: "#030712", // Obsidian black base
  bgSurface: "rgba(10, 18, 36, 0.94)", // Glassmorphic card surface
  cardBorder: "rgba(56, 189, 248, 0.25)", // Tech cyan border

  // Text Colors
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // Brand & Tech Accents
  gitlabOrange: "#fc6d26",
  gitlabRed: "#e24329",
  gitlabPurple: "#6b4fbb",
  gitlabGlow: "rgba(252, 109, 38, 0.35)",

  // Global Multi-Server & Cloud Storage Accents
  cyberCyan: "#06b6d4",
  skyBlue: "#38bdf8",
  cloudBlue: "#0284c7",
  cloudGlow: "rgba(56, 189, 248, 0.35)",

  // Success & Deployment Active
  activeGreen: "#10b981",
  emeraldGlow: "rgba(16, 185, 129, 0.35)",

  // Bottleneck & Warning Accents
  alertRed: "#ef4444",
  alertAmber: "#f59e0b",
  alertGlow: "rgba(239, 68, 68, 0.35)",
};

// Scene Timings (synced to silence boundaries in public/cicd_multi_product.wav)
export const SCENE_TIMINGS = {
  // Scene 1: Hook - Update aplikasi ke ratusan server di berbagai dunia (Lines 1 - 2, F0 - F152)
  scene1: { start: 0, end: 170 },
  // Scene 2: Dilema Manual - Deployment satu per satu & risiko beda versi (Lines 4 - 6, F178 - F425)
  scene2: { start: 168, end: 454 },
  // Scene 3: Turning Point - Nah, bagaimana cara mengatasinya? (Line 8, F454 - F534)
  scene3: { start: 454, end: 534 },
  // Scene 4: Camera Journey - Pipeline -> Build Artefak -> Cloud Storage -> Multi-Target (Lines 10 - 13, F534 - F1065)
  scene4: { start: 534, end: 1065 },
  // Scene 5: Kesimpulan - Cukup build 1x, distribusikan ke seluruh dunia (Lines 15 - 16, F1065 - F1440)
  scene5: { start: 1065, end: 1440 },
};

