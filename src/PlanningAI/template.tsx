import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { GlobalTechBackground } from "./Background/GlobalTechBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8 } from "./Scenes";
import { PLANNING_COLORS } from "./constants";
import { PlanningAIProps } from "./types";

export const PlanningAI: React.FC<PlanningAIProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // Scene 1: The AI Hook & Developer Value (Lines 1 - 2: Frames 0 - 225)
  const showScene1 = frame < 225;
  // Scene 2: The Core Answer - Understanding & Directing AI (Lines 4 - 5: Frames 225 - 460)
  const showScene2 = frame >= 225 && frame < 460;
  // Scene 3: Tech Stack First (Lines 7 - 8: Frames 460 - 645)
  const showScene3 = frame >= 460 && frame < 645;
  // Scene 4: Prompt Step-by-Step (Line 10: Frames 645 - 805)
  const showScene4 = frame >= 645 && frame < 805;
  // Scene 5: DB, Tipe Data, Relasi, Backend, Frontend (Lines 12 - 13: Frames 805 - 1080)
  const showScene5 = frame >= 805 && frame < 1080;
  // Scene 6: Fondasi Aplikasi Terstruktur (Line 15: Frames 1080 - 1205)
  const showScene6 = frame >= 1080 && frame < 1205;
  // Scene 7: Maintenance, Fitur, Revisi Mudah (Line 16: Frames 1205 - 1410)
  const showScene7 = frame >= 1205 && frame < 1410;
  // Scene 8: Golden Rule & Precision Steering (Line 17: Frames 1410 - 1600)
  const showScene8 = frame >= 1410;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PLANNING_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Global Ambient Tech Background */}
      <GlobalTechBackground />

      {/* 2. Primary Voiceover Audio Track (public/planing AI.wav) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("planing AI.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Synchronized Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1 View: The Hook & Developer Value (Lines 1 - 2: Frames 0 - 225) */}
      {showScene1 && (
        <AbsoluteFill>
          <Scene1 />
        </AbsoluteFill>
      )}

      {/* 5. Scene 2 View: Core Answer - Understanding & Steering AI (Lines 4 - 5: Frames 225 - 460) */}
      {showScene2 && (
        <AbsoluteFill>
          <Scene2 />
        </AbsoluteFill>
      )}

      {/* 6. Scene 3 View: Tech Stack First (Lines 7 - 8: Frames 460 - 645) */}
      {showScene3 && (
        <AbsoluteFill>
          <Scene3 />
        </AbsoluteFill>
      )}

      {/* 7. Scene 4 View: Prompt Secara Bertahap (Line 10: Frames 645 - 805) */}
      {showScene4 && (
        <AbsoluteFill>
          <Scene4 />
        </AbsoluteFill>
      )}

      {/* 8. Scene 5 View: DB, Backend, Frontend (Lines 12 - 13: Frames 805 - 1080) */}
      {showScene5 && (
        <AbsoluteFill>
          <Scene5 />
        </AbsoluteFill>
      )}

      {/* 9. Scene 6 View: Fondasi Aplikasi Terstruktur (Line 15: Frames 1080 - 1205) */}
      {showScene6 && (
        <AbsoluteFill>
          <Scene6 />
        </AbsoluteFill>
      )}

      {/* 10. Scene 7 View: Maintenance, Fitur, Revisi Mudah (Line 16: Frames 1205 - 1410) */}
      {showScene7 && (
        <AbsoluteFill>
          <Scene7 />
        </AbsoluteFill>
      )}

      {/* 11. Scene 8 View: Golden Rule & Steering AI (Line 17: Frames 1410 - 1600) */}
      {showScene8 && (
        <AbsoluteFill>
          <Scene8 />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

