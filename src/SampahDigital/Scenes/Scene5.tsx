import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  FaBolt,
  FaCheckCircle,
  FaExclamationCircle,
  FaLightbulb,
  FaPuzzlePiece,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPOKEN SYNCHRONIZATION (Frames 418 - 580)
  // Naskah Lines 9 - 10:
  // - Line 9 (F422 - F446): "Pada dasarnya,"
  // - Line 10 (F454 - F556): "software diciptakan untuk membantu memecahkan masalah dari pengguna."
  //   * F454 - F474: "software diciptakan"
  //   * F474 - F498: "untuk membantu"
  //   * F498 - F526: "memecahkan masalah"
  //   * F526 - F552: "dari pengguna."
  // Theme: Real Character Typewriter Terminal + Problem-to-Solution Transformation
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Slide Down (F418 - F430)
  const badgeSlideY = interpolate(frame, [418, 430], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const badgeOpacity = interpolate(frame, [418, 428], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Terminal Typewriter Window Slide (F420 - F436)
  const terminalSlideY = interpolate(frame, [420, 436], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const terminalOpacity = interpolate(frame, [420, 432], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Line 9 Typewriter Effect: "Pada dasarnya," (F422 - F444)
  const textLine1 = "Pada dasarnya,";
  const charCount1 = Math.floor(
    interpolate(frame, [422, 442], [0, textLine1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedLine1 = textLine1.slice(0, charCount1);
  const isTyping1 = frame >= 422 && frame <= 444;

  // 4. Line 10 Typewriter Effect (F454 - F552)
  // "software diciptakan untuk membantu memecahkan masalah dari pengguna."
  const textLine2 =
    "software diciptakan untuk membantu memecahkan masalah dari pengguna.";

  const charCount2 = Math.floor(
    interpolate(
      frame,
      [454, 474, 498, 526, 550],
      [0, 19, 34, 53, textLine2.length],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.linear,
      }
    )
  );
  const typedLine2 = textLine2.slice(0, charCount2);
  const isTyping2 = frame >= 454 && frame <= 552;

  // Word Highlight Triggers based on spoken milestones
  const hasTypedSoftware = charCount2 >= 8;
  const hasTypedMembantu = charCount2 >= 34;
  const hasTypedMasalah = charCount2 >= 53;
  const hasTypedPengguna = charCount2 >= 66;

  // 5. Transformation Bridge Animation (F470 - F570)
  // Left: Pain Point (F460+)
  const leftCardSlideX = interpolate(frame, [460, 480], [-40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const leftCardOpacity = interpolate(frame, [460, 475], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Center Conduit Bridge Energy Flow (Continuous Offset)
  const energyFlowX = ((frame - 470) * 8) % 160;

  // Right: Solution Value (F500+)
  const rightCardSlideX = interpolate(frame, [500, 520], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const rightCardOpacity = interpolate(frame, [500, 515], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 6. User Value Resolution Progress Bar (F480 - F555)
  const resolutionProgress = interpolate(frame, [480, 555], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 7. Bottom Context Philosophical Pill (F540 - F555)
  const bottomPillSlideY = interpolate(frame, [540, 555], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const bottomPillOpacity = interpolate(frame, [540, 550], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.aiCyan}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_SANS,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────────
            1. TOP CATEGORY BADGE (Slide Down)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${badgeSlideY}px)`,
            opacity: badgeOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(11, 24, 42, 0.94)",
            border: "1.5px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: SAMPAH_DIGITAL_COLORS.aiCyan,
              boxShadow: `0 0 10px ${SAMPAH_DIGITAL_COLORS.aiCyan}`,
            }}
          />
          <FaPuzzlePiece size={15} color={SAMPAH_DIGITAL_COLORS.aiCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.aiCyan,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            FILOSOFI DASAR // THE ROOT ESSENCE OF SOFTWARE
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. REALTIME TYPEWRITER MANIFEST TERMINAL (Width: 880px)
               Featuring: Line 9 & Line 10 Character-by-Character Typing
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${terminalSlideY}px)`,
            opacity: terminalOpacity,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 16, 32, 0.96)",
            border: "1.8px solid rgba(56, 189, 248, 0.45)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 45px rgba(56, 189, 248, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            marginBottom: 20,
          }}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(6, 10, 22, 0.96)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
              </div>
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaTerminal size={12} color="#38bdf8" />
                core-directive // software-purpose.md
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "4px 12px",
                borderRadius: 9999,
                border: "1px solid rgba(16, 185, 129, 0.35)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 6px #10b981",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#34d399",
                }}
              >
                PRIMARY PRINCIPLE ACTIVE
              </span>
            </div>
          </div>

          {/* Terminal Body with Dual-Line Typewriter Typography */}
          <div
            style={{
              padding: "26px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              backgroundColor: "rgba(5, 9, 20, 0.9)",
            }}
          >
            {/* LINE 9: "Pada dasarnya," (Typewriter) */}
            <div style={{ display: "flex", alignItems: "center", minHeight: 36 }}>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: SAMPAH_DIGITAL_COLORS.textSecondary,
                  letterSpacing: -0.2,
                  fontFamily: FONT_SANS,
                }}
              >
                {typedLine1}
              </span>
              {/* Cursor for Line 1 */}
              {isTyping1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 3,
                    height: 28,
                    backgroundColor: "#38bdf8",
                    marginLeft: 6,
                    boxShadow: "0 0 8px #38bdf8",
                    opacity: Math.sin(frame * 0.5) > 0 ? 1 : 0.2,
                  }}
                />
              )}
            </div>

            {/* LINE 10: "software diciptakan untuk membantu memecahkan masalah dari pengguna." (Typewriter) */}
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                lineHeight: 1.25,
                letterSpacing: -0.8,
                minHeight: 130,
                fontFamily: FONT_SANS,
              }}
            >
              <span>{typedLine2}</span>

              {/* Cursor for Line 2 */}
              {isTyping2 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 4,
                    height: 44,
                    backgroundColor: "#38bdf8",
                    marginLeft: 8,
                    verticalAlign: "middle",
                    boxShadow: "0 0 12px #38bdf8",
                    opacity: Math.sin(frame * 0.5) > 0 ? 1 : 0.2,
                  }}
                />
              )}
            </div>

            {/* Milestone Word Tags (Light up dynamically as words get typed) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingTop: 8,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: hasTypedSoftware
                    ? "rgba(56, 189, 248, 0.2)"
                    : "rgba(255, 255, 255, 0.04)",
                  border: hasTypedSoftware
                    ? "1px solid rgba(56, 189, 248, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: hasTypedSoftware ? "#38bdf8" : "#64748b",
                }}
              >
                1. SOFTWARE
              </div>

              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: hasTypedMembantu
                    ? "rgba(168, 85, 247, 0.2)"
                    : "rgba(255, 255, 255, 0.04)",
                  border: hasTypedMembantu
                    ? "1px solid rgba(168, 85, 247, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: hasTypedMembantu ? "#c084fc" : "#64748b",
                }}
              >
                2. MEMBANTU
              </div>

              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: hasTypedMasalah
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(255, 255, 255, 0.04)",
                  border: hasTypedMasalah
                    ? "1px solid rgba(245, 158, 11, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: hasTypedMasalah ? "#f59e0b" : "#64748b",
                }}
              >
                3. PECAHKAN MASALAH
              </div>

              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: hasTypedPengguna
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.04)",
                  border: hasTypedPengguna
                    ? "1px solid rgba(16, 185, 129, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: hasTypedPengguna ? "#10b981" : "#64748b",
                }}
              >
                4. PENGGUNA (USER)
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. PROBLEM-TO-SOLUTION TRANSFORMATION BLUEPRINT (Width: 880px)
               Left: User Pain Point | Center: Software Bridge | Right: Solution
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 880,
            borderRadius: 20,
            backgroundColor: "rgba(10, 18, 36, 0.94)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)",
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "1fr 0.35fr 1fr",
            gap: 16,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* LEFT: User Problem / Pain Point */}
          <div
            style={{
              transform: `translateX(${leftCardSlideX}px)`,
              opacity: leftCardOpacity,
              padding: "16px 18px",
              borderRadius: 14,
              backgroundColor: "rgba(244, 63, 94, 0.08)",
              border: "1.5px solid rgba(244, 63, 94, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaExclamationCircle size={18} color="#f43f5e" />
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#f43f5e",
                  letterSpacing: 1,
                }}
              >
                INPUT: MASALAH PENGGUNA
              </span>
            </div>
            <h4
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.35,
              }}
            >
              Proses Manual &amp; Rumit
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: 12.5,
                color: "#94a3b8",
                lineHeight: 1.4,
              }}
            >
              Memakan waktu berjam-jam, rentan salah hitung, &amp; melelahkan.
            </p>
          </div>

          {/* CENTER: The Software Bridge (Conduit) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                border: "1.5px solid rgba(56, 189, 248, 0.6)",
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaBolt size={16} color="#38bdf8" />
            </div>

            <span
              style={{
                fontSize: 10,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#38bdf8",
                textAlign: "center",
              }}
            >
              SOFTWARE BRIDGE
            </span>

            {/* Animated Energy Arrow */}
            <svg width="40" height="12" viewBox="0 0 40 12">
              <line
                x1="0"
                y1="6"
                x2="32"
                y2="6"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="6 3"
                strokeDashoffset={-energyFlowX}
              />
              <polygon points="32,2 40,6 32,10" fill="#38bdf8" />
            </svg>
          </div>

          {/* RIGHT: Empowered User Solution */}
          <div
            style={{
              transform: `translateX(${rightCardSlideX}px)`,
              opacity: rightCardOpacity,
              padding: "16px 18px",
              borderRadius: 14,
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1.5px solid rgba(16, 185, 129, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaCheckCircle size={18} color="#10b981" />
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#10b981",
                  letterSpacing: 1,
                }}
              >
                OUTPUT: SOLUSI NYATA
              </span>
            </div>
            <h4
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.35,
              }}
            >
              Otomatis &amp; 10x Lebih Cepat
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: 12.5,
                color: "#94a3b8",
                lineHeight: 1.4,
              }}
            >
              Masalah terpecahkan tuntas dengan pengalaman pengguna yang mudah.
            </p>
          </div>

          {/* Bottom Conversion Metric Bar */}
          <div
            style={{
              gridColumn: "1 / -1",
              marginTop: 4,
              paddingTop: 12,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: FONT_MONO,
              fontSize: 11,
            }}
          >
            <span style={{ color: "#94a3b8" }}>
              USER IMPACT CONVERSION
            </span>
            <span style={{ color: "#10b981", fontWeight: 900 }}>
              {Math.round(resolutionProgress)}% PROBLEM RESOLVED
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. BOTTOM CONTEXT PHILOSOPHICAL PILL (F540+)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 540 && (
          <div
            style={{
              transform: `translateY(${bottomPillSlideY}px)`,
              opacity: bottomPillOpacity,
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 24, 38, 0.94)",
              border: "1.5px solid rgba(56, 189, 248, 0.45)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FaCheckCircle size={16} color={SAMPAH_DIGITAL_COLORS.solutionEmerald} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              ESENSI SOFTWARE = MEMECAHKAN MASALAH PENGGUNA
            </span>
            <FaLightbulb size={14} color="#f59e0b" />
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
