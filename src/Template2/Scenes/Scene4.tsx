import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowRight,
  FaCheck,
  FaDatabase,
  FaDesktop,
  FaPaperPlane,
  FaRocket,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const Cursor: React.FC<{ visible?: boolean; color?: string; height?: number }> = ({
  visible = true,
  color = GLASS_COLORS.aiPurple,
  height = 28,
}) => {
  if (!visible) return null;
  return (
    <span
      style={{
        display: "inline-block",
        width: 3,
        height,
        backgroundColor: color,
        marginLeft: 6,
        verticalAlign: "middle",
        boxShadow: `0 0 10px ${color}`,
        borderRadius: 1.5,
      }}
    />
  );
};

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 4: Frames 645 - 805)
  //
  // Line 10 (F645 - F805):
  // "Setelah itu, aku mulai memberikan prompt secara bertahap. Ingat, secara bertahap."
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 4 (0 to 160)
  const localFrame = Math.max(0, frame - 645);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [152, 160], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [152, 160], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Part A ➔ Part B Transition (around localFrame 95 / Global F740)
  const isPartA = localFrame < 96;
  const partBProgress = interpolate(localFrame, [92, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Typewriter Math
  const textLine1 = "Setelah itu, aku mulai memberikan";
  const textLine2Full = "prompt secara bertahap.";

  const charsLine1 = Math.floor(
    interpolate(localFrame, [10, 52], [0, textLine1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedLine1 = textLine1.slice(0, charsLine1);

  const charsLine2 = Math.floor(
    interpolate(localFrame, [54, 88], [0, textLine2Full.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedLine2 = textLine2Full.slice(0, charsLine2);

  const isTypingLine1 = charsLine1 < textLine1.length && localFrame >= 10;
  const isTypingLine2 =
    charsLine1 === textLine1.length && charsLine2 < textLine2Full.length;

  // Part B Strings
  const textPartB1 = "Ingat,";
  const textPartB2 = "secara bertahap.";

  const charsB1 = Math.floor(
    interpolate(localFrame, [98, 110], [0, textPartB1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedB1 = textPartB1.slice(0, charsB1);

  const charsB2 = Math.floor(
    interpolate(localFrame, [112, 138], [0, textPartB2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedB2 = textPartB2.slice(0, charsB2);

  const isTypingB1 = charsB1 < textPartB1.length && localFrame >= 98;
  const isTypingB2 =
    charsB1 === textPartB1.length && charsB2 < textPartB2.length;

  const cursorBlink = Math.sin(localFrame * 0.45) > 0;

  // 1. Prompt Console Entrance (localFrame 4+)
  const spConsole = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // 2. Synchronized Entrance for 4 Step Cards
  const spCardsEntrance = spring({
    frame: Math.max(0, localFrame - 8),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 125 },
  });

  // 3. Stepped Execution State
  const isStep1Active = localFrame >= 20;
  const isStep2Active = localFrame >= 40;
  const isStep3Active = localFrame >= 60;
  const isStep4Active = localFrame >= 80;

  // Continuous animation pulses
  const busDot = (localFrame * 5) % 100;
  const sendButtonPulse =
    !isTypingLine1 && !isTypingLine2 && charsLine2 === textLine2Full.length
      ? Math.sin((localFrame * Math.PI) / 6) * 0.15 + 0.85
      : 0.7;

  return (
    <SceneContainer
      padding="0 50px"
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER AT Y = 960px)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          boxSizing: "border-box",
        }}
      >
        {/* ═════════════════════════════════════════════════════════════
            1. HERO AI PROMPT CONSOLE (FROSTED GLASS)
           ═════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 940,
            minHeight: 250,
            borderRadius: 24,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: `1px solid ${
              partBProgress > 0.5
                ? "rgba(251, 191, 36, 0.4)"
                : "rgba(192, 132, 252, 0.4)"
            }`,
            boxShadow:
              partBProgress > 0.5
                ? "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
                : "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
            padding: "20px 26px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `scale(${spConsole})`,
            opacity: spConsole,
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Header Bar of the Prompt Console */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Window Controls + Terminal Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "rgba(239, 68, 68, 0.8)",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "rgba(245, 158, 11, 0.8)",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.8)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginLeft: 8,
                }}
              >
                <FaTerminal
                  size={15}
                  color={
                    partBProgress > 0.5
                      ? GLASS_COLORS.valueAmber
                      : GLASS_COLORS.aiPurple
                  }
                />
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: 1,
                  }}
                >
                  AI PROMPT CONSOLE
                </span>
              </div>
            </div>

            {/* Model Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor:
                    partBProgress > 0.5
                      ? GLASS_COLORS.valueAmber
                      : GLASS_COLORS.structureGreen,
                  boxShadow: `0 0 8px ${
                    partBProgress > 0.5
                      ? GLASS_COLORS.valueAmber
                      : GLASS_COLORS.structureGreen
                  }`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  letterSpacing: 0.5,
                }}
              >
                {partBProgress > 0.5 ? "REFINEMENT" : "PROMPT INPUT"}
              </span>
            </div>
          </div>

          {/* Central Body: Dynamic Typed Prompt Content */}
          <div
            style={{
              flex: 1,
              padding: "16px 4px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              minHeight: 120,
            }}
          >
            {/* PART A: "Setelah itu, aku mulai memberikan" & "prompt secara bertahap." */}
            {partBProgress < 1 && (
              <div
                style={{
                  position: isPartA ? "relative" : "absolute",
                  width: "100%",
                  opacity: 1 - partBProgress,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {/* Line 1: "Setelah itu, aku mulai memberikan" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#cbd5e1",
                    letterSpacing: 0.5,
                    minHeight: 38,
                  }}
                >
                  <span
                    style={{
                      color: GLASS_COLORS.cyberCyan,
                      marginRight: 12,
                      fontWeight: 900,
                      fontSize: 26,
                    }}
                  >
                    &gt;
                  </span>
                  <span>{displayedLine1}</span>
                  {isTypingLine1 && cursorBlink && (
                    <Cursor height={26} color={GLASS_COLORS.cyberCyan} />
                  )}
                </div>

                {/* Line 2: "prompt secara bertahap." */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 44,
                    fontWeight: 900,
                    letterSpacing: "-0.5px",
                    minHeight: 56,
                    whiteSpace: "pre",
                  }}
                >
                  {(charsLine1 === textLine1.length || charsLine2 > 0) && (
                    <span
                      style={{
                        color: GLASS_COLORS.aiPurple,
                        marginRight: 12,
                        fontWeight: 900,
                        fontSize: 32,
                      }}
                    >
                      &gt;
                    </span>
                  )}
                  {charsLine2 > 0 && (
                    <>
                      <span
                        style={{
                          background: `linear-gradient(135deg, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.aiViolet})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {displayedLine2.slice(0, Math.min(charsLine2, 6))}
                      </span>
                      <span style={{ whiteSpace: "pre", color: "#ffffff" }}>
                        {displayedLine2.slice(6)}
                      </span>
                    </>
                  )}
                  {isTypingLine2 && cursorBlink && (
                    <Cursor height={38} color={GLASS_COLORS.aiPurple} />
                  )}
                  {!isTypingLine1 &&
                    !isTypingLine2 &&
                    charsLine2 === textLine2Full.length &&
                    cursorBlink && (
                      <Cursor height={38} color={GLASS_COLORS.aiPurple} />
                    )}
                </div>
              </div>
            )}

            {/* PART B: "Ingat," & "secara bertahap." */}
            {partBProgress > 0 && (
              <div
                style={{
                  position: isPartA ? "absolute" : "relative",
                  width: "100%",
                  opacity: partBProgress,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {/* Part B Line 1: "Ingat," */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 34,
                    fontWeight: 900,
                    color: GLASS_COLORS.valueAmber,
                    letterSpacing: 1,
                    minHeight: 42,
                  }}
                >
                  <span
                    style={{
                      color: GLASS_COLORS.valueAmber,
                      marginRight: 12,
                      fontWeight: 900,
                      fontSize: 28,
                    }}
                  >
                    &gt;
                  </span>
                  <span
                    style={{
                      background: `linear-gradient(135deg, #fef08a, ${GLASS_COLORS.valueAmber})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {displayedB1}
                  </span>
                  {isTypingB1 && cursorBlink && (
                    <Cursor height={30} color={GLASS_COLORS.valueAmber} />
                  )}
                </div>

                {/* Part B Line 2: "secara bertahap." */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 50,
                    fontWeight: 900,
                    color: GLASS_COLORS.structureGreen,
                    letterSpacing: "-0.5px",
                    minHeight: 60,
                  }}
                >
                  {(charsB1 === textPartB1.length || charsB2 > 0) && (
                    <span
                      style={{
                        color: GLASS_COLORS.structureGreen,
                        marginRight: 12,
                        fontWeight: 900,
                        fontSize: 34,
                      }}
                    >
                      &gt;
                    </span>
                  )}
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${GLASS_COLORS.structureGreen}, #34d399)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {displayedB2}
                  </span>
                  {isTypingB2 && cursorBlink && (
                    <Cursor height={42} color={GLASS_COLORS.structureGreen} />
                  )}
                  {!isTypingB1 &&
                    !isTypingB2 &&
                    charsB2 === textPartB2.length &&
                    cursorBlink && (
                      <Cursor height={42} color={GLASS_COLORS.structureGreen} />
                    )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar of the Prompt Console */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 12,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#94a3b8",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  padding: "4px 10px",
                  borderRadius: 6,
                }}
              >
                PROMPT EXECUTION
              </span>
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  color: "#94a3b8",
                }}
              >
                Step-by-step Modular Generation
              </span>
            </div>

            {/* Execute Send Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 9999,
                background:
                  partBProgress > 0.5
                    ? `linear-gradient(90deg, ${GLASS_COLORS.valueAmber}, ${GLASS_COLORS.structureGreen})`
                    : `linear-gradient(90deg, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.cyberCyan})`,
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                opacity: sendButtonPulse,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 12,
                  fontWeight: 900,
                  color: "#0f0f1a",
                  letterSpacing: 0.5,
                }}
              >
                RUN
              </span>
              <FaPaperPlane size={13} color="#0f0f1a" />
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            2. VERTICAL CONNECTING CIRCUIT BUS
           ═════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 3,
            height: 28,
            background: `linear-gradient(180deg, ${GLASS_COLORS.aiPurple}, ${GLASS_COLORS.cyberCyan})`,
            position: "relative",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: `${busDot}%`,
              left: -3.5,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: GLASS_COLORS.cyberCyan,
              boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
            }}
          />
        </div>

        {/* ═════════════════════════════════════════════════════════════
            3. THE 4 SEQUENTIAL STEPPED NODES ("SECARA BERTAHAP") - Glass Cards
           ═════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 940,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            transform: `scale(${spCardsEntrance})`,
            opacity: spCardsEntrance,
          }}
        >
          {/* STEP 1: Database */}
          <div
            style={{
              height: 200,
              borderRadius: 22,
              backgroundColor: isStep1Active
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${
                isStep1Active
                  ? "rgba(110, 231, 183, 0.4)"
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: isStep1Active
                ? "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 14px",
              opacity: isStep1Active ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: isStep1Active
                  ? "rgba(110, 231, 183, 0.2)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  isStep1Active
                    ? "rgba(110, 231, 183, 0.5)"
                    : "rgba(255, 255, 255, 0.15)"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCheck
                size={13}
                color={
                  isStep1Active
                    ? GLASS_COLORS.structureGreen
                    : "rgba(255, 255, 255, 0.2)"
                }
              />
            </div>
            <FaDatabase
              size={44}
              color={
                isStep1Active
                  ? GLASS_COLORS.structureGreen
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 14,
                  fontWeight: 800,
                  color: isStep1Active ? "#ffffff" : "#64748b",
                  letterSpacing: 0.5,
                }}
              >
                01. DATABASE
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  color: isStep1Active
                    ? GLASS_COLORS.structureGreen
                    : "#64748b",
                  marginTop: 2,
                }}
              >
                Skema & Relasi
              </div>
            </div>
          </div>

          {/* Arrow Connector 1 ➔ 2 */}
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isStep2Active ? 1 : 0.25,
            }}
          >
            <FaArrowRight
              size={18}
              color={
                isStep2Active
                  ? GLASS_COLORS.valueAmber
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
          </div>

          {/* STEP 2: Backend */}
          <div
            style={{
              height: 200,
              borderRadius: 22,
              backgroundColor: isStep2Active
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${
                isStep2Active
                  ? "rgba(251, 191, 36, 0.4)"
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: isStep2Active
                ? "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 14px",
              opacity: isStep2Active ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: isStep2Active
                  ? "rgba(251, 191, 36, 0.2)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  isStep2Active
                    ? "rgba(251, 191, 36, 0.5)"
                    : "rgba(255, 255, 255, 0.15)"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCheck
                size={13}
                color={
                  isStep2Active
                    ? GLASS_COLORS.valueAmber
                    : "rgba(255, 255, 255, 0.2)"
                }
              />
            </div>
            <FaServer
              size={44}
              color={
                isStep2Active
                  ? GLASS_COLORS.valueAmber
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 14,
                  fontWeight: 800,
                  color: isStep2Active ? "#ffffff" : "#64748b",
                  letterSpacing: 0.5,
                }}
              >
                02. BACKEND
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  color: isStep2Active
                    ? GLASS_COLORS.valueAmber
                    : "#64748b",
                  marginTop: 2,
                }}
              >
                REST API & Logic
              </div>
            </div>
          </div>

          {/* Arrow Connector 2 ➔ 3 */}
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isStep3Active ? 1 : 0.25,
            }}
          >
            <FaArrowRight
              size={18}
              color={
                isStep3Active
                  ? GLASS_COLORS.skyBlue
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
          </div>

          {/* STEP 3: Frontend */}
          <div
            style={{
              height: 200,
              borderRadius: 22,
              backgroundColor: isStep3Active
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${
                isStep3Active
                  ? "rgba(103, 232, 249, 0.4)"
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: isStep3Active
                ? "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 14px",
              opacity: isStep3Active ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: isStep3Active
                  ? "rgba(103, 232, 249, 0.2)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  isStep3Active
                    ? "rgba(103, 232, 249, 0.5)"
                    : "rgba(255, 255, 255, 0.15)"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCheck
                size={13}
                color={
                  isStep3Active
                    ? GLASS_COLORS.skyBlue
                    : "rgba(255, 255, 255, 0.2)"
                }
              />
            </div>
            <FaDesktop
              size={44}
              color={
                isStep3Active
                  ? GLASS_COLORS.skyBlue
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 14,
                  fontWeight: 800,
                  color: isStep3Active ? "#ffffff" : "#64748b",
                  letterSpacing: 0.5,
                }}
              >
                03. FRONTEND
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  color: isStep3Active
                    ? GLASS_COLORS.skyBlue
                    : "#64748b",
                  marginTop: 2,
                }}
              >
                UI & Client State
              </div>
            </div>
          </div>

          {/* Arrow Connector 3 ➔ 4 */}
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isStep4Active ? 1 : 0.25,
            }}
          >
            <FaArrowRight
              size={18}
              color={
                isStep4Active
                  ? GLASS_COLORS.aiPurple
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
          </div>

          {/* STEP 4: Launch */}
          <div
            style={{
              height: 200,
              borderRadius: 22,
              backgroundColor: isStep4Active
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${
                isStep4Active
                  ? "rgba(192, 132, 252, 0.4)"
                  : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: isStep4Active
                ? "0 16px 36px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 14px",
              opacity: isStep4Active ? 1 : 0.45,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: isStep4Active
                  ? "rgba(192, 132, 252, 0.2)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${
                  isStep4Active
                    ? "rgba(192, 132, 252, 0.5)"
                    : "rgba(255, 255, 255, 0.15)"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCheck
                size={13}
                color={
                  isStep4Active
                    ? GLASS_COLORS.aiPurple
                    : "rgba(255, 255, 255, 0.2)"
                }
              />
            </div>
            <FaRocket
              size={44}
              color={
                isStep4Active
                  ? GLASS_COLORS.aiPurple
                  : "rgba(255, 255, 255, 0.2)"
              }
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 14,
                  fontWeight: 800,
                  color: isStep4Active ? "#ffffff" : "#64748b",
                  letterSpacing: 0.5,
                }}
              >
                04. LAUNCH
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  color: isStep4Active
                    ? GLASS_COLORS.aiPurple
                    : "#64748b",
                  marginTop: 2,
                }}
              >
                Deployment & Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};

