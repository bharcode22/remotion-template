import React from "react";
import { AbsoluteFill } from "remotion";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

interface SceneContainerProps {
  children: React.ReactNode;
  padding?: string;
  style?: React.CSSProperties;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  children,
  padding = "160px 60px 100px",
  style,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding,
        boxSizing: "border-box",
        fontFamily: FONT_SANS,
        ...style,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

