import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PLANNING_COLORS } from "../constants";

export const GlobalTechBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle breathing pulse
  const pulse = Math.sin((frame * Math.PI) / 45) * 0.08 + 0.92;
  const pulseSlow = Math.cos((frame * Math.PI) / 60) * 0.06 + 0.94;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PLANNING_COLORS.bgDark,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* 1. Deep Space Radial Aura (Top Purple / AI) */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: `translateX(-50%) scale(${pulse})`,
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Secondary Cyan Tech Ambient (Bottom Center) */}
      <div
        style={{
          position: "absolute",
          bottom: -250,
          left: "50%",
          transform: `translateX(-50%) scale(${pulseSlow})`,
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(16, 185, 129, 0.06) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Subtle Cybernetic Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      {/* 4. Ambient Floating Dust Particles */}
      {[
        { x: 180, y: 350, r: 2.5, speed: 0.4, color: PLANNING_COLORS.aiViolet },
        { x: 860, y: 520, r: 3, speed: 0.35, color: PLANNING_COLORS.cyberCyan },
        { x: 300, y: 920, r: 2, speed: 0.5, color: PLANNING_COLORS.structureGreen },
        { x: 780, y: 1280, r: 2.5, speed: 0.45, color: PLANNING_COLORS.aiPurple },
        { x: 220, y: 1540, r: 3, speed: 0.3, color: PLANNING_COLORS.valueAmber },
        { x: 920, y: 1720, r: 2, speed: 0.4, color: PLANNING_COLORS.skyBlue },
      ].map((pt, idx) => {
        const floatY = (frame * pt.speed * 1.5) % 30;
        const opacity = Math.sin(((frame + idx * 25) * Math.PI) / 40) * 0.3 + 0.5;

        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: pt.x,
              top: pt.y - floatY,
              width: pt.r * 2,
              height: pt.r * 2,
              borderRadius: "50%",
              backgroundColor: pt.color,
              boxShadow: `0 0 10px ${pt.color}`,
              opacity,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

