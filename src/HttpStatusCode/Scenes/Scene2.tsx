import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBan,
  FaExclamationTriangle,
  FaSearch,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 72 - 305):
  // - Line 2: "tetapi bukannya masuk ke sistem," (Frames 71 - 126)
  // - Line 3: "kamu justru menemukan angka seperti 403, 404, atau 500?" (Frames 131 - 283)
  //   - "403" spoken: Frames 184 - 205
  //   - "404" spoken: Frames 206 - 230
  //   - "500" spoken: Frames 235 - 283
  // - Outro buffer: Frames 283 - 305
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Alert Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 74),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Line 2 Spring: "BUKANNYA MASUK KE SISTEM..."
  const spLine2 = spring({
    frame: Math.max(0, frame - 78),
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // Headline Line 3 Spring: "KAMU JUSTRU MENEMUKAN ANGKA:"
  const spLine3 = spring({
    frame: Math.max(0, frame - 132),
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  // Intercept Alert Banner (Active during Line 2: 74 - 132f)
  const spAlertBanner = spring({
    frame: Math.max(0, frame - 82),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // 3 Major Status Code Cards Springs
  // Card 1: 403 Forbidden (Spoken at Frame 184)
  const spCard403 = spring({
    frame: Math.max(0, frame - 182),
    fps,
    config: { damping: 13, stiffness: 120, mass: 0.8 },
  });

  // Card 2: 404 Not Found (Spoken at Frame 208)
  const spCard404 = spring({
    frame: Math.max(0, frame - 206),
    fps,
    config: { damping: 13, stiffness: 120, mass: 0.8 },
  });

  // Card 3: 500 Server Error (Spoken at Frame 236)
  const spCard500 = spring({
    frame: Math.max(0, frame - 234),
    fps,
    config: { damping: 12, stiffness: 125, mass: 0.85 },
  });

  // Bottom Status Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 140),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Flashing alarm blink
  const alarmBlink = frame % 12 < 6;

  // Exit Transition (Frames 295 - 305)
  const exitOpacity = interpolate(frame, [295, 305], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [295, 305], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [295, 305], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={HTTP_COLORS.status5xx}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: exitOpacity,
          transform: `translateY(${exitY}px) scale(${exitScale})`,
          fontFamily: FONT_SANS,
        }}
      >
        {/* 1. TOP ALERT BADGE */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(30, 8, 12, 0.92)",
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
              backgroundColor: alarmBlink
                ? HTTP_COLORS.status5xx
                : "rgba(239, 68, 68, 0.3)",
              boxShadow: alarmBlink
                ? `0 0 12px ${HTTP_COLORS.status5xx}`
                : "none",
              display: "inline-block",
            }}
          />
          <FaTimesCircle size={15} color={HTTP_COLORS.status5xx} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: HTTP_COLORS.status5xx,
              textTransform: "uppercase",
            }}
          >
            HTTP EXCEPTION // ACCESS INTERCEPTED
          </span>
        </div>

        {/* 2. DYNAMIC HEADLINE (Mobile-Friendly) */}
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
          {/* Line 2: TETAPI BUKANNYA MASUK KE SISTEM */}
          <div
            style={{
              transform: `scale(${spLine2}) translateY(${(1 - spLine2) * 15}px)`,
              opacity: spLine2,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 44,
                fontWeight: 900,
                letterSpacing: 0.5,
                color: "#fca5a5",
                lineHeight: 1.15,
                textShadow: "0 0 25px rgba(239, 68, 68, 0.3)",
              }}
            >
              TETAPI BUKANNYA MASUK KE SISTEM,
            </h2>
          </div>

          {/* Line 3: KAMU JUSTRU MENEMUKAN ANGKA */}
          {frame >= 126 && (
            <h1
              style={{
                margin: 0,
                transform: `scale(${spLine3}) translateY(${(1 - spLine3) * 15}px)`,
                opacity: spLine3,
                fontSize: 52,
                fontWeight: 900,
                letterSpacing: 1,
                color: HTTP_COLORS.textPrimary,
                lineHeight: 1.15,
                textShadow: "0 4px 25px rgba(0, 0, 0, 0.8)",
              }}
            >
              JUSTRU MENEMUKAN ANGKA:
            </h1>
          )}
        </div>

        {/* 3. HERO CENTERPIECE: 3 MAJOR STATUS CODE CARDS */}
        <div
          style={{
            width: 880,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* INTERCEPT WARNING BANNER (Active during Line 2: Frames 78 - 180) */}
          {frame < 182 && (
            <div
              style={{
                width: "100%",
                transform: `scale(${spAlertBanner}) translateY(${(1 - spAlertBanner) * 20}px)`,
                opacity: spAlertBanner,
                borderRadius: 20,
                backgroundColor: "rgba(26, 6, 12, 0.94)",
                border: "1.8px dashed rgba(239, 68, 68, 0.6)",
                boxShadow: "0 0 35px rgba(239, 68, 68, 0.25)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: "50%",
                  backgroundColor: "rgba(239, 68, 68, 0.18)",
                  border: "2px solid rgba(239, 68, 68, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
                }}
              >
                <FaTimesCircle size={32} color={HTTP_COLORS.status5xx} />
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 22,
                  fontWeight: 800,
                  color: HTTP_COLORS.status5xx,
                  letterSpacing: 1.5,
                }}
              >
                CONNECTION REJECTED // NO ACCESS
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: HTTP_COLORS.textSecondary,
                  textAlign: "center",
                }}
              >
                Browser gagal masuk ke dalam sistem web app
              </div>
            </div>
          )}

          {/* CARD 1: 403 FORBIDDEN (Reveals at Frame 182) */}
          <div
            style={{
              transform: `scale(${spCard403}) translateY(${(1 - spCard403) * 30}px)`,
              opacity: spCard403,
              borderRadius: 20,
              backgroundColor: "rgba(22, 10, 14, 0.92)",
              border: "1.5px solid rgba(245, 158, 11, 0.45)",
              boxShadow:
                "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.18)",
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Huge Status Code Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 140,
                  height: 80,
                  borderRadius: 14,
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  border: "2px solid rgba(245, 158, 11, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(245, 158, 11, 0.25)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 48,
                    fontWeight: 900,
                    letterSpacing: -1,
                    color: HTTP_COLORS.status4xx,
                    textShadow: `0 0 20px rgba(245, 158, 11, 0.5)`,
                  }}
                >
                  403
                </span>
              </div>

              {/* Center Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: HTTP_COLORS.textPrimary,
                      letterSpacing: 0.8,
                    }}
                  >
                    FORBIDDEN
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      color: HTTP_COLORS.status4xx,
                      border: "1px solid rgba(245, 158, 11, 0.4)",
                    }}
                  >
                    CLIENT ERROR
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    color: HTTP_COLORS.textSecondary,
                    fontWeight: 500,
                  }}
                >
                  Server menolak permintaan // Akses tidak memiliki izin
                </span>
              </div>
            </div>

            {/* Right Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: "1.5px solid rgba(245, 158, 11, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaBan size={22} color={HTTP_COLORS.status4xx} />
            </div>
          </div>

          {/* CARD 2: 404 NOT FOUND (Reveals at Frame 206) */}
          <div
            style={{
              transform: `scale(${spCard404}) translateY(${(1 - spCard404) * 30}px)`,
              opacity: spCard404,
              borderRadius: 20,
              backgroundColor: "rgba(24, 8, 14, 0.92)",
              border: "1.5px solid rgba(244, 63, 94, 0.45)",
              boxShadow:
                "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 30px rgba(244, 63, 94, 0.18)",
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Huge Status Code Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 140,
                  height: 80,
                  borderRadius: 14,
                  backgroundColor: "rgba(244, 63, 94, 0.15)",
                  border: "2px solid rgba(244, 63, 94, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(244, 63, 94, 0.25)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 48,
                    fontWeight: 900,
                    letterSpacing: -1,
                    color: "#f43f5e",
                    textShadow: `0 0 20px rgba(244, 63, 94, 0.5)`,
                  }}
                >
                  404
                </span>
              </div>

              {/* Center Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: HTTP_COLORS.textPrimary,
                      letterSpacing: 0.8,
                    }}
                  >
                    NOT FOUND
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(244, 63, 94, 0.2)",
                      color: "#f43f5e",
                      border: "1px solid rgba(244, 63, 94, 0.4)",
                    }}
                  >
                    CLIENT ERROR
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    color: HTTP_COLORS.textSecondary,
                    fontWeight: 500,
                  }}
                >
                  Resource atau endpoint yang dituju tidak ditemukan
                </span>
              </div>
            </div>

            {/* Right Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "rgba(244, 63, 94, 0.12)",
                border: "1.5px solid rgba(244, 63, 94, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaSearch size={20} color="#f43f5e" />
            </div>
          </div>

          {/* CARD 3: 500 SERVER ERROR (Reveals at Frame 234) */}
          <div
            style={{
              transform: `scale(${spCard500}) translateY(${(1 - spCard500) * 30}px)`,
              opacity: spCard500,
              borderRadius: 20,
              backgroundColor: "rgba(26, 6, 12, 0.94)",
              border: "1.8px solid rgba(239, 68, 68, 0.7)",
              boxShadow:
                "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.3)",
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Huge Status Code Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 140,
                  height: 80,
                  borderRadius: 14,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  border: "2px solid rgba(239, 68, 68, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 48,
                    fontWeight: 900,
                    letterSpacing: -1,
                    color: HTTP_COLORS.status5xx,
                    textShadow: `0 0 22px rgba(239, 68, 68, 0.6)`,
                  }}
                >
                  500
                </span>
              </div>

              {/* Center Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: HTTP_COLORS.textPrimary,
                      letterSpacing: 0.8,
                    }}
                  >
                    INTERNAL SERVER ERROR
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 6,
                      backgroundColor: "rgba(239, 68, 68, 0.25)",
                      color: HTTP_COLORS.status5xx,
                      border: "1px solid rgba(239, 68, 68, 0.5)",
                    }}
                  >
                    SERVER ERROR
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    color: HTTP_COLORS.textSecondary,
                    fontWeight: 500,
                  }}
                >
                  Terjadi kesalahan internal tak terduga pada sisi server
                </span>
              </div>
            </div>

            {/* Right Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1.5px solid rgba(239, 68, 68, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaExclamationTriangle size={22} color={HTTP_COLORS.status5xx} />
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 32,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(24, 8, 12, 0.85)",
            border: "1.5px solid rgba(239, 68, 68, 0.35)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: HTTP_COLORS.status5xx,
              boxShadow: `0 0 10px ${HTTP_COLORS.status5xx}`,
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: HTTP_COLORS.status5xx,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            HTTP STATUS CODE // ERROR RESPONSE SIGNALS
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
