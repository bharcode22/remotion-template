import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const CrimsonVerdictSpace: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle breathing pulse for dramatic verdict ambiance
  const verdictPulse = 1 + Math.sin(frame * 0.12) * 0.07;
  const verdictOpacity = 0.22 + Math.sin(frame * 0.15) * 0.06;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d0306",
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Burgundy & Crimson Verdict Radial Aura */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${verdictPulse})`,
          width: 980,
          height: 980,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(185, 28, 28, 0.14) 45%, transparent 72%)",
          opacity: verdictOpacity,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Micro-grid Texture */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          opacity: 0.8,
        }}
      />

      {/* 3. Left Symmetrical Crimson Guide Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.4) 20%, rgba(245, 158, 11, 0.3) 80%, transparent)",
        }}
      />

      {/* 4. Right Symmetrical Crimson Guide Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.4) 20%, rgba(245, 158, 11, 0.3) 80%, transparent)",
        }}
      />

      {/* 5. Center Symmetrical Crosshairs */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 28,
          height: 28,
          border: "1px solid rgba(239, 68, 68, 0.25)",
          borderRadius: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "88%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 28,
          height: 28,
          border: "1px solid rgba(239, 68, 68, 0.25)",
          borderRadius: 4,
        }}
      />
    </AbsoluteFill>
  );
};

