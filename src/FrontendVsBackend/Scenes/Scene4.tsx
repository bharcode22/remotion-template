import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaLock,
  FaServer,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TYPEWRITER (Frames 536 - 645)
  // Naskah Line 12:
  // "Sedangkan Backend adalah bagian yang bekerja di balik layar."
  // Speech duration: Frames 540 - 618
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 536),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Terminal Window Spring
  const spTerminal = spring({
    frame: Math.max(0, frame - 538),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Staggered Feature Badges Springs (Pop in sync with the spoken words)
  const spBadge1 = spring({
    frame: Math.max(0, frame - 552),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  const spBadge2 = spring({
    frame: Math.max(0, frame - 582),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  const spBadge3 = spring({
    frame: Math.max(0, frame - 608),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  // Concept Diagram Spring
  const spDiagram = spring({
    frame: Math.max(0, frame - 565),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Bottom Context Pill Spring
  const spBottomPill = spring({
    frame: Math.max(0, frame - 616),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER INTERPOLATION (Large Mobile-Friendly Monospace 34px)
  // Text: "Sedangkan Backend adalah bagian yang bekerja di balik layar."
  // ─────────────────────────────────────────────────────────────────────────────
  const fullText =
    "Sedangkan Backend adalah bagian yang bekerja di balik layar.";

  const typedCharsCount = Math.floor(
    interpolate(frame, [540, 616], [0, fullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const currentTypedText = fullText.slice(0, typedCharsCount);
  const cursorBlink = frame % 14 < 7;

  return (
    <SceneContainer accentColor={FE_VS_BE_COLORS.bePurple}>
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
        {/* 1. TOP BADGE: BACKEND DEFINITION */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(16, 10, 36, 0.92)",
            border: "1.5px solid rgba(168, 85, 247, 0.5)",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: FE_VS_BE_COLORS.bePurple,
              boxShadow: `0 0 10px ${FE_VS_BE_COLORS.bePurple}`,
              display: "inline-block",
            }}
          />
          <FaServer size={15} color={FE_VS_BE_COLORS.bePurple} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: FE_VS_BE_COLORS.bePurple,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            BAGIAN 02 // PENGENALAN BACKEND
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
            border: "1.8px solid rgba(168, 85, 247, 0.45)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(168, 85, 247, 0.2)",
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
              backgroundColor: "rgba(18, 12, 38, 0.95)",
              borderBottom: "1px solid rgba(168, 85, 247, 0.25)",
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
              <FaTerminal size={12} color={FE_VS_BE_COLORS.bePurple} />
              bash — backend-core.sh
            </div>

            {/* Shell Badge */}
            <div
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: FE_VS_BE_COLORS.bePurple,
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                padding: "3px 8px",
                borderRadius: 6,
                border: "1px solid rgba(168, 85, 247, 0.35)",
              }}
            >
              PORT:8080 // SECURE
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
              <span style={{ color: FE_VS_BE_COLORS.bePurple }}>developer@backend-cluster</span>
              <span style={{ color: FE_VS_BE_COLORS.textMuted }}>:</span>
              <span style={{ color: FE_VS_BE_COLORS.feCyan }}>~/server</span>
              <span style={{ color: FE_VS_BE_COLORS.textSecondary }}>$</span>
              <span style={{ color: "#f8fafc" }}>cat backend.info</span>
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
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: FE_VS_BE_COLORS.bePurple,
              }}
            >
              <span>OUTPUT // DEFINISI BACKEND</span>
            </div>

            {/* ⌨️ TYPEWRITER TEXT CONTENT (Line 12) */}
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
                    backgroundColor: FE_VS_BE_COLORS.bePurple,
                    marginLeft: 4,
                    verticalAlign: "middle",
                    boxShadow: `0 0 12px ${FE_VS_BE_COLORS.bePurple}`,
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
              {/* Badge 1: Backend Engine */}
              <div
                style={{
                  transform: `scale(${spBadge1})`,
                  opacity: spBadge1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(168, 85, 247, 0.14)",
                  border: "1px solid rgba(168, 85, 247, 0.45)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: FE_VS_BE_COLORS.bePurple,
                }}
              >
                <FaServer size={14} color={FE_VS_BE_COLORS.bePurple} />
                Bagian Server (Backend Engine)
              </div>

              {/* Badge 2: Behind The Scenes */}
              <div
                style={{
                  transform: `scale(${spBadge2})`,
                  opacity: spBadge2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: FE_VS_BE_COLORS.accentAmber,
                }}
              >
                <FaLock size={14} color={FE_VS_BE_COLORS.accentAmber} />
                Bekerja di Balik Layar
              </div>

              {/* Badge 3: Data & Logic Processor */}
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
                <FaDatabase size={14} color={FE_VS_BE_COLORS.beEmerald} />
                Database & Logika Sistem
              </div>
            </div>
          </div>
        </div>

        {/* 3. VISUAL ARCHITECTURE CONCEPT DIAGRAM ("DI BALIK LAYAR") */}
        <div
          style={{
            transform: `scale(${spDiagram}) translateY(${(1 - spDiagram) * 25}px)`,
            opacity: spDiagram,
            width: 920,
            marginTop: 26,
            padding: "24px 32px",
            borderRadius: 22,
            backgroundColor: "rgba(14, 10, 32, 0.9)",
            border: "1.5px solid rgba(168, 85, 247, 0.4)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Client Interface Node (Dimmed / Front) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              opacity: 0.75,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCogs size={26} color={FE_VS_BE_COLORS.feCyan} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: FE_VS_BE_COLORS.textPrimary }}>
                Frontend View
              </div>
              <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: FE_VS_BE_COLORS.feCyan }}>
                Tampak di Layar
              </div>
            </div>
          </div>

          {/* Secure Firewall Barrier Divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 9999,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FaShieldAlt size={12} color={FE_VS_BE_COLORS.accentAmber} />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.accentAmber,
                  letterSpacing: 1.2,
                }}
              >
                BOUNDARY
              </span>
            </div>
            <div
              style={{
                fontSize: 18,
                color: FE_VS_BE_COLORS.bePurple,
                fontWeight: 900,
              }}
            >
              ───▶ [ REST / API ] ───▶
            </div>
          </div>

          {/* Backend Behind The Scenes Node (Highlighted) */}
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
                backgroundColor: "rgba(168, 85, 247, 0.22)",
                border: "1.5px solid rgba(168, 85, 247, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.35)",
              }}
            >
              <FaServer size={26} color={FE_VS_BE_COLORS.bePurple} />
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: FE_VS_BE_COLORS.textPrimary }}>
                Backend System
              </div>
              <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: FE_VS_BE_COLORS.bePurple }}>
                🔒 Di Balik Layar
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
            backgroundColor: "rgba(16, 10, 36, 0.9)",
            border: "1.5px solid rgba(168, 85, 247, 0.4)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCheckCircle size={15} color={FE_VS_BE_COLORS.bePurple} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: FE_VS_BE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            <span style={{ color: FE_VS_BE_COLORS.bePurple }}>SERVER-SIDE</span> // JANTUNG LOGIKA & PEMROSESAN DATA
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

