export const TOTAL_VIDEO_FRAMES = 300; // 10.0s @ 30fps

export interface DemoStation {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  x: number;
  y: number;
  zoom: number;
  tilt: number;
  accentColor: string;
  startFrame: number;
  endFrame: number;
}

export const DEMO_STATIONS: DemoStation[] = [
  {
    id: "scene-01",
    tag: "TEMPLATE // SCENE 01",
    title: "MASUKKAN JUDUL HOOK DI SINI",
    subtitle: "Deskripsi singkat pengantar masalah atau hook pembuka video Anda.",
    metric: "STAGE 01",
    metricLabel: "PHASE",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#10b981", // Calm Emerald
    startFrame: 0,
    endFrame: 80,
  },
  {
    id: "scene-02",
    tag: "TEMPLATE // SCENE 02",
    title: "KONSEP ATAU POIN PERTAMA",
    subtitle: "Penjelasan mendalam poin pertama dengan visual atau data pendukung.",
    metric: "STAGE 02",
    metricLabel: "PHASE",
    x: 0,
    y: 1300,
    zoom: 1.05,
    tilt: 0,
    accentColor: "#06b6d4", // Blueprint Cyan
    startFrame: 100,
    endFrame: 180,
  },
  {
    id: "scene-03",
    tag: "TEMPLATE // SCENE 03",
    title: "POIN KEDUA ATAU DEMO",
    subtitle: "Penjelasan poin kedua, demo perbandingan, atau studi kasus.",
    metric: "STAGE 03",
    metricLabel: "PHASE",
    x: 1400,
    y: 1300,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#8b5cf6", // Vibrant Purple
    startFrame: 195,
    endFrame: 255,
  },
  {
    id: "scene-04",
    tag: "TEMPLATE // SCENE 04",
    title: "KESIMPULAN & CALL TO ACTION",
    subtitle: "Rangkuman ringkas poin penting dan ajakan bertindak (Follow/Save/Share).",
    metric: "STAGE 04",
    metricLabel: "PHASE",
    x: 2800,
    y: 1300,
    zoom: 0.90,
    tilt: 0,
    accentColor: "#f59e0b", // Gold Amber
    startFrame: 280,
    endFrame: 300,
  },
];

export const HOOK_TIMINGS = {
  TOTAL_FRAMES: 150,
  CALM_END: 36,
  SPIKE_PEAK: 75,
  TEASER_START: 96,
} as const;

export const TECH_COLORS = {
  bgDark: "#030712",
  bgSubtle: "#0b0f19",
  cardGlass: "rgba(15, 23, 42, 0.78)",
  cardBorder: "rgba(255, 255, 255, 0.14)",
  calmGreen: "#10b981",
  calmGreenGlow: "rgba(16, 185, 129, 0.45)",
  alertRed: "#ef4444",
  alertRedGlow: "rgba(239, 68, 68, 0.5)",
  alertAmber: "#f59e0b",
  blueprintCyan: "#06b6d4",
  blueprintCyanGlow: "rgba(6, 182, 212, 0.45)",
  accentPurple: "#8b5cf6",
  accentPurpleGlow: "rgba(139, 92, 246, 0.45)",
  primaryBlue: "#3b82f6",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
} as const;
