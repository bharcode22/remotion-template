import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  CheckCircle2,
  FileCode2,
  Layers,
  RefreshCw,
  XCircle,
  Zap,
} from "lucide-react";
import { MAIN_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";

interface WordConfig {
  text: string;
  start: number;
  end: number;
  color: string;
  isAccent?: boolean;
}

interface LineConfig {
  id: number;
  fontSize: number;
  words: WordConfig[];
}

const LINES_TIMELINE: LineConfig[] = [
  {
    id: 1,
    fontSize: 46,
    words: [
      { text: "KAMU", start: 554, end: 562, color: "#F5F5F7" },
      { text: "BISA", start: 562, end: 570, color: "#F5F5F7" },
      { text: "MANFAATKAN", start: 570, end: 580, color: "#F5F5F7" },
      { text: "KEMBALI", start: 580, end: 588, color: "#F5F5F7" },
    ],
  },
  {
    id: 2,
    fontSize: 56,
    words: [
      { text: "KODE", start: 588, end: 596, color: STUDIO_THEME.appleBlue, isAccent: true },
      { text: "FRONTEND", start: 596, end: 606, color: STUDIO_THEME.appleBlue, isAccent: true },
      { text: "YANG", start: 606, end: 612, color: "#F5F5F7" },
      { text: "ADA!", start: 612, end: 622, color: STUDIO_THEME.appleBlue, isAccent: true },
    ],
  },
];

export const Scene6_ReuseCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // STAGE 1 (Frame 547-565): Top Badge Entrance
  // ==========================================
  const badgeSpring = spring({
    frame: frame - 547,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.8 },
  });
  const badgeY = interpolate(badgeSpring, [0, 1], [-20, 0]);
  const badgeOpacity = interpolate(badgeSpring, [0, 0.4, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 2 (Frame 575-640): Activity Ring Gauge Pop & Progress
  // ==========================================
  const gaugeSpring = spring({
    frame: frame - 575,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.85 },
  });
  const gaugeScale = interpolate(gaugeSpring, [0, 1], [0.8, 1]);
  const gaugeOpacity = interpolate(gaugeSpring, [0, 0.3, 1], [0, 1, 1]);

  // Dynamic 0% to 100% count-up matching narration
  const gaugePercent = Math.min(
    100,
    Math.floor(
      interpolate(frame, [582, 638], [0, 100], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  // SVG Ring Math (diameter 360, radius 140)
  const ringRadius = 140;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const strokeOffset = ringCircumference * (1 - gaugePercent / 100);

  // ==========================================
  // STAGE 3 (Frame 625-645): Card 1 (Web Stack Reuse)
  // ==========================================
  const card1Spring = spring({
    frame: frame - 625,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.85 },
  });
  const card1Y = interpolate(card1Spring, [0, 1], [35, 0]);
  const card1Opacity = interpolate(card1Spring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 4 (Frame 655-675): Card 2 (Time & Cost Efficiency)
  // ==========================================
  const card2Spring = spring({
    frame: frame - 655,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.85 },
  });
  const card2Y = interpolate(card2Spring, [0, 1], [35, 0]);
  const card2Opacity = interpolate(card2Spring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 5 (Frame 680-705): Rejection Banner (Tanpa Bikin Ulang UI)
  // ==========================================
  const rejectSpring = spring({
    frame: frame - 680,
    fps,
    config: { damping: 11, stiffness: 130, mass: 0.8 },
  });
  const rejectScale = interpolate(rejectSpring, [0, 1], [0.9, 1]);
  const rejectOpacity = interpolate(rejectSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 6 (Frame 692-715): Continuity Pill to OS Distribution
  // ==========================================
  const contSpring = spring({
    frame: frame - 692,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.8 },
  });
  const contOpacity = interpolate(contSpring, [0, 0.4, 1], [0, 1, 1]);
  const contY = interpolate(contSpring, [0, 1], [15, 0]);

  // Continuous subtle level breathing float (pure Y-axis, ZERO rotation!)
  const floatY = Math.sin(frame * 0.05) * 4;
  const isCursorBlinking = Math.sin(frame * 0.5) > -0.15;

  // Track active typewriter word for cursor
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
        fontFamily: MAIN_FONT_FAMILY,
        overflow: "hidden",
      }}
    >
      {/* 1. TOP BADGE: 100% CODE REUSABILITY */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: badgeOpacity,
          transform: `translateY(${badgeY}px)`,
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 26px",
            borderRadius: 999,
            background: "rgba(41, 151, 255, 0.12)",
            border: "1px solid rgba(41, 151, 255, 0.35)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
          }}
        >
          <RefreshCw size={20} color={STUDIO_THEME.appleBlue} />
          <span
            style={{
              color: STUDIO_THEME.appleBlue,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            100% CODE REUSABILITY
          </span>
        </div>
      </div>

      {/* 2. TYPEWRITER HEADLINE (100% Fixed Layout, No Drift, Optical Unblur) */}
      <div
        style={{
          position: "absolute",
          top: 320,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 30,
          gap: 12,
        }}
      >
        {LINES_TIMELINE.map((line) => (
          <div
            key={line.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 14,
              whiteSpace: "nowrap",
              height: line.fontSize * 1.3,
            }}
          >
            {line.words.map((word, wIdx) => {
              const isStarted = frame >= word.start;
              const isDone = frame > word.end;
              const isTyping = isStarted && !isDone;

              return (
                <span
                  key={wIdx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: line.fontSize,
                    fontWeight: word.isAccent ? 950 : 850,
                    letterSpacing: -0.5,
                    position: "relative",
                  }}
                >
                  {/* Ghost text for layout width stability */}
                  <span
                    style={{
                      visibility: isStarted ? "hidden" : "visible",
                      color: word.color,
                      opacity: 0.15,
                      filter: "blur(6px)",
                      userSelect: "none",
                    }}
                  >
                    {word.text}
                  </span>

                  {/* Overlaid typed characters with optical unblur */}
                  {isStarted && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        color: word.color,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {word.text.split("").map((char, charIdx) => {
                        const charBirth =
                          word.start + (charIdx / word.text.length) * (word.end - word.start);
                        if (frame < charBirth) return null;
                        const age = frame - charBirth;
                        const charBlur = interpolate(age, [0, 2], [6, 0], {
                          extrapolateRight: "clamp",
                        });

                        return (
                          <span key={charIdx} style={{ filter: `blur(${charBlur}px)` }}>
                            {char}
                          </span>
                        );
                      })}

                      {/* Blinking Typewriter Cursor */}
                      {isTyping && activeCursorWordText === word.text && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 4,
                            height: line.fontSize * 0.85,
                            marginLeft: 4,
                            backgroundColor: STUDIO_THEME.appleBlue,
                            borderRadius: 2,
                            opacity: isCursorBlinking ? 1 : 0,
                          }}
                        />
                      )}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* 3. CENTERPIECE: APPLE ACTIVITY RING GAUGE (100% Level, Zero Rotation!) */}
      <div
        style={{
          position: "absolute",
          top: 490,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: gaugeOpacity,
          transform: `scale(${gaugeScale}) translateY(${floatY}px)`,
          zIndex: 25,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 360,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subtle Ambient Occlusion Contact Shadow */}
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 90,
              bottom: -20,
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* SVG Progress Ring */}
          <svg width="360" height="360" style={{ transform: "rotate(-90deg)" }}>
            {/* Background Track */}
            <circle
              cx="180"
              cy="180"
              r={ringRadius}
              stroke="#2C2C2E"
              strokeWidth="22"
              fill="none"
            />
            {/* Active Progress */}
            <circle
              cx="180"
              cy="180"
              r={ringRadius}
              stroke={STUDIO_THEME.appleBlue}
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={ringCircumference}
              strokeDashoffset={strokeOffset}
            />
          </svg>

          {/* Center Text Metrics (Upright, Level, Centered) */}
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 84,
                fontWeight: 950,
                color: STUDIO_THEME.textPrimary,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              {gaugePercent}%
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: STUDIO_THEME.appleBlue,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              CODE REUSE
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: STUDIO_THEME.textSecondary,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              ZERO REWRITE
            </div>
          </div>
        </div>
      </div>

      {/* 4. PROGRESSIVE MOBILE FEATURE CARD 1: WEB STACK REUSE */}
      <div
        style={{
          position: "absolute",
          top: 900,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: card1Opacity,
          transform: `translateY(${card1Y}px)`,
          zIndex: 26,
        }}
      >
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
          }}
        >
          {/* Icon Squircle */}
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: STUDIO_GLASS.surfaceElevated,
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <FileCode2 size={34} color={STUDIO_THEME.appleBlue} />
          </div>

          {/* Texts */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: STUDIO_THEME.textSecondary,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              SEMUA STACK WEB FRONTEND
            </span>
            <span
              style={{
                fontSize: 27,
                fontWeight: 800,
                color: STUDIO_THEME.textPrimary,
                letterSpacing: -0.5,
              }}
            >
              React • Vue • Next.js • Tailwind
            </span>
          </div>

          {/* Status Badge */}
          <div
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(48, 209, 88, 0.14)",
              border: "1px solid rgba(48, 209, 88, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <CheckCircle2 size={18} color={STUDIO_THEME.appleGreen} />
            <span
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: STUDIO_THEME.appleGreen,
                letterSpacing: 1,
              }}
            >
              100% REUSED
            </span>
          </div>
        </div>
      </div>

      {/* 5. PROGRESSIVE MOBILE FEATURE CARD 2: TIME & COST EFFICIENCY */}
      <div
        style={{
          position: "absolute",
          top: 1050,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: card2Opacity,
          transform: `translateY(${card2Y}px)`,
          zIndex: 26,
        }}
      >
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
          }}
        >
          {/* Icon Squircle */}
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: STUDIO_GLASS.surfaceElevated,
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <Zap size={34} color={STUDIO_THEME.appleAmber} />
          </div>

          {/* Texts */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: STUDIO_THEME.textSecondary,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              PENGHEMATAN TIM & WAKTU
            </span>
            <span
              style={{
                fontSize: 27,
                fontWeight: 800,
                color: STUDIO_THEME.textPrimary,
                letterSpacing: -0.5,
              }}
            >
              Hemat Ratusan Jam Kerja & Biaya
            </span>
          </div>

          {/* Status Badge */}
          <div
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(41, 151, 255, 0.14)",
              border: "1px solid rgba(41, 151, 255, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <Layers size={18} color={STUDIO_THEME.appleBlue} />
            <span
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: STUDIO_THEME.appleBlue,
                letterSpacing: 1,
              }}
            >
              0x REWRITE
            </span>
          </div>
        </div>
      </div>

      {/* 6. PROGRESSIVE REJECTION BANNER: TANPA BIKIN ULANG UI */}
      <div
        style={{
          position: "absolute",
          top: 1200,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: rejectOpacity,
          transform: `scale(${rejectScale})`,
          zIndex: 26,
        }}
      >
        <div
          style={{
            width: 920,
            height: 86,
            background: "rgba(255, 69, 58, 0.10)",
            backdropFilter: STUDIO_GLASS.backdropFilterLight,
            border: STUDIO_GLASS.borderAccentRed,
            borderRadius: 22,
            boxShadow: STUDIO_GLASS.glassShadow,
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            gap: 18,
          }}
        >
          <XCircle size={32} color={STUDIO_THEME.appleRed} style={{ flexShrink: 0 }} />
          <span
            style={{
              fontSize: 23,
              fontWeight: 800,
              color: STUDIO_THEME.textPrimary,
              flex: 1,
              letterSpacing: -0.3,
            }}
          >
            TANPA HARUS MEMBUAT UI DARI AWAL
          </span>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              background: "rgba(255, 69, 58, 0.18)",
              border: "1px solid rgba(255, 69, 58, 0.4)",
              color: STUDIO_THEME.appleRed,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            ZERO RE-CODING
          </span>
        </div>
      </div>

      {/* 7. CONTINUITY PILL TO SCENE 7 (Frame 692+) */}
      <div
        style={{
          position: "absolute",
          top: 1315,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: contOpacity,
          transform: `translateY(${contY}px)`,
          zIndex: 27,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: STUDIO_THEME.textSecondary,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            NEXT: DISTRIBUSI KE WINDOWS, MAC & LINUX
          </span>
          <ArrowRight size={18} color={STUDIO_THEME.appleBlue} />
        </div>
      </div>
    </div>
  );
};
