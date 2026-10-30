import React from "react";
import { AbsoluteFill } from "remotion";

interface SolarFlareEclipseWipeProps {
  progress: number; // 0 to 1
  sceneFrom: React.ReactNode;
  sceneTo: React.ReactNode;
}

export const SolarFlareEclipseWipe: React.FC<SolarFlareEclipseWipeProps> = ({
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

  // Optical flash intensity peaked at midpoint
  const flashOpacity = Math.sin(progress * Math.PI);
  const clipPercent = Math.min(100, progress * 105);
  const ringRadius = progress * 1150;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Underlying Preceding Scene 5 */}
      <AbsoluteFill>{sceneFrom}</AbsoluteFill>

      {/* 2. Incoming Scene 6 Revealed from Center Outward */}
      <AbsoluteFill
        style={{
          clipPath: `circle(${clipPercent}% at 50% 50%)`,
        }}
      >
        {sceneTo}
      </AbsoluteFill>

      {/* 3. Optical Solar Flare Bloom Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.75) 0%, rgba(245, 158, 11, 0.4) 40%, rgba(239, 68, 68, 0.2) 70%, transparent 100%)",
          opacity: flashOpacity * 0.75,
          pointerEvents: "none",
          zIndex: 55,
        }}
      />

      {/* 4. Glowing Expanding Corona Ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: ringRadius * 2,
          height: ringRadius * 2,
          borderRadius: "50%",
          border: "3.5px solid #ef4444",
          boxShadow:
            "0 0 30px #ef4444, 0 0 65px rgba(245, 158, 11, 0.8), inset 0 0 25px rgba(239, 68, 68, 0.5)",
          pointerEvents: "none",
          zIndex: 60,
        }}
      />
    </AbsoluteFill>
  );
};

