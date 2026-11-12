import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { STUDIO_THEME } from "../constants";

export const InfiniteStudio: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle studio light breathing
  const lightBreathe = Math.sin(frame * 0.03) * 20;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: STUDIO_THEME.bgBottom,
        overflow: "hidden",
      }}
    >
      {/* 1. Infinite Cyclorama Studio Lighting */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(ellipse 1100px 850px at 50% ${32 + lightBreathe * 0.05}%, ${STUDIO_THEME.bgSoftGlow} 0%, rgba(240, 243, 248, 0.75) 45%, transparent 85%),
            linear-gradient(180deg, ${STUDIO_THEME.bgTop} 0%, #E2E6EC 55%, ${STUDIO_THEME.bgBottom} 100%)
          `,
        }}
      />

      {/* 2. Soft Studio Edge Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(148, 163, 184, 0.28) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Deep 3D Contact Shadow on Studio Floor */}
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "50%",
          width: 780,
          height: 380,
          marginLeft: -390,
          marginTop: -190,
          borderRadius: 80,
          backgroundColor: "rgba(15, 23, 42, 0.32)",
          filter: "blur(75px)",
          transform: `translateY(165px) scale(0.95, 0.65)`,
          pointerEvents: "none",
        }}
      />

      {/* Tight core contact shadow */}
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "50%",
          width: 580,
          height: 120,
          marginLeft: -290,
          marginTop: -60,
          borderRadius: 60,
          backgroundColor: "rgba(15, 23, 42, 0.20)",
          filter: "blur(30px)",
          transform: "translateY(135px)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
