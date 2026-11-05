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
  FaArrowUp,
  FaCheckCircle,
  FaCloud,
  FaExchangeAlt,
  FaServer,
  FaSyncAlt,
} from "react-icons/fa";
import { SiDebian } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ EXACT TIMING & SPRINGS (Scene 6: Frames 980 - 1110)
  // Line 13: "Karena itu, dibutuhkan mekanisme sinkronisasi data dua arah."
  // Voiceover: F981 - F1080, Pause: F1080 - F1110
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Entrance Springs (F980+)
  const spBadge = spring({
    frame: Math.max(0, frame - 980),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 988),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  const spStage = spring({
    frame: Math.max(0, frame - 998),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 115 },
  });

  // Top Cloud & Bottom Edge Pod Springs
  const spCloud = spring({
    frame: Math.max(0, frame - 1008),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 120 },
  });

  const spPod = spring({
    frame: Math.max(0, frame - 1018),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 120 },
  });

  // Two-Way Conduit Activation (F1030+) - Voice: "sinkronisasi..."
  const spConduit = spring({
    frame: Math.max(0, frame - 1030),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 130 },
  });

  // Center Bi-Directional Sync Core Lock-in (F1050+) - Voice: "...data dua arah"
  const spSyncCore = spring({
    frame: Math.max(0, frame - 1050),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 140 },
  });

  // Ambient breathing pulse
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // Continuous rotating sync icon
  const syncRotation = ((frame - 980) * 4) % 360;

  // Continuous flowing data packets (Downstream & Upstream)
  const packetDown1 = ((frame - 1030) * 0.07) % 1;
  const packetDown2 = ((frame - 1015) * 0.07) % 1;
  const packetUp1 = ((frame - 1030) * 0.07) % 1;
  const packetUp2 = ((frame - 1015) * 0.07) % 1;

  // Scene Exit Transition (F1095 - F1110)
  const exitProgress = interpolate(frame, [1095, 1110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const sceneOpacity = 1 - exitProgress;
  const sceneScale = 1 - exitProgress * 0.04;
  const sceneTranslateY = -exitProgress * 20;

  return (
    <SceneContainer
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(${sceneTranslateY}px)`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP SOLUTION BADGE (F980+)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -15}px)`,
          opacity: spBadge,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 28px",
          borderRadius: 9999,
          backgroundColor: "rgba(6, 25, 45, 0.95)",
          border: `1.5px solid ${INTRO_COLORS.cyberCyan}`,
          boxShadow: `0 0 25px ${INTRO_COLORS.cyanGlow}`,
          marginBottom: 20,
        }}
      >
        <FaExchangeAlt size={15} color={INTRO_COLORS.cyberCyan} />
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: "#e0f2fe",
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          ARCHITECTURE SOLUTION // RESILIENCE PIPELINE
        </span>
        <div style={{ transform: `rotate(${syncRotation}deg)` }}>
          <FaSyncAlt size={14} color={INTRO_COLORS.skyBlue} />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOLD MAIN HEADLINE (F988+)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          textAlign: "center",
          marginBottom: 26,
          transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 20}px)`,
          opacity: spHeadline,
        }}
      >
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 24,
            color: "#94a3b8",
            fontWeight: 600,
            marginBottom: 6,
            letterSpacing: 1,
          }}
        >
          Solusi Menghubungkan Dua Kondisi:
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#f8fafc",
            fontFamily: FONT_MONO,
            letterSpacing: "-0.5px",
            lineHeight: 1.25,
          }}
        >
          Mekanisme Sinkronisasi{" "}
          <span
            style={{
              color: INTRO_COLORS.skyBlue,
              textShadow: `0 0 30px ${INTRO_COLORS.cyanGlow}`,
            }}
          >
            Data Dua Arah
          </span>
        </div>

        {/* Bi-directional Flow Mode Pill */}
        <div
          style={{
            marginTop: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: FONT_MONO,
            fontSize: 16,
            fontWeight: 800,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 38, 0.9)",
            border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
            boxShadow: `0 0 20px ${INTRO_COLORS.cyanGlow}`,
            color: "#e0f2fe",
          }}
        >
          <span style={{ color: INTRO_COLORS.skyBlue }}>[ CLOUD FLEET ]</span>
          <span style={{ color: INTRO_COLORS.wellnessMint, display: "flex", alignItems: "center", gap: 6 }}>
            <FaArrowDown size={14} />
            <FaArrowUp size={14} />
          </span>
          <span style={{ color: INTRO_COLORS.wellnessMint }}>[ POD DEBIAN ]</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. DYNAMIC TWO-WAY SYNCHRONIZATION ENGINE STAGE (980px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          borderRadius: 24,
          backgroundColor: "rgba(6, 14, 28, 0.95)",
          border: `2px solid ${INTRO_COLORS.cardBorder}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.75), 0 0 50px rgba(6, 182, 212, ${
            0.15 + pulseWave * 0.1
          })`,
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          transform: `scale(${spStage})`,
          opacity: spStage,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Hex Tech Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* ────────────── TOP NODE: CLOUD FLEET SERVER (F1008+) ────────────── */}
        <div
          style={{
            width: "100%",
            borderRadius: 18,
            backgroundColor: "rgba(10, 25, 48, 0.95)",
            border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${INTRO_COLORS.cyanGlow}`,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `scale(${spCloud})`,
            opacity: spCloud,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 14,
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
                boxShadow: `0 0 15px ${INTRO_COLORS.cyanGlow}`,
              }}
            >
              <FaCloud size={28} color={INTRO_COLORS.skyBlue} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>CLOUD PLATFORM & FLEET SERVER</span>
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
                  SOURCE OF TRUTH
                </span>
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: "#94a3b8",
                  marginTop: 2,
                }}
              >
                Pusat manajemen konten, registrasi fleet pod, dan agregasi data
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 9999,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              backgroundColor: "rgba(6, 182, 212, 0.15)",
              border: `1px solid ${INTRO_COLORS.skyBlue}`,
              color: INTRO_COLORS.skyBlue,
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
                backgroundColor: INTRO_COLORS.skyBlue,
                boxShadow: `0 0 8px ${INTRO_COLORS.skyBlue}`,
              }}
            />
            <span>SYNC HUB READY</span>
          </div>
        </div>

        {/* ────────────── CENTER DUAL-CHANNEL CONDUIT (F1030+) ────────────── */}
        <div
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: 20,
            backgroundColor: "rgba(8, 16, 32, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.25)",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 18,
            alignItems: "center",
            transform: `scale(${spConduit})`,
            opacity: spConduit,
            position: "relative",
          }}
        >
          {/* LEFT CHANNEL: DOWNSTREAM (Cloud ➔ Pod) */}
          <div
            style={{
              borderRadius: 14,
              backgroundColor: "rgba(6, 25, 45, 0.9)",
              border: `1.5px solid ${INTRO_COLORS.skyBlue}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Downstream Energy Packet */}
            <div
              style={{
                position: "absolute",
                top: `${packetDown1 * 100}%`,
                left: 12,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: INTRO_COLORS.skyBlue,
                boxShadow: `0 0 10px ${INTRO_COLORS.skyBlue}`,
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: `${packetDown2 * 100}%`,
                right: 12,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: INTRO_COLORS.cyberCyan,
                boxShadow: `0 0 10px ${INTRO_COLORS.cyberCyan}`,
                transform: "translateY(-50%)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: FONT_MONO,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: INTRO_COLORS.skyBlue,
                  letterSpacing: 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <FaArrowDown size={14} />
                <span>ARAH 1: DOWNSTREAM</span>
              </span>
              <span
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: "#bae6fd",
                }}
              >
                CLOUD ➔ POD
              </span>
            </div>

            <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: "#cbd5e1" }}>
              Distribusi aset & instruksi dari cloud ke perangkat lokal
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 4,
                fontFamily: FONT_MONO,
                fontSize: 11,
              }}
            >
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                • Multimedia Content
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                • App Artifacts
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                • Hardware Config
              </span>
            </div>
          </div>

          {/* CENTER ENGINE INTERLOCK BADGE (F1050+) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transform: `scale(${spSyncCore})`,
              opacity: spSyncCore,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "rgba(10, 25, 48, 0.95)",
                border: `2px solid ${INTRO_COLORS.wellnessMint}`,
                boxShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${syncRotation}deg)`,
              }}
            >
              <FaSyncAlt size={26} color={INTRO_COLORS.wellnessMint} />
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 900,
                color: "#e2e8f0",
                textAlign: "center",
                lineHeight: 1.2,
                backgroundColor: "rgba(6, 12, 24, 0.9)",
                padding: "4px 10px",
                borderRadius: 9999,
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              TWO-WAY
              <br />
              SYNC
            </div>
          </div>

          {/* RIGHT CHANNEL: UPSTREAM (Pod ➔ Cloud) */}
          <div
            style={{
              borderRadius: 14,
              backgroundColor: "rgba(10, 35, 25, 0.9)",
              border: `1.5px solid ${INTRO_COLORS.wellnessGreen}`,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Upstream Energy Packet */}
            <div
              style={{
                position: "absolute",
                top: `${(1 - packetUp1) * 100}%`,
                left: 12,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: INTRO_COLORS.wellnessMint,
                boxShadow: `0 0 10px ${INTRO_COLORS.wellnessMint}`,
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: `${(1 - packetUp2) * 100}%`,
                right: 12,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                boxShadow: "0 0 10px #ffffff",
                transform: "translateY(-50%)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: FONT_MONO,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: INTRO_COLORS.wellnessMint,
                  letterSpacing: 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <FaArrowUp size={14} />
                <span>ARAH 2: UPSTREAM</span>
              </span>
              <span
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  color: "#a7f3d0",
                }}
              >
                POD ➔ CLOUD
              </span>
            </div>

            <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: "#cbd5e1" }}>
              Pengiriman hasil sesi, telemetry, dan data user dari pod ke cloud
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 4,
                fontFamily: FONT_MONO,
                fontSize: 11,
              }}
            >
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                • Usage Telemetry
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                • User Registration
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  color: "#94a3b8",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                • Activity Logs
              </span>
            </div>
          </div>
        </div>

        {/* ────────────── BOTTOM NODE: DEBIAN EDGE POD (F1018+) ────────────── */}
        <div
          style={{
            width: "100%",
            borderRadius: 18,
            backgroundColor: "rgba(8, 25, 20, 0.95)",
            border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${INTRO_COLORS.wellnessGlow}`,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `scale(${spPod})`,
            opacity: spPod,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 14,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${INTRO_COLORS.wellnessMint}`,
                boxShadow: `0 0 15px ${INTRO_COLORS.wellnessGlow}`,
              }}
            >
              <SiDebian size={30} color={INTRO_COLORS.debianRed} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>WELLNESS POD (DEBIAN PC LOCAL CONTROLLER)</span>
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
                  AUTONOMOUS CLIENT
                </span>
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: "#94a3b8",
                  marginTop: 2,
                }}
              >
                Menjalankan sesi secara mandiri & menyinkronkan data secara otomatis
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "6px 16px",
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
            <FaCheckCircle size={14} color={INTRO_COLORS.wellnessMint} />
            <span>LOCAL CLIENT READY</span>
          </div>
        </div>

        {/* ────────────── BOTTOM ARCHITECTURE GUARANTEE BANNER ────────────── */}
        <div
          style={{
            width: "100%",
            padding: "14px 22px",
            borderRadius: 14,
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: FONT_MONO,
            fontSize: 13,
            color: "#e2e8f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaServer size={14} color={INTRO_COLORS.sensorAmber} />
            <span>
              Solusi Sinkronisasi: Data Tersimpan di Local Cache Saat Offline, Tersinkron Otomatis Saat Online
            </span>
          </div>
          <span
            style={{
              color: INTRO_COLORS.wellnessMint,
              fontWeight: 800,
            }}
          >
            [EVENTUAL CONSISTENCY]
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
