import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // =========================================================================
  // 🎬 L-SHAPE MULTI-AXIS CAMERA TIMELINE:
  // - 0 - 68   : Scene 01 (X: 0, Y: 0, Zoom: 1.0)
  // - 68 - 95  : TRANSISI 1 (DENGAN GARIS) — Meluncur Turun Y: 0 -> 1300
  // - 95 - 165 : Scene 02 (X: 0, Y: 1300, Zoom: 1.05)
  // - 165 - 195: TRANSISI 2 (TANPA GARIS) — Meluncur ke Kanan X: 0 -> 1400
  // - 195 - 255: Scene 03 (X: 1400, Y: 1300, Zoom: 1.0)
  // - 255 - 280: TRANSISI 3 (TANPA GARIS) — Meluncur ke Kanan X: 1400 -> 2800 + Zoom: 0.90x
  // - 280 - 300: Scene 04 (X: 2800, Y: 1300, Zoom: 0.90)
  // =========================================================================

  // 1. Vertical Swoop (Scene 1 to Scene 2 along neon cable)
  const springConfigY = { damping: 15, stiffness: 75, mass: 1.1 };
  const swoopYProgress = spring({
    frame: Math.max(0, frame - 68),
    fps,
    config: springConfigY,
  });
  const currentY = frame < 68 ? 0 : interpolate(swoopYProgress, [0, 1], [0, 1300]);

  // 2. Horizontal Lateral Slide 1 (Scene 2 to Scene 3 to the RIGHT: X: 0 -> 1400)
  const springConfigX1 = { damping: 16, stiffness: 78, mass: 1.05 };
  const slideX1Progress = spring({
    frame: Math.max(0, frame - 165),
    fps,
    config: springConfigX1,
  });

  // 3. Horizontal Lateral Slide 2 (Scene 3 to Scene 4 further to the RIGHT: X: 1400 -> 2800)
  const springConfigX2 = { damping: 16, stiffness: 82, mass: 1.05 };
  const slideX2Progress = spring({
    frame: Math.max(0, frame - 255),
    fps,
    config: springConfigX2,
  });

  let currentX = 0;
  if (frame < 165) {
    currentX = 0;
  } else if (frame < 255) {
    currentX = interpolate(slideX1Progress, [0, 1], [0, 1400]);
  } else {
    currentX = interpolate(slideX2Progress, [0, 1], [1400, 2800]);
  }

  // 4. Smooth Camera Zoom: 1.0 (Scene 1) -> 1.05 (Scene 2) -> 1.0 (Scene 3) -> 0.90 (Scene 4)
  let currentZoom = 1.0;
  if (frame < 68) {
    currentZoom = 1.0;
  } else if (frame < 95) {
    currentZoom = interpolate(swoopYProgress, [0, 1], [1.0, 1.05]);
  } else if (frame < 165) {
    currentZoom = 1.05;
  } else if (frame < 195) {
    currentZoom = interpolate(slideX1Progress, [0, 1], [1.05, 1.0]);
  } else if (frame < 255) {
    currentZoom = 1.0;
  } else {
    currentZoom = interpolate(slideX2Progress, [0, 1], [1.0, 0.90]);
  }

  // Active Station Index
  let activeIndex = 0;
  if (frame < 80) activeIndex = 0;
  else if (frame < 180) activeIndex = 1;
  else if (frame < 265) activeIndex = 2;
  else activeIndex = 3;

  return {
    x: currentX,
    y: currentY,
    zoom: currentZoom,
    tilt: 0,
    activeStationIndex: activeIndex,
  };
};
