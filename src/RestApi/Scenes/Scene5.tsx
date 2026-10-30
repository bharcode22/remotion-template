import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaExchangeAlt,
  FaPaperPlane,
  FaTerminal,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SUB-BEATS (Dimajukan agar di Frame 806 Scene 5 sudah aktif penuh):
  // - Entrance: Frame 792 - 804 (Terminal Mac mendarat & siap sebelum suara masuk)
  // - Beat 5A (Frame 806 - 885): Line 16 - "Apakah memungkinkan aturan ini dilanggar..?"
  // - Beat 5B (Frame 885 - 995): Lines 18-19 - "Misal kita mau melakukan pengambilan data dengan menggunakan PUT,"
  // - Beat 5C (Frame 995 - 1095): Line 20 - "yang seharusnya, untuk mengambil data menggunakan GET"
  // - Outro Buffer (Frame 1095 - 1105): Wipe into Scene 6
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring (Dimajukan ke Frame 792)
  const spBadge = spring({
    frame: Math.max(0, frame - 792),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Terminal Window Spring (Dimajukan ke Frame 794, sudah kokoh sebelum frame 806)
  const spTerminal = spring({
    frame: Math.max(0, frame - 794),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ BEAT 5A: Line 16 Typewriter ("Apakah memungkinkan aturan ini dilanggar..?")
  // Mulai mengetik tepat di Frame 806 saat audio voiceover berbunyi!
  // ─────────────────────────────────────────────────────────────────────────────
  const fullTypedText1 = "Apakah memungkinkan aturan ini dilanggar..?";
  const charsCount1 = Math.floor(
    interpolate(frame, [806, 868], [0, fullTypedText1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTypedText1 = fullTypedText1.slice(0, charsCount1);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ BEAT 5B: Lines 18-19 Typewriter (`curl -X PUT https://api.server.dev/users`)
  // ─────────────────────────────────────────────────────────────────────────────
  const fullTypedText2 = "curl -X PUT https://api.server.dev/users/profile";
  const isBeat5BActive = frame >= 885;
  const charsCount2 = Math.floor(
    interpolate(frame, [888, 940], [0, fullTypedText2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTypedText2 = fullTypedText2.slice(0, charsCount2);

  // Beat 5B Request Card Spring
  const spCard5B = spring({
    frame: Math.max(0, frame - 915),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⚖️ BEAT 5C: Line 20 Bilateral Method Mismatch Comparator (PUT vs GET)
  // ─────────────────────────────────────────────────────────────────────────────
  const isBeat5CActive = frame >= 995;
  const spCompareLeft = spring({
    frame: Math.max(0, frame - 998),
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const spCompareRight = spring({
    frame: Math.max(0, frame - 1008),
    fps,
    config: { damping: 14, stiffness: 95 },
  });
  const spComparePill = spring({
    frame: Math.max(0, frame - 1018),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const cursorBlink = frame % 14 < 7;

  // Exit transition wipe (Frame 1095 - 1105)
  const exitOpacity = interpolate(frame, [1095, 1104], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [1095, 1104], [1, 0.95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [1095, 1104], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={REST_COLORS.restAmber}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: exitOpacity,
          transform: `translateY(${exitY}px) scale(${exitScale})`,
          fontFamily: FONT_SANS,
        }}
      >
        {/* 1. TOP INVESTIGATION BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(20, 10, 6, 0.9)",
            border: "1.5px solid rgba(245, 158, 11, 0.45)",
            boxShadow: "0 0 25px rgba(245, 158, 11, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: isBeat5CActive
                ? REST_COLORS.restCrimson
                : REST_COLORS.restAmber,
              boxShadow: `0 0 10px ${
                isBeat5CActive ? REST_COLORS.restCrimson : REST_COLORS.restAmber
              }`,
              display: "inline-block",
            }}
          />
          <FaExclamationTriangle
            size={15}
            color={
              isBeat5CActive ? REST_COLORS.restCrimson : REST_COLORS.restAmber
            }
          />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: isBeat5CActive
                ? REST_COLORS.restCrimson
                : REST_COLORS.restAmber,
              textTransform: "uppercase",
            }}
          >
            {isBeat5CActive
              ? "ANOMALY // SEMANTIC METHOD MISMATCH"
              : "RULE INTEGRITY // EXPERIMENT SIMULATION"}
          </span>
        </div>

        {/* 2. THE macOS TERMINAL WINDOW */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 30}px)`,
            opacity: spTerminal,
            width: "100%",
            maxWidth: 960,
            backgroundColor: "rgba(10, 14, 24, 0.97)",
            border: `1.5px solid ${
              isBeat5CActive
                ? "rgba(239, 68, 68, 0.45)"
                : "rgba(245, 158, 11, 0.4)"
            }`,
            borderRadius: 22,
            boxShadow: isBeat5CActive
              ? "0 30px 80px rgba(0, 0, 0, 0.85), 0 0 45px rgba(239, 68, 68, 0.25)"
              : "0 30px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(245, 158, 11, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            marginBottom: 26,
          }}
        >
          {/* macOS Title Bar */}
          <div
            style={{
              backgroundColor: "rgba(6, 8, 16, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                  border: "1px solid #e0443e",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                  border: "1px solid #dea123",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                  border: "1px solid #1aab29",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 13,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaTerminal size={12} color="#94a3b8" />
              <span>user@macbook-pro: ~ (zsh) — 80×24</span>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: isBeat5CActive
                  ? REST_COLORS.restCrimson
                  : REST_COLORS.restAmber,
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: isBeat5CActive
                  ? "rgba(239, 68, 68, 0.15)"
                  : "rgba(245, 158, 11, 0.15)",
                border: `1px solid ${
                  isBeat5CActive
                    ? "rgba(239, 68, 68, 0.4)"
                    : "rgba(245, 158, 11, 0.35)"
                }`,
              }}
            >
              {isBeat5CActive
                ? "VIOLATION DETECTED"
                : isBeat5BActive
                ? "SENDING DISPATCH"
                : "QUERY INVESTIGATION"}
            </div>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: "24px 28px",
              fontFamily: FONT_MONO,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* COMMAND 1 (Line 16): "Apakah memungkinkan aturan ini dilanggar..?" */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: 22 }}>
              <span style={{ color: REST_COLORS.restEmerald, fontWeight: 800, marginRight: 8 }}>
                user@macbook-pro
              </span>
              <span style={{ color: "#94a3b8", marginRight: 8 }}>~</span>
              <span style={{ color: REST_COLORS.restCyan, fontWeight: 800, marginRight: 12 }}>
                %
              </span>
              <span style={{ color: "#f8fafc", fontWeight: 700 }}>
                {currentTypedText1}
              </span>
              {!isBeat5BActive && (
                <span
                  style={{
                    display: "inline-block",
                    width: 12,
                    height: 24,
                    backgroundColor: REST_COLORS.restAmber,
                    marginLeft: 4,
                    verticalAlign: "middle",
                    opacity: cursorBlink ? 1 : 0,
                  }}
                />
              )}
            </div>

            {/* COMMAND 2 (Lines 18-19): `curl -X PUT https://api.server.dev/users/profile` */}
            {isBeat5BActive && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  fontSize: 22,
                  paddingTop: 8,
                  borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
                }}
              >
                <span style={{ color: REST_COLORS.restEmerald, fontWeight: 800, marginRight: 8 }}>
                  user@macbook-pro
                </span>
                <span style={{ color: "#94a3b8", marginRight: 8 }}>~</span>
                <span style={{ color: REST_COLORS.restCyan, fontWeight: 800, marginRight: 12 }}>
                  %
                </span>
                <span
                  style={{
                    color: REST_COLORS.restAmber,
                    fontWeight: 800,
                  }}
                >
                  {currentTypedText2}
                </span>
                {frame < 940 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 24,
                      backgroundColor: REST_COLORS.restAmber,
                      marginLeft: 4,
                      verticalAlign: "middle",
                      opacity: cursorBlink ? 1 : 0,
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. BEAT 5B: DISPATCH SIMULATION CARD (Lines 18-19: relFrame 85 - 184) */}
        {!isBeat5CActive && isBeat5BActive && (
          <div
            style={{
              transform: `scale(${spCard5B}) translateY(${(1 - spCard5B) * 20}px)`,
              opacity: spCard5B,
              width: "100%",
              maxWidth: 960,
              backgroundColor: "rgba(20, 10, 6, 0.88)",
              border: "1.5px solid rgba(245, 158, 11, 0.5)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  border: "1.5px solid rgba(245, 158, 11, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaPaperPlane size={22} color={REST_COLORS.restAmber} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: REST_COLORS.restAmber, letterSpacing: 1 }}>
                  SIMULASI PENGAMBILAN DATA VIA PUT:
                </div>
                <div style={{ fontSize: 22, fontWeight: 950, color: "#f8fafc", marginTop: 2 }}>
                  Mengambil Data Menggunakan Method PUT
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(239, 68, 68, 0.5)",
                color: "#fca5a5",
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              ⚠️ ANTI-PATTERN
            </div>
          </div>
        )}

        {/* 4. BEAT 5C: BILATERAL COMPARISON (Line 20: "yang seharusnya, untuk mengambil data menggunakan GET") */}
        {isBeat5CActive && (
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {/* Left Card: THE VIOLATION (PUT untuk ambil data) */}
            <div
              style={{
                transform: `scale(${spCompareLeft})`,
                opacity: spCompareLeft,
                backgroundColor: "rgba(20, 8, 8, 0.92)",
                border: "2px solid rgba(239, 68, 68, 0.6)",
                borderRadius: 20,
                padding: "26px 24px",
                boxShadow: "0 20px 50px rgba(239, 68, 68, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: REST_COLORS.restCrimson,
                  fontSize: 12,
                  fontWeight: 900,
                  marginBottom: 16,
                }}
              >
                <FaTimesCircle size={14} />
                <span>KASUS PELANGGARAN</span>
              </div>

              <div
                style={{
                  fontSize: 54,
                  fontWeight: 950,
                  color: REST_COLORS.restCrimson,
                  filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))",
                  marginBottom: 6,
                }}
              >
                PUT
              </div>

              <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc", marginBottom: 6 }}>
                Ambil Data Pakai PUT
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fca5a5" }}>
                Tidak sesuai semantik HTTP RESTful
              </div>
            </div>

            {/* Right Card: THE STANDARD (Yang seharusnya: GET) */}
            <div
              style={{
                transform: `scale(${spCompareRight})`,
                opacity: spCompareRight,
                backgroundColor: "rgba(4, 18, 24, 0.92)",
                border: "2px solid rgba(56, 189, 248, 0.6)",
                borderRadius: 20,
                padding: "26px 24px",
                boxShadow: "0 20px 50px rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: REST_COLORS.restCyan,
                  fontSize: 12,
                  fontWeight: 900,
                  marginBottom: 16,
                }}
              >
                <FaCheckCircle size={14} />
                <span>YANG SEHARUSNYA</span>
              </div>

              <div
                style={{
                  fontSize: 54,
                  fontWeight: 950,
                  color: REST_COLORS.restCyan,
                  filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))",
                  marginBottom: 6,
                }}
              >
                GET
              </div>

              <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc", marginBottom: 6 }}>
                Ambil Data Pakai GET
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#93c5fd" }}>
                Standar baku protokol RESTful API
              </div>
            </div>
          </div>
        )}

        {/* 5. BOTTOM COMPARISON FOOTNOTE (relFrame 210+) */}
        {isBeat5CActive && (
          <div
            style={{
              transform: `scale(${spComparePill})`,
              opacity: spComparePill,
              marginTop: 22,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              backgroundColor: "rgba(10, 14, 24, 0.85)",
              borderRadius: 14,
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <FaExchangeAlt size={14} color={REST_COLORS.restAmber} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", letterSpacing: 1 }}>
              GET UNTUK MENGAMBIL (READ) • BUKAN PUT
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
