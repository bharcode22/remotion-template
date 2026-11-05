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
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 1: ARCHITECTURE BLUEPRINT (F0 - F100)
          Line 1: "Sebelum membahas arsitektur software di tempat kerja aku," (F6 - F85)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene Entrance Ambient Swell (Frame 0) */}
      <Sequence durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/01_smooth_ambient_swell.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 2. Hero 3-Tier Blueprint Card Entrance (Frame 10) */}
      <Sequence from={10} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.25 * volume}
        />
      </Sequence>

      {/* 4. Tier 1: Cloud Backend Node Reveal (Frame 18) */}
      <Sequence from={18} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. Laser Conduit 1 ➔ 2 Data Stream (Frame 30) */}
      <Sequence from={30} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 6. Tier 2: Embedded Debian PC Controller Reveal (Frame 38) */}
      <Sequence from={38} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 7. Laser Conduit 2 ➔ 3 Data Stream (Frame 50) */}
      <Sequence from={50} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 8. Tier 3: Physical Wellness POD Capsule Reveal (Frame 58) */}
      <Sequence from={58} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 8. System Online Confirmation Ping (Frame 70) */}
      <Sequence from={70} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 2: TERMINAL TYPEWRITER (F100 - F200)
          Line 2: "kenalan dulu dengan produk yang aku kembangkan." (F101 - F166)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Terminal Window Entrance Air Whoosh (Frame 100) */}
      <Sequence from={100} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.25 * volume}
        />
      </Sequence>

      {/* 2. Command Prompt Click (Frame 101) */}
      <Sequence from={101} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 3. Soft Rhythmic Keystroke Micro Ticks (Frames 104 - 162) */}
      <Sequence from={104} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={114} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={124} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={134} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={144} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={154} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
      <Sequence from={162} durationInFrames={10}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Stream Active Notice & Soft Confirmation Ping (Frames 166, 170) */}
      <Sequence from={166} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
      <Sequence from={170} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 3: CAMERA JOURNEY (F200 - F575)
          Stage 1: IoT & Wellness (F200 - F288)
          Slide 1: Camera Slide to Wellness Pod (F288 - F305)
          Stage 2: The Wellness Pod (F296 - F384)
          Slide 2: Camera Slide to Debian PC (F405 - F422)
          Stage 3: The Embedded Debian PC (F417 - F556)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* ═══════════ STAGE 1: IOT & WELLNESS ═══════════ */}
      {/* 1. Stage 1 Smooth Entrance Glide (Frame 200) */}
      <Sequence from={200} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 2. Dual Pillar Cards Swoosh (Frame 204) */}
      <Sequence from={204} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_swoosh.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 3. IoT & Wellness Fusion Hub Gentle Swell & Pop (Frame 222) */}
      <Sequence from={222} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_bass_swell.wav")}
          volume={0.5 * volume}
        />
      </Sequence>
      <Sequence from={224} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Convergence Banner Reveal Glass Blip (Frame 245) */}
      <Sequence from={245} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ═══════════ SLIDE 1: TO WELLNESS POD ═══════════ */}
      {/* 5. Camera Slide 1: Ultra Smooth Air Whoosh (Frame 288) */}
      <Sequence from={288} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* ═══════════ STAGE 2: WELLNESS POD CAPSULE ═══════════ */}
      {/* 6. Wellness Pod Arrival Warm Harmonic Chime (Frame 302) */}
      <Sequence from={302} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 7. Pod Laser Scanline Glass Blip (Frame 318) */}
      <Sequence from={318} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 8. Feature Badge 1 (Enclosed Chamber) Reveal (Frame 335) */}
      <Sequence from={335} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 9. Feature Badge 2 (IoT Sensor Array) Reveal (Frame 350) */}
      <Sequence from={350} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* ═══════════ SLIDE 2: TO DEBIAN PC ═══════════ */}
      {/* 10. Camera Slide 2: Ultra Smooth Air Whoosh (Frame 405) */}
      <Sequence from={405} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.32 * volume}
        />
      </Sequence>

      {/* ═══════════ STAGE 3: EMBEDDED DEBIAN PC ═══════════ */}
      {/* 11. Controller Chassis Latch Soft Tactile Click (Frame 416) */}
      <Sequence from={416} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 12. Giant Debian Swirl Core Power-Up Chime (Frame 426) */}
      <Sequence from={426} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>
      <Sequence from={428} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 13. Spec Pillar 1 (Debian GNU/Linux) Soft Notice (Frame 445) */}
      <Sequence from={445} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 14. Spec Pillar 2 (Pusat Kendali Hardware) Soft Notice (Frame 465) */}
      <Sequence from={465} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 15. Debian System Diagnostics [OK] Confirmation Ping (Frame 520) */}
      <Sequence from={520} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.65 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 4: INTERCONNECTED ARCHITECTURE (F575 - F770)
          Line 8: "PC ini menjadi pusat kendali, mulai dari hardware hingga software..." (F587 - F743)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 4 Smooth Entrance Glide (Frame 575) */}
      <Sequence from={575} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2. Central Debian PC Hub Activation Pop (Frame 587) */}
      <Sequence from={587} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 3. Hardware Nodes (Speaker, Strobe, Sensors) Illuminate Warm Chime (Frame 648) */}
      <Sequence from={648} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 4. Software Nodes (Node.js, Postgres, React) Illuminate Glass Blip (Frame 692) */}
      <Sequence from={692} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. IPC Bus Full Mesh Active Confirmation Ping (Frame 725) */}
      <Sequence from={725} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 5: RESILIENCE CHALLENGE (F770 - F980)
          Line 10: "Nah, tantangannya adalah produk ini harus tetap bisa berjalan," (F777 - F880)
          Line 11: "baik dalam kondisi online maupun offline." (F895 - F956)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 5 Smooth Entrance Glide (Frame 770) */}
      <Sequence from={770} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Challenge Badge Notice Chime (Frame 777) */}
      <Sequence from={777} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 3. "Tetap Bisa Berjalan" High Priority Pop (Frame 832) */}
      <Sequence from={832} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Online Mode Activation Glass Blip (Frame 900) - Voice: "baik dalam kondisi online..." */}
      <Sequence from={900} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. Network Severance Switch Click (Frame 942) - Voice: "...maupun offline" */}
      <Sequence from={942} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 6. Offline Autonomous Shield Activation Warm Chime (Frame 942) */}
      <Sequence from={942} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 7. Zero Downtime 100% Confirmation Ping (Frame 950) */}
      <Sequence from={950} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 6: TWO-WAY DATA SYNCHRONIZATION (F980 - F1110)
          Line 13: "Karena itu, dibutuhkan mekanisme sinkronisasi data dua arah." (F981 - F1080)
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 6 Smooth Entrance Glide (Frame 980) */}
      <Sequence from={980} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Architecture Solution Badge Notice Chime (Frame 985) */}
      <Sequence from={985} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 3. "Mekanisme Sinkronisasi" Headline Pop (Frame 1005) */}
      <Sequence from={1005} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Dual-Channel Conduit Illumination Glass Blip (Frame 1030) */}
      <Sequence from={1030} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. Bi-Directional Core Engine Lock-in Warm Chime (Frame 1050) */}
      <Sequence from={1050} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 6. "Data Dua Arah" Confirmation Ping (Frame 1065) */}
      <Sequence from={1065} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 7: DOWNSTREAM FLEET DISTRIBUTION (F1110 - F1295)
          Line 14: "Dari cloud ke produk, seperti konten multimedia, artefak aplikasi, dan konfigurasi hardware."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 7 Smooth Entrance Glide (Frame 1110) */}
      <Sequence from={1110} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Downstream Pipeline Notice Chime (Frame 1116) */}
      <Sequence from={1116} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2b. Six Fleet Pod Domino Pop-Ups (Frames 1124 - 1144) */}
      <Sequence from={1124} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1128} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1132} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1136} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1140} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1144} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 3. Payload 1 (Konten Multimedia) Soft Pop (Frame 1140) */}
      <Sequence from={1140} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Payload 2 (Artefak Aplikasi) Glass Blip (Frame 1185) */}
      <Sequence from={1185} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. Payload 3 (Konfigurasi Hardware) Warm Chime (Frame 1225) */}
      <Sequence from={1225} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 6. Fleet Broadcast Sync Complete Confirmation Ping (Frame 1265) */}
      <Sequence from={1265} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 8: UPSTREAM INGESTION (F1295 - F1470)
          Line 15: "Sebaliknya, dari produk ke cloud, seperti data penggunaan, registrasi user, dan log aktivitas."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* 1. Scene 8 Smooth Entrance Glide (Frame 1295) */}
      <Sequence from={1295} durationInFrames={28}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Upstream Pipeline Notice Chime (Frame 1300) */}
      <Sequence from={1300} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2b. Six Upstream Pod Domino Pop-Ups (Frames 1305 - 1325) */}
      <Sequence from={1305} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1309} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1313} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1317} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1321} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.38 * volume}
        />
      </Sequence>
      <Sequence from={1325} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 3. Payload 1 (Data Penggunaan) Soft Pop (Frame 1345) */}
      <Sequence from={1345} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Payload 2 (Registrasi User) Glass Blip (Frame 1385) */}
      <Sequence from={1385} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 5. Payload 3 (Log Aktivitas) Warm Chime (Frame 1420) */}
      <Sequence from={1420} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 6. Ingestion Complete Confirmation Ping (Frame 1450) */}
      <Sequence from={1450} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎵 SOFT SOUND EFFECTS TIMELINE - SCENE 9: 3-ACT CINEMATIC FINALE (F1470 - F1710)
          Line 17: "Jadi, meskipun setiap POD bisa berjalan secara mandiri, semuanya tetap bisa terhubung dan bertukar data dengan server cloud."
         ───────────────────────────────────────────────────────────────────────────── */}

      {/* ACT 1: Autonomous Edge Pod Showcase */}
      {/* 1. Grand Finale Entrance Silk Glide (Frame 1470) */}
      <Sequence from={1470} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/07_smooth_glide_transition.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 2. Act 1 Top Badge Notice Chime (Frame 1472) */}
      <Sequence from={1472} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/06_smooth_soft_notice.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 3. Hero Pod Holographic Shield Ignition Pop (Frame 1485) */}
      <Sequence from={1485} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 4. Diagnostics Module 1 (Debian OS Core) Pop (Frame 1495) */}
      <Sequence from={1495} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_click.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 5. Diagnostics Module 2 (Local Database) Pop (Frame 1507) */}
      <Sequence from={1507} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 6. Diagnostics Module 3 (Hardware Engine) Pop (Frame 1519) */}
      <Sequence from={1519} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 7. Air-Gapped Status Banner Confirmation Pop (Frame 1530) */}
      <Sequence from={1530} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/03_smooth_micro_tick.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ACT 2: Fleet Constellation Expansion - 6 Pod Domino Pop-Ups */}
      {/* 8. Camera Pull-Out & Multi-Pod Eruption Ultra Whoosh (Frame 1555) */}
      <Sequence from={1555} durationInFrames={26}>
        <Audio
          src={staticFile("sound_fx_smooth/ultra_smooth_whoosh.wav")}
          volume={0.38 * volume}
        />
      </Sequence>

      {/* 9. Fleet POD 01 (Jakarta) Pop (Frame 1555) */}
      <Sequence from={1555} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 10. Fleet POD 02 (Surabaya) Pop (Frame 1560) */}
      <Sequence from={1560} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 11. Mesh Interlink Conduits Ignite Warm Chime (Frame 1565) */}
      <Sequence from={1565} durationInFrames={32}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 12. Fleet POD 03 (Bali) Pop (Frame 1565) */}
      <Sequence from={1565} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 13. Fleet POD 04 (Bandung) Pop (Frame 1570) */}
      <Sequence from={1570} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/04_smooth_glass_blip.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 14. Fleet POD 05 (Medan) Pop (Frame 1575) */}
      <Sequence from={1575} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.42 * volume}
        />
      </Sequence>

      {/* 15. Fleet POD 06 (Makassar) Pop (Frame 1580) */}
      <Sequence from={1580} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.48 * volume}
        />
      </Sequence>

      {/* 16. Fleet Network Lock Ping (Frame 1585) */}
      <Sequence from={1585} durationInFrames={24}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ACT 3: Cloud Zenith Ignition & Bidirectional Climax */}
      {/* 17. Cloud Core Zenith Power-up Silk Air Glide (Frame 1620) */}
      <Sequence from={1620} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx_smooth/silk_air_glide.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 18. Dual-Sync Integration Engine Pop (Frame 1630) */}
      <Sequence from={1630} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/05_smooth_warm_chime.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 19. Bi-directional Photon Stream Burst Ping (Frame 1635) */}
      <Sequence from={1635} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_ping.wav")}
          volume={0.6 * volume}
        />
      </Sequence>

      {/* 20. Production Ready 100% Banner Pop (Frame 1645) */}
      <Sequence from={1645} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_pop.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 21. Grand Finale Climax Harmony Chime (Frame 1650) */}
      <Sequence from={1650} durationInFrames={45}>
        <Audio
          src={staticFile("sound_fx_smooth/smooth_chime.wav")}
          volume={0.7 * volume}
        />
      </Sequence>

      {/* 22. Outro Resolution Ambient Swell (Frame 1675) */}
      <Sequence from={1675} durationInFrames={45}>
        <Audio
          src={staticFile("sound_fx_smooth/01_smooth_ambient_swell.wav")}
          volume={0.45 * volume}
        />
      </Sequence>
    </>
  );
};
