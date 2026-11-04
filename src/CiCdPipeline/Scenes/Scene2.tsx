import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBox,
  FaBug,
  FaCheckCircle,
  FaCheckDouble,
  FaCogs,
  FaLaptopCode,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaVial,
} from "react-icons/fa";
import { SiDocker, SiGit, SiKubernetes, SiTypescript } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & PHASES (Frames 180 - 535)
  // Phase 1 (Lines 4 & 5): F180 - F330
  // - "Misalnya, setiap kali developer selesai menambahkan fitur atau memperbaiki bug."
  // Phase 2 (Lines 6 & 7): F328 - F535
  // - Line 6: "Kode tersebut harus melalui beberapa proses," (Typewriter effect)
  // - Line 7: "mulai dari build, testing, sampai deployment ke server." (Slide camera movement)
  // ─────────────────────────────────────────────────────────────────────────────

  const isPhase1 = frame < 332;
  const isPhase2 = frame >= 328;

  const phase1Opacity = interpolate(frame, [324, 332], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const phase2Opacity = interpolate(frame, [328, 336], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // PHASE 1 SPRINGS (Lines 4 - 5)
  // ─────────────────────────────────────────────────────────────────────────────
  const spP1Badge = spring({
    frame: Math.max(0, frame - 182),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const spP1Headline = spring({
    frame: Math.max(0, frame - 188),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const spP1LeftCard = spring({
    frame: Math.max(0, frame - 212),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  const spP1RightCard = spring({
    frame: Math.max(0, frame - 232),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  const spP1Terminal = spring({
    frame: Math.max(0, frame - 268),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 115 },
  });

  const spP1SummaryPill = spring({
    frame: Math.max(0, frame - 290),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // PHASE 2 SPRINGS & TYPEWRITER (Lines 6 - 7)
  // ─────────────────────────────────────────────────────────────────────────────
  const spP2Badge = spring({
    frame: Math.max(0, frame - 330),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Line 6 Typewriter Text calculation
  const typewriterFullText = "Kode tersebut harus melalui beberapa proses,";
  const typewriterChars = Math.floor(
    interpolate(frame, [340, 390], [0, typewriterFullText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.linear,
    })
  );
  const typedText = typewriterFullText.slice(0, typewriterChars);
  const showTypewriterCursor =
    frame >= 338 && frame < 408 ? Math.floor(frame / 6) % 2 === 0 : false;

  // Line 7 Subtitle Spring
  const spP2Subtitle = spring({
    frame: Math.max(0, frame - 404),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SLIDE CAMERA MOVEMENT (Line 7: F405 - F535)
  // Slide across 3 stages:
  // - F405 - F435: Center on Stage 1 (Build)      -> cameraX: 360
  // - F435 - F452: Smooth slide to Stage 2 (Test) -> cameraX: 0
  // - F472 - F488: Smooth slide to Stage 3 (Deploy)-> cameraX: -360
  // - F512 - F530: Pull back to full overview     -> cameraX: 0, scale: 0.88
  // ─────────────────────────────────────────────────────────────────────────────
  let cameraX = 360;
  if (frame < 435) {
    cameraX = 360;
  } else if (frame < 452) {
    cameraX = interpolate(frame, [435, 452], [360, 0], {
      easing: Easing.bezier(0.22, 1, 0.36, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (frame < 472) {
    cameraX = 0;
  } else if (frame < 488) {
    cameraX = interpolate(frame, [472, 488], [0, -360], {
      easing: Easing.bezier(0.22, 1, 0.36, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else {
    cameraX = -360;
  }

  const cameraScale = interpolate(frame, [512, 528], [1.0, 0.88], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const cameraOverviewX = interpolate(frame, [512, 528], [-360, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const finalCameraX = frame >= 512 ? cameraOverviewX : cameraX;

  // Traveling Energy Payload position (-420 to +420)
  const payloadPositionX = interpolate(frame, [412, 506], [-420, 420], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Ambient Loop
  const pulseWave = Math.sin((frame * Math.PI) / 14) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor={CICD_COLORS.pipelineBlue}>
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
            PART 1: LINES 4 & 5 (Frames 180 - 330)
            "Misalnya, setiap kali developer selesai menambahkan fitur atau memperbaiki bug."
           ═════════════════════════════════════════════════════════════════ */}
        {isPhase1 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: phase1Opacity,
            }}
          >
            {/* Top Category Badge */}
            <div
              style={{
                transform: `scale(${spP1Badge}) translateY(${(1 - spP1Badge) * -20}px)`,
                opacity: spP1Badge,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 24, 46, 0.94)",
                border: "1.5px solid rgba(14, 165, 233, 0.65)",
                boxShadow: "0 0 25px rgba(14, 165, 233, 0.35)",
                marginBottom: 14,
              }}
            >
              <FaLaptopCode size={16} color="#38bdf8" />
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
                DEVELOPER WORKSPACE
              </span>
              <SiGit size={16} color="#f97316" />
            </div>

            {/* Headline (Lines 4 & 5) */}
            <div
              style={{
                transform: `scale(${spP1Headline}) translateY(${(1 - spP1Headline) * -15}px)`,
                opacity: spP1Headline,
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
                Misalnya, setiap kali developer selesai...
              </div>
              <h1
                style={{
                  fontSize: 46,
                  fontWeight: 900,
                  margin: 0,
                  lineHeight: 1.2,
                  letterSpacing: -1,
                }}
              >
                <span style={{ color: "#38bdf8" }}>Menambahkan Fitur </span>
                <span style={{ color: "#94a3b8" }}>atau </span>
                <span style={{ color: "#f59e0b" }}>Memperbaiki Bug</span>
              </h1>
            </div>

            {/* Split Dual Workstations: Fitur Baru vs Perbaikan Bug */}
            <div
              style={{
                width: 960,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                marginBottom: 20,
                boxSizing: "border-box",
              }}
            >
              {/* Card A: Menambahkan Fitur Baru */}
              <div
                style={{
                  transform: `scale(${spP1LeftCard}) translateY(${(1 - spP1LeftCard) * 25}px)`,
                  opacity: spP1LeftCard,
                  borderRadius: 22,
                  backgroundColor: "rgba(9, 20, 38, 0.96)",
                  border: "1.8px solid rgba(6, 182, 212, 0.6)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(6, 182, 212, 0.22)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    height: 44,
                    padding: "0 18px",
                    backgroundColor: "rgba(14, 26, 50, 0.98)",
                    borderBottom: "1px solid rgba(6, 182, 212, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontFamily: FONT_MONO, color: "#38bdf8", fontWeight: 800 }}>
                    <SiTypescript size={14} color="#38bdf8" />
                    Feature.ts
                  </div>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 999,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      border: "1px solid #06b6d4",
                      fontSize: 10,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    FITUR BARU
                  </span>
                </div>

                {/* Clean Code Diff */}
                <div
                  style={{
                    padding: "20px 22px",
                    fontFamily: FONT_MONO,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "#cbd5e1",
                    backgroundColor: "rgba(5, 12, 24, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div style={{ color: "#38bdf8", fontWeight: 800 }}>
                    + // Tambah Fitur Checkout Baru
                  </div>
                  <div style={{ backgroundColor: "rgba(16, 185, 129, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#34d399", fontWeight: 700 }}>
                    + async function addNewFeature() &#123;
                  </div>
                  <div style={{ backgroundColor: "rgba(16, 185, 129, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#34d399", fontWeight: 700 }}>
                    + &nbsp;&nbsp;return activateService();
                  </div>
                  <div style={{ backgroundColor: "rgba(16, 185, 129, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#34d399", fontWeight: 700 }}>
                    + &#125;
                  </div>
                </div>

                {/* Footer Tag */}
                <div
                  style={{
                    padding: "12px 18px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: "rgba(10, 20, 38, 0.98)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  <span style={{ color: "#38bdf8" }}>✨ Fitur Baru Selesai Ditulis</span>
                  <FaCheckCircle size={14} color="#10b981" />
                </div>
              </div>

              {/* Card B: Memperbaiki Bug */}
              <div
                style={{
                  transform: `scale(${spP1RightCard}) translateY(${(1 - spP1RightCard) * 25}px)`,
                  opacity: spP1RightCard,
                  borderRadius: 22,
                  backgroundColor: "rgba(26, 16, 32, 0.96)",
                  border: "1.8px solid rgba(245, 158, 11, 0.6)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.22)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    height: 44,
                    padding: "0 18px",
                    backgroundColor: "rgba(34, 20, 42, 0.98)",
                    borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontFamily: FONT_MONO, color: "#fbbf24", fontWeight: 800 }}>
                    <SiTypescript size={14} color="#f59e0b" />
                    BugFix.ts
                  </div>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 999,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      border: "1px solid #f59e0b",
                      fontSize: 10,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: "#fbbf24",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <FaBug size={9} color="#fbbf24" />
                    PERBAIKAN BUG
                  </span>
                </div>

                {/* Clean Code Diff */}
                <div
                  style={{
                    padding: "20px 22px",
                    fontFamily: FONT_MONO,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "#cbd5e1",
                    backgroundColor: "rgba(5, 12, 24, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div style={{ color: "#fbbf24", fontWeight: 800 }}>
                    // Perbaikan Bug Kritis
                  </div>
                  <div style={{ backgroundColor: "rgba(239, 68, 68, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#f87171", fontWeight: 700 }}>
                    - const errorProne = unsafeCall();
                  </div>
                  <div style={{ backgroundColor: "rgba(16, 185, 129, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#34d399", fontWeight: 700 }}>
                    + const safeResult = await safeCall();
                  </div>
                  <div style={{ backgroundColor: "rgba(16, 185, 129, 0.16)", padding: "2px 8px", borderRadius: 4, color: "#34d399", fontWeight: 700 }}>
                    + return safeResult;
                  </div>
                </div>

                {/* Footer Tag */}
                <div
                  style={{
                    padding: "12px 18px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: "rgba(24, 18, 30, 0.98)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  <span style={{ color: "#fbbf24" }}>🔒 Bug Berhasil Diperbaiki</span>
                  <FaCheckCircle size={14} color="#10b981" />
                </div>
              </div>
            </div>

            {/* Bottom Clean Terminal Push */}
            {frame >= 268 && (
              <div
                style={{
                  transform: `scale(${spP1Terminal}) translateY(${(1 - spP1Terminal) * 15}px)`,
                  opacity: spP1Terminal,
                  width: 960,
                  borderRadius: 16,
                  backgroundColor: "rgba(6, 12, 22, 0.95)",
                  border: "1.5px solid rgba(14, 165, 233, 0.6)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
                  padding: "14px 22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONT_MONO,
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaTerminal size={16} color="#38bdf8" />
                  <span style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                    $ git push origin main
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#10b981", fontSize: 13, fontWeight: 800 }}>
                  <FaCheckCircle size={14} color="#10b981" />
                  <span>Kode Terkirim ke Repository</span>
                </div>
              </div>
            )}

            {/* Bottom Summary Pill */}
            {frame >= 290 && (
              <div
                style={{
                  transform: `scale(${spP1SummaryPill}) translateY(${(1 - spP1SummaryPill) * 15}px)`,
                  opacity: spP1SummaryPill,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 28px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(10, 24, 46, 0.95)",
                  border: "1.5px solid rgba(14, 165, 233, 0.8)",
                  boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(14, 165, 233, 0.35)`,
                }}
              >
                <SiGit size={15} color="#f97316" />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f8fafc",
                    letterSpacing: 0.5,
                  }}
                >
                  KODE BARU SIAP //{" "}
                  <span style={{ color: "#38bdf8" }}>
                    MEMASUKI TAHAPAN PROSES BERIKUTNYA
                  </span>
                </span>
              </div>
            )}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            PART 2: LINES 6 & 7 (Frames 328 - 535)
            Line 6: "Kode tersebut harus melalui beberapa proses," (TYPEWRITER EFFECT)
            Line 7: "mulai dari build, testing, sampai deployment ke server." (SLIDE CAMERA MOVEMENT)
           ═════════════════════════════════════════════════════════════════ */}
        {isPhase2 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: phase2Opacity,
            }}
          >
            {/* Top Category Badge */}
            <div
              style={{
                transform: `scale(${spP2Badge}) translateY(${(1 - spP2Badge) * -20}px)`,
                opacity: spP2Badge,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(11, 28, 48, 0.94)",
                border: "1.5px solid rgba(6, 182, 212, 0.65)",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
                marginBottom: 14,
              }}
            >
              <FaCogs size={16} color="#06b6d4" />
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
                PROSES PENGEMBANGAN SOFTWARE
              </span>
              <FaRocket size={14} color="#a855f7" />
            </div>

            {/* Typewriter Spoken Headline (Line 6) */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h1
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  margin: 0,
                  lineHeight: 1.25,
                  letterSpacing: -0.8,
                  color: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 56,
                }}
              >
                <span>{typedText}</span>
                {showTypewriterCursor && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 42,
                      backgroundColor: "#06b6d4",
                      marginLeft: 4,
                      boxShadow: "0 0 10px #06b6d4",
                    }}
                  />
                )}
              </h1>

              {/* Line 7 Subtitle: "mulai dari build, testing, sampai deployment ke server." */}
              {frame >= 404 && (
                <div
                  style={{
                    transform: `scale(${spP2Subtitle}) translateY(${(1 - spP2Subtitle) * 10}px)`,
                    opacity: spP2Subtitle,
                    fontSize: 26,
                    fontWeight: 900,
                    marginTop: 8,
                    letterSpacing: -0.3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: "#38bdf8" }}>1. Build</span>
                  <span style={{ color: "#64748b" }}>➔</span>
                  <span style={{ color: "#10b981" }}>2. Testing</span>
                  <span style={{ color: "#64748b" }}>➔</span>
                  <span style={{ color: "#c084fc" }}>3. Deployment</span>
                </div>
              )}
            </div>

            {/* ═════════════════════════════════════════════════════════════
                LINE 7: SLIDE CAMERA MOVEMENT PIPELINE TRACK
                Build (X: 360) -> Testing (X: 0) -> Deploy (X: -360) -> Overview (Scale: 0.88)
               ═════════════════════════════════════════════════════════════ */}
            <div
              style={{
                position: "relative",
                width: 980,
                height: 580,
                overflow: "hidden",
                borderRadius: 28,
                backgroundColor: "rgba(5, 11, 24, 0.88)",
                border: "2px solid rgba(6, 182, 212, 0.4)",
                boxShadow:
                  "0 24px 60px rgba(0, 0, 0, 0.95), inset 0 0 40px rgba(6, 182, 212, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              {/* Virtual World Container moving with Slide Camera */}
              <div
                style={{
                  position: "absolute",
                  width: 1500,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 36,
                  transform: `translateX(${finalCameraX}px) scale(${cameraScale})`,
                  transformOrigin: "center center",
                }}
              >
                {/* Connecting Laser Pipeline Conduit behind cards */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 100,
                    right: 100,
                    height: 4,
                    background:
                      "linear-gradient(90deg, rgba(6, 182, 212, 0.3) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(168, 85, 247, 0.4) 100%)",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                >
                  {/* Glowing Energy Payload Traveling across conduit */}
                  <div
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${payloadPositionX}px)`,
                      top: -6,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 0 20px #38bdf8, 0 0 35px #a855f7",
                    }}
                  />
                </div>

                {/* ─────────────────────────────────────────────────────────
                    STAGE 1: BUILD & COMPILE (Width: 420px)
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    position: "relative",
                    width: 420,
                    height: 490,
                    borderRadius: 24,
                    backgroundColor: "rgba(9, 18, 38, 0.96)",
                    border: `2px solid ${frame < 435 ? "#06b6d4" : "rgba(6, 182, 212, 0.4)"}`,
                    boxShadow:
                      frame < 435
                        ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.4)"
                        : "0 16px 40px rgba(0, 0, 0, 0.8)",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    zIndex: 10,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          backgroundColor: "rgba(6, 182, 212, 0.18)",
                          border: "1.5px solid #06b6d4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaCogs size={24} color="#06b6d4" />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#38bdf8", fontWeight: 800 }}>
                          PROSES 1
                        </div>
                        <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                          BUILD
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: 14.5, color: "#cbd5e1", lineHeight: 1.45 }}>
                      Kompilasi kode program menjadi file siap pakai (executable/artifact).
                    </div>
                  </div>

                  {/* Middle Micro-Dashboard: Fills the previous white space */}
                  <div
                    style={{
                      backgroundColor: "rgba(3, 10, 20, 0.75)",
                      borderRadius: 16,
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                      padding: "12px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 11,
                        fontFamily: FONT_MONO,
                        color: "#38bdf8",
                        fontWeight: 800,
                      }}
                    >
                      <span>KOMPILASI PIPELINE</span>
                      <span>100% READY</span>
                    </div>

                    {[
                      { label: "Bundling Assets & Code", status: "Done", icon: <FaBox size={12} color="#06b6d4" /> },
                      { label: "TypeScript Compilation", status: "0 Errors", icon: <FaCogs size={12} color="#38bdf8" /> },
                      { label: "Container Artifact Ready", status: "Built", icon: <SiDocker size={13} color="#06b6d4" /> },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderRadius: 10,
                          backgroundColor: "rgba(6, 182, 212, 0.08)",
                          border: "1px solid rgba(6, 182, 212, 0.18)",
                          fontSize: 12,
                          fontFamily: FONT_MONO,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontWeight: 700 }}>
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#10b981", fontWeight: 800 }}>
                          <FaCheckCircle size={12} color="#10b981" />
                          <span>{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Big Clean Status Box */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(6, 182, 212, 0.15)",
                      border: "1.5px solid rgba(6, 182, 212, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#38bdf8", fontFamily: FONT_MONO }}>
                      STATUS BUILD
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 900, color: "#10b981" }}>
                      ✓ Selesai
                    </span>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    STAGE 2: TESTING (Width: 420px)
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    position: "relative",
                    width: 420,
                    height: 490,
                    borderRadius: 24,
                    backgroundColor: "rgba(8, 26, 20, 0.96)",
                    border: `2px solid ${frame >= 435 && frame < 488 ? "#10b981" : "rgba(16, 185, 129, 0.4)"}`,
                    boxShadow:
                      frame >= 435 && frame < 488
                        ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(16, 185, 129, 0.4)"
                        : "0 16px 40px rgba(0, 0, 0, 0.8)",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    zIndex: 10,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          backgroundColor: "rgba(16, 185, 129, 0.18)",
                          border: "1.5px solid #10b981",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaVial size={24} color="#10b981" />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#34d399", fontWeight: 800 }}>
                          PROSES 2
                        </div>
                        <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                          TESTING
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: 14.5, color: "#cbd5e1", lineHeight: 1.45 }}>
                      Menguji seluruh fungsi kode secara otomatis untuk mencegah bug.
                    </div>
                  </div>

                  {/* Middle Micro-Dashboard: Fills the previous white space */}
                  <div
                    style={{
                      backgroundColor: "rgba(2, 16, 10, 0.75)",
                      borderRadius: 16,
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      padding: "12px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 11,
                        fontFamily: FONT_MONO,
                        color: "#34d399",
                        fontWeight: 800,
                      }}
                    >
                      <span>PENGUJIAN OTOMATIS</span>
                      <span>100% PASS</span>
                    </div>

                    {[
                      { label: "Unit Tests Suite", count: "142 Passed", icon: <FaVial size={12} color="#10b981" /> },
                      { label: "Integration Tests", count: "38 Passed", icon: <FaCheckCircle size={12} color="#34d399" /> },
                      { label: "Security Vulnerability Scan", count: "0 Issues", icon: <FaShieldAlt size={12} color="#10b981" /> },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderRadius: 10,
                          backgroundColor: "rgba(16, 185, 129, 0.08)",
                          border: "1px solid rgba(16, 185, 129, 0.18)",
                          fontSize: 12,
                          fontFamily: FONT_MONO,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontWeight: 700 }}>
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#10b981", fontWeight: 800 }}>
                          <FaCheckCircle size={12} color="#10b981" />
                          <span>{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Big Clean Status Box */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      border: "1.5px solid rgba(16, 185, 129, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#34d399", fontFamily: FONT_MONO }}>
                      STATUS UJI
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 900, color: "#10b981" }}>
                      ✓ 100% Lolos
                    </span>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────
                    STAGE 3: DEPLOYMENT (Width: 420px)
                   ───────────────────────────────────────────────────────── */}
                <div
                  style={{
                    position: "relative",
                    width: 420,
                    height: 490,
                    borderRadius: 24,
                    backgroundColor: "rgba(24, 12, 38, 0.96)",
                    border: `2px solid ${frame >= 488 ? "#a855f7" : "rgba(168, 85, 247, 0.4)"}`,
                    boxShadow:
                      frame >= 488
                        ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(168, 85, 247, 0.4)"
                        : "0 16px 40px rgba(0, 0, 0, 0.8)",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    zIndex: 10,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          backgroundColor: "rgba(168, 85, 247, 0.18)",
                          border: "1.5px solid #a855f7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaRocket size={24} color="#c084fc" />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#c084fc", fontWeight: 800 }}>
                          PROSES 3
                        </div>
                        <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                          DEPLOYMENT
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: 14.5, color: "#cbd5e1", lineHeight: 1.45 }}>
                      Mengirimkan aplikasi ke server agar dapat langsung digunakan oleh user.
                    </div>
                  </div>

                  {/* Middle Micro-Dashboard: Fills the previous white space */}
                  <div
                    style={{
                      backgroundColor: "rgba(18, 6, 28, 0.75)",
                      borderRadius: 16,
                      border: "1px solid rgba(168, 85, 247, 0.25)",
                      padding: "12px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 11,
                        fontFamily: FONT_MONO,
                        color: "#c084fc",
                        fontWeight: 800,
                      }}
                    >
                      <span>PENGIRIMAN PRODUCTION</span>
                      <span>100% LIVE</span>
                    </div>

                    {[
                      { label: "Container Registry Push", status: "Success", icon: <SiDocker size={13} color="#c084fc" /> },
                      { label: "Kubernetes Rolling Update", status: "Healthy", icon: <SiKubernetes size={13} color="#38bdf8" /> },
                      { label: "Zero-Downtime Rollout", status: "Live", icon: <FaServer size={12} color="#10b981" /> },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderRadius: 10,
                          backgroundColor: "rgba(168, 85, 247, 0.08)",
                          border: "1px solid rgba(168, 85, 247, 0.18)",
                          fontSize: 12,
                          fontFamily: FONT_MONO,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f8fafc", fontWeight: 700 }}>
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#10b981", fontWeight: 800 }}>
                          <FaCheckCircle size={12} color="#10b981" />
                          <span>{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Big Clean Status Box */}
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(168, 85, 247, 0.15)",
                      border: "1.5px solid rgba(168, 85, 247, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#c084fc", fontFamily: FONT_MONO }}>
                      STATUS SERVER
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 900, color: "#10b981" }}>
                      ✓ Live
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Pipeline Overview Pill */}
            {frame >= 505 && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 28px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(10, 24, 46, 0.95)",
                  border: "1.5px solid rgba(6, 182, 212, 0.8)",
                  boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(6, 182, 212, 0.4)`,
                }}
              >
                <FaCheckDouble size={14} color="#10b981" />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f8fafc",
                    letterSpacing: 0.5,
                  }}
                >
                  3 PROSES UTAMA:{" "}
                  <span style={{ color: "#38bdf8" }}>
                    BUILD ➔ TESTING ➔ DEPLOYMENT
                  </span>
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
