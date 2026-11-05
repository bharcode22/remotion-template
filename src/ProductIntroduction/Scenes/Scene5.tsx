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
  FaCloud,
  FaExclamationTriangle,
  FaMicrochip,
  FaServer,
  FaShieldAlt,
  FaTimes,
  FaWifi,
} from "react-icons/fa";
import { SiDebian, SiPostgresql } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { INTRO_COLORS } from "../constants";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ EXACT TIMELINE & PHASES (Scene 5: Frames 770 - 980)
  //
  // Phase 1 (F770 - F899):
  // Line 10: "Nah, tantangannya adalah produk ini harus tetap bisa berjalan," (Voice: F777 - F880)
  //
  // Phase 2 (F900 - F958):
  // Line 11 (Part 1): "baik dalam kondisi online..." (Voice: F895 - F920)
  // Enters sharply at F900!
  //
  // Phase 3 (F942 - F980):
  // Line 11 (Part 2): "...maupun offline." (Voice: F930 - F956)
  // Enters dramatically at F942!
  // ─────────────────────────────────────────────────────────────────────────────

  // Phase Flags
  const isOnlineActive = frame >= 900;
  const isOfflineActive = frame >= 942;

  // 1. Entrance Springs (F770+)
  const spBadge = spring({
    frame: Math.max(0, frame - 770),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const spHeadline = spring({
    frame: Math.max(0, frame - 775),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  const spStage = spring({
    frame: Math.max(0, frame - 785),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 115 },
  });

  // 2. Online Mode Spring (F900+)
  const spOnline = spring({
    frame: Math.max(0, frame - 900),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // 3. Offline Mode Spring (F942+)
  const spOffline = spring({
    frame: Math.max(0, frame - 942),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 150 },
  });

  // Continuous subtle pulse
  const pulseWave = Math.sin((frame * Math.PI) / 8) * 0.5 + 0.5;

  // Data packet transmission along conduits during Online Mode (F900 - F941)
  const packetProgress1 = ((frame - 900) * 0.08) % 1;
  const packetProgress2 = ((frame - 890) * 0.08) % 1;
  const packetProgress3 = ((frame - 880) * 0.08) % 1;

  // Severance spark intensity at F942
  const severanceFlash = interpolate(frame, [942, 946, 953], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Offline Shield expansion wave from center at F959
  const shieldScale = interpolate(spOffline, [0, 1], [0.85, 1]);
  const shieldGlow = isOfflineActive
    ? 0.35 + pulseWave * 0.25
    : 0;

  // Scene Exit Transition (F972 - F980)
  const exitProgress = interpolate(frame, [972, 980], [0, 1], {
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
          1. TOP CHALLENGE BADGE (F770+)
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
          backgroundColor: isOfflineActive
            ? "rgba(40, 10, 15, 0.95)"
            : isOnlineActive
            ? "rgba(8, 28, 48, 0.95)"
            : "rgba(35, 18, 6, 0.95)",
          border: `1.5px solid ${
            isOfflineActive
              ? INTRO_COLORS.wellnessMint
              : isOnlineActive
              ? INTRO_COLORS.cyberCyan
              : INTRO_COLORS.sensorAmber
          }`,
          boxShadow: `0 0 25px ${
            isOfflineActive
              ? INTRO_COLORS.wellnessGlow
              : isOnlineActive
              ? INTRO_COLORS.cyanGlow
              : INTRO_COLORS.amberGlow
          }`,
          marginBottom: 20,
        }}
      >
        <FaExclamationTriangle
          size={15}
          color={
            isOfflineActive
              ? INTRO_COLORS.wellnessMint
              : isOnlineActive
              ? INTRO_COLORS.cyberCyan
              : INTRO_COLORS.sensorAmber
          }
        />
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: "#fef3c7",
            textTransform: "uppercase",
            fontFamily: FONT_MONO,
          }}
        >
          {isOfflineActive
            ? "EDGE AUTONOMY // ZERO DOWNTIME"
            : isOnlineActive
            ? "ACTIVE FLEET // CLOUD SYNCHRONIZATION"
            : "CORE CHALLENGE // EDGE RESILIENCE"}
        </span>
        <FaShieldAlt
          size={14}
          color={
            isOfflineActive
              ? INTRO_COLORS.wellnessMint
              : INTRO_COLORS.skyBlue
          }
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOLD MAIN HEADLINE (F775+)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          textAlign: "center",
          marginBottom: 24,
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
          Tantangan Utama Arsitektur:
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
          Produk Harus{" "}
          <span
            style={{
              color: INTRO_COLORS.wellnessMint,
              textShadow: `0 0 25px ${INTRO_COLORS.wellnessGlow}`,
            }}
          >
            Tetap Berjalan
          </span>
        </div>

        {/* Dynamic Dual-State Status Pill below Headline */}
        <div
          style={{
            marginTop: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            fontFamily: FONT_MONO,
            fontSize: 22,
            fontWeight: 900,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 18, 32, 0.9)",
            border: "1px solid rgba(148, 163, 184, 0.25)",
          }}
        >
          {/* Online Tag */}
          <span
            style={{
              color: isOnlineActive && !isOfflineActive
                ? INTRO_COLORS.skyBlue
                : isOnlineActive && isOfflineActive
                ? "rgba(148, 163, 184, 0.4)"
                : "rgba(148, 163, 184, 0.5)",
              textShadow:
                isOnlineActive && !isOfflineActive
                  ? `0 0 20px ${INTRO_COLORS.cyanGlow}`
                  : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transform: isOnlineActive && !isOfflineActive ? "scale(1.08)" : "scale(1)",
            }}
          >
            <FaWifi size={16} />
            <span>KONDISI ONLINE</span>
          </span>

          <span style={{ color: "#475569" }}>//</span>

          {/* Offline Tag */}
          <span
            style={{
              color: isOfflineActive
                ? INTRO_COLORS.wellnessMint
                : "rgba(148, 163, 184, 0.45)",
              textShadow: isOfflineActive
                ? `0 0 25px ${INTRO_COLORS.wellnessGlow}`
                : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transform: isOfflineActive ? `scale(${1 + spOffline * 0.1})` : "scale(1)",
            }}
          >
            <FaShieldAlt size={16} />
            <span>KONDISI OFFLINE</span>
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. DYNAMIC CINEMATIC STAGE: CLOUD ➔ CONDUIT ➔ EDGE POD (980px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 980,
          borderRadius: 24,
          backgroundColor: "rgba(6, 12, 26, 0.95)",
          border: `2px solid ${
            isOfflineActive
              ? "rgba(16, 185, 129, 0.45)"
              : isOnlineActive
              ? "rgba(56, 189, 248, 0.45)"
              : "rgba(148, 163, 184, 0.25)"
          }`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 45px ${
            isOfflineActive
              ? "rgba(16, 185, 129, 0.15)"
              : isOnlineActive
              ? "rgba(6, 182, 212, 0.15)"
              : "rgba(0, 0, 0, 0.3)"
          }`,
          padding: "30px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          transform: `scale(${spStage})`,
          opacity: spStage,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Severance Flash Overlay at F959 */}
        {severanceFlash > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(239, 68, 68, 0.25)",
              zIndex: 30,
              pointerEvents: "none",
            }}
          />
        )}

        {/* ────────────── TOP NODE: CLOUD FLEET SERVER ────────────── */}
        <div
          style={{
            width: "100%",
            borderRadius: 18,
            backgroundColor: isOfflineActive
              ? "rgba(20, 15, 20, 0.85)"
              : isOnlineActive
              ? "rgba(10, 25, 45, 0.95)"
              : "rgba(15, 23, 42, 0.7)",
            border: `1.5px solid ${
              isOfflineActive
                ? "rgba(239, 68, 68, 0.4)"
                : isOnlineActive
                ? INTRO_COLORS.skyBlue
                : "rgba(100, 116, 139, 0.3)"
            }`,
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: isOnlineActive ? `scale(${spOnline})` : "scale(1)",
            opacity: isOfflineActive ? 0.6 : isOnlineActive ? 1 : 0.6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: isOfflineActive
                  ? "rgba(239, 68, 68, 0.15)"
                  : isOnlineActive
                  ? "rgba(6, 182, 212, 0.2)"
                  : "rgba(51, 65, 85, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${
                  isOfflineActive
                    ? "#ef4444"
                    : isOnlineActive
                    ? INTRO_COLORS.skyBlue
                    : "#64748b"
                }`,
              }}
            >
              {isOfflineActive ? (
                <FaTimes size={26} color="#ef4444" />
              ) : (
                <FaCloud
                  size={28}
                  color={isOnlineActive ? INTRO_COLORS.skyBlue : "#94a3b8"}
                />
              )}
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 900,
                  color: isOfflineActive
                    ? "#fca5a5"
                    : isOnlineActive
                    ? "#f8fafc"
                    : "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>CLOUD FLEET BACKEND</span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: isOfflineActive
                      ? "rgba(239, 68, 68, 0.2)"
                      : isOnlineActive
                      ? "rgba(6, 182, 212, 0.2)"
                      : "rgba(100, 116, 139, 0.2)",
                    color: isOfflineActive
                      ? "#f87171"
                      : isOnlineActive
                      ? INTRO_COLORS.cyberCyan
                      : "#94a3b8",
                  }}
                >
                  {isOfflineActive ? "DISCONNECTED" : isOnlineActive ? "PORT: 443 LIVE" : "STANDBY"}
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
                {isOfflineActive
                  ? "Koneksi terputus // Paket jaringan tidak tersedia"
                  : isOnlineActive
                  ? "Sinkronisasi telemetry & registrasi cloud aktif"
                  : "Infrastruktur cloud server terpusat"}
              </div>
            </div>
          </div>

          {/* Right Status Badge */}
          <div
            style={{
              padding: "8px 18px",
              borderRadius: 9999,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              backgroundColor: isOfflineActive
                ? "rgba(239, 68, 68, 0.15)"
                : isOnlineActive
                ? "rgba(16, 185, 129, 0.15)"
                : "rgba(100, 116, 139, 0.15)",
              border: `1px solid ${
                isOfflineActive
                  ? "#ef4444"
                  : isOnlineActive
                  ? INTRO_COLORS.wellnessMint
                  : "#64748b"
              }`,
              color: isOfflineActive
                ? "#fca5a5"
                : isOnlineActive
                ? INTRO_COLORS.wellnessMint
                : "#94a3b8",
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
                backgroundColor: isOfflineActive
                  ? "#ef4444"
                  : isOnlineActive
                  ? "#10b981"
                  : "#64748b",
                boxShadow: isOfflineActive
                  ? "0 0 10px #ef4444"
                  : isOnlineActive
                  ? "0 0 10px #10b981"
                  : "none",
              }}
            />
            <span>
              {isOfflineActive ? "INTERNET LOST" : isOnlineActive ? "ONLINE (24ms)" : "READY"}
            </span>
          </div>
        </div>

        {/* ────────────── CENTER DYNAMIC CONDUIT & SEVERANCE ────────────── */}
        <div
          style={{
            width: "100%",
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Vertical Conduit Lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 4,
              backgroundColor: isOfflineActive
                ? "rgba(239, 68, 68, 0.4)"
                : isOnlineActive
                ? "rgba(56, 189, 248, 0.5)"
                : "rgba(100, 116, 139, 0.25)",
              boxShadow: isOnlineActive && !isOfflineActive
                ? `0 0 15px ${INTRO_COLORS.cyanGlow}`
                : "none",
            }}
          />

          {/* Animated Flowing Packets when Online */}
          {isOnlineActive && !isOfflineActive && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: `${packetProgress1 * 100}%`,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.cyberCyan,
                  boxShadow: `0 0 12px ${INTRO_COLORS.cyberCyan}`,
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: `${(1 - packetProgress2) * 100}%`,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: INTRO_COLORS.wellnessMint,
                  boxShadow: `0 0 10px ${INTRO_COLORS.wellnessMint}`,
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: `${packetProgress3 * 100}%`,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 0 8px #ffffff",
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                }}
              />
            </>
          )}

          {/* Center Severance / State Tag */}
          <div
            style={{
              zIndex: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 900,
              backgroundColor: isOfflineActive
                ? "rgba(40, 10, 15, 0.98)"
                : isOnlineActive
                ? "rgba(10, 30, 50, 0.98)"
                : "rgba(15, 23, 42, 0.95)",
              border: `1.5px solid ${
                isOfflineActive
                  ? "#ef4444"
                  : isOnlineActive
                  ? INTRO_COLORS.skyBlue
                  : "rgba(100, 116, 139, 0.3)"
              }`,
              boxShadow: `0 0 25px ${
                isOfflineActive
                  ? "rgba(239, 68, 68, 0.45)"
                  : isOnlineActive
                  ? INTRO_COLORS.cyanGlow
                  : "transparent"
              }`,
              color: isOfflineActive
                ? "#fecdd3"
                : isOnlineActive
                ? "#e0f2fe"
                : "#94a3b8",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transform: isOfflineActive
                ? `scale(${1 + spOffline * 0.06})`
                : isOnlineActive
                ? `scale(${spOnline})`
                : "scale(1)",
            }}
          >
            {isOfflineActive ? (
              <>
                <FaBolt size={14} color="#ef4444" />
                <span>INTERNET TERPUTUS ➔ SISTEM LOKAL MENGAMBIL ALIH</span>
                <FaBolt size={14} color="#ef4444" />
              </>
            ) : isOnlineActive ? (
              <>
                <FaWifi size={14} color={INTRO_COLORS.skyBlue} />
                <span>TWO-WAY DATA PIPELINE AKTIF</span>
              </>
            ) : (
              <span>JARINGAN DATA & KONTROL</span>
            )}
          </div>
        </div>

        {/* ────────────── BOTTOM NODE: WELLNESS POD (DEBIAN PC) ────────────── */}
        <div
          style={{
            width: "100%",
            borderRadius: 20,
            backgroundColor: isOfflineActive
              ? "rgba(8, 28, 20, 0.96)"
              : "rgba(15, 23, 42, 0.9)",
            border: `2px solid ${
              isOfflineActive
                ? INTRO_COLORS.wellnessMint
                : isOnlineActive
                ? "rgba(56, 189, 248, 0.4)"
                : "rgba(100, 116, 139, 0.3)"
            }`,
            boxShadow: `0 15px 45px rgba(0, 0, 0, 0.8), 0 0 45px rgba(16, 185, 129, ${shieldGlow})`,
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            transform: isOfflineActive ? `scale(${shieldScale})` : "scale(1)",
            position: "relative",
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 14,
                  backgroundColor: isOfflineActive
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(225, 29, 72, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1.5px solid ${
                    isOfflineActive
                      ? INTRO_COLORS.wellnessMint
                      : INTRO_COLORS.debianRed
                  }`,
                  boxShadow: isOfflineActive
                    ? `0 0 20px ${INTRO_COLORS.wellnessGlow}`
                    : `0 0 15px ${INTRO_COLORS.debianGlow}`,
                }}
              >
                <SiDebian
                  size={32}
                  color={
                    isOfflineActive
                      ? INTRO_COLORS.wellnessMint
                      : INTRO_COLORS.debianRed
                  }
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: 0.5,
                  }}
                >
                  DEBIAN PC (INSIDE POD CAPSULE)
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: isOfflineActive ? "#6ee7b7" : "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  {isOfflineActive
                    ? "OTONOM PENUH: Menjalankan semua proses tanpa internet"
                    : "Pusat kendali operasional kapsul wellness"}
                </div>
              </div>
            </div>

            {/* Offline Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                borderRadius: 9999,
                backgroundColor: isOfflineActive
                  ? "rgba(16, 185, 129, 0.25)"
                  : "rgba(100, 116, 139, 0.15)",
                border: `1.5px solid ${
                  isOfflineActive ? INTRO_COLORS.wellnessMint : "#64748b"
                }`,
                boxShadow: isOfflineActive
                  ? `0 0 20px ${INTRO_COLORS.wellnessGlow}`
                  : "none",
              }}
            >
              <FaShieldAlt
                size={14}
                color={isOfflineActive ? INTRO_COLORS.wellnessMint : "#94a3b8"}
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 14,
                  fontWeight: 900,
                  color: isOfflineActive ? "#d1fae5" : "#94a3b8",
                  letterSpacing: 0.8,
                }}
              >
                {isOfflineActive ? "ZERO DOWNTIME [100%]" : "EDGE READY"}
              </span>
            </div>
          </div>

          {/* 3 Pillars of Edge Autonomy */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
              fontFamily: FONT_MONO,
            }}
          >
            {/* Pillar 1: Session Continuity */}
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                backgroundColor: isOfflineActive
                  ? "rgba(10, 40, 25, 0.9)"
                  : "rgba(15, 23, 42, 0.7)",
                border: `1px solid ${
                  isOfflineActive
                    ? INTRO_COLORS.wellnessGreen
                    : "rgba(100, 116, 139, 0.25)"
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                transform: isOfflineActive ? `scale(${spOffline})` : "scale(1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 800,
                  color: isOfflineActive ? "#a7f3d0" : "#cbd5e1",
                }}
              >
                <FaCheckCircle
                  size={15}
                  color={
                    isOfflineActive
                      ? INTRO_COLORS.wellnessMint
                      : "#64748b"
                  }
                />
                <span>Sesi Berjalan</span>
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Tidak pernah freeze saat user sedang terapi
              </div>
            </div>

            {/* Pillar 2: Local PostgreSQL Storage */}
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                backgroundColor: isOfflineActive
                  ? "rgba(10, 40, 25, 0.9)"
                  : "rgba(15, 23, 42, 0.7)",
                border: `1px solid ${
                  isOfflineActive
                    ? INTRO_COLORS.wellnessGreen
                    : "rgba(100, 116, 139, 0.25)"
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                transform: isOfflineActive ? `scale(${spOffline})` : "scale(1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 800,
                  color: isOfflineActive ? "#a7f3d0" : "#cbd5e1",
                }}
              >
                <SiPostgresql
                  size={15}
                  color={
                    isOfflineActive
                      ? INTRO_COLORS.wellnessMint
                      : "#64748b"
                  }
                />
                <span>Local Cache</span>
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Postgres lokal menyimpan log & aktivitas
              </div>
            </div>

            {/* Pillar 3: Hardware Control */}
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                backgroundColor: isOfflineActive
                  ? "rgba(10, 40, 25, 0.9)"
                  : "rgba(15, 23, 42, 0.7)",
                border: `1px solid ${
                  isOfflineActive
                    ? INTRO_COLORS.wellnessGreen
                    : "rgba(100, 116, 139, 0.25)"
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                transform: isOfflineActive ? `scale(${spOffline})` : "scale(1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 800,
                  color: isOfflineActive ? "#a7f3d0" : "#cbd5e1",
                }}
              >
                <FaMicrochip
                  size={15}
                  color={
                    isOfflineActive
                      ? INTRO_COLORS.wellnessMint
                      : "#64748b"
                  }
                />
                <span>Hardware 100%</span>
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Audio, strobe, dan sensor tetap responsif
              </div>
            </div>
          </div>
        </div>

        {/* ────────────── BOTTOM GUARANTEE SUMMARY BANNER ────────────── */}
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
              {isOfflineActive
                ? "Resiliensi Berhasil: Layanan Berjalan Tanpa Ketergantungan Cloud"
                : isOnlineActive
                ? "Arsitektur Hibrida: Mode Online & Offline Siap Sinkronisasi"
                : "Target Utama: Sistem Bebas Freeze Dalam Segala Kondisi"}
            </span>
          </div>
          <span
            style={{
              color: isOfflineActive
                ? INTRO_COLORS.wellnessMint
                : isOnlineActive
                ? INTRO_COLORS.skyBlue
                : INTRO_COLORS.sensorAmber,
              fontWeight: 800,
            }}
          >
            {isOfflineActive
              ? "[AUTONOMOUS OK]"
              : isOnlineActive
              ? "[SYNC READY]"
              : "[DESIGN MANDATE]"}
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
