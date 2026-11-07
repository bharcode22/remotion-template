export interface CameraState {
  x: number;
  y: number;
  zoom: number;
  rotation: number;
}

export const useCameraTimeline = (): CameraState => {
  // Stable, rock-solid camera centered on the 3-tier system without any shake
  return {
    x: 0,
    y: 0,
    zoom: 1.0,
    rotation: 0,
  };
};

