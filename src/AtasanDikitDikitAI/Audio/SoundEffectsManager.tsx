import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

export interface SfxCue {
  id: string;
  file: string;
  frame: number;
  durationInFrames: number;
  volume: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// 🔊 SOUND EFFECTS CUE SHEET (Synchronized with All 6 Scenes & Transitions)
// Total 1300 frames @ 30fps
// ─────────────────────────────────────────────────────────────────────────────
export const SFX_CUES: SfxCue[] = [
  // ─── SCENE 1: HOOK & PROMPT CONSOLE (Frames 0 - 220) ──────────────────────
  { id: "s1-sub-boom", file: "sound_fx/01_cinematic_sub_boom.wav", frame: 0, durationInFrames: 54, volume: 0.65 },
  { id: "s1-whoosh-title", file: "sound_fx/02_clean_fast_whoosh.wav", frame: 8, durationInFrames: 17, volume: 0.5 },
  { id: "s1-whoosh-survey", file: "sound_fx/02_clean_fast_whoosh.wav", frame: 50, durationInFrames: 17, volume: 0.45 },
  { id: "s1-boss-bass-drop", file: "sound_fx/11_tension_bass_drop.wav", frame: 110, durationInFrames: 66, volume: 0.55 },
  { id: "s1-type-click-1", file: "sound_fx/03_digital_counter_click.wav", frame: 125, durationInFrames: 5, volume: 0.4 },
  { id: "s1-type-click-2", file: "sound_fx/03_digital_counter_click.wav", frame: 135, durationInFrames: 5, volume: 0.4 },
  { id: "s1-type-click-3", file: "sound_fx/03_digital_counter_click.wav", frame: 145, durationInFrames: 5, volume: 0.4 },
  { id: "s1-prompt-send-pop", file: "sound_fx/10_funny_pop_ding.wav", frame: 156, durationInFrames: 20, volume: 0.6 },
  { id: "s1-ai-stream-blip", file: "sound_fx/04_radar_ping_blip.wav", frame: 172, durationInFrames: 22, volume: 0.45 },
  { id: "s1-stamp-1", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 188, durationInFrames: 14, volume: 0.5 },
  { id: "s1-stamp-2", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 198, durationInFrames: 14, volume: 0.5 },
  { id: "s1-stamp-3", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 208, durationInFrames: 14, volume: 0.55 },

  // ─── TRANSITION 1: LASER SHUTTER WIPE (Frame 212) ─────────────────────────
  { id: "tr1-laser-slash", file: "sound_fx/08_laser_beam_slash.wav", frame: 212, durationInFrames: 15, volume: 0.7 },

  // ─── SCENE 2: PLAN -> IDE -> KEPUTUSAN BESAR (Frames 220 - 425) ───────────
  { id: "s2-plan-latch", file: "sound_fx/12_station_lock_latch.wav", frame: 220, durationInFrames: 10, volume: 0.5 },
  { id: "s2-slide-1", file: "sound_fx/06_heavy_pan_whoosh.wav", frame: 265, durationInFrames: 25, volume: 0.6 },
  { id: "s2-idea-pop", file: "sound_fx/10_funny_pop_ding.wav", frame: 283, durationInFrames: 20, volume: 0.55 },
  { id: "s2-slide-2", file: "sound_fx/06_heavy_pan_whoosh.wav", frame: 318, durationInFrames: 25, volume: 0.6 },
  { id: "s2-lead-riser", file: "sound_fx/05_tape_rewind_riser.wav", frame: 330, durationInFrames: 33, volume: 0.5 },
  { id: "s2-climax-boom", file: "sound_fx/01_cinematic_sub_boom.wav", frame: 344, durationInFrames: 54, volume: 0.75 },
  { id: "s2-badge-snap-1", file: "sound_fx/07_focus_snap_shutter.wav", frame: 372, durationInFrames: 8, volume: 0.45 },
  { id: "s2-badge-snap-2", file: "sound_fx/07_focus_snap_shutter.wav", frame: 384, durationInFrames: 8, volume: 0.45 },
  { id: "s2-badge-snap-3", file: "sound_fx/07_focus_snap_shutter.wav", frame: 396, durationInFrames: 8, volume: 0.45 },

  // ─── TRANSITION 2: RADIAL IRIS PORTAL WIPE (Frame 420) ────────────────────
  { id: "tr2-portal-open", file: "sound_fx/08_laser_beam_slash.wav", frame: 420, durationInFrames: 15, volume: 0.6 },
  { id: "tr2-portal-ping", file: "sound_fx/04_radar_ping_blip.wav", frame: 424, durationInFrames: 22, volume: 0.5 },

  // ─── SCENE 3: PERSPEKTIF & FILTER INFORMASI (Frames 425 - 640) ────────────
  { id: "s3-perspective-whoosh", file: "sound_fx/02_clean_fast_whoosh.wav", frame: 425, durationInFrames: 17, volume: 0.5 },
  { id: "s3-copilot-ding", file: "sound_fx/10_funny_pop_ding.wav", frame: 475, durationInFrames: 20, volume: 0.5 },
  { id: "s3-sieve-radar", file: "sound_fx/04_radar_ping_blip.wav", frame: 530, durationInFrames: 22, volume: 0.55 },
  { id: "s3-filter-spark", file: "sound_fx/13_circuit_electric_spark.wav", frame: 542, durationInFrames: 14, volume: 0.55 },
  { id: "s3-badge-snap-1", file: "sound_fx/07_focus_snap_shutter.wav", frame: 560, durationInFrames: 8, volume: 0.4 },
  { id: "s3-badge-snap-2", file: "sound_fx/07_focus_snap_shutter.wav", frame: 572, durationInFrames: 8, volume: 0.4 },
  { id: "s3-badge-snap-3", file: "sound_fx/07_focus_snap_shutter.wav", frame: 584, durationInFrames: 8, volume: 0.45 },

  // ─── TRANSITION 3: HAZARD SPLIT SHUTTER WIPE (Frame 635) ──────────────────
  { id: "tr3-split-shutter", file: "sound_fx/08_laser_beam_slash.wav", frame: 635, durationInFrames: 15, volume: 0.65 },
  { id: "tr3-hazard-bass", file: "sound_fx/11_tension_bass_drop.wav", frame: 638, durationInFrames: 66, volume: 0.5 },

  // ─── SCENE 4: REALITAS ATASAN NON-TECH & INTRUSI (Frames 640 - 810) ───────
  { id: "s4-nontech-glitch", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 642, durationInFrames: 14, volume: 0.55 },
  { id: "s4-intrusion-alert", file: "sound_fx/11_tension_bass_drop.wav", frame: 718, durationInFrames: 66, volume: 0.65 },
  { id: "s4-reaction-1", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 742, durationInFrames: 14, volume: 0.45 },
  { id: "s4-reaction-2", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 754, durationInFrames: 14, volume: 0.45 },
  { id: "s4-reaction-3", file: "sound_fx/09_stamp_impact_glitch.wav", frame: 766, durationInFrames: 14, volume: 0.5 },

  // ─── TRANSITION 4: QUANTUM DIAGONAL BEAM WIPE (Frame 805) ─────────────────
  { id: "tr4-diagonal-beam", file: "sound_fx/08_laser_beam_slash.wav", frame: 805, durationInFrames: 15, volume: 0.65 },
  { id: "tr4-spark", file: "sound_fx/13_circuit_electric_spark.wav", frame: 810, durationInFrames: 14, volume: 0.5 },

  // ─── SCENE 5: 3 PILAR PERTANYAAN KRUSIAL (Frames 810 - 1145) ──────────────
  { id: "s5-context-latch", file: "sound_fx/12_station_lock_latch.wav", frame: 812, durationInFrames: 10, volume: 0.5 },
  { id: "s5-slide-1", file: "sound_fx/06_heavy_pan_whoosh.wav", frame: 915, durationInFrames: 25, volume: 0.6 },
  { id: "s5-system-spark", file: "sound_fx/13_circuit_electric_spark.wav", frame: 935, durationInFrames: 14, volume: 0.55 },
  { id: "s5-slide-2", file: "sound_fx/06_heavy_pan_whoosh.wav", frame: 1025, durationInFrames: 25, volume: 0.6 },
  { id: "s5-team-boom", file: "sound_fx/01_cinematic_sub_boom.wav", frame: 1045, durationInFrames: 54, volume: 0.7 },
  { id: "s5-burnout-snap-1", file: "sound_fx/07_focus_snap_shutter.wav", frame: 1072, durationInFrames: 8, volume: 0.4 },
  { id: "s5-burnout-snap-2", file: "sound_fx/07_focus_snap_shutter.wav", frame: 1084, durationInFrames: 8, volume: 0.4 },
  { id: "s5-burnout-snap-3", file: "sound_fx/07_focus_snap_shutter.wav", frame: 1096, durationInFrames: 8, volume: 0.45 },

  // ─── TRANSITION 5: SOLAR FLARE ECLIPSE WIPE (Frame 1140) ──────────────────
  { id: "tr5-solar-riser", file: "sound_fx/05_tape_rewind_riser.wav", frame: 1138, durationInFrames: 33, volume: 0.55 },
  { id: "tr5-eclipse-slash", file: "sound_fx/08_laser_beam_slash.wav", frame: 1144, durationInFrames: 15, volume: 0.65 },

  // ─── SCENE 6: FINAL CONCLUSION & PUNCHLINE (Frames 1145 - 1300) ───────────
  { id: "s6-premise-whoosh", file: "sound_fx/02_clean_fast_whoosh.wav", frame: 1148, durationInFrames: 17, volume: 0.5 },
  { id: "s6-punchline-bass", file: "sound_fx/11_tension_bass_drop.wav", frame: 1224, durationInFrames: 66, volume: 0.7 },
  { id: "s6-punchline-boom", file: "sound_fx/01_cinematic_sub_boom.wav", frame: 1228, durationInFrames: 54, volume: 0.75 },
  { id: "s6-finale-chime", file: "sound_fx/14_grand_finale_chime.wav", frame: 1258, durationInFrames: 42, volume: 0.75 },
];

interface SoundEffectsManagerProps {
  masterVolume?: number;
  enableSfx?: boolean;
}

export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  masterVolume = 1.0,
  enableSfx = true,
}) => {
  if (!enableSfx) {
    return null;
  }

  return (
    <>
      {SFX_CUES.map((cue) => (
        <Sequence
          key={cue.id}
          from={cue.frame}
          durationInFrames={cue.durationInFrames}
          layout="none"
        >
          <Audio
            src={staticFile(cue.file)}
            volume={cue.volume * masterVolume}
          />
        </Sequence>
      ))}
    </>
  );
};

