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
  FaCheckCircle,
  FaClipboardCheck,
  FaCogs,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// ─────────────────────────────────────────────────────────────────────────────
// 📝 LINE 15 WORD TIMINGS (Kata per kata)
// Voiceover audio timestamps: F805 - F900
// ─────────────────────────────────────────────────────────────────────────────
interface TypedWord {
  text: string;
  frame: number;
  color?: string;
  isBold?: boolean;
}

const LINE15_WORDS: TypedWord[] = [
  { text: "Pastikan", frame: 805, color: "#f59e0b", isBold: true },
  { text: "proses", frame: 820, color: "#f8fafc", isBold: true },
  { text: "tradisionalnya", frame: 834, color: "#38bdf8", isBold: true },
  { text: "berjalan", frame: 850, color: "#f8fafc", isBold: false },
  { text: "dengan", frame: 864, color: "#94a3b8", isBold: false },
  { text: "baik", frame: 874, color: "#10b981", isBold: true },
  { text: "dan", frame: 884, color: "#94a3b8", isBold: false },
  { text: "lancar.", frame: 894, color: "#10b981", isBold: true },
];

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ FASE 1: LINE 12 (F576 - F660)
  // "Sebelum upgrade proses bisnis kita menjadi software,"
  // Disajikan bersih, fokus, dan tidak terdistraksi elemen lain.
  // ─────────────────────────────────────────────────────────────────────────────
  const badgeSlideY = interpolate(frame, [576, 588], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const badgeOpacity = interpolate(frame, [576, 586], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleSlideY = interpolate(frame, [578, 598], [45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOpacity = interpolate(frame, [578, 592], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pipeline Flow Node Animation (Business -> Software)
  const pipelineOpacity = interpolate(frame, [596, 610], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pipelineSlideY = interpolate(frame, [596, 614], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const pipelineProgress = interpolate(frame, [600, 645], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ FASE 2: LINE 13 (F660 - F712)
  // "Entah itu mobile app, web app, atau automation berbasis AI."
  // Pop up 1 per 1 dengan spring bounce yang teratur (jangan buru-buru).
  // ─────────────────────────────────────────────────────────────────────────────
  const subtitleSlideY = interpolate(frame, [658, 670], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subtitleOpacity = interpolate(frame, [658, 668], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pop Up 1: Mobile App (F666)
  const card1Spring =
    frame >= 666
      ? spring({
          frame: frame - 666,
          fps,
          config: { damping: 13, mass: 0.8, stiffness: 130 },
        })
      : 0;
  const isCard1Active = frame >= 666;

  // Pop Up 2: Web App (F705 - tenang, tidak terburu-buru)
  const card2Spring =
    frame >= 705
      ? spring({
          frame: frame - 705,
          fps,
          config: { damping: 13, mass: 0.8, stiffness: 130 },
        })
      : 0;
  const isCard2Active = frame >= 705;

  // Pop Up 3: AI Automation (F745 - tenang, tidak terburu-buru)
  const card3Spring =
    frame >= 745
      ? spring({
          frame: frame - 745,
          fps,
          config: { damping: 13, mass: 0.8, stiffness: 130 },
        })
      : 0;
  const isCard3Active = frame >= 745;

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ FASE 3: LINE 15 (Masuk di Frame 805)
  // "Pastikan proses tradisionalnya berjalan dengan baik dan lancar."
  // Efek ketikan kata per kata (word-by-word typing) + status verifikasi.
  // ─────────────────────────────────────────────────────────────────────────────
  const terminalSlideY = interpolate(frame, [805, 822], [55, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const terminalOpacity = interpolate(frame, [805, 818], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor blink logic
  const showCursor = frame < 905 && Math.floor((frame / 8) % 2) === 0;

  // Readiness completion check (when "lancar." is reached)
  const isFullyTyped = frame >= 894;
  const auditVerificationSpring =
    frame >= 898
      ? spring({
          frame: frame - 898,
          fps,
          config: { damping: 13, mass: 0.7, stiffness: 140 },
        })
      : 0;

  // Cog rotation
  const cogRotation = ((frame - 576) * 2.5) % 360;

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.wasteAmber}>
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
            1. FASE 1: LINE 12 HEADLINE & PRASYARAT UPGRADE (F576 - F660)
            "Sebelum upgrade proses bisnis kita menjadi software,"
           ═════════════════════════════════════════════════════════════════ */}
        {/* Top Strategy Badge */}
        <div
          style={{
            transform: `translateY(${badgeSlideY}px)`,
            opacity: badgeOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(35, 24, 10, 0.94)",
            border: "1.5px solid rgba(245, 158, 11, 0.55)",
            boxShadow: "0 0 25px rgba(245, 158, 11, 0.3)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: SAMPAH_DIGITAL_COLORS.wasteAmber,
              boxShadow: `0 0 10px ${SAMPAH_DIGITAL_COLORS.wasteAmber}`,
            }}
          />
          <FaShieldAlt size={15} color={SAMPAH_DIGITAL_COLORS.wasteAmber} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.wasteAmber,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            PRASYARAT TRANSFORMASI // STEP 01
          </span>
        </div>

        {/* Headline Masked Slide */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            overflow: "hidden",
            paddingBottom: 4,
          }}
        >
          <div style={{ transform: `translateY(${titleSlideY}px)`, opacity: titleOpacity }}>
            <p
              style={{
                fontSize: 30,
                color: SAMPAH_DIGITAL_COLORS.textSecondary,
                fontWeight: 700,
                margin: "0 0 8px 0",
                letterSpacing: -0.3,
              }}
            >
              Sebelum upgrade proses bisnis kita menjadi
            </p>

            <h2
              style={{
                fontSize: 58,
                fontWeight: 900,
                margin: 0,
                letterSpacing: -1,
                lineHeight: 1.18,
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #f59e0b 0%, #38bdf8 55%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 35px rgba(245, 158, 11, 0.4))",
                }}
              >
                SOFTWARE MODERN
              </span>{" "}
              <span style={{ fontSize: 46 }}>⚙️</span>
            </h2>
          </div>
        </div>

        {/* Pipeline Transformation Concept Bar */}
        <div
          style={{
            transform: `translateY(${pipelineSlideY}px)`,
            opacity: pipelineOpacity,
            width: 880,
            padding: "14px 24px",
            borderRadius: 16,
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            border: "1.2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 26,
            boxSizing: "border-box",
          }}
        >
          {/* Node 1: Proses Bisnis */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaClipboardCheck size={16} color="#f59e0b" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f8fafc" }}>
                PROSES BISNIS
              </div>
              <div style={{ fontSize: 10.5, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                SOP &amp; Manual Workflow
              </div>
            </div>
          </div>

          {/* Animated Transition Conduit */}
          <div
            style={{
              flex: 1,
              margin: "0 20px",
              position: "relative",
              height: 6,
              borderRadius: 999,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pipelineProgress}%`,
                background: "linear-gradient(90deg, #f59e0b, #38bdf8)",
                boxShadow: "0 0 10px #38bdf8",
              }}
            />
          </div>

          {/* Node 2: Software Target */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#38bdf8",
                  textAlign: "right",
                }}
              >
                SISTEM SOFTWARE
              </div>
              <div
                style={{
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  textAlign: "right",
                }}
              >
                Automated &amp; Scalable
              </div>
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                border: "1px solid rgba(56, 189, 248, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaArrowRight size={14} color="#38bdf8" />
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. FASE 2: LINE 13 POP UP 1/1 (F660 - F712)
            "Entah itu mobile app, web app, atau automation berbasis AI."
            Muncul 1 per 1 secara berurutan, tidak terburu-buru.
           ═════════════════════════════════════════════════════════════════ */}
        <div style={{ width: 880, marginBottom: 26 }}>
          {/* Subtitle label */}
          <div
            style={{
              transform: `translateY(${subtitleSlideY}px)`,
              opacity: subtitleOpacity,
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#64748b",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              // PILIHAN IMPLEMENTASI PLATFORM:
            </span>
          </div>

          {/* 3 Pop-up Cards Container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {/* POP UP 1: MOBILE APP (F666) */}
            <div
              style={{
                transform: `scale(${card1Spring})`,
                opacity: isCard1Active ? Math.min(1, card1Spring) : 0,
                padding: "20px 18px",
                borderRadius: 20,
                backgroundColor: isCard1Active
                  ? "rgba(15, 23, 42, 0.95)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isCard1Active
                  ? "2px solid #38bdf8"
                  : "1.5px dashed rgba(255, 255, 255, 0.1)",
                boxShadow: isCard1Active
                  ? "0 14px 35px rgba(0, 0, 0, 0.7), 0 0 28px rgba(56, 189, 248, 0.35)"
                  : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: "#38bdf8",
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  marginBottom: 14,
                  letterSpacing: 1.1,
                }}
              >
                01 // CLIENT APP
              </div>

              {/* Icon Orb */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.18)",
                  border: "1.5px solid rgba(56, 189, 248, 0.5)",
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <FaMobileAlt size={26} color="#38bdf8" />
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: 4,
                  letterSpacing: -0.3,
                }}
              >
                Mobile App
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: 12.5,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                iOS &amp; Android
              </div>
            </div>

            {/* POP UP 2: WEB APP (F680) */}
            <div
              style={{
                transform: `scale(${card2Spring})`,
                opacity: isCard2Active ? Math.min(1, card2Spring) : 0,
                padding: "20px 18px",
                borderRadius: 20,
                backgroundColor: isCard2Active
                  ? "rgba(15, 23, 42, 0.95)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isCard2Active
                  ? "2px solid #a855f7"
                  : "1.5px dashed rgba(255, 255, 255, 0.1)",
                boxShadow: isCard2Active
                  ? "0 14px 35px rgba(0, 0, 0, 0.7), 0 0 28px rgba(168, 85, 247, 0.35)"
                  : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  color: "#a855f7",
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  marginBottom: 14,
                  letterSpacing: 1.1,
                }}
              >
                02 // CLOUD SAAS
              </div>

              {/* Icon Orb */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  backgroundColor: "rgba(168, 85, 247, 0.18)",
                  border: "1.5px solid rgba(168, 85, 247, 0.5)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <FaGlobe size={26} color="#a855f7" />
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: 4,
                  letterSpacing: -0.3,
                }}
              >
                Web App
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: 12.5,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Dashboard &amp; SaaS
              </div>
            </div>

            {/* POP UP 3: AI AUTOMATION (F694) */}
            <div
              style={{
                transform: `scale(${card3Spring})`,
                opacity: isCard3Active ? Math.min(1, card3Spring) : 0,
                padding: "20px 18px",
                borderRadius: 20,
                backgroundColor: isCard3Active
                  ? "rgba(15, 23, 42, 0.95)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isCard3Active
                  ? "2px solid #10b981"
                  : "1.5px dashed rgba(255, 255, 255, 0.1)",
                boxShadow: isCard3Active
                  ? "0 14px 35px rgba(0, 0, 0, 0.7), 0 0 28px rgba(16, 185, 129, 0.35)"
                  : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  color: "#10b981",
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  marginBottom: 14,
                  letterSpacing: 1.1,
                }}
              >
                03 // INTELLIGENCE
              </div>

              {/* Icon Orb */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "1.5px solid rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <FaRobot size={26} color="#10b981" />
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: 4,
                  letterSpacing: -0.3,
                }}
              >
                AI Automation
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: 12.5,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Agentic Workflows
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. FASE 3: LINE 15 TYPEWRITER TERMINAL (Masuk di Frame 805)
            "Pastikan proses tradisionalnya berjalan dengan baik dan lancar."
            Sajian Efek Ketikan Kata Per Kata dengan cursor & verification.
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 805 && (
          <div
            style={{
              transform: `translateY(${terminalSlideY}px)`,
              opacity: terminalOpacity,
              width: 880,
              borderRadius: 22,
              backgroundColor: "rgba(13, 17, 28, 0.97)",
              border: "1.8px solid rgba(245, 158, 11, 0.45)",
              boxShadow:
                "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 40px rgba(245, 158, 11, 0.22)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                padding: "13px 20px",
                backgroundColor: "rgba(9, 11, 20, 0.98)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Window Dots & Label */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: "#ef4444",
                    }}
                  />
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: "#f59e0b",
                      boxShadow: "0 0 6px #f59e0b",
                    }}
                  />
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    fontFamily: FONT_MONO,
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div style={{ transform: `rotate(${cogRotation}deg)`, display: "flex" }}>
                    <FaCogs size={13} color="#f59e0b" />
                  </div>
                  audit-terminal // traditional_process_check.sh
                </span>
              </div>

              {/* Status Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  backgroundColor: isFullyTyped
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(245, 158, 11, 0.15)",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  border: isFullyTyped
                    ? "1px solid rgba(16, 185, 129, 0.5)"
                    : "1px solid rgba(245, 158, 11, 0.4)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: isFullyTyped ? "#10b981" : "#f59e0b",
                    boxShadow: isFullyTyped ? "0 0 8px #10b981" : "0 0 6px #f59e0b",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: isFullyTyped ? "#10b981" : "#f59e0b",
                  }}
                >
                  {isFullyTyped ? "AUDIT PASSED" : "LIVE TYPING"}
                </span>
              </div>
            </div>

            {/* Terminal Body: Kata Per Kata Typewriter Display */}
            <div
              style={{
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Terminal Prompt Prefix */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  color: "#64748b",
                }}
              >
                <FaTerminal size={12} color="#f59e0b" />
                <span>$ verify_traditional_process --strict --ensure-stable</span>
              </div>

              {/* Word By Word Text Line */}
              <div
                style={{
                  minHeight: 88,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "0 10px",
                  lineHeight: 1.45,
                }}
              >
                {LINE15_WORDS.map((w, idx) => {
                  const isVisible = frame >= w.frame;
                  if (!isVisible) return null;

                  return (
                    <span
                      key={idx}
                      style={{
                        fontSize: 34,
                        fontWeight: w.isBold ? 900 : 700,
                        color: w.color || "#f8fafc",
                        letterSpacing: -0.4,
                        textShadow:
                          w.isBold && w.color !== "#f8fafc"
                            ? `0 0 16px ${w.color}55`
                            : "none",
                      }}
                    >
                      {w.text}
                    </span>
                  );
                })}

                {/* Glowing Typing Cursor */}
                {showCursor && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 14,
                      height: 32,
                      backgroundColor: "#f59e0b",
                      borderRadius: 2,
                      boxShadow: "0 0 10px #f59e0b",
                      marginLeft: 2,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </div>

              {/* Verified Stable Stamp (Pop up when line 15 completes at F780+) */}
              {isFullyTyped && (
                <div
                  style={{
                    transform: `scale(${auditVerificationSpring})`,
                    padding: "12px 18px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "1.5px solid rgba(16, 185, 129, 0.55)",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaCheckCircle size={18} color="#10b981" />
                    <span
                      style={{
                        fontSize: 13.5,
                        fontWeight: 800,
                        color: "#f8fafc",
                        letterSpacing: 0.3,
                      }}
                    >
                      PROSES MANUAL VALID &amp; BEBAS HAMBATAN
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#10b981",
                      letterSpacing: 1,
                    }}
                  >
                    SIAP DIGITALISASI ✓
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
