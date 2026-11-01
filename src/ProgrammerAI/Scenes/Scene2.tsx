import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FaLaptopCode, FaQuestionCircle } from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { PROGRAMMER_AI_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & ANIMATIONS (Frames 134 - 255)
  // Naskah Line 2:
  // "apa yang bisa menjadi nilai tambah kita sebagai developer?"
  // - F136: "apa"
  // - F144 - F156: "yang bisa menjadi"
  // - F158 - F184: "nilai tambah kita"
  // - F188 - F220: "sebagai developer?"
  // - F220 - F255: Reflective pause before Line 4 answer
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (Frame 134)
  const spBadge = spring({
    frame: Math.max(0, frame - 134),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 2. Central Question Headline Spring (Frame 137)
  const spTitle = spring({
    frame: Math.max(0, frame - 137),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // 3. Central Focal Card Spring (Frame 158)
  const spCard = spring({
    frame: Math.max(0, frame - 158),
    fps,
    config: { damping: 14, stiffness: 95, mass: 1 },
  });

  // 4. Bottom Context Pill Spring (Frame 195)
  const spBottomPill = spring({
    frame: Math.max(0, frame - 195),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // Subtle ambient pulse for the question highlight
  const pulseLoop = Math.sin((frame * Math.PI) / 14) * 0.04 + 1.0;
  const orbitSpin = (frame * 1.5) % 360;

  return (
    <SceneContainer accentColor={PROGRAMMER_AI_COLORS.accentAmber}>
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
        {/* ─────────────────────────────────────────────────────────────────
            1. TOP CATEGORY BADGE (Frame 134+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(11, 19, 38, 0.92)",
            border: "1.5px solid rgba(245, 158, 11, 0.45)",
            boxShadow: "0 0 25px rgba(245, 158, 11, 0.25)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              backgroundColor: PROGRAMMER_AI_COLORS.accentAmber,
              boxShadow: `0 0 10px ${PROGRAMMER_AI_COLORS.accentAmber}`,
            }}
          />
          <FaQuestionCircle size={15} color={PROGRAMMER_AI_COLORS.accentAmber} />
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: PROGRAMMER_AI_COLORS.accentAmber,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            REFLEKSI DEVELOPER // PERTANYAAN BESAR
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. MAIN QUESTION HEADLINE (Frame 137+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spTitle}) translateY(${(1 - spTitle) * 20}px)`,
            opacity: spTitle,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          <p
            style={{
              fontSize: 28,
              color: PROGRAMMER_AI_COLORS.textSecondary,
              fontWeight: 700,
              margin: "0 0 8px 0",
              letterSpacing: -0.2,
            }}
          >
            Lalu, apa yang bisa menjadi
          </p>

          <h2
            style={{
              fontSize: 64,
              fontWeight: 900,
              margin: 0,
              letterSpacing: -1,
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                transform: `scale(${pulseLoop})`,
                display: "inline-block",
                background:
                  "linear-gradient(90deg, #f59e0b 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(245, 158, 11, 0.35))",
              }}
            >
              Nilai Tambah Kita
            </span>
          </h2>

          <p
            style={{
              fontSize: 36,
              color: PROGRAMMER_AI_COLORS.textPrimary,
              fontWeight: 800,
              margin: "12px 0 0 0",
              fontFamily: FONT_MONO,
              letterSpacing: 0.5,
            }}
          >
            sebagai Developer?
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. MINIMALIST CENTERPIECE CARD (Frame 158+)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `scale(${spCard}) translateY(${(1 - spCard) * 30}px)`,
            opacity: spCard,
            width: 820,
            padding: "32px 36px",
            borderRadius: 24,
            backgroundColor: "rgba(11, 19, 38, 0.94)",
            border: "1.8px solid rgba(245, 158, 11, 0.45)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: 26,
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Rotating Tech Orbit Accent */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "1.5px dashed rgba(245, 158, 11, 0.2)",
              transform: `rotate(${orbitSpin}deg)`,
              pointerEvents: "none",
            }}
          />

          {/* Focal Icon with Amber Glow */}
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              backgroundColor: "rgba(245, 158, 11, 0.16)",
              border: "2px solid rgba(245, 158, 11, 0.55)",
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FaLaptopCode size={36} color={PROGRAMMER_AI_COLORS.accentAmber} />
          </div>

          {/* Clean Core Message */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: PROGRAMMER_AI_COLORS.accentAmber,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Konteks Perubahan
            </span>
            <p
              style={{
                fontSize: 20,
                color: PROGRAMMER_AI_COLORS.textPrimary,
                margin: 0,
                fontWeight: 600,
                lineHeight: 1.45,
              }}
            >
              Ketika AI bisa menulis sintaks kode dalam hitungan detik, apa peran
              sesungguhnya yang tidak bisa digantikan?
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. BOTTOM CONTEXT PILL (Frame 195+)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 195 && (
          <div
            style={{
              transform: `scale(${spBottomPill}) translateY(${(1 - spBottomPill) * 20}px)`,
              opacity: spBottomPill,
              marginTop: 32,
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(11, 19, 38, 0.92)",
              border: "1.5px solid rgba(56, 189, 248, 0.4)",
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
                backgroundColor: PROGRAMMER_AI_COLORS.devCyan,
                boxShadow: `0 0 8px ${PROGRAMMER_AI_COLORS.devCyan}`,
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: PROGRAMMER_AI_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              THE SHIFT // DARI MENGETIK KODE KE MENGARAHKAN SISTEM
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
