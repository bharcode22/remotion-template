import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCrosshairs,
  FaExclamationTriangle,
  FaEye,
  FaKey,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 2: Frames 86 - 147, Voiceover: 2.89s - 4.37s)
  // "Jangan salah persepsi."
  //
  // 💥 REVAMPED HIGH-IMPACT TWIST ANIMATION:
  // - Tension Bass Drop on entrance
  // - Explosive Stamp Impact & Screen Shake on "salah"
  // - Camera Lens Focus Snap (blur to razor-sharp) on "persepsi."
  // - Futuristic Holographic Optical HUD Chamber with Corner Brackets
  // - STRICTLY PAS DI TENGAH (X = 540px, Y = 960px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 2 (0 to 61)
  const localFrame = Math.max(0, frame - 86);

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(localFrame, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [54, 61], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 8, 54, 61], [0.94, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 1. Top Emblem Spring
  const spTopEmblem = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  // 2. Word "Jangan" Spring (~localFrame 0 - 15)
  const spWordJangan = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // 3. Word "salah" Explosive Stamp Spring (~localFrame 15)
  const spWordSalah = spring({
    frame: Math.max(0, localFrame - 15),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 240 },
  });

  // 4. Word "persepsi." Focus Shutter Spring (~localFrame 28)
  const spWordPersepsi = spring({
    frame: Math.max(0, localFrame - 27),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 150 },
  });

  // 5. Central Optical Prism Card Spring
  const spCard = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 135 },
  });

  // 6. Left Surface Node vs Right Reality Node Springs
  const spLeftNode = spring({
    frame: Math.max(0, localFrame - 8),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  const spRightNode = spring({
    frame: Math.max(0, localFrame - 16),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // Screen shake on "salah" stamp impact (localFrame 15 to 26)
  const shakeDecay = Math.max(0, 1 - (localFrame - 15) / 11);
  const screenShakeX =
    localFrame >= 15 && localFrame <= 26
      ? Math.sin((localFrame - 15) * 2.8) * shakeDecay * 10
      : 0;
  const screenShakeY =
    localFrame >= 15 && localFrame <= 26
      ? Math.cos((localFrame - 15) * 3.2) * shakeDecay * 6
      : 0;

  // Expanding shockwave ring from "salah" impact
  const shockwaveSalahProgress = interpolate(localFrame, [16, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const shockwaveSalahScale = interpolate(shockwaveSalahProgress, [0, 1], [0.8, 2.4]);
  const shockwaveSalahOpacity = interpolate(shockwaveSalahProgress, [0, 0.2, 1], [0, 0.8, 0]);

  // Optical Camera Lens Focus Snap on "persepsi."
  const lensBlur = interpolate(localFrame, [26, 32], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const prismRotationCw = interpolate(localFrame, [0, 61], [0, 110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const prismRotationCcw = interpolate(localFrame, [0, 61], [0, -110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const beamProgress = interpolate(localFrame, [10, 52], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  const alertPulse = Math.sin(localFrame * 0.28) * 0.5 + 0.5;

  const glassShineX = interpolate(localFrame, [12, 50], [-150, 250], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translate(${screenShakeX}px, ${screenShakeY - 30}px)`,
      }}
    >
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
        {/* ─── 1. TOP FROSTED GLASS CAUTION EMBLEM (No Text Outside Script) ─── */}
        <div
          style={{
            opacity: interpolate(spTopEmblem, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(spTopEmblem, [0, 1], [-20, 0])}px) scale(${interpolate(spTopEmblem, [0, 1], [0.85, 1])})`,
            display: "flex",
            alignItems: "center",
            gap: 18,
            padding: "12px 30px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: `1.5px solid rgba(251, 113, 133, ${0.35 + alertPulse * 0.35})`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.35), 0 0 25px rgba(251, 113, 133, ${0.18 + alertPulse * 0.2})`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Glowing Caution Diamond */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(251, 113, 133, 0.22)",
              border: "1.5px solid rgba(251, 113, 133, 0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: HTTP_HTTPS_COLORS.dangerRose,
              fontSize: 18,
              boxShadow: "0 0 18px rgba(251, 113, 133, 0.45)",
            }}
          >
            <FaExclamationTriangle />
          </div>

          {/* Perspective Inversion Icon */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              backgroundColor: "rgba(167, 139, 250, 0.18)",
              border: "1px solid rgba(167, 139, 250, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: HTTP_HTTPS_COLORS.accentViolet,
              fontSize: 16,
              transform: `rotate(${prismRotationCw * 1.5}deg)`,
            }}
          >
            <FaSyncAlt />
          </div>

          {/* Crosshairs Alignment Icon */}
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "rgba(56, 189, 248, 0.14)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: HTTP_HTTPS_COLORS.httpsCyan,
              fontSize: 14,
            }}
          >
            <FaCrosshairs />
          </div>

          {/* Optical Pulse Beacon */}
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: HTTP_HTTPS_COLORS.dangerRose,
              boxShadow: `0 0 16px ${HTTP_HTTPS_COLORS.dangerRose}`,
              transform: `scale(${1 + alertPulse * 0.4})`,
            }}
          />
        </div>

        {/* ─── 2. MAIN SCRIPT HEADLINE: "Jangan salah persepsi." ─── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 24,
            rowGap: 14,
            maxWidth: 960,
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Word 1: "Jangan" */}
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: HTTP_HTTPS_COLORS.textPrimary,
              opacity: interpolate(spWordJangan, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(spWordJangan, [0, 1], [20, 0])}px) scale(${interpolate(spWordJangan, [0, 1], [0.92, 1])})`,
              display: "inline-block",
              textShadow: "0 4px 25px rgba(0, 0, 0, 0.55)",
            }}
          >
            Jangan
          </span>

          {/* Word 2: "salah" (Explosive Impact Stamp Slam) */}
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Expanding Shockwave Ring */}
            {shockwaveSalahOpacity > 0 && (
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 70,
                  borderRadius: 24,
                  border: "2px solid #fb7185",
                  transform: `scale(${shockwaveSalahScale})`,
                  opacity: shockwaveSalahOpacity,
                  pointerEvents: "none",
                }}
              />
            )}

            <div
              style={{
                opacity: interpolate(spWordSalah, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spWordSalah, [0, 1], [1.85, 1])})`,
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 26px",
                borderRadius: 22,
                backgroundColor: "rgba(251, 113, 133, 0.2)",
                border: `1.5px solid rgba(251, 113, 133, ${0.5 + alertPulse * 0.35})`,
                boxShadow: `0 10px 35px rgba(251, 113, 133, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.35)`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 82,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.dangerRose} 0%, #fda4af 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(251, 113, 133, 0.55))",
                  display: "inline-block",
                }}
              >
                salah
              </span>
            </div>
          </div>

          {/* Word 3: "persepsi." (Camera Lens Focus Snap) */}
          <div
            style={{
              opacity: interpolate(spWordPersepsi, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(spWordPersepsi, [0, 1], [20, 0])}px) scale(${interpolate(spWordPersepsi, [0, 1], [0.92, 1])})`,
              filter: `blur(${lensBlur}px)`,
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 82,
                fontWeight: 800,
                letterSpacing: "-0.025em",
                background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.accentPurple} 0%, ${HTTP_HTTPS_COLORS.httpsCyan} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 28px rgba(167, 139, 250, 0.4))",
                display: "inline-block",
              }}
            >
              persepsi.
            </span>

            {/* Glowing Accent Underline Beam */}
            <div
              style={{
                width: `${interpolate(spWordPersepsi, [0, 1], [0, 100])}%`,
                height: 5,
                borderRadius: 3,
                background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.accentViolet} 50%, transparent 100%)`,
                boxShadow: `0 0 16px ${HTTP_HTTPS_COLORS.accentViolet}`,
                marginTop: -4,
              }}
            />
          </div>
        </div>

        {/* ─── 3. PERCEPTION SHIFT GLASS HOLOGRAPHIC PRISM (With Corner HUD Brackets) ─── */}
        <div
          style={{
            opacity: interpolate(spCard, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(spCard, [0, 1], [30, 0])}px) scale(${interpolate(spCard, [0, 1], [0.94, 1])})`,
            width: 940,
            marginTop: 48,
            borderRadius: 36,
            padding: "44px 38px 40px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow:
              "0 25px 65px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(30px) saturate(190%)",
            WebkitBackdropFilter: "blur(30px) saturate(190%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 36,
            boxSizing: "border-box",
          }}
        >
          {/* HUD Corner Brackets */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 18,
              height: 18,
              borderTop: "2px solid rgba(251, 113, 133, 0.7)",
              borderLeft: "2px solid rgba(251, 113, 133, 0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 18,
              height: 18,
              borderTop: "2px solid rgba(167, 139, 250, 0.7)",
              borderRight: "2px solid rgba(167, 139, 250, 0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              width: 18,
              height: 18,
              borderBottom: "2px solid rgba(251, 113, 133, 0.7)",
              borderLeft: "2px solid rgba(251, 113, 133, 0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 18,
              height: 18,
              borderBottom: "2px solid rgba(167, 139, 250, 0.7)",
              borderRight: "2px solid rgba(167, 139, 250, 0.7)",
            }}
          />

          {/* Dynamic Luminous Glass Shine Sweep */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 120,
              left: `${glassShineX}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 50%, transparent 100%)",
              transform: "skewX(-25deg)",
              pointerEvents: "none",
            }}
          />

          {/* Background Ambient Radial Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 380,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167, 139, 250, 0.14) 0%, rgba(251, 113, 133, 0.09) 50%, transparent 75%)",
              filter: "blur(45px)",
              pointerEvents: "none",
            }}
          />

          {/* Main Visual Dual-Node Comparison Metaphor */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              padding: "0 10px",
            }}
          >
            {/* ── LEFT NODE: Surface Perception (Gembok Hijau / Bias Asumsi) ── */}
            <div
              style={{
                opacity: interpolate(spLeftNode, [0, 1], [0, 1]),
                transform: `translateX(${interpolate(spLeftNode, [0, 1], [-30, 0])}px)`,
                width: 260,
                padding: "30px 22px",
                borderRadius: 26,
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1.5px solid rgba(16, 185, 129, 0.3)",
                boxShadow:
                  "0 16px 40px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              {/* Outer Decorative Floating Badge */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: -12,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  color: HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                }}
              >
                <FaKey />
              </div>

              {/* Glowing Icon Hub */}
              <div
                style={{
                  width: 86,
                  height: 86,
                  borderRadius: 26,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "1.5px solid rgba(16, 185, 129, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 38,
                  color: HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
                }}
              >
                <FaLock />
              </div>

              {/* Metric Rings (No text) */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 30,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor:
                        i < 3 ? HTTP_HTTPS_COLORS.httpsMint : "rgba(255, 255, 255, 0.15)",
                      boxShadow: i < 3 ? `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}` : "none",
                    }}
                  />
                ))}
              </div>

              {/* Status Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    maxWidth: 110,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                />
              </div>
            </div>

            {/* ── CENTER: OPTICAL PRISM & ROTATING RETICLE ── */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 280,
                height: 240,
              }}
            >
              {/* Horizontal Laser Connector Line */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: -50,
                  right: -50,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(16, 185, 129, 0.6) 0%, rgba(251, 113, 133, 0.9) 50%, rgba(167, 139, 250, 0.6) 100%)",
                  transform: "translateY(-50%)",
                }}
              >
                {/* Moving Pulse Particle on Line */}
                <div
                  style={{
                    position: "absolute",
                    top: -5,
                    left: `${beamProgress}%`,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 18px #ffffff, 0 0 26px #fb7185",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>

              {/* Outer Dashed Orbit Reticle */}
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  border: "2px dashed rgba(255, 255, 255, 0.22)",
                  transform: `rotate(${prismRotationCw}deg)`,
                  position: "absolute",
                }}
              />

              {/* Inner Dotted Orbit Reticle */}
              <div
                style={{
                  width: 145,
                  height: 145,
                  borderRadius: "50%",
                  border: "1.5px dotted rgba(251, 113, 133, 0.4)",
                  transform: `rotate(${prismRotationCcw}deg)`,
                  position: "absolute",
                }}
              />

              {/* Middle Glowing Frosted Ring */}
              <div
                style={{
                  width: 125,
                  height: 125,
                  borderRadius: "50%",
                  border: `1.5px solid rgba(251, 113, 133, ${0.45 + alertPulse * 0.35})`,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  boxShadow: `0 0 35px rgba(251, 113, 133, ${0.3 + alertPulse * 0.25})`,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />

              {/* Core Perception Lens Icon */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: 86,
                  height: 86,
                  borderRadius: "50%",
                  backgroundColor: "rgba(251, 113, 133, 0.25)",
                  border: "1.5px solid rgba(251, 113, 133, 0.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 38,
                  color: "#ffffff",
                  boxShadow: "0 0 28px rgba(251, 113, 133, 0.55)",
                  transform: `scale(${1 + alertPulse * 0.08})`,
                }}
              >
                <FaEye />
              </div>
            </div>

            {/* ── RIGHT NODE: Deeper Reality (Shield / Scan Multi-layer) ── */}
            <div
              style={{
                opacity: interpolate(spRightNode, [0, 1], [0, 1]),
                transform: `translateX(${interpolate(spRightNode, [0, 1], [30, 0])}px)`,
                width: 260,
                padding: "30px 22px",
                borderRadius: 26,
                backgroundColor: "rgba(167, 139, 250, 0.08)",
                border: "1.5px solid rgba(167, 139, 250, 0.3)",
                boxShadow:
                  "0 16px 40px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              {/* Outer Decorative Floating Badge */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: -12,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "rgba(167, 139, 250, 0.25)",
                  border: "1px solid rgba(167, 139, 250, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  color: HTTP_HTTPS_COLORS.accentPurple,
                  boxShadow: "0 0 12px rgba(167, 139, 250, 0.4)",
                }}
              >
                <FaSearch />
              </div>

              {/* Glowing Icon Hub */}
              <div
                style={{
                  width: 86,
                  height: 86,
                  borderRadius: 26,
                  backgroundColor: "rgba(167, 139, 250, 0.18)",
                  border: "1.5px solid rgba(167, 139, 250, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 38,
                  color: HTTP_HTTPS_COLORS.accentPurple,
                  boxShadow: "0 0 30px rgba(167, 139, 250, 0.4)",
                }}
              >
                <FaShieldAlt />
              </div>

              {/* Gauges (No text) */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 30,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor:
                        i < 4 ? HTTP_HTTPS_COLORS.accentViolet : "rgba(255, 255, 255, 0.15)",
                      boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.accentViolet}`,
                    }}
                  />
                ))}
              </div>

              {/* Status Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: HTTP_HTTPS_COLORS.accentViolet,
                    boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.accentViolet}`,
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    maxWidth: 110,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── BOTTOM DYNAMIC OPTICAL SCAN BAR ── */}
          <div
            style={{
              width: "85%",
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${interpolate(localFrame, [0, 61], [0, 75])}%`,
                width: "28%",
                borderRadius: 5,
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(251, 113, 133, 0.9) 50%, rgba(167, 139, 250, 0.9) 100%)",
                boxShadow: "0 0 16px rgba(251, 113, 133, 0.6)",
              }}
            />
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
