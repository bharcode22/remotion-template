import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowDown,
  FaCheckCircle,
  FaDatabase,
  FaDraftingCompass,
  FaLayerGroup,
  FaLightbulb,
  FaMagic,
  FaProjectDiagram,
  FaRobot,
  FaRocket,
  FaSlidersH,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 2: Frames 225 - 460)
  //
  // Line 4 (F228.9 - F354):
  // "Menurutku, jawabannya adalah kemampuan memahami apa yang ingin kita bangun"
  // ➔ Top Badge + Headline Phase 1 + Pillar 1 Card (System Blueprint & Understanding)
  //
  // Line 5 (F365 - F438):
  // "dan bagaimana mengarahkan AI untuk mewujudkannya."
  // ➔ Transition to Headline Phase 2 + Flow Connector + Pillar 2 Card (AI Guidance)
  // + Golden Synthesis Pill (F405 - F460)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 2 (0 to 235)
  const localFrame = Math.max(0, frame - 225);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [228, 235], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [228, 235], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 1. Top Badge Spring (F225+)
  const spBadge = spring({
    frame: Math.max(0, localFrame - 1),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // 2. Headline Phase 1 vs Phase 2 Transition (F354 - F365 / localFrame 129 - 140)
  const isPhase1 = localFrame < 135;
  const headlinePhaseProgress = interpolate(localFrame, [130, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const spHeadline1 = spring({
    frame: Math.max(0, localFrame - 3),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  const spHeadline2 = spring({
    frame: Math.max(0, localFrame - 138),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  // 3. Pillar 1: Blueprint & Architecture (F235+ / localFrame 10+)
  const spPillar1 = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // Staggered Micro Chips for Pillar 1
  const spChip1_1 = spring({
    frame: Math.max(0, localFrame - 22),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const spChip1_2 = spring({
    frame: Math.max(0, localFrame - 32),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const spChip1_3 = spring({
    frame: Math.max(0, localFrame - 42),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });

  // 4. Phase 2 Transition Physics (Pillar 2 & Connector blossom at F355+ / localFrame 130+)
  const phase2Transition = spring({
    frame: Math.max(0, localFrame - 130),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 110 },
  });

  const stageShiftY = (1 - phase2Transition) * 60;

  // 5. Directional Flow Connector (F350+ / localFrame 125+)
  const spConnector = spring({
    frame: Math.max(0, localFrame - 128),
    fps,
    config: { damping: 14, stiffness: 135 },
  });

  // 6. Pillar 2: AI Precision Steering (F365+ / localFrame 140+)
  const spPillar2 = spring({
    frame: Math.max(0, localFrame - 138),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // Staggered Micro Chips for Pillar 2
  const spChip2_1 = spring({
    frame: Math.max(0, localFrame - 152),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const spChip2_2 = spring({
    frame: Math.max(0, localFrame - 162),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const spChip2_3 = spring({
    frame: Math.max(0, localFrame - 172),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });

  // 6. Bottom Golden Synthesis Pill (F405+ / localFrame 180+)
  const spSynthesis = spring({
    frame: Math.max(0, localFrame - 180),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const pulseGreen = Math.sin((localFrame * Math.PI) / 12) * 0.2 + 0.8;
  const pulseCyan = Math.cos((localFrame * Math.PI) / 12) * 0.2 + 0.8;
  const travelingDot = (localFrame * 4) % 100;

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
          UNIFIED VERTICALLY-CENTERED WRAPPER (Golden Center Zone)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          boxSizing: "border-box",
          transform: `translateY(${stageShiftY}px)`,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. TOP GLASS BADGE
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -12}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 26px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(110, 231, 183, 0.35)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          <FaLightbulb size={15} color={GLASS_COLORS.valueAmber} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#ffffff",
              textTransform: "uppercase",
              fontFamily: FONT_DISPLAY,
            }}
          >
            JAWABAN UTAMA // DUA KEMAMPUAN KUNCI
          </span>
          <FaRocket size={13} color={GLASS_COLORS.cyberCyan} />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. DYNAMIC SPOKEN HEADLINE
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            textAlign: "center",
            minHeight: 130,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Phase 1: Line 4 Headline (F228 - F354) */}
          {headlinePhaseProgress < 1 && (
            <div
              style={{
                position: isPhase1 ? "relative" : "absolute",
                transform: `scale(${spHeadline1}) translateY(${(1 - spHeadline1) * 15}px)`,
                opacity: spHeadline1 * (1 - headlinePhaseProgress),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: GLASS_COLORS.textSecondary,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                Menurutku, Jawabannya Adalah:
              </div>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 900,
                  color: "#ffffff",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.25,
                }}
              >
                Kemampuan{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${GLASS_COLORS.structureGreen}, #34d399)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Memahami
                </span>
                <br />
                Apa yang Ingin Kita Bangun
              </div>
            </div>
          )}

          {/* Phase 2: Line 5 Headline (F365 - F438) */}
          {headlinePhaseProgress > 0 && (
            <div
              style={{
                position: isPhase1 ? "absolute" : "relative",
                transform: `scale(${spHeadline2}) translateY(${(1 - spHeadline2) * 15}px)`,
                opacity: spHeadline2 * headlinePhaseProgress,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: GLASS_COLORS.textSecondary,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                Dan Bagaimana:
              </div>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 900,
                  color: "#ffffff",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.25,
                }}
              >
                <span
                  style={{
                    background: `linear-gradient(135deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.skyBlue})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Mengarahkan AI
                </span>
                <br />
                Untuk Mewujudkannya
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. CENTER VISUAL: THE 2 CORE PILLARS ARCHITECTURE (Glass)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              PILAR 01: BLUEPRINT & SYSTEM ARCHITECTURE (Glass)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 920,
              minHeight: 165,
              borderRadius: 24,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(110, 231, 183, 0.28)",
              boxShadow:
                "0 20px 45px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              transform: `scale(${spPillar1})`,
              opacity: spPillar1,
              fontFamily: FONT_DISPLAY,
              boxSizing: "border-box",
            }}
          >
            {/* Left Glass Icon Badge */}
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                backgroundColor: "rgba(110, 231, 183, 0.16)",
                border: "1px solid rgba(110, 231, 183, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 8px 24px rgba(110, 231, 183, ${0.25 * pulseGreen})`,
                flexShrink: 0,
              }}
            >
              <FaLayerGroup size={28} color={GLASS_COLORS.structureGreen} />
            </div>

            {/* Middle Pillar Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 800,
                  color: GLASS_COLORS.structureGreen,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}
              >
                <span>PILAR 01 • FONDASI & ARSITEKTUR</span>
              </div>
              <div
                style={{
                  fontSize: 25,
                  fontWeight: 900,
                  color: "#ffffff",
                  marginTop: 4,
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                }}
              >
                Paham Apa yang Ingin Dibangun
              </div>

              {/* Staggered Floating Micro Glass Chips */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <div
                  style={{
                    transform: `scale(${spChip1_1})`,
                    opacity: spChip1_1,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(110, 231, 183, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaDraftingCompass size={11} color={GLASS_COLORS.structureGreen} />
                  <span>Arsitektur Sistem</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spChip1_2})`,
                    opacity: spChip1_2,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(110, 231, 183, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaDatabase size={11} color={GLASS_COLORS.structureGreen} />
                  <span>Skema & Relasi Data</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spChip1_3})`,
                    opacity: spChip1_3,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(110, 231, 183, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaProjectDiagram size={11} color={GLASS_COLORS.structureGreen} />
                  <span>Logika Bisnis</span>
                </div>
              </div>
            </div>

            {/* Right Status Badge */}
            <div
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "rgba(110, 231, 183, 0.14)",
                border: "1px solid rgba(110, 231, 183, 0.35)",
                color: GLASS_COLORS.structureGreen,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: 1.5,
                flexShrink: 0,
              }}
            >
              BLUEPRINT
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              DYNAMIC FLOW CONNECTOR (Glass Style)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              height: 76,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transform: `scale(${spConnector})`,
              opacity: spConnector,
            }}
          >
            {/* Vertical Flow Line with Traveling Energy Dot */}
            <div
              style={{
                width: 2,
                height: 76,
                background: `linear-gradient(180deg, ${GLASS_COLORS.structureGreen}, ${GLASS_COLORS.cyberCyan})`,
                opacity: 0.45,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: `${travelingDot}%`,
                  left: -2,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: GLASS_COLORS.cyberCyan,
                  boxShadow: `0 0 8px ${GLASS_COLORS.cyberCyan}`,
                }}
              />
            </div>

            {/* Central Floating Micro Badge */}
            <div
              style={{
                position: "absolute",
                padding: "6px 18px",
                borderRadius: 9999,
                backgroundColor: "rgba(255, 255, 255, 0.09)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: FONT_DISPLAY,
                fontSize: 11,
                fontWeight: 800,
                color: "#e2e8f0",
                letterSpacing: 0.5,
              }}
            >
              <span>INSTRUKSI TERUKUR</span>
              <FaArrowDown size={10} color={GLASS_COLORS.cyberCyan} />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              PILAR 02: AI PRECISION STEERING (Glass)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 920,
              minHeight: 165,
              borderRadius: 24,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(103, 232, 249, 0.28)",
              boxShadow:
                "0 20px 45px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              transform: `scale(${spPillar2})`,
              opacity: spPillar2,
              fontFamily: FONT_DISPLAY,
              boxSizing: "border-box",
            }}
          >
            {/* Left Glass Icon Badge */}
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                backgroundColor: "rgba(103, 232, 249, 0.16)",
                border: "1px solid rgba(103, 232, 249, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 8px 24px rgba(103, 232, 249, ${0.25 * pulseCyan})`,
                flexShrink: 0,
              }}
            >
              <FaRobot size={28} color={GLASS_COLORS.cyberCyan} />
            </div>

            {/* Middle Pillar Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 800,
                  color: GLASS_COLORS.cyberCyan,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}
              >
                <span>PILAR 02 • EKSEKUSI & ARAHAN PREP</span>
              </div>
              <div
                style={{
                  fontSize: 25,
                  fontWeight: 900,
                  color: "#ffffff",
                  marginTop: 4,
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                }}
              >
                Mengarahkan AI Mewujudkannya
              </div>

              {/* Staggered Floating Micro Glass Chips */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <div
                  style={{
                    transform: `scale(${spChip2_1})`,
                    opacity: spChip2_1,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(103, 232, 249, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaMagic size={11} color={GLASS_COLORS.cyberCyan} />
                  <span>Prompt Bertahap</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spChip2_2})`,
                    opacity: spChip2_2,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(103, 232, 249, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaSlidersH size={11} color={GLASS_COLORS.cyberCyan} />
                  <span>Spesifikasi Jelas</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spChip2_3})`,
                    opacity: spChip2_3,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(103, 232, 249, 0.25)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FaCheckCircle size={11} color={GLASS_COLORS.cyberCyan} />
                  <span>Kontrol Presisi</span>
                </div>
              </div>
            </div>

            {/* Right Status Badge */}
            <div
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "rgba(103, 232, 249, 0.14)",
                border: "1px solid rgba(103, 232, 249, 0.35)",
                color: GLASS_COLORS.cyberCyan,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: 1.5,
                flexShrink: 0,
              }}
            >
              AI ENGINE
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. BOTTOM SYNTHESIS GLASS PILL (F405 - F460)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spSynthesis})`,
            opacity: spSynthesis,
            padding: "14px 34px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.09)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(251, 191, 36, 0.35)",
            boxShadow:
              "0 12px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: FONT_DISPLAY,
            marginTop: 8,
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: GLASS_COLORS.valueAmber,
              boxShadow: "0 0 10px rgba(251, 191, 36, 0.5)",
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: 0.6,
            }}
          >
            ARSITEK SISTEM (DEVELOPER) + EKSEKUTOR (AI) = THE TRUE ADVANTAGE
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

