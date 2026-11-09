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
 * SoundEffectsManager (SqlVsNoSql - Terkalibrasi Voiceover User 1940 Frames):
 * - 100% menggunakan 11 file terpilih dari sound_fx/
 * - Volume soft & ducked (0.14 - 0.28) agar vokal suara user tetap terdengar jernih dan dominan
 * - Sinkron dengan ketikan Naskah Line 1, popup tabel di 83, Line 2 sampai 294, dst.
 */
export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  const cues: SfxCue[] = [
    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 1: TYPEWRITER HOOK (F0 - F128)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 6, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.18, duration: 40, description: "Intro Sub Ambience" },
    { frame: 12, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, duration: 8, description: "Typewriter Click 1" },
    { frame: 28, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, duration: 8, description: "Typewriter Click 2" },
    { frame: 48, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, duration: 8, description: "Typewriter Click 3" },
    { frame: 66, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, duration: 8, description: "Typewriter Click 4" },
    { frame: 83, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, duration: 25, description: "Table Popup Enter at F83" },
    { frame: 85, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, duration: 18, description: "Table Lock Shutter" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: THINKER "BERPIKIR POSITIF SAJA" (F128 - F294)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 128, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 25, description: "Scene 2 Transition Whoosh" },
    { frame: 135, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.18, duration: 25, description: "Berpikir Positif Blip" },
    { frame: 175, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, duration: 25, description: "Mungkin Dia Hmm Anu Comic Ding" },
    { frame: 220, file: "sound_fx/11_tension_bass_drop.wav", volume: 0.15, duration: 35, description: "Hmmm Anu Awkward Tension" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: NASKAH L4, L5 & L7 (F295 - F556)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 294, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.22, duration: 25, description: "Scene 3 Transition Whoosh at F294" },
    { frame: 295, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, duration: 20, description: "SQL Reveal Snap at F295" },
    { frame: 375, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, duration: 25, description: "NoSQL Reveal Latch at F375" },
    { frame: 488, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.22, duration: 20, description: "Gitu Doang Comic Pop at F488" },
    { frame: 525, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.25, duration: 25, description: "Tentu Tidak Impact Stamp at F525" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: DEEP DIVE SQL - DATA KARYAWAN (F556 - F995)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 550, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 20, description: "Scene 3 to Scene 4 Transition Whoosh at F550" },
    { frame: 556, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.22, duration: 20, description: "Structured Data Card Snap at F556" },
    { frame: 640, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, duration: 25, description: "Schema Type Lock Latch at F640" },
    { frame: 750, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 25, description: "Table employees Render Whoosh at F750" },
    { frame: 822, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Nama String Type Badge" },
    { frame: 873, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Nomor HP Integer Type Badge" },
    { frame: 933, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Berat Badan Float Type Badge" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: DEEP DIVE NoSQL - LOG APLIKASI (F995 - F1719)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 995, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 25, description: "NoSQL Scene Transition Whoosh" },
    { frame: 1013, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.22, duration: 20, description: "NoSQL Hook Entry Snap at F1013" },
    { frame: 1065, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, duration: 25, description: "Menyimpan Log Aplikasi Ping at F1065" },
    { frame: 1145, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Log Login Badge Click at F1145" },
    { frame: 1175, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, duration: 10, description: "Log Transaksi Badge Click at F1175" },
    { frame: 1210, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.22, duration: 25, description: "Log Error Badge Glitch at F1210" },
    { frame: 1245, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, duration: 25, description: "Informasi Berbeda-beda Latch at F1245" },
    { frame: 1320, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 25, description: "JSON Documents Transition Whoosh at F1320" },
    { frame: 1324, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, duration: 20, description: "Log Login Highlight Pop" },
    { frame: 1429, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.22, duration: 25, description: "Log Error Highlight Glitch Stamp" },
    { frame: 1547, file: "sound_fx/12_station_lock_latch.wav", volume: 0.24, duration: 25, description: "NoSQL Flexible Ingest Lock" },
    { frame: 1585, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, duration: 25, description: "Lebih Fleksibel Radar Ping at F1585" },
    { frame: 1630, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.22, duration: 20, description: "Menggunakan NoSQL Ding at F1630" },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: SEPARATED FINALE (F1719 - F1940)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 1719, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.24, duration: 40, description: "Line 23 SQL Terstruktur Reveal Boom" },
    { frame: 1735, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.25, duration: 25, description: "SQL Terstruktur Ding" },
    { frame: 1820, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, duration: 20, description: "Line 23 to Line 25 Transition Whoosh" },
    { frame: 1825, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.25, duration: 25, description: "Line 25 NoSQL Fleksibel Ding" },
    { frame: 1880, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.28, duration: 35, description: "Finale Chime (Selesai sebelum F1918)" },
  ];

  return (
    <>
      {cues
        .filter((cue) => cue.frame < 1918)
        .map((cue, idx) => {
          const maxAllowedFrames = Math.max(0, 1918 - cue.frame);
          if (maxAllowedFrames <= 0) return null;
          const dur = Math.min(cue.duration || 60, maxAllowedFrames);

          return (
            <Sequence
              key={`sql-sfx-${idx}-${cue.frame}-${cue.file}`}
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
