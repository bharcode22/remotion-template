import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaDatabase,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPOKEN TIMELINES (Frames 1105 - 1470)
  // Line 20:
  // "Kita bisa menganalisa kebutuhan, alur dari software-nya, menyusun struktur data,
  // memilih pendekatan apa yang mau kita gunakan, apakah web app, mobile app atau AI automation."
  // Theme: BLUEPRINT ARSITEKTUR SOFTWARE LENGKAP
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Header Slide (F1105 - F1125)
  const headerSlideY = interpolate(frame, [1105, 1125], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const headerOpacity = interpolate(frame, [1105, 1120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Pilar 1: Analisa Kebutuhan (F1114 - F1170)
  // "Kita bisa menganalisa kebutuhan,"
  const pilar1Spring =
    frame >= 1114
      ? spring({
          frame: frame - 1114,
          fps,
          config: { damping: 13, mass: 0.7, stiffness: 130 },
        })
      : 0;
  const isPilar1Active = frame >= 1114;

  // 3. Pilar 2: Alur Software (F1173 - F1220)
  // "alur dari software-nya,"
  const pilar2Spring =
    frame >= 1173
      ? spring({
          frame: frame - 1173,
          fps,
          config: { damping: 13, mass: 0.7, stiffness: 130 },
        })
      : 0;
  const isPilar2Active = frame >= 1173;

  // 4. Pilar 3: Menyusun Struktur Data (F1221 - F1275)
  // "menyusun struktur data,"
  const pilar3Spring =
    frame >= 1221
      ? spring({
          frame: frame - 1221,
          fps,
          config: { damping: 13, mass: 0.7, stiffness: 130 },
        })
      : 0;
  const isPilar3Active = frame >= 1221;

  // 5. Pilar 4: Pendekatan Platform (F1279 - F1475)
  // Line 23: "memilih pendekatan apa yang mau kita gunakan," (F1279 - F1350)
  // Line 24: "apakah web app, mobile app atau AI automation." (F1360 - F1472)
  const pilar4Spring =
    frame >= 1279
      ? spring({
          frame: frame - 1279,
          fps,
          config: { damping: 13, mass: 0.7, stiffness: 130 },
        })
      : 0;
  const isPilar4Active = frame >= 1279;

  // 3 Platform pills lighting up in sync with voiceover (Line 24: F1365 - F1472)
  // - Web App: voiceover speaks "Apakah web app" (F1365 - F1395)
  // - Mobile App: voiceover speaks "mobile app" (F1395 - F1430)
  // - AI Automation: voiceover speaks "atau AI automation" (F1430 - F1470)
  // - At Frame 1472: All 3 platforms are completely illuminated (SUDAH MENYALA DI 1472)
  const isWebActive = frame >= 1365;
  const isMobileActive = frame >= 1395;
  const isAiActive = frame >= 1430;
  const isAllPlatformsLitAt1472 = frame >= 1470;

  // Celebratory pulse when all platforms illuminate at Frame 1472
  const allLitScale =
    frame >= 1470
      ? 1 +
        Math.sin((frame - 1470) * 0.45) *
          0.025 *
          Math.exp(-(frame - 1470) * 0.12)
      : 1;

  // Connecting laser conduit progress reaching 100% right at frame 1472
  const conduitProgress = interpolate(frame, [1114, 1472], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
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
        {/* ═════════════════════════════════════════════════════════════════
            1. TOP HEADER & ARCHITECTURAL BADGE
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `translateY(${headerSlideY}px)`,
            opacity: headerOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 22,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 24, 40, 0.94)",
              border: "1.5px solid rgba(56, 189, 248, 0.55)",
              boxShadow: "0 0 25px rgba(56, 189, 248, 0.3)",
              marginBottom: 12,
            }}
          >
            <FaLayerGroup size={15} color="#38bdf8" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2.2,
                color: "#38bdf8",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              FASE 02 // RANCANG SISTEM SOFTWARE
            </span>
          </div>

          {/* Subtitle / Header Statement */}
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              margin: 0,
              letterSpacing: -0.8,
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Arsitektur Sistem </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #a855f7 50%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))",
              }}
            >
              Terstruktur &amp; Terukur
            </span>
          </h2>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE 4 ARCHITECTURAL PILLARS (LINE 20)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 890,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginBottom: 20,
          }}
        >
          {/* PILAR 1: Analisa Kebutuhan (F1114) */}
          <div
            style={{
              transform: `scale(${pilar1Spring})`,
              opacity: isPilar1Active ? Math.min(1, pilar1Spring) : 0,
              padding: "16px 22px",
              borderRadius: 18,
              backgroundColor: isPilar1Active
                ? "rgba(15, 23, 42, 0.95)"
                : "rgba(255, 255, 255, 0.02)",
              border: isPilar1Active
                ? "2px solid #38bdf8"
                : "1px dashed rgba(255, 255, 255, 0.1)",
              boxShadow: isPilar1Active
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.25)"
                : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "1.5px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaSearch size={20} color="#38bdf8" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 21,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: -0.3,
                  }}
                >
                  1. Menganalisa Kebutuhan
                </div>
                <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                  Identifikasi pain point pengguna &amp; ruang lingkup fitur esensial
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.18)",
                color: "#38bdf8",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
              }}
            >
              REQUIREMENTS
            </div>
          </div>

          {/* PILAR 2: Alur Software (F1173) */}
          <div
            style={{
              transform: `scale(${pilar2Spring})`,
              opacity: isPilar2Active ? Math.min(1, pilar2Spring) : 0,
              padding: "16px 22px",
              borderRadius: 18,
              backgroundColor: isPilar2Active
                ? "rgba(15, 23, 42, 0.95)"
                : "rgba(255, 255, 255, 0.02)",
              border: isPilar2Active
                ? "2px solid #a855f7"
                : "1px dashed rgba(255, 255, 255, 0.1)",
              boxShadow: isPilar2Active
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(168, 85, 247, 0.25)"
                : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  border: "1.5px solid rgba(168, 85, 247, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaSitemap size={20} color="#a855f7" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 21,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: -0.3,
                  }}
                >
                  2. Alur dari Software-nya
                </div>
                <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                  Flowchart user journey, logic transitions &amp; service pipeline
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(168, 85, 247, 0.18)",
                color: "#a855f7",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
              }}
            >
              LOGIC WORKFLOW
            </div>
          </div>

          {/* PILAR 3: Menyusun Struktur Data (F1221) */}
          <div
            style={{
              transform: `scale(${pilar3Spring})`,
              opacity: isPilar3Active ? Math.min(1, pilar3Spring) : 0,
              padding: "16px 22px",
              borderRadius: 18,
              backgroundColor: isPilar3Active
                ? "rgba(15, 23, 42, 0.95)"
                : "rgba(255, 255, 255, 0.02)",
              border: isPilar3Active
                ? "2px solid #10b981"
                : "1px dashed rgba(255, 255, 255, 0.1)",
              boxShadow: isPilar3Active
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.25)"
                : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1.5px solid rgba(16, 185, 129, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaDatabase size={20} color="#10b981" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 21,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: -0.3,
                  }}
                >
                  3. Menyusun Struktur Data
                </div>
                <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                  Database schema, relational entities &amp; secure data models
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.18)",
                color: "#10b981",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
              }}
            >
              DATA SCHEMAS
            </div>
          </div>

          {/* PILAR 4: Memilih Pendekatan Platform (F1279 - F1475) */}
          {/* Line 23 (F1279-F1350) & Line 24 (F1360-F1472: Masuk & Menyala di 1472) */}
          <div
            style={{
              transform: `scale(${pilar4Spring * allLitScale})`,
              opacity: isPilar4Active ? Math.min(1, pilar4Spring) : 0,
              padding: "20px 22px",
              borderRadius: 20,
              backgroundColor: isAllPlatformsLitAt1472
                ? "rgba(10, 26, 22, 0.98)"
                : isPilar4Active
                ? "rgba(15, 23, 42, 0.98)"
                : "rgba(255, 255, 255, 0.02)",
              border: isAllPlatformsLitAt1472
                ? "2.2px solid #10b981"
                : isPilar4Active
                ? "2px solid #f59e0b"
                : "1px dashed rgba(255, 255, 255, 0.1)",
              boxShadow: isAllPlatformsLitAt1472
                ? "0 14px 40px rgba(0, 0, 0, 0.8), 0 0 35px rgba(16, 185, 129, 0.35)"
                : isPilar4Active
                ? "0 12px 35px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.25)"
                : "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: 21,
                  fontWeight: 900,
                  color: "#f8fafc",
                  letterSpacing: -0.3,
                }}
              >
                4. Memilih Pendekatan Teknologi yang Tepat
              </div>

              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  backgroundColor: isAllPlatformsLitAt1472
                    ? "rgba(16, 185, 129, 0.25)"
                    : "rgba(245, 158, 11, 0.2)",
                  color: isAllPlatformsLitAt1472 ? "#10b981" : "#f59e0b",
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  letterSpacing: 0.6,
                }}
              >
                {isAllPlatformsLitAt1472 ? "ALL ONLINE // F1472" : "TECH APPROACH"}
              </div>
            </div>

            {/* SCRIPT QUOTE BANNER: Line 24 (apakah web app, mobile app atau AI automation.) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 14px",
                borderRadius: 12,
                backgroundColor: isAllPlatformsLitAt1472
                  ? "rgba(16, 185, 129, 0.12)"
                  : "rgba(255, 255, 255, 0.04)",
                border: isAllPlatformsLitAt1472
                  ? "1.5px solid rgba(16, 185, 129, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isAllPlatformsLitAt1472
                  ? "0 0 20px rgba(16, 185, 129, 0.2)"
                  : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaLayerGroup
                  size={14}
                  color={isAllPlatformsLitAt1472 ? "#10b981" : "#38bdf8"}
                />
                <span
                  style={{
                    fontSize: 14.5,
                    fontWeight: 800,
                    fontFamily: FONT_SANS,
                    color: "#f8fafc",
                  }}
                >
                  &ldquo;Apakah{" "}
                  <span
                    style={{
                      color: isWebActive ? "#c084fc" : "#64748b",
                      textShadow: isWebActive
                        ? "0 0 12px rgba(192, 132, 252, 0.8)"
                        : "none",
                      fontWeight: isWebActive ? 900 : 700,
                    }}
                  >
                    web app
                  </span>
                  ,{" "}
                  <span
                    style={{
                      color: isMobileActive ? "#38bdf8" : "#64748b",
                      textShadow: isMobileActive
                        ? "0 0 12px rgba(56, 189, 248, 0.8)"
                        : "none",
                      fontWeight: isMobileActive ? 900 : 700,
                    }}
                  >
                    mobile app
                  </span>
                  , atau{" "}
                  <span
                    style={{
                      color: isAiActive ? "#10b981" : "#64748b",
                      textShadow: isAiActive
                        ? "0 0 12px rgba(16, 185, 129, 0.8)"
                        : "none",
                      fontWeight: isAiActive ? 900 : 700,
                    }}
                  >
                    AI automation
                  </span>
                  .&rdquo;
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "3px 8px",
                  borderRadius: 999,
                  backgroundColor: isAllPlatformsLitAt1472
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.08)",
                  color: isAllPlatformsLitAt1472 ? "#10b981" : "#94a3b8",
                  fontFamily: FONT_MONO,
                  fontSize: 10,
                  fontWeight: 900,
                }}
              >
                <span>●</span>
                <span>{isAllPlatformsLitAt1472 ? "SUDAH MENYALA" : "SYNCING"}</span>
              </div>
            </div>

            {/* 3 Interactive Illuminated Platform Options (Sudah Menyala di 1472) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 12,
              }}
            >
              {/* Option 1: Web App */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: isWebActive
                    ? "rgba(168, 85, 247, 0.28)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isWebActive
                    ? "1.8px solid #c084fc"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: isWebActive
                    ? "0 0 25px rgba(168, 85, 247, 0.45)"
                    : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <FaGlobe size={18} color={isWebActive ? "#c084fc" : "#64748b"} />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: isWebActive ? "#f8fafc" : "#64748b",
                    }}
                  >
                    Web App
                  </div>
                  <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: isWebActive ? "#e2e8f0" : "#94a3b8" }}>
                    SaaS Browser
                  </div>
                </div>
              </div>

              {/* Option 2: Mobile App */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: isMobileActive
                    ? "rgba(56, 189, 248, 0.28)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isMobileActive
                    ? "1.8px solid #38bdf8"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: isMobileActive
                    ? "0 0 25px rgba(56, 189, 248, 0.45)"
                    : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <FaMobileAlt size={18} color={isMobileActive ? "#38bdf8" : "#64748b"} />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: isMobileActive ? "#f8fafc" : "#64748b",
                    }}
                  >
                    Mobile App
                  </div>
                  <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: isMobileActive ? "#e2e8f0" : "#94a3b8" }}>
                    iOS &amp; Android
                  </div>
                </div>
              </div>

              {/* Option 3: AI Automation */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: isAiActive
                    ? "rgba(16, 185, 129, 0.28)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isAiActive
                    ? "1.8px solid #10b981"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: isAiActive
                    ? "0 0 25px rgba(16, 185, 129, 0.45)"
                    : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <FaRobot size={18} color={isAiActive ? "#10b981" : "#64748b"} />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: isAiActive ? "#f8fafc" : "#64748b",
                    }}
                  >
                    AI Automation
                  </div>
                  <div style={{ fontSize: 11, fontFamily: FONT_MONO, color: isAiActive ? "#e2e8f0" : "#94a3b8" }}>
                    Agentic Flow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. BOTTOM PROGRESS TRACK CONDUIT
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 890,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 18px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaShieldAlt size={13} color="#10b981" />
            <span style={{ fontSize: 12, fontFamily: FONT_MONO, color: "#94a3b8" }}>
              SYSTEM ARCHITECTURE STATUS:
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 0.6 }}>
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 999,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${conduitProgress}%`,
                  background: "linear-gradient(90deg, #38bdf8, #a855f7, #10b981)",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#10b981",
              }}
            >
              {Math.round(conduitProgress)}%
            </span>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
};
