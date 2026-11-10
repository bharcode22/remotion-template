export const NETLIFY_COLORS = {
  // Deep Cyber & Midnight Navy Canvas
  bgDark: "#040914",
  bgSlate: "#071120",
  bgCard: "rgba(11, 26, 47, 0.75)",
  borderGlass: "rgba(255, 255, 255, 0.14)",

  // Pristine Glassmorphism Tokens
  glassBg:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(11, 26, 47, 0.55) 50%, rgba(4, 9, 20, 0.72) 100%)",
  glassBorder: "1.5px solid rgba(255, 255, 255, 0.22)",
  glassBorderSubtle: "1px solid rgba(255, 255, 255, 0.14)",
  glassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.55), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2)",
  glassBlur: "blur(28px) saturate(190%)",
  glassItemBg: "rgba(255, 255, 255, 0.05)",
  glassItemBorder: "1px solid rgba(255, 255, 255, 0.14)",

  // Netlify Signature Palette (Teal, Aqua, Cyan)
  netlifyTeal: "#00c7b7",
  netlifyTealDark: "#009387",
  netlifyAqua: "#32e6e2",
  netlifyCyan: "#38bdf8",
  netlifyGlow: "rgba(0, 199, 183, 0.4)",
  netlifyGlassBg:
    "linear-gradient(135deg, rgba(0, 199, 183, 0.16) 0%, rgba(11, 26, 47, 0.55) 50%, rgba(4, 9, 20, 0.75) 100%)",
  netlifyGlassBorder: "1.5px solid rgba(0, 199, 183, 0.55)",

  // React & Web Vibrant Cyan Theme
  reactCyan: "#61dafb",
  reactBlue: "#0ea5e9",
  reactGlow: "rgba(97, 218, 251, 0.4)",

  // Free / Sparkle Mint Theme
  freeGreen: "#10b981",
  freeMint: "#34d399",
  freeGlow: "rgba(16, 185, 129, 0.4)",

  // Dilemma / Question Amber Theme
  questionAmber: "#f59e0b",
  questionGold: "#fbbf24",
  questionGlow: "rgba(245, 158, 11, 0.35)",

  // 404 & Warning Alert Coral / Crimson
  warningRose: "#f43f5e",
  warningCrimson: "#e11d48",
  warningGlow: "rgba(244, 63, 94, 0.4)",

  // Purple Accent
  purpleAccent: "#a855f7",
  purpleGlow: "rgba(168, 85, 247, 0.4)",

  // Neutral Text Hierarchy
  textPrimary: "#ffffff",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",
  textDim: "#64748b",
};

export const FONT_PRIMARY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
export const FONT_MONO =
  'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// 24.36s audio @ 30 FPS = 730.8 -> 750 frames total (clean outro)
export const TOTAL_FRAMES = 750;
export const FPS = 30;

// Safe margin inset for Instagram Reels / Stories anti-crop
export const CONTENT_INSET_X = 96;

/**
 * Scene boundaries aligned with new naskah19 & voiceover watermark-netlify.wav
 */
export const SCENE_RANGES = {
  // Line 1: "Web yang kamu deploy di netlify ada watermarknya.?" (Audio 0.00s - 2.58s)
  scene1_intro_watermark: { start: 0, end: 90 },
  // Line 2 & 3: "Jika kamu tidak mau ada watermarknya, Gampang." (Audio 3.30s - 6.38s)
  scene2_solution_easy: { start: 90, end: 200 },
  // Line 4: "1. Login ke Netlify Dashboard." (Audio 6.90s - 9.17s)
  scene3_login_dashboard: { start: 200, end: 285 },
  // Line 5: "2. Pilih project website kamu." (Audio 9.73s - 11.83s)
  scene4_select_project: { start: 285, end: 368 },
  // Line 6: "3. Buka Project configuration." (Audio 12.57s - 14.68s)
  scene5_project_config: { start: 368, end: 450 },
  // Line 7: "4. Masuk ke General." (Audio 15.20s - 17.05s)
  scene6_enter_general: { start: 450, end: 525 },
  // Line 8: "Cari bagian Powered by Netlify badge." (Audio 17.85s - 19.84s)
  scene7_find_badge: { start: 525, end: 605 },
  // Line 9: "Uncheck Show the badge on this project." (Audio 20.47s - 22.05s)
  scene8_uncheck_badge: { start: 605, end: 670 },
  // Line 10: "Save." (Audio 22.81s - 23.06s)
  scene9_save_setting: { start: 670, end: 700 },
  // Line 11: "selesai." (Audio 23.57s - 24.36s)
  scene10_outro_clean: { start: 700, end: 750 },
};

