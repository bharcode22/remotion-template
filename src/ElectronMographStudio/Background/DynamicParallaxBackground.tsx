import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";

interface DynamicParallaxBackgroundProps {
  camera: CameraPosition;
}

interface StationGradientConfig {
  id: number;
  inStart: number;
  inEnd: number;
  outStart: number;
  outEnd: number;
  baseGradient: string;
  primaryWash: string;
  primaryPos: { x: number; y: number };
  secondaryWash: string;
  secondaryPos: { x: number; y: number };
}

const STATION_GRADIENTS: StationGradientConfig[] = [
  {
    // Station 1: Web App Browser (Deep Sapphire & Midnight Slate)
    id: 1,
    inStart: 0,
    inEnd: 0,
    outStart: 45,
    outEnd: 65,
    baseGradient: "linear-gradient(150deg, #0d1e3d 0%, #081124 50%, #03060d 100%)",
    primaryWash: "rgba(41, 151, 255, 0.28)",
    primaryPos: { x: 50, y: 28 },
    secondaryWash: "rgba(99, 102, 241, 0.16)",
    secondaryPos: { x: 85, y: 75 },
  },
  {
    // Station 2: Urgent Alarm (Deep Ruby Crimson & Amber Ember)
    id: 2,
    inStart: 45,
    inEnd: 65,
    outStart: 140,
    outEnd: 160,
    baseGradient: "linear-gradient(150deg, #3c0f1a 0%, #20080f 50%, #0a0305 100%)",
    primaryWash: "rgba(255, 69, 58, 0.28)",
    primaryPos: { x: 50, y: 25 },
    secondaryWash: "rgba(255, 159, 10, 0.18)",
    secondaryPos: { x: 20, y: 75 },
  },
  {
    // Station 3: Stop / Zero Relief (Deep Forest Jade & Emerald)
    id: 3,
    inStart: 140,
    inEnd: 160,
    outStart: 225,
    outEnd: 245,
    baseGradient: "linear-gradient(150deg, #0d3422 0%, #071c13 50%, #020a06 100%)",
    primaryWash: "rgba(48, 209, 88, 0.26)",
    primaryPos: { x: 50, y: 28 },
    secondaryWash: "rgba(52, 199, 89, 0.16)",
    secondaryPos: { x: 80, y: 70 },
  },
  {
    // Station 4: Electron Atom Hero (Deep Cobalt Indigo & Celestial Violet)
    id: 4,
    inStart: 225,
    inEnd: 245,
    outStart: 290,
    outEnd: 310,
    baseGradient: "linear-gradient(150deg, #181c4c 0%, #0d102e 50%, #040512 100%)",
    primaryWash: "rgba(41, 151, 255, 0.32)",
    primaryPos: { x: 50, y: 35 },
    secondaryWash: "rgba(191, 90, 242, 0.20)",
    secondaryPos: { x: 30, y: 70 },
  },
  {
    // Station 5: Tech Monoliths (Deep Amethyst & Midnight Slate)
    id: 5,
    inStart: 290,
    inEnd: 310,
    outStart: 535,
    outEnd: 550,
    baseGradient: "linear-gradient(150deg, #27163f 0%, #150c23 50%, #07030e 100%)",
    primaryWash: "rgba(191, 90, 242, 0.24)",
    primaryPos: { x: 50, y: 32 },
    secondaryWash: "rgba(255, 87, 34, 0.16)",
    secondaryPos: { x: 85, y: 35 },
  },
  {
    // Station 6: Code Reuse Gauge (Deep Oceanic Cyan & Midnight Azure)
    id: 6,
    inStart: 535,
    inEnd: 550,
    outStart: 685,
    outEnd: 705,
    baseGradient: "linear-gradient(150deg, #0d2847 0%, #071629 50%, #020912 100%)",
    primaryWash: "rgba(41, 151, 255, 0.28)",
    primaryPos: { x: 50, y: 35 },
    secondaryWash: "rgba(0, 199, 190, 0.18)",
    secondaryPos: { x: 20, y: 75 },
  },
  {
    // Station 7: Triple OS Distribution Stage (Grand Keynote Twilight & Royal Navy)
    id: 7,
    inStart: 685,
    inEnd: 705,
    outStart: 940,
    outEnd: 940,
    baseGradient: "linear-gradient(150deg, #201744 0%, #0f122b 50%, #050612 100%)",
    primaryWash: "rgba(41, 151, 255, 0.26)",
    primaryPos: { x: 50, y: 30 },
    secondaryWash: "rgba(191, 90, 242, 0.20)",
    secondaryPos: { x: 80, y: 80 },
  },
];

const getStationOpacity = (
  frame: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
): number => {
  if (frame < inStart) return 0;
  if (frame <= inEnd) {
    if (inStart === inEnd) return 1;
    return interpolate(frame, [inStart, inEnd], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  if (frame < outStart) return 1;
  if (frame <= outEnd) {
    return interpolate(frame, [outStart, outEnd], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  return 0;
};

export const DynamicParallaxBackground: React.FC<DynamicParallaxBackgroundProps> = ({
  camera,
}) => {
  const frame = useCurrentFrame();

  // Subtle 3D Camera Parallax offsets for background depth
  const parallaxX = -camera.x * 0.07;
  const parallaxY = -camera.y * 0.07;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06070B", overflow: "hidden" }}>
      {/* 1. DYNAMIC STATION GRADIENT LAYERS (Smooth Cross-Fading Ramps) */}
      {STATION_GRADIENTS.map((station) => {
        const opacity = getStationOpacity(
          frame,
          station.inStart,
          station.inEnd,
          station.outStart,
          station.outEnd
        );

        if (opacity <= 0.001) return null;

        return (
          <AbsoluteFill
            key={station.id}
            style={{
              opacity,
              pointerEvents: "none",
            }}
          >
            {/* Rich Directional Linear Gradient Base */}
            <AbsoluteFill
              style={{
                background: station.baseGradient,
              }}
            />

            {/* Primary Atmospheric Ambient Radial Wash (Parallaxed) */}
            <div
              style={{
                position: "absolute",
                top: `${station.primaryPos.y}%`,
                left: `${station.primaryPos.x}%`,
                width: 1300,
                height: 950,
                marginLeft: -650,
                marginTop: -475,
                borderRadius: "50%",
                background: `radial-gradient(ellipse at center, ${station.primaryWash} 0%, transparent 70%)`,
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0px)`,
                pointerEvents: "none",
              }}
            />

            {/* Secondary Accent Mood Gradient Wash (Parallaxed) */}
            <div
              style={{
                position: "absolute",
                top: `${station.secondaryPos.y}%`,
                left: `${station.secondaryPos.x}%`,
                width: 1000,
                height: 800,
                marginLeft: -500,
                marginTop: -400,
                borderRadius: "50%",
                background: `radial-gradient(ellipse at center, ${station.secondaryWash} 0%, transparent 65%)`,
                transform: `translate3d(${parallaxX * 1.3}px, ${parallaxY * 1.3}px, 0px)`,
                pointerEvents: "none",
              }}
            />
          </AbsoluteFill>
        );
      })}

      {/* 2. OVERHEAD SOFT KEYLIGHT DIFFUSION */}
      <div
        style={{
          position: "absolute",
          top: -220,
          left: "50%",
          width: 1400,
          height: 750,
          marginLeft: -700,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.04) 0%, transparent 70%)",
          transform: `translate3d(${parallaxX * 0.4}px, 0px, 0px)`,
          pointerEvents: "none",
        }}
      />

      {/* 3. CINEMATIC PERIMETER VIGNETTE */}
      <AbsoluteFill
        style={{
          background: "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
