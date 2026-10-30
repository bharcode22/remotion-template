import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

interface HazardCarbonSpaceProps {
  camera?: CameraPosition;
}

export const HazardCarbonSpace: React.FC<HazardCarbonSpaceProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Pulsing amber warning emergency lighting
  const amberPulse = 0.22 + Math.sin(frame * 0.1) * 0.08;
  const redPulse = 0.16 + Math.sin(frame * 0.08 + 1.5) * 0.05;

  // Subtle industrial drift
  const gridShiftX = ((-camX * 0.18) + Math.sin(frame * 0.02) * 12) % 40;
  const gridShiftY = ((-camY * 0.18) + (frame * 0.35)) % 40;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0c0804", // Deep Industrial Carbon Obsidian
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* 1. Overscanned World Space Canvas */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1800,
          height: 2600,
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Layer 1: Ambient Hazard Nebulae (Amber Top-Center, Red Bottom-Center) */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            height: 1200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.24) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: amberPulse * 3.6,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1300,
            height: 1300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 75%)",
            filter: "blur(120px)",
            opacity: redPulse * 3.6,
          }}
        />

        {/* Layer 2: Industrial Technical Grid Pattern with Hazard Dots */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.24,
          }}
        >
          <defs>
            <pattern
              id="hazardGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              {/* Dot marker at intersection */}
              <circle cx="20" cy="20" r="1.2" fill="#f59e0b" fillOpacity="0.8" />
              {/* Crosshair accents */}
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="0.7"
                strokeOpacity="0.18"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hazardGrid)" />
        </svg>

        {/* Layer 3: Warning Technical Boundary Lines */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <g transform="translate(900, 1300)">
            {/* Center Warning Diamond Frame */}
            <polygon
              points="0,-450 450,0 0,450 -450,0"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeOpacity="0.16"
              strokeDasharray="8 8"
            />
            {/* Inner Warning Ring */}
            <circle
              cx="0"
              cy="0"
              r="380"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              strokeOpacity="0.18"
              strokeDasharray="4 12"
            />
          </g>
        </svg>

        {/* Layer 4: Top Industrial Status Stamp */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 50px",
            boxSizing: "border-box",
            opacity: 0.35,
            fontFamily: "monospace",
            fontSize: 10,
            color: "#f59e0b",
          }}
        >
          <span>ALERT // NON-TECH INTERFERENCE</span>
          <span>FRICTION INDEX: CRITICAL</span>
          <span>OVERREACH: DETECTED</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

