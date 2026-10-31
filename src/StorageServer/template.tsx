import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { StorageBackground } from "./Background/StorageBackground";
import { StorageParallaxSpace } from "./Background/StorageParallaxSpace";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from "./Scenes";
import { STORAGE_COLORS } from "./constants";
import { StorageServerProps } from "./types";

export const StorageServer: React.FC<StorageServerProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Transisi 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frames 48 -> 56)
  const wipe1Progress = interpolate(frame, [48, 56], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 2: Laser Shutter Wipe (Scene 2 -> Scene 3, Frames 288 -> 296)
  const wipe2Progress = interpolate(frame, [288, 296], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 3: Laser Shutter Wipe (Scene 3 -> Scene 4, Frames 372 -> 380)
  const wipe3Progress = interpolate(frame, [372, 380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 4: Laser Shutter Wipe ke Overview Pendekatan (Scene 4 -> Scene 5, Frames 670 -> 678)
  const wipe4Progress = interpolate(frame, [670, 678], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 5: Laser Shutter Wipe ke Camera Journey (Scene 5 -> Scene 6, Frames 788 -> 796)
  const wipe5Progress = interpolate(frame, [788, 796], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene visibility flags
  const showScene1 = frame < 54;
  const showScene2 = frame >= 50 && frame < 294;
  const showScene3 = frame >= 290 && frame < 378;
  const showScene4 = frame >= 374 && frame < 676;
  const showScene5 = frame >= 672 && frame < 796;
  const showScene6 = frame >= 790;

  const renderBackground = () => {
    if (frame >= 790) {
      return <StorageParallaxSpace cameraX={camera.x} />;
    }
    const accent =
      frame >= 672
        ? STORAGE_COLORS.accentCyan
        : frame >= 374
        ? STORAGE_COLORS.accentCyan
        : frame >= 290
        ? STORAGE_COLORS.accentEmerald
        : frame >= 50
        ? STORAGE_COLORS.accentPurple
        : STORAGE_COLORS.accentCyan;

    return <StorageBackground accentColor={accent} />;
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: STORAGE_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Dynamic Cyber Storage / Parallax Background */}
      {renderBackground()}

      {/* 2. Voiceover Audio (storage.wav: 53.80s / 1614 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("storage.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Question Hook (Frames 0 - 54) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: macOS Terminal Typewriter (Frames 50 - 294) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Official Answer Storage Server (Frames 290 - 378) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Terminal Definition & 4 Media Types (Frames 374 - 676) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: Storage Approaches Overview (Frames 672 - 796) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Infinite Camera Movement Journey across 4 Stations (Frames 790 - 1680) */}
      {showScene6 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene6 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 10. Transition Wipes */}
      <LaserShutterWipe progress={wipe1Progress} color={STORAGE_COLORS.accentPurple} />
      <LaserShutterWipe progress={wipe2Progress} color={STORAGE_COLORS.accentEmerald} />
      <LaserShutterWipe progress={wipe3Progress} color={STORAGE_COLORS.accentCyan} />
      <LaserShutterWipe progress={wipe4Progress} color={STORAGE_COLORS.accentPurple} />
      <LaserShutterWipe progress={wipe5Progress} color={STORAGE_COLORS.accentEmerald} />
    </AbsoluteFill>
  );
};
