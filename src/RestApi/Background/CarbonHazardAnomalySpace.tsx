import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const CarbonHazardAnomalySpace: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle breathing pulse for hazard ambiance
  const hazardPulse = 1 + Math.sin(frame * 0.1) * 0.06;
  const alertOpacity = 0.18 + Math.sin(frame * 0.12) * 0.05;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0c0608",
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Amber & Crimson Hazard Radial Aura */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${hazardPulse})`,
          width: 960,
          height: 960,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(239, 68, 68, 0.14) 45%, transparent 72%)",
          opacity: alertOpacity,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Carbon Micro-Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          backgroundImage: `
            linear-gradient(to right, rgba(245, 158, 11, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 158, 11, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.75,
        }}
      />

      {/* 3. Left Symmetrical Warning Guide Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(245, 158, 11, 0.35) 20%, rgba(239, 68, 68, 0.35) 80%, transparent)",
        }}
      />

      {/* 4. Right Symmetrical Warning Guide Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 80,
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(245, 158, 11, 0.35) 20%, rgba(239, 68, 68, 0.35) 80%, transparent)",
        }}
      />

      {/* 5. Center Symmetrical Hazard Crosshair Markers */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 28,
          height: 28,
          border: "1px solid rgba(245, 158, 11, 0.25)",
          borderRadius: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 28,
          height: 28,
          border: "1px solid rgba(245, 158, 11, 0.25)",
          borderRadius: 4,
        }}
      />
    </AbsoluteFill>
  );
};

