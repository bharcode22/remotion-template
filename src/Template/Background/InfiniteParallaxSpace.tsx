import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
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

/**
 * Continuous modulo wrap helper to keep particles smoothly cycling
 * inside a defined range [min, max] without jumping or disappearing.
 */
const wrap = (val: number, min: number, max: number): number => {
  const range = max - min;
  return ((((val - min) % range) + range) % range) + min;
};

export const InfiniteParallaxSpace: React.FC<InfiniteParallaxSpaceProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  // 1. Overscanned Parallax Scale:
  // Guaranteed to stay >= 1.05 even when camera.zoom = 0.90, so the background
  // NEVER shrinks below full screen coverage!
  const bgScale = Math.max(1.05, 1.15 + (camera.zoom - 1) * 0.35);

  // 2. Velocity-based motion streak calculation
  const isTransitioning1 = frame >= 68 && frame <= 100; // Vertical plunge
  const isTransitioning2 = frame >= 165 && frame <= 200; // Horizontal slide to right
  const isTransitioning3 = frame >= 255 && frame <= 285; // Horizontal slide to right

  let motionStretch = 1.0;
  if (isTransitioning1) {
    const dist = Math.abs(frame - 84);
    motionStretch = interpolate(dist, [0, 16], [1.85, 1.0], { extrapolateRight: "clamp" });
  } else if (isTransitioning2) {
    const dist = Math.abs(frame - 180);
    motionStretch = interpolate(dist, [0, 16], [1.85, 1.0], { extrapolateRight: "clamp" });
  } else if (isTransitioning3) {
    const dist = Math.abs(frame - 270);
    motionStretch = interpolate(dist, [0, 15], [1.75, 1.0], { extrapolateRight: "clamp" });
  }

  // 3. Grid Vertical & Horizontal 2D Shift (Infinite pattern repeat)
  const gridShiftX = (-camera.x * 0.22) % 90;
  const gridShiftY = (-camera.y * 0.22) % 90;

  // Overscanned canvas dimensions (larger than 1080x1920 viewport to guarantee zero gaps)
  const CANVAS_WIDTH = 1600;
  const CANVAS_HEIGHT = 2600;
  const CENTER_X = CANVAS_WIDTH / 2; // 800
  const CENTER_Y = CANVAS_HEIGHT / 2; // 1300

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TECH_COLORS.bgDark,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Overscanned Parallax World Canvas (Never exposes edges or gaps) */}
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
        {/* ─────────────────────────────────────────────────────────────
            LAYER 1: Symmetrical Station-Anchored Color Nebulae
            Each aura tracks in 2D space (X and Y) with camera
        ───────────────────────────────────────────────────────────── */}
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
                background: `radial-gradient(circle, ${station.accentColor}35 0%, ${station.accentColor}14 45%, rgba(3, 7, 18, 0) 72%)`,
                filter: "blur(120px)",
                pointerEvents: "none",
              }}
            />
          );
        })}

        {/* ─────────────────────────────────────────────────────────────
            LAYER 2: Cyber Isometric Floor Grid (Overscanned 2D Shift)
        ───────────────────────────────────────────────────────────── */}
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
              id="symmetricalGrid"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${gridShiftX}, ${gridShiftY})`}
            >
              {/* Grid Line */}
              <path
                d="M 90 0 L 0 0 0 90"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              {/* Center Intersection Node */}
              <circle cx="0" cy="0" r="2" fill="#10b981" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#symmetricalGrid)" />
        </svg>

        {/* ─────────────────────────────────────────────────────────────
            LAYER 3: Symmetrical 3D Floor Horizon Plane (Wide 3600px Horizon)
        ───────────────────────────────────────────────────────────── */}
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
              "linear-gradient(to top, rgba(6, 182, 212, 0.14) 0%, rgba(3, 7, 18, 0) 90%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        {/* ─────────────────────────────────────────────────────────────
            LAYER 4: Bilateral Symmetrical Star Dust Particles (Continuous 2D Parallax)
        ───────────────────────────────────────────────────────────── */}
        {STAR_PAIRS.map((pair, idx) => {
          // Y wrapping across canvas height (with bleed margin)
          const driftY = -camera.y * pair.speed;
          const posY = wrap(pair.by + driftY, -100, CANVAS_HEIGHT + 100);

          // X continuous drift and wrapping
          const driftX = -camera.x * pair.speed * 0.35;
          const baseLeftX = CENTER_X - pair.distFromCenter;
          const baseRightX = CENTER_X + pair.distFromCenter;

          const leftX = wrap(baseLeftX + driftX, -150, CANVAS_WIDTH + 150);
          const rightX = wrap(baseRightX + driftX, -150, CANVAS_WIDTH + 150);

          // Motion stretch direction: vertical for plunge, horizontal for lateral pan
          const isHorizontalMove = isTransitioning2 || isTransitioning3;
          const starWidth = isHorizontalMove ? pair.s * motionStretch : pair.s;
          const starHeight = isTransitioning1 ? pair.s * motionStretch : pair.s;

          return (
            <React.Fragment key={idx}>
              {/* Left Star */}
              <div
                style={{
                  position: "absolute",
                  top: posY,
                  left: leftX,
                  width: starWidth,
                  height: starHeight,
                  borderRadius: motionStretch > 1.2 ? 2 : "50%",
                  backgroundColor: pair.color,
                  boxShadow: `0 0 8px ${pair.glow}`,
                  opacity: motionStretch > 1.2 ? 0.9 : 0.6,
                  transformOrigin: "center center",
                }}
              />
              {/* Symmetrical Right Star */}
              <div
                style={{
                  position: "absolute",
                  top: posY,
                  left: rightX,
                  width: starWidth,
                  height: starHeight,
                  borderRadius: motionStretch > 1.2 ? 2 : "50%",
                  backgroundColor: pair.color,
                  boxShadow: `0 0 8px ${pair.glow}`,
                  opacity: motionStretch > 1.2 ? 0.9 : 0.6,
                  transformOrigin: "center center",
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
