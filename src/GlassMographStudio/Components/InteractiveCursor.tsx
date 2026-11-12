import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface InteractiveCursorProps {
  targetX: number; // target position relative to card center
  targetY: number;
}

export const InteractiveCursor: React.FC<InteractiveCursorProps> = ({
  targetX,
  targetY,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring from bottom right
  const entranceProgress = spring({
    frame: frame - 48,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 90 },
  });

  // Calculate cursor motion from offscreen (x: 400, y: 500) to target button
  const currentX = interpolate(entranceProgress, [0, 1], [380, targetX]);
  const currentY = interpolate(entranceProgress, [0, 1], [520, targetY]);

  // Click squash animation around frame 76 - 84
  const isClicking = frame >= 76 && frame <= 85;
  const clickScale = isClicking
    ? interpolate(frame, [76, 80, 84], [1.0, 0.82, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1.0;

  // Exit drift after clicking
  const exitProgress = spring({
    frame: frame - 110,
    fps,
    config: { damping: 16, mass: 1.0 },
  });
  const finalX = currentX + exitProgress * 120;
  const finalY = currentY + exitProgress * 80;
  const opacity = interpolate(frame, [45, 52, 140, 155], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (frame < 45) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(${finalX}px, ${finalY}px) scale(${clickScale})`,
        opacity,
        pointerEvents: "none",
        zIndex: 100,
        filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35))",
        transformOrigin: "top left",
      }}
    >
      {/* Sleek Minimalist 3D Apple-style Cursor Arrow */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 3.5L11.5 20.5L14.2 13.8L21 11L4.5 3.5Z"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>

      {/* Ripple ring on click */}
      {frame >= 78 && frame <= 95 && (
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "2px solid rgba(59, 130, 246, 0.8)",
            transform: `scale(${interpolate(frame, [78, 95], [0.4, 2.4])})`,
            opacity: interpolate(frame, [78, 95], [1, 0]),
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
