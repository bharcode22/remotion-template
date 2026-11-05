import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { GlobalTechBackground } from "./Background/GlobalTechBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9 } from "./Scenes";
import { INTRO_COLORS } from "./constants";
import { ProductIntroductionProps } from "./types";

export const ProductIntroduction: React.FC<ProductIntroductionProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Scene 1: Hook & Architecture Introduction (Line 1: F0 - F100)
  const showScene1 = frame < 100;

  // Scene 2: Terminal Intro & Product Discovery (Line 2: F100 - F200)
  const showScene2 = frame >= 100 && frame < 200;

  // Scene 3: Camera Journey - IoT & Wellness ➔ Pod Capsule ➔ Debian PC (Lines 4 - 6: F200 - F575)
  const showScene3 = frame >= 200 && frame < 575;

  // Scene 4: Interconnected Architecture - PC Pusat Kendali Hardware & Software (Line 8: F575 - F770)
  const showScene4 = frame >= 575 && frame < 770;

  // Scene 5: The Challenge - Harus Tetap Berjalan Online Maupun Offline (Lines 10 - 11: F770 - F980)
  const showScene5 = frame >= 770 && frame < 980;

  // Scene 6: Two-Way Synchronization Mechanism Hook (Line 13: F980 - F1110)
  const showScene6 = frame >= 980 && frame < 1110;

  // Scene 7: Downstream Distribution - Dari Cloud ke Multiple Pods (Line 14: F1110 - F1295)
  const showScene7 = frame >= 1110 && frame < 1295;

  // Scene 8: Upstream Telemetry - Dari Multiple Pods ke Cloud (Line 15: F1295 - F1470)
  const showScene8 = frame >= 1295 && frame < 1470;

  // Scene 9: Grand Finale - Hybrid Edge-Cloud Autonomous Fleet (Line 17: F1470 - F1710)
  const showScene9 = frame >= 1470 && frame <= 1710;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: INTRO_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Global Ambient Tech Background */}
      <GlobalTechBackground />

      {/* 2. Primary Voiceover Audio Track (public/basic.wav) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("basic.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Synchronized Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: Hook & 3-Tier Architecture (Line 1: Frames 0 - 100) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Terminal Typewriter & Product Discovery (Line 2: Frames 100 - 200) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Camera Journey - IoT & Wellness ➔ Pod Capsule ➔ Debian PC (Lines 4 - 6: Frames 200 - 575) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Interconnected Architecture Mesh (Line 8: Frames 575 - 770) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: The Challenge - Online & Offline Resilience (Lines 10 - 11: Frames 770 - 980) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Two-Way Synchronization Mechanism Hook (Line 13: Frames 980 - 1110) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Scene 7 View: Downstream Distribution - Cloud to Multiple Pods (Line 14: Frames 1110 - 1295) */}
      {showScene7 && (
        <AbsoluteFill>
          <Scene7 />
        </AbsoluteFill>
      )}

      {/* 11. Scene 8 View: Upstream Telemetry - Multiple Pods to Cloud (Line 15: Frames 1295 - 1470) */}
      {showScene8 && (
        <AbsoluteFill>
          <Scene8 />
        </AbsoluteFill>
      )}

      {/* 12. Scene 9 View: Grand Finale - Hybrid Edge-Cloud Autonomous Fleet (Line 17: Frames 1470 - 1710) */}
      {showScene9 && (
        <AbsoluteFill>
          <Scene9 />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

