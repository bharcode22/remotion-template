import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBolt,
  FaCheckCircle,
  FaHandPointUp,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & ANIMATIONS (Frames 885 - 1260)
  // Naskah Lines 18 - 20:
  // - Line 18: "Sederhananya, bayangkan sebuah pisau." (Frame 890 - 950)
  // - Line 19: "Frontend adalah bagian gagangnya, yang bersentuhan langsung dengan pengguna." (Frame 970 - 1085)
  // - Line 20: "Sedangkan Backend adalah mata pisaunya, yang menjalankan fungsi utama di baliknya." (Frame 1100 - 1230)
  // - Outro & Finale Synergy: (Frame 1180 - 1260)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Header & Badge Spring (Frame 886)
  const spHeader = spring({
    frame: Math.max(0, frame - 886),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 2. Knife Widget Spring (Frame 890)
  const spKnifeCard = spring({
    frame: Math.max(0, frame - 890),
    fps,
    config: { damping: 14, stiffness: 90, mass: 1 },
  });

  // 3. Frontend Handle Focus & Popup Card Spring (Frame 970)
  const spHandleCard = spring({
    frame: Math.max(0, frame - 970),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // 4. Backend Blade Focus & Popup Card Spring (Frame 1100)
  const spBladeCard = spring({
    frame: Math.max(0, frame - 1100),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // 5. Grand Finale Synergy Card Spring (Frame 1180)
  const spFinale = spring({
    frame: Math.max(0, frame - 1180),
    fps,
    config: { damping: 13, stiffness: 90, mass: 1.1 },
  });

  // Continuous Shimmer & Energy Pulses
  const pulseLoop = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;
  const laserFlow = ((frame * 6) % 800) - 400;

  // Active highlights
  const isHandleActive = frame >= 970;
  const isBladeActive = frame >= 1100;
  const isSynergyActive = frame >= 1180;

  // Dynamic accent glow color based on speech progression
  const currentAccent = isSynergyActive
    ? FE_VS_BE_COLORS.bePurple
    : isBladeActive
    ? FE_VS_BE_COLORS.bePurple
    : isHandleActive
    ? FE_VS_BE_COLORS.feCyan
    : FE_VS_BE_COLORS.feCyan;

  return (
    <SceneContainer accentColor={currentAccent}>
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
        {/* ─────────────────────────────────────────────────────────────────
            1. TOP CATEGORY BADGE & HEADLINE (Frame 886+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spHeader}) translateY(${(1 - spHeader) * -20}px)`,
            opacity: spHeader,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 16, 32, 0.92)",
            border: "1.5px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: FE_VS_BE_COLORS.feCyan,
              boxShadow: `0 0 10px ${FE_VS_BE_COLORS.feCyan}`,
            }}
          />
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
            ANALOGI SISTEM // THE KNIFE METAPHOR
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            transform: `scale(${spHeader}) translateY(${(1 - spHeader) * 20}px)`,
            opacity: spHeader,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: FE_VS_BE_COLORS.textPrimary,
              margin: 0,
              letterSpacing: -0.5,
              lineHeight: 1.25,
            }}
          >
            Sederhananya, Bayangkan Sebuah{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pisau
            </span>
          </h2>
          <p
            style={{
              fontSize: 22,
              color: FE_VS_BE_COLORS.textSecondary,
              fontWeight: 600,
              margin: "6px 0 0 0",
            }}
          >
            Satu alat yang terdiri dari dua bagian krusial dengan peran berbeda:
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. CENTRAL CYBER KNIFE METAPHOR WIDGET (Frame 890+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spKnifeCard}) translateY(${(1 - spKnifeCard) * 30}px)`,
            opacity: spKnifeCard,
            width: 920,
            padding: "20px 24px",
            borderRadius: 24,
            backgroundColor: "rgba(10, 16, 32, 0.94)",
            border: isSynergyActive
              ? "2px solid rgba(168, 85, 247, 0.6)"
              : isBladeActive
              ? "1.8px solid rgba(168, 85, 247, 0.5)"
              : isHandleActive
              ? "1.8px solid rgba(56, 189, 248, 0.5)"
              : "1.5px solid rgba(56, 189, 248, 0.3)",
            boxShadow: isSynergyActive
              ? "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.3)"
              : isBladeActive
              ? "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(168, 85, 247, 0.25)"
              : "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            marginBottom: 16,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Widget Top Header Bar */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: isHandleActive
                    ? FE_VS_BE_COLORS.feCyan
                    : "#64748b",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.textSecondary,
                  letterSpacing: 1.5,
                }}
              >
                SYS.ANALOGY_VIEWER // DUAL_CORE_METAPHOR
              </span>
            </div>
            <div
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: isSynergyActive
                  ? FE_VS_BE_COLORS.bePurple
                  : FE_VS_BE_COLORS.feCyan,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                padding: "3px 10px",
                borderRadius: 6,
              }}
            >
              {isSynergyActive
                ? "● COMPLETE HARMONY"
                : isBladeActive
                ? "● BACKEND ACTIVE"
                : isHandleActive
                ? "● FRONTEND ACTIVE"
                : "● READY"}
            </div>
          </div>

          {/* Custom SVG Cyber Knife Graphic */}
          <div
            style={{
              width: "100%",
              height: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <svg
              viewBox="0 0 840 140"
              width="840"
              height="140"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Handle Gradient (Frontend) */}
                <linearGradient
                  id="handleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#0c192c" />
                  <stop offset="50%" stopColor="#1e3a5f" />
                  <stop offset="100%" stopColor="#0e233d" />
                </linearGradient>

                {/* Blade Gradient (Backend) */}
                <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e1435" />
                  <stop offset="60%" stopColor="#3b1d6e" />
                  <stop offset="100%" stopColor="#58249c" />
                </linearGradient>

                {/* Blade Bevel Gradient */}
                <linearGradient
                  id="bladeBevel"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#4c1d95" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1e1035" stopOpacity="0.9" />
                </linearGradient>

                {/* Glow Filter Handle */}
                <filter
                  id="handleGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="8"
                    floodColor="#38bdf8"
                    floodOpacity={isHandleActive ? "0.9" : "0.2"}
                  />
                </filter>

                {/* Glow Filter Blade */}
                <filter
                  id="bladeGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="10"
                    floodColor="#a855f7"
                    floodOpacity={isBladeActive ? "0.95" : "0.25"}
                  />
                </filter>
              </defs>

              {/* ─────────────────────────────────────────────────────────────
                  LEFT HALF: GAGANG PISAU (FRONTEND) - Spans X: 50 to 330
                 ───────────────────────────────────────────────────────────── */}
              <g filter="url(#handleGlow)">
                {/* Ergonomic Handle Outer Body */}
                <path
                  d="M 50 70 
                     C 50 48, 80 44, 120 44 
                     L 290 46 
                     C 315 46, 325 50, 335 52
                     L 335 88
                     C 325 90, 315 94, 290 94
                     L 120 96
                     C 80 96, 50 92, 50 70 Z"
                  fill="url(#handleGrad)"
                  stroke={
                    isHandleActive
                      ? FE_VS_BE_COLORS.feCyan
                      : "rgba(56, 189, 248, 0.4)"
                  }
                  strokeWidth={isHandleActive ? 3 : 1.5}
                />

                {/* Ergonomic Grip Texture Lines */}
                {[110, 150, 190, 230, 270].map((gx, idx) => (
                  <path
                    key={`grip-${idx}`}
                    d={`M ${gx} 52 C ${gx + 8} 70, ${gx + 8} 70, ${gx} 88`}
                    fill="none"
                    stroke={
                      isHandleActive
                        ? "rgba(56, 189, 248, 0.75)"
                        : "rgba(255, 255, 255, 0.15)"
                    }
                    strokeWidth={isHandleActive ? 2.5 : 1.5}
                    strokeLinecap="round"
                  />
                ))}

                {/* Handle Cyber Spine Beam */}
                <line
                  x1="70"
                  y1="70"
                  x2="310"
                  y2="70"
                  stroke={FE_VS_BE_COLORS.feCyan}
                  strokeWidth={isHandleActive ? 2.5 : 1}
                  strokeDasharray={isHandleActive ? "8 4" : "4 4"}
                  opacity={isHandleActive ? 1 : 0.4}
                />

                {/* Grip Rivets */}
                <circle
                  cx="100"
                  cy="70"
                  r="4"
                  fill={FE_VS_BE_COLORS.feCyan}
                  opacity={isHandleActive ? 0.9 : 0.5}
                />
                <circle
                  cx="280"
                  cy="70"
                  r="4"
                  fill={FE_VS_BE_COLORS.feCyan}
                  opacity={isHandleActive ? 0.9 : 0.5}
                />
              </g>

              {/* ─────────────────────────────────────────────────────────────
                  CENTER: BOLSTER / GUARD (API BRIDGE) - Spans X: 335 to 370
                 ───────────────────────────────────────────────────────────── */}
              <g>
                <rect
                  x="335"
                  y="40"
                  width="32"
                  height="60"
                  rx="6"
                  fill="#1e293b"
                  stroke="rgba(245, 158, 11, 0.6)"
                  strokeWidth="2"
                />
                <line
                  x1="351"
                  y1="46"
                  x2="351"
                  y2="94"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="2 3"
                />
                <circle cx="351" cy="70" r="3" fill="#f59e0b" />
              </g>

              {/* ─────────────────────────────────────────────────────────────
                  RIGHT HALF: MATA PISAU (BACKEND) - Spans X: 367 to 790
                 ───────────────────────────────────────────────────────────── */}
              <g filter="url(#bladeGlow)">
                {/* Blade Main Body */}
                <path
                  d="M 367 48
                     L 680 48
                     C 725 50, 765 60, 790 70
                     C 765 80, 720 90, 680 92
                     L 367 92 Z"
                  fill="url(#bladeGrad)"
                  stroke={
                    isBladeActive
                      ? FE_VS_BE_COLORS.bePurple
                      : "rgba(168, 85, 247, 0.4)"
                  }
                  strokeWidth={isBladeActive ? 3 : 1.5}
                />

                {/* Blade Bevel & Razor Cutting Edge */}
                <path
                  d="M 370 70
                     L 680 70
                     C 720 72, 755 76, 790 70
                     C 755 82, 715 91, 680 92
                     L 370 92 Z"
                  fill="url(#bladeBevel)"
                />

                {/* Razor Sharp Plasma Line along Cutting Edge */}
                <path
                  d="M 367 92 L 680 92 C 720 90, 765 80, 790 70"
                  fill="none"
                  stroke={
                    isBladeActive
                      ? "#d8b4fe"
                      : "rgba(168, 85, 247, 0.6)"
                  }
                  strokeWidth={isBladeActive ? 3.5 : 2}
                  strokeLinecap="round"
                />

                {/* Circuit Traces Etched into Blade */}
                <path
                  d="M 400 58 L 500 58 L 520 66 L 640 66"
                  fill="none"
                  stroke={
                    isBladeActive
                      ? "rgba(168, 85, 247, 0.85)"
                      : "rgba(255, 255, 255, 0.15)"
                  }
                  strokeWidth="1.5"
                />
                <circle
                  cx="640"
                  cy="66"
                  r="3.5"
                  fill={isBladeActive ? FE_VS_BE_COLORS.bePurple : "#64748b"}
                />

                <path
                  d="M 440 64 L 560 64 L 580 58 L 620 58"
                  fill="none"
                  stroke={
                    isBladeActive
                      ? "rgba(168, 85, 247, 0.85)"
                      : "rgba(255, 255, 255, 0.15)"
                  }
                  strokeWidth="1.5"
                />
                <circle
                  cx="620"
                  cy="58"
                  r="3.5"
                  fill={isBladeActive ? FE_VS_BE_COLORS.bePurple : "#64748b"}
                />
              </g>

              {/* ─────────────────────────────────────────────────────────────
                  SYNCHRONIZED ENERGY SPARKS (F >= 1180)
                 ───────────────────────────────────────────────────────────── */}
              {isSynergyActive && (
                <circle
                  cx={420 + laserFlow}
                  cy="70"
                  r="6"
                  fill="#ffffff"
                  filter="url(#bladeGlow)"
                  opacity={pulseLoop}
                />
              )}
            </svg>
          </div>

          {/* Subtitle labels under the knife halves */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 40px",
              marginTop: 4,
              boxSizing: "border-box",
            }}
          >
            {/* Left label: Gagang */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                opacity: isHandleActive ? 1 : 0.6,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: FE_VS_BE_COLORS.feCyan,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>◀ GAGANG PISAU</span>
                <span style={{ color: "#94a3b8" }}>= FRONTEND</span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: FE_VS_BE_COLORS.textSecondary,
                  fontWeight: 600,
                }}
              >
                Titik Kontak Langsung Pengguna (UI/UX)
              </span>
            </div>

            {/* Center label: API Bridge */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0.85,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#f59e0b",
                }}
              >
                API GATEWAY
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: FE_VS_BE_COLORS.textMuted,
                  fontWeight: 600,
                }}
              >
                Penghubung
              </span>
            </div>

            {/* Right label: Mata Pisau */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                opacity: isBladeActive ? 1 : 0.6,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: FE_VS_BE_COLORS.bePurple,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "#94a3b8" }}>BACKEND =</span>
                <span>MATA PISAU ▶</span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: FE_VS_BE_COLORS.textSecondary,
                  fontWeight: 600,
                }}
              >
                Menjalankan Fungsi Utama di Baliknya
              </span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. TWO EXPLANATORY CARDS (FRONTEND & BACKEND)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 920,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              CARD 1: FRONTEND = GAGANG PISAU (Line 19 - Frame >= 970)
             ───────────────────────────────────────────────────────────── */}
          {frame >= 970 && (
            <div
              style={{
                transform: `scale(${spHandleCard}) translateY(${(1 - spHandleCard) * 30}px)`,
                opacity: spHandleCard,
                padding: "20px 24px",
                borderRadius: 20,
                backgroundColor: "rgba(10, 24, 46, 0.94)",
                border: "1.8px solid rgba(56, 189, 248, 0.55)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 16,
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    border: "1.5px solid rgba(56, 189, 248, 0.55)",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaHandPointUp size={28} color={FE_VS_BE_COLORS.feCyan} />
                </div>

                {/* Text Content */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(56, 189, 248, 0.25)",
                        color: FE_VS_BE_COLORS.feCyan,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      BAGIAN GAGANG
                    </span>
                    <h3
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Frontend adalah Gagangnya
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 16,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Bagian yang bersentuhan langsung dengan pengguna — memberikan
                    kontrol, tombol, dan visual UI.
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: FE_VS_BE_COLORS.feCyan,
                    whiteSpace: "nowrap",
                  }}
                >
                  👆 Direct Touchpoint
                </div>
                <div
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: FE_VS_BE_COLORS.feCyan,
                    whiteSpace: "nowrap",
                  }}
                >
                  🎨 Tampilan & Kontrol
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              CARD 2: BACKEND = MATA PISAU (Line 20 - Frame >= 1100)
             ───────────────────────────────────────────────────────────── */}
          {frame >= 1100 && (
            <div
              style={{
                transform: `scale(${spBladeCard}) translateY(${(1 - spBladeCard) * 30}px)`,
                opacity: spBladeCard,
                padding: "20px 24px",
                borderRadius: 20,
                backgroundColor: "rgba(24, 10, 46, 0.94)",
                border: "1.8px solid rgba(168, 85, 247, 0.55)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(168, 85, 247, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: 16,
                    backgroundColor: "rgba(168, 85, 247, 0.18)",
                    border: "1.5px solid rgba(168, 85, 247, 0.55)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaBolt size={28} color={FE_VS_BE_COLORS.bePurple} />
                </div>

                {/* Text Content */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(168, 85, 247, 0.25)",
                        color: FE_VS_BE_COLORS.bePurple,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      MATA PISAU
                    </span>
                    <h3
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Backend adalah Mata Pisaunya
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 16,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Menjalankan fungsi utama di baliknya — memproses komputasi,
                    logika bisnis, data, dan keamanan.
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.35)",
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: FE_VS_BE_COLORS.bePurple,
                    whiteSpace: "nowrap",
                  }}
                >
                  ⚡ Core Logic Execution
                </div>
                <div
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.35)",
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: FE_VS_BE_COLORS.bePurple,
                    whiteSpace: "nowrap",
                  }}
                >
                  🗄️ Database & Security
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              4. GRAND FINALE SYNERGY BANNER (Line 20 Outro - Frame >= 1180)
             ───────────────────────────────────────────────────────────── */}
          {frame >= 1180 && (
            <div
              style={{
                transform: `scale(${spFinale}) translateY(${(1 - spFinale) * 25}px)`,
                opacity: spFinale,
                padding: "20px 24px",
                borderRadius: 20,
                background:
                  "linear-gradient(90deg, rgba(10, 24, 46, 0.95) 0%, rgba(24, 10, 46, 0.95) 100%)",
                border: "2px solid rgba(168, 85, 247, 0.6)",
                boxShadow:
                  "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 85, 247, 0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              {/* Header Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  marginBottom: 10,
                }}
              >
                <FaCheckCircle size={13} color={FE_VS_BE_COLORS.feCyan} />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    letterSpacing: 1.5,
                    color: FE_VS_BE_COLORS.textPrimary,
                  }}
                >
                  DUAL ARCHITECTURE // SATU KESATUAN UTUH
                </span>
                <FaCheckCircle size={13} color={FE_VS_BE_COLORS.bePurple} />
              </div>

              {/* Title & Philosophy */}
              <h4
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: FE_VS_BE_COLORS.textPrimary,
                  margin: "0 0 6px 0",
                  letterSpacing: -0.3,
                }}
              >
                Frontend & Backend Saling Melengkapi
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: FE_VS_BE_COLORS.textSecondary,
                  margin: 0,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  maxWidth: 820,
                }}
              >
                Tanpa gagang, pisau sulit & berbahaya digunakan. Tanpa mata pisau,
                pisau kehilangan fungsinya. Bersama-sama, keduanya membangun
                aplikasi yang lengkap dan andal.
              </p>
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};
