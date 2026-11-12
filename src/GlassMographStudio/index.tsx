import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { InfiniteStudio } from "./Background/InfiniteStudio";
import { Floating3DCard } from "./Components/Floating3DCard";
import { InteractiveCursor } from "./Components/InteractiveCursor";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { GlassMographStudioProps } from "./types";
import { TOTAL_GLASS_MOGRAPH_FRAMES } from "./constants";

export { TOTAL_GLASS_MOGRAPH_FRAMES };

export const GlassMographStudio: React.FC<GlassMographStudioProps> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 95 },
  });

  // Calculate live elevation and tilt for synchronous shadow interaction
  const elevation = interpolate(entrance, [0, 1], [0, 1]) +
    (Math.sin(frame * 0.045) + 1) * 0.12;

  const tiltX = Math.sin(frame * 0.038) * 5.5;
  const tiltY = Math.cos(frame * 0.032) * 7.5;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 1. Studio Lighting & Dynamic 3D Contact Shadow */}
      <InfiniteStudio
        cardElevation={elevation}
        cardTiltX={tiltX}
        cardTiltY={tiltY}
      />

      {/* 2. Floating 3D Dark Glass Card */}
      <Floating3DCard {...props} />

      {/* 3. Interactive Apple-style 3D Cursor */}
      {/* Positioned over the Follow button (center-left in bottom row: x: -160, y: 155) */}
      <InteractiveCursor targetX={-160} targetY={155} />

      {/* 4. Tactile Sound Design (Whoosh, Click, Pop) */}
      <SoundEffectsManager
        enableSfx={props.enableSfx}
        sfxVolume={props.sfxVolume}
      />
    </AbsoluteFill>
  );
};
