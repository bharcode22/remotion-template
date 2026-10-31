import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FaCheckCircle, FaHdd, FaServer } from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 292 - 380):
  // Naskah Line 5: "Jawabannya adalah storage server." (Speech: Frames 294 - 350)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 292),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Center Revelation Card Spring
  const spCard = spring({
    frame: Math.max(0, frame - 294),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Server Graphic Spring
  const spServer = spring({
    frame: Math.max(0, frame - 300),
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  // Title Impact Spring
  const spTitle = spring({
    frame: Math.max(0, frame - 304),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 315),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Animated LED blinks for server racks
  const ledBlink1 = frame % 10 < 6;
  const ledBlink2 = (frame + 4) % 12 < 7;
  const ledBlink3 = (frame + 8) % 14 < 8;

  return (
    <SceneContainer accentColor={STORAGE_COLORS.accentEmerald}>
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
        {/* 1. TOP OFFICIAL ANSWER BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 42, 0.92)",
            border: "1.5px solid rgba(16, 185, 129, 0.45)",
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: STORAGE_COLORS.accentEmerald,
              boxShadow: `0 0 10px ${STORAGE_COLORS.accentEmerald}`,
              display: "inline-block",
            }}
          />
          <FaCheckCircle size={15} color={STORAGE_COLORS.accentEmerald} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: STORAGE_COLORS.accentEmerald,
              textTransform: "uppercase",
            }}
          >
            THE OFFICIAL ANSWER // JAWABAN RESMI
          </span>
        </div>

        {/* 2. CENTER REVELATION HERO CARD */}
        <div
          style={{
            transform: `scale(${spCard}) translateY(${(1 - spCard) * 35}px)`,
            opacity: spCard,
            width: 880,
            padding: "50px 48px",
            borderRadius: 32,
            backgroundColor: STORAGE_COLORS.bgSurface,
            border: "2px solid rgba(56, 189, 248, 0.35)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(16, 185, 129, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Top Neon Light Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: 3,
              background:
                "linear-gradient(90deg, transparent, #10b981 30%, #38bdf8 70%, transparent)",
            }}
          />

          {/* High-Tech Server Rack Enclosure */}
          <div
            style={{
              transform: `scale(${spServer})`,
              width: 320,
              padding: "20px 24px",
              borderRadius: 20,
              backgroundColor: "rgba(14, 23, 44, 0.95)",
              border: "1.8px solid rgba(56, 189, 248, 0.4)",
              boxShadow:
                "0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 25px rgba(56, 189, 248, 0.15)",
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Server Rack Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 8,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaServer size={18} color={STORAGE_COLORS.accentCyan} />
                <span
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.textSecondary,
                  }}
                >
                  STORAGE NODE #01
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: STORAGE_COLORS.accentEmerald,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  padding: "2px 8px",
                  borderRadius: 6,
                }}
              >
                ONLINE
              </span>
            </div>

            {/* Disk Unit 1 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: 10,
                backgroundColor: "rgba(8, 14, 28, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaHdd size={14} color={STORAGE_COLORS.accentCyan} />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: STORAGE_COLORS.textPrimary,
                  }}
                >
                  NVMe Array A
                </span>
              </div>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: ledBlink1
                    ? STORAGE_COLORS.accentEmerald
                    : "#065f46",
                  boxShadow: ledBlink1
                    ? `0 0 8px ${STORAGE_COLORS.accentEmerald}`
                    : "none",
                }}
              />
            </div>

            {/* Disk Unit 2 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: 10,
                backgroundColor: "rgba(8, 14, 28, 0.8)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaHdd size={14} color={STORAGE_COLORS.accentPurple} />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: STORAGE_COLORS.textPrimary,
                  }}
                >
                  Object Block B
                </span>
              </div>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: ledBlink2
                    ? STORAGE_COLORS.accentCyan
                    : "#0369a1",
                  boxShadow: ledBlink2
                    ? `0 0 8px ${STORAGE_COLORS.accentCyan}`
                    : "none",
                }}
              />
            </div>

            {/* Disk Unit 3 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: 10,
                backgroundColor: "rgba(8, 14, 28, 0.8)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaHdd size={14} color={STORAGE_COLORS.accentAmber} />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: STORAGE_COLORS.textPrimary,
                  }}
                >
                  Cold Archive C
                </span>
              </div>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: ledBlink3
                    ? STORAGE_COLORS.accentAmber
                    : "#92400e",
                  boxShadow: ledBlink3
                    ? `0 0 8px ${STORAGE_COLORS.accentAmber}`
                    : "none",
                }}
              />
            </div>
          </div>

          {/* Revelation Intro Subtitle */}
          <div
            style={{
              fontSize: 26,
              fontFamily: FONT_MONO,
              fontWeight: 800,
              letterSpacing: 4,
              color: STORAGE_COLORS.accentCyan,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            JAWABANNYA ADALAH:
          </div>

          {/* Hero Revealed Title (62px Grand Impact) */}
          <h1
            style={{
              transform: `scale(${spTitle})`,
              fontSize: 62,
              fontWeight: 900,
              margin: 0,
              marginBottom: 20,
              lineHeight: 1.15,
              letterSpacing: -1,
              background:
                "linear-gradient(135deg, #38bdf8 0%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 35px rgba(56, 189, 248, 0.4))",
            }}
          >
            STORAGE SERVER
          </h1>

          {/* Subtitle Explainer */}
          <p
            style={{
              fontSize: 24,
              color: STORAGE_COLORS.textSecondary,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            Infrastruktur komputer khusus yang didesain untuk menyimpan, mengelola, dan mendistribusikan data secara aman.
          </p>
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
            border: "1.5px solid rgba(16, 185, 129, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: STORAGE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            CORE INFRASTRUCTURE // BACKBONE DATA APLIKASI MODERN
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

