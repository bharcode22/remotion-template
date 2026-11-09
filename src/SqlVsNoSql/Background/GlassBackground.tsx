import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SQL_NOSQL_COLORS, SCENE_RANGES } from "../constants";
import { CameraPosition } from "../types";

interface GlassBackgroundProps {
  camera?: CameraPosition;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  // 1. Scene-aware Dynamic Color Lighting
  let primaryColor = SQL_NOSQL_COLORS.sqlCyan;
  let secondaryColor = SQL_NOSQL_COLORS.seniorAmber;
  let accentColor = SQL_NOSQL_COLORS.seniorGold;

  if (frame < SCENE_RANGES.scene1_hook.end) {
    // Scene 1: Typewriter Hook (Cyan Code + Amber Glow)
    primaryColor = SQL_NOSQL_COLORS.sqlCyan;
    secondaryColor = SQL_NOSQL_COLORS.seniorAmber;
    accentColor = SQL_NOSQL_COLORS.seniorGold;
  } else if (
    frame >= SCENE_RANGES.scene2_thinker.start &&
    frame < SCENE_RANGES.scene2_thinker.end
  ) {
    // Scene 2: Thinker "Berpikir Positif Saja... Hmmm Anu" (Amber Caution & Warning Red)
    primaryColor = SQL_NOSQL_COLORS.seniorAmber;
    secondaryColor = SQL_NOSQL_COLORS.errorRose;
    accentColor = SQL_NOSQL_COLORS.seniorGold;
  } else if (
    frame >= SCENE_RANGES.scene3_acronym.start &&
    frame < SCENE_RANGES.scene3_acronym.end
  ) {
    // Scene 3: Showdown (Dual Split Cyan vs Emerald)
    primaryColor = SQL_NOSQL_COLORS.sqlCyan;
    secondaryColor = SQL_NOSQL_COLORS.nosqlEmerald;
    accentColor = SQL_NOSQL_COLORS.sqlBlue;
  } else if (
    frame >= SCENE_RANGES.scene4_sql_structured.start &&
    frame < SCENE_RANGES.scene4_sql_structured.end
  ) {
    // Scene 4: SQL Relational (Deep Cyan & Precision Blue)
    primaryColor = SQL_NOSQL_COLORS.sqlCyan;
    secondaryColor = SQL_NOSQL_COLORS.sqlDeepBlue;
    accentColor = SQL_NOSQL_COLORS.sqlBlue;
  } else if (
    frame >= SCENE_RANGES.scene5_nosql_flexible.start &&
    frame < SCENE_RANGES.scene5_nosql_flexible.end
  ) {
    // Scene 5: NoSQL Document Store (Vibrant Emerald & Mint)
    primaryColor = SQL_NOSQL_COLORS.nosqlEmerald;
    secondaryColor = SQL_NOSQL_COLORS.nosqlMint;
    accentColor = SQL_NOSQL_COLORS.nosqlDarkGreen;
  } else {
    // Scene 6: Golden Rule Aurora (Gold & Aurora Fusion)
    primaryColor = SQL_NOSQL_COLORS.seniorGold;
    secondaryColor = SQL_NOSQL_COLORS.nosqlEmerald;
    accentColor = SQL_NOSQL_COLORS.sqlCyan;
  }

  // Camera Parallax Factor (Subtle depth displacement)
  const camX = camera?.x || 0;
  const camY = camera?.y || 0;
  const parallaxX = -camX * 0.35;
  const parallaxY = -camY * 0.35;

  // Drifting Math for Ambient Light Orbs with Parallax
  const drift1X = Math.sin((frame * Math.PI) / 140) * 70 + parallaxX * 0.8;
  const drift1Y = Math.cos((frame * Math.PI) / 120) * 55 + parallaxY * 0.8;
  const pulse1 = Math.sin((frame * Math.PI) / 80) * 0.15 + 0.95;

  const drift2X = Math.cos((frame * Math.PI) / 160) * 80 + parallaxX * 0.7;
  const drift2Y = Math.sin((frame * Math.PI) / 130) * 60 + parallaxY * 0.7;
  const pulse2 = Math.cos((frame * Math.PI) / 75) * 0.12 + 0.95;

  const drift3X = Math.sin((frame * Math.PI) / 110 + 1) * 60 + parallaxX * 0.5;
  const drift3Y = Math.cos((frame * Math.PI) / 150 + 2) * 50 + parallaxY * 0.5;

  // Moving Cyber Grid Offset (Continuous downward float + Parallax)
  const gridOffsetY = ((frame * 0.8) % 60) + parallaxY * 0.5;
  const gridOffsetX = Math.sin(frame * 0.02) * 15 + parallaxX * 0.5;

  // Diagonal Light Beam Sweep (Every 150 frames sweeps across)
  const sweepProgress = (frame % 150) / 150;
  const beamTranslateX = interpolate(sweepProgress, [0, 1], [-1200, 2400]);

  // 24 Multi-layer Floating Sparks & Bokeh Orbs
  const particles = Array.from({ length: 24 }).map((_, i) => {
    const isBokeh = i % 4 === 0;
    const speed = isBokeh ? 0.6 + (i % 3) * 0.2 : 1.3 + (i % 5) * 0.35;
    const initialY = 1960 - ((i * 90 + frame * speed) % 2150);
    const initialX =
      60 +
      ((i * 78 +
        Math.sin(frame * 0.025 + i * 0.8) * 45 +
        (isBokeh ? parallaxX * 0.2 : parallaxX * 0.6)) %
        960);
    const pSize = isBokeh ? 16 + (i % 3) * 10 : 3.5 + (i % 3) * 1.5;
    const pOpacity = interpolate(
      initialY,
      [0, 250, 1650, 1960],
      [0, isBokeh ? 0.25 : 0.7, isBokeh ? 0.25 : 0.7, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const pBlur = isBokeh ? 8 : 0;

    return {
      id: i,
      x: initialX,
      y: initialY,
      size: pSize,
      opacity: pOpacity,
      blur: pBlur,
      isBokeh,
    };
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: SQL_NOSQL_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Animated Moving Cybernetic Grid */}
      <div
        style={{
          position: "absolute",
          inset: -120,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.045) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `${gridOffsetX}px ${gridOffsetY}px`,
          opacity: 0.9,
        }}
      />

      {/* 2. Sweeping Cyber Light Beam (Diagonal Energy Wave) */}
      <div
        style={{
          position: "absolute",
          top: -300,
          left: 0,
          width: 450,
          height: 2600,
          background: `linear-gradient(90deg, transparent 0%, ${primaryColor}18 50%, transparent 100%)`,
          transform: `translateX(${beamTranslateX}px) rotate(28deg)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Center Atmospheric Reactor Glow (Dynamic Color Core) */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor}22 0%, ${secondaryColor}12 45%, transparent 75%)`,
          filter: "blur(130px)",
          transform: `translate(-50%, -50%) translate3d(${parallaxX * 0.4}px, ${parallaxY * 0.4
            }px, 0)`,
          pointerEvents: "none",
        }}
      />

      {/* 4. Top-Left Dynamic Ambient Glow Orb */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "70%",
          height: "45%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
          filter: "blur(120px)",
          transform: `translate3d(${drift1X}px, ${drift1Y}px, 0) scale(${pulse1})`,
          transition: "background 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* 5. Right Dynamic Ambient Glow Orb */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          right: "-12%",
          width: "70%",
          height: "48%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor}28 0%, transparent 70%)`,
          filter: "blur(120px)",
          transform: `translate3d(${drift2X}px, ${drift2Y}px, 0) scale(${pulse2})`,
          transition: "background 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* 6. Center-Bottom Atmospheric Horizon Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "10%",
          width: "80%",
          height: "40%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
          filter: "blur(130px)",
          transform: `translate3d(${drift3X}px, ${drift3Y}px, 0)`,
          transition: "background 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* 7. Floating Multi-layer Particles (Bokeh Orbs & Data Sparks) */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.id % 2 === 0 ? primaryColor : secondaryColor,
            boxShadow: p.isBokeh
              ? `0 0 20px ${p.id % 2 === 0 ? primaryColor : secondaryColor}`
              : `0 0 10px ${p.id % 2 === 0 ? primaryColor : secondaryColor}`,
            opacity: p.opacity,
            filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
            pointerEvents: "none",
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
