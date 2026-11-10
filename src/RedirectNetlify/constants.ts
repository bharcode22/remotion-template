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
  glassItemShadow:
    "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 6px 20px rgba(0, 0, 0, 0.25)",

  // Netlify Signature Palette (Teal, Aqua, Cyan)
  netlifyTeal: "#00c7b7",
  netlifyTealDark: "#009387",
  netlifyAqua: "#32e6e2",
  netlifyCyan: "#38bdf8",
  netlifyGlow: "rgba(0, 199, 183, 0.4)",
  netlifyGlassBg:
    "linear-gradient(135deg, rgba(0, 199, 183, 0.16) 0%, rgba(11, 26, 47, 0.55) 50%, rgba(4, 9, 20, 0.75) 100%)",
  netlifyGlassBorder: "1.5px solid rgba(0, 199, 183, 0.55)",
  netlifyGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.55), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(0, 199, 183, 0.3)",

  // React Vibrant Cyan Theme
  reactCyan: "#61dafb",
  reactBlue: "#0ea5e9",
  reactGlow: "rgba(97, 218, 251, 0.4)",
  reactGlassBg:
    "linear-gradient(135deg, rgba(97, 218, 251, 0.16) 0%, rgba(11, 26, 47, 0.55) 50%, rgba(4, 9, 20, 0.75) 100%)",
  reactGlassBorder: "1.5px solid rgba(97, 218, 251, 0.55)",

  // Free / Sparkle Mint Theme
  freeGreen: "#10b981",
  freeMint: "#34d399",
  freeGlow: "rgba(16, 185, 129, 0.4)",

  // Dilemma / Deploy Question Theme (Amber & Sunset Coral)
  questionAmber: "#f59e0b",
  questionGold: "#fbbf24",
  questionGlow: "rgba(245, 158, 11, 0.35)",
  questionGlassBg:
    "linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(11, 26, 47, 0.55) 50%, rgba(4, 9, 20, 0.75) 100%)",
  questionGlassBorder: "1.5px solid rgba(245, 158, 11, 0.5)",

  // 404 & Warning Alert Coral / Crimson
  warningRose: "#f43f5e",
  warningCrimson: "#e11d48",
  warningGlow: "rgba(244, 63, 94, 0.4)",
  warningGlassBg:
    "linear-gradient(135deg, rgba(244, 63, 94, 0.18) 0%, rgba(11, 26, 47, 0.6) 50%, rgba(4, 9, 20, 0.8) 100%)",
  warningGlassBorder: "1.5px solid rgba(244, 63, 94, 0.65)",

  // Architecture / Purple
  purpleAccent: "#a855f7",
  purpleGlow: "rgba(168, 85, 247, 0.4)",

  // Text Hierarchy
  textPrimary: "#ffffff",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",
  textDim: "#64748b",
};

export const FONT_PRIMARY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
export const FONT_MONO =
  'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// 50.84s audio @ 30 FPS = 1525.2 -> 1530 frames total
export const TOTAL_FRAMES = 1530;
export const FPS = 30;

/**
 * Scene boundaries aligned with naskah18.txt & public/redirect-netlify.wav
 */
export const SCENE_RANGES = {
  // Line 1: "Kamu deploy web app di Netlify?" (Audio F8 - F70)
  scene1_deploy_intro: { start: 0, end: 80 },
  // Line 2: "Tapi ketika halaman di-reload, malah muncul pesan 404 Page Not Found?" (Audio F86 - F221)
  scene2_reload_404: { start: 80, end: 235 },
  // Line 3: "Kenapa ini bisa terjadi?" (Audio F245 - F274)
  scene3_why_question: { start: 235, end: 285 },
  // Line 4: "Karena kebanyakan Single Page Application atau SPA hanya menggunakan satu file HTML sebagai entry point." (Audio F300 - F479)
  scene4_spa_explanation: { start: 285, end: 495 },
  // Line 5: "Ketika kamu berpindah halaman, routing ditangani oleh frontend, bukan server." (Audio F510 - F627)
  scene5_routing_frontend: { start: 495, end: 640 },
  // Line 6: "Nah, ketika halaman di-reload, browser akan meminta URL tersebut langsung ke server." (Audio F654 - F787)
  scene6_reload_request: { start: 640, end: 795 },
  // Line 7: "Karena server tidak menemukan file atau route yang sesuai, akhirnya muncul 404." (Audio F810 - F938)
  scene7_server_not_found: { start: 795, end: 955 },
  // Line 8: "Solusinya?" (Audio F977 - F995)
  scene8_solution_intro: { start: 955, end: 1000 },
  // Line 9: "Buat file bernama _redirects di folder public, lalu tambahkan konfigurasi berikut:" (Audio F1004 - F1108)
  scene9_create_redirects: { start: 1000, end: 1120 },
  // Line 10: "/* /index.html 200" (Audio F1129 - F1177, hold until F1350)
  scene10_redirect_rule: { start: 1120, end: 1350 },
  // Line 11: "Dengan begitu, setiap request akan diarahkan ke index.html, dan routing kembali ditangani oleh frontend." (Audio F1212 - F1516, starts F1350)
  scene11_resolution_outro: { start: 1350, end: 1530 },
};
