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
  FaCheckCircle,
  FaLightbulb,
  FaMicrochip,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaVolumeUp,
} from "react-icons/fa";
import { SiDebian, SiPostgresql } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Scene 4: Frames 575 - 770)
  // Line 8: "PC ini menjadi pusat kendali, mulai dari hardware hingga software yang berjalan di dalam produk."
  // Voice: F587 - F743, Pause F744 - F770
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Entrance Springs
  const spBadge = spring({
    frame: Math.max(0, frame - 575),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 580),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  const spCard = spring({
    frame: Math.max(0, frame - 585),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Central Hub (Debian PC) Spring (F587+)
  const spCenter = spring({
    frame: Math.max(0, frame - 587),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 120 },
  });

  // Hardware Nodes Stagger (F645+) - Voice: "mulai dari hardware..."
  const spSpeaker = spring({
    frame: Math.max(0, frame - 648),
    fps,
    config: { damping: 12, stiffness: 125 },
  });
  const spStrobe = spring({
    frame: Math.max(0, frame - 658),
    fps,
    config: { damping: 12, stiffness: 125 },
  });
  const spSensors = spring({
    frame: Math.max(0, frame - 668),
    fps,
    config: { damping: 12, stiffness: 125 },
  });

  // Software Nodes Stagger (F690+) - Voice: "...hingga software..."
  const spNode = spring({
    frame: Math.max(0, frame - 692),
    fps,
    config: { damping: 12, stiffness: 125 },
  });
  const spPostgres = spring({
    frame: Math.max(0, frame - 702),
    fps,
    config: { damping: 12, stiffness: 125 },
  });
  const spReact = spring({
    frame: Math.max(0, frame - 712),
    fps,
    config: { damping: 12, stiffness: 125 },
  });

  // Continuous electrical photon particle flow
  const dataFlow = interpolate(
    (frame - 587) % 40,
    [0, 40],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Strobe lighting pulse animation
  const strobeFlash =
    frame >= 658 ? (Math.sin((frame * Math.PI) / 4) > 0 ? 1 : 0.3) : 0.2;

  // Sound wave ripple animation for speaker
  const soundWave = (frame * 0.15) % 1;

  // React icon continuous smooth rotation
  const reactRotation = (frame * 1.5) % 360;

  // Ambient breathing pulse
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  // Scene Exit Transition (F755 - F770)
  const exitProgress = interpolate(frame, [755, 770], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;
  const sceneScale = 1 - exitProgress * 0.05;
  const sceneTranslateY = -exitProgress * 25;

  return (
    <SceneContainer
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(${sceneTranslateY}px)`,
      }}
    >
      {/* 1. Top Architecture Mode Badge */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 28px",
          borderRadius: 9999,
          backgroundColor: "rgba(10, 18, 36, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.cyberCyan}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.cyanGlow}`,
          marginBottom: 26,
        }}
      >
        <FaNetworkWired size={15} color={INTRO_COLORS.cyberCyan} />
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
          SYSTEM TOPOLOGY // CENTRAL IPC BUS
        </span>
        <FaBolt size={14} color={INTRO_COLORS.sensorAmber} />
      </div>

      {/* 2. Bold Mobile Headline (Line 8) */}
      <div
        style={{
          width: 960,
          textAlign: "center",
          marginBottom: 28,
          transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 20}px)`,
          opacity: spHeadline,
        }}
      >
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 26,
            color: "#94a3b8",
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          PC ini menjadi pusat kendali:
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#f8fafc",
            fontFamily: FONT_MONO,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: INTRO_COLORS.sensorAmber }}>HARDWARE</span>{" "}
          <span style={{ color: "#64748b" }}>&</span>{" "}
          <span
            style={{
              color: INTRO_COLORS.wellnessMint,
              textShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
            }}
          >
            SOFTWARE
          </span>
        </div>
      </div>

      {/* 3. The Interconnected Node Network Canvas Card */}
      <div
        style={{
          width: 960,
          height: 1100,
          borderRadius: 24,
          backgroundColor: "rgba(9, 14, 28, 0.96)",
          border: `2px solid rgba(56, 189, 248, 0.35)`,
          boxShadow: `0 25px 70px rgba(0, 0, 0, 0.85), 0 0 45px rgba(6, 182, 212, 0.15)`,
          position: "relative",
          overflow: "hidden",
          transform: `scale(${spCard}) translateY(${(1 - spCard) * 30}px)`,
          opacity: spCard,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "32px 30px 24px",
          boxSizing: "border-box",
        }}
      >
        {/* Subtle Cybernetic Grid inside Network Card */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />

        {/* Card Header Status */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: FONT_MONO,
            zIndex: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: INTRO_COLORS.wellnessMint,
                boxShadow: `0 0 10px ${INTRO_COLORS.wellnessMint}`,
              }}
            />
            <span
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: "#e2e8f0",
                letterSpacing: 1,
              }}
            >
              IPC BUS MESH // FULL DUPLEX INTERCONNECT
            </span>
          </div>

          <div
            style={{
              padding: "4px 14px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: `1px solid ${INTRO_COLORS.wellnessGreen}`,
              fontSize: 13,
              fontWeight: 800,
              color: INTRO_COLORS.wellnessMint,
            }}
          >
            6 NODES SYNCHRONIZED
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            INTERCONNECTED MESH VISUAL (Nodes + SVG Laser Conduits)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: "100%",
            height: 900,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG Conduit Wires Layer */}
          <svg
            width="900"
            height="860"
            viewBox="0 0 900 860"
            style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
          >
            <defs>
              <linearGradient id="wireDebianToNode" x1="450" y1="430" x2="160" y2="170" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <linearGradient id="wireDebianToPostgres" x1="450" y1="430" x2="450" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="wireDebianToReact" x1="450" y1="430" x2="740" y2="170" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#61dafb" />
              </linearGradient>
              <linearGradient id="wireDebianToSpeaker" x1="450" y1="430" x2="160" y2="690" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="wireDebianToStrobe" x1="450" y1="430" x2="450" y2="740" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="wireDebianToSensors" x1="450" y1="430" x2="740" y2="690" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={INTRO_COLORS.debianRed} />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {/* Wires to Software Stack (Top) */}
            <line x1="450" y1="370" x2="180" y2="200" stroke="url(#wireDebianToNode)" strokeWidth="3" strokeDasharray="6 4" opacity={spNode * 0.75} />
            <line x1="450" y1="360" x2="450" y2="160" stroke="url(#wireDebianToPostgres)" strokeWidth="3.5" strokeDasharray="6 4" opacity={spPostgres * 0.8} />
            <line x1="450" y1="370" x2="720" y2="200" stroke="url(#wireDebianToReact)" strokeWidth="3" strokeDasharray="6 4" opacity={spReact * 0.75} />

            {/* Wires to Hardware Actuators (Bottom) */}
            <line x1="450" y1="490" x2="180" y2="660" stroke="url(#wireDebianToSpeaker)" strokeWidth="3" strokeDasharray="6 4" opacity={spSpeaker * 0.75} />
            <line x1="450" y1="500" x2="450" y2="700" stroke="url(#wireDebianToStrobe)" strokeWidth="3.5" strokeDasharray="6 4" opacity={spStrobe * 0.8} />
            <line x1="450" y1="490" x2="720" y2="660" stroke="url(#wireDebianToSensors)" strokeWidth="3" strokeDasharray="6 4" opacity={spSensors * 0.75} />

            {/* Dynamic Traveling Photons along Wires */}
            {spNode > 0.5 && (
              <circle
                cx={450 + (180 - 450) * dataFlow}
                cy={370 + (200 - 370) * dataFlow}
                r="4"
                fill="#22c55e"
                filter="drop-shadow(0 0 6px #22c55e)"
              />
            )}
            {spPostgres > 0.5 && (
              <circle
                cx={450}
                cy={360 + (160 - 360) * dataFlow}
                r="4.5"
                fill="#38bdf8"
                filter="drop-shadow(0 0 8px #38bdf8)"
              />
            )}
            {spReact > 0.5 && (
              <circle
                cx={450 + (720 - 450) * dataFlow}
                cy={370 + (200 - 370) * dataFlow}
                r="4"
                fill="#61dafb"
                filter="drop-shadow(0 0 6px #61dafb)"
              />
            )}
            {spSpeaker > 0.5 && (
              <circle
                cx={450 + (180 - 450) * dataFlow}
                cy={490 + (660 - 490) * dataFlow}
                r="4.5"
                fill="#f59e0b"
                filter="drop-shadow(0 0 6px #f59e0b)"
              />
            )}
            {spStrobe > 0.5 && (
              <circle
                cx={450}
                cy={500 + (700 - 500) * dataFlow}
                r="4.5"
                fill="#ec4899"
                filter="drop-shadow(0 0 8px #ec4899)"
              />
            )}
            {spSensors > 0.5 && (
              <circle
                cx={450 + (720 - 450) * dataFlow}
                cy={490 + (660 - 490) * dataFlow}
                r="4"
                fill="#10b981"
                filter="drop-shadow(0 0 6px #10b981)"
              />
            )}
          </svg>

          {/* ═══════════════════════════════════════════════════════════════
              CENTRAL HUB: EMBEDDED DEBIAN PC CONTROLLER
             ═══════════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: "absolute",
              width: 290,
              height: 190,
              borderRadius: 22,
              backgroundColor: "rgba(22, 6, 12, 0.98)",
              border: `2.5px solid ${INTRO_COLORS.debianRed}`,
              boxShadow: `0 0 45px rgba(225, 29, 72, ${0.45 + pulseWave * 0.25}), inset 0 0 25px rgba(225, 29, 72, 0.2)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              zIndex: 10,
              transform: `scale(${spCenter})`,
              opacity: spCenter,
              fontFamily: FONT_MONO,
            }}
          >
            {/* Pulsing Ripple Rings */}
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 220,
                borderRadius: 26,
                border: `1.5px solid rgba(225, 29, 72, ${0.5 - pulseWave * 0.4})`,
                pointerEvents: "none",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <SiDebian
                size={44}
                color={INTRO_COLORS.debianRed}
                style={{
                  filter: `drop-shadow(0 0 14px ${INTRO_COLORS.debianRed})`,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#ffe4e6",
                    letterSpacing: 1.5,
                  }}
                >
                  DEBIAN PC
                </div>
                <div style={{ fontSize: 12, color: "#fda4af", fontWeight: 700 }}>
                  MASTER CONTROLLER
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "3px 12px",
                borderRadius: 6,
                backgroundColor: "rgba(225, 29, 72, 0.2)",
                border: `1px solid ${INTRO_COLORS.debianRed}`,
                fontSize: 11,
                color: "#fecdd3",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              IPC CORE HUB
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              TOP NODES: SOFTWARE ECOSYSTEM (Node.js, PostgreSQL, React)
             ═══════════════════════════════════════════════════════════════ */}

          {/* Node 1: Node.js (Top Left) */}
          <div
            style={{
              position: "absolute",
              left: 40,
              top: 70,
              width: 220,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 26, 16, 0.94)",
              border: `2px solid #22c55e`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(34, 197, 94, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spNode})`,
              opacity: spNode,
              fontFamily: FONT_MONO,
            }}
          >
            <FaNodeJs size={38} color="#22c55e" />
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              Node.js
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Backend Microservices & IPC Daemon
            </div>
          </div>

          {/* Node 2: PostgreSQL (Top Center) */}
          <div
            style={{
              position: "absolute",
              top: 25,
              width: 240,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(8, 20, 36, 0.94)",
              border: `2px solid #38bdf8`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spPostgres})`,
              opacity: spPostgres,
              fontFamily: FONT_MONO,
            }}
          >
            <SiPostgresql size={38} color="#38bdf8" />
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              PostgreSQL
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Local Database, Session & State
            </div>
          </div>

          {/* Node 3: React (Top Right) */}
          <div
            style={{
              position: "absolute",
              right: 40,
              top: 70,
              width: 220,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(8, 24, 38, 0.94)",
              border: `2px solid #61dafb`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(97, 218, 251, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spReact})`,
              opacity: spReact,
              fontFamily: FONT_MONO,
            }}
          >
            <div style={{ transform: `rotate(${reactRotation}deg)` }}>
              <FaReact size={38} color="#61dafb" />
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              React UI
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Kiosk Touchscreen Capsule App
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              BOTTOM NODES: HARDWARE ACTUATORS (Speaker, Strobe, Sensors)
             ═══════════════════════════════════════════════════════════════ */}

          {/* Node 4: Speaker (Bottom Left) */}
          <div
            style={{
              position: "absolute",
              left: 40,
              bottom: 60,
              width: 220,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(28, 18, 6, 0.94)",
              border: `2px solid #f59e0b`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spSpeaker})`,
              opacity: spSpeaker,
              fontFamily: FONT_MONO,
            }}
          >
            <div style={{ position: "relative" }}>
              <FaVolumeUp size={36} color="#f59e0b" />
              {/* Sound ripple circle */}
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: `1.5px solid rgba(245, 158, 11, ${1 - soundWave})`,
                  transform: `scale(${1 + soundWave * 0.5})`,
                  pointerEvents: "none",
                }}
              />
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              Speaker
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Vibroacoustic Spatial Sound
            </div>
          </div>

          {/* Node 5: Strobe Light (Bottom Center) */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              width: 240,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(28, 8, 20, 0.94)",
              border: `2px solid #ec4899`,
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 ${20 * strobeFlash}px #ec4899`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spStrobe})`,
              opacity: spStrobe,
              fontFamily: FONT_MONO,
            }}
          >
            <FaLightbulb
              size={36}
              color="#ec4899"
              style={{
                filter: `drop-shadow(0 0 ${12 * strobeFlash}px #ec4899)`,
              }}
            />
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              Strobe Light
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Spectral Chromotherapy LEDs
            </div>
          </div>

          {/* Node 6: Sensors & Thermal (Bottom Right) */}
          <div
            style={{
              position: "absolute",
              right: 40,
              bottom: 60,
              width: 220,
              padding: "18px 16px",
              borderRadius: 18,
              backgroundColor: "rgba(6, 26, 20, 0.94)",
              border: `2px solid #10b981`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              zIndex: 4,
              transform: `scale(${spSensors})`,
              opacity: spSensors,
              fontFamily: FONT_MONO,
            }}
          >
            <FaMicrochip size={36} color="#10b981" />
            <div style={{ fontSize: 19, fontWeight: 900, color: "#f8fafc" }}>
              Sensors & Thermal
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Biometrics, Vitals & Heating Actuators
            </div>
          </div>
        </div>

        {/* Bottom Hardware & Software Integration Summary Bar */}
        <div
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: 14,
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: FONT_MONO,
            fontSize: 14,
            color: "#e2e8f0",
            zIndex: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaCheckCircle size={15} color={INTRO_COLORS.wellnessMint} />
            <span>Full-Stack Local Software</span>
          </div>
          <div style={{ width: 1, height: 18, backgroundColor: "#334155" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaCheckCircle size={15} color={INTRO_COLORS.skyBlue} />
            <span>Central IPC Bus</span>
          </div>
          <div style={{ width: 1, height: 18, backgroundColor: "#334155" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaCheckCircle size={15} color={INTRO_COLORS.sensorAmber} />
            <span>Direct Hardware Control</span>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};

