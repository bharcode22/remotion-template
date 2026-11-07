export const TOTAL_VIDEO_FRAMES = 1375; // 45.83s @ 30fps
export const TOTAL_AUDIO_FRAMES = 1372; // 45.76s (voice/http vs https.wav)

export const HTTP_HTTPS_COLORS = {
  // Deep Glass Twilight Base
  bgDark: "#0b0c1b",
  bgSurface: "rgba(255, 255, 255, 0.05)",

  // Frosted Glass Tokens
  glassBg: "rgba(255, 255, 255, 0.07)",
  glassBgStrong: "rgba(255, 255, 255, 0.12)",
  glassBorder: "rgba(255, 255, 255, 0.16)",
  glassBorderStrong: "rgba(255, 255, 255, 0.28)",
  glassShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",

  // Typography
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",

  // HTTPS Security (Emerald & Mint & Cyan)
  httpsGreen: "#10b981",
  httpsMint: "#34d399",
  httpsCyan: "#38bdf8",
  httpsGlow: "rgba(16, 185, 129, 0.25)",
  cyanGlow: "rgba(56, 189, 248, 0.2)",

  // HTTP Plaintext & Caution (Amber & Warm Peach)
  httpAmber: "#fbbf24",
  httpOrange: "#f97316",
  amberGlow: "rgba(251, 191, 36, 0.22)",

  // Question & Accent Violet
  accentViolet: "#a78bfa",
  accentPurple: "#c084fc",
  violetGlow: "rgba(167, 139, 250, 0.2)",
  dangerRose: "#fb7185",
};

// Scene Timings for Naskah 14 (Voiceover: voice/http vs https.wav)
export const SCENE_TIMINGS = {
  // Scene 1: Line 1 - "Katanya https lebih aman dari http.?" (F0 - F86)
  scene1: { start: 0, end: 86 },
  // Scene 2: Line 2 - "Jangan salah persepsi." (F86 - F147)
  scene2: { start: 86, end: 147 },
  // Scene 3: Line 4 - "Aman dari sisi siapa.?" (F147 - F206)
  scene3: { start: 147, end: 206 },
  // Scene 4: Lines 6-7 - "Apakah sisi orang yang mengakses, atau dari sisi developer yang mengelola website tersebut?" (F206 - F370)
  scene4: { start: 206, end: 370 },
  // Scene 5: Lines 9-11 - "Dari sisi developer, HTTPS memang memberikan keamanan lebih karena data yang dikirimkan antara browser dan server dienkripsi." (F370 - F604)
  scene5: { start: 370, end: 604 },
  // Scene 6: Lines 13-14 - "Jadi, pihak lain tidak bisa dengan mudah membaca atau memodifikasi data selama proses pengiriman." (F604 - F774)
  scene6: { start: 604, end: 774 },
  // Scene 7: Lines 16-17 - "Tapi kalau dari sisi orang yang mengaksesnya, belum tentu, link pishing atau scam juga ada yang menggunakan https." (F774 - F990)
  scene7: { start: 774, end: 990 },
  // Scene 8: Lines 19-21 - "Jadi, mau HTTP atau HTTPS, sebagai orang yang sering berselancar di internet, jangan hanya melihat ikon gembok di browser." (F990 - F1230)
  scene8: { start: 990, end: 1230 },
  // Scene 9: Line 23 - "Tetap periksa alamat website dan pastikan kamu tahu siapa yang sedang kamu percaya." (F1230 - F1375)
  scene9: { start: 1230, end: 1375 },
};

