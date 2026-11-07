import React from "react";
import { AbsoluteFill } from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { InfiniteCameraRig, useCameraTimeline } from "./Camera";
import { UnifiedRestApiIllustration } from "./Scenes";
import { REST_API_COLORS } from "./constants";
import { RestApiIllustrationProps } from "./types";

export const RestApiIllustration: React.FC<RestApiIllustrationProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: REST_API_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Frosted Glass Clean Ambient Background (Cyan -> Emerald Ambiance) */}
      <GlassBackground />

      {/* 2. Tactile Synchronized Audio Manager (GET + POST SFX) */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 3. Static Rock-Solid Camera Rig (Zero Shake / Zero Float) */}
      <InfiniteCameraRig camera={camera}>
        <UnifiedRestApiIllustration />
      </InfiniteCameraRig>
    </AbsoluteFill>
  );
};

// Backward-compatible alias
export const GetPostIllustration = RestApiIllustration;
