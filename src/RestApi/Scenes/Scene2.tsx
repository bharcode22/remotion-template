import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaCode,
  FaPaperPlane,
  FaRobot,
  FaTerminal,
  FaUserTie,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 2 entrance (Global Frame 75 - 280)
  const relFrame = Math.max(0, frame - 75);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & INTERPOLATIONS:
  // - Beat 2A (relFrame 0 - 33 / Global 75 - 108): "Secara sederhana,"
  // - AI Thinking (relFrame 26 - 36): Micro-inference before answer
  // - Beat 2B (relFrame 37 - 175 / Global 112 - 250): "rest API hanyalah aturan method pengelolaan data dengan protokol HTTP"
  // - Outro Buffer (relFrame 175 - 205 / Global 250 - 280)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Beat 2A Header: "SECARA SEDERHANA,"
  const spHeader = spring({
    frame: Math.max(0, relFrame - 4),
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  // Console Window Spring
  const spConsole = spring({
    frame: Math.max(0, relFrame - 10),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Prompt Row Spring
  const spPrompt = spring({
    frame: Math.max(0, relFrame - 14),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // JSON / Protocol Schema Inspector Spring (relFrame 110+)
  const spInspector = spring({
    frame: Math.max(0, relFrame - 100),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🤖 AI RESPONSE STREAMING LOGIC (Token by Token Typewriter)
  // ─────────────────────────────────────────────────────────────────────────────
  const fullText = "REST API hanyalah aturan method pengelolaan data dengan protokol HTTP.";
  const s1 = "REST API"; // 0 - 8
  const s2 = " hanyalah "; // 8 - 18
  const s3 = "aturan method"; // 18 - 31
  const s4 = " pengelolaan data"; // 31 - 48
  const s5 = " dengan "; // 48 - 56
  const s6 = "protokol HTTP."; // 56 - 70

  // Total chars streamed based on voiceover timing (relFrame 37 to 172)
  const totalChars = Math.floor(
    interpolate(relFrame, [37, 172], [0, fullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const p1 = Math.min(totalChars, 8);
  const p2 = Math.min(Math.max(0, totalChars - 8), 10);
  const p3 = Math.min(Math.max(0, totalChars - 18), 13);
  const p4 = Math.min(Math.max(0, totalChars - 31), 17);
  const p5 = Math.min(Math.max(0, totalChars - 48), 8);
  const p6 = Math.min(Math.max(0, totalChars - 56), 14);

  const isAiStreaming = relFrame >= 37;
  const isStreamingDone = relFrame >= 172;
  const isAiThinking = relFrame >= 24 && relFrame < 37;
  const cursorBlink = relFrame % 14 < 7;

  // Exit transition fade & scale (relFrame 192 - 205 / Global 267 - 280)
  const exitOpacity = interpolate(relFrame, [192, 203], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(relFrame, [192, 203], [1, 0.95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(relFrame, [192, 203], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={REST_COLORS.restCyan}>
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
            backgroundColor: "rgba(10, 15, 29, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 0 24px rgba(56, 189, 248, 0.18)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: isAiStreaming
                ? REST_COLORS.restEmerald
                : REST_COLORS.restAmber,
              boxShadow: `0 0 10px ${
                isAiStreaming ? REST_COLORS.restEmerald : REST_COLORS.restAmber
              }`,
              display: "inline-block",
            }}
          />
          <FaTerminal size={15} color={REST_COLORS.restCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: REST_COLORS.textPrimary,
              textTransform: "uppercase",
            }}
          >
            AI WORKSPACE // ARCHITECTURAL EXPLANATION
          </span>
        </div>

        {/* 2. BEAT 2A HEADER: "SECARA SEDERHANA," */}
        <div
          style={{
            transform: `translateY(${(1 - spHeader) * 25}px) scale(${spHeader})`,
            opacity: spHeader,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              letterSpacing: 3,
              color: REST_COLORS.restCyan,
              textTransform: "uppercase",
              marginBottom: 4,
              filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))",
            }}
          >
            SECARA SEDERHANA,
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 1.2,
              color: REST_COLORS.textSecondary,
            }}
          >
            Pertanyaan Konsep Arsitektur Sistem
          </div>
        </div>

        {/* 3. THE AI TERMINAL WINDOW (macOS Dark Obsidian Theme) */}
        <div
          style={{
            transform: `scale(${spConsole}) translateY(${(1 - spConsole) * 30}px)`,
            opacity: spConsole,
            width: "100%",
            maxWidth: 960,
            backgroundColor: "rgba(10, 15, 29, 0.96)",
            border: `1.5px solid ${
              isAiStreaming
                ? "rgba(16, 185, 129, 0.45)"
                : "rgba(56, 189, 248, 0.35)"
            }`,
            borderRadius: 24,
            boxShadow: isAiStreaming
              ? "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.2)"
              : "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            marginBottom: 28,
          }}
        >
          {/* Titlebar: macOS 3 Buttons + Model Name */}
          <div
            style={{
              backgroundColor: "rgba(3, 7, 18, 0.9)",
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
                  color: "#94a3b8",
                  marginLeft: 10,
                  letterSpacing: 0.5,
                }}
              >
                AI Assistant // Architecture Intelligence
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
                  ? "rgba(16, 185, 129, 0.15)"
                  : "rgba(56, 189, 248, 0.15)",
                border: `1px solid ${
                  isAiStreaming
                    ? "rgba(16, 185, 129, 0.4)"
                    : "rgba(56, 189, 248, 0.3)"
                }`,
              }}
            >
              <FaRobot
                size={14}
                color={
                  isAiStreaming
                    ? REST_COLORS.restEmerald
                    : REST_COLORS.restCyan
                }
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: isAiStreaming
                    ? REST_COLORS.restEmerald
                    : REST_COLORS.restCyan,
                  letterSpacing: 0.8,
                }}
              >
                {isStreamingDone
                  ? "RESPONSE COMPLETED"
                  : isAiStreaming
                  ? "STREAMING TOKENS..."
                  : "WAITING INFERENCE..."}
              </span>
            </div>
          </div>

          {/* Console Body */}
          <div
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* ROW 1: USER PROMPT BUBBLE */}
            <div
              style={{
                transform: `scale(${spPrompt})`,
                opacity: spPrompt,
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: 16,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaUserTie size={18} color={REST_COLORS.restCyan} />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: REST_COLORS.restCyan,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  USER PROMPT
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f8fafc",
                  }}
                >
                  Jelaskan apa itu REST API secara sederhana?
                </div>
              </div>

              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: REST_COLORS.restCyan,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaPaperPlane size={14} color="#030712" />
              </div>
            </div>

            {/* ROW 2: LIVE STREAMING AI RESPONSE BUBBLE (Line 4) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                backgroundColor: "rgba(16, 185, 129, 0.06)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                borderRadius: 18,
                padding: "22px 24px",
                position: "relative",
              }}
            >
              {/* AI Avatar & Status Row */}
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
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <FaRobot size={18} color={REST_COLORS.restEmerald} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: REST_COLORS.restEmerald,
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
                      Direct Architectural Definition
                    </div>
                  </div>
                </div>

                {/* Inference / Tokens Tag */}
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
                    color: REST_COLORS.restCyan,
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: REST_COLORS.restCyan,
                      boxShadow: `0 0 10px ${REST_COLORS.restCyan}`,
                    }}
                  />
                  <span>AI sedang menganalisis definisi aturan...</span>
                </div>
              )}

              {/* STREAMING TEXT OUTPUT (Line 4) */}
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
                  {/* Segment 1: REST API */}
                  <span
                    style={{
                      color: REST_COLORS.restCyan,
                      fontWeight: 950,
                      textShadow: "0 0 20px rgba(56, 189, 248, 0.4)",
                    }}
                  >
                    {s1.slice(0, p1)}
                  </span>

                  {/* Segment 2: hanyalah */}
                  <span style={{ color: REST_COLORS.textSecondary }}>
                    {s2.slice(0, p2)}
                  </span>

                  {/* Segment 3: aturan method */}
                  <span
                    style={{
                      color: REST_COLORS.restEmerald,
                      fontWeight: 950,
                      padding: p3 > 0 ? "2px 8px" : undefined,
                      backgroundColor:
                        p3 > 0 ? "rgba(16, 185, 129, 0.15)" : undefined,
                      borderRadius: 6,
                      textShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    {s3.slice(0, p3)}
                  </span>

                  {/* Segment 4: pengelolaan data */}
                  <span style={{ color: "#ffffff", fontWeight: 900 }}>
                    {s4.slice(0, p4)}
                  </span>

                  {/* Segment 5: dengan */}
                  <span style={{ color: REST_COLORS.textSecondary }}>
                    {s5.slice(0, p5)}
                  </span>

                  {/* Segment 6: protokol HTTP. */}
                  <span
                    style={{
                      color: REST_COLORS.restAmber,
                      fontWeight: 950,
                      padding: p6 > 0 ? "2px 8px" : undefined,
                      backgroundColor:
                        p6 > 0 ? "rgba(245, 158, 11, 0.15)" : undefined,
                      borderRadius: 6,
                      textShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                    }}
                  >
                    {s6.slice(0, p6)}
                  </span>

                  {/* Blinking Live AI Cursor */}
                  {!isStreamingDone && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 14,
                        height: 32,
                        backgroundColor: REST_COLORS.restCyan,
                        marginLeft: 6,
                        verticalAlign: "middle",
                        opacity: cursorBlink ? 1 : 0,
                        boxShadow: `0 0 10px ${REST_COLORS.restCyan}`,
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            {/* ROW 3: INTERACTIVE SYNTAX & METHOD RULES INSPECTOR (Muncul saat teks ter-stream) */}
            <div
              style={{
                transform: `scale(${spInspector})`,
                opacity: spInspector,
                backgroundColor: "rgba(3, 7, 18, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 16,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaCode size={18} color={REST_COLORS.restCyan} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: 1,
                    color: REST_COLORS.textPrimary,
                  }}
                >
                  HTTP METHOD SPECIFICATION:
                </span>
              </div>

              {/* 4 Method Micro Chips */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: REST_COLORS.restCyan,
                  }}
                >
                  GET (Ambil)
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: REST_COLORS.restEmerald,
                  }}
                >
                  POST (Buat)
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    border: "1px solid rgba(245, 158, 11, 0.35)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: REST_COLORS.restAmber,
                  }}
                >
                  PUT (Ubah)
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: REST_COLORS.restCrimson,
                  }}
                >
                  DELETE (Hapus)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM ARCHITECTURAL VERIFICATION BADGE */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            borderRadius: 14,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <FaCheckCircle size={15} color={REST_COLORS.restEmerald} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: REST_COLORS.textSecondary,
              letterSpacing: 1.2,
            }}
          >
            REST = KESEPAKATAN ATURAN (CONTRACT & CONVENTION)
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
