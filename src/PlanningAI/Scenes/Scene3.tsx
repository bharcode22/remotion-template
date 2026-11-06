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
import { PLANNING_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

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
  //
  // ⚠️ STRICT CONSTRAINTS:
  // 1. Tidak ada teks apapun di layar selain teks naskah!
  // 2. Isi gap di dalam kartu tech stack!
  // 3. Letakkan tepat di tengah halaman!
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

  // Exact vertical centering offset to ensure the 3 cards sit dead-center at Y = 960px
  // In Phase 2: total cards block is ~420px high. Shifting up by 40px aligns its center with 960px.
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
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
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
                  color: PLANNING_COLORS.cyberCyan,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.cyanGlow}`,
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
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
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
                  color: PLANNING_COLORS.structureGreen,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.mintGlow}`,
                }}
              >
                tech stack{" "}
                <span style={{ color: "#f8fafc", textShadow: "none" }}>
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
              PHASE 1 ASSET: SLEEK FULLSTACK WEB APP BROWSER MOCKUP
             ═════════════════════════════════════════════════════════════ */}
          {phaseProgress < 1 && (
            <div
              style={{
                position: isPhase1 ? "relative" : "absolute",
                width: 940,
                height: 440,
                borderRadius: 24,
                backgroundColor: "rgba(11, 19, 32, 0.94)",
                border: `1.5px solid ${PLANNING_COLORS.cyberCyan}`,
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.75), 0 0 40px ${PLANNING_COLORS.cyanGlow}`,
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
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
                      backgroundColor: "#ef4444",
                    }}
                  />
                  <div
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: "#f59e0b",
                    }}
                  />
                  <div
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                    }}
                  />
                </div>

                {/* Translucent Address Bar Mockup */}
                <div
                  style={{
                    flex: 1,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    gap: 10,
                  }}
                >
                  <FaLock size={11} color={PLANNING_COLORS.cyberCyan} />
                  <div
                    style={{
                      width: 140,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
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
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
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
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      border: `1px solid ${PLANNING_COLORS.cyberCyan}`,
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
                          backgroundColor: "rgba(15, 23, 42, 0.8)",
                          border: "1px solid rgba(56, 189, 248, 0.25)",
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
                                ? PLANNING_COLORS.cyberCyan
                                : cardIdx === 2
                                ? PLANNING_COLORS.aiPurple
                                : PLANNING_COLORS.structureGreen,
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
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
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
                                ? `linear-gradient(180deg, ${PLANNING_COLORS.cyberCyan}, rgba(6, 182, 212, 0.3))`
                                : `linear-gradient(180deg, ${PLANNING_COLORS.aiPurple}, rgba(168, 85, 247, 0.3))`,
                            boxShadow: `0 0 15px ${
                              i % 2 === 0
                                ? PLANNING_COLORS.cyanGlow
                                : PLANNING_COLORS.aiGlow
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
              PHASE 2 ASSET: 3 FULLY-FILLED TECH STACK ASSET LAYERS
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
                  LAYER 1: FRONTEND TECH STACK NODE (Cyan)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.cyberCyan}`,
                  boxShadow: `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 35px ${PLANNING_COLORS.cyanGlow}`,
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform: `scale(${spStack1})`,
                  opacity: spStack1,
                  boxSizing: "border-box",
                }}
              >
                {/* 8 Modular Frontend Tech Tiles (Fills the Width Perfectly!) */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiNextdotjs size={36} color="#ffffff" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiReact size={36} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(96, 165, 250, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiTypescript size={32} color="#60a5fa" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(6, 182, 212, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiTailwindcss size={36} color="#06b6d4" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(168, 85, 247, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiVite size={34} color="#a855f7" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(66, 184, 131, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiVuedotjs size={34} color="#42b883" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(255, 62, 0, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiSvelte size={34} color="#ff3e00" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(118, 74, 188, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
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
                    background: `linear-gradient(90deg, rgba(6, 182, 212, 0.4), ${PLANNING_COLORS.cyberCyan})`,
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
                      backgroundColor: PLANNING_COLORS.cyberCyan,
                      boxShadow: `0 0 10px ${PLANNING_COLORS.cyberCyan}`,
                    }}
                  />
                </div>

                {/* Glowing Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    border: `1.5px solid ${PLANNING_COLORS.cyberCyan}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 20px ${PLANNING_COLORS.cyanGlow}`,
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={PLANNING_COLORS.cyberCyan} />
                </div>
              </div>

              {/* Vertical Connector Flow 1 */}
              <div
                style={{
                  width: 2,
                  height: 28,
                  background: `linear-gradient(180deg, ${PLANNING_COLORS.cyberCyan}, ${PLANNING_COLORS.aiPurple})`,
                  position: "relative",
                  opacity: 0.7,
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
                    backgroundColor: PLANNING_COLORS.cyberCyan,
                    boxShadow: `0 0 8px ${PLANNING_COLORS.cyberCyan}`,
                  }}
                />
              </div>

              {/* ─────────────────────────────────────────────────────
                  LAYER 2: BACKEND TECH STACK NODE (Violet)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.aiPurple}`,
                  boxShadow: `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 35px ${PLANNING_COLORS.aiGlow}`,
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
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(34, 197, 94, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiNodedotjs size={36} color="#22c55e" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(59, 130, 246, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiPython size={34} color="#3b82f6" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(251, 240, 223, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiBun size={34} color="#fbf0df" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(0, 150, 136, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiFastapi size={34} color="#009688" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiExpress size={36} color="#ffffff" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(168, 85, 247, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiPrisma size={34} color="#a855f7" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(225, 0, 152, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiGraphql size={34} color="#e10098" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(13, 183, 237, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
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
                    background: `linear-gradient(90deg, rgba(168, 85, 247, 0.4), ${PLANNING_COLORS.aiPurple})`,
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
                      backgroundColor: PLANNING_COLORS.aiPurple,
                      boxShadow: `0 0 10px ${PLANNING_COLORS.aiPurple}`,
                    }}
                  />
                </div>

                {/* Glowing Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    border: `1.5px solid ${PLANNING_COLORS.aiPurple}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 20px ${PLANNING_COLORS.aiGlow}`,
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={PLANNING_COLORS.aiPurple} />
                </div>
              </div>

              {/* Vertical Connector Flow 2 */}
              <div
                style={{
                  width: 2,
                  height: 28,
                  background: `linear-gradient(180deg, ${PLANNING_COLORS.aiPurple}, ${PLANNING_COLORS.structureGreen})`,
                  position: "relative",
                  opacity: 0.7,
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
                    backgroundColor: PLANNING_COLORS.structureGreen,
                    boxShadow: `0 0 8px ${PLANNING_COLORS.structureGreen}`,
                  }}
                />
              </div>

              {/* ─────────────────────────────────────────────────────
                  LAYER 3: DATABASE TECH STACK NODE (Emerald)
                 ───────────────────────────────────────────────────── */}
              <div
                style={{
                  width: 940,
                  height: 120,
                  borderRadius: 22,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                  boxShadow: `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 35px ${PLANNING_COLORS.mintGlow}`,
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
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiPostgresql size={36} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(52, 211, 153, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiSupabase size={34} color="#34d399" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(71, 162, 72, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiMongodb size={34} color="#47a248" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(239, 68, 68, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiRedis size={34} color="#ef4444" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(255, 202, 40, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiFirebase size={34} color="#ffca28" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(0, 59, 87, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <SiSqlite size={34} color="#38bdf8" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(16, 185, 129, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <FaDatabase size={30} color="#10b981" />
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 16,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1.5px solid rgba(203, 213, 225, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
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
                    background: `linear-gradient(90deg, rgba(16, 185, 129, 0.4), ${PLANNING_COLORS.structureGreen})`,
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
                      backgroundColor: PLANNING_COLORS.structureGreen,
                      boxShadow: `0 0 10px ${PLANNING_COLORS.structureGreen}`,
                    }}
                  />
                </div>

                {/* Glowing Selection Indicator */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 20px ${PLANNING_COLORS.mintGlow}`,
                    flexShrink: 0,
                  }}
                >
                  <FaCheck size={18} color={PLANNING_COLORS.structureGreen} />
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
                  border: `2px dashed rgba(16, 185, 129, ${0.45 * pulseGrid})`,
                  pointerEvents: "none",
                  transform: `scale(${spSelector})`,
                  opacity: spSelector,
                  boxShadow: `0 0 40px rgba(16, 185, 129, 0.15)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};
