import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { RabbitMQBackground } from "./Background/RabbitMQBackground";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import {
  Scene1,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Scene7,
} from "./Scenes";
import { RABBITMQ_COLORS } from "./constants";
import { RabbitMQDistributionProps } from "./types";

export const RabbitMQDistribution: React.FC<RabbitMQDistributionProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Transition 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frames 160 -> 168)
  const wipe1Progress = interpolate(frame, [160, 168], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 2: Laser Shutter Wipe (Scene 2 -> Scene 3, Frames 324 -> 332)
  const wipe2Progress = interpolate(frame, [324, 332], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 3: Laser Shutter Wipe (Scene 3 -> Scene 4, Frames 608 -> 616)
  const wipe3Progress = interpolate(frame, [608, 616], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 4: Laser Shutter Wipe (Scene 4 -> Scene 5, Frames 796 -> 804)
  const wipe4Progress = interpolate(frame, [796, 804], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 5: Laser Shutter Wipe (Scene 5 -> Scene 6, Frames 996 -> 1004)
  const wipe5Progress = interpolate(frame, [996, 1004], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition 6: Laser Shutter Wipe (Scene 6 -> Scene 7, Frames 1196 -> 1204)
  const wipe6Progress = interpolate(frame, [1196, 1204], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene Visibility Flags
  const showScene1 = frame < 165;
  const showScene2 = frame >= 162 && frame < 332;
  const showScene3 = frame >= 328 && frame < 614;
  const showScene4 = frame >= 610 && frame < 802;
  const showScene5 = frame >= 798 && frame < 1002;
  const showScene6 = frame >= 998 && frame < 1202;
  const showScene7 = frame >= 1198;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: RABBITMQ_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Network Ambient Background */}
      <RabbitMQBackground />

      {/* 2. Voiceover Audio (rabbitmq.wav: 47.48s / 1425 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("rabbitmq.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Multimedia Distribution to Dozens of Devices (Frames 0 - 165) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: The Manual Struggle & Hook Question (Frames 162 - 332) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Office Hardware Products with Linux PC (Frames 328 - 614) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: RabbitMQ as Message Broker (Frames 610 - 802) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: Web App as Publisher Dispatching Event (Frames 798 - 1002) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Products as Subscribers Waiting & Receiving Event (Frames 998 - 1202) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Scene 7 View: Automatic Download & Local Storage Save (Frames 1198 - 1430) */}
      {showScene7 && (
        <AbsoluteFill>
          <Scene7 />
        </AbsoluteFill>
      )}

      {/* 11. Laser Shutter Wipe Transitions */}
      <LaserShutterWipe progress={wipe1Progress} color="#ef4444" />
      <LaserShutterWipe progress={wipe2Progress} color={RABBITMQ_COLORS.linuxGreen} />
      <LaserShutterWipe progress={wipe3Progress} color={RABBITMQ_COLORS.rabbitOrange} />
      <LaserShutterWipe progress={wipe4Progress} color={RABBITMQ_COLORS.cloudCyan} />
      <LaserShutterWipe progress={wipe5Progress} color={RABBITMQ_COLORS.linuxGreen} />
      <LaserShutterWipe progress={wipe6Progress} color="#38bdf8" />
    </AbsoluteFill>
  );
};
