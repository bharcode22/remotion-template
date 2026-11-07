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
  FaCheckCircle,
  FaGlobe,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 9: Frames 1230 - 1375, Duration = 145 frames / ~4.83s)
  //
  // Naskah Line 23 (The Grand Finale):
  // "Tetap periksa alamat website dan pastikan kamu tahu siapa yang sedang kamu percaya."
  //
  // Sub-phase 1 (localFrame 0 - 75 / Frames 1230 - 1305):
  // "Tetap periksa alamat website"
  //
  // Sub-phase 2 (localFrame 75 - 145 / Frames 1305 - 1375):
  // "dan pastikan kamu tahu siapa yang sedang kamu percaya."
  //
  // 💥 GRAND FINALE AESTHETICS:
  // - Zero outside text: ONLY script words in headlines
  // - Upright 0deg tilt: Flat symmetrical cards, clean modern glass aesthetics
  // - Generous gap (54px) between headline text and illustration stage
  // - Real camera tracking across dual viewpoints via InfiniteCameraRig
  // - Dead-center layout (X = 540px, Y = 960px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 9 (0 to 145)
  const localFrame = Math.max(0, frame - 1230);

  // Scene Entrance & Peaceful Final Outro Fade
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [136, 145], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 10, 136, 145], [0.95, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ─── SPRINGS FOR SUB-PHASE 1 ("Tetap periksa alamat website") ───
  const spPhase1In = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 150 },
  });

  // ─── SPRINGS FOR SUB-PHASE 2 ("dan pastikan kamu tahu siapa yang sedang kamu percaya.") ───
  const p2Local = Math.max(0, localFrame - 75);
  const spPhase2In = spring({
    frame: p2Local,
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 170 },
  });

  // Sub-phase progress (0: Domain inspection, 1: Golden trust crest)
  const phaseProgress = interpolate(localFrame, [72, 82], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Floating micro-motion (±3px)
  const floatY = Math.sin((localFrame * Math.PI) / 30) * 3;
  const pulseAura = Math.sin(localFrame * 0.22) * 0.5 + 0.5;

  // Domain scan laser sweep in Phase 1
  const scanSweepX = interpolate(
    Math.sin((localFrame * Math.PI) / 16),
    [-1, 1],
    [10, 90]
  );

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(45px)`,
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
          {/* Domain Search Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color:
                phaseProgress < 0.5
                  ? HTTP_HTTPS_COLORS.httpsCyan
                  : HTTP_HTTPS_COLORS.httpAmber,
            }}
          >
            <FaSearch size={13} />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  phaseProgress < 0.5
                    ? HTTP_HTTPS_COLORS.httpsCyan
                    : HTTP_HTTPS_COLORS.httpAmber,
                boxShadow:
                  phaseProgress < 0.5
                    ? `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`
                    : `0 0 10px ${HTTP_HTTPS_COLORS.httpAmber}`,
              }}
            />
          </div>

          {/* Central Verified Shield */}
          <FaShieldAlt
            size={14}
            color={
              phaseProgress >= 0.5
                ? HTTP_HTTPS_COLORS.httpAmber
                : HTTP_HTTPS_COLORS.textSecondary
            }
          />

          {/* Golden Trust Verification Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color:
                phaseProgress >= 0.5
                  ? HTTP_HTTPS_COLORS.httpsMint
                  : HTTP_HTTPS_COLORS.textMuted,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  phaseProgress >= 0.5
                    ? HTTP_HTTPS_COLORS.httpsMint
                    : "rgba(255, 255, 255, 0.2)",
                boxShadow:
                  phaseProgress >= 0.5
                    ? `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`
                    : "none",
              }}
            />
            <FaCheckCircle size={14} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINE 23) ─── */}
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
          {/* ── PHASE 1 HEADLINE: "Tetap periksa alamat website" ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: interpolate(phaseProgress, [0, 0.6], [1, 0]),
              transform: `translateY(${interpolate(phaseProgress, [0, 1], [0, -18])}px)`,
              pointerEvents: phaseProgress > 0.5 ? "none" : "auto",
            }}
          >
            {/* Pill: "Tetap periksa" */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 16px",
                borderRadius: 12,
                backgroundColor: "rgba(56, 189, 248, 0.16)",
                border: "1.5px solid rgba(56, 189, 248, 0.45)",
                opacity: interpolate(spPhase1In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase1In, [0, 1], [0.9, 1])})`,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 34,
                  fontWeight: 900,
                  color: HTTP_HTTPS_COLORS.httpsCyan,
                  letterSpacing: 0.5,
                }}
              >
                Tetap periksa
              </span>
            </div>

            {/* Row 2: "alamat website" */}
            <div
              style={{
                opacity: interpolate(spPhase1In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase1In, [0, 1], [1.12, 1])}) translateY(${interpolate(spPhase1In, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 60,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(56, 189, 248, 0.5))",
                }}
              >
                alamat website
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spPhase1In, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>

          {/* ── PHASE 2 HEADLINE: "dan pastikan kamu tahu siapa yang sedang kamu percaya." ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: interpolate(phaseProgress, [0.4, 1], [0, 1]),
              transform: `translateY(${interpolate(phaseProgress, [0, 1], [18, 0])}px)`,
              pointerEvents: phaseProgress <= 0.5 ? "none" : "auto",
            }}
          >
            {/* Row 1: "dan pastikan kamu tahu" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 38,
                fontWeight: 700,
                color: HTTP_HTTPS_COLORS.textSecondary,
                letterSpacing: 0.5,
                opacity: interpolate(spPhase2In, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spPhase2In, [0, 1], [14, 0])}px)`,
                display: "inline-block",
                textShadow: "0 2px 14px rgba(0,0,0,0.5)",
              }}
            >
              dan pastikan kamu tahu
            </span>

            {/* Row 2: "siapa yang sedang kamu percaya." */}
            <div
              style={{
                opacity: interpolate(spPhase2In, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spPhase2In, [0, 1], [1.14, 1])}) translateY(${interpolate(spPhase2In, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 52,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, #f59e0b 0%, #fde047 50%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 26px rgba(245, 158, 11, 0.55))",
                }}
              >
                siapa yang sedang kamu percaya.
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spPhase2In, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, #f59e0b 50%, transparent 100%)`,
                  boxShadow: `0 0 14px #f59e0b`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── 3. GRAND FINALE CITADEL STAGE (GENEROUS GAP: marginTop 48px) ─── */}
        <div
          style={{
            width: 940,
            height: 440,
            borderRadius: 28,
            backgroundColor: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: `1.5px solid ${
              phaseProgress > 0.5
                ? "rgba(245, 158, 11, 0.7)"
                : "rgba(56, 189, 248, 0.6)"
            }`,
            boxShadow:
              phaseProgress > 0.5
                ? `0 25px 65px rgba(0, 0, 0, 0.45), 0 0 40px rgba(245, 158, 11, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)`
                : `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(56, 189, 248, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
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
          {/* Top Stage Bar: Browser Address Inspector & Security Check */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            {/* Window Pills */}
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
                  phaseProgress > 0.5
                    ? "rgba(245, 158, 11, 0.6)"
                    : "rgba(56, 189, 248, 0.5)"
                }`,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 12,
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  phaseProgress > 0.5
                    ? "0 0 20px rgba(245, 158, 11, 0.25)"
                    : "0 0 18px rgba(56, 189, 248, 0.2)",
              }}
            >
              {/* Traveling Address Scan Beam (Phase 1) */}
              {phaseProgress < 0.8 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: `${scanSweepX}%`,
                    width: 30,
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.4) 50%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Padlock Icon */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  backgroundColor:
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.2)"
                      : "rgba(16, 185, 129, 0.2)",
                  border: `1.5px solid ${
                    phaseProgress > 0.5
                      ? "#f59e0b"
                      : HTTP_HTTPS_COLORS.httpsGreen
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color:
                    phaseProgress > 0.5
                      ? "#f59e0b"
                      : HTTP_HTTPS_COLORS.httpsGreen,
                  boxShadow:
                    phaseProgress > 0.5
                      ? "0 0 14px rgba(245, 158, 11, 0.6)"
                      : `0 0 12px ${HTTP_HTTPS_COLORS.httpsGreen}`,
                }}
              >
                <FaLock size={13} />
              </div>

              {/* URL Address Representation (Zero outside text) */}
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
                    width: 80,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      phaseProgress > 0.5
                        ? "rgba(245, 158, 11, 0.7)"
                        : "rgba(56, 189, 248, 0.7)",
                  }}
                />
                <div
                  style={{
                    width: 150,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                />
                <div
                  style={{
                    width: 70,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                  }}
                />
              </div>

              <FaGlobe
                size={14}
                color={
                  phaseProgress > 0.5
                    ? "#f59e0b"
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
                      phaseProgress > 0.5 ? "#f59e0b" : HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: `0 0 8px ${
                      phaseProgress > 0.5
                        ? "#f59e0b"
                        : HTTP_HTTPS_COLORS.httpsMint
                    }`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Middle Stage: The Golden Trust Monolith & Crest */}
          <div
            style={{
              flex: 1,
              margin: "16px 0",
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.24)",
              border: `1px dashed ${
                phaseProgress > 0.5
                  ? "rgba(245, 158, 11, 0.4)"
                  : "rgba(56, 189, 248, 0.3)"
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "20px 30px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* Left Wing: User Verification Authority Beacon */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  backgroundColor:
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.18)"
                      : "rgba(56, 189, 248, 0.18)",
                  border: `2px solid ${
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.55)"
                      : "rgba(56, 189, 248, 0.5)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  color:
                    phaseProgress > 0.5
                      ? "#f59e0b"
                      : HTTP_HTTPS_COLORS.httpsCyan,
                  boxShadow: `0 0 24px ${
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.35)"
                      : "rgba(56, 189, 248, 0.35)"
                  }`,
                }}
              >
                <FaUserShield />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        phaseProgress > 0.5
                          ? "#f59e0b"
                          : HTTP_HTTPS_COLORS.httpsCyan,
                      boxShadow: `0 0 8px ${
                        phaseProgress > 0.5
                          ? "#f59e0b"
                          : HTTP_HTTPS_COLORS.httpsCyan
                      }`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Central Grand Finale: The Imperial Shield of Trust */}
            <div
              style={{
                position: "relative",
                width: 140,
                height: 140,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer Radiant Aura Ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -18,
                  borderRadius: "50%",
                  border: `2px dashed ${
                    phaseProgress > 0.5 ? "#f59e0b" : HTTP_HTTPS_COLORS.httpsMint
                  }`,
                  transform: `scale(${1 + pulseAura * 0.15})`,
                  opacity: 0.7,
                  boxShadow: `0 0 30px ${
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.5)"
                      : "rgba(16, 185, 129, 0.4)"
                  }`,
                }}
              />

              {/* Inner Radiant Aura Ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  border: `1.5px solid ${
                    phaseProgress > 0.5
                      ? "rgba(253, 224, 71, 0.6)"
                      : "rgba(56, 189, 248, 0.4)"
                  }`,
                  opacity: 0.8,
                }}
              />

              {/* Central Golden Crest Shield */}
              <div
                style={{
                  width: 98,
                  height: 98,
                  borderRadius: 30,
                  backgroundColor:
                    phaseProgress > 0.5
                      ? "rgba(245, 158, 11, 0.28)"
                      : "rgba(16, 185, 129, 0.24)",
                  border: `2.5px solid ${
                    phaseProgress > 0.5
                      ? "#f59e0b"
                      : HTTP_HTTPS_COLORS.httpsMint
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 46,
                  color:
                    phaseProgress > 0.5
                      ? "#fde047"
                      : HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow:
                    phaseProgress > 0.5
                      ? "0 0 45px rgba(245, 158, 11, 0.7), inset 0 0 20px rgba(253, 224, 71, 0.4)"
                      : "0 0 35px rgba(16, 185, 129, 0.6)",
                  transform: `scale(${
                    phaseProgress > 0.5 ? 1.05 + pulseAura * 0.08 : 1
                  })`,
                }}
              >
                <FaShieldAlt />
              </div>
            </div>

            {/* Right Wing: Domain Authenticity Seal */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  backgroundColor:
                    phaseProgress > 0.5
                      ? "rgba(16, 185, 129, 0.22)"
                      : "rgba(56, 189, 248, 0.18)",
                  border: `2px solid ${
                    phaseProgress > 0.5
                      ? "rgba(16, 185, 129, 0.6)"
                      : "rgba(56, 189, 248, 0.5)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  color:
                    phaseProgress > 0.5
                      ? HTTP_HTTPS_COLORS.httpsMint
                      : HTTP_HTTPS_COLORS.httpsCyan,
                  boxShadow: `0 0 24px ${
                    phaseProgress > 0.5
                      ? "rgba(16, 185, 129, 0.35)"
                      : "rgba(56, 189, 248, 0.35)"
                  }`,
                }}
              >
                <FaCheck />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        phaseProgress > 0.5
                          ? HTTP_HTTPS_COLORS.httpsMint
                          : HTTP_HTTPS_COLORS.httpsCyan,
                      boxShadow: `0 0 8px ${
                        phaseProgress > 0.5
                          ? HTTP_HTTPS_COLORS.httpsMint
                          : HTTP_HTTPS_COLORS.httpsCyan
                      }`,
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
            {/* Verification Status Beacons */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    phaseProgress > 0.5 ? "#f59e0b" : HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: `0 0 10px ${
                    phaseProgress > 0.5
                      ? "#f59e0b"
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

            {/* Central Trust Matrix Bars */}
            <div style={{ display: "flex", gap: 8 }}>
              {[60, 95, 75, 50].map((w, idx) => (
                <div
                  key={idx}
                  style={{
                    width: w,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      phaseProgress > 0.5
                        ? "rgba(245, 158, 11, 0.25)"
                        : "rgba(16, 185, 129, 0.25)",
                    border: `1px solid ${
                      phaseProgress > 0.5
                        ? "rgba(245, 158, 11, 0.45)"
                        : "rgba(16, 185, 129, 0.4)"
                    }`,
                  }}
                />
              ))}
            </div>

            {/* Final Authentic Check Badge */}
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                backgroundColor:
                  phaseProgress > 0.5
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(16, 185, 129, 0.2)",
                border: `1px solid ${
                  phaseProgress > 0.5
                    ? "#f59e0b"
                    : HTTP_HTTPS_COLORS.httpsGreen
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color:
                  phaseProgress > 0.5
                    ? "#f59e0b"
                    : HTTP_HTTPS_COLORS.httpsGreen,
              }}
            >
              <FaCheck size={12} />
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
