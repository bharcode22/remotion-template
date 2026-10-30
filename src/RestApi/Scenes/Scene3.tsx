import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaArrowRight,
  FaExchangeAlt,
  FaNetworkWired,
  FaPaperPlane,
  FaQuestionCircle,
  FaRobot,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 3 entrance (Global Frame 278 - 466)
  const relFrame = Math.max(0, frame - 278);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & INTERPOLATIONS:
  // - Beat 3A (relFrame 0 - 30 / Global 278 - 308): "Dalam rest API,"
  // - AI Thinking (relFrame 30 - 42): Micro-pause before answer
  // - Beat 3B (relFrame 43 - 132 / Global 321 - 410): "proses ini biasanya menggunakan beberapa HTTP method,"
  // - Beat 3C (relFrame 148 - 175 / Global 426 - 453): "Diantaranya:"
  // - Outro Buffer (relFrame 175 - 188 / Global 453 - 466)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Beat 3A Header: "DALAM REST API,"
  const spHeader = spring({
    frame: Math.max(0, relFrame - 4),
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  // Console Window Spring
  const spConsole = spring({
    frame: Math.max(0, relFrame - 8),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Prompt Row Spring
  const spPrompt = spring({
    frame: Math.max(0, relFrame - 12),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Beat 3C "Diantaranya:" Spring (relFrame 145+)
  const spDiantaranya = spring({
    frame: Math.max(0, relFrame - 146),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // 4 Method Sockets Staggered Springs (relFrame 148+)
  const spSocket1 = spring({
    frame: Math.max(0, relFrame - 148),
    fps,
    config: { damping: 13, stiffness: 100 },
  });
  const spSocket2 = spring({
    frame: Math.max(0, relFrame - 152),
    fps,
    config: { damping: 13, stiffness: 100 },
  });
  const spSocket3 = spring({
    frame: Math.max(0, relFrame - 156),
    fps,
    config: { damping: 13, stiffness: 100 },
  });
  const spSocket4 = spring({
    frame: Math.max(0, relFrame - 160),
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🤖 AI RESPONSE STREAMING LOGIC (Beat 3B: relFrame 43 to 132)
  // ─────────────────────────────────────────────────────────────────────────────
  const fullText = "Proses ini biasanya menggunakan beberapa HTTP method standar.";
  const s1 = "Proses ini "; // 0 - 11
  const s2 = "biasanya menggunakan "; // 11 - 32
  const s3 = "beberapa HTTP method"; // 32 - 52
  const s4 = " standar."; // 52 - 61

  const totalChars = Math.floor(
    interpolate(relFrame, [43, 130], [0, fullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const p1 = Math.min(totalChars, 11);
  const p2 = Math.min(Math.max(0, totalChars - 11), 21);
  const p3 = Math.min(Math.max(0, totalChars - 32), 20);
  const p4 = Math.min(Math.max(0, totalChars - 52), 9);

  const isAiStreaming = relFrame >= 43;
  const isStreamingDone = relFrame >= 130;
  const isAiThinking = relFrame >= 28 && relFrame < 43;
  const cursorBlink = relFrame % 14 < 7;

  // Exit transition fade & scale (relFrame 176 - 188 / Global 454 - 466)
  const exitOpacity = interpolate(relFrame, [176, 187], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(relFrame, [176, 187], [1, 0.95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(relFrame, [176, 187], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor="#6366f1">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: exitOpacity,
          transform: `translateY(${exitY}px) scale(${exitScale})`,
          fontFamily: FONT_SANS,
        }}
      >
        {/* 1. TOP PROTOCOL BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 15, 36, 0.9)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            boxShadow: "0 0 24px rgba(99, 102, 241, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: isAiStreaming ? "#818cf8" : "#f59e0b",
              boxShadow: `0 0 10px ${isAiStreaming ? "#818cf8" : "#f59e0b"}`,
              display: "inline-block",
            }}
          />
          <FaNetworkWired size={15} color="#818cf8" />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: REST_COLORS.textPrimary,
              textTransform: "uppercase",
            }}
          >
            HTTP PROTOCOL // METHOD DISPATCHER
          </span>
        </div>

        {/* 2. BEAT 3A HEADER: "DALAM REST API," */}
        <div
          style={{
            transform: `translateY(${(1 - spHeader) * 25}px) scale(${spHeader})`,
            opacity: spHeader,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 50,
              fontWeight: 950,
              letterSpacing: 3,
              color: "#a5b4fc",
              textTransform: "uppercase",
              marginBottom: 4,
              filter: "drop-shadow(0 0 18px rgba(99, 102, 241, 0.5))",
            }}
          >
            DALAM REST API,
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 1.2,
              color: "#cbd5e1",
            }}
          >
            Standar Mekanisme Pengiriman Aksi & Data
          </div>
        </div>

        {/* 3. THE AI TERMINAL WINDOW (Deep Indigo Obsidian Cyber Theme) */}
        <div
          style={{
            transform: `scale(${spConsole}) translateY(${(1 - spConsole) * 30}px)`,
            opacity: spConsole,
            width: "100%",
            maxWidth: 960,
            backgroundColor: "rgba(8, 14, 38, 0.96)",
            border: `1.5px solid ${
              isAiStreaming
                ? "rgba(99, 102, 241, 0.5)"
                : "rgba(56, 189, 248, 0.35)"
            }`,
            borderRadius: 24,
            boxShadow:
              "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(99, 102, 241, 0.25)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          {/* Titlebar: macOS 3 Dots + Session Name */}
          <div
            style={{
              backgroundColor: "rgba(4, 8, 28, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#cbd5e1",
                  marginLeft: 10,
                  letterSpacing: 0.5,
                }}
              >
                AI Assistant // Protocol Dispatch Session
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 14px",
                borderRadius: 9999,
                backgroundColor: isAiStreaming
                  ? "rgba(99, 102, 241, 0.2)"
                  : "rgba(56, 189, 248, 0.15)",
                border: `1px solid ${
                  isAiStreaming
                    ? "rgba(99, 102, 241, 0.5)"
                    : "rgba(56, 189, 248, 0.3)"
                }`,
              }}
            >
              <FaRobot size={14} color="#818cf8" />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#a5b4fc",
                  letterSpacing: 0.8,
                }}
              >
                {isStreamingDone
                  ? "METHODS IDENTIFIED"
                  : isAiStreaming
                  ? "STREAMING METHODS..."
                  : "AWAITING DISPATCH..."}
              </span>
            </div>
          </div>

          {/* Console Body */}
          <div
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* ROW 1: USER CONTEXT QUERY */}
            <div
              style={{
                transform: `scale(${spPrompt})`,
                opacity: spPrompt,
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "rgba(15, 23, 52, 0.75)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                borderRadius: 16,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                  border: "1px solid rgba(99, 102, 241, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaQuestionCircle size={18} color="#a5b4fc" />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#818cf8",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  SYSTEM QUERY
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f8fafc",
                  }}
                >
                  Bagaimana proses komunikasi data dijalankan?
                </div>
              </div>

              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#6366f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaPaperPlane size={14} color="#ffffff" />
              </div>
            </div>

            {/* ROW 2: LIVE STREAMING AI RESPONSE BUBBLE (Line 8) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                backgroundColor: "rgba(99, 102, 241, 0.08)",
                border: "1.5px solid rgba(99, 102, 241, 0.4)",
                borderRadius: 18,
                padding: "22px 24px",
                position: "relative",
              }}
            >
              {/* AI Avatar & Status */}
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
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: "rgba(99, 102, 241, 0.25)",
                      border: "1px solid rgba(99, 102, 241, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 15px rgba(99, 102, 241, 0.35)",
                    }}
                  >
                    <FaRobot size={18} color="#a5b4fc" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: "#a5b4fc",
                        letterSpacing: 1,
                      }}
                    >
                      AI MODEL RESPONSE
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: REST_COLORS.textMuted,
                      }}
                    >
                      Method Protocol Standards
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: REST_COLORS.textSecondary,
                    padding: "4px 10px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 6,
                  }}
                >
                  {isAiStreaming
                    ? `TOKENS: ${totalChars} / ${fullText.length}`
                    : "PREPARING..."}
                </div>
              </div>

              {/* Thinking State Indicator */}
              {isAiThinking && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 0",
                    color: "#818cf8",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#818cf8",
                      boxShadow: "0 0 10px #818cf8",
                    }}
                  />
                  <span>AI memetakan method protokol HTTP...</span>
                </div>
              )}

              {/* STREAMING TEXT OUTPUT (Line 8) */}
              {isAiStreaming && (
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    lineHeight: 1.5,
                    color: "#f8fafc",
                    letterSpacing: 0.8,
                    minHeight: 110,
                  }}
                >
                  {/* Segment 1: Proses ini */}
                  <span style={{ color: "#ffffff", fontWeight: 900 }}>
                    {s1.slice(0, p1)}
                  </span>

                  {/* Segment 2: biasanya menggunakan */}
                  <span style={{ color: REST_COLORS.textSecondary }}>
                    {s2.slice(0, p2)}
                  </span>

                  {/* Segment 3: beberapa HTTP method */}
                  <span
                    style={{
                      color: REST_COLORS.restCyan,
                      fontWeight: 950,
                      padding: p3 > 0 ? "2px 10px" : undefined,
                      backgroundColor:
                        p3 > 0 ? "rgba(56, 189, 248, 0.18)" : undefined,
                      borderRadius: 8,
                      border: p3 > 0 ? "1px solid rgba(56, 189, 248, 0.4)" : undefined,
                      textShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    {s3.slice(0, p3)}
                  </span>

                  {/* Segment 4: standar. */}
                  <span style={{ color: REST_COLORS.textSecondary }}>
                    {s4.slice(0, p4)}
                  </span>

                  {/* Blinking Live AI Cursor */}
                  {!isStreamingDone && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 14,
                        height: 32,
                        backgroundColor: "#818cf8",
                        marginLeft: 6,
                        verticalAlign: "middle",
                        opacity: cursorBlink ? 1 : 0,
                        boxShadow: "0 0 10px #818cf8",
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            {/* ROW 3: BEAT 3C CLIMAX CALLOUT: "DIANTARANYA:" + 4 METHOD SOCKETS */}
            <div
              style={{
                transform: `scale(${spDiantaranya})`,
                opacity: spDiantaranya,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                backgroundColor: "rgba(4, 8, 28, 0.85)",
                border: "1.5px solid rgba(99, 102, 241, 0.35)",
                borderRadius: 18,
                padding: "20px 22px",
              }}
            >
              {/* Callout Header: DIANTARANYA: */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    padding: "4px 14px",
                    borderRadius: 8,
                    backgroundColor: "#6366f1",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 950,
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: "0 0 15px rgba(99, 102, 241, 0.4)",
                  }}
                >
                  <FaArrowRight size={12} />
                  <span>DIANTARANYA:</span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: REST_COLORS.textMuted,
                    letterSpacing: 0.8,
                  }}
                >
                  4 Method Utama RESTful CRUD
                </span>
              </div>

              {/* 4 Method Sockets Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 12,
                  marginTop: 4,
                }}
              >
                {/* Socket 1: GET */}
                <div
                  style={{
                    transform: `scale(${spSocket1})`,
                    opacity: spSocket1,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    borderRadius: 14,
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 950,
                      color: REST_COLORS.restCyan,
                      letterSpacing: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    GET
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: 0.5,
                    }}
                  >
                    Ambil Data
                  </span>
                </div>

                {/* Socket 2: POST */}
                <div
                  style={{
                    transform: `scale(${spSocket2})`,
                    opacity: spSocket2,
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "1.5px solid rgba(16, 185, 129, 0.45)",
                    borderRadius: 14,
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 950,
                      color: REST_COLORS.restEmerald,
                      letterSpacing: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    POST
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: 0.5,
                    }}
                  >
                    Buat Baru
                  </span>
                </div>

                {/* Socket 3: PUT */}
                <div
                  style={{
                    transform: `scale(${spSocket3})`,
                    opacity: spSocket3,
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: "1.5px solid rgba(245, 158, 11, 0.45)",
                    borderRadius: 14,
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 0 15px rgba(245, 158, 11, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 950,
                      color: REST_COLORS.restAmber,
                      letterSpacing: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    PUT
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: 0.5,
                    }}
                  >
                    Perbarui
                  </span>
                </div>

                {/* Socket 4: DELETE */}
                <div
                  style={{
                    transform: `scale(${spSocket4})`,
                    opacity: spSocket4,
                    backgroundColor: "rgba(239, 68, 68, 0.12)",
                    border: "1.5px solid rgba(239, 68, 68, 0.45)",
                    borderRadius: 14,
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 0 15px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 950,
                      color: REST_COLORS.restCrimson,
                      letterSpacing: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    DELETE
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: 0.5,
                    }}
                  >
                    Hapus Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM TELEMETRY BADGE */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            backgroundColor: "rgba(10, 16, 44, 0.7)",
            borderRadius: 14,
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          <FaExchangeAlt size={14} color="#818cf8" />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#cbd5e1",
              letterSpacing: 1.2,
            }}
          >
            HTTP METHODS = KATA KERJA (VERBS) OPERASI REST
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
