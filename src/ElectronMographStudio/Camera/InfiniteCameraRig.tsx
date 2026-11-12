import React from "react";
import { CameraPosition } from "../types";

interface InfiniteCameraRigProps {
  camera: CameraPosition;
  children: React.ReactNode;
}

export const InfiniteCameraRig: React.FC<InfiniteCameraRigProps> = ({
  camera,
  children,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* 2D/3D Spatial World Canvas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8000,
          height: 4000,
          transformOrigin: "540px 960px",
          transform: `scale(${camera.zoom}) rotate(${camera.tilt}deg) translate3d(${-camera.x}px, ${-camera.y}px, 0px)`,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};
