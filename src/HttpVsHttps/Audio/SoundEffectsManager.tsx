import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundEffectsManagerProps {
  volume?: number;
}

interface SfxCue {
  frame: number;
  file: string;
  volume: number;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  const cues: SfxCue[] = [
    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 1: Hook Comparison (Line 1: F0 - F86)
    // "Katanya https lebih aman dari http.?"
    // ═════════════════════════════════════════════════════════════════════
    { frame: 2, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.55 },
    { frame: 12, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.5 },
    { frame: 18, file: "sound_fx/12_station_lock_latch.wav", volume: 0.65 }, // Mechanical padlock latch on "https"
    { frame: 32, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.5 },   // Laser beam connecting comparison
    { frame: 48, file: "sound_fx_smooth/smooth_pop.wav", volume: 0.6 },       // "http.?" warning amber drop
    { frame: 64, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },    // Question radar ping

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: The Caution Plot Twist (Line 2: F86 - F147)
    // "Jangan salah persepsi."
    // ═════════════════════════════════════════════════════════════════════
    { frame: 86, file: "sound_fx/11_tension_bass_drop.wav", volume: 0.7 },   // Dramatic tension drop on scene enter
    { frame: 88, file: "sound_fx_smooth/02_smooth_air_whoosh.wav", volume: 0.5 },
    { frame: 102, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.75 }, // "salah" explosive impact stamp!
    { frame: 115, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.75 },  // "persepsi." optical camera focus snap!
    { frame: 124, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.5 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: Dual Perspectives Hook (Line 4: F147 - F206)
    // "Aman dari sisi siapa.?"
    // ═════════════════════════════════════════════════════════════════════
    { frame: 147, file: "sound_fx/06_heavy_pan_whoosh.wav", volume: 0.6 },   // Deep perspective sweep entrance
    { frame: 154, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.55 }, // "Aman" emerald glow surge
    { frame: 164, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },     // Radar scanning dual angles
    { frame: 174, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.65 },  // "siapa.?" resonant harmonic question
    { frame: 180, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.5 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: Two Viewpoints Exploration (Lines 6-7: F206 - F370)
    // "Apakah sisi orang yang mengakses, atau dari sisi developer yang mengelola website tersebut?"
    // ═════════════════════════════════════════════════════════════════════
    // Phase 1: Sisi Orang yang Mengakses (F206 - F262)
    { frame: 206, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.55 },
    { frame: 212, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.5 },
    { frame: 224, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },
    { frame: 242, file: "sound_fx_smooth/smooth_pop.wav", volume: 0.5 },

    // Phase 2: Sisi Developer yang Mengelola Website (F262 - F370)
    { frame: 262, file: "sound_fx/06_heavy_pan_whoosh.wav", volume: 0.65 },
    { frame: 272, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.55 },
    { frame: 290, file: "sound_fx/12_station_lock_latch.wav", volume: 0.65 },
    { frame: 314, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.65 },
    { frame: 328, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.5 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: Developer Security & Encryption Tunnel (Lines 9-11: F370 - F604)
    // "Dari sisi developer, HTTPS memang memberikan keamanan lebih karena data yang dikirimkan antara browser dan server dienkripsi."
    // ═════════════════════════════════════════════════════════════════════
    // Phase 1: Dari sisi developer (F370 - F418)
    { frame: 370, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.55 },
    { frame: 376, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.5 },

    // Phase 2: HTTPS memberikan keamanan lebih - Shield Vault Surge (F418 - F498)
    { frame: 418, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.75 }, // Cinematic sub-bass boom on "HTTPS"!
    { frame: 422, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.6 },    // Laser beam slash as shield deploys
    { frame: 436, file: "sound_fx/12_station_lock_latch.wav", volume: 0.7 },  // Mechanical padlock snap on "keamanan lebih"
    { frame: 450, file: "sound_fx/03_digital_counter_click.wav", volume: 0.55 }, // Digital counter click at 100% capacity
    { frame: 462, file: "sound_fx_smooth/smooth_pop.wav", volume: 0.5 },

    // Phase 3: Enkripsi Data Browser <-> Server (F498 - F604)
    { frame: 498, file: "sound_fx/06_heavy_pan_whoosh.wav", volume: 0.65 },    // Tunnel expansion whoosh
    { frame: 508, file: "sound_fx/13_circuit_electric_spark.wav", volume: 0.65 }, // Cipher scrambling electric spark
    { frame: 530, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },    // Encrypted packet streaming
    { frame: 568, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.75 }, // Stamp impact on "dienkripsi."
    { frame: 574, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.65 },  // Grand harmonic chime
    { frame: 590, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.5 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: Man-in-the-Middle Deflection & Tamper Protection (Lines 13-14: F604 - F774)
    // "Jadi, pihak lain tidak bisa dengan mudah membaca atau memodifikasi data selama proses pengiriman."
    // ═════════════════════════════════════════════════════════════════════
    { frame: 604, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.55 },
    { frame: 612, file: "sound_fx_smooth/smooth_pop.wav", volume: 0.5 },
    { frame: 630, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.55 },
    { frame: 648, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.75 },  // Probe deflected slam!
    { frame: 652, file: "sound_fx/13_circuit_electric_spark.wav", volume: 0.65 }, // Electric deflection burst
    { frame: 705, file: "sound_fx/12_station_lock_latch.wav", volume: 0.7 },    // Integrity shield latch
    { frame: 735, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.65 },
    { frame: 750, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.5 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 7: The Phishing Twist (Lines 16-17: F774 - F990)
    // "Tapi kalau dari sisi orang yang mengaksesnya, belum tentu, link pishing atau scam juga ada yang menggunakan https."
    // ═════════════════════════════════════════════════════════════════════
    // Phase 1: User perspective pivot & false security (F774 - F886)
    { frame: 774, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.75 },
    { frame: 774, file: "sound_fx_smooth/smooth_bass_swell.wav", volume: 0.6 },
    { frame: 778, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.6 },
    { frame: 778, file: "sound_fx/03_digital_counter_click.wav", volume: 0.5 },
    { frame: 792, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },
    { frame: 792, file: "sound_fx_smooth/02_smooth_air_whoosh.wav", volume: 0.55 },
    { frame: 815, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.5 },
    { frame: 838, file: "sound_fx/12_station_lock_latch.wav", volume: 0.65 },
    { frame: 838, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.45 },

    // Pre-drop tension riser right before the paradox slam (F870 - F885)
    { frame: 870, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.75 },

    // Phase 2: THE PARADOX IMPACT SLAM on "belum tentu," (F886 - F990)
    { frame: 886, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.95 },
    { frame: 886, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.85 },
    { frame: 886, file: "sound_fx/11_tension_bass_drop.wav", volume: 0.85 },
    { frame: 905, file: "sound_fx/13_circuit_electric_spark.wav", volume: 0.75 },
    { frame: 905, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.65 },
    { frame: 932, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.8 },
    { frame: 945, file: "sound_fx/12_station_lock_latch.wav", volume: 0.7 },
    { frame: 945, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.6 },
    { frame: 974, file: "sound_fx/06_heavy_pan_whoosh.wav", volume: 0.7 },
    { frame: 974, file: "sound_fx_smooth/01_smooth_ambient_swell.wav", volume: 0.6 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 8: The Padlock Warning (Lines 19-21: F990 - F1230)
    // "Jadi, mau HTTP atau HTTPS, sebagai orang yang sering berselancar di internet, jangan hanya melihat ikon gembok di browser."
    // ═════════════════════════════════════════════════════════════════════
    { frame: 990, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.6 },
    { frame: 1005, file: "sound_fx_smooth/04_smooth_glass_blip.wav", volume: 0.55 },
    { frame: 1035, file: "sound_fx/12_station_lock_latch.wav", volume: 0.65 },
    { frame: 1070, file: "sound_fx_smooth/02_smooth_air_whoosh.wav", volume: 0.55 },
    { frame: 1095, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.55 },
    { frame: 1146, file: "sound_fx/11_tension_bass_drop.wav", volume: 0.8 },
    { frame: 1150, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.65 },
    { frame: 1165, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.75 },
    { frame: 1190, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.55 },

    // ═════════════════════════════════════════════════════════════════════
    // 🎬 SCENE 9: Grand Finale - Domain Verification & Trust (Line 23: F1230 - F1375)
    // "Tetap periksa alamat website dan pastikan kamu tahu siapa yang sedang kamu percaya."
    // ═════════════════════════════════════════════════════════════════════
    { frame: 1230, file: "sound_fx/06_heavy_pan_whoosh.wav", volume: 0.7 },
    { frame: 1245, file: "sound_fx/08_laser_beam_slash.wav", volume: 0.65 },
    { frame: 1270, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.6 },
    { frame: 1305, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.95 },
    { frame: 1308, file: "sound_fx/09_stamp_impact_glitch.wav", volume: 0.8 },
    { frame: 1315, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.85 },
    { frame: 1340, file: "sound_fx_smooth/smooth_ping.wav", volume: 0.6 },
  ];

  return (
    <>
      {cues.map((cue, idx) => (
        <Sequence
          key={`${cue.frame}-${cue.file}-${idx}`}
          from={cue.frame}
          durationInFrames={90}
        >
          <Audio
            src={staticFile(cue.file)}
            volume={cue.volume * volume}
          />
        </Sequence>
      ))}
    </>
  );
};
