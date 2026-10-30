import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

interface AnalyticalPrecisionSpaceProps {
  camera?: CameraPosition;
}

export const AnalyticalPrecisionSpace: React.FC<AnalyticalPrecisionSpaceProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Gentle analytical pulses
  const emeraldPulse = 0.2 + Math.sin(frame * 0.07) * 0.05;
  const cyanPulse = 0.16 + Math.sin(frame * 0.05 + 1.2) * 0.04;

  // Slow subtle rotation for the outer calibration ring
  const ringRotation = (frame * 0.15) % 360;

  // Grid shift calculation
  const gridShiftX = ((-camX * 0.18) + Math.sin(frame * 0.02) * 10) % 50;
  const gridShiftY = ((-camY * 0.18) + (frame * 0.3)) % 50;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02120e", // Deep Obsidian Emerald
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
        {/* Layer 1: Ambient Analytical Nebulae */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1100,
            height: 1100,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: emeraldPulse * 3.8,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            height: 1200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 75%)",
            filter: "blur(120px)",
            opacity: cyanPulse * 3.8,
          }}
        />

        {/* Layer 2: Precision Dot Grid */}
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
              id="precisionGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              <circle cx="25" cy="25" r="1.2" fill="#10b981" fillOpacity="0.8" />
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.6"
                strokeOpacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#precisionGrid)" />
        </svg>

        {/* Layer 3: Concentric Precision Calibration Rings (Centered at 50% 50%) */}
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
            <line x1="-380" y1="0" x2="380" y2="0" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 6" />
            <line x1="0" y1="-380" x2="0" y2="380" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 6" />

            {/* Inner Precision Ring 1 */}
            <circle cx="0" cy="0" r="180" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25" />

            {/* Middle Dashed Ring 2 */}
            <circle
              cx="0"
              cy="0"
              r="340"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeOpacity="0.35"
              strokeDasharray="12 8"
              transform={`rotate(${ringRotation})`}
            />

            {/* Outer Calibration Ring 3 with Tick Marks */}
            <circle
              cx="0"
              cy="0"
              r="520"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeOpacity="0.2"
              strokeDasharray="4 16"
              transform={`rotate(${-ringRotation * 0.7})`}
            />

            {/* Outer Subtle Boundary Ring 4 */}
            <circle cx="0" cy="0" r="700" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.12" />
          </g>
        </svg>

        {/* Layer 4: Precision Axis Coordinate Labels */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 50px",
            boxSizing: "border-box",
            opacity: 0.35,
            fontFamily: "monospace",
            fontSize: 10,
            color: "#10b981",
          }}
        >
          <span>ENGINEERING // FILTER MATRIX</span>
          <span>CALIBRATION: ACTIVE</span>
          <span>PRECISION: 99.8%</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

