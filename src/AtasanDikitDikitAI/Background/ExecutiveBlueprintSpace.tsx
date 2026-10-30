import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";
import { TECH_COLORS } from "../constants";

interface ExecutiveBlueprintSpaceProps {
  camera?: CameraPosition;
}

export const ExecutiveBlueprintSpace: React.FC<ExecutiveBlueprintSpaceProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Subtle ambient pulse for executive lighting
  const amberPulse = 0.18 + Math.sin(frame * 0.08) * 0.05;
  const indigoPulse = 0.16 + Math.sin(frame * 0.06 + 1) * 0.04;

  // Parallax grid drift: subtle parallax scrolling when camera slides horizontally
  const gridShiftX = ((-camX * 0.22) + Math.sin(frame * 0.02) * 15) % 60;
  const gridShiftY = ((-camY * 0.22) + (frame * 0.4)) % 60;

  // Parallax nebulae offset
  const nebulaShiftX = -camX * 0.14;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TECH_COLORS.bgBlueprint,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* 1. Overscanned World Canvas with Parallax Horizontal Shift */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 2200,
          height: 2600,
          transform: `translate(calc(-50% + ${nebulaShiftX}px), -50%)`,
          transformOrigin: "center center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Layer 1: Ambient Executive Nebulae (Amber left, Indigo right) */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            width: 1300,
            height: 1300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: amberPulse * 4,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "65%",
            transform: "translate(-50%, -50%)",
            width: 1400,
            height: 1400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 75%)",
            filter: "blur(120px)",
            opacity: indigoPulse * 4,
          }}
        />

        {/* Layer 2: Architectural Blueprint Grid with Crosshairs */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.28,
          }}
        >
          <defs>
            <pattern
              id="blueprintGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              {/* Grid Lines */}
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
              {/* Crosshair + Node at intersections */}
              <path
                d="M -4 0 L 4 0 M 0 -4 L 0 4"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeOpacity="0.65"
              />
              <circle cx="0" cy="0" r="1.5" fill="#38bdf8" fillOpacity="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
        </svg>

        {/* Layer 3: Technical Blueprint Ruler Marks */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 30,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 40px",
            boxSizing: "border-box",
            opacity: 0.35,
          }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  width: 1,
                  height: i % 3 === 0 ? 14 : 7,
                  backgroundColor: "#38bdf8",
                }}
              />
              {i % 3 === 0 && (
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: "monospace",
                    color: "#38bdf8",
                  }}
                >
                  X:0{i * 2}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
