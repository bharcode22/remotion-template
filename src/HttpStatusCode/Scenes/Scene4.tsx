import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLaptop,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Dimajukan agar di Frame 429 Terminal sudah masuk kokoh):
  // - Terminal & Badge Entrance: Frames 416 - 425 (Siap & stabil sebelum 429)
  // - Voiceover: "Status code adalah kode yang dikirimkan server..." (Mulai aktif F429)
  // - Phrase 1: "Status code adalah kode" (Frames 429 - 485)
  // - Phrase 2: "yang dikirimkan server" (Frames 485 - 535)
  // - Phrase 3: "untuk memberikan informasi" (Frames 535 - 575)
  // - Phrase 4: "tentang hasil sebuah request." (Frames 575 - 607)
  // - Outro Buffer: Frames 607 - 630
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring (Dimajukan ke Frame 416)
  const spBadge = spring({
    frame: Math.max(0, frame - 416),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Terminal Window Spring (Dimajukan ke Frame 418, stabil sebelum 429)
  const spTerminal = spring({
    frame: Math.max(0, frame - 418),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Response Diagram Card Spring (Reveals at Frame 580)
  const spDiagram = spring({
    frame: Math.max(0, frame - 580),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Bottom Pill Spring (Dimajukan ke Frame 422)
  const spPill = spring({
    frame: Math.max(0, frame - 422),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER INTERPOLATION (Large Mobile-Friendly Monospace 36px)
  // Mulai mengetik tepat di Frame 429!
  // ─────────────────────────────────────────────────────────────────────────────

  // Phrase 1: "Status code adalah kode" (Mulai tepat di Frame 429)
  const text1 = "Status code adalah kode";
  const chars1 = Math.floor(
    interpolate(frame, [429, 482], [0, text1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText1 = text1.slice(0, chars1);

  // Phrase 2: "yang dikirimkan server" (Frames 485 - 535)
  const isLine2Active = frame >= 483;
  const text2 = "yang dikirimkan server";
  const chars2 = Math.floor(
    interpolate(frame, [485, 532], [0, text2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText2 = text2.slice(0, chars2);

  // Phrase 3: "untuk memberikan informasi" (Frames 535 - 575)
  const isLine3Active = frame >= 533;
  const text3 = "untuk memberikan informasi";
  const chars3 = Math.floor(
    interpolate(frame, [535, 572], [0, text3.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText3 = text3.slice(0, chars3);

  // Phrase 4: "tentang hasil sebuah request." (Frames 575 - 607)
  const isLine4Active = frame >= 573;
  const text4 = "tentang hasil sebuah request.";
  const chars4 = Math.floor(
    interpolate(frame, [575, 605], [0, text4.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText4 = text4.slice(0, chars4);

  const cursorBlink = frame % 14 < 7;

  return (
    <SceneContainer accentColor={HTTP_COLORS.status2xx}>
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
        {/* 1. TOP DEFINITION BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 24, 20, 0.92)",
            border: "1.5px solid rgba(16, 185, 129, 0.35)",
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.2)",
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: HTTP_COLORS.status2xx,
              boxShadow: `0 0 10px ${HTTP_COLORS.status2xx}`,
              display: "inline-block",
            }}
          />
          <FaTerminal size={15} color={HTTP_COLORS.status2xx} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: HTTP_COLORS.status2xx,
              textTransform: "uppercase",
            }}
          >
            TERMINAL // DEFINISI STATUS CODE
          </span>
        </div>

        {/* 2. HERO CENTERPIECE: MACOS TERMINAL (MOBILE-FRIENDLY LARGE TYPEWRITER) */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 35}px)`,
            opacity: spTerminal,
            width: 900,
            borderRadius: 24,
            backgroundColor: "rgba(8, 14, 28, 0.94)",
            border: "1.8px solid rgba(56, 189, 248, 0.35)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(56, 189, 248, 0.16)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 2A. TERMINAL TITLE BAR */}
          <div
            style={{
              height: 54,
              padding: "0 20px",
              backgroundColor: "rgba(14, 23, 44, 0.95)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* macOS Traffic Lights */}
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 8px rgba(239, 68, 68, 0.6)",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                  boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                }}
              />
            </div>

            {/* Terminal Title */}
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 13,
                fontWeight: 600,
                color: HTTP_COLORS.textMuted,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>zsh — http-server@response ~ (status-definition)</span>
            </div>

            {/* Protocol Badge */}
            <div
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 700,
                color: HTTP_COLORS.status2xx,
              }}
            >
              DEFINITION
            </div>
          </div>

          {/* 2B. TERMINAL BODY: LARGE MONOSPACE TYPEWRITER */}
          <div
            style={{
              padding: "36px 36px 32px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              fontFamily: FONT_MONO,
              position: "relative",
              minHeight: 330,
              boxSizing: "border-box",
            }}
          >
            {/* Terminal Command Line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 20,
                color: HTTP_COLORS.textMuted,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 12,
              }}
            >
              <span style={{ color: HTTP_COLORS.status2xx, fontWeight: 800 }}>
                ➜
              </span>
              <span style={{ color: HTTP_COLORS.accentCyan, fontWeight: 700 }}>
                ~
              </span>
              <span style={{ color: HTTP_COLORS.textSecondary }}>
                cat /specs/http_status_code.def
              </span>
            </div>

            {/* Typewriter Output Content (Size: 36px - 38px, High-Contrast Mobile-Friendly) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                lineHeight: 1.5,
              }}
            >
              {/* Baris 1: "Status code adalah kode" */}
              <div style={{ fontSize: 36, fontWeight: 800, color: HTTP_COLORS.accentCyan }}>
                {currentText1}
                {!isLine2Active && (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 6,
                      color: HTTP_COLORS.accentCyan,
                      opacity: cursorBlink ? 1 : 0,
                    }}
                  >
                    █
                  </span>
                )}
              </div>

              {/* Baris 2: "yang dikirimkan server" */}
              {isLine2Active && (
                <div style={{ fontSize: 36, fontWeight: 800, color: HTTP_COLORS.status2xx }}>
                  {currentText2}
                  {!isLine3Active && (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 6,
                        color: HTTP_COLORS.status2xx,
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    >
                      █
                    </span>
                  )}
                </div>
              )}

              {/* Baris 3: "untuk memberikan informasi" */}
              {isLine3Active && (
                <div style={{ fontSize: 36, fontWeight: 700, color: HTTP_COLORS.status4xx }}>
                  {currentText3}
                  {!isLine4Active && (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 6,
                        color: HTTP_COLORS.status4xx,
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    >
                      █
                    </span>
                  )}
                </div>
              )}

              {/* Baris 4: "tentang hasil sebuah request." */}
              {isLine4Active && (
                <div style={{ fontSize: 36, fontWeight: 800, color: HTTP_COLORS.textPrimary }}>
                  {currentText4}
                  {chars4 === text4.length ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 6,
                        color: HTTP_COLORS.status2xx,
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    >
                      █
                    </span>
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 6,
                        color: HTTP_COLORS.textPrimary,
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    >
                      █
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* 2C. VISUAL STATUS LIFECYCLE DIAGRAM (Reveals at Frame 580) */}
            <div
              style={{
                transform: `scale(${spDiagram}) translateY(${(1 - spDiagram) * 20}px)`,
                opacity: spDiagram,
                marginTop: 14,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(5, 12, 24, 0.92)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaServer size={18} color={HTTP_COLORS.status2xx} />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: HTTP_COLORS.status2xx,
                  }}
                >
                  SERVER
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaArrowRight size={13} color={HTTP_COLORS.textMuted} />
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    color: HTTP_COLORS.accentCyan,
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  HTTP STATUS CODE
                </span>
                <FaArrowRight size={13} color={HTTP_COLORS.textMuted} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaLaptop size={18} color={HTTP_COLORS.accentCyan} />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: HTTP_COLORS.textPrimary,
                  }}
                >
                  CLIENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 32,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 36, 0.85)",
            border: "1.5px solid rgba(16, 185, 129, 0.3)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCheckCircle size={15} color={HTTP_COLORS.status2xx} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: HTTP_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1,
            }}
          >
            HASIL EVALUASI REQUEST: SUKSES, REDIREKSI, ATAU ERROR
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

