import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FeVsBeBackground } from "./Background/FeVsBeBackground";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from "./Scenes";
import { FE_VS_BE_COLORS } from "./constants";
import { FrontendVsBackendProps } from "./types";

export const FrontendVsBackend: React.FC<FrontendVsBackendProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Transition 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frames 220 -> 228)
  const wipe1Progress = interpolate(frame, [220, 228], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 2: Laser Shutter Wipe (Scene 2 -> Scene 3, Frames 342 -> 350)
  const wipe2Progress = interpolate(frame, [342, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 3: Laser Shutter Wipe (Scene 3 -> Scene 4, Frames 534 -> 542)
  const wipe3Progress = interpolate(frame, [534, 542], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 4: Laser Shutter Wipe (Scene 4 -> Scene 5, Frames 640 -> 648)
  const wipe4Progress = interpolate(frame, [640, 648], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 5: Laser Shutter Wipe (Scene 5 -> Scene 6, Frames 882 -> 890)
  const wipe5Progress = interpolate(frame, [882, 890], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene Visibility Flags
  const showScene1 = frame < 225;
  const showScene2 = frame >= 222 && frame < 348;
  const showScene3 = frame >= 344 && frame < 538;
  const showScene4 = frame >= 536 && frame < 645;
  const showScene5 = frame >= 642 && frame < 888;
  const showScene6 = frame >= 886;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: FE_VS_BE_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Dual Ambiance Background */}
      <FeVsBeBackground />

      {/* 2. Voiceover Audio (fe-vs-be.wav: 41.52s / 1246 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("fe-vs-be.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Intro & Dual Pillars (Frames 0 - 225) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Frontend Terminal Typewriter (Frames 222 - 348) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Frontend 4 Interactive Elements Popup List (Frames 344 - 538) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Backend Terminal Typewriter (Frames 536 - 645) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: Backend 4 Core Responsibilities (Frames 642 - 888) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Knife Analogy & Grand Finale (Frames 886 - 1260) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Laser Shutter Wipe Transitions */}
      <LaserShutterWipe progress={wipe1Progress} color={FE_VS_BE_COLORS.feCyan} />
      <LaserShutterWipe progress={wipe2Progress} color={FE_VS_BE_COLORS.feCyan} />
      <LaserShutterWipe progress={wipe3Progress} color={FE_VS_BE_COLORS.bePurple} />
      <LaserShutterWipe progress={wipe4Progress} color={FE_VS_BE_COLORS.bePurple} />
      <LaserShutterWipe progress={wipe5Progress} color={FE_VS_BE_COLORS.feCyan} />
    </AbsoluteFill>
  );
};

