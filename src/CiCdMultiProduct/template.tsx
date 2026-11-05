import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { GlobalTechBackground } from "./Background/GlobalTechBackground";
import { PipelineWipe } from "./Components/PipelineWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5 } from "./Scenes";
import { MULTI_COLORS } from "./constants";
import { CiCdMultiProductProps } from "./types";

export const CiCdMultiProduct: React.FC<CiCdMultiProductProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Transition 1: Pipeline Laser Wipe (Scene 1 -> Scene 2, Frames 166 -> 174)
  const wipe1Progress = interpolate(frame, [166, 174], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 2: Pipeline Laser Wipe (Scene 2 -> Scene 3, Frames 446 -> 454)
  const wipe2Progress = interpolate(frame, [446, 454], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 3: Pipeline Laser Wipe (Scene 3 -> Scene 4, Frames 528 -> 534)
  const wipe3Progress = interpolate(frame, [528, 534], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 4: Pipeline Laser Wipe (Scene 4 -> Scene 5, Frames 1058 -> 1065)
  const wipe4Progress = interpolate(frame, [1058, 1065], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene Visibility Flags (Strictly Mutual Exclusive to prevent visual overlap)
  const showScene1 = frame < 170;
  const showScene2 = frame >= 170 && frame < 454;
  const showScene3 = frame >= 454 && frame < 534;
  const showScene4 = frame >= 534 && frame < 1065;
  const showScene5 = frame >= 1065;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: MULTI_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Global Cyber DevOps Background */}
      <GlobalTechBackground />

      {/* 2. Voiceover Audio (cicd_multi_product.wav: 47.72s / 1432 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("cicd_multi_product.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects Manager */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Hook - Update Aplikasi ke Ratusan Server di Berbagai Dunia (Frames 0 - 170) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Dilema - Deployment Manual Satu per Satu & Risiko Beda Versi (Frames 170 - 453) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Typewriter - Nah, Bagaimana Cara Mengatasinya? (Frames 454 - 533) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Camera Slide Journey - Pipeline -> Build -> Cloud -> Distribution (Frames 534 - 1064) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: Grand Conclusion & 3 Golden Pillars (Frames 1065 - 1440) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* Laser Transition: Scene 1 -> Scene 2 */}
      <PipelineWipe progress={wipe1Progress} accentColor={MULTI_COLORS.alertRed} />

      {/* Laser Transition: Scene 2 -> Scene 3 */}
      <PipelineWipe progress={wipe2Progress} accentColor={MULTI_COLORS.gitlabOrange} />

      {/* Laser Transition: Scene 3 -> Scene 4 */}
      <PipelineWipe progress={wipe3Progress} accentColor={MULTI_COLORS.cyberCyan} />

      {/* Laser Transition: Scene 4 -> Scene 5 */}
      <PipelineWipe progress={wipe4Progress} accentColor={MULTI_COLORS.activeGreen} />
    </AbsoluteFill>
  );
};
