export interface CameraPosition {
  x: number;
  y: number;
  zoom: number;
  tilt: number;
  activeStationIndex: number;
}

export interface ElectronMographStudioProps {
  enableSfx?: boolean;
  sfxVolume?: number;
  voiceVolume?: number;
}

