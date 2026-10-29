import React from "react";
import { AbsoluteFill } from "remotion";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { InfiniteParallaxSpace } from "./Background/InfiniteParallaxSpace";
import { NeonFiberCable } from "./Background/NeonFiberCable";
import { DepthOfFieldWrapper } from "./Components/DepthOfFieldWrapper";
import { Scene1, Scene2, Scene3, Scene4 } from "./Scenes";
import { DEMO_STATIONS, TECH_COLORS } from "./constants";

export const Template: React.FC = () => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgDark, overflow: "hidden" }}>
      {/* 1. Multi-Plane Parallax Background (Deep Void, Grid, Dust, Foreground Rings) */}
      <InfiniteParallaxSpace camera={camera} />

      {/* 2. Apple-Style Infinite Camera Viewport Rig with Vertical Momentum */}
      <InfiniteCameraRig camera={camera}>
        {/* Continuous Connecting Neon Fiber Laser Cable */}
        <NeonFiberCable />

        {/* 4 Dedicated Numbered Scenes (Scene 1 to Scene 4) along the Vertical Axis */}
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
      </InfiniteCameraRig>
    </AbsoluteFill>
  );
};
