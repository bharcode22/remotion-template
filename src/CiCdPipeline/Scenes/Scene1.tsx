import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaRocket,
  FaShieldAlt,
  FaSyncAlt,
  FaTimesCircle,
} from "react-icons/fa";
import { SiGit, SiGithubactions } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 0 - 184)
  // Line 1: "bagaimana sebuah aplikasi," (F10 - F50)
  // Line 2: "bisa terus mendapatkan update tanpa harus melakukan semuanya secara manual?" (F50 - F160)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F6 - F25)
  const spBadge = spring({
    frame: Math.max(0, frame - 6),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F14 - F35)
  const spHeadline = spring({
    frame: Math.max(0, frame - 14),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Central Phone Mockup Spring (F30 - F55)
  const spApp = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. Incoming Update Cards
  // Card 1: Fitur Baru (F65 - F90)
  const spCard1 = spring({
    frame: Math.max(0, frame - 65),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 110 },
  });

  // Card 2: Peningkatan Performa (F82 - F105)
  const spCard2 = spring({
    frame: Math.max(0, frame - 82),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 110 },
  });

  // Card 3: Perbaikan Bug (F100 - F122)
  const spCard3 = spring({
    frame: Math.max(0, frame - 100),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 110 },
  });

  // 5. Manual Dilemma Friction Box (F124 - F148)
  const spManualDilemma = spring({
    frame: Math.max(0, frame - 124),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 6. Hook Question Pill (F144 - F170)
  const spQuestionPill = spring({
    frame: Math.max(0, frame - 144),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Ambient Ticker / Oscillations
  const pulseWave = Math.sin((frame * Math.PI) / 14) * 0.5 + 0.5;
  const syncRotate = (frame * 3.5) % 360;

  // Dynamic Version Tag Calculator
  let currentVersion = "v1.0.0";
  let versionColor = "#06b6d4";
  let updateProgress = 25;
  if (frame >= 108) {
    currentVersion = "v1.2.1";
    versionColor = "#10b981";
    updateProgress = 100;
  } else if (frame >= 90) {
    currentVersion = "v1.2.0";
    versionColor = "#a855f7";
    updateProgress = 75;
  } else if (frame >= 72) {
    currentVersion = "v1.1.0";
    versionColor = "#38bdf8";
    updateProgress = 50;
  }

  // Laser conduit animation offsets
  const conduitBeam1 = ((frame - 65) * 16) % 240;
  const conduitBeam2 = ((frame - 82) * 16) % 240;
  const conduitBeam3 = ((frame - 100) * 16) % 240;

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
            1. TOP CATEGORY BADGE & HEADLINE (LINE 1 & 2)
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
            backgroundColor: "rgba(11, 24, 46, 0.94)",
            border: "1.5px solid rgba(6, 182, 212, 0.65)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
            marginBottom: 14,
          }}
        >
          <SiGit size={16} color="#f97316" />
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
            DEVOPS &amp; CI/CD
          </span>
          <SiGithubactions size={15} color="#06b6d4" />
        </div>

        {/* Spoken Headline: "bagaimana sebuah aplikasi, bisa terus mendapatkan update tanpa harus melakukan semuanya secara manual?" */}
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
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Bagaimana sebuah aplikasi...
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
            <span style={{ color: "#f8fafc" }}>Bisa Terus </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #06b6d4 0%, #38bdf8 45%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.5))",
              }}
            >
              Mendapatkan Update?
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. CENTRAL HERO SHOWCASE: ACTIVE PRODUCTION APP & LIVE RELEASES
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "relative",
            width: 960,
            height: 580,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {/* A. Left Incoming Updates (Card 1 & Card 3) */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 240,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              zIndex: 20,
            }}
          >
            {/* Card 1: Fitur Baru */}
            {frame >= 65 && (
              <div
                style={{
                  transform: `scale(${spCard1}) translateX(${(1 - spCard1) * -30}px)`,
                  opacity: spCard1,
                  padding: "16px 18px",
                  borderRadius: 18,
                  backgroundColor: "rgba(10, 24, 46, 0.95)",
                  border: "1.5px solid rgba(6, 182, 212, 0.6)",
                  boxShadow:
                    "0 14px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(6, 182, 212, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      fontFamily: FONT_MONO,
                      color: "#38bdf8",
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                    }}
                  >
                    FITUR BARU
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 900, fontFamily: FONT_MONO, color: "#38bdf8" }}>
                    v1.1.0
                  </span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                  ✨ Fitur Baru
                </div>

                {/* Animated Laser Conduit Beam towards Phone */}
                <div
                  style={{
                    position: "absolute",
                    right: -60,
                    top: "50%",
                    width: 60,
                    height: 2,
                    background: "linear-gradient(90deg, rgba(6, 182, 212, 0.8), transparent)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${conduitBeam1 % 60}px`,
                      top: -3,
                      width: 10,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "#38bdf8",
                      boxShadow: "0 0 10px #38bdf8",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Card 3: Perbaikan Bug */}
            {frame >= 100 && (
              <div
                style={{
                  transform: `scale(${spCard3}) translateX(${(1 - spCard3) * -30}px)`,
                  opacity: spCard3,
                  padding: "16px 18px",
                  borderRadius: 18,
                  backgroundColor: "rgba(8, 28, 22, 0.95)",
                  border: "1.5px solid rgba(16, 185, 129, 0.6)",
                  boxShadow:
                    "0 14px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      fontFamily: FONT_MONO,
                      color: "#34d399",
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    BUG FIX
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 900, fontFamily: FONT_MONO, color: "#34d399" }}>
                    v1.2.1
                  </span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                  🔒 Perbaikan Bug
                </div>

                {/* Animated Laser Conduit Beam towards Phone */}
                <div
                  style={{
                    position: "absolute",
                    right: -60,
                    top: "50%",
                    width: 60,
                    height: 2,
                    background: "linear-gradient(90deg, rgba(16, 185, 129, 0.8), transparent)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${conduitBeam3 % 60}px`,
                      top: -3,
                      width: 10,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 10px #10b981",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* B. Center Modern Smartphone Device Mockup */}
          <div
            style={{
              transform: `scale(${spApp})`,
              opacity: spApp,
              width: 380,
              height: 560,
              borderRadius: 40,
              backgroundColor: "rgba(8, 14, 26, 0.98)",
              border: "3px solid rgba(6, 182, 212, 0.65)",
              boxShadow: `
                0 25px 60px rgba(0, 0, 0, 0.95),
                0 0 ${35 + pulseWave * 20}px rgba(6, 182, 212, 0.35),
                inset 0 0 30px rgba(6, 182, 212, 0.08)
              `,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "16px 20px",
              boxSizing: "border-box",
              zIndex: 30,
            }}
          >
            {/* Phone Top Notch */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom: 10,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: 11, fontFamily: FONT_MONO, fontWeight: 800, color: "#94a3b8" }}>
                09:41
              </div>
              <div
                style={{
                  width: 80,
                  height: 18,
                  borderRadius: 12,
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: versionColor,
                    boxShadow: `0 0 6px ${versionColor}`,
                  }}
                />
                <span style={{ fontSize: 9, fontFamily: FONT_MONO, fontWeight: 800, color: "#f8fafc" }}>
                  LIVE
                </span>
              </div>
              <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                5G
              </div>
            </div>

            {/* App Header Brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    border: "1.2px solid rgba(6, 182, 212, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaRocket size={18} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                    Aplikasi Anda
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>
                    Production Ready
                  </div>
                </div>
              </div>

              {/* Version Pill dynamically incrementing */}
              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: 999,
                  backgroundColor: `${versionColor}22`,
                  border: `1.5px solid ${versionColor}`,
                  boxShadow: `0 0 12px ${versionColor}44`,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: versionColor,
                  }}
                >
                  {currentVersion}
                </span>
              </div>
            </div>

            {/* Central Visual Showcase: Dynamic Auto-Update Pulse */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(5, 12, 24, 0.6)",
                borderRadius: 20,
                border: "1px solid rgba(6, 182, 212, 0.2)",
                padding: "20px 16px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: `${versionColor}15`,
                  border: `2px solid ${versionColor}`,
                  boxShadow: `0 0 ${20 + pulseWave * 15}px ${versionColor}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {frame >= 108 ? (
                  <FaCheckCircle size={44} color="#10b981" />
                ) : (
                  <div style={{ transform: `rotate(${syncRotate}deg)` }}>
                    <FaSyncAlt size={38} color={versionColor} />
                  </div>
                )}
              </div>

              <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", marginBottom: 6 }}>
                Update Otomatis
              </div>
              <div style={{ fontSize: 13, color: "#94a3b8", textAlign: "center", marginBottom: 16 }}>
                Fitur baru &amp; perbaikan bug masuk langsung ke aplikasi
              </div>

              {/* Progress Bar Container */}
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
                    width: `${updateProgress}%`,
                    height: "100%",
                    borderRadius: 999,
                    background: `linear-gradient(90deg, #06b6d4 0%, ${versionColor} 100%)`,
                    boxShadow: `0 0 10px ${versionColor}`,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  color: versionColor,
                  fontWeight: 800,
                }}
              >
                Status: {currentVersion} Active
              </div>
            </div>
          </div>

          {/* C. Right Incoming Updates (Card 2: Peningkatan Performa) */}
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 0,
              bottom: 0,
              width: 240,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 20,
            }}
          >
            {frame >= 82 && (
              <div
                style={{
                  transform: `scale(${spCard2}) translateX(${(1 - spCard2) * 30}px)`,
                  opacity: spCard2,
                  padding: "16px 18px",
                  borderRadius: 18,
                  backgroundColor: "rgba(24, 12, 38, 0.95)",
                  border: "1.5px solid rgba(168, 85, 247, 0.6)",
                  boxShadow:
                    "0 14px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(168, 85, 247, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      fontFamily: FONT_MONO,
                      color: "#c084fc",
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                    }}
                  >
                    PERFORMA
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 900, fontFamily: FONT_MONO, color: "#c084fc" }}>
                    v1.2.0
                  </span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#f8fafc" }}>
                  ⚡ Performa Naik
                </div>

                {/* Animated Laser Conduit Beam towards Phone */}
                <div
                  style={{
                    position: "absolute",
                    left: -60,
                    top: "50%",
                    width: 60,
                    height: 2,
                    background: "linear-gradient(270deg, rgba(168, 85, 247, 0.8), transparent)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: `${conduitBeam2 % 60}px`,
                      top: -3,
                      width: 10,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "#c084fc",
                      boxShadow: "0 0 10px #c084fc",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. LINE 2 CLASH: THE MANUAL FRICTION DILEMMA (F124 - F184)
            "tanpa harus melakukan semuanya secara manual?"
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 124 && (
          <div
            style={{
              transform: `scale(${spManualDilemma}) translateY(${(1 - spManualDilemma) * 20}px)`,
              opacity: spManualDilemma,
              width: 960,
              padding: "16px 24px",
              borderRadius: 20,
              backgroundColor: "rgba(28, 10, 16, 0.95)",
              border: "1.8px solid rgba(239, 68, 68, 0.65)",
              boxShadow: "0 18px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(239, 68, 68, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaExclamationTriangle size={24} color="#ef4444" />
              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#f87171" }}>
                  Tanpa Harus Melakukan Semuanya Secara Manual?
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>
                  Proses manual rentan kesalahan dan memakan waktu
                </div>
              </div>
            </div>

            {/* 3 Bold Indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {[
                { label: "Lambat", icon: <FaClock size={12} color="#f59e0b" /> },
                { label: "Rentan Salah", icon: <FaTimesCircle size={12} color="#ef4444" /> },
                { label: "Risiko Down", icon: <FaShieldAlt size={12} color="#f43f5e" /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 999,
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#fca5a5",
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            4. HOOK QUESTION PILL (F144 - F184)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 144 && (
          <div
            style={{
              transform: `scale(${spQuestionPill}) translateY(${(1 - spQuestionPill) * 15}px)`,
              opacity: spQuestionPill,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 25, 48, 0.95)",
              border: "1.5px solid rgba(6, 182, 212, 0.8)",
              boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(6, 182, 212, 0.4)`,
            }}
          >
            <div
              style={{
                transform: `rotate(${syncRotate}deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaSyncAlt size={14} color="#06b6d4" />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              BAGAIMANA CARANYA AGAR BISA{" "}
              <span style={{ color: "#38bdf8" }}>BERJALAN OTOMATIS?</span>
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
