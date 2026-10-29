import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { DEMO_STATIONS } from "../constants";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Symmetrical Apple-like vertical momentum spring
  const springConfig = { damping: 16, stiffness: 78, mass: 1.1 };

  let currentY = DEMO_STATIONS[0].y;
  let currentZoom = DEMO_STATIONS[0].zoom;
  let activeIndex = 0;

  for (let i = 0; i < DEMO_STATIONS.length - 1; i++) {
    const fromStation = DEMO_STATIONS[i];
    const toStation = DEMO_STATIONS[i + 1];

    const transitionStart = fromStation.endFrame - 10;
    const transitionEnd = toStation.startFrame + 10;

    if (frame < transitionStart) {
      currentY = fromStation.y;
      currentZoom = fromStation.zoom;
      activeIndex = i;
      break;
    } else if (frame >= transitionStart && frame < transitionEnd) {
      const progress = spring({
        frame: frame - transitionStart,
        fps,
        config: springConfig,
      });

      currentY = interpolate(progress, [0, 1], [fromStation.y, toStation.y]);
      currentZoom = interpolate(progress, [0, 1], [fromStation.zoom, toStation.zoom]);
      activeIndex = progress >= 0.5 ? i + 1 : i;
      break;
    } else if (i === DEMO_STATIONS.length - 2 && frame >= transitionEnd) {
      currentY = toStation.y;
      currentZoom = toStation.zoom;
      activeIndex = DEMO_STATIONS.length - 1;
    }
  }

  return {
    x: 0, // Pure vertical center axis (100% Symmetrical)
    y: currentY,
    zoom: currentZoom,
    tilt: 0, // 0° No tilt / No slant
    activeStationIndex: activeIndex,
  };
};
