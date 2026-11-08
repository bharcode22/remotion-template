import React from "react";
import { AbsoluteFill } from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { InfiniteCameraRig, useCameraTimeline } from "./Camera";
import { UnifiedMediaIllustration } from "./Scenes";
import { RABBITMQ_COLORS } from "./constants";
import { RabbitMQMediaIllustrationProps } from "./types";

export const RabbitMQMediaIllustration: React.FC<RabbitMQMediaIllustrationProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: RABBITMQ_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Frosted Glass Clean Ambient Background (Cyan -> RabbitMQ Amber Ambiance) */}
      <GlassBackground />

      {/* 2. Tactile Synchronized Audio Manager (Soft SFX) */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 3. Static Rock-Solid Camera Rig (Zero Shake / Zero Float) */}
      <InfiniteCameraRig camera={camera}>
        <UnifiedMediaIllustration />
      </InfiniteCameraRig>
    </AbsoluteFill>
  );
};

