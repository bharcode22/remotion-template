import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCloud,
  FaFileAlt,
  FaFilm,
  FaImage,
  FaMobileAlt,
  FaQuestion,
  FaTerminal,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TYPEWRITER (Frames 50 - 300):
  // Naskah Lines 2 - 3:
  // - Line 2: "ketika kita meng-upload foto, video, atau dokumen ke sebuah aplikasi,"
  //   Speech: Frames 53 - 185
  // - Line 3: "sebenarnya file tersebut disimpan di mana?"
  //   Speech: Frames 201 - 264
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 50),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Terminal Window Spring
  const spTerminal = spring({
    frame: Math.max(0, frame - 52),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Staggered File Badges Springs (Pop in when spoken)
  const spFoto = spring({
    frame: Math.max(0, frame - 90),
    fps,
    config: { damping: 12, stiffness: 110 },
  });
  const spVideo = spring({
    frame: Math.max(0, frame - 115),
    fps,
    config: { damping: 12, stiffness: 110 },
  });
  const spDokumen = spring({
    frame: Math.max(0, frame - 140),
    fps,
    config: { damping: 12, stiffness: 110 },
  });
  const spApp = spring({
    frame: Math.max(0, frame - 165),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // Mystery Question Pipeline Spring
  const spPipeline = spring({
    frame: Math.max(0, frame - 205),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Bottom Context Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 215),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER INTERPOLATION (Large Mobile-Friendly Monospace 35px)
  // ─────────────────────────────────────────────────────────────────────────────

  // Phrase 1 (Line 2): "ketika kita meng-upload foto, video, atau dokumen ke sebuah aplikasi,"
  const text1 =
    "ketika kita meng-upload foto, video, atau dokumen ke sebuah aplikasi,";
  const chars1 = Math.floor(
    interpolate(frame, [55, 185], [0, text1.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText1 = text1.slice(0, chars1);

  // Phrase 2 (Line 3): "sebenarnya file tersebut disimpan di mana?"
  const isLine3Active = frame >= 198;
  const text2 = "sebenarnya file tersebut disimpan di mana?";
  const chars2 = Math.floor(
    interpolate(frame, [201, 260], [0, text2.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText2 = text2.slice(0, chars2);

  const cursorBlink = frame % 14 < 7;

  // Animated upload packet position
  const packetProgress = interpolate(
    frame,
    [210, 280],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <SceneContainer accentColor={STORAGE_COLORS.accentPurple}>
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
        {/* 1. TOP PROCESS BADGE */}
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
            border: "1.5px solid rgba(168, 85, 247, 0.4)",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.25)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: STORAGE_COLORS.accentPurple,
              boxShadow: `0 0 10px ${STORAGE_COLORS.accentPurple}`,
              display: "inline-block",
            }}
          />
          <FaTerminal size={15} color={STORAGE_COLORS.accentPurple} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: STORAGE_COLORS.accentPurple,
              textTransform: "uppercase",
            }}
          >
            FILE UPLOAD LIFECYCLE // SIKLUS PENGIRIMAN
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
            border: "1.8px solid rgba(168, 85, 247, 0.4)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(168, 85, 247, 0.2)",
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
              borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
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
              zsh — storage-query@cloud ~ (upload_lifecycle)
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
              QUERY
            </div>
          </div>

          {/* 2B. TERMINAL BODY: LARGE TYPEWRITER & FILE BADGES */}
          <div
            style={{
              padding: "36px 36px 32px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
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
                ./track-file-upload.sh
              </span>
            </div>

            {/* Typewriter Output Text (36px, Mobile-Friendly) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                lineHeight: 1.5,
              }}
            >
              {/* Line 2: "ketika kita meng-upload foto, video, atau dokumen ke sebuah aplikasi," */}
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: STORAGE_COLORS.textPrimary,
                  letterSpacing: -0.2,
                }}
              >
                {currentText1}
                {!isLine3Active && (
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
                )}
              </div>

              {/* 4 Interactive File Badges (Staggered Entrance) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 12,
                  marginTop: 6,
                }}
              >
                {/* 1. Foto */}
                <div
                  style={{
                    transform: `scale(${spFoto})`,
                    opacity: spFoto,
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "1.5px solid rgba(16, 185, 129, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.15)",
                  }}
                >
                  <FaImage size={18} color={STORAGE_COLORS.accentEmerald} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: STORAGE_COLORS.accentEmerald,
                    }}
                  >
                    FOTO
                  </span>
                </div>

                {/* 2. Video */}
                <div
                  style={{
                    transform: `scale(${spVideo})`,
                    opacity: spVideo,
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1.5px solid rgba(168, 85, 247, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 4px 15px rgba(168, 85, 247, 0.15)",
                  }}
                >
                  <FaFilm size={18} color={STORAGE_COLORS.accentPurple} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: STORAGE_COLORS.accentPurple,
                    }}
                  >
                    VIDEO
                  </span>
                </div>

                {/* 3. Dokumen */}
                <div
                  style={{
                    transform: `scale(${spDokumen})`,
                    opacity: spDokumen,
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.15)",
                  }}
                >
                  <FaFileAlt size={18} color={STORAGE_COLORS.accentCyan} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: STORAGE_COLORS.accentCyan,
                    }}
                  >
                    DOKUMEN
                  </span>
                </div>

                {/* 4. Aplikasi */}
                <div
                  style={{
                    transform: `scale(${spApp})`,
                    opacity: spApp,
                    padding: "10px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: "1.5px solid rgba(245, 158, 11, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.15)",
                  }}
                >
                  <FaMobileAlt size={18} color={STORAGE_COLORS.accentAmber} />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: STORAGE_COLORS.accentAmber,
                    }}
                  >
                    APLIKASI
                  </span>
                </div>
              </div>

              {/* Line 3: "sebenarnya file tersebut disimpan di mana?" */}
              {isLine3Active && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "18px 24px",
                    borderRadius: 16,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "2px solid rgba(245, 158, 11, 0.4)",
                    boxShadow: "0 8px 30px rgba(245, 158, 11, 0.18)",
                    fontSize: 36,
                    fontWeight: 900,
                    color: "#fbbf24",
                    letterSpacing: -0.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <FaQuestion size={26} color="#fbbf24" />
                  <span>{currentText2}</span>
                  {chars2 < text2.length && (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 4,
                        color: "#fbbf24",
                        opacity: cursorBlink ? 1 : 0,
                      }}
                    >
                      █
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* 2C. UPLOAD PIPELINE DIAGRAM (Frames 205 - 300) */}
            <div
              style={{
                transform: `scale(${spPipeline})`,
                opacity: spPipeline,
                marginTop: 6,
                padding: "20px 24px",
                borderRadius: 16,
                backgroundColor: "rgba(10, 18, 36, 0.85)",
                border: "1.5px solid rgba(56, 189, 248, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Left: Client Device */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  borderRadius: 10,
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                }}
              >
                <FaMobileAlt size={22} color={STORAGE_COLORS.accentCyan} />
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: STORAGE_COLORS.accentCyan,
                  }}
                >
                  Client Device
                </span>
              </div>

              {/* Middle: Data Travel Rail */}
              <div
                style={{
                  flex: 1,
                  margin: "0 20px",
                  height: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 2,
                  position: "relative",
                }}
              >
                {/* Moving Data Packet */}
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: `${packetProgress * 85}%`,
                    padding: "4px 10px",
                    borderRadius: 6,
                    backgroundColor: STORAGE_COLORS.accentEmerald,
                    color: "#030712",
                    fontSize: 11,
                    fontWeight: 900,
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
                  }}
                >
                  UPLOAD ➔
                </div>
              </div>

              {/* Right: Enigma Storage Server Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 10,
                  backgroundColor: "rgba(168, 85, 247, 0.18)",
                  border: "1.5px dashed rgba(168, 85, 247, 0.6)",
                  boxShadow: "0 0 25px rgba(168, 85, 247, 0.25)",
                }}
              >
                <FaCloud size={22} color={STORAGE_COLORS.accentPurple} />
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#e9d5ff",
                    letterSpacing: 0.5,
                  }}
                >
                  STORAGE SERVER ?
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
            border: "1.5px solid rgba(168, 85, 247, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: STORAGE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            DATA DESTINATION // APAKAH LOCAL DISK ATAU CLOUD OBJECT?
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

