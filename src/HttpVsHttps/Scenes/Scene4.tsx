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
  FaLaptopCode,
  FaLock,
  FaQuestion,
  FaServer,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 4: Frames 206 - 370, Duration = 164 frames / ~5.47s)
  //
  // Naskah Lines 6-7:
  // Line 6 (Voiceover: 6.88s - 8.42s / localFrame 0 - 56):
  // "Apakah sisi orang yang mengakses, "
  //
  // Line 7 (Voiceover: 8.74s - 11.27s / localFrame 56 - 164):
  // "atau dari sisi developer yang mengelola website tersebut?"
  //
  // 💥 CLEAN SIGHTLINE REFINEMENTS:
  // - Zero outside text: ONLY script words in headlines
  // - Upright 0deg tilt: Flat symmetrical cards, no awkward cardboard slant
  // - Generous gap (56px) between headline text and illustration cards
  // - Real camera tracking across dual viewpoints via InfiniteCameraRig
  // - Dead-center layout (X = 540px, Y = 960px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 4 (0 to 164)
  const localFrame = Math.max(0, frame - 206);

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [156, 164], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 10, 156, 164], [0.95, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ─── SPRINGS FOR PHASE 1 (Line 6: "Apakah sisi orang yang mengakses,") ───
  const spTopBadge = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  // "Apakah" (~localFrame 0 - 14)
  const spApakah = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 170 },
  });

  // "sisi orang yang mengakses," (~localFrame 10 - 32)
  const spOrangMengakses = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 12, mass: 0.75, stiffness: 190 },
  });

  // ─── SPRINGS FOR PHASE 2 (Line 7: "atau dari sisi developer yang mengelola website tersebut?") ───
  const p2LocalFrame = Math.max(0, localFrame - 56);

  // "atau" (~localFrame 56 - 70)
  const spAtau = spring({
    frame: p2LocalFrame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 180 },
  });

  // "dari sisi developer" (~localFrame 68 - 92)
  const spDeveloper = spring({
    frame: Math.max(0, p2LocalFrame - 12),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // "yang mengelola website tersebut?" (~localFrame 86 - 116)
  const spWebsiteTersebut = spring({
    frame: Math.max(0, p2LocalFrame - 30),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 210 },
  });

  // Phase Shift Progress (0: User active, 1: Developer active)
  const phaseProgress = interpolate(localFrame, [54, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Upright Card Focus Dynamics (Flat 0deg tilt, NO rotateY)
  const userCardScale = interpolate(phaseProgress, [0, 1], [1.02, 0.96]);
  const userCardOpacity = interpolate(phaseProgress, [0, 1], [1.0, 0.45]);

  const devCardScale = interpolate(phaseProgress, [0, 1], [0.96, 1.02]);
  const devCardOpacity = interpolate(phaseProgress, [0, 1], [0.45, 1.0]);

  // Subtle organic float micro-motion (±3px)
  const floatUserY = Math.sin((localFrame * Math.PI) / 30) * 3;
  const floatDevY = Math.cos((localFrame * Math.PI) / 30) * 3;

  // Center vertical traveling photon pulse
  const photonBeamY = interpolate(
    Math.sin((localFrame * Math.PI) / 18),
    [-1, 1],
    [15, 85]
  );

  // Expanding shockwave ripple on Phase 2 transition
  const shockwaveDevProgress = interpolate(localFrame, [60, 88], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const shockwaveDevScale = interpolate(shockwaveDevProgress, [0, 1], [0.8, 1.8]);
  const shockwaveDevOpacity = interpolate(shockwaveDevProgress, [0, 0.2, 1], [0, 0.6, 0]);

  const pulseCycle = Math.sin(localFrame * 0.26) * 0.5 + 0.5;

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translateY(-35px)`,
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
          {/* User Side Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color:
                phaseProgress < 0.5
                  ? HTTP_HTTPS_COLORS.httpsCyan
                  : HTTP_HTTPS_COLORS.textMuted,
            }}
          >
            <FaUser size={14} />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  phaseProgress < 0.5
                    ? HTTP_HTTPS_COLORS.httpsCyan
                    : "rgba(255, 255, 255, 0.2)",
                boxShadow:
                  phaseProgress < 0.5
                    ? `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`
                    : "none",
              }}
            />
          </div>

          {/* Dynamic Switch Arrow */}
          <FaExchangeAlt
            size={12}
            color={HTTP_HTTPS_COLORS.textSecondary}
            style={{
              transform: `rotate(${interpolate(phaseProgress, [0, 1], [0, 180])}deg)`,
            }}
          />

          {/* Developer Side Indicator */}
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
            <FaLaptopCode size={15} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINES 6 & 7) ─── */}
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
          {/* ── PHASE 1 HEADLINE: "Apakah sisi orang yang mengakses," ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: interpolate(phaseProgress, [0, 0.5], [1, 0]),
              transform: `translateY(${interpolate(phaseProgress, [0, 1], [0, -18])}px)`,
              pointerEvents: phaseProgress > 0.5 ? "none" : "auto",
            }}
          >
            {/* Row 1: "Apakah" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 42,
                fontWeight: 700,
                color: HTTP_HTTPS_COLORS.textSecondary,
                letterSpacing: 0.5,
                opacity: interpolate(spApakah, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spApakah, [0, 1], [14, 0])}px)`,
                display: "inline-block",
                textShadow: "0 2px 14px rgba(0,0,0,0.5)",
              }}
            >
              Apakah
            </span>

            {/* Row 2: "sisi orang yang mengakses," */}
            <div
              style={{
                opacity: interpolate(spOrangMengakses, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spOrangMengakses, [0, 1], [1.12, 1])}) translateY(${interpolate(spOrangMengakses, [0, 1], [14, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, #a5f3fc 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(56, 189, 248, 0.5))",
                  display: "inline-block",
                }}
              >
                sisi orang yang mengakses,
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spOrangMengakses, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsCyan} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>

          {/* ── PHASE 2 HEADLINE: "atau dari sisi developer yang mengelola website tersebut?" ── */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: interpolate(phaseProgress, [0.4, 1], [0, 1]),
              transform: `translateY(${interpolate(phaseProgress, [0, 1], [18, 0])}px)`,
              pointerEvents: phaseProgress <= 0.5 ? "none" : "auto",
            }}
          >
            {/* Top Row: "atau dari sisi developer" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
              }}
            >
              {/* "atau" */}
              <div
                style={{
                  opacity: interpolate(spAtau, [0, 1], [0, 1]),
                  transform: `scale(${interpolate(spAtau, [0, 1], [1.25, 1])})`,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 14px",
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
                  atau
                </span>
              </div>

              {/* "dari sisi developer" */}
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 54,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 24px rgba(16, 185, 129, 0.5))",
                  opacity: interpolate(spDeveloper, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(spDeveloper, [0, 1], [14, 0])}px)`,
                  display: "inline-block",
                }}
              >
                dari sisi developer
              </span>
            </div>

            {/* Bottom Row: "yang mengelola website tersebut?" */}
            <div
              style={{
                opacity: interpolate(spWebsiteTersebut, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spWebsiteTersebut, [0, 1], [0.94, 1])}) translateY(${interpolate(spWebsiteTersebut, [0, 1], [12, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 42,
                  fontWeight: 700,
                  color: "#f8fafc",
                  letterSpacing: -0.3,
                  textShadow: "0 2px 14px rgba(0,0,0,0.5)",
                }}
              >
                yang mengelola website tersebut?
              </span>

              {/* Glowing Accent Underline Beam */}
              <div
                style={{
                  width: `${interpolate(spWebsiteTersebut, [0, 1], [0, 100])}%`,
                  height: 3,
                  borderRadius: 1.5,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: 6,
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── 3. DUAL-VIEWPOINT INTERROGATION STAGE (GENEROUS GAP: marginTop 56px) ─── */}
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
              CARD A (LEFT): ORANG YANG MENGAKSES (CLIENT / BROWSER)
              - 0deg upright (NO rotateY tilt)
              - Perfectly symmetrical with Card B
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              height: 430,
              borderRadius: 26,
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: `1.5px solid rgba(56, 189, 248, ${phaseProgress < 0.5 ? 0.65 : 0.18})`,
              boxShadow:
                phaseProgress < 0.5
                  ? `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(56, 189, 248, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                  : "0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `translateY(${floatUserY}px) scale(${userCardScale})`,
              opacity: userCardOpacity,
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Header: User Avatar & Iris Tracking Reticle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    border: "1.5px solid rgba(56, 189, 248, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    color: HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: `0 6px 20px rgba(56, 189, 248, ${0.4 * pulseCycle})`,
                  }}
                >
                  <FaUser />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                        boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                      }}
                    />
                    <FaEye size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                  </div>
                  <div
                    style={{
                      width: 56,
                      height: 5,
                      borderRadius: 2.5,
                      backgroundColor: "rgba(56, 189, 248, 0.4)",
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
                        i < 3 ? HTTP_HTTPS_COLORS.httpsCyan : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i < 3 ? `0 0 8px ${HTTP_HTTPS_COLORS.httpsCyan}` : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Visual Browser Window & URL Mockup */}
            <div
              style={{
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 10,
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <FaLock size={13} color={HTTP_HTTPS_COLORS.httpsGreen} />
              <FaGlobe size={13} color={HTTP_HTTPS_COLORS.httpsCyan} />
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(56, 189, 248, 0.35)",
                }}
              />
              <FaCheck size={12} color={HTTP_HTTPS_COLORS.httpsGreen} />
            </div>

            {/* Visual Client Data Packet Stream (No Text) */}
            <div
              style={{
                flex: 1,
                margin: "12px 0",
                borderRadius: 16,
                backgroundColor: "rgba(56, 189, 248, 0.06)",
                border: "1px dashed rgba(56, 189, 248, 0.3)",
                padding: "16px 14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              {/* Row 1: Active packet transfer */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`,
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
                      width: `${interpolate(Math.sin((localFrame * Math.PI) / 12), [-1, 1], [35, 95])}%`,
                      height: "100%",
                      borderRadius: 3,
                      backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                      boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Encrypted packet blocks */}
              <div style={{ display: "flex", gap: 8 }}>
                {[55, 85, 70, 45].map((w, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: w,
                      height: 14,
                      borderRadius: 6,
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
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
                        i === 0 ? HTTP_HTTPS_COLORS.httpsCyan : "rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        i === 0 ? `0 0 8px ${HTTP_HTTPS_COLORS.httpsCyan}` : "none",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: 76,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(56, 189, 248, 0.3)",
                }}
              />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CENTER CONDUIT: VERTICAL LASER & PHOTON CROSS-BEAM
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
            {/* Vertical Laser Conduit Line */}
            <div
              style={{
                position: "absolute",
                top: 25,
                bottom: 25,
                width: 2,
                background:
                  "linear-gradient(180deg, rgba(56, 189, 248, 0.5) 0%, rgba(167, 139, 250, 0.8) 50%, rgba(16, 185, 129, 0.5) 100%)",
              }}
            >
              {/* Traveling Photon Pulse on Vertical Line */}
              <div
                style={{
                  position: "absolute",
                  left: -5,
                  top: `${photonBeamY}%`,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow:
                    "0 0 16px #ffffff, 0 0 24px rgba(167, 139, 250, 0.9)",
                  transform: "translateY(-50%)",
                }}
              />
            </div>

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
                color:
                  phaseProgress < 0.5
                    ? HTTP_HTTPS_COLORS.httpsCyan
                    : HTTP_HTTPS_COLORS.httpsMint,
                boxShadow:
                  phaseProgress < 0.5
                    ? "0 0 25px rgba(56, 189, 248, 0.5)"
                    : "0 0 25px rgba(16, 185, 129, 0.5)",
              }}
            >
              <FaQuestion size={16} />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CARD B (RIGHT): DEVELOPER YANG MENGELOLA WEBSITE (SERVER / INFRA)
              - 0deg upright (NO rotateY tilt)
              - Perfectly symmetrical with Card A
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              height: 430,
              borderRadius: 26,
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: `1.5px solid rgba(16, 185, 129, ${phaseProgress >= 0.5 ? 0.65 : 0.18})`,
              boxShadow:
                phaseProgress >= 0.5
                  ? `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(16, 185, 129, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                  : "0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `translateY(${floatDevY}px) scale(${devCardScale})`,
              opacity: devCardOpacity,
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Expanding Shockwave on Activation */}
            {shockwaveDevOpacity > 0 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 26,
                  border: "2px solid #34d399",
                  transform: `scale(${shockwaveDevScale})`,
                  opacity: shockwaveDevOpacity,
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Header: Developer Terminal Hub & Encrypted Shield */}
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
                  <FaLaptopCode />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                        boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                      }}
                    />
                    <FaShieldAlt size={15} color={HTTP_HTTPS_COLORS.httpsMint} />
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

            {/* Visual Server Architecture Rack (No Text) */}
            <div
              style={{
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 10,
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <FaServer size={14} color={HTTP_HTTPS_COLORS.httpsMint} />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2, 3].map((slot) => (
                  <div
                    key={slot}
                    style={{
                      flex: 1,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor:
                        slot < 3 ? "rgba(16, 185, 129, 0.35)" : "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: HTTP_HTTPS_COLORS.httpsGreen,
                  boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsGreen}`,
                }}
              />
            </div>

            {/* Visual Server Database Matrix Stream (No Text) */}
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
                position: "relative",
              }}
            >
              {/* Row 1: Active server packet transfer */}
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
                      width: `${interpolate(Math.cos((localFrame * Math.PI) / 12), [-1, 1], [40, 98])}%`,
                      height: "100%",
                      borderRadius: 3,
                      backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                      boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Encrypted server security matrix bars */}
              <div style={{ display: "flex", gap: 8 }}>
                {[45, 70, 90, 55].map((w, idx) => (
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
