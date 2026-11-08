import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundEffectsManagerProps {
  volume?: number;
}

interface SfxCue {
  frame: number;
  file: string;
  volume: number;
  duration?: number;
  description?: string;
}

/**
 * SoundEffectsManager (Curated Audio Design):
 * - Eksklusif 100% hanya menggunakan koleksi file dari sound_fx/ yang disetujui user:
 *   01_cinematic_sub_boom.wav, 02_clean_fast_whoosh.wav, 03_digital_counter_click.wav,
 *   04_radar_ping_blip.wav, 05_tape_rewind_riser.wav, 07_focus_snap_shutter.wav,
 *   09_stamp_impact_glitch.wav, 10_funny_pop_ding.wav, 11_tension_bass_drop.wav,
 *   12_station_lock_latch.wav, 14_grand_finale_chime.wav
 * - Menghilangkan repetisi monoton dengan mengombinasikan variasi ritmis (click, snap, radar ping, pop ding, riser, latch)
 * - Kalibrasi volume nyaman, lembut, dan tidak menusuk telinga (0.16 - 0.36)
 * - TAHAP OUTRO (Frame 961 - 1043): MUTED TOTAL (Hening, tidak ada SFX yang aktif dari frame 961 hingga akhir video).
 */
export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  const cues: SfxCue[] = [
    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 1: INTRO & ENTRANCE (F0 - F60)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 8, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.24, duration: 45, description: "Intro Warm Sub Bass Reveal" },
    { frame: 15, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 25, description: "Entrance Clean Whoosh" },
    { frame: 48, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, duration: 15, description: "System Ready Soft Snap" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 2: UPLOAD NODE.JS KE STORAGE SERVER (F60 - F220)
    // ═════════════════════════════════════════════════════════════════════
    // F60: Klik Tombol Upload (Snap Shutter + Cheerful Pop Ding)
    { frame: 60, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.26, duration: 15, description: "Upload Button Snap Shutter" },
    { frame: 60, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.28, duration: 25, description: "Upload Button Pop Ding" },
    { frame: 75, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.22, duration: 25, description: "Packet Departs Node.js" },

    // F90 - F210: Progress Upload (Variasi Micro Tick, Radar Ping, Pop Ding, Riser)
    { frame: 95, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Upload Digital Tick (15%)" },
    { frame: 145, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Upload Counter Tick (45%)" },
    { frame: 165, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, duration: 25, description: "Upload Milestone 60% Ding" },
    { frame: 185, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.22, duration: 35, description: "Upload Acceleration Riser (75%)" },

    // F220: Upload Node.js Selesai 100% -> File Ready di Storage Server
    { frame: 220, file: "sound_fx/12_station_lock_latch.wav", volume: 0.28, duration: 25, description: "Storage Station Lock Latch" },
    { frame: 220, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.24, duration: 15, description: "File Saved Shutter Snap" },
    { frame: 222, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.24, duration: 40, description: "Storage Ready Warm Sub Bass" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 3: NODE.JS TRIGGER EVENT KE RABBITMQ (F220 - F330)
    // ═════════════════════════════════════════════════════════════════════
    // F232: Node.js kirim trigger event packet
    { frame: 232, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, duration: 25, description: "Node.js Publish Trigger Pop" },
    { frame: 234, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.22, duration: 25, description: "Trigger Event Fast Whoosh" },
    { frame: 280, file: "sound_fx/03_digital_counter_click.wav", volume: 0.16, duration: 10, description: "Conduit Intersection Crossing" },

    // F330: RabbitMQ menerima event dari Node.js
    { frame: 330, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.26, duration: 30, description: "RabbitMQ Active Radar Ping" },
    { frame: 334, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, duration: 20, description: "RabbitMQ Queue Armed Latch" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 4: RABBITMQ BROADCAST KE 3 CONSUMER (F330 - F540)
    // ═════════════════════════════════════════════════════════════════════
    // F370: RabbitMQ dispatch sinyal broadcast ke 3 Consumer (Produk 1, 2, 3)
    { frame: 370, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.28, duration: 25, description: "RabbitMQ Fan-Out Pop Ding" },
    { frame: 372, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.22, duration: 25, description: "Fan-Out Whoosh Dispatch" },

    // F395 - F435: Staccato branch navigation
    { frame: 415, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Produk 2 Conduit Turn Click" },

    // F460: Ketiga Consumer menerima sinyal trigger RabbitMQ
    { frame: 460, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.28, duration: 20, description: "Consumer Event Port Lock Snap" },
    { frame: 462, file: "sound_fx/12_station_lock_latch.wav", volume: 0.24, duration: 20, description: "Consumer Event Ready Latch" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 5: STORAGE SERVER STREAM KE CONSUMER (F540 - F660)
    // ═════════════════════════════════════════════════════════════════════
    // F560: Storage Server membuka 3 jalur paralel streaming data
    { frame: 560, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.25, duration: 30, description: "Storage Stream Clean Fast Whoosh" },
    { frame: 562, file: "sound_fx/11_tension_bass_drop.wav", volume: 0.18, duration: 40, description: "Deep Data Conduit Power Hum" },
    { frame: 610, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.20, duration: 30, description: "Data Packet Accelerating Flow" },

    // F660: Aliran data mendarat presisi di Port Data Consumer
    { frame: 660, file: "sound_fx/12_station_lock_latch.wav", volume: 0.28, duration: 25, description: "Consumer Port Docking Latch" },
    { frame: 660, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.24, duration: 15, description: "Data Port Precision Snap" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 6: 3 CONSUMER PARALLEL DOWNLOAD (F661 - F910)
    // Alur Ritmik Variatif: Clicks, Snaps, Radar Pings, Pop Dings, Risers
    // ═════════════════════════════════════════════════════════════════════
    { frame: 665, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Download Start Digital Tick (5%)" },
    { frame: 690, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, duration: 15, description: "Download Tactile Snap (15%)" },
    { frame: 740, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Download Counter Tick (38%)" },
    { frame: 765, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, duration: 15, description: "Download Snap Shutter (48%)" },
    { frame: 785, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, duration: 25, description: "Download 50% Milestone Pop Ding" },
    { frame: 835, file: "sound_fx/03_digital_counter_click.wav", volume: 0.20, duration: 10, description: "Download Digital Tick (75%)" },
    { frame: 855, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.22, duration: 15, description: "Download Focus Snap (85%)" },
    { frame: 875, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.22, duration: 30, description: "Download Tension Riser (92%)" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 TAHAP 7: GRAND FINALE SELESAI (F910 - F960)
    // Selesai 100% Download. Dari F961 sampai F1043 Hening Total (No SFX).
    // ═════════════════════════════════════════════════════════════════════
    // F910: 100% Download Victory di semua Consumer (Produk 1, 2, 3 Selesai!)
    { frame: 910, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.32, duration: 30, description: "Victory Pop Ding Alert" },
    { frame: 910, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.28, duration: 25, description: "Victory Glitch Stamp Confirmation" },
    { frame: 912, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.30, duration: 45, description: "Victory Sub Bass Boom" },

    // F915: Grand Finale Chime & Reverberation (Berakhir sebelum F961)
    { frame: 915, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.36, duration: 45, description: "Grand Finale Celebratory Chime" },
    { frame: 935, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.22, duration: 20, description: "All Consumer Green Lock Snap" },
  ];

  return (
    <>
      {cues
        .filter((cue) => cue.frame < 961)
        .map((cue, idx) => {
          // Batas keras: tidak ada suara yang boleh melintasi atau berada di rentang 961 - 1042
          const maxAllowedFrames = Math.max(0, 960 - cue.frame);
          if (maxAllowedFrames <= 0) return null;
          const dur = Math.min(cue.duration || 60, maxAllowedFrames);

          return (
            <Sequence
              key={`curated-sfx-${idx}-${cue.frame}-${cue.file}`}
              from={cue.frame}
              durationInFrames={dur}
            >
              <Audio
                src={staticFile(cue.file)}
                volume={Math.min(1.0, cue.volume * volume)}
              />
            </Sequence>
          );
        })}
    </>
  );
};
