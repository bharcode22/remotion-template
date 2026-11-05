import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowUp,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaDatabase,
  FaListAlt,
  FaUserCheck,
} from "react-icons/fa";
import { SiDebian } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Cubic Bezier interpolation helper for curved conduit packets
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

interface UpstreamPodCardProps {
  id: string;
  location: string;
  unit: string;
  cacheStatus: string;
  uploadSpeed: string;
  springVal: number;
  pulseWave: number;
  accentColor: string;
  glowColor: string;
}

const UpstreamPodCard: React.FC<UpstreamPodCardProps> = ({
  id,
  location,
  unit,
  cacheStatus,
  uploadSpeed,
  springVal,
  pulseWave,
  accentColor,
  glowColor,
}) => {
  return (
    <div
      style={{
        height: 270,
        borderRadius: 18,
        backgroundColor: "rgba(10, 24, 22, 0.96)",
        border: `1.5px solid ${accentColor}`,
        boxShadow: `0 10px 25px rgba(0, 0, 0, 0.6), 0 0 ${
          16 + pulseWave * 12
        }px ${glowColor}`,
        padding: "16px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: `scale(${springVal})`,
        opacity: springVal,
        fontFamily: FONT_MONO,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Top Connection Terminal Socket (Sends data upward into conduit) */}
      <div
        style={{
          position: "absolute",
          top: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 16,
          height: 6,
          borderRadius: "0 0 5px 5px",
          backgroundColor: accentColor,
          boxShadow: `0 0 10px ${accentColor}`,
        }}
      />

      {/* Header Row */}
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
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1.5px solid ${accentColor}`,
            }}
          >
            <SiDebian size={26} color={INTRO_COLORS.debianRed} />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: "#f8fafc" }}>
              {id}
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              {location} // {unit}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            color: accentColor,
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          <FaArrowUp size={12} />
          <span>TX</span>
        </div>
      </div>

      {/* Data Buffer & Cache Spec Block */}
      <div
        style={{
          fontSize: 11,
          color: "#cbd5e1",
          padding: "10px 12px",
          borderRadius: 10,
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          border: "1px solid rgba(16, 185, 129, 0.2)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Ingestion State:</span>
          <span style={{ color: accentColor, fontWeight: 900 }}>
            UPLOADING
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Postgres Cache:</span>
          <span style={{ color: "#94a3b8" }}>{cacheStatus}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Upload Speed:</span>
          <span style={{ color: "#e2e8f0" }}>{uploadSpeed}</span>
        </div>
      </div>

      {/* Live Upload Activity Bar */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "#94a3b8",
            marginBottom: 4,
          }}
        >
          <span>BUFFER FLUSH WORKER</span>
          <span style={{ color: accentColor, fontWeight: 800 }}>STREAMING</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 6,
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            overflow: "hidden",
            border: "1px solid rgba(16, 185, 129, 0.2)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 9999,
              backgroundColor: accentColor,
              boxShadow: `0 0 8px ${accentColor}`,
            }}
          />
        </div>
      </div>

      {/* Bottom Connection Terminal Socket (Accepts data upward from Row 2) */}
      <div
        style={{
          position: "absolute",
          bottom: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 16,
          height: 6,
          borderRadius: "5px 5px 0 0",
          backgroundColor: accentColor,
          boxShadow: `0 0 10px ${accentColor}`,
        }}
      />
    </div>
  );
};

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ EXACT TIMING & SPRINGS (Scene 8: Frames 1295 - 1470)
  // Line 15: "Sebaliknya, dari produk ke cloud, seperti data penggunaan, registrasi user, dan log aktivitas."
  // Voiceover:
  // - F1295 - F1335: "Sebaliknya, dari produk ke cloud..."
  // - F1345 - F1380: "...seperti data penggunaan..." (Payload 1)
  // - F1385 - F1415: "...registrasi user..." (Payload 2)
  // - F1420 - F1455: "...dan log aktivitas." (Payload 3)
  // - F1455 - F1470: Pause & exit transition to Scene 9 (Finale)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Entrance Springs (F1295+)
  const spBadge = spring({
    frame: Math.max(0, frame - 1295),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 1299),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 115 },
  });

  const spCloud = spring({
    frame: Math.max(0, frame - 1305),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 125 },
  });

  // 2. Three Payload Stagger Springs (Synchronized with VO items)
  const spPayload1 = spring({
    frame: Math.max(0, frame - 1345),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  const spPayload2 = spring({
    frame: Math.max(0, frame - 1385),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  const spPayload3 = spring({
    frame: Math.max(0, frame - 1420),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  // 3. Fleet of 6 Pods Springs (Row 2 ➔ Row 1 upward cascade)
  const spPod4 = spring({
    frame: Math.max(0, frame - 1310),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod5 = spring({
    frame: Math.max(0, frame - 1314),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod6 = spring({
    frame: Math.max(0, frame - 1318),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod1 = spring({
    frame: Math.max(0, frame - 1322),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod2 = spring({
    frame: Math.max(0, frame - 1326),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod3 = spring({
    frame: Math.max(0, frame - 1330),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });

  // Continuous subtle pulse
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // Upstream Packet Flow Progresses (Packets flowing UPWARD from Pods to Cloud)
  const baseSpeed = 0.055;
  const flowUpTop1 = ((frame - 1305) * (baseSpeed * 1.3)) % 1;
  const flowUpTop2 = ((frame - 1300) * (baseSpeed * 1.3)) % 1;
  const flowUpTop3 = ((frame - 1310) * (baseSpeed * 1.3)) % 1;

  const flowUpMid1 = ((frame - 1310) * baseSpeed) % 1;
  const flowUpMid1_b = ((frame - 1300) * baseSpeed) % 1;
  const flowUpMid2 = ((frame - 1305) * baseSpeed) % 1;
  const flowUpMid2_b = ((frame - 1295) * baseSpeed) % 1;
  const flowUpMid3 = ((frame - 1315) * baseSpeed) % 1;
  const flowUpMid3_b = ((frame - 1305) * baseSpeed) % 1;

  const flowUpRow2_1 = ((frame - 1320) * (baseSpeed * 1.2)) % 1;
  const flowUpRow2_2 = ((frame - 1315) * (baseSpeed * 1.2)) % 1;
  const flowUpRow2_3 = ((frame - 1325) * (baseSpeed * 1.2)) % 1;

  // Bezier coordinates on 932 x 50 SVG connector 1 (3 Payloads ➔ Cloud)
  // Bottom origin of path: [148, 50], [466, 50], [784, 50]
  // Top target (Cloud Ingestion Port): [466, 0]
  // Since packets flow upward, `t` goes from 1 to 0 or we reverse the point:
  const pTop1 = getBezierPoint([466, 0], [466, 25], [148, 25], [148, 50], 1 - flowUpTop1);
  const pTop3 = getBezierPoint([466, 0], [466, 25], [784, 25], [784, 50], 1 - flowUpTop3);

  // Active Highlight States for the 3 payload sections
  const isPayload1Active = frame >= 1345 && frame < 1385;
  const isPayload2Active = frame >= 1385 && frame < 1420;
  const isPayload3Active = frame >= 1420;

  // Scene Exit Transition (F1455 - F1470)
  const exitProgress = interpolate(frame, [1455, 1470], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;
  const sceneScale = 1 - exitProgress * 0.03;
  const sceneTranslateY = -exitProgress * 20;

  return (
    <SceneContainer
      padding="45px 50px 45px"
      style={{
        justifyContent: "flex-start",
        gap: 12,
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(${sceneTranslateY}px)`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP UPSTREAM BADGE (F1295+)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 24px",
          borderRadius: 9999,
          backgroundColor: "rgba(6, 30, 20, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
        }}
      >
        <FaArrowUp size={14} color={INTRO_COLORS.wellnessMint} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: "#d1fae5",
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          UPSTREAM PIPELINE // EDGE FLEET ➔ CLOUD INGESTION
        </span>
        <FaDatabase size={14} color={INTRO_COLORS.cyberCyan} />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOLD MAIN HEADLINE (F1299+)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          textAlign: "center",
          transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 20}px)`,
          opacity: spHeadline,
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
          Arah Kedua: Pengumpulan Data & Log
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
          Sebaliknya, Dari Produk Ke{" "}
          <span
            style={{
              color: INTRO_COLORS.wellnessMint,
              textShadow: `0 0 30px ${INTRO_COLORS.wellnessGlow}`,
            }}
          >
            Server Cloud
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. FULL-HEIGHT PORTRAIT ARCHITECTURE STAGE (Explicit 1560px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          height: 1560,
          borderRadius: 24,
          backgroundColor: "rgba(6, 12, 26, 0.96)",
          border: `2px solid ${INTRO_COLORS.wellnessGreen}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.75), 0 0 45px rgba(16, 185, 129, ${
            0.15 + pulseWave * 0.1
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
        {/* ────────────── 1. TOP: CENTRAL CLOUD INGESTION HUB (Height: 150px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 150,
            borderRadius: 18,
            backgroundColor: "rgba(8, 30, 24, 0.95)",
            border: `2px solid ${INTRO_COLORS.wellnessMint}`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${INTRO_COLORS.wellnessGlow}`,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `scale(${spCloud})`,
            opacity: spCloud,
            zIndex: 10,
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 14,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                boxShadow: `0 0 15px ${INTRO_COLORS.wellnessGlow}`,
              }}
            >
              <FaCloud size={32} color={INTRO_COLORS.wellnessMint} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 21,
                  fontWeight: 900,
                  color: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>CENTRAL CLOUD DATA LAKE</span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: INTRO_COLORS.wellnessMint,
                    fontWeight: 800,
                  }}
                >
                  INGESTION HUB
                </span>
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: "#94a3b8",
                  marginTop: 4,
                }}
              >
                Penampungan data terpusat untuk analitik sesi, akun user, dan monitoring fleet
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "8px 16px",
              borderRadius: 9999,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: `1px solid ${INTRO_COLORS.wellnessMint}`,
              color: INTRO_COLORS.wellnessMint,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            <span>INGESTING FROM 6 PODS</span>
          </div>

          {/* Bottom Ingestion Port directly on Cloud Card */}
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 24,
              height: 8,
              borderRadius: "0 0 6px 6px",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 12px ${INTRO_COLORS.wellnessMint}`,
            }}
          />
        </div>

        {/* ────────────── CONNECTOR 1: 3 PAYLOADS ➔ CLOUD (Height: 50px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 50,
            position: "relative",
          }}
        >
          <svg
            width="932"
            height="50"
            viewBox="0 0 932 50"
            fill="none"
            style={{ position: "absolute", inset: 0 }}
          >
            {/* Background Tracks */}
            <path
              d="M 148 50 C 148 25, 466 25, 466 0"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="2.5"
            />
            <path
              d="M 466 50 L 466 0"
              stroke="rgba(16, 185, 129, 0.4)"
              strokeWidth="2.5"
            />
            <path
              d="M 784 50 C 784 25, 466 25, 466 0"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="2.5"
            />

            {/* Glowing Active Lines */}
            <path
              d="M 148 50 C 148 25, 466 25, 466 0"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="2.5"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 50 L 466 0"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 784 50 C 784 25, 466 25, 466 0"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="2.5"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            {/* Terminal Points */}
            <circle cx="466" cy="0" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="148" cy="50" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="466" cy="50" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="784" cy="50" r="4" fill={INTRO_COLORS.wellnessMint} />
          </svg>

          {/* Animated Flowing Particles (Streaming UPWARD to Cloud) */}
          <div
            style={{
              position: "absolute",
              left: pTop1[0],
              top: pTop1[1],
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 10px ${INTRO_COLORS.wellnessMint}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: (1 - flowUpTop2) * 50,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 12px #ffffff",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: pTop3[0],
              top: pTop3[1],
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 10px ${INTRO_COLORS.wellnessMint}`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* ────────────── 2. THREE UPSTREAM PAYLOAD CARDS (Height: 180px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 180,
            display: "grid",
            gridTemplateColumns: "296px 296px 296px",
            gap: 22,
            fontFamily: FONT_MONO,
            zIndex: 10,
          }}
        >
          {/* Payload 1: Data Penggunaan (F1345+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload1Active
                ? "rgba(10, 45, 30, 0.98)"
                : "rgba(10, 24, 20, 0.88)",
              border: `1.5px solid ${
                isPayload1Active ? INTRO_COLORS.wellnessMint : "rgba(16, 185, 129, 0.35)"
              }`,
              boxShadow: isPayload1Active
                ? `0 0 25px ${INTRO_COLORS.wellnessGlow}`
                : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `scale(${spPayload1})`,
              opacity: spPayload1,
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* Top Terminal Port */}
            <div
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "0 0 4px 4px",
                backgroundColor: INTRO_COLORS.wellnessMint,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 900,
                color: isPayload1Active ? INTRO_COLORS.wellnessMint : "#e2e8f0",
              }}
            >
              <FaChartLine size={16} color={INTRO_COLORS.wellnessMint} />
              <span>1. Data Penggunaan</span>
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div>• Durasi sesi terapi & frekuensi pakai</div>
              <div>• Metrik sensor suhu, detak & timer</div>
              <div>• Utilisasi hardware operasional pod</div>
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: INTRO_COLORS.wellnessMint,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "3px 8px",
                borderRadius: 4,
                alignSelf: "flex-start",
              }}
            >
              TELEMETRY INGESTION OK
            </div>
            {/* Bottom Terminal Port */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "4px 4px 0 0",
                backgroundColor: INTRO_COLORS.wellnessMint,
              }}
            />
          </div>

          {/* Payload 2: Registrasi User (F1385+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload2Active
                ? "rgba(15, 40, 65, 0.98)"
                : "rgba(10, 24, 20, 0.88)",
              border: `1.5px solid ${
                isPayload2Active ? INTRO_COLORS.skyBlue : "rgba(56, 189, 248, 0.35)"
              }`,
              boxShadow: isPayload2Active
                ? `0 0 25px ${INTRO_COLORS.cyanGlow}`
                : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `scale(${spPayload2})`,
              opacity: spPayload2,
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* Top Terminal Port */}
            <div
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "0 0 4px 4px",
                backgroundColor: INTRO_COLORS.skyBlue,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 900,
                color: isPayload2Active ? INTRO_COLORS.skyBlue : "#e2e8f0",
              }}
            >
              <FaUserCheck size={16} color={INTRO_COLORS.skyBlue} />
              <span>2. Registrasi User</span>
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div>• Pendaftaran akun user baru di pod</div>
              <div>• Profil preferensi & riwayat sesi</div>
              <div>• Sinkronisasi token autentikasi cloud</div>
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: INTRO_COLORS.skyBlue,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                padding: "3px 8px",
                borderRadius: 4,
                alignSelf: "flex-start",
              }}
            >
              USER PROFILE SYNCED
            </div>
            {/* Bottom Terminal Port */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "4px 4px 0 0",
                backgroundColor: INTRO_COLORS.skyBlue,
              }}
            />
          </div>

          {/* Payload 3: Log Aktivitas (F1420+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload3Active
                ? "rgba(50, 28, 10, 0.98)"
                : "rgba(10, 24, 20, 0.88)",
              border: `1.5px solid ${
                isPayload3Active ? INTRO_COLORS.sensorAmber : "rgba(245, 158, 11, 0.35)"
              }`,
              boxShadow: isPayload3Active
                ? `0 0 25px ${INTRO_COLORS.amberGlow}`
                : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `scale(${spPayload3})`,
              opacity: spPayload3,
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* Top Terminal Port */}
            <div
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "0 0 4px 4px",
                backgroundColor: INTRO_COLORS.sensorAmber,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 900,
                color: isPayload3Active ? INTRO_COLORS.sensorAmber : "#e2e8f0",
              }}
            >
              <FaListAlt size={16} color={INTRO_COLORS.sensorAmber} />
              <span>3. Log Aktivitas</span>
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div>• Error stack trace & crash diagnostics</div>
              <div>• Event audit keamanan Debian OS</div>
              <div>• Riwayat eksekusi hardware command</div>
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: INTRO_COLORS.sensorAmber,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                padding: "3px 8px",
                borderRadius: 4,
                alignSelf: "flex-start",
              }}
            >
              AUDIT LOGS BUFFERED
            </div>
            {/* Bottom Terminal Port */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 14,
                height: 5,
                borderRadius: "4px 4px 0 0",
                backgroundColor: INTRO_COLORS.sensorAmber,
              }}
            />
          </div>
        </div>

        {/* ────────────── CONNECTOR 2: ROW 1 PODS ➔ 3 PAYLOADS (Height: 220px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 220,
            position: "relative",
          }}
        >
          <svg
            width="932"
            height="220"
            viewBox="0 0 932 220"
            fill="none"
            style={{ position: "absolute", inset: 0 }}
          >
            {/* Background Tracks */}
            <path
              d="M 148 220 L 148 0"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 466 220 L 466 0"
              stroke="rgba(56, 189, 248, 0.35)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 784 220 L 784 0"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />

            {/* Glowing Active Rails */}
            <path
              d="M 148 220 L 148 0"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 220 L 466 0"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="3.5"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 784 220 L 784 0"
              stroke={INTRO_COLORS.sensorAmber}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            {/* Terminal Circles */}
            <circle cx="148" cy="220" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="148" cy="0" r="5" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="466" cy="220" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="0" r="5" fill={INTRO_COLORS.skyBlue} />
            <circle cx="784" cy="220" r="4" fill={INTRO_COLORS.sensorAmber} />
            <circle cx="784" cy="0" r="5" fill={INTRO_COLORS.sensorAmber} />
          </svg>

          {/* Animated Particles flowing straight UPWARD from Pods into Payloads */}
          <div
            style={{
              position: "absolute",
              left: 148,
              top: (1 - flowUpMid1) * 220,
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 16px ${INTRO_COLORS.wellnessMint}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 148,
              top: (1 - flowUpMid1_b) * 220,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 10px #ffffff",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: (1 - flowUpMid2) * 220,
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.skyBlue,
              boxShadow: `0 0 18px ${INTRO_COLORS.skyBlue}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: (1 - flowUpMid2_b) * 220,
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 10px #ffffff",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 784,
              top: (1 - flowUpMid3) * 220,
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.sensorAmber,
              boxShadow: `0 0 16px ${INTRO_COLORS.sensorAmber}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 784,
              top: (1 - flowUpMid3_b) * 220,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 10px #ffffff",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Central Transmission Bus Status Badge */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "6px 22px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 30, 20, 0.96)",
              border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
              boxShadow: `0 0 20px ${INTRO_COLORS.wellnessGlow}`,
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 900,
              color: "#d1fae5",
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 5,
            }}
          >
            <FaArrowUp size={11} color={INTRO_COLORS.wellnessMint} />
            <span>UPSTREAM BUFFERED INGESTION // ASYNCHRONOUS RETRY SAFE</span>
            <FaArrowUp size={11} color={INTRO_COLORS.wellnessMint} />
          </div>
        </div>

        {/* ────────────── 3. ROW 1 PODS (Jakarta, Surabaya, Bali - Height: 270px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 270,
            display: "grid",
            gridTemplateColumns: "296px 296px 296px",
            gap: 22,
          }}
        >
          <UpstreamPodCard
            id="POD 01"
            location="Jakarta"
            unit="Unit: JKT-01"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="1.8 MB/s [ACTIVE]"
            springVal={spPod1}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.wellnessMint}
            glowColor={INTRO_COLORS.wellnessGlow}
          />
          <UpstreamPodCard
            id="POD 02"
            location="Surabaya"
            unit="Unit: SBY-02"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="2.1 MB/s [ACTIVE]"
            springVal={spPod2}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.skyBlue}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <UpstreamPodCard
            id="POD 03"
            location="Bali"
            unit="Unit: DPS-03"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="1.6 MB/s [ACTIVE]"
            springVal={spPod3}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.sensorAmber}
            glowColor={INTRO_COLORS.amberGlow}
          />
        </div>

        {/* ────────────── CONNECTOR 3: ROW 2 ➔ ROW 1 CONDUITS (Height: 70px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 70,
            position: "relative",
          }}
        >
          <svg
            width="932"
            height="70"
            viewBox="0 0 932 70"
            fill="none"
            style={{ position: "absolute", inset: 0 }}
          >
            <path
              d="M 148 70 L 148 0"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 70 L 466 0"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="3"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 784 70 L 784 0"
              stroke={INTRO_COLORS.sensorAmber}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            <circle cx="148" cy="70" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="148" cy="0" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="466" cy="70" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="0" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="784" cy="70" r="4" fill={INTRO_COLORS.sensorAmber} />
            <circle cx="784" cy="0" r="4" fill={INTRO_COLORS.sensorAmber} />
          </svg>

          {/* Animated Particles flowing UPWARD between Row 2 and Row 1 */}
          <div
            style={{
              position: "absolute",
              left: 148,
              top: (1 - flowUpRow2_1) * 70,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 12px ${INTRO_COLORS.wellnessMint}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: (1 - flowUpRow2_2) * 70,
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.skyBlue,
              boxShadow: `0 0 14px ${INTRO_COLORS.skyBlue}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 784,
              top: (1 - flowUpRow2_3) * 70,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.sensorAmber,
              boxShadow: `0 0 12px ${INTRO_COLORS.sensorAmber}`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* ────────────── 4. ROW 2 PODS (Bandung, Medan, Makassar - Height: 270px) ────────────── */}
        <div
          style={{
            width: 932,
            height: 270,
            display: "grid",
            gridTemplateColumns: "296px 296px 296px",
            gap: 22,
          }}
        >
          <UpstreamPodCard
            id="POD 04"
            location="Bandung"
            unit="Unit: BDO-04"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="1.9 MB/s [ACTIVE]"
            springVal={spPod4}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.wellnessMint}
            glowColor={INTRO_COLORS.wellnessGlow}
          />
          <UpstreamPodCard
            id="POD 05"
            location="Medan"
            unit="Unit: MDN-05"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="1.7 MB/s [ACTIVE]"
            springVal={spPod5}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.skyBlue}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <UpstreamPodCard
            id="POD 06"
            location="Makassar"
            unit="Unit: UPG-06"
            cacheStatus="0 Pending // Synced"
            uploadSpeed="2.0 MB/s [ACTIVE]"
            springVal={spPod6}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.sensorAmber}
            glowColor={INTRO_COLORS.amberGlow}
          />
        </div>

        {/* ────────────── 5. BOTTOM FLEET GUARANTEE BANNER (Height: 80px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 80,
            padding: "16px 24px",
            borderRadius: 16,
            backgroundColor: "rgba(10, 30, 20, 0.95)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: FONT_MONO,
            fontSize: 13,
            color: "#e2e8f0",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaCheckCircle size={18} color={INTRO_COLORS.wellnessMint} />
            <div>
              <div style={{ fontWeight: 800, color: "#f8fafc" }}>
                Resiliensi Data Lokal: Data Tersimpan di PostgreSQL Lokal & Terunggah Otomatis
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Jaminan zero data loss: seluruh telemetry, registrasi akun, dan log tersinkron tanpa jeda
              </div>
            </div>
          </div>
          <span
            style={{
              color: INTRO_COLORS.wellnessMint,
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: 0.5,
            }}
          >
            [ZERO DATA LOSS OK]
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
