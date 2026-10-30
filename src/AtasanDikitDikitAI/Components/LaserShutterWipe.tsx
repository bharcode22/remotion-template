import React from "react";
import { AbsoluteFill } from "remotion";

interface LaserShutterWipeProps {
  progress: number; // 0 to 1
  scene1: React.ReactNode;
  scene2: React.ReactNode;
}

export const LaserShutterWipe: React.FC<LaserShutterWipeProps> = ({
  progress,
  scene1,
  scene2,
}) => {
  // If transition hasn't started, render pure Scene 1
  if (progress <= 0) {
    return <AbsoluteFill>{scene1}</AbsoluteFill>;
  }

  // If transition finished, render pure Scene 2
  if (progress >= 1) {
    return <AbsoluteFill>{scene2}</AbsoluteFill>;
  }

  // Laser blade vertical position in pixels
  const laserY = progress * 1920;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Underlying Scene 1 */}
      <AbsoluteFill>{scene1}</AbsoluteFill>

      {/* 2. Scene 2 Revealed from Top to Bottom behind the laser */}
      <AbsoluteFill
        style={{
          clipPath: `inset(0 0 ${Math.max(0, (1 - progress) * 100)}% 0)`,
        }}
      >
        {scene2}
      </AbsoluteFill>

      {/* 3. The High-Tech Laser Shutter Blade */}
      <div
        style={{
          position: "absolute",
          top: laserY - 2,
          left: 0,
          width: 1080,
          height: 4,
          background: "linear-gradient(90deg, #38bdf8 0%, #f59e0b 50%, #ef4444 100%)",
          boxShadow:
            "0 0 20px #f59e0b, 0 0 45px rgba(245, 158, 11, 0.8), 0 0 80px rgba(56, 189, 248, 0.6)",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        {/* Trailing Optical Glow */}
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 0,
            width: "100%",
            height: 28,
            background:
              "linear-gradient(to bottom, rgba(245, 158, 11, 0) 0%, rgba(245, 158, 11, 0.25) 50%, rgba(245, 158, 11, 0) 100%)",
            filter: "blur(6px)",
          }}
        />

        {/* Center High-Energy Spark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 220,
            height: 10,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 25px #ffffff, 0 0 50px #38bdf8",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

