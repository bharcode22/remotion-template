import React from "react";
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
      {/* Symmetrical World Space Canvas (Upright 0deg) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          transformOrigin: "540px 960px",
          transform: `scale(${camera.zoom}) translate3d(${-camera.x}px, ${-camera.y}px, 0px)`,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

