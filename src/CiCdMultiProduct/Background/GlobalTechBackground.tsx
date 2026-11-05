import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { MULTI_COLORS } from "../constants";

export const GlobalTechBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle ambient breathing
  const pulse1 = Math.sin((frame * Math.PI) / 60) * 0.5 + 0.5;
  const pulse2 = Math.cos((frame * Math.PI) / 45) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: MULTI_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Ambient Radial Glows */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(252, 109, 38, ${0.08 + pulse1 * 0.04}) 0%, transparent 70%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(56, 189, 248, ${0.1 + pulse2 * 0.05}) 0%, transparent 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(107, 79, 187, 0.09) 0%, transparent 75%)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Cybernetic Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 40%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Subtle Concentric Global Radar Rings */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 1920"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.25,
        }}
      >
        <circle
          cx="540"
          cy="960"
          r="420"
          stroke="rgba(56, 189, 248, 0.15)"
          strokeWidth="1"
          strokeDasharray="6 8"
          fill="none"
        />
        <circle
          cx="540"
          cy="960"
          r="680"
          stroke="rgba(252, 109, 38, 0.12)"
          strokeWidth="1"
          strokeDasharray="8 12"
          fill="none"
        />
      </svg>
    </AbsoluteFill>
  );
};

