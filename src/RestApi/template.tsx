import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { RestApiParallaxSpace } from "./Background/RestApiParallaxSpace";
import { CyberMethodMatrixSpace } from "./Background/CyberMethodMatrixSpace";
import { CarbonHazardAnomalySpace } from "./Background/CarbonHazardAnomalySpace";
import { CrimsonVerdictSpace } from "./Background/CrimsonVerdictSpace";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from "./Scenes";
import { REST_COLORS } from "./constants";
import { SoundEffectsManager } from "./Audio";

export interface RestApiProps {
  enableVoiceover?: boolean;
  enableSfx?: boolean;
  sfxVolume?: number;
}

export const RestApi: React.FC<RestApiProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Transisi 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frame 68 -> 76)
  const wipe1Progress = interpolate(frame, [68, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 2: Laser Shutter Wipe (Scene 2 -> Scene 3, Frame 272 -> 280)
  const wipe2Progress = interpolate(frame, [272, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 3: Laser Shutter Wipe (Scene 3 -> Scene 4, Frame 458 -> 466)
  const wipe3Progress = interpolate(frame, [458, 466], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 4: Laser Shutter Wipe (Scene 4 -> Scene 5, Frame 786 -> 796)
  // Dimajukan agar di frame 806 Scene 5 sudah terbuka penuh dan terpasang
  const wipe4Progress = interpolate(frame, [786, 796], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 5: Laser Shutter Wipe (Scene 5 -> Scene 6, Frame 1095 -> 1105)
  const wipe5Progress = interpolate(frame, [1095, 1105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Visibility flags
  const showScene1 = frame < 76;
  const showScene2 = frame >= 72 && frame < 280;
  const showScene3 = frame >= 274 && frame < 466;
  const showScene4 = frame >= 460 && frame < 796;
  const showScene5 = frame >= 790 && frame < 1104;
  const showScene6 = frame >= 1098;

  // Background Switching:
  // 1. Scene 1 & 2: Cosmic Parallax Space (0 - 275)
  // 2. Scene 3 & 4: Cyber Method Matrix Space (275 - 794)
  // 3. Scene 5: Carbon Hazard Anomaly Space (794 - 1100)
  // 4. Scene 6: Crimson Verdict Space (1100+)
  const renderBackground = () => {
    if (frame < 275) {
      return (
        <RestApiParallaxSpace
          accentColor={
            frame >= 75 ? REST_COLORS.restEmerald : REST_COLORS.restCyan
          }
        />
      );
    }
    if (frame < 794) {
      return <CyberMethodMatrixSpace cameraX={camera.x} />;
    }
    if (frame < 1100) {
      return <CarbonHazardAnomalySpace />;
    }
    return <CrimsonVerdictSpace />;
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: REST_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Dynamic Background Space */}
      {renderBackground()}

      {/* 2. Audio Voiceover (rest-api.wav: 43.0s / 1290 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("rest-api.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Intro Hook (0 - 75f) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Definition & AI Streaming (75 - 280f) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Method Dispatcher & Sockets (278 - 466f) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: 4 Core HTTP Methods Camera Slide Journey (466 - 807f) */}
      {showScene4 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene4 camera={camera} />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: macOS Terminal Typewriter Investigation (807 - 1105f) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Final Climax & Non-Compliant Verdict (1100 - 1290f) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Transition Wipes */}
      <LaserShutterWipe progress={wipe1Progress} color={REST_COLORS.restCyan} />
      <LaserShutterWipe progress={wipe2Progress} color="#818cf8" />
      <LaserShutterWipe progress={wipe3Progress} color={REST_COLORS.restCyan} />
      <LaserShutterWipe progress={wipe4Progress} color={REST_COLORS.restAmber} />
      <LaserShutterWipe progress={wipe5Progress} color={REST_COLORS.restCrimson} />
    </AbsoluteFill>
  );
};
