import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { FE_VS_BE_COLORS } from "../constants";

export interface FeVsBeBackgroundProps {
  feGlowIntensity?: number;
  beGlowIntensity?: number;
}

export const FeVsBeBackground: React.FC<FeVsBeBackgroundProps> = ({
  feGlowIntensity = 1.0,
  beGlowIntensity = 1.0,
}) => {
  const frame = useCurrentFrame();
  const scanOffsetY = (frame * 0.4) % 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: FE_VS_BE_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Midnight Base Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, #060e22 0%, #030712 85%)",
        }}
      />

      {/* 2. Dual Concept Split Ambient Glows */}
      {/* Left / Top: Frontend Cyan Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${FE_VS_BE_COLORS.feCyan}22 0%, transparent 70%)`,
          filter: "blur(100px)",
          opacity: feGlowIntensity,
          pointerEvents: "none",
        }}
      />

      {/* Right / Bottom: Backend Purple Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "-10%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${FE_VS_BE_COLORS.bePurple}22 0%, transparent 70%)`,
          filter: "blur(100px)",
          opacity: beGlowIntensity,
          pointerEvents: "none",
        }}
      />

      {/* 3. Tech Cyber Micro-Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${scanOffsetY}px`,
          opacity: 0.85,
        }}
      />

      {/* 4. Digital Particles & Constellation Dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 120px 240px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 320px 640px, rgba(168, 85, 247, 0.45), transparent),
            radial-gradient(2px 2px at 780px 380px, rgba(56, 189, 248, 0.45), transparent),
            radial-gradient(1.5px 1.5px at 880px 880px, rgba(168, 85, 247, 0.5), transparent),
            radial-gradient(2px 2px at 200px 1240px, rgba(56, 189, 248, 0.4), transparent),
            radial-gradient(1.5px 1.5px at 740px 1480px, rgba(168, 85, 247, 0.45), transparent),
            radial-gradient(2px 2px at 500px 1720px, rgba(56, 189, 248, 0.45), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "1080px 1920px",
          opacity: 0.7,
        }}
      />

      {/* 5. Edge Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(3, 7, 18, 0.88) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

