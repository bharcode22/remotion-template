import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaAward,
  FaBolt,
  FaBroadcastTower,
  FaCheckCircle,
  FaCloud,
  FaDatabase,
  FaExchangeAlt,
  FaMicrochip,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { SiDebian } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Bezier interpolation helper for curved conduit packets
function getBezierPoint(
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  t: number
): [number, number] {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  const x = uuu * p0[0] + 3 * uu * t * p1[0] + 3 * u * tt * p2[0] + ttt * p3[0];
  const y = uuu * p0[1] + 3 * uu * t * p1[1] + 3 * u * tt * p2[1] + ttt * p3[1];
  return [x, y];
}

interface FleetPodProps {
  id: string;
  city: string;
  unit: string;
  x: number;
  y: number;
  springVal: number;
  pulseWave: number;
  isMeshActive: boolean;
}

const FleetPodNode: React.FC<FleetPodProps> = ({
  id,
  city,
  unit,
  x,
  y,
  springVal,
  pulseWave,
  isMeshActive,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${springVal})`,
        opacity: springVal,
        width: 290,
        height: 190,
        borderRadius: 18,
        backgroundColor: "rgba(10, 25, 26, 0.96)",
        border: `1.5px solid ${isMeshActive ? INTRO_COLORS.wellnessMint : INTRO_COLORS.skyBlue}`,
        boxShadow: `0 12px 30px rgba(0, 0, 0, 0.65), 0 0 ${
          16 + pulseWave * 14
        }px ${isMeshActive ? INTRO_COLORS.wellnessGlow : INTRO_COLORS.cyanGlow}`,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: FONT_MONO,
        boxSizing: "border-box",
        zIndex: 5,
      }}
    >
      {/* Top Connection Terminal Socket */}
      <div
        style={{
          position: "absolute",
          top: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 18,
          height: 6,
          borderRadius: "0 0 5px 5px",
          backgroundColor: isMeshActive ? INTRO_COLORS.wellnessMint : INTRO_COLORS.skyBlue,
          boxShadow: `0 0 10px ${isMeshActive ? INTRO_COLORS.wellnessMint : INTRO_COLORS.skyBlue}`,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
            }}
          >
            <SiDebian size={22} color={INTRO_COLORS.debianRed} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
              {id}
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>
              {city} // {unit}
            </div>
          </div>
        </div>
        <FaCheckCircle size={16} color={INTRO_COLORS.wellnessMint} />
      </div>

      {/* OS & Sync Status */}
      <div
        style={{
          fontSize: 11,
          color: "#cbd5e1",
          padding: "8px 10px",
          borderRadius: 8,
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          border: "1px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Mode Operasi:</span>
          <span style={{ color: INTRO_COLORS.wellnessMint, fontWeight: 800 }}>
            OTONOM MANDIRI
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Cloud Link:</span>
          <span style={{ color: INTRO_COLORS.skyBlue, fontWeight: 700 }}>
            TERHUBUNG [OK]
          </span>
        </div>
      </div>

      {/* Bottom Status Indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 10,
          color: "#94a3b8",
        }}
      >
        <span>LATENCY: 0.8ms</span>
        <span style={{ color: INTRO_COLORS.cyberCyan, fontWeight: 800 }}>
          DATA STREAM SYNC
        </span>
      </div>
    </div>
  );
};

export const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 9: Frames 1470 - 1710 | Line 17 of Naskah 12)
  //
  // Act 1 (F1470 - F1555):
  // Line 17 (Part 1): "Jadi, meskipun setiap POD bisa berjalan secara mandiri..."
  // ➔ Spotlight on HERO POD: Massive standalone edge unit with glowing autonomous shield
  //
  // Act 2 (F1555 - F1620):
  // Line 17 (Part 2): "...semuanya tetap bisa terhubung..."
  // ➔ Kinetic camera pull-out into Nationwide Fleet Constellation (6 interconnected PODs)
  //
  // Act 3 (F1620 - F1710):
  // Line 17 (Part 3): "...dan bertukar data dengan server cloud."
  // ➔ Grand Cloud Zenith ignition + High-speed bidirectional photon laser conduits + Climax Outro
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Act 1 Springs: Hero Autonomous Pod Entrance
  const spAct1Entrance = spring({
    frame: Math.max(0, frame - 1470),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 120 },
  });

  const spBadge = spring({
    frame: Math.max(0, frame - 1472),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeroShield = spring({
    frame: Math.max(0, frame - 1485),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // Staggered Diagnostics Pop Springs (Hero Pod Internal Modules)
  const spDiag1 = spring({
    frame: Math.max(0, frame - 1495),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });
  const spDiag2 = spring({
    frame: Math.max(0, frame - 1507),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });
  const spDiag3 = spring({
    frame: Math.max(0, frame - 1519),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 140 },
  });
  const spDiagBanner = spring({
    frame: Math.max(0, frame - 1530),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });

  // 2. Act 2 Springs: Fleet Constellation Expansion (F1555+)
  const spAct2Expansion = spring({
    frame: Math.max(0, frame - 1555),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 120 },
  });

  const spMeshLines = spring({
    frame: Math.max(0, frame - 1565),
    fps,
    config: { damping: 15, mass: 0.85, stiffness: 110 },
  });

  // Staggered Pod Nodes in Fleet
  const spPod1 = spring({
    frame: Math.max(0, frame - 1555),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod2 = spring({
    frame: Math.max(0, frame - 1560),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod3 = spring({
    frame: Math.max(0, frame - 1565),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod4 = spring({
    frame: Math.max(0, frame - 1570),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod5 = spring({
    frame: Math.max(0, frame - 1575),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod6 = spring({
    frame: Math.max(0, frame - 1580),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });

  // 3. Act 3 Springs: Cloud Core Zenith Ignition & Dual-Streams (F1620+)
  const spCloudZenith = spring({
    frame: Math.max(0, frame - 1620),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const spSynthesisNexus = spring({
    frame: Math.max(0, frame - 1630),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  const spFinaleBanner = spring({
    frame: Math.max(0, frame - 1645),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 130 },
  });

  // Continuous Dynamic Cycles
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;
  const radarRotation = ((frame - 1470) * 3) % 360;
  const gearRotation = ((frame - 1470) * 2.2) % 360;
  const cloudRingRotation = ((frame - 1620) * 1.8) % 360;

  // Active Phase Flags
  const isAct1 = frame < 1555;
  const isAct2 = frame >= 1555 && frame < 1620;
  const isAct3 = frame >= 1620;

  // Hero Pod Fade-out / Transition Progress to Fleet (F1550 - F1570)
  const heroTransition = interpolate(frame, [1550, 1570], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Photon Stream Speeds (Act 3)
  const streamSpeed = 0.07;
  const photonDown1 = ((frame - 1620) * streamSpeed) % 1;
  const photonDown2 = ((frame - 1615) * streamSpeed) % 1;
  const photonDown3 = ((frame - 1625) * streamSpeed) % 1;
  const photonUp1 = ((frame - 1622) * streamSpeed) % 1;
  const photonUp2 = ((frame - 1618) * streamSpeed) % 1;
  const photonUp3 = ((frame - 1628) * streamSpeed) % 1;

  // Cloud conduit points:
  // Cloud Origin: [490, 140]
  // Pod Node 1: [170, 880], Node 2: [490, 880], Node 3: [810, 880]
  // Pod Node 4: [170, 1140], Node 5: [490, 1140], Node 6: [810, 1140]
  const pBeam1 = getBezierPoint([490, 140], [300, 400], [170, 600], [170, 880], photonDown1);
  const pBeam2 = getBezierPoint([490, 140], [490, 400], [490, 600], [490, 880], photonDown2);
  const pBeam3 = getBezierPoint([490, 140], [680, 400], [810, 600], [810, 880], photonDown3);

  const pUpBeam1 = getBezierPoint([170, 880], [170, 600], [300, 400], [490, 140], photonUp1);
  const pUpBeam2 = getBezierPoint([490, 880], [490, 600], [490, 400], [490, 140], photonUp2);
  const pUpBeam3 = getBezierPoint([810, 880], [810, 600], [680, 400], [490, 140], photonUp3);

  // Outro Smooth Resolution Hold (F1680 - F1710)
  const outroSettle = interpolate(frame, [1685, 1710], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0, 0.2, 1),
  });

  return (
    <SceneContainer
      padding="45px 50px 45px"
      style={{
        justifyContent: "flex-start",
        gap: 12,
        opacity: 1,
        transform: `scale(${1 - outroSettle * 0.015})`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. DYNAMIC TOP ARCHITECTURE BADGE
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 26px",
          borderRadius: 9999,
          backgroundColor: "rgba(10, 30, 45, 0.95)",
          border: `1.5px solid ${isAct3 ? INTRO_COLORS.skyBlue : isAct2 ? INTRO_COLORS.cyberCyan : INTRO_COLORS.wellnessMint}`,
          boxShadow: `0 0 30px ${isAct3 ? INTRO_COLORS.cyanGlow : INTRO_COLORS.wellnessGlow}`,
        }}
      >
        {isAct1 && <FaShieldAlt size={15} color={INTRO_COLORS.wellnessMint} />}
        {isAct2 && <FaNetworkWired size={15} color={INTRO_COLORS.cyberCyan} />}
        {isAct3 && <FaAward size={16} color={INTRO_COLORS.sensorAmber} />}

        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: "#e0f2fe",
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          {isAct1 && "FASE 1: KETAHANAN OTONOM // RUNTIME MANDIRI"}
          {isAct2 && "FASE 2: FLEET CONSTELLATION // MESH INTERLINK"}
          {isAct3 && "GRAND FINALE // HYBRID EDGE-CLOUD SYNTHESIS"}
        </span>

        <div style={{ transform: `rotate(${gearRotation}deg)` }}>
          <FaSyncAlt
            size={14}
            color={isAct3 ? INTRO_COLORS.skyBlue : INTRO_COLORS.wellnessMint}
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. KINETIC NARRATIVE HEADLINE (Morphs with VO)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 22,
            color: "#94a3b8",
            fontWeight: 600,
            marginBottom: 2,
            letterSpacing: 1,
          }}
        >
          {isAct1 && "Arsitektur Kapsul Wellness Cerdas"}
          {isAct2 && "Multi-Cabang Nasional"}
          {isAct3 && "Kesimpulan Arsitektur Software"}
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 900,
            color: "#f8fafc",
            fontFamily: FONT_MONO,
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
          }}
        >
          {isAct1 && (
            <>
              Setiap POD Berjalan{" "}
              <span
                style={{
                  color: INTRO_COLORS.wellnessMint,
                  textShadow: `0 0 30px ${INTRO_COLORS.wellnessGlow}`,
                }}
              >
                Secara Mandiri
              </span>
            </>
          )}
          {isAct2 && (
            <>
              Semua POD Tetap{" "}
              <span
                style={{
                  color: INTRO_COLORS.cyberCyan,
                  textShadow: `0 0 30px ${INTRO_COLORS.cyanGlow}`,
                }}
              >
                Saling Terhubung
              </span>
            </>
          )}
          {isAct3 && (
            <>
              Otonom Mandiri,{" "}
              <span
                style={{
                  color: INTRO_COLORS.skyBlue,
                  textShadow: `0 0 30px ${INTRO_COLORS.cyanGlow}`,
                }}
              >
                Terhubung Ke Cloud
              </span>
            </>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. FULL-HEIGHT CINEMATIC STAGE (Explicit 1560px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          height: 1560,
          borderRadius: 24,
          backgroundColor: "rgba(6, 12, 26, 0.96)",
          border: `2px solid ${isAct3 ? INTRO_COLORS.skyBlue : INTRO_COLORS.cardBorder}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.75), 0 0 50px rgba(6, 182, 212, ${
            0.15 + pulseWave * 0.15
          })`,
          padding: "24px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Background Radial Ambiance */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: isAct3
              ? "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* ═════════════════════════════════════════════════════════════════════
            ACT 1: HERO AUTONOMOUS POD SHOWCASE (F1470 - F1555)
            Line 17: "Jadi, meskipun setiap POD bisa berjalan secara mandiri..."
           ═════════════════════════════════════════════════════════════════════ */}
        {heroTransition > 0 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: heroTransition,
              transform: `scale(${spAct1Entrance})`,
              zIndex: 30,
              pointerEvents: "none",
            }}
          >
            {/* Holographic Autonomous Shield Circles */}
            <div
              style={{
                position: "absolute",
                width: 740,
                height: 740,
                borderRadius: "50%",
                border: "2px dashed rgba(16, 185, 129, 0.4)",
                transform: `rotate(${radarRotation}deg) scale(${spHeroShield})`,
                boxShadow: `0 0 35px ${INTRO_COLORS.wellnessGlow}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 680,
                height: 680,
                borderRadius: "50%",
                border: "1.5px solid rgba(52, 211, 153, 0.25)",
                transform: `scale(${0.95 + pulseWave * 0.08})`,
              }}
            />

            {/* Radar Sweep Line */}
            <div
              style={{
                position: "absolute",
                width: 700,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.8), transparent)",
                transform: `rotate(${radarRotation * 1.5}deg)`,
                opacity: 0.7,
              }}
            />

            {/* HERO POD CARD */}
            <div
              style={{
                width: 760,
                borderRadius: 24,
                backgroundColor: "rgba(10, 28, 26, 0.98)",
                border: `2.5px solid ${INTRO_COLORS.wellnessMint}`,
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px ${INTRO_COLORS.wellnessGlow}`,
                padding: "36px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 28,
                fontFamily: FONT_MONO,
                position: "relative",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `2px solid ${INTRO_COLORS.wellnessMint}`,
                      boxShadow: `0 0 20px ${INTRO_COLORS.wellnessGlow}`,
                    }}
                  >
                    <SiDebian size={42} color={INTRO_COLORS.debianRed} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: "#f8fafc",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span>HERO POD 01</span>
                      <span
                        style={{
                          fontSize: 13,
                          padding: "4px 12px",
                          borderRadius: 8,
                          backgroundColor: "rgba(16, 185, 129, 0.25)",
                          color: INTRO_COLORS.wellnessMint,
                          fontWeight: 800,
                        }}
                      >
                        AUTONOMOUS WORKER
                      </span>
                    </div>
                    <div style={{ fontSize: 14, color: "#94a3b8", marginTop: 4 }}>
                      Debian PC Embedded Controller // Unit: JKT-01
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FaShieldAlt size={18} color={INTRO_COLORS.wellnessMint} />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 900,
                      color: INTRO_COLORS.wellnessMint,
                    }}
                  >
                    AIR-GAPPED READY
                  </span>
                </div>
              </div>

              {/* 3 Pillar Diagnostics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transform: `scale(${spDiag1})`,
                    opacity: spDiag1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaMicrochip size={18} color={INTRO_COLORS.wellnessMint} />
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#f8fafc" }}>
                      DEBIAN OS CORE
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>
                    Linux Kernel Realtime IPC
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      color: INTRO_COLORS.wellnessMint,
                      marginTop: 4,
                    }}
                  >
                    ✓ 0% CRASH RISK
                  </div>
                </div>

                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transform: `scale(${spDiag2})`,
                    opacity: spDiag2,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaDatabase size={18} color={INTRO_COLORS.cyberCyan} />
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#f8fafc" }}>
                      LOCAL DATABASE
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>
                    Full Offline SQLite / Storage
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      color: INTRO_COLORS.cyberCyan,
                      marginTop: 4,
                    }}
                  >
                    ✓ INDEPENDENT BUFFER
                  </div>
                </div>

                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transform: `scale(${spDiag3})`,
                    opacity: spDiag3,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaBolt size={18} color={INTRO_COLORS.sensorAmber} />
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#f8fafc" }}>
                      HARDWARE ENGINE
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>
                    Strobe, Audio & Sensor Hub
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      color: INTRO_COLORS.sensorAmber,
                      marginTop: 4,
                    }}
                  >
                    ✓ CONTINUOUS SESSION
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#e2e8f0",
                  transform: `scale(${spDiagBanner})`,
                  opacity: spDiagBanner,
                }}
              >
                <span>TERAPI WELLNESS TETAP BERJALAN NORMAL WALAUPUN INTERNET PUTUS</span>
                <span style={{ color: INTRO_COLORS.wellnessMint }}>[100% OTONOM]</span>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            ACT 2 & 3: FULL ORCHESTRATION ARCHITECTURE (F1555+)
           ═════════════════════════════════════════════════════════════════════ */}

        {/* ────────────── 1. TOP ZENITH: HYPER-CLOUD ORCHESTRATOR (Height: 180px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 180,
            borderRadius: 20,
            backgroundColor: "rgba(10, 26, 52, 0.95)",
            border: `2px solid ${INTRO_COLORS.skyBlue}`,
            boxShadow: `0 12px 35px rgba(0, 0, 0, 0.7), 0 0 35px ${INTRO_COLORS.cyanGlow}`,
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `scale(${spCloudZenith})`,
            opacity: spCloudZenith,
            zIndex: 10,
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* Cloud Orbital Glow Ring */}
          <div
            style={{
              position: "absolute",
              left: 45,
              top: "50%",
              transform: `translate(-50%, -50%) rotate(${cloudRingRotation}deg)`,
              width: 90,
              height: 90,
              borderRadius: "50%",
              border: "2px dashed rgba(56, 189, 248, 0.4)",
              pointerEvents: "none",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: "rgba(6, 182, 212, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${INTRO_COLORS.skyBlue}`,
                boxShadow: `0 0 20px ${INTRO_COLORS.cyanGlow}`,
                position: "relative",
              }}
            >
              <FaCloud size={36} color={INTRO_COLORS.skyBlue} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 23,
                  fontWeight: 900,
                  color: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span>CENTRAL CLOUD PLATFORM</span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "4px 12px",
                    borderRadius: 6,
                    backgroundColor: "rgba(6, 182, 212, 0.25)",
                    color: INTRO_COLORS.cyberCyan,
                    fontWeight: 800,
                  }}
                >
                  GLOBAL ORCHESTRATOR
                </span>
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: "#94a3b8",
                  marginTop: 6,
                }}
              >
                Pusat sinkronisasi multi-arah: Broadcast update & agregasi telemetri seluruh armada
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
              fontFamily: FONT_MONO,
            }}
          >
            <div
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 900,
                backgroundColor: "rgba(16, 185, 129, 0.18)",
                border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                color: INTRO_COLORS.wellnessMint,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaBroadcastTower size={14} color={INTRO_COLORS.wellnessMint} />
              <span>BIDIRECTIONAL SYNC: ACTIVE</span>
            </div>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>
              FLEET STATUS: 6 UNITS CONNECTED
            </span>
          </div>
        </div>

        {/* ────────────── 2. BI-DIRECTIONAL PHOTON LASER BUS CONDUITS (Height: 340px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 340,
            position: "relative",
            opacity: spMeshLines,
          }}
        >
          <svg
            width="932"
            height="340"
            viewBox="0 0 932 340"
            fill="none"
            style={{ position: "absolute", inset: 0 }}
          >
            {/* Background Conduit Tracks */}
            <path
              d="M 466 0 C 300 120, 148 200, 148 340"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="2.5"
            />
            <path
              d="M 466 0 L 466 340"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="3"
            />
            <path
              d="M 466 0 C 632 120, 784 200, 784 340"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="2.5"
            />

            {/* Glowing Active Tracks */}
            <path
              d="M 466 0 C 300 120, 148 200, 148 340"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeOpacity={0.65 + pulseWave * 0.35}
            />
            <path
              d="M 466 0 L 466 340"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 466 0 C 632 120, 784 200, 784 340"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeOpacity={0.65 + pulseWave * 0.35}
            />

            {/* Cross Mesh Links Between Nodes (Act 2 Mesh) */}
            <line
              x1="148"
              y1="340"
              x2="466"
              y2="340"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeOpacity={0.7}
            />
            <line
              x1="466"
              y1="340"
              x2="784"
              y2="340"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeOpacity={0.7}
            />

            {/* Conduits Terminal Points */}
            <circle cx="466" cy="0" r="5" fill={INTRO_COLORS.skyBlue} />
            <circle cx="148" cy="340" r="5" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="340" r="5" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="784" cy="340" r="5" fill={INTRO_COLORS.skyBlue} />
          </svg>

          {/* Flowing Downward Packets (Updates from Cloud) */}
          {isAct3 && (
            <>
              <div
                style={{
                  position: "absolute",
                  left: pBeam1[0] - 24,
                  top: pBeam1[1] - 500,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.skyBlue,
                  boxShadow: `0 0 16px ${INTRO_COLORS.skyBlue}`,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: pBeam2[0] - 24,
                  top: pBeam2[1] - 500,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.wellnessMint,
                  boxShadow: `0 0 18px ${INTRO_COLORS.wellnessMint}`,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: pBeam3[0] - 24,
                  top: pBeam3[1] - 500,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.skyBlue,
                  boxShadow: `0 0 16px ${INTRO_COLORS.skyBlue}`,
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Flowing Upward Packets (Telemetry to Cloud) */}
              <div
                style={{
                  position: "absolute",
                  left: pUpBeam1[0] - 24,
                  top: pUpBeam1[1] - 500,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: `0 0 14px #ffffff`,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: pUpBeam2[0] - 24,
                  top: pUpBeam2[1] - 500,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.cyberCyan,
                  boxShadow: `0 0 16px ${INTRO_COLORS.cyberCyan}`,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: pUpBeam3[0] - 24,
                  top: pUpBeam3[1] - 500,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: `0 0 14px #ffffff`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </>
          )}

          {/* Central Interlocking Synthesis Badge (Floating in Middle) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${spSynthesisNexus})`,
              opacity: spSynthesisNexus,
              padding: "12px 28px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 24, 46, 0.96)",
              border: `2px solid ${INTRO_COLORS.skyBlue}`,
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.7), 0 0 35px ${INTRO_COLORS.cyanGlow}`,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: FONT_MONO,
              zIndex: 15,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${gearRotation}deg)`,
              }}
            >
              <FaExchangeAlt size={20} color={INTRO_COLORS.skyBlue} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 900, color: "#f8fafc" }}>
                DUAL-SYNC INTEGRATION ENGINE
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Downstream Update Assets ⇄ Upstream Telemetry Logs
              </div>
            </div>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                color: INTRO_COLORS.wellnessMint,
                fontSize: 12,
                fontWeight: 900,
              }}
            >
              ONLINE 100%
            </div>
          </div>
        </div>

        {/* ────────────── 3. NATIONWIDE MULTI-POD FLEET CONSTELLATION (Height: 880px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 880,
            position: "relative",
            boxSizing: "border-box",
            transform: `scale(${spAct2Expansion})`,
            opacity: spAct2Expansion,
          }}
        >
          {/* Vertical Interconnecting Lines between Row 1 and Row 2 */}
          <svg
            width="932"
            height="880"
            viewBox="0 0 932 880"
            fill="none"
            style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
          >
            {/* Col 1 link */}
            <line
              x1="148"
              y1="220"
              x2="148"
              y2="480"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeOpacity={0.6}
            />
            {/* Col 2 link */}
            <line
              x1="466"
              y1="220"
              x2="466"
              y2="480"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeOpacity={0.7}
            />
            {/* Col 3 link */}
            <line
              x1="784"
              y1="220"
              x2="784"
              y2="480"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeOpacity={0.6}
            />
          </svg>

          {/* Row 1 Pod Nodes */}
          <FleetPodNode
            id="POD 01"
            city="Jakarta"
            unit="Unit: JKT-01"
            x={148}
            y={120}
            springVal={spPod1}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />
          <FleetPodNode
            id="POD 02"
            city="Surabaya"
            unit="Unit: SBY-02"
            x={466}
            y={120}
            springVal={spPod2}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />
          <FleetPodNode
            id="POD 03"
            city="Bali"
            unit="Unit: DPS-03"
            x={784}
            y={120}
            springVal={spPod3}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />

          {/* Row 2 Pod Nodes */}
          <FleetPodNode
            id="POD 04"
            city="Bandung"
            unit="Unit: BDO-04"
            x={148}
            y={380}
            springVal={spPod4}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />
          <FleetPodNode
            id="POD 05"
            city="Medan"
            unit="Unit: MDN-05"
            x={466}
            y={380}
            springVal={spPod5}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />
          <FleetPodNode
            id="POD 06"
            city="Makassar"
            unit="Unit: UPG-06"
            x={784}
            y={380}
            springVal={spPod6}
            pulseWave={pulseWave}
            isMeshActive={isAct3}
          />

          {/* ────────────── 4. BOTTOM GRAND FINALE PRODUCTION READY BANNER (Height: 90px) ────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: `translateX(-50%) scale(${spFinaleBanner})`,
              opacity: spFinaleBanner,
              width: "100%",
              height: 90,
              padding: "16px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 26, 48, 0.96)",
              border: `2px solid ${INTRO_COLORS.wellnessMint}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: FONT_MONO,
              boxSizing: "border-box",
              boxShadow: `0 15px 40px rgba(0, 0, 0, 0.8), 0 0 35px ${INTRO_COLORS.wellnessGlow}`,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                }}
              >
                <FaServer size={24} color={INTRO_COLORS.wellnessMint} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                  Arsitektur Sukses: Kapsul Wellness Siap Beroperasi Tanpa Gangguan
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                  Debian PC Tangguh di Edge Lokal × Cloud Platform Cerdas Skala Nasional
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 4,
              }}
            >
              <span
                style={{
                  color: INTRO_COLORS.wellnessMint,
                  fontWeight: 900,
                  fontSize: 16,
                  letterSpacing: 1,
                  textShadow: `0 0 20px ${INTRO_COLORS.wellnessGlow}`,
                }}
              >
                [PRODUCTION READY 100%]
              </span>
              <span style={{ fontSize: 11, color: INTRO_COLORS.skyBlue, fontWeight: 700 }}>
                FULL FLEET DEPLOYMENT OK
              </span>
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
