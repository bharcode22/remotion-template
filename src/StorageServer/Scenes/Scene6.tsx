import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaAws,
  FaCheckCircle,
  FaCloud,
  FaDatabase,
  FaGlobe,
  FaGoogle,
  FaHdd,
  FaInfinity,
  FaMicrosoft,
  FaServer,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS PER STATION (Frames 790 - 1680):
  // - Station 1 (Local Storage Concept): Frames 795 - 935 (Line 13)
  // - Camera Slide 1 (1 -> 2)           : Frames 935 - 958 (Camera moves to X = -1400)
  // - Station 2 (Object Storage Concept): Frames 958 - 1162 (Line 15)
  // - Camera Slide 2 (2 -> 3)           : Frames 1162 - 1186 (Camera moves to X = -2800)
  // - Station 3 (Local Storage Deep Dive Typewriter): Frames 1186 - 1366 (Lines 17 - 18)
  // - Camera Slide 3 (3 -> 4)           : Frames 1366 - 1380 (Camera moves to X = -4200)
  // - Station 4 (Object Storage Deep Dive Typewriter): Frames 1380 - 1680 (Lines 20 - 22)
  // ─────────────────────────────────────────────────────────────────────────────

  // Station 1: Local Storage Concept Springs
  const spSt1Tag = spring({ frame: Math.max(0, frame - 795), fps, config: { damping: 14, stiffness: 95 } });
  const spSt1Card = spring({ frame: Math.max(0, frame - 802), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const spSt1Graphic = spring({ frame: Math.max(0, frame - 812), fps, config: { damping: 13, stiffness: 100 } });

  // Station 2: Object Storage Concept Springs
  const spSt2Tag = spring({ frame: Math.max(0, frame - 955), fps, config: { damping: 14, stiffness: 95 } });
  const spSt2Card = spring({ frame: Math.max(0, frame - 960), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const spGcp = spring({ frame: Math.max(0, frame - 1020), fps, config: { damping: 12, stiffness: 110 } });
  const spAws = spring({ frame: Math.max(0, frame - 1055), fps, config: { damping: 12, stiffness: 110 } });
  const spAzure = spring({ frame: Math.max(0, frame - 1090), fps, config: { damping: 12, stiffness: 110 } });

  // Station 3: Local Storage Deep Dive (Typewriter) Springs
  const spSt3Tag = spring({ frame: Math.max(0, frame - 1180), fps, config: { damping: 14, stiffness: 95 } });
  const spSt3Terminal = spring({ frame: Math.max(0, frame - 1184), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const spSt3Card1 = spring({ frame: Math.max(0, frame - 1285), fps, config: { damping: 13, stiffness: 105 } });
  const spSt3Card2 = spring({ frame: Math.max(0, frame - 1320), fps, config: { damping: 13, stiffness: 105 } });

  // Station 4: Object Storage Deep Dive (Typewriter) Springs
  const spSt4Tag = spring({ frame: Math.max(0, frame - 1378), fps, config: { damping: 14, stiffness: 95 } });
  const spSt4Terminal = spring({ frame: Math.max(0, frame - 1382), fps, config: { damping: 15, stiffness: 85, mass: 1 } });
  const spAdv1 = spring({ frame: Math.max(0, frame - 1490), fps, config: { damping: 13, stiffness: 110 } });
  const spAdv2 = spring({ frame: Math.max(0, frame - 1525), fps, config: { damping: 13, stiffness: 110 } });
  const spAdv3 = spring({ frame: Math.max(0, frame - 1560), fps, config: { damping: 13, stiffness: 110 } });
  const spFinalePill = spring({ frame: Math.max(0, frame - 1580), fps, config: { damping: 14, stiffness: 90 } });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER FOR STATION 3 (Lines 17 - 18)
  // ─────────────────────────────────────────────────────────────────────────────
  const textSt3_1 = "Local Storage cocok untuk kebutuhan sederhana,";
  const charsSt3_1 = Math.floor(
    interpolate(frame, [1188, 1280], [0, textSt3_1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTextSt3_1 = textSt3_1.slice(0, charsSt3_1);

  const isSt3_2Active = frame >= 1285;
  const textSt3_2 = "atau penyimpanan internal server.";
  const charsSt3_2 = Math.floor(
    interpolate(frame, [1290, 1355], [0, textSt3_2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTextSt3_2 = textSt3_2.slice(0, charsSt3_2);

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER FOR STATION 4 (Lines 20 - 22)
  // ─────────────────────────────────────────────────────────────────────────────
  const textSt4_1 =
    "Sedangkan Object Storage, lebih cocok ketika aplikasi membutuhkan penyimpanan file yang skalabel,";
  const charsSt4_1 = Math.floor(
    interpolate(frame, [1380, 1485], [0, textSt4_1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTextSt4_1 = textSt4_1.slice(0, charsSt4_1);

  const isSt4_2Active = frame >= 1490;
  const textSt4_2 =
    "mudah diakses, dan tidak bergantung pada kapasitas disk satu server.";
  const charsSt4_2 = Math.floor(
    interpolate(frame, [1495, 1595], [0, textSt4_2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentTextSt4_2 = textSt4_2.slice(0, charsSt4_2);

  const cursorBlink = frame % 14 < 7;

  // Data packet traveling along continuous line across all 4 stations
  const packetX = interpolate(
    frame,
    [800, 1650],
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
          THE CONTINUOUS CONNECTING LINE ("GARIS PENGHUBUNG STORAGE")
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
            "linear-gradient(90deg, #a855f7 0%, #38bdf8 33%, #10b981 66%, #38bdf8 100%)",
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
            top: -14,
            left: 5400 + (packetX - 400),
            padding: "4px 12px",
            borderRadius: 6,
            backgroundColor: "#ffffff",
            color: "#030712",
            fontFamily: FONT_MONO,
            fontSize: 10,
            fontWeight: 900,
            boxShadow:
              "0 0 20px #ffffff, 0 0 35px #38bdf8",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: STORAGE_COLORS.accentCyan,
            }}
          />
          DATA PACKET
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 1 (X = 0): LOCAL STORAGE CONCEPT (Frames 795 - 935)
          Voiceover Line 13: "Pertama, Local Storage, yaitu menyimpan file langsung di dalam disk server."
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1080,
          height: 1920,
        }}
      >
        <SceneContainer accentColor={STORAGE_COLORS.accentEmerald}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${spSt1Tag}) translateY(${(1 - spSt1Tag) * -20}px)`,
                opacity: spSt1Tag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.92)",
                border: "1.5px solid rgba(16, 185, 129, 0.45)",
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
                marginBottom: 26,
              }}
            >
              <FaHdd size={15} color={STORAGE_COLORS.accentEmerald} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: STORAGE_COLORS.accentEmerald,
                  textTransform: "uppercase",
                }}
              >
                STATION 01 // PENDEKATAN PERTAMA
              </span>
            </div>

            {/* Station Card */}
            <div
              style={{
                transform: `scale(${spSt1Card}) translateY(${(1 - spSt1Card) * 35}px)`,
                opacity: spSt1Card,
                width: 900,
                padding: "48px 44px",
                borderRadius: 32,
                backgroundColor: STORAGE_COLORS.bgSurface,
                border: "2px solid rgba(16, 185, 129, 0.4)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(16, 185, 129, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  color: STORAGE_COLORS.accentEmerald,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                PENDEKATAN #1
              </span>

              <h2
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: STORAGE_COLORS.textPrimary,
                  margin: 0,
                  marginBottom: 14,
                  letterSpacing: -0.5,
                }}
              >
                1. Local Storage
              </h2>

              <p
                style={{
                  fontSize: 24,
                  color: STORAGE_COLORS.accentEmerald,
                  margin: 0,
                  marginBottom: 30,
                  lineHeight: 1.45,
                  fontWeight: 700,
                }}
              >
                Menyimpan file langsung di dalam disk fisik server.
              </p>

              {/* Graphic: Server Disk Diagram */}
              <div
                style={{
                  transform: `scale(${spSt1Graphic})`,
                  width: "100%",
                  padding: "24px 28px",
                  borderRadius: 20,
                  backgroundColor: "rgba(14, 23, 44, 0.95)",
                  border: "1.5px solid rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                {/* Server Node */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(8, 14, 28, 0.9)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                  }}
                >
                  <FaServer size={24} color={STORAGE_COLORS.accentCyan} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                      App Server
                    </div>
                    <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.textSecondary }}>
                      Node.js / Go / PHP
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <span style={{ fontSize: 24, color: STORAGE_COLORS.accentEmerald, fontWeight: 900 }}>
                  ──▶
                </span>

                {/* Internal Hard Drive */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 18px",
                    borderRadius: 14,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <FaHdd size={24} color={STORAGE_COLORS.accentEmerald} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: STORAGE_COLORS.accentEmerald }}>
                      /var/www/uploads
                    </div>
                    <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.textSecondary }}>
                      Internal Disk (/dev/sda1)
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Key Spec Pills */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  width: "100%",
                  marginTop: 24,
                }}
              >
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentEmerald,
                  }}
                >
                  ⚡ Low Latency
                </div>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentCyan,
                  }}
                >
                  🔒 Internal Scope
                </div>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentAmber,
                  }}
                >
                  💾 Fixed Storage
                </div>
              </div>
            </div>
          </div>
        </SceneContainer>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 2 (X = 1400): OBJECT STORAGE CONCEPT (Frames 958 - 1162)
          Voiceover Line 15: "Kedua, Object Storage, seperti cloud storage dari GCP, S3 dari AWS, dan masih banyak lagi."
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          left: 1400,
          top: 0,
          width: 1080,
          height: 1920,
        }}
      >
        <SceneContainer accentColor={STORAGE_COLORS.accentCyan}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${spSt2Tag}) translateY(${(1 - spSt2Tag) * -20}px)`,
                opacity: spSt2Tag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.92)",
                border: "1.5px solid rgba(56, 189, 248, 0.45)",
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
                marginBottom: 26,
              }}
            >
              <FaCloud size={15} color={STORAGE_COLORS.accentCyan} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: STORAGE_COLORS.accentCyan,
                  textTransform: "uppercase",
                }}
              >
                STATION 02 // PENDEKATAN KEDUA
              </span>
            </div>

            {/* Station Card */}
            <div
              style={{
                transform: `scale(${spSt2Card}) translateY(${(1 - spSt2Card) * 35}px)`,
                opacity: spSt2Card,
                width: 900,
                padding: "48px 44px",
                borderRadius: 32,
                backgroundColor: STORAGE_COLORS.bgSurface,
                border: "2px solid rgba(56, 189, 248, 0.4)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  color: STORAGE_COLORS.accentCyan,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                PENDEKATAN #2
              </span>

              <h2
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: STORAGE_COLORS.textPrimary,
                  margin: 0,
                  marginBottom: 14,
                  letterSpacing: -0.5,
                }}
              >
                2. Object Storage
              </h2>

              <p
                style={{
                  fontSize: 24,
                  color: STORAGE_COLORS.accentCyan,
                  margin: 0,
                  marginBottom: 28,
                  lineHeight: 1.45,
                  fontWeight: 700,
                }}
              >
                Penyimpanan cloud terdistribusi berbasis objek & bucket.
              </p>

              {/* Staggered Cloud Providers Showcase */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  width: "100%",
                }}
              >
                {/* 1. GCP Cloud Storage */}
                <div
                  style={{
                    transform: `scale(${spGcp})`,
                    opacity: spGcp,
                    padding: "16px 22px",
                    borderRadius: 16,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1.8px solid rgba(56, 189, 248, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <FaGoogle size={24} color={STORAGE_COLORS.accentCyan} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        Google Cloud Storage (GCS)
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentCyan }}>
                        Google Cloud Platform
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      color: STORAGE_COLORS.accentCyan,
                      backgroundColor: "rgba(56, 189, 248, 0.18)",
                      padding: "4px 10px",
                      borderRadius: 8,
                    }}
                  >
                    GCP BUCKET
                  </span>
                </div>

                {/* 2. AWS S3 */}
                <div
                  style={{
                    transform: `scale(${spAws})`,
                    opacity: spAws,
                    padding: "16px 22px",
                    borderRadius: 16,
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: "1.8px solid rgba(245, 158, 11, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <FaAws size={26} color={STORAGE_COLORS.accentAmber} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        Amazon Simple Storage Service (S3)
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentAmber }}>
                        Amazon Web Services
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      color: STORAGE_COLORS.accentAmber,
                      backgroundColor: "rgba(245, 158, 11, 0.18)",
                      padding: "4px 10px",
                      borderRadius: 8,
                    }}
                  >
                    AWS S3
                  </span>
                </div>

                {/* 3. Azure & Others */}
                <div
                  style={{
                    transform: `scale(${spAzure})`,
                    opacity: spAzure,
                    padding: "16px 22px",
                    borderRadius: 16,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1.8px solid rgba(168, 85, 247, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <FaMicrosoft size={22} color={STORAGE_COLORS.accentPurple} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        Azure Blob Storage & Layanan Lainnya
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentPurple }}>
                        Cloudflare R2, MinIO, DigitalOcean Spaces
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      color: STORAGE_COLORS.accentPurple,
                      backgroundColor: "rgba(168, 85, 247, 0.18)",
                      padding: "4px 10px",
                      borderRadius: 8,
                    }}
                  >
                    & OTHERS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SceneContainer>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 3 (X = 2800): LOCAL STORAGE DEEP DIVE (TYPEWRITER) (Frames 1186 - 1366)
          Voiceover Lines 17 - 18: "Local Storage cocok untuk kebutuhan sederhana, atau penyimpanan internal server."
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          left: 2800,
          top: 0,
          width: 1080,
          height: 1920,
        }}
      >
        <SceneContainer accentColor={STORAGE_COLORS.accentEmerald}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${spSt3Tag}) translateY(${(1 - spSt3Tag) * -20}px)`,
                opacity: spSt3Tag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.92)",
                border: "1.5px solid rgba(16, 185, 129, 0.45)",
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
                marginBottom: 24,
              }}
            >
              <FaHdd size={15} color={STORAGE_COLORS.accentEmerald} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: STORAGE_COLORS.accentEmerald,
                  textTransform: "uppercase",
                }}
              >
                STATION 03 // KARAKTERISTIK LOCAL STORAGE
              </span>
            </div>

            {/* macOS Dev Terminal with Typewriter */}
            <div
              style={{
                transform: `scale(${spSt3Terminal}) translateY(${(1 - spSt3Terminal) * 35}px)`,
                opacity: spSt3Terminal,
                width: 920,
                borderRadius: 24,
                backgroundColor: "rgba(8, 14, 28, 0.95)",
                border: "1.8px solid rgba(16, 185, 129, 0.4)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(16, 185, 129, 0.2)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Title Bar */}
              <div
                style={{
                  height: 54,
                  padding: "0 20px",
                  backgroundColor: "rgba(14, 23, 44, 0.95)",
                  borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#10b981" }} />
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 13, fontWeight: 600, color: STORAGE_COLORS.textMuted }}>
                  zsh — local-storage-spec@server ~
                </div>
                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentEmerald,
                  }}
                >
                  LOCAL DISK
                </div>
              </div>

              {/* Terminal Body */}
              <div
                style={{
                  padding: "36px 36px 34px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  fontFamily: FONT_MONO,
                  boxSizing: "border-box",
                }}
              >
                {/* Command Line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 20,
                    color: STORAGE_COLORS.textMuted,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingBottom: 12,
                  }}
                >
                  <span style={{ color: STORAGE_COLORS.accentEmerald, fontWeight: 800 }}>➜</span>
                  <span style={{ color: STORAGE_COLORS.accentCyan, fontWeight: 700 }}>server</span>
                  <span style={{ color: STORAGE_COLORS.textSecondary }}>cat local_storage_usecases.md</span>
                </div>

                {/* Typewriter Output Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, lineHeight: 1.5 }}>
                  {/* Line 17 */}
                  <div style={{ fontSize: 34, fontWeight: 700, color: STORAGE_COLORS.accentEmerald }}>
                    {currentTextSt3_1}
                    {!isSt3_2Active && (
                      <span style={{ display: "inline-block", marginLeft: 6, opacity: cursorBlink ? 1 : 0 }}>
                        █
                      </span>
                    )}
                  </div>

                  {/* Line 18 */}
                  {isSt3_2Active && (
                    <div style={{ fontSize: 34, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                      {currentTextSt3_2}
                      {charsSt3_2 < textSt3_2.length && (
                        <span style={{ display: "inline-block", marginLeft: 6, opacity: cursorBlink ? 1 : 0 }}>
                          █
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* 2 Highlighted Use-Case Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
                  <div
                    style={{
                      transform: `scale(${spSt3Card1})`,
                      opacity: spSt3Card1,
                      padding: "16px 20px",
                      borderRadius: 16,
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      border: "1.8px solid rgba(16, 185, 129, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <FaCheckCircle size={22} color={STORAGE_COLORS.accentEmerald} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        Kebutuhan Sederhana
                      </div>
                      <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentEmerald }}>
                        Aplikasi kecil, project prototype, personal server, local cache
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      transform: `scale(${spSt3Card2})`,
                      opacity: spSt3Card2,
                      padding: "16px 20px",
                      borderRadius: 16,
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                      border: "1.8px solid rgba(56, 189, 248, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <FaDatabase size={22} color={STORAGE_COLORS.accentCyan} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        Penyimpanan Internal Server
                      </div>
                      <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentCyan }}>
                        File konfigurasi sistem, server log files, temp session data
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SceneContainer>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 4 (X = 4200): OBJECT STORAGE DEEP DIVE (TYPEWRITER) (Frames 1380 - 1680)
          Voiceover Lines 20 - 22: "Sedangkan Object Storage, lebih cocok ketika aplikasi membutuhkan..."
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          left: 4200,
          top: 0,
          width: 1080,
          height: 1920,
        }}
      >
        <SceneContainer accentColor={STORAGE_COLORS.accentPurple}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                transform: `scale(${spSt4Tag}) translateY(${(1 - spSt4Tag) * -20}px)`,
                opacity: spSt4Tag,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 42, 0.92)",
                border: "1.5px solid rgba(168, 85, 247, 0.45)",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.25)",
                marginBottom: 24,
              }}
            >
              <FaInfinity size={15} color={STORAGE_COLORS.accentPurple} />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  color: STORAGE_COLORS.accentPurple,
                  textTransform: "uppercase",
                }}
              >
                STATION 04 // KEUNGGULAN OBJECT STORAGE
              </span>
            </div>

            {/* macOS Dev Terminal with Typewriter */}
            <div
              style={{
                transform: `scale(${spSt4Terminal}) translateY(${(1 - spSt4Terminal) * 35}px)`,
                opacity: spSt4Terminal,
                width: 920,
                borderRadius: 24,
                backgroundColor: "rgba(8, 14, 28, 0.95)",
                border: "1.8px solid rgba(168, 85, 247, 0.4)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(168, 85, 247, 0.2)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Title Bar */}
              <div
                style={{
                  height: 54,
                  padding: "0 20px",
                  backgroundColor: "rgba(14, 23, 44, 0.95)",
                  borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#10b981" }} />
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 13, fontWeight: 600, color: STORAGE_COLORS.textMuted }}>
                  zsh — object-storage-benefits@cloud ~
                </div>
                <div
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    border: "1px solid rgba(168, 85, 247, 0.35)",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentPurple,
                  }}
                >
                  CLOUD OBJECT
                </div>
              </div>

              {/* Terminal Body */}
              <div
                style={{
                  padding: "36px 36px 34px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  fontFamily: FONT_MONO,
                  boxSizing: "border-box",
                }}
              >
                {/* Command Line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 20,
                    color: STORAGE_COLORS.textMuted,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingBottom: 12,
                  }}
                >
                  <span style={{ color: STORAGE_COLORS.accentPurple, fontWeight: 800 }}>➜</span>
                  <span style={{ color: STORAGE_COLORS.accentCyan, fontWeight: 700 }}>cloud</span>
                  <span style={{ color: STORAGE_COLORS.textSecondary }}>cat object_storage_advantages.md</span>
                </div>

                {/* Typewriter Output Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, lineHeight: 1.45 }}>
                  {/* Line 20 - 21 */}
                  <div style={{ fontSize: 32, fontWeight: 700, color: STORAGE_COLORS.accentCyan }}>
                    {currentTextSt4_1}
                    {!isSt4_2Active && (
                      <span style={{ display: "inline-block", marginLeft: 6, opacity: cursorBlink ? 1 : 0 }}>
                        █
                      </span>
                    )}
                  </div>

                  {/* Line 22 */}
                  {isSt4_2Active && (
                    <div style={{ fontSize: 32, fontWeight: 800, color: "#fbbf24" }}>
                      {currentTextSt4_2}
                      {charsSt4_2 < textSt4_2.length && (
                        <span style={{ display: "inline-block", marginLeft: 6, opacity: cursorBlink ? 1 : 0 }}>
                          █
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* 3 Staggered Advantage Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 6 }}>
                  {/* Card 1: Skalabel */}
                  <div
                    style={{
                      transform: `scale(${spAdv1})`,
                      opacity: spAdv1,
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                      border: "1.8px solid rgba(56, 189, 248, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <FaInfinity size={20} color={STORAGE_COLORS.accentCyan} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 17, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        1. Skalabel Tanpa Batas
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentCyan }}>
                        Kapasitas otomatis membesar seiring pertumbuhan data
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Mudah Diakses */}
                  <div
                    style={{
                      transform: `scale(${spAdv2})`,
                      opacity: spAdv2,
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      border: "1.8px solid rgba(16, 185, 129, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <FaGlobe size={20} color={STORAGE_COLORS.accentEmerald} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 17, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        2. Mudah Diakses dari Mana Saja
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentEmerald }}>
                        Akses langsung via REST API, public/signed URL, dan CDN
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Tidak Bergantung pada 1 Disk Server */}
                  <div
                    style={{
                      transform: `scale(${spAdv3})`,
                      opacity: spAdv3,
                      padding: "14px 18px",
                      borderRadius: 14,
                      backgroundColor: "rgba(168, 85, 247, 0.12)",
                      border: "1.8px solid rgba(168, 85, 247, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <FaShieldAlt size={20} color={STORAGE_COLORS.accentPurple} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 17, fontWeight: 800, color: STORAGE_COLORS.textPrimary }}>
                        3. Bebas Limitasi 1 Disk Server
                      </div>
                      <div style={{ fontSize: 12, fontFamily: FONT_MONO, color: STORAGE_COLORS.accentPurple }}>
                        High Availability & redundansi terdistribusi 99.999999999%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Context Pill */}
            <div
              style={{
                transform: `scale(${spFinalePill}) translateY(${(1 - spFinalePill) * 20}px)`,
                opacity: spFinalePill,
                marginTop: 26,
                padding: "12px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(10, 20, 36, 0.85)",
                border: "1.5px solid rgba(168, 85, 247, 0.35)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <FaTerminal size={15} color={STORAGE_COLORS.accentPurple} />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: STORAGE_COLORS.textPrimary,
                  fontFamily: FONT_MONO,
                  letterSpacing: 1.2,
                }}
              >
                OBJECT STORAGE // STANDAR UTAMA ARSITEKTUR CLOUD MODERN
              </span>
            </div>
          </div>
        </SceneContainer>
      </div>
    </div>
  );
};
