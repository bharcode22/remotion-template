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
      {/* Scene 1: Web App whoosh entrance */}
      <Sequence from={2}>
        <Audio src={staticFile("sound_fx/02_clean_fast_whoosh.wav")} volume={0.6 * sfxVolume} />
      </Sequence>

      {/* Scene 2: Urgent alert blip */}
      <Sequence from={68}>
        <Audio src={staticFile("sound_fx/04_radar_ping_blip.wav")} volume={0.7 * sfxVolume} />
      </Sequence>

      {/* Scene 3: Relief pop ding */}
      <Sequence from={158}>
        <Audio src={staticFile("sound_fx/10_funny_pop_ding.wav")} volume={0.7 * sfxVolume} />
      </Sequence>

      {/* Scene 4: Hero Electron reveal whoosh + snap */}
      <Sequence from={242}>
        <Audio src={staticFile("sound_fx/02_clean_fast_whoosh.wav")} volume={0.75 * sfxVolume} />
      </Sequence>
      <Sequence from={248}>
        <Audio src={staticFile("sound_fx/07_focus_snap_shutter.wav")} volume={0.8 * sfxVolume} />
      </Sequence>

      {/* Scene 5: Tech stack chips staggered clicks */}
      <Sequence from={330}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.85 * sfxVolume} />
      </Sequence>
      <Sequence from={370}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.85 * sfxVolume} />
      </Sequence>
      <Sequence from={410}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.85 * sfxVolume} />
      </Sequence>

      {/* Scene 6: Reuse code lock latch & progressive reveal clicks */}
      <Sequence from={548}>
        <Audio src={staticFile("sound_fx/12_station_lock_latch.wav")} volume={0.75 * sfxVolume} />
      </Sequence>
      <Sequence from={625}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.8 * sfxVolume} />
      </Sequence>
      <Sequence from={655}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.8 * sfxVolume} />
      </Sequence>
      <Sequence from={680}>
        <Audio src={staticFile("sound_fx/10_funny_pop_ding.wav")} volume={0.7 * sfxVolume} />
      </Sequence>

      {/* Scene 7: Multi-platform OS taps + Grand Finale chime */}
      <Sequence from={730}>
        <Audio src={staticFile("sound_fx/02_clean_fast_whoosh.wav")} volume={0.7 * sfxVolume} />
      </Sequence>
      <Sequence from={750}>
        <Audio src={staticFile("sound_fx/12_station_lock_latch.wav")} volume={0.75 * sfxVolume} />
      </Sequence>
      <Sequence from={862}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.9 * sfxVolume} />
      </Sequence>
      <Sequence from={898}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.9 * sfxVolume} />
      </Sequence>
      <Sequence from={917}>
        <Audio src={staticFile("sound_fx/03_digital_counter_click.wav")} volume={0.9 * sfxVolume} />
      </Sequence>
      <Sequence from={922}>
        <Audio src={staticFile("sound_fx/14_grand_finale_chime.wav")} volume={0.9 * sfxVolume} />
      </Sequence>
    </>
  );
};
