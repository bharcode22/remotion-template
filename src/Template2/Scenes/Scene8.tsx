import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBan,
  FaCheckCircle,
  FaCode,
  FaCompass,
  FaDatabase,
  FaDesktop,
  FaExclamationTriangle,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 8: Frames 1410 - 1600 / Duration: 190 frames)
  //
  // Line 17 (Voiceover: 47.0s - 53.04s / F1410 - F1600):
  // "Jadi, jangan asal prompt AI. Pahami dulu apa yang ingin kamu bangun, baru arahkan AI untuk mengerjakannya."
  //
  // ⚠️ STRICT CONSTRAINTS:
  // - Boleh menambah aset element.
  // - JANGAN menambah teks apapun diluar naskah!
  // - Letakkan tepat di tengah halaman (Y = 960px).
  //
  // ➔ Beat 1 (localFrame 0 - 50 / F1410 - F1460):
  //    "Jadi, jangan asal prompt AI."
  //    Warning shield & chaotic prompt rejection barrier asset.
  //
  // ➔ Beat 2 (localFrame 50 - 125 / F1460 - F1535):
  //    "Pahami dulu apa yang ingin kamu bangun,"
  //    Architectural Blueprint Stack: UI Wireframe -> API Server -> Relational DB.
  //
  // ➔ Beat 3 (localFrame 125 - 190 / F1535 - F1600):
  //    "baru arahkan AI untuk mengerjakannya."
  //    Precision Steering Command -> Laser Particle Channel -> AI Core Execution.
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 8 (0 to 190)
  const localFrame = Math.max(0, frame - 1410);

  // Scene Entrance & Final Video Exit
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [184, 190], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;

  // Active Beat Flags
  const isBeat1 = localFrame < 50;
  const isBeat2 = localFrame >= 50 && localFrame < 125;
  const isBeat3 = localFrame >= 125;

  // 1. Spoken Headline Springs
  const spBeat1 = spring({
    frame: Math.max(0, localFrame - 2),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const spBeat2 = spring({
    frame: Math.max(0, localFrame - 52),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const spBeat3 = spring({
    frame: Math.max(0, localFrame - 126),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  // 2. Visual Asset Stage Springs
  const spWarningAsset = spring({
    frame: Math.max(0, localFrame - 6),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  const spBlueprintAsset = spring({
    frame: Math.max(0, localFrame - 54),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 135 },
  });

  const spSteeringAsset = spring({
    frame: Math.max(0, localFrame - 128),
    fps,
    config: { damping: 11, mass: 0.75, stiffness: 145 },
  });

  // Dynamic animations
  const warningPulse = Math.sin((localFrame * Math.PI) / 6) * 0.18 + 0.82;
  const radarSweep = (localFrame * 4) % 360;
  const conduitFlow = (localFrame * 5) % 100;
  const laserBeamProgress = interpolate(localFrame, [128, 155], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const haloAura = Math.sin((localFrame * Math.PI) / 10) * 0.15 + 0.85;

  return (
    <SceneContainer
      padding="0 50px"
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER AT Y = 960PX)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. SPOKEN HEADLINE (STRICTLY FROM SCRIPT LINE 17)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            textAlign: "center",
            minHeight: 155,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Beat 1 Headline: "Jadi, jangan asal prompt AI." */}
          {isBeat1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: spBeat1,
                transform: `scale(${spBeat1}) translateY(${(1 - spBeat1) * 15}px)`,
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#94a3b8",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                }}
              >
                Jadi,
              </div>
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${GLASS_COLORS.dangerRose}, #f43f5e)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                jangan asal prompt AI.
              </div>
            </div>
          )}

          {/* Beat 2 Headline: "Pahami dulu apa yang ingin kamu bangun," */}
          {isBeat2 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: spBeat2,
                transform: `scale(${spBeat2}) translateY(${(1 - spBeat2) * 15}px)`,
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                }}
              >
                Pahami dulu
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.skyBlue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                apa yang ingin kamu bangun,
              </div>
            </div>
          )}

          {/* Beat 3 Headline: "baru arahkan AI untuk mengerjakannya." */}
          {isBeat3 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: spBeat3,
                transform: `scale(${spBeat3}) translateY(${(1 - spBeat3) * 15}px)`,
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#e2e8f0",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: 0.5,
                }}
              >
                baru arahkan AI
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${GLASS_COLORS.structureGreen}, #34d399)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: FONT_DISPLAY,
                  letterSpacing: "-0.5px",
                }}
              >
                untuk mengerjakannya.
              </div>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. VISUAL ASSET STAGE (Centered & ZERO TEXT OUTSIDE SCRIPT)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            height: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              BEAT 1 ASSET: WARNING ALERT & CHAOTIC PROMPT REJECTION
             ═════════════════════════════════════════════════════════════ */}
          {isBeat1 && (
            <div
              style={{
                width: 940,
                height: 430,
                borderRadius: 24,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(251, 113, 133, 0.35)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${spWarningAsset})`,
                opacity: spWarningAsset,
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                gap: 22,
              }}
            >
              {/* Outer Diagonal Warning Hazard Bars */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: `repeating-linear-gradient(45deg, ${GLASS_COLORS.dangerRose}, ${GLASS_COLORS.dangerRose} 12px, transparent 12px, transparent 24px)`,
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: `repeating-linear-gradient(45deg, ${GLASS_COLORS.dangerRose}, ${GLASS_COLORS.dangerRose} 12px, transparent 12px, transparent 24px)`,
                  opacity: 0.8,
                }}
              />

              {/* Pulsing Warning Center Shield */}
              <div
                style={{
                  position: "relative",
                  width: 130,
                  height: 130,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    border: "2px dashed rgba(244, 63, 94, 0.5)",
                    transform: `scale(${warningPulse * 1.15})`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: "rgba(244, 63, 94, 0.16)",
                    border: `2px solid ${GLASS_COLORS.dangerRose}`,
                    boxShadow: "0 0 30px rgba(244, 63, 94, 0.5)",
                  }}
                />
                <FaBan size={48} color={GLASS_COLORS.dangerRose} />
              </div>

              {/* Simulated AI Prompt Box Being Blocked */}
              <div
                style={{
                  width: 680,
                  height: 64,
                  borderRadius: 16,
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(244, 63, 94, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  gap: 16,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                }}
              >
                <FaExclamationTriangle size={20} color={GLASS_COLORS.dangerRose} />
                {/* Visual Placeholder Prompt Bars */}
                <div style={{ display: "flex", gap: 10, flex: 1, alignItems: "center" }}>
                  <div
                    style={{
                      width: 160,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  />
                  <div
                    style={{
                      width: 110,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                  <div
                    style={{
                      width: 70,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                  {/* Blinking Red Error Cursor */}
                  <div
                    style={{
                      width: 3,
                      height: 18,
                      backgroundColor: GLASS_COLORS.dangerRose,
                      opacity: localFrame % 14 < 7 ? 1 : 0,
                    }}
                  />
                </div>

                {/* Blocked Action Pill */}
                <div
                  style={{
                    width: 70,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(244, 63, 94, 0.25)",
                    border: "1px solid rgba(244, 63, 94, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: GLASS_COLORS.dangerRose,
                    }}
                  />
                </div>
              </div>

              {/* Bottom Rejection Barrier Waves */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: 580,
                  justifyContent: "center",
                }}
              >
                {[40, 70, 100, 70, 40].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      width: w,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: GLASS_COLORS.dangerRose,
                      opacity: 0.3 + 0.15 * i,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              BEAT 2 ASSET: 3-TIER ARCHITECTURAL BLUEPRINT (UI -> API -> DB)
             ═════════════════════════════════════════════════════════════ */}
          {isBeat2 && (
            <div
              style={{
                width: 940,
                height: 430,
                borderRadius: 24,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(103, 232, 249, 0.35)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 40px",
                transform: `scale(${spBlueprintAsset})`,
                opacity: spBlueprintAsset,
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                gap: 16,
              }}
            >
              {/* Central Background Radar Grid Lines */}
              <div
                style={{
                  position: "absolute",
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  border: "1px dashed rgba(6, 182, 212, 0.15)",
                  transform: `rotate(${radarSweep}deg)`,
                }}
              />

              {/* Tier 1 (Top): Frontend UI Blueprint Mockup */}
              <div
                style={{
                  width: 760,
                  height: 84,
                  borderRadius: 16,
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(103, 232, 249, 0.35)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  boxSizing: "border-box",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      border: `1px solid ${GLASS_COLORS.cyberCyan}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaDesktop size={20} color={GLASS_COLORS.cyberCyan} />
                  </div>
                  {/* Traffic Light Mockup Dots */}
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981" }} />
                  </div>
                </div>

                {/* Wireframe Mockup Bars */}
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 120, height: 8, borderRadius: 4, backgroundColor: "rgba(255, 255, 255, 0.25)" }} />
                  <div style={{ width: 80, height: 8, borderRadius: 4, backgroundColor: "rgba(6, 182, 212, 0.4)" }} />
                  <div style={{ width: 60, height: 26, borderRadius: 6, backgroundColor: "rgba(6, 182, 212, 0.25)", border: "1px solid rgba(6, 182, 212, 0.4)" }} />
                </div>
              </div>

              {/* Vertical Laser Conduits (Top ➔ Mid) */}
              <div
                style={{
                  width: 500,
                  height: 16,
                  display: "flex",
                  justifyContent: "space-around",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[1, 2, 3].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 2,
                      height: "100%",
                      background: `linear-gradient(180deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.valueAmber})`,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: `${conduitFlow}%`,
                        left: -3,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: GLASS_COLORS.cyberCyan,
                        boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Tier 2 (Middle): Backend Server & API Blueprint Mockup */}
              <div
                style={{
                  width: 790,
                  height: 84,
                  borderRadius: 16,
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(251, 191, 36, 0.35)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  boxSizing: "border-box",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      border: `1px solid ${GLASS_COLORS.valueAmber}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaServer size={20} color={GLASS_COLORS.valueAmber} />
                  </div>
                  <FaCode size={18} color={GLASS_COLORS.valueAmber} />
                </div>

                {/* API Code Wireframe Bars */}
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 140, height: 8, borderRadius: 4, backgroundColor: "rgba(245, 158, 11, 0.35)" }} />
                  <div style={{ width: 90, height: 8, borderRadius: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
                  <div style={{ width: 70, height: 26, borderRadius: 6, backgroundColor: "rgba(245, 158, 11, 0.2)", border: "1px solid rgba(245, 158, 11, 0.4)" }} />
                </div>
              </div>

              {/* Vertical Laser Conduits (Mid ➔ Base) */}
              <div
                style={{
                  width: 500,
                  height: 16,
                  display: "flex",
                  justifyContent: "space-around",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[1, 2, 3].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 2,
                      height: "100%",
                      background: `linear-gradient(180deg, ${GLASS_COLORS.valueAmber}, ${GLASS_COLORS.structureGreen})`,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: `${(conduitFlow + 50) % 100}%`,
                        left: -3,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: GLASS_COLORS.structureGreen,
                        boxShadow: `0 0 10px ${GLASS_COLORS.structureGreen}`,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Tier 3 (Base): Database Relational Blueprint Mockup */}
              <div
                style={{
                  width: 820,
                  height: 84,
                  borderRadius: 16,
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(110, 231, 183, 0.35)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  boxSizing: "border-box",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: `1px solid ${GLASS_COLORS.structureGreen}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaDatabase size={20} color={GLASS_COLORS.structureGreen} />
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: GLASS_COLORS.structureGreen }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: GLASS_COLORS.structureGreen }} />
                  </div>
                </div>

                {/* Schema Wireframe Bars */}
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 160, height: 8, borderRadius: 4, backgroundColor: "rgba(16, 185, 129, 0.4)" }} />
                  <div style={{ width: 100, height: 8, borderRadius: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
                  <div style={{ width: 80, height: 26, borderRadius: 6, backgroundColor: "rgba(16, 185, 129, 0.2)", border: "1px solid rgba(16, 185, 129, 0.4)" }} />
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              BEAT 3 ASSET: GOLDEN HARMONY & PRECISION AI STEERING
             ═════════════════════════════════════════════════════════════ */}
          {isBeat3 && (
            <div
              style={{
                width: 940,
                height: 430,
                borderRadius: 24,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(110, 231, 183, 0.45)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 60px",
                transform: `scale(${spSteeringAsset})`,
                opacity: spSteeringAsset,
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Outer Decorative Architectural Border Bars */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.structureGreen})`,
                  boxShadow: `0 0 15px ${GLASS_COLORS.mintGlow}`,
                }}
              />

              {/* Left Command Pod: Developer Helm & Steering Compass */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      border: "2px dashed rgba(6, 182, 212, 0.45)",
                      transform: `rotate(${radarSweep}deg)`,
                    }}
                  />
                  <div
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: 26,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      border: `2px solid ${GLASS_COLORS.cyberCyan}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 35px ${GLASS_COLORS.cyanGlow}`,
                    }}
                  >
                    <FaCompass size={52} color={GLASS_COLORS.cyberCyan} />
                  </div>
                </div>

                {/* Sub-Indicator Bar */}
                <div
                  style={{
                    width: 54,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: GLASS_COLORS.cyberCyan,
                    boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
                  }}
                />
              </div>

              {/* Center Channel: Directed Photon Laser Channel */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  padding: "0 28px",
                }}
              >
                {/* Background Laser Conduit */}
                <div
                  style={{
                    width: "100%",
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {/* High-Energy Laser Beam Filling from Left to Right */}
                  <div
                    style={{
                      width: `${laserBeamProgress}%`,
                      height: "100%",
                      borderRadius: 3,
                      background: `linear-gradient(90deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.structureGreen})`,
                      boxShadow: `0 0 25px ${GLASS_COLORS.structureGreen}`,
                    }}
                  />
                </div>

                {/* Traveling Photon Particles */}
                {[20, 50, 80].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${(pos + conduitFlow) % 100}%`,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: GLASS_COLORS.structureGreen,
                      boxShadow: `0 0 15px ${GLASS_COLORS.structureGreen}`,
                    }}
                  />
                ))}
              </div>

              {/* Right Execution Pod: Autonomous AI Robot Engine */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Outer Pulsing Green Aura */}
                  <div
                    style={{
                      position: "absolute",
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      border: "2px dashed rgba(16, 185, 129, 0.5)",
                      transform: `scale(${haloAura})`,
                    }}
                  />
                  <div
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: 26,
                      backgroundColor: "rgba(16, 185, 129, 0.22)",
                      border: "1px solid rgba(110, 231, 183, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 40px ${GLASS_COLORS.mintGlow}`,
                    }}
                  >
                    <FaRobot size={52} color={GLASS_COLORS.structureGreen} />
                  </div>
                </div>

                {/* Verified Success Seal */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaCheckCircle size={20} color={GLASS_COLORS.structureGreen} />
                  <div
                    style={{
                      width: 36,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: GLASS_COLORS.structureGreen,
                      boxShadow: `0 0 10px ${GLASS_COLORS.structureGreen}`,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneContainer>
  );
};
