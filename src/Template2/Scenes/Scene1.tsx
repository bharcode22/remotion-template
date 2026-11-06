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
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

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
          gap: 24,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. TOP GLASS PILL BADGE
           ───────────────────────────────────────────────────────────── */}
        {isPart1 ? (
          <div
            style={{
              transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -12}px)`,
              opacity: spBadge * (1 - partTransition),
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <FaRobot size={15} color={GLASS_COLORS.aiPurple} />
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
              ERA AI CODING ASSISTANT
            </span>
            <FaBolt size={13} color={GLASS_COLORS.valueAmber} />
          </div>
        ) : (
          <div
            style={{
              transform: `scale(${spQuestionBadge}) translateY(${(1 - spQuestionBadge) * -12}px)`,
              opacity: spQuestionBadge,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 26px",
              borderRadius: 9999,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(251, 191, 36, 0.35)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <FaQuestionCircle size={15} color={GLASS_COLORS.valueAmber} />
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
              PERTANYAAN UTAMA DEVELOPER
            </span>
            <FaCode size={14} color={GLASS_COLORS.skyBlue} />
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
                  color: "#ffffff",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.25,
                }}
              >
                Ketika Sekarang Semua Orang <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.aiViolet})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
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
                  color: "#ffffff",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.25,
                }}
              >
                Apa yang Bisa Menjadi <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, #fef08a, ${GLASS_COLORS.valueAmber})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
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
            3. DYNAMIC VISUAL STAGE
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
                gap: 22,
                opacity: (1 - partTransition) * spPromptBar,
                transform: `scale(${spPromptBar})`,
                pointerEvents: isPart1 ? "auto" : "none",
              }}
            >
              {/* 1. Floating Raycast-Style AI Glass Prompt Bar */}
              <div
                style={{
                  width: 920,
                  height: 90,
                  borderRadius: 9999,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                  padding: "12px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONT_DISPLAY,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18, flex: 1 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(167, 139, 250, 0.18)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMagic size={20} color={GLASS_COLORS.aiPurple} />
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      color: "#f8fafc",
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 500,
                    }}
                  >
                    "{displayedPrompt}
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 22,
                        backgroundColor: GLASS_COLORS.aiPurple,
                        marginLeft: 4,
                        opacity: Math.sin(frame * 0.4) > 0 ? 1 : 0,
                        verticalAlign: "middle",
                        borderRadius: 2,
                      }}
                    />
                    "
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 24px",
                    borderRadius: 9999,
                    background: `linear-gradient(135deg, ${GLASS_COLORS.aiViolet}, ${GLASS_COLORS.aiIndigo})`,
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 8px 24px rgba(129, 140, 248, 0.35)",
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
                  fontFamily: FONT_DISPLAY,
                }}
              >
                <div
                  style={{
                    transform: `scale(${spPersona1})`,
                    opacity: spPersona1,
                    padding: "8px 20px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={GLASS_COLORS.skyBlue} />
                  <span>Pemula Coding</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spPersona2})`,
                    opacity: spPersona2,
                    padding: "8px 20px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={GLASS_COLORS.aiPurple} />
                  <span>Product Designer</span>
                </div>

                <div
                  style={{
                    transform: `scale(${spPersona3})`,
                    opacity: spPersona3,
                    padding: "8px 20px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaUserCheck size={14} color={GLASS_COLORS.structureGreen} />
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
                  fontFamily: FONT_DISPLAY,
                }}
              >
                {/* Card 1: Web Frontend */}
                <div
                  style={{
                    height: 175,
                    borderRadius: 22,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow:
                      "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    padding: "20px 24px",
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
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        backgroundColor: "rgba(103, 232, 249, 0.14)",
                        border: "1px solid rgba(103, 232, 249, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaCode size={22} color={GLASS_COLORS.skyBlue} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc" }}>
                        Frontend Web App
                      </div>
                      <div style={{ fontSize: 12, color: GLASS_COLORS.textSecondary, marginTop: 2 }}>
                        React • Next.js • Tailwind UI
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: GLASS_COLORS.textMuted, letterSpacing: 0.5 }}>
                      GENERATED BY AI
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: GLASS_COLORS.skyBlue,
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
                    borderRadius: 22,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow:
                      "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    padding: "20px 24px",
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
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        backgroundColor: "rgba(192, 132, 252, 0.14)",
                        border: "1px solid rgba(192, 132, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaBolt size={22} color={GLASS_COLORS.aiPurple} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc" }}>
                        Backend REST API
                      </div>
                      <div style={{ fontSize: 12, color: GLASS_COLORS.textSecondary, marginTop: 2 }}>
                        Node.js • Express • Auth Routes
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: GLASS_COLORS.textMuted, letterSpacing: 0.5 }}>
                      GENERATED BY AI
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: GLASS_COLORS.aiPurple,
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
                    borderRadius: 22,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow:
                      "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    padding: "20px 24px",
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
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        backgroundColor: "rgba(110, 231, 183, 0.14)",
                        border: "1px solid rgba(110, 231, 183, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaDatabase size={22} color={GLASS_COLORS.structureGreen} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc" }}>
                        Database Schema
                      </div>
                      <div style={{ fontSize: 12, color: GLASS_COLORS.textSecondary, marginTop: 2 }}>
                        Postgres • Prisma Models
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: GLASS_COLORS.textMuted, letterSpacing: 0.5 }}>
                      GENERATED BY AI
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: GLASS_COLORS.structureGreen,
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
                    borderRadius: 22,
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow:
                      "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    padding: "20px 24px",
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
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        backgroundColor: "rgba(251, 191, 36, 0.14)",
                        border: "1px solid rgba(251, 191, 36, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaMobileAlt size={22} color={GLASS_COLORS.valueAmber} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc" }}>
                        Mobile Client
                      </div>
                      <div style={{ fontSize: 12, color: GLASS_COLORS.textSecondary, marginTop: 2 }}>
                        React Native • Expo App
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <span style={{ fontSize: 11, color: GLASS_COLORS.textMuted, letterSpacing: 0.5 }}>
                      GENERATED BY AI
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: GLASS_COLORS.valueAmber,
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

              {/* 4. Bottom Caption Glass Pill */}
              <div
                style={{
                  padding: "10px 28px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  color: "#cbd5e1",
                  fontSize: 13,
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span>1 PROMPT DARI SIAPA SAJA</span>
                <span style={{ color: GLASS_COLORS.aiPurple }}>➔</span>
                <span style={{ color: GLASS_COLORS.skyBlue }}>APLIKASI LENGKAP SELESAI</span>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              PART 2: THE HOOK QUESTION (F115 - F245)
              Line 2: "apa yang bisa menjadi nilai tambah kita sebagai developer?"
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
              {/* Central Glowing Glass Question Mark Radar Core */}
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
                    border: "2px dashed rgba(251, 191, 36, 0.4)",
                    opacity: 0.4 + pulseWave * 0.3,
                    transform: `rotate(${coreRotation}deg)`,
                  }}
                />
                {/* Inner Glowing Glass Ring */}
                <div
                  style={{
                    position: "absolute",
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(125, 211, 252, 0.35)",
                    boxShadow: "0 0 35px rgba(125, 211, 252, 0.15)",
                    opacity: 0.85,
                  }}
                />
                {/* Center Glass Question Hub */}
                <div
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "2px solid rgba(251, 191, 36, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <FaQuestion size={76} color={GLASS_COLORS.valueAmber} />
                </div>
              </div>

              {/* Minimalist Question Focus Glass Pill */}
              <div
                style={{
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
                  transform: `scale(${spQuestionPill})`,
                  opacity: spQuestionPill,
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

