import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaArrowRight,
  FaBolt,
  FaGlobe,
  FaLaptop,
  FaLock,
  FaNetworkWired,
  FaRedo,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 0 - 75):
  // Voiceover: "Pernah membuka sebuah web app," (Frames 9 - 60)
  // Silence / Outro buffer: Frames 60 - 75
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Word 1: "PERNAH MEMBUKA"
  const spWord1 = spring({
    frame: Math.max(0, frame - 6),
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // Headline Word 2: "SEBUAH WEB APP?"
  const spWord2 = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 12, stiffness: 105 },
  });

  // Hero Browser Window Spring
  const spBrowser = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Bottom Context Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Animated Refresh Icon Rotation (continuous subtle spin)
  const refreshRotation = (frame * 4) % 360;

  // HTTP Request Packet Travel (Client -> Server pulse)
  const packetY = interpolate((frame * 2.5) % 100, [0, 100], [40, -40]);
  const packetOpacity = interpolate(
    (frame * 2.5) % 100,
    [0, 20, 80, 100],
    [0, 1, 1, 0]
  );

  // Scanning Shimmer across Dashboard Cards
  const shimmerPos = interpolate((frame * 2.2) % 100, [0, 100], [-100, 200]);

  // Exit Transition (Frames 66 - 75)
  const exitOpacity = interpolate(frame, [66, 75], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [66, 75], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [66, 75], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={HTTP_COLORS.accentCyan}>
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
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 40, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
            marginBottom: 24,
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
          <FaGlobe size={15} color={HTTP_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: HTTP_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            HTTP PROTOCOL // CLIENT SESSION
          </span>
        </div>

        {/* 2. PROMINENT HEADLINE (Mobile-Friendly Typography) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 36,
            gap: 8,
          }}
        >
          {/* Word 1: PERNAH MEMBUKA */}
          <h2
            style={{
              margin: 0,
              transform: `scale(${spWord1}) translateY(${(1 - spWord1) * 20}px)`,
              opacity: spWord1,
              fontSize: 54,
              fontWeight: 900,
              letterSpacing: 0.8,
              color: HTTP_COLORS.textPrimary,
              lineHeight: 1.15,
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
            }}
          >
            PERNAH MEMBUKA
          </h2>

          {/* Word 2: SEBUAH WEB APP? */}
          <h1
            style={{
              margin: 0,
              transform: `scale(${spWord2}) translateY(${(1 - spWord2) * 20}px)`,
              opacity: spWord2,
              fontSize: 58,
              fontWeight: 900,
              letterSpacing: 1.2,
              color: HTTP_COLORS.accentCyan,
              lineHeight: 1.15,
              textShadow: `0 0 35px rgba(56, 189, 248, 0.45)`,
            }}
          >
            SEBUAH WEB APP?
          </h1>
        </div>

        {/* 3. HERO CENTERPIECE: MODERN MACOS WEB APP BROWSER WINDOW */}
        <div
          style={{
            transform: `scale(${spBrowser}) translateY(${(1 - spBrowser) * 35}px)`,
            opacity: spBrowser,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 16, 32, 0.92)",
            border: "1.5px solid rgba(56, 189, 248, 0.3)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(56, 189, 248, 0.16)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 3A. BROWSER WINDOW TOP BAR */}
          <div
            style={{
              height: 58,
              padding: "0 20px",
              backgroundColor: "rgba(14, 23, 44, 0.95)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* macOS Window Controls */}
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

            {/* Address Bar Pill */}
            <div
              style={{
                width: 520,
                height: 38,
                borderRadius: 12,
                backgroundColor: "rgba(5, 10, 22, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 14px",
                fontFamily: FONT_MONO,
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <FaLock size={13} color={HTTP_COLORS.status2xx} />
                <span style={{ fontSize: 13, color: HTTP_COLORS.textMuted }}>
                  https://
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: HTTP_COLORS.textPrimary,
                  }}
                >
                  app.modern-cloud.io
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: HTTP_COLORS.accentCyan,
                  }}
                >
                  /dashboard
                </span>
              </div>
              <FaRedo
                size={12}
                color={HTTP_COLORS.accentCyan}
                style={{
                  transform: `rotate(${refreshRotation}deg)`,
                  opacity: 0.8,
                }}
              />
            </div>

            {/* Protocol Tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 700,
                  color: HTTP_COLORS.accentCyan,
                }}
              >
                PORT : 443
              </span>
            </div>
          </div>

          {/* 3B. WEB APPLICATION DASHBOARD INTERFACE */}
          <div
            style={{
              padding: "28px 32px 32px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              position: "relative",
            }}
          >
            {/* App Header Nav */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1.5px solid rgba(56, 189, 248, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)",
                  }}
                >
                  <FaGlobe size={18} color={HTTP_COLORS.accentCyan} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: HTTP_COLORS.textPrimary,
                      letterSpacing: 0.5,
                    }}
                  >
                    CLOUDFLEET OS
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      color: HTTP_COLORS.textMuted,
                    }}
                  >
                    app.modern-cloud.io &gt; client-portal
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: HTTP_COLORS.status2xx,
                    boxShadow: `0 0 10px ${HTTP_COLORS.status2xx}`,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1,
                    color: HTTP_COLORS.status2xx,
                    fontFamily: FONT_MONO,
                  }}
                >
                  HTTP/2 LIVE
                </span>
              </div>
            </div>

            {/* 3 Metric Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                position: "relative",
              }}
            >
              {/* Metric 1: Latency */}
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: 16,
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      color: HTTP_COLORS.textMuted,
                      letterSpacing: 1,
                    }}
                  >
                    LATENCY
                  </span>
                  <FaBolt size={14} color={HTTP_COLORS.accentCyan} />
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    color: HTTP_COLORS.accentCyan,
                  }}
                >
                  24ms
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: HTTP_COLORS.status2xx,
                    fontWeight: 600,
                  }}
                >
                  ● ULTRA FAST
                </span>

                {/* Shimmer Effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: 50,
                    background:
                      "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.15), transparent)",
                    transform: `translateX(${shimmerPos}%)`,
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Metric 2: Sessions */}
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: 16,
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      color: HTTP_COLORS.textMuted,
                      letterSpacing: 1,
                    }}
                  >
                    SESSIONS
                  </span>
                  <FaUsers size={14} color={HTTP_COLORS.accentIndigo} />
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    color: "#a5b4fc",
                  }}
                >
                  1,420
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: HTTP_COLORS.textSecondary,
                    fontWeight: 600,
                  }}
                >
                  ACTIVE CLIENTS
                </span>
              </div>

              {/* Metric 3: Protocol Mode */}
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: 16,
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      color: HTTP_COLORS.textMuted,
                      letterSpacing: 1,
                    }}
                  >
                    GATEWAY
                  </span>
                  <FaNetworkWired size={14} color={HTTP_COLORS.status2xx} />
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    color: HTTP_COLORS.status2xx,
                  }}
                >
                  HTTP/2
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: HTTP_COLORS.status2xx,
                    fontWeight: 600,
                  }}
                >
                  ● TLS 1.3 SECURE
                </span>
              </div>
            </div>

            {/* Simulated HTTP Packet Payload Chip */}
            <div
              style={{
                marginTop: 6,
                padding: "14px 20px",
                borderRadius: 14,
                backgroundColor: "rgba(5, 11, 24, 0.9)",
                border: "1px dashed rgba(56, 189, 248, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: FONT_MONO,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: 6,
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    color: HTTP_COLORS.accentCyan,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  REQUEST
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: HTTP_COLORS.textPrimary,
                    fontWeight: 600,
                  }}
                >
                  GET /api/v1/dashboard HTTP/2.0
                </span>
              </div>

              {/* Pulsing Gliding Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  opacity: packetOpacity,
                  transform: `translateY(${packetY}px)`,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: HTTP_COLORS.accentCyan,
                    fontWeight: 700,
                  }}
                >
                  SENDING...
                </span>
                <FaArrowRight size={12} color={HTTP_COLORS.accentCyan} />
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CONTEXT PILL: CLIENT INITIATION PIPELINE */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 36,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 18, 36, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.25)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaLaptop size={16} color={HTTP_COLORS.textSecondary} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: HTTP_COLORS.textPrimary,
                fontFamily: FONT_MONO,
              }}
            >
              CLIENT BROWSER
            </span>
          </div>

          <FaArrowRight size={13} color={HTTP_COLORS.accentCyan} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: HTTP_COLORS.accentCyan,
                boxShadow: `0 0 10px ${HTTP_COLORS.accentCyan}`,
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: HTTP_COLORS.accentCyan,
                fontFamily: FONT_MONO,
                letterSpacing: 1,
              }}
            >
              HTTP REQUEST
            </span>
          </div>

          <FaArrowRight size={13} color={HTTP_COLORS.accentCyan} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaServer size={16} color={HTTP_COLORS.textSecondary} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: HTTP_COLORS.textPrimary,
                fontFamily: FONT_MONO,
              }}
            >
              WEB SERVER
            </span>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};

