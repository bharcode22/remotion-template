export interface CameraPosition {
  x: number;
  y: number;
  zoom: number;
}

export interface StatusCodeCategory {
  code: string;
  name: string;
  meaning: string;
  examples: string[];
  color: string;
  badge: string;
}

export interface HttpStatusCodeProps {
  enableVoiceover?: boolean;
  enableSfx?: boolean;
  sfxVolume?: number;
}

