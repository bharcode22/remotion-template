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
          🎬 SCENE 1 SFX TIMELINE (Frames 0 - 146)
          Lines 1 - 2: "Di zaman AI seperti sekarang, menciptakan suatu software sangatlah mudah,"
          Software Popups: Android, Chrome, Apple iOS, Database
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 1. Header Focus Snap Shutter (Frame 6) */}
      <Sequence from={6} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2. Android Logo Popup Ding (Frame 68) */}
      <Sequence from={68} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 3. Browser / Chrome Logo Digital Click (Frame 78) */}
      <Sequence from={78} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 4. Apple iOS Logo Focus Shutter (Frame 88) */}
      <Sequence from={88} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 5. Database & Backend Spark (Frame 98) */}
      <Sequence from={98} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 6. Context Pill Radar Ping (Frame 114) */}
      <Sequence from={114} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 1 (Frame 144)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 7. Heavy Cinematic Camera Fly-through Whoosh (Frame 144) */}
      <Sequence from={144} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 8. Camera Focus Snap (Frame 145) */}
      <Sequence from={145} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 2 SFX TIMELINE (Frames 144 - 254)
          Line 4: "#tinggalproptaja" (Proses Prompt ke Google Gemini)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 9. Gemini Code Stream Spark (Frame 152) */}
      <Sequence from={152} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 10. #tinggalpromptaja Sticker Pop Ding (Frame 156) */}
      <Sequence from={156} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 11. Generation Step 1 Click (Frame 172) */}
      <Sequence from={172} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 12. Generation Step 2 Click (Frame 192) */}
      <Sequence from={192} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 13. Generation Step 3 Spark (Frame 212) */}
      <Sequence from={212} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 14. Instant Build Success Shutter (Frame 226) */}
      <Sequence from={226} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 2 (Frame 248 - 254)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 15. Cinematic Fly-through Whoosh (starts at Frame 248 so wind peaks at Frame 254) */}
      <Sequence from={248} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 16. Dramatic Tension Bass Drop (Impact hit right at Frame 254) */}
      <Sequence from={254} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/11_tension_bass_drop.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 17. Stamp Impact Glitch on "SAMPAH DIGITAL" (Frame 255) */}
      <Sequence from={255} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 3 SFX TIMELINE (Frames 254 - 300)
          Line 6: "Supaya software kamu tidak menjadi sampah digital,"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 18. Waste Diagnostic Metrics Radar Ping (Frame 272) */}
      <Sequence from={272} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 19. Context Pill Radar Ping (Frame 286) */}
      <Sequence from={286} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 3: Scene 3 -> Scene 4 (Frame 295 - 300)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 20. Camera Sweep Whoosh into Solution (Frame 295) */}
      <Sequence from={295} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 21. Camera Focus Shutter Snap into Scene 4 (Frame 299) */}
      <Sequence from={299} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 4 SFX TIMELINE (Frames 298 - 418)
          Line 7: "Sebaiknya kamu perkuat tujuan dari software yang kamu kembangkan."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 22. Card Swipe Snap on Headline (Frame 318) */}
      <Sequence from={318} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 23. Purpose Pillar 1 Ping (Frame 348) */}
      <Sequence from={348} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 24. Purpose Pillar 2 Counter Click (Frame 368) */}
      <Sequence from={368} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 25. Purpose Pillar 3 Electric Spark (Frame 388) */}
      <Sequence from={388} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 26. Bottom Context Tagline Pop Ding (Frame 398) */}
      <Sequence from={398} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 4: Scene 4 -> Scene 5 (Frame 415 - 420)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 27. Camera Sweep Whoosh into Philosophy (Frame 415) */}
      <Sequence from={415} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 28. Camera Focus Shutter Snap into Scene 5 (Frame 419) */}
      <Sequence from={419} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 5 SFX TIMELINE (Frames 418 - 580)
          Lines 9 - 10: "Pada dasarnya, software diciptakan untuk membantu memecahkan masalah dari pengguna."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 29. Typewriter Digital Click on "Pada dasarnya," (Frame 422) */}
      <Sequence from={422} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 30. Typewriter Digital Click on "software diciptakan" (Frame 454) */}
      <Sequence from={454} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 31. Radar Ping on "memecahkan masalah" (Frame 500) */}
      <Sequence from={500} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 32. Pop Ding on "dari pengguna." (Frame 528) */}
      <Sequence from={528} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 33. Electric Spark on Bottom Philosophical Pill (Frame 542) */}
      <Sequence from={542} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 5: Scene 5 -> Scene 6 (Frame 578 - 584)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 34. Camera Sweep Whoosh into Business Audit (Frame 578) */}
      <Sequence from={578} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 35. Camera Focus Shutter Snap into Scene 6 (Frame 582) */}
      <Sequence from={582} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 6 SFX TIMELINE (Frames 576 - 792)
          Lines 12 - 15: "Sebelum upgrade proses bisnis kita menjadi software..."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 36. Pop Up 1: Mobile App Ping (Frame 666) */}
      <Sequence from={666} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 37. Pop Up 2: Web App Click (Frame 705 - tenang, tidak terburu-buru) */}
      <Sequence from={705} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 38. Pop Up 3: AI Automation Spark (Frame 745 - tenang, tidak terburu-buru) */}
      <Sequence from={745} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          ⌨️ LINE 15 WORD-BY-WORD TYPING SFX TIMELINE (Masuk di Frame 805)
          "Pastikan proses tradisionalnya berjalan dengan baik dan lancar."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 39. Keystroke: "Pastikan" (Frame 805) */}
      <Sequence from={805} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 40. Keystroke: "proses" (Frame 820) */}
      <Sequence from={820} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 41. Keystroke: "tradisionalnya" (Frame 834) */}
      <Sequence from={834} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 42. Keystroke: "berjalan" (Frame 850) */}
      <Sequence from={850} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 43. Keystroke: "baik" (Frame 874) */}
      <Sequence from={874} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 44. Keystroke: "lancar." (Frame 894) */}
      <Sequence from={894} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 45. Verification Passed Ding (Frame 902) */}
      <Sequence from={902} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 6: Scene 6 -> Scene 7 (Cutover at Frame 921)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 46. Camera Sweep Whoosh into Decision Branching (Frame 918) */}
      <Sequence from={918} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 47. Camera Focus Shutter Snap into Scene 7 (Frame 921) */}
      <Sequence from={921} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 7 SFX TIMELINE (Masuk di Frame 921)
          Lines 17 - 18: "Jika belum, perbaiki dulu proses tradisionalnya, Jika sudah, barulah kita bisa rancang sistemnya."
          Theme: PERCABANGAN IF-ELSE
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 48. Branch 1 Lock Latch: "Jika belum" (Frame 924) */}
      <Sequence from={924} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 49. Warning Laser Beam: "perbaiki dulu proses tradisionalnya" (Frame 955) */}
      <Sequence from={955} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 50. Branch 2 Circuit Electric Spark: "Jika sudah" (Frame 1015) */}
      <Sequence from={1015} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 51. Permission to Architect Success Chime: "barulah kita bisa rancang sistemnya" (Frame 1048) */}
      <Sequence from={1048} durationInFrames={40}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 7: Scene 7 -> Scene 8 (Cutover at Frame 1105 - 1115)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 52. Camera Sweep Whoosh into System Architecture (Frame 1108) */}
      <Sequence from={1108} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 53. Camera Focus Shutter Snap into Scene 8 (Frame 1112) */}
      <Sequence from={1112} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 8 SFX TIMELINE (Frames 1105 - 1470)
          Line 20: "Kita bisa menganalisa kebutuhan, alur dari software-nya, menyusun struktur data..."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 54. Pilar 1 Ping: Analisa Kebutuhan (Frame 1114) */}
      <Sequence from={1114} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 55. Pilar 2 Click: Alur Software (Frame 1173) */}
      <Sequence from={1173} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 56. Pilar 3 Lock: Struktur Data (Frame 1221) */}
      <Sequence from={1221} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 57. Pilar 4 Slash: Pendekatan Platform (Frame 1279) */}
      <Sequence from={1279} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 58. Platform Option Web App Spark (Frame 1368 - "apakah web app") */}
      <Sequence from={1368} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 59. Platform Option Mobile App Click (Frame 1400 - "mobile app") */}
      <Sequence from={1400} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 60. Platform Option AI Automation Ding (Frame 1436 - "atau AI automation") */}
      <Sequence from={1436} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 61. Line 24 All Platforms Complete & Illuminated Chime (Frame 1472 - "sudah masuk atau menyala di 1472") */}
      <Sequence from={1472} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>
      <Sequence from={1472} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎥 CAMERA MOVEMENT TRANSITION 8: Scene 8 -> Scene 9 (Cutover at Frame 1478 - 1482)
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 62. Seamless Forward Dive Whoosh into Grand Finale (Frame 1476) */}
      <Sequence from={1476} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/06_heavy_pan_whoosh.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 63. Focus Shutter Snap into Core Purpose (Frame 1480) */}
      <Sequence from={1480} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 9 SFX TIMELINE (Frames 1478 - 1709)
          Lines 26 - 28: "Dan yang paling penting, Menentukan masalah apa yang bisa dipecahkan atau dipermudah..."
          Theme: TYPEWRITER KEYSTROKES & GRAND FINALE PINNACLE
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 64. Line 26 Typewriter Keystroke 1: "Dan" (Frame 1480) */}
      <Sequence from={1480} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 65. Line 26 Typewriter Keystroke 2: "paling" (Frame 1496) */}
      <Sequence from={1496} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 66. Line 26 Pinnacle Impact: "PENTING," (Frame 1504) */}
      <Sequence from={1504} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 67. Line 27 Typewriter Keystroke: "Menentukan" (Frame 1518) */}
      <Sequence from={1518} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 68. Line 27 Typewriter Highlight: "masalah" (Frame 1532) */}
      <Sequence from={1532} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 69. Line 27 Typewriter Keystroke: "apa yang bisa" (Frame 1556) */}
      <Sequence from={1556} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 70. Line 27 Typewriter Highlight: "dipecahkan" (Frame 1580) */}
      <Sequence from={1580} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 71. Line 27 Typewriter Highlight: "dipermudah," (Frame 1604) */}
      <Sequence from={1604} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 72. Line 28 Typewriter Keystroke: "Jika kita" (Frame 1626) */}
      <Sequence from={1626} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 73. Line 28 Typewriter Keystroke: "upgrade" (Frame 1646) */}
      <Sequence from={1646} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 74. Line 28 Typewriter Keystroke: "ke sistem" (Frame 1668) */}
      <Sequence from={1668} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 75. Line 28 Grand Finale Chime: "MODERN." (Frame 1688) */}
      <Sequence from={1688} durationInFrames={70}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* 66. Cinematic Sub Boom Outro (Frame 1634) */}
      <Sequence from={1634} durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
    </>
  );
};
