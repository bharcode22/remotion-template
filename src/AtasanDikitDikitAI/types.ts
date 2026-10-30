export interface CameraPosition {
  x: number;
  y: number;
  zoom: number;
  tilt: number;
  activeStationIndex: number;
}

export interface DemoStation {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  x: number;
  y: number;
  zoom: number;
  tilt: number;
  accentColor: string;
  startFrame: number;
  endFrame: number;
}

