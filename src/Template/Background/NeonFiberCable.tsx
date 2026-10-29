import React from "react";
import { useCurrentFrame } from "remotion";
import { TECH_COLORS } from "../constants";

const STATION_NODES = [
  { cx: 540, cy: 960, color: TECH_COLORS.calmGreen },
  { cx: 540, cy: 2260, color: TECH_COLORS.blueprintCyan },
  { cx: 540, cy: 3560, color: TECH_COLORS.accentPurple },
  { cx: 540, cy: 4760, color: TECH_COLORS.alertAmber },
];

export const NeonFiberCable: React.FC = () => {
  const frame = useCurrentFrame();

  // 1 Single Continuous Branch with Varied Movement & Asymmetric Curve Amplitudes:
  // - Segment 1: Enters straight into Station 1 (540, 960)
  // - Segment 2: Sweeps out into a wide panoramic right arc (X: 840) before diving into Station 2 (540, 2260)
  // - Segment 3: Kinks into a deep, tight left curve (X: 240) into Station 3 (540, 3560)
  // - Segment 4: Serpentine S-curve (X: 800) into Station 4 (540, 4760)
  // - Segment 5: Anchors cleanly down into the void
  const singleBranchPath = `
    M 540 600
    C 540 760, 540 860, 540 960
    C 540 1320, 840 1440, 840 1610
    C 840 1780, 540 2120, 540 2260
    C 540 2400, 240 2740, 240 2910
    C 240 3080, 540 3420, 540 3560
    C 540 3720, 800 3980, 800 4160
    C 800 4340, 540 4620, 540 4760
    C 540 4920, 540 5150, 540 5350
  `;

  // Varied Non-Linear Movement Physics:
  // 1. High-frequency packet stream with acceleration bursts
  const surgeFactor = Math.sin(frame * 0.12) * 35;
  const dashOffsetFast = -(frame * 16 + surgeFactor) % 180;

  // 2. Heavy data packet surge (slower, periodic cadence)
  const dashOffsetSurge = -(frame * 8) % 320;

  // 3. Dynamic breathing core aura
  const auraGlowOpacity = 0.3 + Math.sin(frame * 0.2) * 0.08;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 5500,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient id="singleFiberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={TECH_COLORS.calmGreen} stopOpacity="0.85" />
          <stop offset="35%" stopColor={TECH_COLORS.blueprintCyan} stopOpacity="0.9" />
          <stop offset="70%" stopColor={TECH_COLORS.accentPurple} stopOpacity="0.9" />
          <stop offset="100%" stopColor={TECH_COLORS.alertAmber} stopOpacity="0.85" />
        </linearGradient>

        <filter id="singleCableGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ─────────────────────────────────────────────────────────────
          1. Outer Diffuse Aura (Breathing Glow)
      ───────────────────────────────────────────────────────────── */}
      <path
        d={singleBranchPath}
        fill="none"
        stroke="url(#singleFiberGrad)"
        strokeWidth="16"
        strokeOpacity={auraGlowOpacity}
        filter="url(#singleCableGlow)"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. Solid Structural Inner Core
      ───────────────────────────────────────────────────────────── */}
      <path
        d={singleBranchPath}
        fill="none"
        stroke="rgba(255, 255, 255, 0.22)"
        strokeWidth="3.5"
      />

      {/* ─────────────────────────────────────────────────────────────
          3. Movement Layer A: Heavy Energy Packet Surges (Periodic)
      ───────────────────────────────────────────────────────────── */}
      <path
        d={singleBranchPath}
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeDasharray="60 260"
        strokeDashoffset={dashOffsetSurge}
        strokeLinecap="round"
        filter="url(#singleCableGlow)"
        strokeOpacity="0.8"
      />

      {/* ─────────────────────────────────────────────────────────────
          4. Movement Layer B: Fast Laser Pulse Stream (Non-Linear)
      ───────────────────────────────────────────────────────────── */}
      <path
        d={singleBranchPath}
        fill="none"
        stroke="#38bdf8"
        strokeWidth="5"
        strokeDasharray="28 110"
        strokeDashoffset={dashOffsetFast}
        strokeLinecap="round"
        filter="url(#singleCableGlow)"
      />

      {/* ─────────────────────────────────────────────────────────────
          5. Symmetrical Station Connector Anchor Nodes
      ───────────────────────────────────────────────────────────── */}
      {STATION_NODES.map((node, i) => {
        const pulseR = 18 + Math.sin(frame * 0.2 + i * 1.5) * 4;
        return (
          <g key={i}>
            {/* Outer Pulsing Ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={pulseR * 1.8}
              fill="none"
              stroke={node.color}
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />
            {/* Inner Glowing Node Core */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={pulseR}
              fill={node.color}
              fillOpacity="0.25"
              stroke={node.color}
              strokeWidth="2.5"
              filter="url(#singleCableGlow)"
            />
            {/* Central Pinpoint Spark */}
            <circle cx={node.cx} cy={node.cy} r={4.5} fill="#ffffff" />
          </g>
        );
      })}
    </svg>
  );
};
