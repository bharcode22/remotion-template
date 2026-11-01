import React from "react";
import { AbsoluteFill } from "remotion";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

export interface SceneContainerProps {
  children: React.ReactNode;
  accentColor?: string;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  children,
  accentColor = SAMPAH_DIGITAL_COLORS.aiViolet,
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
      {/* Subtle Ambient Radial Backlight (Centered at Y=960px) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 860,
          height: 860,
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

