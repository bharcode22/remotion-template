import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBan,
  FaCode,
  FaCopy,
  FaExclamationTriangle,
  FaKeyboard,
  FaRobot,
  FaUserTie,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 4 entrance (Global Frame 640 - 810)
  const relFrame = Math.max(0, frame - 640);

  // =========================================================================
  // ⏱️ SUB-BEAT TIMINGS:
  // - Sub-beat 4A (relFrame 0 - 76)  : Line 14 - "Udah atasan kita bukan berasal dari background tech,"
  // - Sub-beat 4B (relFrame 76 - 170): Line 15 - "sok sokan ikut campur urusan kita."
  // =========================================================================

  // Sub-beat 4A Springs (Atasan Non-Tech Reality Check)
  const sp4ATag = spring({ frame: relFrame, fps, config: { damping: 14, stiffness: 90 } });
  const sp4ATitle = spring({ frame: Math.max(0, relFrame - 6), fps, config: { damping: 14, stiffness: 85 } });
  const sp4ACard = spring({ frame: Math.max(0, relFrame - 12), fps, config: { damping: 15, stiffness: 80, mass: 1 } });
  const exit4A = interpolate(relFrame, [70, 78], [1, 0], { extrapolateRight: "clamp" });
  const exit4AY = interpolate(relFrame, [70, 78], [0, -35], { extrapolateRight: "clamp" });

  // Sub-beat 4B Springs (Sok-sokan Ikut Campur Intrusion Alert)
  const sp4BTag = spring({ frame: Math.max(0, relFrame - 74), fps, config: { damping: 14, stiffness: 90 } });
  const sp4BTitle = spring({ frame: Math.max(0, relFrame - 78), fps, config: { damping: 13, stiffness: 95 } });
  const sp4BHud = spring({ frame: Math.max(0, relFrame - 86), fps, config: { damping: 16, stiffness: 80, mass: 1 } });
  const sp4BBadge1 = spring({ frame: Math.max(0, relFrame - 100), fps, config: { damping: 12, stiffness: 110 } });
  const sp4BBadge2 = spring({ frame: Math.max(0, relFrame - 112), fps, config: { damping: 12, stiffness: 110 } });
  const sp4BBadge3 = spring({ frame: Math.max(0, relFrame - 124), fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div style={{ width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      <SceneContainer accentColor="#f59e0b">
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
              SUB-BEAT 4A: "UDAH ATASAN KITA BUKAN BERASAL DARI BACKGROUND TECH,"
              (Line 14, relFrame 0 - 76)
              Simetris, Bersih, Tegak Lurus 0deg, Amber Theme
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame < 78 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                opacity: exit4A,
                transform: `translateY(${exit4AY}px)`,
              }}
            >
              {/* Pill Badge */}
              <div
                style={{
                  transform: `scale(${sp4ATag})`,
                  opacity: sp4ATag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(245, 158, 11, 0.14)",
                  border: "1.5px solid rgba(245, 158, 11, 0.45)",
                  color: "#f59e0b",
                  fontSize: 14,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                <FaExclamationTriangle size={15} color="#f59e0b" />
                <span>REALITY CHECK // NON-TECH BACKGROUND</span>
              </div>

              {/* Kinetic Headline: ATASAN NON-TECH */}
              <div
                style={{
                  transform: `scale(${sp4ATitle}) translateY(${interpolate(sp4ATitle, [0, 1], [25, 0])}px)`,
                  opacity: sp4ATitle,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                  REALITAS DI LAPANGAN...
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontWeight: 950,
                    color: "#f59e0b",
                    letterSpacing: -1,
                    textShadow: "0 0 45px rgba(245, 158, 11, 0.6)",
                  }}
                >
                  ATASAN BUKAN ORANG TECH!
                </div>
              </div>

              {/* Symmetrical Competency Disparity Card */}
              <div
                style={{
                  transform: `scale(${sp4ACard}) translateY(${interpolate(sp4ACard, [0, 1], [30, 0])}px)`,
                  opacity: sp4ACard,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.94)",
                  border: "1.5px solid rgba(245, 158, 11, 0.45)",
                  borderRadius: 24,
                  padding: "28px 32px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(245, 158, 11, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {/* Center Boss Profile Icon */}
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: 24,
                    backgroundColor: "rgba(245, 158, 11, 0.16)",
                    border: "2px solid #f59e0b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)",
                  }}
                >
                  <FaUserTie size={36} color="#f59e0b" />
                </div>

                {/* Symmetrical 2-Column Competency Mismatch Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    width: "100%",
                  }}
                >
                  {/* Left Column: Tech Understanding (0%) */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.75)",
                      border: "1.5px solid rgba(239, 68, 68, 0.4)",
                      borderRadius: 18,
                      padding: "20px 18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaCode size={24} color="#ef4444" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Konteks Coding
                    </span>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(239, 68, 68, 0.18)",
                        color: "#ef4444",
                        fontSize: 13,
                        fontWeight: 900,
                      }}
                    >
                      0% EXP
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Tanpa dasar arsitektur nyata
                    </span>
                  </div>

                  {/* Right Column: Chatbot Confidence (100%) */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 7, 18, 0.75)",
                      border: "1.5px solid rgba(245, 158, 11, 0.4)",
                      borderRadius: 18,
                      padding: "20px 18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <FaRobot size={24} color="#f59e0b" />
                    <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      Keyakinan Prompt
                    </span>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(245, 158, 11, 0.18)",
                        color: "#f59e0b",
                        fontSize: 13,
                        fontWeight: 900,
                      }}
                    >
                      100% OVERCONFIDENT
                    </span>
                    <span style={{ fontSize: 12, color: TECH_COLORS.textSecondary }}>
                      Modal copas jawaban chatbot
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                  Mengira membaca rangkuman AI sama dengan memahami sistem production nyata
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 4B: "SOK SOKAN IKUT CAMPUR URUSAN KITA."
              (Line 15, relFrame 76 - 170)
              Interference Alert // Symmetrical System Intrusion HUD
          ═══════════════════════════════════════════════════════════════════════ */}
          {relFrame >= 72 && (
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
                  transform: `scale(${sp4BTag})`,
                  opacity: sp4BTag,
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
                <FaBan size={15} color="#ef4444" />
                <span>INTERFERENCE ALERT // MICROMANAGEMENT</span>
              </div>

              {/* Kinetic Headline: IKUT CAMPUR URUSAN TECH! */}
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
                  TAPI TIBA-TIBA...
                </div>
                <div
                  style={{
                    transform: `scale(${sp4BTitle}) translateY(${interpolate(sp4BTitle, [0, 1], [22, 0])}px)`,
                    opacity: sp4BTitle,
                    fontSize: 56,
                    fontWeight: 950,
                    color: "#ef4444",
                    letterSpacing: -0.5,
                    textShadow: "0 0 45px rgba(239, 68, 68, 0.7)",
                  }}
                >
                  IKUT CAMPUR URUSAN TECH!
                </div>
              </div>

              {/* Symmetrical System Intrusion HUD Card */}
              <div
                style={{
                  transform: `scale(${sp4BHud}) translateY(${interpolate(sp4BHud, [0, 1], [26, 0])}px)`,
                  opacity: sp4BHud,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.96)",
                  border: "1.5px solid rgba(239, 68, 68, 0.5)",
                  borderRadius: 24,
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25)",
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
                    <FaBan size={16} color="#ef4444" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                      UNAUTHORIZED ARCHITECTURAL INTERFERENCE
                    </span>
                  </div>

                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 10,
                      backgroundColor: "rgba(239, 68, 68, 0.18)",
                      border: "1px solid #ef4444",
                      color: "#ef4444",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    OVERREACH DETECTED
                  </span>
                </div>

                {/* Intrusion Meeting Quote Body */}
                <div
                  style={{
                    padding: "22px 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      borderLeft: "4px solid #ef4444",
                      borderRadius: "0 14px 14px 0",
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#ef4444", letterSpacing: 1 }}>
                      PROMPT INTRUSION DALAM MEETING:
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc", lineHeight: 1.45, marginTop: 4 }}>
                      &ldquo;Kata ChatGPT database ini mending dirombak aja pake X, kok kalian bikinnya lama?&rdquo;
                    </div>
                  </div>

                  {/* Warning Strip */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#ef4444",
                    }}
                  >
                    <FaExclamationTriangle size={14} color="#ef4444" />
                    <span>MEMAKSAKAN SARAN CHATBOT TANPA MEMAHAMI KONSEKUENSI TEKNIS</span>
                  </div>
                </div>
              </div>

              {/* 3 Staggered Reaction Badges (Simetris 3 Kolom, Tegak 0deg) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                }}
              >
                {/* Badge 1: Sok Ngatur Kode */}
                <div
                  style={{
                    transform: `scale(${sp4BBadge1})`,
                    opacity: sp4BBadge1,
                    backgroundColor: "rgba(245, 158, 11, 0.14)",
                    border: "1.5px solid rgba(245, 158, 11, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(245, 158, 11, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaKeyboard size={18} color="#f59e0b" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Sok Ngatur Kode
                  </span>
                </div>

                {/* Badge 2: Bypass Engineer */}
                <div
                  style={{
                    transform: `scale(${sp4BBadge2})`,
                    opacity: sp4BBadge2,
                    backgroundColor: "rgba(239, 68, 68, 0.14)",
                    border: "1.5px solid rgba(239, 68, 68, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaBan size={18} color="#ef4444" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Bypass Engineer
                  </span>
                </div>

                {/* Badge 3: Asal Copas Prompt */}
                <div
                  style={{
                    transform: `scale(${sp4BBadge3})`,
                    opacity: sp4BBadge3,
                    backgroundColor: "rgba(139, 92, 246, 0.14)",
                    border: "1.5px solid rgba(139, 92, 246, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaCopy size={18} color="#8b5cf6" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Asal Copas Prompt
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

