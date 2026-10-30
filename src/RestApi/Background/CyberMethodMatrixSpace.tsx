import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export interface CyberMethodMatrixSpaceProps {
  cameraX?: number;
}

export const CyberMethodMatrixSpace: React.FC<CyberMethodMatrixSpaceProps> = ({
  cameraX = 0,
}) => {
  const frame = useCurrentFrame();

  // Vertical drift of circuit pulses
  const pulseY1 = (frame * 3.5) % 900;
  const pulseY2 = ((frame * 3.5) + 450) % 900;

  // Subtle parallax shift
  const parallaxX = -cameraX * 0.12;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#04081c",
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Indigo & Violet Radial Ambiance */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.22) 0%, rgba(14, 21, 54, 0.85) 60%, #04081c 100%)",
        }}
      />

      {/* 2. Cyber Circuit Dot Grid Matrix */}
      <div
        style={{
          position: "absolute",
          inset: -300,
          backgroundImage: `
            radial-gradient(circle, rgba(99, 102, 241, 0.2) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 96px 96px",
          transform: `translateX(${parallaxX}px)`,
          opacity: 0.85,
        }}
      />

      {/* 3. Left Symmetrical Protocol Bus Conduit (X: 100px) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 100,
          width: 3,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.4) 20%, rgba(56, 189, 248, 0.4) 80%, transparent)",
        }}
      >
        {/* Traveling data pulse */}
        <div
          style={{
            position: "absolute",
            top: pulseY1,
            left: -2,
            width: 7,
            height: 40,
            borderRadius: 4,
            background: "linear-gradient(to bottom, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 12px #38bdf8",
          }}
        />
      </div>

      {/* 4. Right Symmetrical Protocol Bus Conduit (X: right 100px) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 100,
          width: 3,
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.4) 20%, rgba(56, 189, 248, 0.4) 80%, transparent)",
        }}
      >
        {/* Traveling data pulse */}
        <div
          style={{
            position: "absolute",
            top: pulseY2,
            left: -2,
            width: 7,
            height: 40,
            borderRadius: 4,
            background: "linear-gradient(to bottom, transparent, #818cf8, transparent)",
            boxShadow: "0 0 12px #818cf8",
          }}
        />
      </div>

      {/* 5. Center Symmetrical Architectural Crosshair Guides */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 480,
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 480,
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent)",
        }}
      />
    </AbsoluteFill>
  );
};

