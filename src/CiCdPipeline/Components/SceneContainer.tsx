import React from "react";
import { AbsoluteFill } from "remotion";
import { CICD_COLORS } from "../constants";

export interface SceneContainerProps {
  children: React.ReactNode;
  accentColor?: string;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  children,
  accentColor = CICD_COLORS.pipelineCyan,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 48px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Radial Backlight */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content Area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

