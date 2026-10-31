import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaArrowDown,
  FaCheckCircle,
  FaCode,
  FaCube,
  FaShieldAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 300 - 428):
  // Voiceover: "angka-angka tersebut disebut HTTP Status Code." (Frames 311 - 401)
  // Silence / Transition buffer: Frames 401 - 428
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 302),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Intro Subtitle Spring: "ANGKA-ANGKA TERSEBUT DISEBUT"
  const spSub = spring({
    frame: Math.max(0, frame - 308),
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // Giant Title Spring: "HTTP STATUS CODE" (Slams down as voice says "HTTP Status Code" at Frame 355)
  const spTitle = spring({
    frame: Math.max(0, frame - 350),
    fps,
    config: { damping: 12, stiffness: 110, mass: 0.9 },
  });

  // Central Card Convergence Spring
  const spCard = spring({
    frame: Math.max(0, frame - 325),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 365),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Floating Trio Badges Animation
  const trioScale = spring({
    frame: Math.max(0, frame - 314),
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  // Exit Transition (Frames 412 - 420, dimajukan agar Scene 4 di Frame 429 sudah masuk kokoh)
  const exitOpacity = interpolate(frame, [412, 420], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [412, 420], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [412, 420], [0, -25], {
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
        {/* 1. TOP PROTOCOL SPEC BADGE */}
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
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: HTTP_COLORS.accentCyan,
              boxShadow: `0 0 10px ${HTTP_COLORS.accentCyan}`,
              display: "inline-block",
            }}
          />
          <FaCode size={15} color={HTTP_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: HTTP_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            OFFICIAL SPECIFICATION // RFC 9110
          </span>
        </div>

        {/* 2. PROMINENT TITLE HEADLINE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 32,
            gap: 8,
          }}
        >
          {/* Subtitle: ANGKA-ANGKA TERSEBUT DISEBUT */}
          <h2
            style={{
              margin: 0,
              transform: `scale(${spSub}) translateY(${(1 - spSub) * 15}px)`,
              opacity: spSub,
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: 1,
              color: HTTP_COLORS.textSecondary,
              lineHeight: 1.15,
              textShadow: "0 2px 15px rgba(0, 0, 0, 0.6)",
            }}
          >
            ANGKA-ANGKA TERSEBUT DISEBUT:
          </h2>

          {/* Giant Hook Title: HTTP STATUS CODE */}
          <h1
            style={{
              margin: 0,
              transform: `scale(${spTitle}) translateY(${(1 - spTitle) * 25}px)`,
              opacity: spTitle,
              fontSize: 66,
              fontWeight: 900,
              letterSpacing: 1.5,
              color: HTTP_COLORS.accentCyan,
              lineHeight: 1.15,
              textShadow: "0 0 40px rgba(56, 189, 248, 0.5), 0 0 80px rgba(56, 189, 248, 0.25)",
            }}
          >
            HTTP STATUS CODE
          </h1>
        </div>

        {/* 3. HERO CENTERPIECE: TRIO NUMBERS CONVERGENCE STAGE */}
        <div
          style={{
            transform: `scale(${spCard}) translateY(${(1 - spCard) * 30}px)`,
            opacity: spCard,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 18, 36, 0.92)",
            border: "1.5px solid rgba(56, 189, 248, 0.3)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(56, 189, 248, 0.15)",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            boxSizing: "border-box",
          }}
        >
          {/* Floating Trio Numbers Pills */}
          <div
            style={{
              transform: `scale(${trioScale})`,
              opacity: trioScale,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              width: "100%",
            }}
          >
            {/* Pill 403 */}
            <div
              style={{
                flex: 1,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: "1.5px solid rgba(245, 158, 11, 0.45)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 34,
                  fontWeight: 900,
                  color: HTTP_COLORS.status4xx,
                }}
              >
                403
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  color: HTTP_COLORS.textMuted,
                  letterSpacing: 1,
                }}
              >
                FORBIDDEN
              </span>
            </div>

            {/* Pill 404 */}
            <div
              style={{
                flex: 1,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(244, 63, 94, 0.12)",
                border: "1.5px solid rgba(244, 63, 94, 0.45)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#f43f5e",
                }}
              >
                404
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  color: HTTP_COLORS.textMuted,
                  letterSpacing: 1,
                }}
              >
                NOT FOUND
              </span>
            </div>

            {/* Pill 500 */}
            <div
              style={{
                flex: 1,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "1.5px solid rgba(239, 68, 68, 0.45)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 34,
                  fontWeight: 900,
                  color: HTTP_COLORS.status5xx,
                }}
              >
                500
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  color: HTTP_COLORS.textMuted,
                  letterSpacing: 1,
                }}
              >
                SERVER ERROR
              </span>
            </div>
          </div>

          {/* Convergence Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: HTTP_COLORS.accentCyan,
            }}
          >
            <FaArrowDown size={18} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 1.5,
                fontFamily: FONT_MONO,
              }}
            >
              STANDARISASI RESPON PROTOKOL
            </span>
            <FaArrowDown size={18} />
          </div>

          {/* Core Definition Banner */}
          <div
            style={{
              width: "100%",
              padding: "20px 24px",
              borderRadius: 16,
              backgroundColor: "rgba(5, 12, 26, 0.9)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaShieldAlt size={20} color={HTTP_COLORS.accentCyan} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: HTTP_COLORS.textPrimary,
                  }}
                >
                  Universal Standard Response Code
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: HTTP_COLORS.textSecondary,
                    fontFamily: FONT_MONO,
                  }}
                >
                  Protokol standar IETF / RFC 9110 HTTP Semantics
                </span>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
              }}
            >
              <FaCheckCircle size={14} color={HTTP_COLORS.status2xx} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: HTTP_COLORS.status2xx,
                  fontFamily: FONT_MONO,
                }}
              >
                STANDAR RESMI
              </span>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 32,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 18, 36, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.25)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCube size={15} color={HTTP_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: HTTP_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1,
            }}
          >
            HTTP STATUS CODES: 3-DIGIT INTEGER IDENTIFIERS
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

