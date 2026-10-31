import React from "react";
import { useCurrentFrame } from "remotion";
import { STORAGE_COLORS } from "../constants";

export interface SceneContainerProps {
  accentColor?: string;
  children: React.ReactNode;
}

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const SceneContainer: React.FC<SceneContainerProps> = ({
  accentColor = STORAGE_COLORS.accentCyan,
  children,
}) => {
  const frame = useCurrentFrame();

  const auraScale = 1 + Math.sin(frame * 0.12) * 0.08;
  const auraOpacity = 0.18 + Math.sin(frame * 0.15) * 0.05;

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "60px 70px",
        fontFamily: FONT_SANS,
      }}
    >
      {/* Frosted Ambient Aura */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${auraScale})`,
          width: 980,
          height: 980,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(56, 189, 248, 0.12) 45%, transparent 70%)`,
          opacity: auraOpacity,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

