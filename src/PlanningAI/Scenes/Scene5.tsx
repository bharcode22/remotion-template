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
  FaCode,
  FaDatabase,
  FaDesktop,
  FaExchangeAlt,
  FaKey,
  FaLink,
  FaServer,
  FaTable,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { PLANNING_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 5: Frames 805 - 1080)
  //
  // Line 12 (F805 - F988):
  // "Mulai dari merancang struktur database, menentukan tipe data, menentukan relasi antar tabel,"
  // ➔ Phase 1 (F805 - F875): Struktur database (3 Tables: users, orders, order_items)
  // ➔ Phase 2 (F875 - F928): Menentukan tipe data (Illuminated Data Type Tags across 3 tables)
  // ➔ Phase 3 (F928 - F988): Menentukan relasi antar tabel (Dual One-to-Many 1 : N Connectors)
  //
  // Line 13 (F988 - F1080):
  // "membangun backend, hingga membuat frontend."
  // ➔ Phase 4 (F988 - F1026): Membangun backend (Authentic Backend Server, Endpoints & DB ORM Logic)
  // ➔ Phase 5 (F1026 - F1080): Hingga membuat frontend (Authentic Browser UI, Dashboard & State Hydration)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 5 (0 to 275)
  const localFrame = Math.max(0, frame - 805);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [267, 275], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [267, 275], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase Boundaries:
  // Phase 1 (localFrame 0 - 70): Struktur Database (3 Tables)
  // Phase 2 (localFrame 70 - 123): Tipe Data (Types Highlighting)
  // Phase 3 (localFrame 123 - 183): Relasi Tabel (Dual 1:N Links)
  // Phase 4 (localFrame 183 - 221): Membangun Backend
  // Phase 5 (localFrame 221 - 275): Membuat Frontend
  const curPhase =
    localFrame < 70
      ? 1
      : localFrame < 123
      ? 2
      : localFrame < 183
      ? 3
      : localFrame < 221
      ? 4
      : 5;

  // Act Transition (Act 1: Database ERD ➔ Act 2: Backend + Frontend)
  // Occurs at localFrame 183 (Global F988)
  const isAct1 = localFrame < 183;
  const act2Progress = interpolate(localFrame, [178, 188], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // 1. Spoken Headline Springs for 5 progressive phases
  const spHead1 = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });
  const spHead2 = spring({
    frame: Math.max(0, localFrame - 72),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });
  const spHead3 = spring({
    frame: Math.max(0, localFrame - 125),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });
  const spHead4 = spring({
    frame: Math.max(0, localFrame - 185),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });
  const spHead5 = spring({
    frame: Math.max(0, localFrame - 223),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  // 2. Stepper Entrance Spring
  const spStepper = spring({
    frame: Math.max(0, localFrame - 2),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // 3. Database Tables Springs (Act 1: Staggered for 3 tables)
  const spTable1 = spring({
    frame: Math.max(0, localFrame - 6),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });
  const spTable2 = spring({
    frame: Math.max(0, localFrame - 14),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });
  const spTable3 = spring({
    frame: Math.max(0, localFrame - 22),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // 4. Relational Link Springs (Phase 3: localFrame 125+)
  const spRelLink1 = spring({
    frame: Math.max(0, localFrame - 125),
    fps,
    config: { damping: 14, stiffness: 135 },
  });
  const spRelLink2 = spring({
    frame: Math.max(0, localFrame - 132),
    fps,
    config: { damping: 14, stiffness: 135 },
  });

  // 5. Backend & Frontend Springs (Act 2)
  const spBackend = spring({
    frame: Math.max(0, localFrame - 185),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });
  const spFrontendEntrance = spring({
    frame: Math.max(0, localFrame - 188),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });
  const spFrontendActivate = spring({
    frame: Math.max(0, localFrame - 223),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 130 },
  });
  const spDbFoundation = spring({
    frame: Math.max(0, localFrame - 182),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 130 },
  });

  // Continuous animation pulses
  const pulseLoop = Math.sin((localFrame * Math.PI) / 8) * 0.2 + 0.8;
  const relPulse1 = (localFrame * 5.5) % 100;
  const relPulse2 = ((localFrame * 5.5) + 50) % 100;
  const apiPulse = (localFrame * 6) % 100;

  // Stepper Items Definition
  const steps = [
    { num: "01", label: "DATABASE", color: PLANNING_COLORS.structureGreen },
    { num: "02", label: "TIPE DATA", color: PLANNING_COLORS.cyberCyan },
    { num: "03", label: "RELASI (1 : N)", color: PLANNING_COLORS.aiPurple },
    { num: "04", label: "BACKEND", color: PLANNING_COLORS.valueAmber },
    { num: "05", label: "FRONTEND", color: PLANNING_COLORS.skyBlue },
  ];

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
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER AT Y = 960px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            0. 5-STEP WORKFLOW STEPPER INDICATOR
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `scale(${spStepper})`,
            opacity: spStepper,
          }}
        >
          {steps.map((s, idx) => {
            const stepNum = idx + 1;
            const isActive = curPhase === stepNum;
            const isCompleted = curPhase > stepNum;

            return (
              <div
                key={s.num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 20,
                  backgroundColor: isActive
                    ? "rgba(15, 23, 42, 0.95)"
                    : isCompleted
                    ? "rgba(15, 23, 42, 0.6)"
                    : "rgba(15, 23, 42, 0.3)",
                  border: `1px solid ${
                    isActive
                      ? s.color
                      : isCompleted
                      ? "rgba(16, 185, 129, 0.4)"
                      : "rgba(255, 255, 255, 0.08)"
                  }`,
                  boxShadow: isActive
                    ? `0 0 16px ${s.color}40, inset 0 0 10px ${s.color}20`
                    : "none",
                  opacity: isActive ? 1 : isCompleted ? 0.85 : 0.45,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: isActive
                      ? s.color
                      : isCompleted
                      ? PLANNING_COLORS.structureGreen
                      : "#64748b",
                    boxShadow: isActive ? `0 0 8px ${s.color}` : "none",
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                    color: isActive
                      ? "#f8fafc"
                      : isCompleted
                      ? "#cbd5e1"
                      : "#64748b",
                    letterSpacing: 0.5,
                  }}
                >
                  {s.num}. {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            1. SPOKEN HEADLINE (STRICTLY FROM SCRIPT ONLY)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            textAlign: "center",
            minHeight: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Phase 1: "Mulai dari merancang struktur database," */}
          {curPhase === 1 && (
            <div
              style={{
                transform: `scale(${spHead1}) translateY(${(1 - spHead1) * 15}px)`,
                opacity: spHead1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                Mulai dari merancang
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: PLANNING_COLORS.structureGreen,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.mintGlow}`,
                }}
              >
                struktur database,
              </div>
            </div>
          )}

          {/* Phase 2: "menentukan tipe data," */}
          {curPhase === 2 && (
            <div
              style={{
                transform: `scale(${spHead2}) translateY(${(1 - spHead2) * 15}px)`,
                opacity: spHead2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                menentukan
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
                tipe data,
              </div>
            </div>
          )}

          {/* Phase 3: "menentukan relasi antar tabel," */}
          {curPhase === 3 && (
            <div
              style={{
                transform: `scale(${spHead3}) translateY(${(1 - spHead3) * 15}px)`,
                opacity: spHead3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                menentukan
              </div>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: PLANNING_COLORS.aiPurple,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.aiGlow}`,
                }}
              >
                relasi antar tabel,
              </div>
            </div>
          )}

          {/* Phase 4: "membangun backend," */}
          {curPhase === 4 && (
            <div
              style={{
                transform: `scale(${spHead4}) translateY(${(1 - spHead4) * 15}px)`,
                opacity: spHead4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                membangun
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: PLANNING_COLORS.valueAmber,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.amberGlow}`,
                }}
              >
                backend,
              </div>
            </div>
          )}

          {/* Phase 5: "hingga membuat frontend." */}
          {curPhase === 5 && (
            <div
              style={{
                transform: `scale(${spHead5}) translateY(${(1 - spHead5) * 15}px)`,
                opacity: spHead5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                hingga membuat
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: PLANNING_COLORS.skyBlue,
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  textShadow: `0 0 35px ${PLANNING_COLORS.cyanGlow}`,
                }}
              >
                frontend.
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. VISUAL ASSET STAGE (Centered & Fully Filled Width: 940px)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            minHeight: 380,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              ACT 1 (Phases 1, 2, 3): 3 TABLES WITH DUAL (1 : N) RELATIONS
              users (1) ──[1:N]──> orders (N) ──[1:N]──> order_items (N)
             ═════════════════════════════════════════════════════════════ */}
          {act2Progress < 1 && (
            <div
              style={{
                position: isAct1 ? "relative" : "absolute",
                width: 940,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 1 - act2Progress,
                boxSizing: "border-box",
              }}
            >
              {/* TABLE 1: users (1) */}
              <div
                style={{
                  width: 275,
                  height: 360,
                  borderRadius: 20,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                  boxShadow: `0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px ${PLANNING_COLORS.mintGlow}`,
                  padding: "14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transform: `scale(${spTable1})`,
                  opacity: spTable1,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <FaTable size={15} color={PLANNING_COLORS.structureGreen} />
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      users
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 700,
                        color: PLANNING_COLORS.structureGreen,
                        backgroundColor: "rgba(16, 185, 129, 0.15)",
                        padding: "1px 5px",
                        borderRadius: 3,
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      (1)
                    </span>
                  </div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: PLANNING_COLORS.structureGreen,
                      boxShadow: `0 0 ${8 * pulseLoop}px ${PLANNING_COLORS.structureGreen}`,
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Row 1: id (PK) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor:
                        curPhase === 3
                          ? "rgba(168, 85, 247, 0.16)"
                          : "rgba(15, 23, 42, 0.85)",
                      border:
                        curPhase === 3
                          ? `1px solid ${PLANNING_COLORS.aiPurple}`
                          : "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaKey size={11} color={PLANNING_COLORS.valueAmber} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#f8fafc",
                        }}
                      >
                        id
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.valueAmber,
                          backgroundColor: "rgba(245, 158, 11, 0.15)",
                          padding: "1px 4px",
                          borderRadius: 3,
                        }}
                      >
                        PK
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 800,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      UUID
                    </div>
                  </div>

                  {/* Row 2: email */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      email
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      VARCHAR
                    </div>
                  </div>

                  {/* Row 3: name */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      name
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      VARCHAR
                    </div>
                  </div>

                  {/* Row 4: created_at */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#cbd5e1",
                      }}
                    >
                      created_at
                    </span>
                    <div
                      style={{
                        padding: "2px 5px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      TIMESTAMP
                    </div>
                  </div>
                </div>
              </div>

              {/* CONNECTOR 1: 1:N (users ➔ orders) */}
              <div
                style={{
                  width: 50,
                  height: 360,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  opacity: curPhase >= 3 ? spRelLink1 : 0.2,
                  transform: `scale(${curPhase >= 3 ? spRelLink1 : 0.8})`,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 3,
                    background: `linear-gradient(90deg, ${PLANNING_COLORS.structureGreen}, ${PLANNING_COLORS.aiPurple})`,
                    boxShadow: `0 0 12px ${PLANNING_COLORS.aiGlow}`,
                    position: "relative",
                  }}
                >
                  {curPhase >= 3 && (
                    <div
                      style={{
                        position: "absolute",
                        left: `${relPulse1}%`,
                        top: -3.5,
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        boxShadow: `0 0 10px ${PLANNING_COLORS.aiPurple}`,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "rgba(11, 19, 32, 0.95)",
                      border: `1.5px solid ${PLANNING_COLORS.aiPurple}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 16px ${PLANNING_COLORS.aiGlow}`,
                    }}
                  >
                    <FaLink size={13} color={PLANNING_COLORS.aiPurple} />
                  </div>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 9,
                      fontWeight: 800,
                      color: PLANNING_COLORS.aiPurple,
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      padding: "1px 5px",
                      borderRadius: 3,
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      letterSpacing: 0.5,
                    }}
                  >
                    1 : N
                  </span>
                </div>
              </div>

              {/* TABLE 2: orders (N) */}
              <div
                style={{
                  width: 275,
                  height: 360,
                  borderRadius: 20,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
                  boxShadow: `0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px ${PLANNING_COLORS.amberGlow}`,
                  padding: "14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transform: `scale(${spTable2})`,
                  opacity: spTable2,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <FaTable size={15} color={PLANNING_COLORS.valueAmber} />
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      orders
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 700,
                        color: PLANNING_COLORS.valueAmber,
                        backgroundColor: "rgba(245, 158, 11, 0.15)",
                        padding: "1px 5px",
                        borderRadius: 3,
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      (N)
                    </span>
                  </div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: PLANNING_COLORS.valueAmber,
                      boxShadow: `0 0 ${8 * pulseLoop}px ${PLANNING_COLORS.valueAmber}`,
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Row 1: id (PK) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor:
                        curPhase === 3
                          ? "rgba(168, 85, 247, 0.16)"
                          : "rgba(15, 23, 42, 0.85)",
                      border:
                        curPhase === 3
                          ? `1px solid ${PLANNING_COLORS.aiPurple}`
                          : "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaKey size={11} color={PLANNING_COLORS.valueAmber} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#f8fafc",
                        }}
                      >
                        id
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.valueAmber,
                          backgroundColor: "rgba(245, 158, 11, 0.15)",
                          padding: "1px 4px",
                          borderRadius: 3,
                        }}
                      >
                        PK
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 800,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      UUID
                    </div>
                  </div>

                  {/* Row 2: user_id (FK -> users.id) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor:
                        curPhase === 3
                          ? "rgba(168, 85, 247, 0.2)"
                          : "rgba(15, 23, 42, 0.85)",
                      border:
                        curPhase === 3
                          ? `1.5px solid ${PLANNING_COLORS.aiPurple}`
                          : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow:
                        curPhase === 3
                          ? `0 0 14px ${PLANNING_COLORS.aiGlow}`
                          : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaLink
                        size={11}
                        color={
                          curPhase === 3
                            ? PLANNING_COLORS.aiPurple
                            : "#94a3b8"
                        }
                      />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 700,
                          color:
                            curPhase === 3
                              ? PLANNING_COLORS.aiPurple
                              : "#f8fafc",
                        }}
                      >
                        user_id
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.aiPurple,
                          backgroundColor: "rgba(168, 85, 247, 0.2)",
                          padding: "1px 4px",
                          borderRadius: 3,
                          border: "1px solid rgba(168, 85, 247, 0.4)",
                        }}
                      >
                        FK
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 800,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      UUID
                    </div>
                  </div>

                  {/* Row 3: total */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      total
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      DECIMAL
                    </div>
                  </div>

                  {/* Row 4: status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      status
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      VARCHAR
                    </div>
                  </div>
                </div>
              </div>

              {/* CONNECTOR 2: 1:N (orders ➔ order_items) */}
              <div
                style={{
                  width: 50,
                  height: 360,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  opacity: curPhase >= 3 ? spRelLink2 : 0.2,
                  transform: `scale(${curPhase >= 3 ? spRelLink2 : 0.8})`,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 3,
                    background: `linear-gradient(90deg, ${PLANNING_COLORS.valueAmber}, ${PLANNING_COLORS.cyberCyan})`,
                    boxShadow: `0 0 12px ${PLANNING_COLORS.cyanGlow}`,
                    position: "relative",
                  }}
                >
                  {curPhase >= 3 && (
                    <div
                      style={{
                        position: "absolute",
                        left: `${relPulse2}%`,
                        top: -3.5,
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        boxShadow: `0 0 10px ${PLANNING_COLORS.cyberCyan}`,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "rgba(11, 19, 32, 0.95)",
                      border: `1.5px solid ${PLANNING_COLORS.cyberCyan}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 16px ${PLANNING_COLORS.cyanGlow}`,
                    }}
                  >
                    <FaLink size={13} color={PLANNING_COLORS.cyberCyan} />
                  </div>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 9,
                      fontWeight: 800,
                      color: PLANNING_COLORS.cyberCyan,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      padding: "1px 5px",
                      borderRadius: 3,
                      border: "1px solid rgba(6, 182, 212, 0.4)",
                      letterSpacing: 0.5,
                    }}
                  >
                    1 : N
                  </span>
                </div>
              </div>

              {/* TABLE 3: order_items (N) */}
              <div
                style={{
                  width: 275,
                  height: 360,
                  borderRadius: 20,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.cyberCyan}`,
                  boxShadow: `0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px ${PLANNING_COLORS.cyanGlow}`,
                  padding: "14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transform: `scale(${spTable3})`,
                  opacity: spTable3,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <FaTable size={15} color={PLANNING_COLORS.cyberCyan} />
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      order_items
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 700,
                        color: PLANNING_COLORS.cyberCyan,
                        backgroundColor: "rgba(6, 182, 212, 0.15)",
                        padding: "1px 5px",
                        borderRadius: 3,
                        border: "1px solid rgba(6, 182, 212, 0.3)",
                      }}
                    >
                      (N)
                    </span>
                  </div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: PLANNING_COLORS.cyberCyan,
                      boxShadow: `0 0 ${8 * pulseLoop}px ${PLANNING_COLORS.cyberCyan}`,
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Row 1: id (PK) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaKey size={11} color={PLANNING_COLORS.valueAmber} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#f8fafc",
                        }}
                      >
                        id
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.valueAmber,
                          backgroundColor: "rgba(245, 158, 11, 0.15)",
                          padding: "1px 4px",
                          borderRadius: 3,
                        }}
                      >
                        PK
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 800,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      UUID
                    </div>
                  </div>

                  {/* Row 2: order_id (FK) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor:
                        curPhase === 3
                          ? "rgba(6, 182, 212, 0.18)"
                          : "rgba(15, 23, 42, 0.85)",
                      border:
                        curPhase === 3
                          ? `1.5px solid ${PLANNING_COLORS.cyberCyan}`
                          : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow:
                        curPhase === 3
                          ? `0 0 14px ${PLANNING_COLORS.cyanGlow}`
                          : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaLink
                        size={11}
                        color={
                          curPhase === 3
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8"
                        }
                      />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 700,
                          color:
                            curPhase === 3
                              ? PLANNING_COLORS.cyberCyan
                              : "#f8fafc",
                        }}
                      >
                        order_id
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.cyberCyan,
                          backgroundColor: "rgba(6, 182, 212, 0.2)",
                          padding: "1px 4px",
                          borderRadius: 3,
                          border: "1px solid rgba(6, 182, 212, 0.4)",
                        }}
                      >
                        FK
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 800,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      UUID
                    </div>
                  </div>

                  {/* Row 3: price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      price
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      DECIMAL
                    </div>
                  </div>

                  {/* Row 4: quantity */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      quantity
                    </span>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 5,
                        backgroundColor:
                          curPhase >= 2
                            ? "rgba(6, 182, 212, 0.25)"
                            : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "rgba(255, 255, 255, 0.15)"
                        }`,
                        boxShadow:
                          curPhase === 2
                            ? `0 0 12px ${PLANNING_COLORS.cyanGlow}`
                            : "none",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        fontWeight: 700,
                        color:
                          curPhase >= 2
                            ? PLANNING_COLORS.cyberCyan
                            : "#94a3b8",
                      }}
                    >
                      INT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              ACT 2 (Phases 4 & 5): TRUE BACKEND SERVER & FRONTEND CLIENT
              AUTHENTIC FULLSTACK VISUALIZATION (Rich, Detailed & Immersive)
             ═════════════════════════════════════════════════════════════ */}
          {act2Progress > 0 && (
            <div
              style={{
                position: isAct1 ? "absolute" : "relative",
                width: 940,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                opacity: act2Progress,
                boxSizing: "border-box",
              }}
            >
              {/* Top Row: Dual Fullstack Nodes (Backend + Frontend) */}
              <div
                style={{
                  width: 940,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* ─────────────────────────────────────────────────────────
                    BACKEND ENGINE (Left: 440px wide × 315px high)
                    Features: Server Engine, REST Routes, Controller ORM Logic, Terminal Log
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    width: 440,
                    height: 315,
                    borderRadius: 22,
                    backgroundColor: "rgba(11, 19, 32, 0.95)",
                    border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
                    boxShadow:
                      curPhase === 4
                        ? `0 20px 45px rgba(0, 0, 0, 0.75), 0 0 35px ${PLANNING_COLORS.amberGlow}`
                        : "0 10px 25px rgba(0, 0, 0, 0.6)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spBackend})`,
                    opacity: spBackend,
                    boxSizing: "border-box",
                  }}
                >
                  {/* Backend Server Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: 8,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FaServer size={18} color={PLANNING_COLORS.valueAmber} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#f8fafc",
                          letterSpacing: 0.5,
                        }}
                      >
                        BACKEND SERVER
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.valueAmber,
                          backgroundColor: "rgba(245, 158, 11, 0.15)",
                          padding: "1px 5px",
                          borderRadius: 3,
                        }}
                      >
                        NODE / API
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: PLANNING_COLORS.valueAmber,
                          boxShadow: `0 0 8px ${PLANNING_COLORS.valueAmber}`,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 10,
                          fontWeight: 700,
                          color: PLANNING_COLORS.valueAmber,
                        }}
                      >
                        :8080
                      </span>
                    </div>
                  </div>

                  {/* 1. Real REST API Route Endpoints */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div
                      style={{
                        height: 30,
                        borderRadius: 6,
                        backgroundColor: "rgba(15, 23, 42, 0.85)",
                        border: "1px solid rgba(245, 158, 11, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 9,
                            fontWeight: 800,
                            color: PLANNING_COLORS.structureGreen,
                            backgroundColor: "rgba(16, 185, 129, 0.2)",
                            padding: "1px 4px",
                            borderRadius: 3,
                          }}
                        >
                          POST
                        </span>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#f1f5f9",
                          }}
                        >
                          /api/orders/checkout
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.structureGreen,
                        }}
                      >
                        201 OK (18ms)
                      </span>
                    </div>

                    <div
                      style={{
                        height: 30,
                        borderRadius: 6,
                        backgroundColor: "rgba(15, 23, 42, 0.85)",
                        border: "1px solid rgba(245, 158, 11, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 9,
                            fontWeight: 800,
                            color: PLANNING_COLORS.cyberCyan,
                            backgroundColor: "rgba(6, 182, 212, 0.2)",
                            padding: "1px 4px",
                            borderRadius: 3,
                          }}
                        >
                          GET
                        </span>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#f1f5f9",
                          }}
                        >
                          /api/users/:id/orders
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.cyberCyan,
                        }}
                      >
                        200 OK (12ms)
                      </span>
                    </div>
                  </div>

                  {/* 2. Backend Controller & ORM Logic Block (Authentic Code) */}
                  <div
                    style={{
                      borderRadius: 8,
                      backgroundColor: "rgba(7, 12, 22, 0.95)",
                      border: "1px solid rgba(245, 158, 11, 0.25)",
                      padding: "8px 10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <FaCode size={11} color={PLANNING_COLORS.valueAmber} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 10,
                          fontWeight: 800,
                          color: "#f8fafc",
                          letterSpacing: 0.5,
                        }}
                      >
                        CONTROLLER &amp; ORM QUERY
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        color: "#94a3b8",
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: PLANNING_COLORS.aiPurple }}>const</span> order ={" "}
                      <span style={{ color: PLANNING_COLORS.cyberCyan }}>await</span> db.orders.create({`{`}
                      <br />
                      &nbsp;&nbsp;data: {`{`} userId, total, items: {`{`} createMany {`}}`}
                      <br />
                      {`});`}
                    </div>
                  </div>

                  {/* 3. Server Terminal Log Output */}
                  <div
                    style={{
                      borderRadius: 6,
                      backgroundColor: "rgba(3, 7, 18, 0.9)",
                      padding: "5px 8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: FONT_MONO,
                      fontSize: 9,
                      color: "#64748b",
                    }}
                  >
                    <span style={{ color: PLANNING_COLORS.structureGreen }}>
                      &gt; [DB] Pool: 3 tables indexed
                    </span>
                    <span>HTTP 200 (1.2ms)</span>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    CENTRAL BIDIRECTIONAL REST/JSON API BUS
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    width: 50,
                    height: 315,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 3,
                      background: `linear-gradient(90deg, ${PLANNING_COLORS.valueAmber}, ${PLANNING_COLORS.skyBlue})`,
                      boxShadow: `0 0 14px ${PLANNING_COLORS.cyanGlow}`,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: `${apiPulse}%`,
                        top: -3.5,
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        boxShadow: `0 0 10px ${PLANNING_COLORS.skyBlue}`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        backgroundColor: "rgba(11, 19, 32, 0.95)",
                        border: "1.5px solid rgba(56, 189, 248, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 0 16px ${PLANNING_COLORS.cyanGlow}`,
                      }}
                    >
                      <FaExchangeAlt size={14} color={PLANNING_COLORS.skyBlue} />
                    </div>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 800,
                        color: PLANNING_COLORS.skyBlue,
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        padding: "1px 5px",
                        borderRadius: 3,
                      }}
                    >
                      JSON
                    </span>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    FRONTEND CLIENT (Right: 440px wide × 315px high)
                    Features: Browser Mockup, Top Navbar, Metric Cards, Order Feed, State Hydration
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    width: 440,
                    height: 315,
                    borderRadius: 22,
                    backgroundColor:
                      curPhase === 5
                        ? "rgba(11, 19, 32, 0.95)"
                        : "rgba(11, 19, 32, 0.7)",
                    border:
                      curPhase === 5
                        ? `1.5px solid ${PLANNING_COLORS.skyBlue}`
                        : "1px dashed rgba(56, 189, 248, 0.35)",
                    boxShadow:
                      curPhase === 5
                        ? `0 20px 45px rgba(0, 0, 0, 0.75), 0 0 35px ${PLANNING_COLORS.cyanGlow}`
                        : "0 10px 25px rgba(0, 0, 0, 0.4)",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${
                      curPhase === 5 ? spFrontendActivate : spFrontendEntrance * 0.98
                    })`,
                    opacity: curPhase === 5 ? 1 : spFrontendEntrance * 0.5,
                    boxSizing: "border-box",
                  }}
                >
                  {/* 1. Browser Chrome Window Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: 8,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981" }} />
                    </div>

                    {/* URL Bar */}
                    <div
                      style={{
                        padding: "2px 12px",
                        borderRadius: 12,
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontFamily: FONT_MONO,
                        fontSize: 10,
                        color: "#94a3b8",
                      }}
                    >
                      https://app.dev/dashboard
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor:
                            curPhase === 5 ? PLANNING_COLORS.skyBlue : "#64748b",
                          boxShadow:
                            curPhase === 5
                              ? `0 0 8px ${PLANNING_COLORS.skyBlue}`
                              : "none",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 10,
                          fontWeight: 700,
                          color:
                            curPhase === 5 ? PLANNING_COLORS.skyBlue : "#64748b",
                        }}
                      >
                        :3000
                      </span>
                    </div>
                  </div>

                  {/* 2. Client App Nav Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 8px",
                      borderRadius: 8,
                      backgroundColor: "rgba(15, 23, 42, 0.7)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaDesktop size={13} color={PLANNING_COLORS.skyBlue} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 12,
                          fontWeight: 800,
                          color: "#f8fafc",
                        }}
                      >
                        FRONTEND APP
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.skyBlue,
                          backgroundColor: "rgba(56, 189, 248, 0.15)",
                          padding: "1px 5px",
                          borderRadius: 3,
                        }}
                      >
                        REACT 19
                      </span>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 700,
                          color: PLANNING_COLORS.structureGreen,
                          backgroundColor: "rgba(16, 185, 129, 0.15)",
                          padding: "1px 5px",
                          borderRadius: 3,
                        }}
                      >
                        HYDRATED
                      </span>
                    </div>
                  </div>

                  {/* 3. Live Dashboard UI Components Grid */}
                  <div style={{ display: "flex", gap: 8, flex: 1, margin: "6px 0" }}>
                    {/* Metric Card Widget */}
                    <div
                      style={{
                        flex: 1,
                        borderRadius: 8,
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        padding: "8px 10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: "#94a3b8" }}>
                          Revenue
                        </span>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 9,
                            fontWeight: 700,
                            color: PLANNING_COLORS.structureGreen,
                          }}
                        >
                          +28%
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 18,
                          fontWeight: 900,
                          color: "#f8fafc",
                        }}
                      >
                        $48,250
                      </div>
                      {/* Mini sparkline bars */}
                      <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 18 }}>
                        {[35, 60, 45, 80, 100].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              height: `${h}%`,
                              borderRadius: 2,
                              backgroundColor:
                                i === 4
                                  ? PLANNING_COLORS.skyBlue
                                  : "rgba(56, 189, 248, 0.35)",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Live Order List Widget (Real data from Backend) */}
                    <div
                      style={{
                        flex: 1.2,
                        borderRadius: 8,
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        padding: "8px 10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: "#94a3b8" }}>
                          Live Feed
                        </span>
                        <span
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 8,
                            fontWeight: 700,
                            color: PLANNING_COLORS.structureGreen,
                            backgroundColor: "rgba(16, 185, 129, 0.2)",
                            padding: "1px 4px",
                            borderRadius: 3,
                          }}
                        >
                          STREAMING
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 9,
                            fontFamily: FONT_MONO,
                            color: "#e2e8f0",
                          }}
                        >
                          <span>#1042 - $120</span>
                          <span style={{ color: PLANNING_COLORS.structureGreen }}>✓ OK</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 9,
                            fontFamily: FONT_MONO,
                            color: "#e2e8f0",
                          }}
                        >
                          <span>#1043 - $350</span>
                          <span style={{ color: PLANNING_COLORS.structureGreen }}>✓ OK</span>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 18,
                          borderRadius: 4,
                          background: `linear-gradient(90deg, ${PLANNING_COLORS.skyBlue}, ${PLANNING_COLORS.cyberCyan})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: FONT_MONO,
                          fontSize: 9,
                          fontWeight: 800,
                          color: "#030712",
                          letterSpacing: 0.5,
                        }}
                      >
                        ⚡ ACTION TRIGGER
                      </div>
                    </div>
                  </div>

                  {/* 4. Client Sub-footer */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: 9,
                      fontFamily: FONT_MONO,
                      color: "#64748b",
                      paddingTop: 4,
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span>Next.js App Router (SSR)</span>
                    <span style={{ color: PLANNING_COLORS.skyBlue }}>Client State Synced</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Database Foundation Bar (Interconnecting Everything) */}
              <div
                style={{
                  width: 940,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: "rgba(11, 19, 32, 0.94)",
                  border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                  boxShadow: `0 10px 25px rgba(0, 0, 0, 0.6), 0 0 20px ${PLANNING_COLORS.mintGlow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 18px",
                  transform: `scale(${spDbFoundation})`,
                  opacity: spDbFoundation,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaDatabase size={18} color={PLANNING_COLORS.structureGreen} />
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      POSTGRESQL DATABASE
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        fontWeight: 800,
                        color: PLANNING_COLORS.structureGreen,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        padding: "1px 5px",
                        borderRadius: 3,
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      3 TABLES • 1:N RELATIONS
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 14,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: `1px solid ${PLANNING_COLORS.structureGreen}`,
                  }}
                >
                  <FaCheck size={10} color={PLANNING_COLORS.structureGreen} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 10,
                      fontWeight: 800,
                      color: PLANNING_COLORS.structureGreen,
                    }}
                  >
                    STRUCTURED &amp; CONNECTED
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};
