import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCode,
  FaCubes,
  FaDatabase,
  FaDesktop,
  FaExchangeAlt,
  FaLaptopCode,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS
  // Part A (Frames 0 - 58): Line 1 "Dalam pengembangan aplikasi,"
  // Part B (Frames 58 - 140): Line 2 "ada dua bagian penting yang sering kita dengar,"
  // ─────────────────────────────────────────────────────────────────────────────

  // Part A Springs (Frames 0 - 58)
  const spPart1Badge = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const spPart1Card = spring({
    frame: Math.max(0, frame - 8),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  const spPart1Mockup = spring({
    frame: Math.max(0, frame - 14),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Part A exit animation (frames 50 - 58)
  const part1Opacity = interpolate(frame, [50, 58], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const part1Scale = interpolate(frame, [50, 58], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Part B Springs (Frames 58 - 225)
  const spPart2Badge = spring({
    frame: Math.max(0, frame - 58),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const spPart2Title = spring({
    frame: Math.max(0, frame - 60),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Frontend Banner reveal (Frame 160)
  const spCardFe = spring({
    frame: Math.max(0, frame - 160),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Backend Banner reveal (Frame 178)
  const spCardBe = spring({
    frame: Math.max(0, frame - 178),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Bridge Connector (Frame 192)
  const spBridge = spring({
    frame: Math.max(0, frame - 192),
    fps,
    config: { damping: 13, stiffness: 105 },
  });

  // Bottom System Architecture Pill (Frame 198)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 198),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Floating micro pulse for the connector bridge
  const bridgePulse = Math.sin((frame * Math.PI) / 18) * 4;

  return (
    <SceneContainer accentColor={frame < 58 ? FE_VS_BE_COLORS.feCyan : FE_VS_BE_COLORS.bePurple}>
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
        {/* ═══════════════════════════════════════════════════════════════════════
            PART A (Frames 0 - 58): LINE 1
            "Dalam pengembangan aplikasi," (Voice: F10 - F53)
        ═══════════════════════════════════════════════════════════════════════ */}
        {frame < 58 ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: part1Opacity,
              transform: `scale(${part1Scale})`,
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                transform: `scale(${spPart1Badge}) translateY(${(1 - spPart1Badge) * -20}px)`,
                opacity: spPart1Badge,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.92)",
                border: "1.5px solid rgba(56, 189, 248, 0.45)",
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
                marginBottom: 32,
              }}
            >
              <FaLaptopCode size={16} color={FE_VS_BE_COLORS.feCyan} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: FE_VS_BE_COLORS.feCyan,
                  textTransform: "uppercase",
                  fontFamily: FONT_MONO,
                }}
              >
                // SOFTWARE ARCHITECTURE FUNDAMENTALS
              </span>
            </div>

            {/* Main Hero Card: App Development Ecosystem */}
            <div
              style={{
                transform: `scale(${spPart1Card}) translateY(${(1 - spPart1Card) * 35}px)`,
                opacity: spPart1Card,
                width: 920,
                padding: "44px 40px",
                borderRadius: 32,
                backgroundColor: FE_VS_BE_COLORS.bgSurface,
                border: "2px solid rgba(56, 189, 248, 0.4)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Category Subtitle */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  color: FE_VS_BE_COLORS.feCyan,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                <FaCubes size={14} color={FE_VS_BE_COLORS.feCyan} />
                MODERN APPLICATION DEVELOPMENT
              </div>

              {/* Main Hook Headline (Line 1) */}
              <h1
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: FE_VS_BE_COLORS.textPrimary,
                  margin: "0 0 16px 0",
                  letterSpacing: -0.5,
                  lineHeight: 1.25,
                }}
              >
                Dalam Pengembangan
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #38bdf8 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Aplikasi,
                </span>
              </h1>

              <p
                style={{
                  fontSize: 22,
                  color: FE_VS_BE_COLORS.textSecondary,
                  margin: "0 0 32px 0",
                  lineHeight: 1.5,
                  maxWidth: 760,
                }}
              >
                Membangun sistem perangkat lunak yang utuh dan dapat digunakan oleh jutaan pengguna...
              </p>

              {/* macOS Interactive Window Mockup */}
              <div
                style={{
                  transform: `scale(${spPart1Mockup})`,
                  opacity: spPart1Mockup,
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(6, 11, 25, 0.95)",
                  border: "1.5px solid rgba(56, 189, 248, 0.3)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    height: 44,
                    padding: "0 18px",
                    backgroundColor: "rgba(10, 18, 38, 0.95)",
                    borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Traffic Light Dots */}
                  <div style={{ display: "flex", gap: 8 }}>
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
                  </div>

                  {/* Tab Title */}
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      color: FE_VS_BE_COLORS.textSecondary,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <FaCode size={13} color={FE_VS_BE_COLORS.feCyan} />
                    app-architecture.overview
                  </div>

                  {/* Live Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: FE_VS_BE_COLORS.feCyan,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: FE_VS_BE_COLORS.feCyan,
                        boxShadow: `0 0 8px ${FE_VS_BE_COLORS.feCyan}`,
                      }}
                    />
                    SYSTEM ACTIVE
                  </div>
                </div>

                {/* Window Body: Ecosystem Stack Preview */}
                <div
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  {/* Layer 1: Client App Presentation */}
                  <div
                    style={{
                      flex: 1,
                      padding: "18px 16px",
                      borderRadius: 14,
                      backgroundColor: "rgba(56, 189, 248, 0.08)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        backgroundColor: "rgba(56, 189, 248, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaDesktop size={20} color={FE_VS_BE_COLORS.feCyan} />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: FE_VS_BE_COLORS.textPrimary,
                        }}
                      >
                        Client Side
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontFamily: FONT_MONO,
                          color: FE_VS_BE_COLORS.feCyan,
                        }}
                      >
                        UI & Interaction
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <FaExchangeAlt size={16} color={FE_VS_BE_COLORS.textMuted} />
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: FONT_MONO,
                        fontWeight: 700,
                        color: FE_VS_BE_COLORS.textMuted,
                      }}
                    >
                      API
                    </span>
                  </div>

                  {/* Layer 2: Server & Database Logic */}
                  <div
                    style={{
                      flex: 1,
                      padding: "18px 16px",
                      borderRadius: 14,
                      backgroundColor: "rgba(168, 85, 247, 0.08)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        backgroundColor: "rgba(168, 85, 247, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaServer size={20} color={FE_VS_BE_COLORS.bePurple} />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: FE_VS_BE_COLORS.textPrimary,
                        }}
                      >
                        Server Side
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontFamily: FONT_MONO,
                          color: FE_VS_BE_COLORS.bePurple,
                        }}
                      >
                        Logic & Database
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${spPart2Badge}) translateY(${(1 - spPart2Badge) * -20}px)`,
                opacity: spPart2Badge,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 10, 36, 0.92)",
                border: "1.5px solid rgba(168, 85, 247, 0.5)",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
                marginBottom: 24,
              }}
            >
              <FaLayerGroup size={15} color={FE_VS_BE_COLORS.bePurple} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: FE_VS_BE_COLORS.bePurple,
                  textTransform: "uppercase",
                  fontFamily: FONT_MONO,
                }}
              >
                // ARSITEKTUR UTAMA // DUA PILAR PENTING
              </span>
            </div>

            {/* Line 2 Headline */}
            <div
              style={{
                transform: `scale(${spPart2Title}) translateY(${(1 - spPart2Title) * 25}px)`,
                opacity: spPart2Title,
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              <h2
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: FE_VS_BE_COLORS.textPrimary,
                  margin: 0,
                  letterSpacing: -0.5,
                  lineHeight: 1.25,
                }}
              >
                Ada{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #38bdf8 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                  }}
                >
                  Dua Bagian Penting
                </span>
                <br />
                <span style={{ fontSize: 36, color: FE_VS_BE_COLORS.textSecondary, fontWeight: 700 }}>
                  yang sering kita dengar:
                </span>
              </h2>

              {/* Line 4 "Yaitu:" indicator (starts at Frame 140) */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 14,
                  padding: "6px 20px",
                  borderRadius: 9999,
                  backgroundColor: frame >= 140 ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  border: frame >= 140 ? "1.5px solid rgba(56, 189, 248, 0.45)" : "1.5px solid transparent",
                  boxShadow: frame >= 140 ? "0 0 20px rgba(56, 189, 248, 0.25)" : "none",
                  opacity: interpolate(frame, [138, 146], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                  transform: `scale(${interpolate(frame, [138, 146], [0.85, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })})`,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    color: FE_VS_BE_COLORS.feCyan,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Yaitu:
                </span>
              </div>
            </div>

            {/* 2 Symmetrical Vertical Pillars (Bilateral Dual Split) */}
            <div
              style={{
                width: 940,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                position: "relative",
              }}
            >
              {/* ─────────────────────────────────────────────────────────────────
                  PILLAR 1: FRONTEND (Left Card - Cyan Theme, Starts at Frame 160)
                 ───────────────────────────────────────────────────────────────── */}
              {frame >= 160 ? (
                <div
                  style={{
                    transform: `scale(${spCardFe}) translateY(${(1 - spCardFe) * 35}px)`,
                    opacity: spCardFe,
                    padding: "36px 30px",
                    borderRadius: 28,
                    backgroundColor: "rgba(10, 20, 42, 0.94)",
                    border: "2px solid rgba(56, 189, 248, 0.45)",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Badge Tag */}
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      color: FE_VS_BE_COLORS.feCyan,
                      marginBottom: 16,
                    }}
                  >
                    BAGIAN #1
                  </div>

                  {/* Big Icon */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 22,
                      backgroundColor: "rgba(56, 189, 248, 0.16)",
                      border: "1.5px solid rgba(56, 189, 248, 0.45)",
                      boxShadow: "0 0 25px rgba(56, 189, 248, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <FaDesktop size={38} color={FE_VS_BE_COLORS.feCyan} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      color: FE_VS_BE_COLORS.textPrimary,
                      margin: "0 0 8px 0",
                      letterSpacing: -0.5,
                    }}
                  >
                    Frontend
                  </h3>

                  <p
                    style={{
                      fontSize: 18,
                      color: FE_VS_BE_COLORS.feCyan,
                      fontWeight: 700,
                      margin: "0 0 20px 0",
                      lineHeight: 1.4,
                    }}
                  >
                    Sisi Tampilan & Pengguna
                  </p>

                  {/* Micro Feature Tags */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(56, 189, 248, 0.08)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        fontSize: 13,
                        fontFamily: FONT_MONO,
                        fontWeight: 700,
                        color: FE_VS_BE_COLORS.textPrimary,
                      }}
                    >
                      💻 Client-Side UI
                    </div>
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(56, 189, 248, 0.08)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        fontSize: 13,
                        fontFamily: FONT_MONO,
                        fontWeight: 700,
                        color: FE_VS_BE_COLORS.feCyan,
                      }}
                    >
                      🎨 Tampilan Visual
                    </div>
                  </div>
                </div>
              ) : (
                /* Sleek Mystery Placeholder Slot for Frontend before 160 */
                <div
                  style={{
                    padding: "36px 30px",
                    borderRadius: 28,
                    backgroundColor: "rgba(10, 20, 42, 0.45)",
                    border: "2px dashed rgba(56, 189, 248, 0.35)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                    minHeight: 388,
                  }}
                >
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      color: FE_VS_BE_COLORS.feCyan,
                      marginBottom: 20,
                    }}
                  >
                    BAGIAN #1
                  </div>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 22,
                      backgroundColor: "rgba(56, 189, 248, 0.08)",
                      border: "1.5px dashed rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: "rgba(56, 189, 248, 0.6)",
                      }}
                    >
                      ?
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "rgba(248, 250, 252, 0.5)",
                      marginBottom: 8,
                    }}
                  >
                    Pilar Pertama
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      color: "rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    // Menunggu Pengenalan...
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────────
                  PILLAR 2: BACKEND (Right Card - Purple Theme, Starts at Frame 178)
                 ───────────────────────────────────────────────────────────────── */}
              {frame >= 178 ? (
                <div
                  style={{
                    transform: `scale(${spCardBe}) translateY(${(1 - spCardBe) * 35}px)`,
                    opacity: spCardBe,
                    padding: "36px 30px",
                    borderRadius: 28,
                    backgroundColor: "rgba(20, 10, 42, 0.94)",
                    border: "2px solid rgba(168, 85, 247, 0.45)",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 85, 247, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Badge Tag */}
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      backgroundColor: "rgba(168, 85, 247, 0.15)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      color: FE_VS_BE_COLORS.bePurple,
                      marginBottom: 16,
                    }}
                  >
                    BAGIAN #2
                  </div>

                  {/* Big Icon */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 22,
                      backgroundColor: "rgba(168, 85, 247, 0.16)",
                      border: "1.5px solid rgba(168, 85, 247, 0.45)",
                      boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <FaServer size={38} color={FE_VS_BE_COLORS.bePurple} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      color: FE_VS_BE_COLORS.textPrimary,
                      margin: "0 0 8px 0",
                      letterSpacing: -0.5,
                    }}
                  >
                    Backend
                  </h3>

                  <p
                    style={{
                      fontSize: 18,
                      color: FE_VS_BE_COLORS.bePurple,
                      fontWeight: 700,
                      margin: "0 0 20px 0",
                      lineHeight: 1.4,
                    }}
                  >
                    Sisi Logika & Server
                  </p>

                  {/* Micro Feature Tags */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(168, 85, 247, 0.08)",
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        fontSize: 13,
                        fontFamily: FONT_MONO,
                        fontWeight: 700,
                        color: FE_VS_BE_COLORS.textPrimary,
                      }}
                    >
                      ⚙️ Server-Side Logic
                    </div>
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 10,
                        backgroundColor: "rgba(168, 85, 247, 0.08)",
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        fontSize: 13,
                        fontFamily: FONT_MONO,
                        fontWeight: 700,
                        color: FE_VS_BE_COLORS.bePurple,
                      }}
                    >
                      🗄️ Database & Security
                    </div>
                  </div>
                </div>
              ) : (
                /* Sleek Mystery Placeholder Slot for Backend before 178 */
                <div
                  style={{
                    padding: "36px 30px",
                    borderRadius: 28,
                    backgroundColor: "rgba(20, 10, 42, 0.45)",
                    border: "2px dashed rgba(168, 85, 247, 0.35)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                    minHeight: 388,
                  }}
                >
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      border: "1px solid rgba(168, 85, 247, 0.25)",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      color: FE_VS_BE_COLORS.bePurple,
                      marginBottom: 20,
                    }}
                  >
                    BAGIAN #2
                  </div>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 22,
                      backgroundColor: "rgba(168, 85, 247, 0.08)",
                      border: "1.5px dashed rgba(168, 85, 247, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: "rgba(168, 85, 247, 0.6)",
                      }}
                    >
                      ?
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "rgba(248, 250, 252, 0.5)",
                      marginBottom: 8,
                    }}
                  >
                    Pilar Kedua
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      color: "rgba(168, 85, 247, 0.5)",
                    }}
                  >
                    // Menunggu Pengenalan...
                  </div>
                </div>
              )}

              {/* Center Floating Connecting Bridge */}
              {frame >= 192 && (
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${spBridge}) translateY(${bridgePulse}px)`,
                    opacity: spBridge,
                    zIndex: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      backgroundColor: "rgba(10, 15, 30, 0.96)",
                      border: "2px solid rgba(255, 255, 255, 0.35)",
                      boxShadow:
                        "0 0 25px rgba(56, 189, 248, 0.4), 0 0 25px rgba(168, 85, 247, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaExchangeAlt size={22} color="#ffffff" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Pill */}
            {frame >= 198 && (
              <div
                style={{
                  transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 20}px)`,
                  opacity: spBottomPill,
                  marginTop: 36,
                  padding: "12px 28px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(10, 18, 36, 0.9)",
                  border: "1.5px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <FaDatabase size={15} color={FE_VS_BE_COLORS.feCyan} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: FE_VS_BE_COLORS.textPrimary,
                    fontFamily: FONT_MONO,
                    letterSpacing: 1.2,
                  }}
                >
                  SYSTEM ARCHITECTURE // CLIENT ⟵ DATA EXCHANGE ⟶ SERVER
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </SceneContainer>
  );
};

