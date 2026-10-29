import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const springConfig = { damping: 16, stiffness: 78, mass: 1.05 };

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎬 MULTI-AXIS CAMERA TIMELINE FOR 8 SCENES (SNAKE PATH):
  // S1 (0, 0)        -> Frame 0..90
  // S1->S2 (Y: 0->1400) -> Frame 90..120
  // S2 (0, 1400)     -> Frame 120..210
  // S2->S3 (X: 0->1400) -> Frame 210..240
  // S3 (1400, 1400)  -> Frame 240..320
  // S3->S4 (X: 1400->2800) -> Frame 320..350
  // S4 (2800, 1400)  -> Frame 350..440
  // S4->S5 (Y: 1400->2800) -> Frame 440..470
  // S5 (2800, 2800)  -> Frame 470..640
  // S5->S6 (X: 2800->1400) -> Frame 640..670
  // S6 (1400, 2800)  -> Frame 670..760
  // S6->S7 (X: 1400->0) -> Frame 760..790
  // S7 (0, 2800)     -> Frame 790..960
  // S7->S8 (Y: 2800->4200) -> Frame 960..990
  // S8 (0, 4200)     -> Frame 990..1320
  // ─────────────────────────────────────────────────────────────────────────────

  // Progress springs for each transition
  const spT1 = spring({ frame: Math.max(0, frame - 90), fps, config: springConfig });
  const spT2 = spring({ frame: Math.max(0, frame - 210), fps, config: springConfig });
  const spT3 = spring({ frame: Math.max(0, frame - 320), fps, config: springConfig });
  const spT4 = spring({ frame: Math.max(0, frame - 440), fps, config: springConfig });
  const spT5 = spring({ frame: Math.max(0, frame - 640), fps, config: springConfig });
  const spT6 = spring({ frame: Math.max(0, frame - 760), fps, config: springConfig });
  const spT7 = spring({ frame: Math.max(0, frame - 960), fps, config: springConfig });

  let currentX = 0;
  let currentY = 0;
  let currentZoom = 1.0;
  let activeIndex = 0;

  if (frame < 90) {
    // Scene 1
    currentX = 0;
    currentY = 0;
    activeIndex = 0;
  } else if (frame < 210) {
    // Transisi 1 -> Scene 2
    currentX = 0;
    currentY = interpolate(spT1, [0, 1], [0, 1400]);
    activeIndex = frame < 120 ? 0 : 1;
  } else if (frame < 320) {
    // Transisi 2 -> Scene 3
    currentX = interpolate(spT2, [0, 1], [0, 1400]);
    currentY = 1400;
    activeIndex = frame < 240 ? 1 : 2;
  } else if (frame < 440) {
    // Transisi 3 -> Scene 4
    currentX = interpolate(spT3, [0, 1], [1400, 2800]);
    currentY = 1400;
    activeIndex = frame < 350 ? 2 : 3;
  } else if (frame < 640) {
    // Transisi 4 -> Scene 5
    currentX = 2800;
    currentY = interpolate(spT4, [0, 1], [1400, 2800]);
    activeIndex = frame < 470 ? 3 : 4;
  } else if (frame < 760) {
    // Transisi 5 -> Scene 6
    currentX = interpolate(spT5, [0, 1], [2800, 1400]);
    currentY = 2800;
    activeIndex = frame < 670 ? 4 : 5;
  } else if (frame < 960) {
    // Transisi 6 -> Scene 7
    currentX = interpolate(spT6, [0, 1], [1400, 0]);
    currentY = 2800;
    activeIndex = frame < 790 ? 5 : 6;
  } else {
    // Transisi 7 -> Scene 8
    currentX = 0;
    currentY = interpolate(spT7, [0, 1], [2800, 4200]);
    currentZoom = interpolate(spT7, [0, 1], [1.0, 0.95]);
    activeIndex = frame < 990 ? 6 : 7;
  }

  return {
    x: currentX,
    y: currentY,
    zoom: currentZoom,
    tilt: 0,
    activeStationIndex: activeIndex,
  };
};
