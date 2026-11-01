import React from "react";
import { Sequence, staticFile, Audio } from "remotion";

export interface SoundEffectsManagerProps {
  volume?: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 1 SFX TIMELINE (Frames 0 - 135)
          Line 1: "Ketika sekarang semua orang bisa membuat aplikasi dengan bantuan AI,"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 1. Header Focus Snap Shutter (Frame 6) */}
      <Sequence from={6} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2. Prompt Input Click (Frame 18) */}
      <Sequence from={18} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 3. AI Generation Neural Spark (Frame 54) */}
      <Sequence from={54} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 4. Instant App Preview Pop Ding (Frame 94) */}
      <Sequence from={94} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. AI Complete Tag Radar Blip (Frame 112) */}
      <Sequence from={112} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 2 SFX TIMELINE (Frames 132 - 255)
          Line 2: "apa yang bisa menjadi nilai tambah kita sebagai developer?"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 6. Laser Shutter Wipe Transition (Frame 132) */}
      <Sequence from={132} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 7. Question Stamp Impact Glitch (Frame 136) */}
      <Sequence from={136} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 8. Centerpiece Card Pop Ding (Frame 158) */}
      <Sequence from={158} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 9. Reflection Pill Radar Ping (Frame 195) */}
      <Sequence from={195} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
    </>
  );
};

