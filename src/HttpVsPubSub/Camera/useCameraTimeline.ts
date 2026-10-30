import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const springConfig = { damping: 16, stiffness: 78, mass: 1.05 };

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎬 MULTI-AXIS CAMERA TIMELINE FOR 8 SCENES (SNAKE PATH 60s / 1800 FRAMES):
  // S1 (0, 0)        -> Frame 0..120
  // S1->S2 (Y: 0->1400) -> Frame 120..150
  // S2 (0, 1400)     -> Frame 150..300
  // S2->S3 (X: 0->1400) -> Frame 300..330
  // S3 (1400, 1400)  -> Frame 330..480
  // S3->S4 (X: 1400->2800) -> Frame 480..510
  // S4 (2800, 1400)  -> Frame 510..690
  // S4->S5 (Y: 1400->2800) -> Frame 690..720
  // S5 (2800, 2800)  -> Frame 720..960
  // S5->S6 (X: 2800->1400) -> Frame 960..990
  // S6 (1400, 2800)  -> Frame 990..1140
  // S6->S7 (X: 1400->0) -> Frame 1140..1170
  // S7 (0, 2800)     -> Frame 1170..1410
  // S7->S8 (Y: 2800->4200) -> Frame 1410..1440
  // S8 (0, 4200)     -> Frame 1440..1800
  // ─────────────────────────────────────────────────────────────────────────────

  // Progress springs for each transition (30 frames duration each)
  const spT1 = spring({ frame: Math.max(0, frame - 120), fps, config: springConfig });
  const spT2 = spring({ frame: Math.max(0, frame - 300), fps, config: springConfig });
  const spT3 = spring({ frame: Math.max(0, frame - 480), fps, config: springConfig });
  const spT4 = spring({ frame: Math.max(0, frame - 690), fps, config: springConfig });
  const spT5 = spring({ frame: Math.max(0, frame - 960), fps, config: springConfig });
  const spT6 = spring({ frame: Math.max(0, frame - 1140), fps, config: springConfig });
  const spT7 = spring({ frame: Math.max(0, frame - 1410), fps, config: springConfig });

  let currentX = 0;
  let currentY = 0;
  let currentZoom = 1.0;
  let activeIndex = 0;

  if (frame < 120) {
    // Scene 1
    currentX = 0;
    currentY = 0;
    activeIndex = 0;
  } else if (frame < 300) {
    // Transisi 1 -> Scene 2
    currentX = 0;
    currentY = interpolate(spT1, [0, 1], [0, 1400]);
    activeIndex = frame < 150 ? 0 : 1;
  } else if (frame < 480) {
    // Transisi 2 -> Scene 3
    currentX = interpolate(spT2, [0, 1], [0, 1400]);
    currentY = 1400;
    activeIndex = frame < 330 ? 1 : 2;
  } else if (frame < 690) {
    // Transisi 3 -> Scene 4
    currentX = interpolate(spT3, [0, 1], [1400, 2800]);
    currentY = 1400;
    activeIndex = frame < 510 ? 2 : 3;
  } else if (frame < 960) {
    // Transisi 4 -> Scene 5
    currentX = 2800;
    currentY = interpolate(spT4, [0, 1], [1400, 2800]);
    activeIndex = frame < 720 ? 3 : 4;
  } else if (frame < 1140) {
    // Transisi 5 -> Scene 6
    currentX = interpolate(spT5, [0, 1], [2800, 1400]);
    currentY = 2800;
    activeIndex = frame < 990 ? 4 : 5;
  } else if (frame < 1410) {
    // Transisi 6 -> Scene 7
    currentX = interpolate(spT6, [0, 1], [1400, 0]);
    currentY = 2800;
    activeIndex = frame < 1170 ? 5 : 6;
  } else {
    // Transisi 7 -> Scene 8
    currentX = 0;
    currentY = interpolate(spT7, [0, 1], [2800, 4200]);
    currentZoom = interpolate(spT7, [0, 1], [1.0, 0.95]);
    activeIndex = frame < 1440 ? 6 : 7;
  }

  return {
    x: currentX,
    y: currentY,
    zoom: currentZoom,
    tilt: 0,
    activeStationIndex: activeIndex,
  };
};
