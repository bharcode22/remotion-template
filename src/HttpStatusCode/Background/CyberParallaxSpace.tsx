import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export interface CyberParallaxSpaceProps {
  cameraX?: number;
}

export const CyberParallaxSpace: React.FC<CyberParallaxSpaceProps> = ({
  cameraX = 0,
}) => {
  const frame = useCurrentFrame();

  // Subtle floating vertical drift
  const gridOffsetY = (frame * 0.35) % 48;

  // Subtle parallax shift
  const parallaxX1 = -cameraX * 0.12;
  const parallaxX2 = -cameraX * 0.25;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Midnight & Cyan Radial Ambiance */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 45%, rgba(14, 30, 60, 0.45) 0%, rgba(3, 7, 18, 0.95) 70%, #030712 100%)",
        }}
      />

      {/* 2. Deep Parallax Tech Micro-Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: -1200,
          backgroundImage: `
            radial-gradient(circle, rgba(56, 189, 248, 0.18) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 96px 96px",
          transform: `translate(${parallaxX1}px, ${gridOffsetY}px)`,
          opacity: 0.8,
        }}
      />

      {/* 3. Midground Floating Horizon Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -2000,
          right: -6000,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.08) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "280px 100%",
          transform: `translateX(${parallaxX2}px)`,
          opacity: 0.7,
        }}
      />

      {/* 4. Top Horizon Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 960,
          height: 380,
          background:
            "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.22) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
