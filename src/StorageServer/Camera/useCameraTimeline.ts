import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 6 INFINITE CAMERA SLIDE TIMELINE (Frames 795 - 1680)
  // - Station 1: Local Storage Concept (X = 0)        : Frame 795 - 935
  // - Slide 1 (Station 1 -> Station 2: 0 -> -1400)    : Frame 935 - 958
  // - Station 2: Object Storage Concept (X = -1400)   : Frame 958 - 1162
  // - Slide 2 (Station 2 -> Station 3: -1400 -> -2800): Frame 1162 - 1186
  // - Station 3: Local Storage Deep Dive (X = -2800)  : Frame 1186 - 1366
  // - Slide 3 (Station 3 -> Station 4: -2800 -> -4200): Frame 1366 - 1380
  // - Station 4: Object Storage Deep Dive (X = -4200) : Frame 1380 - 1680
  // ─────────────────────────────────────────────────────────────────────────────
  const springSlideConfig = { damping: 18, stiffness: 75, mass: 1.1 };

  // Slide 1: 0 -> -1400 (towards Station 2 Object Storage)
  const spSlide1 = spring({
    frame: Math.max(0, frame - 935),
    fps,
    config: springSlideConfig,
  });

  // Slide 2: -1400 -> -2800 (towards Station 3 Local Storage Spec)
  const spSlide2 = spring({
    frame: Math.max(0, frame - 1162),
    fps,
    config: springSlideConfig,
  });

  // Slide 3: -2800 -> -4200 (towards Station 4 Object Storage Benefits)
  const spSlide3 = spring({
    frame: Math.max(0, frame - 1366),
    fps,
    config: springSlideConfig,
  });

  const scene6X =
    interpolate(spSlide1, [0, 1], [0, -1400]) +
    interpolate(spSlide2, [0, 1], [0, -1400]) +
    interpolate(spSlide3, [0, 1], [0, -1400]);

  // Dynamic zoom punches during transitions
  const punch1 =
    Math.sin(Math.min(1, Math.max(0, (frame - 935) / 23)) * Math.PI) * 0.035;
  const punch2 =
    Math.sin(Math.min(1, Math.max(0, (frame - 1162) / 24)) * Math.PI) * 0.035;
  const punch3 =
    Math.sin(Math.min(1, Math.max(0, (frame - 1366) / 20)) * Math.PI) * 0.035;
  const scene6Zoom = 1.0 + punch1 + punch2 + punch3;

  if (frame >= 790) {
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

