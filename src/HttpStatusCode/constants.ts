import { StatusCodeCategory } from "./types";

// Durasi video terkalibrasi Scenes 1 - 6 (Full Video): 1620 frames (54.0s @ 30fps)
// Total durasi voiceover http-status-code.wav adalah 1620 frames (53.88s @ 30fps)
// Scenes 1 - 6 mencakup Naskah Lines 1 - 13 (Line 13: 5xx Server Error)
export const TOTAL_VIDEO_FRAMES = 1620;
export const TOTAL_AUDIO_FRAMES = 1620;

export const HTTP_COLORS = {
  bgDark: "#030712", // Deep cyber obsidian
  bgSurface: "rgba(10, 17, 33, 0.85)", // Glassmorphic card surface
  cardBorder: "rgba(56, 189, 248, 0.22)", // Subtle neon cyan border
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // HTTP Status Code Semantic Colors
  status1xx: "#64748b", // Slate / Informational
  status2xx: "#10b981", // Emerald / Success
  status3xx: "#38bdf8", // Sky Cyan / Redirection
  status4xx: "#f59e0b", // Amber / Client Error
  status5xx: "#ef4444", // Crimson / Server Error

  // Accent highlights
  accentCyan: "#38bdf8",
  accentIndigo: "#6366f1",
  accentPurple: "#a855f7",
};

export const STATUS_CATEGORIES: StatusCodeCategory[] = [
  {
    code: "2xx",
    name: "Success",
    meaning: "Request berhasil diproses",
    examples: ["200 OK", "201 Created"],
    color: HTTP_COLORS.status2xx,
    badge: "2xx // SUCCESS",
  },
  {
    code: "3xx",
    name: "Redirection",
    meaning: "Request perlu dialihkan",
    examples: ["301 Moved Permanently", "302 Found"],
    color: HTTP_COLORS.status3xx,
    badge: "3xx // REDIRECTION",
  },
  {
    code: "4xx",
    name: "Client Error",
    meaning: "Ada masalah pada request klien",
    examples: ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"],
    color: HTTP_COLORS.status4xx,
    badge: "4xx // CLIENT ERROR",
  },
  {
    code: "5xx",
    name: "Server Error",
    meaning: "Server mengalami kegagalan proses",
    examples: ["500 Internal Server Error", "502 Bad Gateway", "503 Service Unavailable"],
    color: HTTP_COLORS.status5xx,
    badge: "5xx // SERVER ERROR",
  },
];

