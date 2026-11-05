import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaLightbulb,
  FaQuestionCircle,
  FaTerminal,
} from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { MULTI_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 454 - 555)
  // Line 8: "Nah, bagaimana cara mengatasinya?" (F454 - F505)
  // Fokus khusus pada pertanyaan kunci (tanpa konten berlebih)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F454 - F470)
  const spBadge = spring({
    frame: Math.max(0, frame - 454),
    fps,
    config: { damping: 14, stiffness: 115 },
  });

  // 2. Terminal Console Spring (F454 - F472)
  const spTerminal = spring({
    frame: Math.max(0, frame - 454),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 3. Question Glow Indicator Spring (F475 - F505)
  const spGlowIndicator = spring({
    frame: Math.max(0, frame - 475),
    fps,
    config: { damping: 14, stiffness: 115 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER EFFECT (Line 8: "Nah, bagaimana cara mengatasinya?")
  // ─────────────────────────────────────────────────────────────────────────────
  const fullText = "Nah, bagaimana cara mengatasinya?";
  const typewriterChars = Math.floor(
    interpolate(frame, [460, 498], [0, fullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.linear,
    })
  );
  const typedText = fullText.slice(0, typewriterChars);

  // Blinking terminal cursor (flashes every 6 frames)
  const showCursor = Math.floor(frame / 6) % 2 === 0;

  // Ambient oscillation
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor={MULTI_COLORS.gitlabOrange}>
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
        {/* ═════════════════════════════════════════════════════════════════
            1. TOP CATEGORY BADGE
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "9px 26px",
            borderRadius: 9999,
            backgroundColor: "rgba(30, 16, 12, 0.95)",
            border: "1.5px solid rgba(252, 109, 38, 0.7)",
            boxShadow: "0 0 25px rgba(252, 109, 38, 0.35)",
            marginBottom: 28,
          }}
        >
          <SiGitlab size={17} color="#fc6d26" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#fc6d26",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            PERTANYAAN KUNCI // THE TURNING POINT
          </span>
          <FaLightbulb size={15} color="#f59e0b" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. HERO TYPEWRITER CONSOLE CARD (SOLE HERO CENTERPIECE)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 20}px)`,
            opacity: spTerminal,
            width: 960,
            borderRadius: 28,
            backgroundColor: "rgba(10, 18, 36, 0.96)",
            border: "2px solid rgba(56, 189, 248, 0.65)",
            boxShadow:
              "0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.3)",
            padding: "36px 40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* macOS Window Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#ef4444" }} />
              <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
              <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#10b981" }} />
              <span style={{ fontSize: 14, fontFamily: FONT_MONO, color: "#94a3b8", marginLeft: 10 }}>
                devops-query.sh
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#38bdf8",
              }}
            >
              <FaTerminal size={12} color="#38bdf8" />
              <span>TERMINAL PROMPT</span>
            </div>
          </div>

          {/* Subtitle / Shell Command */}
          <div
            style={{
              fontSize: 15,
              fontFamily: FONT_MONO,
              color: "#38bdf8",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: "#fc6d26", fontWeight: 900 }}>$</span>
            <span>devops --solve-manual-bottleneck</span>
          </div>

          {/* The Hero Typewriter Text (Line 8) */}
          <div
            style={{
              minHeight: 120,
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.25,
                letterSpacing: -1,
                fontFamily: FONT_SANS,
              }}
            >
              <span style={{ color: "#38bdf8", marginRight: 12 }}>&gt;</span>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #f8fafc 0%, #38bdf8 50%, #fc6d26 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.65))",
                }}
              >
                {typedText}
              </span>
              {/* Blinking Cursor */}
              <span
                style={{
                  color: "#38bdf8",
                  opacity: showCursor ? 1 : 0,
                  marginLeft: 6,
                  fontWeight: 400,
                }}
              >
                |
              </span>
            </h1>
          </div>

          {/* Bottom Glowing Question Indicator inside the Terminal */}
          <div
            style={{
              transform: `scale(${spGlowIndicator})`,
              opacity: spGlowIndicator,
              paddingTop: 16,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaQuestionCircle size={18} color="#fc6d26" />
              <span style={{ fontSize: 14, fontFamily: FONT_MONO, color: "#94a3b8", fontWeight: 800 }}>
                MENCARI SOLUSI OTOMATISASI MODERN...
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                backgroundColor: "rgba(252, 109, 38, 0.15)",
                border: "1px solid rgba(252, 109, 38, 0.5)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#fc6d26",
                boxShadow: `0 0 ${12 + pulseWave * 12}px rgba(252, 109, 38, 0.35)`,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#fc6d26",
                  boxShadow: "0 0 8px #fc6d26",
                }}
              />
              AUTOMATED PIPELINE READY
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
