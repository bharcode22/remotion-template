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
  FaCube,
  FaHeartbeat,
  FaMicrochip,
  FaNetworkWired,
  FaShieldAlt,
  FaTerminal,
  FaWifi,
} from "react-icons/fa";
import { SiDebian, SiLinux } from "react-icons/si";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 CINEMATIC CAMERA JOURNEY (Frames 200 - 575)
  // Stage 1 (IoT & Wellness): Camera at X = 0 (Voice: F200 - F288)
  // Slide 1 (To Wellness Pod): Camera slides 0 -> 1080 (F288 - F305)
  // Stage 2 (Wellness Pod): Camera at X = 1080 (Voice: F296 - F384)
  // Slide 2 (To Debian PC): Camera slides 1080 -> 2160 (F405 - F422)
  // Stage 3 (Debian PC Inside Pod): Camera at X = 2160 (Voice: F417 - F556)
  // ─────────────────────────────────────────────────────────────────────────────

  // Slide 1: Stage 1 ➔ Stage 2 (F288 - F305)
  const slide1 = interpolate(frame, [288, 305], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Slide 2: Stage 2 ➔ Stage 3 (F405 - F422)
  const slide2 = interpolate(frame, [405, 422], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Total horizontal camera position (0 -> 1080 -> 2160)
  const cameraX = slide1 * 1080 + slide2 * 1080;

  // Cinematic Camera Zoom Dip during slides
  const slideDip =
    Math.sin(slide1 * Math.PI) * 0.05 + Math.sin(slide2 * Math.PI) * 0.05;
  const cameraZoom = 1.0 - slideDip;

  // Parallax background offset
  const parallaxX = cameraX * 0.35;

  // Dynamic morphing atmosphere lighting
  const glowR = Math.round(
    interpolate(cameraX, [0, 1080, 2160], [6, 16, 225], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const glowG = Math.round(
    interpolate(cameraX, [0, 1080, 2160], [182, 185, 29], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const glowB = Math.round(
    interpolate(cameraX, [0, 1080, 2160], [212, 129, 72], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Continuous ambient breathing pulse
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ STAGE SPRINGS & ANIMATIONS
  // ─────────────────────────────────────────────────────────────────────────────

  // Stage 1 Springs
  const spStage1 = spring({
    frame: Math.max(0, frame - 200),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 110 },
  });
  const spFusion = spring({
    frame: Math.max(0, frame - 222),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 130 },
  });

  // Stage 2 Springs
  const spStage2 = spring({
    frame: Math.max(0, frame - 302),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 110 },
  });
  const scanProgress = interpolate(
    (frame - 300) % 75,
    [0, 75],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Stage 3 (Debian PC Inside Pod Reveal) Springs (F405+)
  const spStage3 = spring({
    frame: Math.max(0, frame - 405),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 115 },
  });

  // PC hardware unit pops out from pod hatch (F415+)
  const spPcUnit = spring({
    frame: Math.max(0, frame - 415),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Terminal window on top of PC powers on (F428+)
  const spTerminal = spring({
    frame: Math.max(0, frame - 428),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 125 },
  });

  // Traveling electrical pulse through conduits
  const conduitPulse = interpolate(
    (frame - 410) % 35,
    [0, 35],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Scene Exit (F565 - F575)
  const exitProgress = interpolate(frame, [565, 575], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        backgroundColor: INTRO_COLORS.bgDark,
        opacity: sceneOpacity,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────────────────
          🌌 DYNAMIC MORPHING BACKGROUND & PARALLAX GLOWS
         ───────────────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          left: `calc(50% - ${parallaxX * 0.4}px - 450px)`,
          top: "22%",
          background: `radial-gradient(circle, rgba(${glowR}, ${glowG}, ${glowB}, ${0.2 + pulseWave * 0.08
            }) 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Cybernetic Parallax Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          transform: `translateX(-${parallaxX}px)`,
          pointerEvents: "none",
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 MOVING CAMERA WORLD CONTAINER (Holds 3 Connected Stages)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 3240, // 3 x 1080px
          height: 1920,
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          transform: `translateX(-${cameraX}px) scale(${cameraZoom})`,
          transformOrigin: "540px 960px",
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════════════════
            STAGE 1: IOT & WELLNESS FUSION (Line 4: F200 - F290)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "160px 60px 100px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(6, 26, 20, 0.95)",
              border: `1.5px solid ${INTRO_COLORS.wellnessGreen}`,
              boxShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
              marginBottom: 36,
            }}
          >
            <FaWifi size={15} color={INTRO_COLORS.cyberCyan} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2.2,
                color: INTRO_COLORS.wellnessGreen,
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              INDUSTRY DOMAIN // TECHNOLOGY & HEALTH
            </span>
            <FaHeartbeat size={15} color={INTRO_COLORS.wellnessMint} />
          </div>

          {/* Bold Mobile Headline */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 44,
              transform: `scale(${spStage1}) translateY(${(1 - spStage1) * 20}px)`,
              opacity: spStage1,
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 26,
                color: "#94a3b8",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Perusahaan ini bergerak di bidang:
            </div>
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: "#f8fafc",
                fontFamily: FONT_MONO,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: INTRO_COLORS.cyberCyan }}>IoT</span>{" "}
              <span style={{ color: "#64748b" }}>&</span>{" "}
              <span
                style={{
                  color: INTRO_COLORS.wellnessMint,
                  textShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
                }}
              >
                WELLNESS
              </span>
            </div>
          </div>

          {/* Interactive Fusion Pillars Card */}
          <div
            style={{
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(9, 15, 30, 0.94)",
              border: `2px solid rgba(6, 182, 212, 0.35)`,
              boxShadow: `0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.15)`,
              padding: "44px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              position: "relative",
            }}
          >
            {/* Dual Cards: IoT on Left, Wellness on Right */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 90px 1fr",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Pillar 1: IoT */}
              <div
                style={{
                  padding: "36px 24px",
                  borderRadius: 20,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  border: `2px solid ${INTRO_COLORS.cyberCyan}`,
                  boxShadow: `0 0 30px ${INTRO_COLORS.cyanGlow}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaWifi size={40} color={INTRO_COLORS.cyberCyan} />
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  IoT
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                    lineHeight: 1.4,
                  }}
                >
                  Connected Sensors & Smart Devices
                </div>
              </div>

              {/* Center Fusion Connector */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transform: `scale(${spFusion})`,
                  opacity: spFusion,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "#0f172a",
                    border: `2px solid ${INTRO_COLORS.wellnessMint}`,
                    boxShadow: `0 0 20px ${INTRO_COLORS.wellnessGlow}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaBolt size={22} color={INTRO_COLORS.sensorAmber} />
                </div>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 900,
                    color: INTRO_COLORS.wellnessMint,
                    letterSpacing: 1.5,
                  }}
                >
                  FUSION
                </span>
              </div>

              {/* Pillar 2: Wellness */}
              <div
                style={{
                  padding: "36px 24px",
                  borderRadius: 20,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: `2px solid ${INTRO_COLORS.wellnessMint}`,
                  boxShadow: `0 0 30px ${INTRO_COLORS.wellnessGlow}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaHeartbeat size={40} color={INTRO_COLORS.wellnessMint} />
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  WELLNESS
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                    lineHeight: 1.4,
                  }}
                >
                  Biometrics, Health & Chamber Tech
                </div>
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 14,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              <FaCheckCircle size={18} color={INTRO_COLORS.wellnessMint} />
              <span>THE CONVERGENCE: CONNECTED HEALTH-TECH ECOSYSTEM</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════
            STAGE 2: THE WELLNESS POD CAPSULE (Line 5: F296 - F405)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "160px 60px 100px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(6, 26, 20, 0.95)",
              border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
              boxShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
              marginBottom: 36,
            }}
          >
            <FaCube size={15} color={INTRO_COLORS.wellnessMint} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2.2,
                color: INTRO_COLORS.wellnessMint,
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              FLAGSHIP PRODUCT // HARDWARE FORM
            </span>
          </div>

          {/* Bold Mobile Headline */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 44,
              transform: `scale(${spStage2}) translateY(${(1 - spStage2) * 20}px)`,
              opacity: spStage2,
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 26,
                color: "#94a3b8",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Dengan produk utama berupa:
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 900,
                color: "#f8fafc",
                fontFamily: FONT_MONO,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  color: INTRO_COLORS.wellnessMint,
                  textShadow: `0 0 30px ${INTRO_COLORS.wellnessGlow}`,
                }}
              >
                POD CAPSULE
              </span>{" "}
              <span style={{ color: "#64748b" }}>//</span>{" "}
              <span style={{ color: INTRO_COLORS.skyBlue }}>
                Kapsul Wellness
              </span>
            </div>
          </div>

          {/* Hero 3D Futuristic Wellness Pod Showcase */}
          <div
            style={{
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(9, 16, 30, 0.95)",
              border: `2px solid rgba(16, 185, 129, 0.4)`,
              boxShadow: `0 25px 70px rgba(0, 0, 0, 0.85), 0 0 45px rgba(16, 185, 129, 0.2)`,
              padding: "44px 36px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Real-time Vertical Laser Scanline */}
            <div
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                top: `${scanProgress * 100}%`,
                height: 3,
                background: `linear-gradient(90deg, transparent, ${INTRO_COLORS.wellnessMint}, ${INTRO_COLORS.skyBlue}, transparent)`,
                boxShadow: `0 0 18px ${INTRO_COLORS.wellnessMint}`,
                pointerEvents: "none",
                zIndex: 10,
              }}
            />

            {/* Futuristic Capsule Graphic Rendering */}
            <div
              style={{
                width: 840,
                height: 380,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              {/* Ambient Radial Pod Glow */}
              <div
                style={{
                  position: "absolute",
                  width: 580,
                  height: 240,
                  borderRadius: "50%",
                  background: `radial-gradient(ellipse at center, rgba(16, 185, 129, ${0.25 + pulseWave * 0.15
                    }) 0%, transparent 70%)`,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />

              <svg
                width="820"
                height="360"
                viewBox="0 0 820 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="podBody" x1="0" y1="0" x2="820" y2="360">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="40%" stopColor="#0f172a" />
                    <stop offset="80%" stopColor="#0a1224" />
                    <stop offset="100%" stopColor="#030712" />
                  </linearGradient>
                  <linearGradient id="podGlass" x1="120" y1="50" x2="720" y2="280">
                    <stop
                      offset="0%"
                      stopColor="#38bdf8"
                      stopOpacity={0.4 + pulseWave * 0.15}
                    />
                    <stop
                      offset="60%"
                      stopColor="#10b981"
                      stopOpacity={0.3 + pulseWave * 0.15}
                    />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Ground Foundation Pedestal */}
                <rect
                  x="180"
                  y="280"
                  width="460"
                  height="34"
                  rx="14"
                  fill="#0f172a"
                  stroke="#334155"
                  strokeWidth="2.5"
                />
                <ellipse
                  cx="410"
                  cy="318"
                  rx="340"
                  ry="18"
                  fill="rgba(16, 185, 129, 0.15)"
                />

                {/* Outer Aerodynamic Pod Capsule Shell */}
                <path
                  d="M 120 250 C 90 190 120 100 230 70 C 340 40 580 40 690 85 C 760 115 780 180 740 250 C 700 280 630 285 410 285 C 190 285 140 275 120 250 Z"
                  fill="url(#podBody)"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="3.5"
                />

                {/* Glass Cockpit Dome */}
                <path
                  d="M 180 230 C 150 180 190 105 280 85 C 370 65 540 65 640 100 C 700 125 710 180 680 230 C 640 250 580 255 410 255 C 250 255 200 250 180 230 Z"
                  fill="url(#podGlass)"
                  stroke="rgba(16, 185, 129, 0.7)"
                  strokeWidth="3"
                />

                {/* Ergonomic Interior Bed Lounger */}
                <path
                  d="M 240 220 Q 330 230 420 215 Q 510 200 600 170 Q 630 160 650 185 Q 580 230 480 240 Q 350 245 240 220 Z"
                  fill="#091426"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />

                {/* Interior Chromotherapy Light Line */}
                <path
                  d="M 290 105 Q 410 90 580 115"
                  stroke={INTRO_COLORS.wellnessMint}
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity={0.85 + pulseWave * 0.15}
                  filter="drop-shadow(0 0 12px #10b981)"
                />

                {/* Internal PC Bay Indicator */}
                <path
                  d="M 220 265 L 600 265"
                  stroke={INTRO_COLORS.debianRed}
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                />
                <text
                  x="410"
                  y="280"
                  textAnchor="middle"
                  fill="#f43f5e"
                  fontSize="13"
                  fontFamily={FONT_MONO}
                  fontWeight="800"
                  letterSpacing="1.5"
                >
                  ▼ INTERNAL DEBIAN PC HARDWARE BAY ▼
                </text>
              </svg>
            </div>

            {/* 2 Focused Floating Feature Badges */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <FaShieldAlt size={28} color={INTRO_COLORS.wellnessMint} />
                <div>
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#f8fafc",
                    }}
                  >
                    Enclosed Chamber
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      color: "#94a3b8",
                    }}
                  >
                    Microclimate & Sound Isolation
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <FaWifi size={28} color={INTRO_COLORS.skyBlue} />
                <div>
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#f8fafc",
                    }}
                  >
                    IoT Sensor Array
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      color: "#94a3b8",
                    }}
                  >
                    Biometrics & Real-time Telemetry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════
            STAGE 3: THE EMBEDDED DEBIAN PC INSIDE THE POD (Line 6: F417 - F575)
            "Menariknya, di dalam setiap POD terdapat sebuah PC dengan sistem operasi Debian."
           ═══════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "140px 60px 80px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Amber Tech Fact Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(35, 15, 6, 0.95)",
              border: `1.5px solid ${INTRO_COLORS.sensorAmber}`,
              boxShadow: `0 0 25px ${INTRO_COLORS.amberGlow}`,
              marginBottom: 24,
            }}
          >
            <SiDebian size={18} color={INTRO_COLORS.debianRed} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2.2,
                color: "#fef3c7",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              FAKTA MENARIK // DEBIAN PC REVELATION
            </span>
            <FaBolt size={14} color={INTRO_COLORS.sensorAmber} />
          </div>

          {/* Bold Mobile Headline */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 26,
              transform: `scale(${spStage3}) translateY(${(1 - spStage3) * 20}px)`,
              opacity: spStage3,
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
              Menariknya, di dalam setiap POD:
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "#f8fafc",
                fontFamily: FONT_MONO,
                letterSpacing: "-0.5px",
                marginBottom: 10,
              }}
            >
              Terdapat Sebuah PC Khusus
            </div>

            {/* Giant Ruby Debian Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "10px 32px",
                borderRadius: 18,
                backgroundColor: "rgba(225, 29, 72, 0.18)",
                border: `2.5px solid ${INTRO_COLORS.debianRed}`,
                boxShadow: `0 0 40px ${INTRO_COLORS.debianGlow}`,
              }}
            >
              <SiDebian
                size={42}
                color={INTRO_COLORS.debianRed}
                style={{
                  filter: `drop-shadow(0 0 16px ${INTRO_COLORS.debianRed})`,
                }}
              />
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#ffe4e6",
                  letterSpacing: 2,
                  fontFamily: FONT_MONO,
                }}
              >
                OS DEBIAN
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              🔍 X-RAY CUTAWAY: POD WIREFRAME + RUGGED DEBIAN PC CONTROLLER
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(10, 14, 28, 0.96)",
              border: `2px solid rgba(225, 29, 72, 0.45)`,
              boxShadow: `0 25px 70px rgba(0, 0, 0, 0.85), 0 0 50px rgba(225, 29, 72, 0.22)`,
              padding: "30px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Holographic X-Ray Blueprint of the Pod */}
            <div
              style={{
                width: "100%",
                height: 140,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1.5px dashed rgba(225, 29, 72, 0.3)",
                paddingBottom: 12,
              }}
            >
              {/* Wireframe Silhouette of Pod Capsule */}
              <svg
                width="720"
                height="130"
                viewBox="0 0 720 130"
                fill="none"
                style={{ opacity: 0.45 + pulseWave * 0.15 }}
              >
                {/* Translucent wireframe pod outline */}
                <path
                  d="M 60 110 C 40 70 70 25 150 15 C 260 5 460 5 570 18 C 640 28 680 70 660 110 C 600 125 500 128 360 128 C 220 128 120 125 60 110 Z"
                  stroke="rgba(56, 189, 248, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  fill="rgba(56, 189, 248, 0.04)"
                />
                {/* Lounger Wireframe */}
                <path
                  d="M 160 95 Q 260 105 360 90 Q 460 80 540 60"
                  stroke="rgba(16, 185, 129, 0.5)"
                  strokeWidth="2"
                />
                {/* Sub-floor Hardware Bay Box */}
                <rect
                  x="240"
                  y="92"
                  width="240"
                  height="30"
                  rx="6"
                  stroke={INTRO_COLORS.debianRed}
                  strokeWidth="2.5"
                  fill="rgba(225, 29, 72, 0.25)"
                />
                <text
                  x="360"
                  y="112"
                  textAnchor="middle"
                  fill="#fecdd3"
                  fontSize="12"
                  fontFamily={FONT_MONO}
                  fontWeight="800"
                  letterSpacing="1"
                >
                  ▼ PC CONTROLLER BAY ▼
                </text>
              </svg>

              {/* Inspection Bracket Tag */}
              <div
                style={{
                  position: "absolute",
                  right: 12,
                  top: 8,
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: "rgba(225, 29, 72, 0.15)",
                  border: `1px solid ${INTRO_COLORS.debianRed}`,
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#fecdd3",
                  fontFamily: FONT_MONO,
                }}
              >
                X-RAY HARDWARE CUTAWAY
              </div>
            </div>

            {/* Industrial PC Controller Enclosure (Pops Forward from Bay) */}
            <div
              style={{
                width: "100%",
                borderRadius: 18,
                backgroundColor: "rgba(15, 22, 38, 0.95)",
                border: `2px solid rgba(225, 29, 72, 0.4)`,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
                padding: "24px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transform: `scale(${spPcUnit}) translateY(${(1 - spPcUnit) * 25}px)`,
                opacity: spPcUnit,
              }}
            >
              {/* PC Chassis Header with Diagnostic Status LEDs */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONT_MONO,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaMicrochip size={20} color={INTRO_COLORS.debianRed} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#f8fafc",
                      letterSpacing: 1,
                    }}
                  >
                    EMBEDDED IPC // DEBIAN CONTROLLER CORE
                  </span>
                </div>

                {/* 3 Physical Status LEDs */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#10b981",
                        boxShadow: "0 0 8px #10b981",
                      }}
                    />
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>PWR</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: "#38bdf8",
                        boxShadow: "0 0 8px #38bdf8",
                      }}
                    />
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>BUS</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: INTRO_COLORS.debianRed,
                        boxShadow: `0 0 10px ${INTRO_COLORS.debianRed}`,
                      }}
                    />
                    <span style={{ fontSize: 11, color: "#fecdd3", fontWeight: 700 }}>
                      DEBIAN
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Core: Glowing Debian Engine + Live Neofetch Terminal */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "260px 1fr",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                {/* Left: Glowing Debian CPU Core */}
                <div
                  style={{
                    height: 230,
                    borderRadius: 18,
                    backgroundColor: "#16050b",
                    border: `2px solid ${INTRO_COLORS.debianRed}`,
                    boxShadow: `0 0 35px ${INTRO_COLORS.debianGlow}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    position: "relative",
                  }}
                >
                  <SiDebian
                    size={68}
                    color={INTRO_COLORS.debianRed}
                    style={{
                      filter: `drop-shadow(0 0 18px rgba(225, 29, 72, ${0.7 + pulseWave * 0.3
                        }))`,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 900,
                      color: "#fecdd3",
                      fontFamily: FONT_MONO,
                      letterSpacing: 1.5,
                    }}
                  >
                    DEBIAN 12
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      color: "#fda4af",
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                    }}
                  >
                    <SiLinux size={14} />
                    <span>RT-KERNEL 6.1</span>
                  </div>
                </div>

                {/* Right: Floating Neofetch Terminal HUD */}
                <div
                  style={{
                    height: 230,
                    borderRadius: 18,
                    backgroundColor: "rgba(11, 16, 28, 0.95)",
                    border: "1.5px solid rgba(56, 189, 248, 0.3)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                    padding: "16px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transform: `scale(${spTerminal})`,
                    opacity: spTerminal,
                    fontFamily: FONT_MONO,
                  }}
                >
                  {/* Terminal Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      paddingBottom: 8,
                      fontSize: 13,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FaTerminal size={12} color="#38bdf8" />
                      <span style={{ color: "#e2e8f0", fontWeight: 700 }}>
                        root@pod-embedded:~# neofetch
                      </span>
                    </div>
                    <span style={{ color: INTRO_COLORS.wellnessMint, fontSize: 11 }}>
                      ● ACTIVE
                    </span>
                  </div>

                  {/* Neofetch Key Specs Output */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      fontSize: 14,
                      lineHeight: 1.35,
                    }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: INTRO_COLORS.debianRed, fontWeight: 700 }}>
                        OS:
                      </span>
                      <span style={{ color: "#f8fafc" }}>
                        Debian GNU/Linux 12 (bookworm)
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: INTRO_COLORS.skyBlue, fontWeight: 700 }}>
                        Host:
                      </span>
                      <span style={{ color: "#cbd5e1" }}>
                        Industrial Fanless Embedded PC
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: INTRO_COLORS.wellnessMint, fontWeight: 700 }}>
                        Kernel:
                      </span>
                      <span style={{ color: "#cbd5e1" }}>
                        6.1.0-rt (Real-Time Preempt)
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: INTRO_COLORS.sensorAmber, fontWeight: 700 }}>
                        Role:
                      </span>
                      <span style={{ color: "#f8fafc", fontWeight: 700 }}>
                        Pusat Kendali Hardware & Software
                      </span>
                    </div>
                  </div>

                  {/* Terminal Subline */}
                  <div
                    style={{
                      fontSize: 12,
                      color: "#64748b",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: 6,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>systemd: 14 services running</span>
                    <span style={{ color: INTRO_COLORS.wellnessMint }}>
                      [EXIT: 0]
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Connected Laser Conduits Linking PC to Pod Hardware */}
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 12,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: `1.5px solid rgba(16, 185, 129, ${0.4 + conduitPulse * 0.6})`,
                    boxShadow: `0 0 ${8 + conduitPulse * 12}px rgba(16, 185, 129, 0.25)`,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: FONT_MONO,
                    fontSize: 13,
                    color: "#f8fafc",
                  }}
                >
                  <FaBolt size={14} color={INTRO_COLORS.wellnessMint} />
                  <span>Actuator & Thermal</span>
                </div>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: `1.5px solid rgba(56, 189, 248, ${0.4 + conduitPulse * 0.6})`,
                    boxShadow: `0 0 ${8 + conduitPulse * 12}px rgba(56, 189, 248, 0.25)`,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: FONT_MONO,
                    fontSize: 13,
                    color: "#f8fafc",
                  }}
                >
                  <FaWifi size={14} color={INTRO_COLORS.skyBlue} />
                  <span>Biometric Sensors</span>
                </div>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    backgroundColor: "rgba(225, 29, 72, 0.12)",
                    border: `1.5px solid rgba(225, 29, 72, ${0.4 + conduitPulse * 0.6})`,
                    boxShadow: `0 0 ${8 + conduitPulse * 12}px rgba(225, 29, 72, 0.25)`,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: FONT_MONO,
                    fontSize: 13,
                    color: "#f8fafc",
                  }}
                >
                  <FaNetworkWired size={14} color={INTRO_COLORS.debianRed} />
                  <span>IPC & Cloud Sync</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Confirmation Bar */}
            <div
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(24, 6, 12, 0.85)",
                border: `1px solid ${INTRO_COLORS.debianRed}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: FONT_MONO,
                fontSize: 14,
                color: "#fecdd3",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: INTRO_COLORS.sensorAmber }}>[architecture]</span>
                <span>PC terintegrasi langsung di dalam chassis kapsul</span>
              </div>
              <span style={{ color: INTRO_COLORS.wellnessMint, fontWeight: 800 }}>
                [READY FOR CONTROLLER DEEP-DIVE]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
