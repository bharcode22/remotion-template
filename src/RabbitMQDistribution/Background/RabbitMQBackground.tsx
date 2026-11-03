import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RABBITMQ_COLORS } from "../constants";

export interface RabbitMQBackgroundProps {
  orangeGlowIntensity?: number;
  greenGlowIntensity?: number;
}

export const RabbitMQBackground: React.FC<RabbitMQBackgroundProps> = ({
  orangeGlowIntensity = 1.0,
  greenGlowIntensity = 1.0,
}) => {
  const frame = useCurrentFrame();
  const scanOffsetY = (frame * 0.4) % 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: RABBITMQ_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Midnight Base Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, #0c1427 0%, #030712 85%)",
        }}
      />

      {/* 2. Top-Left Broker Orange Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.rabbitOrange}20 0%, transparent 70%)`,
          filter: "blur(110px)",
          opacity: orangeGlowIntensity,
          pointerEvents: "none",
        }}
      />

      {/* 3. Bottom-Right Linux Edge Green Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.linuxGreen}20 0%, transparent 70%)`,
          filter: "blur(110px)",
          opacity: greenGlowIntensity,
          pointerEvents: "none",
        }}
      />

      {/* 4. Center Cloud Cyan Pulsing Flare */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RABBITMQ_COLORS.cloudCyan}12 0%, transparent 65%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* 5. Cyber Topology Micro-Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(249, 115, 22, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${scanOffsetY}px`,
          opacity: 0.85,
        }}
      />

      {/* 6. Constellation Dots & Network Packets */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 140px 220px, rgba(249, 115, 22, 0.6), transparent),
            radial-gradient(2px 2px at 340px 600px, rgba(34, 197, 94, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 780px 340px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(2px 2px at 900px 920px, rgba(249, 115, 22, 0.55), transparent),
            radial-gradient(1.5px 1.5px at 180px 1260px, rgba(34, 197, 94, 0.5), transparent),
            radial-gradient(2px 2px at 760px 1440px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 480px 1740px, rgba(249, 115, 22, 0.6), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "1080px 1920px",
          opacity: 0.75,
        }}
      />
    </AbsoluteFill>
  );
};

