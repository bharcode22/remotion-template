import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import { STUDIO_COLORS } from "../constants";

interface InfiniteStudioProps {
  cardElevation: number; // 0 to 1 based on card hover / spring
  cardTiltX: number;     // in degrees
  cardTiltY: number;     // in degrees
}

export const InfiniteStudio: React.FC<InfiniteStudioProps> = ({
  cardElevation,
  cardTiltX,
  cardTiltY,
}) => {
  // Shadow expands, blurs, and softens as the card lifts off the studio floor
  const shadowBlur = interpolate(cardElevation, [0, 1], [40, 85], {
    extrapolateRight: "clamp",
  });
  const shadowOpacity = interpolate(cardElevation, [0, 1], [0.38, 0.22], {
    extrapolateRight: "clamp",
  });
  const shadowScaleX = interpolate(cardTiltY, [-15, 15], [0.92, 1.08]);
  const shadowScaleY = interpolate(cardElevation, [0, 1], [0.75, 0.55]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: STUDIO_COLORS.bgBottom,
        overflow: "hidden",
      }}
    >
      {/* 1. Infinite Cyclorama Studio Lighting (Top Softbox to Floor Falloff) */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(ellipse 950px 750px at 50% 32%, ${STUDIO_COLORS.bgSoftGlow} 0%, rgba(240, 243, 248, 0.7) 45%, transparent 80%),
            linear-gradient(180deg, ${STUDIO_COLORS.bgTop} 0%, #E2E6EC 55%, ${STUDIO_COLORS.bgBottom} 100%)
          `,
        }}
      />

      {/* 2. Soft Studio Edge Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(148, 163, 184, 0.25) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Deep 3D Ambient Occlusion Contact Shadow underneath the Floating Card */}
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "50%",
          width: 740,
          height: 380,
          marginLeft: -370,
          marginTop: -190,
          borderRadius: 80,
          backgroundColor: `rgba(15, 23, 42, ${shadowOpacity})`,
          filter: `blur(${shadowBlur}px)`,
          transform: `
            translateY(${interpolate(cardElevation, [0, 1], [140, 210])}px)
            translateX(${cardTiltY * 2.5}px)
            scale(${shadowScaleX}, ${shadowScaleY})
          `,
          transformOrigin: "center center",
          pointerEvents: "none",
        }}
      />

      {/* Secondary tight contact core shadow for realistic proximity */}
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "50%",
          width: 580,
          height: 140,
          marginLeft: -290,
          marginTop: -70,
          borderRadius: 60,
          backgroundColor: "rgba(15, 23, 0.18)",
          filter: "blur(28px)",
          transform: `translateY(${interpolate(cardElevation, [0, 1], [120, 160])}px)`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
