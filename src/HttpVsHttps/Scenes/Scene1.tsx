import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheck,
  FaExchangeAlt,
  FaEye,
  FaGlobe,
  FaLock,
  FaQuestion,
  FaShieldAlt,
  FaUnlock,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 1: Frames 0 - 86, Voiceover: 0.15s - 2.36s)
  // "Katanya https lebih aman dari http.?"
  //
  // 💥 REVAMPED UPRIGHT & SYMMETRICAL MOTION:
  // - Upright 0deg tilt: Flat, clean, symmetrical modern frosted glass cards
  // - Generous gap (56px) between headline text and illustration stage
  // - Word-by-word kinetic springs with glowing underline beams
  // - STRICTLY PAS DI TENGAH (X = 540px, Y = 960px)
  // - ZERO text outside script
  // ─────────────────────────────────────────────────────────────────────────────

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(frame, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(frame, [80, 86], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(frame, [0, 8, 80, 86], [0.94, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 1. Kinetic Typography Springs
  const spBadge = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  const spKatanya = spring({
    frame: Math.max(0, frame - 3),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 160 },
  });

  // "https" high-energy zoom slam (~F18 - F26)
  const spHttps = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 210 },
  });

  // "lebih aman dari" horizontal tracking expand (~F32)
  const spLebihAman = spring({
    frame: Math.max(0, frame - 32),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 150 },
  });

  // "http.?" caution slam (~F48)
  const spHttp = spring({
    frame: Math.max(0, frame - 48),
    fps,
    config: { damping: 10, mass: 0.75, stiffness: 200 },
  });

  // Card Springs
  const spCardHttps = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 160 },
  });

  const spCardHttp = spring({
    frame: Math.max(0, frame - 46),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 180 },
  });

  // Amber Jitter on "http.?" entrance
  const amberJitter =
    frame >= 48 && frame <= 62 ? Math.sin((frame - 48) * 1.5) * 4 : 0;

  // Symmetrical Organic Floating (±3px)
  const floatLeftY = Math.sin((frame * Math.PI) / 28) * 3;
  const floatRightY = Math.cos((frame * Math.PI) / 28) * 3;

  const pulseCycle = Math.sin(frame * 0.28) * 0.5 + 0.5;

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
        {/* ─── 1. TOP MINIMALIST PERSPECTIVE BADGE (No Outside Text) ─── */}
        <div
          style={{
            transform: `scale(${interpolate(spBadge, [0, 1], [0.85, 1])}) translateY(${interpolate(spBadge, [0, 1], [-18, 0])}px)`,
            opacity: interpolate(spBadge, [0, 1], [0, 1]),
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
          {/* HTTP Status Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: HTTP_HTTPS_COLORS.httpAmber,
            }}
          >
            <FaUnlock size={13} />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: HTTP_HTTPS_COLORS.httpAmber,
                boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpAmber}`,
              }}
            />
          </div>

          <FaExchangeAlt size={12} color={HTTP_HTTPS_COLORS.textSecondary} />

          {/* HTTPS Status Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: HTTP_HTTPS_COLORS.httpsGreen,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: HTTP_HTTPS_COLORS.httpsGreen,
                boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsGreen}`,
              }}
            />
            <FaLock size={13} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINE 1) ─── */}
        <div
          style={{
            width: "100%",
            height: 146,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            position: "relative",
          }}
        >
          {/* Row 1: "Katanya" */}
          <span
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: HTTP_HTTPS_COLORS.textSecondary,
              fontFamily: FONT_DISPLAY,
              letterSpacing: 0.5,
              opacity: interpolate(spKatanya, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(spKatanya, [0, 1], [14, 0])}px)`,
              textShadow: "0 2px 14px rgba(0,0,0,0.5)",
            }}
          >
            Katanya
          </span>

          {/* Row 2: "https lebih aman dari http.?" */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 14,
              flexWrap: "nowrap",
            }}
          >
            {/* "https" */}
            <div
              style={{
                opacity: interpolate(spHttps, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spHttps, [0, 1], [1.2, 1])})`,
                filter: `drop-shadow(0 0 ${interpolate(spHttps, [0, 1], [30, 18])}px rgba(16, 185, 129, 0.6))`,
              }}
            >
              <span
                style={{
                  fontSize: 60,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsMint}, ${HTTP_HTTPS_COLORS.httpsGreen})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                https
              </span>
            </div>

            {/* "lebih aman dari" */}
            <span
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#f8fafc",
                fontFamily: FONT_DISPLAY,
                letterSpacing: "-0.5px",
                textShadow: "0 2px 14px rgba(0,0,0,0.5)",
                opacity: interpolate(spLebihAman, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spLebihAman, [0, 1], [12, 0])}px)`,
              }}
            >
              lebih aman dari
            </span>

            {/* "http.?" */}
            <div
              style={{
                opacity: interpolate(spHttp, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spHttp, [0, 1], [1.25, 1])}) translateX(${amberJitter}px)`,
                filter: `drop-shadow(0 0 ${interpolate(spHttp, [0, 1], [30, 18])}px rgba(251, 191, 36, 0.6))`,
              }}
            >
              <span
                style={{
                  fontSize: 60,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, #fef08a, ${HTTP_HTTPS_COLORS.httpAmber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                http.?
              </span>
            </div>
          </div>

          {/* Underline Beam */}
          <div
            style={{
              width: `${interpolate(spHttp, [0, 1], [0, 480])}px`,
              height: 3.5,
              borderRadius: 2,
              background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsGreen} 40%, ${HTTP_HTTPS_COLORS.httpAmber} 80%, transparent 100%)`,
              boxShadow: `0 0 14px ${HTTP_HTTPS_COLORS.httpsGreen}`,
              marginTop: 4,
            }}
          />
        </div>

        {/* ─── 3. DUAL COMPARISON STAGE: UPRIGHT 0deg SYMMETRICAL CARDS (GENEROUS GAP: marginTop 48px) ─── */}
        <div
          style={{
            width: 940,
            display: "grid",
            gridTemplateColumns: "435px 70px 435px",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            marginTop: 48, // GENEROUS GAP TO HEADLINE TEXT
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              CARD 1 (LEFT): HTTP (Unencrypted / Plaintext)
              - Upright 0deg tilt (NO rotateY)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              height: 430,
              borderRadius: 26,
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(251, 191, 36, 0.4)",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(251, 191, 36, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `translateY(${floatLeftY}px) scale(${interpolate(spCardHttp, [0, 1], [0.94, 1])})`,
              opacity: interpolate(spCardHttp, [0, 1], [0, 1]),
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* Header: Padlock Unlocked & Protocol Status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(251, 191, 36, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: "rgba(251, 191, 36, 0.18)",
                    border: "1.5px solid rgba(251, 191, 36, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    color: HTTP_HTTPS_COLORS.httpAmber,
                    boxShadow: `0 6px 20px rgba(251, 191, 36, ${0.35 * pulseCycle})`,
                  }}
                >
                  <FaUnlock />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: HTTP_HTTPS_COLORS.httpAmber,
                        boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpAmber}`,
                      }}
                    />
                    <FaEye size={14} color={HTTP_HTTPS_COLORS.httpAmber} />
                  </div>
                  <div
                    style={{
                      width: 56,
                      height: 5,
                      borderRadius: 2.5,
                      backgroundColor: "rgba(251, 191, 36, 0.4)",
                      marginTop: 6,
                    }}
                  />
                </div>
              </div>

              {/* Status Signal Bars */}
              <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                {[10, 16, 22, 28].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      height: h,
                      borderRadius: 2.5,
                      backgroundColor:
                        i < 2 ? HTTP_HTTPS_COLORS.httpAmber : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i < 2 ? `0 0 8px ${HTTP_HTTPS_COLORS.httpAmber}` : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Omnibox Bar Mockup */}
            <div
              style={{
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(251, 191, 36, 0.35)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <FaUnlock size={13} color={HTTP_HTTPS_COLORS.httpAmber} />
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(251, 191, 36, 0.35)",
                }}
              />
              <FaGlobe size={13} color={HTTP_HTTPS_COLORS.httpAmber} />
            </div>

            {/* Middle Data Stream Visual */}
            <div
              style={{
                flex: 1,
                margin: "12px 0",
                borderRadius: 16,
                backgroundColor: "rgba(251, 191, 36, 0.06)",
                border: "1px dashed rgba(251, 191, 36, 0.3)",
                padding: "16px 14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: HTTP_HTTPS_COLORS.httpAmber,
                    boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpAmber}`,
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${interpolate(Math.sin((frame * Math.PI) / 12), [-1, 1], [30, 85])}%`,
                      height: "100%",
                      borderRadius: 3,
                      backgroundColor: HTTP_HTTPS_COLORS.httpAmber,
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {[50, 75, 90, 45].map((w, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: w,
                      height: 14,
                      borderRadius: 6,
                      backgroundColor: "rgba(251, 191, 36, 0.15)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Status Hub */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 6,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        i === 0 ? HTTP_HTTPS_COLORS.httpAmber : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i === 0 ? `0 0 8px ${HTTP_HTTPS_COLORS.httpAmber}` : "none",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: 76,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(251, 191, 36, 0.3)",
                }}
              />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CENTER CONDUIT: VS ORBIT NODE & TRANSMISSION BEAM
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              height: 430,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Vertical Conduit Line */}
            <div
              style={{
                position: "absolute",
                top: 25,
                bottom: 25,
                width: 2,
                background:
                  "linear-gradient(180deg, rgba(251, 191, 36, 0.5) 0%, rgba(16, 185, 129, 0.5) 100%)",
              }}
            />

            {/* Center Dynamic Orbit Node */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: 46,
                height: 46,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1.5px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: HTTP_HTTPS_COLORS.textPrimary,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              <FaQuestion size={16} />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 2 (RIGHT): HTTPS (Encrypted / Secure TLS)
              - Upright 0deg tilt (NO rotateY)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              height: 430,
              borderRadius: 26,
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(16, 185, 129, 0.45)",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `translateY(${floatRightY}px) scale(${interpolate(spCardHttps, [0, 1], [0.94, 1])})`,
              opacity: interpolate(spCardHttps, [0, 1], [0, 1]),
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* Header: Padlock Locked & Shield Indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    color: HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: `0 6px 20px rgba(16, 185, 129, ${0.4 * pulseCycle})`,
                  }}
                >
                  <FaLock />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                        boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
                      }}
                    />
                    <FaShieldAlt size={14} color={HTTP_HTTPS_COLORS.httpsMint} />
                  </div>
                  <div
                    style={{
                      width: 56,
                      height: 5,
                      borderRadius: 2.5,
                      backgroundColor: "rgba(16, 185, 129, 0.4)",
                      marginTop: 6,
                    }}
                  />
                </div>
              </div>

              {/* Status Signal Bars */}
              <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                {[10, 16, 22, 28].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      height: h,
                      borderRadius: 2.5,
                      backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                      boxShadow: `0 0 8px ${HTTP_HTTPS_COLORS.httpsMint}`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Omnibox Bar Mockup */}
            <div
              style={{
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <FaLock size={13} color={HTTP_HTTPS_COLORS.httpsGreen} />
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(16, 185, 129, 0.35)",
                }}
              />
              <FaCheck size={12} color={HTTP_HTTPS_COLORS.httpsGreen} />
            </div>

            {/* Middle Data Stream Visual */}
            <div
              style={{
                flex: 1,
                margin: "12px 0",
                borderRadius: 16,
                backgroundColor: "rgba(16, 185, 129, 0.06)",
                border: "1px dashed rgba(16, 185, 129, 0.3)",
                padding: "16px 14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                    flex: 1,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${interpolate(Math.cos((frame * Math.PI) / 12), [-1, 1], [40, 95])}%`,
                      height: "100%",
                      borderRadius: 3,
                      backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {[55, 80, 65, 85].map((w, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: w,
                      height: 14,
                      borderRadius: 6,
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Status Hub */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 6,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        i < 2 ? HTTP_HTTPS_COLORS.httpsMint : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i < 2 ? `0 0 8px ${HTTP_HTTPS_COLORS.httpsMint}` : "none",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: 76,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(16, 185, 129, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
