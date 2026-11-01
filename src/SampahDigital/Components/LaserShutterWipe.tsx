import React from "react";
import { AbsoluteFill } from "remotion";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

export interface LaserShutterWipeProps {
  progress: number; // 0 to 1
  color?: string;
}

export const LaserShutterWipe: React.FC<LaserShutterWipeProps> = ({
  progress,
  color = SAMPAH_DIGITAL_COLORS.aiViolet,
}) => {
  if (progress <= 0 || progress >= 1) return null;

  // Blade wipes across horizontally from left to right (X: -100px to 1180px)
  const laserX = -100 + progress * (1080 + 200);

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        zIndex: 999,
        overflow: "hidden",
      }}
    >
      {/* Laser Vertical Blade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: laserX,
          width: 8,
          backgroundColor: "#ffffff",
          boxShadow: `0 0 30px 10px ${color}, 0 0 60px 20px ${color}`,
          transform: "translateX(-50%)",
        }}
      />

      {/* Trailing Energy Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: Math.max(0, laserX),
          background: `linear-gradient(90deg, transparent 60%, ${color}22 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};

