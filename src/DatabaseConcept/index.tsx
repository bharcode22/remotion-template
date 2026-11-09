import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { UnifiedDatabaseConcept } from "./Scenes/UnifiedDatabaseConcept";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { DatabaseConceptProps } from "./types";
import { TOTAL_FRAMES } from "./constants";

export const TOTAL_VIDEO_FRAMES = TOTAL_FRAMES;

export const DatabaseConcept: React.FC<DatabaseConceptProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill style={{ backgroundColor: "#060913" }}>
      {/* 1. Voiceover Audio Track */}
      <Audio src={staticFile("database.wav")} volume={1.0} />

      {/* 2. Atmospheric Glass Background with Camera Parallax */}
      <GlassBackground camera={camera} />

      {/* 3. 3D Infinite Camera Rig wrapping Scenes */}
      <InfiniteCameraRig camera={camera}>
        <UnifiedDatabaseConcept />
      </InfiniteCameraRig>

      {/* 4. Audio Sound Effects Layer */}
      <SoundEffectsManager enabled={enableSfx} volume={sfxVolume} />
    </AbsoluteFill>
  );
};

