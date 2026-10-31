import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaArrowRight,
  FaBan,
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGlobe,
  FaHdd,
  FaLock,
  FaQuestionCircle,
  FaSearch,
  FaServer,
  FaShare,
  FaTimesCircle,
} from "react-icons/fa";
import { CameraPosition } from "../types";
import { SceneContainer } from "../Components/SceneContainer";
import { DepthOfFieldWrapper } from "../Components/DepthOfFieldWrapper";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

interface Scene6Props {
  camera: CameraPosition;
}

export const Scene6: React.FC<Scene6Props> = ({ camera }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS PER STATION (Frames 735 - 1620):
  // - Station 1 (2xx Success)     : Frames 738 - 890 (Line 10)
  // - Camera Slide 1 (2xx -> 3xx) : Frames 890 - 915 (Camera moves to X = -1400)
  // - Station 2 (3xx Redirection) : Frames 915 - 1095 (Line 11)
  // - Camera Slide 2 (3xx -> 4xx) : Frames 1095 - 1116 (Camera moves to X = -2800)
  // - Station 3 (4xx Client Error): Frames 1116 - 1360 (Line 12)
  // - Camera Slide 3 (4xx -> 5xx) : Frames 1360 - 1383 (Camera moves to X = -4200)
  // - Station 4 (5xx Server Error): Frames 1383 - 1620 (Line 13)
  // ─────────────────────────────────────────────────────────────────────────────

  // Station 1: 2xx Success Springs
  const sp2xxTag = spring({ frame: Math.max(0, frame - 738), fps, config: { damping: 14, stiffness: 95 } });
  const sp2xxTitle = spring({ frame: Math.max(0, frame - 744), fps, config: { damping: 13, stiffness: 90 } });
  const sp2xxCard = spring({ frame: Math.max(0, frame - 752), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const sp2xxExamples = spring({ frame: Math.max(0, frame - 828), fps, config: { damping: 14, stiffness: 95 } });

  // Station 2: 3xx Redirection Springs
  const sp3xxTag = spring({ frame: Math.max(0, frame - 912), fps, config: { damping: 14, stiffness: 95 } });
  const sp3xxTitle = spring({ frame: Math.max(0, frame - 916), fps, config: { damping: 13, stiffness: 90 } });
  const sp3xxCard = spring({ frame: Math.max(0, frame - 924), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const sp3xxExamples = spring({ frame: Math.max(0, frame - 1020), fps, config: { damping: 14, stiffness: 95 } });

  // Station 3: 4xx Client Error Springs
  const sp4xxTag = spring({ frame: Math.max(0, frame - 1112), fps, config: { damping: 14, stiffness: 95 } });
  const sp4xxTitle = spring({ frame: Math.max(0, frame - 1116), fps, config: { damping: 13, stiffness: 90 } });
  const sp4xxCard = spring({ frame: Math.max(0, frame - 1124), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const sp4xxExamples = spring({ frame: Math.max(0, frame - 1238), fps, config: { damping: 14, stiffness: 95 } });

  // Station 4: 5xx Server Error Springs
  const sp5xxTag = spring({ frame: Math.max(0, frame - 1380), fps, config: { damping: 14, stiffness: 95 } });
  const sp5xxTitle = spring({ frame: Math.max(0, frame - 1384), fps, config: { damping: 13, stiffness: 90 } });
  const sp5xxCard = spring({ frame: Math.max(0, frame - 1392), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const sp5xxExamples = spring({ frame: Math.max(0, frame - 1505), fps, config: { damping: 14, stiffness: 95 } });

  // Data packet traveling along continuous line across all 4 stations
  const packetX = interpolate(
    frame,
    [740, 1600],
    [200, -4400],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        fontFamily: FONT_SANS,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          THE CONTINUOUS CONNECTING LINE ("GARIS PENGHUBUNG KATEGORI")
          Spans across all 4 stations from X: +600 to X: -4800 (Total > 5400px)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 1540,
          left: -4600,
          width: 5400,
          height: 6,
          background:
            "linear-gradient(90deg, #ef4444 0%, #f59e0b 33%, #38bdf8 66%, #10b981 100%)",
          borderRadius: 3,
          boxShadow: "0 0 25px rgba(56, 189, 248, 0.45)",
          zIndex: 8,
        }}
      >
        {/* Secondary neon glow rail */}
        <div
          style={{
            position: "absolute",
            top: -10,
            left: 0,
            width: "100%",
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        />

        {/* Traveling Data Packet along line */}
        <div
          style={{
            position: "absolute",
            top: -7,
            left: packetX - (-4600),
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 16px 4px #38bdf8",
          }}
        />

        {/* Station Junction Markers along Line */}
        {[
          { x: 0, label: "01. 2xx SUCCESS", color: HTTP_COLORS.status2xx },
          { x: -1400, label: "02. 3xx REDIRECTION", color: HTTP_COLORS.status3xx },
          { x: -2800, label: "03. 4xx CLIENT ERROR", color: HTTP_COLORS.status4xx },
          { x: -4200, label: "04. 5xx SERVER ERROR", color: HTTP_COLORS.status5xx },
        ].map((node) => (
          <div
            key={node.label}
            style={{
              position: "absolute",
              top: -12,
              left: node.x - (-4600) + 540,
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "rgba(10, 15, 29, 0.95)",
                border: `3px solid ${node.color}`,
                boxShadow: `0 0 15px ${node.color}`,
              }}
            />
            <span
              style={{
                marginTop: 8,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 1.5,
                color: node.color,
                backgroundColor: "rgba(10, 15, 29, 0.9)",
                padding: "3px 10px",
                borderRadius: 6,
                border: `1px solid ${node.color}50`,
                whiteSpace: "nowrap",
                fontFamily: FONT_MONO,
              }}
            >
              {node.label}
            </span>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 1: 2xx SUCCESS (Line 10: "2xx — Success: Request berhasil...")
          Position: X = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={0} camera={camera}>
        <SceneContainer accentColor={HTTP_COLORS.status2xx}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${sp2xxTag})`,
                opacity: sp2xxTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 24, 20, 0.88)",
                border: "1.5px solid rgba(16, 185, 129, 0.4)",
                boxShadow: "0 0 24px rgba(16, 185, 129, 0.2)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: HTTP_COLORS.status2xx,
                  boxShadow: `0 0 10px ${HTTP_COLORS.status2xx}`,
                }}
              />
              <FaCheckCircle size={15} color={HTTP_COLORS.status2xx} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: HTTP_COLORS.status2xx,
                  textTransform: "uppercase",
                }}
              >
                CATEGORY 01 // 2xx SUCCESS
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 28,
                gap: 6,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  transform: `scale(${sp2xxTitle})`,
                  opacity: sp2xxTitle,
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: HTTP_COLORS.status2xx,
                  lineHeight: 1.15,
                  textShadow: "0 0 35px rgba(16, 185, 129, 0.45)",
                }}
              >
                2xx — SUCCESS
              </h1>
              <h2
                style={{
                  margin: 0,
                  transform: `scale(${sp2xxTitle})`,
                  opacity: sp2xxTitle,
                  fontSize: 40,
                  fontWeight: 800,
                  color: HTTP_COLORS.textPrimary,
                  lineHeight: 1.15,
                }}
              >
                REQUEST BERHASIL
              </h2>
            </div>

            {/* Hero Card */}
            <div
              style={{
                transform: `scale(${sp2xxCard}) translateY(${(1 - sp2xxCard) * 35}px)`,
                opacity: sp2xxCard,
                width: 880,
                borderRadius: 24,
                backgroundColor: "rgba(10, 20, 32, 0.92)",
                border: "1.8px solid rgba(16, 185, 129, 0.35)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(16, 185, 129, 0.18)",
                padding: "32px 34px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaServer size={20} color={HTTP_COLORS.status2xx} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 16,
                      fontWeight: 800,
                      color: HTTP_COLORS.textPrimary,
                    }}
                  >
                    HTTP/2 200 OK — STATUS EVALUATION
                  </span>
                </div>

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    color: HTTP_COLORS.status2xx,
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  PROCESSED SUCCESSFULLY
                </div>
              </div>

              <div
                style={{
                  fontSize: 20,
                  color: HTTP_COLORS.textSecondary,
                  lineHeight: 1.5,
                }}
              >
                Server telah menerima, memahami, dan memproses request dari klien dengan sukses tanpa kendala.
              </div>

              <div
                style={{
                  transform: `scale(${sp2xxExamples})`,
                  opacity: sp2xxExamples,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginTop: 6,
                }}
              >
                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    border: "1.5px solid rgba(16, 185, 129, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 32,
                        fontWeight: 900,
                        color: HTTP_COLORS.status2xx,
                      }}
                    >
                      200 OK
                    </span>
                    <FaCheckCircle size={18} color={HTTP_COLORS.status2xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 600 }}>
                    Permintaan Berhasil
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted, fontFamily: FONT_MONO }}>
                    Contoh: Mengambil data GET user
                  </span>
                </div>

                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 32,
                        fontWeight: 900,
                        color: HTTP_COLORS.accentCyan,
                      }}
                    >
                      201 CREATED
                    </span>
                    <FaExternalLinkAlt size={16} color={HTTP_COLORS.accentCyan} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 600 }}>
                    Resource Baru Dibuat
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted, fontFamily: FONT_MONO }}>
                    Contoh: Berhasil register data POST
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Context Pill */}
            <div
              style={{
                marginTop: 26,
                padding: "12px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 24, 20, 0.85)",
                border: "1.5px solid rgba(16, 185, 129, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <FaCheckCircle size={14} color={HTTP_COLORS.status2xx} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: HTTP_COLORS.textPrimary,
                  fontFamily: FONT_MONO,
                  letterSpacing: 1,
                }}
              >
                RESPON IDEAL: DATA BERHASIL DITERIMA & DIPROSES
              </span>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 2: 3xx REDIRECTION (Line 11: "3xx — Redirection...")
          Position: X = -1400
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-1400} camera={camera}>
        <SceneContainer accentColor={HTTP_COLORS.status3xx}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${sp3xxTag})`,
                opacity: sp3xxTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.88)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                boxShadow: "0 0 24px rgba(56, 189, 248, 0.2)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: HTTP_COLORS.status3xx,
                  boxShadow: `0 0 10px ${HTTP_COLORS.status3xx}`,
                }}
              />
              <FaShare size={15} color={HTTP_COLORS.status3xx} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: HTTP_COLORS.status3xx,
                  textTransform: "uppercase",
                }}
              >
                CATEGORY 02 // 3xx REDIRECTION
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 28,
                gap: 6,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  transform: `scale(${sp3xxTitle})`,
                  opacity: sp3xxTitle,
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: HTTP_COLORS.status3xx,
                  lineHeight: 1.15,
                  textShadow: "0 0 35px rgba(56, 189, 248, 0.45)",
                }}
              >
                3xx — REDIRECTION
              </h1>
              <h2
                style={{
                  margin: 0,
                  transform: `scale(${sp3xxTitle})`,
                  opacity: sp3xxTitle,
                  fontSize: 40,
                  fontWeight: 800,
                  color: HTTP_COLORS.textPrimary,
                  lineHeight: 1.15,
                }}
              >
                REQUEST PERLU DIALIHKAN
              </h2>
            </div>

            {/* Hero Card */}
            <div
              style={{
                transform: `scale(${sp3xxCard}) translateY(${(1 - sp3xxCard) * 35}px)`,
                opacity: sp3xxCard,
                width: 880,
                borderRadius: 24,
                backgroundColor: "rgba(10, 18, 36, 0.92)",
                border: "1.8px solid rgba(56, 189, 248, 0.35)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(56, 189, 248, 0.18)",
                padding: "32px 34px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaGlobe size={20} color={HTTP_COLORS.status3xx} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 16,
                      fontWeight: 800,
                      color: HTTP_COLORS.textPrimary,
                    }}
                  >
                    HTTP/2 301 / 302 — ROUTE FORWARDING
                  </span>
                </div>

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    color: HTTP_COLORS.status3xx,
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  ACTION REQUIRED: REDIRECT
                </div>
              </div>

              {/* Redirection Route Box */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: 14,
                  backgroundColor: "rgba(5, 12, 26, 0.9)",
                  border: "1px dashed rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONT_MONO,
                }}
              >
                <span style={{ fontSize: 15, color: HTTP_COLORS.textMuted }}>
                  OLD URL: /v1/account
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: HTTP_COLORS.status3xx }}>
                  <FaExchangeAlt size={14} />
                  <span style={{ fontSize: 13, fontWeight: 800 }}>REDIRECTING</span>
                  <FaArrowRight size={14} />
                </div>
                <span style={{ fontSize: 15, color: HTTP_COLORS.status3xx, fontWeight: 700 }}>
                  NEW URL: /v2/dashboard
                </span>
              </div>

              <div
                style={{
                  fontSize: 20,
                  color: HTTP_COLORS.textSecondary,
                  lineHeight: 1.5,
                }}
              >
                Klien harus melakukan tindakan lanjutan (mengikuti URL baru) karena sumber daya telah berpindah lokasi.
              </div>

              <div
                style={{
                  transform: `scale(${sp3xxExamples})`,
                  opacity: sp3xxExamples,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginTop: 6,
                }}
              >
                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 32,
                        fontWeight: 900,
                        color: HTTP_COLORS.status3xx,
                      }}
                    >
                      301 MOVED
                    </span>
                    <FaShare size={18} color={HTTP_COLORS.status3xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 600 }}>
                    Pindah Permanen
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted, fontFamily: FONT_MONO }}>
                    Contoh: Migrasi HTTP ke HTTPS
                  </span>
                </div>

                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    border: "1.5px solid rgba(99, 102, 241, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 32,
                        fontWeight: 900,
                        color: "#a5b4fc",
                      }}
                    >
                      302 FOUND
                    </span>
                    <FaExchangeAlt size={16} color="#a5b4fc" />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 600 }}>
                    Pindah Sementara
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted, fontFamily: FONT_MONO }}>
                    Contoh: Redirect login sementara
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Context Pill */}
            <div
              style={{
                marginTop: 26,
                padding: "12px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.85)",
                border: "1.5px solid rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <FaShare size={14} color={HTTP_COLORS.status3xx} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: HTTP_COLORS.textPrimary,
                  fontFamily: FONT_MONO,
                  letterSpacing: 1,
                }}
              >
                PENGALIHAN URL: BROWSER OTOMATIS MENUJU LOKASI BARU
              </span>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 3: 4xx CLIENT ERROR (Line 12: "4xx — Client Error...")
          Position: X = -2800
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-2800} camera={camera}>
        <SceneContainer accentColor={HTTP_COLORS.status4xx}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${sp4xxTag})`,
                opacity: sp4xxTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(30, 18, 10, 0.88)",
                border: "1.5px solid rgba(245, 158, 11, 0.4)",
                boxShadow: "0 0 24px rgba(245, 158, 11, 0.2)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: HTTP_COLORS.status4xx,
                  boxShadow: `0 0 10px ${HTTP_COLORS.status4xx}`,
                }}
              />
              <FaTimesCircle size={15} color={HTTP_COLORS.status4xx} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: HTTP_COLORS.status4xx,
                  textTransform: "uppercase",
                }}
              >
                CATEGORY 03 // 4xx CLIENT ERROR
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 28,
                gap: 6,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  transform: `scale(${sp4xxTitle})`,
                  opacity: sp4xxTitle,
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: HTTP_COLORS.status4xx,
                  lineHeight: 1.15,
                  textShadow: "0 0 35px rgba(245, 158, 11, 0.45)",
                }}
              >
                4xx — CLIENT ERROR
              </h1>
              <h2
                style={{
                  margin: 0,
                  transform: `scale(${sp4xxTitle})`,
                  opacity: sp4xxTitle,
                  fontSize: 40,
                  fontWeight: 800,
                  color: HTTP_COLORS.textPrimary,
                  lineHeight: 1.15,
                }}
              >
                ADA MASALAH PADA REQUEST
              </h2>
            </div>

            {/* Hero Card */}
            <div
              style={{
                transform: `scale(${sp4xxCard}) translateY(${(1 - sp4xxCard) * 35}px)`,
                opacity: sp4xxCard,
                width: 880,
                borderRadius: 24,
                backgroundColor: "rgba(22, 14, 18, 0.92)",
                border: "1.8px solid rgba(245, 158, 11, 0.35)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(245, 158, 11, 0.18)",
                padding: "30px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaTimesCircle size={20} color={HTTP_COLORS.status4xx} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 16,
                      fontWeight: 800,
                      color: HTTP_COLORS.textPrimary,
                    }}
                  >
                    HTTP/2 4xx — CLIENT-SIDE EXCEPTION
                  </span>
                </div>

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: HTTP_COLORS.status4xx,
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  CLIENT FAULT DETECTED
                </div>
              </div>

              <div
                style={{
                  fontSize: 19,
                  color: HTTP_COLORS.textSecondary,
                  lineHeight: 1.5,
                }}
              >
                Klien mengirimkan request yang keliru, tidak valid, tidak terotentikasi, atau meminta resource yang tidak ada.
              </div>

              {/* 4 Examples Grid: 400, 401, 403, 404 */}
              <div
                style={{
                  transform: `scale(${sp4xxExamples})`,
                  opacity: sp4xxExamples,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginTop: 4,
                }}
              >
                {/* 400 Bad Request */}
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "1.2px solid rgba(245, 158, 11, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 26, fontWeight: 900, color: HTTP_COLORS.status4xx }}>
                      400
                    </span>
                    <FaQuestionCircle size={16} color={HTTP_COLORS.status4xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Bad Request
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Sintaks request keliru / tidak valid
                  </span>
                </div>

                {/* 401 Unauthorized */}
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "1.2px solid rgba(245, 158, 11, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 26, fontWeight: 900, color: HTTP_COLORS.status4xx }}>
                      401
                    </span>
                    <FaLock size={15} color={HTTP_COLORS.status4xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Unauthorized
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Wajib login / autentikasi klien
                  </span>
                </div>

                {/* 403 Forbidden */}
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(244, 63, 94, 0.1)",
                    border: "1.2px solid rgba(244, 63, 94, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 26, fontWeight: 900, color: "#f43f5e" }}>
                      403
                    </span>
                    <FaBan size={16} color="#f43f5e" />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Forbidden
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Akses dilarang / tidak punya hak
                  </span>
                </div>

                {/* 404 Not Found */}
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(244, 63, 94, 0.1)",
                    border: "1.2px solid rgba(244, 63, 94, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 26, fontWeight: 900, color: "#f43f5e" }}>
                      404
                    </span>
                    <FaSearch size={15} color="#f43f5e" />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Not Found
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Halaman / data tidak ditemukan
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Context Pill */}
            <div
              style={{
                marginTop: 26,
                padding: "12px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(30, 18, 10, 0.85)",
                border: "1.5px solid rgba(245, 158, 11, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <FaTimesCircle size={14} color={HTTP_COLORS.status4xx} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: HTTP_COLORS.textPrimary,
                  fontFamily: FONT_MONO,
                  letterSpacing: 1,
                }}
              >
                KESALAHAN BERASAL DARI SISI REQUEST KLIEN
              </span>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4: 5xx SERVER ERROR (Line 13: "5xx — Server Error...")
          Position: X = -4200
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-4200} camera={camera}>
        <SceneContainer accentColor={HTTP_COLORS.status5xx}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${sp5xxTag})`,
                opacity: sp5xxTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(30, 8, 12, 0.9)",
                border: "1.5px solid rgba(239, 68, 68, 0.45)",
                boxShadow: "0 0 24px rgba(239, 68, 68, 0.25)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: HTTP_COLORS.status5xx,
                  boxShadow: `0 0 10px ${HTTP_COLORS.status5xx}`,
                }}
              />
              <FaExclamationTriangle size={15} color={HTTP_COLORS.status5xx} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: HTTP_COLORS.status5xx,
                  textTransform: "uppercase",
                }}
              >
                CATEGORY 04 // 5xx SERVER ERROR
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 28,
                gap: 6,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  transform: `scale(${sp5xxTitle})`,
                  opacity: sp5xxTitle,
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: HTTP_COLORS.status5xx,
                  lineHeight: 1.15,
                  textShadow: "0 0 35px rgba(239, 68, 68, 0.5)",
                }}
              >
                5xx — SERVER ERROR
              </h1>
              <h2
                style={{
                  margin: 0,
                  transform: `scale(${sp5xxTitle})`,
                  opacity: sp5xxTitle,
                  fontSize: 40,
                  fontWeight: 800,
                  color: HTTP_COLORS.textPrimary,
                  lineHeight: 1.15,
                }}
              >
                SERVER MENGALAMI MASALAH
              </h2>
            </div>

            {/* Hero Card */}
            <div
              style={{
                transform: `scale(${sp5xxCard}) translateY(${(1 - sp5xxCard) * 35}px)`,
                opacity: sp5xxCard,
                width: 880,
                borderRadius: 24,
                backgroundColor: "rgba(24, 6, 12, 0.94)",
                border: "1.8px solid rgba(239, 68, 68, 0.5)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(239, 68, 68, 0.22)",
                padding: "30px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaServer size={20} color={HTTP_COLORS.status5xx} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 16,
                      fontWeight: 800,
                      color: HTTP_COLORS.textPrimary,
                    }}
                  >
                    HTTP/2 5xx — SERVER INFRASTRUCTURE FAULT
                  </span>
                </div>

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 9999,
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.5)",
                    color: HTTP_COLORS.status5xx,
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  INTERNAL CRASH
                </div>
              </div>

              <div
                style={{
                  fontSize: 19,
                  color: HTTP_COLORS.textSecondary,
                  lineHeight: 1.5,
                }}
              >
                Request klien valid, tetapi server mengalami kegagalan proses internal atau gateway infrastruktur terputus.
              </div>

              {/* 3 Examples Grid: 500, 502, 503 */}
              <div
                style={{
                  transform: `scale(${sp5xxExamples})`,
                  opacity: sp5xxExamples,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 14,
                  marginTop: 4,
                }}
              >
                {/* 500 Internal Server Error */}
                <div
                  style={{
                    padding: "16px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(239, 68, 68, 0.12)",
                    border: "1.5px solid rgba(239, 68, 68, 0.55)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 28, fontWeight: 900, color: HTTP_COLORS.status5xx }}>
                      500
                    </span>
                    <FaExclamationTriangle size={16} color={HTTP_COLORS.status5xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Internal Error
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Crash kode / database
                  </span>
                </div>

                {/* 502 Bad Gateway */}
                <div
                  style={{
                    padding: "16px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(244, 63, 94, 0.12)",
                    border: "1.5px solid rgba(244, 63, 94, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 28, fontWeight: 900, color: "#f43f5e" }}>
                      502
                    </span>
                    <FaHdd size={16} color="#f43f5e" />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Bad Gateway
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Proxy upstream gagal
                  </span>
                </div>

                {/* 503 Service Unavailable */}
                <div
                  style={{
                    padding: "16px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: "1.5px solid rgba(245, 158, 11, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 28, fontWeight: 900, color: HTTP_COLORS.status4xx }}>
                      503
                    </span>
                    <FaCloudDownloadAlt size={16} color={HTTP_COLORS.status4xx} />
                  </div>
                  <span style={{ fontSize: 14, color: HTTP_COLORS.textPrimary, fontWeight: 700 }}>
                    Unavailable
                  </span>
                  <span style={{ fontSize: 12, color: HTTP_COLORS.textMuted }}>
                    Overload / maintenance
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Context Pill */}
            <div
              style={{
                marginTop: 26,
                padding: "12px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(30, 8, 12, 0.85)",
                border: "1.5px solid rgba(239, 68, 68, 0.35)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <FaExclamationTriangle size={14} color={HTTP_COLORS.status5xx} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: HTTP_COLORS.textPrimary,
                  fontFamily: FONT_MONO,
                  letterSpacing: 1,
                }}
              >
                KEGAGALAN BERASAL DARI SISI SERVER ATAU INFRASTRUKTUR
              </span>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>
    </div>
  );
};
