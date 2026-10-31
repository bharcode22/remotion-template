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
      {/* ───────────────────────────────────────────────────────────
          SCENE 1: QUESTION HOOK (Frames 0 - 54)
          Voiceover Line 1: "Pernahkah kalian bertanya," (Frames 6 - 46)
          ─────────────────────────────────────────────────────────── */}

      {/* 1. Cinematic sub boom impact at intro */}
      <Sequence from={2} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 2. Radar ping blip for Question Beacon */}
      <Sequence from={6} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 2: MACOS TERMINAL TYPEWRITER (Frames 50 - 300)
          Voiceover Line 2: "ketika kita meng-upload foto, video, atau dokumen ke sebuah aplikasi," (Frames 53 - 185)
          Voiceover Line 3: "sebenarnya file tersebut disimpan di mana?" (Frames 201 - 264)
          ─────────────────────────────────────────────────────────── */}

      {/* 3. Fast laser whoosh transition to Scene 2 */}
      <Sequence from={50} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 4. Terminal focus shutter lock */}
      <Sequence from={54} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 5. Typewriter typing clicks */}
      <Sequence from={65} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 6. Foto badge pop ding */}
      <Sequence from={90} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 7. Typing click */}
      <Sequence from={102} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 8. Video badge pop ding */}
      <Sequence from={115} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 9. Typing click */}
      <Sequence from={128} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 10. Dokumen badge pop ding */}
      <Sequence from={140} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 11. Typing click */}
      <Sequence from={152} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 12. Ke Aplikasi badge pop ding */}
      <Sequence from={165} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 13. Laser beam slash leading into mystery question (Line 3) */}
      <Sequence from={198} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 14. Typing clicks for Line 3 */}
      <Sequence from={206} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={225} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={245} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 15. Tension bass drop on mystery question */}
      <Sequence from={258} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/11_tension_bass_drop.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 3: THE OFFICIAL ANSWER (Frames 292 - 380)
          Voiceover Line 5: "Jawabannya adalah storage server." (Speech: Frames 294 - 350)
          ─────────────────────────────────────────────────────────── */}

      {/* 16. Transition whoosh into Scene 3 */}
      <Sequence from={288} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 17. Shutter lock on Answer card */}
      <Sequence from={294} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 18. Pop ding on STORAGE SERVER title reveal */}
      <Sequence from={304} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 19. Radar blip for server status online */}
      <Sequence from={315} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 4: MACOS TERMINAL DEFINITION & MEDIA TYPES (Frames 376 - 680)
          Voiceover Lines 7 - 8: "Storage server, merupakan media penyimpanan..." (Frames 379 - 518)
          Voiceover Line 9: "mulai dari dokumen, gambar, audio, hingga video." (Frames 534 - 648)
          ─────────────────────────────────────────────────────────── */}

      {/* 20. Transition whoosh into Scene 4 */}
      <Sequence from={374} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 21. Terminal snap lock */}
      <Sequence from={380} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 22. Typing clicks for Lines 7 - 8 */}
      <Sequence from={395} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={425} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={455} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={485} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 23. Laser slash into Line 9 media types */}
      <Sequence from={525} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 24. Pop ding for Dokumen card */}
      <Sequence from={540} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 25. Pop ding for Gambar card */}
      <Sequence from={575} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 26. Pop ding for Audio card */}
      <Sequence from={605} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 27. Latch lock for Video card */}
      <Sequence from={630} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 28. Radar ping blip completion */}
      <Sequence from={655} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 5: STORAGE APPROACHES OVERVIEW (Frames 675 - 798)
          Voiceover Line 11: "Secara umum, ada beberapa pendekatan penyimpanan yang sering digunakan."
          ─────────────────────────────────────────────────────────── */}

      {/* 29. Transition whoosh into Scene 5 */}
      <Sequence from={673} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 30. Overview focus shutter lock */}
      <Sequence from={678} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 31. Pop ding for Local Storage preview card */}
      <Sequence from={690} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 32. Pop ding for Object Storage preview card */}
      <Sequence from={702} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 6: INFINITE CAMERA MOVEMENT JOURNEY (Frames 790 - 1680)
          - Station 1: Local Storage Concept (Line 13)
          - Station 2: Object Storage Concept (Line 15)
          - Station 3: Local Storage Deep Dive Typewriter (Lines 17 - 18)
          - Station 4: Object Storage Deep Dive Typewriter (Lines 20 - 22)
          ─────────────────────────────────────────────────────────── */}

      {/* 33. Transition whoosh into Camera Journey at Frame 790 */}
      <Sequence from={790} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 34. Shutter lock on Station 1 at Frame 798 */}
      <Sequence from={798} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 35. Radar ping blip for disk diagram at Frame 812 */}
      <Sequence from={812} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 36. Heavy pan whoosh: Slide 1 (Station 1 -> Station 2) at Frame 936 */}
      <Sequence from={936} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 37. Station lock latch landing on Station 2 at Frame 958 */}
      <Sequence from={958} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 38. Pop dings for GCP, AWS S3, and Azure cards */}
      <Sequence from={1020} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={1055} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={1090} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 39. Heavy pan whoosh: Slide 2 (Station 2 -> Station 3) at Frame 1162 */}
      <Sequence from={1162} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 40. Station lock latch landing on Station 3 at Frame 1184 */}
      <Sequence from={1184} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 41. Typing clicks for Station 3 */}
      <Sequence from={1195} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1225} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1255} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1295} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 42. Pop dings for Station 3 use case cards */}
      <Sequence from={1285} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={1320} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 43. Heavy pan whoosh: Slide 3 (Station 3 -> Station 4) at Frame 1366 */}
      <Sequence from={1366} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 44. Station lock latch landing on Station 4 at Frame 1382 */}
      <Sequence from={1382} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 45. Typing clicks for Station 4 */}
      <Sequence from={1395} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1425} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1455} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1500} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={1530} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 46. Advantage cards reveals on Station 4 */}
      <Sequence from={1490} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={1525} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={1560} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 47. Grand Finale Chime at Frame 1605 */}
      <Sequence from={1605} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.9 * volume}
        />
      </Sequence>
    </>
  );
};

