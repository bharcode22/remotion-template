import React from "react";
import { interpolate } from "remotion";
import { CameraPosition } from "../types";

interface DepthOfFieldWrapperProps {
  stationX: number;
  stationY: number;
  camera: CameraPosition;
  children: React.ReactNode;
}

export const DepthOfFieldWrapper: React.FC<DepthOfFieldWrapperProps> = ({
  stationX,
  stationY,
  camera,
  children,
}) => {
  const distance = Math.abs(camera.y - stationY);

  // If too far away, hide completely to boost rendering performance
  if (distance > 1100) {
    return null;
  }

  // Smooth focus fade
  const opacity = interpolate(distance, [150, 750], [1, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const blurPx = interpolate(distance, [150, 750], [0, 8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(distance, [150, 750], [1, 0.94], {
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
