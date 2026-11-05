import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FaGlobeAmericas, FaRocket } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { GlobalWorldMap } from "../Components/GlobalWorldMap";
import { MULTI_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 0 - 170)
  // Line 1: "kamu harus melakukan update aplikasi," (F0 - F60)
  // Line 2: "ke ratusan server yang tersebar di berbagai dunia." (F71 - F152)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F10 - F32)
  const spBadge = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 2. Headline Line 1 Spring: "Update Aplikasi," (F16 - F40)
  const spHeadline1 = spring({
    frame: Math.max(0, frame - 16),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 3. Central Release Pill Spring (F24 - F50)
  const spAppCard = spring({
    frame: Math.max(0, frame - 24),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. Headline Line 2 Spring: "Ke Ratusan Server Dunia!" (F65 - F92)
  const spHeadline2 = spring({
    frame: Math.max(0, frame - 65),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 5. Global World Map Spring (F70 - F100)
  const spWorldMap = spring({
    frame: Math.max(0, frame - 70),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // Global Server Counter interpolation (12 -> 264+ Servers)
  const serverCount = Math.round(
    interpolate(frame, [72, 118], [12, 264], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  return (
    <SceneContainer accentColor={MULTI_COLORS.skyBlue}>
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
            backgroundColor: "rgba(10, 20, 42, 0.95)",
            border: "1.5px solid rgba(56, 189, 248, 0.7)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
            marginBottom: 20,
          }}
        >
          <SiGitlab size={17} color="#fc6d26" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#38bdf8",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            GLOBAL DEVOPS // MULTI-SERVER SCALE
          </span>
          <FaGlobeAmericas size={15} color="#10b981" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. SPOKEN HEADLINE (LINES 1 - 2) - BOLD & MINIMAL TEXT
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            minHeight: 125,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Line 1 (F0 - F65): "Kamu harus melakukan update aplikasi," */}
          <h1
            style={{
              transform: `scale(${spHeadline1}) translateY(${(1 - spHeadline1) * -15}px)`,
              opacity: spHeadline1,
              fontSize: 54,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Update Aplikasi,</span>
          </h1>

          {/* Line 2 (F65+): "ke ratusan server yang tersebar di berbagai dunia." */}
          {frame >= 65 && (
            <div
              style={{
                transform: `scale(${spHeadline2}) translateY(${(1 - spHeadline2) * 15}px)`,
                opacity: spHeadline2,
                fontSize: 48,
                fontWeight: 900,
                marginTop: 8,
                letterSpacing: -1,
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.7))",
              }}
            >
              Ke Ratusan Server Dunia!
            </div>
          )}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. SLEEK STATUS PILL (STREAMLINED TECH BADGE)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spAppCard}) translateY(${(1 - spAppCard) * 15}px)`,
            opacity: spAppCard,
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 42, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.5)",
            boxShadow:
              "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(56, 189, 248, 0.25)",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaRocket size={15} color="#fc6d26" />
            <span
              style={{
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#38bdf8",
                letterSpacing: 1,
              }}
            >
              APP v2.5.0
            </span>
          </div>

          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>|</span>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
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
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#a7f3d0",
                letterSpacing: 1,
              }}
            >
              264+ TARGET NODES
            </span>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. THE HERO HOLOGRAPHIC WORLD MAP
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spWorldMap}) translateY(${(1 - spWorldMap) * 20}px)`,
            opacity: spWorldMap,
          }}
        >
          <GlobalWorldMap serverCount={serverCount} />
        </div>
      </div>
    </SceneContainer>
  );
};
