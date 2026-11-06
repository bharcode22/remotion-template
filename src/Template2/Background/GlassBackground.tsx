import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GLASS_COLORS } from "../constants";

export const GlassBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow breathing pulses for ambient blobs
  const pulse1 = Math.sin((frame * Math.PI) / 90) * 0.12 + 0.88;
  const pulse2 = Math.cos((frame * Math.PI) / 70) * 0.1 + 0.9;
  const pulse3 = Math.sin((frame * Math.PI) / 110 + 1) * 0.08 + 0.92;

  // Slow drift positions
  const drift1X = Math.sin((frame * Math.PI) / 200) * 40;
  const drift1Y = Math.cos((frame * Math.PI) / 180) * 30;
  const drift2X = Math.cos((frame * Math.PI) / 220) * 50;
  const drift2Y = Math.sin((frame * Math.PI) / 190) * 35;
  const drift3X = Math.sin((frame * Math.PI) / 170 + 2) * 30;
  const drift3Y = Math.cos((frame * Math.PI) / 210 + 1) * 40;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${GLASS_COLORS.bgDark} 0%, #12122e 40%, #1a1035 70%, #0d0d20 100%)`,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* 1. Large Violet Ambient Blob (Top-Right) */}
      <div
        style={{
          position: "absolute",
          top: -120 + drift1Y,
          right: -100 + drift1X,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.18) 0%, rgba(129, 140, 248, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
          transform: `scale(${pulse1})`,
          pointerEvents: "none",
        }}
      />

      {/* 2. Teal / Cyan Ambient Blob (Bottom-Left) */}
      <div
        style={{
          position: "absolute",
          bottom: -180 + drift2Y,
          left: -80 + drift2X,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(103, 232, 249, 0.12) 0%, rgba(110, 231, 183, 0.06) 50%, transparent 75%)",
          filter: "blur(70px)",
          transform: `scale(${pulse2})`,
          pointerEvents: "none",
        }}
      />

      {/* 3. Rose / Amber Warm Blob (Center-Left) */}
      <div
        style={{
          position: "absolute",
          top: 600 + drift3Y,
          left: -60 + drift3X,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, rgba(251, 113, 133, 0.05) 50%, transparent 75%)",
          filter: "blur(50px)",
          transform: `scale(${pulse3})`,
          pointerEvents: "none",
        }}
      />

      {/* 4. Subtle Noise / Grain Overlay (adds texture to glass) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 120px 120px, 60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* 5. Floating Bokeh Circles */}
      {[
        { x: 150, y: 300, r: 40, speed: 0.15, opacity: 0.06 },
        { x: 800, y: 500, r: 60, speed: 0.12, opacity: 0.04 },
        { x: 350, y: 900, r: 35, speed: 0.18, opacity: 0.07 },
        { x: 750, y: 1300, r: 50, speed: 0.1, opacity: 0.05 },
        { x: 200, y: 1600, r: 45, speed: 0.14, opacity: 0.06 },
        { x: 900, y: 1800, r: 30, speed: 0.16, opacity: 0.05 },
        { x: 500, y: 200, r: 55, speed: 0.11, opacity: 0.04 },
        { x: 100, y: 1200, r: 38, speed: 0.13, opacity: 0.06 },
      ].map((pt, idx) => {
        const floatY = Math.sin((frame * pt.speed + idx * 2) * 0.3) * 20;
        const floatX = Math.cos((frame * pt.speed + idx * 3) * 0.2) * 15;
        const bokehOpacity =
          pt.opacity + Math.sin((frame * 0.05 + idx * 1.5)) * 0.02;

        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: pt.x + floatX,
              top: pt.y + floatY,
              width: pt.r * 2,
              height: pt.r * 2,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255, 255, 255, ${bokehOpacity}) 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

