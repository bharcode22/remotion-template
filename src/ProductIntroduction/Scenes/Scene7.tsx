import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowDown,
  FaBox,
  FaCheckCircle,
  FaCloud,
  FaFilm,
  FaNetworkWired,
  FaSlidersH,
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

interface PodCardProps {
  id: string;
  location: string;
  unit: string;
  version: string;
  osDetail: string;
  springVal: number;
  pulseWave: number;
  accentColor: string;
  glowColor: string;
}

const PodCard: React.FC<PodCardProps> = ({
  id,
  location,
  unit,
  version,
  osDetail,
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
      {/* Top Connection Terminal Socket (Plugs directly into incoming conduit) */}
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
        <FaCheckCircle size={18} color={accentColor} />
      </div>

      {/* Hardware & OS Spec Block */}
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
          border: "1px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Sync State:</span>
          <span style={{ color: accentColor, fontWeight: 900 }}>
            100% SYNCED
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>OS Controller:</span>
          <span style={{ color: "#94a3b8" }}>{osDetail}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Payload Ver:</span>
          <span style={{ color: "#e2e8f0" }}>{version}</span>
        </div>
      </div>

      {/* Live Sync Progress Bar */}
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
          <span>AUTONOMOUS WORKER</span>
          <span style={{ color: accentColor, fontWeight: 800 }}>ACTIVE</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 6,
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            overflow: "hidden",
            border: "1px solid rgba(56, 189, 248, 0.2)",
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

      {/* Bottom Connection Terminal Socket (Plugs directly into outgoing conduit) */}
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

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ EXACT TIMING & SPRINGS (Scene 7: Frames 1110 - 1295)
  // Line 14: "Dari cloud ke produk, seperti konten multimedia, artefak aplikasi, dan konfigurasi hardware."
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Entrance Springs (F1110+)
  const spBadge = spring({
    frame: Math.max(0, frame - 1110),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 1114),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 115 },
  });

  const spCloud = spring({
    frame: Math.max(0, frame - 1120),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 125 },
  });

  // 2. Three Payload Stagger Springs (Synchronized with VO items)
  const spPayload1 = spring({
    frame: Math.max(0, frame - 1140),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  const spPayload2 = spring({
    frame: Math.max(0, frame - 1185),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  const spPayload3 = spring({
    frame: Math.max(0, frame - 1225),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 135 },
  });

  // 3. Fleet of 6 Pods Stagger Springs (Domino Effect across Rows)
  const spPod1 = spring({
    frame: Math.max(0, frame - 1124),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod2 = spring({
    frame: Math.max(0, frame - 1128),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod3 = spring({
    frame: Math.max(0, frame - 1132),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod4 = spring({
    frame: Math.max(0, frame - 1136),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod5 = spring({
    frame: Math.max(0, frame - 1140),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });
  const spPod6 = spring({
    frame: Math.max(0, frame - 1144),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 130 },
  });

  // Continuous subtle pulse
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // Packet Flow Progresses
  const baseSpeed = 0.055;
  const flowTop1 = ((frame - 1120) * (baseSpeed * 1.3)) % 1;
  const flowTop2 = ((frame - 1115) * (baseSpeed * 1.3)) % 1;
  const flowTop3 = ((frame - 1125) * (baseSpeed * 1.3)) % 1;

  const flowMid1 = ((frame - 1125) * baseSpeed) % 1;
  const flowMid1_b = ((frame - 1115) * baseSpeed) % 1;
  const flowMid2 = ((frame - 1118) * baseSpeed) % 1;
  const flowMid2_b = ((frame - 1108) * baseSpeed) % 1;
  const flowMid3 = ((frame - 1130) * baseSpeed) % 1;
  const flowMid3_b = ((frame - 1120) * baseSpeed) % 1;

  const flowRow2_1 = ((frame - 1135) * (baseSpeed * 1.2)) % 1;
  const flowRow2_2 = ((frame - 1128) * (baseSpeed * 1.2)) % 1;
  const flowRow2_3 = ((frame - 1140) * (baseSpeed * 1.2)) % 1;

  // Bezier coordinates on 932 x 50 SVG connector 1 (Cloud ➔ 3 Payloads):
  // Origin (Cloud Dispatch Center): [466, 0]
  // Target Col 1: [148, 50]
  // Target Col 2: [466, 50]
  // Target Col 3: [784, 50]
  const pTop1 = getBezierPoint([466, 0], [466, 25], [148, 25], [148, 50], flowTop1);
  const pTop3 = getBezierPoint([466, 0], [466, 25], [784, 25], [784, 50], flowTop3);

  // Active Highlight States for the 3 payload sections
  const isPayload1Active = frame >= 1140 && frame < 1185;
  const isPayload2Active = frame >= 1185 && frame < 1225;
  const isPayload3Active = frame >= 1225;

  // Scene Exit Transition (F1280 - F1295)
  const exitProgress = interpolate(frame, [1280, 1295], [0, 1], {
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
          1. TOP DOWNSTREAM BADGE (F1110+)
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
          backgroundColor: "rgba(6, 25, 45, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.cyanGlow}`,
        }}
      >
        <FaArrowDown size={14} color={INTRO_COLORS.skyBlue} />
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
          DOWNSTREAM PIPELINE // CLOUD ➔ FLEET MULTI-POD
        </span>
        <FaNetworkWired size={14} color={INTRO_COLORS.wellnessMint} />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOLD MAIN HEADLINE (F1114+)
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
          Arah Pertama: Distribusi Terpusat
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
          Dari Cloud Ke{" "}
          <span
            style={{
              color: INTRO_COLORS.skyBlue,
              textShadow: `0 0 30px ${INTRO_COLORS.cyanGlow}`,
            }}
          >
            Semua Produk
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
          border: `2px solid ${INTRO_COLORS.cardBorder}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.75), 0 0 45px rgba(6, 182, 212, ${
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
        {/* ────────────── 1. TOP: CENTRAL CLOUD REPOSITORY (Height: 150px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 150,
            borderRadius: 18,
            backgroundColor: "rgba(10, 26, 50, 0.95)",
            border: `2px solid ${INTRO_COLORS.skyBlue}`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${INTRO_COLORS.cyanGlow}`,
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
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
                boxShadow: `0 0 15px ${INTRO_COLORS.cyanGlow}`,
              }}
            >
              <FaCloud size={32} color={INTRO_COLORS.skyBlue} />
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
                <span>CENTRAL CLOUD REPOSITORY</span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    color: INTRO_COLORS.cyberCyan,
                    fontWeight: 800,
                  }}
                >
                  SOURCE MASTER
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
                Pusat pengelolaan aset global yang siap didistribusikan ke seluruh armada POD
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
            <span>BROADCASTING TO 6 PODS</span>
          </div>

          {/* Bottom Dispatch Port directly on Cloud Card */}
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 24,
              height: 8,
              borderRadius: "0 0 6px 6px",
              backgroundColor: INTRO_COLORS.skyBlue,
              boxShadow: `0 0 12px ${INTRO_COLORS.skyBlue}`,
            }}
          />
        </div>

        {/* ────────────── CONNECTOR 1: CLOUD ➔ 3 PAYLOADS (Height: 50px) ────────────── */}
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
              d="M 466 0 C 466 25, 148 25, 148 50"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="2.5"
            />
            <path
              d="M 466 0 L 466 50"
              stroke="rgba(56, 189, 248, 0.4)"
              strokeWidth="2.5"
            />
            <path
              d="M 466 0 C 466 25, 784 25, 784 50"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="2.5"
            />

            {/* Glowing Active Lines */}
            <path
              d="M 466 0 C 466 25, 148 25, 148 50"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 0 L 466 50"
              stroke={INTRO_COLORS.cyberCyan}
              strokeWidth="3"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 466 0 C 466 25, 784 25, 784 50"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="2.5"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            {/* Terminal Points */}
            <circle cx="466" cy="0" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="148" cy="50" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="50" r="4" fill={INTRO_COLORS.cyberCyan} />
            <circle cx="784" cy="50" r="4" fill={INTRO_COLORS.skyBlue} />
          </svg>

          {/* Animated Flowing Particles (Cloud ➔ Payloads) */}
          <div
            style={{
              position: "absolute",
              left: pTop1[0],
              top: pTop1[1],
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.skyBlue,
              boxShadow: `0 0 10px ${INTRO_COLORS.skyBlue}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: flowTop2 * 50,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.cyberCyan,
              boxShadow: `0 0 12px ${INTRO_COLORS.cyberCyan}`,
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

        {/* ────────────── 2. THREE PAYLOAD CARDS (Height: 180px, Width: 296px each) ────────────── */}
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
          {/* Payload 1: Konten Multimedia (F1140+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload1Active
                ? "rgba(18, 35, 75, 0.98)"
                : "rgba(10, 18, 32, 0.88)",
              border: `1.5px solid ${
                isPayload1Active ? INTRO_COLORS.skyBlue : "rgba(56, 189, 248, 0.3)"
              }`,
              boxShadow: isPayload1Active
                ? `0 0 25px ${INTRO_COLORS.cyanGlow}`
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
                color: isPayload1Active ? INTRO_COLORS.skyBlue : "#e2e8f0",
              }}
            >
              <FaFilm size={16} color={INTRO_COLORS.skyBlue} />
              <span>1. Konten Multimedia</span>
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
              <div>• Audio frekuensi & musik relaksasi</div>
              <div>• Video terapi meditasi visual 4K</div>
              <div>• Preset pencahayaan ambience</div>
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
              ASSET DISTRIBUTION READY
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

          {/* Payload 2: Artefak Aplikasi (F1185+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload2Active
                ? "rgba(20, 48, 35, 0.98)"
                : "rgba(10, 18, 32, 0.88)",
              border: `1.5px solid ${
                isPayload2Active ? INTRO_COLORS.wellnessMint : "rgba(16, 185, 129, 0.3)"
              }`,
              boxShadow: isPayload2Active
                ? `0 0 25px ${INTRO_COLORS.wellnessGlow}`
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
                color: isPayload2Active ? INTRO_COLORS.wellnessMint : "#e2e8f0",
              }}
            >
              <FaBox size={16} color={INTRO_COLORS.wellnessMint} />
              <span>2. Artefak Aplikasi</span>
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
              <div>• Bundle aplikasi web React UI</div>
              <div>• Binary backend services Node.js</div>
              <div>• Patch package OS Debian Linux</div>
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
              BINARY DEPLOYMENT READY
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

          {/* Payload 3: Konfigurasi Hardware (F1225+) */}
          <div
            style={{
              height: 180,
              padding: "16px 16px",
              borderRadius: 16,
              backgroundColor: isPayload3Active
                ? "rgba(50, 28, 10, 0.98)"
                : "rgba(10, 18, 32, 0.88)",
              border: `1.5px solid ${
                isPayload3Active ? INTRO_COLORS.sensorAmber : "rgba(245, 158, 11, 0.3)"
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
              <FaSlidersH size={16} color={INTRO_COLORS.sensorAmber} />
              <span>3. Konfigurasi Hardware</span>
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
              <div>• Frekuensi & timing lampu strobe</div>
              <div>• Profil equalizer speaker terapi</div>
              <div>• Kalibrasi sensor suhu & detak</div>
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
              HARDWARE CONFIG READY
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

        {/* ────────────── CONNECTOR 2: 3 PAYLOADS ➔ ROW 1 PODS (Height: 220px) ────────────── */}
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
              d="M 148 0 L 148 220"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 466 0 L 466 220"
              stroke="rgba(56, 189, 248, 0.4)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 784 0 L 784 220"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />

            {/* Glowing Active Rails */}
            <path
              d="M 148 0 L 148 220"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 0 L 466 220"
              stroke={INTRO_COLORS.cyberCyan}
              strokeWidth="3.5"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 784 0 L 784 220"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            {/* Terminal Circles */}
            <circle cx="148" cy="0" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="148" cy="220" r="5" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="0" r="4" fill={INTRO_COLORS.cyberCyan} />
            <circle cx="466" cy="220" r="5" fill={INTRO_COLORS.cyberCyan} />
            <circle cx="784" cy="0" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="784" cy="220" r="5" fill={INTRO_COLORS.wellnessMint} />
          </svg>

          {/* Animated Particles flowing straight down into Pods 01, 02, 03 */}
          <div
            style={{
              position: "absolute",
              left: 148,
              top: flowMid1 * 220,
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
              left: 148,
              top: flowMid1_b * 220,
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
              top: flowMid2 * 220,
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.cyberCyan,
              boxShadow: `0 0 18px ${INTRO_COLORS.cyberCyan}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: flowMid2_b * 220,
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
              top: flowMid3 * 220,
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
              left: 784,
              top: flowMid3_b * 220,
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
              backgroundColor: "rgba(10, 20, 38, 0.96)",
              border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
              boxShadow: `0 0 20px ${INTRO_COLORS.cyanGlow}`,
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 900,
              color: "#e0f2fe",
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 5,
            }}
          >
            <FaArrowDown size={11} color={INTRO_COLORS.skyBlue} />
            <span>DIRECT FLEET BUS // CONTINUOUS INGESTION</span>
            <FaArrowDown size={11} color={INTRO_COLORS.skyBlue} />
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
          <PodCard
            id="POD 01"
            location="Jakarta"
            unit="Unit: JKT-01"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod1}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.skyBlue}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <PodCard
            id="POD 02"
            location="Surabaya"
            unit="Unit: SBY-02"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod2}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.cyberCyan}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <PodCard
            id="POD 03"
            location="Bali"
            unit="Unit: DPS-03"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod3}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.wellnessMint}
            glowColor={INTRO_COLORS.wellnessGlow}
          />
        </div>

        {/* ────────────── CONNECTOR 3: ROW 1 ➔ ROW 2 CONDUITS (Height: 70px) ────────────── */}
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
              d="M 148 0 L 148 70"
              stroke={INTRO_COLORS.skyBlue}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />
            <path
              d="M 466 0 L 466 70"
              stroke={INTRO_COLORS.cyberCyan}
              strokeWidth="3"
              strokeOpacity={0.8 + pulseWave * 0.2}
            />
            <path
              d="M 784 0 L 784 70"
              stroke={INTRO_COLORS.wellnessMint}
              strokeWidth="3"
              strokeOpacity={0.7 + pulseWave * 0.3}
            />

            <circle cx="148" cy="0" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="148" cy="70" r="4" fill={INTRO_COLORS.skyBlue} />
            <circle cx="466" cy="0" r="4" fill={INTRO_COLORS.cyberCyan} />
            <circle cx="466" cy="70" r="4" fill={INTRO_COLORS.cyberCyan} />
            <circle cx="784" cy="0" r="4" fill={INTRO_COLORS.wellnessMint} />
            <circle cx="784" cy="70" r="4" fill={INTRO_COLORS.wellnessMint} />
          </svg>

          {/* Animated Particles flowing between Row 1 and Row 2 */}
          <div
            style={{
              position: "absolute",
              left: 148,
              top: flowRow2_1 * 70,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.skyBlue,
              boxShadow: `0 0 12px ${INTRO_COLORS.skyBlue}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 466,
              top: flowRow2_2 * 70,
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.cyberCyan,
              boxShadow: `0 0 14px ${INTRO_COLORS.cyberCyan}`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 784,
              top: flowRow2_3 * 70,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: INTRO_COLORS.wellnessMint,
              boxShadow: `0 0 12px ${INTRO_COLORS.wellnessMint}`,
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
          <PodCard
            id="POD 04"
            location="Bandung"
            unit="Unit: BDO-04"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod4}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.skyBlue}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <PodCard
            id="POD 05"
            location="Medan"
            unit="Unit: MDN-05"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod5}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.cyberCyan}
            glowColor={INTRO_COLORS.cyanGlow}
          />
          <PodCard
            id="POD 06"
            location="Makassar"
            unit="Unit: UPG-06"
            version="v2.4.1 [LATEST]"
            osDetail="Debian GNU/Linux 12"
            springVal={spPod6}
            pulseWave={pulseWave}
            accentColor={INTRO_COLORS.wellnessMint}
            glowColor={INTRO_COLORS.wellnessGlow}
          />
        </div>

        {/* ────────────── 5. BOTTOM FLEET BROADCAST BANNER (Height: 80px) ────────────── */}
        <div
          style={{
            width: "100%",
            height: 80,
            padding: "16px 24px",
            borderRadius: 16,
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
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
            <FaNetworkWired size={18} color={INTRO_COLORS.skyBlue} />
            <div>
              <div style={{ fontWeight: 800, color: "#f8fafc" }}>
                Otomasi Fleet Global: 1 Perubahan di Cloud Mengalir Langsung ke Seluruh POD Kapsul
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Sinkronisasi otomatis real-time tanpa sentuhan manual operator lapangan
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
            [100% FLEET BROADCAST OK]
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
