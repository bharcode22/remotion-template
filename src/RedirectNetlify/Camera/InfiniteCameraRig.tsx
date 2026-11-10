import React from "react";
import { AbsoluteFill } from "remotion";
import { CameraPosition } from "../types";

interface InfiniteCameraRigProps {
  camera: CameraPosition;
  children: React.ReactNode;
}

export const InfiniteCameraRig: React.FC<InfiniteCameraRigProps> = ({
  camera,
  children,
}) => {
  const { x, y, zoom, rotation = 0 } = camera;

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${zoom}) translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        scale: 0.962
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

