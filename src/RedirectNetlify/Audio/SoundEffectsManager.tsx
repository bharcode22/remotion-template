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
    // 🎬 SCENE 1: DEPLOY INTRO (F0 - F80)
    // Line 1: "Kamu deploy web app di Netlify?"
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
      description: "Card Entrance Swoosh",
    },
    {
      frame: 26,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.2,
      duration: 20,
      description: "Web App Pop Highlight",
    },
    {
      frame: 48,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 30,
      description: "Netlify Hero Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: RELOAD 404 (F80 - F235)
    // Line 2: "Tapi ketika halaman di-reload, malah muncul pesan 404 Page Not Found?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 80,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 2 Transition Whoosh",
    },
    {
      frame: 100,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.2,
      duration: 20,
      description: "Reload Spin Click",
    },
    {
      frame: 140,
      file: "sound_fx/11_tension_bass_drop.wav",
      volume: 0.26,
      duration: 40,
      description: "404 Error Bass Drop Tension",
    },
    {
      frame: 154,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.22,
      duration: 30,
      description: "404 Alert Stamp Glitch",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: WHY QUESTION (F235 - F285)
    // Line 3: "Kenapa ini bisa terjadi?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 235,
      file: "sound_fx_smooth/silk_air_glide.wav",
      volume: 0.16,
      duration: 25,
      description: "Scene 3 Soft Glide",
    },
    {
      frame: 245,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.2,
      duration: 20,
      description: "Question Radar Blip",
    },
    {
      frame: 256,
      file: "sound_fx_smooth/06_smooth_soft_notice.wav",
      volume: 0.22,
      duration: 28,
      description: "Question Accent Notice",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: SPA ARCHITECTURE (F285 - F495)
    // Line 4: "Karena kebanyakan Single Page Application atau SPA hanya menggunakan satu file HTML sebagai entry point."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 285,
      file: "sound_fx_smooth/ultra_smooth_whoosh.wav",
      volume: 0.18,
      duration: 30,
      description: "Scene 4 Grand Whoosh",
    },
    {
      frame: 322,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.2,
      duration: 20,
      description: "SPA Term Highlight",
    },
    {
      frame: 396,
      file: "sound_fx_smooth/smooth_ping.wav",
      volume: 0.22,
      duration: 25,
      description: "index.html Entry Point Ping",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: CLIENT-SIDE ROUTING (F495 - F640)
    // Line 5: "Ketika kamu berpindah halaman, routing ditangani oleh frontend, bukan server."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 495,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 5 Air Whoosh",
    },
    {
      frame: 555,
      file: "sound_fx_smooth/smooth_click.wav",
      volume: 0.2,
      duration: 20,
      description: "Frontend Routing Click",
    },
    {
      frame: 600,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.22,
      duration: 25,
      description: "Server Bypass Shutter",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: DIRECT HTTP REQUEST (F640 - F795)
    // Line 6: "Nah, ketika halaman di-reload, browser akan meminta URL tersebut langsung ke server."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 640,
      file: "sound_fx_smooth/silk_air_glide.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 6 Glide",
    },
    {
      frame: 678,
      file: "sound_fx/03_digital_counter_click.wav",
      volume: 0.2,
      duration: 20,
      description: "Reload Spin Click",
    },
    {
      frame: 710,
      file: "sound_fx_smooth/smooth_swoosh.wav",
      volume: 0.22,
      duration: 30,
      description: "HTTP Request Beam Swoosh",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 7: SERVER ROUTE MISS (F795 - F955)
    // Line 7: "Karena server tidak menemukan file atau route yang sesuai, akhirnya muncul 404."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 795,
      file: "sound_fx_smooth/ultra_smooth_whoosh.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 7 Whoosh",
    },
    {
      frame: 880,
      file: "sound_fx/11_tension_bass_drop.wav",
      volume: 0.24,
      duration: 35,
      description: "Route Miss Bass Drop",
    },
    {
      frame: 898,
      file: "sound_fx/09_stamp_impact_glitch.wav",
      volume: 0.2,
      duration: 28,
      description: "404 Result Impact Glitch",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 8: QUICK FIX (F955 - F1000)
    // Line 8: "Solusinya?"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 955,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 20,
      description: "Scene 8 Light Glide",
    },
    {
      frame: 977,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.25,
      duration: 30,
      description: "Solusinya Lightbulb Ding",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 9: NETLIFY CONFIGURATION (F1000 - F1120)
    // Line 9: "Buat file bernama _redirects di folder public, lalu tambahkan konfigurasi berikut:"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1000,
      file: "sound_fx_smooth/silk_air_glide.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 9 Air Glide",
    },
    {
      frame: 1022,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.24,
      duration: 30,
      description: "_redirects File Latch",
    },
    {
      frame: 1050,
      file: "sound_fx_smooth/smooth_pop.wav",
      volume: 0.2,
      duration: 20,
      description: "Public Folder Pop",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 10: REDIRECT RULE (F1120 - F1205)
    // Line 10: "/* /index.html 200"
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1120,
      file: "sound_fx_smooth/ultra_smooth_whoosh.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 10 Code Whoosh",
    },
    {
      frame: 1129,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 35,
      description: "Rule Accent Warm Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 11: RESOLUTION & OUTRO (F1205 - F1530)
    // Line 11: "Dengan begitu, setiap request akan diarahkan ke index.html, dan routing kembali ditangani oleh frontend."
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 1205,
      file: "sound_fx_smooth/01_smooth_ambient_swell.wav",
      volume: 0.22,
      duration: 45,
      description: "Resolution Ambient Swell",
    },
    {
      frame: 1212,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 25,
      description: "Scene 11 Entrance Whoosh",
    },
    {
      frame: 1270,
      file: "sound_fx_smooth/smooth_ping.wav",
      volume: 0.2,
      duration: 25,
      description: "index.html Success Ping",
    },
    {
      frame: 1330,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.24,
      duration: 35,
      description: "Routing Resolved Chime",
    },
    {
      frame: 1390,
      file: "sound_fx/14_grand_finale_chime.wav",
      volume: 0.28,
      duration: 60,
      description: "Grand Finale Outro Chime",
    },
  ];

  return (
    <>
      {cues.map((cue, idx) => (
        <Sequence
          key={`cue-${idx}-${cue.frame}`}
          from={cue.frame}
          durationInFrames={cue.duration ?? 45}
        >
          <Audio src={staticFile(cue.file)} volume={cue.volume * volume} />
        </Sequence>
      ))}
    </>
  );
};
