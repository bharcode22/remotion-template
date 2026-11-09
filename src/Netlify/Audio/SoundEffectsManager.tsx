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
    // 🎬 SCENE 1: REACT SHOWCASE (F0 - F72)
    // Line 1: "Mau pamerin website React kalian secara gratis?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 0,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.22,
      duration: 35,
      description: "Intro Ambient Sub Boom",
    },
    {
      frame: 8,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.16,
      duration: 20,
      description: "Card Swoosh Entrance",
    },
    {
      frame: 24,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.2,
      duration: 20,
      description: "React Logo & Website Highlight Ping",
    },
    {
      frame: 42,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 30,
      description: "Secara Gratis Sparkle Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: DEPLOY DILEMMA (F72 - F144)
    // Line 2: "Tapi bingung mau deploy di mana?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 72,
      file: "sound_fx_smooth/silk_air_glide.wav",
      volume: 0.22,
      duration: 25,
      description: "Scene 2 Transition Air Glide",
    },
    {
      frame: 80,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.18,
      duration: 18,
      description: "Tapi Bingung Dilemma Focus Snap",
    },
    {
      frame: 100,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.22,
      duration: 22,
      description: "Mau Deploy di Mana Radar Search",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: NETLIFY HERO (F144 - F186)
    // Line 3: "Netlify aja!"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 144,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.22,
      duration: 20,
      description: "Netlify Hero Whoosh Entrance",
    },
    {
      frame: 150,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.25,
      duration: 25,
      description: "Netlify Aja Logo Punch",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: FREE & EASY (F186 - F290)
    // Line 4: "Gratis untuk memulai dan gampang banget digunakan."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 188,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.2,
      duration: 25,
      description: "Gratis untuk Memulai Chime",
    },
    {
      frame: 228,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.18,
      duration: 15,
      description: "Gampang Digunakan Click",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: DRAG & DROP (F290 - F440)
    // Line 5: "Cukup build project React kalian, lalu drag and drop folder hasil build ke Netlify."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 292,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.16,
      duration: 15,
      description: "Build Project React Click",
    },
    {
      frame: 352,
      file: "sound_fx_smooth/ultra_smooth_whoosh.wav",
      volume: 0.22,
      duration: 25,
      description: "Drag and Drop Swoosh",
    },
    {
      frame: 382,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.22,
      duration: 20,
      description: "Folder Drop to Netlify Lock Latch",
    },
    {
      frame: 396,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "Asset 1 Synced Tick",
    },
    {
      frame: 410,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "Asset 2 Synced Tick",
    },
    {
      frame: 422,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "Asset 3 Synced Tick",
    },
    {
      frame: 428,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 28,
      description: "100% Upload Completed Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: INSTANT ONLINE (F440 - F515)
    // Line 6: "Website kalian langsung online!"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 442,
      file: "sound_fx_smooth/01_smooth_ambient_swell.wav",
      volume: 0.2,
      duration: 25,
      description: "Online Ambient Swell",
    },
    {
      frame: 456,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.22,
      duration: 25,
      description: "Langsung Online Green Impact",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 7: MORE PRACTICAL (F515 - F570)
    // Line 7: "Atau mau lebih praktis?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 518,
      file: "sound_fx_smooth/06_smooth_soft_notice.wav",
      volume: 0.2,
      duration: 25,
      description: "Praktis Question Notice",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 8: GITHUB ACTIONS CI/CD (F570 - F755)
    // Line 8: "Bisa juga integrasikan project kalian dengan GitHub Actions untuk otomatisasi deployment menggunakan CI/CD."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 630,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.22,
      duration: 22,
      description: "GitHub Actions Badge Latch",
    },
    {
      frame: 640,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Code Push Energy Beam Whoosh",
    },
    {
      frame: 666,
      file: "sound_fx_smooth/04_smooth_glass_blip.wav",
      volume: 0.2,
      duration: 15,
      description: "Code Arrival at GitHub Actions",
    },
    {
      frame: 676,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "CI/CD Step 1 Install Pass",
    },
    {
      frame: 690,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "CI/CD Step 2 Build Pass",
    },
    {
      frame: 702,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.16,
      duration: 12,
      description: "CI/CD Step 3 Test Pass",
    },
    {
      frame: 706,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.22,
      duration: 20,
      description: "Deploy Beam to Netlify Triggered",
    },
    {
      frame: 725,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 28,
      description: "Netlify Production Live Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 9: SUBDOMAIN NOTE (F755 - F985)
    // Line 9: "Tapi,"
    // Line 10: "Kalau menggunakan subdomain gratis dari Netlify, alamat website kalian akan berakhiran .netlify.app."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 760,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.2,
      duration: 20,
      description: "Tapi Warning Snap",
    },
    {
      frame: 906,
      file: "sound_fx_smooth/04_smooth_glass_blip.wav",
      volume: 0.24,
      duration: 20,
      description: ".netlify.app Highlight Blip",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 10: CUSTOM DOMAIN (F985 - F1115)
    // Line 11: "Jadi, kalau mau pakai domain sendiri, kalian bisa menghubungkan custom domain."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 992,
      file: "sound_fx_smooth/silk_air_glide.wav",
      volume: 0.18,
      duration: 22,
      description: "Custom Domain Intro Glide",
    },
    {
      frame: 1060,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 28,
      description: "Custom Domain Connection Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 11: OUTRO CLIMAX (F1115 - F1143)
    // Line 12: "Gampang, kan?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1116,
      file: "sound_fx/14_grand_finale_chime.wav",
      volume: 0.3,
      duration: 35,
      description: "Grand Finale Gampang Kan Chime",
    },
  ];

  return (
    <>
      {cues.map((cue, index) => (
        <Sequence
          key={`sfx-${cue.frame}-${index}`}
          from={cue.frame}
          durationInFrames={cue.duration || 30}
        >
          <Audio
            src={staticFile(cue.file)}
            volume={(cue.volume || 0.2) * volume}
          />
        </Sequence>
      ))}
    </>
  );
};

