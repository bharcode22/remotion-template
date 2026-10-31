import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaKey,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 640 - 890)
  // Naskah Lines 13 - 16:
  // - Line 13: "Backend bertanggung jawab untuk mengelola data," (Frame 642 - 708)
  // - Line 14: "menjalankan logika bisnis," (Frame 717 - 759)
  // - Line 15: "melakukan autentikasi," (Frame 766 - 801)
  // - Line 16: "hingga berkomunikasi dengan database." (Frame 810 - 860)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 640),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Spring
  const spTitle = spring({
    frame: Math.max(0, frame - 641),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // 1/1 Staggered Popup Springs
  // Popup 1: Mengelola Data (Frame 642)
  const spCard1 = spring({
    frame: Math.max(0, frame - 642),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 2: Menjalankan Logika Bisnis (Frame 717)
  const spCard2 = spring({
    frame: Math.max(0, frame - 717),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 3: Melakukan Autentikasi (Frame 766)
  const spCard3 = spring({
    frame: Math.max(0, frame - 766),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 4: Berkomunikasi dengan Database (Frame 810)
  const spCard4 = spring({
    frame: Math.max(0, frame - 810),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Bottom Status Pill Spring
  const spBottomPill = spring({
    frame: Math.max(0, frame - 845),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Animated Gear Rotation Effect (Card 2)
  const gearSpin = (frame * 2.5) % 360;

  // Key Lock Shimmer Effect (Card 3)
  const keyPulse = Math.sin((frame * Math.PI) / 12) * 0.05 + 1.0;

  return (
    <SceneContainer accentColor={FE_VS_BE_COLORS.bePurple}>
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
        {/* 1. TOP BADGE: BACKEND CORE RESPONSIBILITIES */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(16, 10, 36, 0.92)",
            border: "1.5px solid rgba(168, 85, 247, 0.5)",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: FE_VS_BE_COLORS.bePurple,
              boxShadow: `0 0 10px ${FE_VS_BE_COLORS.bePurple}`,
            }}
          />
          <FaServer size={14} color={FE_VS_BE_COLORS.bePurple} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: FE_VS_BE_COLORS.bePurple,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            TANGGUNG JAWAB BACKEND // 4 PILAR UTAMA
          </span>
        </div>

        {/* 2. HEADLINE */}
        <div
          style={{
            transform: `scale(${spTitle}) translateY(${(1 - spTitle) * 20}px)`,
            opacity: spTitle,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: FE_VS_BE_COLORS.textPrimary,
              margin: 0,
              letterSpacing: -0.5,
              lineHeight: 1.25,
            }}
          >
            Tugas Utama{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #a855f7 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Backend
            </span>
          </h2>
          <p
            style={{
              fontSize: 22,
              color: FE_VS_BE_COLORS.textSecondary,
              fontWeight: 600,
              margin: "6px 0 0 0",
            }}
          >
            Menjalankan seluruh operasi vital di balik layar aplikasi:
          </p>
        </div>

        {/* 3. 4 POPUP CARDS LIST (MUNCUL 1 PER 1) */}
        <div
          style={{
            width: 920,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* ─────────────────────────────────────────────────────────────────
              POPUP 1: MENGELOLA DATA (Frame 642 - Line 13)
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 642 && (
            <div
              style={{
                transform: `scale(${spCard1}) translateY(${(1 - spCard1) * 35}px)`,
                opacity: spCard1,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(20, 10, 42, 0.94)",
                border: "1.8px solid rgba(168, 85, 247, 0.5)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(168, 85, 247, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    backgroundColor: "rgba(168, 85, 247, 0.18)",
                    border: "1.5px solid rgba(168, 85, 247, 0.55)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaDatabase size={28} color={FE_VS_BE_COLORS.bePurple} />
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(168, 85, 247, 0.25)",
                        color: FE_VS_BE_COLORS.bePurple,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      01
                    </span>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Mengelola Data
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Menyimpan, memvalidasi, memfilter, dan mengorganisasi data pengguna
                  </p>
                </div>
              </div>

              {/* Mini Preview Badge */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.bePurple,
                  whiteSpace: "nowrap",
                }}
              >
                💾 Data Management
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 2: MENJALANKAN LOGIKA BISNIS (Frame 717 - Line 14)
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 717 && (
            <div
              style={{
                transform: `scale(${spCard2}) translateY(${(1 - spCard2) * 35}px)`,
                opacity: spCard2,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(10, 20, 42, 0.94)",
                border: "1.8px solid rgba(56, 189, 248, 0.45)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Icon Container with subtle gear rotation */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    backgroundColor: "rgba(56, 189, 248, 0.16)",
                    border: "1.5px solid rgba(56, 189, 248, 0.5)",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ transform: `rotate(${gearSpin}deg)`, display: "flex" }}>
                    <FaCogs size={30} color={FE_VS_BE_COLORS.feCyan} />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(56, 189, 248, 0.2)",
                        color: FE_VS_BE_COLORS.feCyan,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      02
                    </span>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Menjalankan Logika Bisnis
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Aturan transaksi, algoritma, kalkulasi harga, dan alur proses sistem
                  </p>
                </div>
              </div>

              {/* Mini Logic Badge */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.feCyan,
                  whiteSpace: "nowrap",
                }}
              >
                ⚙️ Business Logic
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 3: MELAKUKAN AUTENTIKASI (Frame 766 - Line 15)
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 766 && (
            <div
              style={{
                transform: `scale(${spCard3}) translateY(${(1 - spCard3) * 35}px)`,
                opacity: spCard3,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(30, 20, 10, 0.94)",
                border: "1.8px solid rgba(245, 158, 11, 0.45)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(245, 158, 11, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Icon Container with key pulse */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    backgroundColor: "rgba(245, 158, 11, 0.16)",
                    border: "1.5px solid rgba(245, 158, 11, 0.5)",
                    boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ transform: `scale(${keyPulse})`, display: "flex" }}>
                    <FaShieldAlt size={28} color={FE_VS_BE_COLORS.accentAmber} />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(245, 158, 11, 0.2)",
                        color: FE_VS_BE_COLORS.accentAmber,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      03
                    </span>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Melakukan Autentikasi
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Verifikasi login pengguna, enkripsi token JWT, dan keamanan akses
                  </p>
                </div>
              </div>

              {/* Mini Security Badge */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.accentAmber,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <FaKey size={13} color={FE_VS_BE_COLORS.accentAmber} />
                🔒 Auth & JWT
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 4: BERKOMUNIKASI DENGAN DATABASE (Frame 810 - Line 16)
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 810 && (
            <div
              style={{
                transform: `scale(${spCard4}) translateY(${(1 - spCard4) * 35}px)`,
                opacity: spCard4,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(10, 30, 20, 0.94)",
                border: "1.8px solid rgba(16, 185, 129, 0.45)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    backgroundColor: "rgba(16, 185, 129, 0.16)",
                    border: "1.5px solid rgba(16, 185, 129, 0.55)",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaNetworkWired size={28} color={FE_VS_BE_COLORS.beEmerald} />
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(16, 185, 129, 0.25)",
                        color: FE_VS_BE_COLORS.beEmerald,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                      }}
                    >
                      04
                    </span>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: FE_VS_BE_COLORS.textPrimary,
                        margin: 0,
                      }}
                    >
                      Komunikasi dengan Database
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      color: FE_VS_BE_COLORS.textSecondary,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    Menjalankan query SQL/NoSQL, indexing, dan transaksi data real-time
                  </p>
                </div>
              </div>

              {/* Mini Database Badge */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.beEmerald,
                  whiteSpace: "nowrap",
                }}
              >
                🗄️ SQL & NoSQL Bridge
              </div>
            </div>
          )}
        </div>

        {/* 4. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 20}px)`,
            opacity: spBottomPill,
            marginTop: 26,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(16, 10, 36, 0.9)",
            border: "1.5px solid rgba(168, 85, 247, 0.4)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCheckCircle size={15} color={FE_VS_BE_COLORS.bePurple} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: FE_VS_BE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            BACKEND CORE // SYSTEM RELIABILITY, SECURITY & PERFORMANCE
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

