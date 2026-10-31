import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FaCloudUploadAlt, FaQuestionCircle } from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 0 - 54):
  // Naskah Line 1: "Pernahkah kalian bertanya," (Audio speech: Frames 6 - 46)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Center Question Card Spring
  const spCard = spring({
    frame: Math.max(0, frame - 3),
    fps,
    config: { damping: 15, stiffness: 90, mass: 1 },
  });

  // Icon Beacon Pulse Spring
  const spIcon = spring({
    frame: Math.max(0, frame - 6),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Pulsing Sonar Ring Effect
  const ringScale1 = 1 + ((frame * 1.5) % 45) / 30;
  const ringOpacity1 = Math.max(0, 0.7 - ((frame * 1.5) % 45) / 45);

  const ringScale2 = 1 + (((frame + 20) * 1.5) % 45) / 30;
  const ringOpacity2 = Math.max(0, 0.7 - (((frame + 20) * 1.5) % 45) / 45);

  return (
    <SceneContainer accentColor={STORAGE_COLORS.accentCyan}>
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
        {/* 1. TOP QUESTION BADGE */}
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
            border: "1.5px solid rgba(56, 189, 248, 0.4)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: STORAGE_COLORS.accentCyan,
              boxShadow: `0 0 10px ${STORAGE_COLORS.accentCyan}`,
              display: "inline-block",
            }}
          />
          <FaQuestionCircle size={15} color={STORAGE_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: STORAGE_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            QUESTION HOOK // PEMIKIRAN DASAR
          </span>
        </div>

        {/* 2. CENTER QUESTION CARD */}
        <div
          style={{
            transform: `scale(${spCard}) translateY(${(1 - spCard) * 35}px)`,
            opacity: spCard,
            width: 880,
            padding: "54px 48px",
            borderRadius: 32,
            backgroundColor: STORAGE_COLORS.bgSurface,
            border: `2px solid ${STORAGE_COLORS.cardBorder}`,
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(56, 189, 248, 0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Subtle Top Edge Highlight Glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            }}
          />

          {/* Central Beacon with Sonar Rings */}
          <div
            style={{
              position: "relative",
              width: 110,
              height: 110,
              marginBottom: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Sonar Ring 1 */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #38bdf8",
                transform: `scale(${ringScale1})`,
                opacity: ringOpacity1,
              }}
            />
            {/* Sonar Ring 2 */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #a855f7",
                transform: `scale(${ringScale2})`,
                opacity: ringOpacity2,
              }}
            />

            {/* Glowing Icon Hub */}
            <div
              style={{
                transform: `scale(${spIcon})`,
                width: 96,
                height: 96,
                borderRadius: "50%",
                backgroundColor: "rgba(14, 25, 52, 0.95)",
                border: "2px solid rgba(56, 189, 248, 0.6)",
                boxShadow:
                  "0 0 35px rgba(56, 189, 248, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCloudUploadAlt size={48} color={STORAGE_COLORS.accentCyan} />
            </div>
          </div>

          {/* Bold Inquisitive Hook Title (46px Mobile-Friendly) */}
          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: STORAGE_COLORS.textPrimary,
              margin: 0,
              marginBottom: 18,
              lineHeight: 1.25,
              letterSpacing: -0.5,
              textShadow: "0 0 30px rgba(56, 189, 248, 0.3)",
            }}
          >
            Pernahkah kalian bertanya?
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
            Sebuah misteri di balik layar setiap aplikasi yang kita gunakan sehari-hari.
          </p>
        </div>

        {/* 3. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 36,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 36, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.3)",
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
            DATA STORAGE // INFRASTRUKTUR SISTEM MODERN
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

