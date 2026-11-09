import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { UnifiedNetlify } from "./Scenes/UnifiedNetlify";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { NetlifyProps } from "./types";
import { TOTAL_FRAMES } from "./constants";

export const TOTAL_NETLIFY_FRAMES = TOTAL_FRAMES;

export const Netlify: React.FC<NetlifyProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill style={{ backgroundColor: "#040914" }}>
      {/* 1. Voiceover Audio Track */}
      <Audio src={staticFile("netlify.wav")} volume={1.0} />

      {/* 2. Atmospheric Glass Background with Netlify Luminous Mesh */}
      <GlassBackground camera={camera} />

      {/* 3. 3D Infinite Camera Rig wrapping Scenes */}
      <InfiniteCameraRig camera={camera}>
        <UnifiedNetlify />
      </InfiniteCameraRig>

      {/* 4. Audio Sound Effects Layer */}
      <SoundEffectsManager enabled={enableSfx} volume={sfxVolume} />
    </AbsoluteFill>
  );
};

