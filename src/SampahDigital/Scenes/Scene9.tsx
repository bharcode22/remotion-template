import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBullseye,
  FaCheckCircle,
  FaCrown,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

interface StyledSpan {
  text: string;
  style?: React.CSSProperties;
}

const renderTypedSpans = (spans: StyledSpan[], charCount: number) => {
  let accumulated = 0;
  return spans.map((span, idx) => {
    const start = accumulated;
    const end = accumulated + span.text.length;
    accumulated = end;

    if (charCount <= start) {
      return null;
    }
    const visibleLength = Math.min(span.text.length, charCount - start);
    const visibleText = span.text.slice(0, visibleLength);
    return (
      <span key={idx} style={span.style}>
        {visibleText}
      </span>
    );
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// 📝 STYLED SPANS FOR TYPING EFFECT (Lines 26 - 28)
// High-contrast, vibrant typography on dark cyberpunk background
// ─────────────────────────────────────────────────────────────────────────────
const SPANS_LINE26: StyledSpan[] = [
  {
    text: "Dan yang paling ",
    style: {
      color: "#f8fafc",
      fontWeight: 900,
    },
  },
  {
    text: "PENTING,",
    style: {
      background:
        "linear-gradient(90deg, #f59e0b 0%, #fbbf24 60%, #ffffff 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      filter: "drop-shadow(0 0 25px rgba(245, 158, 11, 0.5))",
      fontWeight: 900,
    },
  },
];

const SPANS_LINE27: StyledSpan[] = [
  {
    text: "Menentukan ",
    style: {
      color: "#f8fafc",
      fontWeight: 800,
    },
  },
  {
    text: "masalah ",
    style: {
      color: "#38bdf8",
      textShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
      fontWeight: 900,
    },
  },
  {
    text: "apa yang bisa ",
    style: {
      color: "#f8fafc",
      fontWeight: 800,
    },
  },
  {
    text: "dipecahkan ",
    style: {
      color: "#10b981",
      textShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
      fontWeight: 900,
    },
  },
  {
    text: "atau ",
    style: {
      color: "#94a3b8",
      fontWeight: 700,
    },
  },
  {
    text: "dipermudah,",
    style: {
      color: "#34d399",
      textShadow: "0 0 15px rgba(52, 211, 153, 0.5)",
      fontWeight: 900,
    },
  },
];

const SPANS_LINE28: StyledSpan[] = [
  {
    text: "Jika kita upgrade ke ",
    style: {
      color: "#f8fafc",
      fontWeight: 900,
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
    },
  },
  {
    text: "SISTEM YANG LEBIH MODERN.",
    style: {
      background:
        "linear-gradient(90deg, #10b981 0%, #38bdf8 55%, #a855f7 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      filter: "drop-shadow(0 0 25px rgba(16, 185, 129, 0.5))",
      fontWeight: 900,
    },
  },
];

export const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPOKEN TIMELINES (Frames 1478 - 1709)
  // Lines 26 - 28 (Grand Finale & Core Purpose dengan EFEK KETIKAN):
  // - Line 26 (F1480 - F1514): "Dan yang paling penting,"
  // - Line 27 (F1518 - F1618): "Menentukan masalah apa yang bisa dipecahkan atau dipermudah,"
  // - Line 28 (F1626 - F1706): "jika kita upgrade ke sistem yang lebih modern."
  // Theme: VALUE-DRIVEN PURPOSE // ANTI-SAMPAH DIGITAL VICTORY
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Stage Entrance Slide (F1478 - F1495)
  const headerSlideY = interpolate(frame, [1478, 1495], [-35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const headerOpacity = interpolate(frame, [1478, 1490], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Line 26 Typewriter Effect: "Dan yang paling penting," (F1480 - F1514)
  const line26SlideY = interpolate(frame, [1478, 1494], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const line26Opacity = interpolate(frame, [1478, 1490], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const charCount26 = Math.floor(
    interpolate(
      frame,
      [1480, 1488, 1496, 1504, 1514],
      [0, 4, 9, 16, 24],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  // 3. Line 27 Card & Typewriter Effect (F1518 - F1618)
  // "Menentukan masalah apa yang bisa dipecahkan atau dipermudah,"
  const card27Spring =
    frame >= 1514
      ? spring({
        frame: frame - 1514,
        fps,
        config: { damping: 13, mass: 0.8, stiffness: 120 },
      })
      : 0;
  const isCard27Active = frame >= 1514;

  const charCount27 = Math.floor(
    interpolate(
      frame,
      [1518, 1532, 1546, 1556, 1568, 1582, 1596, 1616],
      [0, 11, 19, 23, 33, 44, 49, 60],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  // 4. Line 28 Card & Typewriter Effect (F1626 - F1706)
  // "jika kita upgrade ke sistem yang lebih modern."
  const card28Spring =
    frame >= 1622
      ? spring({
        frame: frame - 1622,
        fps,
        config: { damping: 12, mass: 0.7, stiffness: 140 },
      })
      : 0;
  const isCard28Active = frame >= 1622;

  const charCount28 = Math.floor(
    interpolate(
      frame,
      [1626, 1636, 1646, 1660, 1668, 1680, 1688, 1704],
      [0, 5, 10, 18, 21, 28, 39, 46],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  // Aura pulse at the grand finale
  const auraGlow = interpolate(
    Math.sin((frame - 1626) * 0.15),
    [-1, 1],
    [30, 60]
  );

  // Blinking terminal cursor (flips every 6 frames)
  const isCursorBlink = Math.floor((frame / 6) % 2) === 0;

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.solutionEmerald}>
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
        {/* ═════════════════════════════════════════════════════════════════
            1. TOP BADGE & PINNACLE FOCUS
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `translateY(${headerSlideY}px)`,
            opacity: headerOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 26px",
            borderRadius: 9999,
            backgroundColor: "rgba(35, 24, 10, 0.94)",
            border: "1.5px solid rgba(245, 158, 11, 0.65)",
            boxShadow: "0 0 30px rgba(245, 158, 11, 0.35)",
            marginBottom: 16,
          }}
        >
          <FaCrown size={16} color="#f59e0b" />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.4,
              color: "#f59e0b",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            KLIMAKS // TUJUAN UTAMA SOFTWARE
          </span>
        </div>

        {/* Spoken Headline (Line 26: F1480 - F1514) - Efek Ketikan */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            overflow: "hidden",
            paddingBottom: 4,
          }}
        >
          <div style={{ transform: `translateY(${line26SlideY}px)`, opacity: line26Opacity }}>
            <h2
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "#f8fafc",
                margin: 0,
                letterSpacing: -1,
                lineHeight: 1.25,
                minHeight: 62,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>{renderTypedSpans(SPANS_LINE26, charCount26)}</span>
              {frame >= 1480 && frame < 1518 && (
                <span
                  style={{
                    color: "#f59e0b",
                    fontWeight: 900,
                    marginLeft: 4,
                    opacity: isCursorBlink ? 1 : 0,
                    textShadow: "0 0 15px #f59e0b",
                  }}
                >
                  |
                </span>
              )}
            </h2>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE VALUE EQUATION (LINE 27: F1518 - F1618) - Efek Ketikan
            "Menentukan masalah apa yang bisa dipecahkan atau dipermudah,"
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${card27Spring})`,
            opacity: isCard27Active ? Math.min(1, card27Spring) : 0,
            width: 890,
            borderRadius: 24,
            backgroundColor: "rgba(13, 20, 36, 0.96)",
            border: "2px solid rgba(56, 189, 248, 0.55)",
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.85), 0 0 40px rgba(56, 189, 248, 0.25)",
            padding: "26px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxSizing: "border-box",
            marginBottom: 20,
          }}
        >
          {/* Header Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaBullseye size={18} color="#38bdf8" />
              <span
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#38bdf8",
                  letterSpacing: 1.2,
                }}
              >
                VALUE PROPOSITION // SOLUSI NYATA
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 999,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#38bdf8",
              }}
            >
              <span>●</span>
              <span>{frame >= 1618 ? "SOLVED" : "ANALYZING..."}</span>
            </div>
          </div>

          {/* Core Spoken Statement (Line 27: Efek Ketikan) */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                border: "1.5px solid rgba(56, 189, 248, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaLightbulb size={24} color="#38bdf8" />
            </div>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: "#f8fafc",
                  margin: "0 0 8px 0",
                  lineHeight: 1.3,
                  letterSpacing: -0.5,
                  minHeight: 82,
                }}
              >
                <span>{renderTypedSpans(SPANS_LINE27, charCount27)}</span>
                {frame >= 1518 && frame < 1626 && (
                  <span
                    style={{
                      color: "#38bdf8",
                      fontWeight: 900,
                      marginLeft: 4,
                      opacity: isCursorBlink ? 1 : 0,
                      textShadow: "0 0 15px #38bdf8",
                    }}
                  >
                    |
                  </span>
                )}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  color: "#94a3b8",
                  lineHeight: 1.5,
                }}
              >
                Bukan sekadar ikut tren atau bisa coding, melainkan menciptakan
                efisiensi nyata yang langsung dirasakan pengguna.
              </p>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. GRAND FINALE CLIMAX (LINE 28: F1626 - F1706) - Efek Ketikan
            "jika kita upgrade ke sistem yang lebih modern."
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 1620 && (
          <div
            style={{
              transform: `scale(${card28Spring})`,
              opacity: isCard28Active ? Math.min(1, card28Spring) : 0,
              width: 890,
              borderRadius: 24,
              backgroundColor: "rgba(10, 26, 22, 0.96)",
              border: "2.4px solid #10b981",
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.9), 0 0 ${auraGlow}px rgba(16, 185, 129, 0.45)`,
              padding: "26px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 12,
              boxSizing: "border-box",
            }}
          >
            {/* Victory Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: "1px solid rgba(16, 185, 129, 0.5)",
                color: "#10b981",
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                letterSpacing: 1.4,
              }}
            >
              <FaRocket size={13} color="#10b981" />
              <span>THE SUSTAINABLE UPGRADE</span>
            </div>

            {/* Line 28 Punchline (Efek Ketikan) */}
            <h2
              style={{
                margin: 0,
                fontSize: 38,
                fontWeight: 900,
                color: "#f8fafc",
                letterSpacing: -0.6,
                lineHeight: 1.3,
                minHeight: 98,
              }}
            >
              <span>{renderTypedSpans(SPANS_LINE28, charCount28)}</span>
              {frame >= 1626 && (
                <span
                  style={{
                    color: "#10b981",
                    fontWeight: 900,
                    marginLeft: 4,
                    opacity: isCursorBlink ? 1 : 0,
                    textShadow: "0 0 15px #10b981",
                  }}
                >
                  |
                </span>
              )}
            </h2>

            {/* Anti-Sampah Digital Seal */}
            <div
              style={{
                marginTop: 4,
                padding: "9px 22px",
                borderRadius: 14,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1.2px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FaCheckCircle size={18} color="#10b981" />
              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 800,
                  color: "#f8fafc",
                  fontFamily: FONT_MONO,
                  letterSpacing: 0.8,
                }}
              >
                SOFTWARE BERMANFAAT // BUKAN SAMPAH DIGITAL
              </span>
              <FaShieldAlt size={16} color="#38bdf8" />
            </div>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
