import React from "react";
import { interpolate } from "remotion";
import { CameraPosition } from "../types";

interface DepthOfFieldWrapperProps {
  stationX: number;
  stationY?: number;
  camera: CameraPosition;
  children: React.ReactNode;
}

export const DepthOfFieldWrapper: React.FC<DepthOfFieldWrapperProps> = ({
  stationX,
  stationY = 0,
  camera,
  children,
}) => {
  const dx = camera.x - stationX;
  const dy = camera.y - stationY;
  const distance = Math.hypot(dx, dy);

  // Cull distant stations
  if (distance > 1600) {
    return null;
  }

  const opacity = interpolate(distance, [150, 850], [1, 0.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const blurPx = interpolate(distance, [150, 850], [0, 8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(distance, [150, 850], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: stationY,
        left: stationX,
        width: 1080,
        height: 1920,
        zIndex: 10,
        opacity,
        filter: blurPx > 0.5 ? `blur(${blurPx}px)` : "none",
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};

