import { interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();

  // Natural organic breathing
  const breathX = Math.sin((frame * Math.PI) / 85) * 1.5;
  const breathY = Math.cos((frame * Math.PI) / 95) * 1.5;

  let zoom = 1.0;
  let x = 0;
  let y = 0;
  let rotation = 0;

  // Scene 1: Typewriter Hook Question (F0 - F88)
  // Perfectly centered on the card, slow cinematic push-in
  if (frame < 88) {
    zoom = interpolate(frame, [0, 70, 88], [1.0, 1.03, 1.035], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = 0;
    y = 0;
    rotation = 0;
  }
  // Scene 2: Refutation "Kurang Tepat" (F88 - F188)
  else if (frame >= 88 && frame < 188) {
    x = 0;
    y = 0;
    // Entrance settle at 1.02, punch at F143 ("kurang tepat.") up to 1.07 with impact shake
    if (frame < 143) {
      zoom = interpolate(frame, [88, 105], [1.035, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      rotation = 0;
    } else {
      const punch = interpolate(frame, [143, 149, 175], [1.02, 1.07, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = punch;
      const shakeDecay = interpolate(frame, [143, 165], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 143) * 2.2) * 3.5 * shakeDecay;
      rotation = Math.sin((frame - 143) * 1.5) * 0.5 * shakeDecay;
    }
  }
  // Scene 3: Dissociation "Bukanlah Tempat Menyimpan Data" (F188 - F252)
  else if (frame >= 188 && frame < 252) {
    x = 0;
    y = 0;
    rotation = 0;
    zoom = interpolate(frame, [188, 206, 252], [1.02, 1.035, 1.025], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  // Scene 4: Core Definition "Diorganisasi dan Dikelola" (F252 - F368)
  else if (frame >= 252 && frame < 368) {
    x = 0;
    y = 0;
    rotation = 0;
    // Forward cinematic push on "diorganisasi" (F296) and "dikelola" (F330)
    zoom = interpolate(frame, [252, 296, 330, 368], [1.02, 1.05, 1.055, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  // Scene 5: Physical Storage Definition "Kita Sebut Storage" (F368 - F480)
  else if (frame >= 368 && frame < 480) {
    x = 0;
    y = 0;
    if (frame < 444) {
      zoom = interpolate(frame, [368, 395], [1.025, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      rotation = 0;
    } else {
      // Dynamic camera punch at F444 on "storage."
      const punch = interpolate(frame, [444, 450, 480], [1.02, 1.065, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = punch;
      const shakeDecay = interpolate(frame, [444, 462], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 444) * 2.5) * 3.0 * shakeDecay;
      rotation = Math.sin((frame - 444) * 1.8) * 0.4 * shakeDecay;
    }
  }
  // Scene 6: Wardrobe Analogy (F480 - F775)
  // Progressive exploration: Lemari Pakaian -> Storage -> Rak-rak di dalamnya -> Database
  else if (frame >= 480 && frame < 775) {
    x = 0;
    y = 0;
    rotation = 0;
    if (frame < 584) {
      zoom = interpolate(frame, [480, 520], [1.02, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame >= 584 && frame < 620) {
      zoom = interpolate(frame, [584, 592, 620], [1.03, 1.05, 1.035], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame >= 620 && frame < 725) {
      zoom = interpolate(frame, [620, 660, 720], [1.035, 1.06, 1.065], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else {
      const punch = interpolate(frame, [725, 732, 775], [1.065, 1.09, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = punch;
      const shakeDecay = interpolate(frame, [725, 745], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 725) * 2.2) * 3.2 * shakeDecay;
      rotation = Math.sin((frame - 725) * 1.5) * 0.45 * shakeDecay;
    }
  }
  // Scene 7: Organization Methods "Dilipat, Digantung, Dikelompokkan" (F775 - F1005)
  else if (frame >= 775 && frame < 1005) {
    x = 0;
    y = 0;
    rotation = 0;
    if (frame < 850) {
      zoom = interpolate(frame, [775, 810], [1.03, 1.025], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else {
      zoom = interpolate(
        frame,
        [850, 861, 900, 935, 1005],
        [1.025, 1.035, 1.045, 1.065, 1.03],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }
      );
    }
  }
  // Scene 8: Analogy Bridge "Struktur dan Cara Data Diorganisasi" (F1005 - F1150)
  else if (frame >= 1005 && frame < 1150) {
    x = 0;
    y = 0;
    rotation = 0;
    zoom = interpolate(frame, [1005, 1065, 1150], [1.025, 1.045, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  // Scene 9: Grand Finale "Triad of Database Value" (F1150 - F1440)
  else if (frame >= 1150) {
    x = 0;
    y = 0;
    rotation = 0;
    if (frame < 1245) {
      zoom = interpolate(frame, [1150, 1168, 1245], [1.03, 1.05, 1.035], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame >= 1245 && frame < 1389) {
      zoom = interpolate(
        frame,
        [1245, 1305, 1315, 1365, 1389],
        [1.035, 1.045, 1.055, 1.065, 1.07],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }
      );
    } else if (frame >= 1389 && frame < 1418) {
      const punch = interpolate(frame, [1389, 1397, 1418], [1.07, 1.095, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      zoom = punch;
      const shakeDecay = interpolate(frame, [1389, 1414], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      y = Math.sin((frame - 1389) * 2.2) * 3.5 * shakeDecay;
      rotation = Math.sin((frame - 1389) * 1.5) * 0.45 * shakeDecay;
    } else {
      zoom = interpolate(frame, [1418, 1440], [1.04, 1.0], {
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

