import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBookOpen,
  FaFileAlt,
  FaFilm,
  FaImage,
  FaMusic,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TYPEWRITER (Frames 376 - 680):
  // Naskah Lines 7 - 9:
  // - Lines 7 - 8: "Storage server, merupakan media penyimpanan yang digunakan untuk menyimpan berbagai jenis data,"
  //   Speech: Frames 379 - 518
  // - Line 9: "mulai dari dokumen, gambar, audio, hingga video."
  //   Speech: Frames 534 - 648
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 376),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Terminal Window Spring
  const spTerminal = spring({
    frame: Math.max(0, frame - 378),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // 4 Media Type Cards Springs (Revealing starting at Frame 530 as spoken)
  const spDokumen = spring({
    frame: Math.max(0, frame - 530),
    fps,
    config: { damping: 13, stiffness: 110 },
  });
  const spGambar = spring({
    frame: Math.max(0, frame - 565),
    fps,
    config: { damping: 13, stiffness: 110 },
  });
  const spAudio = spring({
    frame: Math.max(0, frame - 598),
    fps,
    config: { damping: 13, stiffness: 110 },
  });
  const spVideo = spring({
    frame: Math.max(0, frame - 625),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 635),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER INTERPOLATION (Large Mobile-Friendly Monospace 34px - 36px)
  // Lines 7 - 8:
  // "Storage server, merupakan media penyimpanan yang digunakan untuk menyimpan berbagai jenis data,"
  // ─────────────────────────────────────────────────────────────────────────────
  const text1 =
    "Storage server, merupakan media penyimpanan yang digunakan untuk menyimpan berbagai jenis data,";
  const chars1 = Math.floor(
    interpolate(frame, [382, 515], [0, text1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText1 = text1.slice(0, chars1);

  const cursorBlink = frame % 14 < 7;

  return (
    <SceneContainer accentColor={STORAGE_COLORS.accentCyan}>
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
        {/* 1. TOP DEFINITION BADGE */}
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
            border: "1.5px solid rgba(56, 189, 248, 0.4)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: STORAGE_COLORS.accentCyan,
              boxShadow: `0 0 10px ${STORAGE_COLORS.accentCyan}`,
              display: "inline-block",
            }}
          />
          <FaBookOpen size={15} color={STORAGE_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: STORAGE_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            STORAGE DEFINITION // MEDIA PENYIMPANAN
          </span>
        </div>

        {/* 2. HERO CENTERPIECE: MACOS DEV TERMINAL */}
        <div
          style={{
            transform: `scale(${spTerminal}) translateY(${(1 - spTerminal) * 35}px)`,
            opacity: spTerminal,
            width: 920,
            borderRadius: 24,
            backgroundColor: "rgba(8, 14, 28, 0.95)",
            border: "1.8px solid rgba(56, 189, 248, 0.4)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 2A. TITLE BAR */}
          <div
            style={{
              height: 54,
              padding: "0 20px",
              backgroundColor: "rgba(14, 23, 44, 0.95)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Traffic Lights */}
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 8px rgba(239, 68, 68, 0.6)",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                  boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)",
                }}
              />
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 13,
                fontWeight: 600,
                color: STORAGE_COLORS.textMuted,
              }}
            >
              zsh — storage-definition@cloud ~ (media_types)
            </div>

            <div
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 700,
                color: STORAGE_COLORS.accentCyan,
              }}
            >
              DEFINITION
            </div>
          </div>

          {/* 2B. TERMINAL BODY: LARGE TYPEWRITER & MEDIA CARDS GRID */}
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
            {/* Terminal Command Line */}
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
              <span style={{ color: STORAGE_COLORS.accentEmerald, fontWeight: 800 }}>
                ➜
              </span>
              <span style={{ color: STORAGE_COLORS.accentCyan, fontWeight: 700 }}>
                storage-app
              </span>
              <span style={{ color: STORAGE_COLORS.accentPurple }}>git:(main)</span>
              <span style={{ color: STORAGE_COLORS.textSecondary }}>
                ./define-storage-server.sh
              </span>
            </div>

            {/* Typewriter Output Text (35px, Mobile-Friendly) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                lineHeight: 1.5,
              }}
            >
              {/* Lines 7 - 8: "Storage server, merupakan media penyimpanan..." */}
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: STORAGE_COLORS.textPrimary,
                  letterSpacing: -0.2,
                }}
              >
                {currentText1}
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: 6,
                    color: STORAGE_COLORS.accentCyan,
                    opacity: cursorBlink ? 1 : 0,
                  }}
                >
                  █
                </span>
              </div>
            </div>

            {/* 2C. 4 MEDIA TYPE CARDS (2x2 Grid) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
                marginTop: 8,
              }}
            >
              {/* Card 1: DOKUMEN */}
              <div
                style={{
                  transform: `scale(${spDokumen})`,
                  opacity: spDokumen,
                  padding: "16px 20px",
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1.8px solid rgba(56, 189, 248, 0.45)",
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(56, 189, 248, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFileAlt size={22} color={STORAGE_COLORS.accentCyan} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: STORAGE_COLORS.textPrimary,
                        letterSpacing: 0.5,
                      }}
                    >
                      Dokumen
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: STORAGE_COLORS.accentCyan,
                      }}
                    >
                      PDF, DOCX, TXT
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentCyan,
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  DOCS
                </span>
              </div>

              {/* Card 2: GAMBAR */}
              <div
                style={{
                  transform: `scale(${spGambar})`,
                  opacity: spGambar,
                  padding: "16px 20px",
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1.8px solid rgba(16, 185, 129, 0.45)",
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaImage size={22} color={STORAGE_COLORS.accentEmerald} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: STORAGE_COLORS.textPrimary,
                        letterSpacing: 0.5,
                      }}
                    >
                      Gambar
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: STORAGE_COLORS.accentEmerald,
                      }}
                    >
                      JPG, PNG, WEBP
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentEmerald,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  IMAGE
                </span>
              </div>

              {/* Card 3: AUDIO */}
              <div
                style={{
                  transform: `scale(${spAudio})`,
                  opacity: spAudio,
                  padding: "16px 20px",
                  borderRadius: 16,
                  backgroundColor: "rgba(245, 158, 11, 0.12)",
                  border: "1.8px solid rgba(245, 158, 11, 0.45)",
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(245, 158, 11, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMusic size={22} color={STORAGE_COLORS.accentAmber} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: STORAGE_COLORS.textPrimary,
                        letterSpacing: 0.5,
                      }}
                    >
                      Audio
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: STORAGE_COLORS.accentAmber,
                      }}
                    >
                      MP3, WAV, AAC
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentAmber,
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  AUDIO
                </span>
              </div>

              {/* Card 4: VIDEO */}
              <div
                style={{
                  transform: `scale(${spVideo})`,
                  opacity: spVideo,
                  padding: "16px 20px",
                  borderRadius: 16,
                  backgroundColor: "rgba(168, 85, 247, 0.12)",
                  border: "1.8px solid rgba(168, 85, 247, 0.45)",
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(168, 85, 247, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFilm size={22} color={STORAGE_COLORS.accentPurple} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: STORAGE_COLORS.textPrimary,
                        letterSpacing: 0.5,
                      }}
                    >
                      Video
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: STORAGE_COLORS.accentPurple,
                      }}
                    >
                      MP4, MKV, MOV
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: STORAGE_COLORS.accentPurple,
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  VIDEO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 26,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 20, 36, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaTerminal size={15} color={STORAGE_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: STORAGE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            UNIVERSAL DATA STORAGE // MENDUKUNG SEGALA FORMAT MEDIA DIGITAL
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

