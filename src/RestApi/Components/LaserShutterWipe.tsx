import React from "react";
import { AbsoluteFill } from "remotion";

export interface LaserShutterWipeProps {
  progress: number; // 0 to 1
  color?: string;
}

export const LaserShutterWipe: React.FC<LaserShutterWipeProps> = ({
  progress,
  color = "#38bdf8",
}) => {
  if (progress <= 0 || progress >= 1) return null;

  const shutterTopHeight = `${progress * 50}%`;
  const shutterBottomHeight = `${progress * 50}%`;
  const laserOpacity = Math.sin(progress * Math.PI);

  return (
    <AbsoluteFill style={{ pointerEvents: "none", zIndex: 900 }}>
      {/* Top Shutter Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: shutterTopHeight,
          backgroundColor: "#030712",
          borderBottom: `3px solid ${color}`,
          boxShadow: `0 8px 30px ${color}`,
        }}
      />

      {/* Bottom Shutter Panel */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: shutterBottomHeight,
          backgroundColor: "#030712",
          borderTop: `3px solid ${color}`,
          boxShadow: `0 -8px 30px ${color}`,
        }}
      />

      {/* Center Laser Flare */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: 4,
          transform: "translateY(-50%)",
          backgroundColor: "#ffffff",
          boxShadow: `0 0 25px 8px ${color}`,
          opacity: laserOpacity,
        }}
      />
    </AbsoluteFill>
  );
};

