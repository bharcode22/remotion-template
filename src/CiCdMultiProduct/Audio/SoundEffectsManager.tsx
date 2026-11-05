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
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 1 (Frames 0 - 170)
          Line 1: "kamu harus melakukan update aplikasi," (F0 - F60)
          Line 2: "ke ratusan server yang tersebar di berbagai dunia." (F71 - F152)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Cinematic Ambient Intro Rise (Frame 2) */}
      <Sequence from={2} durationInFrames={45}>
        <Audio
          src={staticFile("sound_fx_smooth/01_smooth_ambient_swell.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 2. Top Category Badge Ping (Frame 12) */}
      <Sequence from={12} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 3. Central App Update Package Pop (Frame 22) */}
      <Sequence from={22} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 4. Global Server Expansion Whoosh (Frame 68) */}
      <Sequence from={68} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 5. Server Counter Riser Clicks (Frames 78, 86, 94, 102, 110) */}
      <Sequence from={78} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={86} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={94} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={102} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>
      <Sequence from={110} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 6. Global 250+ Servers Online Ping (Frame 116) */}
      <Sequence from={116} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 7. Bottom Scale Pill Pop (Frame 134) */}
      <Sequence from={134} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 2 (Frames 170 - 470)
          Line 4: "Kalau kamu melakukan deployment satu per satu," (F178 - F255)
          Line 5: "tentu akan memakan banyak waktu." (F269 - F317)
          Line 6: "Belum lagi risiko perbedaan versi aplikasi di setiap produk." (F338 - F425)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 8. Scene 1 -> 2 Laser Transition Whoosh (Frame 170) */}
      <Sequence from={170} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 9. Alert Badge Soft Notice (Frame 176) */}
      <Sequence from={176} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 10. Sequential Queue Card Pop (Frame 188) */}
      <Sequence from={188} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 11. Time Drain Clicks (Frames 272, 280, 288, 296, 304) */}
      <Sequence from={272} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={280} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={288} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>
      <Sequence from={296} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>
      <Sequence from={304} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 12. Time Drain Amber Impact Blip (Frame 312) */}
      <Sequence from={312} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 13. Version Drift Card Reveal Smooth Air Glide (Frame 338) */}
      <Sequence from={338} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/02_smooth_air_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 14. Product B Mismatch Warning Pop (Frame 354) */}
      <Sequence from={354} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 15. Product C Mismatch Error Drop (Frame 364) */}
      <Sequence from={364} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 16. Bottom Dilemma Takeaway Pill Pop (Frame 392) */}
      <Sequence from={392} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 3 (Frames 465 - 560)
          Line 8: "Nah, bagaimana cara mengatasinya?" (Typewriter Effect)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 17. Scene 2 -> 3 Transition Laser Whoosh (Frame 446) */}
      <Sequence from={446} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 18. Turning Point Category Badge Ping (Frame 454) */}
      <Sequence from={454} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 19. Terminal Console Window Pop (Frame 454) */}
      <Sequence from={454} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 20. Typewriter Keystroke Ticks (Frames 460, 464, 468, 474, 480, 486, 492, 496) */}
      <Sequence from={460} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={464} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={468} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={474} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={480} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>
      <Sequence from={486} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>
      <Sequence from={492} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>
      <Sequence from={496} durationInFrames={8}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 21. Question Typewriter Completion Chime (Frame 510) */}
      <Sequence from={510} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 22. Solution Blueprint Reveal Soft Pop (Frame 518) */}
      <Sequence from={518} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 4 CAMERA JOURNEY (Frames 534 - 1065)
          Stage 0: Line 10 (GitLab Pipeline, F534 - F660)
          Stage 1: Line 11 (Build Artifact, F660 - F780)
          Stage 2: Line 12 (Cloud Storage Registry, F780 - F970)
          Stage 3: Line 13 (Distribution to All Products/Servers, F970 - F1065)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 23. Scene 3 -> 4 Laser Transition Whoosh (Frame 528) */}
      <Sequence from={528} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 24. GitLab Push Detection Ping (Frame 536) */}
      <Sequence from={536} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 24b. Automated Tests Passed Blip (Frame 560) */}
      <Sequence from={560} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 24c. Build & Compile Start Click (Frame 570) */}
      <Sequence from={570} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 24d. Build Progress Micro Ticks (Frames 595, 612) */}
      <Sequence from={595} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={612} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 24e. Build Completed & Artifact Packaged Chime (Frame 626) */}
      <Sequence from={626} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 25. Camera Slide 0 -> 1: Stage 0 (Pipeline) -> Stage 1 (Artifact) (F650 - F685) */}
      <Sequence from={649} durationInFrames={32}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.85 * volume}
        />
      </Sequence>
      <Sequence from={650} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 26. Stage 1: Build Docker Artifact Ready Pop (Frame 705) */}
      <Sequence from={705} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 27. Camera Slide 1 -> 2: Stage 1 (Artifact) -> Stage 2 (Cloud Storage) (F770 - F805) */}
      <Sequence from={769} durationInFrames={32}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.85 * volume}
        />
      </Sequence>
      <Sequence from={770} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 28. Stage 2: Upload to Cloud Storage Initiated Ping (Frame 810) */}
      <Sequence from={810} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 28b. Upload Data Stream Whoosh (Frame 814) */}
      <Sequence from={814} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_swoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 28c. Upload Progress Micro Ticks (Frames 835, 855) */}
      <Sequence from={835} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={855} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 28d. Vault Seal Lock & Latch (Frame 876) */}
      <Sequence from={876} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 28e. Cloud Storage Ingestion Success Chime (Frame 880) */}
      <Sequence from={880} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 29. Camera Slide 2 -> 3: Stage 2 (Cloud) -> Stage 3 (Global Distribution) (F955 - F990) */}
      <Sequence from={954} durationInFrames={32}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.85 * volume}
        />
      </Sequence>
      <Sequence from={955} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 30. Stage 3: Download Stream Initiated Ping (Frame 985) */}
      <Sequence from={985} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 30b. Parallel Pull High-Speed Swoosh (Frame 988) */}
      <Sequence from={988} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_swoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 30c. Parallel Download Micro Ticks (Frames 1005, 1020) */}
      <Sequence from={1005} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={1020} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 30d. Staggered Server Fleet Synced Pops (Frames 1014, 1022, 1030, 1036) */}
      <Sequence from={1014} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={1022} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={1030} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={1036} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 30e. Stage 3 Global Sync Chime (Frame 1040) */}
      <Sequence from={1040} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 5 CONCLUSION & 3 GOLDEN PILLARS (F1065 - 1440)
          Lines 15 - 19:
          F1065 - F1220: Line 15 (Tidak perlu build & deploy manual)
          F1225 - F1280: Line 16 (Cukup build satu kali)
          F1280 - F1330: Line 17 (Simpan artefaknya)
          F1330 - F1440: Line 19 (Lalu distribusikan ke seluruh server)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 31. Scene 4 -> 5 Laser Wipe Whoosh (Frame 1058) */}
      <Sequence from={1058} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 32. Scene 5 Ambient Entrance Swell (Frame 1065) */}
      <Sequence from={1065} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/01_smooth_ambient_swell.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 33. Red Stamp Slam: "JANGAN DITERAPKAN" (Frame 1100) */}
      <Sequence from={1100} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 34. Modern Solution Card Reveal Pop (Frame 1130) */}
      <Sequence from={1130} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 35. Pillar 1: "Cukup Build Satu Kali" Pop (Frame 1225) */}
      <Sequence from={1225} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 36. Laser Conduit 1 -> 2 Pulse (Frame 1276) */}
      <Sequence from={1276} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 37. Pillar 2: "Simpan Artefaknya" Warm Ping (Frame 1282) */}
      <Sequence from={1282} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 38. Laser Conduit 2 -> 3 Pulse (Frame 1326) */}
      <Sequence from={1326} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 39. Pillar 3: "Distribusikan ke Semua Server" Air Glide (Frame 1332) */}
      <Sequence from={1332} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 40. Grand Finale Master Summary Stamp Chime (Frame 1365) */}
      <Sequence from={1365} durationInFrames={45}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.9 * volume}
        />
      </Sequence>
    </>
  );
};
