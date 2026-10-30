import { DemoStation } from "./types";

// Total durasi video sesuai public/rest-api.wav: 43.0s @ 30fps = 1290 frames
export const TOTAL_VIDEO_FRAMES = 1290;
export const TOTAL_AUDIO_FRAMES = 1290;

export const REST_COLORS = {
  bgDark: "#030712", // Deep cosmic cyber obsidian
  bgBlueprint: "#040919", // Deep architectural midnight
  bgHazard: "#0d0804", // Deep anomaly alert obsidian
  bgCrimson: "#0d0306", // Non-compliant climax obsidian
  cardBg: "rgba(10, 15, 29, 0.88)",
  cardBorder: "rgba(56, 189, 248, 0.22)",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  restCyan: "#38bdf8", // Sky / GET / Protocol
  restEmerald: "#10b981", // Emerald / POST / Validated
  restAmber: "#f59e0b", // Amber / PUT / Warning
  restCrimson: "#ef4444", // Crimson / DELETE / Error
  restPurple: "#a855f7", // Purple / Architecture
};

export const REST_STATIONS: DemoStation[] = [
  // Scene 1: Hook (Line 1: "Apa itu rest API..?")
  {
    id: "scene-01",
    tag: "PROTOCOL // ARCHITECTURE HOOK",
    title: "APA ITU REST API?",
    subtitle: "Standar & Aturan Komunikasi Pertukaran Data Antar Sistem",
    metric: "STAGE 01",
    metricLabel: "INTRO HOOK",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#38bdf8",
    startFrame: 0,
    endFrame: 75,
  },
  // Scene 2: Definisi Fundamental (Lines 3-4)
  {
    id: "scene-02",
    tag: "DEFINITION // FUNDAMENTAL RULES",
    title: "ATURAN METHOD PENGELOLAAN DATA",
    subtitle: "REST API adalah aturan method pengelolaan data dengan protokol HTTP",
    metric: "STAGE 02",
    metricLabel: "CORE DEFINITION",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#10b981",
    startFrame: 75,
    endFrame: 280,
  },
  // Scene 3: Pengantar HTTP Method (Lines 6-10)
  {
    id: "scene-03",
    tag: "DISPATCHER // HTTP METHODS",
    title: "BEBERAPA HTTP METHOD",
    subtitle: "Dalam REST API proses ini menggunakan beberapa HTTP method standar",
    metric: "STAGE 03",
    metricLabel: "METHOD SUITE",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#a855f7",
    startFrame: 280,
    endFrame: 465,
  },
  // Scene 4: 4 Core Methods (Lines 11-14)
  {
    id: "scene-04",
    tag: "CRUD MAPPING // 4 ESSENTIAL METHODS",
    title: "GET - POST - PUT - DELETE",
    subtitle: "Pondasi Operasi Standar Komunikasi RESTful",
    metric: "STAGE 04",
    metricLabel: "4 CORE METHODS",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#38bdf8",
    startFrame: 465,
    endFrame: 805,
  },
  // Scene 5: Pertanyaan Pelanggaran & Contoh PUT (Lines 16-19)
  {
    id: "scene-05",
    tag: "ANOMALY // RULE INTEGRITY",
    title: "APAKAH ATURAN BISA DILANGGAR?",
    subtitle: "Misal mengambil data menggunakan method PUT bukan GET",
    metric: "STAGE 05",
    metricLabel: "INTEGRITY TEST",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#f59e0b",
    startFrame: 805,
    endFrame: 1105,
  },
  // Scene 6: Server Response vs REST Compliance (Lines 21-23)
  {
    id: "scene-06",
    tag: "VERDICT // REST COMPLIANCE",
    title: "SERVER KIRIM DATA, TAPI BUKAN REST API",
    subtitle: "REST adalah kesepakatan aturan, bukan sekadar respons server",
    metric: "STAGE 06",
    metricLabel: "THE VERDICT",
    x: 0,
    y: 0,
    zoom: 1.0,
    accentColor: "#ef4444",
    startFrame: 1105,
    endFrame: 1290,
  },
];

