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
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 1 (Frames 0 - 184)
          Style: Smooth, Melodic, Velvety Air Whooshes & Warm Chimes (Audible, Clear, No Harsh Glitches)
          Lines 1 & 2: "bagaimana sebuah aplikasi, bisa terus mendapatkan update tanpa harus melakukan semuanya secara manual?"
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Smooth Ambient Swell (Frame 0) - Warm low-end bed without harsh sub punch */}
      <Sequence durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_bass_swell.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 2. Smooth Tech Ping (Frame 10) - Melodic blip for category badge */}
      <Sequence from={10} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 3. Smooth Air Whoosh (Frame 18) - Clean airy swoosh for headline reveal */}
      <Sequence from={18} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 4. Smooth UI Pop (Frame 36) - Soft rounded pop as phone mockup docks */}
      <Sequence from={36} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 5. Smooth Luxury Chime (Frame 55) - Warm major chord on live status */}
      <Sequence from={55} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 6. Smooth UI Pop (Frame 76) - Soft pop as Release Card #1 docks */}
      <Sequence from={76} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 7. Smooth Micro Click (Frame 92) - Subtle tactile click for Release Card #2 */}
      <Sequence from={92} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 8. Smooth UI Pop (Frame 108) - Soft pop as Release Card #3 docks */}
      <Sequence from={108} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 9. Smooth Glass Ping (Frame 128) - Rounded warm tone for manual dilemma */}
      <Sequence from={128} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 10. Smooth Ambient Chime (Frame 146) - Lush warm chime for hook question */}
      <Sequence from={146} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 11. Smooth Air Whoosh (Frame 176) - Clean airy whoosh for scene transition wipe */}
      <Sequence from={176} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 2 (Frames 180 - 335)
          Lines 4 & 5: "Misalnya, setiap kali developer selesai menambahkan fitur atau memperbaiki bug."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 12. Smooth Category Badge Ping (Frame 186) */}
      <Sequence from={186} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 13. Smooth Headline Chime (Frame 206) */}
      <Sequence from={206} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 14. Smooth Feature Card Popup (Frame 218) */}
      <Sequence from={218} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 15. Smooth Bug Fix Card Popup (Frame 236) */}
      <Sequence from={236} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 16. Smooth Code Diff Micro Click (Frame 254) */}
      <Sequence from={254} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 17. Smooth Terminal Window Dock (Frame 272) */}
      <Sequence from={272} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 18. Smooth Git Push Execution Ping (Frame 286) */}
      <Sequence from={286} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 19. Smooth Summary Pill Chime (Frame 298) */}
      <Sequence from={298} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 2 PART 2 (Frames 328 - 535)
          Line 6: "Kode tersebut harus melalui beberapa proses," (Typewriter)
          Line 7: "mulai dari build, testing, sampai deployment ke server." (Camera Slide)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 20. Transition Whoosh to Part 2 (Frame 330) */}
      <Sequence from={330} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 21. Typewriter Micro Clicks for Line 6 (Frames 342, 350, 358, 366, 374, 382) */}
      <Sequence from={342} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={350} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={358} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={366} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={374} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
      <Sequence from={382} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 22. Camera Slide Whoosh ➔ Stage 1: Build (Frame 405) */}
      <Sequence from={405} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 23. Build Stage Dock Pop (Frame 415) */}
      <Sequence from={415} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 24. Camera Slide Whoosh ➔ Stage 2: Testing (Frame 438) */}
      <Sequence from={438} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 25. Tests Green Success Ping (Frame 450) */}
      <Sequence from={450} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 26. Camera Slide Whoosh ➔ Stage 3: Deployment (Frame 472) */}
      <Sequence from={472} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 27. Production Server Live Chime (Frame 488) */}
      <Sequence from={488} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 28. Full Pipeline Overview Grand Chime (Frame 514) */}
      <Sequence from={514} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 3 (Frames 528 - 820)
          Lines 9 & 10: "Bayangkan kalau semua proses itu harus dilakukan secara manual setiap kali ada perubahan kode. Selain memakan waktu, risiko human error juga semakin besar."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 29. Scene 3 Entrance Whoosh (Frame 528) */}
      <Sequence from={528} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 30. Top Warning Badge Ping (Frame 536) */}
      <Sequence from={536} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 31. Headline Reveal Chime (Frame 552) */}
      <Sequence from={552} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 32. Manual Build Card Pop (Frame 568) */}
      <Sequence from={568} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 33. Manual Testing Card Pop (Frame 588) */}
      <Sequence from={588} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 34. Manual SSH Card Pop (Frame 608) */}
      <Sequence from={608} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 35. Line 10 Start Ping: "Selain memakan waktu..." (Frame 704) */}
      <Sequence from={704} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 36. Time Counter Micro Click (Frame 718) */}
      <Sequence from={718} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 37. Human Error Metric Card Chime (Frame 732) */}
      <Sequence from={732} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 38. Bottom Hook Pill Reveal (Frame 770) */}
      <Sequence from={770} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 39. Transition Whoosh to Scene 4 (Frame 812) */}
      <Sequence from={812} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 4 (Frames 815 - 925)
          Line 12: "Nah, di sinilah CI/CD berperan."
          Visuals: DevOps Infinity Loop Reveal & Twin Pillars (CI vs CD)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 40. Scene 4 Badge Tech Blip (Frame 818) */}
      <Sequence from={818} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 41. Hero Headline Chime: "Nah, di sinilah CI/CD berperan" (Frame 825) */}
      <Sequence from={825} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 42. Infinity Loop Nexus Swell (Frame 830) */}
      <Sequence from={830} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 43. Continuous Integration (CI) Card Dock Pop (Frame 840) */}
      <Sequence from={840} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 44. Continuous Deployment (CD) Card Dock Pop (Frame 850) */}
      <Sequence from={850} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 45. Bottom Solution Pill Pop (Frame 868) */}
      <Sequence from={868} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 46. Transition Whoosh to Scene 5 (Frame 918) */}
      <Sequence from={918} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 5 (Frames 920 - 1110)
          Line 14: "CI adalah proses menggabungkan perubahan kode sekaligus menjalankan build dan testing secara otomatis."
          Visuals: Git Merge DAG Graph + Automated Quality Telemetry Dashboard
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 47. Scene 5 Category Badge Ping (Frame 922) */}
      <Sequence from={922} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 48. Headline Warm Chime: "Menggabungkan Kode, Build & Testing Otomatis" (Frame 930) */}
      <Sequence from={930} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 49. Grafik 1 Card Dock Pop: Git Merge DAG (Frame 940) */}
      <Sequence from={940} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 50. Stage 1 Auto-Merge Sync Blip (Frame 954) */}
      <Sequence from={954} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 51. Stage 2 Auto-Build Complete Click (Frame 968) */}
      <Sequence from={968} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 52. Stage 3 Auto-Test Suite Verified Ping (Frame 982) */}
      <Sequence from={982} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 53. Grafik 2 Card Reveal: Telemetry Quality Dashboard Chime (Frame 994) */}
      <Sequence from={994} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 54. Test Distribution Bar 1 Unit Click (Frame 1006) */}
      <Sequence from={1006} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 55. Test Distribution Bar 2 Integration Click (Frame 1016) */}
      <Sequence from={1016} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 56. Test Distribution Bar 3 Security SAST Pop (Frame 1026) */}
      <Sequence from={1026} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 57. Test Distribution Bar 4 E2E Verified Ping (Frame 1036) */}
      <Sequence from={1036} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 58. Bottom Takeaway Banner Reveal Chime (Frame 1052) */}
      <Sequence from={1052} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 59. Transition Whoosh to Scene 6 (Frame 1106) */}
      <Sequence from={1106} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 6 (Frames 1105 - 1250)
          Line 15: "Sedangkan CD membantu proses pengiriman aplikasi hingga ke production."
          Visuals: Automated CD Delivery Highway + Zero-Downtime Multi-Region Cluster
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 60. Scene 6 Category Badge Ping (Frame 1110) */}
      <Sequence from={1110} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 61. Headline Warm Chime: "Pengiriman Otomatis Hingga ke Production" (Frame 1116) */}
      <Sequence from={1116} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 62. Card 1 Dock Pop: Automated CD Highway (Frame 1124) */}
      <Sequence from={1124} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 63. Docker Container Image Verified Blip (Frame 1136) */}
      <Sequence from={1136} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 64. Kubernetes Cluster Orchestration Click (Frame 1148) */}
      <Sequence from={1148} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 65. Production Live Rocket Launch Chime (Frame 1160) */}
      <Sequence from={1160} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 66. Card 2 Reveal: Zero-Downtime Rollout Dashboard Pop (Frame 1170) */}
      <Sequence from={1170} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 67. Blue/Green Traffic Shift Blip (Frame 1184) */}
      <Sequence from={1184} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 68. Edge Server Cluster Verified Ping (Frame 1198) */}
      <Sequence from={1198} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 69. Bottom Takeaway Banner Reveal Chime (Frame 1212) */}
      <Sequence from={1212} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 70. Transition Whoosh to Scene 7 (Frame 1244) */}
      <Sequence from={1244} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SMOOTH TECH SFX TIMELINE - SCENE 7: GRAND FINALE (Frames 1245 - 1450)
          Line 16: "Jadi, CI/CD membuat proses pengembangan dan deployment lebih cepat, konsisten, dan minim kesalahan."
          Visuals: 3 Golden Benefits (Lebih Cepat, Konsisten, Minim Kesalahan) + Unified DevOps Loop + Outro
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 71. Scene 7 Category Badge Ping (Frame 1248) */}
      <Sequence from={1248} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 72. Grand Finale Spoken Headline Warm Chime (Frame 1256) */}
      <Sequence from={1256} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 73. Benefit 1 Dock Pop: Lebih Cepat (Frame 1268) */}
      <Sequence from={1268} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 74. Benefit 2 Dock Blip: Konsisten (Frame 1286) */}
      <Sequence from={1286} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 75. Benefit 3 Dock Pop: Minim Kesalahan (Frame 1304) */}
      <Sequence from={1304} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.75 * volume}
        />
      </Sequence>

      {/* 76. DevOps Unified Ecosystem Loop Reveal Chime (Frame 1326) */}
      <Sequence from={1326} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.8 * volume}
        />
      </Sequence>

      {/* 77. Outro Call-To-Action Celebration Chime (Frame 1352) */}
      <Sequence from={1352} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.85 * volume}
        />
      </Sequence>

      {/* 78. Outro Warm Low-End Finish Bed (Frame 1395) */}
      <Sequence from={1395} durationInFrames={50}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_bass_swell.wav")}
          volume={0.65 * volume}
        />
      </Sequence>
    </>
  );
};
