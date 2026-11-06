import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheck,
  FaDatabase,
  FaLock,
  FaServer,
} from "react-icons/fa";
import {
  SiBun,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 3: Frames 460 - 645)
  //
  // Line 7 (F465 - F550):
  // "Misalnya, ketika ingin membuat sebuah fullstack web app,"
  // ➔ Spoken Headline Line 7 + Sleek Floating Fullstack Web App Mockup Asset
  //
  // Line 8 (F562 - F633):
  // "Aku mulai dengan menentukan tech stack terlebih dahulu."
  // ➔ Spoken Headline Line 8 + 3 Fully-Filled Tech Stack Asset Layers & Selector
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 3 (0 to 185)
  const localFrame = Math.max(0, frame - 460);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [178, 185], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [178, 185], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase Transition (Phase 1: Line 7 ➔ Phase 2: Line 8 at localFrame 92 / Global F552)
  const isPhase1 = localFrame < 95;
  const phaseProgress = interpolate(localFrame, [90, 102], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // 1. Spoken Headline Springs
  const spHeadlineLine7 = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  const spHeadlineLine8 = spring({
    frame: Math.max(0, localFrame - 98),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  // 2. Fullstack Web App Mockup Entrance (Phase 1: localFrame 10+)
  const spMockup = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // Dashboard chart animated bars (Phase 1)
  const barHeights = [45, 75, 55, 90, 65, 80];

  // 3. Tech Stack Layers Entrance Springs (Phase 2: localFrame 98+)
  const spStack1 = spring({
    frame: Math.max(0, localFrame - 100),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });
  const spStack2 = spring({
    frame: Math.max(0, localFrame - 110),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });
  const spStack3 = spring({
    frame: Math.max(0, localFrame - 120),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  // 4. Selector Lock-in Ring (Phase 2: localFrame 145+ / Global F605+)
  const spSelector = spring({
    frame: Math.max(0, localFrame - 145),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // Animated continuous pulses & circuit dots
  const pulseGrid = Math.sin((localFrame * Math.PI) / 10) * 0.2 + 0.8;
  const circuitDot = (localFrame * 5) % 100;
  const busDot = (localFrame * 6) % 100;

  const centerShiftY = interpolate(phaseProgress, [0, 1], [0, -35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER OF PAGE)
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
          transform: `translateY(${centerShiftY}px)`,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. SPOKEN HEADLINE (STRICTLY FROM SCRIPT ONLY)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            textAlign: "center",
            minHeight: 125,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Phase 1 Headline: Line 7 */}
          {phaseProgress < 1 && (
            <div
              style={{
                position: isPhase1 ? "relative" : "absolute",
                transform: `scale(${spHeadlineLine7}) translateY(${(1 - spHeadlineLine7) * 15}px)`,
                opacity: spHeadlineLine7 * (1 - phaseProgress),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: GLASS_COLORS.textSecondary,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                  marginBottom: 8,
                }}
              >
                Misalnya, ketika ingin membuat sebuah
              </div>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: GLASS_COLORS.cyberCyan,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                  background: `linear-gradient(135deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.skyBlue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                fullstack web app,
              </div>
            </div>
          )}

          {/* Phase 2 Headline: Line 8 */}
          {phaseProgress > 0 && (
            <div
              style={{
                position: isPhase1 ? "absolute" : "relative",
                transform: `scale(${spHeadlineLine8}) translateY(${(1 - spHeadlineLine8) * 15}px)`,
                opacity: spHeadlineLine8 * phaseProgress,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: GLASS_COLORS.textSecondary,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                  marginBottom: 8,
                }}
              >
                Aku mulai dengan menentukan
              </div>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: GLASS_COLORS.structureGreen,
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                <span
                  style={{
                    background: `linear-gradient(135deg, ${GLASS_COLORS.structureGreen}, #34d399)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  tech stack
                </span>{" "}
                <span style={{ color: "#ffffff" }}>
                  terlebih dahulu.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. VISUAL ASSET STAGE (Centered & Fully Filled)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            minHeight: 450,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              PHASE 1 ASSET: SLEEK FROSTED GLASS BROWSER MOCKUP
             ═════════════════════════════════════════════════════════════ */}
          {phaseProgress < 1 && (
            <div
              style={{
                position: isPhase1 ? "relative" : "absolute",
                width: 940,
                height: 440,
                borderRadius: 24,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transform: `scale(${spMockup})`,
                opacity: spMockup * (1 - phaseProgress),
                boxSizing: "border-box",
              }}
            >
              {/* Browser Window Header Bar */}
              <div
                style={{
                  height: 52,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  gap: 16,
                }}
              >
                {/* Traffic Light Window Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: "rgba(239, 68, 68, 0.8)",
                    }}
                  />
                  <div
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: "rgba(245, 158, 11, 0.8)",
                    }}
                  />
                  <div
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: "rgba(16, 185, 129, 0.8)",
                    }}
                  />
                </div>

                {/* Translucent Address Bar Mockup */}
                <div
                  style={{
                    flex: 1,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    gap: 10,
                  }}
                >
                  <FaLock size={11} color={GLASS_COLORS.cyberCyan} />
                  <div
                    style={{
                      width: 140,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                  />
                </div>
              </div>

              {/* Browser Body: Fullstack Web App UI Wireframe */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  padding: 22,
                  gap: 20,
                  boxSizing: "border-box",
                }}
              >
                {/* Left Mini Sidebar */}
                <div
                  style={{
                    width: 70,
                    borderRadius: 16,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px 0",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      backgroundColor: "rgba(103, 232, 249, 0.15)",
                      border: "1px solid rgba(103, 232, 249, 0.3)",
                    }}
                  />
                  <div
                    style={{
                      width: 32,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                  />
                  <div
                    style={{
                      width: 32,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                  <div
                    style={{
                      width: 32,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                </div>

                {/* Main Content Stage */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  {/* Top Stats Metric Cards Row */}
                  <div style={{ display: "flex", gap: 14 }}>
                    {[1, 2, 3].map((cardIdx) => (
                      <div
                        key={cardIdx}
                        style={{
                          flex: 1,
                          height: 80,
                          borderRadius: 14,
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.14)",
                          padding: "12px 14px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            width: "40%",
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        />
                        <div
                          style={{
                            width: "70%",
                            height: 12,
                            borderRadius: 4,
                            backgroundColor:
                              cardIdx === 1
                                ? GLASS_COLORS.cyberCyan
                                : cardIdx === 2
                                ? GLASS_COLORS.aiPurple
                                : GLASS_COLORS.structureGreen,
                            opacity: 0.8,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Center Data Visualization Activity Chart */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: 14,
                      boxSizing: "border-box",
                    }}
                  >
                    {barHeights.map((h, i) => {
                      const spBar = spring({
                        frame: Math.max(0, localFrame - 20 - i * 6),
                        fps,
                        config: { damping: 12, stiffness: 130 },
                      });
                      return (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h * spBar}%`,
                            borderRadius: "6px 6px 2px 2px",
                            background:
                              i % 2 === 0
                                ? `linear-gradient(180deg, ${GLASS_COLORS.cyberCyan}, rgba(103, 232, 249, 0.3))`
                                : `linear-gradient(180deg, ${GLASS_COLORS.aiPurple}, rgba(192, 132, 252, 0.3))`,
                            boxShadow: `0 0 15px ${
                              i % 2 === 0
                                ? "rgba(103, 232, 249, 0.25)"
                                : "rgba(192, 132, 252, 0.25)"
                            }`,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              PHASE 2 ASSET: 3 FULLY-FILLED TECH STACK GLASS LAYERS
             ═════════════════════════════════════════════════════════════ */}
          {phaseProgress > 0 && (
            <div
              style={{
                position: isPhase1 ? "absolute" : "relative",
                width: 940,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
                opacity: phaseProgress,
              }}
            >
              {/* ─────────────────────────────────────────────────────
                  LAYER 1: FRONTEND TECH STACK NODE (Glass Cyan)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(103, 232, 249, 0.3)",
                  boxShadow:
                    "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform: `scale(${spStack1})`,
                  opacity: spStack1,
                  boxSizing: "border-box",
                }}
              >
                {/* 8 Modular Frontend Tech Tiles */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiNextdotjs size={36} color="#ffffff" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(125, 211, 252, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiReact size={36} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(96, 165, 250, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiTypescript size={32} color="#60a5fa" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(103, 232, 249, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiTailwindcss size={36} color="#06b6d4" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(192, 132, 252, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiVite size={34} color="#a855f7" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(66, 184, 131, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiVuedotjs size={34} color="#42b883" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(255, 62, 0, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiSvelte size={34} color="#ff3e00" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(118, 74, 188, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiRedux size={34} color="#764abc" />
                  </div>
                </div>

                {/* Animated Horizontal Signal Bus Track */}
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: `linear-gradient(90deg, rgba(103, 232, 249, 0.3), ${GLASS_COLORS.cyberCyan})`,
                    margin: "0 20px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${busDot}%`,
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: GLASS_COLORS.cyberCyan,
                      boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
                    }}
                  />
                </div>

                {/* Glass Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(103, 232, 249, 0.16)",
                    border: "1px solid rgba(103, 232, 249, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 18px rgba(103, 232, 249, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={GLASS_COLORS.cyberCyan} />
                </div>
              </div>

              {/* Vertical Connector Flow 1 */}
              <div
                style={{
                  width: 2,
                  height: 28,
                  background: `linear-gradient(180deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.aiPurple})`,
                  position: "relative",
                  opacity: 0.45,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: `${circuitDot}%`,
                    left: -2,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: GLASS_COLORS.cyberCyan,
                    boxShadow: `0 0 8px ${GLASS_COLORS.cyberCyan}`,
                  }}
                />
              </div>

              {/* ─────────────────────────────────────────────────────
                  LAYER 2: BACKEND TECH STACK NODE (Glass Violet)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(192, 132, 252, 0.3)",
                  boxShadow:
                    "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform: `scale(${spStack2})`,
                  opacity: spStack2,
                  boxSizing: "border-box",
                }}
              >
                {/* 8 Modular Backend Tech Tiles */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiNodedotjs size={36} color="#22c55e" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiPython size={34} color="#3b82f6" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(251, 240, 223, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiBun size={34} color="#fbf0df" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(0, 150, 136, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiFastapi size={34} color="#009688" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiExpress size={36} color="#ffffff" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(192, 132, 252, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiPrisma size={34} color="#a855f7" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(225, 0, 152, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiGraphql size={34} color="#e10098" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(13, 183, 237, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiDocker size={36} color="#0db7ed" />
                  </div>
                </div>

                {/* Animated Horizontal Signal Bus Track */}
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: `linear-gradient(90deg, rgba(192, 132, 252, 0.3), ${GLASS_COLORS.aiPurple})`,
                    margin: "0 20px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${busDot}%`,
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: GLASS_COLORS.aiPurple,
                      boxShadow: `0 0 10px ${GLASS_COLORS.aiPurple}`,
                    }}
                  />
                </div>

                {/* Glass Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(192, 132, 252, 0.16)",
                    border: "1px solid rgba(192, 132, 252, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 18px rgba(192, 132, 252, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={GLASS_COLORS.aiPurple} />
                </div>
              </div>

              {/* Vertical Connector Flow 2 */}
              <div
                style={{
                  width: 2,
                  height: 28,
                  background: `linear-gradient(180deg, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.structureGreen})`,
                  position: "relative",
                  opacity: 0.45,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: `${circuitDot}%`,
                    left: -2,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: GLASS_COLORS.structureGreen,
                    boxShadow: `0 0 8px ${GLASS_COLORS.structureGreen}`,
                  }}
                />
              </div>

              {/* ─────────────────────────────────────────────────────
                  LAYER 3: DATABASE TECH STACK NODE (Glass Emerald)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(110, 231, 183, 0.3)",
                  boxShadow:
                    "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform: `scale(${spStack3})`,
                  opacity: spStack3,
                  boxSizing: "border-box",
                }}
              >
                {/* 8 Modular Database Tech Tiles */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(125, 211, 252, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiPostgresql size={36} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(52, 211, 153, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiSupabase size={34} color="#34d399" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(71, 162, 72, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiMongodb size={34} color="#47a248" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiRedis size={34} color="#ef4444" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(255, 202, 40, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiFirebase size={34} color="#ffca28" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(0, 59, 87, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <SiSqlite size={34} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(110, 231, 183, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <FaDatabase size={30} color="#10b981" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(203, 213, 225, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <FaServer size={30} color="#cbd5e1" />
                  </div>
                </div>

                {/* Animated Horizontal Signal Bus Track */}
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: `linear-gradient(90deg, rgba(110, 231, 183, 0.3), ${GLASS_COLORS.structureGreen})`,
                    margin: "0 20px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${busDot}%`,
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: GLASS_COLORS.structureGreen,
                      boxShadow: `0 0 10px ${GLASS_COLORS.structureGreen}`,
                    }}
                  />
                </div>

                {/* Glass Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(110, 231, 183, 0.16)",
                    border: "1px solid rgba(110, 231, 183, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 18px rgba(110, 231, 183, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={GLASS_COLORS.structureGreen} />
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────
                  HOLOGRAPHIC BRACKET / SELECTOR LOCK-IN (localFrame 145+)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: 28,
                  border: `2px dashed rgba(110, 231, 183, ${0.45 * pulseGrid})`,
                  pointerEvents: "none",
                  transform: `scale(${spSelector})`,
                  opacity: spSelector,
                  boxShadow: "0 0 40px rgba(110, 231, 183, 0.12)",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};

