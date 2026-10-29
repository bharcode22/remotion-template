import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  Activity,
  HelpCircle,
  Radio,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * SCENE 1: HOOK (APP HANDSHAKE & COMMUNICATION SIMULATOR)
 * Naskah: "Pernah kepikiran, bagaimana cara aplikasi saling berkomunikasi?"
 * ========================================================
 * - Desain solid tanpa pop-up scale entrance
 * - Simulasi interaktif App A (Mobile Client) ⟷ App B (Cloud Backend)
 * - Jalur transmisi data neon dengan moving payload packets
 * - Gelombang radar sinyal memancar dari kedua node
 * - Status HUD dinamis yang memicu rasa penasaran penonton
 */
export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  // 1. Pulsa gelombang radar (Expanding circular waves)
  const wave1Scale = 1 + ((frame * 0.05) % 1) * 1.6;
  const wave1Opacity = interpolate((frame * 0.05) % 1, [0, 0.7, 1], [0.6, 0.2, 0]);

  const wave2Scale = 1 + (((frame + 12) * 0.05) % 1) * 1.6;
  const wave2Opacity = interpolate(((frame + 12) * 0.05) % 1, [0, 0.7, 1], [0.6, 0.2, 0]);

  // 2. Paket Data Meluncur (Bolak-Balik antara App A & App B)
  // X range: 80px (App A) ke 420px (App B) dalam SVG lebar 500px
  const packet1Progress = (frame * 0.04) % 1; // App A -> App B
  const packet1X = interpolate(packet1Progress, [0, 1], [70, 430]);

  const packet2Progress = ((frame + 15) * 0.04) % 1; // App B -> App A
  const packet2X = interpolate(packet2Progress, [0, 1], [430, 70]);

  // 3. Efek dash offset laser pada kabel data tengah
  const cableDashOffset = -(frame * 8) % 60;

  // 4. Denyut Badge Pertanyaan Pusat (?)
  const hookGlow = 0.5 + Math.sin(frame * 0.2) * 0.35;
  const hookScale = 1 + Math.sin(frame * 0.15) * 0.05;

  // 5. HUD Telemetry Phase (0-45: Handshake, 45-90: The Core Question)
  const isQuestionPhase = frame >= 42;
  const statusGlowColor = isQuestionPhase ? "#06b6d4" : "#10b981";

  // Live Ping Latency fluctuation
  const pingVal = Math.round(18 + Math.sin(frame * 0.3) * 6);

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="01"
        tag="HOOK // PERTANYAAN AWAL"
        title="BAGAIMANA APLIKASI BERKOMUNIKASI?"
        subtitle="Pernah kepikiran, bagaimana cara aplikasi saling bertukar data dan berbicara?"
        accentColor="#10b981"
        icon={HelpCircle}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: "100%",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              BAGIAN 1: SIMULATOR PERTUKARAN DATA (APP A ⟷ APP B)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              backgroundColor: "rgba(10, 15, 29, 0.85)",
              border: "1.5px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 24,
              padding: "32px 24px 26px 24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              overflow: "hidden",
            }}
          >
            {/* Top Indicator Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Activity size={16} color="#10b981" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: 1,
                  }}
                >
                  LIVE TRAFFIC MONITOR
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 12,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#34d399",
                  }}
                >
                  PING: {pingVal}ms
                </span>
              </div>
            </div>

            {/* Main Interactive Stage: Node App A + Laser Cable + Node App B */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 10px 10px 10px",
              }}
            >
              {/* NODE KIRI: APP A (Client Smartphone) */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  zIndex: 2,
                }}
              >
                {/* Radar Ring 1 */}
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${wave1Scale})`,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "2px solid #10b981",
                    opacity: wave1Opacity,
                    pointerEvents: "none",
                  }}
                />

                {/* Radar Ring 2 */}
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${wave2Scale})`,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "1.5px solid #34d399",
                    opacity: wave2Opacity,
                    pointerEvents: "none",
                  }}
                />

                {/* App A Box */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 20,
                    backgroundColor: "rgba(16, 185, 129, 0.16)",
                    border: "2px solid #10b981",
                    boxShadow: "0 0 24px rgba(16, 185, 129, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Smartphone size={32} color="#10b981" />
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      fontWeight: 900,
                      color: "#f8fafc",
                      letterSpacing: 1,
                    }}
                  >
                    APLIKASI A
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#34d399",
                    }}
                  >
                    Mobile Client
                  </div>
                </div>
              </div>

              {/* JALUR KONEKSI TENGAH (Data Beam & Moving Laser Packets) */}
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 10px",
                }}
              >
                {/* SVG Laser Cable */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 100"
                  style={{ position: "absolute", inset: 0, overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    </linearGradient>

                    <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 1. Outer Glow Sheath */}
                  <line
                    x1="40"
                    y1="50"
                    x2="460"
                    y2="50"
                    stroke="url(#beamGrad)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0.25"
                  />

                  {/* 2. Core Fiber Line */}
                  <line
                    x1="40"
                    y1="50"
                    x2="460"
                    y2="50"
                    stroke="url(#beamGrad)"
                    strokeWidth="3.5"
                    strokeDasharray="10 12"
                    strokeDashoffset={cableDashOffset}
                    strokeLinecap="round"
                    opacity="0.85"
                  />

                  {/* 3. Moving Packet 1 (App A -> App B) */}
                  <g transform={`translate(${packet1X}, 50)`} filter="url(#packetGlow)">
                    <circle r="7" fill="#34d399" />
                    <circle r="3.5" fill="#ffffff" />
                  </g>

                  {/* 4. Moving Packet 2 (App B -> App A) */}
                  <g transform={`translate(${packet2X}, 50)`} filter="url(#packetGlow)">
                    <circle r="6" fill="#38bdf8" />
                    <circle r="3" fill="#ffffff" />
                  </g>
                </svg>

                {/* Central Question Hook Badge (?) */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 5,
                    transform: `scale(${hookScale})`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(10, 15, 29, 0.95)",
                      border: `2px solid ${isQuestionPhase ? "#06b6d4" : "#10b981"}`,
                      boxShadow: `0 0 20px ${isQuestionPhase ? "rgba(6, 182, 212, " + hookGlow + ")" : "rgba(16, 185, 129, " + hookGlow + ")"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isQuestionPhase ? "#38bdf8" : "#34d399",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 24,
                      fontWeight: 950,
                    }}
                  >
                    ?
                  </div>

                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      color: isQuestionPhase ? "#38bdf8" : "#34d399",
                      letterSpacing: 1.5,
                      textShadow: "0 0 10px rgba(0,0,0,0.8)",
                    }}
                  >
                    PROTOCOL
                  </span>
                </div>
              </div>

              {/* NODE KANAN: APP B (Cloud Server) */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  zIndex: 2,
                }}
              >
                {/* Radar Ring 1 */}
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${wave2Scale})`,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "2px solid #8b5cf6",
                    opacity: wave2Opacity,
                    pointerEvents: "none",
                  }}
                />

                {/* Radar Ring 2 */}
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${wave1Scale})`,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "1.5px solid #a78bfa",
                    opacity: wave1Opacity,
                    pointerEvents: "none",
                  }}
                />

                {/* App B Box */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 20,
                    backgroundColor: "rgba(139, 92, 246, 0.16)",
                    border: "2px solid #8b5cf6",
                    boxShadow: "0 0 24px rgba(139, 92, 246, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Server size={32} color="#a78bfa" />
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      fontWeight: 900,
                      color: "#f8fafc",
                      letterSpacing: 1,
                    }}
                  >
                    APLIKASI B
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#c4b5fd",
                    }}
                  >
                    Cloud Backend
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              BAGIAN 2: STATUS HUD TELEMETRI & DILEMA HOOK
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              border: `1.5px solid ${statusGlowColor}50`,
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${statusGlowColor}20`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: `${statusGlowColor}20`,
                  border: `1px solid ${statusGlowColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isQuestionPhase ? (
                  <Zap size={20} color="#38bdf8" />
                ) : (
                  <Radio size={20} color="#10b981" />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: TECH_COLORS.textMuted,
                    letterSpacing: 1,
                  }}
                >
                  {isQuestionPhase ? "CORE DILEMMA DETECTED" : "HANDSHAKE STATUS"}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 15,
                    fontWeight: 800,
                    color: isQuestionPhase ? "#38bdf8" : "#34d399",
                  }}
                >
                  {isQuestionPhase
                    ? "BAGAIMANA JALUR PERTUKARANNYA? ⚡"
                    : "MENGIRIM & MENERIMA PAKET DATA..."}
                </span>
              </div>
            </div>

            {/* Pill Indicator */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontFamily: "monospace",
                fontSize: 12,
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              {isQuestionPhase ? "2 METODE UTAMA ➔" : "HANDSHAKE OK"}
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
