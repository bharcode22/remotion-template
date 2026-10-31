import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 6 INFINITE CAMERA SLIDE TIMELINE (Frames 735 - 1620)
  // - Station 2xx: Success (X = 0)              : Frame 735 - 890
  // - Slide 1 (2xx -> 3xx: 0 -> -1400)         : Frame 890 - 915
  // - Station 3xx: Redirection (X = -1400)      : Frame 915 - 1095
  // - Slide 2 (3xx -> 4xx: -1400 -> -2800)     : Frame 1095 - 1116
  // - Station 4xx: Client Error (X = -2800)     : Frame 1116 - 1360
  // - Slide 3 (4xx -> 5xx: -2800 -> -4200)     : Frame 1360 - 1383
  // - Station 5xx: Server Error (X = -4200)     : Frame 1383 - 1620
  // ─────────────────────────────────────────────────────────────────────────────
  const springSlideConfig = { damping: 18, stiffness: 75, mass: 1.1 };

  // Slide 1: 0 -> -1400 (towards Station 3xx)
  const spSlide1 = spring({
    frame: Math.max(0, frame - 890),
    fps,
    config: springSlideConfig,
  });

  // Slide 2: -1400 -> -2800 (towards Station 4xx)
  const spSlide2 = spring({
    frame: Math.max(0, frame - 1095),
    fps,
    config: springSlideConfig,
  });

  // Slide 3: -2800 -> -4200 (towards Station 5xx)
  const spSlide3 = spring({
    frame: Math.max(0, frame - 1360),
    fps,
    config: springSlideConfig,
  });

  const scene6X =
    interpolate(spSlide1, [0, 1], [0, -1400]) +
    interpolate(spSlide2, [0, 1], [0, -1400]) +
    interpolate(spSlide3, [0, 1], [0, -1400]);

  // Dynamic zoom punches during transitions
  const punch1 =
    Math.sin(Math.min(1, Math.max(0, (frame - 890) / 25)) * Math.PI) * 0.035;
  const punch2 =
    Math.sin(Math.min(1, Math.max(0, (frame - 1095) / 21)) * Math.PI) * 0.035;
  const punch3 =
    Math.sin(Math.min(1, Math.max(0, (frame - 1360) / 23)) * Math.PI) * 0.035;
  const scene6Zoom = 1.0 + punch1 + punch2 + punch3;

  if (frame >= 735) {
    return {
      x: scene6X,
      y: 0,
      zoom: scene6Zoom,
    };
  }

  return {
    x: 0,
    y: 0,
    zoom: 1.0,
  };
};
