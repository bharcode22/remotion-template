import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ArrowRight, CheckCircle, Database, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * TEMPLATE SCENE 3: PIPELINE & DATA STREAM SUB-SCENE
 * ========================================================
 * Menggabungkan konsep visual dinamis dari Portfolio & DontTestMe:
 * - SVG Animated Pipeline Line (stroke-dashoffset draw inspired by Station2Timeline)
 * - Laser Data Packet yang meluncur di sepanjang jalur pipa
 * - 3 Milestone Nodes dengan staggered spring pop-in
 * - Sub-Scene 3.1: Live packet stream inspector
 * - Konten placeholder: Lorem Ipsum profesional
 */
export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frame offset for Scene 3 (Global frames 200 - 270)
  const relFrame = Math.max(0, frame - 200);

  // 1. Entrance spring
  const sEntrance = spring({ frame: relFrame - 2, fps, config: { damping: 13, mass: 0.5, stiffness: 110 } });

  // 2. Animated SVG Pipeline Line Drawing (0 -> 1 progress)
  const lineProgress = interpolate(relFrame, [10, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const strokeDashoffset = interpolate(lineProgress, [0, 1], [580, 0]);

  // 3. Staggered Milestone Springs
  const sNode1 = spring({ frame: relFrame - 12, fps, config: { damping: 12, mass: 0.4 } });
  const sNode2 = spring({ frame: relFrame - 28, fps, config: { damping: 12, mass: 0.4 } });
  const sNode3 = spring({ frame: relFrame - 44, fps, config: { damping: 12, mass: 0.4 } });

  // 4. Moving Laser Packet Position along the pipeline (X: 120 -> 720)
  const packetX = interpolate(lineProgress, [0, 1], [110, 730]);
  const packetGlowOpacity = lineProgress > 0.05 && lineProgress < 0.98 ? 1 : 0.2;

  // 5. Sub-Scene 3.1 Inspector Card Entrance (relFrame >= 35)
  const sSub = spring({ frame: relFrame - 35, fps, config: { damping: 13, mass: 0.45, stiffness: 110 } });

  return (
    <div
      style={{
        transform: `scale(${sEntrance})`,
        opacity: sEntrance,
        width: "100%",
      }}
    >
      <SceneContainer
        sceneNumber="03"
        tag="LOREM // PIPELINE & STREAM"
        title="SED DO EIUSMOD TEMPOR INCIDIDUNT"
        subtitle="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip."
        accentColor="#8b5cf6"
        icon={GitBranch}
        footerNote="SCENE 3 // PIPELINE TRACING & PACKET SUB-SCENE 3.1"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Main Pipeline SVG Canvas */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.95)",
              border: "1.5px solid rgba(139, 92, 246, 0.4)",
              borderRadius: 24,
              padding: "26px 24px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(139, 92, 246, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#8b5cf6", fontFamily: "monospace", fontSize: 13, fontWeight: 800, letterSpacing: 1.5 }}>
                <Layers size={18} />
                <span>DYNAMIC PIPELINE FLOW</span>
              </div>
              <span style={{ fontFamily: "monospace", fontSize: 13, color: TECH_COLORS.textSecondary }}>
                PROGRESS: <span style={{ color: "#8b5cf6", fontWeight: 800 }}>{Math.round(lineProgress * 100)}%</span>
              </span>
            </div>

            {/* SVG Connecting Track & Traveling Packet */}
            <div style={{ position: "relative", width: "100%", height: 70, margin: "6px 0" }}>
              <svg width="100%" height="70" viewBox="0 0 840 70" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0 }}>
                {/* Background Guide Line */}
                <line x1="80" y1="35" x2="760" y2="35" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="3" strokeDasharray="6 6" />

                {/* Animated Drawing Laser Beam Line */}
                <line
                  x1="80"
                  y1="35"
                  x2="760"
                  y2="35"
                  stroke="#8b5cf6"
                  strokeWidth="4"
                  strokeDasharray="680"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 8px #8b5cf6)" }}
                />

                {/* Active Laser Data Packet */}
                <circle
                  cx={packetX}
                  cy="35"
                  r="7"
                  fill="#ffffff"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  opacity={packetGlowOpacity}
                  style={{ filter: "drop-shadow(0 0 14px #8b5cf6)" }}
                />
              </svg>
            </div>

            {/* 3 Milestone Node Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
              }}
            >
              {/* Node 1 */}
              <div
                style={{
                  transform: `scale(${sNode1})`,
                  opacity: sNode1,
                  backgroundColor: "rgba(139, 92, 246, 0.08)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Database size={20} color="#8b5cf6" />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: TECH_COLORS.textMuted }}>NODE 01</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>LOREM INIT</span>
                <span style={{ fontSize: 11, color: "#10b981", fontWeight: 700 }}>VERIFIED ✓</span>
              </div>

              {/* Node 2 */}
              <div
                style={{
                  transform: `scale(${sNode2})`,
                  opacity: sNode2,
                  backgroundColor: lineProgress >= 0.5 ? "rgba(139, 92, 246, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  border: lineProgress >= 0.5 ? "1px solid #8b5cf6" : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <GitBranch size={20} color={lineProgress >= 0.5 ? "#8b5cf6" : TECH_COLORS.textMuted} />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: TECH_COLORS.textMuted }}>NODE 02</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>IPSUM STREAM</span>
                <span style={{ fontSize: 11, color: lineProgress >= 0.5 ? "#8b5cf6" : TECH_COLORS.textMuted, fontWeight: 700 }}>
                  {lineProgress >= 0.5 ? "STREAMING ⚡" : "PENDING"}
                </span>
              </div>

              {/* Node 3 */}
              <div
                style={{
                  transform: `scale(${sNode3})`,
                  opacity: sNode3,
                  backgroundColor: lineProgress >= 0.9 ? "rgba(16, 185, 129, 0.12)" : "rgba(255, 255, 255, 0.04)",
                  border: lineProgress >= 0.9 ? "1px solid #10b981" : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <ShieldCheck size={20} color={lineProgress >= 0.9 ? "#10b981" : TECH_COLORS.textMuted} />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: TECH_COLORS.textMuted }}>NODE 03</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>DOLOR PACKET</span>
                <span style={{ fontSize: 11, color: lineProgress >= 0.9 ? "#10b981" : TECH_COLORS.textMuted, fontWeight: 700 }}>
                  {lineProgress >= 0.9 ? "DELIVERED ✓" : "EN ROUTE"}
                </span>
              </div>
            </div>
          </div>

          {/* Sub-Scene 3.1 Live Data Telemetry Bottom Bar */}
          <div
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.08)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: 18,
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${interpolate(sSub, [0, 1], [0.96, 1])})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CheckCircle size={18} color="#8b5cf6" />
              <span style={{ fontSize: 15, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                Ea reiciendis voluptatibus maiores alias consequatur aut perferendis.
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#8b5cf6", fontFamily: "monospace", fontSize: 14, fontWeight: 800 }}>
              <span>SYNCED</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};

export const Scene03 = Scene3;
