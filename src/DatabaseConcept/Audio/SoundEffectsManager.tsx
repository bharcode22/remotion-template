import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundCue {
  frame: number;
  file: string;
  volume: number;
  duration?: number;
  description?: string;
}

interface SoundEffectsManagerProps {
  enabled?: boolean;
  volume?: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  enabled = true,
  volume = 1.0,
}) => {
  if (!enabled) return null;

  const cues: SoundCue[] = [
    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 1: TYPEWRITER HOOK (F0 - F88)
    // Line 1: "Database adalah tempat menyimpan data?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 0,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.22,
      duration: 35,
      description: "Intro Ambient Sub Boom",
    },
    {
      frame: 6,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.18,
      duration: 20,
      description: "Typewriter Start Radar Ping",
    },
    {
      frame: 14,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.14,
      duration: 8,
      description: "Type Click 1",
    },
    {
      frame: 26,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.14,
      duration: 8,
      description: "Type Click 2",
    },
    {
      frame: 38,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.14,
      duration: 8,
      description: "Type Click 3",
    },
    {
      frame: 50,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.14,
      duration: 8,
      description: "Type Click 4",
    },
    {
      frame: 66,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.25,
      duration: 25,
      description: "Question Mark Pop Ding at F66",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: REFUTATION "KURANG TEPAT" (F88 - F188)
    // Line 2: "Menurut saya, definisi itu kurang tepat."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 88,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.20,
      duration: 20,
      description: "Scene 1 to Scene 2 Transition Whoosh",
    },
    {
      frame: 90,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 2 Card Reveal Snap at F90",
    },
    {
      frame: 143,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.26,
      duration: 25,
      description: "Kurang Tepat Red Stamp Glitch at F143",
    },
    {
      frame: 145,
      file: "sound_fx/11_tension_bass_drop.wav",
      volume: 0.16,
      duration: 35,
      description: "Refutation Tension Bass Drop",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: DISSOCIATION "BUKANLAH TEMPAT MENYIMPAN DATA" (F188 - F252)
    // Line 4: "Database bukanlah tempat menyimpan data,"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 188,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 3 Entrance Whoosh",
    },
    {
      frame: 190,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Scene 3 Card Settle Snap",
    },
    {
      frame: 206,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.20,
      duration: 15,
      description: "Bukanlah Accent Click at F206",
    },
    {
      frame: 220,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.18,
      duration: 25,
      description: "Storage Disconnect Blip at F220",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: CORE ARCHITECTURE "DIORGANISASI & DIKELOLA" (F252 - F368)
    // Line 5: "tetapi bagaimana data diorganisasi dan dikelola."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 252,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.20,
      duration: 20,
      description: "Scene 4 Transition Whoosh",
    },
    {
      frame: 256,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Scene 4 Reveal Snap",
    },
    {
      frame: 296,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.22,
      duration: 25,
      description: "Diorganisasi Emerald Pop at F296",
    },
    {
      frame: 330,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.20,
      duration: 25,
      description: "Dikelola Station Latch at F330",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: PHYSICAL STORAGE DEFINITION (F368 - F480)
    // Line 7: "Kalau tempat penyimpanannya,"
    // Line 8: "kita sebut storage."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 368,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 5 Entrance Whoosh",
    },
    {
      frame: 372,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Scene 5 Card Settle Snap",
    },
    {
      frame: 420,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.18,
      duration: 15,
      description: "Kita Sebut Transition Click at F420",
    },
    {
      frame: 444,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.24,
      duration: 25,
      description: "Storage Stamp Impact Glitch at F444",
    },
    {
      frame: 446,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.18,
      duration: 35,
      description: "Storage Golden Bass Boom at F446",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: WARDROBE ANALOGY (F480 - F775)
    // Line 10: "Bayangkan sebuah lemari pakaian."
    // Line 11: "Lemari tersebut adalah storage-nya."
    // Line 12: "Sedangkan rak-rak di dalamnya bisa kita ibaratkan sebagai database."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 480,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 6 Wardrobe Intro Whoosh",
    },
    {
      frame: 485,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Wardrobe Card Settle Snap",
    },
    {
      frame: 545,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.18,
      duration: 15,
      description: "Phase 2 Storage Transition Click",
    },
    {
      frame: 584,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.22,
      duration: 25,
      description: "Storage-nya Golden Lock Latch at F584",
    },
    {
      frame: 622,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Phase 3 Shelves Whoosh at F622",
    },
    {
      frame: 636,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.20,
      duration: 20,
      description: "Rak-rak Shelf Ping at F636",
    },
    {
      frame: 725,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.24,
      duration: 25,
      description: "Database Climax Stamp Glitch at F725",
    },
    {
      frame: 727,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.20,
      duration: 35,
      description: "Database Climax Sub Boom at F727",
    },
    {
      frame: 728,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.22,
      duration: 25,
      description: "Database Climax Bright Ding at F728",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 7: DATA ORGANIZATION METHODS (F775 - F1005)
    // Line 14: "Lalu, bagaimana pakaian itu disusun?"
    // Line 15: "Apakah dilipat, digantung, atau dikelompokkan berdasarkan jenisnya?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 775,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 7 Question Intro Whoosh",
    },
    {
      frame: 780,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Question Card Settle Snap",
    },
    {
      frame: 810,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.18,
      duration: 20,
      description: "Question Inquiry Pop Ding",
    },
    {
      frame: 861,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.20,
      duration: 15,
      description: "Dilipat Method Click at F861",
    },
    {
      frame: 900,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.20,
      duration: 20,
      description: "Digantung Method Blip at F900",
    },
    {
      frame: 935,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.22,
      duration: 25,
      description: "Dikelompokkan Method Latch at F935",
    },
    {
      frame: 955,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.20,
      duration: 25,
      description: "Full Classification Bloom Glitch",
    },
    {
      frame: 958,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.16,
      duration: 35,
      description: "Full Classification Sub Boom",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 8: ANALOGY BRIDGE (F1005 - F1150)
    // Line 17: "Nah, itu bisa kita analogikan sebagai struktur dan cara data diorganisasi."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1005,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 8 Bridge Whoosh",
    },
    {
      frame: 1012,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.16,
      duration: 20,
      description: "Scene 8 Bridge Snap",
    },
    {
      frame: 1065,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.20,
      duration: 20,
      description: "Struktur Pop Ding at F1065",
    },
    {
      frame: 1090,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.20,
      duration: 20,
      description: "Cara Data Diorganisasi Blip",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 9: GRAND FINALE "TRIAD OF PURPOSE" (F1150 - F1440)
    // Line 18: "Jadi, database bukan cuma soal menyimpan data,"
    // Line 19: "tetapi juga bagaimana data tersebut disusun agar mudah dicari, dikelola, dan digunakan kembali."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1150,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.20,
      duration: 20,
      description: "Grand Finale Intro Whoosh",
    },
    {
      frame: 1168,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.18,
      duration: 20,
      description: "Line 18 Grand Settle Snap",
    },
    {
      frame: 1250,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Line 19 Concluding Whoosh",
    },
    {
      frame: 1305,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.20,
      duration: 15,
      description: "Line 19: 'Disusun Agar' Highlight Click",
    },
    {
      frame: 1315,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.22,
      duration: 15,
      description: "Triad 1: Mudah Dicari Blip",
    },
    {
      frame: 1365,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.22,
      duration: 25,
      description: "Triad 2: Dikelola Latch",
    },
    {
      frame: 1378,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.18,
      duration: 15,
      description: "Connector 'dan' Digital Ping",
    },
    {
      frame: 1389,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.25,
      duration: 25,
      description: "Triad 3: Digunakan Kembali Glitch Impact",
    },
    {
      frame: 1390,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.22,
      duration: 35,
      description: "Grand Finale Sub Boom",
    },
    {
      frame: 1392,
      file: "sound_fx/14_grand_finale_chime.wav",
      volume: 0.25,
      duration: 45,
      description: "Grand Finale Triumphal Chime",
    },
  ];

  return (
    <>
      {cues
        .filter((cue) => cue.frame < 1440)
        .map((cue, idx) => {
          const maxAllowedFrames = Math.max(0, 1440 - cue.frame);
          if (maxAllowedFrames <= 0) return null;
          const dur = Math.min(cue.duration || 60, maxAllowedFrames);

          return (
            <Sequence
              key={`db-sfx-${idx}-${cue.frame}-${cue.file}`}
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

