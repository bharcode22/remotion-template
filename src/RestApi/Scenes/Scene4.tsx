import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaDatabase,
  FaDownload,
  FaEdit,
  FaPaperPlane,
  FaPlusCircle,
  FaSyncAlt,
  FaTrashAlt,
} from "react-icons/fa";
import { CameraPosition } from "../types";
import { SceneContainer } from "../Components/SceneContainer";
import { DepthOfFieldWrapper } from "../Components/DepthOfFieldWrapper";
import { REST_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

interface Scene4Props {
  camera: CameraPosition;
}

export const Scene4: React.FC<Scene4Props> = ({ camera }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS PER STATION (Global Frames 466 - 807):
  // - Station 4A: GET   (Frames 466 - 522)
  // - Station 4B: POST  (Frames 542 - 602)
  // - Station 4C: PUT   (Frames 622 - 698)
  // - Station 4D: DELETE(Frames 718 - 807)
  // ─────────────────────────────────────────────────────────────────────────────

  // Station 4A Springs (GET)
  const sp4ATag = spring({ frame: Math.max(0, frame - 466), fps, config: { damping: 14, stiffness: 95 } });
  const sp4ATitle = spring({ frame: Math.max(0, frame - 470), fps, config: { damping: 13, stiffness: 90 } });
  const sp4ACard = spring({ frame: Math.max(0, frame - 476), fps, config: { damping: 15, stiffness: 85, mass: 1 } });

  // Station 4B Springs (POST)
  const sp4BTag = spring({ frame: Math.max(0, frame - 540), fps, config: { damping: 14, stiffness: 95 } });
  const sp4BTitle = spring({ frame: Math.max(0, frame - 544), fps, config: { damping: 13, stiffness: 90 } });
  const sp4BCard = spring({ frame: Math.max(0, frame - 550), fps, config: { damping: 15, stiffness: 85, mass: 1 } });

  // Station 4C Springs (PUT / PATCH)
  const sp4CTag = spring({ frame: Math.max(0, frame - 620), fps, config: { damping: 14, stiffness: 95 } });
  const sp4CTitle = spring({ frame: Math.max(0, frame - 624), fps, config: { damping: 13, stiffness: 90 } });
  const sp4CCard = spring({ frame: Math.max(0, frame - 630), fps, config: { damping: 15, stiffness: 85, mass: 1 } });

  // Station 4D Springs (DELETE)
  const sp4DTag = spring({ frame: Math.max(0, frame - 716), fps, config: { damping: 14, stiffness: 95 } });
  const sp4DTitle = spring({ frame: Math.max(0, frame - 720), fps, config: { damping: 13, stiffness: 90 } });
  const sp4DCard = spring({ frame: Math.max(0, frame - 726), fps, config: { damping: 15, stiffness: 85, mass: 1 } });

  // Laser data packet traveling along connecting conduit line
  const packetX = interpolate(
    frame,
    [466, 800],
    [200, -4300],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      {/* ═══════════════════════════════════════════════════════════════════════
          THE CONTINUOUS CONNECTING LINE ("GARIS PENGHUBUNG METODE")
          Extends across all 4 stations from X: +400 to X: -4500 (Total > 4900px)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 1540,
          left: -4400,
          width: 5000,
          height: 6,
          background:
            "linear-gradient(90deg, #ef4444 0%, #f59e0b 33%, #10b981 66%, #38bdf8 100%)",
          borderRadius: 3,
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)",
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
            left: packetX - (-4400),
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 16px 4px #38bdf8",
          }}
        />

        {/* Station Junction Markers along Line */}
        {[
          { x: 0, label: "01. GET", color: REST_COLORS.restCyan },
          { x: -1400, label: "02. POST", color: REST_COLORS.restEmerald },
          { x: -2800, label: "03. PUT", color: REST_COLORS.restAmber },
          { x: -4200, label: "04. DELETE", color: REST_COLORS.restCrimson },
        ].map((node) => (
          <div
            key={node.label}
            style={{
              position: "absolute",
              top: -12,
              left: node.x - (-4400) + 540,
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
              }}
            >
              {node.label}
            </span>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4A: GET (Line 11: "GET untuk mengambil data.")
          Position: X = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={0} camera={camera}>
        <SceneContainer accentColor={REST_COLORS.restCyan}>
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
                transform: `scale(${sp4ATag})`,
                opacity: sp4ATag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 15, 29, 0.85)",
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
                  backgroundColor: REST_COLORS.restCyan,
                  boxShadow: `0 0 10px ${REST_COLORS.restCyan}`,
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: REST_COLORS.restCyan,
                }}
              >
                HTTP METHOD // 01 (READ)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div
              style={{
                transform: `translateY(${(1 - sp4ATitle) * 25}px) scale(${sp4ATitle})`,
                opacity: sp4ATitle,
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontSize: 90,
                  fontWeight: 950,
                  letterSpacing: 2,
                  color: REST_COLORS.restCyan,
                  filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.45))",
                  marginBottom: 6,
                }}
              >
                GET
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: "#f8fafc",
                }}
              >
                UNTUK MENGAMBIL DATA
              </div>
            </div>

            {/* Technical Request & DB Response Card */}
            <div
              style={{
                transform: `scale(${sp4ACard})`,
                opacity: sp4ACard,
                width: "100%",
                maxWidth: 920,
                backgroundColor: "rgba(10, 15, 29, 0.95)",
                border: "1.5px solid rgba(56, 189, 248, 0.35)",
                borderRadius: 24,
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaDownload size={22} color={REST_COLORS.restCyan} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: REST_COLORS.restCyan }}>
                      CLIENT REQUEST
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc" }}>
                      GET /api/users/profile
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    color: REST_COLORS.restEmerald,
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  STATUS: 200 OK
                </div>
              </div>

              {/* Data Payload Returned */}
              <div
                style={{
                  backgroundColor: "rgba(4, 8, 20, 0.8)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaDatabase size={24} color={REST_COLORS.restCyan} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: REST_COLORS.textMuted }}>
                      SERVER RESPONSE PAYLOAD:
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#e2e8f0" }}>
                      &#123; &quot;id&quot;: 1, &quot;name&quot;: &quot;Developer&quot;, &quot;role&quot;: &quot;Engineer&quot; &#125;
                    </div>
                  </div>
                </div>
                <FaCheckCircle size={20} color={REST_COLORS.restEmerald} />
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4B: POST (Line 12: "POST untuk membuat data baru.")
          Position: X = -1400 (to the left of GET)
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-1400} camera={camera}>
        <SceneContainer accentColor={REST_COLORS.restEmerald}>
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
                transform: `scale(${sp4BTag})`,
                opacity: sp4BTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 15, 29, 0.85)",
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
                  backgroundColor: REST_COLORS.restEmerald,
                  boxShadow: `0 0 10px ${REST_COLORS.restEmerald}`,
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: REST_COLORS.restEmerald,
                }}
              >
                HTTP METHOD // 02 (CREATE)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div
              style={{
                transform: `translateY(${(1 - sp4BTitle) * 25}px) scale(${sp4BTitle})`,
                opacity: sp4BTitle,
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontSize: 90,
                  fontWeight: 950,
                  letterSpacing: 2,
                  color: REST_COLORS.restEmerald,
                  filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.45))",
                  marginBottom: 6,
                }}
              >
                POST
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: "#f8fafc",
                }}
              >
                UNTUK MEMBUAT DATA BARU
              </div>
            </div>

            {/* Technical Request & Insert Card */}
            <div
              style={{
                transform: `scale(${sp4BCard})`,
                opacity: sp4BCard,
                width: "100%",
                maxWidth: 920,
                backgroundColor: "rgba(10, 15, 29, 0.95)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                borderRadius: 24,
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaPaperPlane size={22} color={REST_COLORS.restEmerald} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: REST_COLORS.restEmerald }}>
                      NEW RESOURCE DISPATCH
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc" }}>
                      POST /api/users
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.5)",
                    color: REST_COLORS.restEmerald,
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  STATUS: 201 CREATED
                </div>
              </div>

              {/* Payload Created */}
              <div
                style={{
                  backgroundColor: "rgba(4, 20, 12, 0.8)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaPlusCircle size={24} color={REST_COLORS.restEmerald} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: REST_COLORS.textMuted }}>
                      PAYLOAD DATA BARU:
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#e2e8f0" }}>
                      &#123; &quot;name&quot;: &quot;User Baru&quot;, &quot;status&quot;: &quot;Active&quot; &#125;
                    </div>
                  </div>
                </div>
                <FaCheckCircle size={20} color={REST_COLORS.restEmerald} />
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4C: PUT / PATCH (Line 13: "PUT atau PATCH untuk memperbarui data.")
          Position: X = -2800 (further left)
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-2800} camera={camera}>
        <SceneContainer accentColor={REST_COLORS.restAmber}>
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
                transform: `scale(${sp4CTag})`,
                opacity: sp4CTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 15, 29, 0.85)",
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
                  backgroundColor: REST_COLORS.restAmber,
                  boxShadow: `0 0 10px ${REST_COLORS.restAmber}`,
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: REST_COLORS.restAmber,
                }}
              >
                HTTP METHOD // 03 (UPDATE)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div
              style={{
                transform: `translateY(${(1 - sp4CTitle) * 25}px) scale(${sp4CTitle})`,
                opacity: sp4CTitle,
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontSize: 90,
                  fontWeight: 950,
                  letterSpacing: 2,
                  color: REST_COLORS.restAmber,
                  filter: "drop-shadow(0 0 30px rgba(245, 158, 11, 0.45))",
                  marginBottom: 6,
                }}
              >
                PUT / PATCH
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: "#f8fafc",
                }}
              >
                UNTUK MEMPERBARUI DATA
              </div>
            </div>

            {/* Technical Request & Update Card */}
            <div
              style={{
                transform: `scale(${sp4CCard})`,
                opacity: sp4CCard,
                width: "100%",
                maxWidth: 920,
                backgroundColor: "rgba(10, 15, 29, 0.95)",
                border: "1.5px solid rgba(245, 158, 11, 0.35)",
                borderRadius: 24,
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      backgroundColor: "rgba(245, 158, 11, 0.15)",
                      border: "1px solid rgba(245, 158, 11, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaSyncAlt size={22} color={REST_COLORS.restAmber} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: REST_COLORS.restAmber }}>
                      RESOURCE UPDATE DISPATCH
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc" }}>
                      PUT /api/users/1
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    border: "1px solid rgba(245, 158, 11, 0.5)",
                    color: REST_COLORS.restAmber,
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  STATUS: 200 OK
                </div>
              </div>

              {/* Payload Modified */}
              <div
                style={{
                  backgroundColor: "rgba(20, 14, 4, 0.8)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaEdit size={24} color={REST_COLORS.restAmber} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: REST_COLORS.textMuted }}>
                      PERUBAHAN RECORD DATA:
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#e2e8f0" }}>
                      &#123; &quot;id&quot;: 1, &quot;role&quot;: &quot;Senior Architect&quot; &#125;
                    </div>
                  </div>
                </div>
                <FaCheckCircle size={20} color={REST_COLORS.restAmber} />
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4D: DELETE (Line 14: "DELETE untuk menghapus data.")
          Position: X = -4200 (further left)
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={-4200} camera={camera}>
        <SceneContainer accentColor={REST_COLORS.restCrimson}>
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
                transform: `scale(${sp4DTag})`,
                opacity: sp4DTag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 15, 29, 0.85)",
                border: "1.5px solid rgba(239, 68, 68, 0.4)",
                boxShadow: "0 0 24px rgba(239, 68, 68, 0.2)",
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
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: REST_COLORS.restCrimson,
                }}
              >
                HTTP METHOD // 04 (REMOVE)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div
              style={{
                transform: `translateY(${(1 - sp4DTitle) * 25}px) scale(${sp4DTitle})`,
                opacity: sp4DTitle,
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontSize: 90,
                  fontWeight: 950,
                  letterSpacing: 2,
                  color: REST_COLORS.restCrimson,
                  filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.45))",
                  marginBottom: 6,
                }}
              >
                DELETE
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: "#f8fafc",
                }}
              >
                UNTUK MENGHAPUS DATA
              </div>
            </div>

            {/* Technical Request & Delete Card */}
            <div
              style={{
                transform: `scale(${sp4DCard})`,
                opacity: sp4DCard,
                width: "100%",
                maxWidth: 920,
                backgroundColor: "rgba(10, 15, 29, 0.95)",
                border: "1.5px solid rgba(239, 68, 68, 0.35)",
                borderRadius: 24,
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      backgroundColor: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaTrashAlt size={22} color={REST_COLORS.restCrimson} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: REST_COLORS.restCrimson }}>
                      RESOURCE PURGE DISPATCH
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc" }}>
                      DELETE /api/users/1
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    border: "1px solid rgba(239, 68, 68, 0.5)",
                    color: REST_COLORS.restCrimson,
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  STATUS: 204 NO CONTENT
                </div>
              </div>

              {/* Action Confirmation */}
              <div
                style={{
                  backgroundColor: "rgba(20, 4, 8, 0.8)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaDatabase size={24} color={REST_COLORS.restCrimson} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: REST_COLORS.textMuted }}>
                      DATABASE PURGE STATUS:
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#fca5a5" }}>
                      RECORD ID #1 TELAH DIHAPUS PERMANEN DARI SISTEM
                    </div>
                  </div>
                </div>
                <FaCheckCircle size={20} color={REST_COLORS.restCrimson} />
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>
    </div>
  );
};

