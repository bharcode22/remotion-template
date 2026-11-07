import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCompass,
  FaCrosshairs,
  FaEye,
  FaLaptopCode,
  FaQuestion,
  FaServer,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 3: Frames 147 - 206, Duration = 59 frames)
  //
  // Line 4 (Voiceover: 4.90s - 6.19s / F147 - F186, pause to F206):
  // "Aman dari sisi siapa.?"
  //
  // 💥 REVAMPED UPRIGHT & SYMMETRICAL MOTION:
  // - Upright 0deg tilt: Flat, clean, symmetrical modern frosted glass cards
  // - Generous gap (52px) between headline text and illustration stage
  // - Sweeping Conical Searchlight Beam interrogating the viewpoints
  // - Kinetic Typography: Emerald surge on "Aman", tracking expand on "dari sisi",
  //   Violet Question Shockwave on "siapa.?"
  // - DEAD CENTER (X = 540px, Y = 960px)
  // - ZERO text outside script
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 3 (0 to 59)
  const localFrame = Math.max(0, frame - 147);

  // Scene Entrance & Dissolve Exit (localFrame 0 to 59)
  const sceneEntrance = interpolate(localFrame, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [52, 59], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 8, 52, 59], [0.94, 1, 1, 0.98], {
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

  // 2. Kinetic Headline Springs
  // "Aman" (~localFrame 0 - 14)
  const spWordAman = spring({
    frame: localFrame,
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // "dari sisi" (~localFrame 10 - 24)
  const spWordDariSisi = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 140 },
  });

  // "siapa.?" (~localFrame 22 - 38)
  const spWordSiapa = spring({
    frame: Math.max(0, localFrame - 22),
    fps,
    config: { damping: 10, mass: 0.7, stiffness: 220 },
  });

  // 3. Central Stage & Viewpoint Springs
  const spCardStage = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 150 },
  });

  const spViewpointLeft = spring({
    frame: Math.max(0, localFrame - 10),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 160 },
  });

  const spViewpointRight = spring({
    frame: Math.max(0, localFrame - 14),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 160 },
  });

  // Searchlight Beam Angle Sweep (-24deg to +24deg)
  const searchlightAngle = interpolate(
    localFrame,
    [0, 18, 38, 59],
    [-24, 16, -12, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    }
  );

  // Expanding Shockwave on "siapa.?"
  const shockwaveSiapaProgress = interpolate(localFrame, [22, 44], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const shockwaveSiapaScale = interpolate(shockwaveSiapaProgress, [0, 1], [0.8, 1.8]);
  const shockwaveSiapaOpacity = interpolate(
    shockwaveSiapaProgress,
    [0, 0.2, 1],
    [0, 0.75, 0]
  );

  // Symmetrical Organic Floating (±3px, upright 0deg)
  const floatUserY = Math.sin((localFrame * Math.PI) / 20) * 3;
  const floatDevY = Math.cos((localFrame * Math.PI) / 20) * 3;

  const pulseQuestion = Math.sin(localFrame * 0.32) * 0.5 + 0.5;

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
        {/* ─── 1. TOP DUAL-PERSPECTIVE RADAR BADGE (No Outside Text) ─── */}
        <div
          style={{
            transform: `scale(${interpolate(spTopEmblem, [0, 1], [0.85, 1])}) translateY(${interpolate(spTopEmblem, [0, 1], [-18, 0])}px)`,
            opacity: interpolate(spTopEmblem, [0, 1], [0, 1]),
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
          {/* User Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: HTTP_HTTPS_COLORS.httpsCyan,
            }}
          >
            <FaUser size={13} />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
                boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`,
              }}
            />
          </div>

          <FaCompass size={14} color={HTTP_HTTPS_COLORS.accentViolet} />

          {/* Dev / Server Icon */}
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
            <FaLaptopCode size={14} />
          </div>
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE: "Aman dari sisi siapa.?" (STRICTLY LINE 4) ─── */}
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
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 16,
              flexWrap: "nowrap",
            }}
          >
            {/* Word 1: "Aman" */}
            <div
              style={{
                opacity: interpolate(spWordAman, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spWordAman, [0, 1], [1.2, 1])})`,
                filter: `drop-shadow(0 0 ${interpolate(spWordAman, [0, 1], [28, 16])}px rgba(16, 185, 129, 0.6))`,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 66,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Aman
              </span>
            </div>

            {/* Words: "dari sisi" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 54,
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: "-0.5px",
                textShadow: "0 4px 20px rgba(0,0,0,0.55)",
                opacity: interpolate(spWordDariSisi, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spWordDariSisi, [0, 1], [14, 0])}px)`,
                display: "inline-block",
              }}
            >
              dari sisi
            </span>

            {/* Word: "siapa.?" */}
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Expanding Shockwave */}
              {shockwaveSiapaOpacity > 0 && (
                <div
                  style={{
                    position: "absolute",
                    width: 140,
                    height: 70,
                    borderRadius: 24,
                    border: `2px solid ${HTTP_HTTPS_COLORS.accentViolet}`,
                    transform: `scale(${shockwaveSiapaScale})`,
                    opacity: shockwaveSiapaOpacity,
                    pointerEvents: "none",
                  }}
                />
              )}

              <div
                style={{
                  opacity: interpolate(spWordSiapa, [0, 1], [0, 1]),
                  transform: `scale(${interpolate(spWordSiapa, [0, 1], [1.3, 1])})`,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 20px",
                  borderRadius: 18,
                  backgroundColor: "rgba(167, 139, 250, 0.18)",
                  border: `1.5px solid rgba(167, 139, 250, ${0.4 + pulseQuestion * 0.35})`,
                  boxShadow: "0 10px 30px rgba(167, 139, 250, 0.35)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 66,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.accentViolet} 0%, ${HTTP_HTTPS_COLORS.httpsCyan} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 26px rgba(167, 139, 250, 0.55))",
                    display: "inline-block",
                  }}
                >
                  siapa.?
                </span>
              </div>
            </div>
          </div>

          {/* Underline Beam */}
          <div
            style={{
              width: `${interpolate(spWordSiapa, [0, 1], [0, 480])}px`,
              height: 3.5,
              borderRadius: 2,
              background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsGreen} 30%, ${HTTP_HTTPS_COLORS.accentViolet} 70%, transparent 100%)`,
              boxShadow: `0 0 14px ${HTTP_HTTPS_COLORS.accentViolet}`,
              marginTop: 4,
            }}
          />
        </div>

        {/* ─── 3. DUAL-PERSPECTIVE INTERROGATION STAGE: UPRIGHT 0deg CARDS (GENEROUS GAP: marginTop 48px) ─── */}
        <div
          style={{
            width: 940,
            display: "grid",
            gridTemplateColumns: "435px 70px 435px",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            marginTop: 48, // GENEROUS GAP TO HEADLINE TEXT
            opacity: interpolate(spCardStage, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(spCardStage, [0, 1], [24, 0])}px)`,
          }}
        >
          {/* Sweeping Dynamic Searchlight Spotlight Cone */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              width: 500,
              height: 700,
              transformOrigin: "top center",
              transform: `translateX(-50%) rotate(${searchlightAngle}deg)`,
              background:
                "conic-gradient(from 170deg at 50% 0%, transparent 0deg, rgba(167, 139, 250, 0.16) 10deg, rgba(56, 189, 248, 0.22) 20deg, transparent 30deg)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          {/* ═════════════════════════════════════════════════════════════
              VIEWPOINT A (LEFT): CLIENT / USER (Orang yang Mengakses)
              - Upright 0deg (NO rotateY)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              height: 430,
              borderRadius: 26,
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(56, 189, 248, 0.45)",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              opacity: interpolate(spViewpointLeft, [0, 1], [0, 1]),
              transform: `translateY(${floatUserY}px) scale(${interpolate(spViewpointLeft, [0, 1], [0.94, 1])})`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Indicator Header */}
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
                    boxShadow: `0 6px 20px rgba(56, 189, 248, ${0.4 * pulseQuestion})`,
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
                        boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsCyan}`,
                      }}
                    />
                    <FaEye size={14} color={HTTP_HTTPS_COLORS.httpsCyan} />
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

            {/* Omnibox Bar Mockup */}
            <div
              style={{
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <FaShieldAlt size={13} color={HTTP_HTTPS_COLORS.httpsCyan} />
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(56, 189, 248, 0.35)",
                }}
              />
              <FaCrosshairs size={13} color={HTTP_HTTPS_COLORS.httpsCyan} />
            </div>

            {/* Data Stream Visual */}
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
              }}
            >
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
                      width: `${interpolate(Math.sin((localFrame * Math.PI) / 12), [-1, 1], [30, 85])}%`,
                      height: "100%",
                      borderRadius: 3,
                      backgroundColor: HTTP_HTTPS_COLORS.httpsCyan,
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
              CENTER CONDUIT: QUESTION ORBIT NODE
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
                background: `linear-gradient(180deg, ${HTTP_HTTPS_COLORS.httpsCyan} 0%, ${HTTP_HTTPS_COLORS.accentViolet} 50%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
              }}
            />

            {/* Center Dynamic Orbit Node */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: `1.5px solid ${HTTP_HTTPS_COLORS.accentViolet}`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: HTTP_HTTPS_COLORS.accentViolet,
                boxShadow: `0 0 25px rgba(167, 139, 250, 0.5)`,
              }}
            >
              <FaQuestion size={18} />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              VIEWPOINT B (RIGHT): SERVER / DEVELOPER (Sisi Developer)
              - Upright 0deg (NO rotateY)
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
              boxSizing: "border-box",
              opacity: interpolate(spViewpointRight, [0, 1], [0, 1]),
              transform: `translateY(${floatDevY}px) scale(${interpolate(spViewpointRight, [0, 1], [0.94, 1])})`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Indicator Header */}
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
                    boxShadow: `0 6px 20px rgba(16, 185, 129, ${0.4 * pulseQuestion})`,
                  }}
                >
                  <FaServer />
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

            {/* Server Rack Bar Mockup */}
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

            {/* Data Stream Visual */}
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
                      width: `${interpolate(Math.cos((localFrame * Math.PI) / 12), [-1, 1], [35, 95])}%`,
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
