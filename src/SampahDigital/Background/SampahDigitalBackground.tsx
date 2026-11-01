import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

export interface SampahDigitalBackgroundProps {
  cameraY?: number;
}

export const SampahDigitalBackground: React.FC<SampahDigitalBackgroundProps> = ({
  cameraY = 0,
}) => {
  const frame = useCurrentFrame();

  // Subtle floating motion for ambient glows combined with camera parallax
  const orb1Y = Math.sin((frame * Math.PI) / 90) * 20 - cameraY * 0.18;
  const orb2Y = Math.cos((frame * Math.PI) / 100) * 25 - cameraY * 0.14;
  const gridOffsetY = (-cameraY * 0.22) % 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: SAMPAH_DIGITAL_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Micro-Grid Background with Parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${gridOffsetY}px`,
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
          background: `radial-gradient(circle, ${SAMPAH_DIGITAL_COLORS.aiViolet}20 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Bottom-Left Subtle Amber Warning Glow */}
      <div
        style={{
          position: "absolute",
          bottom: -150 + orb2Y,
          left: -120,
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${SAMPAH_DIGITAL_COLORS.wasteAmber}18 0%, transparent 65%)`,
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

