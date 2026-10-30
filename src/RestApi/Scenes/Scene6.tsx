import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaFileContract,
  FaServer,
  FaTerminal,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & SUB-BEATS (Global Frames 1100 - 1290):
  // - Entrance: Frames 1098 - 1105 (Terminal lands firmly)
  // - Beat 6A (Frames 1105 - 1152): Line 22 - "Server tetap memberikan data,"
  // - Beat 6B (Frames 1164 - 1220): Line 23 - "tapi ini tidak bisa disebut rest API."
  // - Beat 6C (Frames 1240 - 1280): Line 24 - "Karena tidak sesuai aturan"
  // - Outro Freeze: Frames 1280 - 1290 (Video Climax Hold)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 1098),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Terminal Window Spring
  const spTerminal = spring({
    frame: Math.max(0, frame - 1100),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER LINE 1 (Line 22: "Server tetap memberikan data,")
  // ─────────────────────────────────────────────────────────────────────────────
  const text1 = "Server tetap memberikan data,";
  const chars1 = Math.floor(
    interpolate(frame, [1105, 1150], [0, text1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText1 = text1.slice(0, chars1);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER LINE 2 (Line 23: "tapi ini tidak bisa disebut rest API.")
  // ─────────────────────────────────────────────────────────────────────────────
  const isLine2Active = frame >= 1160;
  const text2 = "tapi ini tidak bisa disebut rest API.";
  const chars2 = Math.floor(
    interpolate(frame, [1164, 1218], [0, text2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText2 = text2.slice(0, chars2);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER LINE 3 (Line 24: "Karena tidak sesuai aturan")
  // ─────────────────────────────────────────────────────────────────────────────
  const isLine3Active = frame >= 1236;
  const text3 = "Karena tidak sesuai aturan.";
  const chars3 = Math.floor(
    interpolate(frame, [1240, 1278], [0, text3.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText3 = text3.slice(0, chars3);

  // Stamp Impact Spring (slams down around Frame 1205)
  const spStamp = spring({
    frame: Math.max(0, frame - 1204),
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.8 },
  });

  // Golden Takeaway Card Spring (expands around Frame 1250)
  const spTakeaway = spring({
    frame: Math.max(0, frame - 1248),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const cursorBlink = frame % 14 < 7;

  return (
    <SceneContainer accentColor={REST_COLORS.restCrimson}>
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
        {/* 1. TOP VERDICT BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(24, 6, 10, 0.9)",
            border: "1.5px solid rgba(239, 68, 68, 0.45)",
            boxShadow: "0 0 25px rgba(239, 68, 68, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: REST_COLORS.restCrimson,
              boxShadow: `0 0 10px ${REST_COLORS.restCrimson}`,
              display: "inline-block",
            }}
          />
          <FaTimesCircle size={15} color={REST_COLORS.restCrimson} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: REST_COLORS.restCrimson,
              textTransform: "uppercase",
            }}
          >
            FINAL VERDICT // REST COMPLIANCE
          </span>
        </div>

        {/* 2. THE MOBILE-OPTIMIZED macOS TERMINAL WINDOW */}
        {/* Font dibuat besar (32px - 36px) agar sangat nyaman dibaca di layar HP */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 25}px)`,
            opacity: spTerminal,
            width: "100%",
            maxWidth: 960,
            backgroundColor: "rgba(10, 12, 22, 0.98)",
            border: "2px solid rgba(239, 68, 68, 0.45)",
            borderRadius: 24,
            boxShadow:
              "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 45px rgba(239, 68, 68, 0.25)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            marginBottom: 24,
          }}
        >
          {/* macOS Title Bar */}
          <div
            style={{
              backgroundColor: "rgba(6, 6, 14, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* 3 Traffic Light Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                  border: "1px solid #e0443e",
                }}
              />
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                  border: "1px solid #dea123",
                }}
              />
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                  border: "1px solid #1aab29",
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 14,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaTerminal size={14} color="#94a3b8" />
              <span>rest-compliance-check — 80×24</span>
            </div>

            {/* Status Pill */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: REST_COLORS.restCrimson,
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
              }}
            >
              VERDICT
            </div>
          </div>

          {/* Terminal Body with Large Mobile-Friendly Typewriter Lines */}
          <div
            style={{
              padding: "36px 36px",
              fontFamily: FONT_MONO,
              display: "flex",
              flexDirection: "column",
              gap: 22,
              minHeight: 330,
            }}
          >
            {/* LINE 1 (Line 22: "Server tetap memberikan data,") */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.45)",
                    fontSize: 13,
                    fontWeight: 900,
                    color: REST_COLORS.restEmerald,
                  }}
                >
                  HTTP 200 OK
                </div>
                <span style={{ fontSize: 13, color: "#64748b" }}>
                  Payload Received
                </span>
              </div>

              {/* Teks Baris 1: Ukuran 32px (Mudah Dibaca di HP) */}
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: REST_COLORS.restEmerald, marginRight: 12 }}>
                  &gt;
                </span>
                <span>{currentText1}</span>
                {!isLine2Active && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 14,
                      height: 32,
                      backgroundColor: REST_COLORS.restEmerald,
                      marginLeft: 6,
                      verticalAlign: "middle",
                      opacity: cursorBlink ? 1 : 0,
                    }}
                  />
                )}
              </div>
            </div>

            {/* LINE 2 (Line 23: "tapi ini tidak bisa disebut rest API.") */}
            {isLine2Active && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingTop: 10,
                  borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      padding: "3px 10px",
                      borderRadius: 6,
                      backgroundColor: "rgba(239, 68, 68, 0.2)",
                      border: "1px solid rgba(239, 68, 68, 0.5)",
                      fontSize: 13,
                      fontWeight: 900,
                      color: REST_COLORS.restCrimson,
                    }}
                  >
                    STATUS: INVALID SPEC
                  </div>
                </div>

                {/* Teks Baris 2: Ukuran 36px (Hero Highlight Merah Neon) */}
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 950,
                    color: REST_COLORS.restCrimson,
                    lineHeight: 1.35,
                    filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.45))",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ color: REST_COLORS.restCrimson, marginRight: 12 }}>
                    &gt;
                  </span>
                  <span>{currentText2}</span>
                  {!isLine3Active && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 14,
                        height: 36,
                        backgroundColor: REST_COLORS.restCrimson,
                        marginLeft: 6,
                        verticalAlign: "middle",
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* LINE 3 (Line 24: "Karena tidak sesuai aturan") */}
            {isLine3Active && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingTop: 10,
                  borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Teks Baris 3: Ukuran 34px (Amber Gold) */}
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 900,
                    color: REST_COLORS.restAmber,
                    lineHeight: 1.4,
                    filter: "drop-shadow(0 0 20px rgba(245, 158, 11, 0.45))",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ color: REST_COLORS.restAmber, marginRight: 12 }}>
                    &gt;
                  </span>
                  <span>{currentText3}</span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 14,
                      height: 34,
                      backgroundColor: REST_COLORS.restAmber,
                      marginLeft: 6,
                      verticalAlign: "middle",
                      opacity: cursorBlink ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* CLIMAX NON-COMPLIANT IMPACT STAMP (Menghantam di frame 1205) */}
          {frame >= 1204 && (
            <div
              style={{
                position: "absolute",
                top: 45,
                right: 36,
                transform: `scale(${spStamp})`,
                opacity: spStamp,
                padding: "12px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(239, 68, 68, 0.18)",
                border: "3px solid #ef4444",
                boxShadow: "0 0 35px rgba(239, 68, 68, 0.55)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                backdropFilter: "blur(10px)",
                zIndex: 20,
              }}
            >
              <FaTimesCircle size={24} color="#ef4444" />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 18, fontWeight: 950, color: "#ffffff", letterSpacing: 1.5 }}>
                  BUKAN REST API
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#fca5a5", letterSpacing: 1 }}>
                  NON-COMPLIANT SPECIFICATION
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. GOLDEN TAKEAWAY CARD (Ekspansi saat Baris 3 terketik) */}
        <div
          style={{
            transform: `scale(${spTakeaway}) translateY(${(1 - spTakeaway) * 20}px)`,
            opacity: spTakeaway,
            width: "100%",
            maxWidth: 960,
            backgroundColor: "rgba(18, 10, 6, 0.95)",
            border: "1.5px solid rgba(245, 158, 11, 0.5)",
            borderRadius: 20,
            padding: "24px 30px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              backgroundColor: "rgba(245, 158, 11, 0.18)",
              border: "1.5px solid rgba(245, 158, 11, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FaFileContract size={26} color={REST_COLORS.restAmber} />
          </div>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 900,
                color: REST_COLORS.restAmber,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              TAKEAWAY ARSITEKTUR REST API
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.45,
              }}
            >
              REST adalah <span style={{ color: REST_COLORS.restCyan }}>kesepakatan aturan (contract)</span>, bukan sekadar endpoint bisa mengirim data.
            </div>
          </div>
        </div>

        {/* 4. BOTTOM ARCHITECTURAL TELEMETRY */}
        <div
          style={{
            marginTop: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            backgroundColor: "rgba(12, 6, 8, 0.7)",
            borderRadius: 12,
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <FaServer size={14} color={REST_COLORS.textMuted} />
          <span style={{ fontSize: 13, fontWeight: 700, color: REST_COLORS.textSecondary, letterSpacing: 1 }}>
            SEMANTIK HTTP METHOD: GET • POST • PUT • DELETE
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
