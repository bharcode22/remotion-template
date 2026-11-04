import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CICD_COLORS } from "../constants";

export interface CiCdBackgroundProps {
  cyanGlowIntensity?: number;
  purpleGlowIntensity?: number;
}

export const CiCdBackground: React.FC<CiCdBackgroundProps> = ({
  cyanGlowIntensity = 1.0,
  purpleGlowIntensity = 1.0,
}) => {
  const frame = useCurrentFrame();
  const scanOffsetY = (frame * 0.5) % 60;
  const pulsePulse = Math.sin((frame * Math.PI) / 30) * 0.15 + 0.85;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CICD_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Midnight Base Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 45%, #08152b 0%, #030712 85%)",
        }}
      />

      {/* 2. Top-Left DevOps Cyan Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-12%",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CICD_COLORS.pipelineCyan}22 0%, transparent 70%)`,
          filter: "blur(120px)",
          opacity: cyanGlowIntensity * pulsePulse,
          pointerEvents: "none",
        }}
      />

      {/* 3. Bottom-Right CD Deployment Purple Ambient Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-12%",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CICD_COLORS.deployPurple}20 0%, transparent 70%)`,
          filter: "blur(120px)",
          opacity: purpleGlowIntensity * pulsePulse,
          pointerEvents: "none",
        }}
      />

      {/* 4. Center Git Orange & Build Green Subtle Flare */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CICD_COLORS.gitOrange}0e 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 5. Animated DevOps Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scanOffsetY}px)`,
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* 6. Subtle Vertical Pipeline Conduit Beams */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 120,
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.18) 50%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 120,
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.18) 50%, transparent)",
        }}
      />

      {/* 7. Subtle Vignette Border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 160px rgba(0, 0, 0, 0.9)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

