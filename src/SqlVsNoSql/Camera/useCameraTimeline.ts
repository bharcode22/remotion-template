import { interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();

  let x = 0;
  let y = 0;
  let zoom = 1.0;
  let rotation = 0;

  // 1. Organic Continuous Handheld / Space Drift (Prevents static frame feel)
  const breathX = Math.sin(frame * 0.038) * 3;
  const breathY = Math.cos(frame * 0.032) * 2.5;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1: TYPEWRITER HOOK (F0 - F128)
  // "Jika ada senior kamu menyimpan data log aplikasi di SQL,"
  // Table popup enters at Frame 83!
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame < 128) {
    // Zoom konstan 1.0 agar ukuran teks typewriter tidak berubah saat tabel popup muncul
    zoom = 1.0;
    y = 0;
    x = 0;

    // F83 - F105: HANYA micro-shake impact tanpa mengubah zoom
    if (frame >= 83 && frame < 105) {
      const shakeDecay = interpolate(frame, [83, 105], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 83) * 2.2) * 4 * shakeDecay;
      x = Math.cos((frame - 83) * 1.8) * 3 * shakeDecay;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔄 TRANSITION 1 -> 2: SWOOP INTO SCENE 2 (F125 - F135)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 125 && frame < 135) {
    zoom = interpolate(frame, [125, 130, 135], [1.01, 0.95, 1.02], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    y = interpolate(frame, [125, 130, 135], [0, 40, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    rotation = interpolate(frame, [125, 130, 135], [0, -1.2, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2: KATA PER KATA (F128 - F294) - Steady, Crisp, Focused
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 128 && frame < 294) {
    zoom = 1.0;
    x = 0;
    y = 0;
    rotation = 0;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3: NASKAH L4, L5 & L7 (F294 - F550)
  // Line 7 masuk di 525 per arahan user
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 294 && frame < 550) {
    x = 0;

    // F294 - F365: Focus on Card 1 SQL
    if (frame >= 294 && frame < 365) {
      zoom = interpolate(frame, [294, 310], [0.98, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = interpolate(frame, [294, 310], [15, -10], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      rotation = 0;
    }
    // F365 - F488: Settle camera centered framing both SQL & NoSQL cards
    else if (frame >= 365 && frame < 488) {
      zoom = interpolate(frame, [365, 385], [1.02, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = interpolate(frame, [365, 385], [-10, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      rotation = 0;
    }
    // F488 - F525: Subtle curious pop on "Gitu doang?" (L7)
    else if (frame >= 488 && frame < 525) {
      zoom = interpolate(frame, [488, 498], [1.0, 1.025], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = -4;
      rotation = 0;
    }
    // F525 - F550: Dynamic punch on "Tentu tidak." (L8) at F525
    else {
      const punch = interpolate(frame, [525, 532, 549], [1.025, 1.07, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = punch;
      const shakeDecay = interpolate(frame, [525, 545], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 525) * 2.2) * 4 * shakeDecay;
      rotation = Math.sin((frame - 525) * 1.5) * 0.6 * shakeDecay;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔄 TRANSITION 3 -> 4: SMOOTH PASS INTO SCENE 4A (F550 - F556)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 550 && frame < 556) {
    zoom = interpolate(frame, [550, 556], [1.02, 1.02], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = 0;
    y = 0;
    rotation = 0;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4: DEEP DIVE SQL - DATA KARYAWAN (F556 - F985)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 556 && frame < 985) {
    zoom = 1.02;
    y = -6;

    // Column 1: nama (string) - F822 to F873
    if (frame >= 822 && frame < 873) {
      x = interpolate(frame, [822, 836, 873], [0, -42, -35], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = 1.05;
    }
    // Column 2: nomor_hp (integer) - F873 to F933
    else if (frame >= 873 && frame < 933) {
      x = interpolate(frame, [873, 888, 933], [-35, 0, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = 1.05;
    }
    // Column 3: berat_badan (float) - F933 to F985
    else if (frame >= 933) {
      x = interpolate(frame, [933, 946, 985], [0, 42, 35], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = 1.05;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔄 TRANSITION 4 -> 5: HORIZONTAL WHIP-TRACK TO NoSQL (F985 - F1025)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 985 && frame < 1025) {
    zoom = interpolate(frame, [985, 1005, 1025], [1.04, 0.92, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = interpolate(frame, [985, 1005, 1025], [35, 95, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    rotation = interpolate(frame, [985, 1005, 1025], [0, 1.8, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 5: DEEP DIVE NoSQL - LOG APLIKASI (F1025 - F1705)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 1025 && frame < 1705) {
    zoom = 1.02;

    // Glide Left to Document 1 (Log Login) at F1324 - F1425
    if (frame >= 1324 && frame < 1425) {
      x = interpolate(frame, [1324, 1342, 1425], [0, -56, -48], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = 10;
      zoom = 1.08;
    }
    // Glide Right to Document 3 (Log Error) at F1425 - F1545
    else if (frame >= 1425 && frame < 1545) {
      x = interpolate(frame, [1425, 1445, 1545], [-48, 56, 48], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = 10;
      zoom = 1.08;
    }
    // Settle Back Center for Flexible Conclusion (F1545 - F1705)
    else if (frame >= 1545) {
      x = interpolate(frame, [1545, 1565], [48, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = 1.03;
      y = 4;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔄 TRANSITION 5 -> 6A: SMOOTH CENTERING (F1705 - F1735)
  // ═══════════════════════════════════════════════════════════════════════════
  else if (frame >= 1705 && frame < 1735) {
    zoom = interpolate(frame, [1705, 1720, 1735], [1.03, 1.01, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    y = interpolate(frame, [1705, 1720, 1735], [4, 0, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = interpolate(frame, [1705, 1720], [0, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    rotation = interpolate(frame, [1705, 1720, 1735], [0, -0.6, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6: SEPARATED FINALE PRESENTATION (F1735 - F1940)
  // ═══════════════════════════════════════════════════════════════════════════
  else {
    // Line 23: "Jadi, gunakan SQL ketika data kamu terstruktur" (F1735 - F1820)
    if (frame < 1820) {
      x = 0;
      y = 0;
      zoom = interpolate(frame, [1735, 1815], [1.03, 1.06], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // Line 25: "dan gunakan NOSQL ketika data kamu fleksibel." (F1820 - F1940)
    else {
      x = 0;
      y = 0;
      zoom = interpolate(frame, [1820, 1845, 1918], [1.03, 1.06, 1.08], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
  }

  return {
    x: x + breathX,
    y: y + breathY,
    zoom,
    rotation,
  };
};
``