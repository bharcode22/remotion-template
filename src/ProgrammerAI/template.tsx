import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ProgrammerAiBackground } from "./Background/ProgrammerAiBackground";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2 } from "./Scenes";
import { PROGRAMMER_AI_COLORS } from "./constants";
import { ProgrammerAiProps } from "./types";

export const ProgrammerAI: React.FC<ProgrammerAiProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Transition 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frames 130 -> 138)
  const wipe1Progress = interpolate(frame, [130, 138], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene Visibility Flags
  // Scene 1: Line 1 (Frames 0 - 135)
  const showScene1 = frame < 135;
  // Scene 2: Line 2 (Frames 132 - 255)
  const showScene2 = frame >= 132;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PROGRAMMER_AI_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Neural Background */}
      <ProgrammerAiBackground />

      {/* 2. Voiceover Audio (programer-AI.wav: 56.88s / 1706 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("programer-AI.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Line 1 (Frames 0 - 135) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Line 2 (Frames 132 - 255) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Laser Shutter Wipe Transitions */}
      <LaserShutterWipe
        progress={wipe1Progress}
        color={PROGRAMMER_AI_COLORS.accentAmber}
      />
    </AbsoluteFill>
  );
};


