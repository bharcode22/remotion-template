import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { TECH_COLORS } from "../constants";

export const NeonFiberCable: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // 🎛️ CABLE LIFECYCLE (Hanya untuk Scene 1 -> 2; Scene 3 & 4 TANPA GARIS):
  // - Frames 0 - 68   : Ambient ready state at Scene 1 (Opacity 0.45)
  // - Frames 68 - 100 : TRANSISI 1 (DENGAN GARIS) — Laser swoop Y: 0 -> 1300
  // - Frames 100 - 160: Connected at Scene 2 (Cyan energy lock)
  // - Frames 160 - 180: Disconnects & dissolves into 0 opacity (TANPA GARIS!)
  // - Frames 180 - 300: ZERO OPACITY — Scene 3 & 4 are pure lineless lateral glides
  // =========================================================================

  const cableOpacity = interpolate(
    frame,
    [0, 50, 68, 100, 160, 180],
    [0.4, 0.45, 1.0, 1.0, 0.8, 0.0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // If completely dissolved, don't render to optimize GPU
  if (cableOpacity < 0.01) {
    return null;
  }

  // Segment 1 (Scene 1 to Scene 2): S-curve path with wide dynamic sweep (X: 840)
  const segment1Path = `
    M 540 600
    C 540 760, 540 860, 540 960
    C 540 1320, 840 1440, 840 1610
    C 840 1780, 540 2120, 540 2260
  `;

  // Dynamic Movement Physics:
  const surgeFactor = Math.sin(frame * 0.14) * 30;
  const dashOffsetFast = -(frame * 18 + surgeFactor) % 180;
  const dashOffsetSurge = -(frame * 8) % 320;
  const auraGlowOpacity = (0.35 + Math.sin(frame * 0.2) * 0.1) * cableOpacity;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 2500,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "visible",
        opacity: cableOpacity,
      }}
    >
      <defs>
        <linearGradient id="hybridFiberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={TECH_COLORS.calmGreen} stopOpacity="0.9" />
          <stop offset="50%" stopColor={TECH_COLORS.blueprintCyan} stopOpacity="0.95" />
          <stop offset="100%" stopColor={TECH_COLORS.accentPurple} stopOpacity="0.85" />
        </linearGradient>

        <filter id="hybridCableGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. Outer Diffuse Aura (Breathing Glow) */}
      <path
        d={segment1Path}
        fill="none"
        stroke="url(#hybridFiberGrad)"
        strokeWidth="32"
        strokeLinecap="round"
        opacity={auraGlowOpacity}
        filter="url(#hybridCableGlow)"
      />

      {/* 2. Core Translucent Glass Sheath */}
      <path
        d={segment1Path}
        fill="none"
        stroke="url(#hybridFiberGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity={0.5 * cableOpacity}
      />

      {/* 3. High-Frequency Laser Packets (Fast moving light beads) */}
      <path
        d={segment1Path}
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeDasharray="18 42"
        strokeDashoffset={dashOffsetFast}
        strokeLinecap="round"
        filter="url(#hybridCableGlow)"
        opacity={0.9 * cableOpacity}
      />

      {/* 4. Heavy Data Packet Surge (Thick bright dashes) */}
      <path
        d={segment1Path}
        fill="none"
        stroke={frame < 100 ? "#34d399" : "#38bdf8"}
        strokeWidth="6"
        strokeDasharray="40 120"
        strokeDashoffset={dashOffsetSurge}
        strokeLinecap="round"
        filter="url(#hybridCableGlow)"
        opacity={0.85 * cableOpacity}
      />

      {/* 5. Terminal Connection Node at Scene 1 (540, 960) */}
      {frame <= 100 && (
        <g transform="translate(540, 960)" opacity={cableOpacity}>
          <circle r="14" fill="#10b981" opacity="0.3" filter="url(#hybridCableGlow)" />
          <circle r="7" fill="#10b981" />
          <circle r="3" fill="#ffffff" />
        </g>
      )}

      {/* 6. Terminal Connection Node at Scene 2 (540, 2260) */}
      {frame >= 70 && (
        <g transform="translate(540, 2260)" opacity={cableOpacity}>
          <circle r="16" fill="#06b6d4" opacity="0.35" filter="url(#hybridCableGlow)" />
          <circle r="8" fill="#06b6d4" />
          <circle r="3.5" fill="#ffffff" />
        </g>
      )}
    </svg>
  );
};
