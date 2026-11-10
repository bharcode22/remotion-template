import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {
  NETLIFY_COLORS,
  FONT_PRIMARY,
  FONT_MONO,
  CONTENT_INSET_X,
} from "../constants";
import {
  FaGlobe,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCheck,
  FaSave,
  FaSlidersH,
  FaCog,
  FaLock,
  FaSyncAlt,
  FaSearch,
  FaPlus,
  FaShieldAlt,
  FaChevronRight,
} from "react-icons/fa";
import { SiNetlify, SiGithub, SiReact } from "react-icons/si";

export const UnifiedWatermarkNetlify: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous visual oscillation
  const pulseLoop = interpolate(
    Math.sin((frame * Math.PI) / 18),
    [-1, 1],
    [0.94, 1.06]
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 🏷️ KINETIC TYPOGRAPHY SPRINGS & LOGIC (TOP AREA)
  // Aligned with new 24.36s voiceover & naskah 19
  // ═══════════════════════════════════════════════════════════════════════════

  // Scene 1 (F0 - F90): "Web yang kamu deploy di netlify ada watermarknya.?"
  const isWebDeploy = frame >= 8;
  const webDeploySpring = spring({
    frame: frame - 8,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });
  const isNetlifyS1 = frame >= 30;
  const netlifyS1Spring = spring({
    frame: frame - 30,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const isWatermarkS1 = frame >= 50;
  const watermarkS1Spring = spring({
    frame: frame - 50,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });

  // Scene 2 (F90 - F200): "Jika kamu tidak mau ada watermarknya, Gampang."
  const isTidakMau = frame >= 100;
  const tidakMauSpring = spring({
    frame: frame - 100,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });
  const isGampang = frame >= 155;
  const gampangSpring = spring({
    frame: frame - 155,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });

  // Scene 3 (F200 - F285): "1. Login ke Netlify Dashboard."
  const isLoginS3 = frame >= 208;
  const loginS3Spring = spring({
    frame: frame - 208,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });

  // Scene 4 (F285 - F368): "2. Pilih project website kamu."
  const isPilihProject = frame >= 295;
  const pilihProjectSpring = spring({
    frame: frame - 295,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });

  // Scene 5 (F368 - F450): "3. Buka Project configuration."
  const isBukaConfig = frame >= 378;
  const bukaConfigSpring = spring({
    frame: frame - 378,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 165 },
  });

  // Scene 6 (F450 - F525): "4. Masuk ke General."
  const isMasukGeneral = frame >= 460;
  const masukGeneralSpring = spring({
    frame: frame - 460,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  // Scene 7 (F525 - F605): "Cari bagian Powered by Netlify badge."
  const isCariBadge = frame >= 535;
  const cariBadgeSpring = spring({
    frame: frame - 535,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 165 },
  });

  // Scene 8 (F605 - F670): "Uncheck Show the badge on this project."
  const isUncheck = frame >= 614;
  const uncheckSpring = spring({
    frame: frame - 614,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const isBadgeUnchecked = frame >= 630;

  // Scene 9 (F670 - F700): "Save."
  const isSaveClick = frame >= 676;
  const saveSpring = spring({
    frame: frame - 676,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 190 },
  });
  const isSavePressed = frame >= 684;
  const isSaveSaved = frame >= 688;

  // Scene 10 (F700 - F750): "selesai."
  const isSelesai = frame >= 707;
  const selesaiSpring = spring({
    frame: frame - 707,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 BROWSER STATE CALCULATIONS (THE LIVING WEBSITE MOVEMENT)
  // ═══════════════════════════════════════════════════════════════════════════

  // Browser entrance spring
  const browserEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  // Current Browser URL and loading laser beam
  let currentUrl = "https://alexdev-portfolio.netlify.app";
  let isNavigating = false;
  let navLaserProgress = 0;

  if (frame >= 200 && frame < 285) {
    currentUrl = "https://app.netlify.com/login";
    if (frame < 220) {
      isNavigating = true;
      navLaserProgress = interpolate(frame, [200, 220], [0, 1]);
    }
  } else if (frame >= 285 && frame < 368) {
    currentUrl = "https://app.netlify.com/teams/alexdev/sites";
    if (frame < 305) {
      isNavigating = true;
      navLaserProgress = interpolate(frame, [285, 305], [0, 1]);
    }
  } else if (frame >= 368 && frame < 450) {
    currentUrl = "https://app.netlify.com/sites/alexdev-portfolio/overview";
    if (frame < 385) {
      isNavigating = true;
      navLaserProgress = interpolate(frame, [368, 385], [0, 1]);
    }
  } else if (frame >= 450 && frame < 700) {
    currentUrl =
      "https://app.netlify.com/sites/alexdev-portfolio/configuration/general";
    if (frame < 465) {
      isNavigating = true;
      navLaserProgress = interpolate(frame, [450, 465], [0, 1]);
    }
  } else if (frame >= 700) {
    currentUrl = "https://alexdev-portfolio.netlify.app";
    if (frame < 718) {
      isNavigating = true;
      navLaserProgress = interpolate(frame, [700, 718], [0, 1]);
    }
  }

  // Reload icon rotation when returning to website at Scene 10
  const reloadRotation =
    frame >= 700 && frame <= 730
      ? interpolate(frame, [700, 730], [0, 360])
      : 0;

  // Real page scroll inside the Netlify Configuration > General settings
  // In Scene 7 (F525 - F605), the page scrolls down smoothly to locate the badge setting
  const settingsScrollY =
    frame >= 525
      ? interpolate(frame, [530, 565], [0, 230], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Website natural scroll motion during Scene 1 (shows a real living portfolio site)
  const siteScrollY = interpolate(frame, [0, 40, 80], [0, 40, 70], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        fontFamily: FONT_PRIMARY,
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          🏷️ TOP KINETIC TYPOGRAPHY LAYER (VOICEOVER SYNCED TEXT)
          ═════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: CONTENT_INSET_X,
          right: CONTENT_INSET_X,
          height: 440,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 40,
        }}
      >
        {/* 🎬 SCENE 1: WATERMARK QUESTION (F0 - F90) */}
        {frame < 90 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.14)",
                border: "1px solid rgba(0, 199, 183, 0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <SiNetlify size={22} color={NETLIFY_COLORS.netlifyTeal} />
              <span
                style={{
                  color: NETLIFY_COLORS.netlifyAqua,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                NETLIFY HOSTING
              </span>
            </div>

            {isWebDeploy && (
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 44,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  opacity: Math.min(1, webDeploySpring),
                  transform: `translateY(${(1 - Math.min(1, webDeploySpring)) * 12}px)`,
                }}
              >
                Web yang kamu deploy di
              </span>
            )}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              {isNetlifyS1 && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 24px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(0, 199, 183, 0.28) 0%, rgba(50, 230, 226, 0.16) 100%)",
                    border: "1.5px solid rgba(50, 230, 226, 0.8)",
                    boxShadow: "0 0 35px rgba(0, 199, 183, 0.45)",
                    opacity: Math.min(1, netlifyS1Spring),
                  }}
                >
                  <SiNetlify size={28} color={NETLIFY_COLORS.netlifyAqua} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 34,
                      fontWeight: 800,
                      color: NETLIFY_COLORS.netlifyAqua,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Netlify
                  </span>
                </div>
              )}

              {isWatermarkS1 && (
                <span
                  style={{
                    fontSize: 46,
                    fontWeight: 800,
                    color: NETLIFY_COLORS.warningRose,
                    letterSpacing: "-0.01em",
                    textShadow: `0 0 35px ${NETLIFY_COLORS.warningGlow}`,
                    transform: `scale(${1 + (1 - Math.min(1, watermarkS1Spring)) * 0.25})`,
                  }}
                >
                  ada watermarknya?
                </span>
              )}
            </div>
          </div>
        )}

        {/* 🎬 SCENE 2: GAMPANG (F90 - F200) */}
        {frame >= 90 && frame < 200 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(52, 211, 153, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.45)",
              }}
            >
              <FaShieldAlt size={20} color={NETLIFY_COLORS.freeMint} />
              <span
                style={{
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                100% RESMI & GRATIS
              </span>
            </div>

            {isTidakMau && (
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 40,
                  fontWeight: 600,
                  lineHeight: 1.25,
                  opacity: Math.min(1, tidakMauSpring),
                }}
              >
                Jika kamu tidak mau ada watermarknya,
              </span>
            )}

            {isGampang && (
              <span
                style={{
                  fontSize: 66,
                  fontWeight: 900,
                  color: NETLIFY_COLORS.freeMint,
                  letterSpacing: "-0.02em",
                  textShadow: `0 0 45px ${NETLIFY_COLORS.freeGlow}`,
                  transform: `scale(${1 + (1 - Math.min(1, gampangSpring)) * 0.3})`,
                }}
              >
                Gampang! ✨
              </span>
            )}
          </div>
        )}

        {/* 🎬 SCENE 3: LANGKAH 1 (F200 - F285) */}
        {frame >= 200 && frame < 285 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.16)",
                border: "1px solid rgba(0, 199, 183, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.netlifyAqua,
                }}
              >
                LANGKAH 1 DARI 7
              </span>
            </div>
            {isLoginS3 && (
              <span
                style={{
                  fontSize: 36,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, loginS3Spring),
                }}
              >
                1. Login ke
              </span>
            )}
            <span
              style={{
                fontSize: 54,
                fontWeight: 900,
                color: NETLIFY_COLORS.netlifyAqua,
                textShadow: `0 0 35px ${NETLIFY_COLORS.netlifyGlow}`,
              }}
            >
              Netlify Dashboard
            </span>
          </div>
        )}

        {/* 🎬 SCENE 4: LANGKAH 2 (F285 - F368) */}
        {frame >= 285 && frame < 368 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(97, 218, 251, 0.16)",
                border: "1px solid rgba(97, 218, 251, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.reactCyan,
                }}
              >
                LANGKAH 2 DARI 7
              </span>
            </div>
            {isPilihProject && (
              <span
                style={{
                  fontSize: 36,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, pilihProjectSpring),
                }}
              >
                2. Pilih project
              </span>
            )}
            <span
              style={{
                fontSize: 54,
                fontWeight: 900,
                color: NETLIFY_COLORS.reactCyan,
                textShadow: `0 0 35px ${NETLIFY_COLORS.reactGlow}`,
              }}
            >
              website kamu
            </span>
          </div>
        )}

        {/* 🎬 SCENE 5: LANGKAH 3 (F368 - F450) */}
        {frame >= 368 && frame < 450 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.16)",
                border: "1px solid rgba(0, 199, 183, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.netlifyAqua,
                }}
              >
                LANGKAH 3 DARI 7
              </span>
            </div>
            {isBukaConfig && (
              <span
                style={{
                  fontSize: 36,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, bukaConfigSpring),
                }}
              >
                3. Buka
              </span>
            )}
            <span
              style={{
                fontSize: 50,
                fontWeight: 900,
                color: NETLIFY_COLORS.netlifyAqua,
                textShadow: `0 0 35px ${NETLIFY_COLORS.netlifyGlow}`,
              }}
            >
              Project configuration
            </span>
          </div>
        )}

        {/* 🎬 SCENE 6: LANGKAH 4 (F450 - F525) */}
        {frame >= 450 && frame < 525 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(245, 158, 11, 0.16)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.questionGold,
                }}
              >
                LANGKAH 4 DARI 7
              </span>
            </div>
            {isMasukGeneral && (
              <span
                style={{
                  fontSize: 36,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, masukGeneralSpring),
                }}
              >
                4. Masuk ke
              </span>
            )}
            <span
              style={{
                fontSize: 56,
                fontWeight: 900,
                color: NETLIFY_COLORS.questionGold,
                textShadow: `0 0 35px ${NETLIFY_COLORS.questionGlow}`,
              }}
            >
              General
            </span>
          </div>
        )}

        {/* 🎬 SCENE 7: CARI BAGIAN BADGE (F525 - F605) */}
        {frame >= 525 && frame < 605 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(168, 85, 247, 0.16)",
                border: "1px solid rgba(168, 85, 247, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.purpleAccent,
                }}
              >
                LANGKAH 5
              </span>
            </div>
            {isCariBadge && (
              <span
                style={{
                  fontSize: 34,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, cariBadgeSpring),
                }}
              >
                Cari bagian
              </span>
            )}
            <span
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: NETLIFY_COLORS.purpleAccent,
                textShadow: `0 0 35px ${NETLIFY_COLORS.purpleGlow}`,
              }}
            >
              Powered by Netlify badge
            </span>
          </div>
        )}

        {/* 🎬 SCENE 8: UNCHECK SHOW THE BADGE (F605 - F670) */}
        {frame >= 605 && frame < 670 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: isBadgeUnchecked
                  ? "rgba(244, 63, 94, 0.16)"
                  : "rgba(0, 199, 183, 0.16)",
                border: isBadgeUnchecked
                  ? "1px solid rgba(244, 63, 94, 0.45)"
                  : "1px solid rgba(0, 199, 183, 0.45)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: isBadgeUnchecked
                    ? NETLIFY_COLORS.warningRose
                    : NETLIFY_COLORS.netlifyAqua,
                }}
              >
                {isBadgeUnchecked ? "UNCHECKED ✓" : "LANGKAH 6"}
              </span>
            </div>
            {isUncheck && (
              <span
                style={{
                  fontSize: 38,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, uncheckSpring),
                }}
              >
                Uncheck
              </span>
            )}
            <span
              style={{
                fontSize: 46,
                fontWeight: 900,
                color: isBadgeUnchecked
                  ? NETLIFY_COLORS.warningRose
                  : NETLIFY_COLORS.netlifyAqua,
                textShadow: isBadgeUnchecked
                  ? `0 0 45px ${NETLIFY_COLORS.warningGlow}`
                  : `0 0 35px ${NETLIFY_COLORS.netlifyGlow}`,
                marginTop: 2,
              }}
            >
              Show the badge on this project
            </span>
          </div>
        )}

        {/* 🎬 SCENE 9: SAVE (F670 - F700) */}
        {frame >= 670 && frame < 700 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(52, 211, 153, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.45)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: NETLIFY_COLORS.freeMint,
                }}
              >
                LANGKAH 7
              </span>
            </div>
            {isSaveClick && (
              <span
                style={{
                  fontSize: 36,
                  color: "#ffffff",
                  fontWeight: 600,
                  opacity: Math.min(1, saveSpring),
                }}
              >
                Save
              </span>
            )}
            <span
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: NETLIFY_COLORS.freeMint,
                textShadow: `0 0 45px ${NETLIFY_COLORS.freeGlow}`,
              }}
            >
              Save 💾
            </span>
          </div>
        )}

        {/* 🎬 SCENE 10: SELESAI (F700 - F750) */}
        {frame >= 700 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(16, 185, 129, 0.18)",
                border: "1px solid rgba(16, 185, 129, 0.5)",
              }}
            >
              <FaCheckCircle size={20} color="#10b981" />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#10b981",
                }}
              >
                100% CLEAN WEBSITE
              </span>
            </div>
            {isSelesai && (
              <span
                style={{
                  fontSize: 68,
                  fontWeight: 900,
                  color: NETLIFY_COLORS.freeMint,
                  textShadow: `0 0 50px ${NETLIFY_COLORS.freeGlow}`,
                  opacity: Math.min(1, selesaiSpring),
                  transform: `scale(${1 + (1 - Math.min(1, selesaiSpring)) * 0.2})`,
                }}
              >
                Selesai! 🎉
              </span>
            )}
            <span
              style={{
                fontSize: 26,
                color: NETLIFY_COLORS.textSecondary,
                fontWeight: 600,
              }}
            >
              Website kamu kini bersih tanpa watermark.
            </span>
          </div>
        )}
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          🖥️ THE UNIFIED LIVING MACOS BROWSER CONTAINER
          Continuous browser window with real interactive website movements
          ═════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 610,
          left: CONTENT_INSET_X,
          width: 888,
          height: 1040,
          borderRadius: 28,
          overflow: "hidden",
          background: "#071120",
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          boxShadow:
            "0 32px 80px rgba(0, 0, 0, 0.65), 0 0 45px rgba(0, 199, 183, 0.15)",
          display: "flex",
          flexDirection: "column",
          opacity: Math.min(1, browserEntrance),
          transform: `translateY(${(1 - Math.min(1, browserEntrance)) * 50}px)`,
          zIndex: 30,
        }}
      >
        {/* 1. macOS Window Chrome / Title Bar */}
        <div
          style={{
            height: 56,
            background: "rgba(11, 26, 47, 0.95)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: 16,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Traffic Lights */}
          <div style={{ display: "flex", gap: 9 }}>
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: "#ff5f56",
                boxShadow: "0 0 8px rgba(255, 95, 86, 0.4)",
              }}
            />
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: "#ffbd2e",
                boxShadow: "0 0 8px rgba(255, 189, 46, 0.4)",
              }}
            />
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: "#27c93f",
                boxShadow: "0 0 8px rgba(39, 201, 63, 0.4)",
              }}
            />
          </div>

          {/* Nav Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: NETLIFY_COLORS.textMuted,
            }}
          >
            <div style={{ transform: "rotate(180deg)", cursor: "pointer" }}>
              <FaChevronRight size={12} />
            </div>
            <div style={{ cursor: "pointer" }}>
              <FaChevronRight size={12} />
            </div>
            <div
              style={{
                transform: `rotate(${reloadRotation}deg)`,
                cursor: "pointer",
              }}
            >
              <FaSyncAlt size={12} />
            </div>
          </div>

          {/* Smart Address Bar */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(0, 0, 0, 0.4)",
              padding: "7px 18px",
              borderRadius: 14,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
            }}
          >
            <FaLock size={12} color="#10b981" />
            <span
              style={{
                fontSize: 14,
                color: NETLIFY_COLORS.textSecondary,
                fontFamily: FONT_MONO,
                letterSpacing: "0.01em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {currentUrl}
            </span>
          </div>

          {/* Loading Laser Beam Indicator */}
          {isNavigating && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: `${navLaserProgress * 100}%`,
                height: 2.5,
                background:
                  "linear-gradient(90deg, #00c7b7 0%, #32e6e2 70%, #ffffff 100%)",
                boxShadow: "0 0 12px #32e6e2",
              }}
            />
          )}
        </div>

        {/* 2. Browser Viewport (Living interactive pages) */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, #081325 0%, #040914 100%)",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════════
              VIEW A: THE USER'S LIVE WEBSITE (Scene 1, 2, and 10)
              ═════════════════════════════════════════════════════════════════ */}
          {(frame < 200 || frame >= 700) && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                transform: `translateY(-${frame < 200 ? siteScrollY : 0}px)`,
                padding: "28px 32px",
                gap: 24,
              }}
            >
              {/* Website Navigation */}
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
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      background:
                        "linear-gradient(135deg, #00c7b7 0%, #38bdf8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: 18,
                    }}
                  >
                    AD
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
                      Alex Dev
                    </div>
                    <div style={{ fontSize: 12, color: NETLIFY_COLORS.textMuted }}>
                      alexdev.design
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <span
                    style={{
                      fontSize: 14,
                      color: NETLIFY_COLORS.textSecondary,
                    }}
                  >
                    Projects
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: NETLIFY_COLORS.textSecondary,
                    }}
                  >
                    Stack
                  </span>
                  <div
                    style={{
                      padding: "6px 16px",
                      borderRadius: 9999,
                      background: "rgba(0, 199, 183, 0.2)",
                      border: "1px solid rgba(0, 199, 183, 0.5)",
                      color: NETLIFY_COLORS.netlifyAqua,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    Contact
                  </div>
                </div>
              </div>

              {/* Website Hero Banner */}
              <div
                style={{
                  padding: "32px",
                  borderRadius: 24,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 14px",
                    borderRadius: 9999,
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "#38bdf8",
                    fontSize: 13,
                    fontWeight: 700,
                    width: "fit-content",
                  }}
                >
                  <SiReact size={15} /> React + Next.js Portfolio
                </div>

                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.25,
                  }}
                >
                  Building High-Performance Web Apps 🚀
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: NETLIFY_COLORS.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  Showcase of production-ready applications, edge routing, and
                  modern responsive user interfaces deployed globally.
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: 12,
                      background: "#00c7b7",
                      color: "#040914",
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    Explore Work
                  </div>
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Download CV
                  </div>
                </div>
              </div>

              {/* Website Project Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    Fintech SaaS Platform
                  </div>
                  <div style={{ fontSize: 13, color: NETLIFY_COLORS.textMuted }}>
                    Real-time payment dashboard with serverless functions.
                  </div>
                </div>
                <div
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    AI Analytics Engine
                  </div>
                  <div style={{ fontSize: 13, color: NETLIFY_COLORS.textMuted }}>
                    Automated data intelligence pipeline & metrics.
                  </div>
                </div>
              </div>

              {/* SCENE 2 QUICK OVERLAY BENEFIT PILL */}
              {frame >= 90 && frame < 200 && (
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: 20,
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1.5px solid rgba(52, 211, 153, 0.5)",
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <FaCheckCircle size={28} color={NETLIFY_COLORS.freeMint} />
                  <div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      Bisa Dimatikan Langsung di Dashboard
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: NETLIFY_COLORS.textSecondary,
                      }}
                    >
                      Berlaku untuk semua akun (Free Starter Plan) tanpa biaya
                    </div>
                  </div>
                </div>
              )}

              {/* FLOATING CORNER WATERMARK BADGE (OR CLEAN BURST IN SCENE 10) */}
              {frame < 200 ? (
                <div
                  style={{
                    position: "absolute",
                    bottom: 28,
                    right: 28,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 10,
                  }}
                >
                  {/* Warning Highlight Bubble in Scene 1 */}
                  {isWatermarkS1 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 14px",
                        borderRadius: 12,
                        background: "rgba(244, 63, 94, 0.25)",
                        border: "1.5px solid #f43f5e",
                        boxShadow: "0 0 25px rgba(244, 63, 94, 0.5)",
                        transform: `scale(${pulseLoop})`,
                      }}
                    >
                      <FaExclamationTriangle
                        size={14}
                        color={NETLIFY_COLORS.warningRose}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 800,
                          color: NETLIFY_COLORS.warningRose,
                        }}
                      >
                        Watermark Badge
                      </span>
                    </div>
                  )}

                  {/* Authentic Netlify Badge SVG Asset */}
                  <div
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
                      border: isWatermarkS1
                        ? "2px solid #f43f5e"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Img
                      src={staticFile("netlify-badge-color-accent.svg")}
                      style={{ width: 150, height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              ) : (
                /* Scene 10: Pristine Clean Watermark-Free Corner Confirmation */
                <div
                  style={{
                    position: "absolute",
                    bottom: 28,
                    right: 28,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 20px",
                    borderRadius: 16,
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "1.5px solid #10b981",
                    boxShadow: "0 0 35px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <FaCheck size={16} color="#10b981" />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#10b981",
                    }}
                  >
                    No Watermark ✓ Clean
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              VIEW B: NETLIFY LOGIN PAGE (Scene 3: F200 - F285)
              ═════════════════════════════════════════════════════════════════ */}
          {frame >= 200 && frame < 285 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40,
                gap: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: 24,
                    background: "rgba(0, 199, 183, 0.15)",
                    border: "1.5px solid rgba(0, 199, 183, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 35px rgba(0, 199, 183, 0.35)",
                  }}
                >
                  <SiNetlify size={46} color={NETLIFY_COLORS.netlifyAqua} />
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>
                  Log in to Netlify
                </div>
                <div style={{ fontSize: 15, color: NETLIFY_COLORS.textMuted }}>
                  Connect and deploy your web projects in seconds
                </div>
              </div>

              {/* Interactive GitHub Login Button */}
              <div
                style={{
                  width: 380,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  padding: "16px 28px",
                  borderRadius: 16,
                  background:
                    frame >= 245
                      ? "rgba(16, 185, 129, 0.25)"
                      : "rgba(255, 255, 255, 0.08)",
                  border:
                    frame >= 245
                      ? "1.5px solid #10b981"
                      : "1.5px solid rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    frame >= 245
                      ? "0 0 35px rgba(16, 185, 129, 0.4)"
                      : "0 8px 24px rgba(0, 0, 0, 0.4)",
                  transform:
                    frame >= 245 && frame <= 255 ? "scale(0.96)" : "scale(1)",
                }}
              >
                <SiGithub size={24} color="#fff" />
                <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
                  {frame >= 245 ? "Logged in successfully ✓" : "Log in with GitHub"}
                </span>
              </div>

              <div style={{ fontSize: 13, color: NETLIFY_COLORS.textDim }}>
                or log in with Email, GitLab, Bitbucket
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              VIEW C: NETLIFY SITES DASHBOARD (Scene 4: F285 - F368)
              ═════════════════════════════════════════════════════════════════ */}
          {frame >= 285 && frame < 368 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                padding: "24px 32px",
                gap: 20,
              }}
            >
              {/* Netlify App Header Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <SiNetlify size={28} color={NETLIFY_COLORS.netlifyTeal} />
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
                    Alex Dev's team
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "rgba(255, 255, 255, 0.1)",
                      color: NETLIFY_COLORS.textMuted,
                    }}
                  >
                    Starter
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: 12,
                    background: "rgba(0, 199, 183, 0.2)",
                    border: "1px solid rgba(0, 199, 183, 0.4)",
                    color: NETLIFY_COLORS.netlifyAqua,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <FaPlus size={11} /> Add new site
                </div>
              </div>

              {/* Section Subheader & Search */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                  Sites (2)
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 10,
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: NETLIFY_COLORS.textMuted,
                    fontSize: 13,
                  }}
                >
                  <FaSearch size={12} /> Search sites...
                </div>
              </div>

              {/* Target Site Card (alexdev-portfolio) */}
              <div
                style={{
                  padding: "24px 28px",
                  borderRadius: 20,
                  background:
                    frame >= 335
                      ? "rgba(0, 199, 183, 0.22)"
                      : "rgba(255, 255, 255, 0.05)",
                  border:
                    frame >= 335
                      ? "2px solid #00c7b7"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow:
                    frame >= 335
                      ? "0 0 35px rgba(0, 199, 183, 0.4)"
                      : "0 8px 24px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform:
                    frame >= 335 && frame <= 345 ? "scale(0.98)" : "scale(1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "rgba(0, 199, 183, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SiNetlify size={28} color={NETLIFY_COLORS.netlifyAqua} />
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                      alexdev-portfolio
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: NETLIFY_COLORS.textMuted,
                        fontFamily: FONT_MONO,
                        marginTop: 2,
                      }}
                    >
                      alexdev-portfolio.netlify.app
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "#10b981",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#10b981",
                    }}
                  />
                  Production
                </div>
              </div>

              {/* Other Site Card (Muted) */}
              <div
                style={{
                  padding: "20px 28px",
                  borderRadius: 20,
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  opacity: 0.45,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaGlobe size={20} color={NETLIFY_COLORS.textMuted} />
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
                      ecommerce-store-v2
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: NETLIFY_COLORS.textMuted,
                      }}
                    >
                      ecommerce-store-v2.netlify.app
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              VIEW D: NETLIFY PROJECT CONFIGURATION & SETTINGS
              (Scene 5, 6, 7, 8, 9: F368 - F700)
              Features real tab selection, sidebar navigation, page scroll,
              and UNCHECK CHECKBOX!
              ═════════════════════════════════════════════════════════════════ */}
          {frame >= 368 && frame < 700 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Site Header & Tab Bar (Scene 5) */}
              <div
                style={{
                  padding: "20px 32px 0 32px",
                  background: "rgba(11, 26, 47, 0.6)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      alexdev-portfolio
                    </span>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 9999,
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#10b981",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      Production
                    </span>
                  </div>
                </div>

                {/* Horizontal Navigation Tabs */}
                <div style={{ display: "flex", gap: 24 }}>
                  <div
                    style={{
                      padding: "10px 4px",
                      fontSize: 15,
                      color: NETLIFY_COLORS.textMuted,
                    }}
                  >
                    Site overview
                  </div>
                  <div
                    style={{
                      padding: "10px 4px",
                      fontSize: 15,
                      color: NETLIFY_COLORS.textMuted,
                    }}
                  >
                    Deploys
                  </div>
                  <div
                    style={{
                      padding: "10px 4px",
                      fontSize: 15,
                      color: NETLIFY_COLORS.textMuted,
                    }}
                  >
                    Plugins
                  </div>

                  {/* Target Tab: Project configuration */}
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px 10px 0 0",
                      fontSize: 15,
                      fontWeight: 700,
                      color:
                        frame >= 420 ? NETLIFY_COLORS.netlifyAqua : "#ffffff",
                      background:
                        frame >= 420
                          ? "rgba(0, 199, 183, 0.16)"
                          : "transparent",
                      borderBottom:
                        frame >= 420 ? "3px solid #00c7b7" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <FaCog
                      size={15}
                      color={
                        frame >= 420 ? NETLIFY_COLORS.netlifyAqua : "#ffffff"
                      }
                    />
                    Project configuration
                  </div>
                </div>
              </div>

              {/* Settings Body Layout: Left Sidebar + Scrollable Right Settings Pane */}
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                {/* Left Sidebar Menu (Scene 6) */}
                <div
                  style={{
                    width: 220,
                    borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "20px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    background: "rgba(4, 9, 20, 0.4)",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: 12,
                      background:
                        frame >= 495
                          ? "rgba(0, 199, 183, 0.18)"
                          : "rgba(245, 158, 11, 0.18)",
                      border:
                        frame >= 495
                          ? "1px solid rgba(0, 199, 183, 0.6)"
                          : "1px solid rgba(245, 158, 11, 0.6)",
                      color: frame >= 495 ? NETLIFY_COLORS.netlifyAqua : "#fff",
                      fontWeight: 800,
                      fontSize: 15,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaSlidersH
                      size={15}
                      color={
                        frame >= 495
                          ? NETLIFY_COLORS.netlifyAqua
                          : NETLIFY_COLORS.questionGold
                      }
                    />
                    General
                  </div>
                  <div
                    style={{
                      padding: "10px 16px",
                      color: NETLIFY_COLORS.textMuted,
                      fontSize: 14,
                    }}
                  >
                    Build & deploy
                  </div>
                  <div
                    style={{
                      padding: "10px 16px",
                      color: NETLIFY_COLORS.textMuted,
                      fontSize: 14,
                    }}
                  >
                    Environment
                  </div>
                  <div
                    style={{
                      padding: "10px 16px",
                      color: NETLIFY_COLORS.textMuted,
                      fontSize: 14,
                    }}
                  >
                    Domain management
                  </div>
                  <div
                    style={{
                      padding: "10px 16px",
                      color: NETLIFY_COLORS.textMuted,
                      fontSize: 14,
                    }}
                  >
                    Identity & access
                  </div>
                </div>

                {/* Right Scrollable Settings Area (Scene 7, 8, 9) */}
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                    padding: "24px 30px",
                  }}
                >
                  {/* Real page scroll wrapper */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 22,
                      transform: `translateY(-${settingsScrollY}px)`,
                    }}
                  >
                    {/* Upper Section: Site Details */}
                    <div
                      style={{
                        padding: "22px 26px",
                        borderRadius: 20,
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#ffffff",
                        }}
                      >
                        Site details
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: NETLIFY_COLORS.textMuted,
                          lineHeight: 1.5,
                        }}
                      >
                        Site name: alexdev-portfolio · API ID: 9b2d8f7e-128a-4c22
                      </div>
                    </div>

                    {/* TARGET SETTING: POWERED BY NETLIFY BADGE CARD (Scene 7, 8, 9) */}
                    <div
                      style={{
                        padding: "26px 30px",
                        borderRadius: 22,
                        background: "rgba(11, 26, 47, 0.8)",
                        border:
                          frame >= 525
                            ? "2px solid rgba(0, 199, 183, 0.7)"
                            : "1.5px solid rgba(255, 255, 255, 0.14)",
                        boxShadow:
                          frame >= 525
                            ? "0 0 35px rgba(0, 199, 183, 0.25)"
                            : "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                      }}
                    >
                      {/* Section Title */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <SiNetlify
                            size={24}
                            color={NETLIFY_COLORS.netlifyTeal}
                          />
                          <span
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              color: "#fff",
                            }}
                          >
                            Powered by Netlify badge
                          </span>
                        </div>

                        {/* Status Pill Indicator */}
                        <div
                          style={{
                            padding: "4px 14px",
                            borderRadius: 9999,
                            background: isBadgeUnchecked
                              ? "rgba(244, 63, 94, 0.15)"
                              : "rgba(16, 185, 129, 0.15)",
                            color: isBadgeUnchecked ? "#f43f5e" : "#10b981",
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          Status: {isBadgeUnchecked ? "OFF" : "ON"}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: 14,
                          color: NETLIFY_COLORS.textMuted,
                          lineHeight: 1.5,
                        }}
                      >
                        Display a badge on your site to share that your web
                        application is built and powered by Netlify.
                      </div>

                      {/* Official Badge Preview */}
                      <div
                        style={{
                          padding: "14px 20px",
                          borderRadius: 14,
                          background: "rgba(0, 0, 0, 0.35)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            color: NETLIFY_COLORS.textSecondary,
                          }}
                        >
                          Badge preview:
                        </span>
                        <Img
                          src={staticFile("netlify-badge-dark.svg")}
                          style={{ width: 120, height: "auto" }}
                        />
                      </div>

                      {/* Interactive Netlify Checkbox Row (Scene 8: Uncheck Show the badge on this project) */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          padding: "16px 20px",
                          borderRadius: 16,
                          background: isBadgeUnchecked
                            ? "rgba(255, 255, 255, 0.02)"
                            : "rgba(0, 199, 183, 0.08)",
                          border: isBadgeUnchecked
                            ? "1px solid rgba(255, 255, 255, 0.08)"
                            : "1.5px solid rgba(0, 199, 183, 0.5)",
                          marginTop: 4,
                        }}
                      >
                        {/* Custom Netlify Checkbox */}
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            background: isBadgeUnchecked
                              ? "rgba(255, 255, 255, 0.06)"
                              : "#00c7b7",
                            border: isBadgeUnchecked
                              ? "2px solid rgba(255, 255, 255, 0.3)"
                              : "2px solid #00c7b7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: isBadgeUnchecked
                              ? "none"
                              : "0 0 20px rgba(0, 199, 183, 0.6)",
                            flexShrink: 0,
                          }}
                        >
                          {!isBadgeUnchecked && (
                            <FaCheck size={16} color="#040914" />
                          )}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              color: isBadgeUnchecked
                                ? NETLIFY_COLORS.textMuted
                                : "#ffffff",
                              textDecoration: isBadgeUnchecked
                                ? "line-through"
                                : "none",
                            }}
                          >
                            Show the badge on this project
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              color: isBadgeUnchecked
                                ? NETLIFY_COLORS.warningRose
                                : NETLIFY_COLORS.freeMint,
                              marginTop: 2,
                            }}
                          >
                            {isBadgeUnchecked
                              ? "Unchecked (Badge disabled on this project)"
                              : "Checked (Badge is active on your site)"}
                          </div>
                        </div>
                      </div>

                      {/* Save Button Row (Scene 9) */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          paddingTop: 14,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "14px 32px",
                            borderRadius: 14,
                            background: isSaveSaved
                              ? "#10b981"
                              : "linear-gradient(135deg, #00c7b7 0%, #009387 100%)",
                            boxShadow: "0 0 30px rgba(0, 199, 183, 0.4)",
                            transform:
                              isSavePressed && !isSaveSaved
                                ? "scale(0.95)"
                                : "scale(1)",
                          }}
                        >
                          <FaSave size={18} color="#fff" />
                          <span
                            style={{
                              fontSize: 16,
                              fontWeight: 800,
                              color: "#fff",
                            }}
                          >
                            {isSaveSaved ? "Saved ✓" : "Save"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real Scrollbar Indicator */}
                  <div
                    style={{
                      position: "absolute",
                      right: 6,
                      top: 24,
                      bottom: 24,
                      width: 5,
                      borderRadius: 9999,
                      background: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 80,
                        borderRadius: 9999,
                        background: "rgba(255, 255, 255, 0.3)",
                        transform: `translateY(${
                          (settingsScrollY / 230) * 200
                        }px)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════
              SUCCESS TOAST NOTIFICATION (Scene 9: F688 - F700)
              ═════════════════════════════════════════════════════════════════ */}
          {frame >= 688 && frame < 700 && (
            <div
              style={{
                position: "absolute",
                bottom: 28,
                right: 28,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 24px",
                borderRadius: 16,
                background: "rgba(7, 26, 20, 0.95)",
                border: "1.5px solid #10b981",
                boxShadow:
                  "0 10px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.35)",
                zIndex: 50,
              }}
            >
              <FaCheckCircle size={20} color="#10b981" />
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>
                Settings saved! Netlify badge disabled.
              </span>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
