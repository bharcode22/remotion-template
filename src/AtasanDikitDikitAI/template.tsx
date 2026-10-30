import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { InfiniteParallaxSpace } from "./Background/InfiniteParallaxSpace";
import { ExecutiveBlueprintSpace } from "./Background/ExecutiveBlueprintSpace";
import { AnalyticalPrecisionSpace } from "./Background/AnalyticalPrecisionSpace";
import { HazardCarbonSpace } from "./Background/HazardCarbonSpace";
import { StrategicNavySpace } from "./Background/StrategicNavySpace";
import { CrimsonEclipseSpace } from "./Background/CrimsonEclipseSpace";
import { DepthOfFieldWrapper } from "./Components/DepthOfFieldWrapper";
import { LaserShutterWipe } from "./Components/LaserShutterWipe";
import { RadialIrisPortalWipe } from "./Components/RadialIrisPortalWipe";
import { HazardSplitShutterWipe } from "./Components/HazardSplitShutterWipe";
import { QuantumDiagonalBeamWipe } from "./Components/QuantumDiagonalBeamWipe";
import { SolarFlareEclipseWipe } from "./Components/SolarFlareEclipseWipe";
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from "./Scenes";
import { DEMO_STATIONS, TECH_COLORS } from "./constants";
import { CameraPosition } from "./types";
import { SoundEffectsManager } from "./Audio";

export interface AtasanDikitDikitAIProps {
  enableVoiceover?: boolean;
  enableSfx?: boolean;
  sfxVolume?: number;
}

export const AtasanDikitDikitAI: React.FC<AtasanDikitDikitAIProps> = ({
  enableVoiceover = false,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Transisi 1: Laser Shutter Wipe (Scene 1 -> Scene 2, Frame 212 -> 226)
  const wipe1Progress = interpolate(frame, [212, 226], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 2: Radial Iris Portal Wipe (Scene 2 -> Scene 3, Frame 420 -> 435)
  const wipe2Progress = interpolate(frame, [420, 435], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 3: Hazard Split Shutter Wipe (Scene 3 -> Scene 4, Frame 635 -> 650)
  const wipe3Progress = interpolate(frame, [635, 650], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 4: Quantum Diagonal Beam Wipe (Scene 4 -> Scene 5, Frame 805 -> 820)
  const wipe4Progress = interpolate(frame, [805, 820], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transisi 5: Solar Flare Eclipse Wipe (Scene 5 -> Scene 6, Frame 1140 -> 1155)
  const wipe5Progress = interpolate(frame, [1140, 1155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 1. Scene 1 View: Parallax Kosmik Cyber + Konten Hook
  const showScene1 = frame < 228;
  const scene1View = showScene1 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgDark, overflow: "hidden" }}>
      <InfiniteParallaxSpace camera={camera} />
      <InfiniteCameraRig camera={camera}>
        <DepthOfFieldWrapper
          stationX={DEMO_STATIONS[0].x}
          stationY={DEMO_STATIONS[0].y}
          camera={camera}
        >
          <Scene1 />
        </DepthOfFieldWrapper>
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  // 2. Scene 2 View: Executive Midnight Blueprint + Multi-Station Camera Slide
  const showScene2 = frame >= 210 && frame < 438;
  const scene2View = showScene2 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgBlueprint, overflow: "hidden" }}>
      <ExecutiveBlueprintSpace camera={camera} />
      <InfiniteCameraRig camera={camera}>
        <Scene2 camera={camera} />
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  // Camera Timeline for Scene 3 (Clean Analytical Center Stage)
  const scene3Camera: CameraPosition = {
    x: 0,
    y: camera.y,
    zoom: interpolate(frame, [425, 530, 640], [1.0, 1.02, 1.04], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    tilt: 0,
    activeStationIndex: 4,
  };

  // 3. Scene 3 View: Analytical Precision Space + Information Sieve Pipeline
  const showScene3 = frame >= 418 && frame < 652;
  const scene3View = showScene3 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgAnalytical, overflow: "hidden" }}>
      <AnalyticalPrecisionSpace camera={scene3Camera} />
      <InfiniteCameraRig camera={scene3Camera}>
        <Scene3 />
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  // Camera Timeline for Scene 4 (Hazard Non-Tech Stage)
  const scene4Camera: CameraPosition = {
    x: 0,
    y: camera.y,
    zoom: interpolate(frame, [640, 720, 810], [1.0, 1.02, 1.04], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    tilt: 0,
    activeStationIndex: 5,
  };

  // 4. Scene 4 View: Hazard Carbon Space + Non-Tech Interference
  const showScene4 = frame >= 633 && frame < 822;
  const scene4View = showScene4 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgHazard, overflow: "hidden" }}>
      <HazardCarbonSpace camera={scene4Camera} />
      <InfiniteCameraRig camera={scene4Camera}>
        <Scene4 />
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  // 5. Scene 5 View: Strategic Navy Space + Multi-Station Architecture Slide
  const showScene5 = frame >= 803 && frame < 1158;
  const scene5View = showScene5 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgNavy, overflow: "hidden" }}>
      <StrategicNavySpace camera={camera} />
      <InfiniteCameraRig camera={camera}>
        <Scene5 camera={camera} />
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  // Camera Timeline for Scene 6 (Final Outro Conclusion)
  const scene6Camera: CameraPosition = {
    x: 0,
    y: camera.y,
    zoom: interpolate(frame, [1145, 1225, 1300], [1.0, 1.02, 1.05], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    tilt: 0,
    activeStationIndex: 9,
  };

  // 6. Scene 6 View: Crimson Eclipse Space + Final Punchline Verdict
  const showScene6 = frame >= 1138;
  const scene6View = showScene6 ? (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgCrimson, overflow: "hidden" }}>
      <CrimsonEclipseSpace camera={scene6Camera} />
      <InfiniteCameraRig camera={scene6Camera}>
        <Scene6 />
      </InfiniteCameraRig>
    </AbsoluteFill>
  ) : null;

  return (
    <AbsoluteFill style={{ backgroundColor: TECH_COLORS.bgDark, overflow: "hidden" }}>
      {/* ─── VISUAL STAGE SEQUENCING ────────────────────────────────────── */}
      {frame < 300 && (
        <LaserShutterWipe
          progress={wipe1Progress}
          scene1={scene1View}
          scene2={scene2View}
        />
      )}

      {frame >= 300 && frame < 500 && (
        <RadialIrisPortalWipe
          progress={wipe2Progress}
          sceneFrom={scene2View}
          sceneTo={scene3View}
        />
      )}

      {frame >= 500 && frame < 700 && (
        <HazardSplitShutterWipe
          progress={wipe3Progress}
          sceneFrom={scene3View}
          sceneTo={scene4View}
        />
      )}

      {frame >= 700 && frame < 1000 && (
        <QuantumDiagonalBeamWipe
          progress={wipe4Progress}
          sceneFrom={scene4View}
          sceneTo={scene5View}
        />
      )}

      {frame >= 1000 && (
        <SolarFlareEclipseWipe
          progress={wipe5Progress}
          sceneFrom={scene5View}
          sceneTo={scene6View}
        />
      )}

      {/* ─── AUDIO LAYER: SYNCHRONIZED SFX & OPTIONAL VOICEOVER ────────── */}
      {enableVoiceover && (
        <Audio src={staticFile("dampak_ai.wav")} volume={1.0} />
      )}

      <SoundEffectsManager
        enableSfx={enableSfx}
        masterVolume={sfxVolume}
      />
    </AbsoluteFill>
  );
};
