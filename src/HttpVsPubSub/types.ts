export interface TechShowcaseProps {
  headlineText?: string;
  subheadlineText?: string;
  accentColor?: string;
  alertColor?: string;
}

export interface CameraPosition {
  x: number;
  y: number;
  zoom: number;
  tilt: number;
  activeStationIndex: number;
}
