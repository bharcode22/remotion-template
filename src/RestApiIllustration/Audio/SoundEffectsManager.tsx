import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

interface SoundEffectsManagerProps {
  volume?: number;
}

interface SfxCue {
  frame: number;
  file: string;
  volume: number;
  description?: string;
}

/**
 * SoundEffectsManager (Menggunakan aset studio dari sound_fx/)
 * Dikalibrasi khusus dengan volume lembut & seimbang (0.15 - 0.32)
 * sehingga sangat nyaman dan tidak menusuk telinga:
 * - 03_digital_counter_click : Tik pengetikan ASMR yang renyah & lembut
 * - 04_radar_ping_blip       : Sinyal radar ping digital yang jernih & elegan
 * - 07_focus_snap_shutter    : Jepretan fokus UI yang presisi
 * - 10_funny_pop_ding        : Letupan pop ceria & lembut untuk tombol & kartu
 * - 02_clean_fast_whoosh     : Hembusan udara lembut untuk laju paket conduit
 * - 05_tape_rewind_riser     : Riser lembut untuk transisi antar metode HTTP
 * - 12_station_lock_latch    : Kait mekanik halus untuk penguncian data DB
 * - 14_grand_finale_chime    : Denting melodi 3-nada yang hangat & indah
 * - 01_cinematic_sub_boom    : Dengungan bass hangat (volume lembut 0.20)
 */
export const SoundEffectsManager: React.FC<SoundEffectsManagerProps> = ({
  volume = 1.0,
}) => {
  const cues: SfxCue[] = [
    // ═════════════════════════════════════════════════════════════════════
    // 🎬 ACT 1: GET METHOD (Frames 0 - 280) - Soft Ambient & Read Flow
    // ═════════════════════════════════════════════════════════════════════
    // F15: Sistem online / radar ping
    { frame: 15, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.22, description: "UI Ready Ping" },

    // F25: FETCH() button click & shockwave
    { frame: 25, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, description: "FETCH() Click" },
    { frame: 32, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Shockwave Whoosh" },

    // F38: Request packet gliding down to Backend
    { frame: 38, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.18, description: "Request In-Flight" },

    // F50: Backend receives request, runs app.get
    { frame: 50, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, description: "Backend Snap" },

    // F75: SQL Query gliding down to Database
    { frame: 75, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.18, description: "Query Conduit" },

    // F95 - F115: Database reads 3 user rows (crisp ASMR digital counter clicks)
    { frame: 95, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, description: "DB Row 1 Read" },
    { frame: 105, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, description: "DB Row 2 Read" },
    { frame: 115, file: "sound_fx/03_digital_counter_click.wav", volume: 0.18, description: "DB Row 3 Read" },

    // F125: Database returns 3 rows up to Backend
    { frame: 125, file: "sound_fx/12_station_lock_latch.wav", volume: 0.20, description: "DB Return Latch" },

    // F155: Backend serializes JSON
    { frame: 155, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "JSON Pack Blip" },

    // F175: 200 OK Response packet glides up to Frontend
    { frame: 175, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Response Glide" },

    // F208 - F225: Frontend hydrates 3 user cards (gentle pop + warm melodic chime)
    { frame: 208, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, description: "Card 1 Pop" },
    { frame: 218, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.28, description: "200 OK Success Chime" },

    // ═════════════════════════════════════════════════════════════════════
    // 🔄 TRANSITION TO POST (Frames 260 - 285)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 265, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.18, description: "POST Transition Riser" },
    { frame: 278, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "POST Mode Ready" },

    // ═════════════════════════════════════════════════════════════════════
    // 🚀 ACT 2: POST METHOD (Frames 280 - 550) - ASMR Typing & Clean Insert
    // ═════════════════════════════════════════════════════════════════════
    // F286: Focus input field 1 (Nama)
    { frame: 286, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Field Nama Focus" },

    // F294 - F312: Subtle typing "Dewi Sartika" (crisp ASMR micro ticks)
    { frame: 294, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing D" },
    { frame: 300, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing E" },
    { frame: 306, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing W" },
    { frame: 312, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing I" },
    // F314: Field 1 completed & validated
    { frame: 314, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "Field Nama Valid" },

    // F318: Focus input field 2 (Role)
    { frame: 318, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Field Role Focus" },

    // F326 - F344: Subtle typing "Product Manager"
    { frame: 326, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing P" },
    { frame: 332, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing R" },
    { frame: 338, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing O" },
    { frame: 344, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing D" },
    // F348: Field 2 completed & payload ready
    { frame: 348, file: "sound_fx/12_station_lock_latch.wav", volume: 0.20, description: "Payload Ready Latch" },

    // F360: KIRIM DATA button click & shockwave
    { frame: 360, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, description: "KIRIM DATA Click" },
    { frame: 363, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Button Shockwave" },

    // F370: POST payload packet glides down to Backend
    { frame: 370, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Payload In-Flight" },

    // F395: Backend receives payload
    { frame: 395, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, description: "app.post Execution" },

    // F415: SQL INSERT query packet glides down to Database
    { frame: 415, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.18, description: "INSERT Conduit" },

    // F445: Row 4 Dewi Sartika springs into Database (warm subtle sub tone + clean latch)
    { frame: 445, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.20, description: "Warm Sub Presence" },
    { frame: 445, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, description: "Row 4 Insert Latch" },

    // F460: Database returns confirmation up to Backend
    { frame: 460, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "DB Confirmation Return" },

    // F480: Backend prepares 201 response
    { frame: 480, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "201 Serialize Snap" },

    // F490: 201 CREATED response packet glides up to Frontend
    { frame: 490, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "201 Glide" },

    // F528: Frontend reveals 201 Created user card
    { frame: 528, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, description: "Card Reveal Pop" },
    { frame: 530, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.30, description: "201 Created Harmonic Chime" },

    // ═════════════════════════════════════════════════════════════════════
    // 🔄 TRANSITION TO PUT (Frames 550 - 575)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 555, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.18, description: "PUT Transition Riser" },
    { frame: 568, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "PUT Mode Ready" },

    // ═════════════════════════════════════════════════════════════════════
    // 🟠 ACT 3: PUT METHOD (Frames 550 - 840) - ASMR Role Update
    // ═════════════════════════════════════════════════════════════════════
    // F575: Selecting User #2
    { frame: 575, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Select User #2" },

    // F598: Focus input field (Role update)
    { frame: 598, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Role Field Focus" },

    // F606 - F630: Subtle typing "Lead UI/UX Designer"
    { frame: 606, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing L" },
    { frame: 612, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing E" },
    { frame: 618, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing A" },
    { frame: 624, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing D" },
    { frame: 630, file: "sound_fx/03_digital_counter_click.wav", volume: 0.15, description: "Typing U" },
    // F638: Update payload ready
    { frame: 638, file: "sound_fx/12_station_lock_latch.wav", volume: 0.20, description: "Update Payload Ready" },

    // F650: UPDATE DATA button click & shockwave
    { frame: 650, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, description: "UPDATE DATA Click" },
    { frame: 653, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Update Shockwave" },

    // F660: PUT payload packet glides down to Backend
    { frame: 660, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "PUT Payload Glide" },

    // F695: Backend receives update payload
    { frame: 695, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, description: "app.put Execution" },

    // F715: SQL UPDATE query packet glides down to Database
    { frame: 715, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.18, description: "UPDATE Conduit" },

    // F740: Row 2 updates to Lead UI/UX Designer (warm low tone + clean latch)
    { frame: 740, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.20, description: "Warm Update Sub Tone" },
    { frame: 740, file: "sound_fx/12_station_lock_latch.wav", volume: 0.22, description: "Row 2 Updated Latch" },

    // F755: Database returns confirmation up to Backend
    { frame: 755, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "DB Update Return" },

    // F775: Backend sends 200 OK response
    { frame: 775, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Backend 200 Snap" },

    // F785: 200 OK response packet glides up to Frontend
    { frame: 785, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "200 Response Glide" },

    // F815: Frontend reveals updated User #2 card
    { frame: 815, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, description: "Updated Card Pop" },
    { frame: 818, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.30, description: "200 Updated Chime" },

    // ═════════════════════════════════════════════════════════════════════
    // 🔄 TRANSITION TO DELETE (Frames 840 - 865)
    // ═════════════════════════════════════════════════════════════════════
    { frame: 845, file: "sound_fx/05_tape_rewind_riser.wav", volume: 0.18, description: "DELETE Transition Riser" },
    { frame: 858, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "DELETE Mode Ready" },

    // ═════════════════════════════════════════════════════════════════════
    // 🔴 ACT 4: DELETE METHOD (Frames 840 - 1200) - Clean Soft Deletion Flow
    // ═════════════════════════════════════════════════════════════════════
    // F865: User ID #4 target highlighted
    { frame: 865, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Target ID #4 Snap" },

    // F940: HAPUS DATA button click & shockwave
    { frame: 940, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.26, description: "HAPUS DATA Click" },
    { frame: 943, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Delete Shockwave" },

    // F950: DELETE request packet glides down to Backend
    { frame: 950, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Delete Request Glide" },

    // F985: Backend receives delete request
    { frame: 985, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, description: "app.delete Execution" },

    // F1005: SQL DELETE query packet glides down to Database
    { frame: 1005, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.18, description: "DELETE Conduit" },

    // F1030: Row 4 deleted / strikethrough (gentle snap + warm subtle tone)
    { frame: 1030, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.20, description: "Row 4 Strikethrough Snap" },
    { frame: 1030, file: "sound_fx/01_cinematic_sub_boom.wav", volume: 0.20, description: "Warm Delete Sub Tone" },

    // F1050: Database returns confirmation up to Backend
    { frame: 1050, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.20, description: "Delete Return Blip" },

    // F1075: Backend sends 200 OK response
    { frame: 1075, file: "sound_fx/07_focus_snap_shutter.wav", volume: 0.18, description: "Delete 200 Snap" },

    // F1085: 200 OK response packet glides up to Frontend
    { frame: 1085, file: "sound_fx/02_clean_fast_whoosh.wav", volume: 0.20, description: "Delete 200 Glide" },

    // F1115: Frontend reveals deletion success card
    { frame: 1115, file: "sound_fx/10_funny_pop_ding.wav", volume: 0.24, description: "Success Card Pop" },
    { frame: 1118, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.30, description: "200 Deleted Chime" },

    // F1170: Grand Finale completion chime (warm harmonic finish)
    { frame: 1170, file: "sound_fx/14_grand_finale_chime.wav", volume: 0.32, description: "Grand Finale Chime" },
    { frame: 1170, file: "sound_fx/04_radar_ping_blip.wav", volume: 0.22, description: "Grand Finale Radar Ping" },
  ];

  return (
    <>
      {cues.map((cue, idx) => (
        <Sequence
          key={`sfx-${idx}-${cue.frame}-${cue.file}`}
          from={cue.frame}
          durationInFrames={Math.min(90, Math.max(15, 1200 - cue.frame))}
        >
          <Audio
            src={staticFile(cue.file)}
            volume={Math.min(1.0, cue.volume * volume)}
          />
        </Sequence>
      ))}
    </>
  );
};
