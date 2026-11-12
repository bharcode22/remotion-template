import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundEffectsManagerProps {
  enableSfx?: boolean;
  sfxVolume?: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  if (!enableSfx) return null;

  return (
    <>
      {/* 1. Card Entrance Fast Clean Whoosh */}
      <Sequence from={2}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.7 * sfxVolume}
        />
      </Sequence>

      {/* 2. Tactile Button Click */}
      <Sequence from={78}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.9 * sfxVolume}
        />
      </Sequence>

      {/* 3. Success Pop Ding */}
      <Sequence from={82}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.8 * sfxVolume}
        />
      </Sequence>
    </>
  );
};
