import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const CrimsonAlertSpace: React.FC = () => {
  const frame = useCurrentFrame();

  // Emergency alarm strobe rhythm
  const alertPulse = 1 + Math.sin(frame * 0.14) * 0.08;
  const alertOpacity = 0.26 + Math.sin(frame * 0.18) * 0.08;
  const strobeOpacity = 0.15 + Math.sin(frame * 0.3) * 0.08;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d0205",
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Burgundy & Crimson Alert Radial Aura */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${alertPulse})`,
          width: 980,
          height: 980,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.28) 0%, rgba(185, 28, 28, 0.15) 45%, transparent 72%)",
          opacity: alertOpacity,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Precision Alert Grid Texture */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.85,
        }}
      />

      {/* 3. Left Symmetrical Crimson Guide Ray */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.45) 20%, rgba(245, 158, 11, 0.3) 80%, transparent)",
        }}
      />

      {/* 4. Right Symmetrical Crimson Guide Ray */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.45) 20%, rgba(245, 158, 11, 0.3) 80%, transparent)",
        }}
      />

      {/* 5. Center Bilateral Axis */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 1,
          height: "100%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.25) 30%, rgba(239, 68, 68, 0.25) 70%, transparent)",
        }}
      />

      {/* 6. Top Emergency Strobe Flare */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 320,
          background:
            "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: strobeOpacity,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

