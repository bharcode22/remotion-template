import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";
import { STATIONS } from "../constants";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ==========================================
  // 1. TRANSITION SPRINGS (Smooth physics ease)
  // ==========================================
  const spring1 = spring({ frame: Math.max(0, frame - 65), fps, config: { damping: 15, stiffness: 80, mass: 1.05 } });
  const spring2 = spring({ frame: Math.max(0, frame - 155), fps, config: { damping: 15, stiffness: 80, mass: 1.05 } });
  const spring3 = spring({ frame: Math.max(0, frame - 240), fps, config: { damping: 15, stiffness: 82, mass: 1.05 } });
  const spring4 = spring({ frame: Math.max(0, frame - 305), fps, config: { damping: 15, stiffness: 80, mass: 1.05 } });
  const spring5 = spring({ frame: Math.max(0, frame - 547), fps, config: { damping: 16, stiffness: 78, mass: 1.1 } });
  const spring6 = spring({ frame: Math.max(0, frame - 715), fps, config: { damping: 16, stiffness: 75, mass: 1.1 } });

  // Calculate X position
  let currentX = 0;
  if (frame < 65) {
    currentX = 0;
  } else if (frame < 155) {
    currentX = 0;
  } else if (frame < 240) {
    currentX = interpolate(spring2, [0, 1], [STATIONS[1].x, STATIONS[2].x]);
  } else if (frame < 305) {
    currentX = interpolate(spring3, [0, 1], [STATIONS[2].x, STATIONS[3].x]);
  } else if (frame < 547) {
    currentX = interpolate(spring4, [0, 1], [STATIONS[3].x, STATIONS[4].x]);
  } else if (frame < 715) {
    currentX = interpolate(spring5, [0, 1], [STATIONS[4].x, STATIONS[5].x]);
  } else {
    currentX = interpolate(spring6, [0, 1], [STATIONS[5].x, STATIONS[6].x]);
  }

  // Calculate Y position
  let currentY = 0;
  if (frame < 65) {
    currentY = 0;
  } else if (frame < 155) {
    currentY = interpolate(spring1, [0, 1], [STATIONS[0].y, STATIONS[1].y]);
  } else if (frame < 240) {
    currentY = interpolate(spring2, [0, 1], [STATIONS[1].y, STATIONS[2].y]);
  } else if (frame < 305) {
    currentY = STATIONS[3].y;
  } else if (frame < 547) {
    currentY = STATIONS[4].y;
  } else if (frame < 715) {
    currentY = interpolate(spring5, [0, 1], [STATIONS[4].y, STATIONS[5].y]);
  } else {
    currentY = interpolate(spring6, [0, 1], [STATIONS[5].y, STATIONS[6].y]);
  }

  // Calculate Camera Zoom
  let currentZoom = 1.0;
  if (frame < 65) {
    currentZoom = 1.0;
  } else if (frame < 155) {
    currentZoom = interpolate(spring1, [0, 1], [STATIONS[0].zoom, STATIONS[1].zoom]);
  } else if (frame < 240) {
    currentZoom = interpolate(spring2, [0, 1], [STATIONS[1].zoom, STATIONS[2].zoom]);
  } else if (frame < 305) {
    currentZoom = interpolate(spring3, [0, 1], [STATIONS[2].zoom, STATIONS[3].zoom]);
  } else if (frame < 547) {
    currentZoom = interpolate(spring4, [0, 1], [STATIONS[3].zoom, STATIONS[4].zoom]);
  } else if (frame < 715) {
    currentZoom = interpolate(spring5, [0, 1], [STATIONS[4].zoom, STATIONS[5].zoom]);
  } else {
    currentZoom = interpolate(spring6, [0, 1], [STATIONS[5].zoom, STATIONS[6].zoom]);
  }

  // Level camera - no tilt for absolute precision
  const tilt = 0;

  // Active Station
  let activeIndex = 0;
  if (frame < 65) activeIndex = 0;
  else if (frame < 155) activeIndex = 1;
  else if (frame < 240) activeIndex = 2;
  else if (frame < 305) activeIndex = 3;
  else if (frame < 547) activeIndex = 4;
  else if (frame < 715) activeIndex = 5;
  else activeIndex = 6;

  return {
    x: currentX,
    y: currentY,
    zoom: currentZoom,
    tilt,
    activeStationIndex: activeIndex,
  };
};
