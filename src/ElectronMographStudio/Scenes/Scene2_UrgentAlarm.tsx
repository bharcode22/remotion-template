import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AlertTriangle, Clock, Command, Monitor, ShieldAlert, Terminal } from "lucide-react";
import { MAIN_FONT_FAMILY, MONO_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";

interface WordConfig {
  text: string;
  start: number;
  end: number;
  color: string;
  isAmber?: boolean;
  isRed?: boolean;
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
      { text: "TAPI", start: 66, end: 72, color: "#F5F5F7" },
      { text: "BUTUH", start: 72, end: 78, color: "#F5F5F7" },
      { text: "JADI", start: 78, end: 84, color: "#F5F5F7" },
    ],
  },
  {
    id: 2,
    fontSize: 66,
    words: [
      { text: "APLIKASI", start: 86, end: 96, color: STUDIO_THEME.appleAmber, isAmber: true },
      { text: "DESKTOP", start: 96, end: 108, color: STUDIO_THEME.appleAmber, isAmber: true },
    ],
  },
  {
    id: 3,
    fontSize: 60,
    words: [
      { text: "SECARA", start: 110, end: 118, color: "#F5F5F7" },
      { text: "MENDADAK?!", start: 118, end: 134, color: STUDIO_THEME.appleRed, isRed: true },
    ],
  },
];

export const Scene2_UrgentAlarm: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // STAGE 1 (Frame 48-70): Spatial Badge Arrival
  // ==========================================
  const badgeSpring = spring({
    frame: frame - 48,
    fps,
    config: { damping: 11, stiffness: 130, mass: 0.8 },
  });
  const badgeScale = interpolate(badgeSpring, [0, 1], [0.75, 1]);
  const badgeOpacity = interpolate(badgeSpring, [0, 0.4, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 3 (Frame 86-105): Tactical Monitor Entrance (Bertahap)
  // ==========================================
  const monitorSpring = spring({
    frame: frame - 86,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.85 },
  });
  const monitorY = interpolate(monitorSpring, [0, 1], [140, 0]);
  const monitorScale = interpolate(monitorSpring, [0, 1], [0.85, 1]);
  const monitorOpacity = interpolate(monitorSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 4 (Frame 118-130): Climax Impact Micro-Shake
  // ==========================================
  let impactShakeY = 0;
  let impactShakeX = 0;
  if (frame >= 118 && frame <= 130) {
    const decay = interpolate(frame, [118, 130], [1, 0]);
    impactShakeY = Math.sin((frame - 118) * 1.8) * 5 * decay;
    impactShakeX = Math.cos((frame - 118) * 1.5) * 4 * decay;
  }

  // ==========================================
  // Continuous Organic Float & Pulse
  // ==========================================
  const beaconPulse = (Math.sin(frame * 0.32) + 1) * 0.5;
  const isCursorBlinking = Math.sin(frame * 0.5) > -0.15;

  // Typewriter cursor tracker
  let activeCursorWordText = "";
  LINES_TIMELINE.forEach((line) => {
    line.words.forEach((w) => {
      if (frame >= w.start && frame <= w.end + 2) {
        activeCursorWordText = w.text;
      }
    });
  });

  // Urgency progress bar (Stage 4 -> Stage 5: Frame 118 to 142)
  const urgencyProgress = Math.min(
    100,
    Math.floor(
      interpolate(frame, [118, 142], [0, 100], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: MAIN_FONT_FAMILY,
        transform: `translate3d(${impactShakeX}px, ${impactShakeY}px, 0px)`,
      }}
    >
      {/* 1. KINETIC TYPEWRITER & OPTICAL BLUR HEADLINE */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        {/* Crystal-Clear Apple Urgent Frosted Glass Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 36px",
            borderRadius: 999,
            background: "rgba(255, 69, 58, 0.16)",
            border: STUDIO_GLASS.borderAccentRed,
            backdropFilter: STUDIO_GLASS.backdropFilterLight,
            color: "#FFFFFF",
            fontSize: 25,
            fontWeight: 900,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 30,
            boxShadow: STUDIO_GLASS.glassShadow,
            transform: `scale(${badgeScale})`,
            opacity: badgeOpacity,
            willChange: "transform, opacity",
          }}
        >
          <ShieldAlert size={28} color="#FFD60A" />
          <span>URGENT CLIENT REQUEST</span>
        </div>

        {/* Dynamic Typewriter Words with Optical Unblur Staging (Structured 3-Line Layout) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            width: 960,
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
                  lineHeight: 1.1,
                }}
              >
                {line.words.map((word) => {
                  const hasStarted = frame >= word.start;

                  // Ghost blurred silhouette before appearing
                  const ghostBlur = interpolate(frame, [word.start - 8, word.start], [18, 0], {
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
                      {/* 1A. Ghost Blurred Underlayer before typed */}
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

                      {/* 1B. Progressive Typed Characters with Optical Unblur Snap */}
                      {hasStarted &&
                        word.text.split("").map((char, charIdx) => {
                          const charBirthFrame =
                            word.start + (charIdx / word.text.length) * (word.end - word.start);
                          const isVisible = frame >= charBirthFrame;

                          if (!isVisible) return null;

                          // Unblur snap: starts at blur(10px) and scale(1.2), settles to blur(0) scale(1)
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

                      {/* 1C. Active Typewriter Blinking Cursor */}
                      {activeCursorWordText === word.text && frame <= 135 && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 4,
                            height: "0.85em",
                            marginLeft: 4,
                            backgroundColor: word.isRed
                              ? STUDIO_THEME.appleRed
                              : STUDIO_THEME.appleAmber,
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
      </div>

      {/* 2. 3D STUDIO DISPLAY DESKTOP ALARM RIG (Enters at Stage 3, frame 86+) */}
      <div
        style={{
          position: "absolute",
          top: 670,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `translateY(${monitorY}px) scale(${monitorScale})`,
          opacity: monitorOpacity,
          willChange: "transform, opacity",
        }}
      >
        {/* Sleek Frosted Glass Monitor Frame */}
        <div
          style={{
            position: "relative",
            width: 620,
            borderRadius: 28,
            background: STUDIO_GLASS.glassGradientCard,
            backdropFilter: STUDIO_GLASS.backdropFilter,
            border: STUDIO_GLASS.borderElevated,
            boxShadow: STUDIO_GLASS.glassShadowElevated,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "36px 36px 32px",
            boxSizing: "border-box",
          }}
        >
          {/* Pulsing Alarm Beacon (Activates at Stage 3) */}
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "rgba(255, 159, 10, 0.15)",
              border: STUDIO_GLASS.borderAccentAmber,
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FF9F0A",
              marginBottom: 20,
              boxShadow: "0 10px 25px -5px rgba(255, 159, 10, 0.3)",
              transform: `scale(${1 + beaconPulse * 0.08})`,
            }}
          >
            <AlertTriangle size={48} />
          </div>

          {/* Monitor Header Title */}
          <div
            style={{
              fontSize: 27,
              fontWeight: 900,
              color: STUDIO_THEME.textPrimary,
              letterSpacing: 1.5,
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            DESKTOP CLIENT REQUIRED
          </div>

          {/* Subtitle Telemetry */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: STUDIO_THEME.appleAmber,
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            <Clock size={17} />
            <span>DEADLINE: HARI INI • HARUS MULTI-OS</span>
          </div>

          {/* STAGE 4 (Frame 116+): Emergency Urgency Fill Bar */}
          {frame >= 116 && (
            <div
              style={{
                width: "100%",
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "12px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 20,
                opacity: interpolate(frame, [116, 122], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1,
                  fontFamily: MONO_FONT_FAMILY,
                  color: STUDIO_THEME.appleRed,
                  textTransform: "uppercase",
                }}
              >
                <span>⚡ CRITICAL TIMELINE PRIORITY</span>
                <span>{urgencyProgress}%</span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${urgencyProgress}%`,
                    height: "100%",
                    borderRadius: 3,
                    background: `linear-gradient(90deg, ${STUDIO_THEME.appleAmber} 0%, ${STUDIO_THEME.appleRed} 100%)`,
                  }}
                />
              </div>
            </div>
          )}

          {/* STAGE 5 (Frame 132+): Staggered Target OS Platform Badges */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              width: "100%",
            }}
          >
            {[
              { name: "Windows", icon: <Monitor size={16} />, triggerFrame: 132 },
              { name: "macOS", icon: <Command size={16} />, triggerFrame: 137 },
              { name: "Linux", icon: <Terminal size={16} />, triggerFrame: 142 },
            ].map((os) => {
              const osSpring = spring({
                frame: frame - os.triggerFrame,
                fps,
                config: { damping: 12, stiffness: 130, mass: 0.8 },
              });
              const osScale = interpolate(osSpring, [0, 1], [0.7, 1]);
              const osOpacity = interpolate(osSpring, [0, 0.4, 1], [0, 1, 1]);

              if (frame < os.triggerFrame) return null;

              return (
                <div
                  key={os.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 18px",
                    borderRadius: 999,
                    background: STUDIO_GLASS.pillBg,
                    border: STUDIO_GLASS.borderSubtle,
                    backdropFilter: "blur(12px)",
                    color: "#F5F5F7",
                    fontSize: 14,
                    fontWeight: 700,
                    transform: `scale(${osScale})`,
                    opacity: osOpacity,
                  }}
                >
                  {os.icon}
                  <span>{os.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
