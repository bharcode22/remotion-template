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
          SCENE 1 INTRO HOOK SFX (0 - 75f)
          ─────────────────────────────────────────────────────────── */}
      {/* 1. Cinematic Sub Boom Intro at Frame 2 */}
      <Sequence from={2} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 2. Digital Counter Click when headline lands at Frame 8 */}
      <Sequence from={8} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 3. Radar Ping Blip on Handshake Packet at Frame 18 */}
      <Sequence from={18} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 4. Fast Whoosh on Shutter Transition at Frame 68 */}
      <Sequence from={68} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 2 AI RESPONSE CONSOLE SFX (75 - 280f)
          ─────────────────────────────────────────────────────────── */}
      {/* 5. Focus snap shutter when AI Console lands at Frame 76 */}
      <Sequence from={76} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 6. Click when prompt is sent at Frame 100 */}
      <Sequence from={100} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 7. Subtle digital blip as AI begins streaming at Frame 112 */}
      <Sequence from={112} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 8. Digital click as core rules cross center at Frame 155 */}
      <Sequence from={155} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 9. Whoosh transition out towards Scene 3 at Frame 272 */}
      <Sequence from={272} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 3 AI METHOD DISPATCHER SFX (278 - 466f)
          ─────────────────────────────────────────────────────────── */}
      {/* 10. Focus snap shutter when Scene 3 terminal opens at Frame 278 */}
      <Sequence from={278} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 11. Subtle radar ping as AI streams method explanation at Frame 321 */}
      <Sequence from={321} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 12. Digital chime/impact when 'Diantaranya:' and 4 sockets reveal at Frame 426 */}
      <Sequence from={426} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 13. Fast whoosh transition towards Scene 4 at Frame 458 */}
      <Sequence from={458} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 4 4 CORE HTTP METHODS CAMERA SLIDE SFX (466 - 807f)
          ─────────────────────────────────────────────────────────── */}
      {/* 14. Focus snap shutter on GET station at Frame 466 */}
      <Sequence from={466} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 15. Heavy pan whoosh moving left to POST at Frame 522 */}
      <Sequence from={522} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 16. Station lock latch landing on POST at Frame 542 */}
      <Sequence from={542} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 17. Heavy pan whoosh moving left to PUT at Frame 602 */}
      <Sequence from={602} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 18. Station lock latch landing on PUT at Frame 622 */}
      <Sequence from={622} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 19. Heavy pan whoosh moving left to DELETE at Frame 698 */}
      <Sequence from={698} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 20. Station lock latch landing on DELETE at Frame 718 */}
      <Sequence from={718} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 21. Fast whoosh transition out towards Scene 5 at Frame 786 */}
      <Sequence from={786} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 5 macOS TERMINAL TYPEWRITER & ANOMALY SFX (796 - 1105f)
          ─────────────────────────────────────────────────────────── */}
      {/* 22. Focus snap shutter when Mac Terminal lands at Frame 796 */}
      <Sequence from={796} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 23. Keyboard typing click bursts during Line 16 (Frames 806 - 848) */}
      <Sequence from={806} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={822} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={838} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={854} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 24. Typing click bursts during Line 18 curl command (Frames 888 - 920) */}
      <Sequence from={888} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={908} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 25. Enter punch / command dispatch at Frame 930 */}
      <Sequence from={930} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 26. Anomaly alert blip when bilateral comparison (PUT vs GET) appears at Frame 995 */}
      <Sequence from={995} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 27. Fast whoosh transition towards Scene 6 at Frame 1095 */}
      <Sequence from={1095} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 6 CLIMAX & VERDICT SFX (1100 - 1290f)
          ─────────────────────────────────────────────────────────── */}
      {/* 28. Focus snap shutter when Scene 6 terminal lands at Frame 1102 */}
      <Sequence from={1102} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 29. Typing clicks for Line 22 (Frames 1110 - 1145) */}
      <Sequence from={1112} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={1132} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 30. Typing clicks for Line 23 (Frames 1168 - 1205) */}
      <Sequence from={1170} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={1192} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 31. Glitch Stamp Impact when 'BUKAN REST API' slams down at Frame 1205 */}
      <Sequence from={1205} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 32. Typing clicks for Line 24 (Frames 1242 - 1272) */}
      <Sequence from={1244} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={1262} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 33. Grand Finale Chime at Frame 1275 */}
      <Sequence from={1275} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.8 * volume}
        />
      </Sequence>
    </>
  );
};
