import React from "react";
import { AbsoluteFill } from "remotion";

export interface CameraState {
  x: number;
  y: number;
  zoom: number;
  rotation: number;
}

interface InfiniteCameraRigProps {
  children: React.ReactNode;
  camera: CameraState;
}

export const InfiniteCameraRig: React.FC<InfiniteCameraRigProps> = ({
  children,
  camera,
}) => {
  return (
    <AbsoluteFill
      style={{
        transformOrigin: "540px 960px",
        transform: `translate3d(${-camera.x}px, ${-camera.y}px, 0px) scale(${camera.zoom}) rotate(${camera.rotation}deg)`,
        willChange: "transform",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

