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
  FaClock,
  FaExclamationTriangle,
  FaHourglassHalf,
  FaLaptop,
  FaMobileAlt,
  FaServer,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { MULTI_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 170 - 456)
  // Line 4: "Kalau kamu melakukan deployment satu per satu," (F178 - F255)
  // Line 5: "tentu akan memakan banyak waktu." (F269 - F317)
  // Line 6: "Belum lagi risiko perbedaan versi aplikasi di setiap produk." (F338 - F425)
  // ─────────────────────────────────────────────────────────────────────────────

  // Is Phase 2 active? (Line 6 starts around F330)
  const isLine6 = frame >= 330;

  // 1. Top Category Badge Spring
  const spBadge = spring({
    frame: Math.max(0, isLine6 ? frame - 330 : frame - 174),
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // 2. Headline Springs
  // Line 4 Headline (F178): "Deploy Satu per Satu..."
  const spHeadline1A = spring({
    frame: Math.max(0, frame - 178),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Line 5 Headline (F268): "...Memakan Banyak Waktu!"
  const spHeadline1B = spring({
    frame: Math.max(0, frame - 268),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Line 6 Headline (F330): "Risiko Perbedaan Versi di Tiap Produk!"
  const spHeadline2 = spring({
    frame: Math.max(0, frame - 330),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 3. Phase 1 Container Spring (Lines 4 - 5, F180 - F210)
  const spCard1 = spring({
    frame: Math.max(0, frame - 180),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. Staggered Server Entrance Springs (Phase 1: 1-by-1 deployment)
  const spSrv1 = spring({
    frame: Math.max(0, frame - 182),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spSrv2 = spring({
    frame: Math.max(0, frame - 218),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spSrv3 = spring({
    frame: Math.max(0, frame - 236),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spSrv4 = spring({
    frame: Math.max(0, frame - 252),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // 5. Time Loss Card Spring (Line 5: F268+)
  const spTimeCard = spring({
    frame: Math.max(0, frame - 268),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 110 },
  });

  // 6. Phase 2 Container Spring (Line 6, F330 - F355)
  const spCard2 = spring({
    frame: Math.max(0, frame - 330),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 7. Staggered Product Entrance Springs (Line 6)
  const spProd1 = spring({
    frame: Math.max(0, frame - 336),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spProd2 = spring({
    frame: Math.max(0, frame - 350),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  const spProd3 = spring({
    frame: Math.max(0, frame - 364),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // 8. Conflict Simulation Track Spring (F378+)
  const spConflictBar = spring({
    frame: Math.max(0, frame - 378),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 9. Bottom Alert Stamp Spring (F400+)
  const spWarningStamp = spring({
    frame: Math.max(0, frame - 400),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 130 },
  });

  // Ambient Oscillations
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;
  const alertFlash = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // ─────────────────────────────────────────────────────────────────────────────
  // ⚡ DYNAMIC PROGRESS & COUNTERS FOR PHASE 1 (LINES 4 - 5)
  // ─────────────────────────────────────────────────────────────────────────────

  // Server 1 Upload Progress (F186 - F212)
  const srv1Progress = interpolate(frame, [186, 212], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Traveling laser pulse from Server 1 -> Server 2 (F212 - F224)
  const arrow1Progress = interpolate(frame, [212, 224], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Server 2 Upload Progress (F222 - F255: creeps to 42% and gets stuck)
  const srv2Progress = interpolate(frame, [222, 255], [0, 42], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Clock rotation accelerates rapidly when Line 5 begins (F268+)
  const clockSpeed = frame >= 268 ? (frame - 268) * 18 + 268 * 4 : frame * 4;
  const clockRotation = clockSpeed % 360;

  // Time drain counter (Phase 1: 0.5 Jam -> 8.5 Jam at F270 - F312)
  const timeHours = interpolate(frame, [270, 312], [0.5, 8.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Horizontal Time Gauge Meter Bar (F270 - F312: 5% -> 92%)
  const timeGaugeWidth = interpolate(frame, [270, 312], [5, 92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 💥 DYNAMIC CLASH & PACKET FOR PHASE 2 (LINE 6)
  // ─────────────────────────────────────────────────────────────────────────────

  // Traveling API Packet from Mobile (v2.5.0) to API Backend (v2.3.2)
  const packetProgress = interpolate(frame, [380, 400], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Error crash trigger (when packet reaches outdated backend at F400)
  const hasCrashed = frame >= 400;
  const shakeOffset = hasCrashed
    ? Math.sin((frame - 400) * 3.5) * 5 * Math.max(0, 1 - (frame - 400) / 22)
    : 0;

  return (
    <SceneContainer accentColor={isLine6 ? MULTI_COLORS.alertRed : MULTI_COLORS.alertAmber}>
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
            1. TOP CATEGORY BADGE
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: isLine6 ? "rgba(36, 12, 20, 0.95)" : "rgba(32, 20, 8, 0.95)",
            border: `1.5px solid ${isLine6 ? "rgba(239, 68, 68, 0.7)" : "rgba(245, 158, 11, 0.7)"}`,
            boxShadow: `0 0 25px ${isLine6 ? "rgba(239, 68, 68, 0.35)" : "rgba(245, 158, 11, 0.35)"}`,
            marginBottom: 20,
          }}
        >
          <FaExclamationTriangle size={14} color={isLine6 ? "#ef4444" : "#f59e0b"} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: isLine6 ? "#f87171" : "#fbbf24",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            {isLine6 ? "KENDALA // PERBEDAAN VERSI" : "KENDALA // DEPLOYMENT MANUAL"}
          </span>
          <FaHourglassHalf size={13} color={isLine6 ? "#ef4444" : "#f59e0b"} />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. PUNCHY SPOKEN HEADLINES (FOCUSED & MINIMAL TEXT)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 24,
            minHeight: 125,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!isLine6 ? (
            /* Headline Lines 4 - 5 (Synchronized with speech) */
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              {/* Line 4 (F178 - F255): "Kalau kamu melakukan deployment satu per satu," */}
              <div
                style={{
                  transform: `scale(${spHeadline1A}) translateY(${(1 - spHeadline1A) * -15}px)`,
                  opacity: spHeadline1A,
                  color: "#f8fafc",
                }}
              >
                Deploy Satu per Satu...
              </div>

              {/* Line 5 (F268+): "tentu akan memakan banyak waktu." */}
              {frame >= 265 && (
                <div
                  style={{
                    transform: `scale(${spHeadline1B}) translateY(${(1 - spHeadline1B) * 15}px)`,
                    opacity: spHeadline1B,
                    marginTop: 6,
                    background:
                      "linear-gradient(90deg, #f59e0b 0%, #fbbf24 60%, #ef4444 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(245, 158, 11, 0.6))",
                  }}
                >
                  Memakan Banyak Waktu!
                </div>
              )}
            </h1>
          ) : (
            /* Headline Line 6 (F330+) */
            <h1
              style={{
                transform: `scale(${spHeadline2}) translateY(${(1 - spHeadline2) * -15}px)`,
                opacity: spHeadline2,
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: "#f8fafc" }}>Risiko </span>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444 0%, #f87171 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.65))",
                }}
              >
                Perbedaan Versi
              </span>
              <span style={{ color: "#f8fafc" }}> di Tiap Produk!</span>
            </h1>
          )}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. DYNAMIC HERO VISUAL (SWITCHES BETWEEN LINES 4-5 AND LINE 6)
           ═════════════════════════════════════════════════════════════════ */}
        {!isLine6 ? (
          /* ───────────── VISUAL 1: ANIMATED BOTTLENECK & SURGE CLOCK (LINES 4 - 5) ───────────── */
          <div
            style={{
              transform: `scale(${spCard1}) translateY(${(1 - spCard1) * 20}px)`,
              opacity: spCard1,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(18, 12, 24, 0.96)",
              border: "2px solid rgba(245, 158, 11, 0.65)",
              boxShadow:
                "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(245, 158, 11, 0.3)",
              padding: "36px 30px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
            }}
          >
            {/* 1. VISUAL 1-BY-1 SEQUENTIAL SERVER QUEUE CONVEYOR */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
                gap: 10,
                alignItems: "center",
              }}
            >
              {/* Server 1 (Pops at F182 -> Progress charges 0% to 100%) */}
              <div
                style={{
                  transform: `scale(${spSrv1}) translateY(${(1 - spSrv1) * 20}px)`,
                  opacity: spSrv1,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: `2px solid ${srv1Progress >= 100 ? "#10b981" : "rgba(16, 185, 129, 0.5)"}`,
                  boxShadow: srv1Progress >= 100 ? "0 0 20px rgba(16, 185, 129, 0.35)" : "none",
                  borderRadius: 16,
                  padding: "18px 12px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaCheckCircle size={24} color="#10b981" />
                <span style={{ fontSize: 14, fontWeight: 900, color: "#f8fafc" }}>Server 01</span>

                {/* Progress Bar */}
                <div
                  style={{
                    width: "100%",
                    height: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${srv1Progress}%`,
                      height: "100%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 8px #10b981",
                    }}
                  />
                </div>

                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#10b981", fontWeight: 900 }}>
                  {srv1Progress >= 100 ? "SELESAI" : `${Math.round(srv1Progress)}%`}
                </span>
              </div>

              {/* Animated Arrow 1 (Pulsing Light Packet) */}
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: 24, color: "rgba(255, 255, 255, 0.25)", fontWeight: 900 }}>➔</span>
                {frame >= 212 && (
                  <div
                    style={{
                      position: "absolute",
                      left: `${arrow1Progress * 100}%`,
                      transform: "translateX(-50%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#f59e0b",
                      boxShadow: "0 0 10px #f59e0b",
                    }}
                  />
                )}
              </div>

              {/* Server 2 (Pops at F218 -> Charges to 42% and hangs/stuck) */}
              <div
                style={{
                  transform: `scale(${spSrv2}) translateY(${(1 - spSrv2) * 20}px)`,
                  opacity: spSrv2,
                  backgroundColor: "rgba(245, 158, 11, 0.16)",
                  border: "2px solid #f59e0b",
                  boxShadow: `0 0 ${15 + pulseWave * 15}px rgba(245, 158, 11, 0.5)`,
                  borderRadius: 16,
                  padding: "18px 12px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={{ transform: `rotate(${frame * 3}deg)` }}>
                  <FaHourglassHalf size={24} color="#f59e0b" />
                </div>
                <span style={{ fontSize: 14, fontWeight: 900, color: "#f8fafc" }}>Server 02</span>

                {/* Progress Bar */}
                <div
                  style={{
                    width: "100%",
                    height: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${srv2Progress}%`,
                      height: "100%",
                      backgroundColor: "#f59e0b",
                      boxShadow: "0 0 8px #f59e0b",
                    }}
                  />
                </div>

                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#fbbf24", fontWeight: 900 }}>
                  PROSES SSH...
                </span>
              </div>

              {/* Arrow 2 (Waiting) */}
              <span style={{ fontSize: 24, color: "rgba(255, 255, 255, 0.15)", fontWeight: 900 }}>➔</span>

              {/* Server 3 (Pops at F236 -> Waiting idle in queue) */}
              <div
                style={{
                  transform: `scale(${spSrv3}) translateY(${(1 - spSrv3) * 20}px)`,
                  opacity: spSrv3 * 0.7,
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1.5px dashed rgba(255, 255, 255, 0.25)",
                  borderRadius: 16,
                  padding: "18px 12px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaServer size={22} color="#94a3b8" />
                <span style={{ fontSize: 14, fontWeight: 900, color: "#94a3b8" }}>Server 03</span>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#64748b", fontWeight: 800 }}>
                  MENUNGGU
                </span>
              </div>

              {/* Arrow 3 (Blocked) */}
              <span style={{ fontSize: 24, color: "rgba(239, 68, 68, 0.3)", fontWeight: 900 }}>➔</span>

              {/* Server 250+ (Pops at F252 -> Huge backlog blocked) */}
              <div
                style={{
                  transform: `scale(${spSrv4}) translateY(${(1 - spSrv4) * 20}px)`,
                  opacity: spSrv4,
                  backgroundColor: "rgba(239, 68, 68, 0.14)",
                  border: "2px solid #ef4444",
                  boxShadow: "0 0 15px rgba(239, 68, 68, 0.35)",
                  borderRadius: 16,
                  padding: "18px 12px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaTimesCircle size={24} color="#ef4444" />
                <span style={{ fontSize: 14, fontWeight: 900, color: "#f87171" }}>Server 250+</span>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#fca5a5", fontWeight: 900 }}>
                  ANTREAN
                </span>
              </div>
            </div>

            {/* 2. MASSIVE ACCELERATING CLOCK & TIME SURGE METER (F268+) */}
            <div
              style={{
                transform: `scale(${spTimeCard})`,
                opacity: spTimeCard,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: "2px solid rgba(245, 158, 11, 0.55)",
                borderRadius: 20,
                padding: "24px 36px",
                boxSizing: "border-box",
                boxShadow: `0 0 ${20 + pulseWave * 15}px rgba(245, 158, 11, 0.35)`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Clock & Metric Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div
                    style={{
                      transform: `rotate(${clockRotation}deg)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaClock size={52} color="#f59e0b" />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontFamily: FONT_MONO,
                        color: "#f8fafc",
                        fontWeight: 900,
                        letterSpacing: 1.5,
                      }}
                    >
                      ESTIMASI WAKTU HILANG:
                    </div>
                    <div
                      style={{
                        fontSize: 60,
                        fontWeight: 900,
                        fontFamily: FONT_MONO,
                        color: "#f59e0b",
                        lineHeight: 1,
                        marginTop: 4,
                      }}
                    >
                      ~{timeHours.toFixed(1)} JAM!
                    </div>
                  </div>
                </div>

                {/* Sub Pill Status */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    border: "1.5px solid #ef4444",
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: "#fca5a5",
                    boxShadow: "0 0 15px rgba(239, 68, 68, 0.4)",
                  }}
                >
                  <FaBolt size={14} color="#ef4444" />
                  <span>BOTTLENECK SANGAT LAMBAT</span>
                </div>
              </div>

              {/* Dynamic Filling Time Drain Gauge */}
              <div
                style={{
                  width: "100%",
                  height: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "1px solid rgba(245, 158, 11, 0.3)",
                }}
              >
                <div
                  style={{
                    width: `${timeGaugeWidth}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #ef4444 100%)",
                    boxShadow: "0 0 15px rgba(245, 158, 11, 0.8)",
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* ───────────── VISUAL 2: ANIMATED VERSION MISMATCH CLASH (LINE 6) ───────────── */
          <div
            style={{
              transform: `scale(${spCard2}) translateY(${(1 - spCard2) * 20}px)`,
              opacity: spCard2,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(24, 10, 18, 0.96)",
              border: "2px solid rgba(239, 68, 68, 0.75)",
              boxShadow: `0 22px 60px rgba(0, 0, 0, 0.95), 0 0 ${25 + alertFlash * 20}px rgba(239, 68, 68, 0.4)`,
              padding: "36px 30px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 26,
            }}
          >
            {/* 3 Staggered Animated Product Cards with Version Drift */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
              }}
            >
              {/* Product 1: Mobile App (v2.5.0) - Pops in at F336 */}
              <div
                style={{
                  transform: `scale(${spProd1}) translateY(${(1 - spProd1) * 25}px)`,
                  opacity: spProd1,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "2.5px solid #10b981",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                  borderRadius: 20,
                  padding: "24px 18px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaMobileAlt size={28} color="#10b981" />
                </div>
                <span style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                  Mobile App
                </span>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#10b981",
                    letterSpacing: -1,
                  }}
                >
                  v2.5.0
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                    padding: "4px 12px",
                    borderRadius: 8,
                  }}
                >
                  ● TERBARU
                </span>
              </div>

              {/* Product 2: Web Dashboard (v2.4.0) - Pops in at F350 */}
              <div
                style={{
                  transform: `scale(${spProd2}) translateY(${(1 - spProd2) * 25}px)`,
                  opacity: spProd2,
                  backgroundColor: "rgba(245, 158, 11, 0.12)",
                  border: "2.5px solid #f59e0b",
                  boxShadow: `0 0 ${15 + pulseWave * 15}px rgba(245, 158, 11, 0.35)`,
                  borderRadius: 20,
                  padding: "24px 18px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaLaptop size={28} color="#f59e0b" />
                </div>
                <span style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                  Web Portal
                </span>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f59e0b",
                    letterSpacing: -1,
                  }}
                >
                  v2.4.0
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: "#fbbf24",
                    backgroundColor: "rgba(245, 158, 11, 0.25)",
                    padding: "4px 12px",
                    borderRadius: 8,
                  }}
                >
                  ⚠️ TERTINGGAL
                </span>
              </div>

              {/* Product 3: API Backend (v2.3.2) - Pops in at F364 + Jitter Shake on Crash */}
              <div
                style={{
                  transform: `scale(${spProd3}) translateY(${(1 - spProd3) * 25}px) translateX(${shakeOffset}px)`,
                  opacity: spProd3,
                  backgroundColor: "rgba(239, 68, 68, 0.16)",
                  border: `2.5px solid ${hasCrashed ? "#ef4444" : "rgba(239, 68, 68, 0.7)"}`,
                  boxShadow: `0 0 ${hasCrashed ? 30 : 15}px rgba(239, 68, 68, ${hasCrashed ? 0.6 : 0.3})`,
                  borderRadius: 20,
                  padding: "24px 18px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaServer size={28} color="#ef4444" />
                </div>
                <span style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                  API Backend
                </span>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f87171",
                    letterSpacing: -1,
                  }}
                >
                  v2.3.2
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: "#fca5a5",
                    backgroundColor: "rgba(239, 68, 68, 0.3)",
                    padding: "4px 12px",
                    borderRadius: 8,
                  }}
                >
                  ❌ MISMATCH
                </span>
              </div>
            </div>

            {/* ═════════════════════════════════════════════════════════════════
                ANIMATED BREAKING CHANGE SIMULATION TRACK (F378+)
                Shows data packet from Mobile v2.5.0 failing at API v2.3.2
               ═════════════════════════════════════════════════════════════════ */}
            <div
              style={{
                transform: `scale(${spConflictBar})`,
                opacity: spConflictBar,
                width: "100%",
                borderRadius: 18,
                backgroundColor: "rgba(10, 6, 12, 0.85)",
                border: "1.5px dashed rgba(239, 68, 68, 0.6)",
                padding: "16px 24px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left: Origin Node */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 10px #10b981",
                  }}
                />
                <span style={{ fontSize: 13, fontFamily: FONT_MONO, fontWeight: 900, color: "#a7f3d0" }}>
                  Mobile v2.5.0
                </span>
              </div>

              {/* Center: Live Traveling Request Track */}
              <div
                style={{
                  flex: 1,
                  margin: "0 20px",
                  height: 6,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 999,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Traveling Light Pulse */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: `${packetProgress * 100}%`,
                    transform: "translateX(-50%)",
                    width: 28,
                    height: "100%",
                    borderRadius: 999,
                    backgroundColor: hasCrashed ? "#ef4444" : "#38bdf8",
                    boxShadow: `0 0 14px ${hasCrashed ? "#ef4444" : "#38bdf8"}`,
                  }}
                />
              </div>

              {/* Right: Crash Outcome Status */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {!hasCrashed ? (
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>CALLING API...</span>
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      fontWeight: 900,
                      color: "#fca5a5",
                      backgroundColor: "rgba(239, 68, 68, 0.25)",
                      border: "1px solid #ef4444",
                      padding: "4px 12px",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
                    }}
                  >
                    <FaBolt size={12} color="#ef4444" />
                    <span>ERROR 404 // ENDPOINT TIDAK ADA!</span>
                  </span>
                )}
              </div>
            </div>

            {/* ═════════════════════════════════════════════════════════════════
                GIANT CENTRAL WARNING STAMP (SLAMS IN AT F400+)
               ═════════════════════════════════════════════════════════════════ */}
            <div
              style={{
                transform: `scale(${spWarningStamp})`,
                opacity: spWarningStamp,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 36px",
                borderRadius: 14,
                backgroundColor: "rgba(239, 68, 68, 0.25)",
                border: "2px solid #ef4444",
                boxShadow: `0 0 ${25 + alertFlash * 15}px rgba(239, 68, 68, 0.6)`,
              }}
            >
              <FaExclamationTriangle size={22} color="#ef4444" />
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: "#fca5a5",
                  letterSpacing: 1,
                }}
              >
                🚨 BAHAYA: FITUR BEDA &amp; SISTEM CRASH!
              </span>
              <FaExclamationTriangle size={22} color="#ef4444" />
            </div>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
