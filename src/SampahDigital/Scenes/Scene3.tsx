import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  FaExclamationTriangle,
  FaFolderMinus,
  FaHeartbeat,
  FaTimesCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & KINETIC TIMELINES (Frames 254 - 302)
  // Line 6: "Supaya software kamu tidak menjadi sampah digital,"
  // Theme: CRT Glitch Distortion + Plunging Health Gauge + Live Flatline Monitor
  // Paradigm: No Scale Pop-ups! Pure Diagnostic Corruption Physics
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Chromatic Aberration & Glitch on "SAMPAH DIGITAL" (F254 - F264)
  const isGlitching = frame >= 254 && frame <= 263;
  const glitchOffset = isGlitching
    ? Math.sin((frame - 254) * 3.5) * (1 - (frame - 254) / 10) * 8
    : 0;

  // Headline Slide & Mask (F254 - F265)
  const headlineSlideY = interpolate(frame, [254, 265], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const headlineOpacity = interpolate(frame, [254, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Central Corruption Diagnostic Monitor Slide (F256 - F270)
  const monitorSlideY = interpolate(frame, [256, 270], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const monitorOpacity = interpolate(frame, [256, 266], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Degradation Speedometer / Needle Plunge (F260 - F285)
  // Needle plunges violently from 90deg (Normal) to -70deg (Critical 0%)
  const needleAngle = interpolate(frame, [260, 280], [75, -65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.8)),
  });

  // 4. Laser Scanline Sweep down the monitor (F264 - F295)
  const scanlineY = interpolate(frame, [264, 295], [-20, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 5. Item 1: Flatline EKG Heartbeat (F268 - F302)
  // An animated heart line that suddenly flatlines to zero
  const ekgDashOffset = interpolate(frame, [268, 292], [200, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 6. Item 2: Tangled Circuit Glitch Frequency
  const circuitBlink = Math.sin(frame * 0.8) > 0;

  // 7. Item 3: Zombie Commit Grid Progress (F284+)
  const zombieGridOpacity = interpolate(frame, [284, 294], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 8. Bottom Hazard Caution Pill (F288 - F298)
  const bottomPillSlideY = interpolate(frame, [288, 298], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const bottomPillOpacity = interpolate(frame, [288, 295], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.wasteRose}>
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
            1. TOP WARNING BADGE (Slide Down)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${interpolate(frame, [254, 262], [-25, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
            opacity: interpolate(frame, [254, 260], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(30, 15, 20, 0.94)",
            border: "1.5px solid rgba(244, 63, 94, 0.55)",
            boxShadow: "0 0 25px rgba(244, 63, 94, 0.3)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: SAMPAH_DIGITAL_COLORS.wasteRose,
              boxShadow: `0 0 10px ${SAMPAH_DIGITAL_COLORS.wasteRose}`,
            }}
          />
          <FaExclamationTriangle size={15} color={SAMPAH_DIGITAL_COLORS.wasteRose} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.wasteRose,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            PERINGATAN KRUSIAL // THE DIGITAL WASTE TRAP
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. DRAMATIC HEADLINE WITH CHROMATIC GLITCH ON IMPACT
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 26,
            overflow: "hidden",
            paddingBottom: 4,
          }}
        >
          <div style={{ transform: `translateY(${headlineSlideY}px)`, opacity: headlineOpacity }}>
            <p
              style={{
                fontSize: 30,
                color: SAMPAH_DIGITAL_COLORS.textSecondary,
                fontWeight: 700,
                margin: "0 0 8px 0",
                letterSpacing: -0.2,
              }}
            >
              Supaya software kamu tidak menjadi
            </p>

            {/* "SAMPAH DIGITAL" with RGB Chromatic Split Glitch */}
            <h2
              style={{
                position: "relative",
                fontSize: 64,
                fontWeight: 900,
                margin: 0,
                letterSpacing: -1,
                lineHeight: 1.15,
              }}
            >
              {/* Cyan Glitch Shadow (Left Offset) */}
              {isGlitching && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "#00f0ff",
                    transform: `translateX(${-glitchOffset}px)`,
                    opacity: 0.8,
                    clipPath: "inset(20% 0 30% 0)",
                  }}
                >
                  SAMPAH DIGITAL
                </span>
              )}

              {/* Red Glitch Shadow (Right Offset) */}
              {isGlitching && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "#ff0055",
                    transform: `translateX(${glitchOffset}px)`,
                    opacity: 0.8,
                    clipPath: "inset(50% 0 10% 0)",
                  }}
                >
                  SAMPAH DIGITAL
                </span>
              )}

              <span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, #f43f5e 0%, #f97316 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 35px rgba(244, 63, 94, 0.5))",
                }}
              >
                SAMPAH DIGITAL
              </span>{" "}
              <span style={{ fontSize: 52 }}>🗑️</span>
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. CENTRAL DEGRADATION DIAGNOSTIC MONITOR (Width: 880px)
               Featuring: System Health Needle Gauge + 3 Live Degradation Symptoms
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${monitorSlideY}px)`,
            opacity: monitorOpacity,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(18, 10, 24, 0.96)",
            border: "1.8px solid rgba(244, 63, 94, 0.5)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 45px rgba(244, 63, 94, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            marginBottom: 20,
          }}
        >
          {/* Active Laser Scanline Sweeping Down */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: scanlineY,
              height: 3,
              background:
                "linear-gradient(90deg, transparent, rgba(244, 63, 94, 0.85), transparent)",
              boxShadow: "0 0 15px rgba(244, 63, 94, 0.8)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />

          {/* Diagnostic Window Bar */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(10, 5, 14, 0.96)",
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
                    boxShadow: "0 0 6px #ef4444",
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
                    backgroundColor: "#64748b",
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
                diagnostic-monitor // digital-waste-analysis.log
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(244, 63, 94, 0.15)",
                padding: "4px 12px",
                borderRadius: 9999,
                border: "1px solid rgba(244, 63, 94, 0.4)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#f43f5e",
                  boxShadow: "0 0 8px #f43f5e",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#f43f5e",
                  letterSpacing: 1,
                }}
              >
                ANOMALY DETECTED: 0% RETENTION
              </span>
            </div>
          </div>

          {/* Diagnostic Monitor Body */}
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Top Bar: Live Degradation Dial & Alert Banner */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(30, 12, 18, 0.8)",
                border: "1.2px solid rgba(244, 63, 94, 0.35)",
              }}
            >
              {/* Dial Gauge */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    position: "relative",
                    width: 52,
                    height: 28,
                    overflow: "hidden",
                  }}
                >
                  <svg width="52" height="52" viewBox="0 0 52 52">
                    <circle
                      cx="26"
                      cy="26"
                      r="22"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="26"
                      cy="26"
                      r="22"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="5"
                      strokeDasharray="138"
                      strokeDashoffset="70"
                    />
                  </svg>
                  {/* Gauge Needle */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 2,
                      height: 22,
                      backgroundColor: "#f8fafc",
                      transformOrigin: "bottom center",
                      transform: `translateX(-50%) rotate(${needleAngle}deg)`,
                      boxShadow: "0 0 4px #ffffff",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: FONT_MONO,
                      color: "#94a3b8",
                      letterSpacing: 0.8,
                    }}
                  >
                    SOFTWARE HEALTH INDEX
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontFamily: FONT_MONO,
                      fontWeight: 900,
                      color: "#f43f5e",
                    }}
                  >
                    0.0 / 100 • CRITICAL FAILURE
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  color: "#f59e0b",
                  fontWeight: 700,
                }}
              >
                ⚠️ TERBENGKALAI TANPA PENGGUNA
              </div>
            </div>

            {/* The 3 Symptoms with Kinetic Mechanical Data Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* 1. Flatline EKG: 0 Active Users */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: "rgba(244, 63, 94, 0.08)",
                  border: "1.2px solid rgba(244, 63, 94, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaHeartbeat size={20} color="#f43f5e" />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#f8fafc" }}>
                      0 Active Users // Tidak Ada Pengguna Riil
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Dibuat tanpa memvalidasi kebutuhan nyata pasar
                    </span>
                  </div>
                </div>

                {/* Animated Flatline SVG Waveform */}
                <svg width="120" height="26" viewBox="0 0 120 26">
                  <path
                    d="M0,13 L30,13 L38,4 L46,22 L54,13 L120,13"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset={ekgDashOffset}
                  />
                  <circle cx="118" cy="13" r="3" fill="#f43f5e" />
                </svg>
              </div>

              {/* 2. Spaghetti Code: Struktur Rapuh */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: "rgba(245, 158, 11, 0.08)",
                  border: "1.2px solid rgba(245, 158, 11, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaTimesCircle size={20} color="#f59e0b" />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#f8fafc" }}>
                      Spaghetti Code // Kode Rapuh &amp; Tanpa Fondasi
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Cepat dibuat via AI, namun mustahil dimodifikasi dan di-scale
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    border: "1px solid rgba(245, 158, 11, 0.5)",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    color: circuitBlink ? "#f59e0b" : "rgba(245, 158, 11, 0.4)",
                  }}
                >
                  UNMAINTAINABLE
                </div>
              </div>

              {/* 3. Zombie Repo: Tanpa Pemeliharaan */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  backgroundColor: "rgba(100, 116, 139, 0.1)",
                  border: "1.2px solid rgba(100, 116, 139, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: zombieGridOpacity,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaTrashAlt size={18} color="#94a3b8" />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#f8fafc" }}>
                      Zombie Repository // Proyek Mati Suri
                    </h4>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>
                      Hanya menumpuk di cloud tanpa ada yang memakai
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    color: "#f43f5e",
                    fontWeight: 800,
                  }}
                >
                  LAST ACTIVE: NEVER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. BOTTOM HAZARD CAUTION PILL (Slide from Below)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 288 && (
          <div
            style={{
              transform: `translateY(${bottomPillSlideY}px)`,
              opacity: bottomPillOpacity,
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(30, 15, 20, 0.94)",
              border: "1.5px solid rgba(244, 63, 94, 0.5)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FaFolderMinus size={15} color={SAMPAH_DIGITAL_COLORS.wasteRose} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              HANYA BIKIN FITUR ≠ SOFTWARE BERHASIL
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};