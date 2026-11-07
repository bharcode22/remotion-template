import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaKey,
  FaLaptopCode,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_HTTPS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 5: Frames 370 - 604, Duration = 234 frames / ~7.80s)
  //
  // Naskah Lines 9-11:
  // Line 9 (Voiceover: 12.50s - 13.68s / localFrame 5 - 40):
  // "Dari sisi developer, "
  //
  // Line 10 (Voiceover: 13.95s - 16.10s / localFrame 48 - 113):
  // "HTTPS memang memberikan keamanan lebih"
  //
  // Line 11 (Voiceover: 16.65s - 19.75s / localFrame 128 - 222):
  // "karena data yang dikirimkan antara browser dan server dienkripsi."
  //
  // ✨ CLEAN, UPRIGHT (0° TILT), ARCHITECTURAL SYMMETRY (NO MENUMPUL / NO CLUTTER)
  // ✨ DEAD CENTER (X = 540px, Y = 960px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 5 (0 to 234)
  const localFrame = Math.max(0, frame - 370);

  // Scene Entrance & Dissolve Exit
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [226, 234], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [0, 10, 226, 234], [0.96, 1, 1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Top Minimalist Badge Spring
  const spTopBadge = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  // ─── PHASE 1 SPRINGS (Line 9: "Dari sisi developer,") ───
  const spDariSisi = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 150 },
  });

  const spDeveloper = spring({
    frame: Math.max(0, localFrame - 14),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // ─── PHASE 2 SPRINGS (Line 10: "HTTPS memang memberikan keamanan lebih") ───
  const p2LocalFrame = Math.max(0, localFrame - 48);

  const spHttps = spring({
    frame: p2LocalFrame,
    fps,
    config: { damping: 10, mass: 0.65, stiffness: 240 },
  });

  const spMemangMemberikan = spring({
    frame: Math.max(0, p2LocalFrame - 16),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  const spKeamananLebih = spring({
    frame: Math.max(0, p2LocalFrame - 32),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 200 },
  });

  // ─── PHASE 3 SPRINGS (Line 11: "karena data yang dikirimkan antara browser dan server dienkripsi.") ───
  const p3LocalFrame = Math.max(0, localFrame - 128);

  const spKarenaData = spring({
    frame: p3LocalFrame,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 150 },
  });

  const spAntaraBrowser = spring({
    frame: Math.max(0, p3LocalFrame - 16),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 150 },
  });

  const spDienkripsi = spring({
    frame: Math.max(0, p3LocalFrame - 38),
    fps,
    config: { damping: 10, mass: 0.7, stiffness: 230 },
  });

  // ─── STAGE MORPHING TRANSITIONS ───
  const stageMorph1 = interpolate(localFrame, [44, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const stageMorph2 = interpolate(localFrame, [122, 132], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Screen shake on "HTTPS" explosive slam
  const shakeDecay = Math.max(0, 1 - (localFrame - 48) / 12);
  const screenShakeX =
    localFrame >= 48 && localFrame <= 60
      ? Math.sin((localFrame - 48) * 3) * shakeDecay * 8
      : 0;
  const screenShakeY =
    localFrame >= 48 && localFrame <= 60
      ? Math.cos((localFrame - 48) * 3.4) * shakeDecay * 5
      : 0;

  // Expanding shockwave on "HTTPS" in Phase 2
  const shockwaveHttpsProgress = interpolate(localFrame, [48, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const shockwaveHttpsScale = interpolate(shockwaveHttpsProgress, [0, 1], [0.6, 2.3]);
  const shockwaveHttpsOpacity = interpolate(shockwaveHttpsProgress, [0, 0.2, 1], [0, 0.8, 0]);

  // Expanding shockwave on "dienkripsi." in Phase 3
  const shockwaveCipherProgress = interpolate(localFrame, [166, 196], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const shockwaveCipherScale = interpolate(shockwaveCipherProgress, [0, 1], [0.6, 2.4]);
  const shockwaveCipherOpacity = interpolate(shockwaveCipherProgress, [0, 0.2, 1], [0, 0.85, 0]);

  // Security level gauge fill in Phase 2
  const securityGauge = interpolate(localFrame, [48, 85], [20, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Traveling Cipher Packets Stream in Phase 3
  const packetCycle1 = (localFrame * 5) % 100;
  const packetCycle2 = (localFrame * 5 + 50) % 100;

  // Rotating cipher lock reticle
  const lockRotation = interpolate(localFrame, [0, 234], [0, 360]);
  const pulseCycle = Math.sin(localFrame * 0.28) * 0.5 + 0.5;

  return (
    <SceneContainer
      padding="0"
      style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale}) translate(${screenShakeX}px, ${screenShakeY}px)`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY & HORIZONTALLY CENTERED WRAPPER (DEAD CENTER)
          Canvas: 1080 x 1920
          Wrapper: Width 960 (60px margins on left and right)
         ───────────────────────────────────────────────────────────── */}
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
        {/* ─── 1. TOP MINIMALIST FROSTED GLASS BADGE (No Outside Text) ─── */}
        <div
          style={{
            transform: `scale(${interpolate(spTopBadge, [0, 1], [0.85, 1])}) translateY(${interpolate(spTopBadge, [0, 1], [-20, 0])}px)`,
            opacity: interpolate(spTopBadge, [0, 1], [0, 1]),
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "10px 26px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1.5px solid rgba(16, 185, 129, ${0.35 + pulseCycle * 0.3})`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.35), 0 0 25px rgba(16, 185, 129, ${0.18 + pulseCycle * 0.2})`,
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
          <FaLaptopCode size={16} color={HTTP_HTTPS_COLORS.httpsMint} />
          <div
            style={{
              width: 1,
              height: 14,
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            }}
          />
          <FaShieldAlt size={15} color={HTTP_HTTPS_COLORS.httpsGreen} />
          <div
            style={{
              width: 1,
              height: 14,
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            }}
          />
          <FaLock size={14} color={HTTP_HTTPS_COLORS.httpsCyan} />
        </div>

        {/* ─── 2. DYNAMIC KINETIC SPOKEN HEADLINE (STRICTLY LINES 9 - 11) ─── */}
        <div
          style={{
            width: "100%",
            minHeight: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* ════ PHASE 1 HEADLINE (Line 9: "Dari sisi developer,") ════ */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              opacity: interpolate(stageMorph1, [0, 0.7], [1, 0]),
              transform: `translateY(${interpolate(stageMorph1, [0, 1], [0, -18])}px)`,
              pointerEvents: stageMorph1 > 0.5 ? "none" : "auto",
            }}
          >
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 54,
                fontWeight: 700,
                color: HTTP_HTTPS_COLORS.textSecondary,
                letterSpacing: 0.5,
                opacity: interpolate(spDariSisi, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spDariSisi, [0, 1], [16, 0])}px)`,
                display: "inline-block",
              }}
            >
              Dari sisi
            </span>

            <div
              style={{
                opacity: interpolate(spDeveloper, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spDeveloper, [0, 1], [1.2, 1])}) translateY(${interpolate(spDeveloper, [0, 1], [18, 0])}px)`,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
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
                  filter: "drop-shadow(0 0 28px rgba(16, 185, 129, 0.55))",
                  display: "inline-block",
                }}
              >
                developer,
              </span>

              <div
                style={{
                  width: `${interpolate(spDeveloper, [0, 1], [0, 100])}%`,
                  height: 4,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 14px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: -2,
                }}
              />
            </div>
          </div>

          {/* ════ PHASE 2 HEADLINE (Line 10: "HTTPS memang memberikan keamanan lebih") ════ */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              opacity:
                stageMorph1 >= 0.5 && stageMorph2 < 0.5
                  ? interpolate(stageMorph1, [0.5, 1], [0, 1])
                  : interpolate(stageMorph2, [0, 0.7], [1, 0]),
              transform: `translateY(${
                stageMorph2 > 0
                  ? interpolate(stageMorph2, [0, 1], [0, -18])
                  : interpolate(stageMorph1, [0, 1], [18, 0])
              }px)`,
              pointerEvents:
                stageMorph1 >= 0.5 && stageMorph2 < 0.5 ? "auto" : "none",
            }}
          >
            {/* Row 1: "HTTPS memang memberikan" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {shockwaveHttpsOpacity > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      width: 140,
                      height: 60,
                      borderRadius: 20,
                      border: `2px solid ${HTTP_HTTPS_COLORS.httpsMint}`,
                      transform: `scale(${shockwaveHttpsScale})`,
                      opacity: shockwaveHttpsOpacity,
                      pointerEvents: "none",
                    }}
                  />
                )}
                <div
                  style={{
                    opacity: interpolate(spHttps, [0, 1], [0, 1]),
                    transform: `scale(${interpolate(spHttps, [0, 1], [1.35, 1])})`,
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 22px",
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: `1.5px solid rgba(16, 185, 129, 0.55)`,
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.35)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: 52,
                      fontWeight: 900,
                      background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 24px rgba(16, 185, 129, 0.5))",
                    }}
                  >
                    HTTPS
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 48,
                  fontWeight: 700,
                  color: HTTP_HTTPS_COLORS.textPrimary,
                  letterSpacing: -0.2,
                  opacity: interpolate(spMemangMemberikan, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(spMemangMemberikan, [0, 1], [14, 0])}px)`,
                  display: "inline-block",
                }}
              >
                memang memberikan
              </span>
            </div>

            {/* Row 2: "keamanan lebih" */}
            <div
              style={{
                opacity: interpolate(spKeamananLebih, [0, 1], [0, 1]),
                transform: `scale(${interpolate(spKeamananLebih, [0, 1], [1.12, 1])}) translateY(${interpolate(spKeamananLebih, [0, 1], [14, 0])}px)`,
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
                  background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsMint} 0%, ${HTTP_HTTPS_COLORS.httpsCyan} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 28px rgba(56, 189, 248, 0.5))",
                }}
              >
                keamanan lebih
              </span>

              <div
                style={{
                  width: `${interpolate(spKeamananLebih, [0, 1], [0, 100])}%`,
                  height: 3.5,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${HTTP_HTTPS_COLORS.httpsMint} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  marginTop: 3,
                }}
              />
            </div>
          </div>

          {/* ════ PHASE 3 HEADLINE (Line 11: "karena data yang dikirimkan antara browser dan server dienkripsi.") ════ */}
          {/* Pristine 3-Tier Symmetrical Hierarchy */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: interpolate(stageMorph2, [0.4, 1], [0, 1]),
              transform: `translateY(${interpolate(stageMorph2, [0, 1], [18, 0])}px)`,
              pointerEvents: stageMorph2 > 0.5 ? "auto" : "none",
            }}
          >
            {/* Row 1: Subtitle "karena data yang dikirimkan" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 38,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: 0.3,
                opacity: interpolate(spKarenaData, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spKarenaData, [0, 1], [10, 0])}px)`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              karena data yang dikirimkan
            </span>

            {/* Row 2: Endpoints "antara browser dan server" */}
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 46,
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: -0.2,
                opacity: interpolate(spAntaraBrowser, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(spAntaraBrowser, [0, 1], [10, 0])}px)`,
                display: "inline-block",
                textAlign: "center",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              antara browser dan server
            </span>

            {/* Row 3: Action "dienkripsi." (High-Impact Glowing Emerald Pill) */}
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              {shockwaveCipherOpacity > 0 && (
                <div
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 56,
                    borderRadius: 18,
                    border: `2px solid ${HTTP_HTTPS_COLORS.httpsMint}`,
                    transform: `scale(${shockwaveCipherScale})`,
                    opacity: shockwaveCipherOpacity,
                    pointerEvents: "none",
                  }}
                />
              )}
              <div
                style={{
                  opacity: interpolate(spDienkripsi, [0, 1], [0, 1]),
                  transform: `scale(${interpolate(spDienkripsi, [0, 1], [1.3, 1])})`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "4px 26px",
                  borderRadius: 18,
                  backgroundColor: "rgba(16, 185, 129, 0.22)",
                  border: "1.5px solid rgba(16, 185, 129, 0.6)",
                  boxShadow: "0 10px 35px rgba(16, 185, 129, 0.45)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <FaLock size={18} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 52,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    background: `linear-gradient(135deg, ${HTTP_HTTPS_COLORS.httpsGreen} 0%, ${HTTP_HTTPS_COLORS.httpsMint} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 26px rgba(16, 185, 129, 0.6))",
                  }}
                >
                  dienkripsi.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. SYMMETRICAL, UPRIGHT (0° TILT) VISUAL STAGE (Width: 960px, Height: 480px) ─── */}
        <div
          style={{
            width: 960,
            height: 480,
            borderRadius: 28,
            padding: "26px 30px",
            backgroundColor: "rgba(255, 255, 255, 0.07)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(32px) saturate(190%)",
            WebkitBackdropFilter: "blur(32px) saturate(190%)",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top Subtle Glass Rim Highlight */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: 1.5,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.45) 50%, transparent 100%)",
            }}
          />

          {/* ═════════════════════════════════════════════════════════════
              VIEW A (Phase 1): DEVELOPER CODE EDITOR & TOPOLOGY CENTER
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: "absolute",
              inset: "26px 30px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              opacity: interpolate(stageMorph1, [0, 0.6], [1, 0]),
              transform: `scale(${interpolate(stageMorph1, [0, 1], [1, 0.94])})`,
              pointerEvents: stageMorph1 > 0.5 ? "none" : "auto",
            }}
          >
            {/* Left Pane: Code IDE Terminal */}
            <div
              style={{
                borderRadius: 20,
                backgroundColor: "rgba(16, 185, 129, 0.06)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 14,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#fb7185" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#fbbf24" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#34d399" }} />
                </div>
                <FaCode size={15} color={HTTP_HTTPS_COLORS.httpsMint} />
              </div>

              {/* Code lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "8px 0" }}>
                {[
                  { w: "65%", c: HTTP_HTTPS_COLORS.httpsMint },
                  { w: "85%", c: HTTP_HTTPS_COLORS.httpsCyan },
                  { w: "75%", c: "#e2e8f0" },
                  { w: "50%", c: HTTP_HTTPS_COLORS.httpsMint },
                ].map((line, i) => (
                  <div key={i} style={{ width: line.w, height: 8, borderRadius: 4, backgroundColor: line.c, opacity: 0.7 }} />
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaTerminal size={14} color={HTTP_HTTPS_COLORS.httpsMint} />
                <div style={{ width: 80, height: 4, borderRadius: 2, backgroundColor: "rgba(16, 185, 129, 0.45)" }} />
              </div>
            </div>

            {/* Right Pane: Topology Network Node */}
            <div
              style={{
                borderRadius: 20,
                backgroundColor: "rgba(56, 189, 248, 0.06)",
                border: "1.5px solid rgba(56, 189, 248, 0.35)",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <FaNetworkWired size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
              </div>

              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 24,
                  backgroundColor: "rgba(56, 189, 248, 0.18)",
                  border: "1.5px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  color: HTTP_HTTPS_COLORS.httpsCyan,
                  boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
                }}
              >
                <FaServer />
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                {[12, 18, 24, 16].map((h, i) => (
                  <div key={i} style={{ width: 6, height: h, borderRadius: 3, backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                ))}
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              VIEW B (Phase 2): MASTER SECURITY VAULT SURGE (Line 10)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: "absolute",
              inset: "26px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              opacity:
                stageMorph1 >= 0.5 && stageMorph2 < 0.5
                  ? interpolate(stageMorph1, [0.5, 1], [0, 1])
                  : interpolate(stageMorph2, [0, 0.6], [1, 0]),
              transform: `scale(${
                stageMorph2 > 0
                  ? interpolate(stageMorph2, [0, 1], [1, 0.94])
                  : interpolate(stageMorph1, [0, 1], [0.94, 1])
              })`,
              pointerEvents:
                stageMorph1 >= 0.5 && stageMorph2 < 0.5 ? "auto" : "none",
            }}
          >
            {/* Top Vault Metrics Bar */}
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaShieldAlt size={16} color={HTTP_HTTPS_COLORS.httpsMint} />
                <div style={{ width: 70, height: 4, borderRadius: 2, backgroundColor: "rgba(52, 211, 153, 0.5)" }} />
              </div>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsMint, boxShadow: `0 0 12px ${HTTP_HTTPS_COLORS.httpsMint}` }} />
            </div>

            {/* Master Security Vault Core */}
            <div
              style={{
                position: "relative",
                width: 170,
                height: 170,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  border: "2px dashed rgba(16, 185, 129, 0.5)",
                  transform: `rotate(${lockRotation}deg)`,
                }}
              />
              <div
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "2px solid rgba(16, 185, 129, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 50,
                  color: "#ffffff",
                  boxShadow: "0 0 40px rgba(16, 185, 129, 0.7)",
                }}
              >
                <FaShieldAlt />
              </div>
            </div>

            {/* Bottom Security Level Surge Progress Bar */}
            <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: "100%",
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${securityGauge}%`,
                    height: "100%",
                    borderRadius: 4,
                    backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: `0 0 16px ${HTTP_HTTPS_COLORS.httpsMint}`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              VIEW C (Phase 3): LINE 11 END-TO-END ENCRYPTION TUNNEL
              Symmetrical 3-Column Architecture (Zero Menumpul / Zero Clutter)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: "absolute",
              inset: "26px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: interpolate(stageMorph2, [0.3, 1], [0, 1]),
              transform: `scale(${interpolate(stageMorph2, [0, 1], [0.95, 1])})`,
              pointerEvents: stageMorph2 > 0.5 ? "auto" : "none",
            }}
          >
            {/* Upper Browser Controls & TLS Active Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 12,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#fb7185" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#fbbf24" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#34d399" }} />
              </div>

              {/* Verified TLS Session Lock Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "4px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.16)",
                  border: "1px solid rgba(16, 185, 129, 0.45)",
                }}
              >
                <FaLock size={12} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <div
                  style={{
                    width: 130,
                    height: 5,
                    borderRadius: 2.5,
                    backgroundColor: "rgba(52, 211, 153, 0.6)",
                  }}
                />
              </div>

              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: HTTP_HTTPS_COLORS.httpsMint,
                  boxShadow: `0 0 10px ${HTTP_HTTPS_COLORS.httpsMint}`,
                }}
              />
            </div>

            {/* Symmetrical Middle Body: Browser Hub <---> Encrypted Conduit <---> Server Hub */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "250px 1fr 250px",
                gap: 24,
                alignItems: "center",
                padding: "16px 0",
                boxSizing: "border-box",
              }}
            >
              {/* Left Column: Browser Client Node */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                  border: "1.5px solid rgba(56, 189, 248, 0.35)",
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaGlobe size={15} color={HTTP_HTTPS_COLORS.httpsCyan} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                </div>

                {/* Symmetrical Browser Hub (Clean square, no overlapping blobs) */}
                <div
                  style={{
                    width: 82,
                    height: 82,
                    borderRadius: 22,
                    backgroundColor: "rgba(56, 189, 248, 0.18)",
                    border: "1.5px solid rgba(56, 189, 248, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 38,
                    color: HTTP_HTTPS_COLORS.httpsCyan,
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
                  }}
                >
                  <FaGlobe />
                </div>

                {/* Telemetry Signal Bars */}
                <div style={{ display: "flex", gap: 5 }}>
                  {[12, 18, 24, 16].map((h, i) => (
                    <div key={i} style={{ width: 6, height: h, borderRadius: 3, backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                  ))}
                </div>
              </div>

              {/* Center Column: End-to-End Cryptographic Scrambler Tunnel */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 22,
                  backgroundColor: "rgba(16, 185, 129, 0.09)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Upper Laser Conduit */}
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: 0,
                    right: 0,
                    height: 2,
                    background:
                      "linear-gradient(90deg, rgba(56, 189, 248, 0.5) 0%, rgba(16, 185, 129, 0.8) 50%, rgba(52, 211, 153, 0.5) 100%)",
                  }}
                >
                  {/* Moving Cipher Packet 1 */}
                  <div
                    style={{
                      position: "absolute",
                      top: -6,
                      left: `${packetCycle1}%`,
                      width: 14,
                      height: 14,
                      borderRadius: 4,
                      backgroundColor: "#ffffff",
                      border: "1.5px solid #10b981",
                      boxShadow: "0 0 14px #34d399",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>

                {/* Lower Laser Conduit */}
                <div
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: 0,
                    right: 0,
                    height: 2,
                    background:
                      "linear-gradient(90deg, rgba(56, 189, 248, 0.5) 0%, rgba(16, 185, 129, 0.8) 50%, rgba(52, 211, 153, 0.5) 100%)",
                  }}
                >
                  {/* Moving Cipher Packet 2 */}
                  <div
                    style={{
                      position: "absolute",
                      top: -6,
                      left: `${packetCycle2}%`,
                      width: 14,
                      height: 14,
                      borderRadius: 4,
                      backgroundColor: "#34d399",
                      border: "1.5px solid #ffffff",
                      boxShadow: "0 0 14px #34d399",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <FaShieldAlt size={14} color={HTTP_HTTPS_COLORS.httpsGreen} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsGreen }} />
                </div>

                {/* Central Encryption Core Lock */}
                <div
                  style={{
                    width: 86,
                    height: 86,
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                    border: "2px solid rgba(52, 211, 153, 0.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 38,
                    color: "#ffffff",
                    boxShadow: "0 0 35px rgba(16, 185, 129, 0.65)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <FaLock />
                </div>

                {/* Verification Pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "3px 14px",
                    borderRadius: 10,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.45)",
                    color: HTTP_HTTPS_COLORS.httpsMint,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <FaKey size={11} />
                  <div style={{ width: 40, height: 3, borderRadius: 1.5, backgroundColor: HTTP_HTTPS_COLORS.httpsMint }} />
                  <FaShieldAlt size={11} />
                </div>
              </div>

              {/* Right Column: Server Endpoint Node */}
              <div
                style={{
                  height: "100%",
                  borderRadius: 20,
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1.5px solid rgba(16, 185, 129, 0.35)",
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsMint }} />
                  <FaServer size={15} color={HTTP_HTTPS_COLORS.httpsMint} />
                </div>

                {/* Symmetrical Server Hub (Clean square, no overlapping blobs) */}
                <div
                  style={{
                    width: 82,
                    height: 82,
                    borderRadius: 22,
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 38,
                    color: HTTP_HTTPS_COLORS.httpsMint,
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
                  }}
                >
                  <FaServer />
                </div>

                {/* Telemetry Signal Bars */}
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
                <FaLock size={12} color={HTTP_HTTPS_COLORS.httpsGreen} />
                <div style={{ width: 90, height: 4, borderRadius: 2, backgroundColor: "rgba(16, 185, 129, 0.45)" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsCyan }} />
                <FaDatabase size={14} color={HTTP_HTTPS_COLORS.httpsMint} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: HTTP_HTTPS_COLORS.httpsMint }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 90, height: 4, borderRadius: 2, backgroundColor: "rgba(56, 189, 248, 0.45)" }} />
                <FaShieldAlt size={13} color={HTTP_HTTPS_COLORS.httpsGreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
