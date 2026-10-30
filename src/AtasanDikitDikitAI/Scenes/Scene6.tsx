import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaCompass,
  FaExclamationTriangle,
  FaHandHoldingHeart,
  FaLightbulb,
  FaRocket,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 6 entrance (Global Frame 1145 - 1300)
  const relFrame = Math.max(0, frame - 1145);

  // =========================================================================
  // ⏱️ SUB-BEAT TIMINGS:
  // - Sub-beat 6A (relFrame 0 - 80)  : Line 21 - "Niatnya mungkin membantu,"
  // - Sub-beat 6B (relFrame 80 - 155): Line 22 - "tapi ujung ujungnya mengganggu dan menyesatkan."
  // =========================================================================

  // Sub-beat 6A Springs (Niatnya Membantu)
  const sp6ATag = spring({ frame: relFrame, fps, config: { damping: 14, stiffness: 90 } });
  const sp6ATitle = spring({ frame: Math.max(0, relFrame - 6), fps, config: { damping: 14, stiffness: 85 } });
  const sp6ACard = spring({ frame: Math.max(0, relFrame - 12), fps, config: { damping: 15, stiffness: 80, mass: 1 } });
  const exit6A = interpolate(relFrame, [74, 82], [1, 0], { extrapolateRight: "clamp" });
  const exit6AY = interpolate(relFrame, [74, 82], [0, -35], { extrapolateRight: "clamp" });

  // Sub-beat 6B Springs (Punchline: Mengganggu & Menyesatkan)
  const sp6BTag = spring({ frame: Math.max(0, relFrame - 80), fps, config: { damping: 14, stiffness: 90 } });
  const sp6BLeadIn = spring({ frame: Math.max(0, relFrame - 84), fps, config: { damping: 14, stiffness: 85 } });
  const sp6BTitle = spring({ frame: Math.max(0, relFrame - 90), fps, config: { damping: 13, stiffness: 95 } });
  const sp6BCard = spring({ frame: Math.max(0, relFrame - 98), fps, config: { damping: 16, stiffness: 80, mass: 1 } });
  const sp6BGoldenPill = spring({ frame: Math.max(0, relFrame - 112), fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div style={{ width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      <SceneContainer accentColor="#ef4444">
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
              SUB-BEAT 6A: "NIATNYA MUNGKIN MEMBANTU," (Line 21, relFrame 0 - 80)
              Simetris, Bersih, Tegak Lurus 0deg, Cyan-Emerald Theme
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame < 82 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                opacity: exit6A,
                transform: `translateY(${exit6AY}px)`,
              }}
            >
              {/* Pill Badge */}
              <div
                style={{
                  transform: `scale(${sp6ATag})`,
                  opacity: sp6ATag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(6, 182, 212, 0.14)",
                  border: "1.5px solid rgba(6, 182, 212, 0.45)",
                  color: "#06b6d4",
                  fontSize: 14,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                <FaHandHoldingHeart size={15} color="#06b6d4" />
                <span>INTENTION VS REALITY // THE PREMISE</span>
              </div>

              {/* Kinetic Headline: NIATNYA MEMBANTU */}
              <div
                style={{
                  transform: `scale(${sp6ATitle}) translateY(${interpolate(sp6ATitle, [0, 1], [25, 0])}px)`,
                  opacity: sp6ATitle,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                  DI AWAL SEMUA BERMULA DARI...
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontWeight: 950,
                    color: "#06b6d4",
                    letterSpacing: -1,
                    textShadow: "0 0 45px rgba(6, 182, 212, 0.65)",
                  }}
                >
                  NIATNYA MEMBANTU...
                </div>
              </div>

              {/* Symmetrical Good Intentions Card */}
              <div
                style={{
                  transform: `scale(${sp6ACard}) translateY(${interpolate(sp6ACard, [0, 1], [30, 0])}px)`,
                  opacity: sp6ACard,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.94)",
                  border: "1.5px solid rgba(6, 182, 212, 0.45)",
                  borderRadius: 24,
                  padding: "28px 32px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(6, 182, 212, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {/* Center Heart Icon */}
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: 24,
                    backgroundColor: "rgba(6, 182, 212, 0.16)",
                    border: "2px solid #06b6d4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)",
                  }}
                >
                  <FaHandHoldingHeart size={36} color="#06b6d4" />
                </div>

                {/* 2 Symmetrical Positive Premise Blocks */}
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
                      backgroundColor: "rgba(3, 7, 18, 0.7)",
                      border: "1.5px solid rgba(6, 182, 212, 0.4)",
                      borderRadius: 18,
                      padding: "18px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <FaLightbulb size={22} color="#06b6d4" />
                    <span style={{ fontSize: 15, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                      Berharap proses kerja tim lebih cepat
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.7)",
                      border: "1.5px solid rgba(16, 185, 129, 0.4)",
                      borderRadius: 18,
                      padding: "18px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <FaRocket size={22} color="#10b981" />
                    <span style={{ fontSize: 15, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                      Ingin adopsi teknologi AI modern
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                  Niat yang baik tanpa pemahaman teknis adalah awal dari kekacauan sistem
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 6B: "TAPI UJUNG UJUNGNYA MENGGANGGU DAN MENYESATKAN."
              (Line 22, relFrame 80 - 155) - Final Punchline Climax
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame >= 78 && (
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
                  transform: `scale(${sp6BTag})`,
                  opacity: sp6BTag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  border: "1.5px solid rgba(239, 68, 68, 0.6)",
                  color: "#ef4444",
                  fontSize: 14,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                <FaExclamationTriangle size={15} color="#ef4444" />
                <span>FINAL VERDICT // CRITICAL REALITY</span>
              </div>

              {/* Kinetic Massive Punchline Headline */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    transform: `scale(${sp6BLeadIn}) translateY(${interpolate(sp6BLeadIn, [0, 1], [18, 0])}px)`,
                    opacity: sp6BLeadIn,
                    fontSize: 24,
                    fontWeight: 900,
                    color: "#f59e0b",
                    letterSpacing: 2,
                    textShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                  }}
                >
                  TAPI UJUNG-UJUNGNYA...
                </div>

                <div
                  style={{
                    transform: `scale(${sp6BTitle}) translateY(${interpolate(sp6BTitle, [0, 1], [22, 0])}px)`,
                    opacity: sp6BTitle,
                    fontSize: 54,
                    fontWeight: 950,
                    color: "#ef4444",
                    letterSpacing: -0.5,
                    textShadow: "0 0 50px rgba(239, 68, 68, 0.8)",
                  }}
                >
                  MENGGANGGU & MENYESATKAN!
                </div>
              </div>

              {/* Symmetrical Final Reality Card */}
              <div
                style={{
                  transform: `scale(${sp6BCard}) translateY(${interpolate(sp6BCard, [0, 1], [26, 0])}px)`,
                  opacity: sp6BCard,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.96)",
                  border: "1.5px solid rgba(239, 68, 68, 0.55)",
                  borderRadius: 24,
                  padding: "26px 30px",
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* 2 Symmetrical Impact Columns */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    width: "100%",
                  }}
                >
                  {/* Column 1: Mengganggu Workflow */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.75)",
                      border: "1.5px solid rgba(239, 68, 68, 0.45)",
                      borderRadius: 18,
                      padding: "20px 18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaTimesCircle size={26} color="#ef4444" />
                    <span style={{ fontSize: 16, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                      Mengganggu Workflow
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Memperlambat sprint & merusak fokus engineer
                    </span>
                  </div>

                  {/* Column 2: Menyesatkan Keputusan */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.75)",
                      border: "1.5px solid rgba(239, 68, 68, 0.45)",
                      borderRadius: 18,
                      padding: "20px 18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaCompass size={26} color="#ef4444" />
                    <span style={{ fontSize: 16, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                      Menyesatkan Keputusan
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Membawa arah arsitektur ke jalan yang keliru
                    </span>
                  </div>
                </div>

                {/* Warning Strip */}
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.12)",
                    borderLeft: "4px solid #ef4444",
                    borderRadius: "0 14px 14px 0",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <FaExclamationTriangle size={18} color="#ef4444" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#ef4444" }}>
                    AI BUKAN PENGGANTI KOMPETENSI & PEMAHAMAN TEKNIS NYATA
                  </span>
                </div>
              </div>

              {/* Final Golden Conclusion Pill Callout */}
              <div
                style={{
                  transform: `scale(${sp6BGoldenPill})`,
                  opacity: sp6BGoldenPill,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 28px",
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1.5px solid rgba(16, 185, 129, 0.6)",
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.25)",
                }}
              >
                <FaCheckCircle size={18} color="#10b981" />
                <span style={{ fontSize: 15, fontWeight: 900, color: "#10b981" }}>
                  Gunakan AI sebagai alat, bukan pengganti akal sehat!
                </span>
              </div>
            </div>
          )}
        </div>
      </SceneContainer>
    </div>
  );
};

