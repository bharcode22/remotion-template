import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBolt,
  FaCheckCircle,
  FaCheckDouble,
  FaCode,
  FaFilter,
  FaLaptopCode,
  FaLightbulb,
  FaLock,
  FaRobot,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 3 entrance (Global Frame 425 - 640)
  const relFrame = Math.max(0, frame - 425);

  // =========================================================================
  // ⏱️ SUB-BEAT TIMINGS:
  // - Sub-beat 3A (relFrame 0 - 50)  : Line 10 - "Menurut aku pribadi,"
  // - Sub-beat 3B (relFrame 50 - 105): Line 11 - "Tidak salah menggunakan AI,"
  // - Sub-beat 3C (relFrame 105 - 215): Line 12 - "Selama kamu bisa menyaring informasi yang diberikan AI"
  // =========================================================================

  // Sub-beat 3A Springs
  const sp3ATag = spring({ frame: relFrame, fps, config: { damping: 14, stiffness: 90 } });
  const sp3ATitle = spring({ frame: Math.max(0, relFrame - 6), fps, config: { damping: 14, stiffness: 85 } });
  const sp3ACard = spring({ frame: Math.max(0, relFrame - 12), fps, config: { damping: 15, stiffness: 80, mass: 1 } });
  const exit3A = interpolate(relFrame, [46, 52], [1, 0], { extrapolateRight: "clamp" });
  const exit3AY = interpolate(relFrame, [46, 52], [0, -35], { extrapolateRight: "clamp" });

  // Sub-beat 3B Springs
  const sp3BTag = spring({ frame: Math.max(0, relFrame - 50), fps, config: { damping: 14, stiffness: 90 } });
  const sp3BTitle = spring({ frame: Math.max(0, relFrame - 54), fps, config: { damping: 14, stiffness: 85 } });
  const sp3BCard = spring({ frame: Math.max(0, relFrame - 60), fps, config: { damping: 15, stiffness: 80, mass: 1 } });
  const exit3B = interpolate(relFrame, [100, 108], [1, 0], { extrapolateRight: "clamp" });
  const exit3BY = interpolate(relFrame, [100, 108], [0, -35], { extrapolateRight: "clamp" });

  // Sub-beat 3C Springs (The Core Wisdom)
  const sp3CTag = spring({ frame: Math.max(0, relFrame - 106), fps, config: { damping: 14, stiffness: 90 } });
  const sp3CTitle = spring({ frame: Math.max(0, relFrame - 110), fps, config: { damping: 14, stiffness: 85 } });
  const sp3CFilter = spring({ frame: Math.max(0, relFrame - 118), fps, config: { damping: 16, stiffness: 80, mass: 1 } });
  const sp3CBadge1 = spring({ frame: Math.max(0, relFrame - 134), fps, config: { damping: 12, stiffness: 110 } });
  const sp3CBadge2 = spring({ frame: Math.max(0, relFrame - 146), fps, config: { damping: 12, stiffness: 110 } });
  const sp3CBadge3 = spring({ frame: Math.max(0, relFrame - 158), fps, config: { damping: 12, stiffness: 110 } });

  // Animated Energy Sieve Scan Pulse in 3C
  const sieveGlow = 0.5 + Math.sin(frame * 0.18) * 0.3;

  return (
    <div style={{ width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      <SceneContainer accentColor="#10b981">
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 960,
            minHeight: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT_SANS,
          }}
        >
          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 3A: "MENURUT AKU PRIBADI," (Line 10, relFrame 0 - 50)
              Simetris, Bersih, Tegak Lurus 0deg
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame < 52 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                opacity: exit3A,
                transform: `translateY(${exit3AY}px)`,
              }}
            >
              {/* Pill Badge */}
              <div
                style={{
                  transform: `scale(${sp3ATag})`,
                  opacity: sp3ATag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.14)",
                  border: "1.5px solid rgba(16, 185, 129, 0.45)",
                  color: "#10b981",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                }}
              >
                <FaLightbulb size={15} color="#10b981" />
                <span>PERSPECTIVE // PERSONAL TAKE</span>
              </div>

              {/* Kinetic Headline: MENURUT AKU PRIBADI */}
              <div
                style={{
                  transform: `scale(${sp3ATitle}) translateY(${interpolate(sp3ATitle, [0, 1], [25, 0])}px)`,
                  opacity: sp3ATitle,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                  SEBAGAI ENGINEER...
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontWeight: 950,
                    color: "#10b981",
                    letterSpacing: -1,
                    textShadow: "0 0 45px rgba(16, 185, 129, 0.5)",
                  }}
                >
                  MENURUT AKU PRIBADI,
                </div>
              </div>

              {/* Symmetrical Perspective Card */}
              <div
                style={{
                  transform: `scale(${sp3ACard}) translateY(${interpolate(sp3ACard, [0, 1], [30, 0])}px)`,
                  opacity: sp3ACard,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.94)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: 22,
                  padding: "28px 32px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {/* Center Engineer Node */}
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: 24,
                    backgroundColor: "rgba(16, 185, 129, 0.16)",
                    border: "2px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <FaLaptopCode size={36} color="#10b981" />
                </div>

                {/* 2 Symmetrical Status Chips */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      border: "1.5px solid rgba(16, 185, 129, 0.4)",
                      borderRadius: 16,
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <FaUserCheck size={18} color="#10b981" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Analisis Objektif
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.12)",
                      border: "1.5px solid rgba(6, 182, 212, 0.4)",
                      borderRadius: 16,
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <FaCode size={18} color="#06b6d4" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Real Engineering
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                  Bukan anti teknologi AI, melainkan pendekatan berbasis logika sehat
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 3B: "TIDAK SALAH MENGGUNAKAN AI," (Line 11, relFrame 50 - 105)
              Simetris, Bersih, Tegak Lurus 0deg, Hijau Positif
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame >= 48 && relFrame < 108 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                opacity: exit3B,
                transform: `translateY(${exit3BY}px)`,
              }}
            >
              {/* Pill Badge */}
              <div
                style={{
                  transform: `scale(${sp3BTag})`,
                  opacity: sp3BTag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.14)",
                  border: "1.5px solid rgba(16, 185, 129, 0.45)",
                  color: "#10b981",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                }}
              >
                <FaCheckCircle size={15} color="#10b981" />
                <span>AI AS A CO-PILOT // ACCELERATOR</span>
              </div>

              {/* Kinetic Headline: TIDAK SALAH PAKAI AI */}
              <div
                style={{
                  transform: `scale(${sp3BTitle}) translateY(${interpolate(sp3BTitle, [0, 1], [25, 0])}px)`,
                  opacity: sp3BTitle,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                  FAKTANYA ADALAH...
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontWeight: 950,
                    color: "#10b981",
                    letterSpacing: -1,
                    textShadow: "0 0 45px rgba(16, 185, 129, 0.6)",
                  }}
                >
                  TIDAK SALAH PAKAI AI
                </div>
              </div>

              {/* Symmetrical Synergy Architecture Card */}
              <div
                style={{
                  transform: `scale(${sp3BCard}) translateY(${interpolate(sp3BCard, [0, 1], [30, 0])}px)`,
                  opacity: sp3BCard,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.94)",
                  border: "1.5px solid rgba(16, 185, 129, 0.45)",
                  borderRadius: 22,
                  padding: "26px 30px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* 2 Symmetrical Synergy Pillars Connected with Center Plus */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: 16,
                    width: "100%",
                  }}
                >
                  {/* Human Engineer Pillar */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.7)",
                      border: "1.5px solid rgba(56, 189, 248, 0.4)",
                      borderRadius: 18,
                      padding: "20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaLaptopCode size={30} color="#38bdf8" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Logika Engineer
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Domain Context
                    </span>
                  </div>

                  {/* Center Multiplier */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "2px solid #10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                    }}
                  >
                    <FaBolt size={18} color="#10b981" />
                  </div>

                  {/* AI Co-Pilot Pillar */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.7)",
                      border: "1.5px solid rgba(16, 185, 129, 0.4)",
                      borderRadius: 18,
                      padding: "20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaRobot size={30} color="#10b981" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Kekuatan AI
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Speed Amplifier
                    </span>
                  </div>
                </div>

                {/* Bottom Productivity Acceleration Bar */}
                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    borderLeft: "4px solid #10b981",
                    borderRadius: "0 14px 14px 0",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaCheckCircle size={18} color="#10b981" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Hasil: Produktivitas Meningkat Drastis
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: "#10b981", fontWeight: 800 }}>
                    10X ACCELERATION
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 3C: "SELAMA KAMU BISA MENYARING INFORMASI YANG DIBERIKAN AI"
              (Line 12, relFrame 105 - 215)
              The Core Wisdom // Symmetrical Information Filter Pipeline
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame >= 104 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 22,
              }}
            >
              {/* Pill Badge */}
              <div
                style={{
                  transform: `scale(${sp3CTag})`,
                  opacity: sp3CTag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(6, 182, 212, 0.14)",
                  border: "1.5px solid rgba(6, 182, 212, 0.5)",
                  color: "#06b6d4",
                  fontSize: 14,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                <FaFilter size={15} color="#06b6d4" />
                <span>THE GOLDEN RULE // CRITICAL FILTERING</span>
              </div>

              {/* Kinetic Headline: SELEKSI & SARING INFORMASI */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 4,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                  SYARAT UTAMANYA ADALAH...
                </div>
                <div
                  style={{
                    transform: `scale(${sp3CTitle}) translateY(${interpolate(sp3CTitle, [0, 1], [22, 0])}px)`,
                    opacity: sp3CTitle,
                    fontSize: 54,
                    fontWeight: 950,
                    color: "#06b6d4",
                    letterSpacing: -0.5,
                    textShadow: "0 0 45px rgba(6, 182, 212, 0.65)",
                  }}
                >
                  SARING INFORMASI AI!
                </div>
              </div>

              {/* Symmetrical 3-Stage Information Sieve Card */}
              <div
                style={{
                  transform: `scale(${sp3CFilter}) translateY(${interpolate(sp3CFilter, [0, 1], [26, 0])}px)`,
                  opacity: sp3CFilter,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.96)",
                  border: "1.5px solid rgba(6, 182, 212, 0.45)",
                  borderRadius: 24,
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.2)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Console Bar */}
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.85)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "14px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaFilter size={16} color="#06b6d4" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      INFORMATION SIEVE PIPELINE
                    </span>
                  </div>

                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 10,
                      backgroundColor: "rgba(16, 185, 129, 0.18)",
                      border: "1px solid #10b981",
                      color: "#10b981",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    CRITICAL VERIFICATION: ACTIVE
                  </span>
                </div>

                {/* Sieve Pipeline Body: 3 Connected Sequential Stages */}
                <div
                  style={{
                    padding: "22px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1.1fr auto 1fr",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* Stage 1: Raw AI Suggestions */}
                  <div
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      border: "1.5px solid rgba(239, 68, 68, 0.4)",
                      borderRadius: 16,
                      padding: "16px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaRobot size={24} color="#ef4444" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Output Mentah AI
                    </span>
                    <span style={{ fontSize: 11, color: "#ef4444", fontWeight: 700 }}>
                      Raw / Halusinasi
                    </span>
                  </div>

                  {/* Flow Arrow 1 */}
                  <div style={{ color: "#64748b", fontSize: 16, fontWeight: 900 }}>&gt;&gt;</div>

                  {/* Stage 2: Critical Filter (Center Stage) */}
                  <div
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.12)",
                      border: "2px solid #06b6d4",
                      borderRadius: 18,
                      padding: "18px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                      boxShadow: `0 0 25px rgba(6, 182, 212, ${sieveGlow})`,
                    }}
                  >
                    <FaFilter size={26} color="#06b6d4" />
                    <span style={{ fontSize: 15, fontWeight: 900, color: "#f8fafc" }}>
                      Critical Filter
                    </span>
                    <span style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800 }}>
                      Saring & Validasi
                    </span>
                  </div>

                  {/* Flow Arrow 2 */}
                  <div style={{ color: "#64748b", fontSize: 16, fontWeight: 900 }}>&gt;&gt;</div>

                  {/* Stage 3: Verified Production-Ready Logic */}
                  <div
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      border: "1.5px solid rgba(16, 185, 129, 0.5)",
                      borderRadius: 16,
                      padding: "16px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaCheckCircle size={24} color="#10b981" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Hasil Tervalidasi
                    </span>
                    <span style={{ fontSize: 11, color: "#10b981", fontWeight: 700 }}>
                      Production-Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Staggered Verification Checklist Badges (Simetris 3 Kolom) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                }}
              >
                {/* Badge 1: Filter Halusinasi */}
                <div
                  style={{
                    transform: `scale(${sp3CBadge1})`,
                    opacity: sp3CBadge1,
                    backgroundColor: "rgba(16, 185, 129, 0.14)",
                    border: "1.5px solid rgba(16, 185, 129, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaShieldAlt size={18} color="#10b981" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Filter Halusinasi
                  </span>
                </div>

                {/* Badge 2: Cek Keamanan Kode */}
                <div
                  style={{
                    transform: `scale(${sp3CBadge2})`,
                    opacity: sp3CBadge2,
                    backgroundColor: "rgba(6, 182, 212, 0.14)",
                    border: "1.5px solid rgba(6, 182, 212, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaLock size={18} color="#06b6d4" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Cek Keamanan Kode
                  </span>
                </div>

                {/* Badge 3: Validasi Kebutuhan */}
                <div
                  style={{
                    transform: `scale(${sp3CBadge3})`,
                    opacity: sp3CBadge3,
                    backgroundColor: "rgba(52, 211, 153, 0.14)",
                    border: "1.5px solid rgba(52, 211, 153, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(52, 211, 153, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaCheckDouble size={18} color="#34d399" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Validasi Kebutuhan
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </SceneContainer>
    </div>
  );
};

