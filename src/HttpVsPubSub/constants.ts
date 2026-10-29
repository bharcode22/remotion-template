export const TOTAL_VIDEO_FRAMES = 1320; // 44.0s @ 30fps

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
    tag: "HOOK // PERTANYAAN",
    title: "CARA APLIKASI BERKOMUNIKASI?",
    subtitle: "Pernah kepikiran, bagaimana cara aplikasi saling berkomunikasi?",
    metric: "SCENE 01",
    metricLabel: "HOOK",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#10b981", // Emerald
    startFrame: 0,
    endFrame: 90,
  },
  {
    id: "scene-02",
    tag: "OVERVIEW // 2 METODE UTAMA",
    title: "HTTP & PUB/SUB",
    subtitle: "Secara umum, ada 2 cara utama: HTTP dan Pub/Sub.",
    metric: "SCENE 02",
    metricLabel: "OVERVIEW",
    x: 0,
    y: 1400,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#06b6d4", // Cyan
    startFrame: 120,
    endFrame: 210,
  },
  {
    id: "scene-03",
    tag: "MODUL 1 // PENGENALAN",
    title: "KITA MULAI DARI HTTP",
    subtitle: "Protokol komunikasi mendasar dalam arsitektur web modern.",
    metric: "SCENE 03",
    metricLabel: "HTTP INTRO",
    x: 1400,
    y: 1400,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#3b82f6", // Blue
    startFrame: 240,
    endFrame: 320,
  },
  {
    id: "scene-04",
    tag: "KONSEP HTTP // DUA PILAR",
    title: "REQUEST & RESPONSE",
    subtitle: "Di HTTP ada dua istilah utama: Request dan Response.",
    metric: "SCENE 04",
    metricLabel: "CONCEPT",
    x: 2800,
    y: 1400,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#6366f1", // Indigo
    startFrame: 350,
    endFrame: 440,
  },
  {
    id: "scene-05",
    tag: "MEKANISME // ALUR KERJA",
    title: "CARA KERJA HTTP",
    subtitle: "Client mengirim request ke server, lalu server membalas dengan response.",
    metric: "SCENE 05",
    metricLabel: "WORKFLOW",
    x: 2800,
    y: 2800,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#8b5cf6", // Purple
    startFrame: 470,
    endFrame: 640,
  },
  {
    id: "scene-06",
    tag: "MODUL 2 // PARADIGMA KEDUA",
    title: "PUBLISHER & SUBSCRIBER",
    subtitle: "Lalu ada Pub/Sub: Publisher dan Subscriber.",
    metric: "SCENE 06",
    metricLabel: "PUB/SUB INTRO",
    x: 1400,
    y: 2800,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#ec4899", // Pink
    startFrame: 670,
    endFrame: 760,
  },
  {
    id: "scene-07",
    tag: "MEKANISME // EVENT-DRIVEN",
    title: "CARA KERJA PUB/SUB",
    subtitle: "Publisher mengirim pesan via topik, lalu subscriber yang berlangganan menerima topik tersebut.",
    metric: "SCENE 07",
    metricLabel: "TOPIC FLOW",
    x: 0,
    y: 2800,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#f43f5e", // Rose
    startFrame: 790,
    endFrame: 960,
  },
  {
    id: "scene-08",
    tag: "KOMPARASI // KESIMPULAN & CONTOH",
    title: "LALU, BEDANYA APA?",
    subtitle: "Perbandingan langsung antara HTTP vs Pub/Sub beserta contoh kasus penggunaannya.",
    metric: "SCENE 08",
    metricLabel: "SUMMARY & USE CASE",
    x: 0,
    y: 4200,
    zoom: 0.95,
    tilt: 0,
    accentColor: "#f59e0b", // Amber
    startFrame: 990,
    endFrame: 1320,
  },
];

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
  primaryBlueGlow: "rgba(59, 130, 246, 0.45)",
  accentPink: "#ec4899",
  accentPinkGlow: "rgba(236, 72, 153, 0.45)",
  accentRose: "#f43f5e",
  accentRoseGlow: "rgba(244, 63, 94, 0.45)",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
} as const;
