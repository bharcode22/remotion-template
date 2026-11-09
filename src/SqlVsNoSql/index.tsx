import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { UnifiedSqlVsNoSql } from "./Scenes/UnifiedSqlVsNoSql";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { TOTAL_FRAMES, FPS } from "./constants";

export { TOTAL_FRAMES, FPS };

export interface SqlVsNoSqlProps {
  enableVoiceover?: boolean;
  voiceoverVolume?: number;
  enableSfx?: boolean;
  sfxVolume?: number;
}

export const SqlVsNoSql: React.FC<SqlVsNoSqlProps> = ({
  enableVoiceover = true,
  voiceoverVolume = 1.0,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060913" }}>
      {/* 1. Cyber Background Grid & Ambient Glows */}
      <GlassBackground />

      {/* 2. Visual Scenes (5 Scenes terkalibrasi presisi dengan VO) */}
      <UnifiedSqlVsNoSql />

      {/* 3. User Voiceover Track (public/sql vs nosql.wav) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("sql vs nosql.wav")}
          volume={voiceoverVolume}
        />
      )}

      {/* 4. Curated & Soft Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}
    </AbsoluteFill>
  );
};
