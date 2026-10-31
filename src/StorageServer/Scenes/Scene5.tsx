import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FaCloud, FaExchangeAlt, FaHdd, FaLayerGroup } from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { STORAGE_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS (Frames 675 - 798):
  // Naskah Line 11:
  // "Secara umum, ada beberapa pendekatan penyimpanan yang sering digunakan."
  // (Speech: Frames 677 - 784)
  // ─────────────────────────────────────────────────────────────────────────────

  // Top Tag Spring
  const spBadge = spring({
    frame: Math.max(0, frame - 675),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Center Matrix Card Spring
  const spCard = spring({
    frame: Math.max(0, frame - 678),
    fps,
    config: { damping: 15, stiffness: 85, mass: 1 },
  });

  // Dual Approach Card Springs
  const spLocal = spring({
    frame: Math.max(0, frame - 690),
    fps,
    config: { damping: 13, stiffness: 105 },
  });
  const spObject = spring({
    frame: Math.max(0, frame - 702),
    fps,
    config: { damping: 13, stiffness: 105 },
  });

  // Bottom Pill Spring
  const spPill = spring({
    frame: Math.max(0, frame - 715),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

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
        {/* 1. TOP APPROACHES BADGE */}
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
            marginBottom: 28,
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
          <FaLayerGroup size={15} color={STORAGE_COLORS.accentCyan} />
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: STORAGE_COLORS.accentCyan,
              textTransform: "uppercase",
            }}
          >
            APPROACHES OVERVIEW // METODE PENYIMPANAN
          </span>
        </div>

        {/* 2. CENTER DUAL APPROACH DISPATCHER CARD */}
        <div
          style={{
            transform: `scale(${spCard}) translateY(${(1 - spCard) * 35}px)`,
            opacity: spCard,
            width: 900,
            padding: "46px 44px",
            borderRadius: 32,
            backgroundColor: STORAGE_COLORS.bgSurface,
            border: "2px solid rgba(56, 189, 248, 0.35)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Header Subtitle */}
          <span
            style={{
              fontSize: 14,
              fontFamily: FONT_MONO,
              fontWeight: 800,
              letterSpacing: 2.5,
              color: STORAGE_COLORS.accentCyan,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            KLASIFIKASI UTAMA
          </span>

          {/* Main Title (44px Mobile-Friendly) */}
          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: STORAGE_COLORS.textPrimary,
              margin: 0,
              marginBottom: 12,
              lineHeight: 1.25,
              letterSpacing: -0.5,
            }}
          >
            Secara umum, ada beberapa pendekatan:
          </h2>

          <p
            style={{
              fontSize: 22,
              color: STORAGE_COLORS.textSecondary,
              margin: 0,
              marginBottom: 36,
              maxWidth: 750,
            }}
          >
            Dua fondasi arsitektur penyimpanan data yang paling sering digunakan dalam rekayasa aplikasi modern.
          </p>

          {/* DUAL COMPARISON CARDS */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              position: "relative",
            }}
          >
            {/* Card 1: LOCAL STORAGE */}
            <div
              style={{
                transform: `scale(${spLocal})`,
                opacity: spLocal,
                flex: 1,
                padding: "26px 22px",
                borderRadius: 20,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "2px solid rgba(16, 185, 129, 0.5)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <FaHdd size={30} color={STORAGE_COLORS.accentEmerald} />
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: STORAGE_COLORS.accentEmerald,
                  letterSpacing: 1.5,
                }}
              >
                PENDEKATAN #1
              </span>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: STORAGE_COLORS.textPrimary,
                  margin: "6px 0 8px 0",
                }}
              >
                Local Storage
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: STORAGE_COLORS.textSecondary,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Langsung di disk server lokal
              </p>
            </div>

            {/* Middle Divider Icon */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "rgba(14, 23, 44, 0.95)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <FaExchangeAlt size={16} color={STORAGE_COLORS.accentCyan} />
            </div>

            {/* Card 2: OBJECT STORAGE */}
            <div
              style={{
                transform: `scale(${spObject})`,
                opacity: spObject,
                flex: 1,
                padding: "26px 22px",
                borderRadius: 20,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "2px solid rgba(56, 189, 248, 0.5)",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <FaCloud size={30} color={STORAGE_COLORS.accentCyan} />
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: STORAGE_COLORS.accentCyan,
                  letterSpacing: 1.5,
                }}
              >
                PENDEKATAN #2
              </span>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: STORAGE_COLORS.textPrimary,
                  margin: "6px 0 8px 0",
                }}
              >
                Object Storage
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: STORAGE_COLORS.textSecondary,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Penyimpanan cloud terdistribusi
              </p>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM CONTEXT PILL */}
        <div
          style={{
            transform: `scale(${spPill}) translateY(${(1 - spPill) * 20}px)`,
            opacity: spPill,
            marginTop: 28,
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
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: STORAGE_COLORS.textPrimary,
              fontFamily: FONT_MONO,
              letterSpacing: 1.2,
            }}
          >
            STORAGE LANDSCAPE // LOCAL DISK VS CLOUD OBJECT STORAGE
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};

