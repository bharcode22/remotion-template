import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { CiCdBackground } from "./Background/CiCdBackground";
import { PipelineWipe } from "./Components/PipelineWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7 } from "./Scenes";
import { CICD_COLORS, SCENE_TIMINGS } from "./constants";
import { CiCdPipelineProps } from "./types";

export const CiCdPipeline: React.FC<CiCdPipelineProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Transition 1: Pipeline Laser Wipe (Scene 1 -> Scene 2, Frames 176 -> 184)
  const wipe1Progress = interpolate(frame, [176, 184], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 2: Pipeline Laser Wipe (Scene 2 -> Scene 3, Frames 526 -> 535)
  const wipe2Progress = interpolate(frame, [526, 535], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 3: Pipeline Laser Wipe (Scene 3 -> Scene 4, Frames 812 -> 820)
  const wipe3Progress = interpolate(frame, [812, 820], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 4: Pipeline Laser Wipe (Scene 4 -> Scene 5, Frames 916 -> 924)
  const wipe4Progress = interpolate(frame, [916, 924], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 5: Pipeline Laser Wipe (Scene 5 -> Scene 6, Frames 1104 -> 1112)
  const wipe5Progress = interpolate(frame, [1104, 1112], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 6: Pipeline Laser Wipe (Scene 6 -> Scene 7, Frames 1242 -> 1250)
  const wipe6Progress = interpolate(frame, [1242, 1250], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene Visibility Flags
  const showScene1 = frame <= SCENE_TIMINGS.scene1.end;
  const showScene2 = frame >= 180 && frame <= SCENE_TIMINGS.scene2.end;
  const showScene3 = frame >= 528 && frame <= SCENE_TIMINGS.scene3.end;
  const showScene4 = frame >= 815 && frame <= SCENE_TIMINGS.scene4.end;
  const showScene5 = frame >= 920 && frame <= SCENE_TIMINGS.scene5.end;
  const showScene6 = frame >= 1105 && frame <= SCENE_TIMINGS.scene6.end;
  const showScene7 = frame >= 1245;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CICD_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber DevOps Background */}
      <CiCdBackground />

      {/* 2. Voiceover Audio (cicd.wav: 48.08s / 1443 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("cicd.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects Manager */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Hook - Bagaimana Aplikasi Terus Update Tanpa Manual? (Frames 0 - 184) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Dev Lifecycle - Fitur Baru & Perbaikan Bug (Frames 180 - 535) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Manual Bottleneck & Human Error (Frames 528 - 820) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Hero Reveal - Di Sinilah CI/CD Berperan (Frames 815 - 925) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: Continuous Integration (CI) - Build & Test Otomatis (Frames 920 - 1110) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Continuous Deployment (CD) - Deploy ke Production (Frames 1105 - 1250) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Scene 7 View: Grand Finale & Value Proposition (Frames 1245 - 1450) */}
      {showScene7 && (
        <AbsoluteFill>
          <Scene7 />
        </AbsoluteFill>
      )}

      {/* 11. Pipeline Laser Wipe Transitions */}
      <PipelineWipe progress={wipe1Progress} color={CICD_COLORS.pipelineCyan} />
      <PipelineWipe progress={wipe2Progress} color={CICD_COLORS.alertRed} />
      <PipelineWipe progress={wipe3Progress} color={CICD_COLORS.pipelineCyan} />
      <PipelineWipe progress={wipe4Progress} color={CICD_COLORS.buildGreen} />
      <PipelineWipe progress={wipe5Progress} color={CICD_COLORS.deployPurple} />
      <PipelineWipe progress={wipe6Progress} color={CICD_COLORS.pipelineCyan} />
    </AbsoluteFill>
  );
};

