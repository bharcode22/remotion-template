import React from "react";
import { AbsoluteFill } from "remotion";
import { MULTI_COLORS } from "../constants";

export interface PipelineWipeProps {
  progress: number; // 0 -> 1
  direction?: "left-to-right" | "top-to-bottom";
  accentColor?: string;
}

export const PipelineWipe: React.FC<PipelineWipeProps> = ({
  progress,
  direction = "left-to-right",
  accentColor = MULTI_COLORS.gitlabOrange,
}) => {
  if (progress <= 0 || progress >= 1) return null;

  if (direction === "top-to-bottom") {
    const yPos = progress * 100;
    return (
      <AbsoluteFill style={{ pointerEvents: "none", zIndex: 999 }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: `${yPos}%`,
            backgroundColor: MULTI_COLORS.bgDark,
            boxShadow: `0 15px 35px ${accentColor}80`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: `calc(${yPos}% - 4px)`,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#ffffff",
            boxShadow: `0 0 20px #ffffff, 0 0 40px ${accentColor}`,
          }}
        />
      </AbsoluteFill>
    );
  }

  const xPos = progress * 100;
  return (
    <AbsoluteFill style={{ pointerEvents: "none", zIndex: 999 }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: `${xPos}%`,
          backgroundColor: MULTI_COLORS.bgDark,
          boxShadow: `15px 0 35px ${accentColor}80`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `calc(${xPos}% - 4px)`,
          top: 0,
          bottom: 0,
          width: 8,
          backgroundColor: "#ffffff",
          boxShadow: `0 0 20px #ffffff, 0 0 40px ${accentColor}`,
        }}
      />
    </AbsoluteFill>
  );
};

