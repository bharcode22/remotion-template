import React from "react";
import { useCurrentFrame } from "remotion";
import { STORAGE_COLORS } from "../constants";

export interface StorageBackgroundProps {
  accentColor?: string;
}

export const StorageBackground: React.FC<StorageBackgroundProps> = ({
  accentColor = STORAGE_COLORS.accentCyan,
}) => {
  const frame = useCurrentFrame();

  // Subtle breathing aura and grid drift
  const gridOffsetY = (frame * 0.4) % 60;
  const pulseAura = 0.25 + Math.sin(frame * 0.08) * 0.06;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1080,
        height: 1920,
        backgroundColor: STORAGE_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Radial Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(56, 189, 248, 0.12) 45%, transparent 75%)`,
          opacity: pulseAura,
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${STORAGE_COLORS.accentPurple} 0%, rgba(168, 85, 247, 0.1) 45%, transparent 75%)`,
          opacity: 0.22,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Cyber Storage Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${gridOffsetY}px`,
          opacity: 0.65,
        }}
      />

      {/* 3. Perspective Server Rack Silhouette Beams */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: 0,
          bottom: 0,
          width: 2,
          background:
            "linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.2) 30%, rgba(168, 85, 247, 0.2) 70%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 50,
          top: 0,
          bottom: 0,
          width: 2,
          background:
            "linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.2) 30%, rgba(168, 85, 247, 0.2) 70%, transparent)",
        }}
      />

      {/* 4. Subtle Cyber Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(3, 7, 18, 0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

