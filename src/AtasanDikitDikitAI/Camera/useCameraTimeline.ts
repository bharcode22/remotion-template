import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle breathing camera drift for organic live motion (pure vertical, 0 tilt)
  const driftY = Math.sin(frame * 0.05) * 4;

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 1 TIMELINE (Frames 0 - 220)
  // Hook station located at (X: 0, Y: 0)
  // ─────────────────────────────────────────────────────────────────────────────
  const s1ZoomProgress = spring({
    frame: Math.max(0, frame - 110),
    fps,
    config: { damping: 16, stiffness: 65, mass: 1.1 },
  });

  const s1BaseZoom = interpolate(frame, [0, 50, 110], [1.0, 1.02, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene1Zoom = s1BaseZoom + s1ZoomProgress * 0.02;

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 2 CAMERA SLIDE JOURNEY (Frames 220 - 425)
  // - Station 2A: "Mulai dari membuat plan," (X: 0)
  // - Camera Slide 1 (X: 0 -> 1400)          : Frame 265 -> 283
  // - Station 2B: "Mencari ide,"             (X: 1400)
  // - Camera Slide 2 (X: 1400 -> 2800)       : Frame 318 -> 336
  // - Station 2C: "bahkan sampai membuat keputusan keputusan besar" (X: 2800)
  // ─────────────────────────────────────────────────────────────────────────────
  const springSlideConfig = { damping: 18, stiffness: 72, mass: 1.1 };

  // Slide 1 (Scene 2)
  const spSlide1 = spring({
    frame: Math.max(0, frame - 265),
    fps,
    config: springSlideConfig,
  });

  // Slide 2 (Scene 2)
  const spSlide2 = spring({
    frame: Math.max(0, frame - 318),
    fps,
    config: springSlideConfig,
  });

  const scene2X =
    interpolate(spSlide1, [0, 1], [0, 1400]) +
    interpolate(spSlide2, [0, 1], [0, 1400]);

  const slide1Punch =
    Math.sin(Math.min(1, Math.max(0, (frame - 265) / 18)) * Math.PI) * 0.035;
  const slide2Punch =
    Math.sin(Math.min(1, Math.max(0, (frame - 318) / 18)) * Math.PI) * 0.035;
  const scene2Zoom = 1.0 + slide1Punch + slide2Punch;

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 SCENE 5 CAMERA SLIDE JOURNEY (Frames 810 - 1145)
  // - Station 5A: "Maksud informasi AI" (X: 0)
  // - Camera Slide 1 (X: 0 -> 1400)     : Frame 915 -> 935
  // - Station 5B: "Dampak ke sistem lain" (X: 1400)
  // - Camera Slide 2 (X: 1400 -> 2800)  : Frame 1025 -> 1045
  // - Station 5C: "Dampak ke karyawan"  (X: 2800)
  // ─────────────────────────────────────────────────────────────────────────────
  const spSlide5_1 = spring({
    frame: Math.max(0, frame - 915),
    fps,
    config: springSlideConfig,
  });

  const spSlide5_2 = spring({
    frame: Math.max(0, frame - 1025),
    fps,
    config: springSlideConfig,
  });

  const scene5X =
    interpolate(spSlide5_1, [0, 1], [0, 1400]) +
    interpolate(spSlide5_2, [0, 1], [0, 1400]);

  const slide5_1Punch =
    Math.sin(Math.min(1, Math.max(0, (frame - 915) / 18)) * Math.PI) * 0.035;
  const slide5_2Punch =
    Math.sin(Math.min(1, Math.max(0, (frame - 1025) / 18)) * Math.PI) * 0.035;
  const scene5Zoom = 1.0 + slide5_1Punch + slide5_2Punch;

  // Determine current X, Zoom, and activeStationIndex based on frame
  let currentX = 0;
  let currentZoom = 1.0;
  let activeIndex = 0;

  if (frame < 220) {
    currentX = 0;
    currentZoom = scene1Zoom;
    activeIndex = 0;
  } else if (frame < 425) {
    currentX = scene2X;
    currentZoom = scene2Zoom;
    if (frame < 275) activeIndex = 1;
    else if (frame < 325) activeIndex = 2;
    else activeIndex = 3;
  } else if (frame < 810) {
    currentX = 0;
    currentZoom = 1.0;
    activeIndex = frame < 640 ? 4 : 5;
  } else {
    currentX = scene5X;
    currentZoom = scene5Zoom;
    if (frame < 925) activeIndex = 6;
    else if (frame < 1035) activeIndex = 7;
    else activeIndex = 8;
  }

  return {
    x: currentX,
    y: driftY,
    zoom: currentZoom,
    tilt: 0, // 100% Upright & Symmetrical
    activeStationIndex: activeIndex,
  };
};
