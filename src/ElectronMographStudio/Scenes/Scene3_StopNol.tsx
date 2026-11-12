import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CheckCircle2, ShieldCheck, Sparkles, XCircle } from "lucide-react";
import { MAIN_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";

interface WordConfig {
  text: string;
  start: number;
  end: number;
  color: string;
  isGreen?: boolean;
}

interface LineConfig {
  id: number;
  fontSize: number;
  words: WordConfig[];
}

const LINES_TIMELINE: LineConfig[] = [
  {
    id: 1,
    fontSize: 52,
    words: [
      { text: "NGGAK", start: 164, end: 170, color: "#F5F5F7" },
      { text: "PERLU", start: 170, end: 176, color: "#F5F5F7" },
      { text: "MEMBANGUN", start: 176, end: 184, color: "#F5F5F7" },
    ],
  },
  {
    id: 2,
    fontSize: 62,
    words: [
      { text: "SEMUANYA", start: 184, end: 192, color: "#F5F5F7" },
      { text: "DARI", start: 192, end: 198, color: STUDIO_THEME.appleGreen, isGreen: true },
      { text: "NOL!", start: 198, end: 206, color: STUDIO_THEME.appleGreen, isGreen: true },
    ],
  },
];

export const Scene3_StopNol: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // STAGE 1 (Frame 156-172): STOP! Stamp (100% Level, No Tilt!)
  // ==========================================
  const stampSpring = spring({
    frame: frame - 156,
    fps,
    config: { damping: 10, stiffness: 150, mass: 0.75 },
  });
  const stampScale = interpolate(stampSpring, [0, 1], [1.7, 1]);
  const stampOpacity = interpolate(stampSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 3 (Frame 184-202): Emerald Shield Core Pop
  // ==========================================
  const shieldSpring = spring({
    frame: frame - 184,
    fps,
    config: { damping: 11, stiffness: 130, mass: 0.8 },
  });
  const shieldScale = interpolate(shieldSpring, [0, 1], [0, 1]);

  // ==========================================
  // STAGE 3B (Frame 192-210): Mobile Card 1 (Kode Aman)
  // ==========================================
  const card1Spring = spring({
    frame: frame - 192,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.85 },
  });
  const card1Y = interpolate(card1Spring, [0, 1], [50, 0]);
  const card1Opacity = interpolate(card1Spring, [0, 0.4, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 4 (Frame 208-224): Mobile Card 2 (Waktu Rilis)
  // ==========================================
  const card2Spring = spring({
    frame: frame - 208,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.85 },
  });
  const card2Y = interpolate(card2Spring, [0, 1], [50, 0]);
  const card2Opacity = interpolate(card2Spring, [0, 0.4, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 5 (Frame 222-238): Rejection Banner (Tanpa Rewrite C++)
  // ==========================================
  const rejectSpring = spring({
    frame: frame - 222,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const rejectScale = interpolate(rejectSpring, [0, 1], [0.85, 1]);
  const rejectOpacity = interpolate(rejectSpring, [0, 0.4, 1], [0, 1, 1]);

  // Continuous Subtle Breathing Float (Zero tilt, pure Y axis)
  const floatY = Math.sin(frame * 0.06) * 5;
  const isCursorBlinking = Math.sin(frame * 0.5) > -0.15;

  // Active cursor tracking for typewriter headline
  let activeCursorWordText = "";
  LINES_TIMELINE.forEach((line) => {
    line.words.forEach((w) => {
      if (frame >= w.start && frame <= w.end + 2) {
        activeCursorWordText = w.text;
      }
    });
  });

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: MAIN_FONT_FAMILY,
        overflow: "hidden",
      }}
    >
      {/* 1. GIANT 3D 'STOP!' BADGE (100% Upright, Perfectly Level, No Rotation) */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          transform: `scale(${stampScale})`,
          opacity: stampOpacity,
          zIndex: 40,
        }}
      >
        <div
          style={{
            padding: "16px 56px",
            borderRadius: 24,
            background: STUDIO_THEME.appleRed,
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 950,
            letterSpacing: 4,
            boxShadow: "0 25px 60px -10px rgba(255, 69, 58, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
            border: "2px solid rgba(255, 255, 255, 0.25)",
            textTransform: "uppercase",
            fontFamily: MAIN_FONT_FAMILY,
          }}
        >
          🛑 STOP!
        </div>
      </div>

      {/* 2. KINETIC TYPEWRITER & OPTICAL UNBLUR HEADLINE */}
      <div
        style={{
          position: "absolute",
          top: 380,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          zIndex: 30,
        }}
      >
        {LINES_TIMELINE.map((line) => {
          const hasAnyWordStarted = line.words.some((w) => frame >= w.start - 8);
          if (!hasAnyWordStarted) return null;

          return (
            <div
              key={line.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                lineHeight: 1.12,
              }}
            >
              {line.words.map((word) => {
                const hasStarted = frame >= word.start;

                // Ghost blurred silhouette before appearing
                const ghostBlur = interpolate(frame, [word.start - 8, word.start], [16, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                const ghostOpacity = interpolate(frame, [word.start - 8, word.start], [0, 0.12], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });

                return (
                  <span
                    key={word.text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: line.fontSize,
                      fontWeight: 950,
                      letterSpacing: -1.5,
                      position: "relative",
                    }}
                  >
                    {/* Ghost Blurred underlayer */}
                    {!hasStarted && (
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          color: word.color,
                          opacity: ghostOpacity,
                          filter: `blur(${ghostBlur}px)`,
                          pointerEvents: "none",
                          userSelect: "none",
                        }}
                      >
                        {word.text}
                      </span>
                    )}

                    {/* Typed Characters with Optical Unblur Snap */}
                    {hasStarted &&
                      word.text.split("").map((char, charIdx) => {
                        const charBirthFrame =
                          word.start + (charIdx / word.text.length) * (word.end - word.start);
                        const isVisible = frame >= charBirthFrame;

                        if (!isVisible) return null;

                        const charAge = frame - charBirthFrame;
                        const charBlur = interpolate(charAge, [0, 2.5], [10, 0], {
                          extrapolateRight: "clamp",
                        });
                        const charScale = interpolate(charAge, [0, 2.5], [1.2, 1], {
                          extrapolateRight: "clamp",
                        });

                        return (
                          <span
                            key={charIdx}
                            style={{
                              display: "inline-block",
                              color: word.color,
                              filter: `blur(${charBlur}px)`,
                              transform: `scale(${charScale})`,
                              willChange: "transform, filter",
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}

                    {/* Active Typewriter Blinking Cursor */}
                    {activeCursorWordText === word.text && frame <= 208 && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 4,
                          height: "0.85em",
                          marginLeft: 4,
                          backgroundColor: STUDIO_THEME.appleGreen,
                          borderRadius: 2,
                          opacity: isCursorBlinking ? 1 : 0,
                        }}
                      />
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* 3. CENTER PROGRESSIVE MOBILE CARDS & SHIELD (Frame 184+) */}
      <div
        style={{
          position: "absolute",
          top: 610,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `translateY(${floatY}px)`,
          zIndex: 20,
        }}
      >
        {/* 3A. Emerald Shield of Relief (Stage 3, Frame 184+) */}
        {frame >= 184 && (
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              background: "linear-gradient(145deg, #30D158 0%, #208E3B 100%)",
              boxShadow: "0 25px 60px -10px rgba(48, 209, 88, 0.45), 0 2px 4px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              marginBottom: 32,
              transform: `scale(${shieldScale})`,
            }}
          >
            <ShieldCheck size={80} />
          </div>
        )}

        {/* 3B. Mobile-Optimized Big Card 1 (Frosted Glass) */}
        {frame >= 192 && (
          <div
            style={{
              width: 920,
              height: 126,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderElevated,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 22,
              marginBottom: 18,
              transform: `translateY(${card1Y}px)`,
              opacity: card1Opacity,
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: STUDIO_GLASS.surfaceElevated,
                border: "1px solid rgba(48, 209, 88, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CheckCircle2 size={36} color={STUDIO_THEME.appleGreen} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  color: STUDIO_THEME.textSecondary,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                KODE FRONTEND
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: STUDIO_THEME.textPrimary,
                  letterSpacing: -0.5,
                }}
              >
                100% AMAN & REUSABLE
              </div>
            </div>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(48, 209, 88, 0.12)",
                border: "1px solid rgba(48, 209, 88, 0.35)",
                color: STUDIO_THEME.appleGreen,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CheckCircle2 size={16} /> SIAP PAKAI
            </div>
          </div>
        )}

        {/* 3C. Mobile-Optimized Big Card 2 (Frosted Glass) */}
        {frame >= 208 && (
          <div
            style={{
              width: 920,
              height: 126,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderElevated,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 22,
              marginBottom: 26,
              transform: `translateY(${card2Y}px)`,
              opacity: card2Opacity,
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: STUDIO_GLASS.surfaceElevated,
                border: "1px solid rgba(48, 209, 88, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Sparkles size={36} color={STUDIO_THEME.appleGreen} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  color: STUDIO_THEME.textSecondary,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                WAKTU PENGERJAAN
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: STUDIO_THEME.textPrimary,
                  letterSpacing: -0.5,
                }}
              >
                RILIS HARI INI JUGA!
              </div>
            </div>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(48, 209, 88, 0.12)",
                border: "1px solid rgba(48, 209, 88, 0.35)",
                color: STUDIO_THEME.appleGreen,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Sparkles size={16} /> INSTANT LAUNCH
            </div>
          </div>
        )}

        {/* 3D. Crossed-Out Elimination Banner (Frosted Glass) */}
        {frame >= 222 && (
          <div
            style={{
              padding: "16px 36px",
              borderRadius: 999,
              background: "rgba(255, 69, 58, 0.12)",
              backdropFilter: STUDIO_GLASS.backdropFilterLight,
              border: STUDIO_GLASS.borderAccentRed,
              color: STUDIO_THEME.appleRed,
              fontSize: 24,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: STUDIO_GLASS.glassShadow,
              transform: `scale(${rejectScale})`,
              opacity: rejectOpacity,
            }}
          >
            <XCircle size={26} color={STUDIO_THEME.appleRed} />
            <span style={{ textDecoration: "line-through" }}>
              REWRITE DARI AWAL PAKAI C++ / C#
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
