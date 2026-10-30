import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";
import { DEMO_STATIONS, TECH_COLORS } from "../constants";

interface InfiniteParallaxSpaceProps {
  camera: CameraPosition;
}

// Symmetrical Star Dust: 14 pairs mirrored across central axis
const STAR_PAIRS = [
  { distFromCenter: 440, by: 160, s: 3.5, color: "#34d399", glow: "#34d399", speed: 0.35 },
  { distFromCenter: 280, by: 310, s: 2.5, color: "#38bdf8", glow: "#38bdf8", speed: 0.42 },
  { distFromCenter: 480, by: 490, s: 4.0, color: "#a78bfa", glow: "#a78bfa", speed: 0.48 },
  { distFromCenter: 180, by: 680, s: 3.0, color: "#34d399", glow: "#34d399", speed: 0.38 },
  { distFromCenter: 360, by: 850, s: 4.5, color: "#f59e0b", glow: "#f59e0b", speed: 0.45 },
  { distFromCenter: 460, by: 1040, s: 3.0, color: "#38bdf8", glow: "#38bdf8", speed: 0.40 },
  { distFromCenter: 240, by: 1220, s: 4.0, color: "#a78bfa", glow: "#a78bfa", speed: 0.46 },
  { distFromCenter: 420, by: 1420, s: 2.5, color: "#34d399", glow: "#34d399", speed: 0.36 },
  { distFromCenter: 160, by: 1610, s: 4.5, color: "#f59e0b", glow: "#f59e0b", speed: 0.50 },
  { distFromCenter: 380, by: 1790, s: 3.0, color: "#38bdf8", glow: "#38bdf8", speed: 0.42 },
  { distFromCenter: 470, by: 1980, s: 3.5, color: "#a78bfa", glow: "#a78bfa", speed: 0.44 },
  { distFromCenter: 260, by: 2160, s: 4.0, color: "#34d399", glow: "#34d399", speed: 0.38 },
  { distFromCenter: 440, by: 2350, s: 2.5, color: "#38bdf8", glow: "#38bdf8", speed: 0.48 },
  { distFromCenter: 190, by: 2540, s: 4.5, color: "#f59e0b", glow: "#f59e0b", speed: 0.40 },
];

const wrap = (val: number, min: number, max: number): number => {
  const range = max - min;
  return ((((val - min) % range) + range) % range) + min;
};

export const InfiniteParallaxSpace: React.FC<InfiniteParallaxSpaceProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  // Overscanned Parallax Scale: Guaranteed >= 1.05
  const bgScale = Math.max(1.05, 1.15 + (camera.zoom - 1) * 0.35);

  // Grid shift calculation
  const gridShiftX = (-camera.x * 0.22) % 90;
  const gridShiftY = (-camera.y * 0.22) % 90;

  // Overscanned dimensions
  const CANVAS_WIDTH = 1600;
  const CANVAS_HEIGHT = 2600;
  const CENTER_X = CANVAS_WIDTH / 2;
  const CENTER_Y = CANVAS_HEIGHT / 2;

  // Gentle neural ambient pulse
  const pulseIntensity = 0.25 + Math.sin(frame * 0.08) * 0.05;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TECH_COLORS.bgDark,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `translate(-50%, -50%) scale(${bgScale})`,
          transformOrigin: "center center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* LAYER 1: Symmetrical Station Nebulae */}
        {DEMO_STATIONS.map((station) => {
          const nebX = CENTER_X + (station.x - camera.x) * 0.18;
          const nebY = CENTER_Y + (station.y - camera.y) * 0.16;

          return (
            <div
              key={station.id}
              style={{
                position: "absolute",
                top: nebY,
                left: nebX,
                transform: "translate(-50%, -50%)",
                width: 1500,
                height: 1500,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${station.accentColor}35 0%, ${TECH_COLORS.aiPurple}18 45%, rgba(3, 7, 18, 0) 72%)`,
                filter: "blur(120px)",
                opacity: pulseIntensity * 3,
                pointerEvents: "none",
              }}
            />
          );
        })}

        {/* LAYER 2: Isometric Cyber Grid */}
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
              id="aiGrid"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              <path
                d="M 90 0 L 0 0 0 90"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <circle cx="0" cy="0" r="2" fill="#10b981" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aiGrid)" />
        </svg>

        {/* LAYER 3: 3D Horizon Plane (Wide 3600px) */}
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "50%",
            transform: "translate(-50%, 0%) perspective(800px) rotateX(62deg)",
            transformOrigin: "bottom center",
            width: 3600,
            height: "60%",
            background:
              "linear-gradient(to top, rgba(16, 185, 129, 0.12) 0%, rgba(3, 7, 18, 0) 90%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        {/* LAYER 4: Star Dust Particles */}
        {STAR_PAIRS.map((pair, idx) => {
          const driftY = -camera.y * pair.speed;
          const posY = wrap(pair.by + driftY, -100, CANVAS_HEIGHT + 100);

          const driftX = -camera.x * pair.speed * 0.35;
          const baseLeftX = CENTER_X - pair.distFromCenter;
          const baseRightX = CENTER_X + pair.distFromCenter;

          const leftX = wrap(baseLeftX + driftX, -150, CANVAS_WIDTH + 150);
          const rightX = wrap(baseRightX + driftX, -150, CANVAS_WIDTH + 150);

          return (
            <React.Fragment key={idx}>
              <div
                style={{
                  position: "absolute",
                  top: posY,
                  left: leftX,
                  width: pair.s,
                  height: pair.s,
                  borderRadius: "50%",
                  backgroundColor: pair.color,
                  boxShadow: `0 0 8px ${pair.glow}`,
                  opacity: 0.65,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: posY,
                  left: rightX,
                  width: pair.s,
                  height: pair.s,
                  borderRadius: "50%",
                  backgroundColor: pair.color,
                  boxShadow: `0 0 8px ${pair.glow}`,
                  opacity: 0.65,
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

