import React from "react";
import { CameraState, useCameraTimeline } from "./useCameraTimeline";

interface InfiniteCameraRigProps {
  children: React.ReactNode;
  camera?: CameraState;
}

export const InfiniteCameraRig: React.FC<InfiniteCameraRigProps> = ({
  children,
  camera: externalCamera,
}) => {
  const internalCamera = useCameraTimeline();
  const camera = externalCamera || internalCamera;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom}) rotate(${camera.rotation}deg)`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};
