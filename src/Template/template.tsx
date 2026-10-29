import React from "react";
import { AbsoluteFill } from "remotion";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { InfiniteParallaxSpace } from "./Background/InfiniteParallaxSpace";
import { NeonFiberCable } from "./Background/NeonFiberCable";
import { DepthOfFieldWrapper } from "./Components/DepthOfFieldWrapper";
import { Scene1, Scene2, Scene3, Scene4 } from "./Scenes";
import { DEMO_STATIONS, TECH_COLORS } from "./constants";

/**
 * ========================================================
 * TEMPLATE COMPONENT: L-SHAPE MULTI-AXIS MOVEMENT
 * ========================================================
 * - Scene 1 -> 2: Meluncur Vertikal ke Bawah (Y: 0 -> 1300) [DENGAN GARIS]
 * - Scene 2 -> 3: Meluncur Horizontal ke Kanan (X: 0 -> 1400) [TANPA GARIS]
 * - Scene 3 -> 4: Meluncur ke Kanan (X: 1400 -> 2800) + Zoom Out Makro [TANPA GARIS]
 */
export const Template: React.FC = () => {
  const camera = useCameraTimeline();

  return (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgDark, overflow: "hidden" }}>
      {/* 1. Multi-Plane Parallax Background (Space, Star Dust, 2D Floor Grid) */}
      <InfiniteParallaxSpace camera={camera} />

      {/* 2. Multi-Axis Camera Viewport Rig */}
      <InfiniteCameraRig camera={camera}>
        {/* Neon cable: Aktif pada Scene 1 -> 2; otomatis larut sebelum Scene 3 */}
        <NeonFiberCable />

        {/* 4 Dedicated Stations in 2D World Space */}
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
