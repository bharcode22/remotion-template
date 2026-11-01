import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PROGRAMMER_AI_COLORS } from "../constants";

export const ProgrammerAiBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle floating motion for neural background glows
  const orb1Y = Math.sin((frame * Math.PI) / 90) * 20;
  const orb2Y = Math.cos((frame * Math.PI) / 100) * 25;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PROGRAMMER_AI_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Micro-Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.85,
        }}
      />

      {/* 2. Top-Right Neural AI Violet Glow */}
      <div
        style={{
          position: "absolute",
          top: -120 + orb1Y,
          right: -100,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PROGRAMMER_AI_COLORS.aiViolet}22 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Bottom-Left Developer Cyan Glow */}
      <div
        style={{
          position: "absolute",
          bottom: -150 + orb2Y,
          left: -120,
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PROGRAMMER_AI_COLORS.devCyan}1c 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 4. Center Vignette Shading */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(3, 7, 18, 0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

