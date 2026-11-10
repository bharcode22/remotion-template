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
    // 🎬 SCENE 1: INTRO WATERMARK (F0 - F90)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 0,
      file: "sound_fx/01_cinematic_sub_boom.wav",
      volume: 0.22,
      duration: 35,
      description: "Intro Ambient Sub Boom",
    },
    {
      frame: 10,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.16,
      duration: 20,
      description: "Card Entrance Swoosh",
    },
    {
      frame: 45,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.2,
      duration: 20,
      description: "Netlify Pop Highlight",
    },
    {
      frame: 65,
      file: "sound_fx/10_funny_pop_ding.wav",
      volume: 0.22,
      duration: 22,
      description: "Watermark Target Ring Alert",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 2: EASY SOLUTION (F90 - F200)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 95,
      file: "sound_fx_smooth/02_smooth_air_whoosh.wav",
      volume: 0.18,
      duration: 24,
      description: "Scene 2 Transition Whoosh",
    },
    {
      frame: 155,
      file: "sound_fx_smooth/05_smooth_warm_chime.wav",
      volume: 0.25,
      duration: 32,
      description: "Gampang Warm Chime",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 3: LOGIN DASHBOARD (F200 - F285)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 202,
      file: "sound_fx_smooth/07_smooth_glide_transition.wav",
      volume: 0.18,
      duration: 24,
      description: "Step 1 Transition",
    },
    {
      frame: 245,
      file: "sound_fx_smooth/smooth_click.wav",
      volume: 0.28,
      duration: 15,
      description: "Login Button Click",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 4: SELECT PROJECT (F285 - F368)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 288,
      file: "sound_fx/02_clean_fast_whoosh.wav",
      volume: 0.16,
      duration: 20,
      description: "Step 2 Project List Transition",
    },
    {
      frame: 335,
      file: "sound_fx/07_focus_snap_shutter.wav",
      volume: 0.22,
      duration: 18,
      description: "Select Project Card Click",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 5: PROJECT CONFIG (F368 - F450)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 370,
      file: "sound_fx_smooth/07_smooth_glide_transition.wav",
      volume: 0.18,
      duration: 22,
      description: "Step 3 Navigation Transition",
    },
    {
      frame: 420,
      file: "sound_fx_smooth/04_smooth_glass_blip.wav",
      volume: 0.22,
      duration: 18,
      description: "Project Configuration Tab Click",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 6: ENTER GENERAL (F450 - F525)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 452,
      file: "sound_fx_smooth/06_smooth_soft_notice.wav",
      volume: 0.2,
      duration: 20,
      description: "Step 4 General Menu Active",
    },
    {
      frame: 495,
      file: "sound_fx_smooth/smooth_click.wav",
      volume: 0.25,
      duration: 15,
      description: "General Sidebar Item Click",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 7: FIND BADGE (F525 - F605)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 528,
      file: "sound_fx_smooth/01_smooth_ambient_swell.wav",
      volume: 0.16,
      duration: 28,
      description: "Step 5 Section Scroll Ambient",
    },
    {
      frame: 565,
      file: "sound_fx/04_radar_ping_blip.wav",
      volume: 0.22,
      duration: 20,
      description: "Badge Section Highlighted",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 8: UNCHECK SHOW BADGE (F605 - F670)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 608,
      file: "sound_fx_smooth/03_smooth_micro_tick.wav",
      volume: 0.26,
      duration: 15,
      description: "Checkbox Focus Tick",
    },
    {
      frame: 630,
      file: "sound_fx_smooth/smooth_pop.wav",
      volume: 0.28,
      duration: 18,
      description: "Uncheck Badge Pop",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 9: SAVE SETTING (F670 - F700)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 672,
      file: "sound_fx/12_station_lock_latch.wav",
      volume: 0.24,
      duration: 20,
      description: "Save Changes Button Click",
    },
    {
      frame: 685,
      file: "sound_fx_smooth/smooth_chime.wav",
      volume: 0.26,
      duration: 24,
      description: "Saved Success Toast Pop",
    },

    // ═════════════════════════════════════════════════════════════════
    // 🎬 SCENE 10: CLEAN OUTRO (F700 - F750)
    // ═════════════════════════════════════════════════════════════════
    {
      frame: 702,
      file: "sound_fx/14_grand_finale_chime.wav",
      volume: 0.3,
      duration: 40,
      description: "Grand Finale Sparkle Chime",
    },
  ];

  return (
    <>
      {cues.map((cue, index) => (
        <Sequence
          key={`sfx-${cue.frame}-${index}`}
          from={cue.frame}
          durationInFrames={cue.duration ?? 30}
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

