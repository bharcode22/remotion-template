import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 4 CAMERA SLIDE TIMELINE (Frames 466 - 807)
  // - Station 4A: GET  (X = 0)
  // - Slide 1 (GET -> POST: 0 -> -1400)      : Frame 522 -> 542
  // - Station 4B: POST (X = -1400)
  // - Slide 2 (POST -> PUT: -1400 -> -2800)  : Frame 602 -> 622
  // - Station 4C: PUT  (X = -2800)
  // - Slide 3 (PUT -> DELETE: -2800 -> -4200): Frame 698 -> 718
  // - Station 4D: DELETE (X = -4200)
  // ─────────────────────────────────────────────────────────────────────────────
  const springSlideConfig = { damping: 18, stiffness: 75, mass: 1.1 };

  // Slide 1: 0 -> -1400 (to the left towards POST)
  const spSlide1 = spring({
    frame: Math.max(0, frame - 522),
    fps,
    config: springSlideConfig,
  });

  // Slide 2: -1400 -> -2800 (towards PUT)
  const spSlide2 = spring({
    frame: Math.max(0, frame - 602),
    fps,
    config: springSlideConfig,
  });

  // Slide 3: -2800 -> -4200 (towards DELETE)
  const spSlide3 = spring({
    frame: Math.max(0, frame - 698),
    fps,
    config: springSlideConfig,
  });

  const scene4X =
    interpolate(spSlide1, [0, 1], [0, -1400]) +
    interpolate(spSlide2, [0, 1], [0, -1400]) +
    interpolate(spSlide3, [0, 1], [0, -1400]);

  // Subtle dynamic zoom punch during camera transitions
  const punch1 =
    Math.sin(Math.min(1, Math.max(0, (frame - 522) / 20)) * Math.PI) * 0.035;
  const punch2 =
    Math.sin(Math.min(1, Math.max(0, (frame - 602) / 20)) * Math.PI) * 0.035;
  const punch3 =
    Math.sin(Math.min(1, Math.max(0, (frame - 698) / 20)) * Math.PI) * 0.035;
  const scene4Zoom = 1.0 + punch1 + punch2 + punch3;

  // Active scene selection: Scene 4 is active from 460 to 796
  if (frame >= 460 && frame < 796) {
    return {
      x: scene4X,
      y: 0,
      zoom: scene4Zoom,
    };
  }

  return {
    x: 0,
    y: 0,
    zoom: 1.0,
  };
};

