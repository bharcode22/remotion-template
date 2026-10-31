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
          SCENE 1: THE WEB APP OPENING HOOK (Frames 0 - 75)
          Voiceover: "Pernah membuka sebuah web app," (Frames 9 - 60)
          ─────────────────────────────────────────────────────────── */}

      {/* 1. Cinematic sub boom entrance at Frame 2 */}
      <Sequence from={2} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 2. Shutter lock snap when browser window lands at Frame 8 */}
      <Sequence from={8} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 3. Tech counter click as URL activates at Frame 26 */}
      <Sequence from={26} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 4. Radar blip ping as web app dashboard connects at Frame 55 */}
      <Sequence from={55} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 5. Clean fast whoosh transition buffer at Frame 68 */}
      <Sequence from={68} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 2: ERROR INTERCEPT & STATUS CODES (Frames 72 - 305)
          Voiceover:
          - "tetapi bukannya masuk ke sistem," (Frames 71 - 126)
          - "kamu justru menemukan angka seperti 403, 404, atau 500?" (Frames 131 - 283)
          ─────────────────────────────────────────────────────────── */}

      {/* 6. Tension bass drop as access fails at Frame 76 */}
      <Sequence from={76} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/11_tension_bass_drop.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 7. Shutter lock snap for 403 Forbidden card at Frame 182 */}
      <Sequence from={182} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 8. Shutter lock snap for 404 Not Found card at Frame 206 */}
      <Sequence from={206} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 9. Heavy glitch stamp impact for 500 Server Error card at Frame 234 */}
      <Sequence from={234} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 10. Radar ping resonance highlight at Frame 260 */}
      <Sequence from={260} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 3: THE OFFICIAL REVELATION (Frames 300 - 428)
          Voiceover: "angka-angka tersebut disebut HTTP Status Code." (Frames 311 - 401)
          ─────────────────────────────────────────────────────────── */}

      {/* 11. Laser whoosh transition into Scene 3 at Frame 300 */}
      <Sequence from={300} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 12. Focus snap shutter as intro text lands at Frame 311 */}
      <Sequence from={311} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 13. Digital pop chime when HTTP STATUS CODE reveals at Frame 352 */}
      <Sequence from={352} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 4: MACOS TERMINAL TYPEWRITER (Frames 414 - 630)
          Voiceover: "Status code adalah kode yang dikirimkan server..." (Mulai aktif F429)
          ─────────────────────────────────────────────────────────── */}

      {/* 14. Transition whoosh into Terminal at Frame 414 */}
      <Sequence from={414} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 15. Shutter lock snap when Terminal lands at Frame 420 */}
      <Sequence from={420} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 16. Typing clicks for Phrase 1: "Status code adalah kode" (Mulai F429) */}
      <Sequence from={429} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={455} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 17. Typing clicks for Phrase 2: "yang dikirimkan server" */}
      <Sequence from={488} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={512} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 18. Typing click for Phrase 3: "untuk memberikan informasi" */}
      <Sequence from={538} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 19. Typing click for Phrase 4: "tentang hasil sebuah request." */}
      <Sequence from={578} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 20. Radar ping chime when Lifecycle diagram expands at Frame 598 */}
      <Sequence from={598} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 5: 5 STATUS CATEGORIES DISPATCHER (Frames 624 - 740)
          Voiceover: "Secara umum, status code dibagi menjadi 5 kategori:" (Frames 633 - 721)
          ─────────────────────────────────────────────────────────── */}

      {/* 21. Transition whoosh into 5 Categories at Frame 625 */}
      <Sequence from={625} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 22. Staggered category socket pops (Frames 648 - 680) */}
      <Sequence from={648} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={656} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={664} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={672} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={680} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 23. Complete taxonomy pop ding at Frame 688 */}
      <Sequence from={688} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ───────────────────────────────────────────────────────────
          SCENE 6: INFINITE CAMERA MOVEMENT JOURNEY (Frames 735 - 1115)
          - Station 2xx: Success (Frames 738 - 890)
          - Camera Slide 1 (2xx -> 3xx): Frames 890 - 915
          - Station 3xx: Redirection (Frames 915 - 1115)
          ─────────────────────────────────────────────────────────── */}

      {/* 24. Shutter lock on Station 2xx Success at Frame 738 */}
      <Sequence from={738} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 25. Pop ding for 200 & 201 cards reveal at Frame 830 */}
      <Sequence from={830} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 26. Heavy pan whoosh moving camera from 2xx to 3xx at Frame 892 */}
      <Sequence from={892} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 27. Station lock latch landing on Station 3xx at Frame 915 */}
      <Sequence from={915} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 28. Pop ding for 301 & 302 cards reveal at Frame 1022 */}
      <Sequence from={1022} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 29. Heavy pan whoosh moving camera from 3xx to 4xx at Frame 1098 */}
      <Sequence from={1098} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 30. Station lock latch landing on Station 4xx at Frame 1116 */}
      <Sequence from={1116} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 31. Pop ding for 4xx cards reveal at Frame 1240 */}
      <Sequence from={1240} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 32. Heavy pan whoosh moving camera from 4xx to 5xx at Frame 1362 */}
      <Sequence from={1362} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 33. Station lock latch landing on Station 5xx at Frame 1383 */}
      <Sequence from={1383} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 34. Heavy glitch stamp impact for 500 error at Frame 1508 */}
      <Sequence from={1508} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 35. Grand Finale Chime at Frame 1590 */}
      <Sequence from={1590} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.85 * volume}
        />
      </Sequence>
    </>
  );
};

