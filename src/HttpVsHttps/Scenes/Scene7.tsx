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
  FaCheck,
  FaExclamationTriangle,
  FaFish,
  FaGlobe,
  FaLaptop,
  FaLock,
  FaShieldAlt,
  FaSkull,
  FaUser,
} from "react-icons/fa";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & SPATIAL STATIONS (Frames 774 - 990, Duration = 216 frames)
  //
  // 🎬 SPATIAL WORLD CANVAS (Infinite Camera Rig Transition):
  // - Station 7A (X = 0): "Tapi kalau dari sisi orang yang mengaksesnya, "
  // - Camera Lateral Slide (X: 0 -> 1400px): Frames 880 - 905
  // - Station 7B (X = 1400): "belum tentu, link pishing atau scam juga ada yang menggunakan https."
  //
  // ✨ STRICTLY ZERO OUTSIDE TEXT
  // ✨ DEAD CENTER & SYMMETRICAL (Width: 960px, Symmetrical Padding, Upright 0deg)
  // ✨ NO MENUMPUL / NO CLUTTER: Clean, crisp, architectural glassmorphism
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 7
  const localFrame = Math.max(0, frame - 774);

  // Global Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const sceneExit = interpolate(localFrame, [206, 216], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;

  // ═══════════════════════════════════════════════════════════════════════════
  // 📍 STATION 7A SPRINGS & TIMINGS (Line 16: Frames 774 - 880)
  // ═══════════════════════════════════════════════════════════════════════════
  const spBadge7A = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  const spTapiKalau = spring({
    frame: localFrame,
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 200 },
  });

  const spOrangMengaksesnya = spring({
    frame: Math.max(0, localFrame - 16),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 170 },
  });

  const spStage7A = spring({
    frame: Math.max(0, localFrame - 20),
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 📍 STATION 7B SPRINGS & TIMINGS (Line 17: Frames 886 - 990)
  // ═══════════════════════════════════════════════════════════════════════════
  const p2LocalFrame = Math.max(0, localFrame - 110);

  // "belum tentu," (Explosive Shockwave Stamp)
  const spBelumTentu = spring({
    frame: p2LocalFrame,
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 250 },
  });

  // "link pishing atau scam"
  const spPishingScam = spring({
    frame: Math.max(0, p2LocalFrame - 16),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // "juga ada yang menggunakan https."
  const spMenggunakanHttps = spring({
    frame: Math.max(0, p2LocalFrame - 36),
    fps,
    config: { damping: 11, mass: 0.8, stiffness: 180 },
  });

  const spStage7B = spring({
    frame: Math.max(0, p2LocalFrame - 8),
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  // Expanding shockwave ring on "belum tentu,"
  const shockwaveProg = interpolate(p2LocalFrame, [0, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const shockwaveScale = interpolate(shockwaveProg, [0, 1], [0.7, 2.5]);
  const shockwaveOpacity = interpolate(shockwaveProg, [0, 0.25, 1], [0, 0.9, 0]);

  // Strobe Alarm Flash in Station 7B
  const strobePulse =
    p2LocalFrame > 0 ? Math.sin(p2LocalFrame * 0.45) * 0.5 + 0.5 : 0;
  const pulseCycle = Math.sin(localFrame * 0.28) * 0.5 + 0.5;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 3000, // Multi-station world space canvas
        height: 1920,
        opacity: sceneOpacity,
        pointerEvents: "none",
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────
          CONNECTING FIBER-OPTIC DATA BUS BRIDGE (BETWEEN 7A & 7B)
         ───────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 960,
          left: 1020,
          width: 440,
          height: 3,
          background:
            "linear-gradient(90deg, rgba(56, 189, 248, 0.45) 0%, rgba(251, 113, 133, 0.5) 100%)",
          boxShadow: "0 0 14px rgba(56, 189, 248, 0.5)",
          transform: "translateY(-50%)",
          opacity: 0.7,
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════
          STATION 7A (X = 0)
          Line 16: "Tapi kalau dari sisi orang yang mengaksesnya,"
          Upright, dead-center, symmetrical layout
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            boxSizing: "border-box",
          }}
        >
          {/* 1. TOP MINIMALIST EMBLEM BADGE */}
          <div
            style={{
              opacity: interpolate(spBadge7A, [0, 1], [0, 1]),
              transform: `scale(${interpolate(spBadge7A, [0, 1], [0.85, 1])}) translateY(${interpolate(spBadge7A, [0, 1], [-16, 0])}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 26px",
              borderRadius: 9999,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(56, 189, 248, 0.4)",
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(56, 189, 248, ${0.2 + pulseCycle * 0.2})`,
            }}
          >
            <FaUser size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
            <div
              style={{
                width: 1,
                height: 14,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <FaGlobe size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
            <div
              style={{
                width: 1,
                height: 14,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <FaLock size={14} color={HTTP_HTTPS_COLORS.httpsGreen} />
          </div>

          {/* 2. SPOKEN KINETIC HEADLINE (Line 16 strictly) */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              minHeight: 150,
            }}
          >
            {/* Row 1: "Tapi kalau" */}
            <div
              style={{
                opacity: interpolate(spTapiKalau, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spTapiKalau, [0, 1], [1.2, 1])}) translateY(${interpolate(spTapiKalau, [0, 1], [16, 0])}px)`,
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 24px",
                borderRadius: 16,
                backgroundColor: "rgba(251, 113, 133, 0.16)",
                border: "1.5px solid rgba(251, 113, 133, 0.45)",
                boxShadow: "0 0 20px rgba(251, 113, 133, 0.25)",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 46,
                  fontWeight: 900,
                  color: HTTP_HTTPS_COLORS.dangerRose,
                  letterSpacing: -0.2,
                }}
              >
                Tapi kalau
              </span>
            </div>

            {/* Row 2: "dari sisi orang yang mengaksesnya," */}
            <div
              style={{
                opacity: interpolate(spOrangMengaksesnya, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spOrangMengaksesnya, [0, 1], [1.1, 1])}) translateY(${interpolate(spOrangMengaksesnya, [0, 1], [16, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 54,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, #bae6fd 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 28px rgba(56, 189, 248, 0.55))",
                  textAlign: "center",
                }}
              >
                dari sisi orang yang mengaksesnya,
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spOrangMengaksesnya, [0, 1], [0, 100])}%`,
                  height: 4,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsCyan} 50%, transparent 100%)`,
                  boxShadow: `0 0 16px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>

          {/* 3. SYMMETRICAL CLIENT VIEW STAGE (Width: 960px, Height: 460px) */}
          <div
            style={{
              width: 960,
              height: 460,
              borderRadius: 28,
              padding: "26px 32px",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              border: "1.5px solid rgba(255, 255, 255, 0.18)",
              boxShadow:
                "0 25px 60px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(32px) saturate(190%)",
              WebkitBackdropFilter: "blur(32px) saturate(190%)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              opacity: interpolate(spStage7A, [0, 1], [0, 1]),
              transform: `scale(${interpolate(spStage7A, [0, 1], [0.95, 1])})`,
            }}
          >
            {/* Upper Browser Controls & Authentic HTTPS URL Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Traffic Lights */}
              <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#fb7185" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#34d399" }} />
              </div>

              {/* The Genuine Verified URL Bar */}
              <div
                style={{
                  flex: 1,
                  maxWidth: 640,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 18px",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      backgroundColor: "rgba(16, 185, 129, 0.25)",
                      border: "1px solid rgba(16, 185, 129, 0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: HTTP_HTTPS_COLORS.httpsGreen,
                      boxShadow: "0 0 12px rgba(16, 185, 129, 0.45)",
                    }}
                  >
                    <FaLock size={13} />
                  </div>
                  {/* Clean path bar */}
                  <div
                    style={{
                      width: 160,
                      height: 7,
                      borderRadius: 3.5,
                      backgroundColor: "rgba(56, 189, 248, 0.45)",
                    }}
                  />
                </div>
                <FaCheck size={14} color={HTTP_HTTPS_COLORS.httpsGreen} />
              </div>

              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                }}
              />
            </div>

            {/* Symmetrical Center Body: User Hub <---> Encrypted Tunnel <---> Server Endpoint */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1fr",
                gap: 24,
                alignItems: "center",
                padding: "20px 0",
                boxSizing: "border-box",
              }}
            >
              {/* Left Column: User Terminal Hub */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                  border: "1.5px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaUser size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                </div>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 22,
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    border: "1.5px solid rgba(56, 189, 248, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
                  }}
                >
                  <FaLaptop />
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {[12, 18, 24, 16].map((h, i) => (
                    <div key={i} style={{ width: 6, height: h, borderRadius: 3, backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                  ))}
                </div>
              </div>

              {/* Center Column: Encrypted Transmission Tunnel */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 22,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaShieldAlt size={15} color={HTTP_HTTPS_COLORS.httpsGreen} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsGreen }} />
                </div>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 26,
                    backgroundColor: "rgba(16, 185, 129, 0.22)",
                    border: "2px solid rgba(16, 185, 129, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 40,
                    color: HTTP_HTTPS_COLORS.httpsGreen,
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <FaLock />
                </div>
                <div
                  style={{
                    width: "80%",
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: HTTP_HTTPS_COLORS.httpsGreen,
                    boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsGreen}`,
                  }}
                />
              </div>

              {/* Right Column: Web Server Destination Endpoint */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1.5px solid rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaGlobe size={15} color={HTTP_HTTPS_COLORS.httpsMint} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsMint }} />
                </div>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 22,
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
                  }}
                >
                  <FaGlobe />
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {[12, 18, 24, 16].map((h, i) => (
                    <div key={i} style={{ width: 6, height: h, borderRadius: 3, backgroundColor: HTTP_HTTPS_COLORS.httpsMint }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Symmetrical Lower Status Bar */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 12,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaLock size={13} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <div
                  style={{
                    width: 90,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(16, 185, 129, 0.45)",
                  }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                <FaGlobe size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 90,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(56, 189, 248, 0.45)",
                  }}
                />
                <FaShieldAlt size={14} color={HTTP_HTTPS_COLORS.httpsGreen} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          STATION 7B (X = 1400)
          Line 17: "belum tentu, link pishing atau scam juga ada yang menggunakan https."
          Upright, dead-center, symmetrical layout
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 1400,
          width: 1080,
          height: 1920,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            boxSizing: "border-box",
          }}
        >
          {/* 1. TOP EXPLOSIVE SHOCKWAVE STAMP BADGE: "belum tentu," */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {shockwaveOpacity > 0 && (
              <div
                style={{
                  position: "absolute",
                  width: 200,
                  height: 60,
                  borderRadius: 20,
                  border: `2px solid ${HTTP_HTTPS_COLORS.dangerRose}`,
                  transform: `scale(${shockwaveScale})`,
                  opacity: shockwaveOpacity,
                  pointerEvents: "none",
                }}
              />
            )}
            <div
              style={{
                opacity: interpolate(spBelumTentu, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spBelumTentu, [0, 1], [1.35, 1])})`,
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 28px",
                borderRadius: 18,
                backgroundColor: "rgba(251, 113, 133, 0.22)",
                border: `1.5px solid rgba(251, 113, 133, ${0.55 + strobePulse * 0.4})`,
                boxShadow: "0 10px 30px rgba(251, 113, 133, 0.45)",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 52,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.dangerRose} 0%, #fda4af 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(251, 113, 133, 0.65))",
                }}
              >
                belum tentu,
              </span>
            </div>
          </div>

          {/* 2. SPOKEN KINETIC HEADLINE (Line 17 strictly) */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              minHeight: 150,
            }}
          >
            {/* Row 1: "link pishing atau scam" */}
            <div
              style={{
                opacity: interpolate(spPishingScam, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPishingScam, [0, 1], [1.12, 1])}) translateY(${interpolate(spPishingScam, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <FaSkull size={24} color={HTTP_HTTPS_COLORS.dangerRose} />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 52,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  textShadow: "0 0 26px rgba(251, 113, 133, 0.75)",
                }}
              >
                link pishing atau scam
              </span>
              <FaExclamationTriangle size={24} color={HTTP_HTTPS_COLORS.httpAmber} />
            </div>

            {/* Row 2: "juga ada yang menggunakan https." */}
            <div
              style={{
                opacity: interpolate(spMenggunakanHttps, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spMenggunakanHttps, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 44,
                  fontWeight: 700,
                  color: HTTP_HTTPS_COLORS.textSecondary,
                  letterSpacing: -0.2,
                }}
              >
                juga ada yang menggunakan
              </span>

              {/* The HTTPS Paradox Lock Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "3px 18px",
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1.5px solid rgba(16, 185, 129, 0.6)",
                  boxShadow: "0 0 18px rgba(16, 185, 129, 0.45)",
                }}
              >
                <FaLock size={15} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 44,
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  https.
                </span>
              </div>
            </div>
          </div>

          {/* 3. SYMMETRICAL PHISHING PARADOX STAGE (Width: 960px, Height: 460px) */}
          <div
            style={{
              width: 960,
              height: 460,
              borderRadius: 28,
              padding: "26px 32px",
              backgroundColor: `rgba(251, 113, 133, ${0.07 + strobePulse * 0.04})`,
              border: `1.5px solid rgba(251, 113, 133, ${0.45 + strobePulse * 0.35})`,
              boxShadow: `0 25px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(251, 113, 133, ${0.25 + strobePulse * 0.25}), inset 0 1px 2px rgba(255, 255, 255, 0.25)`,
              backdropFilter: "blur(32px) saturate(190%)",
              WebkitBackdropFilter: "blur(32px) saturate(190%)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              opacity: interpolate(spStage7B, [0, 1], [0, 1]),
              transform: `scale(${interpolate(spStage7B, [0, 1], [0.95, 1])})`,
            }}
          >
            {/* Upper Browser Controls & The Fake Site Paradox URL Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(251, 113, 133, 0.25)",
              }}
            >
              {/* Traffic Lights */}
              <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#fb7185",
                    boxShadow: "0 0 10px #fb7185",
                  }}
                />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#34d399" }} />
              </div>

              {/* The Deceptive Mockup URL Bar (Green lock on scam!) */}
              <div
                style={{
                  flex: 1,
                  maxWidth: 640,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: "rgba(251, 113, 133, 0.14)",
                  border: `1.5px solid rgba(251, 113, 133, ${0.55 + strobePulse * 0.4})`,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 18px",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  boxShadow: "0 0 20px rgba(251, 113, 133, 0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      backgroundColor: "rgba(16, 185, 129, 0.25)",
                      border: "1px solid rgba(16, 185, 129, 0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: HTTP_HTTPS_COLORS.httpsGreen,
                      boxShadow: "0 0 12px rgba(16, 185, 129, 0.45)",
                    }}
                  >
                    <FaLock size={13} />
                  </div>
                  {/* Fake scam path bar */}
                  <div
                    style={{
                      width: 160,
                      height: 7,
                      borderRadius: 3.5,
                      backgroundColor: "rgba(251, 113, 133, 0.65)",
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaExclamationTriangle size={15} color={HTTP_HTTPS_COLORS.dangerRose} />
                  <FaSkull size={14} color={HTTP_HTTPS_COLORS.dangerRose} />
                </div>
              </div>

              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.dangerRose}`,
                }}
              />
            </div>

            {/* Symmetrical Center Body: Victim Hub <---> Phishing Bait Hook <---> Scam Server */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1fr",
                gap: 24,
                alignItems: "center",
                padding: "20px 0",
                boxSizing: "border-box",
              }}
            >
              {/* Left Column: Victim User Hub */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                  border: "1.5px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaUser size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                </div>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 22,
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    border: "1.5px solid rgba(56, 189, 248, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
                  }}
                >
                  <FaLaptop />
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {[12, 18, 24, 16].map((h, i) => (
                    <div key={i} style={{ width: 6, height: h, borderRadius: 3, backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                  ))}
                </div>
              </div>

              {/* Center Column: The Phishing Bait Trap Hub */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 22,
                  backgroundColor: "rgba(251, 113, 133, 0.16)",
                  border: `1.5px solid rgba(251, 113, 133, ${0.65 + strobePulse * 0.35})`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                  boxShadow: "0 0 32px rgba(251, 113, 133, 0.38)",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaExclamationTriangle size={15} color={HTTP_HTTPS_COLORS.dangerRose} />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
                      boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.dangerRose}`,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 26,
                    backgroundColor: "rgba(251, 113, 133, 0.25)",
                    border: "2px solid rgba(251, 113, 133, 0.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 42,
                    color: HTTP_HTTPS_COLORS.dangerRose,
                    boxShadow: "0 0 38px rgba(251, 113, 133, 0.65)",
                    transform: `scale(${1 + strobePulse * 0.1})`,
                  }}
                >
                  <FaFish />
                </div>
                <div
                  style={{
                    width: "80%",
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
                    boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.dangerRose}`,
                  }}
                />
              </div>

              {/* Right Column: The Malicious Scam Server */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(251, 113, 133, 0.08)",
                  border: "1.5px solid rgba(251, 113, 133, 0.45)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaBug size={15} color={HTTP_HTTPS_COLORS.dangerRose} />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 22,
                    backgroundColor: "rgba(251, 113, 133, 0.2)",
                    border: "1.5px solid rgba(251, 113, 133, 0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: HTTP_HTTPS_COLORS.dangerRose,
                    boxShadow: "0 0 28px rgba(251, 113, 133, 0.45)",
                  }}
                >
                  <FaSkull />
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {[12, 18, 24, 16].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: h,
                        borderRadius: 3,
                        backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Symmetrical Lower Status Bar */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 12,
                borderTop: "1px solid rgba(251, 113, 133, 0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaLock size={13} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <div
                  style={{
                    width: 90,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(16, 185, 129, 0.45)",
                  }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.dangerRose }} />
                <FaExclamationTriangle size={15} color={HTTP_HTTPS_COLORS.dangerRose} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.dangerRose }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 90,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(251, 113, 133, 0.45)",
                  }}
                />
                <FaBug size={14} color={HTTP_HTTPS_COLORS.dangerRose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
