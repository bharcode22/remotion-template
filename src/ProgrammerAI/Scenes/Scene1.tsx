import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaLaptopCode,
  FaMagic,
  FaMobileAlt,
  FaRobot,
  FaTerminal,
  FaUser,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { PROGRAMMER_AI_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & ANIMATIONS (Frames 0 - 135)
  // Naskah Line 1:
  // "Ketika sekarang semua orang bisa membuat aplikasi dengan bantuan AI,"
  // - F10: "Ketika"
  // - F18 - F34: "sekarang semua orang" (Prompt Input appears)
  // - F54 - F66: "bisa membuat aplikasi" (AI Neural processing bridge surges)
  // - F94 - F120: "dengan bantuan AI," (Instant app preview card reveals)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Header & Badge Spring (Frame 4)
  const spHeader = spring({
    frame: Math.max(0, frame - 4),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 2. Main Studio Container Card (Frame 8)
  const spStudioCard = spring({
    frame: Math.max(0, frame - 8),
    fps,
    config: { damping: 14, stiffness: 90, mass: 1 },
  });

  // 3. User Prompt Box Spring (Frame 18)
  const spPromptBox = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // 4. AI Neural Generation Bridge Spring (Frame 54)
  const spAiBridge = spring({
    frame: Math.max(0, frame - 54),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // 5. Instant App Preview Spring (Frame 94)
  const spAppPreview = spring({
    frame: Math.max(0, frame - 94),
    fps,
    config: { damping: 13, stiffness: 90, mass: 1.1 },
  });

  // 6. Bottom Context Pill Spring (Frame 105)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 105),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Dynamic Prompt Typewriter Effect (Frames 18 - 50)
  const fullPromptText =
    'Buat aplikasi e-commerce lengkap dengan katalog produk, shopping cart, dan sistem pembayaran...';
  const promptProgress = Math.min(
    fullPromptText.length,
    Math.floor(Math.max(0, frame - 18) * 2.2)
  );
  const currentPrompt = fullPromptText.slice(0, promptProgress);

  // Neural Particle Flow & Pulse Loop
  const pulseLoop = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;
  const flowOffset = (frame * 12) % 400;

  return (
    <SceneContainer accentColor={PROGRAMMER_AI_COLORS.aiViolet}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_SANS,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────────
            1. TOP CATEGORY BADGE & HEADLINE (Frame 4+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spHeader}) translateY(${(1 - spHeader) * -20}px)`,
            opacity: spHeader,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(11, 19, 38, 0.92)",
            border: "1.5px solid rgba(139, 92, 246, 0.45)",
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.25)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: PROGRAMMER_AI_COLORS.aiViolet,
              boxShadow: `0 0 10px ${PROGRAMMER_AI_COLORS.aiViolet}`,
            }}
          />
          <FaRobot size={15} color={PROGRAMMER_AI_COLORS.aiViolet} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: PROGRAMMER_AI_COLORS.aiViolet,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            ERA REVOLUSI AI // PERGESERAN PARADIGMA
          </span>
        </div>

        {/* Main Headline */}
        <div
          style={{
            transform: `scale(${spHeader}) translateY(${(1 - spHeader) * 20}px)`,
            opacity: spHeader,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: PROGRAMMER_AI_COLORS.textPrimary,
              margin: 0,
              letterSpacing: -0.5,
              lineHeight: 1.25,
            }}
          >
            Ketika Sekarang Semua Orang Bisa Membuat{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #a855f7 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aplikasi
            </span>
          </h2>
          <p
            style={{
              fontSize: 24,
              color: PROGRAMMER_AI_COLORS.devCyan,
              fontWeight: 700,
              margin: "8px 0 0 0",
              fontFamily: FONT_MONO,
            }}
          >
            ✨ ...Hanya dengan Bantuan Prompt AI
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. INTERACTIVE AI APP GENERATOR STUDIO (Frame 8+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spStudioCard}) translateY(${(1 - spStudioCard) * 35}px)`,
            opacity: spStudioCard,
            width: 920,
            borderRadius: 24,
            backgroundColor: "rgba(11, 19, 38, 0.94)",
            border: "1.8px solid rgba(139, 92, 246, 0.4)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 45px rgba(139, 92, 246, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            marginBottom: 20,
          }}
        >
          {/* Studio Window Top Bar */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(6, 11, 25, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* macOS Dots */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              />
              <span
                style={{
                  marginLeft: 14,
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: PROGRAMMER_AI_COLORS.textSecondary,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaTerminal size={12} color={PROGRAMMER_AI_COLORS.aiViolet} />
                ai-app-builder // generative-workflow.ts
              </span>
            </div>

            {/* Model Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 9999,
                backgroundColor: "rgba(139, 92, 246, 0.18)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
              }}
            >
              <FaMagic size={11} color={PROGRAMMER_AI_COLORS.aiViolet} />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: PROGRAMMER_AI_COLORS.aiViolet,
                  letterSpacing: 0.8,
                }}
              >
                AI MODEL ACTIVE
              </span>
            </div>
          </div>

          {/* Studio Body Content */}
          <div
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* ─────────────────────────────────────────────────────────────
                PART A: USER PROMPT INPUT BAR (Frame 18+)
               ───────────────────────────────────────────────────────────── */}
            <div
              style={{
                transform: `scale(${spPromptBox}) translateY(${(1 - spPromptBox) * 20}px)`,
                opacity: spPromptBox,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(17, 27, 54, 0.9)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      backgroundColor: "rgba(56, 189, 248, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaUser size={13} color={PROGRAMMER_AI_COLORS.devCyan} />
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: PROGRAMMER_AI_COLORS.devCyan,
                      letterSpacing: 1,
                    }}
                  >
                    USER PROMPT INPUT // NON-TECHNICAL USER
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: PROGRAMMER_AI_COLORS.textMuted,
                  }}
                >
                  NATURAL LANGUAGE
                </span>
              </div>

              {/* Prompt Text with Cursor */}
              <div
                style={{
                  fontSize: 17,
                  fontFamily: FONT_MONO,
                  color: PROGRAMMER_AI_COLORS.textPrimary,
                  lineHeight: 1.5,
                  minHeight: 48,
                  backgroundColor: "rgba(6, 11, 25, 0.7)",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: PROGRAMMER_AI_COLORS.devCyan, marginRight: 8 }}>
                  &gt;
                </span>
                <span>{currentPrompt}</span>
                {frame >= 18 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 18,
                      marginLeft: 4,
                      backgroundColor: PROGRAMMER_AI_COLORS.devCyan,
                      opacity: pulseLoop > 0.5 ? 1 : 0.2,
                    }}
                  />
                )}
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                PART B: AI NEURAL PROCESSING PIPELINE (Frame 54+)
               ───────────────────────────────────────────────────────────── */}
            {frame >= 54 && (
              <div
                style={{
                  transform: `scale(${spAiBridge}) translateY(${(1 - spAiBridge) * 15}px)`,
                  opacity: spAiBridge,
                  padding: "12px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(139, 92, 246, 0.12)",
                  border: "1.5px dashed rgba(139, 92, 246, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Floating energy laser beam */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: flowOffset,
                    width: 60,
                    background:
                      "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaBolt size={18} color={PROGRAMMER_AI_COLORS.aiPurple} />
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: PROGRAMMER_AI_COLORS.aiPurple,
                      letterSpacing: 1,
                    }}
                  >
                    LLM REASONING &amp; FULLSTACK CODE GENERATION...
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: PROGRAMMER_AI_COLORS.textPrimary,
                      backgroundColor: "rgba(139, 92, 246, 0.25)",
                      padding: "4px 10px",
                      borderRadius: 6,
                    }}
                  >
                    React + Node + SQLite
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 900,
                      color: PROGRAMMER_AI_COLORS.devEmerald,
                    }}
                  >
                    ⚡ 100% COMPLETE
                  </span>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                PART C: INSTANT GENERATED APP PREVIEW (Frame 94+)
               ───────────────────────────────────────────────────────────── */}
            {frame >= 94 && (
              <div
                style={{
                  transform: `scale(${spAppPreview}) translateY(${(1 - spAppPreview) * 25}px)`,
                  opacity: spAppPreview,
                  padding: "18px 22px",
                  borderRadius: 18,
                  backgroundColor: "rgba(17, 27, 54, 0.95)",
                  border: "1.8px solid rgba(16, 185, 129, 0.55)",
                  boxShadow:
                    "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {/* Generated App Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(16, 185, 129, 0.18)",
                        border: "1.5px solid rgba(16, 185, 129, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaMobileAlt size={22} color={PROGRAMMER_AI_COLORS.devEmerald} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 900,
                          color: PROGRAMMER_AI_COLORS.textPrimary,
                        }}
                      >
                        Aplikasi E-Commerce Siap Pakai
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: PROGRAMMER_AI_COLORS.textSecondary,
                          fontWeight: 600,
                        }}
                      >
                        UI, Routing, Database, &amp; Payment Gateway Terpasang
                      </div>
                    </div>
                  </div>

                  {/* Stamp Badge */}
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(16, 185, 129, 0.5)",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 900,
                      color: PROGRAMMER_AI_COLORS.devEmerald,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <FaCheckCircle size={13} color={PROGRAMMER_AI_COLORS.devEmerald} />
                    BUILT IN 10 SECONDS
                  </div>
                </div>

                {/* Mock UI Elements Representation */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      backgroundColor: "rgba(6, 11, 25, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaLaptopCode size={16} color={PROGRAMMER_AI_COLORS.devCyan} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: PROGRAMMER_AI_COLORS.textPrimary,
                      }}
                    >
                      Frontend UI Web
                    </span>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      backgroundColor: "rgba(6, 11, 25, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaCode size={16} color={PROGRAMMER_AI_COLORS.aiViolet} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: PROGRAMMER_AI_COLORS.textPrimary,
                      }}
                    >
                      REST API Backend
                    </span>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      backgroundColor: "rgba(6, 11, 25, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaCheckCircle size={16} color={PROGRAMMER_AI_COLORS.devEmerald} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: PROGRAMMER_AI_COLORS.textPrimary,
                      }}
                    >
                      Database Terhubung
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. BOTTOM CONTEXT PILL (Frame 105+)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 105 && (
          <div
            style={{
              transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 20}px)`,
              opacity: spBottomPill,
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(11, 19, 38, 0.92)",
              border: "1.5px solid rgba(139, 92, 246, 0.45)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FaCheckCircle size={15} color={PROGRAMMER_AI_COLORS.aiViolet} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: PROGRAMMER_AI_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              BARRIER TO ENTRY TURUN // SIAPAPUN BISA CODING DENGAN AI
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};

