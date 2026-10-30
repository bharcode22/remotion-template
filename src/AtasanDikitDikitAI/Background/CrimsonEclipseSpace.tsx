import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

interface CrimsonEclipseSpaceProps {
  camera?: CameraPosition;
}

export const CrimsonEclipseSpace: React.FC<CrimsonEclipseSpaceProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Gentle breathing pulses for crimson eclipse lighting
  const crimsonPulse = 0.22 + Math.sin(frame * 0.09) * 0.06;
  const amberPulse = 0.16 + Math.sin(frame * 0.07 + 1.2) * 0.05;

  // Slow subtle rotation for eclipse halo ticks
  const haloRotation = (frame * 0.12) % 360;

  // Grid shift calculation
  const gridShiftX = ((-camX * 0.18) + Math.sin(frame * 0.02) * 10) % 45;
  const gridShiftY = ((-camY * 0.18) + (frame * 0.3)) % 45;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0305", // Deep Burgundy & Crimson Obsidian
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
        {/* Layer 1: Ambient Crimson & Amber Eclipse Nebulae */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            height: 1200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, rgba(239, 68, 68, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: crimsonPulse * 3.8,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1100,
            height: 1100,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 75%)",
            filter: "blur(120px)",
            opacity: amberPulse * 3.8,
          }}
        />

        {/* Layer 2: Technical Grid Pattern */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.22,
          }}
        >
          <defs>
            <pattern
              id="crimsonGrid"
              width="45"
              height="45"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              <circle cx="22.5" cy="22.5" r="1.2" fill="#ef4444" fillOpacity="0.75" />
              <path
                d="M 45 0 L 0 0 0 45"
                fill="none"
                stroke="#ef4444"
                strokeWidth="0.6"
                strokeOpacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crimsonGrid)" />
        </svg>

        {/* Layer 3: Concentric Eclipse Rings (Centered at 50% 50%) */}
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
            {/* Center Crosshairs */}
            <line x1="-380" y1="0" x2="380" y2="0" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 6" />
            <line x1="0" y1="-380" x2="0" y2="380" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 6" />

            {/* Inner Ring */}
            <circle cx="0" cy="0" r="220" fill="none" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" />

            {/* Middle Dashed Halo Ring */}
            <circle
              cx="0"
              cy="0"
              r="420"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeOpacity="0.3"
              strokeDasharray="10 8"
              transform={`rotate(${haloRotation})`}
            />

            {/* Outer Precision Ticked Ring */}
            <circle
              cx="0"
              cy="0"
              r="620"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeOpacity="0.18"
              strokeDasharray="4 16"
              transform={`rotate(${-haloRotation * 0.7})`}
            />
          </g>
        </svg>

        {/* Layer 4: Coordinate Labels */}
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
            color: "#ef4444",
          }}
        >
          <span>FINAL CONCLUSION // REALITY PARADOX</span>
          <span>SYSTEM STATE: VERDICT REACHED</span>
          <span>IMPACT: CRITICAL</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

