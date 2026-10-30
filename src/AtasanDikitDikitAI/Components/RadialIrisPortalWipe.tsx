import React from "react";
import { AbsoluteFill } from "remotion";

interface RadialIrisPortalWipeProps {
  progress: number; // 0 to 1
  sceneFrom: React.ReactNode;
  sceneTo: React.ReactNode;
}

export const RadialIrisPortalWipe: React.FC<RadialIrisPortalWipeProps> = ({
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

  // Diagonal distance from center (540, 960) to corner: ~1100px
  const maxRadius = 1150;
  const currentRadius = progress * maxRadius;
  const clipPercent = Math.min(100, progress * 105);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Underlying Preceding Scene */}
      <AbsoluteFill>{sceneFrom}</AbsoluteFill>

      {/* 2. Incoming Scene Revealing from Center Outwards */}
      <AbsoluteFill
        style={{
          clipPath: `circle(${clipPercent}% at 50% 50%)`,
        }}
      >
        {sceneTo}
      </AbsoluteFill>

      {/* 3. High-Tech Glowing Energy Aperture Ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: currentRadius * 2,
          height: currentRadius * 2,
          borderRadius: "50%",
          border: "3.5px solid #10b981",
          boxShadow:
            "0 0 30px #10b981, 0 0 60px rgba(6, 182, 212, 0.8), inset 0 0 25px rgba(16, 185, 129, 0.4)",
          pointerEvents: "none",
          zIndex: 60,
        }}
      >
        {/* Soft Outer Optical Glow Ring */}
        <div
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            border: "1.5px solid rgba(6, 182, 212, 0.7)",
            filter: "blur(4px)",
          }}
        />

        {/* 4 Cardinal Calibration Nodes on the Portal Ring */}
        {/* Top Node */}
        <div
          style={{
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 15px #10b981",
          }}
        />
        {/* Bottom Node */}
        <div
          style={{
            position: "absolute",
            bottom: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 15px #10b981",
          }}
        />
        {/* Left Node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: -6,
            transform: "translateY(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 15px #06b6d4",
          }}
        />
        {/* Right Node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: -6,
            transform: "translateY(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 15px #06b6d4",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

