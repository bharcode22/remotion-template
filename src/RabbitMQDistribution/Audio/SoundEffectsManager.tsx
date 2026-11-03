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
          🎬 SCENE 1 SFX TIMELINE (Frames 0 - 165)
          Line 1: "Bayangkan kamu harus mendistribusikan file multimedia ke puluhan perangkat,"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 1. Cinematic Sub Boom Intro (Frame 0) */}
      <Sequence durationInFrames={60}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 2. Concept Pop Ding (Frame 12) */}
      <Sequence from={12} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 3. Multimedia Bundle Reveal Slash (Frame 62) */}
      <Sequence from={62} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 4. Radar Ping on "file multimedia" (Frame 98) */}
      <Sequence from={98} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 5. Device Matrix Whoosh Opening (Frame 116) */}
      <Sequence from={116} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 6. Digital Counter Clicks as devices count up (Frames 120, 126, 132, 138) */}
      <Sequence from={120} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={126} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={132} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={138} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 7. Radar Sweep Blip (Frame 142) */}
      <Sequence from={142} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 8. Electric Circuit Spark on Topology Connections (Frame 148) */}
      <Sequence from={148} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 9. Network Lock Latch on 54+ Devices Synced (Frame 158) */}
      <Sequence from={158} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 2 SFX TIMELINE (Frames 165 - 330)
          Line 2 & 4: "tanpa harus mengakses setiap perangkat satu per satu. Bagaimana caranya?"
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 10. Transition 1 Laser Shutter Wipe Slash (Frame 162) */}
      <Sequence from={162} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 11. Problem Alert Tension Bass (Frame 172) */}
      <Sequence from={172} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/11_tension_bass_drop.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 11b. SSH Command Typing Clicks (Frames 176, 182, 188, 194) */}
      <Sequence from={176} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={182} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={188} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>
      <Sequence from={194} durationInFrames={15}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.3 * volume}
        />
      </Sequence>

      {/* 11c. SSH Handshake Connected Ding (Frame 208) */}
      <Sequence from={208} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 11d. PC-01 100% Download Finished Ding (Frame 246) */}
      <Sequence from={246} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 12. Warning Stamp Impact Glitch on Bottleneck (Frame 248) */}
      <Sequence from={248} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/09_stamp_impact_glitch.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 13. Question Hook Riser (Frame 262) */}
      <Sequence from={262} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/05_tape_rewind_riser.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 14. "Bagaimana Caranya?" Question Pop Ding (Frame 274) */}
      <Sequence from={274} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 3 SFX TIMELINE (Frames 328 - 615)
          Line 6 & 7: "Di kantor, aku memiliki beberapa produk yang masing-masing dilengkapi PC berbasis Linux. Di dalamnya, terdapat aplikasi aku yang berjalan secara lokal."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 15. Transition 2 Laser Shutter Wipe Slash (Frame 326) */}
      <Sequence from={326} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 16. Hardware Products Cluster Pop Dings (Frames 364, 376, 388) */}
      <Sequence from={364} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={376} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>
      <Sequence from={388} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 17. Local App Terminal Shutter Snap on "Di dalamnya..." (Frame 506) */}
      <Sequence from={506} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 18. Service Running Active Confirmation Ding (Frame 532) */}
      <Sequence from={532} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 4 SFX TIMELINE (Frames 610 - 800)
          Line 9 & 10: "Untuk menyelesaikan masalah ini, aku memanfaatkan RabbitMQ sebagai message broker."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 19. Transition 3 Laser Shutter Wipe Slash (Frame 608) */}
      <Sequence from={608} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 20. Solution Concept Ding (Frame 620) */}
      <Sequence from={620} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 21. Cinematic Sub Boom on RabbitMQ Hero Reveal (Frame 678) */}
      <Sequence from={678} durationInFrames={55}>
        <Audio
          src={staticFile("sound_fx/01_cinematic_sub_boom.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 22. Three Architectural Pillars Pop Dings (Frames 720, 732, 744) */}
      <Sequence from={720} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={732} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={744} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 23. AMQP Broker Pipeline Electric Spark Activation (Frame 760) */}
      <Sequence from={760} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 5 SFX TIMELINE (Frames 798 - 1000)
          Line 12 & 13: "Konsepnya sederhana. Web app bertindak sebagai Publisher yang mengirimkan event melalui RabbitMQ."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 24. Transition 4 Laser Shutter Wipe Slash (Frame 796) */}
      <Sequence from={796} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 25. "Konsepnya Sederhana" Crisp Blip (Frame 810) */}
      <Sequence from={810} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 26. Mouse Cursor Slide Whoosh (Frame 872) */}
      <Sequence from={872} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 27. Button Click Tactile Shutter Snap (Frame 892) */}
      <Sequence from={892} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/07_focus_snap_shutter.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 28. Event Packet Ejection Click (Frame 902) */}
      <Sequence from={902} durationInFrames={20}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.4 * volume}
        />
      </Sequence>

      {/* 29. Packet Ingestion Shockwave Ding at RabbitMQ (Frame 954) */}
      <Sequence from={954} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 30. Fanout Queues Circuit Spark Ignition (Frame 968) */}
      <Sequence from={968} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 6 SFX TIMELINE (Frames 998 - 1205)
          Line 15: "Kemudian, aplikasi yang berjalan di masing-masing produk bertindak sebagai Subscriber yang menunggu event tersebut."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 31. Transition 5 Laser Shutter Wipe Slash (Frame 996) */}
      <Sequence from={996} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 32. Subscriber Intro Radar Blip (Frame 1010) */}
      <Sequence from={1010} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 33. Three Subscriber Cards Pop In Dings (Frames 1044, 1056, 1068) */}
      <Sequence from={1044} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={1056} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={1068} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 34. Fanout Broadcast Firing Fast Whoosh (Frame 1092) */}
      <Sequence from={1092} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 35. Simultaneous Triple Impact Shockwave on Event Consumed (Frame 1138) */}
      <Sequence from={1138} durationInFrames={35}>
        <Audio
          src={staticFile("sound_fx/10_funny_pop_ding.wav")}
          volume={0.55 * volume}
        />
      </Sequence>

      {/* 36. Fleet 54 Nodes Full Synchronization Spark (Frame 1148) */}
      <Sequence from={1148} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/13_circuit_electric_spark.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          🎬 SCENE 7 SFX TIMELINE (Frames 1198 - 1430)
          Line 17 & 18: "Ketika event diterima, aplikasi akan otomatis mengunduh file dari cloud storage dan menyimpannya ke local storage produk."
         ───────────────────────────────────────────────────────────────────────────── */}
      {/* 37. Transition 6 Laser Shutter Wipe Slash (Frame 1196) */}
      <Sequence from={1196} durationInFrames={25}>
        <Audio
          src={staticFile("sound_fx/08_laser_beam_slash.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 38. Event Received Trigger Latch (Frame 1210) */}
      <Sequence from={1210} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/04_radar_ping_blip.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 39. Cloud High-Speed Download Streaming Whoosh (Frame 1248) */}
      <Sequence from={1248} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/02_clean_fast_whoosh.wav")}
          volume={0.45 * volume}
        />
      </Sequence>

      {/* 40. Download Speed Counter Rapid Clicks (Frames 1270, 1295, 1320) */}
      <Sequence from={1270} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={1295} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>
      <Sequence from={1320} durationInFrames={18}>
        <Audio
          src={staticFile("sound_fx/03_digital_counter_click.wav")}
          volume={0.35 * volume}
        />
      </Sequence>

      {/* 41. 100% Downloaded & Saved to NVMe Local SSD Lock Latch (Frame 1346) */}
      <Sequence from={1346} durationInFrames={30}>
        <Audio
          src={staticFile("sound_fx/12_station_lock_latch.wav")}
          volume={0.5 * volume}
        />
      </Sequence>

      {/* 42. Grand Finale Majestic Chime on 54/54 Full Automation (Frame 1370) */}
      <Sequence from={1370} durationInFrames={55}>
        <Audio
          src={staticFile("sound_fx/14_grand_finale_chime.wav")}
          volume={0.6 * volume}
        />
      </Sequence>
    </>
  );
};
