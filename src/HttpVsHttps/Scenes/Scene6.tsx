import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBan,
  FaCheckCircle,
  FaGlobe,
  FaServer,
  FaShieldAlt,
  FaUserSecret,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 6: Frames 604 - 774, Duration = 170 frames / ~5.67s)
  //
  // Naskah Lines 13-14:
  // Line 13 (Voiceover: 20.29s - 20.91s / localFrame 5 - 23):
  // "Jadi,"
  //
  // Line 14 (Voiceover: 21.01s - 25.15s / localFrame 23 - 150):
  // "pihak lain tidak bisa dengan mudah membaca atau memodifikasi data selama proses pengiriman."
  //
  // 💥 REVAMPED UPRIGHT & SYMMETRICAL MOTION:
  // - Upright 0deg tilt: Flat, clean, symmetrical modern frosted glass cards
  // - Generous gap (48px) between headline text and illustration stage
  // - Dynamic MITM attack deflection & integrity shield
  // - DEAD CENTER (X = 540px, Y = 960px)
  // - ZERO text outside script
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 6 (0 to 170)
  const localFrame = Math.max(0, frame - 604);

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [162, 170], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 10, 162, 170], [0.94, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Top Emblem Spring
  const spTopBadge = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  // ─── HEADLINE SPRINGS ───
  // Line 13: "Jadi," (~localFrame 5 - 24)
  const spJadi = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 220 },
  });

  // Line 14 Part 1: "pihak lain tidak bisa" (~localFrame 24 - 55)
  const p1Frame = Math.max(0, localFrame - 24);
  const spPihakLain = spring({
    frame: p1Frame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 180 },
  });

  // Line 14 Part 2: "dengan mudah membaca" (~localFrame 50 - 80)
  const p2Frame = Math.max(0, localFrame - 48);
  const spMembaca = spring({
    frame: p2Frame,
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 190 },
  });

  // Line 14 Part 3: "atau memodifikasi data" (~localFrame 82 - 118)
  const p3Frame = Math.max(0, localFrame - 80);
  const spMemodifikasi = spring({
    frame: p3Frame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 180 },
  });

  // Line 14 Part 4: "selama proses pengiriman." (~localFrame 114 - 150)
  const p4Frame = Math.max(0, localFrame - 112);
  const spPengiriman = spring({
    frame: p4Frame,
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // Headline phase transition (0: membaca / read probe, 1: memodifikasi / tamper probe)
  const headlinePhase = interpolate(localFrame, [76, 92], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // ─── STAGE INTERCEPTION DYNAMICS ───
  // Probe 1: Unauthorized Read Intercept (Eavesdrop Probe)
  const probeReadY = interpolate(localFrame, [35, 62, 75], [0, 105, 45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  const shieldDeflectAlpha = interpolate(localFrame, [58, 64, 82], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Symmetrical Organic Floating (±3px, upright 0deg)
  const floatStageY = Math.sin((localFrame * Math.PI) / 28) * 3;
  const pulseAlert = Math.sin(localFrame * 0.3) * 0.5 + 0.5;

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(-30px)`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY & HORIZONTALLY CENTERED WRAPPER (DEAD CENTER)
          Canvas: 1080 x 1920
          Wrapper: Width 940 (70px margins on left and right)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 940,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          boxSizing: "border-box",
        }}
      >
        {/* ─── 1. TOP MINIMALIST DEFLECTION BADGE (No Outside Text) ─── */}
        <div
          style={{
            transform: `scale(${interpolate(spTopBadge, [0, 1], [0.85, 1])}) translateY(${interpolate(spTopBadge, [0, 1], [-18, 0])}px)`,
            opacity: interpolate(spTopBadge, [0, 1], [0, 1]),
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "10px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1.5px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Hacker / Man-in-the-middle Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: HTTP_HTTPS_COLORS.dangerRose,
            }}
          >
            <FaUserSecret size={14} />
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

          <FaBan size={13} color={HTTP_HTTPS_COLORS.textSecondary} />

          {/* HTTPS Tamper Shield Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: HTTP_HTTPS_COLORS.httpsMint,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
              }}
            />
            <FaShieldAlt size={14} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINES 13-14) ─── */}
        <div
          style={{
            width: "100%",
            height: 146,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* ════ SECTION A: "Jadi, pihak lain tidak bisa dengan mudah membaca" ════ */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: interpolate(headlinePhase, [0, 0.7], [1, 0]),
              transform: `translateY(${interpolate(headlinePhase, [0, 1], [0, -18])}px)`,
              pointerEvents: headlinePhase > 0.5 ? "none" : "auto",
            }}
          >
            {/* Top Row: "Jadi," badge + "pihak lain tidak bisa" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
              }}
            >
              {/* "Jadi," Badge */}
              <div
                style={{
                  opacity: interpolate(spJadi, [0, 1], [0, 1]),
                  transform: `scale(${interpolate(spJadi, [0, 1], [0.85, 1])})`,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "2px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(251, 191, 36, 0.16)",
                  border: "1.5px solid rgba(251, 191, 36, 0.45)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 34,
                    fontWeight: 900,
                    color: HTTP_HTTPS_COLORS.httpAmber,
                    letterSpacing: 0.5,
                  }}
                >
                  Jadi,
                </span>
              </div>

              {/* "pihak lain tidak bisa" */}
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#f8fafc",
                  letterSpacing: -0.2,
                  opacity: interpolate(spPihakLain, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(spPihakLain, [0, 1], [14, 0])}px)`,
                  display: "inline-block",
                  textShadow: "0 2px 14px rgba(0,0,0,0.5)",
                }}
              >
                pihak lain tidak bisa
              </span>
            </div>

            {/* Bottom Row: "dengan mudah membaca" */}
            <div
              style={{
                opacity: interpolate(spMembaca, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spMembaca, [0, 1], [1.12, 1])}) translateY(${interpolate(spMembaca, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 56,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.dangerRose} 0%, #fda4af 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(251, 113, 133, 0.5))",
                }}
              >
                dengan mudah membaca
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spMembaca, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.dangerRose} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.dangerRose}`,
                  marginTop: 4,
                }}
              />
            </div>
          </div>

          {/* ════ SECTION B: "atau memodifikasi data selama proses pengiriman." ════ */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: interpolate(headlinePhase, [0.3, 1], [0, 1]),
              transform: `translateY(${interpolate(headlinePhase, [0, 1], [18, 0])}px)`,
              pointerEvents: headlinePhase <= 0.5 ? "none" : "auto",
            }}
          >
            {/* Top Row: "atau memodifikasi data" */}
            <div
              style={{
                opacity: interpolate(spMemodifikasi, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spMemodifikasi, [0, 1], [1.14, 1])}) translateY(${interpolate(spMemodifikasi, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(251, 191, 36, 0.18)",
                border: "1.5px solid rgba(251, 191, 36, 0.45)",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 48,
                  fontWeight: 900,
                  color: HTTP_HTTPS_COLORS.httpAmber,
                  letterSpacing: -0.2,
                }}
              >
                atau memodifikasi data
              </span>
            </div>

            {/* Bottom Row: "selama proses pengiriman." */}
            <div
              style={{
                opacity: interpolate(spPengiriman, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPengiriman, [0, 1], [1.12, 1])}) translateY(${interpolate(spPengiriman, [0, 1], [12, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 54,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 26px rgba(16, 185, 129, 0.55))",
                }}
              >
                selama proses pengiriman.
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spPengiriman, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: 4,
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── 3. DYNAMIC INTERCEPTION DEFLECTION STAGE: UPRIGHT 0deg (GENEROUS GAP: marginTop 48px) ─── */}
        <div
          style={{
            width: 940,
            height: 430,
            borderRadius: 28,
            padding: "26px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            transform: `translateY(${floatStageY}px)`,
            marginTop: 48, // GENEROUS GAP TO HEADLINE TEXT
          }}
        >
          {/* ════ UPPER LEVEL: UNAUTHORIZED INTERCEPTOR / ATTACKER NODE (TOP) ════ */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                padding: "10px 24px",
                borderRadius: 20,
                backgroundColor: "rgba(251, 113, 133, 0.16)",
                border: `1.5px solid rgba(251, 113, 133, ${0.4 + pulseAlert * 0.4})`,
                boxShadow: `0 0 25px rgba(251, 113, 133, ${0.3 * pulseAlert})`,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: "rgba(251, 113, 133, 0.25)",
                  border: "1px solid rgba(251, 113, 133, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: HTTP_HTTPS_COLORS.dangerRose,
                  fontSize: 18,
                }}
              >
                <FaUserSecret />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        i === 0 ? HTTP_HTTPS_COLORS.dangerRose : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i === 0 ? `0 0 8px ${HTTP_HTTPS_COLORS.dangerRose}` : "none",
                    }}
                  />
                ))}
              </div>
              <FaBan size={16} color={HTTP_HTTPS_COLORS.dangerRose} />
            </div>

            {/* Interception attack probe laser targeting the pipeline */}
            <div
              style={{
                position: "absolute",
                top: 50,
                width: 3,
                height: probeReadY,
                background:
                  "linear-gradient(180deg, rgba(251, 113, 133, 0.9) 0%, rgba(251, 113, 133, 0.2) 100%)",
                boxShadow: "0 0 10px rgba(251, 113, 133, 0.8)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* ════ MIDDLE LEVEL: SECURE TLS PIPELINE WITH INTEGRITY DEFLECTION SHIELD ════ */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 40px",
              boxSizing: "border-box",
            }}
          >
            {/* Left Node: Client / Browser */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                backgroundColor: "rgba(56, 189, 248, 0.18)",
                border: "2px solid rgba(56, 189, 248, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: HTTP_HTTPS_COLORS.httpsCyan,
                fontSize: 26,
                boxShadow: "0 0 24px rgba(56, 189, 248, 0.4)",
              }}
            >
              <FaGlobe />
            </div>

            {/* Encrypted Data Conduit Line */}
            <div
              style={{
                flex: 1,
                height: 4,
                margin: "0 20px",
                background:
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.6) 0%, rgba(16, 185, 129, 0.9) 50%, rgba(56, 189, 248, 0.6) 100%)",
                position: "relative",
                borderRadius: 2,
              }}
            >
              {/* Central Tamper-Proof Integrity Shield */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 80,
                  height: 80,
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.22)",
                  border: `2px solid ${
                    shieldDeflectAlpha > 0.3
                      ? "#ffffff"
                      : HTTP_HTTPS_COLORS.httpsGreen
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: HTTP_HTTPS_COLORS.httpsMint,
                  fontSize: 34,
                  boxShadow:
                    shieldDeflectAlpha > 0.3
                      ? `0 0 35px ${HTTP_HTTPS_COLORS.httpsGreen}, 0 0 50px rgba(16, 185, 129, 0.8)`
                      : "0 0 24px rgba(16, 185, 129, 0.4)",
                }}
              >
                <FaShieldAlt />
              </div>

              {/* Deflection Shockwave Ring when Attack is Deflected */}
              {shieldDeflectAlpha > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    border: "2px solid #34d399",
                    opacity: shieldDeflectAlpha,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>

            {/* Right Node: Secure Server */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                backgroundColor: "rgba(16, 185, 129, 0.18)",
                border: "2px solid rgba(16, 185, 129, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: HTTP_HTTPS_COLORS.httpsMint,
                fontSize: 26,
                boxShadow: "0 0 24px rgba(16, 185, 129, 0.4)",
              }}
            >
              <FaServer />
            </div>
          </div>

          {/* ════ LOWER LEVEL: INTEGRITY STATUS & SECURITY METRICS (BOTTOM) ════ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 10,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* Status Beacons */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                }}
              />
            </div>

            {/* Integrity Matrix Bars */}
            <div style={{ display: "flex", gap: 8 }}>
              {[60, 90, 75, 50].map((w, idx) => (
                <div
                  key={idx}
                  style={{
                    width: w,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                  }}
                />
              ))}
            </div>

            {/* Authenticity Verification Badge */}
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: `1px solid ${HTTP_HTTPS_COLORS.httpsGreen}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: HTTP_HTTPS_COLORS.httpsGreen,
              }}
            >
              <FaCheckCircle size={13} />
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
