import React from "react";
import { AbsoluteFill } from "remotion";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { InfiniteParallaxSpace } from "./Background/InfiniteParallaxSpace";
import { DepthOfFieldWrapper } from "./Components/DepthOfFieldWrapper";
import {
  Scene1,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Scene7,
  Scene8,
} from "./Scenes";
import { DEMO_STATIONS, TECH_COLORS } from "./constants";

/**
 * ========================================================
 * HTTP VS PUB/SUB MAIN COMPONENT (8 SCENES)
 * ========================================================
 * Pergerakan Kamera Snake-Path (Multi-Axis Canvas):
 * - Scene 1 -> 2: Turun Vertikal (Y: 0 -> 1400) [Dengan Neon Fiber]
 * - Scene 2 -> 3: Geser Kanan (X: 0 -> 1400)
 * - Scene 3 -> 4: Geser Kanan (X: 1400 -> 2800)
 * - Scene 4 -> 5: Turun Vertikal (Y: 1400 -> 2800)
 * - Scene 5 -> 6: Geser Kiri (X: 2800 -> 1400)
 * - Scene 6 -> 7: Geser Kiri (X: 1400 -> 0)
 * - Scene 7 -> 8: Turun Vertikal (Y: 2800 -> 4200) + Macro Pull-Back
 */
export const HttpVsPubSub: React.FC = () => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgDark, overflow: "hidden" }}>
      {/* 1. Multi-Plane Parallax Background */}
      <InfiniteParallaxSpace camera={camera} />

      {/* 2. Multi-Axis Camera Viewport Rig */}
      <InfiniteCameraRig camera={camera}>
        {/* 8 Dedicated Stations in 2D World Space */}
        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[0].x}
          stationY={DEMO_STATIONS[0].y}
          camera={camera}
        >
          <Scene1 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[1].x}
          stationY={DEMO_STATIONS[1].y}
          camera={camera}
        >
          <Scene2 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[2].x}
          stationY={DEMO_STATIONS[2].y}
          camera={camera}
        >
          <Scene3 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[3].x}
          stationY={DEMO_STATIONS[3].y}
          camera={camera}
        >
          <Scene4 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[4].x}
          stationY={DEMO_STATIONS[4].y}
          camera={camera}
        >
          <Scene5 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[5].x}
          stationY={DEMO_STATIONS[5].y}
          camera={camera}
        >
          <Scene6 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[6].x}
          stationY={DEMO_STATIONS[6].y}
          camera={camera}
        >
          <Scene7 />
        </DepthOfFieldWrapper>

        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[7].x}
          stationY={DEMO_STATIONS[7].y}
          camera={camera}
        >
          <Scene8 />
        </DepthOfFieldWrapper>
      </InfiniteCameraRig>
    </AbsoluteFill>
  );
};
