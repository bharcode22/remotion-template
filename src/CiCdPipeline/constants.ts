export const TOTAL_VIDEO_FRAMES = 1450; // 48.33s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1443; // 48.08s (public/cicd.wav)

export const CICD_COLORS = {
  // Backgrounds
  bgDark: "#030712", // Obsidian black base
  bgSurface: "rgba(11, 20, 38, 0.92)", // Glassmorphic card surface
  cardBorder: "rgba(6, 182, 212, 0.25)", // Tech cyan border

  // Text Colors
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // DevOps & CI/CD Core Accents
  pipelineCyan: "#06b6d4",
  pipelineBlue: "#0ea5e9",
  pipelineGlow: "rgba(6, 182, 212, 0.35)",

  // Git & Source Code Theme
  gitOrange: "#f97316",
  gitAmber: "#f59e0b",
  gitGlow: "rgba(249, 115, 22, 0.35)",

  // Automated Testing & Build Success (CI)
  buildGreen: "#10b981",
  buildEmerald: "#059669",
  buildGlow: "rgba(16, 185, 129, 0.35)",

  // Automated Deployment & Server (CD)
  deployPurple: "#a855f7",
  deployViolet: "#8b5cf6",
  deployGlow: "rgba(168, 85, 247, 0.35)",

  // Alert & Manual Warning
  alertRed: "#ef4444",
  alertRose: "#f43f5e",
  alertAmber: "#fbbf24",
};

// Scene Timings (synced to silence boundaries in CI:CD.wav)
export const SCENE_TIMINGS = {
  // Scene 1: Hook - Bagaimana aplikasi terus update tanpa manual? (Lines 1 - 2)
  scene1: { start: 0, end: 184 },
  // Scene 2: Reality - Developer push fitur baru & bug fix (Lines 4 - 7)
  scene2: { start: 180, end: 535 },
  // Scene 3: The Manual Bottleneck - Risiko human error & lemot (Lines 9 - 10)
  scene3: { start: 530, end: 820 },
  // Scene 4: Hero Reveal - Di sinilah CI/CD berperan (Line 12)
  scene4: { start: 815, end: 925 },
  // Scene 5: Continuous Integration (CI) - Build & Test otomatis (Line 14)
  scene5: { start: 920, end: 1110 },
  // Scene 6: Continuous Deployment (CD) - Deploy ke production (Line 15)
  scene6: { start: 1105, end: 1250 },
  // Scene 7: Grand Finale & Summary - Cepat, konsisten, minim salah (Line 16)
  scene7: { start: 1245, end: 1450 },
};

