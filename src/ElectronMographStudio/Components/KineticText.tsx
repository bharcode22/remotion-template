import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { MAIN_FONT_FAMILY } from "../constants";

interface KineticTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  fontWeight?: number | string;
  color?: string;
  highlightColor?: string;
  highlightWords?: string[];
  letterSpacing?: number;
  align?: "left" | "center" | "right";
  lineHeight?: number;
  staggerFrames?: number;
  glow?: boolean;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  delay = 0,
  fontSize = 56,
  fontWeight = 800,
  color = "#F5F5F7",
  highlightColor = "#2997FF",
  highlightWords = [],
  letterSpacing = -1.5,
  align = "center",
  lineHeight = 1.12,
  staggerFrames = 3,
  glow = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
        gap: `${fontSize * 0.28}px`,
        lineHeight,
        textAlign: align,
      }}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * staggerFrames;
        const progress = spring({
          frame: frame - wordDelay,
          fps,
          config: { damping: 12, stiffness: 120, mass: 0.8 },
        });

        const translateY = interpolate(progress, [0, 1], [60, 0]);
        const scale = interpolate(progress, [0, 1], [0.7, 1]);
        const opacity = interpolate(progress, [0, 0.4, 1], [0, 1, 1]);
        const blur = interpolate(progress, [0, 1], [12, 0]);

        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        const currentTextColor = isHighlighted ? highlightColor : color;

        return (
          <span
            key={`${word}-${index}`}
            style={{
              display: "inline-block",
              fontSize,
              fontWeight,
              letterSpacing,
              color: currentTextColor,
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity,
              filter: `blur(${blur}px)${glow && isHighlighted ? ` drop-shadow(0 0 20px ${highlightColor}88)` : ""}`,
              fontFamily: MAIN_FONT_FAMILY,
              willChange: "transform, opacity, filter",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
