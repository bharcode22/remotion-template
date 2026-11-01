import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  FaAndroid,
  FaApple,
  FaBolt,
  FaCheck,
  FaChrome,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaRobot,
  FaSearch,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & KINETIC TIMELINES (Frames 0 - 146)
  // Line 1 (F10 - F64): "Di zaman AI seperti sekarang,"
  // Line 2 (F68 - F144): "Menciptakan suatu software sangatlah mudah,"
  // Paradigm: Kinetic Masked Typography + Live Holographic UI Assembler (No Pop-ups!)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Masked Typography Reveal (Line 1: F8 - F24)
  const line1Slide = interpolate(frame, [8, 24], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const line1Opacity = interpolate(frame, [8, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Headline Title Slide & Laser Sweep (Line 2: F18 - F40)
  const line2Slide = interpolate(frame, [18, 38], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const line2Opacity = interpolate(frame, [18, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Central Holographic IDE Canvas Entry (F22 - F45)
  // Enters with a smooth perspective glide & wireframe border draw, NOT a scale pop!
  const canvasTranslateY = interpolate(frame, [22, 45], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const canvasOpacity = interpolate(frame, [22, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Live Terminal Typing Stream (F30 - F100)
  // Progressive code line reveals based on frame intervals
  const codeLines = [
    'import { AI, App } from "@modern/stack";',
    "const software = AI.synthesize({",
    '  target: ["android", "web", "ios"],',
    '  architecture: "fullstack_reactive",',
    "  autonomous: true",
    "});",
    "export default software.compile();",
  ];
  const visibleCodeCount = Math.min(
    codeLines.length,
    Math.floor(Math.max(0, frame - 30) / 10)
  );

  // 4. Live UI Assembly on Right Pane (F40 - F135)
  // Components glide into place organically
  const searchBarWidth = interpolate(frame, [45, 75], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Multi-platform rail items glide in smoothly on conveyor track (F68+)
  const platformStagger = [
    { name: "Android", icon: FaAndroid, color: "#3ddc84", delay: 68 },
    { name: "Web App", icon: FaChrome, color: "#38bdf8", delay: 78 },
    { name: "iOS App", icon: FaApple, color: "#f8fafc", delay: 88 },
    { name: "Cloud DB", icon: FaDatabase, color: "#a855f7", delay: 98 },
  ];

  // 6. Generation Speed Progress Bar (F70 - F130)
  const buildProgress = interpolate(frame, [70, 130], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 7. Sub-banner Slide Reveal (F66 - F82)
  const subBannerSlideX = interpolate(frame, [66, 82], [-60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subBannerOpacity = interpolate(frame, [66, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.aiViolet}>
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
            1. TOP CATEGORY BADGE (Glides Down with Optical Shutter)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${interpolate(frame, [4, 18], [-30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
            opacity: interpolate(frame, [4, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(11, 19, 38, 0.92)",
            border: "1.5px solid rgba(139, 92, 246, 0.45)",
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: SAMPAH_DIGITAL_COLORS.aiViolet,
              boxShadow: `0 0 10px ${SAMPAH_DIGITAL_COLORS.aiViolet}`,
            }}
          />
          <FaRobot size={15} color={SAMPAH_DIGITAL_COLORS.aiViolet} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.aiViolet,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            ERA KECERDASAN BUATAN // REVOLUSI SOFTWARE
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. MASKED KINETIC TYPOGRAPHY (Lines 1 - 2, No Pop-up!)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 26,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Masked Line 1 */}
          <div style={{ overflow: "hidden", paddingBottom: 4 }}>
            <p
              style={{
                transform: `translateY(${line1Slide}px)`,
                opacity: line1Opacity,
                fontSize: 32,
                color: SAMPAH_DIGITAL_COLORS.textSecondary,
                fontWeight: 700,
                margin: 0,
                letterSpacing: -0.2,
              }}
            >
              Di zaman AI seperti sekarang,
            </p>
          </div>

          {/* Masked Line 2 with Scanning Laser Effect */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <h2
              style={{
                transform: `translateY(${line2Slide}px)`,
                opacity: line2Opacity,
                fontSize: 56,
                fontWeight: 900,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                margin: 0,
                letterSpacing: -0.8,
                lineHeight: 1.2,
              }}
            >
              Menciptakan Software{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, #a855f7 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))",
                }}
              >
                Sangatlah Mudah
              </span>
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. HOLOGRAPHIC SOFTWARE SYNTHESIZER CANVAS (Width: 880px)
               Left: Live Code Terminal Stream
               Right: Live Responsive UI Construction & Platform Conveyor
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${canvasTranslateY}px)`,
            opacity: canvasOpacity,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 16, 32, 0.96)",
            border: "1.8px solid rgba(139, 92, 246, 0.45)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 45px rgba(139, 92, 246, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            marginBottom: 20,
          }}
        >
          {/* Top Window Bar with Live Telemetry */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(6, 10, 22, 0.96)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
              </div>
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaTerminal size={12} color="#8b5cf6" />
                autonomous-builder // multi-platform-forge.tsx
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "4px 12px",
                borderRadius: 9999,
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 6px #10b981",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#34d399",
                }}
              >
                AUTONOMOUS SYNTHESIS ACTIVE
              </span>
            </div>
          </div>

          {/* Canvas Dual-Pane: Left Code Stream | Right App Live UI */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              padding: "20px 24px",
              gap: 20,
              minHeight: 280,
            }}
          >
            {/* ──── LEFT PANE: LIVE CODE GENERATION STREAM ──── */}
            <div
              style={{
                backgroundColor: "rgba(4, 7, 16, 0.8)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "16px 18px",
                fontFamily: FONT_MONO,
                fontSize: 12.5,
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#64748b",
                    fontSize: 11,
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  <FaCode size={11} color="#8b5cf6" />
                  <span>Realtime Token Compiler</span>
                </div>

                {codeLines.slice(0, visibleCodeCount).map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      opacity: idx === visibleCodeCount - 1 ? 1 : 0.85,
                      color:
                        idx === 0
                          ? "#38bdf8"
                          : idx === 1
                            ? "#a855f7"
                            : idx === 5
                              ? "#f59e0b"
                              : idx === 6
                                ? "#10b981"
                                : "#e2e8f0",
                    }}
                  >
                    <span style={{ color: "#475569", width: 18, userSelect: "none" }}>
                      {idx + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}

                {/* Pulsing Neon Cyan Terminal Cursor */}
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 14,
                    backgroundColor: "#38bdf8",
                    marginLeft: 26,
                    marginTop: 4,
                    boxShadow: "0 0 8px #38bdf8",
                    opacity: Math.sin(frame * 0.4) > 0 ? 1 : 0.2,
                  }}
                />
              </div>

              {/* Bottom Speed Metrics */}
              <div
                style={{
                  paddingTop: 12,
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#94a3b8",
                  fontSize: 11,
                }}
              >
                <span>TOKENS: 4,820/s</span>
                <span style={{ color: "#10b981", fontWeight: 700 }}>
                  COMPILING: {Math.round(buildProgress)}%
                </span>
              </div>
            </div>

            {/* ──── RIGHT PANE: LIVE APP UI & PLATFORM DOCKING RAIL ──── */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                borderRadius: 16,
                border: "1px solid rgba(56, 189, 248, 0.25)",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* App UI Header & Expanding Search Bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaMobileAlt size={13} color="#38bdf8" />
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 800,
                        color: "#f8fafc",
                      }}
                    >
                      Instant Multi-Target
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: FONT_MONO,
                      color: "#38bdf8",
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    READY
                  </span>
                </div>

                {/* Dynamic Expanding Search / Input Component */}
                <div
                  style={{
                    width: `${searchBarWidth}%`,
                    height: 28,
                    borderRadius: 8,
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    gap: 8,
                    marginBottom: 14,
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                >
                  <FaSearch size={10} color="#64748b" />
                  <span
                    style={{
                      fontSize: 11,
                      color: "#94a3b8",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Auto-configured architecture...
                  </span>
                </div>

                {/* Platform Docking Conveyor Rail (Android, Web, iOS, DB) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {platformStagger.map((p, i) => {
                    const isVisible = frame >= p.delay;
                    const slideX = isVisible
                      ? interpolate(frame, [p.delay, p.delay + 14], [40, 0], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: Easing.out(Easing.cubic),
                      })
                      : 40;
                    const opacity = isVisible
                      ? interpolate(frame, [p.delay, p.delay + 10], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      })
                      : 0;

                    const IconComp = p.icon;

                    return (
                      <div
                        key={i}
                        style={{
                          transform: `translateX(${slideX}px)`,
                          opacity,
                          padding: "8px 12px",
                          borderRadius: 10,
                          backgroundColor: "rgba(11, 19, 38, 0.85)",
                          border: `1px solid ${p.color}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          boxShadow: `0 2px 10px rgba(0,0,0,0.3)`,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              backgroundColor: `${p.color}20`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconComp size={13} color={p.color} />
                          </div>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#f8fafc",
                            }}
                          >
                            {p.name}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: 10,
                            fontFamily: FONT_MONO,
                            fontWeight: 800,
                            color: "#10b981",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <FaCheck size={9} /> DEPLOYED
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Build Liquid Progress Meter */}
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    height: 6,
                    width: "100%",
                    borderRadius: 999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${buildProgress}%`,
                      background:
                        "linear-gradient(90deg, #8b5cf6 0%, #38bdf8 100%)",
                      boxShadow: "0 0 10px #38bdf8",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. SUB-BANNER ANNOUNCEMENT (Line 2: F66+, Smooth Slide from Left)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 66 && (
          <div
            style={{
              transform: `translateX(${subBannerSlideX}px)`,
              opacity: subBannerOpacity,
              width: 880,
              padding: "14px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              border: "1.5px dashed rgba(139, 92, 246, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaBolt size={18} color="#a855f7" />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: SAMPAH_DIGITAL_COLORS.textPrimary,
                }}
              >
                Menciptakan berbagai jenis software kini sekejap &amp; otomatis:
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: SAMPAH_DIGITAL_COLORS.aiCyan,
                letterSpacing: 1,
              }}
            >
              ⚡ INSTANT MULTI-PLATFORM
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};