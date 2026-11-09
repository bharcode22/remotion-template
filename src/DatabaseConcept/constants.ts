export const DATABASE_COLORS = {
  // Deep Cyber Canvas
  bgDark: "#060913",
  bgSlate: "#0b1220",
  bgCard: "rgba(15, 23, 42, 0.78)",
  borderGlass: "rgba(255, 255, 255, 0.14)",

  // Pristine Glassmorphism Tokens
  glassBg:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  glassBorder: "1.5px solid rgba(255, 255, 255, 0.22)",
  glassBorderSubtle: "1px solid rgba(255, 255, 255, 0.14)",
  glassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2)",
  glassBlur: "blur(28px) saturate(190%)",
  glassItemBg: "rgba(255, 255, 255, 0.05)",
  glassItemBorder: "1px solid rgba(255, 255, 255, 0.14)",
  glassItemShadow:
    "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 6px 20px rgba(0, 0, 0, 0.25)",

  // Database Theme (Cyan & Electric Blue — Organization, Architecture, Indexing)
  dbCyan: "#38bdf8",
  dbBlue: "#2563eb",
  dbDeepBlue: "#1d4ed8",
  dbGlow: "rgba(56, 189, 248, 0.4)",
  dbGlassBg:
    "linear-gradient(135deg, rgba(56, 189, 248, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  dbGlassBorder: "1.5px solid rgba(56, 189, 248, 0.45)",
  dbGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.25)",

  // Storage Theme (Amber & Gold — Raw Physical Storage, Wardrobe Analog)
  storageAmber: "#f59e0b",
  storageGold: "#fbbf24",
  storageGlow: "rgba(245, 158, 11, 0.35)",
  storageGlassBg:
    "linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  storageGlassBorder: "1.5px solid rgba(245, 158, 11, 0.45)",
  storageGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(245, 158, 11, 0.15), 0 0 40px rgba(245, 158, 11, 0.25)",

  // Structure / Organization Theme (Emerald & Mint — Orderly, Folded, Managed)
  orgEmerald: "#10b981",
  orgMint: "#34d399",
  orgGlow: "rgba(16, 185, 129, 0.4)",
  orgGlassBg:
    "linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(15, 23, 42, 0.48) 50%, rgba(6, 9, 19, 0.65) 100%)",
  orgGlassBorder: "1.5px solid rgba(16, 185, 129, 0.45)",
  orgGlassShadow:
    "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(16, 185, 129, 0.15), 0 0 40px rgba(16, 185, 129, 0.25)",

  // Question / Counter Theme (Rose & Coral — "Definisi itu kurang tepat")
  roseGlow: "rgba(244, 63, 94, 0.4)",
  rosePink: "#f43f5e",

  // Text Hierarchy (Optimized for Mobile Vertical Shorts)
  textPrimary: "#ffffff",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",
  textDim: "#64748b",
};

// Total Audio: 47.36s @ 30 FPS = 1421 frames + 19 frames outro buffer = 1440 frames (48.0s)
export const TOTAL_FRAMES = 1440;
export const FPS = 30;

/**
 * Scene boundaries sinkron dengan naskah16.txt & waveform public/database.wav
 */
export const SCENE_RANGES = {
  scene1_hook: { start: 0, end: 88 }, // Line 1: "Database adalah tempat menyimpan data?"
  scene2_refutation: { start: 88, end: 188 }, // Line 2: "Menurut saya, definisi itu kurang tepat."
  scene3_not_storage: { start: 188, end: 252 }, // Line 4: "Database bukanlah tempat menyimpan data,"
  scene4_organization: { start: 252, end: 368 }, // Line 5: "tetapi bagaimana data diorganisasi dan dikelola."
  scene5_storage_definition: { start: 368, end: 480 }, // Line 7-8: "Kalau tempat penyimpanannya, kita sebut storage."
  scene6_wardrobe_analogy: { start: 480, end: 775 }, // Line 10-12: "Bayangkan sebuah lemari pakaian... rak-rak di dalamnya... database."
  scene7_data_organization_methods: { start: 775, end: 1005 }, // Line 14-15: "Lalu, bagaimana pakaian itu disusun? Apakah dilipat, digantung, atau dikelompokkan..."
  scene8_analogy_bridge: { start: 1005, end: 1150 }, // Line 17: "Nah, itu bisa kita analogikan sebagai struktur dan cara data diorganisasi."
  scene9_grand_finale: { start: 1150, end: 1440 }, // Line 18-19: "Jadi, database bukan cuma soal menyimpan data... mudah dicari, dikelola, dan digunakan kembali."
};

