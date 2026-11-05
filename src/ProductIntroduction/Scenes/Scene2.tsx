import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FaCodeBranch, FaFolder, FaTerminal } from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Scene 2: Frames 100 - 200)
  // Line 2: "kenalan dulu dengan produk yang aku kembangkan." (Voice: F101 - F166)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Entrance Spring for Terminal Window (F100+)
  const spWindow = spring({
    frame: Math.max(0, frame - 100),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 2. Entrance Spring for Top Badge (F100+)
  const spBadge = spring({
    frame: Math.max(0, frame - 100),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // 3. Command Line & Prompt Spring (F101+)
  const spPrompt = spring({
    frame: Math.max(0, frame - 101),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // 4. Main Typewriter Effect for Line 2 (Voice: F102 - F166)
  const fullText = "kenalan dulu dengan produk yang aku kembangkan.";
  const charProgress = interpolate(frame, [102, 166], [0, fullText.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.linear,
  });
  const visibleChars = Math.floor(charProgress);
  const typedText = fullText.slice(0, visibleChars);

  // Blinking cursor (toggles every 7 frames)
  const cursorBlink = Math.floor(frame / 7) % 2 === 0;

  // Prompt Ready Spring (F168+)
  const spCompletion = spring({
    frame: Math.max(0, frame - 168),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Scene 2 Exit Transition (F190 - F200)
  const exitProgress = interpolate(frame, [190, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;
  const sceneScale = 1 - exitProgress * 0.05;
  const sceneTranslateY = -exitProgress * 30;

  return (
    <SceneContainer
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(${sceneTranslateY}px)`,
      }}
    >
      {/* 1. Top Cybernetic Mode Badge */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 28px",
          borderRadius: 9999,
          backgroundColor: "rgba(6, 18, 30, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.cyberCyan}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.cyanGlow}`,
          marginBottom: 36,
        }}
      >
        <FaTerminal size={15} color={INTRO_COLORS.cyberCyan} />
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: INTRO_COLORS.cyberCyan,
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          DEVELOPER CONSOLE // TERMINAL
        </span>
      </div>

      {/* 2. Main High-Tech Terminal Window (Optimized for Mobile Readability) */}
      <div
        style={{
          width: 960,
          borderRadius: 24,
          backgroundColor: "rgba(9, 14, 26, 0.96)",
          border: `2px solid rgba(56, 189, 248, 0.35)`,
          boxShadow: `0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(6, 182, 212, 0.18)`,
          overflow: "hidden",
          transform: `scale(${spWindow}) translateY(${(1 - spWindow) * 35}px)`,
          opacity: spWindow,
        }}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            height: 64,
            padding: "0 24px",
            backgroundColor: "rgba(15, 23, 42, 0.98)",
            borderBottom: "1.5px solid rgba(56, 189, 248, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* macOS Traffic Lights */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                boxShadow: "0 0 8px rgba(239, 68, 68, 0.5)",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
                boxShadow: "0 0 8px rgba(245, 158, 11, 0.5)",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
              }}
            />
          </div>

          {/* Terminal Title Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: FONT_MONO,
              fontSize: 16,
              color: "#94a3b8",
            }}
          >
            <FaFolder size={15} color="#38bdf8" />
            <span style={{ color: "#e2e8f0", fontWeight: 600 }}>
              developer@workstation
            </span>
            <span style={{ color: "#64748b" }}>:</span>
            <span style={{ color: "#38bdf8" }}>~/project-intro</span>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "3px 8px",
                borderRadius: 6,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                fontSize: 13,
                color: "#38bdf8",
              }}
            >
              <FaCodeBranch size={11} />
              <span>main</span>
            </div>
          </div>

          {/* Connection Status Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 12px",
              borderRadius: 9999,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 10px #10b981",
              }}
            />
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                fontWeight: 700,
                color: "#10b981",
                letterSpacing: 1,
              }}
            >
              TTY1 READY
            </span>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div
          style={{
            padding: "48px 42px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            boxSizing: "border-box",
          }}
        >
          {/* CLI Prompt Line */}
          <div
            style={{
              transform: `scale(${spPrompt})`,
              opacity: spPrompt,
              fontFamily: FONT_MONO,
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 26,
            }}
          >
            <span style={{ color: INTRO_COLORS.wellnessMint, fontWeight: 700 }}>
              dev@terminal:~$
            </span>
            <span style={{ color: "#f8fafc", fontWeight: 600 }}>
              ./start-introduction.sh
            </span>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              📱 HERO TYPING TERMINAL BOX (LARGE & CRYSTAL CLEAR ON PHONE)
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              padding: "38px 36px",
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              borderLeft: `6px solid ${INTRO_COLORS.wellnessMint}`,
              borderRight: "1px solid rgba(56, 189, 248, 0.25)",
              borderTop: "1px solid rgba(56, 189, 248, 0.25)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 12px 36px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                color: INTRO_COLORS.cyberCyan,
                letterSpacing: 1.5,
                marginBottom: 20,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: INTRO_COLORS.wellnessMint }}>▶</span>
              <span>OUTPUT STREAM [LINE 02]:</span>
            </div>

            {/* Mobile-Friendly Large Spoken Text (52px Font Size) */}
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 52,
                fontWeight: 800,
                lineHeight: 1.42,
                letterSpacing: "-0.5px",
                color: "#f8fafc",
                wordBreak: "break-word",
              }}
            >
              <span style={{ color: INTRO_COLORS.skyBlue }}>
                {typedText.slice(0, 12)}
              </span>
              <span>{typedText.slice(12, 19)}</span>
              {typedText.length > 19 && (
                <span
                  style={{
                    color: INTRO_COLORS.wellnessMint,
                    textShadow: `0 0 24px ${INTRO_COLORS.wellnessGlow}`,
                    fontWeight: 900,
                  }}
                >
                  {typedText.slice(19, 26)}
                </span>
              )}
              <span style={{ color: "#f8fafc" }}>
                {typedText.slice(26)}
              </span>
              {cursorBlink && (
                <span
                  style={{
                    color: INTRO_COLORS.wellnessMint,
                    marginLeft: 8,
                    fontWeight: 900,
                    textShadow: `0 0 18px ${INTRO_COLORS.wellnessMint}`,
                  }}
                >
                  ▋
                </span>
              )}
            </div>
          </div>

          {/* Subline Terminal Execution Tag */}
          <div
            style={{
              transform: `scale(${spCompletion})`,
              opacity: spCompletion,
              fontFamily: FONT_MONO,
              fontSize: 16,
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: INTRO_COLORS.wellnessMint }}>[OK]</span>
              <span>Stream active. Preparing product overview...</span>
            </div>
            <span style={{ color: "#94a3b8" }}>exit: 0</span>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
