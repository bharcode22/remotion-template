import React from "react";
import { AbsoluteFill } from "remotion";
import { CameraPosition } from "../types";

export interface InfiniteCameraRigProps {
  camera: CameraPosition;
  children: React.ReactNode;
}

export const InfiniteCameraRig: React.FC<InfiniteCameraRigProps> = ({
  camera,
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        overflow: "visible",
        transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`,
        transformOrigin: "540px 960px",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

