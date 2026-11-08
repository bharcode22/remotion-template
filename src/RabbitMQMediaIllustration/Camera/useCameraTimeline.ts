import { CameraState } from "./InfiniteCameraRig";

/**
 * useCameraTimeline
 * Static, rock-solid centered camera framing.
 * Zero shake, zero wobble, perfectly aligned at (0, 0) with zoom 1.0.
 */
export const useCameraTimeline = (): CameraState => {
  return {
    x: 0,
    y: 0,
    zoom: 1.0,
    rotation: 0,
  };
};
