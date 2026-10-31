import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaEdit,
  FaHandPointer,
  FaMagic,
  FaMousePointer,
  FaThLarge,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { FE_VS_BE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 344 - 538)
  // Naskah Lines 7 - 10:
  // - Line 7: "Mulai dari tampilan," (Frame 346 - 365)
  // - Line 8: "tombol," (Frame 372 - 390)
  // - Line 9: "formulir," (Frame 403 - 440)
  // - Line 10: "hingga animasi yang kalian lihat di layar." (Frame 456 - 502)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 344),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Spring
  const spTitle = spring({
    frame: Math.max(0, frame - 345),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // 1/1 Popup Springs
  // Popup 1: Tampilan (Frame 346)
  const spCard1 = spring({
    frame: Math.max(0, frame - 346),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 2: Tombol (Frame 372)
  const spCard2 = spring({
    frame: Math.max(0, frame - 372),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 3: Formulir (Frame 403)
  const spCard3 = spring({
    frame: Math.max(0, frame - 403),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Popup 4: Animasi Layar (Frame 456)
  const spCard4 = spring({
    frame: Math.max(0, frame - 456),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // Bottom Pill Spring
  const spBottomPill = spring({
    frame: Math.max(0, frame - 485),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Interactive Button Click Pulse (Card 2)
  const btnPulse = Math.sin((frame * Math.PI) / 10) * 0.04 + 1.0;

  // Animation Shimmer Wave (Card 4)
  const shimmerShift = (frame * 5) % 180;

  return (
    <SceneContainer accentColor={FE_VS_BE_COLORS.feCyan}>
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
        {/* 1. TOP BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 42, 0.92)",
            border: "1.5px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: FE_VS_BE_COLORS.feCyan,
              boxShadow: `0 0 10px ${FE_VS_BE_COLORS.feCyan}`,
            }}
          />
          <FaThLarge size={14} color={FE_VS_BE_COLORS.feCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: FE_VS_BE_COLORS.feCyan,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            ANATOMI FRONTEND // 4 KOMPONEN UTAMA
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
            Komponen Interaktif{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frontend
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
            Semua elemen yang dapat dilihat dan disentuh oleh pengguna:
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
              POPUP 1: TAMPILAN (Frame 346 - Line 7: "Mulai dari tampilan,")
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 346 && (
            <div
              style={{
                transform: `scale(${spCard1}) translateY(${(1 - spCard1) * 35}px)`,
                opacity: spCard1,
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
                {/* Icon Container */}
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
                  <FaThLarge size={28} color={FE_VS_BE_COLORS.feCyan} />
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
                      Tampilan (Visual UI)
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
                    Tata letak halaman, palet warna, tipografi, dan komposisi desain
                  </p>
                </div>
              </div>

              {/* Mini Preview Badge */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: FE_VS_BE_COLORS.feCyan,
                  whiteSpace: "nowrap",
                }}
              >
                🎨 Layout & Themes
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 2: TOMBOL (Frame 372 - Line 8: "tombol,")
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 372 && (
            <div
              style={{
                transform: `scale(${spCard2}) translateY(${(1 - spCard2) * 35}px)`,
                opacity: spCard2,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(10, 20, 42, 0.94)",
                border: "1.8px solid rgba(14, 165, 233, 0.45)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(14, 165, 233, 0.2)",
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
                    backgroundColor: "rgba(14, 165, 233, 0.16)",
                    border: "1.5px solid rgba(14, 165, 233, 0.5)",
                    boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaHandPointer size={28} color="#0ea5e9" />
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(14, 165, 233, 0.2)",
                        color: "#0ea5e9",
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
                      Tombol (Buttons & CTA)
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
                    Tombol aksi, navigasi menu, klik trigger, dan interaksi pengguna
                  </p>
                </div>
              </div>

              {/* Mini Interactive Button Mockup */}
              <div
                style={{
                  transform: `scale(${btnPulse})`,
                  padding: "9px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(14, 165, 233, 0.22)",
                  border: "1.5px solid #0ea5e9",
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)",
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <FaMousePointer size={12} color="#0ea5e9" />
                [ Click Action ]
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 3: FORMULIR (Frame 403 - Line 9: "formulir,")
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 403 && (
            <div
              style={{
                transform: `scale(${spCard3}) translateY(${(1 - spCard3) * 35}px)`,
                opacity: spCard3,
                padding: "22px 28px",
                borderRadius: 22,
                backgroundColor: "rgba(10, 20, 42, 0.94)",
                border: "1.8px solid rgba(16, 185, 129, 0.45)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)",
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
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaEdit size={28} color={FE_VS_BE_COLORS.beEmerald} />
                </div>

                {/* Text Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: FE_VS_BE_COLORS.beEmerald,
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
                      Formulir (Input Forms)
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
                    Kotak input teks, login, registrasi, formulir pencarian data
                  </p>
                </div>
              </div>

              {/* Mini Form Input Mockup */}
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
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <span>input: &quot;user@app&quot;</span>
                <span style={{ color: FE_VS_BE_COLORS.beEmerald }}>✓</span>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              POPUP 4: ANIMASI (Frame 456 - Line 10: "hingga animasi...")
             ───────────────────────────────────────────────────────────────── */}
          {frame >= 456 && (
            <div
              style={{
                transform: `scale(${spCard4}) translateY(${(1 - spCard4) * 35}px)`,
                opacity: spCard4,
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
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle Animated Shimmer Beam */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: -100 + shimmerShift * 6,
                  width: 80,
                  background:
                    "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.18), transparent)",
                  pointerEvents: "none",
                }}
              />

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
                  <FaMagic size={28} color={FE_VS_BE_COLORS.bePurple} />
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
                      Animasi Layar (Motion)
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
                    Transisi dinamis, efek hover, visual feedback, dan motion interaktif
                  </p>
                </div>
              </div>

              {/* Mini Motion Pill */}
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
                ✨ 60FPS Transitions
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
            backgroundColor: "rgba(10, 18, 36, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaCheckCircle size={15} color={FE_VS_BE_COLORS.feCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: FE_VS_BE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            USER EXPERIENCE // SEMUA YANG DILIHAT DAN DISENTUH DI LAYAR
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

