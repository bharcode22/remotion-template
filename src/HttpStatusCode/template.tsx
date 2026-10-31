import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { HttpStatusCodeBackground } from "./Background/HttpStatusCodeBackground";
import { CrimsonAlertSpace } from "./Background/CrimsonAlertSpace";
import { CyberParallaxSpace } from "./Background/CyberParallaxSpace";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from "./Scenes";
import { HTTP_COLORS } from "./constants";
import { HttpStatusCodeProps } from "./types";

export const HttpStatusCode: React.FC<HttpStatusCodeProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Transisi 1: Laser Shutter Wipe ke Background Merah (Scene 1 -> Scene 2, Frames 68 -> 76)
  const wipe1Progress = interpolate(frame, [68, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 2: Laser Shutter Wipe kembali ke Cyber Cyan (Scene 2 -> Scene 3, Frames 298 -> 308)
  const wipe2Progress = interpolate(frame, [298, 308], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 3: Laser Shutter Wipe ke Terminal Definition (Scene 3 -> Scene 4, Frames 412 -> 422)
  // Dimajukan agar di Frame 429 Terminal sudah terbuka penuh dan terpasang kokoh
  const wipe3Progress = interpolate(frame, [412, 422], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 4: Laser Shutter Wipe ke 5 Kategori (Scene 4 -> Scene 5, Frames 616 -> 626)
  const wipe4Progress = interpolate(frame, [616, 626], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 5: Laser Shutter Wipe ke Camera Journey (Scene 5 -> Scene 6, Frames 730 -> 738)
  const wipe5Progress = interpolate(frame, [730, 738], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Visibility flags
  // Scene 1: The Web App Opening Hook (0 - 75f)
  const showScene1 = frame < 76;
  // Scene 2: The Red Hazard Error Intercept & 403, 404, 500 (72 - 305f)
  const showScene2 = frame >= 72 && frame < 306;
  // Scene 3: The Official Revelation "HTTP Status Code" (300 - 422f)
  const showScene3 = frame >= 300 && frame < 422;
  // Scene 4: macOS Terminal Definition Typewriter (414 - 626f)
  const showScene4 = frame >= 414 && frame < 626;
  // Scene 5: 5 Core Categories Matrix Dispatcher (620 - 738f)
  const showScene5 = frame >= 620 && frame < 738;
  // Scene 6: Infinite Camera Movement Journey 2xx, 3xx, 4xx, 5xx (735 - 1620f)
  const showScene6 = frame >= 735;

  // Background Switching:
  // - Frames 0 - 71: Cyber Blue/Cyan Space
  // - Frames 72 - 302: Crimson Hazard Alert Space (Red Background)
  // - Frames 303 - 734: Cyber Space
  // - Frames 735+: Infinite Cyber Parallax Space (Camera Reactive)
  const renderBackground = () => {
    if (frame >= 735) {
      return <CyberParallaxSpace cameraX={camera.x} />;
    }
    if (frame >= 72 && frame < 302) {
      return <CrimsonAlertSpace />;
    }
    return (
      <HttpStatusCodeBackground
        accentColor={
          frame >= 418 ? HTTP_COLORS.status2xx : HTTP_COLORS.accentCyan
        }
      />
    );
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: HTTP_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Dynamic Background Space */}
      {renderBackground()}

      {/* 2. Audio Voiceover (http-status-code.wav: 53.88s / 1620 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("http-status-code.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: The Web App Opening Hook (0 - 75f) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Error Intercept & 403, 404, 500 (72 - 305f) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Official Revelation "HTTP Status Code" (300 - 428f) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: macOS Terminal Definition Typewriter (414 - 626f) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: 5 Categories Dispatcher (620 - 738f) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Infinite Camera Movement (2xx, 3xx, 4xx, 5xx) (735 - 1618f) */}
      {/* 9. Scene 6 View: Infinite Camera Movement (2xx, 3xx, 4xx, 5xx) (735 - 1620f) */}
      {showScene6 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene6 camera={camera} />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 10. Transition Wipes */}
      <LaserShutterWipe progress={wipe1Progress} color={HTTP_COLORS.status5xx} />
      <LaserShutterWipe progress={wipe2Progress} color={HTTP_COLORS.accentCyan} />
      <LaserShutterWipe progress={wipe3Progress} color={HTTP_COLORS.status2xx} />
      <LaserShutterWipe progress={wipe4Progress} color={HTTP_COLORS.accentPurple} />
      <LaserShutterWipe progress={wipe5Progress} color={HTTP_COLORS.status2xx} />
    </AbsoluteFill>
  );
};

