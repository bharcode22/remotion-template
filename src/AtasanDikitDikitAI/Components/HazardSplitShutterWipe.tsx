import React from "react";
import { AbsoluteFill } from "remotion";

interface HazardSplitShutterWipeProps {
  progress: number; // 0 to 1
  sceneFrom: React.ReactNode;
  sceneTo: React.ReactNode;
}

export const HazardSplitShutterWipe: React.FC<HazardSplitShutterWipeProps> = ({
  progress,
  sceneFrom,
  sceneTo,
}) => {
  // If transition hasn't started, render sceneFrom
  if (progress <= 0) {
    return <AbsoluteFill>{sceneFrom}</AbsoluteFill>;
  }

  // If transition finished, render sceneTo
  if (progress >= 1) {
    return <AbsoluteFill>{sceneTo}</AbsoluteFill>;
  }

  // Inset percentage from each side (50% down to 0%)
  const sideInsetPercent = Math.max(0, (1 - progress) * 50);

  // Pixel coordinates for the two vertical laser shutter blades
  const leftBladeX = (0.5 - progress * 0.5) * 1080;
  const rightBladeX = (0.5 + progress * 0.5) * 1080;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Underlying Scene 3 */}
      <AbsoluteFill>{sceneFrom}</AbsoluteFill>

      {/* 2. Incoming Scene 4 Revealed Horizontally from Center to Sides */}
      <AbsoluteFill
        style={{
          clipPath: `inset(0 ${sideInsetPercent}% 0 ${sideInsetPercent}%)`,
        }}
      >
        {sceneTo}
      </AbsoluteFill>

      {/* 3. Dual Vertical Laser Shutter Blades */}
      {/* Left Laser Blade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: leftBladeX - 2,
          width: 4,
          height: 1920,
          background: "linear-gradient(180deg, #ef4444 0%, #f59e0b 50%, #ef4444 100%)",
          boxShadow:
            "0 0 20px #f59e0b, 0 0 45px rgba(245, 158, 11, 0.8), 0 0 80px rgba(239, 68, 68, 0.6)",
          zIndex: 60,
          pointerEvents: "none",
        }}
      >
        {/* Optical Spark Node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 10,
            height: 180,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 25px #ffffff, 0 0 45px #f59e0b",
          }}
        />
      </div>

      {/* Right Laser Blade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: rightBladeX - 2,
          width: 4,
          height: 1920,
          background: "linear-gradient(180deg, #ef4444 0%, #f59e0b 50%, #ef4444 100%)",
          boxShadow:
            "0 0 20px #f59e0b, 0 0 45px rgba(245, 158, 11, 0.8), 0 0 80px rgba(239, 68, 68, 0.6)",
          zIndex: 60,
          pointerEvents: "none",
        }}
      >
        {/* Optical Spark Node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 10,
            height: 180,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 25px #ffffff, 0 0 45px #f59e0b",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

