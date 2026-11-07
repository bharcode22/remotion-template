export const REST_API_COLORS = {
  bgDark: "#060913",
  bgSlate: "#0b1120",
  surfaceCard: "rgba(15, 23, 42, 0.72)",
  surfaceGlass: "rgba(255, 255, 255, 0.06)",
  borderGlass: "rgba(255, 255, 255, 0.14)",

  // 1. GET Method Colors (Cyan)
  cyanPrimary: "#38bdf8",
  cyanGlow: "rgba(56, 189, 248, 0.4)",
  blueAccent: "#3b82f6",

  // 2. POST Method Colors (Emerald Green)
  emeraldPrimary: "#10b981",
  emeraldMint: "#34d399",
  emeraldGlow: "rgba(16, 185, 129, 0.4)",
  emeraldDark: "rgba(16, 185, 129, 0.18)",

  // 3. PUT / PATCH Method Colors (Amber / Orange)
  amberPrimary: "#f59e0b",
  amberLight: "#fbbf24",
  amberGlow: "rgba(245, 158, 11, 0.4)",
  amberDark: "rgba(245, 158, 11, 0.18)",
  orangeAccent: "#ea580c",
  orangeGlow: "rgba(234, 88, 12, 0.35)",

  // 4. DELETE Method Colors (Rose / Red)
  rosePrimary: "#f43f5e",
  roseLight: "#fb7185",
  roseGlow: "rgba(244, 63, 94, 0.4)",
  roseDark: "rgba(244, 63, 94, 0.18)",
  redPrimary: "#ef4444",
  redGlow: "rgba(239, 68, 68, 0.4)",

  // Server & Processing Colors (Violet)
  violetPrimary: "#a855f7",
  purpleAccent: "#8b5cf6",
  violetGlow: "rgba(168, 85, 247, 0.35)",

  // Text Hierarchy
  textPrimary: "#ffffff",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
};

// Backward-compatible alias
export const GET_POST_COLORS = REST_API_COLORS;

export const TOTAL_FRAMES = 1200; // 40.0 seconds @ 30fps
export const FPS = 30;
