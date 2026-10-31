import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HTTP_COLORS } from "../constants";

export interface HttpStatusCodeBackgroundProps {
  accentColor?: string;
}

export const HttpStatusCodeBackground: React.FC<HttpStatusCodeBackgroundProps> = ({
  accentColor = HTTP_COLORS.accentCyan,
}) => {
  const frame = useCurrentFrame();

  // Subtle floating tech grid drift
  const gridOffsetY = (frame * 0.45) % 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: HTTP_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Cyber Radial Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(14, 28, 54, 0.45) 0%, rgba(3, 7, 18, 0.95) 75%, #030712 100%)",
        }}
      />

      {/* 2. Precision Tech Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}12 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}12 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${gridOffsetY}px)`,
          opacity: 0.75,
        }}
      />

      {/* 3. Symmetrical Bilateral Guide Rays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 2,
          height: "100%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.2) 30%, rgba(56, 189, 248, 0.2) 70%, transparent)",
        }}
      />

      {/* 4. Top Horizon Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: -150,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 350,
          background: `radial-gradient(ellipse at center, ${accentColor}25 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

