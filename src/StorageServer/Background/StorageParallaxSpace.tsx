import React from "react";
import { useCurrentFrame } from "remotion";
import { STORAGE_COLORS } from "../constants";

export interface StorageParallaxSpaceProps {
  cameraX: number;
}

export const StorageParallaxSpace: React.FC<StorageParallaxSpaceProps> = ({
  cameraX,
}) => {
  const frame = useCurrentFrame();

  // Multi-tier parallax offsets
  const deepStarsOffset = cameraX * 0.08;
  const midGridOffset = cameraX * 0.25;
  const foregroundGlowOffset = cameraX * 0.45;

  const verticalDrift = (frame * 0.35) % 48;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1080,
        height: 1920,
        backgroundColor: STORAGE_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Deep Celestial Stars / Data Dust (Layer 1 - slowest) */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: -1200 + deepStarsOffset,
          width: 7000,
          height: 2320,
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 150px 220px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 380px 520px, rgba(168, 85, 247, 0.45), transparent),
            radial-gradient(2px 2px at 720px 840px, rgba(16, 185, 129, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 1100px 320px, rgba(56, 189, 248, 0.4), transparent),
            radial-gradient(2px 2px at 1550px 720px, rgba(245, 158, 11, 0.45), transparent),
            radial-gradient(1.5px 1.5px at 1950px 420px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(2px 2px at 2400px 880px, rgba(168, 85, 247, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 2900px 240px, rgba(16, 185, 129, 0.45), transparent),
            radial-gradient(2px 2px at 3450px 650px, rgba(56, 189, 248, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 3950px 820px, rgba(245, 158, 11, 0.5), transparent),
            radial-gradient(2px 2px at 4500px 400px, rgba(168, 85, 247, 0.5), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "1600px 1000px",
          opacity: 0.65,
        }}
      />

      {/* 2. Parallax Infinite Cyber Grid (Layer 2 - mid speed) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: -1500 + midGridOffset,
          width: 7500,
          height: 1920,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${verticalDrift}px`,
          opacity: 0.7,
        }}
      />

      {/* 3. Multi-Colored Station Ambient Auras (Layer 3 - fast speed) */}
      {/* Station 1: Emerald/Cyan Aura (Local Storage) */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 100 + foregroundGlowOffset,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)",
          filter: "blur(120px)",
        }}
      />
      {/* Station 2: Sky Cyan Aura (Object Storage) */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 1500 + foregroundGlowOffset,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 75%)",
          filter: "blur(120px)",
        }}
      />
      {/* Station 3: Emerald/Amber Aura (Local Storage Characteristics) */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 2900 + foregroundGlowOffset,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 75%)",
          filter: "blur(120px)",
        }}
      />
      {/* Station 4: Purple/Cyan Grand Finale Aura (Object Storage Advantages) */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 4300 + foregroundGlowOffset,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 75%)",
          filter: "blur(120px)",
        }}
      />

      {/* 4. Vignette Frame Borders */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(3, 7, 18, 0.88) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

