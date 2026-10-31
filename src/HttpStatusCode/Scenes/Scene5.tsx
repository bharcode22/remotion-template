import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLayerGroup,
  FaShare,
  FaTimesCircle,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { HTTP_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 624 - 740):
  // Voiceover: "Secara umum, status code dibagi menjadi 5 kategori:" (Frames 633 - 721)
  // Transition into Camera Journey: Frames 725 - 740
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Badge Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 625),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Headline Spring
  const spHeadline = spring({
    frame: Math.max(0, frame - 630),
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // 5 Sockets Container Spring
  const spContainer = spring({
    frame: Math.max(0, frame - 638),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Staggered Springs for the 5 Categories
  const sp1xx = spring({ frame: Math.max(0, frame - 648), fps, config: { damping: 13, stiffness: 110 } });
  const sp2xx = spring({ frame: Math.max(0, frame - 656), fps, config: { damping: 13, stiffness: 110 } });
  const sp3xx = spring({ frame: Math.max(0, frame - 664), fps, config: { damping: 13, stiffness: 110 } });
  const sp4xx = spring({ frame: Math.max(0, frame - 672), fps, config: { damping: 13, stiffness: 110 } });
  const sp5xx = spring({ frame: Math.max(0, frame - 680), fps, config: { damping: 13, stiffness: 110 } });

  // Bottom Context Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 688),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Exit Transition towards Camera Journey (Frames 730 - 740)
  const exitOpacity = interpolate(frame, [730, 738], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [730, 738], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitY = interpolate(frame, [730, 738], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const categories = [
    { code: "1xx", label: "INFORMATIONAL", desc: "Request diterima, sedang diproses", color: HTTP_COLORS.status1xx, icon: FaInfoCircle, sp: sp1xx },
    { code: "2xx", label: "SUCCESS", desc: "Request berhasil diproses sukses", color: HTTP_COLORS.status2xx, icon: FaCheckCircle, sp: sp2xx },
    { code: "3xx", label: "REDIRECTION", desc: "Request perlu dialihkan ke URL lain", color: HTTP_COLORS.status3xx, icon: FaShare, sp: sp3xx },
    { code: "4xx", label: "CLIENT ERROR", desc: "Ada kesalahan pada sisi klien", color: HTTP_COLORS.status4xx, icon: FaTimesCircle, sp: sp4xx },
    { code: "5xx", label: "SERVER ERROR", desc: "Kegagalan terjadi pada server", color: HTTP_COLORS.status5xx, icon: FaExclamationTriangle, sp: sp5xx },
  ];

  return (
    <SceneContainer accentColor={HTTP_COLORS.accentCyan}>
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
        {/* 1. TOP CLASSIFICATION BADGE */}
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
            border: "1.5px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: HTTP_COLORS.accentCyan,
              boxShadow: `0 0 10px ${HTTP_COLORS.accentCyan}`,
              display: "inline-block",
            }}
          />
          <FaLayerGroup size={15} color={HTTP_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: HTTP_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            HTTP TAXONOMY // 5 STATUS CATEGORIES
          </span>
        </div>

        {/* 2. DYNAMIC HEADLINE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 30,
            gap: 6,
          }}
        >
          <h2
            style={{
              margin: 0,
              transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 15}px)`,
              opacity: spHeadline,
              fontSize: 42,
              fontWeight: 800,
              color: HTTP_COLORS.textSecondary,
              lineHeight: 1.15,
            }}
          >
            SECARA UMUM, STATUS CODE
          </h2>

          <h1
            style={{
              margin: 0,
              transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * 20}px)`,
              opacity: spHeadline,
              fontSize: 54,
              fontWeight: 900,
              letterSpacing: 1.2,
              color: HTTP_COLORS.accentCyan,
              lineHeight: 1.15,
              textShadow: "0 0 35px rgba(56, 189, 248, 0.45)",
            }}
          >
            DIBAGI MENJADI 5 KATEGORI:
          </h1>
        </div>

        {/* 3. HERO CENTERPIECE: 5 CATEGORIES MATRIX LIST */}
        <div
          style={{
            transform: `scale(${spContainer}) translateY(${(1 - spContainer) * 30}px)`,
            opacity: spContainer,
            width: 880,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.code}
                style={{
                  transform: `scale(${cat.sp}) translateY(${(1 - cat.sp) * 20}px)`,
                  opacity: cat.sp,
                  borderRadius: 16,
                  backgroundColor: "rgba(10, 18, 36, 0.9)",
                  border: `1.5px solid ${cat.color}45`,
                  boxShadow: `0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px ${cat.color}15`,
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  {/* Category Code Pill */}
                  <div
                    style={{
                      width: 90,
                      height: 52,
                      borderRadius: 12,
                      backgroundColor: `${cat.color}18`,
                      border: `1.8px solid ${cat.color}70`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 15px ${cat.color}25`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 26,
                        fontWeight: 900,
                        color: cat.color,
                        letterSpacing: -0.5,
                      }}
                    >
                      {cat.code}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          color: HTTP_COLORS.textPrimary,
                          letterSpacing: 0.8,
                        }}
                      >
                        {cat.label}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        color: HTTP_COLORS.textSecondary,
                        fontWeight: 500,
                      }}
                    >
                      {cat.desc}
                    </span>
                  </div>
                </div>

                {/* Right Semantic Icon */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    backgroundColor: `${cat.color}15`,
                    border: `1px solid ${cat.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color={cat.color} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 26,
            padding: "12px 28px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 18, 36, 0.85)",
            border: "1.5px solid rgba(56, 189, 248, 0.25)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: HTTP_COLORS.accentCyan,
              boxShadow: `0 0 10px ${HTTP_COLORS.accentCyan}`,
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: HTTP_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1,
            }}
          >
            EXPLORING CORE CATEGORIES VIA CAMERA JOURNEY ➔
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

