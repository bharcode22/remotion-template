import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  FaBullseye,
  FaCheckCircle,
  FaCompass,
  FaGem,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & KINETIC TIMELINES (Frames 298 - 418)
  // Line 7: "Sebaiknya kamu perkuat tujuan dari software yang kamu kembangkan."
  // Theme: Tactical Radar Lock-On + Living SVG Constellation Conduits
  // Paradigm: No Scale Pop-ups! Pure Telemetry & Radar Target Physics
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Strategy Badge Slide (F298 - F310)
  const badgeSlideY = interpolate(frame, [298, 310], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const badgeOpacity = interpolate(frame, [298, 308], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Headline Masked Slide (F300 - F320)
  const titleSlideY = interpolate(frame, [300, 320], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOpacity = interpolate(frame, [300, 315], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Sonar Ping Ring Expansion around target (F315 - F360)
  const sonarScale = interpolate((frame - 315) % 45, [0, 45], [0.8, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sonarOpacity = interpolate((frame - 315) % 45, [0, 45], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Central Radar Blueprint HUD Slide (F312 - F330)
  const hudSlideY = interpolate(frame, [312, 330], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const hudOpacity = interpolate(frame, [312, 325], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 4. Rotating Tactical Radar Sweep (Continuous 360deg)
  const radarRotation = ((frame - 298) * 4) % 360;

  // 5. SVG Self-Drawing Laser Conduits (Connecting Node 1 -> Node 2 -> Node 3)
  const laserDraw1 = interpolate(frame, [352, 368], [120, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const laserDraw2 = interpolate(frame, [372, 388], [120, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 6. Target Lock-On Telemetry (F348, F368, F388)
  const lock1Active = frame >= 348;
  const lock2Active = frame >= 368;
  const lock3Active = frame >= 388;

  // 7. Purpose Alignment Strength Meter (F340 - F400)
  const strengthMeter = interpolate(frame, [340, 400], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 8. Bottom Context Tagline Pill (F398 - F410)
  const bottomPillSlideY = interpolate(frame, [398, 410], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const bottomPillOpacity = interpolate(frame, [398, 406], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.solutionEmerald}>
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
            1. TOP STRATEGY BADGE (Slide Down)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${badgeSlideY}px)`,
            opacity: badgeOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 32, 25, 0.94)",
            border: "1.5px solid rgba(16, 185, 129, 0.55)",
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: SAMPAH_DIGITAL_COLORS.solutionEmerald,
              boxShadow: `0 0 10px ${SAMPAH_DIGITAL_COLORS.solutionEmerald}`,
            }}
          />
          <div
            style={{
              transform: `rotate(${radarRotation}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaCompass size={15} color={SAMPAH_DIGITAL_COLORS.solutionEmerald} />
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.solutionEmerald,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            SOLUSI FUNDAMENTAL // PURPOSE-DRIVEN ARCHITECTURE
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. MASKED HEADLINE WITH SONAR TARGET RETICLE
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 26,
            overflow: "hidden",
            paddingBottom: 4,
          }}
        >
          <div style={{ transform: `translateY(${titleSlideY}px)`, opacity: titleOpacity }}>
            <p
              style={{
                fontSize: 30,
                color: SAMPAH_DIGITAL_COLORS.textSecondary,
                fontWeight: 700,
                margin: "0 0 8px 0",
                letterSpacing: -0.2,
              }}
            >
              Sebaiknya kamu
            </p>

            <h2
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: 62,
                fontWeight: 900,
                margin: 0,
                letterSpacing: -1,
                lineHeight: 1.15,
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #10b981 0%, #38bdf8 55%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 35px rgba(16, 185, 129, 0.45))",
                }}
              >
                PERKUAT TUJUAN
              </span>{" "}
              {/* Animated Target with Sonar Wave */}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ fontSize: 50 }}>🎯</span>
                {frame >= 315 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "2px solid #10b981",
                      transform: `translate(-50%, -50%) scale(${sonarScale})`,
                      opacity: sonarOpacity,
                      pointerEvents: "none",
                    }}
                  />
                )}
              </span>
            </h2>

            <p
              style={{
                fontSize: 26,
                color: "#cbd5e1",
                fontWeight: 600,
                margin: "8px 0 0 0",
                letterSpacing: -0.2,
              }}
            >
              dari software yang kamu kembangkan
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. TACTICAL RADAR HUD & PURPOSE CONSTELLATION (Width: 880px)
               Featuring: 360deg Tactical Sweep + 3 Target Nodes + SVG Laser Bus
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${hudSlideY}px)`,
            opacity: hudOpacity,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 24, 26, 0.96)",
            border: "1.8px solid rgba(16, 185, 129, 0.45)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 45px rgba(16, 185, 129, 0.22)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            marginBottom: 20,
          }}
        >
          {/* HUD Top Bar */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(6, 16, 18, 0.96)",
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
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 6px #10b981",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#38bdf8",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#8b5cf6",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  letterSpacing: 0.5,
                }}
              >
                tactical-hud // strategic-purpose-matrix.v1
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
                border: "1px solid rgba(16, 185, 129, 0.35)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#34d399",
                  letterSpacing: 1.2,
                }}
              >
                RADAR: TARGETS LOCKED ({Math.round(strengthMeter)}%)
              </span>
            </div>
          </div>

          {/* HUD Body */}
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Top Telemetry Meter: Overall Purpose Strength */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                }}
              >
                <span style={{ color: "#94a3b8", fontWeight: 700 }}>
                  PURPOSE ALIGNMENT VECTOR
                </span>
                <span style={{ color: "#10b981", fontWeight: 900 }}>
                  {Math.round(strengthMeter)}% RESILIENT ARCHITECTURE
                </span>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${strengthMeter}%`,
                    background: "linear-gradient(90deg, #10b981 0%, #38bdf8 100%)",
                    boxShadow: "0 0 12px #10b981",
                  }}
                />
              </div>
            </div>

            {/* 3 Strategic Nodes with Self-Drawing Laser Vector Lines */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 4,
                position: "relative",
              }}
            >
              {/* NODE 1: Target Masalah Nyata (F348+) */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: lock1Active
                    ? "rgba(16, 185, 129, 0.12)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: lock1Active
                    ? "1.5px solid rgba(16, 185, 129, 0.5)"
                    : "1px dashed rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: lock1Active
                        ? "rgba(16, 185, 129, 0.25)"
                        : "rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: lock1Active ? "0 0 15px rgba(16, 185, 129, 0.4)" : "none",
                    }}
                  >
                    <FaBullseye
                      size={20}
                      color={lock1Active ? "#10b981" : "#64748b"}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 800,
                        color: lock1Active ? "#f8fafc" : "#64748b",
                      }}
                    >
                      1. Target Masalah Nyata Pengguna
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Menjawab problem riil pengguna, bukan fitur semu
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: lock1Active
                      ? "rgba(16, 185, 129, 0.2)"
                      : "transparent",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    color: lock1Active ? "#10b981" : "#475569",
                  }}
                >
                  {lock1Active ? "🎯 LOCKED: REAL PAIN POINT" : "STANDBY"}
                </div>
              </div>

              {/* Animated Laser Connector 1 -> 2 */}
              <div style={{ height: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="4" height="12">
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="12"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="12"
                    strokeDashoffset={laserDraw1}
                  />
                </svg>
              </div>

              {/* NODE 2: Nilai Manfaat & Efisiensi (F368+) */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: lock2Active
                    ? "rgba(56, 189, 248, 0.12)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: lock2Active
                    ? "1.5px solid rgba(56, 189, 248, 0.5)"
                    : "1px dashed rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: lock2Active
                        ? "rgba(56, 189, 248, 0.25)"
                        : "rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: lock2Active ? "0 0 15px rgba(56, 189, 248, 0.4)" : "none",
                    }}
                  >
                    <FaGem
                      size={18}
                      color={lock2Active ? "#38bdf8" : "#64748b"}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 800,
                        color: lock2Active ? "#f8fafc" : "#64748b",
                      }}
                    >
                      2. Nilai Manfaat &amp; Efisiensi Jelas
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Mempersingkat alur kerja dan menghemat waktu operasional
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: lock2Active
                      ? "rgba(56, 189, 248, 0.2)"
                      : "transparent",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    color: lock2Active ? "#38bdf8" : "#475569",
                  }}
                >
                  {lock2Active ? "💎 ROI: HIGH IMPACT" : "STANDBY"}
                </div>
              </div>

              {/* Animated Laser Connector 2 -> 3 */}
              <div style={{ height: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="4" height="12">
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="12"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="12"
                    strokeDashoffset={laserDraw2}
                  />
                </svg>
              </div>

              {/* NODE 3: Fondasi & Roadmap Berkelanjutan (F388+) */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: lock3Active
                    ? "rgba(245, 158, 11, 0.12)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: lock3Active
                    ? "1.5px solid rgba(245, 158, 11, 0.5)"
                    : "1px dashed rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: lock3Active
                        ? "rgba(245, 158, 11, 0.25)"
                        : "rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: lock3Active ? "0 0 15px rgba(245, 158, 11, 0.4)" : "none",
                    }}
                  >
                    <FaRocket
                      size={18}
                      color={lock3Active ? "#f59e0b" : "#64748b"}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 800,
                        color: lock3Active ? "#f8fafc" : "#64748b",
                      }}
                    >
                      3. Fondasi &amp; Roadmap Berkelanjutan
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Sistem dirawat dan berevolusi seiring pertumbuhan bisnis
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: lock3Active
                      ? "rgba(245, 158, 11, 0.2)"
                      : "transparent",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    color: lock3Active ? "#f59e0b" : "#475569",
                  }}
                >
                  {lock3Active ? "🚀 LIFECYCLE: ACTIVE ASSET" : "STANDBY"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. BOTTOM CONTEXT PILL (Slide from Below)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 398 && (
          <div
            style={{
              transform: `translateY(${bottomPillSlideY}px)`,
              opacity: bottomPillOpacity,
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 28, 24, 0.94)",
              border: "1.5px solid rgba(16, 185, 129, 0.5)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FaCheckCircle size={16} color={SAMPAH_DIGITAL_COLORS.solutionEmerald} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              TUJUAN KUAT = SOFTWARE BERKELANJUTAN // BUKAN SAMPAH DIGITAL
            </span>
            <FaLightbulb size={14} color="#f59e0b" />
          </div>
        )}
      </div>
    </SceneContainer>
  );
};