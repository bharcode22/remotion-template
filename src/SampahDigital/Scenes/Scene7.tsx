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
  FaCodeBranch,
  FaExclamationTriangle,
  FaProjectDiagram,
  FaShieldAlt,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPOKEN TIMELINES (Masuk di Frame 926)
  // Lines 17 - 18:
  // - Line 17 (F926 - F1005): "Jika belum, perbaiki dulu proses tradisionalnya,"
  // - Evaluator Shift / Jeda (F1005 - F1015)
  // - Line 18 (F1015 - F1105): "Jika sudah, barulah kita bisa rancang sistemnya."
  // Theme: PERCABANGAN IF-ELSE (IDE Syntax Highlighting + Visual Branch Cards)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Header Slide (F924 - F940)
  const headerSlideY = interpolate(frame, [924, 940], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const headerOpacity = interpolate(frame, [924, 936], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. IDE Window Entrance (F926 - F942)
  const ideScale =
    frame >= 926
      ? spring({
          frame: frame - 926,
          fps,
          config: { damping: 14, mass: 0.8, stiffness: 120 },
        })
      : 0;

  // Active Execution State
  // Frame 926 - 1008: Branch 1 is active (IF BELUM)
  // Frame 1009 - 1014: Neutral Evaluation
  // Frame 1015+: Branch 2 is active (ELSE SUDAH)
  const isIfBranchActive = frame >= 926 && frame < 1010;
  const isElseBranchActive = frame >= 1010;

  // 3. Branch 1: IF (BELUM) Card Spring (Line 17: F926 - F1005)
  // "Jika belum, perbaiki dulu proses tradisionalnya,"
  const branch1Spring =
    frame >= 926
      ? spring({
          frame: frame - 926,
          fps,
          config: { damping: 14, mass: 0.8, stiffness: 120 },
        })
      : 0;

  const branch1Opacity =
    frame < 926
      ? 0
      : frame >= 1010
      ? interpolate(frame, [1010, 1025], [1, 0.4], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  // 4. Branch 2: ELSE (SUDAH) Card Spring (Line 18: F1015 - F1105)
  // "Jika sudah, barulah kita bisa rancang sistemnya."
  const branch2Spring =
    frame >= 1015
      ? spring({
          frame: frame - 1015,
          fps,
          config: { damping: 14, mass: 0.8, stiffness: 120 },
        })
      : 0;

  const branch2Opacity = frame < 1015 ? 0.35 : 1;

  // Blinking terminal cursor
  const isCursorVisible = Math.floor((frame / 8) % 2) === 0;

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
            1. TOP BADGE & STAGE HEADER
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `translateY(${headerSlideY}px)`,
            opacity: headerOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 22px",
              borderRadius: 9999,
              backgroundColor: "rgba(35, 24, 10, 0.94)",
              border: "1.5px solid rgba(245, 158, 11, 0.55)",
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.3)",
              marginBottom: 10,
            }}
          >
            <FaCodeBranch size={15} color={SAMPAH_DIGITAL_COLORS.wasteAmber} />
            <span
              style={{
                fontSize: 13.5,
                fontWeight: 800,
                letterSpacing: 2.2,
                color: SAMPAH_DIGITAL_COLORS.wasteAmber,
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              LOGIKA PERCABANGAN // CONDITIONAL IF-ELSE
            </span>
          </div>

          <h2
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: "#f8fafc",
              margin: 0,
              letterSpacing: -0.6,
            }}
          >
            Pengambilan Keputusan Digital
          </h2>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. SYNTAX HIGHLIGHTED IF-ELSE IDE CODE BLOCK (Width: 890px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${ideScale})`,
            width: 890,
            borderRadius: 20,
            backgroundColor: "rgba(10, 15, 28, 0.97)",
            border: `2px solid ${isIfBranchActive ? "#f59e0b" : isElseBranchActive ? "#10b981" : "rgba(255, 255, 255, 0.12)"}`,
            boxShadow: `0 15px 40px rgba(0, 0, 0, 0.8), 0 0 35px ${isIfBranchActive ? "rgba(245, 158, 11, 0.35)" : isElseBranchActive ? "rgba(16, 185, 129, 0.35)" : "transparent"}`,
            overflow: "hidden",
            boxSizing: "border-box",
            marginBottom: 20,
          }}
        >
          {/* IDE Window Header */}
          <div
            style={{
              padding: "11px 18px",
              backgroundColor: "rgba(6, 10, 20, 0.98)",
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
                <FaTerminal size={12} color="#f59e0b" />
                decision_logic.ts // if-else
              </span>
            </div>

            {/* Execution indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: isIfBranchActive
                  ? "rgba(245, 158, 11, 0.2)"
                  : "rgba(16, 185, 129, 0.2)",
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 800,
                color: isIfBranchActive ? "#f59e0b" : "#10b981",
              }}
            >
              <span>●</span>
              <span>{isIfBranchActive ? "RUNNING: IF (BELUM)" : "RUNNING: ELSE (SUDAH)"}</span>
            </div>
          </div>

          {/* IDE Code Lines */}
          <div
            style={{
              padding: "16px 20px",
              fontFamily: FONT_MONO,
              fontSize: 16.5,
              lineHeight: 1.6,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {/* Line 01 */}
            <div style={{ display: "flex", gap: 14 }}>
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                01
              </span>
              <span style={{ color: "#64748b", fontStyle: "italic" }}>
                // Cek kesiapan proses bisnis sebelum digitalisasi
              </span>
            </div>

            {/* Line 02: IF CONDITION */}
            <div
              style={{
                display: "flex",
                gap: 14,
                backgroundColor: isIfBranchActive ? "rgba(245, 158, 11, 0.12)" : "transparent",
                borderRadius: 6,
                padding: "1px 0",
              }}
            >
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                02
              </span>
              <span>
                <span style={{ color: "#c084fc", fontWeight: 900 }}>if</span>{" "}
                <span style={{ color: "#94a3b8" }}>(</span>
                <span style={{ color: "#38bdf8", fontWeight: 700 }}>proses_tradisional</span>
                <span style={{ color: "#f8fafc" }}>.</span>
                <span style={{ color: "#fbbf24", fontWeight: 700 }}>is_lancar</span>
                <span style={{ color: "#94a3b8" }}>() === </span>
                <span style={{ color: "#f43f5e", fontWeight: 800 }}>false</span>
                <span style={{ color: "#94a3b8" }}>) &#123;</span>
              </span>
            </div>

            {/* Line 03: IF BODY */}
            <div
              style={{
                display: "flex",
                gap: 14,
                backgroundColor: isIfBranchActive ? "rgba(245, 158, 11, 0.16)" : "transparent",
                borderRadius: 6,
                padding: "1px 0",
              }}
            >
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                03
              </span>
              <span style={{ paddingLeft: 24 }}>
                <span style={{ color: isIfBranchActive ? "#f59e0b" : "#64748b", fontWeight: 800 }}>
                  ➔ perbaikiDuluProsesTradisionalnya();
                </span>
                {isIfBranchActive && isCursorVisible && (
                  <span style={{ color: "#f59e0b", marginLeft: 4 }}>|</span>
                )}
              </span>
            </div>

            {/* Line 04: ELSE */}
            <div
              style={{
                display: "flex",
                gap: 14,
                backgroundColor: isElseBranchActive ? "rgba(16, 185, 129, 0.12)" : "transparent",
                borderRadius: 6,
                padding: "1px 0",
              }}
            >
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                04
              </span>
              <span>
                <span style={{ color: "#94a3b8" }}>&#125; </span>
                <span style={{ color: "#c084fc", fontWeight: 900 }}>else</span>
                <span style={{ color: "#94a3b8" }}> &#123;</span>
              </span>
            </div>

            {/* Line 05: ELSE BODY */}
            <div
              style={{
                display: "flex",
                gap: 14,
                backgroundColor: isElseBranchActive ? "rgba(16, 185, 129, 0.16)" : "transparent",
                borderRadius: 6,
                padding: "1px 0",
              }}
            >
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                05
              </span>
              <span style={{ paddingLeft: 24 }}>
                <span style={{ color: isElseBranchActive ? "#10b981" : "#64748b", fontWeight: 800 }}>
                  ➔ barulahKitaBisaRancangSistemnya();
                </span>
                {isElseBranchActive && isCursorVisible && (
                  <span style={{ color: "#10b981", marginLeft: 4 }}>|</span>
                )}
              </span>
            </div>

            {/* Line 06: CLOSING */}
            <div style={{ display: "flex", gap: 14 }}>
              <span style={{ color: "#475569", width: 24, textAlign: "right", userSelect: "none" }}>
                06
              </span>
              <span style={{ color: "#94a3b8" }}>&#125;</span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. TWO VISUAL ACTION CARDS: IF (BELUM) vs ELSE (SUDAH)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 890,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              BRANCH 1: IF (BELUM) - Line 17 (F926 - F1005)
              "Jika belum, perbaiki dulu proses tradisionalnya,"
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              transform: `scale(${branch1Spring})`,
              opacity: branch1Opacity,
              borderRadius: 20,
              backgroundColor: isIfBranchActive
                ? "rgba(22, 17, 12, 0.96)"
                : "rgba(15, 23, 42, 0.4)",
              border: isIfBranchActive
                ? "2.2px solid #f59e0b"
                : "1.2px solid rgba(245, 158, 11, 0.25)",
              boxShadow: isIfBranchActive
                ? "0 14px 35px rgba(0, 0, 0, 0.75), 0 0 30px rgba(245, 158, 11, 0.3)"
                : "none",
              padding: "20px 24px",
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
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(245, 158, 11, 0.25)",
                    color: "#f59e0b",
                    fontSize: 11.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  BRANCH: IF (STATUS == FALSE)
                </div>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 900,
                    color: "#f59e0b",
                    fontFamily: FONT_MONO,
                  }}
                >
                  JIKA BELUM:
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#f87171",
                }}
              >
                <FaExclamationTriangle size={12} color="#ef4444" />
                <span>PERBAIKI MANUAL DULU</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  border: "1.5px solid rgba(245, 158, 11, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaTools size={20} color="#f59e0b" />
              </div>
              <div>
                <h3
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: -0.4,
                  }}
                >
                  Perbaiki dulu proses tradisionalnya,
                </h3>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>
                  Rapikan alur kerja &amp; SOP operasional manual. Jangan mengotomasi sistem yang masih berantakan.
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              BRANCH 2: ELSE (SUDAH) - Line 18 (F1015 - F1105)
              "Jika sudah, barulah kita bisa rancang sistemnya."
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              transform: `scale(${branch2Spring || (frame >= 926 ? 0.96 : 0)})`,
              opacity: branch2Opacity,
              borderRadius: 20,
              backgroundColor: isElseBranchActive
                ? "rgba(10, 26, 20, 0.96)"
                : "rgba(15, 23, 42, 0.4)",
              border: isElseBranchActive
                ? "2.2px solid #10b981"
                : "1.2px solid rgba(16, 185, 129, 0.25)",
              boxShadow: isElseBranchActive
                ? "0 14px 35px rgba(0, 0, 0, 0.75), 0 0 30px rgba(16, 185, 129, 0.3)"
                : "none",
              padding: "20px 24px",
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
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                    color: "#10b981",
                    fontSize: 11.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  BRANCH: ELSE (STATUS == TRUE)
                </div>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 900,
                    color: "#10b981",
                    fontFamily: FONT_MONO,
                  }}
                >
                  JIKA SUDAH:
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#10b981",
                }}
              >
                <FaCheckCircle size={12} color="#10b981" />
                <span>SIAP MERANCANG SISTEM</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
                  flexShrink: 0,
                }}
              >
                <FaProjectDiagram size={20} color="#10b981" />
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: -0.4,
                  }}
                >
                  <span style={{ color: "#f8fafc" }}>Barulah kita bisa </span>
                  <span
                    style={{
                      background: "linear-gradient(90deg, #10b981 0%, #38bdf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.35))",
                    }}
                  >
                    rancang sistemnya.
                  </span>
                </h3>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>
                  Fondasi terbukti berhasil ➔ Sekarang saatnya bangun arsitektur software &amp; automasi modern.
                </div>
              </div>
              <FaArrowRight size={14} color="#10b981" />
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. BOTTOM SOLID PRINCIPLE PILL
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            marginTop: 18,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontFamily: FONT_MONO,
            fontSize: 12,
            color: "#94a3b8",
          }}
        >
          <FaShieldAlt size={13} color="#38bdf8" />
          <span>FONDASI MANUAL SOLID ➔ DIGITALISASI BERHASIL</span>
        </div>
      </div>
    </SceneContainer>
  );
};
