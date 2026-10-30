import React from "react";
import { AbsoluteFill } from "remotion";

interface QuantumDiagonalBeamWipeProps {
  progress: number; // 0 to 1
  sceneFrom: React.ReactNode;
  sceneTo: React.ReactNode;
}

export const QuantumDiagonalBeamWipe: React.FC<QuantumDiagonalBeamWipeProps> = ({
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

  // Angular diagonal clip path coordinates
  const topX = progress * 220; // 0% to 220%
  const bottomX = progress * 220 - 120; // -120% to 100%

  // Diagonal beam line center position in pixels
  const beamCenterX = (progress * 220 - 60) * 10.8; // px

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Underlying Scene 4 */}
      <AbsoluteFill>{sceneFrom}</AbsoluteFill>

      {/* 2. Incoming Scene 5 Revealed Diagonally */}
      <AbsoluteFill
        style={{
          clipPath: `polygon(0 0, ${topX}% 0, ${bottomX}% 100%, 0 100%)`,
        }}
      >
        {sceneTo}
      </AbsoluteFill>

      {/* 3. High-Energy Diagonal Laser Beam */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: beamCenterX - 2,
          width: 5,
          height: 2400,
          transform: "rotate(-28deg)",
          transformOrigin: "center center",
          background: "linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, #06b6d4 100%)",
          boxShadow:
            "0 0 25px #06b6d4, 0 0 50px rgba(139, 92, 246, 0.8), 0 0 90px rgba(6, 182, 212, 0.6)",
          zIndex: 60,
          pointerEvents: "none",
        }}
      >
        {/* Trailing Optical Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: -14,
            width: 32,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(6, 182, 212, 0) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(6, 182, 212, 0) 100%)",
            filter: "blur(6px)",
          }}
        />

        {/* Center Spark Node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 14,
            height: 220,
            borderRadius: 7,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 30px #ffffff, 0 0 60px #06b6d4",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

