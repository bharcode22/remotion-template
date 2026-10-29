import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Disc3, Radio, Shield, Waves } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * TEMPLATE SCENE 2: CONCEPT & DUAL-NODE RADAR SUB-SCENE
 * ========================================================
 * Menggabungkan konsep visual dinamis dari Portfolio & DontTestMe:
 * - Optical punch-in zoom snap pada entrance (Frame 100)
 * - Transisi lateral Sub-Scene 2.1 (Frame 135+)
 * - Orbital Gyro Radar Scanner yang berputar dinamis
 * - Live packet waveform visualizer (equalizer batang dinamis)
 * - Konten placeholder: Lorem Ipsum profesional
 */
export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frame offset for Scene 2 (Global frames 100 - 180)
  const relFrame = Math.max(0, frame - 100);

  // 1. Optical punch-in entrance spring
  const sEntrance = spring({ frame: relFrame - 2, fps, config: { damping: 12, mass: 0.45, stiffness: 120 } });
  const zoomSnap = interpolate(sEntrance, [0, 1], [1.18, 1.0]);

  // 2. Sub-Scene 2.1 Trigger (Global Frame 135+, relFrame >= 35)
  const isSubScene = relFrame >= 35;
  const sSub = spring({ frame: relFrame - 35, fps, config: { damping: 13, mass: 0.5, stiffness: 110 } });

  // 3. Dynamic Rotation for Orbital Radar
  const radarSpin = (frame * 2.2) % 360;

  // 4. Live Telemetry Interpolations
  const throughput = Math.round(interpolate(relFrame, [10, 60], [140, 890], { extrapolateRight: "clamp" }));
  const latency = (interpolate(relFrame, [10, 60], [42, 8.4], { extrapolateRight: "clamp" })).toFixed(1);

  return (
    <div
      style={{
        transform: `scale(${sEntrance * zoomSnap})`,
        opacity: sEntrance,
        width: "100%",
      }}
    >
      <SceneContainer
        sceneNumber="02"
        tag="LOREM // CORE ARCHITECTURE"
        title="CONSECTETUR ADIPISCING ELIT"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
        accentColor="#06b6d4"
        icon={Radio}
        footerNote="SCENE 2 // TELEMETRY & ORBITAL SUB-SCENE 2.1"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Main Dual-Column Interactive Panel */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              width: "100%",
            }}
          >
            {/* Left Card: Orbital Radar Gyro Scanner */}
            <div
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.06)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
                borderRadius: 22,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 14,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#06b6d4", fontSize: 13, fontWeight: 800, letterSpacing: 1.5, fontFamily: "monospace" }}>
                <Disc3 size={18} style={{ transform: `rotate(${radarSpin}deg)` }} />
                <span>ORBITAL RADAR</span>
              </div>

              {/* Animated SVG Concentric Scanner */}
              <div style={{ position: "relative", width: 140, height: 140, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: "absolute" }}>
                  {/* Outer Dashed Ring */}
                  <circle
                    cx="70"
                    cy="70"
                    r="62"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    style={{ transformOrigin: "center", transform: `rotate(${radarSpin}deg)` }}
                  />
                  {/* Middle Ring */}
                  <circle
                    cx="70"
                    cy="70"
                    r="44"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.5)"
                    strokeWidth="1.5"
                    strokeDasharray="14 10"
                    style={{ transformOrigin: "center", transform: `rotate(-${radarSpin * 1.5}deg)` }}
                  />
                  {/* Inner Ring */}
                  <circle cx="70" cy="70" r="26" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" />
                </svg>

                {/* Pulsing Core */}
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: "#06b6d4",
                    boxShadow: "0 0 16px #06b6d4",
                    transform: `scale(${1 + Math.sin(frame * 0.3) * 0.3})`,
                  }}
                />
              </div>

              <div style={{ fontFamily: "monospace", fontSize: 14, color: TECH_COLORS.textSecondary }}>
                SWEEP ANGLE: <span style={{ color: "#06b6d4", fontWeight: 800 }}>{Math.round(radarSpin)}°</span>
              </div>
            </div>

            {/* Right Card: Dynamic Waveform Signal Spectrum */}
            <div
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.06)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
                borderRadius: 22,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#06b6d4", fontSize: 13, fontWeight: 800, letterSpacing: 1.5, fontFamily: "monospace" }}>
                <Waves size={18} />
                <span>SIGNAL SPECTRUM</span>
              </div>

              {/* 8 Animated Equalizer Waveform Bars */}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 8, height: 110, width: "100%", paddingBottom: 10 }}>
                {[0.2, 0.5, 0.8, 1.0, 0.7, 0.9, 0.4, 0.6].map((mult, idx) => {
                  const barHeight = Math.max(14, 20 + Math.sin(frame * 0.35 + idx * 0.8) * 45 * mult + 35 * mult);
                  return (
                    <div
                      key={idx}
                      style={{
                        width: 12,
                        height: barHeight,
                        borderRadius: 6,
                        backgroundColor: idx % 2 === 0 ? "#06b6d4" : "#38bdf8",
                        boxShadow: `0 0 10px rgba(6, 182, 212, 0.4)`,
                      }}
                    />
                  );
                })}
              </div>

              <div style={{ fontFamily: "monospace", fontSize: 14, color: TECH_COLORS.textSecondary }}>
                CARRIER: <span style={{ color: "#06b6d4", fontWeight: 800 }}>{(5.2 + Math.sin(frame * 0.1) * 0.3).toFixed(2)} GHz</span>
              </div>
            </div>
          </div>

          {/* Sub-Scene 2.1 Dynamic Live Telemetry Drawer (Slide-up on Frame 135+) */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.95)",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              borderRadius: 20,
              padding: "20px 24px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              textAlign: "center",
              transform: isSubScene ? `scale(${interpolate(sSub, [0, 1], [0.96, 1])})` : "none",
            }}
          >
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: TECH_COLORS.textMuted }}>
                THROUGHPUT
              </div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 24, fontWeight: 900, color: "#06b6d4", marginTop: 4 }}>
                {throughput} MB/s
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: TECH_COLORS.textMuted }}>
                LATENCY
              </div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 24, fontWeight: 900, color: TECH_COLORS.textPrimary, marginTop: 4 }}>
                {latency} ms
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: TECH_COLORS.textMuted }}>
                ENCRYPTION
              </div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 22, fontWeight: 900, color: "#10b981", marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Shield size={18} />
                <span>ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};

export const Scene02 = Scene2;
