import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBolt,
  FaCloud,
  FaCodeBranch,
  FaCube,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";
import { SiDebian } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Line 1: Frames 0 - 95)
  // Line 1: "Sebelum membahas arsitektur software di tempat kerja aku," (F6 - F85)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F4+)
  const spBadge = spring({
    frame: Math.max(0, frame - 4),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // 2. Headline Spring (F6+)
  const spHeadline = spring({
    frame: Math.max(0, frame - 6),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 3. Hero Visual Schematic Card Spring (F10+)
  const spCard = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 105 },
  });

  // 4. Staggered 3-Tier Layer Springs
  // Tier 1: Cloud Backend Plane (F18+)
  const spTier1 = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Traveling Laser Conduit 1 -> 2 (F28 - F42)
  const laser1 = interpolate(frame, [28, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Tier 2: Embedded Debian PC Controller (F38+)
  const spTier2 = spring({
    frame: Math.max(0, frame - 38),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Traveling Laser Conduit 2 -> 3 (F48 - F62)
  const laser2 = interpolate(frame, [48, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Tier 3: Physical Wellness Capsule / POD (F58+)
  const spTier3 = spring({
    frame: Math.max(0, frame - 58),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Ambient breathing oscillation
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  // Scene 1 Exit Transition (F88 - F100)
  const exitProgress = interpolate(frame, [88, 100], [0, 1], {
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
      {/* 1. Top Category Badge */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 24px",
          borderRadius: 9999,
          backgroundColor: "rgba(10, 30, 24, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.wellnessGreen}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
          marginBottom: 24,
        }}
      >
        <FaCodeBranch size={14} color={INTRO_COLORS.wellnessGreen} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 2,
            color: INTRO_COLORS.wellnessGreen,
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          BEHIND THE SCENE // SOFTWARE ARCHITECTURE
        </span>
        <FaBolt size={13} color={INTRO_COLORS.wellnessGreen} />
      </div>

      {/* 2. Spoken Headline (Line 1) */}
      <div
        style={{
          transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 20}px)`,
          opacity: spHeadline,
          textAlign: "center",
          marginBottom: 36,
          minHeight: 120,
        }}
      >
        <h1
          style={{
            fontSize: 54,
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: -1.5,
          }}
        >
          <span style={{ color: "#f8fafc" }}>Sebelum Membahas </span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #34d399 0%, #38bdf8 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.65))",
            }}
          >
            Arsitektur Software di Tempat Kerja...
          </span>
        </h1>
      </div>

      {/* 3. Hero Visual Card: The Architecture Blueprint Schematic */}
      <div
        style={{
          transform: `scale(${spCard}) translateY(${(1 - spCard) * 30}px)`,
          opacity: spCard,
          width: 960,
          borderRadius: 24,
          backgroundColor: INTRO_COLORS.bgSurface,
          border: `2px solid ${INTRO_COLORS.cardBorder}`,
          boxShadow:
            "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(6, 182, 212, 0.25)",
          padding: "32px 30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Schematic Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 18px",
            borderRadius: 12,
            backgroundColor: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaNetworkWired size={15} color="#38bdf8" />
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#cbd5e1",
              }}
            >
              SYS_SCHEMATIC // CONFIDENTIAL WORKPLACE TOPOLOGY
            </span>
          </div>

          <div
            style={{
              fontSize: 11,
              fontFamily: FONT_MONO,
              fontWeight: 900,
              color: "#34d399",
              backgroundColor: "rgba(16, 185, 129, 0.18)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              padding: "4px 12px",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#34d399",
                boxShadow: "0 0 8px #34d399",
              }}
            />
            <span>MAPPING ACTIVE</span>
          </div>
        </div>

        {/* 3-Tier Architecture Topology Flow */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* TIER 1: CLOUD CONTROL PLANE */}
          <div
            style={{
              transform: `scale(${spTier1})`,
              opacity: spTier1,
              width: "100%",
              borderRadius: 16,
              backgroundColor: "rgba(6, 182, 212, 0.12)",
              border: "2px solid #06b6d4",
              boxShadow: `0 0 ${15 + pulseWave * 10}px rgba(6, 182, 212, 0.3)`,
              padding: "16px 22px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  backgroundColor: "rgba(6, 182, 212, 0.25)",
                  border: "1.5px solid #06b6d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaCloud size={26} color="#06b6d4" />
              </div>

              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                  Cloud Architecture &amp; Sync Engine
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: "#38bdf8",
                    marginTop: 2,
                    fontWeight: 800,
                  }}
                >
                  REMOTE DATA • MULTIMEDIA ASSETS • FIRMWARE ARTIFACTS
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#06b6d4",
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                border: "1px solid #06b6d4",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              TIER 01 // CLOUD
            </span>
          </div>

          {/* Laser Conduit 1 -> 2 */}
          <div
            style={{
              height: 28,
              width: 3,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              position: "relative",
              borderRadius: 2,
            }}
          >
            {laser1 > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: `${laser1 * 100}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: "#e11d48",
                  boxShadow: "0 0 10px #e11d48, 0 0 4px #fff",
                }}
              />
            )}
          </div>

          {/* TIER 2: EMBEDDED DEBIAN PC (CENTRAL BRAIN) */}
          <div
            style={{
              transform: `scale(${spTier2})`,
              opacity: spTier2,
              width: "100%",
              borderRadius: 16,
              backgroundColor: "rgba(225, 29, 72, 0.12)",
              border: "2px solid #e11d48",
              boxShadow: `0 0 ${18 + pulseWave * 12}px rgba(225, 29, 72, 0.35)`,
              padding: "16px 22px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  backgroundColor: "rgba(225, 29, 72, 0.25)",
                  border: "1.5px solid #e11d48",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiDebian size={28} color="#e11d48" />
              </div>

              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                  Embedded Debian PC (Pusat Kendali)
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: "#f43f5e",
                    marginTop: 2,
                    fontWeight: 800,
                  }}
                >
                  LOCAL LOGIC BRAIN • HARDWARE I/O CONTROLLER • RUNTIME
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#e11d48",
                backgroundColor: "rgba(225, 29, 72, 0.2)",
                border: "1px solid #e11d48",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              TIER 02 // EDGE OS
            </span>
          </div>

          {/* Laser Conduit 2 -> 3 */}
          <div
            style={{
              height: 28,
              width: 3,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              position: "relative",
              borderRadius: 2,
            }}
          >
            {laser2 > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: `${laser2 * 100}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 10px #10b981, 0 0 4px #fff",
                }}
              />
            )}
          </div>

          {/* TIER 3: PHYSICAL IOT WELLNESS POD CAPSULE */}
          <div
            style={{
              transform: `scale(${spTier3})`,
              opacity: spTier3,
              width: "100%",
              borderRadius: 16,
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "2px solid #10b981",
              boxShadow: `0 0 ${15 + pulseWave * 10}px rgba(16, 185, 129, 0.3)`,
              padding: "16px 22px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "1.5px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaCube size={26} color="#10b981" />
              </div>

              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                  IoT Wellness POD (Kapsul Fisik)
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: "#34d399",
                    marginTop: 2,
                    fontWeight: 800,
                  }}
                >
                  SENSORY ACTUATORS • USER TOUCHSCREEN • MULTIMEDIA
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: "1px solid #10b981",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              TIER 03 // HARDWARE
            </span>
          </div>
        </div>

        {/* Bottom Schematic Status Pill */}
        <div
          style={{
            alignSelf: "center",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(6, 182, 212, 0.12)",
            border: "1px solid rgba(6, 182, 212, 0.35)",
            fontSize: 13,
            fontFamily: FONT_MONO,
            fontWeight: 900,
            color: "#38bdf8",
            marginTop: 6,
          }}
        >
          <FaMicrochip size={14} color="#38bdf8" />
          <span>🔍 BLUEPRINT: ARSITEKTUR CLOUD-TO-EDGE IOT SYSTEM</span>
        </div>
      </div>
    </SceneContainer>
  );
};
