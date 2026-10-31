import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

export interface SoundEffectsManagerProps {
  volume?: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 1 SFX TIMELINE (Frames 0 - 140)
          Line 1: "Dalam pengembangan aplikasi," (F10 - F53)
          Line 2: "ada dua bagian penting yang sering kita dengar," (F62 - F126)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 1. Cinematic Opening Sub Boom (Frame 0) */}
      <Sequence durationInFrames={75}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 2. Fast Whoosh for Line 1 App Architecture Card (Frame 10) */}
      <Sequence from={10} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 3. Focus Snap Shutter for Line 2 Dual Pillars Transition (Frame 58) */}
      <Sequence from={58} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Pop Ding for Left Pillar: Frontend Banner Reveal (Frame 160) */}
      <Sequence from={160} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 5. Station Lock Latch for Right Pillar: Backend Banner Reveal (Frame 178) */}
      <Sequence from={178} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 6. Radar Ping Blip for Bridge Connection (Frame 192) */}
      <Sequence from={192} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 7. Counter Click for System Architecture Pill (Frame 198) */}
      <Sequence from={198} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 2 SFX TIMELINE (Frames 220 - 350)
          Line 6: "Frontend adalah bagian aplikasi yang berinteraksi langsung dengan pengguna."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 8. Laser Shutter Wipe Transition (Frame 222) */}
      <Sequence from={222} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 9. Focus Snap Shutter for Terminal Open (Frame 226) */}
      <Sequence from={226} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 10. Digital Typewriter Mechanical Clicks */}
      <Sequence from={245} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={275} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={305} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 11. Completion Pop Ding (Frame 318) */}
      <Sequence from={318} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 3 SFX TIMELINE (Frames 344 - 535)
          Lines 7 - 10: "Mulai dari tampilan, tombol, formulir, hingga animasi..."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 12. Laser Shutter Wipe Transition (Frame 342) */}
      <Sequence from={342} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 13. Pop Ding for Popup 1: Tampilan (Frame 346) */}
      <Sequence from={346} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 14. Focus Snap Shutter for Popup 2: Tombol (Frame 372) */}
      <Sequence from={372} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 15. Pop Ding for Popup 3: Formulir (Frame 403) */}
      <Sequence from={403} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 16. Circuit Electric Spark for Popup 4: Animasi (Frame 456) */}
      <Sequence from={456} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 17. Radar Ping Blip for Bottom Pill (Frame 485) */}
      <Sequence from={485} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 4 SFX TIMELINE (Frames 534 - 645)
          Line 12: "Sedangkan Backend adalah bagian yang bekerja di balik layar."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 18. Laser Shutter Wipe Transition (Frame 534) */}
      <Sequence from={534} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 19. Focus Snap Shutter for Backend Terminal Open (Frame 538) */}
      <Sequence from={538} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 20. Digital Typewriter Mechanical Clicks */}
      <Sequence from={555} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={580} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={605} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 21. Completion Pop Ding (Frame 616) */}
      <Sequence from={616} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 5 SFX TIMELINE (Frames 640 - 890)
          Lines 13 - 16: "Backend bertanggung jawab untuk mengelola data, logika bisnis, autentikasi, database"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 22. Laser Shutter Wipe Transition (Frame 640) */}
      <Sequence from={640} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 23. Pop Ding for Card 1: Mengelola Data (Frame 642) */}
      <Sequence from={642} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 24. Focus Snap Shutter for Card 2: Logika Bisnis (Frame 717) */}
      <Sequence from={717} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 25. Pop Ding for Card 3: Autentikasi (Frame 766) */}
      <Sequence from={766} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 26. Circuit Electric Spark for Card 4: Database (Frame 810) */}
      <Sequence from={810} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 27. Radar Ping Blip for Bottom Status Pill (Frame 845) */}
      <Sequence from={845} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 6 SFX TIMELINE (Frames 882 - 1260)
          Lines 18 - 20: "Sederhananya, bayangkan sebuah pisau. Frontend adalah gagangnya... Backend adalah mata pisaunya..."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 28. Laser Shutter Wipe Transition (Frame 882) */}
      <Sequence from={882} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 29. Focus Snap Shutter for Knife Metaphor Card (Frame 890) */}
      <Sequence from={890} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 30. Pop Ding for Frontend Handle Card (Frame 970) */}
      <Sequence from={970} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 31. Focus Snap Shutter for Handle Highlight (Frame 985) */}
      <Sequence from={985} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 32. Circuit Electric Spark for Backend Blade Card (Frame 1100) */}
      <Sequence from={1100} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 33. Station Lock Latch for Blade Lock (Frame 1120) */}
      <Sequence from={1120} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 34. Grand Finale Chime for Synergy Banner (Frame 1180) */}
      <Sequence from={1180} durationInFrames={80}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 35. Cinematic Sub Boom for Grand Finale (Frame 1185) */}
      <Sequence from={1185} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.55 * volume}
        />
      </Sequence>
    </>
  );
};
