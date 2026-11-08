import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RABBITMQ_COLORS } from "../constants";

export const GlassBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle breathing ambient pulse (cycles smoothly every 180 frames)
  const pulse1 = Math.sin((frame / 180) * Math.PI * 2) * 0.05 + 0.95;
  const pulse2 = Math.cos((frame / 210) * Math.PI * 2) * 0.05 + 0.95;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: RABBITMQ_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Cybernetic Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.7,
        }}
      />

      {/* 2. Top Ambient Glow (Cloud Cyan / Ingest Region) */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "20%",
          width: "60%",
          height: "45%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.cloudCyan}18 0%, transparent 70%)`,
          filter: "blur(90px)",
          transform: `scale(${pulse1})`,
          pointerEvents: "none",
        }}
      />

      {/* 3. Middle Ambient Glow (RabbitMQ Signature Amber / Orange) */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "25%",
          width: "50%",
          height: "30%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.rabbitOrange}22 0%, transparent 70%)`,
          filter: "blur(100px)",
          transform: `scale(${pulse2})`,
          pointerEvents: "none",
        }}
      />

      {/* 4. Bottom Ambient Glow (Multi-Consumer Matrix) */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "15%",
          width: "70%",
          height: "35%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.transcoderPurple}14 0%, ${RABBITMQ_COLORS.aiEmerald}10 40%, transparent 75%)`,
          filter: "blur(100px)",
          transform: `scale(${pulse1})`,
          pointerEvents: "none",
        }}
      />

      {/* 5. Vignette Shadow Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 55%, rgba(6, 9, 19, 0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
