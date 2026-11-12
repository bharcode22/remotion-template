import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Atom, Zap } from "lucide-react";
import { MAIN_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";
import { KineticText } from "../Components/KineticText";

export const Scene4_ElectronHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance zoom and flare
  const heroSpring = spring({
    frame: frame - 242,
    fps,
    config: { damping: 11, stiffness: 110, mass: 0.8 },
  });

  const heroScale = interpolate(heroSpring, [0, 1], [0.6, 1]);
  const heroOpacity = interpolate(heroSpring, [0, 0.2, 1], [0, 1, 1]);

  // Spin speed
  const spin1 = (frame - 240) * 3.2;
  const spin2 = (frame - 240) * -2.6;
  const spin3 = (frame - 240) * 3.8;

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1400,
        transformStyle: "preserve-3d",
        fontFamily: MAIN_FONT_FAMILY,
      }}
    >
      {/* 1. KINETIC HERO TITLE */}
      <div
        style={{
          position: "absolute",
          top: 320,
          width: 900,
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 999,
            background: STUDIO_GLASS.pillBg,
            border: STUDIO_GLASS.borderAccentBlue,
            backdropFilter: STUDIO_GLASS.backdropFilterLight,
            boxShadow: STUDIO_GLASS.glassShadow,
            color: STUDIO_THEME.appleBlue,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          <Zap size={20} />
          <span>The Solution</span>
        </div>

        <KineticText
          text="GUNAKAN ELECTRON AJA."
          fontSize={80}
          fontWeight={950}
          color={STUDIO_THEME.textPrimary}
          highlightWords={["ELECTRON"]}
          highlightColor={STUDIO_THEME.appleBlue}
          delay={245}
          staggerFrames={3}
          glow={false}
        />
      </div>

      {/* 2. 3D PRECISION GYROSCOPE ATOM (Dark Mode Titanium) */}
      <div
        style={{
          position: "absolute",
          top: 660,
          width: 600,
          height: 600,
          transform: `scale(${heroScale})`,
          opacity: heroOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soft Ambient Ground Occlusion Shadow */}
        <div
          style={{
            position: "absolute",
            bottom: -50,
            width: 480,
            height: 120,
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* 3D Precision Ring 1 (Pacific Blue) */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "3px solid #2997FF",
            transform: `rotateX(70deg) rotateZ(${spin1}deg)`,
          }}
        >
          {/* Orbiting Bead 1 */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: "50%",
              marginLeft: -12,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          />
        </div>

        {/* 3D Precision Ring 2 (Space Gray Titanium) */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "3px solid #636366",
            transform: `rotateY(70deg) rotateZ(${spin2}deg)`,
          }}
        >
          {/* Orbiting Bead 2 */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: "50%",
              marginLeft: -12,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#2997FF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          />
        </div>

        {/* 3D Precision Ring 3 (Deep Cobalt) */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "3px solid #BF5AF2",
            transform: `rotateX(-45deg) rotateY(45deg) rotateZ(${spin3}deg)`,
          }}
        >
          {/* Orbiting Bead 3 */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: "50%",
              marginLeft: -12,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#BF5AF2",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          />
        </div>

        {/* Central Quantum Nucleus (Pacific Blue Ceramic Sphere) */}
        <div
          style={{
            position: "relative",
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2997FF 0%, #0064D2 100%)",
            boxShadow: "0 25px 60px -10px rgba(41, 151, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
          }}
        >
          <Atom size={75} />
        </div>
      </div>

      {/* 3. PROOF BADGE BELOW (Frosted Glass Pill) */}
      <div
        style={{
          position: "absolute",
          top: 1360,
          padding: "16px 36px",
          borderRadius: 999,
          background: STUDIO_GLASS.glassGradientCard,
          border: STUDIO_GLASS.borderElevated,
          backdropFilter: STUDIO_GLASS.backdropFilterLight,
          boxShadow: STUDIO_GLASS.glassShadow,
          color: "#86868B",
          fontSize: 20,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span>Dipakai oleh:</span>
        <span style={{ color: STUDIO_THEME.textPrimary, fontWeight: 900 }}>VS Code • Slack • Discord</span>
      </div>
    </div>
  );
};
