export const SQL_NOSQL_COLORS = {
  // Deep Cyber Canvas
  bgDark: "#060913",
  bgSlate: "#0b1220",
  bgCard: "rgba(15, 23, 42, 0.78)",
  bgCardHover: "rgba(30, 41, 59, 0.85)",
  borderGlass: "rgba(255, 255, 255, 0.12)",
  borderActive: "rgba(255, 255, 255, 0.25)",

  // Pristine Glassmorphism Tokens
  glassBg:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(15, 23, 42, 0.50) 50%, rgba(6, 9, 19, 0.65) 100%)",
  glassBorder: "1.5px solid rgba(255, 255, 255, 0.22)",
  glassBorderSubtle: "1px solid rgba(255, 255, 255, 0.14)",
  glassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2)",
  glassBlur: "blur(28px) saturate(190%)",
  glassItemBg: "rgba(255, 255, 255, 0.05)",
  glassItemBorder: "1px solid rgba(255, 255, 255, 0.14)",
  glassItemShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 6px 20px rgba(0, 0, 0, 0.25)",

  // SQL Theme (Blue & Cyan — Structured, Rigid, Relational)
  sqlCyan: "#38bdf8",
  sqlBlue: "#2563eb",
  sqlDeepBlue: "#1d4ed8",
  sqlGlow: "rgba(56, 189, 248, 0.4)",
  sqlBadgeBg: "rgba(56, 189, 248, 0.15)",
  sqlGlassBg:
    "linear-gradient(135deg, rgba(56, 189, 248, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  sqlGlassBorder: "1.5px solid rgba(56, 189, 248, 0.45)",
  sqlGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.25)",

  // NoSQL Theme (Emerald & Mint — Flexible, Document, Dynamic)
  nosqlEmerald: "#10b981",
  nosqlMint: "#34d399",
  nosqlDarkGreen: "#059669",
  nosqlGlow: "rgba(16, 185, 129, 0.4)",
  nosqlBadgeBg: "rgba(16, 185, 129, 0.15)",
  nosqlGlassBg:
    "linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  nosqlGlassBorder: "1.5px solid rgba(16, 185, 129, 0.45)",
  nosqlGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(16, 185, 129, 0.15), 0 0 40px rgba(16, 185, 129, 0.25)",

  // Comic / Senior / Warning Theme (Amber & Coral)
  seniorAmber: "#f59e0b",
  seniorGold: "#fbbf24",
  seniorGlow: "rgba(245, 158, 11, 0.35)",
  seniorBadgeBg: "rgba(245, 158, 11, 0.15)",
  seniorGlassBg:
    "linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  seniorGlassBorder: "1.5px solid rgba(245, 158, 11, 0.45)",
  seniorGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(245, 158, 11, 0.15), 0 0 40px rgba(245, 158, 11, 0.25)",

  // Error / Crash Theme (Rose & Red)
  errorRose: "#f43f5e",
  errorRed: "#ef4444",
  errorGlow: "rgba(244, 63, 94, 0.4)",

  // Text Hierarchy (Optimized for Mobile Screens)
  textPrimary: "#ffffff",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",
  textDim: "#64748b",
};

// Total Audio: 63.92s @ 30 FPS = 1918 frames + 22 frames outro buffer = 1940 frames (64.67s)
export const TOTAL_FRAMES = 1940;
export const FPS = 30;

/**
 * Scene ranges terkalibrasi presisi dengan waveform suara user (public/sql vs nosql.wav) & arahan user:
 * - Scene 1 (0 - 128): "Jika ada senior kamu menyimpan data log aplikasi di SQL," (efek ketikan, popup tabel masuk di F83)
 * - Scene 2 (128 - 294): "Berpikir positif saja, mungkin dia hmmm anu." (transisi scene berikutnya sampai 294)
 * - Scene 3 (294 - 556): "SQL adalah Structured Query Language... Gitu doang? Tentu tidak!" (L7 masuk di 525)
 * - Scene 4 (556 - 995): "SQL digunakan untuk data terstruktur... nama: string, nomor hp: int, berat: float"
 * - Scene 5 (995 - 1719): "Bagaimana dengan NoSQL? Log login, transaksi, error... lebih fleksibel"
 * - Scene 6 (1719 - 1940): "Jadi gunakan SQL ketika terstruktur, NoSQL ketika fleksibel"
 */
export const SCENE_RANGES = {
  scene1_hook: { start: 0, end: 128 },
  scene2_thinker: { start: 128, end: 294 },
  scene3_acronym: { start: 294, end: 556 },
  scene4_sql_structured: { start: 556, end: 995 },
  scene5_nosql_flexible: { start: 995, end: 1719 },
  scene6_golden_rule: { start: 1719, end: 1940 },
};
