import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaExchangeAlt,
  FaLaptopCode,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 0 - 75):
  // Voiceover: "Apa itu rest API..?" (0.15s - 1.59s / Frames 5 - 48)
  // Silence / Buffer: Frames 48 - 75
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Word 1: "APA ITU"
  const spWord1 = spring({
    frame: Math.max(0, frame - 6),
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // Headline Word 2: "REST API?"
  const spWord2 = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // Architectural Diagram (Client-Server Bilateral Stage)
  const spDiagram = spring({
    frame: Math.max(0, frame - 16),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 22),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Handshake packet animation (looping from client to server)
  const packetProgress = interpolate(
    (frame * 3.5) % 100,
    [0, 100],
    [-180, 180]
  );

  // Exit transition fade & scale down (Frames 66 - 75)
  const exitOpacity = interpolate(frame, [66, 74], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [66, 74], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [66, 74], [0, -25], {
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
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: REST_COLORS.restEmerald,
              boxShadow: `0 0 10px ${REST_COLORS.restEmerald}`,
              display: "inline-block",
            }}
          />
          <FaNetworkWired size={15} color={REST_COLORS.restCyan} />
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: REST_COLORS.textPrimary,
              textTransform: "uppercase",
            }}
          >
            ARCHITECTURE // REST PROTOCOL
          </span>
        </div>

        {/* 2. HEADLINE: "APA ITU" */}
        <div
          style={{
            transform: `translateY(${(1 - spWord1) * 30}px) scale(${spWord1})`,
            opacity: spWord1,
            fontSize: 46,
            fontWeight: 800,
            letterSpacing: 4,
            color: REST_COLORS.textSecondary,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          APA ITU
        </div>

        {/* 3. HERO TYPOGRAPHY: "REST API?" */}
        <div
          style={{
            transform: `translateY(${(1 - spWord2) * 40}px) scale(${spWord2})`,
            opacity: spWord2,
            fontSize: 102,
            fontWeight: 950,
            lineHeight: 1.05,
            letterSpacing: 1.5,
            textAlign: "center",
            background: `linear-gradient(135deg, #ffffff 0%, ${REST_COLORS.restCyan} 55%, ${REST_COLORS.restEmerald} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 35px rgba(56, 189, 248, 0.45))",
            marginBottom: 44,
          }}
        >
          REST API?
        </div>

        {/* 4. BILATERAL CLIENT <-> SERVER HANDSHAKE STAGE */}
        <div
          style={{
            transform: `translateY(${(1 - spDiagram) * 40}px) scale(${spDiagram})`,
            opacity: spDiagram,
            width: "100%",
            maxWidth: 920,
            backgroundColor: REST_COLORS.cardBg,
            border: `1px solid ${REST_COLORS.cardBorder}`,
            borderRadius: 24,
            padding: "36px 32px",
            boxShadow:
              "0 24px 60px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            marginBottom: 36,
          }}
        >
          {/* Subtle Cyber Grid in Card */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }}
          />

          {/* Symmetrical Node Row */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left Node: CLIENT */}
            <div
              style={{
                width: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.28)",
                borderRadius: 18,
                padding: "24px 16px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
                }}
              >
                <FaLaptopCode size={32} color={REST_COLORS.restCyan} />
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: REST_COLORS.textPrimary,
                  letterSpacing: 1.2,
                  marginBottom: 4,
                }}
              >
                CLIENT APP
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: REST_COLORS.textSecondary,
                  letterSpacing: 0.5,
                }}
              >
                Web / Mobile / IoT
              </div>
            </div>

            {/* Center: DYNAMIC PROTOCOL BRIDGE & PACKET FLOW */}
            <div
              style={{
                flex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
              }}
            >
              {/* Connecting Data Rail */}
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Moving Packet Pulse */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: `translateX(${packetProgress}px)`,
                    width: 48,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, #38bdf8, #10b981, transparent)",
                    boxShadow: "0 0 12px #38bdf8",
                  }}
                />
              </div>

              {/* Protocol Badge Center Hub */}
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(3, 7, 18, 0.92)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.22)",
                }}
              >
                <FaExchangeAlt size={14} color={REST_COLORS.restEmerald} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    color: REST_COLORS.restEmerald,
                  }}
                >
                  HTTP PROTOCOL
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  color: REST_COLORS.textMuted,
                  marginTop: 6,
                }}
              >
                REQUEST ➔ RESPONSE
              </span>
            </div>

            {/* Right Node: SERVER */}
            <div
              style={{
                width: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(16, 185, 129, 0.28)",
                borderRadius: 18,
                padding: "24px 16px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                }}
              >
                <FaServer size={32} color={REST_COLORS.restEmerald} />
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: REST_COLORS.textPrimary,
                  letterSpacing: 1.2,
                  marginBottom: 4,
                }}
              >
                REST SERVER
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: REST_COLORS.textSecondary,
                  letterSpacing: 0.5,
                }}
              >
                Database / Resources
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM SUBTITLE PILL */}
        <div
          style={{
            transform: `translateY(${(1 - spPill) * 20}px) scale(${spPill})`,
            opacity: spPill,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1.6,
              color: REST_COLORS.textSecondary,
              textAlign: "center",
            }}
          >
            STANDAR ATURAN METHOD PERTUKARAN DATA
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

