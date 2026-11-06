import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundEffectsManagerProps {
  volume?: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 1: THE AI HOOK & DEVELOPER VALUE (F0 - F245)
          Line 1: "Ketika sekarang semua orang bisa membuat aplikasi dengan bantuan AI," (F9 - F110)
          Line 2: "apa yang bisa menjadi nilai tambah kita sebagai developer?" (F112 - F204)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 1 Smooth Entrance Glide (Frame 0) */}
      <Sequence durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Top Badge Soft Notice (Frame 5) */}
      <Sequence from={5} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 3. AI IDE Terminal Window Pop (Frame 12) */}
      <Sequence from={12} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 4. Rhythmic Prompt Keystroke Micro Ticks (Frames 28, 40, 52) */}
      <Sequence from={28} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={40} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={52} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 5. Fast AI App Output Cards Pop-Out (Frames 65, 77, 89) */}
      <Sequence from={65} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>
      <Sequence from={77} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={89} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 6. Line 2 Transition: Silk Air Glide to Question (Frame 114) */}
      <Sequence from={114} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 7. Question Reveal Notice Chime (Frame 120) */}
      <Sequence from={120} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 8. Question Mark Holographic Core Reveal Pop (Frame 128) */}
      <Sequence from={128} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 9. Question Focus Pill Subtle Ping (Frame 145) */}
      <Sequence from={145} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 2: CORE ANSWER & 2 PILLARS (F225 - F460)
          Line 4: "Menurutku, jawabannya adalah kemampuan memahami apa yang ingin kita bangun" (F228 - F354)
          Line 5: "dan bagaimana mengarahkan AI untuk mewujudkannya." (F365 - F438)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 10. Scene 2 Smooth Entrance Glide (Frame 224) */}
      <Sequence from={224} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 11. Top Answer Badge Soft Notice (Frame 228) */}
      <Sequence from={228} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 12. Pillar 1: Blueprint Card Pop (Frame 235) */}
      <Sequence from={235} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 13. Pillar 1 Micro Chips Ticks (Frames 247, 257, 267) */}
      <Sequence from={247} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={257} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={267} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 14. Directional Flow Connector Glide (Frame 350) */}
      <Sequence from={350} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 15. Pillar 2: AI Steering Card Glass Blip Pop (Frame 364) */}
      <Sequence from={364} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 16. Pillar 2 Micro Chips Ticks (Frames 376, 386, 396) */}
      <Sequence from={376} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={386} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={396} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 17. Bottom Golden Synthesis Warm Chime (Frame 405) */}
      <Sequence from={405} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 3: TECH STACK SELECTION (F460 - F645)
          Line 7: "Misalnya, ketika ingin membuat sebuah fullstack web app," (F465 - F550)
          Line 8: "Aku mulai dengan menentukan tech stack terlebih dahulu." (F562 - F633)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 18. Scene 3 Smooth Entrance Glide (Frame 460) */}
      <Sequence from={460} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 19. Line 7 Headline Soft Notice (Frame 464) */}
      <Sequence from={464} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 20. Web App Mockup Whoosh Entrance (Frame 470) */}
      <Sequence from={470} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 21. Dashboard Activity Chart Glass Blip (Frame 490) */}
      <Sequence from={490} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 22. Line 8 Transition Silk Air Glide (Frame 555) */}
      <Sequence from={555} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 23. Line 8 Headline Soft Notice (Frame 562) */}
      <Sequence from={562} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 24. Tech Stack Layers Pops (Frames 568, 580, 592) */}
      <Sequence from={568} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={580} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={592} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 25. Tech Stack Selector Lock-in Warm Chime (Frame 612) */}
      <Sequence from={612} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.52 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 4: PROMPT BERTAHAP (F645 - F805)
          Part A: "Setelah itu, aku mulai memberikan prompt secara bertahap." (F658 - F733)
          Part B: "Ingat, secara bertahap." (F750 - F788)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 26. Scene 4 Smooth Entrance Glide (Frame 645) */}
      <Sequence from={645} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 27. Part A Headline Soft Notice (Frame 655) */}
      <Sequence from={655} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 28. Typewriter Keystroke Micro Ticks (Prompt Typing Sound) */}
      {[660, 668, 676, 684, 692, 700, 708, 718, 726].map((tickFrame) => (
        <Sequence key={tickFrame} from={tickFrame} durationInFrames={8}>
          <Audio
            src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
            volume={0.25 * volume}
          />
        </Sequence>
      ))}

      {/* 29. AI Prompt Console Whoosh (Frame 665) */}
      <Sequence from={665} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 29. Stepped Nodes Micro Ticks (Frames 675, 687, 699) */}
      <Sequence from={675} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={687} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={699} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 30. Step Complete Pop (Frame 715) */}
      <Sequence from={715} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 31. Part B Silk Air Glide Transition (Frame 745) */}
      <Sequence from={745} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 32. "Ingat," Accent Soft Notice (Frame 750) */}
      <Sequence from={750} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 33. "secara bertahap" Glass Blip (Frame 765) */}
      <Sequence from={765} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 34. Part B Warm Lock-in Chime (Frame 780) */}
      <Sequence from={780} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.52 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 5: DATABASE, BACKEND, FRONTEND (F805 - F1080)
          Line 12: "Mulai dari merancang struktur database, menentukan tipe data, menentukan relasi antar tabel," (F812 - F985)
          Line 13: "membangun backend, hingga membuat frontend." (F990 - F1060)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 35. Scene 5 Entrance Glide (Frame 805) */}
      <Sequence from={805} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 36. Phase 1 "struktur database" Soft Notice (Frame 812) */}
      <Sequence from={812} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 37. Database Tables Pop (Frame 820) */}
      <Sequence from={820} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 38. Phase 2 "tipe data" Glass Blip (Frame 875) */}
      <Sequence from={875} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 39. Data Type Tag Micro Ticks (Frames 885, 895, 905) */}
      <Sequence from={885} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={895} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={905} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 40. Phase 3 "relasi antar tabel" Silk Air Glide (Frame 930) */}
      <Sequence from={930} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 41. Relational Link Pop (Frame 940) */}
      <Sequence from={940} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 42. Phase 4 "membangun backend" Server Blip (Frame 990) */}
      <Sequence from={990} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 43. Phase 5 "hingga membuat frontend" Soft Notice (Frame 1028) */}
      <Sequence from={1028} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 44. Complete Fullstack Architecture Warm Chime (Frame 1050) */}
      <Sequence from={1050} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 6: FONDASI APLIKASI TERSTRUKTUR (F1080 - F1205)
          Line 15: "Dengan workflow seperti ini, kita punya fondasi aplikasi yang lebih terstruktur."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 45. Scene 6 Entrance Transition Glide (Frame 1080) */}
      <Sequence from={1080} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 46. Tier 1 Database Stack Pop (Frame 1088) */}
      <Sequence from={1088} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 47. Tier 2 Backend Logic Glass Blip (Frame 1098) */}
      <Sequence from={1098} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 48. Tier 3 Frontend UI Soft Notice (Frame 1108) */}
      <Sequence from={1108} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.46 * volume}
        />
      </Sequence>

      {/* 49. "fondasi aplikasi" Silk Air Glide (Frame 1125) */}
      <Sequence from={1125} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 50. Rock-Solid Foundation Anchor Snap (Frame 1132) */}
      <Sequence from={1132} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 51. Architecture Verified Check Pop (Frame 1148) */}
      <Sequence from={1148} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 7: MAINTENANCE, FITUR, REVISI (F1205 - F1410)
          Line 16: "Sehingga ketika perlu maintenance, menambah fitur, atau melakukan revisi, prosesnya akan jauh lebih mudah."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 52. Scene 7 Entrance Glide (Frame 1205) */}
      <Sequence from={1205} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 53. Phase 1 "maintenance" Soft Notice (Frame 1215) */}
      <Sequence from={1215} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.46 * volume}
        />
      </Sequence>

      {/* 54. Test Runner Passing Micro Tick (Frame 1225) */}
      <Sequence from={1225} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 55. Phase 2 "menambah fitur" Glass Blip (Frame 1255) */}
      <Sequence from={1255} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 56. Modular Plug & Play Pop (Frame 1265) */}
      <Sequence from={1265} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.44 * volume}
        />
      </Sequence>

      {/* 57. Phase 3 "melakukan revisi" Soft Notice (Frame 1302) */}
      <Sequence from={1302} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.46 * volume}
        />
      </Sequence>

      {/* 58. Schema Migration Micro Tick (Frame 1312) */}
      <Sequence from={1312} durationInFrames={12}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 59. Phase 4 "prosesnya akan jauh lebih mudah" Silk Air Glide (Frame 1345) */}
      <Sequence from={1345} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.46 * volume}
        />
      </Sequence>

      {/* 60. Climax Effortless Warm Chime (Frame 1358) */}
      <Sequence from={1358} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.56 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 8: GOLDEN RULE & STEERING AI (F1410 - F1600)
          Line 17: "Jadi, jangan asal prompt AI. Pahami dulu apa yang ingin kamu bangun, baru arahkan AI untuk mengerjakannya."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 61. Scene 8 Entrance Transition Glide (Frame 1410) */}
      <Sequence from={1410} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.44 * volume}
        />
      </Sequence>

      {/* 62. Beat 1 "jangan asal prompt AI" Warning Notice (Frame 1416) */}
      <Sequence from={1416} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 63. Beat 2 "Pahami dulu apa yang ingin kamu bangun" Whoosh (Frame 1464) */}
      <Sequence from={1464} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 64. Blueprint Architecture Glass Blip (Frame 1475) */}
      <Sequence from={1475} durationInFrames={22}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.46 * volume}
        />
      </Sequence>

      {/* 65. Beat 3 "baru arahkan AI untuk mengerjakannya" Silk Glide (Frame 1535) */}
      <Sequence from={1535} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 66. Grand Finale Warm Lock-in Chime (Frame 1545) */}
      <Sequence from={1545} durationInFrames={45}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.58 * volume}
        />
      </Sequence>

      {/* 67. Finale Ambient Bass Swell (Frame 1555) */}
      <Sequence from={1555} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_bass_swell.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
    </>
  );
};
