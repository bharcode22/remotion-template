import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { DynamicParallaxBackground } from "./Background/DynamicParallaxBackground";
import { InfiniteCameraRig } from "./Camera/InfiniteCameraRig";
import { useCameraTimeline } from "./Camera/useCameraTimeline";
import { Scene1_BrowserViewport } from "./Scenes/Scene1_BrowserViewport";
import { Scene2_UrgentAlarm } from "./Scenes/Scene2_UrgentAlarm";
import { Scene3_StopNol } from "./Scenes/Scene3_StopNol";
import { Scene4_ElectronHero } from "./Scenes/Scene4_ElectronHero";
import { Scene5_TechStack } from "./Scenes/Scene5_TechStack";
import { Scene6_ReuseCode } from "./Scenes/Scene6_ReuseCode";
import { Scene7_Distribution } from "./Scenes/Scene7_Distribution";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { MAIN_FONT_FAMILY, STATIONS, TOTAL_ELECTRON_STUDIO_FRAMES } from "./constants";
import { ElectronMographStudioProps } from "./types";

export { TOTAL_ELECTRON_STUDIO_FRAMES };

export const ElectronMographStudio: React.FC<ElectronMographStudioProps> = ({
  enableSfx = true,
  sfxVolume = 1.0,
  voiceVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Opacity transitions between stations with continuous spatial preview
  const opacity1 = frame < 65 ? 1 : interpolate(frame, [65, 80], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity2 = frame < 47 ? 0 : frame < 51 ? interpolate(frame, [47, 51], [0, 1]) : frame < 155 ? 1 : interpolate(frame, [155, 172], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity3 = frame < 138 ? 0 : frame < 155 ? interpolate(frame, [138, 155], [0, 1]) : frame < 240 ? 1 : interpolate(frame, [240, 255], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity4 = frame < 222 ? 0 : frame < 240 ? interpolate(frame, [222, 240], [0, 1]) : frame < 305 ? 1 : interpolate(frame, [305, 320], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity5 = frame < 288 ? 0 : frame < 305 ? interpolate(frame, [288, 305], [0, 1]) : frame < 547 ? 1 : interpolate(frame, [547, 560], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity6 = frame < 530 ? 0 : frame < 547 ? interpolate(frame, [530, 547], [0, 1]) : frame < 700 ? 1 : interpolate(frame, [700, 715], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity7 = frame < 682 ? 0 : interpolate(frame, [682, 700], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: "#0A0A0C",
        fontFamily: MAIN_FONT_FAMILY,
      }}
    >
      {/* 1. Main Voiceover Track (940 frames / 31.32s) */}
      <Audio src={staticFile("electron_voice.wav")} volume={voiceVolume} />

      {/* 2. Dynamic Parallax Background (multi-plane depth + evolving lighting per station) */}
      <DynamicParallaxBackground camera={camera} />

      {/* 3. 3D Infinite Camera Rig (World coordinate camera swoops, zoom & tilt) */}
      <InfiniteCameraRig camera={camera}>
        {/* Station 1: Web App Browser (0, 0) */}
        {opacity1 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[0].x, top: STATIONS[0].y, width: 1080, height: 1920, opacity: opacity1 }}>
            <Scene1_BrowserViewport />
          </div>
        )}

        {/* Station 2: Urgent Desktop Alarm (0, 1400) */}
        {opacity2 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[1].x, top: STATIONS[1].y, width: 1080, height: 1920, opacity: opacity2 }}>
            <Scene2_UrgentAlarm />
          </div>
        )}

        {/* Station 3: Stop / Nggak Perlu Dari Nol (1400, 2400) */}
        {opacity3 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[2].x, top: STATIONS[2].y, width: 1080, height: 1920, opacity: opacity3 }}>
            <Scene3_StopNol />
          </div>
        )}

        {/* Station 4: Quantum Electron Atom Hero (2800, 2400) */}
        {opacity4 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[3].x, top: STATIONS[3].y, width: 1080, height: 1920, opacity: opacity4 }}>
            <Scene4_ElectronHero />
          </div>
        )}

        {/* Station 5: 3D Tech Monoliths (4200, 2400) */}
        {opacity5 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[4].x, top: STATIONS[4].y, width: 1080, height: 1920, opacity: opacity5 }}>
            <Scene5_TechStack />
          </div>
        )}

        {/* Station 6: Code Pipeline 100% Reuse (5400, 1200) */}
        {opacity6 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[5].x, top: STATIONS[5].y, width: 1080, height: 1920, opacity: opacity6 }}>
            <Scene6_ReuseCode />
          </div>
        )}

        {/* Station 7: Triple OS Distribution Pedestals (6800, 0) */}
        {opacity7 > 0 && (
          <div style={{ position: "absolute", left: STATIONS[6].x, top: STATIONS[6].y, width: 1080, height: 1920, opacity: opacity7 }}>
            <Scene7_Distribution />
          </div>
        )}
      </InfiniteCameraRig>

      {/* 4. Tactile Sound Effects Manager (Whooshes, Pops, Clicks, Chimes) */}
      <SoundEffectsManager enableSfx={enableSfx} sfxVolume={sfxVolume} />
    </AbsoluteFill>
  );
};
