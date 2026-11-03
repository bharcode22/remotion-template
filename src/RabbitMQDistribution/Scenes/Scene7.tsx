import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBolt,
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaDesktop,
  FaHdd,
  FaServer,
  FaTv,
} from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 1200 - 1430)
  // Line 17 & 18:
  // - "Ketika event diterima," (Voice: F1205 - F1245)
  // - "aplikasi akan otomatis mengunduh file dari cloud storage dan menyimpannya ke local storage produk."
  //   (Voice: F1245 - F1415)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F1202 - F1225)
  const spBadge = spring({
    frame: Math.max(0, frame - 1202),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F1206 - F1235)
  const spHeadline = spring({
    frame: Math.max(0, frame - 1206),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Cloud Storage CDN Source Hub Spring (F1220 - F1250)
  const spCloudHub = spring({
    frame: Math.max(0, frame - 1220),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 4. Products Download Grid Spring (F1240 - F1270)
  const spProducts = spring({
    frame: Math.max(0, frame - 1240),
    fps,
    config: { damping: 13, mass: 0.95, stiffness: 105 },
  });

  // 5. Grand Finale Completion Card Spring (F1365 - F1400)
  const spFinale = spring({
    frame: Math.max(0, frame - 1365),
    fps,
    config: { damping: 12, stiffness: 115, mass: 0.85 },
  });

  // Active States
  const isCloudActive = frame >= 1220;
  const isProductsActive = frame >= 1240;
  const isFinaleActive = frame >= 1365;

  // ─────────────────────────────────────────────────────────────────────────────
  // 📥 HIGH-SPEED CONCURRENT DOWNLOAD ANIMATION (F1245 - F1345)
  // ─────────────────────────────────────────────────────────────────────────────
  const downloadProgress = Math.floor(
    interpolate(frame, [1245, 1345], [0, 100], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  const downloadedMB = Math.floor(
    interpolate(frame, [1245, 1345], [0, 1250], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const isComplete = frame >= 1345;

  // Streaming laser chunks animation
  const streamOffset = ((frame * 9) % 100) / 100;

  // Ambient pulsing glow for completion
  const greenPulse = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor={RABBITMQ_COLORS.linuxGreen}>
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
            1. MINIMAL HEADER: "UNDUH & SIMPAN OTOMATIS"
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 30, 20, 0.94)",
            border: "1.5px solid rgba(34, 197, 94, 0.65)",
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.35)",
            marginBottom: 12,
          }}
        >
          <FaBolt size={13} color={RABBITMQ_COLORS.linuxGreen} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: RABBITMQ_COLORS.linuxGreen,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            FINAL STEP // AUTOMATED PARALLEL SYNC
          </span>
        </div>

        {/* Headline: "Ketika event diterima, otomatis unduh & simpan ke local storage" */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Ketika event diterima:
          </div>
          <h1
            style={{
              fontSize: 46,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #22c55e 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(34, 197, 94, 0.5))",
              }}
            >
              Otomatis Unduh &amp; Simpan ke Local Storage
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. TOP HUB: CLOUD STORAGE CDN REPOSITORY (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spCloudHub})`,
            opacity: isCloudActive ? Math.min(1, spCloudHub) : 0,
            width: 920,
            borderRadius: 20,
            backgroundColor: "rgba(10, 20, 36, 0.95)",
            border: "1.8px solid rgba(56, 189, 248, 0.6)",
            boxShadow:
              "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.25)",
            padding: "14px 24px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 13,
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                border: "1.2px solid rgba(56, 189, 248, 0.65)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(56, 189, 248, 0.4)",
              }}
            >
              <FaCloudDownloadAlt size={26} color="#38bdf8" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#f8fafc",
                  fontFamily: FONT_MONO,
                }}
              >
                Cloud Storage CDN // Direct Egress
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                }}
              >
                payload_bundle.tar.gz (1.25 GB) • 10 Gbps Bandwidth
              </div>
            </div>
          </div>

          {/* Egress status */}
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 10,
              backgroundColor: isComplete
                ? "rgba(34, 197, 94, 0.2)"
                : "rgba(56, 189, 248, 0.15)",
              border: isComplete
                ? "1.2px solid #22c55e"
                : "1px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: isComplete ? "#22c55e" : "#38bdf8",
                boxShadow: `0 0 8px ${isComplete ? "#22c55e" : "#38bdf8"}`,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: isComplete ? "#22c55e" : "#38bdf8",
              }}
            >
              {isComplete ? "DISTRIBUTION COMPLETE" : "STREAMING TO ALL NODES"}
            </span>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. MIDDLE MODULE: LASER STREAMING CONDUITS WITH DATA CHUNKS
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 920,
            height: 120,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 120px",
            boxSizing: "border-box",
          }}
        >
          {[0, 1, 2].map((channelIdx) => (
            <div
              key={channelIdx}
              style={{
                width: 2,
                height: "100%",
                backgroundColor: isComplete
                  ? "rgba(34, 197, 94, 0.5)"
                  : "rgba(56, 189, 248, 0.35)",
                position: "relative",
                boxShadow: isComplete
                  ? "0 0 10px rgba(34, 197, 94, 0.4)"
                  : "0 0 8px rgba(56, 189, 248, 0.25)",
              }}
            >
              {/* Streaming Data Chunk (Moving Down) */}
              {!isComplete && (
                <div
                  style={{
                    position: "absolute",
                    top: `${((streamOffset + channelIdx * 0.33) % 1) * 100}%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 6,
                    height: 18,
                    borderRadius: 3,
                    backgroundColor: "#38bdf8",
                    boxShadow: "0 0 12px #38bdf8",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. 3 SUBSCRIBER PRODUCT DOWNLOAD CARDS (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spProducts})`,
            opacity: isProductsActive ? Math.min(1, spProducts) : 0,
            width: 920,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            marginBottom: 16,
            boxSizing: "border-box",
            position: "relative",
            zIndex: 10,
          }}
        >
          {[
            {
              id: "PRODUK #1",
              title: "Kiosk Display",
              storagePath: "/var/storage/media_bundle.tar.gz",
              icon: <FaDesktop size={22} color="#38bdf8" />,
              accent: "#38bdf8",
            },
            {
              id: "PRODUK #2",
              title: "Digital Signage",
              storagePath: "/opt/app/media_bundle.tar.gz",
              icon: <FaTv size={22} color="#22c55e" />,
              accent: "#22c55e",
            },
            {
              id: "PRODUK #3",
              title: "Retail Box",
              storagePath: "/local/data/media_bundle.tar.gz",
              icon: <FaServer size={22} color="#a855f7" />,
              accent: "#a855f7",
            },
          ].map((prod) => (
            <div
              key={prod.id}
              style={{
                borderRadius: 20,
                backgroundColor: isComplete
                  ? "rgba(10, 30, 20, 0.96)"
                  : "rgba(10, 18, 32, 0.94)",
                border: isComplete
                  ? "1.8px solid rgba(34, 197, 94, 0.7)"
                  : `1.5px solid ${prod.accent}55`,
                boxShadow: isComplete
                  ? "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(34, 197, 94, 0.35)"
                  : `0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px ${prod.accent}20`,
                padding: "16px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Product Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 6,
                    backgroundColor: `${prod.accent}18`,
                    border: `1px solid ${prod.accent}45`,
                    fontSize: 10,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: prod.accent,
                    letterSpacing: 1,
                  }}
                >
                  {prod.id}
                </span>

                <span
                  style={{
                    fontSize: 10,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: isComplete ? "#22c55e" : "#38bdf8",
                  }}
                >
                  {isComplete ? "100%" : `${downloadProgress}%`}
                </span>
              </div>

              {/* Product Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: isComplete
                    ? "rgba(34, 197, 94, 0.2)"
                    : `${prod.accent}15`,
                  border: isComplete
                    ? "1.5px solid #22c55e"
                    : `1.2px solid ${prod.accent}45`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                  boxShadow: isComplete ? "0 0 18px #22c55e" : "none",
                }}
              >
                {isComplete ? (
                  <FaCheckCircle size={22} color="#22c55e" />
                ) : (
                  prod.icon
                )}
              </div>

              <div
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: 6,
                }}
              >
                {prod.title}
              </div>

              {/* Download Progress Bar / Saved Badge */}
              <div style={{ width: "100%", marginBottom: 8 }}>
                <div
                  style={{
                    width: "100%",
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      width: `${downloadProgress}%`,
                      height: "100%",
                      background: isComplete
                        ? "#22c55e"
                        : "linear-gradient(90deg, #38bdf8, #22c55e)",
                      boxShadow: isComplete ? "0 0 8px #22c55e" : "none",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 9.5,
                    fontFamily: FONT_MONO,
                    color: "#94a3b8",
                  }}
                >
                  {isComplete
                    ? "1.25 GB / 1.25 GB"
                    : `${downloadedMB} MB / 1.25 GB`}
                </div>
              </div>

              {/* Local Storage Saved Path Chip */}
              <div
                style={{
                  width: "100%",
                  padding: "5px 8px",
                  borderRadius: 8,
                  backgroundColor: isComplete
                    ? "rgba(34, 197, 94, 0.15)"
                    : "rgba(255, 255, 255, 0.04)",
                  border: isComplete
                    ? "1px solid rgba(34, 197, 94, 0.45)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  fontSize: 9.5,
                  fontFamily: FONT_MONO,
                  color: isComplete ? "#22c55e" : "#64748b",
                  fontWeight: 700,
                }}
              >
                <FaHdd size={10} color={isComplete ? "#22c55e" : "#64748b"} />
                <span>{isComplete ? "LOCAL STORAGE OK" : "LOCAL SSD READY"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            5. GRAND FINALE CELEBRATION CARD (F1365 - F1430)
           ═════════════════════════════════════════════════════════════════ */}
        {isFinaleActive && (
          <div
            style={{
              transform: `scale(${spFinale})`,
              opacity: spFinale,
              width: 920,
              borderRadius: 20,
              backgroundColor: "rgba(10, 32, 22, 0.96)",
              border: "2px solid #22c55e",
              boxShadow: `0 22px 55px rgba(0, 0, 0, 0.9), 0 0 ${35 + greenPulse * 25
                }px rgba(34, 197, 94, 0.5)`,
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(34, 197, 94, 0.25)",
                  border: "1.5px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px #22c55e",
                }}
              >
                <FaCheckCircle size={28} color="#22c55e" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                    letterSpacing: -0.5,
                  }}
                >
                  54 / 54 PERANGKAT TERSINKRONISASI!
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Zero Manual SSH • 100% Otomatis • File Siap Diputar Offline
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                border: "1px solid #22c55e",
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#22c55e",
                letterSpacing: 1,
              }}
            >
              MISSION ACCOMPLISHED
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            6. MINIMAL BOTTOM SUMMARY PILL
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.25)",
          }}
        >
          <SiRabbitmq size={13} color={RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            HASIL:{" "}
            <span style={{ color: "#22c55e" }}>
              DISTRIBUSI MASSAL OTOMATIS &amp; SELESAI DALAM HITUNGAN DETIK
            </span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
