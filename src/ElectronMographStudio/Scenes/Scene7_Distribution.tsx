import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  Check,
  Command,
  Cpu,
  Globe,
  Monitor,
  PackageCheck,
  Rocket,
  Sparkles,
  Terminal,
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

// Phase 1 (Frame 729-788): "Cukup bungkus web app kamu menggunakan Electron"
const HEADLINE_PHASE_1: LineConfig[] = [
  {
    id: 1,
    fontSize: 46,
    words: [
      { text: "CUKUP", start: 730, end: 737, color: "#F5F5F7" },
      { text: "BUNGKUS", start: 737, end: 745, color: "#F5F5F7" },
      { text: "WEB", start: 745, end: 751, color: "#F5F5F7" },
      { text: "APP", start: 751, end: 757, color: "#F5F5F7" },
    ],
  },
  {
    id: 2,
    fontSize: 56,
    words: [
      { text: "MENGGUNAKAN", start: 757, end: 769, color: STUDIO_THEME.appleBlue, isAccent: true },
      { text: "ELECTRON!", start: 769, end: 785, color: STUDIO_THEME.appleBlue, isAccent: true },
    ],
  },
];

// Phase 2 (Frame 789-860): "Lalu distribusikan sebagai aplikasi desktop untuk..."
const HEADLINE_PHASE_2: LineConfig[] = [
  {
    id: 1,
    fontSize: 44,
    words: [
      { text: "LALU", start: 789, end: 796, color: "#F5F5F7" },
      { text: "DISTRIBUSIKAN", start: 796, end: 812, color: "#F5F5F7" },
      { text: "SEBAGAI", start: 812, end: 822, color: "#F5F5F7" },
    ],
  },
  {
    id: 2,
    fontSize: 54,
    words: [
      { text: "APLIKASI", start: 822, end: 834, color: STUDIO_THEME.appleBlue, isAccent: true },
      { text: "DESKTOP", start: 834, end: 846, color: STUDIO_THEME.appleBlue, isAccent: true },
      { text: "NATIVE!", start: 846, end: 860, color: STUDIO_THEME.appleGreen, isAccent: true },
    ],
  },
];

export const Scene7_Distribution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // STAGE 1 (Frame 725-745): Top Badge Entrance
  // ==========================================
  const badgeSpring = spring({
    frame: frame - 725,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.8 },
  });
  const badgeY = interpolate(badgeSpring, [0, 1], [-20, 0]);
  const badgeOpacity = interpolate(badgeSpring, [0, 0.4, 1], [0, 1, 1]);

  // Determine active headline phase
  const isPhase2 = frame >= 789;
  const activeHeadline = isPhase2 ? HEADLINE_PHASE_2 : HEADLINE_PHASE_1;

  // Crossfade between headline phases
  const headlineFadeOut = isPhase2
    ? 1
    : interpolate(frame, [785, 789], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  const headlineFadeIn = isPhase2
    ? interpolate(frame, [789, 795], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;
  const headlineOpacity = isPhase2 ? headlineFadeIn : headlineFadeOut;

  // ==========================================
  // STAGE 2 (Frame 732-855): Unified Bundler Engine Card
  // ==========================================
  const bundlerSpring = spring({
    frame: frame - 732,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.85 },
  });
  const bundlerY = interpolate(bundlerSpring, [0, 1], [30, 0]);
  const bundlerOpacity = interpolate(bundlerSpring, [0, 0.3, 1], [0, 1, 1]);

  // Packaging progress bar: 0% -> 100% from frame 750 to 850
  const buildProgress = interpolate(frame, [750, 850], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isBuildComplete = frame >= 850;

  // ==========================================
  // STAGE 3 (User Keyframes): The 3 Target OS Deployments
  // ==========================================
  // 1. Windows: frame 862
  const popWin = spring({
    frame: frame - 862,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const winScale = interpolate(popWin, [0, 1], [0.9, 1]);
  const winY = interpolate(popWin, [0, 1], [35, 0]);
  const winOpacity = interpolate(popWin, [0, 0.3, 1], [0, 1, 1]);

  // 2. macOS: frame 898
  const popMac = spring({
    frame: frame - 898,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const macScale = interpolate(popMac, [0, 1], [0.9, 1]);
  const macY = interpolate(popMac, [0, 1], [35, 0]);
  const macOpacity = interpolate(popMac, [0, 0.3, 1], [0, 1, 1]);

  // 3. Linux: frame 917
  const popLin = spring({
    frame: frame - 917,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const linScale = interpolate(popLin, [0, 1], [0.9, 1]);
  const linY = interpolate(popLin, [0, 1], [35, 0]);
  const linOpacity = interpolate(popLin, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 4 (Frame 924-940): Grand Finale Climax Card
  // ==========================================
  const ctaSpring = spring({
    frame: frame - 924,
    fps,
    config: { damping: 10, stiffness: 150, mass: 0.75 },
  });
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.92, 1]);
  const ctaOpacity = interpolate(ctaSpring, [0, 0.4, 1], [0, 1, 1]);
  const ctaY = interpolate(ctaSpring, [0, 1], [25, 0]);

  // Continuous level float (pure Y-axis, ZERO rotation!)
  const floatY = Math.sin(frame * 0.05) * 3;
  const isCursorBlinking = Math.sin(frame * 0.5) > -0.15;

  // Track active typewriter word for cursor
  let activeCursorWordText = "";
  activeHeadline.forEach((line) => {
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
      {/* 1. TOP BADGE: CROSS-PLATFORM DISTRIBUTION */}
      <div
        style={{
          position: "absolute",
          top: 230,
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
          <Sparkles size={20} color={STUDIO_THEME.appleBlue} />
          <span
            style={{
              color: STUDIO_THEME.appleBlue,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            CROSS-PLATFORM DISTRIBUTION
          </span>
        </div>
      </div>

      {/* 2. PROGRESSIVE TYPEWRITER HEADLINE WITH OPTICAL UNBLUR */}
      <div
        style={{
          position: "absolute",
          top: 310,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 30,
          gap: 10,
          opacity: headlineOpacity,
        }}
      >
        {activeHeadline.map((line) => (
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
                  {/* Ghost text for fixed layout width */}
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

      {/* 3. ELECTRON UNIFIED COMPILER ENGINE CARD (Frame 745-855+) */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          opacity: bundlerOpacity,
          transform: `translateY(${bundlerY + floatY}px)`,
          zIndex: 25,
        }}
      >
        <div
          style={{
            width: 920,
            background: STUDIO_GLASS.glassGradientCard,
            backdropFilter: STUDIO_GLASS.backdropFilter,
            border: STUDIO_GLASS.borderElevated,
            borderRadius: 24,
            boxShadow: STUDIO_GLASS.glassShadowElevated,
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {/* Top Engine Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PackageCheck size={20} color={STUDIO_THEME.appleBlue} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: STUDIO_THEME.textSecondary,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                ELECTRON APPLICATION BUNDLER
              </span>
            </div>

            {/* Status Pill */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                background: isBuildComplete ? "rgba(48, 209, 88, 0.14)" : "rgba(41, 151, 255, 0.14)",
                border: `1px solid ${isBuildComplete ? "rgba(48, 209, 88, 0.4)" : "rgba(41, 151, 255, 0.4)"}`,
                color: isBuildComplete ? STUDIO_THEME.appleGreen : STUDIO_THEME.appleBlue,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: isBuildComplete ? STUDIO_THEME.appleGreen : STUDIO_THEME.appleBlue,
                }}
              />
              <span>{isBuildComplete ? "READY TO DISTRIBUTE" : "PACKAGING 1 CODEBASE..."}</span>
            </div>
          </div>

          {/* Pipeline Visual: Web App -> Electron Core -> Native Multi-OS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#161618",
              borderRadius: 16,
              padding: "12px 20px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Step 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#2C2C2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Globe size={22} color={STUDIO_THEME.htmlColor} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 700 }}>
                  SOURCE
                </span>
                <span style={{ fontSize: 17, color: STUDIO_THEME.textPrimary, fontWeight: 800 }}>
                  Single Web App
                </span>
              </div>
            </div>

            <ArrowRight size={18} color="#636366" />

            {/* Step 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#2C2C2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cpu size={22} color={STUDIO_THEME.appleBlue} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 700 }}>
                  RUNTIME
                </span>
                <span style={{ fontSize: 17, color: STUDIO_THEME.textPrimary, fontWeight: 800 }}>
                  Chromium + Node
                </span>
              </div>
            </div>

            <ArrowRight size={18} color="#636366" />

            {/* Step 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#2C2C2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PackageCheck size={22} color={STUDIO_THEME.appleGreen} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 700 }}>
                  OUTPUT
                </span>
                <span style={{ fontSize: 17, color: STUDIO_THEME.textPrimary, fontWeight: 800 }}>
                  3 Native Binaries
                </span>
              </div>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div style={{ width: "100%", height: 6, background: "#2C2C2E", borderRadius: 3, overflow: "hidden" }}>
            <div
              style={{
                width: `${buildProgress}%`,
                height: "100%",
                background: isBuildComplete
                  ? "linear-gradient(90deg, #2997FF, #30D158)"
                  : "linear-gradient(90deg, #2997FF, #00C7BE)",
                borderRadius: 3,
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>
      </div>

      {/* 4. THE 3 OS DEPLOYMENT SLOTS (Frame 862 Windows, Frame 898 macOS, Frame 917 Linux) */}
      <div
        style={{
          position: "absolute",
          top: 675,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          zIndex: 26,
        }}
      >
        {/* ======================================================== */}
        {/* 4A. WINDOWS CARD (Reveals at Frame 862) */}
        {/* ======================================================== */}
        {frame < 862 ? (
          /* Waiting Docking Slot */
          <div
            style={{
              width: 920,
              height: 116,
              borderRadius: 24,
              border: "1px dashed rgba(41, 151, 255, 0.25)",
              background: "rgba(41, 151, 255, 0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              color: "#86868B",
            }}
          >
            <Monitor size={22} color="rgba(41, 151, 255, 0.5)" />
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
              [ DOCKING TARGET: WINDOWS .EXE / .MSI ]
            </span>
          </div>
        ) : (
          /* Live Windows Card (Frosted Glass) */
          <div
            style={{
              width: 920,
              height: 116,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderAccentBlue,
              borderRadius: 24,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 22,
              transform: `scale(${winScale}) translateY(${winY}px)`,
              opacity: winOpacity,
            }}
          >
            {/* Windows Squircle Icon */}
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 18,
                background: STUDIO_GLASS.surfaceElevated,
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "1px solid rgba(41, 151, 255, 0.35)",
              }}
            >
              <Monitor size={34} color={STUDIO_THEME.appleBlue} />
            </div>

            {/* Texts */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: STUDIO_THEME.appleBlue,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                MICROSOFT WINDOWS (10 / 11)
              </span>
              <span
                style={{
                  fontSize: 27,
                  fontWeight: 900,
                  color: STUDIO_THEME.textPrimary,
                  letterSpacing: -0.5,
                }}
              >
                .exe / .msi
              </span>
              <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 600 }}>
                x64 • ARM64 • Auto-Updater
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
              <Check size={18} color={STUDIO_THEME.appleGreen} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: STUDIO_THEME.appleGreen,
                  letterSpacing: 1,
                }}
              >
                BUILD READY
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4B. MACOS CARD (Reveals at Frame 898) */}
        {/* ======================================================== */}
        {frame < 898 ? (
          /* Waiting Docking Slot */
          <div
            style={{
              width: 920,
              height: 116,
              borderRadius: 24,
              border: "1px dashed rgba(255, 255, 255, 0.15)",
              background: "rgba(255, 255, 255, 0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              color: "#86868B",
            }}
          >
            <Command size={22} color="rgba(255, 255, 255, 0.4)" />
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
              [ DOCKING TARGET: MACOS .DMG / UNIVERSAL ]
            </span>
          </div>
        ) : (
          /* Live macOS Card (Frosted Glass) */
          <div
            style={{
              width: 920,
              height: 116,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderElevated,
              borderRadius: 24,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 22,
              transform: `scale(${macScale}) translateY(${macY}px)`,
              opacity: macOpacity,
            }}
          >
            {/* macOS Squircle Icon */}
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 18,
                background: STUDIO_GLASS.surfaceElevated,
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "1px solid rgba(255, 255, 255, 0.20)",
              }}
            >
              <Command size={34} color="#FFFFFF" />
            </div>

            {/* Texts */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                APPLE MACOS (SONOMA & SEQUOIA)
              </span>
              <span
                style={{
                  fontSize: 27,
                  fontWeight: 900,
                  color: STUDIO_THEME.textPrimary,
                  letterSpacing: -0.5,
                }}
              >
                .dmg / Universal
              </span>
              <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 600 }}>
                Apple Silicon (M1/M2/M3/M4) + Intel
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
              <Check size={18} color={STUDIO_THEME.appleGreen} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: STUDIO_THEME.appleGreen,
                  letterSpacing: 1,
                }}
              >
                BUILD READY
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4C. LINUX CARD (Reveals at Frame 917) */}
        {/* ======================================================== */}
        {frame < 917 ? (
          /* Waiting Docking Slot */
          <div
            style={{
              width: 920,
              height: 116,
              borderRadius: 24,
              border: "1px dashed rgba(255, 159, 10, 0.25)",
              background: "rgba(255, 159, 10, 0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              color: "#86868B",
            }}
          >
            <Terminal size={22} color="rgba(255, 159, 10, 0.5)" />
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
              [ DOCKING TARGET: LINUX .APPIMAGE / .DEB ]
            </span>
          </div>
        ) : (
          /* Live Linux Card (Frosted Glass) */
          <div
            style={{
              width: 920,
              height: 116,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderAccentAmber,
              borderRadius: 24,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 22,
              transform: `scale(${linScale}) translateY(${linY}px)`,
              opacity: linOpacity,
            }}
          >
            {/* Linux Squircle Icon */}
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 18,
                background: STUDIO_GLASS.surfaceElevated,
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "1px solid rgba(255, 159, 10, 0.35)",
              }}
            >
              <Terminal size={34} color={STUDIO_THEME.appleAmber} />
            </div>

            {/* Texts */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: STUDIO_THEME.appleAmber,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                LINUX (UBUNTU / FEDORA / ARCH)
              </span>
              <span
                style={{
                  fontSize: 27,
                  fontWeight: 900,
                  color: STUDIO_THEME.textPrimary,
                  letterSpacing: -0.5,
                }}
              >
                .AppImage / .deb / .rpm
              </span>
              <span style={{ fontSize: 13, color: STUDIO_THEME.textSecondary, fontWeight: 600 }}>
                Desktop Native • Sandboxed
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
              <Check size={18} color={STUDIO_THEME.appleGreen} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: STUDIO_THEME.appleGreen,
                  letterSpacing: 1,
                }}
              >
                BUILD READY
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 5. GRAND FINALE CELEBRATION LOCKUP (Frame 924-940) */}
        {/* ======================================================== */}
        {frame >= 924 && (
          <div
            style={{
              width: 920,
              height: 104,
              borderRadius: 24,
              background:
                "linear-gradient(135deg, rgba(41, 151, 255, 0.16) 0%, rgba(48, 209, 88, 0.16) 100%), rgba(20, 20, 26, 0.72)",
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderElevated,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 32px",
              transform: `scale(${ctaScale}) translateY(${ctaY}px)`,
              opacity: ctaOpacity,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  background: "rgba(41, 151, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rocket size={30} color={STUDIO_THEME.appleBlue} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 950,
                    color: STUDIO_THEME.textPrimary,
                    letterSpacing: -0.3,
                  }}
                >
                  1 CODEBASE • 3 OS DESKTOP
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: STUDIO_THEME.appleGreen,
                    letterSpacing: 0.5,
                  }}
                >
                  Siap Rilis & Didistribusikan Hari Ini Juga!
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                background: "#2997FF",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: 1,
                boxShadow: "0 10px 20px rgba(41, 151, 255, 0.4)",
              }}
            >
              RELEASE NOW 🚀
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
