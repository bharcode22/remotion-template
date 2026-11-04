import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCheckDouble,
  FaCloud,
  FaGlobe,
  FaRocket,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { SiDocker, SiKubernetes } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// ─────────────────────────────────────────────────────────────────────────────
// 📐 SYMMETRICAL CONDUIT COORDINATES (Card Content Width: 912px)
// Node 1 (Docker): x = 152
// Node 2 (K8s):    x = 456 (912 / 2)
// Node 3 (Server): x = 760 (912 - 152)
// Exact spacing: 304px between each node!
// ─────────────────────────────────────────────────────────────────────────────
const NODE_1_X = 152;
const NODE_2_X = 456;
const NODE_3_X = 760;
const TRACK_Y = 78;

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 1105 - 1250)
  // Line 15: "Sedangkan CD membantu proses pengiriman aplikasi hingga ke production."
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F1108 - F1130)
  const spBadge = spring({
    frame: Math.max(0, frame - 1108),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F1114 - F1138)
  const spHeadline = spring({
    frame: Math.max(0, frame - 1114),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Card 1 Spring: Automated Delivery Highway & Cluster Pipeline (F1122 - F1152)
  const spCard1 = spring({
    frame: Math.max(0, frame - 1122),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // Stages inside Card 1
  const spStage1 = spring({
    frame: Math.max(0, frame - 1134),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spStage2 = spring({
    frame: Math.max(0, frame - 1146),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spStage3 = spring({
    frame: Math.max(0, frame - 1158),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 4. Card 2 Spring: Zero-Downtime Rollout & Multi-Region Cluster (F1168 - F1198)
  const spCard2 = spring({
    frame: Math.max(0, frame - 1168),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // Server Pod Nodes inside Card 2
  const spNode1 = spring({
    frame: Math.max(0, frame - 1178),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spNode2 = spring({
    frame: Math.max(0, frame - 1188),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spNode3 = spring({
    frame: Math.max(0, frame - 1198),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 5. Bottom Takeaway Banner (F1210 - F1238)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 1210),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Ambient Loop Wave
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  // Animated Energy Laser Packet from Docker Registry (152) to Live Production (760)
  const conduitCycle = ((frame - 1125) % 32) / 32;
  const conduitEnergyX = interpolate(conduitCycle, [0, 1], [NODE_1_X, NODE_3_X], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Traffic migration from v2.0 to v2.1
  const trafficShift = interpolate(frame, [1175, 1220], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const oldTraffic = Math.round(100 - trafficShift);
  const newTraffic = Math.round(trafficShift);

  return (
    <SceneContainer accentColor={CICD_COLORS.deployPurple}>
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
            1. TOP CATEGORY BADGE & SPOKEN HEADLINE (LINE 15)
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
            backgroundColor: "rgba(28, 12, 44, 0.95)",
            border: "1.5px solid rgba(168, 85, 247, 0.7)",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.35)",
            marginBottom: 14,
          }}
        >
          <SiDocker size={18} color="#c084fc" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#c084fc",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            CONTINUOUS DEPLOYMENT (CD)
          </span>
          <FaRocket size={15} color="#38bdf8" />
        </div>

        {/* Spoken Headline (Line 15) */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 24,
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
            Pilar Kedua CI/CD:
          </div>
          <h1
            style={{
              fontSize: 50,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: -1.2,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Pengiriman Otomatis Hingga ke </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #a855f7 0%, #c084fc 40%, #38bdf8 80%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 32px rgba(168, 85, 247, 0.6))",
              }}
            >
              Production!
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. CARD 1: THE AUTOMATED CD HIGHWAY (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spCard1}) translateY(${(1 - spCard1) * 20}px)`,
            opacity: spCard1,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(18, 10, 32, 0.96)",
            border: "2px solid rgba(168, 85, 247, 0.65)",
            boxShadow:
              "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(168, 85, 247, 0.3)",
            padding: "24px 24px",
            marginBottom: 24,
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Card Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  backgroundColor: "rgba(168, 85, 247, 0.25)",
                  border: "1.5px solid #a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
                }}
              >
                <FaRocket size={17} color="#c084fc" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                Jalur Rilis Otomatis ke Production
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(168, 85, 247, 0.18)",
                border: "1px solid rgba(168, 85, 247, 0.5)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#c084fc",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#a855f7",
                  boxShadow: "0 0 10px #a855f7",
                }}
              />
              AUTOPILOT DEPLOYMENT
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              SYMMETRICAL AUTOMATED CD CONDUIT (Height: 155px)
              Docker (x: 152) ➔ Kubernetes (x: 456) ➔ Server (x: 760)
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 155,
              backgroundColor: "rgba(9, 4, 18, 0.88)",
              borderRadius: 18,
              border: "1.5px solid rgba(168, 85, 247, 0.3)",
              boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.7)",
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            {/* SVG Connecting Track Line */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 912 155"
              fill="none"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="gradientConduitBeam" x1="152" y1={TRACK_Y} x2="760" y2={TRACK_Y} gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Background Outer Dash Line */}
              <line
                x1={NODE_1_X}
                y1={TRACK_Y}
                x2={NODE_3_X}
                y2={TRACK_Y}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="8"
                strokeDasharray="10 8"
                strokeLinecap="round"
              />

              {/* Glowing Inner Pipeline Beam */}
              <line
                x1={NODE_1_X}
                y1={TRACK_Y}
                x2={NODE_3_X}
                y2={TRACK_Y}
                stroke="url(#gradientConduitBeam)"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.85"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))",
                }}
              />
            </svg>

            {/* 1. Labels Above Circles (Centered Exactly on Each Node X) */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: NODE_1_X,
                transform: "translateX(-50%)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#c084fc",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              1. DOCKER CONTAINER
            </div>
            <div
              style={{
                position: "absolute",
                top: 12,
                left: NODE_2_X,
                transform: "translateX(-50%)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#38bdf8",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              2. KUBERNETES DISPATCH
            </div>
            <div
              style={{
                position: "absolute",
                top: 12,
                left: NODE_3_X,
                transform: "translateX(-50%)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#34d399",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              3. PRODUCTION LIVE
            </div>

            {/* 2. Traveling High-Speed Laser Energy Packet */}
            <div
              style={{
                position: "absolute",
                left: conduitEnergyX,
                top: TRACK_Y,
                transform: "translate(-50%, -50%)",
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                boxShadow:
                  "0 0 16px #ffffff, 0 0 30px #38bdf8, 0 0 50px #c084fc",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* 3. NODE 1: DOCKER CIRCLE (Large, Centered, Symmetrical) */}
            <div
              style={{
                position: "absolute",
                left: NODE_1_X,
                top: TRACK_Y,
                transform: "translate(-50%, -50%)",
                width: 76,
                height: 76,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(26, 10, 48, 0.98) 100%)",
                border: "2.5px solid #c084fc",
                boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(168, 85, 247, 0.65), inset 0 0 15px rgba(168, 85, 247, 0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiDocker size={42} color="#f5d0fe" />
              </div>
            </div>

            {/* 4. NODE 2: KUBERNETES CIRCLE (Large, Centered, Symmetrical) */}
            <div
              style={{
                position: "absolute",
                left: NODE_2_X,
                top: TRACK_Y,
                transform: "translate(-50%, -50%)",
                width: 76,
                height: 76,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(8, 26, 54, 0.98) 100%)",
                border: "2.5px solid #38bdf8",
                boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(56, 189, 248, 0.65), inset 0 0 15px rgba(56, 189, 248, 0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiKubernetes size={42} color="#bae6fd" />
              </div>
            </div>

            {/* 5. NODE 3: PRODUCTION SERVER CIRCLE (Large, Centered, Symmetrical) */}
            <div
              style={{
                position: "absolute",
                left: NODE_3_X,
                top: TRACK_Y,
                transform: "translate(-50%, -50%)",
                width: 76,
                height: 76,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(6, 38, 26, 0.98) 100%)",
                border: "2.5px solid #10b981",
                boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(16, 185, 129, 0.65), inset 0 0 15px rgba(16, 185, 129, 0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaServer size={38} color="#a7f3d0" />
              </div>
            </div>

            {/* 6. Subtitle Status Below Each Node */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: NODE_1_X,
                transform: "translateX(-50%)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#c084fc",
                whiteSpace: "nowrap",
              }}
            >
              ● Image Siap
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: NODE_2_X,
                transform: "translateX(-50%)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#38bdf8",
                whiteSpace: "nowrap",
              }}
            >
              ● Rolling Dispatch
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: NODE_3_X,
                transform: "translateX(-50%)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#34d399",
                whiteSpace: "nowrap",
              }}
            >
              ● 100% Live
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3 PIPELINE MILESTONE CARDS (Balanced, High Contrast, Glassmorphism)
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              gap: 14,
              alignItems: "center",
            }}
          >
            {/* Stage 1: Docker Container Image */}
            <div
              style={{
                transform: `scale(${spStage1})`,
                opacity: spStage1,
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                border: "2px solid rgba(168, 85, 247, 0.55)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#c084fc", fontWeight: 900, letterSpacing: 0.5 }}>
                  TAHAP 01
                </span>
                <SiDocker size={18} color="#c084fc" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Container Image
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  border: "1px solid rgba(168, 85, 247, 0.45)",
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#f5d0fe",
                }}
              >
                ● SIAP DIKIRIM
              </div>
            </div>

            <FaArrowRight size={18} color="rgba(168, 85, 247, 0.75)" />

            {/* Stage 2: K8s Orchestration */}
            <div
              style={{
                transform: `scale(${spStage2})`,
                opacity: spStage2,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "2px solid rgba(56, 189, 248, 0.55)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#38bdf8", fontWeight: 900, letterSpacing: 0.5 }}>
                  TAHAP 02
                </span>
                <SiKubernetes size={18} color="#38bdf8" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Orkestrasi K8s
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "1px solid rgba(56, 189, 248, 0.45)",
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#bae6fd",
                }}
              >
                ● ROLLING UPDATE
              </div>
            </div>

            <FaArrowRight size={18} color="rgba(56, 189, 248, 0.75)" />

            {/* Stage 3: Live Production */}
            <div
              style={{
                transform: `scale(${spStage3})`,
                opacity: spStage3,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "2px solid rgba(16, 185, 129, 0.55)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#34d399", fontWeight: 900, letterSpacing: 0.5 }}>
                  TAHAP 03
                </span>
                <FaCheckCircle size={17} color="#10b981" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Production Live
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.45)",
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#a7f3d0",
                }}
              >
                ● 100% AKTIF KE USER
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. CARD 2: ZERO-DOWNTIME ROLLOUT & SERVERS (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spCard2}) translateY(${(1 - spCard2) * 20}px)`,
            opacity: spCard2,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(10, 18, 32, 0.96)",
            border: "2px solid rgba(56, 189, 248, 0.65)",
            boxShadow:
              "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.3)",
            padding: "24px 24px",
            marginBottom: 24,
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  backgroundColor: "rgba(56, 189, 248, 0.25)",
                  border: "1.5px solid #38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)",
                }}
              >
                <FaCloud size={18} color="#38bdf8" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                Strategi Rollout Tanpa Gangguan (Zero Downtime)
              </span>
            </div>

            <div
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                color: "#10b981",
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              <FaShieldAlt size={14} color="#10b981" />
              100% ZERO DOWNTIME
            </div>
          </div>

          {/* Traffic Switch Progress */}
          <div
            style={{
              backgroundColor: "rgba(3, 10, 20, 0.88)",
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "16px 20px",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
                fontSize: 13,
                fontFamily: FONT_MONO,
              }}
            >
              <span style={{ color: "#94a3b8" }}>
                Versi Lama: <span style={{ color: "#f87171", fontWeight: 800 }}>{oldTraffic}%</span>
              </span>
              <span style={{ color: "#38bdf8", fontWeight: 900, letterSpacing: 0.5 }}>
                TRANSISI TRAFFIC LIVE: {newTraffic}%
              </span>
              <span style={{ color: "#94a3b8" }}>
                Versi Baru: <span style={{ color: "#34d399", fontWeight: 800 }}>{newTraffic}%</span>
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: 14,
                borderRadius: 999,
                backgroundColor: "rgba(239, 68, 68, 0.4)",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div style={{ width: `${oldTraffic}%`, height: "100%", backgroundColor: "rgba(239, 68, 68, 0.75)" }} />
              <div
                style={{
                  width: `${newTraffic}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #38bdf8 0%, #10b981 100%)",
                  boxShadow: "0 0 16px rgba(16, 185, 129, 0.85)",
                }}
              />
            </div>
          </div>

          {/* 3 Live Server Node Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {/* Server Node 1 */}
            <div
              style={{
                transform: `scale(${spNode1})`,
                opacity: spNode1,
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1.5px solid rgba(6, 182, 212, 0.45)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#38bdf8", fontWeight: 900 }}>
                  SERVER ASIA
                </span>
                <FaGlobe size={15} color="#38bdf8" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Region Singapore
              </div>
              <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#10b981", fontWeight: 800 }}>
                ● STATUS: 200 OK (LIVE)
              </div>
            </div>

            {/* Server Node 2 */}
            <div
              style={{
                transform: `scale(${spNode2})`,
                opacity: spNode2,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                border: "1.5px solid rgba(168, 85, 247, 0.45)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#c084fc", fontWeight: 900 }}>
                  SERVER US
                </span>
                <FaGlobe size={15} color="#c084fc" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Region West
              </div>
              <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#10b981", fontWeight: 800 }}>
                ● STATUS: 200 OK (LIVE)
              </div>
            </div>

            {/* Server Node 3 */}
            <div
              style={{
                transform: `scale(${spNode3})`,
                opacity: spNode3,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1.5px solid rgba(16, 185, 129, 0.45)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#34d399", fontWeight: 900 }}>
                  SERVER EROPA
                </span>
                <FaGlobe size={15} color="#34d399" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Region Frankfurt
              </div>
              <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#10b981", fontWeight: 800 }}>
                ● STATUS: 200 OK (LIVE)
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. BOTTOM TAKEAWAY BANNER (F1210+)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 1210 && (
          <div
            style={{
              transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 15}px)`,
              opacity: spBottomPill,
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 32px",
              borderRadius: 9999,
              backgroundColor: "rgba(22, 10, 36, 0.96)",
              border: "1.5px solid rgba(168, 85, 247, 0.8)",
              boxShadow: `0 0 ${25 + pulseWave * 15}px rgba(168, 85, 247, 0.4), 0 10px 30px rgba(0, 0, 0, 0.7)`,
            }}
          >
            <FaCheckDouble size={16} color="#c084fc" />
            <span
              style={{
                fontSize: 15,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              KESIMPULAN CD:{" "}
              <span style={{ color: "#c084fc" }}>
                PENGIRIMAN KE PRODUCTION TERJADI OTOMATIS TANPA MENGGANGGU PENGGUNA
              </span>
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
