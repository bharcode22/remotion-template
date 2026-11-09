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

  // GitHub Actions & Automation Theme (Purple & Electric Violet)
  githubPurple: "#a855f7",
  githubViolet: "#8b5cf6",
  githubGlow: "rgba(168, 85, 247, 0.4)",

  // Subdomain & Warning Theme (Rose / Coral)
  warningRose: "#f43f5e",
  warningGlow: "rgba(244, 63, 94, 0.4)",

  // Custom Domain Theme (Cyan & Blue)
  domainBlue: "#38bdf8",
  domainGlow: "rgba(56, 189, 248, 0.4)",

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

// 38.08s @ 30 FPS = 1142.4 -> 1143 frames
export const TOTAL_FRAMES = 1143;
export const FPS = 30;

/**
 * Scene boundaries sinkron dengan naskah17.txt & waveform public/netlify.wav
 */
export const SCENE_RANGES = {
  // Line 1: "Mau pamerin website React kalian secara gratis?" (Audio F8 - F62)
  scene1_react_showcase: { start: 0, end: 72 },
  // Line 2: "Tapi bingung mau deploy di mana?" (Audio F79 - F127)
  scene2_deploy_dilemma: { start: 72, end: 144 },
  // Line 3: "Netlify aja!" (Audio F148 - F173)
  scene3_netlify_hero: { start: 144, end: 186 },
  // Line 4: "Gratis untuk memulai dan gampang banget digunakan." (Audio F186 - F274)
  scene4_free_easy: { start: 186, end: 290 },
  // Line 5: "Cukup build project React kalian, lalu drag and drop folder hasil build ke Netlify." (Audio F291 - F432)
  scene5_drag_drop: { start: 290, end: 440 },
  // Line 6: "Website kalian langsung online!" (Audio F444 - F496)
  scene6_instant_online: { start: 440, end: 515 },
  // Line 7: "Atau mau lebih praktis?" (Audio F516 - F557)
  scene7_more_practical: { start: 515, end: 570 },
  // Line 8: "Bisa juga integrasikan project kalian dengan GitHub Actions untuk otomatisasi deployment menggunakan CI/CD." (Audio F570 - F741)
  scene8_github_cicd: { start: 570, end: 755 },
  // Line 9 & 10: "Tapi, Kalau menggunakan subdomain gratis dari Netlify, alamat website kalian akan berakhiran .netlify.app." (Audio F759 - F973)
  scene9_subdomain_app: { start: 755, end: 985 },
  // Line 11: "Jadi, kalau mau pakai domain sendiri, kalian bisa menghubungkan custom domain." (Audio F990 - F1104)
  scene10_custom_domain: { start: 985, end: 1115 },
  // Line 12: "Gampang, kan?" (Audio F1116 - F1142)
  scene11_outro_climax: { start: 1115, end: 1143 },
};

