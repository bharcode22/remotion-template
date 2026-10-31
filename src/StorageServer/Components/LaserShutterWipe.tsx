import React from "react";
import { AbsoluteFill } from "remotion";
import { STORAGE_COLORS } from "../constants";

export interface LaserShutterWipeProps {
  progress: number; // 0 to 1
  color?: string;
}

export const LaserShutterWipe: React.FC<LaserShutterWipeProps> = ({
  progress,
  color = STORAGE_COLORS.accentCyan,
}) => {
  if (progress <= 0 || progress >= 1) return null;

  const easedProgress =
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const shutterY = (easedProgress - 0.5) * 2200;

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {/* Laser Light Bar */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 12,
          transform: `translateY(${shutterY}px)`,
          backgroundColor: "#ffffff",
          boxShadow: `
            0 0 30px #ffffff,
            0 0 60px ${color},
            0 0 120px ${color}
          `,
        }}
      />

      {/* Trailing Energy Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1920,
          transform: `translateY(${shutterY - 960}px)`,
          background: `linear-gradient(to bottom, transparent, ${color}33 85%, #ffffff 100%)`,
          opacity: 0.7,
        }}
      />
    </AbsoluteFill>
  );
};

