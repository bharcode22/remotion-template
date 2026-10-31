import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaDesktop,
  FaHandPointer,
  FaTerminal,
  FaUserCheck,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TYPEWRITER (Frames 224 - 350)
  // Naskah Line 6:
  // "Frontend adalah bagian aplikasi yang berinteraksi langsung dengan pengguna."
  // Speech duration: Frames 225 - 321
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 224),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Terminal Window Spring
  const spTerminal = spring({
    frame: Math.max(0, frame - 226),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Highlight Badges Springs (Pop in sync with the spoken words)
  const spBadge1 = spring({
    frame: Math.max(0, frame - 250),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  const spBadge2 = spring({
    frame: Math.max(0, frame - 280),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  const spBadge3 = spring({
    frame: Math.max(0, frame - 308),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  // Diagram Card Spring
  const spDiagram = spring({
    frame: Math.max(0, frame - 265),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Bottom Context Pill Spring
  const spBottomPill = spring({
    frame: Math.max(0, frame - 315),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER INTERPOLATION (Large Mobile-Friendly Monospace 34px)
  // Text: "Frontend adalah bagian aplikasi yang berinteraksi langsung dengan pengguna."
  // ─────────────────────────────────────────────────────────────────────────────
  const fullText =
    "Frontend adalah bagian aplikasi yang berinteraksi langsung dengan pengguna.";

  const typedCharsCount = Math.floor(
    interpolate(frame, [226, 318], [0, fullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const currentTypedText = fullText.slice(0, typedCharsCount);
  const cursorBlink = frame % 14 < 7;

  return (
    <SceneContainer accentColor={FE_VS_BE_COLORS.feCyan}>
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
        {/* 1. TOP BADGE: FRONTEND DEFINITION */}
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
            border: "1.5px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: FE_VS_BE_COLORS.feCyan,
              boxShadow: `0 0 10px ${FE_VS_BE_COLORS.feCyan}`,
              display: "inline-block",
            }}
          />
          <FaDesktop size={15} color={FE_VS_BE_COLORS.feCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: FE_VS_BE_COLORS.feCyan,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            BAGIAN 01 // PENGENALAN FRONTEND
          </span>
        </div>

        {/* 2. MACOS DEV TERMINAL WITH TYPEWRITER EFFECT */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 35}px)`,
            opacity: spTerminal,
            width: 920,
            borderRadius: 24,
            backgroundColor: "rgba(8, 14, 28, 0.95)",
            border: "1.8px solid rgba(56, 189, 248, 0.4)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              height: 54,
              padding: "0 20px",
              backgroundColor: "rgba(14, 23, 44, 0.95)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* macOS Window Controls */}
            <div style={{ display: "flex", gap: 8 }}>
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
            </div>

            {/* Window Title */}
            <div
              style={{
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 700,
                color: FE_VS_BE_COLORS.textSecondary,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaTerminal size={12} color={FE_VS_BE_COLORS.feCyan} />
              bash — frontend-definition.sh
            </div>

            {/* Shell Badge */}
            <div
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: FE_VS_BE_COLORS.feCyan,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                padding: "3px 8px",
                borderRadius: 6,
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              ZSH // UTF-8
            </div>
          </div>

          {/* Terminal Content Body */}
          <div
            style={{
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Shell Command Prompt Line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: FONT_MONO,
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              <span style={{ color: FE_VS_BE_COLORS.feCyan }}>developer@system</span>
              <span style={{ color: FE_VS_BE_COLORS.textMuted }}>:</span>
              <span style={{ color: "#a855f7" }}>~/architecture</span>
              <span style={{ color: FE_VS_BE_COLORS.textSecondary }}>$</span>
              <span style={{ color: "#f8fafc" }}>cat frontend.info</span>
            </div>

            {/* Response Category Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                alignSelf: "flex-start",
                padding: "4px 12px",
                borderRadius: 6,
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: FE_VS_BE_COLORS.feCyan,
              }}
            >
              <span>OUTPUT // DEFINISI FRONTEND</span>
            </div>

            {/* ⌨️ TYPEWRITER TEXT CONTENT (Line 6) */}
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                lineHeight: 1.55,
                fontWeight: 700,
                color: FE_VS_BE_COLORS.textPrimary,
                minHeight: 110,
                letterSpacing: -0.2,
              }}
            >
              {currentTypedText}
              {cursorBlink && (
                <span
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 32,
                    backgroundColor: FE_VS_BE_COLORS.feCyan,
                    marginLeft: 4,
                    verticalAlign: "middle",
                    boxShadow: `0 0 12px ${FE_VS_BE_COLORS.feCyan}`,
                  }}
                />
              )}
            </div>

            {/* Staggered Visual Tags */}
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 6,
                flexWrap: "wrap",
              }}
            >
              {/* Badge 1: Client Layer */}
              <div
                style={{
                  transform: `scale(${spBadge1})`,
                  opacity: spBadge1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: FE_VS_BE_COLORS.feCyan,
                }}
              >
                <FaDesktop size={14} color={FE_VS_BE_COLORS.feCyan} />
                Bagian Aplikasi (Client Side)
              </div>

              {/* Badge 2: Direct Interaction */}
              <div
                style={{
                  transform: `scale(${spBadge2})`,
                  opacity: spBadge2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: FE_VS_BE_COLORS.bePurple,
                }}
              >
                <FaHandPointer size={14} color={FE_VS_BE_COLORS.bePurple} />
                Interaksi Langsung
              </div>

              {/* Badge 3: User Experience */}
              <div
                style={{
                  transform: `scale(${spBadge3})`,
                  opacity: spBadge3,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: FE_VS_BE_COLORS.beEmerald,
                }}
              >
                <FaUserCheck size={14} color={FE_VS_BE_COLORS.beEmerald} />
                Pengguna (End-User)
              </div>
            </div>
          </div>
        </div>

        {/* 3. VISUAL INTERACTION FLOW DIAGRAM */}
        <div
          style={{
            transform: `scale(${spDiagram}) translateY(${(1 - spDiagram) * 25}px)`,
            opacity: spDiagram,
            width: 920,
            marginTop: 26,
            padding: "24px 32px",
            borderRadius: 22,
            backgroundColor: "rgba(10, 20, 42, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* User Side Node */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(56, 189, 248, 0.18)",
                border: "1.5px solid rgba(56, 189, 248, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.25)",
              }}
            >
              <FaUserCheck size={26} color={FE_VS_BE_COLORS.feCyan} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: FE_VS_BE_COLORS.textPrimary }}>
                User / Pengguna
              </div>
              <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: FE_VS_BE_COLORS.textSecondary }}>
                Melihat, mengklik, mengetik
              </div>
            </div>
          </div>

          {/* Animated Interaction Arrow */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: FE_VS_BE_COLORS.feCyan,
                letterSpacing: 1.5,
              }}
            >
              LANGSUNG BERINTERAKSI
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 20,
                color: FE_VS_BE_COLORS.feCyan,
                fontWeight: 900,
              }}
            >
              <span>────</span>
              <FaHandPointer size={16} />
              <span>────▶</span>
            </div>
          </div>

          {/* Frontend Application Screen Node */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(168, 85, 247, 0.18)",
                border: "1.5px solid rgba(168, 85, 247, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.25)",
              }}
            >
              <FaDesktop size={26} color={FE_VS_BE_COLORS.bePurple} />
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: FE_VS_BE_COLORS.textPrimary }}>
                Frontend Layer
              </div>
              <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: FE_VS_BE_COLORS.bePurple }}>
                Antarmuka Visual Layar
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 20}px)`,
            opacity: spBottomPill,
            marginTop: 26,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 18, 36, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCheckCircle size={15} color={FE_VS_BE_COLORS.feCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: FE_VS_BE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            <span style={{ color: FE_VS_BE_COLORS.feCyan }}>CLIENT-SIDE</span> // TAMPILAN INTERAKTIF PENGGUNA
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
