import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

interface StrategicNavySpaceProps {
  camera?: CameraPosition;
}

export const StrategicNavySpace: React.FC<StrategicNavySpaceProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Gentle ambient pulses for strategic lighting (Cyan & Violet)
  const cyanPulse = 0.2 + Math.sin(frame * 0.08) * 0.05;
  const violetPulse = 0.18 + Math.sin(frame * 0.06 + 1.2) * 0.05;

  // Parallax grid drift as camera slides across stations
  const gridShiftX = ((-camX * 0.22) + Math.sin(frame * 0.02) * 12) % 60;
  const gridShiftY = ((-camY * 0.22) + (frame * 0.35)) % 60;

  // Parallax nebulae offset
  const nebulaShiftX = -camX * 0.14;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050a18", // Deep Strategic Navy Obsidian
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
        {/* Layer 1: Ambient Strategic Nebulae (Cyan Left, Violet Right) */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            height: 1200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: cyanPulse * 3.8,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "65%",
            transform: "translate(-50%, -50%)",
            width: 1300,
            height: 1300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 75%)",
            filter: "blur(120px)",
            opacity: violetPulse * 3.8,
          }}
        />

        {/* Layer 2: Architectural Circuit Grid Pattern with Dependency Nodes */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.25,
          }}
        >
          <defs>
            <pattern
              id="circuitGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              {/* Circuit Track Lines */}
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              {/* Micro Circuit Branch */}
              <path
                d="M 30 0 L 30 30 L 60 30"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="0.6"
                strokeOpacity="0.3"
              />
              {/* Node at Junction */}
              <circle cx="30" cy="30" r="1.8" fill="#06b6d4" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#8b5cf6" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitGrid)" />
        </svg>

        {/* Layer 3: Technical Blueprint Ruler Marks */}
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
            color: "#06b6d4",
          }}
        >
          <span>SYSTEM ARCHITECTURE // AUDIT MATRIX</span>
          <span>IMPACT INDEX: 3 CRITICAL PILLARS</span>
          <span>MONITORING: ACTIVE</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

