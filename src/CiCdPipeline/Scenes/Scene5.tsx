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
  FaCodeBranch,
  FaCogs,
  FaShieldAlt,
  FaVial,
} from "react-icons/fa";
import { SiGit, SiGithubactions, SiJest } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 920 - 1110)
  // Line 14: "CI adalah proses menggabungkan perubahan kode sekaligus menjalankan build dan testing secara otomatis."
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F922 - F945)
  const spBadge = spring({
    frame: Math.max(0, frame - 922),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F928 - F952)
  const spHeadline = spring({
    frame: Math.max(0, frame - 928),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Card 1 Spring: Git Merge & Pipeline DAG Workflow (F938 - F968)
  const spMergeCard = spring({
    frame: Math.max(0, frame - 938),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // Pipeline Stages inside Card 1
  const spStage1 = spring({
    frame: Math.max(0, frame - 952),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spStage2 = spring({
    frame: Math.max(0, frame - 966),
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const spStage3 = spring({
    frame: Math.max(0, frame - 980),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 4. Card 2 Spring: Telemetry & Automated Test Charts (F992 - F1022)
  const spTelemetryCard = spring({
    frame: Math.max(0, frame - 992),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // Test Layers Bar Springs
  const spBar1 = spring({
    frame: Math.max(0, frame - 1004),
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const spBar2 = spring({
    frame: Math.max(0, frame - 1014),
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const spBar3 = spring({
    frame: Math.max(0, frame - 1024),
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const spBar4 = spring({
    frame: Math.max(0, frame - 1034),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 5. Bottom Takeaway Banner (F1050 - F1080)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 1050),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Ambient Loop Wave
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  // Animated Merge Flow Particle Timing (Cycles every 40 frames)
  const flowProgressA = ((frame - 935) % 40) / 40;
  const flowProgressB = ((frame - 945) % 40) / 40;
  const particleAx = interpolate(flowProgressA, [0, 0.5, 1], [40, 320, 520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const particleAy = interpolate(flowProgressA, [0, 0.5, 1], [35, 45, 62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const particleBx = interpolate(flowProgressB, [0, 0.5, 1], [40, 320, 520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const particleBy = interpolate(flowProgressB, [0, 0.5, 1], [90, 80, 62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Post-Merge Outflow Particle
  const flowProgressTrunk = ((frame - 955) % 35) / 35;
  const particleTrunkX = interpolate(flowProgressTrunk, [0, 1], [520, 860], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={CICD_COLORS.buildGreen}>
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
            1. TOP CATEGORY BADGE & SPOKEN HEADLINE (LINE 14)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(6, 32, 24, 0.94)",
            border: "1.5px solid rgba(16, 185, 129, 0.7)",
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
            marginBottom: 12,
          }}
        >
          <SiGit size={16} color="#10b981" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#34d399",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            CONTINUOUS INTEGRATION (CI)
          </span>
          <SiGithubactions size={15} color="#06b6d4" />
        </div>

        {/* Spoken Headline (Line 14) */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.3,
            }}
          >
            Pilar Pertama CI/CD:
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Menggabungkan Kode, </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #10b981 0%, #34d399 40%, #06b6d4 80%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.55))",
              }}
            >
              Build &amp; Testing Otomatis
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. GRAFIK 1: GIT MERGE DAG & PIPELINE WORKFLOW (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spMergeCard}) translateY(${(1 - spMergeCard) * 20}px)`,
            opacity: spMergeCard,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(8, 20, 32, 0.95)",
            border: "2px solid rgba(16, 185, 129, 0.6)",
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(16, 185, 129, 0.25)",
            padding: "20px 24px",
            marginBottom: 20,
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Card Title Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaCodeBranch size={16} color="#10b981" />
              </div>
              <span style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Grafik 1: Penggabungan Kode (Merge DAG)
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#34d399",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              CI PIPELINE OTOMATIS
            </div>
          </div>

          {/* SVG Git Directed Acyclic Graph (DAG) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 120,
              backgroundColor: "rgba(3, 10, 18, 0.8)",
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 912 120"
              fill="none"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              {/* Branch A (Orange: Fitur Baru) */}
              <path
                d="M 30,30 L 260,30 C 370,30 430,62 510,62"
                stroke="#f97316"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                opacity="0.8"
              />
              {/* Branch B (Cyan: Perbaikan Bug) */}
              <path
                d="M 30,90 L 260,90 C 370,90 430,62 510,62"
                stroke="#06b6d4"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                opacity="0.8"
              />
              {/* Main Trunk Line (Emerald) */}
              <path
                d="M 510,62 L 880,62"
                stroke="#10b981"
                strokeWidth="4.5"
              />

              <circle cx="100" cy="30" r="9" fill="#030712" stroke="#f97316" strokeWidth="3" />
              <circle cx="230" cy="30" r="9" fill="#030712" stroke="#f97316" strokeWidth="3" />
              <circle cx="110" cy="90" r="9" fill="#030712" stroke="#06b6d4" strokeWidth="3" />
              <circle cx="240" cy="90" r="9" fill="#030712" stroke="#06b6d4" strokeWidth="3" />

              {/* Merge Convergence Node */}
              <circle
                cx="510"
                cy="62"
                r="13"
                fill="#10b981"
                stroke="#ffffff"
                strokeWidth="3.5"
                style={{ filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.9))" }}
              />

              <circle
                cx="710"
                cy="62"
                r="11"
                fill="#030712"
                stroke="#34d399"
                strokeWidth="3.5"
                style={{ filter: "drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))" }}
              />
              <circle cx="860" cy="62" r="12" fill="#10b981" stroke="#38bdf8" strokeWidth="3.5" />
            </svg>

            {/* Clean Labels */}
            <div style={{ position: "absolute", top: 8, left: 30, fontSize: 11, fontFamily: FONT_MONO, fontWeight: 800, color: "#fb923c" }}>
              Branch: Fitur Baru
            </div>
            <div style={{ position: "absolute", bottom: 8, left: 30, fontSize: 11, fontFamily: FONT_MONO, fontWeight: 800, color: "#38bdf8" }}>
              Branch: Perbaikan Bug
            </div>
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 450,
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#34d399",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                padding: "3px 10px",
                borderRadius: 6,
                border: "1px solid #10b981",
              }}
            >
              ⚡ AUTO-MERGE (TANPA KONFLIK)
            </div>
            <div style={{ position: "absolute", bottom: 12, left: 710, fontSize: 12, fontFamily: FONT_MONO, fontWeight: 900, color: "#38bdf8" }}>
              ✓ ARTIFACT VALID
            </div>

            {/* Traveling Glowing Particles */}
            <div
              style={{
                position: "absolute",
                left: particleAx,
                top: particleAy,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#f97316",
                boxShadow: "0 0 14px #f97316, 0 0 25px #ffffff",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: particleBx,
                top: particleBy,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#06b6d4",
                boxShadow: "0 0 14px #06b6d4, 0 0 25px #ffffff",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: particleTrunkX,
                top: 62,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#34d399",
                boxShadow: "0 0 16px #34d399, 0 0 30px #ffffff",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* 3 Interconnected Pipeline Nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              gap: 12,
              alignItems: "center",
            }}
          >
            {/* Stage 1: Auto-Merge */}
            <div
              style={{
                transform: `scale(${spStage1})`,
                opacity: spStage1,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1.5px solid rgba(16, 185, 129, 0.45)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#34d399", fontWeight: 800 }}>
                  TAHAP 1
                </span>
                <FaCheckCircle size={14} color="#10b981" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                Gabung Kode Otomatis
              </div>
              <div style={{ fontSize: 12, color: "#10b981", fontWeight: 800 }}>
                ● Auto-Merge Selesai
              </div>
            </div>

            <FaArrowRight size={16} color="rgba(16, 185, 129, 0.6)" />

            {/* Stage 2: Automated Build */}
            <div
              style={{
                transform: `scale(${spStage2})`,
                opacity: spStage2,
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1.5px solid rgba(6, 182, 212, 0.45)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#38bdf8", fontWeight: 800 }}>
                  TAHAP 2
                </span>
                <FaCogs size={14} color="#06b6d4" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                Kompilasi &amp; Build
              </div>
              <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 800 }}>
                ● Artifact Siap Pakai
              </div>
            </div>

            <FaArrowRight size={16} color="rgba(6, 182, 212, 0.6)" />

            {/* Stage 3: Automated Testing */}
            <div
              style={{
                transform: `scale(${spStage3})`,
                opacity: spStage3,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                border: "1.5px solid rgba(168, 85, 247, 0.45)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#c084fc", fontWeight: 800 }}>
                  TAHAP 3
                </span>
                <FaVial size={14} color="#a855f7" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                Testing Otomatis
              </div>
              <div style={{ fontSize: 12, color: "#10b981", fontWeight: 800 }}>
                ● 100% Lolos Pengujian
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. GRAFIK 2: HASIL TESTING & KUALITAS KODE (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spTelemetryCard}) translateY(${(1 - spTelemetryCard) * 20}px)`,
            opacity: spTelemetryCard,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(7, 18, 34, 0.96)",
            border: "2px solid rgba(6, 182, 212, 0.65)",
            boxShadow:
              "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.3)",
            padding: "22px 24px",
            marginBottom: 20,
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
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid #06b6d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiJest size={18} color="#06b6d4" />
              </div>
              <span style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
                Grafik 2: Hasil Testing &amp; Kualitas Kode Otomatis
              </span>
            </div>

            <div
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                color: "#10b981",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FaShieldAlt size={14} color="#10b981" />
              ZERO HUMAN ERRORS
            </div>
          </div>

          {/* 3 Clean Stat Badges */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#34d399", fontFamily: FONT_MONO }}>
                100%
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>TEST PASSED</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#f8fafc" }}>Semua Lolos</div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#38bdf8", fontFamily: FONT_MONO }}>
                98%
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>COVERAGE</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#f8fafc" }}>Kode Teruji</div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                border: "1.5px solid rgba(168, 85, 247, 0.35)",
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#c084fc", fontFamily: FONT_MONO }}>
                1.5m
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>DURASI</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#f8fafc" }}>Cepat &amp; Efisien</div>
              </div>
            </div>
          </div>

          {/* Test Execution Progress Bars */}
          <div
            style={{
              backgroundColor: "rgba(3, 10, 18, 0.85)",
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              { label: "1. Unit Tests", count: "100% Lolos", color: "#10b981", val: spBar1 },
              { label: "2. Integration Tests", count: "100% Lolos", color: "#06b6d4", val: spBar2 },
              { label: "3. Security SAST Scan", count: "0 Vulnerabilities", color: "#38bdf8", val: spBar3 },
              { label: "4. E2E Automation", count: "100% Lolos", color: "#a855f7", val: spBar4 },
            ].map((bar, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                  }}
                >
                  <span style={{ color: "#f8fafc", fontWeight: 800 }}>{bar.label}</span>
                  <span style={{ color: bar.color, fontWeight: 900 }}>{bar.count}</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${bar.val * 100}%`,
                      height: "100%",
                      borderRadius: 999,
                      background: `linear-gradient(90deg, ${bar.color}aa 0%, ${bar.color} 100%)`,
                      boxShadow: `0 0 10px ${bar.color}88`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. BOTTOM TAKEAWAY BANNER (F1050+)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 1050 && (
          <div
            style={{
              transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 15}px)`,
              opacity: spBottomPill,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(6, 28, 20, 0.96)",
              border: "1.5px solid rgba(16, 185, 129, 0.8)",
              boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(16, 185, 129, 0.4)`,
            }}
          >
            <FaCheckDouble size={14} color="#10b981" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              KESIMPULAN CI:{" "}
              <span style={{ color: "#34d399" }}>
                KODE LANGSUNG DIUJI OTOMATIS BEGITU DILAKUKAN MERGE
              </span>
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
