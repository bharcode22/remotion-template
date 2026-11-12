import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AppWindow, Bell, Code2, Cpu, HardDrive, Layers, Palette, Zap } from "lucide-react";
import { MAIN_FONT_FAMILY, MONO_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";

interface WordConfig {
  text: string;
  start: number;
  end: number;
  color: string;
  isBlue?: boolean;
}

interface LineConfig {
  id: number;
  fontSize: number;
  words: WordConfig[];
}

const LINES_TIMELINE: LineConfig[] = [
  {
    id: 1,
    fontSize: 50,
    words: [
      { text: "PAKAI", start: 312, end: 320, color: "#F5F5F7" },
      { text: "TEKNOLOGI", start: 320, end: 330, color: "#F5F5F7" },
      { text: "WEB", start: 330, end: 340, color: STUDIO_THEME.appleBlue, isBlue: true },
    ],
  },
  {
    id: 2,
    fontSize: 60,
    words: [
      { text: "YANG", start: 342, end: 350, color: "#F5F5F7" },
      { text: "SUDAH", start: 350, end: 358, color: "#F5F5F7" },
      { text: "KAMU", start: 358, end: 366, color: "#F5F5F7" },
      { text: "KUASAI", start: 366, end: 378, color: STUDIO_THEME.appleBlue, isBlue: true },
    ],
  },
];

export const Scene5_TechStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // STAGE 2A (Frame 406): HTML5 Enters
  // ==========================================
  const htmlSpring = spring({
    frame: frame - 406,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const htmlScale = interpolate(htmlSpring, [0, 1], [0.7, 1]);
  const htmlY = interpolate(htmlSpring, [0, 1], [60, 0]);
  const htmlOpacity = interpolate(htmlSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 2B (Frame 424): CSS3 Enters
  // ==========================================
  const cssSpring = spring({
    frame: frame - 424,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const cssScale = interpolate(cssSpring, [0, 1], [0.7, 1]);
  const cssY = interpolate(cssSpring, [0, 1], [60, 0]);
  const cssOpacity = interpolate(cssSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 2C (Frame 460): JavaScript Enters
  // ==========================================
  const jsSpring = spring({
    frame: frame - 460,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const jsScale = interpolate(jsSpring, [0, 1], [0.7, 1]);
  const jsY = interpolate(jsSpring, [0, 1], [60, 0]);
  const jsOpacity = interpolate(jsSpring, [0, 0.3, 1], [0, 1, 1]);

  // ==========================================
  // STAGE 3 (Frame 477+): Full Native Desktop Application Transformation
  // ==========================================
  const isDesktopStage = frame >= 477;
  const desktopSpring = spring({
    frame: frame - 477,
    fps,
    config: { damping: 13, stiffness: 120, mass: 0.85 },
  });
  const desktopScale = interpolate(desktopSpring, [0, 1], [0.88, 1]);
  const desktopOpacity = interpolate(desktopSpring, [0, 0.3, 1], [0, 1, 1]);

  // Gentle float (zero rotation, pure Y)
  const floatY = Math.sin(frame * 0.05) * 5;
  const isCursorBlinking = Math.sin(frame * 0.5) > -0.15;

  // Typewriter active tracking
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
      {/* 1. TOP DYNAMIC BADGE */}
      <div
        style={{
          position: "absolute",
          top: 230,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 28px",
            borderRadius: 999,
            background: isDesktopStage
              ? "rgba(48, 209, 88, 0.16)"
              : "rgba(41, 151, 255, 0.14)",
            border: isDesktopStage
              ? "1px solid rgba(48, 209, 88, 0.35)"
              : "1px solid rgba(41, 151, 255, 0.35)",
            color: isDesktopStage ? STUDIO_THEME.appleGreen : STUDIO_THEME.appleBlue,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            boxShadow: isDesktopStage
              ? "0 10px 25px -5px rgba(48, 209, 88, 0.3)"
              : "0 10px 25px -5px rgba(41, 151, 255, 0.3)",
            transition: "all 0.4s ease",
          }}
        >
          {isDesktopStage ? <AppWindow size={24} /> : <Layers size={24} />}
          <span>
            {isDesktopStage
              ? "DESKTOP APPLICATION RUNTIME"
              : "ZERO NEW LANGUAGE TO LEARN"}
          </span>
        </div>
      </div>

      {/* 2. KINETIC TYPEWRITER HEADLINE */}
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 30,
        }}
      >
        {/* Dynamic Secondary Title after Frame 477 */}
        {isDesktopStage ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: desktopOpacity,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "#F5F5F7",
                letterSpacing: -1,
              }}
            >
              DIBUNGKUS ELECTRON MENJADI
            </div>
            <div
              style={{
                fontSize: 62,
                fontWeight: 950,
                color: STUDIO_THEME.appleGreen,
                letterSpacing: -1.5,
              }}
            >
              APLIKASI DESKTOP UTUH!
            </div>
          </div>
        ) : (
          LINES_TIMELINE.map((line) => {
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

                  // Ghost blurred silhouette
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

                      {activeCursorWordText === word.text && frame <= 380 && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 4,
                            height: "0.85em",
                            marginLeft: 4,
                            backgroundColor: STUDIO_THEME.appleBlue,
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
          })
        )}
      </div>

      {/* 3. CENTER DYNAMIC STAGE (Transfers from Modular Tech Stack into Desktop App at frame 477) */}
      <div
        style={{
          position: "absolute",
          top: 530,
          left: 0,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `translateY(${floatY}px)`,
          zIndex: 20,
        }}
      >
        {!isDesktopStage ? (
          /* ========================================================
             PRE-477: Modular Tech Stack Dock (HTML 406, CSS 424, JS 460)
             ======================================================== */
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 22,
              width: 960,
            }}
          >
            {/* 3A. HTML5 Module Slot (Enters exactly at Frame 406) */}
            <div style={{ position: "relative", width: 290, height: 440 }}>
              {frame < 406 && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 28,
                    border: "1.5px dashed rgba(255, 87, 34, 0.25)",
                    background: "rgba(255, 87, 34, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    color: "rgba(255, 87, 34, 0.45)",
                  }}
                >
                  <Code2 size={44} />
                  <span style={{ fontSize: 18, fontWeight: 800 }}>HTML5</span>
                </div>
              )}
              {frame >= 406 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 28,
                    background: STUDIO_GLASS.glassGradientCard,
                    backdropFilter: STUDIO_GLASS.backdropFilter,
                    border: "1px solid rgba(255, 87, 34, 0.4)",
                    boxShadow: STUDIO_GLASS.glassShadowElevated,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "36px 20px",
                    boxSizing: "border-box",
                    transform: `translateY(${htmlY}px) scale(${htmlScale})`,
                    opacity: htmlOpacity,
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 24,
                      background: "rgba(255, 87, 34, 0.16)",
                      border: "2px solid #FF5722",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FF5722",
                    }}
                  >
                    <Code2 size={50} />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 34,
                        fontWeight: 950,
                        color: "#FF5722",
                        marginBottom: 6,
                      }}
                    >
                      HTML5
                    </div>
                    <div style={{ fontSize: 18, color: "#86868B", fontWeight: 700 }}>
                      STRUKTUR WEB
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "8px 20px",
                      borderRadius: 999,
                      background: "rgba(255, 87, 34, 0.15)",
                      color: "#FF5722",
                      fontSize: 15,
                      fontWeight: 900,
                      letterSpacing: 1,
                    }}
                  >
                    READY ✓
                  </div>
                </div>
              )}
            </div>

            {/* 3B. CSS3 Module Slot (Enters exactly at Frame 424) */}
            <div style={{ position: "relative", width: 290, height: 440 }}>
              {frame < 424 && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 28,
                    border: "1.5px dashed rgba(41, 151, 255, 0.25)",
                    background: "rgba(41, 151, 255, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    color: "rgba(41, 151, 255, 0.45)",
                  }}
                >
                  <Palette size={44} />
                  <span style={{ fontSize: 18, fontWeight: 800 }}>CSS3</span>
                </div>
              )}
              {frame >= 424 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 28,
                    background: STUDIO_GLASS.glassGradientCard,
                    backdropFilter: STUDIO_GLASS.backdropFilter,
                    border: "1px solid rgba(41, 151, 255, 0.4)",
                    boxShadow: STUDIO_GLASS.glassShadowElevated,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "36px 20px",
                    boxSizing: "border-box",
                    transform: `translateY(${cssY}px) scale(${cssScale})`,
                    opacity: cssOpacity,
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 24,
                      background: "rgba(41, 151, 255, 0.16)",
                      border: "2px solid #2997FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2997FF",
                    }}
                  >
                    <Palette size={50} />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 34,
                        fontWeight: 950,
                        color: "#2997FF",
                        marginBottom: 6,
                      }}
                    >
                      CSS3
                    </div>
                    <div style={{ fontSize: 18, color: "#86868B", fontWeight: 700 }}>
                      DESAIN & MOTION
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "8px 20px",
                      borderRadius: 999,
                      background: "rgba(41, 151, 255, 0.15)",
                      color: "#2997FF",
                      fontSize: 15,
                      fontWeight: 900,
                      letterSpacing: 1,
                    }}
                  >
                    READY ✓
                  </div>
                </div>
              )}
            </div>

            {/* 3C. JavaScript Module Slot (Enters exactly at Frame 460) */}
            <div style={{ position: "relative", width: 290, height: 440 }}>
              {frame < 460 && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 28,
                    border: "1.5px dashed rgba(255, 179, 0, 0.25)",
                    background: "rgba(255, 179, 0, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    color: "rgba(255, 179, 0, 0.45)",
                  }}
                >
                  <Cpu size={44} />
                  <span style={{ fontSize: 18, fontWeight: 800 }}>JAVASCRIPT</span>
                </div>
              )}
              {frame >= 460 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 28,
                    background: STUDIO_GLASS.glassGradientCard,
                    backdropFilter: STUDIO_GLASS.backdropFilter,
                    border: "1px solid rgba(255, 179, 0, 0.4)",
                    boxShadow: STUDIO_GLASS.glassShadowElevated,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "36px 20px",
                    boxSizing: "border-box",
                    transform: `translateY(${jsY}px) scale(${jsScale})`,
                    opacity: jsOpacity,
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 24,
                      background: "rgba(255, 179, 0, 0.16)",
                      border: "2px solid #FFB300",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFB300",
                    }}
                  >
                    <Cpu size={50} />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 34,
                        fontWeight: 950,
                        color: "#FFB300",
                        marginBottom: 6,
                      }}
                    >
                      JAVASCRIPT
                    </div>
                    <div style={{ fontSize: 18, color: "#86868B", fontWeight: 700 }}>
                      LOGIKA & RUNTIME
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "8px 20px",
                      borderRadius: 999,
                      background: "rgba(255, 179, 0, 0.15)",
                      color: "#FFB300",
                      fontSize: 15,
                      fontWeight: 900,
                      letterSpacing: 1,
                    }}
                  >
                    READY ✓
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ========================================================
             FRAME 477+: REAL NATIVE DESKTOP APPLICATION WINDOW
             ======================================================== */
          <div
            style={{
              width: 880,
              borderRadius: 30,
              background: STUDIO_GLASS.glassGradientCard,
              backdropFilter: STUDIO_GLASS.backdropFilter,
              border: STUDIO_GLASS.borderElevated,
              boxShadow: STUDIO_GLASS.glassShadowElevated,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transform: `scale(${desktopScale})`,
              opacity: desktopOpacity,
            }}
          >
            {/* Native Window Titlebar (Frosted Glass Header) */}
            <div
              style={{
                height: 64,
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                justifyContent: "space-between",
              }}
            >
              {/* Traffic Light Dots */}
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#27C93F" }} />
              </div>

              {/* Window Title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#F5F5F7",
                  fontFamily: MONO_FONT_FAMILY,
                }}
              >
                <AppWindow size={20} color={STUDIO_THEME.appleBlue} />
                <span>DesktopApp.exe — Electron Native Shell</span>
              </div>

              {/* Status Badge */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: STUDIO_THEME.appleGreen,
                  padding: "4px 12px",
                  borderRadius: 999,
                  background: "rgba(48, 209, 88, 0.15)",
                }}
              >
                ACTIVE RUNTIME
              </div>
            </div>

            {/* Native Application Menu Bar */}
            <div
              style={{
                height: 42,
                background: "#131315",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                gap: 22,
                fontSize: 15,
                fontWeight: 600,
                color: "#86868B",
              }}
            >
              <span style={{ color: "#F5F5F7", fontWeight: 700 }}>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Window</span>
              <span>Help</span>
            </div>

            {/* Desktop Window Interior Content */}
            <div
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 26,
                backgroundColor: "#111113",
              }}
            >
              {/* Converged Web Trinity Row */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    borderRadius: 18,
                    background: "rgba(255, 87, 34, 0.12)",
                    border: "1px solid rgba(255, 87, 34, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <Code2 size={28} color="#FF5722" />
                  <div>
                    <div style={{ fontSize: 14, color: "#86868B", fontWeight: 700 }}>RENDERER</div>
                    <div style={{ fontSize: 20, color: "#FFFFFF", fontWeight: 900 }}>HTML5 DOM</div>
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    borderRadius: 18,
                    background: "rgba(41, 151, 255, 0.12)",
                    border: "1px solid rgba(41, 151, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <Palette size={28} color="#2997FF" />
                  <div>
                    <div style={{ fontSize: 14, color: "#86868B", fontWeight: 700 }}>GRAPHICS</div>
                    <div style={{ fontSize: 20, color: "#FFFFFF", fontWeight: 900 }}>CSS3 Engine</div>
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    borderRadius: 18,
                    background: "rgba(255, 179, 0, 0.12)",
                    border: "1px solid rgba(255, 179, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <Cpu size={28} color="#FFB300" />
                  <div>
                    <div style={{ fontSize: 14, color: "#86868B", fontWeight: 700 }}>CORE LOGIC</div>
                    <div style={{ fontSize: 20, color: "#FFFFFF", fontWeight: 900 }}>Node.js / JS</div>
                  </div>
                </div>
              </div>

              {/* Native OS Integration Capabilities (Big Mobile-Friendly Features) */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",
                    borderRadius: 18,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <HardDrive size={26} color={STUDIO_THEME.appleGreen} />
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#F5F5F7" }}>
                      Akses File System Lokal
                    </span>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: STUDIO_THEME.appleGreen }}>
                    NATIVE OS ✓
                  </span>
                </div>

                <div
                  style={{
                    padding: "16px 24px",
                    borderRadius: 18,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Bell size={26} color={STUDIO_THEME.appleAmber} />
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#F5F5F7" }}>
                      Notifikasi Tray & Menu Sistem
                    </span>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: STUDIO_THEME.appleAmber }}>
                    NATIVE OS ✓
                  </span>
                </div>

                <div
                  style={{
                    padding: "16px 24px",
                    borderRadius: 18,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Zap size={26} color={STUDIO_THEME.appleBlue} />
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#F5F5F7" }}>
                      Berjalan Offline Tanpa Browser Tab
                    </span>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: STUDIO_THEME.appleBlue }}>
                    STANDALONE ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
