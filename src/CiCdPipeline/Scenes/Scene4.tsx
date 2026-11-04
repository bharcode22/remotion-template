import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheckCircle,
  FaCheckDouble,
  FaCogs,
  FaInfinity,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { SiDocker, SiGit, SiGithubactions } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// ─────────────────────────────────────────────────────────────────────────────
// 📐 MATHEMATICAL DEVOPS INFINITY LOOP GEOMETRY
// Gerono/Lissajous curve: perfectly symmetrical, plump, rounded lobes
// x(t) = cx + A * cos(t)
// y(t) = cy + B * sin(2t)
// ─────────────────────────────────────────────────────────────────────────────
const CX = 400;
const CY = 140;
const A = 270;
const B = 88;
const SAMPLES = 120;

// Full track path
const FULL_TRACK_POINTS: string[] = [];
for (let i = 0; i <= SAMPLES; i++) {
  const t = (i / SAMPLES) * 2 * Math.PI;
  const x = CX + A * Math.cos(t);
  const y = CY + B * Math.sin(2 * t);
  FULL_TRACK_POINTS.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
}
FULL_TRACK_POINTS.push("Z");
const FULL_TRACK_PATH = FULL_TRACK_POINTS.join(" ");

// Left Lobe (CI Loop): t from pi/2 to 3pi/2 (i = 30 to 90)
const LEFT_LOBE_POINTS: string[] = [];
for (let i = 30; i <= 90; i++) {
  const t = (i / SAMPLES) * 2 * Math.PI;
  const x = CX + A * Math.cos(t);
  const y = CY + B * Math.sin(2 * t);
  LEFT_LOBE_POINTS.push(`${i === 30 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
}
const LEFT_LOBE_PATH = LEFT_LOBE_POINTS.join(" ");

// Right Lobe (CD Loop): t from 3pi/2 to 2pi (90 to 120) and 0 to pi/2 (0 to 30)
const RIGHT_LOBE_POINTS: string[] = [];
for (let i = 90; i <= 120; i++) {
  const t = (i / SAMPLES) * 2 * Math.PI;
  const x = CX + A * Math.cos(t);
  const y = CY + B * Math.sin(2 * t);
  RIGHT_LOBE_POINTS.push(`${i === 90 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
}
for (let i = 1; i <= 30; i++) {
  const t = (i / SAMPLES) * 2 * Math.PI;
  const x = CX + A * Math.cos(t);
  const y = CY + B * Math.sin(2 * t);
  RIGHT_LOBE_POINTS.push(`L ${x.toFixed(1)} ${y.toFixed(1)}`);
}
const RIGHT_LOBE_PATH = RIGHT_LOBE_POINTS.join(" ");

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 815 - 925)
  // Line 12: "Nah, di sinilah CI/CD berperan." (F821 - F902)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F818 - F838)
  const spBadge = spring({
    frame: Math.max(0, frame - 818),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 2. Spoken Headline Spring (F822 - F845)
  const spHeadline = spring({
    frame: Math.max(0, frame - 822),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 3. Central Infinity Loop Spring (F828 - F855)
  const spInfinity = spring({
    frame: Math.max(0, frame - 828),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 4. Left Card Spring: Continuous Integration (F838 - F868)
  const spCiCard = spring({
    frame: Math.max(0, frame - 838),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 5. Right Card Spring: Continuous Deployment (F848 - F878)
  const spCdCard = spring({
    frame: Math.max(0, frame - 848),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 6. Bottom Banner Spring (F865 - F895)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 865),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Ambient Oscillations & Loop Rotation
  const pulseWave = Math.sin((frame * Math.PI) / 14) * 0.5 + 0.5;

  // Particle Angle on the Infinity Curve (continuous smooth loop)
  const loopAngle = (frame * 0.07) % (2 * Math.PI);
  const getPoint = (angle: number) => ({
    x: CX + A * Math.cos(angle),
    y: CY + B * Math.sin(2 * angle),
  });

  const leadParticle = getPoint(loopAngle);
  const trail1 = getPoint(loopAngle - 0.06);
  const trail2 = getPoint(loopAngle - 0.12);
  const trail3 = getPoint(loopAngle - 0.18);
  const trail4 = getPoint(loopAngle - 0.24);

  return (
    <SceneContainer accentColor={CICD_COLORS.pipelineCyan}>
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
            1. TOP CATEGORY BADGE & HEADLINE (LINE 12)
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
            backgroundColor: "rgba(10, 28, 48, 0.95)",
            border: "1.5px solid rgba(6, 182, 212, 0.7)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
            marginBottom: 16,
          }}
        >
          <SiGithubactions size={17} color="#06b6d4" />
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
            SOLUSI MODERN // DEVOPS
          </span>
          <FaRocket size={15} color="#10b981" />
        </div>

        {/* Spoken Headline (Line 12): "Nah, di sinilah CI/CD berperan." */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 6,
              letterSpacing: -0.3,
            }}
          >
            Solusi Mengeliminasi Masalah Manual:
          </div>
          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: -1.2,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Nah, di Sinilah </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #06b6d4 0%, #38bdf8 45%, #10b981 80%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 35px rgba(6, 182, 212, 0.65))",
              }}
            >
              CI/CD Berperan!
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE HERO DEVOPS INFINITY LOOP RIBBON (880px x 300px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spInfinity})`,
            opacity: spInfinity,
            position: "relative",
            width: 880,
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {/* Glowing Infinity SVG Ribbon */}
          <svg
            width="800"
            height="280"
            viewBox="0 0 800 280"
            fill="none"
            style={{
              filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))",
            }}
          >
            <defs>
              <linearGradient id="gradientCiLoop" x1="130" y1="140" x2="400" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="gradientCdLoop" x1="400" y1="140" x2="670" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Subtle Outer Track Glow */}
            <path
              d={FULL_TRACK_PATH}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Lobe (CI - Continuous Integration) */}
            <path
              d={LEFT_LOBE_PATH}
              stroke="url(#gradientCiLoop)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Lobe (CD - Continuous Deployment) */}
            <path
              d={RIGHT_LOBE_PATH}
              stroke="url(#gradientCdLoop)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Precise Trail Particles rendered in SVG coordinate space */}
            <circle
              cx={trail4.x}
              cy={trail4.y}
              r="4"
              fill="#06b6d4"
              opacity="0.25"
            />
            <circle
              cx={trail3.x}
              cy={trail3.y}
              r="5.5"
              fill="#38bdf8"
              opacity="0.45"
            />
            <circle
              cx={trail2.x}
              cy={trail2.y}
              r="7"
              fill="#38bdf8"
              opacity="0.65"
            />
            <circle
              cx={trail1.x}
              cy={trail1.y}
              r="8.5"
              fill="#ffffff"
              opacity="0.85"
            />
            {/* Lead Luminous Energy Particle */}
            <circle
              cx={leadParticle.x}
              cy={leadParticle.y}
              r="10"
              fill="#ffffff"
              style={{
                filter: "drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px #38bdf8) drop-shadow(0 0 35px #a855f7)",
              }}
            />
          </svg>

          {/* Left Lobe Floating Core Label (CI) */}
          <div
            style={{
              position: "absolute",
              left: "33%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#06b6d4",
                letterSpacing: 1,
                lineHeight: 1,
                textShadow: "0 0 25px rgba(6, 182, 212, 0.7)",
              }}
            >
              CI
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#94a3b8",
                fontFamily: FONT_MONO,
                letterSpacing: 2,
                marginTop: 4,
              }}
            >
              INTEGRATION
            </span>
          </div>

          {/* Right Lobe Floating Core Label (CD) */}
          <div
            style={{
              position: "absolute",
              left: "67%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#c084fc",
                letterSpacing: 1,
                lineHeight: 1,
                textShadow: "0 0 25px rgba(168, 85, 247, 0.7)",
              }}
            >
              CD
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#94a3b8",
                fontFamily: FONT_MONO,
                letterSpacing: 2,
                marginTop: 4,
              }}
            >
              DEPLOYMENT
            </span>
          </div>

          {/* Central Nexus Core Orb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 58,
              height: 58,
              borderRadius: "50%",
              backgroundColor: "rgba(10, 24, 46, 0.98)",
              border: "2px solid #38bdf8",
              boxShadow: `0 0 ${25 + pulseWave * 20}px rgba(6, 182, 212, 0.65)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
            }}
          >
            <FaInfinity size={26} color="#38bdf8" />
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. TWIN PILLARS: CONTINUOUS INTEGRATION (CI) & CONTINUOUS DEPLOYMENT (CD)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 960,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            marginBottom: 28,
            boxSizing: "border-box",
          }}
        >
          {/* PILLAR 1: CONTINUOUS INTEGRATION (CI) */}
          <div
            style={{
              transform: `scale(${spCiCard}) translateY(${(1 - spCiCard) * 25}px)`,
              opacity: spCiCard,
              borderRadius: 24,
              backgroundColor: "rgba(9, 20, 38, 0.96)",
              border: "2px solid rgba(6, 182, 212, 0.65)",
              boxShadow:
                "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.3)",
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(6, 182, 212, 0.18)",
                  border: "1.5px solid #06b6d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                }}
              >
                <SiGit size={26} color="#06b6d4" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: "#38bdf8",
                    fontWeight: 800,
                    letterSpacing: 1,
                  }}
                >
                  PILAR 01 // OTOMATISASI INTEGRASI
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc" }}>
                  CI (Continuous Integration)
                </div>
              </div>
            </div>

            {/* Divider Accent */}
            <div
              style={{
                width: "100%",
                height: 1,
                background: "linear-gradient(90deg, rgba(6, 182, 212, 0.6) 0%, transparent 100%)",
              }}
            />

            {/* 3 Structured Micro-Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Feature 1: Auto Build */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaCogs size={16} color="#06b6d4" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Kompilasi &amp; Build Kode
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  AUTO OK
                </span>
              </div>

              {/* Feature 2: Automated Testing */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaCheckCircle size={15} color="#10b981" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Pengujian Unit &amp; Integrasi
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  100% PASS
                </span>
              </div>

              {/* Feature 3: Auto-Merge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <SiGithubactions size={15} color="#38bdf8" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Penggabungan Cabang Utama
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                  }}
                >
                  MERGED
                </span>
              </div>
            </div>
          </div>

          {/* PILLAR 2: CONTINUOUS DEPLOYMENT (CD) */}
          <div
            style={{
              transform: `scale(${spCdCard}) translateY(${(1 - spCdCard) * 25}px)`,
              opacity: spCdCard,
              borderRadius: 24,
              backgroundColor: "rgba(22, 12, 38, 0.96)",
              border: "2px solid rgba(168, 85, 247, 0.65)",
              boxShadow:
                "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(168, 85, 247, 0.3)",
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(168, 85, 247, 0.18)",
                  border: "1.5px solid #a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                }}
              >
                <SiDocker size={26} color="#c084fc" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    color: "#c084fc",
                    fontWeight: 800,
                    letterSpacing: 1,
                  }}
                >
                  PILAR 02 // OTOMATISASI RILIS
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc" }}>
                  CD (Continuous Deployment)
                </div>
              </div>
            </div>

            {/* Divider Accent */}
            <div
              style={{
                width: "100%",
                height: 1,
                background: "linear-gradient(90deg, rgba(168, 85, 247, 0.6) 0%, transparent 100%)",
              }}
            />

            {/* 3 Structured Micro-Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Feature 1: Docker Container Ready */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <SiDocker size={16} color="#c084fc" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Container Docker Siap Pakai
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#c084fc",
                    backgroundColor: "rgba(168, 85, 247, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                  }}
                >
                  VERIFIED
                </span>
              </div>

              {/* Feature 2: Automated Deployment */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaRocket size={15} color="#38bdf8" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Pengiriman Otomatis Server
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                  }}
                >
                  DEPLOYED
                </span>
              </div>

              {/* Feature 3: Zero-Downtime Rollout */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaShieldAlt size={15} color="#10b981" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                    Zero-Downtime Rollout ke User
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  ZERO LOSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. BOTTOM SUMMARY PILL (F865+)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 865 && (
          <div
            style={{
              transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 15}px)`,
              opacity: spBottomPill,
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 32px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 24, 46, 0.95)",
              border: "1.5px solid rgba(6, 182, 212, 0.75)",
              boxShadow: `0 0 ${25 + pulseWave * 15}px rgba(6, 182, 212, 0.4), 0 10px 30px rgba(0, 0, 0, 0.7)`,
            }}
          >
            <FaCheckDouble size={16} color="#10b981" />
            <span
              style={{
                fontSize: 15,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              PIPELINE OTOMATIS:{" "}
              <span style={{ color: "#38bdf8" }}>
                DARI KODE DEVELOPER LANGSUNG KE TANGAN PENGGUNA
              </span>
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
