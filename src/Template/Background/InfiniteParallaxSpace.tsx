import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";
import { DEMO_STATIONS, TECH_COLORS } from "../constants";

interface InfiniteParallaxSpaceProps {
  camera: CameraPosition;
}

// Symmetrical Star Dust: 14 pairs mirrored across central axis (X = 540)
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

export const InfiniteParallaxSpace: React.FC<InfiniteParallaxSpaceProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  // 1. Subtle Symmetrical Zoom Synchronization
  const bgZoom = 1 + (camera.zoom - 1) * 0.35;

  // 2. Velocity-based motion streak calculation during vertical swoops
  const isTransitioning1 = frame >= 68 && frame <= 108;
  const isTransitioning2 = frame >= 168 && frame <= 208;
  const isTransitioning3 = frame >= 258 && frame <= 288;

  let motionStretch = 1.0;
  if (isTransitioning1) {
    const dist = Math.abs(frame - 88);
    motionStretch = interpolate(dist, [0, 20], [1.85, 1.0], { extrapolateRight: "clamp" });
  } else if (isTransitioning2) {
    const dist = Math.abs(frame - 188);
    motionStretch = interpolate(dist, [0, 20], [1.85, 1.0], { extrapolateRight: "clamp" });
  } else if (isTransitioning3) {
    const dist = Math.abs(frame - 273);
    motionStretch = interpolate(dist, [0, 15], [1.65, 1.0], { extrapolateRight: "clamp" });
  }

  // 3. Grid Vertical Shift (Centered on X = 540)
  const gridShiftY = (-camera.y * 0.26) % 90;

  // Wrap boundary for endless star dust
  const WRAP_HEIGHT = 2120;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: TECH_COLORS.bgDark,
        overflow: "hidden",
        pointerEvents: "none",
        transformOrigin: "540px 960px",
        transform: `scale(${bgZoom})`, // 100% Symmetrical upright (tilt = 0°)
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          LAYER 1: Symmetrical Station-Anchored Color Nebulae
          Each aura is perfectly centered along the vertical center axis
      ───────────────────────────────────────────────────────────── */}
      {DEMO_STATIONS.map((station) => {
        const nebY = 960 + (station.y - camera.y) * 0.16;

        return (
          <div
            key={station.id}
            style={{
              position: "absolute",
              top: nebY,
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1300,
              height: 1300,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${station.accentColor}30 0%, ${station.accentColor}12 45%, rgba(3, 7, 18, 0) 72%)`,
              filter: "blur(110px)",
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2: Symmetrical Cyber Isometric Floor Grid
          Centered at X = 540, perfectly aligned bilateral symmetry
      ───────────────────────────────────────────────────────────── */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.26,
        }}
      >
        <defs>
          <pattern
            id="symmetricalGrid"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(0, ${gridShiftY})`}
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
          LAYER 3: Symmetrical 3D Floor Horizon Plane
      ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translate(-50%, 0%) perspective(800px) rotateX(62deg)",
          transformOrigin: "bottom center",
          width: 1400,
          height: "60%",
          background:
            "linear-gradient(to top, rgba(6, 182, 212, 0.12) 0%, rgba(3, 7, 18, 0) 90%)",
          filter: "blur(20px)",
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          LAYER 4: Bilateral Symmetrical Star Dust Particles
          Every star has an exact symmetrical partner across the center
      ───────────────────────────────────────────────────────────── */}
      {STAR_PAIRS.map((pair, idx) => {
        const rawY = pair.by - camera.y * pair.speed;
        const posY = (((rawY % WRAP_HEIGHT) + WRAP_HEIGHT) % WRAP_HEIGHT) - 100;

        const leftX = 540 - pair.distFromCenter;
        const rightX = 540 + pair.distFromCenter;

        return (
          <React.Fragment key={idx}>
            {/* Left Star */}
            <div
              style={{
                position: "absolute",
                top: posY,
                left: leftX,
                width: pair.s,
                height: pair.s * motionStretch,
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
                width: pair.s,
                height: pair.s * motionStretch,
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

      {/* ─────────────────────────────────────────────────────────────
          LAYER 5: Symmetrical Companion Floating Parallax Rings
          Placed symmetrically on both flanks (Left 80px & Right 80px)
      ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate3d(0px, ${-camera.y * 1.3}px, 0px)`,
        }}
      >
        {/* Pair A: At Y: 1450 */}
        <div
          style={{
            position: "absolute",
            top: 1450,
            left: 80,
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "2px solid rgba(6, 182, 212, 0.35)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.2)",
            filter: "blur(5px)",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 1450,
            right: 80,
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "2px solid rgba(6, 182, 212, 0.35)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.2)",
            filter: "blur(5px)",
            opacity: 0.45,
          }}
        />

        {/* Pair B: At Y: 2750 */}
        <div
          style={{
            position: "absolute",
            top: 2750,
            left: 80,
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "2px solid rgba(139, 92, 246, 0.35)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
            filter: "blur(6px)",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 2750,
            right: 80,
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "2px solid rgba(139, 92, 246, 0.35)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
            filter: "blur(6px)",
            opacity: 0.45,
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 6: Symmetrical Vignette
      ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(3,7,18,0) 40%, rgba(3,7,18,0.85) 100%)",
        }}
      />
    </div>
  );
};
