import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { SampahDigitalBackground } from "./Background/SampahDigitalBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import {
  Scene1,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Scene7,
  Scene8,
  Scene9,
} from "./Scenes";
import { SAMPAH_DIGITAL_COLORS } from "./constants";
import { SampahDigitalProps } from "./types";

export const SampahDigital: React.FC<SampahDigitalProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 1. CAMERA MOVEMENT TRANSITION 1: Scene 1 -> Scene 2 (Cutover at Frame 144)
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 1 Camera Exit (Frames 138 - 146)
  const scene1Scale = interpolate(frame, [138, 146], [1.0, 1.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene1TranslateY = interpolate(frame, [138, 146], [0, -380], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene1Opacity = interpolate(frame, [142, 145.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene1Blur = interpolate(frame, [140, 145], [0, 10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2 Camera Entrance (Frames 144 - 154)
  const scene2EnterScale = interpolate(frame, [144, 154], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene2EnterTranslateY = interpolate(frame, [144, 154], [380, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene2EnterOpacity = interpolate(frame, [144, 147], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene2EnterBlur = interpolate(frame, [144, 150], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 2. CAMERA MOVEMENT TRANSITION 2: Scene 2 -> Scene 3 (Cutover at Frame 254)
  // Storytelling: From AI Code Generation Studio into Dark Reality "SAMPAH DIGITAL"
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 2 High-Velocity Camera Exit Dive (Frames 246 - 254)
  const scene2ExitScale = interpolate(frame, [246, 254], [1.0, 1.75], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene2ExitTranslateY = interpolate(frame, [246, 254], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene2ExitOpacity = interpolate(frame, [251, 254.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene2ExitBlur = interpolate(frame, [248, 254], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2 Compound Transforms
  const scene2Scale = frame < 190 ? scene2EnterScale : scene2ExitScale;
  const scene2TranslateY = frame < 190 ? scene2EnterTranslateY : scene2ExitTranslateY;
  const scene2Opacity = frame < 190 ? scene2EnterOpacity : scene2ExitOpacity;
  const scene2Blur = frame < 190 ? scene2EnterBlur : scene2ExitBlur;

  // Scene 3 High-Momentum Camera Entrance Sweep (Frames 254 - 265)
  const scene3EnterScale = interpolate(frame, [254, 265], [0.72, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene3EnterTranslateY = interpolate(frame, [254, 265], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene3EnterOpacity = interpolate(frame, [254, 256.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene3EnterBlur = interpolate(frame, [254, 261], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 3. CAMERA MOVEMENT TRANSITION 3: Scene 3 -> Scene 4 (Cutover at Frame 298 - 302)
  // Storytelling: From "SAMPAH DIGITAL" into Sustainable Solution "PERKUAT TUJUAN"
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 3 Camera Exit Dive (Frames 294 - 302)
  const scene3ExitScale = interpolate(frame, [294, 302], [1.0, 1.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene3ExitTranslateY = interpolate(frame, [294, 302], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene3ExitOpacity = interpolate(frame, [297, 301.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene3ExitBlur = interpolate(frame, [296, 302], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3 Compound Transforms
  const scene3Scale = frame < 280 ? scene3EnterScale : scene3ExitScale;
  const scene3TranslateY = frame < 280 ? scene3EnterTranslateY : scene3ExitTranslateY;
  const scene3Opacity = frame < 280 ? scene3EnterOpacity : scene3ExitOpacity;
  const scene3Blur = frame < 280 ? scene3EnterBlur : scene3ExitBlur;

  // Scene 4 Camera Entrance Sweep (Frames 298 - 308)
  const scene4EnterScale = interpolate(frame, [298, 308], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene4EnterTranslateY = interpolate(frame, [298, 308], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene4EnterOpacity = interpolate(frame, [298, 301], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene4EnterBlur = interpolate(frame, [298, 305], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 4. CAMERA MOVEMENT TRANSITION 4: Scene 4 -> Scene 5 (Cutover at Frame 414 - 422)
  // Storytelling: From Strategic Purpose into Root Philosophy (Typewriter Terminal)
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 4 Camera Exit Dive (Frames 414 - 422)
  const scene4ExitScale = interpolate(frame, [414, 422], [1.0, 1.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene4ExitTranslateY = interpolate(frame, [414, 422], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene4ExitOpacity = interpolate(frame, [417, 421.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene4ExitBlur = interpolate(frame, [416, 422], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4 Compound Transforms
  const scene4Scale = frame < 370 ? scene4EnterScale : scene4ExitScale;
  const scene4TranslateY = frame < 370 ? scene4EnterTranslateY : scene4ExitTranslateY;
  const scene4Opacity = frame < 370 ? scene4EnterOpacity : scene4ExitOpacity;
  const scene4Blur = frame < 370 ? scene4EnterBlur : scene4ExitBlur;

  // Scene 5 Camera Entrance Sweep (Frames 418 - 428)
  const scene5EnterScale = interpolate(frame, [418, 428], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene5EnterTranslateY = interpolate(frame, [418, 428], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene5EnterOpacity = interpolate(frame, [418, 421], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene5EnterBlur = interpolate(frame, [418, 425], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 5. CAMERA MOVEMENT TRANSITION 5: Scene 5 -> Scene 6 (Cutover at Frame 576 - 584)
  // Storytelling: From Philosophy into Traditional Business Process Audit
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 5 Camera Exit Dive (Frames 576 - 584)
  const scene5ExitScale = interpolate(frame, [576, 584], [1.0, 1.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene5ExitTranslateY = interpolate(frame, [576, 584], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene5ExitOpacity = interpolate(frame, [579, 583.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene5ExitBlur = interpolate(frame, [578, 584], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 5 Compound Transforms
  const scene5Scale = frame < 530 ? scene5EnterScale : scene5ExitScale;
  const scene5TranslateY = frame < 530 ? scene5EnterTranslateY : scene5ExitTranslateY;
  const scene5Opacity = frame < 530 ? scene5EnterOpacity : scene5ExitOpacity;
  const scene5Blur = frame < 530 ? scene5EnterBlur : scene5ExitBlur;

  // Scene 6 Camera Entrance Sweep (Frames 580 - 590)
  const scene6EnterScale = interpolate(frame, [580, 590], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene6EnterTranslateY = interpolate(frame, [580, 590], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene6EnterOpacity = interpolate(frame, [580, 583], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene6EnterBlur = interpolate(frame, [580, 587], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 6. CAMERA MOVEMENT TRANSITION 6: Scene 6 -> Scene 7 (Cutover at Frame 921)
  // Storytelling: From Business Process Audit to IF-ELSE Decision Branching Gate
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 6 Camera Exit Dive (Frames 916 - 926)
  const scene6ExitScale = interpolate(frame, [916, 926], [1.0, 1.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene6ExitTranslateY = interpolate(frame, [916, 926], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene6ExitOpacity = interpolate(frame, [918, 924], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene6ExitBlur = interpolate(frame, [917, 925], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 6 Compound Transforms
  const scene6Scale = frame < 870 ? scene6EnterScale : scene6ExitScale;
  const scene6TranslateY =
    frame < 870 ? scene6EnterTranslateY : scene6ExitTranslateY;
  const scene6Opacity =
    frame < 870 ? scene6EnterOpacity : scene6ExitOpacity;
  const scene6Blur = frame < 870 ? scene6EnterBlur : scene6ExitBlur;

  // Scene 7 Camera Entrance Sweep (Frames 920 - 930)
  const scene7EnterScale = interpolate(frame, [920, 930], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene7EnterTranslateY = interpolate(frame, [920, 930], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene7EnterOpacity = interpolate(frame, [920, 924], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene7EnterBlur = interpolate(frame, [920, 927], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 7. CAMERA MOVEMENT TRANSITION 7: Scene 7 -> Scene 8 (Cutover at Frame 1105 - 1115)
  // Storytelling: From IF-ELSE Logic into Full-Stack System Architecture Blueprint
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 7 Camera Exit Dive (Frames 1105 - 1115)
  const scene7ExitScale = interpolate(frame, [1105, 1115], [1.0, 1.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene7ExitTranslateY = interpolate(frame, [1105, 1115], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene7ExitOpacity = interpolate(frame, [1107, 1113], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene7ExitBlur = interpolate(frame, [1106, 1114], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 7 Compound Transforms
  const scene7Scale = frame < 1050 ? scene7EnterScale : scene7ExitScale;
  const scene7TranslateY =
    frame < 1050 ? scene7EnterTranslateY : scene7ExitTranslateY;
  const scene7Opacity =
    frame < 1050 ? scene7EnterOpacity : scene7ExitOpacity;
  const scene7Blur = frame < 1050 ? scene7EnterBlur : scene7ExitBlur;

  // Scene 8 Camera Entrance Sweep (Frames 1108 - 1118)
  const scene8EnterScale = interpolate(frame, [1108, 1118], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene8EnterTranslateY = interpolate(frame, [1108, 1118], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene8EnterOpacity = interpolate(frame, [1108, 1112], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene8EnterBlur = interpolate(frame, [1108, 1115], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 8. CAMERA MOVEMENT TRANSITION 8: Scene 8 -> Scene 9 (Cutover at Frame 1478 - 1482)
  // Storytelling: From Line 24 Platform Options (All Illuminated at F1472) to Grand Finale
  // ─────────────────────────────────────────────────────────────────────────────
  // Scene 8 Camera Exit Dive (Frames 1475 - 1482)
  const scene8ExitScale = interpolate(frame, [1475, 1482], [1.0, 1.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene8ExitTranslateY = interpolate(frame, [1475, 1482], [0, -520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const scene8ExitOpacity = interpolate(frame, [1477, 1481.5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene8ExitBlur = interpolate(frame, [1476, 1482], [0, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 8 Compound Transforms
  const scene8Scale = frame < 1400 ? scene8EnterScale : scene8ExitScale;
  const scene8TranslateY =
    frame < 1400 ? scene8EnterTranslateY : scene8ExitTranslateY;
  const scene8Opacity =
    frame < 1400 ? scene8EnterOpacity : scene8ExitOpacity;
  const scene8Blur = frame < 1400 ? scene8EnterBlur : scene8ExitBlur;

  // Scene 9 Camera Entrance Sweep (Frames 1478 - 1488)
  const scene9EnterScale = interpolate(frame, [1478, 1488], [0.75, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene9EnterTranslateY = interpolate(frame, [1478, 1488], [520, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const scene9Opacity = interpolate(frame, [1478, 1482], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene9Blur = interpolate(frame, [1478, 1485], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Camera Impact Recoil Shake (Hits at F254, F299, F419, F582, F922, F1110, F1480)
  let camShakeX = 0;
  let camShakeY = 0;
  if (frame >= 254 && frame < 265) {
    const t = frame - 254;
    const decay = Math.exp(-t * 0.38);
    camShakeX = Math.sin(t * 1.95) * 16 * decay;
    camShakeY = Math.cos(t * 2.4) * 11 * decay;
  } else if (frame >= 299 && frame < 308) {
    const t = frame - 299;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  } else if (frame >= 418 && frame < 426) {
    const t = frame - 418;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  } else if (frame >= 580 && frame < 588) {
    const t = frame - 580;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  } else if (frame >= 920 && frame < 928) {
    const t = frame - 920;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  } else if (frame >= 1108 && frame < 1116) {
    const t = frame - 1108;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  } else if (frame >= 1478 && frame < 1486) {
    const t = frame - 1478;
    const decay = Math.exp(-t * 0.45);
    camShakeX = Math.sin(t * 2.1) * 10 * decay;
    camShakeY = Math.cos(t * 2.6) * 7 * decay;
  }

  // Background Parallax Travel Calculation during Camera Transitions
  let bgCameraTravelY = 0;
  if (frame >= 138 && frame < 146) {
    bgCameraTravelY = interpolate(frame, [138, 146], [0, 380], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 144 && frame <= 154) {
    bgCameraTravelY = interpolate(frame, [144, 154], [380, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 246 && frame < 254) {
    bgCameraTravelY = interpolate(frame, [246, 254], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 254 && frame <= 265) {
    bgCameraTravelY = interpolate(frame, [254, 265], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 294 && frame < 302) {
    bgCameraTravelY = interpolate(frame, [294, 302], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 298 && frame <= 308) {
    bgCameraTravelY = interpolate(frame, [298, 308], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 414 && frame < 422) {
    bgCameraTravelY = interpolate(frame, [414, 422], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 418 && frame <= 428) {
    bgCameraTravelY = interpolate(frame, [418, 428], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 576 && frame < 584) {
    bgCameraTravelY = interpolate(frame, [576, 584], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 580 && frame <= 590) {
    bgCameraTravelY = interpolate(frame, [580, 590], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 916 && frame < 922) {
    bgCameraTravelY = interpolate(frame, [916, 922], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 922 && frame <= 930) {
    bgCameraTravelY = interpolate(frame, [922, 930], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 1104 && frame < 1110) {
    bgCameraTravelY = interpolate(frame, [1104, 1110], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 1110 && frame <= 1118) {
    bgCameraTravelY = interpolate(frame, [1110, 1118], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  } else if (frame >= 1474 && frame < 1480) {
    bgCameraTravelY = interpolate(frame, [1474, 1480], [0, 520], {
      easing: Easing.in(Easing.cubic),
    });
  } else if (frame >= 1480 && frame <= 1488) {
    bgCameraTravelY = interpolate(frame, [1480, 1488], [520, 0], {
      easing: Easing.out(Easing.cubic),
    });
  }

  // Cinematic Optical Flash & Speed Streak Burst at Frame 254 (Hazard Rose)
  const flash1Opacity =
    frame >= 252 && frame <= 258
      ? interpolate(frame, [252, 254, 258], [0, 0.75, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 299 (Emerald Solution)
  const flash2Opacity =
    frame >= 297 && frame <= 303
      ? interpolate(frame, [297, 299, 303], [0, 0.65, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 418 (Cyan Philosophy)
  const flash3Opacity =
    frame >= 416 && frame <= 422
      ? interpolate(frame, [416, 418, 422], [0, 0.65, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 580 (Amber Business Audit)
  const flash4Opacity =
    frame >= 578 && frame <= 585
      ? interpolate(frame, [578, 581, 585], [0, 0.65, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 921 (Decision Branching Gate Burst)
  const flash5Opacity =
    frame >= 919 && frame <= 926
      ? interpolate(frame, [919, 921, 926], [0, 0.65, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 1112 (Architecture Blueprint Cyan Burst)
  const flash6Opacity =
    frame >= 1110 && frame <= 1116
      ? interpolate(frame, [1110, 1112, 1116], [0, 0.65, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Cinematic Optical Flash Burst at Frame 1480 (Grand Finale Value Gold Burst)
  const flash7Opacity =
    frame >= 1478 && frame <= 1484
      ? interpolate(frame, [1478, 1480, 1484], [0, 0.75, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Scene Visibility Flags
  // Scene 1: Lines 1 - 2 (Frames 0 - 146)
  const showScene1 = frame < 146;
  // Scene 2: Line 4 - Gemini Prompt Process (Frames 144 - 255)
  const showScene2 = frame >= 144 && frame < 255;
  // Scene 3: Line 6 - Sampah Digital Warning (Frames 254 - 302)
  const showScene3 = frame >= 254 && frame < 302;
  // Scene 4: Line 7 - Perkuat Tujuan Software (Frames 298 - 422)
  const showScene4 = frame >= 298 && frame < 422;
  // Scene 5: Lines 9 - 10 - Esensi Software (Frames 418 - 584)
  const showScene5 = frame >= 418 && frame < 584;
  // Scene 6: Lines 12 - 15 - Audit Proses Bisnis (Frames 580 - 926)
  const showScene6 = frame >= 580 && frame < 926;
  // Scene 7: Lines 17 - 18 - Percabangan IF-ELSE (Frames 918 - 1115)
  const showScene7 = frame >= 918 && frame < 1115;
  // Scene 8: Line 20 - Blueprint Arsitektur (Frames 1105 - 1482)
  const showScene8 = frame >= 1105 && frame < 1482;
  // Scene 9: Lines 26 - 28 - Grand Finale & Core Purpose (Frames 1478+)
  const showScene9 = frame >= 1478;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: SAMPAH_DIGITAL_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Cyber Neural Ambient Background with Dynamic Camera Parallax */}
      <SampahDigitalBackground cameraY={bgCameraTravelY} />

      {/* 2. Voiceover Audio (sampah-digital.wav: 56.96s / 1709 frames) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("sampah-digital.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Audio Sound Effects */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Master Camera Movement Stage with Recoil Shake */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate3d(${camShakeX}px, ${camShakeY}px, 0px)`,
          willChange: "transform",
        }}
      >
        {/* Scene 1 View: Lines 1 - 2 (Frames 0 - 146) */}
        {showScene1 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene1TranslateY}px) scale(${scene1Scale})`,
              opacity: scene1Opacity,
              filter: scene1Blur > 0.1 ? `blur(${scene1Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene1 />
          </AbsoluteFill>
        )}

        {/* Scene 2 View: Line 4 - Gemini Prompting (Frames 144 - 255) */}
        {showScene2 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene2TranslateY}px) scale(${scene2Scale})`,
              opacity: scene2Opacity,
              filter: scene2Blur > 0.1 ? `blur(${scene2Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene2 />
          </AbsoluteFill>
        )}

        {/* Scene 3 View: Line 6 - Sampah Digital Warning (Frames 254 - 302) */}
        {showScene3 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene3TranslateY}px) scale(${scene3Scale})`,
              opacity: scene3Opacity,
              filter: scene3Blur > 0.1 ? `blur(${scene3Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene3 />
          </AbsoluteFill>
        )}

        {/* Scene 4 View: Line 7 - Perkuat Tujuan Software (Frames 298 - 422) */}
        {showScene4 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene4TranslateY}px) scale(${scene4Scale})`,
              opacity: scene4Opacity,
              filter: scene4Blur > 0.1 ? `blur(${scene4Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene4 />
          </AbsoluteFill>
        )}

        {/* Scene 5 View: Lines 9 - 10 - Esensi Software (Frames 418 - 584) */}
        {showScene5 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene5TranslateY}px) scale(${scene5Scale})`,
              opacity: scene5Opacity,
              filter: scene5Blur > 0.1 ? `blur(${scene5Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene5 />
          </AbsoluteFill>
        )}

        {/* Scene 6 View: Lines 12 - 15 - Audit Proses Bisnis (Frames 580 - 804) */}
        {showScene6 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene6TranslateY}px) scale(${scene6Scale})`,
              opacity: scene6Opacity,
              filter: scene6Blur > 0.1 ? `blur(${scene6Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene6 />
          </AbsoluteFill>
        )}

        {/* Scene 7 View: Lines 17 - 18 - Percabangan IF-ELSE (Frames 918 - 1115) */}
        {showScene7 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene7TranslateY}px) scale(${scene7Scale})`,
              opacity: scene7Opacity,
              filter: scene7Blur > 0.1 ? `blur(${scene7Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene7 />
          </AbsoluteFill>
        )}

        {/* Scene 8 View: Line 20 - Blueprint Arsitektur (Frames 1105 - 1475) */}
        {showScene8 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene8TranslateY}px) scale(${scene8Scale})`,
              opacity: scene8Opacity,
              filter: scene8Blur > 0.1 ? `blur(${scene8Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene8 />
          </AbsoluteFill>
        )}

        {/* Scene 9 View: Lines 22 - 24 - Grand Finale & Core Purpose (Frames 1465+) */}
        {showScene9 && (
          <AbsoluteFill
            style={{
              transform: `translateY(${scene9EnterTranslateY}px) scale(${scene9EnterScale})`,
              opacity: scene9Opacity,
              filter: scene9Blur > 0.1 ? `blur(${scene9Blur}px)` : "none",
              transformOrigin: "center center",
              willChange: "transform, opacity, filter",
            }}
          >
            <Scene9 />
          </AbsoluteFill>
        )}
      </div>

      {/* 5. Optical Flash & Motion Speed Streak Burst at Frame 254 (Hazard Rose) */}
      {flash1Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash1Opacity,
            mixBlendMode: "screen",
          }}
        >
          {/* Radial Hazard Flash Burst */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(244, 63, 94, 0.45) 0%, rgba(245, 158, 11, 0.25) 45%, transparent 75%)`,
            }}
          />

          {/* Anamorphic Horizontal Light Streak */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(244, 63, 94, 0.9) 30%, #ffffff 50%, rgba(244, 63, 94, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(244, 63, 94, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 6. Optical Flash Burst at Frame 299 (Emerald Solution) */}
      {flash2Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash2Opacity,
            mixBlendMode: "screen",
          }}
        >
          {/* Radial Solution Emerald Burst */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(16, 185, 129, 0.5) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)`,
            }}
          />

          {/* Anamorphic Light Streak */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.9) 30%, #ffffff 50%, rgba(56, 189, 248, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 7. Optical Flash Burst at Frame 418 (Cyan Philosophy) */}
      {flash3Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash3Opacity,
            mixBlendMode: "screen",
          }}
        >
          {/* Radial Cyan Philosophy Burst */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(56, 189, 248, 0.5) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 75%)`,
            }}
          />

          {/* Anamorphic Light Streak */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.9) 30%, #ffffff 50%, rgba(139, 92, 246, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 8. Optical Flash Burst at Frame 580 (Amber Business Audit) */}
      {flash4Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash4Opacity,
            mixBlendMode: "screen",
          }}
        >
          {/* Radial Amber Business Audit Burst */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(245, 158, 11, 0.5) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)`,
            }}
          />

          {/* Anamorphic Light Streak */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.9) 30%, #ffffff 50%, rgba(56, 189, 248, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(245, 158, 11, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 9. Optical Flash Burst at Frame 921 (Decision Branching Gate Burst) */}
      {flash5Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash5Opacity,
            mixBlendMode: "screen",
          }}
        >
          {/* Radial Decision Amber/Emerald Burst */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(16, 185, 129, 0.45) 0%, rgba(245, 158, 11, 0.35) 45%, transparent 75%)`,
            }}
          />

          {/* Anamorphic Light Streak */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.9) 30%, #ffffff 50%, rgba(16, 185, 129, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 10. Optical Flash Burst at Frame 1112 (Architecture Blueprint Cyan Burst) */}
      {flash6Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash6Opacity,
            mixBlendMode: "screen",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(56, 189, 248, 0.5) 0%, rgba(168, 85, 247, 0.3) 45%, transparent 75%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 4,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.9) 30%, #ffffff 50%, rgba(168, 85, 247, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.8)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* 11. Optical Flash Burst at Frame 1480 (Grand Finale Value Gold Burst) */}
      {flash7Opacity > 0.01 && (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            zIndex: 100,
            opacity: flash7Opacity,
            mixBlendMode: "screen",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at center, rgba(245, 158, 11, 0.6) 0%, rgba(16, 185, 129, 0.35) 45%, transparent 75%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 5,
              transform: "translateY(-50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.9) 30%, #ffffff 50%, rgba(16, 185, 129, 0.9) 70%, transparent 100%)",
              boxShadow: "0 0 35px rgba(245, 158, 11, 0.9)",
            }}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};