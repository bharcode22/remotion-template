import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBan,
  FaBolt,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaServer,
  FaShieldAlt,
  FaTimesCircle,
} from "react-icons/fa";
import { SiDocker } from "react-icons/si";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & PHASES (Frames 1065 - 1440)
  // Phase 1 (F1065 - F1220): "Jadi, kita tidak perlu melakukan build & deployment manual..."
  // Phase 2 (F1220 - F1440): "Cukup build satu kali, simpan artefaknya, lalu distribusikan..."
  // ─────────────────────────────────────────────────────────────────────────────
  const isPhase2 = frame >= 1220;

  // Scene Entrance Spring
  const spScene = spring({
    frame: Math.max(0, frame - 1065),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Phase 1: Manual Stamped Stopped Spring (F1075+)
  const spManualCard = spring({
    frame: Math.max(0, frame - 1075),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Red Stamp Slam Impact (F1100+)
  const spRedStamp = spring({
    frame: Math.max(0, frame - 1100),
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 150 },
  });

  // Modern Solution Card Spring (F1130+)
  const spSolutionCard = spring({
    frame: Math.max(0, frame - 1130),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Phase 2: 3-Pillar Golden Formula Springs (F1220+)
  const spPillar1 = spring({
    frame: Math.max(0, frame - 1225),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spPillar2 = spring({
    frame: Math.max(0, frame - 1280),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spPillar3 = spring({
    frame: Math.max(0, frame - 1330),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Connecting laser progress between pillars
  const laser1to2 = interpolate(frame, [1270, 1282], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const laser2to3 = interpolate(frame, [1320, 1332], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Grand Finale Success Stamp Spring (F1365+)
  const spFinalStamp = spring({
    frame: Math.max(0, frame - 1365),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 130 },
  });

  // Ambient oscillation
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#030712",
        fontFamily: FONT_SANS,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 60px 100px",
        boxSizing: "border-box",
        transform: `scale(${spScene})`,
        opacity: spScene,
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════
          LAYER A: DYNAMIC ATMOSPHERE & AMBIENT GLOWS
         ═════════════════════════════════════════════════════════════════ */}
      {/* Top Emerald Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(16, 185, 129, ${0.18 + pulseWave * 0.05}) 0%, transparent 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Cyan Accent Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, transparent 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      {/* Cyber Grid SVG */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.12,
        }}
      >
        <defs>
          <pattern
            id="scene5Grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#scene5Grid)" />
      </svg>

      {/* ═════════════════════════════════════════════════════════════════
          HEADER: CATEGORY BADGE & SPOKEN HEADLINE
         ═════════════════════════════════════════════════════════════════ */}
      {/* Top Category Badge */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 24px",
          borderRadius: 9999,
          backgroundColor: "rgba(10, 30, 22, 0.95)",
          border: "1.5px solid rgba(16, 185, 129, 0.7)",
          boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
          marginBottom: 24,
        }}
      >
        <FaBolt size={14} color="#10b981" />
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#10b981",
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          {isPhase2 ? "FORMULA CI/CD // ATURAN UTAMA" : "KESIMPULAN // ARSITEKTUR CI/CD"}
        </span>
        <FaCheckCircle size={14} color="#10b981" />
      </div>

      {/* Spoken Headline */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginBottom: 36,
          minHeight: 130,
        }}
      >
        {!isPhase2 ? (
          /* Headline Phase 1 (Line 15: F1065 - F1220) */
          <h1
            style={{
              fontSize: 52,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Tidak Perlu Build &amp; Deploy </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.65))",
              }}
            >
              Secara Manual di Setiap Server!
            </span>
          </h1>
        ) : (
          /* Headline Phase 2 (Lines 16 - 19: F1220 - F1440) */
          <h1
            style={{
              fontSize: 52,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Cukup Build Satu Kali, </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #10b981 0%, #38bdf8 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.65))",
              }}
            >
              Distribusikan ke Semua Server!
            </span>
          </h1>
        )}
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          BODY: HERO VISUAL CARDS
         ═════════════════════════════════════════════════════════════════ */}
      {!isPhase2 ? (
        /* ───────────── PHASE 1: MANUAL PROBLEM DISCARDED & REPLACED (F1065 - F1220) ───────────── */
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(10, 18, 36, 0.96)",
            border: "2px solid rgba(239, 68, 68, 0.5)",
            boxShadow:
              "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(239, 68, 68, 0.25)",
            padding: "36px 32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {/* Card 1A: Old Manual Deployment (Stamped Stopped) */}
          <div
            style={{
              position: "relative",
              transform: `scale(${spManualCard})`,
              opacity: spManualCard,
              borderRadius: 18,
              backgroundColor: "rgba(30, 12, 16, 0.9)",
              border: "1.5px solid rgba(239, 68, 68, 0.45)",
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Red Diagonal Slam Stamp: "DIHENTIKAN / MANUAL STOPPED" */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(-12deg) scale(${spRedStamp})`,
                opacity: spRedStamp,
                zIndex: 10,
                border: "4px solid #ef4444",
                borderRadius: 12,
                padding: "8px 24px",
                backgroundColor: "rgba(185, 28, 28, 0.9)",
                boxShadow: "0 0 35px rgba(239, 68, 68, 0.8)",
                pointerEvents: "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: "#fff",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                🚫 JANGAN DITERAPKAN!
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#fecaca",
                  marginTop: 2,
                }}
              >
                TIDAK COCOK UNTUK BANYAK SERVER
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  backgroundColor: "rgba(239, 68, 68, 0.18)",
                  border: "1.5px solid #ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTimesCircle size={28} color="#ef4444" />
              </div>

              <div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                  Deployment Manual Satu per Satu
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    color: "#f87171",
                    marginTop: 4,
                  }}
                >
                  264x SSH Manual • ~8.5 Jam Terbuang • Risiko Beda Versi
                </div>
              </div>
            </div>

            <FaBan size={32} color="rgba(239, 68, 68, 0.4)" />
          </div>

          {/* Transformation Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 120,
                height: 2,
                background: "linear-gradient(90deg, #ef4444 0%, #10b981 100%)",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "4px 14px",
                borderRadius: 9999,
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              ➔ DIGANTIKAN DENGAN OTOMASI CI/CD
            </span>
            <div
              style={{
                width: 120,
                height: 2,
                background: "linear-gradient(90deg, #10b981 0%, #ef4444 100%)",
              }}
            />
          </div>

          {/* Card 1B: The Modern CI/CD Solution */}
          <div
            style={{
              transform: `scale(${spSolutionCard})`,
              opacity: spSolutionCard,
              borderRadius: 18,
              backgroundColor: "rgba(10, 30, 22, 0.9)",
              border: "2px solid #10b981",
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1.5px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaCheckCircle size={28} color="#10b981" />
              </div>

              <div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                  Solusi CI/CD: Pipeline Terotomasi Penuh
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    color: "#a7f3d0",
                    marginTop: 4,
                  }}
                >
                  Build 1x • Simpan di Cloud • Tarik Bersamaan ke Seluruh Server
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.25)",
                border: "1px solid #10b981",
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              100% EFISIEN
            </span>
          </div>

          {/* Bottom Summary Pill */}
          <div
            style={{
              alignSelf: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              fontSize: 13,
              fontFamily: FONT_MONO,
              fontWeight: 900,
              color: "#a7f3d0",
            }}
          >
            <FaShieldAlt size={14} color="#10b981" />
            <span>MENGHILANGKAN RISIKO HUMAN ERROR &amp; BOTTLENECK MANUAL</span>
          </div>
        </div>
      ) : (
        /* ───────────── PHASE 2: THE 3 GOLDEN PILLARS MASTER CARD (F1220 - F1440) ───────────── */
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: 960,
            borderRadius: 24,
            backgroundColor: "rgba(10, 18, 36, 0.96)",
            border: "2px solid rgba(16, 185, 129, 0.65)",
            boxShadow:
              "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(16, 185, 129, 0.3)",
            padding: "32px 28px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Top Principle Bar */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#10b981",
              }}
            >
              ALUR UTAMA CI/CD // 3 LANGKAH EMAS
            </span>
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#94a3b8",
              }}
            >
              BUILD ONCE, DEPLOY ANYWHERE
            </span>
          </div>

          {/* 3 Pillars Flow Container */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* PILLAR 1: BUILD SATU KALI (F1225+) */}
            <div
              style={{
                transform: `scale(${spPillar1})`,
                opacity: spPillar1,
                borderRadius: 18,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "2px solid #38bdf8",
                boxShadow: `0 0 ${18 + pulseWave * 12}px rgba(56, 189, 248, 0.35)`,
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(56, 189, 248, 0.25)",
                  border: "1.5px solid #38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiDocker size={30} color="#38bdf8" />
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#38bdf8",
                }}
              >
                LANGKAH 01
              </div>

              <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc", lineHeight: 1.2 }}>
                Build Satu Kali
              </div>

              <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                1 Paket Artefak Utuh
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#38bdf8",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "1px solid #38bdf8",
                  padding: "4px 10px",
                  borderRadius: 6,
                }}
              >
                ⚡ 1x COMPILE
              </span>
            </div>

            {/* Connecting Laser 1 -> 2 */}
            <div
              style={{
                width: 28,
                height: 4,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                position: "relative",
                borderRadius: 2,
              }}
            >
              {laser1to2 > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: `${laser1to2 * 100}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#06b6d4",
                    boxShadow: "0 0 10px #06b6d4, 0 0 4px #fff",
                  }}
                />
              )}
            </div>

            {/* PILLAR 2: SIMPAN ARTEFAK (F1280+) */}
            <div
              style={{
                transform: `scale(${spPillar2})`,
                opacity: spPillar2,
                borderRadius: 18,
                backgroundColor: "rgba(6, 182, 212, 0.12)",
                border: "2px solid #06b6d4",
                boxShadow: `0 0 ${18 + pulseWave * 12}px rgba(6, 182, 212, 0.35)`,
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(6, 182, 212, 0.25)",
                  border: "1.5px solid #06b6d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaCloudUploadAlt size={30} color="#06b6d4" />
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#06b6d4",
                }}
              >
                LANGKAH 02
              </div>

              <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc", lineHeight: 1.2 }}>
                Simpan Artefak
              </div>

              <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                Cloud Registry / S3
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#06b6d4",
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid #06b6d4",
                  padding: "4px 10px",
                  borderRadius: 6,
                }}
              >
                🔒 SINGLE SOURCE
              </span>
            </div>

            {/* Connecting Laser 2 -> 3 */}
            <div
              style={{
                width: 28,
                height: 4,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                position: "relative",
                borderRadius: 2,
              }}
            >
              {laser2to3 > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: `${laser2to3 * 100}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 10px #10b981, 0 0 4px #fff",
                  }}
                />
              )}
            </div>

            {/* PILLAR 3: DISTRIBUSIKAN KE SEMUA SERVER (F1330+) */}
            <div
              style={{
                transform: `scale(${spPillar3})`,
                opacity: spPillar3,
                borderRadius: 18,
                backgroundColor: "rgba(16, 185, 129, 0.16)",
                border: "2px solid #10b981",
                boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(16, 185, 129, 0.45)`,
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "1.5px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaServer size={28} color="#10b981" />
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#10b981",
                }}
              >
                LANGKAH 03
              </div>

              <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc", lineHeight: 1.2 }}>
                Distribusi Serentak
              </div>

              <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#a7f3d0" }}>
                264+ Server Fleet
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#10b981",
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "1px solid #10b981",
                  padding: "4px 10px",
                  borderRadius: 6,
                }}
              >
                ✅ ZERO DRIFT
              </span>
            </div>
          </div>

          {/* Grand Finale Impact Stamp */}
          <div
            style={{
              transform: `scale(${spFinalStamp})`,
              opacity: spFinalStamp,
              alignSelf: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 36px",
              borderRadius: 16,
              backgroundColor: "rgba(16, 185, 129, 0.25)",
              border: "2px solid #10b981",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.55)",
            }}
          >
            <FaCheckCircle size={22} color="#10b981" />
            <span
              style={{
                fontSize: 17,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#a7f3d0",
                letterSpacing: 1,
              }}
            >
              ⚡ 100% OTOMATIS • BEBAS HUMAN ERROR • EFISIENSI MAKSIMAL
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
