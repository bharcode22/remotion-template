export const TOTAL_ELECTRON_STUDIO_FRAMES = 940; // 31.33 seconds @ 30fps

// Consistent Global Typography (Apple SF Pro / Inter Grotesque)
export const MAIN_FONT_FAMILY =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
export const MONO_FONT_FAMILY =
  "'SF Mono', 'JetBrains Mono', Menlo, Monaco, Consolas, monospace";

// Spatial Stations in 2D/3D World Canvas
export const STATIONS = [
  { id: 1, name: "WebAppBrowser",    x: 0,    y: 0,    zoom: 1.0,  start: 0,   duration: 65 },
  { id: 2, name: "UrgentAlarm",      x: 0,    y: 1400, zoom: 1.08, start: 65,  duration: 90 },
  { id: 3, name: "StopNolRelief",    x: 1400, y: 2400, zoom: 1.0,  start: 155, duration: 85 },
  { id: 4, name: "ElectronAtomHero", x: 2800, y: 2400, zoom: 1.05, start: 240, duration: 65 },
  { id: 5, name: "TechMonoliths",    x: 4200, y: 2400, zoom: 0.98, start: 305, duration: 242 },
  { id: 6, name: "CodePipeline",     x: 5400, y: 1200, zoom: 1.0,  start: 547, duration: 168 },
  { id: 7, name: "TripleOsStage",    x: 6800, y: 0,    zoom: 1.0,  start: 715, duration: 225 },
] as const;

export const SCENE_TIMINGS = {
  scene1: { start: 0,   duration: 65 },
  scene2: { start: 65,  duration: 90 },
  scene3: { start: 155, duration: 85 },
  scene4: { start: 240, duration: 65 },
  scene5: { start: 305, duration: 242 },
  scene6: { start: 547, duration: 168 },
  scene7: { start: 715, duration: 225 },
};

export const STUDIO_THEME = {
  // Apple Keynote Dark Mode / Matte Titanium Studio (Clean, Minimal, No Neon!)
  textPrimary: "#F5F5F7",
  textSecondary: "#86868B",
  textMuted: "#636366",

  // Apple Dark Mode Solid Physical Accents (Crisp & Tactile)
  appleBlue: "#2997FF",
  appleRed: "#FF453A",
  appleAmber: "#FF9F0A",
  appleGreen: "#30D158",
  applePurple: "#BF5AF2",

  // Brand / Tech Solid Colors
  htmlColor: "#FF5722",
  cssColor: "#2997FF",
  jsColor: "#FFB300",
  electronBlue: "#2997FF",

  // Legacy mappings for backwards-compatibility
  electronCyan: "#2997FF",
  electricBlue: "#2997FF",
  amberUrgent: "#FF9F0A",
  crimsonAlert: "#FF453A",
  emeraldActive: "#30D158",
  purpleAccent: "#BF5AF2",

  // Dark Mode Studio Atmosphere (Matte Space Gray / Titanium Cyclorama)
  studioBg: "#121214",
  bgTop: "#1A1A1E",
  bgBottom: "#0A0A0C",
  bgSoftGlow: "rgba(255, 255, 255, 0.04)",

  // Pristine Dark Acrylic & Titanium Finishes
  surfaceDark: "#1C1C1E",
  surfaceCard: "#161618",
  surfaceFrosted: "rgba(28, 28, 30, 0.92)",
  cardBg: "#1C1C1E",
  cardBorder: "rgba(255, 255, 255, 0.1)",
  cardShadow: "0 35px 80px -15px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.15)",
  softShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.6)",
};

// ==========================================
// APPLE PRO FROSTED GLASSMORPHISM (NON-NEON)
// ==========================================
export const STUDIO_GLASS = {
  // Translucent Frosted Acrylic Surfaces
  surface: "rgba(255, 255, 255, 0.05)",
  surfaceElevated: "rgba(255, 255, 255, 0.08)",
  surfaceDarkAcrylic: "rgba(18, 18, 24, 0.68)",
  surfaceDarkDense: "rgba(14, 14, 18, 0.82)",

  // Refractive Glass Gradients (simulates thick physical glass with directional reflection)
  glassGradient:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)",
  glassGradientCard:
    "linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(14, 14, 18, 0.70) 100%)",
  glassGradientElevated:
    "linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(18, 18, 24, 0.80) 100%)",

  // Specular Border Rims (Light catching the polished glass edges)
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderSubtle: "1px solid rgba(255, 255, 255, 0.10)",
  borderElevated: "1px solid rgba(255, 255, 255, 0.26)",
  borderAccentBlue: "1px solid rgba(41, 151, 255, 0.40)",
  borderAccentGreen: "1px solid rgba(48, 209, 88, 0.40)",
  borderAccentAmber: "1px solid rgba(255, 159, 10, 0.40)",
  borderAccentRed: "1px solid rgba(255, 69, 58, 0.40)",

  // Optical Diffusion
  backdropFilter: "blur(24px) saturate(180%)",
  backdropFilterLight: "blur(16px) saturate(160%)",

  // Soft Ambient Contact Shadow + Inner Specular Top Bevel
  glassShadow:
    "0 25px 60px -10px rgba(0, 0, 0, 0.65), inset 0 1px 0 0 rgba(255, 255, 255, 0.22)",
  glassShadowElevated:
    "0 35px 80px -15px rgba(0, 0, 0, 0.80), inset 0 1px 0 0 rgba(255, 255, 255, 0.30)",

  // Pill and Small Elements
  pillBg: "rgba(255, 255, 255, 0.06)",
  pillBorder: "1px solid rgba(255, 255, 255, 0.15)",
};
