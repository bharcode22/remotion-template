import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaMagic,
  FaMobileAlt,
  FaQuestion,
  FaQuestionCircle,
  FaRobot,
  FaUserCheck,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { PLANNING_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 1: Frames 0 - 245)
  //
  // Part 1 (F0 - F115):
  // Line 1: "Ketika sekarang semua orang bisa membuat aplikasi dengan bantuan AI," (Voice: F9 - F110)
  // ➔ Centered floating AI prompt bar + 4 clean floating instant app cards.
  //
  // Part 2 (F115 - F245):
  // Line 2: "apa yang bisa menjadi nilai tambah kita sebagai developer?" (Voice: F112 - F204)
  // ➔ Tight, perfectly-balanced question mark core immediately below the question headline.
  // ─────────────────────────────────────────────────────────────────────────────

  const isPart1 = frame < 115;
  const isPart2 = frame >= 115;

  // 1. Entrance Springs for Part 1 (F0+)
  const spBadge = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  const spPromptBar = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 125 },
  });

  // Floating Persona Tags ("Semua Orang")
  const spPersona1 = spring({
    frame: Math.max(0, frame - 32),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });
  const spPersona2 = spring({
    frame: Math.max(0, frame - 40),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });
  const spPersona3 = spring({
    frame: Math.max(0, frame - 48),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });

  // 4 Floating App Cards Staggered Pop-Out (F58 - F90)
  const spCardWeb = spring({
    frame: Math.max(0, frame - 58),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });
  const spCardApi = spring({
    frame: Math.max(0, frame - 68),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });
  const spCardDb = spring({
    frame: Math.max(0, frame - 78),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });
  const spCardMobile = spring({
    frame: Math.max(0, frame - 88),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  // 2. Part 2 Question Springs (F115+)
  const spQuestionBadge = spring({
    frame: Math.max(0, frame - 116),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spQuestionHeadline = spring({
    frame: Math.max(0, frame - 120),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 120 },
  });

  const spQuestionCore = spring({
    frame: Math.max(0, frame - 126),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 125 },
  });

  const spQuestionPill = spring({
    frame: Math.max(0, frame - 142),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 125 },
  });

  // Smooth Transition Part 1 ➔ Part 2
  const partTransition = interpolate(frame, [110, 118], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Scene Exit Transition (F218 - F225)
  const exitProgress = interpolate(frame, [218, 225], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;
  const sceneScale = 1 - exitProgress * 0.03;

  // Continuous subtle pulse
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;
  const coreRotation = ((frame - 115) * 1.5) % 360;

  // Prompt Typewriter Text
  const promptFullText = "Buat fullstack web app marketplace lengkap...";
  const charsShown = Math.floor(
    interpolate(frame, [20, 60], [0, promptFullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedPrompt = promptFullText.slice(0, charsShown);

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
          UNIFIED VERTICALLY-CENTERED CONTENT WRAPPER
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. TOP MINIMALIST PILL BADGE
           ───────────────────────────────────────────────────────────── */}
        {isPart1 ? (
          <div
            style={{
              transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -12}px)`,
              opacity: spBadge * (1 - partTransition),
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 22px",
              borderRadius: 9999,
              backgroundColor: "rgba(22, 15, 42, 0.9)",
              border: `1.5px solid ${PLANNING_COLORS.aiViolet}`,
              boxShadow: `0 0 25px ${PLANNING_COLORS.aiGlow}`,
            }}
          >
            <FaRobot size={15} color={PLANNING_COLORS.aiPurple} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#f3e8ff",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              ERA AI CODING ASSISTANT
            </span>
            <FaBolt size={13} color={PLANNING_COLORS.valueAmber} />
          </div>
        ) : (
          <div
            style={{
              transform: `scale(${spQuestionBadge}) translateY(${(1 - spQuestionBadge) * -12}px)`,
              opacity: spQuestionBadge,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(26, 20, 10, 0.9)",
              border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
              boxShadow: `0 0 30px ${PLANNING_COLORS.amberGlow}`,
            }}
          >
            <FaQuestionCircle size={15} color={PLANNING_COLORS.valueAmber} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#fef3c7",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              PERTANYAAN UTAMA DEVELOPER
            </span>
            <FaCode size={14} color={PLANNING_COLORS.skyBlue} />
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            2. BOLD CLEAN HEADLINE (Centered)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            textAlign: "center",
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isPart1 ? (
            <div
              style={{
                transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 15}px)`,
                opacity: spHeadline * (1 - partTransition),
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#f8fafc",
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                }}
              >
                Ketika Sekarang Semua Orang <br />
                <span
                  style={{
                    color: PLANNING_COLORS.aiPurple,
                    textShadow: `0 0 35px ${PLANNING_COLORS.aiGlow}`,
                  }}
                >
                  Bisa Bikin Aplikasi Pake AI...
                </span>
              </div>
            </div>
          ) : (
            <div
              style={{
                transform: `scale(${spQuestionHeadline}) translateY(${(1 - spQuestionHeadline) * 15}px)`,
                opacity: spQuestionHeadline,
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#f8fafc",
                  fontFamily: FONT_MONO,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                }}
              >
                Apa yang Bisa Menjadi <br />
                <span
                  style={{
                    color: PLANNING_COLORS.valueAmber,
                    textShadow: `0 0 35px ${PLANNING_COLORS.amberGlow}`,
                  }}
                >
                  Nilai Tambah Kita
                </span>{" "}
                Sebagai Developer?
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. DYNAMIC VISUAL STAGE (Naturally Sized & Perfectly Balanced)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            minHeight: isPart1 ? 620 : 420,
          }}
        >
          {/* ═════════════════════════════════════════════════════════════════
              PART 1: THE FLOATING AI PROMPT BAR & INSTANT APPS (F0 - F115)
              Line 1: "Ketika sekarang semua orang bisa membuat aplikasi dengan bantuan AI,"
             ═════════════════════════════════════════════════════════════════ */}
          {partTransition < 1 && (
            <div
              style={{
                position: isPart1 ? "relative" : "absolute",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                opacity: (1 - partTransition) * spPromptBar,
                transform: `scale(${spPromptBar})`,
                pointerEvents: isPart1 ? "auto" : "none",
              }}
            >
              {/* 1. Floating Raycast-Style AI Prompt Bar */}
              <div
                style={{
                  width: 920,
                  height: 90,
                  borderRadius: 9999,
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  border: `2px solid ${PLANNING_COLORS.aiViolet}`,
                  boxShadow: `0 20px 50px rgba(0, 0, 0, 0.65), 0 0 40px ${PLANNING_COLORS.aiGlow}`,
                  padding: "12px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONT_MONO,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18, flex: 1 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      border: `1.5px solid ${PLANNING_COLORS.aiViolet}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 15px ${PLANNING_COLORS.aiGlow}`,
                    }}
                  >
                    <FaMagic size={20} color={PLANNING_COLORS.aiPurple} />
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      color: "#f8fafc",
                      fontFamily: FONT_MONO,
                      fontWeight: 500,
                    }}
                  >
                    "{displayedPrompt}
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 22,
                        backgroundColor: PLANNING_COLORS.aiPurple,
                        marginLeft: 4,
                        opacity: Math.sin(frame * 0.4) > 0 ? 1 : 0,
                        verticalAlign: "middle",
                      }}
                    />
                    "
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 24px",
                    borderRadius: 9999,
                    background: `linear-gradient(135deg, ${PLANNING_COLORS.aiViolet}, ${PLANNING_COLORS.aiIndigo})`,
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: `0 0 20px ${PLANNING_COLORS.aiGlow}`,
                  }}
                >
                  <span>GENERATE</span>
                  <FaArrowRight size={13} />
                </div>
              </div>

              {/* 2. "Semua Orang" Persona Floating Chips */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  fontFamily: FONT_MONO,
                }}
              >
                <div
                  style={{
                    transform: `scale(${spPersona1})`,
                    opacity: spPersona1,
                    padding: "8px 18px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1.5px solid rgba(56, 189, 248, 0.4)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={PLANNING_COLORS.skyBlue} />
                  <span>Pemula Coding</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spPersona2})`,
                    opacity: spPersona2,
                    padding: "8px 18px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1.5px solid rgba(168, 85, 247, 0.4)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={PLANNING_COLORS.aiPurple} />
                  <span>Product Designer</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spPersona3})`,
                    opacity: spPersona3,
                    padding: "8px 18px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1.5px solid rgba(16, 185, 129, 0.4)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={PLANNING_COLORS.structureGreen} />
                  <span>Non-Technical Founder</span>
                </div>
              </div>

              {/* 3. Four Sleek Floating Instant App Cards (2x2 Grid) */}
              <div
                style={{
                  width: 920,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  fontFamily: FONT_MONO,
                }}
              >
                {/* Card 1: Web Frontend */}
                <div
                  style={{
                    height: 175,
                    borderRadius: 20,
                    backgroundColor: "rgba(12, 20, 36, 0.92)",
                    border: `1.5px solid ${PLANNING_COLORS.skyBlue}`,
                    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px ${PLANNING_COLORS.cyanGlow}`,
                    padding: "18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spCardWeb})`,
                    opacity: spCardWeb,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(6, 182, 212, 0.2)",
                        border: `1.5px solid ${PLANNING_COLORS.skyBlue}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaCode size={22} color={PLANNING_COLORS.skyBlue} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                        Frontend Web App
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                        React • Next.js • Tailwind UI
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>GENERATED BY AI</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: PLANNING_COLORS.skyBlue,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      <FaCheckCircle size={13} />
                      <span>SIAP PAKAI</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Backend API */}
                <div
                  style={{
                    height: 175,
                    borderRadius: 20,
                    backgroundColor: "rgba(22, 16, 38, 0.92)",
                    border: `1.5px solid ${PLANNING_COLORS.aiPurple}`,
                    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px ${PLANNING_COLORS.aiGlow}`,
                    padding: "18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spCardApi})`,
                    opacity: spCardApi,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                        border: `1.5px solid ${PLANNING_COLORS.aiPurple}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaBolt size={22} color={PLANNING_COLORS.aiPurple} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                        Backend REST API
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                        Node.js • Express • Auth Routes
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>GENERATED BY AI</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: PLANNING_COLORS.aiPurple,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      <FaCheckCircle size={13} />
                      <span>SIAP PAKAI</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Database System */}
                <div
                  style={{
                    height: 175,
                    borderRadius: 20,
                    backgroundColor: "rgba(12, 26, 24, 0.92)",
                    border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px ${PLANNING_COLORS.mintGlow}`,
                    padding: "18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spCardDb})`,
                    opacity: spCardDb,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        border: `1.5px solid ${PLANNING_COLORS.structureGreen}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaDatabase size={22} color={PLANNING_COLORS.structureGreen} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                        Database Schema
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                        Postgres • Prisma Models
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>GENERATED BY AI</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: PLANNING_COLORS.structureGreen,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      <FaCheckCircle size={13} />
                      <span>SIAP PAKAI</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Mobile Client */}
                <div
                  style={{
                    height: 175,
                    borderRadius: 20,
                    backgroundColor: "rgba(28, 20, 14, 0.92)",
                    border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
                    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px ${PLANNING_COLORS.amberGlow}`,
                    padding: "18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spCardMobile})`,
                    opacity: spCardMobile,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(245, 158, 11, 0.2)",
                        border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaMobileAlt size={22} color={PLANNING_COLORS.valueAmber} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                        Mobile Client
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                        React Native • Expo App
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>GENERATED BY AI</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: PLANNING_COLORS.valueAmber,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      <FaCheckCircle size={13} />
                      <span>SIAP PAKAI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Bottom Caption Pill */}
              <div
                style={{
                  padding: "10px 26px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "#cbd5e1",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span>1 PROMPT DARI SIAPA SAJA</span>
                <span style={{ color: PLANNING_COLORS.aiPurple }}>➔</span>
                <span style={{ color: PLANNING_COLORS.skyBlue }}>APLIKASI LENGKAP SELESAI</span>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              PART 2: THE HOOK QUESTION (F115 - F245)
              Line 2: "apa yang bisa menjadi nilai tambah kita sebagai developer?"
              ➔ Tight, perfectly-balanced question mark core immediately below the question headline.
             ═════════════════════════════════════════════════════════════════ */}
          {partTransition > 0 && (
            <div
              style={{
                position: isPart2 ? "relative" : "absolute",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                marginTop: 8,
                opacity: partTransition * spQuestionCore,
                transform: `scale(${spQuestionCore})`,
                pointerEvents: isPart2 ? "auto" : "none",
              }}
            >
              {/* Central Glowing Question Mark Radar Core */}
              <div
                style={{
                  position: "relative",
                  width: 320,
                  height: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Outer Dashed Orbit Ring */}
                <div
                  style={{
                    position: "absolute",
                    width: 310,
                    height: 310,
                    borderRadius: "50%",
                    border: `2px dashed ${PLANNING_COLORS.valueAmber}`,
                    opacity: 0.4 + pulseWave * 0.3,
                    transform: `rotate(${coreRotation}deg)`,
                  }}
                />
                {/* Inner Glowing Cyan Ring */}
                <div
                  style={{
                    position: "absolute",
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    border: `2px solid ${PLANNING_COLORS.skyBlue}`,
                    boxShadow: `0 0 45px ${PLANNING_COLORS.cyanGlow}`,
                    opacity: 0.85,
                  }}
                />
                {/* Center Question Hub */}
                <div
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    border: `3px solid ${PLANNING_COLORS.valueAmber}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 55px ${PLANNING_COLORS.amberGlow}`,
                  }}
                >
                  <FaQuestion size={76} color={PLANNING_COLORS.valueAmber} />
                </div>
              </div>

              {/* Minimalist Question Focus Pill */}
              <div
                style={{
                  padding: "14px 34px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  border: `1.5px solid ${PLANNING_COLORS.valueAmber}`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${PLANNING_COLORS.amberGlow}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: FONT_MONO,
                  transform: `scale(${spQuestionPill})`,
                  opacity: spQuestionPill,
                }}
              >
                <div
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    backgroundColor: PLANNING_COLORS.valueAmber,
                    boxShadow: `0 0 10px ${PLANNING_COLORS.valueAmber}`,
                  }}
                />
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: 0.5,
                  }}
                >
                  DI ERA SERBA OTOMATIS, APA PERAN UTAMA DEVELOPER?
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};
