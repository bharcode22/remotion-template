import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { REST_COLORS } from "../constants";

export interface RestApiParallaxSpaceProps {
  accentColor?: string;
}

export const RestApiParallaxSpace: React.FC<RestApiParallaxSpaceProps> = ({
  accentColor = "#38bdf8",
}) => {
  const frame = useCurrentFrame();

  // Subtle floating grid drift
  const gridOffsetY = (frame * 0.4) % 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: REST_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Cyber Radial Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(14, 28, 54, 0.45) 0%, rgba(3, 7, 18, 0.95) 75%, #030712 100%)`,
        }}
      />

      {/* 2. Precision Tech Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}10 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}10 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${gridOffsetY}px)`,
          opacity: 0.7,
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
            "linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.15) 30%, rgba(56, 189, 248, 0.15) 70%, transparent)",
        }}
      />

      {/* 4. Crosshair Intersection Markers */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 24,
          height: 24,
          border: "1px solid rgba(56, 189, 248, 0.15)",
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 24,
          height: 24,
          border: "1px solid rgba(56, 189, 248, 0.15)",
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};

