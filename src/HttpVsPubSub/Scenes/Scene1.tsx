import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  Activity,
  Database,
  HelpCircle,
  Loader2,
  Radio,
  Server,
  WifiOff,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * SCENE 1: HOOK (CLIENT SMARTPHONE ➔ 3 GARIS LURUS KE PROTOKOL)
 * Naskah: "Pernah kepikiran, bagaimana cara aplikasi saling berkomunikasi?"
 * ========================================================
 * - Layout terbuka tanpa card induk (hideParentCard={true})
 * - Smartphone interaktif dengan dynamic island, loader berputar, dan tanda tanya (?) bingung
 * - 3 GARIS LURUS HORIZONTAL SEJAJAR (PARALLEL STRAIGHT LINES) dari Client ke Protokol:
 *   1. Garis Lurus Atas   ➔ 1. Protokol HTTP (Cyan #06b6d4)
 *   2. Garis Lurus Tengah ➔ 2. Database / TCP (Emerald #10b981)
 *   3. Garis Lurus Bawah  ➔ 3. Model Pub / Sub (Pink #ec4899)
 * - Butiran paket data meluncur di sepanjang ketiga garis lurus
 * - Port konektor di sisi smartphone dan sisi protokol
 */
export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. ANIMASI SPINNER & DENYUT TANDA TANYA BINGUNG (?)
  // ─────────────────────────────────────────────────────────────────────────────
  const spinnerRotation = (frame * 6) % 360;
  const questionPulse = 1 + Math.sin(frame * 0.25) * 0.08;
  const questionGlow = 0.5 + Math.sin(frame * 0.25) * 0.35;

  const isTargetDetected = frame >= 50;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. TIGA GARIS LURUS PARALEL (GROWTH & PACKET GLIDE)
  // ─────────────────────────────────────────────────────────────────────────────
  // Pertumbuhan 3 garis lurus dari Client (frame 10 s/d 48)
  const lineGrowProgress = interpolate(frame, [10, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const startX = 206; // Sisi kanan smartphone
  const endX = 526;   // Sisi kiri card protokol
  const totalLength = endX - startX; // 320px
  const lineDashoffset = interpolate(lineGrowProgress, [0, 1], [totalLength, 0]);

  // Posisi Y untuk ketiga garis lurus (Persis sejajar dengan 3 card protokol)
  const line1Y = 39;  // Garis 1: Atas (HTTP / REST)
  const line2Y = 140; // Garis 2: Tengah (Database / TCP)
  const line3Y = 241; // Garis 3: Bawah (Pub / Sub)

  // Paket data meluncur di sepanjang 3 garis lurus (dari Client ke Protokol)
  const packetCycle1 = (frame * 0.035) % 1;
  const p1X = interpolate(packetCycle1, [0, 1], [startX, endX]);

  const packetCycle2 = ((frame + 12) * 0.04) % 1;
  const p2X = interpolate(packetCycle2, [0, 1], [startX, endX]);

  const packetCycle3 = ((frame + 6) * 0.038) % 1;
  const p3X = interpolate(packetCycle3, [0, 1], [startX, endX]);

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="01"
        tag="HOOK // PERTANYAAN AWAL"
        title="BAGAIMANA APLIKASI BERKOMUNIKASI?"
        subtitle="Pernah kepikiran, bagaimana cara aplikasi saling bertukar data dan berbicara?"
        accentColor="#10b981"
        icon={HelpCircle}
        hideParentCard={true}
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
              MAIN STAGE: SMARTPHONE ⟷ 3 GARIS LURUS ⟷ PROTOKOL TARGET
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.94)",
              border: `2px solid ${isTargetDetected ? "#10b981" : "rgba(16, 185, 129, 0.4)"}`,
              borderRadius: 24,
              padding: "24px 24px",
              boxShadow: isTargetDetected
                ? "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.3)"
                : "0 20px 50px rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Header Stage Bar */}
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
                  3 JALUR KOMUNIKASI CLIENT ➔ PROTOKOL
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 12,
                  backgroundColor: isTargetDetected ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.12)",
                  border: `1px solid ${isTargetDetected ? "#10b981" : "rgba(239, 68, 68, 0.35)"}`,
                }}
              >
                {isTargetDetected ? (
                  <Zap size={14} color="#34d399" />
                ) : (
                  <WifiOff size={14} color="#ef4444" />
                )}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: isTargetDetected ? "#34d399" : "#f87171",
                  }}
                >
                  {isTargetDetected ? "3 PROTOKOL TERHUBUNG" : "MENCARI JALUR KONEKSI..."}
                </span>
              </div>
            </div>

            {/* Stage Body: Fixed Width 824px, Height 280px */}
            <div
              style={{
                position: "relative",
                width: 824,
                height: 280,
                margin: "0 auto",
              }}
            >
              {/* 📱 1. SMARTPHONE CLIENT DENGAN LOADING & (?) BINGUNG */}
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  top: 5,
                  width: 190,
                  height: 270,
                  borderRadius: 24,
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  border: `2px solid ${isTargetDetected ? "#10b981" : "rgba(16, 185, 129, 0.6)"}`,
                  boxShadow: isTargetDetected
                    ? "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(16, 185, 129, 0.25)"
                    : "0 10px 30px rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 12px",
                  boxSizing: "border-box",
                  zIndex: 5,
                }}
              >
                {/* Dynamic Island */}
                <div
                  style={{
                    width: 48,
                    height: 8,
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                  }}
                />

                {/* Central Confused Question Area */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {/* Rotating Spinner Ring */}
                  <div
                    style={{
                      position: "relative",
                      width: 68,
                      height: 68,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        transform: `rotate(${spinnerRotation}deg)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Loader2 size={64} color="#10b981" opacity={0.7} />
                    </div>

                    {/* Glowing Confused (?) Icon */}
                    <div
                      style={{
                        transform: `scale(${questionPulse})`,
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 32,
                        fontWeight: 950,
                        color: isTargetDetected ? "#34d399" : "#fbbf24",
                        textShadow: `0 0 16px ${isTargetDetected ? "rgba(52, 211, 153, " + questionGlow + ")" : "rgba(251, 191, 36, " + questionGlow + ")"}`,
                      }}
                    >
                      ?
                    </div>
                  </div>

                  {/* Status Text on Phone Screen */}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: 11,
                        fontWeight: 900,
                        color: isTargetDetected ? "#34d399" : "#fbbf24",
                        letterSpacing: 0.5,
                      }}
                    >
                      {isTargetDetected ? "3 PROTOCOLS" : "SEARCHING..."}
                    </div>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: 9,
                        color: "#94a3b8",
                        marginTop: 2,
                      }}
                    >
                      Client Application
                    </div>
                  </div>
                </div>

                {/* Mini Port Indicators on Phone Screen */}
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <span style={{ fontSize: 8, fontFamily: "monospace", color: "#38bdf8", fontWeight: 800 }}>HTTP</span>
                  <span style={{ fontSize: 8, fontFamily: "monospace", color: "#34d399", fontWeight: 800 }}>TCP</span>
                  <span style={{ fontSize: 8, fontFamily: "monospace", color: "#f472b6", fontWeight: 800 }}>PUB</span>
                </div>

                {/* Home Indicator */}
                <div
                  style={{
                    width: 40,
                    height: 3,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>

              {/* ⚡ 2. TIGA GARIS LURUS HORIZONTAL (SVG) DARI CLIENT KE PROTOKOL */}
              <svg
                width="824"
                height="280"
                viewBox="0 0 824 280"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  pointerEvents: "none",
                  zIndex: 3,
                }}
              >
                <defs>
                  <filter id="lineGlow" x="-20%" y="-50%" width="140%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* ═══════════════════════════════════════════════════════════
                    GARIS 1: LURUS HORIZONTAL KE HTTP (Cyan) — Y = 39
                ════════════════════════════════════════════════════════════ */}
                {/* Connector Pin di Smartphone */}
                <rect x={startX - 6} y={line1Y - 8} width="6" height="16" rx="3" fill="#06b6d4" opacity={0.9} />
                <circle cx={startX} cy={line1Y} r="4" fill="#38bdf8" />

                {/* Glow Background Line 1 */}
                <line
                  x1={startX}
                  y1={line1Y}
                  x2={endX}
                  y2={line1Y}
                  stroke="#06b6d4"
                  strokeWidth="8"
                  opacity={isTargetDetected ? 0.35 : 0.15}
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                />
                {/* Core Solid Straight Line 1 */}
                <line
                  x1={startX}
                  y1={line1Y}
                  x2={endX}
                  y2={line1Y}
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#lineGlow)"
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                  opacity={lineGrowProgress > 0.05 ? 1 : 0}
                />
                {/* Moving Packet 1 */}
                {lineGrowProgress > 0.6 && (
                  <>
                    <line
                      x1={Math.max(startX, p1X - 28)}
                      y1={line1Y}
                      x2={p1X}
                      y2={line1Y}
                      stroke="#38bdf8"
                      strokeWidth="3.5"
                      opacity="0.8"
                      strokeLinecap="round"
                    />
                    <circle cx={p1X} cy={line1Y} r="5" fill="#ffffff" filter="url(#lineGlow)" />
                    <circle cx={p1X} cy={line1Y} r="3" fill="#38bdf8" />
                  </>
                )}

                {/* Receiver Pin di Protokol HTTP */}
                <rect x={endX} y={line1Y - 8} width="6" height="16" rx="3" fill="#06b6d4" opacity={0.9} />
                <circle cx={endX} cy={line1Y} r="4" fill="#38bdf8" />

                {/* ═══════════════════════════════════════════════════════════
                    GARIS 2: LURUS HORIZONTAL KE DATABASE/TCP (Emerald) — Y = 140
                ════════════════════════════════════════════════════════════ */}
                {/* Connector Pin di Smartphone */}
                <rect x={startX - 6} y={line2Y - 8} width="6" height="16" rx="3" fill="#10b981" opacity={0.9} />
                <circle cx={startX} cy={line2Y} r="4" fill="#34d399" />

                {/* Glow Background Line 2 */}
                <line
                  x1={startX}
                  y1={line2Y}
                  x2={endX}
                  y2={line2Y}
                  stroke="#10b981"
                  strokeWidth="8"
                  opacity={isTargetDetected ? 0.35 : 0.15}
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                />
                {/* Core Solid Straight Line 2 */}
                <line
                  x1={startX}
                  y1={line2Y}
                  x2={endX}
                  y2={line2Y}
                  stroke="#34d399"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#lineGlow)"
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                  opacity={lineGrowProgress > 0.05 ? 1 : 0}
                />
                {/* Moving Packet 2 */}
                {lineGrowProgress > 0.6 && (
                  <>
                    <line
                      x1={Math.max(startX, p2X - 28)}
                      y1={line2Y}
                      x2={p2X}
                      y2={line2Y}
                      stroke="#34d399"
                      strokeWidth="3.5"
                      opacity="0.8"
                      strokeLinecap="round"
                    />
                    <circle cx={p2X} cy={line2Y} r="5" fill="#ffffff" filter="url(#lineGlow)" />
                    <circle cx={p2X} cy={line2Y} r="3" fill="#34d399" />
                  </>
                )}

                {/* Receiver Pin di Protokol Database */}
                <rect x={endX} y={line2Y - 8} width="6" height="16" rx="3" fill="#10b981" opacity={0.9} />
                <circle cx={endX} cy={line2Y} r="4" fill="#34d399" />

                {/* ═══════════════════════════════════════════════════════════
                    GARIS 3: LURUS HORIZONTAL KE PUB/SUB (Pink) — Y = 241
                ════════════════════════════════════════════════════════════ */}
                {/* Connector Pin di Smartphone */}
                <rect x={startX - 6} y={line3Y - 8} width="6" height="16" rx="3" fill="#ec4899" opacity={0.9} />
                <circle cx={startX} cy={line3Y} r="4" fill="#f472b6" />

                {/* Glow Background Line 3 */}
                <line
                  x1={startX}
                  y1={line3Y}
                  x2={endX}
                  y2={line3Y}
                  stroke="#ec4899"
                  strokeWidth="8"
                  opacity={isTargetDetected ? 0.35 : 0.15}
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                />
                {/* Core Solid Straight Line 3 */}
                <line
                  x1={startX}
                  y1={line3Y}
                  x2={endX}
                  y2={line3Y}
                  stroke="#f472b6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#lineGlow)"
                  strokeDasharray={totalLength}
                  strokeDashoffset={lineDashoffset}
                  opacity={lineGrowProgress > 0.05 ? 1 : 0}
                />
                {/* Moving Packet 3 */}
                {lineGrowProgress > 0.6 && (
                  <>
                    <line
                      x1={Math.max(startX, p3X - 28)}
                      y1={line3Y}
                      x2={p3X}
                      y2={line3Y}
                      stroke="#f472b6"
                      strokeWidth="3.5"
                      opacity="0.8"
                      strokeLinecap="round"
                    />
                    <circle cx={p3X} cy={line3Y} r="5" fill="#ffffff" filter="url(#lineGlow)" />
                    <circle cx={p3X} cy={line3Y} r="3" fill="#f472b6" />
                  </>
                )}

                {/* Receiver Pin di Protokol Pub/Sub */}
                <rect x={endX} y={line3Y - 8} width="6" height="16" rx="3" fill="#ec4899" opacity={0.9} />
                <circle cx={endX} cy={line3Y} r="4" fill="#f472b6" />
              </svg>

              {/* 🎯 3. TIGA TARGET PROTOKOL DI SISI KANAN (PERSIS SEJAJAR DENGAN 3 GARIS LURUS) */}
              <div
                style={{
                  position: "absolute",
                  left: endX,
                  top: 5,
                  width: 298,
                  height: 270,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  zIndex: 5,
                }}
              >
                {/* Target 1: HTTP / REST Server (Atas) — Center Y = 39 */}
                <div
                  style={{
                    height: 68,
                    backgroundColor: "rgba(15, 23, 42, 0.94)",
                    border: `1.5px solid ${isTargetDetected ? "#06b6d4" : "rgba(255, 255, 255, 0.12)"}`,
                    boxShadow: isTargetDetected ? "0 0 24px rgba(6, 182, 212, 0.4)" : "none",
                    borderRadius: 14,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        backgroundColor: "rgba(6, 182, 212, 0.2)",
                        border: "1px solid #06b6d4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Server size={18} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 900, color: "#f8fafc" }}>
                        1. PROTOKOL HTTP
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#38bdf8", fontWeight: 700 }}>
                        Request & Response
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      fontWeight: 800,
                      color: "#38bdf8",
                      backgroundColor: "rgba(6, 182, 212, 0.15)",
                      padding: "3px 7px",
                      borderRadius: 6,
                      border: "1px solid rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    1 KE 1
                  </div>
                </div>

                {/* Target 2: RPC / Database (Tengah) — Center Y = 140 */}
                <div
                  style={{
                    height: 68,
                    backgroundColor: "rgba(15, 23, 42, 0.94)",
                    border: `1.5px solid ${isTargetDetected ? "#10b981" : "rgba(255, 255, 255, 0.12)"}`,
                    boxShadow: isTargetDetected ? "0 0 24px rgba(16, 185, 129, 0.4)" : "none",
                    borderRadius: 14,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid #10b981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Database size={18} color="#34d399" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 900, color: "#f8fafc" }}>
                        2. DATABASE / TCP
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#34d399", fontWeight: 700 }}>
                        Direct Data Stream
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      fontWeight: 800,
                      color: "#34d399",
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      padding: "3px 7px",
                      borderRadius: 6,
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    STREAM
                  </div>
                </div>

                {/* Target 3: Pub/Sub Event Broker (Bawah) — Center Y = 241 */}
                <div
                  style={{
                    height: 68,
                    backgroundColor: "rgba(15, 23, 42, 0.94)",
                    border: `1.5px solid ${isTargetDetected ? "#ec4899" : "rgba(255, 255, 255, 0.12)"}`,
                    boxShadow: isTargetDetected ? "0 0 24px rgba(236, 72, 153, 0.4)" : "none",
                    borderRadius: 14,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        backgroundColor: "rgba(236, 72, 153, 0.2)",
                        border: "1px solid #ec4899",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Radio size={18} color="#f472b6" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 900, color: "#f8fafc" }}>
                        3. MODEL PUB / SUB
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#f472b6", fontWeight: 700 }}>
                        Event-Driven Topic
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      fontWeight: 800,
                      color: "#f472b6",
                      backgroundColor: "rgba(236, 72, 153, 0.15)",
                      padding: "3px 7px",
                      borderRadius: 6,
                      border: "1px solid rgba(236, 72, 153, 0.3)",
                    }}
                  >
                    1 KE BANYAK
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER (RETENTION HOOK DILEMMA)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: `1.5px solid ${isTargetDetected ? "#10b98180" : "rgba(251, 191, 36, 0.4)"}`,
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: isTargetDetected ? "rgba(16, 185, 129, 0.2)" : "rgba(251, 191, 36, 0.15)",
                  border: `1px solid ${isTargetDetected ? "#10b981" : "#fbbf24"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isTargetDetected ? (
                  <Zap size={20} color="#34d399" />
                ) : (
                  <HelpCircle size={20} color="#fbbf24" />
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
                  {isTargetDetected ? "PROTOCOLS DISCOVERED" : "COMMUNICATION DILEMMA"}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 15,
                    fontWeight: 800,
                    color: isTargetDetected ? "#34d399" : "#fbbf24",
                  }}
                >
                  {isTargetDetected
                    ? "➔ DUA CARA PALING UMUM: HTTP & PUB/SUB!"
                    : "BAGAIMANA CARA APLIKASI BICARA KE PROTOKOL? ❓"}
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
              {isTargetDetected ? "2 METODE UTAMA ➔" : "3 PROTOKOL ➔"}
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
