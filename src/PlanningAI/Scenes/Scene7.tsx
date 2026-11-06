import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBolt,
  FaCheck,
  FaCheckCircle,
  FaCodeBranch,
  FaPlusCircle,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { PLANNING_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 7: Frames 1205 - 1410 / Duration: 205 frames)
  //
  // Line 16 (Voiceover: 40.16s - 47.0s / F1205 - F1410):
  // "Sehingga ketika perlu maintenance, menambah fitur, atau melakukan revisi, prosesnya akan jauh lebih mudah."
  //
  // ➔ Phase 1 (localFrame 0 - 50 / F1205 - F1255):
  //    "Sehingga ketika perlu maintenance,"
  //    Card 1 (Maintenance) activates & illuminates (Health test runner, zero regression).
  //
  // ➔ Phase 2 (localFrame 50 - 95 / F1255 - F1300):
  //    "menambah fitur,"
  //    Card 2 (Tambah Fitur) activates & illuminates (Modular plug & play integration).
  //
  // ➔ Phase 3 (localFrame 95 - 140 / F1300 - F1345):
  //    "atau melakukan revisi,"
  //    Card 3 (Revisi) activates & illuminates (Hot refactor & clean schema sync).
  //
  // ➔ Phase 4 (localFrame 140 - 205 / F1345 - F1410):
  //    "prosesnya akan jauh lebih mudah."
  //    Climactic harmony: Velocity bar unlocks, all 3 cards connect with glowing
  //    emerald checkmarks, effortlessly fast workflow.
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 7 (0 to 205)
  const localFrame = Math.max(0, frame - 1205);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [198, 205], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [198, 205], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Current active sub-phase (1 to 4)
  const isPhaseMaintenance = localFrame < 50;
  const isPhaseFeature = localFrame >= 50 && localFrame < 95;
  const isPhaseRevision = localFrame >= 95 && localFrame < 140;
  const isPhaseEasy = localFrame >= 140;

  // 1. Spoken Headline Springs
  const spHeadlinePart1 = spring({
    frame: Math.max(0, localFrame - 2),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const spHeadlineEasy = spring({
    frame: Math.max(0, localFrame - 138),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // 2. Synchronized 3-Card Baseline Entrance (All 3 appear immediately in standby)
  const spCardsEntrance = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 130 },
  });

  // Individual Card Illumination Springs
  const spCard1Active = spring({
    frame: Math.max(0, localFrame - 8),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  const spCard2Active = spring({
    frame: Math.max(0, localFrame - 48),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  const spCard3Active = spring({
    frame: Math.max(0, localFrame - 92),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // 3. Velocity Bar Entrance (localFrame 140+)
  const spVelocityBar = spring({
    frame: Math.max(0, localFrame - 140),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 150 },
  });

  // Animated Speed Fill for Velocity Bar (0% to 100%)
  const velocityProgress = interpolate(localFrame, [142, 175], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Pulse animations
  const pulseHealth = Math.sin((localFrame * Math.PI) / 8) * 0.2 + 0.8;

  // Active status per card
  const card1IsActive = isPhaseMaintenance || isPhaseEasy;
  const card2IsActive = isPhaseFeature || isPhaseEasy;
  const card3IsActive = isPhaseRevision || isPhaseEasy;

  return (
    <SceneContainer
      padding="0 50px"
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER AT Y = 960PX)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. SPOKEN HEADLINE (STRICTLY SCRIPT LINE 16)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            minHeight: 145,
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Phase 1 - 3 Headline: "Sehingga ketika perlu maintenance, menambah fitur, atau melakukan revisi," */}
          {!isPhaseEasy && (
            <div
              style={{
                width: 960,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: spHeadlinePart1,
                transform: `translateY(${(1 - spHeadlinePart1) * 10}px)`,
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                }}
              >
                Sehingga ketika perlu
              </div>

              {/* 3 Step Flow Keywords with Synchronized Highlighting */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {/* 1. maintenance */}
                <span
                  style={{
                    fontSize: isPhaseMaintenance ? 42 : 34,
                    fontWeight: isPhaseMaintenance ? 900 : 700,
                    color: isPhaseMaintenance
                      ? PLANNING_COLORS.valueAmber
                      : "#64748b",
                    fontFamily: FONT_MONO,
                    textShadow: isPhaseMaintenance
                      ? `0 0 25px ${PLANNING_COLORS.amberGlow}`
                      : "none",
                    transform: `scale(${isPhaseMaintenance ? 1.05 : 1})`,
                  }}
                >
                  maintenance,
                </span>

                {/* 2. menambah fitur */}
                <span
                  style={{
                    fontSize: isPhaseFeature ? 42 : 34,
                    fontWeight: isPhaseFeature ? 900 : 700,
                    color: isPhaseFeature
                      ? PLANNING_COLORS.aiPurple
                      : "#64748b",
                    fontFamily: FONT_MONO,
                    textShadow: isPhaseFeature
                      ? `0 0 25px ${PLANNING_COLORS.aiGlow}`
                      : "none",
                    transform: `scale(${isPhaseFeature ? 1.05 : 1})`,
                  }}
                >
                  menambah fitur,
                </span>

                {/* 3. atau melakukan revisi */}
                <span
                  style={{
                    fontSize: isPhaseRevision ? 40 : 32,
                    fontWeight: isPhaseRevision ? 900 : 700,
                    color: isPhaseRevision
                      ? PLANNING_COLORS.cyberCyan
                      : "#64748b",
                    fontFamily: FONT_MONO,
                    textShadow: isPhaseRevision
                      ? `0 0 25px ${PLANNING_COLORS.cyanGlow}`
                      : "none",
                    transform: `scale(${isPhaseRevision ? 1.05 : 1})`,
                  }}
                >
                  atau melakukan revisi,
                </span>
              </div>
            </div>
          )}

          {/* Phase 4 Headline: "prosesnya akan jauh lebih mudah." */}
          {isPhaseEasy && (
            <div
              style={{
                width: 960,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: spHeadlineEasy,
                transform: `scale(${spHeadlineEasy}) translateY(${(1 - spHeadlineEasy) * 12}px)`,
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                }}
              >
                prosesnya akan
              </div>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: PLANNING_COLORS.structureGreen,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.mintGlow}`,
                }}
              >
                jauh lebih mudah.
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. VISUAL ASSET STAGE: 3-CARD DEVELOPER ACTION POWERHOUSE
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            boxSizing: "border-box",
            opacity: spCardsEntrance,
            transform: `translateY(${(1 - spCardsEntrance) * 20}px)`,
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              CARD 1: MAINTENANCE (Amber)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              height: 108,
              borderRadius: 20,
              backgroundColor: card1IsActive
                ? "rgba(11, 19, 32, 0.95)"
                : "rgba(11, 19, 32, 0.65)",
              border: `1.5px solid ${
                card1IsActive
                  ? isPhaseEasy
                    ? PLANNING_COLORS.structureGreen
                    : PLANNING_COLORS.valueAmber
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: card1IsActive
                ? `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${
                    isPhaseEasy
                      ? PLANNING_COLORS.mintGlow
                      : PLANNING_COLORS.amberGlow
                  }`
                : "0 8px 20px rgba(0, 0, 0, 0.4)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${0.98 + 0.03 * (card1IsActive ? spCard1Active : 0)})`,
              opacity: card1IsActive ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            {/* Left: Icon & Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: card1IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.18)"
                      : "rgba(245, 158, 11, 0.18)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${
                    card1IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.valueAmber
                      : "rgba(255, 255, 255, 0.15)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: card1IsActive
                    ? `0 0 20px ${
                        isPhaseEasy
                          ? PLANNING_COLORS.mintGlow
                          : PLANNING_COLORS.amberGlow
                      }`
                    : "none",
                }}
              >
                <FaTools
                  size={22}
                  color={
                    card1IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.valueAmber
                      : "#64748b"
                  }
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    color: card1IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.valueAmber
                      : "#64748b",
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  01. MAINTENANCE
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Zero Regression & Clean Architecture
                </div>
              </div>
            </div>

            {/* Middle: Live Automated Test Runner Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 8,
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <FaCheckCircle size={14} color={PLANNING_COLORS.structureGreen} />
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#f8fafc",
                  }}
                >
                  128 / 128 Tests Passing
                </span>
              </div>

              {/* Heartbeat Pulse Indicator */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: card1IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.valueAmber
                    : "#64748b",
                  transform: `scale(${card1IsActive ? pulseHealth : 1})`,
                  boxShadow: card1IsActive
                    ? `0 0 12px ${
                        isPhaseEasy
                          ? PLANNING_COLORS.structureGreen
                          : PLANNING_COLORS.valueAmber
                      }`
                    : "none",
                }}
              />
            </div>

            {/* Right: Status Seal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: card1IsActive
                  ? isPhaseEasy
                    ? "rgba(16, 185, 129, 0.18)"
                    : "rgba(245, 158, 11, 0.15)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  card1IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.5)"
                      : "rgba(245, 158, 11, 0.4)"
                    : "rgba(255, 255, 255, 0.1)"
                }`,
              }}
            >
              <FaCheck
                size={12}
                color={
                  card1IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.valueAmber
                    : "#64748b"
                }
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: card1IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.valueAmber
                    : "#64748b",
                  letterSpacing: 0.8,
                }}
              >
                HIGH STABILITY
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 2: MENAMBAH FITUR (Violet / Purple)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              height: 108,
              borderRadius: 20,
              backgroundColor: card2IsActive
                ? "rgba(11, 19, 32, 0.95)"
                : "rgba(11, 19, 32, 0.65)",
              border: `1.5px solid ${
                card2IsActive
                  ? isPhaseEasy
                    ? PLANNING_COLORS.structureGreen
                    : PLANNING_COLORS.aiPurple
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: card2IsActive
                ? `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${
                    isPhaseEasy
                      ? PLANNING_COLORS.mintGlow
                      : PLANNING_COLORS.aiGlow
                  }`
                : "0 8px 20px rgba(0, 0, 0, 0.4)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${0.98 + 0.03 * (card2IsActive ? spCard2Active : 0)})`,
              opacity: card2IsActive ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            {/* Left: Icon & Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: card2IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.18)"
                      : "rgba(168, 85, 247, 0.18)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${
                    card2IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.aiPurple
                      : "rgba(255, 255, 255, 0.15)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: card2IsActive
                    ? `0 0 20px ${
                        isPhaseEasy
                          ? PLANNING_COLORS.mintGlow
                          : PLANNING_COLORS.aiGlow
                      }`
                    : "none",
                }}
              >
                <FaPlusCircle
                  size={22}
                  color={
                    card2IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.aiPurple
                      : "#64748b"
                  }
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    color: card2IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.aiPurple
                      : "#64748b",
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  02. MENAMBAH FITUR
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Modular Plug & Play Extensions
                </div>
              </div>
            </div>

            {/* Middle: Plug & Play Module Insertion Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#e2e8f0",
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                + Isolated Route / Module
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: card2IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.aiPurple
                    : "#64748b",
                  backgroundColor: card2IsActive
                    ? "rgba(168, 85, 247, 0.15)"
                    : "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: `1px solid ${
                    card2IsActive
                      ? "rgba(168, 85, 247, 0.35)"
                      : "rgba(255, 255, 255, 0.1)"
                  }`,
                }}
              >
                PLUG & PLAY
              </span>
            </div>

            {/* Right: Status Seal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: card2IsActive
                  ? isPhaseEasy
                    ? "rgba(16, 185, 129, 0.18)"
                    : "rgba(168, 85, 247, 0.15)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  card2IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.5)"
                      : "rgba(168, 85, 247, 0.4)"
                    : "rgba(255, 255, 255, 0.1)"
                }`,
              }}
            >
              <FaCheck
                size={12}
                color={
                  card2IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.aiPurple
                    : "#64748b"
                }
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: card2IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.aiPurple
                    : "#64748b",
                  letterSpacing: 0.8,
                }}
              >
                SCALABLE
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 3: MELAKUKAN REVISI (Cyber Cyan)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              height: 108,
              borderRadius: 20,
              backgroundColor: card3IsActive
                ? "rgba(11, 19, 32, 0.95)"
                : "rgba(11, 19, 32, 0.65)",
              border: `1.5px solid ${
                card3IsActive
                  ? isPhaseEasy
                    ? PLANNING_COLORS.structureGreen
                    : PLANNING_COLORS.cyberCyan
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: card3IsActive
                ? `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${
                    isPhaseEasy
                      ? PLANNING_COLORS.mintGlow
                      : PLANNING_COLORS.cyanGlow
                  }`
                : "0 8px 20px rgba(0, 0, 0, 0.4)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${0.98 + 0.03 * (card3IsActive ? spCard3Active : 0)})`,
              opacity: card3IsActive ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            {/* Left: Icon & Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: card3IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.18)"
                      : "rgba(6, 182, 212, 0.18)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${
                    card3IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.cyberCyan
                      : "rgba(255, 255, 255, 0.15)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: card3IsActive
                    ? `0 0 20px ${
                        isPhaseEasy
                          ? PLANNING_COLORS.mintGlow
                          : PLANNING_COLORS.cyanGlow
                      }`
                    : "none",
                }}
              >
                <FaSyncAlt
                  size={22}
                  color={
                    card3IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.cyberCyan
                      : "#64748b"
                  }
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    color: card3IsActive
                      ? isPhaseEasy
                        ? PLANNING_COLORS.structureGreen
                        : PLANNING_COLORS.cyberCyan
                      : "#64748b",
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  03. MELAKUKAN REVISI
                </div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Instant Refactor & Schema Sync
                </div>
              </div>
            </div>

            {/* Middle: Clean Diff Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 8,
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <FaCodeBranch size={13} color={card3IsActive ? (isPhaseEasy ? PLANNING_COLORS.structureGreen : PLANNING_COLORS.cyberCyan) : "#64748b"} />
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                    color: card3IsActive ? "#38bdf8" : "#94a3b8",
                  }}
                >
                  Safe Schema Migrations
                </span>
              </div>
            </div>

            {/* Right: Status Seal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: card3IsActive
                  ? isPhaseEasy
                    ? "rgba(16, 185, 129, 0.18)"
                    : "rgba(6, 182, 212, 0.15)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  card3IsActive
                    ? isPhaseEasy
                      ? "rgba(16, 185, 129, 0.5)"
                      : "rgba(6, 182, 212, 0.4)"
                    : "rgba(255, 255, 255, 0.1)"
                }`,
              }}
            >
              <FaCheck
                size={12}
                color={
                  card3IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.cyberCyan
                    : "#64748b"
                }
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: card3IsActive
                    ? isPhaseEasy
                      ? PLANNING_COLORS.structureGreen
                      : PLANNING_COLORS.cyberCyan
                    : "#64748b",
                  letterSpacing: 0.8,
                }}
              >
                ZERO BREAKING
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CLIMAX VELOCITY BAR (Unlocks At "prosesnya akan jauh lebih mudah")
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              height: 56,
              borderRadius: 16,
              background: `linear-gradient(90deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2))`,
              border: `2px solid ${PLANNING_COLORS.structureGreen}`,
              boxShadow: `0 20px 45px rgba(0, 0, 0, 0.8), 0 0 35px ${PLANNING_COLORS.mintGlow}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              boxSizing: "border-box",
              transform: `scale(${spVelocityBar}) translateY(${(1 - spVelocityBar) * 15}px)`,
              opacity: spVelocityBar,
              marginTop: 6,
            }}
          >
            {/* Left: Speed Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaBolt size={18} color={PLANNING_COLORS.structureGreen} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  fontWeight: 900,
                  color: "#f8fafc",
                  letterSpacing: 1.2,
                }}
              >
                DEVELOPER WORKFLOW ACCELERATION
              </span>
            </div>

            {/* Middle: Progress Meter Bar */}
            <div
              style={{
                width: 240,
                height: 10,
                borderRadius: 5,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div
                style={{
                  width: `${velocityProgress}%`,
                  height: "100%",
                  borderRadius: 5,
                  background: `linear-gradient(90deg, ${PLANNING_COLORS.cyberCyan}, ${PLANNING_COLORS.structureGreen})`,
                  boxShadow: `0 0 15px ${PLANNING_COLORS.structureGreen}`,
                }}
              />
            </div>

            {/* Right: Effortless Seal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(16, 185, 129, 0.25)",
                border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                padding: "6px 14px",
                borderRadius: 20,
                boxShadow: `0 0 20px ${PLANNING_COLORS.mintGlow}`,
              }}
            >
              <FaCheck size={13} color={PLANNING_COLORS.structureGreen} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 900,
                  color: PLANNING_COLORS.structureGreen,
                  letterSpacing: 0.8,
                }}
              >
                JAUH LEBIH MUDAH
              </span>
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
