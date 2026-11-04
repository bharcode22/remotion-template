import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBug,
  FaClock,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaHourglassHalf,
  FaServer,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 530 - 820)
  // Line 9: "Bayangkan kalau semua proses itu harus dilakukan secara manual setiap kali ada perubahan kode." (F533 - F685)
  // Line 10: "Selain memakan waktu, risiko human error juga semakin besar." (F705 - F810)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F532 - F555)
  const spBadge = spring({
    frame: Math.max(0, frame - 532),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F538 - F568)
  const spHeadline = spring({
    frame: Math.max(0, frame - 538),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Card 1 Spring: Manual Build (F562 - F595)
  const spCard1 = spring({
    frame: Math.max(0, frame - 562),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. Card 2 Spring: Manual Testing (F582 - F615)
  const spCard2 = spring({
    frame: Math.max(0, frame - 582),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 5. Card 3 Spring: Manual SSH & Upload (F602 - F635)
  const spCard3 = spring({
    frame: Math.max(0, frame - 602),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 6. Line 10 Metric A Spring: Memakan Waktu (F704 - F735)
  const spMetricTime = spring({
    frame: Math.max(0, frame - 704),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 7. Line 10 Metric B Spring: Human Error (F724 - F755)
  const spMetricError = spring({
    frame: Math.max(0, frame - 724),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 8. Bottom Hook Pill Spring (F765 - F795)
  const spBottomHook = spring({
    frame: Math.max(0, frame - 765),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // Dynamic Oscillations
  const alertFlash = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // Time drain counter calculation (0h -> 4.5h)
  const timeDrainHours = interpolate(frame, [708, 750], [0.5, 4.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Error risk percentage calculation (15% -> 89%)
  const errorRiskPct = Math.round(
    interpolate(frame, [728, 770], [15, 89], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  return (
    <SceneContainer accentColor={CICD_COLORS.alertRed}>
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
            1. TOP CATEGORY BADGE & HEADLINE (LINE 9)
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
            backgroundColor: "rgba(38, 12, 18, 0.94)",
            border: "1.5px solid rgba(239, 68, 68, 0.65)",
            boxShadow: `0 0 ${20 + alertFlash * 15}px rgba(239, 68, 68, 0.35)`,
            marginBottom: 14,
          }}
        >
          <FaExclamationTriangle size={15} color="#ef4444" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#f87171",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            MASALAH PROSES MANUAL
          </span>
          <FaClock size={15} color="#f59e0b" />
        </div>

        {/* Spoken Headline (Line 9):
            "Bayangkan kalau semua proses itu harus dilakukan secara manual setiap kali ada perubahan kode." */}
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
            Bayangkan kalau semua proses itu...
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
            <span style={{ color: "#f8fafc" }}>Harus Dilakukan </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(239, 68, 68, 0.5))",
              }}
            >
              Secara Manual!
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE 3 PAINFUL MANUAL STEPS (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 960,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            marginBottom: 22,
            boxSizing: "border-box",
          }}
        >
          {/* Card 1: Build Manual */}
          <div
            style={{
              transform: `scale(${spCard1}) translateY(${(1 - spCard1) * 25}px)`,
              opacity: spCard1,
              borderRadius: 22,
              backgroundColor: "rgba(22, 10, 16, 0.96)",
              border: "1.8px solid rgba(245, 158, 11, 0.55)",
              boxShadow: "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.2)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1.5px solid #f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <FaClock size={28} color="#f59e0b" />
            </div>

            <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#fbbf24", fontWeight: 800, marginBottom: 4 }}>
              TAHAP 1
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", marginBottom: 8 }}>
              Build Manual
            </div>
            <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.4, marginBottom: 16 }}>
              Kompilasi lokal di laptop memakan waktu hingga berjam-jam.
            </div>

            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#f59e0b",
              }}
            >
              ⏳ SANGAT LAMBAT
            </div>
          </div>

          {/* Card 2: Testing Manual */}
          <div
            style={{
              transform: `scale(${spCard2}) translateY(${(1 - spCard2) * 25}px)`,
              opacity: spCard2,
              borderRadius: 22,
              backgroundColor: "rgba(24, 10, 16, 0.96)",
              border: "1.8px solid rgba(239, 68, 68, 0.55)",
              boxShadow: "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(239, 68, 68, 0.2)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1.5px solid #ef4444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <FaBug size={28} color="#ef4444" />
            </div>

            <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#f87171", fontWeight: 800, marginBottom: 4 }}>
              TAHAP 2
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", marginBottom: 8 }}>
              Testing Manual
            </div>
            <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.4, marginBottom: 16 }}>
              Banyak skenario terlewat, bug sering lolos sampai ke pengguna.
            </div>

            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#f87171",
              }}
            >
              ❌ BUG SERING LOLOS
            </div>
          </div>

          {/* Card 3: Deploy Manual */}
          <div
            style={{
              transform: `scale(${spCard3}) translateY(${(1 - spCard3) * 25}px)`,
              opacity: spCard3,
              borderRadius: 22,
              backgroundColor: "rgba(26, 8, 16, 0.96)",
              border: "1.8px solid rgba(244, 63, 94, 0.55)",
              boxShadow: "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(244, 63, 94, 0.2)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(244, 63, 94, 0.15)",
                border: "1.5px solid #f43f5e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <FaServer size={28} color="#f43f5e" />
            </div>

            <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#fb7185", fontWeight: 800, marginBottom: 4 }}>
              TAHAP 3
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", marginBottom: 8 }}>
              Deploy Manual
            </div>
            <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.4, marginBottom: 16 }}>
              Upload file satu per satu, server berisiko crash dan down.
            </div>

            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(244, 63, 94, 0.15)",
                border: "1px solid rgba(244, 63, 94, 0.4)",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#fb7185",
              }}
            >
              ⚠️ SERVER RENTAN DOWN
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. LINE 10: DUAL IMPACT METRIC COUNTERS (F705 - F820)
            "Selain memakan waktu, risiko human error juga semakin besar."
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 705 && (
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
            {/* Metric A: Memakan Waktu */}
            <div
              style={{
                transform: `scale(${spMetricTime}) translateY(${(1 - spMetricTime) * 20}px)`,
                opacity: spMetricTime,
                borderRadius: 22,
                backgroundColor: "rgba(26, 12, 16, 0.95)",
                border: "2px solid rgba(245, 158, 11, 0.7)",
                boxShadow: "0 16px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.3)",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  border: "2px solid #f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaHourglassHalf size={30} color="#f59e0b" />
              </div>

              <div>
                <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#fbbf24", fontWeight: 800 }}>
                  DAMPAK 1:
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#f8fafc" }}>
                  Memakan Waktu
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", fontFamily: FONT_MONO }}>
                  ~{timeDrainHours.toFixed(1)} JAM TERBUANG
                </div>
              </div>
            </div>

            {/* Metric B: Risiko Human Error */}
            <div
              style={{
                transform: `scale(${spMetricError}) translateY(${(1 - spMetricError) * 20}px)`,
                opacity: spMetricError,
                borderRadius: 22,
                backgroundColor: "rgba(32, 10, 18, 0.95)",
                border: "2px solid rgba(239, 68, 68, 0.7)",
                boxShadow: "0 16px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(239, 68, 68, 0.3)",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  border: "2px solid #ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaExclamationCircle size={30} color="#ef4444" />
              </div>

              <div>
                <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#f87171", fontWeight: 800 }}>
                  DAMPAK 2:
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#f8fafc" }}>
                  Risiko Human Error
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#ef4444", fontFamily: FONT_MONO }}>
                  {errorRiskPct}% RISIKO TINGGI
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            4. HOOK PILL (F765+)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 765 && (
          <div
            style={{
              transform: `scale(${spBottomHook}) translateY(${(1 - spBottomHook) * 15}px)`,
              opacity: spBottomHook,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(30, 10, 18, 0.96)",
              border: "1.5px solid rgba(239, 68, 68, 0.8)",
              boxShadow: `0 0 25px rgba(239, 68, 68, 0.4)`,
            }}
          >
            <FaTimesCircle size={15} color="#ef4444" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              PROSES MANUAL:{" "}
              <span style={{ color: "#f87171" }}>
                BOROS WAKTU &amp; RENTAN KESALAHAN
              </span>
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
