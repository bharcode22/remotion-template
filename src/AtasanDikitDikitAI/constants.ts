import { DemoStation } from "./types";

// Durasi total Scene 1 (220) + Scene 2 (205) + Scene 3 (215) + Scene 4 (170) + Scene 5 (335) + Scene 6 (155) = 1300 frame (43.32s @ 30fps)
export const TOTAL_VIDEO_FRAMES = 1300;
export const TOTAL_AUDIO_FRAMES = 1300; // 43.32s @ 30fps

export const TECH_COLORS = {
  bgDark: "#030712", // Deep cosmic black for Scene 1
  bgBlueprint: "#040714", // Deep executive midnight obsidian for Scene 2
  bgAnalytical: "#02120e", // Deep obsidian emerald for Scene 3
  bgHazard: "#0c0804", // Deep carbon obsidian for Scene 4
  bgNavy: "#050a18", // Deep strategic navy obsidian for Scene 5
  bgCrimson: "#0a0305", // Deep burgundy & crimson obsidian for Scene 6
  cardBg: "rgba(10, 15, 29, 0.88)",
  cardBorder: "rgba(56, 189, 248, 0.22)",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  aiEmerald: "#10b981", // Era AI & Validated Logic
  aiPurple: "#8b5cf6", // Generative AI & Microservices
  aiCyan: "#06b6d4", // Filter & Architecture Context
  alertAmber: "#f59e0b", // Peringatan & overload
  dangerRed: "#ef4444",
};

export const DEMO_STATIONS: DemoStation[] = [
  // Scene 1: Hook (Fenomena AI & Atasan Dikit-Dikit AI)
  {
    id: "scene-01",
    tag: "HOOK // FENOMENA AI",
    title: "ATASAN DIKIT-DIKIT PAKE AI",
    subtitle: "Semenjak AI booming, ada gak diantaranya kalian yang atasan dikit-dikit make AI?",
    metric: "STAGE 01",
    metricLabel: "HOOK",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#10b981",
    startFrame: 0,
    endFrame: 220,
  },
  // Scene 2 - Station 2A: Membuat Plan (Line 5)
  {
    id: "station-2a",
    tag: "PLAN // LEVEL 01",
    title: "MEMBUAT PLAN",
    subtitle: "Mulai dari membuat plan",
    metric: "LEVEL 01",
    metricLabel: "PLANNING",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#38bdf8",
    startFrame: 220,
    endFrame: 275,
  },
  // Scene 2 - Station 2B: Mencari Ide (Line 6)
  {
    id: "station-2b",
    tag: "IDE // LEVEL 02",
    title: "MENCARI IDE",
    subtitle: "Mencari ide",
    metric: "LEVEL 02",
    metricLabel: "BRAINSTORM",
    x: 1400,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#10b981",
    startFrame: 275,
    endFrame: 325,
  },
  // Scene 2 - Station 2C: Bahkan Sampai Membuat Keputusan Besar (Lines 7-8 Combined)
  {
    id: "station-2c",
    tag: "KLIMAKS // LEVEL 03",
    title: "KEPUTUSAN KEPUTUSAN BESAR",
    subtitle: "bahkan sampai membuat keputusan keputusan besar.",
    metric: "LEVEL 03",
    metricLabel: "CLIMAX",
    x: 2800,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#ef4444",
    startFrame: 325,
    endFrame: 425,
  },
  // Scene 3: Opini Pribadi & Filter Informasi AI (Lines 10-12)
  {
    id: "scene-03",
    tag: "PERSPEKTIF // FILTER AI",
    title: "SARING INFORMASI AI",
    subtitle: "Menurut aku pribadi, tidak salah menggunakan AI, selama kamu bisa menyaring informasi yang diberikan AI.",
    metric: "STAGE 03",
    metricLabel: "WISDOM",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#06b6d4",
    startFrame: 425,
    endFrame: 640,
  },
  // Scene 4: Realitas Atasan Non-Tech & Ikut Campur (Lines 14-15)
  {
    id: "scene-04",
    tag: "INTERFERENSI // NON-TECH",
    title: "IKUT CAMPUR URUSAN TECH",
    subtitle: "Udah atasan kita bukan berasal dari background tech, sok sokan ikut campur urusan kita.",
    metric: "STAGE 04",
    metricLabel: "OVERREACH",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#f59e0b",
    startFrame: 640,
    endFrame: 810,
  },
  // Scene 5 - Station 5A: Maksud Informasi AI (Line 17)
  {
    id: "station-5a",
    tag: "PILAR 01 // KONTEKS AI",
    title: "APA MAKSUD INFORMASI AI?",
    subtitle: "Minimal harus tahu, Apa maksud dari informasi yang diberikan AI.?",
    metric: "PILAR 01",
    metricLabel: "COMPREHENSION",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#06b6d4",
    startFrame: 810,
    endFrame: 925,
  },
  // Scene 5 - Station 5B: Dampak ke Sistem Lain (Line 18)
  {
    id: "station-5b",
    tag: "PILAR 02 // DAMPAK SISTEMIK",
    title: "APA DAMPAK KE SISTEM LAIN?",
    subtitle: "Apa dampak ke sistem yang lain ketika kita terapkan..?",
    metric: "PILAR 02",
    metricLabel: "ARCHITECTURE",
    x: 1400,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#f59e0b",
    startFrame: 925,
    endFrame: 1035,
  },
  // Scene 5 - Station 5C: Dampak ke Karyawan (Line 19)
  {
    id: "station-5c",
    tag: "PILAR 03 // BEBAN KARYAWAN",
    title: "APA DAMPAK KE KARYAWAN?",
    subtitle: "Apa dampak ke setiap karyawan yang mengerjakannya.?",
    metric: "PILAR 03",
    metricLabel: "TEAM BURNOUT",
    x: 2800,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#ef4444",
    startFrame: 1035,
    endFrame: 1145,
  },
  // Scene 6: Niat Membantu vs Ujungnya Menyesatkan (Lines 21-22)
  {
    id: "scene-06",
    tag: "PUNCHLINE // FINAL VERDICT",
    title: "MENGGANGGU & MENYESATKAN",
    subtitle: "Niatnya mungkin membantu, tapi ujung ujungnya mengganggu dan menyesatkan.",
    metric: "STAGE 06",
    metricLabel: "VERDICT",
    x: 0,
    y: 0,
    zoom: 1.0,
    tilt: 0,
    accentColor: "#ef4444",
    startFrame: 1145,
    endFrame: 1300,
  },
];
