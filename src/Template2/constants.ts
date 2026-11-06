export const TOTAL_VIDEO_FRAMES = 1600; // 53.33s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1591; // 53.04s (public/planing AI.wav)

export const GLASS_COLORS = {
  // ═══════════════════════════════════════════════════════════════════════
  // GLASSMORPHISM PALETTE — Frosted glass layers on deep gradient base
  // ═══════════════════════════════════════════════════════════════════════

  // Deep Gradient Background
  bgDark: "#0c0c1d",
  bgSurface: "rgba(255, 255, 255, 0.05)",

  // Glass Card Tokens
  glassBg: "rgba(255, 255, 255, 0.07)",
  glassBgStrong: "rgba(255, 255, 255, 0.12)",
  glassBorder: "rgba(255, 255, 255, 0.15)",
  glassBorderStrong: "rgba(255, 255, 255, 0.25)",
  glassShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
  glassShadowLg: "0 16px 48px rgba(0, 0, 0, 0.45)",

  // Typography
  textPrimary: "#f0f0f5",
  textSecondary: "#a8a8c0",
  textMuted: "#6b6b85",

  // Accent 1: Soft Violet & Lavender (AI / Intelligence)
  aiViolet: "#a78bfa",
  aiPurple: "#c084fc",
  aiIndigo: "#818cf8",
  aiGlow: "rgba(167, 139, 250, 0.2)",

  // Accent 2: Sky & Teal (Developer / Direction)
  cyberCyan: "#67e8f9",
  skyBlue: "#7dd3fc",
  cyanGlow: "rgba(103, 232, 249, 0.18)",

  // Accent 3: Emerald & Mint (Structure / Foundation)
  structureGreen: "#6ee7b7",
  mintGlow: "rgba(110, 231, 183, 0.18)",

  // Accent 4: Warm Amber & Peach (Value / Highlight)
  valueAmber: "#fbbf24",
  amberGlow: "rgba(251, 191, 36, 0.18)",
  dangerRose: "#fb7185",
};

// Scene Timings — identical to PlanningAI (same voiceover)
export const SCENE_TIMINGS = {
  scene1: { start: 0, end: 225 },
  scene2: { start: 225, end: 460 },
  scene3: { start: 460, end: 645 },
  scene4: { start: 645, end: 805 },
  scene5: { start: 805, end: 1080 },
  scene6: { start: 1080, end: 1205 },
  scene7: { start: 1080, end: 1205 },
  scene8: { start: 1205, end: 1410 },
  scene9: { start: 1410, end: 1600 },
};

