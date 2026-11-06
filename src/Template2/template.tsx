import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { SoundEffectsManager } from "../PlanningAI/Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8 } from "./Scenes";
import { GLASS_COLORS } from "./constants";
import { Template2Props } from "./types";

export const Template2: React.FC<Template2Props> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Scene visibility — identical timing to PlanningAI
  const showScene1 = frame < 225;
  const showScene2 = frame >= 225 && frame < 460;
  const showScene3 = frame >= 460 && frame < 645;
  const showScene4 = frame >= 645 && frame < 805;
  const showScene5 = frame >= 805 && frame < 1080;
  const showScene6 = frame >= 1080 && frame < 1205;
  const showScene7 = frame >= 1205 && frame < 1410;
  const showScene8 = frame >= 1410;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: GLASS_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Glass Ambient Background */}
      <GlassBackground />

      {/* 2. Primary Voiceover Audio Track */}
      {enableVoiceover && (
        <Audio
          src={staticFile("planing AI.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Synchronized Sound Effects (reuse from PlanningAI) */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4-11. Scenes */}
      {showScene1 && <AbsoluteFill><Scene1 /></AbsoluteFill>}
      {showScene2 && <AbsoluteFill><Scene2 /></AbsoluteFill>}
      {showScene3 && <AbsoluteFill><Scene3 /></AbsoluteFill>}
      {showScene4 && <AbsoluteFill><Scene4 /></AbsoluteFill>}
      {showScene5 && <AbsoluteFill><Scene5 /></AbsoluteFill>}
      {showScene6 && <AbsoluteFill><Scene6 /></AbsoluteFill>}
      {showScene7 && <AbsoluteFill><Scene7 /></AbsoluteFill>}
      {showScene8 && <AbsoluteFill><Scene8 /></AbsoluteFill>}
    </AbsoluteFill>
  );
};

