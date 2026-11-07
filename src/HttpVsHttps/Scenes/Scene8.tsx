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
  FaExclamationTriangle,
  FaGlobe,
  FaLock,
  FaLockOpen,
  FaShieldAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 8: Frames 990 - 1230, Duration = 240 frames / ~8.0s)
  //
  // Naskah Lines 19-21:
  // Line 19 (Voiceover: 33.00s - 35.61s / localFrame 0 - 78):
  // "Jadi, mau HTTP atau HTTPS, "
  //
  // Line 20 (Voiceover: 35.92s - 37.78s / localFrame 80 - 146):
  // "sebagai orang yang sering berselancar di internet, "
  //
  // Line 21 (Voiceover: 38.18s - 40.32s / localFrame 150 - 240):
  // "jangan hanya melihat ikon gembok di browser."
  //
  // 💥 VISUAL REFINEMENTS:
  // - Zero outside text: ONLY script words in headlines
  // - Upright 0deg tilt: Flat symmetrical cards, clean modern glass aesthetics
  // - Generous gap (54px) between headline text and illustration stage
  // - Real camera tracking across dual viewpoints via InfiniteCameraRig
  // - Dead-center layout (X = 540px, Y = 960px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 8 (0 to 240)
  const localFrame = Math.max(0, frame - 990);

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [232, 240], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 10, 232, 240], [0.95, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ─── SPRINGS FOR PHASE 1 (Line 19: "Jadi, mau HTTP atau HTTPS,") ───
  const spPhase1In = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 150 },
  });

  // ─── SPRINGS FOR PHASE 2 (Line 20: "sebagai orang yang sering berselancar di internet,") ───
  const p2Local = Math.max(0, localFrame - 78);
  const spPhase2In = spring({
    frame: p2Local,
    fps,
    config: { damping: 13, stiffness: 160 },
  });

  // ─── SPRINGS FOR PHASE 3 (Line 21: "jangan hanya melihat ikon gembok di browser.") ───
  const p3Local = Math.max(0, localFrame - 146);
  const spPhase3In = spring({
    frame: p3Local,
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 180 },
  });

  // Phase interpolation weights
  // Phase 1 -> 2 transition around localFrame 76-84
  const progressP1toP2 = interpolate(localFrame, [76, 84], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Phase 2 -> 3 transition around localFrame 144-152
  const progressP2toP3 = interpolate(localFrame, [144, 152], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Floating micro-motion (±3px)
  const floatY = Math.sin((localFrame * Math.PI) / 32) * 3;
  const pulseScan = Math.sin(localFrame * 0.28) * 0.5 + 0.5;

  // Radar reticle rotation in Phase 3
  const reticleRotation = (p3Local * 2.8) % 360;

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
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
          gap: 28,
          boxSizing: "border-box",
        }}
      >
        {/* ─── 1. TOP MINIMALIST PERSPECTIVE BADGE (No Outside Text) ─── */}
        <div
          style={{
            transform: `scale(${interpolate(spPhase1In, [0, 1], [0.85, 1])}) translateY(${interpolate(spPhase1In, [0, 1], [-18, 0])}px)`,
            opacity: interpolate(spPhase1In, [0, 1], [0, 1]),
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
          {/* Protocol State Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color:
                progressP2toP3 > 0.5
                  ? HTTP_HTTPS_COLORS.httpAmber
                  : HTTP_HTTPS_COLORS.httpsCyan,
            }}
          >
            {progressP2toP3 > 0.5 ? (
              <FaExclamationTriangle size={15} />
            ) : (
              <FaLock size={14} />
            )}
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  progressP2toP3 > 0.5
                    ? HTTP_HTTPS_COLORS.httpAmber
                    : HTTP_HTTPS_COLORS.httpsCyan,
                boxShadow:
                  progressP2toP3 > 0.5
                    ? `0 0 10px ${HTTP_HTTPS_COLORS.httpAmber}`
                    : `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`,
              }}
            />
          </div>

          {/* Web Shield Node */}
          <FaGlobe size={13} color={HTTP_HTTPS_COLORS.textSecondary} />

          {/* Security Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color:
                progressP2toP3 > 0.5
                  ? HTTP_HTTPS_COLORS.dangerRose
                  : HTTP_HTTPS_COLORS.httpsMint,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  progressP2toP3 > 0.5
                    ? HTTP_HTTPS_COLORS.dangerRose
                    : HTTP_HTTPS_COLORS.httpsMint,
                boxShadow:
                  progressP2toP3 > 0.5
                    ? `0 0 10px ${HTTP_HTTPS_COLORS.dangerRose}`
                    : `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
              }}
            />
            <FaShieldAlt size={14} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINES 19-21) ─── */}
        {/* Generous fixed height container so content never overflows downward into the gap */}
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
          {/* ── PHASE 1 HEADLINE: "Jadi, mau HTTP atau HTTPS," (Lines 19) ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: interpolate(progressP1toP2, [0, 0.6], [1, 0]),
              transform: `translateY(${interpolate(progressP1toP2, [0, 1], [0, -18])}px)`,
              pointerEvents: progressP1toP2 > 0.5 ? "none" : "auto",
            }}
          >
            {/* Pill: "Jadi," */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 14px",
                borderRadius: 12,
                backgroundColor: "rgba(251, 191, 36, 0.16)",
                border: "1.5px solid rgba(251, 191, 36, 0.45)",
                opacity: interpolate(spPhase1In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase1In, [0, 1], [0.9, 1])})`,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 32,
                  fontWeight: 900,
                  color: HTTP_HTTPS_COLORS.httpAmber,
                  letterSpacing: 0.5,
                }}
              >
                Jadi,
              </span>
            </div>

            {/* Row 2: "mau HTTP atau HTTPS," */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: 12,
                opacity: interpolate(spPhase1In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase1In, [0, 1], [1.1, 1])}) translateY(${interpolate(spPhase1In, [0, 1], [14, 0])}px)`,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#e2e8f0",
                }}
              >
                mau
              </span>
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 58,
                  fontWeight: 900,
                  color: HTTP_HTTPS_COLORS.httpAmber,
                  filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))",
                }}
              >
                HTTP
              </span>
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 48,
                  fontWeight: 700,
                  color: HTTP_HTTPS_COLORS.textMuted,
                }}
              >
                atau
              </span>
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 58,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, #a5f3fc 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(56, 189, 248, 0.5))",
                }}
              >
                HTTPS,
              </span>
            </div>

            {/* Underline Beam */}
            <div
              style={{
                width: 320,
                height: 3.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpAmber} 30%, ${HTTP_HTTPS_COLORS.httpsCyan} 70%, transparent 100%)`,
                boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsCyan}`,
              }}
            />
          </div>

          {/* ── PHASE 2 HEADLINE: "sebagai orang yang sering berselancar di internet," (Line 20) ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity:
                progressP1toP2 >= 0.5 && progressP2toP3 < 0.5
                  ? interpolate(progressP1toP2, [0.5, 1], [0, 1])
                  : interpolate(progressP2toP3, [0, 0.6], [1, 0]),
              transform: `translateY(${
                progressP2toP3 > 0
                  ? interpolate(progressP2toP3, [0, 1], [0, -18])
                  : interpolate(progressP1toP2, [0, 1], [18, 0])
              }px)`,
              pointerEvents:
                progressP1toP2 >= 0.5 && progressP2toP3 < 0.5 ? "auto" : "none",
            }}
          >
            {/* Row 1: "sebagai orang yang sering" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 40,
                fontWeight: 700,
                color: HTTP_HTTPS_COLORS.textSecondary,
                letterSpacing: 0.5,
                opacity: interpolate(spPhase2In, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spPhase2In, [0, 1], [14, 0])}px)`,
                display: "inline-block",
                textShadow: "0 2px 14px rgba(0,0,0,0.5)",
              }}
            >
              sebagai orang yang sering
            </span>

            {/* Row 2: "berselancar di internet," */}
            <div
              style={{
                opacity: interpolate(spPhase2In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase2In, [0, 1], [1.12, 1])}) translateY(${interpolate(spPhase2In, [0, 1], [14, 0])}px)`,
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
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(56, 189, 248, 0.5))",
                }}
              >
                berselancar di internet,
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spPhase2In, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>

          {/* ── PHASE 3 HEADLINE: "jangan hanya melihat ikon gembok di browser." (Line 21) ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: interpolate(progressP2toP3, [0.4, 1], [0, 1]),
              transform: `translateY(${interpolate(progressP2toP3, [0, 1], [18, 0])}px)`,
              pointerEvents: progressP2toP3 >= 0.5 ? "auto" : "none",
            }}
          >
            {/* Row 1: "jangan hanya melihat" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  padding: "2px 14px",
                  borderRadius: 12,
                  backgroundColor: "rgba(251, 113, 133, 0.16)",
                  border: "1.5px solid rgba(251, 113, 133, 0.45)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 34,
                    fontWeight: 900,
                    color: HTTP_HTTPS_COLORS.dangerRose,
                    letterSpacing: 0.5,
                  }}
                >
                  jangan hanya melihat
                </span>
              </div>
            </div>

            {/* Row 2: "ikon gembok di browser." */}
            <div
              style={{
                opacity: interpolate(spPhase3In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase3In, [0, 1], [1.14, 1])}) translateY(${interpolate(spPhase3In, [0, 1], [14, 0])}px)`,
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
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpAmber} 0%, #fde047 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(251, 191, 36, 0.55))",
                }}
              >
                ikon gembok di browser.
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spPhase3In, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpAmber} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpAmber}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── 3. DUAL / TRIPLE EVOLUTION STAGE (GENEROUS GAP: marginTop 48px) ─── */}
        <div
          style={{
            width: 940,
            height: 440,
            borderRadius: 28,
            backgroundColor: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: `1.5px solid ${
              progressP2toP3 > 0.5
                ? "rgba(251, 191, 36, 0.65)"
                : "rgba(56, 189, 248, 0.5)"
            }`,
            boxShadow:
              progressP2toP3 > 0.5
                ? `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(251, 191, 36, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                : `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(56, 189, 248, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            marginTop: 48, // GENEROUS GAP TO HEADLINE TEXT
            transform: `translateY(${floatY}px)`,
          }}
        >
          {/* Top Stage Bar: Browser Window Mockup & Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            {/* Browser Control Buttons */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "rgba(239, 68, 68, 0.8)",
                  boxShadow: "0 0 8px rgba(239, 68, 68, 0.5)",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 158, 11, 0.8)",
                  boxShadow: "0 0 8px rgba(245, 158, 11, 0.5)",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
                }}
              />
            </div>

            {/* Omnibox Bar Mockup */}
            <div
              style={{
                flex: 1,
                maxWidth: 620,
                height: 44,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: `1.5px solid ${
                  progressP2toP3 > 0.5
                    ? "rgba(251, 191, 36, 0.5)"
                    : "rgba(56, 189, 248, 0.4)"
                }`,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 12,
                boxSizing: "border-box",
                boxShadow:
                  progressP2toP3 > 0.5
                    ? "0 0 18px rgba(251, 191, 36, 0.25)"
                    : "0 0 18px rgba(56, 189, 248, 0.2)",
              }}
            >
              {/* Animated Focus Lock Icon */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  backgroundColor:
                    progressP2toP3 > 0.5
                      ? "rgba(251, 191, 36, 0.2)"
                      : "rgba(16, 185, 129, 0.2)",
                  border: `1.5px solid ${
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsGreen
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color:
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsGreen,
                  transform: `scale(${
                    progressP2toP3 > 0.5 ? 1.1 + pulseScan * 0.15 : 1
                  })`,
                  boxShadow:
                    progressP2toP3 > 0.5
                      ? `0 0 14px ${HTTP_HTTPS_COLORS.httpAmber}`
                      : `0 0 12px ${HTTP_HTTPS_COLORS.httpsGreen}`,
                }}
              >
                <FaLock size={13} />
              </div>

              {/* URL Protocol & Domain Simulation Pill (Zero outside text) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      progressP2toP3 > 0.5
                        ? "rgba(251, 191, 36, 0.6)"
                        : "rgba(56, 189, 248, 0.6)",
                  }}
                />
                <div
                  style={{
                    width: 140,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                  }}
                />
                <div
                  style={{
                    width: 90,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                />
              </div>

              <FaGlobe
                size={14}
                color={
                  progressP2toP3 > 0.5
                    ? HTTP_HTTPS_COLORS.httpAmber
                    : HTTP_HTTPS_COLORS.httpsCyan
                }
              />
            </div>

            {/* Signal Equalizer */}
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
              {[10, 16, 22, 28].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: h,
                    borderRadius: 2.5,
                    backgroundColor:
                      progressP2toP3 > 0.5
                        ? HTTP_HTTPS_COLORS.httpAmber
                        : HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: `0 0 8px ${
                      progressP2toP3 > 0.5
                        ? HTTP_HTTPS_COLORS.httpAmber
                        : HTTP_HTTPS_COLORS.httpsCyan
                    }`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Middle Stage: The Dynamic Visual Focus Core */}
          <div
            style={{
              flex: 1,
              margin: "16px 0",
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.22)",
              border: "1px dashed rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "20px 30px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* Left Wing: HTTP / Open Port Node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                opacity: progressP2toP3 > 0.5 ? 0.35 : 1,
                transform: `scale(${progressP2toP3 > 0.5 ? 0.92 : 1})`,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  backgroundColor: "rgba(251, 191, 36, 0.18)",
                  border: "2px solid rgba(251, 191, 36, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  color: HTTP_HTTPS_COLORS.httpAmber,
                  boxShadow: `0 0 24px rgba(251, 191, 36, 0.35)`,
                }}
              >
                <FaLockOpen />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: HTTP_HTTPS_COLORS.httpAmber,
                      boxShadow: `0 0 8px ${HTTP_HTTPS_COLORS.httpAmber}`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Center Dynamic Core: Holographic Lock Scanner (Phase 3 Highlight) */}
            <div
              style={{
                position: "relative",
                width: 130,
                height: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Rotating Holographic Radar Crosshair */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: `2px dashed ${
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsCyan
                  }`,
                  transform: `rotate(${reticleRotation}deg)`,
                  boxShadow: `0 0 20px ${
                    progressP2toP3 > 0.5
                      ? "rgba(251, 191, 36, 0.4)"
                      : "rgba(56, 189, 248, 0.3)"
                  }`,
                }}
              />

              {/* Pulsing Aura Ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: "50%",
                  border: `1.5px solid ${
                    progressP2toP3 > 0.5
                      ? "rgba(251, 113, 133, 0.4)"
                      : "rgba(16, 185, 129, 0.3)"
                  }`,
                  transform: `scale(${1 + pulseScan * 0.12})`,
                  opacity: 0.8,
                }}
              />

              {/* Central Lock Emblem */}
              <div
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: 28,
                  backgroundColor:
                    progressP2toP3 > 0.5
                      ? "rgba(251, 191, 36, 0.25)"
                      : "rgba(16, 185, 129, 0.22)",
                  border: `2px solid ${
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsGreen
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  color:
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsGreen,
                  boxShadow:
                    progressP2toP3 > 0.5
                      ? `0 0 35px rgba(251, 191, 36, 0.6)`
                      : `0 0 35px rgba(16, 185, 129, 0.5)`,
                }}
              >
                <FaLock />
              </div>
            </div>

            {/* Right Wing: HTTPS / TLS Vault Node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                opacity: progressP2toP3 > 0.5 ? 0.35 : 1,
                transform: `scale(${progressP2toP3 > 0.5 ? 0.92 : 1})`,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  backgroundColor: "rgba(56, 189, 248, 0.18)",
                  border: "2px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  color: HTTP_HTTPS_COLORS.httpsCyan,
                  boxShadow: `0 0 24px rgba(56, 189, 248, 0.35)`,
                }}
              >
                <FaShieldAlt />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                      boxShadow: `0 0 8px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stage Status Hub */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 8,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* Status node beacons */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: `0 0 10px ${
                    progressP2toP3 > 0.5
                      ? HTTP_HTTPS_COLORS.httpAmber
                      : HTTP_HTTPS_COLORS.httpsMint
                  }`,
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

            {/* Central Data Matrix Bars */}
            <div style={{ display: "flex", gap: 8 }}>
              {[45, 80, 60, 95].map((w, idx) => (
                <div
                  key={idx}
                  style={{
                    width: w,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      progressP2toP3 > 0.5
                        ? "rgba(251, 191, 36, 0.25)"
                        : "rgba(56, 189, 248, 0.25)",
                    border: `1px solid ${
                      progressP2toP3 > 0.5
                        ? "rgba(251, 191, 36, 0.4)"
                        : "rgba(56, 189, 248, 0.4)"
                    }`,
                  }}
                />
              ))}
            </div>

            {/* Verification Checkmark / Warning Beacon */}
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor:
                  progressP2toP3 > 0.5
                    ? "rgba(251, 191, 36, 0.2)"
                    : "rgba(16, 185, 129, 0.2)",
                border: `1px solid ${
                  progressP2toP3 > 0.5
                    ? HTTP_HTTPS_COLORS.httpAmber
                    : HTTP_HTTPS_COLORS.httpsGreen
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color:
                  progressP2toP3 > 0.5
                    ? HTTP_HTTPS_COLORS.httpAmber
                    : HTTP_HTTPS_COLORS.httpsGreen,
              }}
            >
              {progressP2toP3 > 0.5 ? (
                <FaExclamationTriangle size={11} />
              ) : (
                <FaCheck size={11} />
              )}
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
