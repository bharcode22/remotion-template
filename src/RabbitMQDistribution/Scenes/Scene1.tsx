import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBolt,
  FaBroadcastTower,
  FaCheckCircle,
  FaDesktop,
  FaFileVideo,
  FaFilm,
  FaHdd,
  FaMusic,
  FaNetworkWired,
  FaServer,
  FaWifi,
} from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

interface EdgeDevice {
  id: string;
  host: string;
  distro: string;
  ip: string;
  basePing: number;
}

// 16 primary Debian edge PCs displayed with full telemetry
const EDGE_DEVICES: EdgeDevice[] = [
  { id: "PC-01", host: "pos-main-01", distro: "Debian 12", ip: "192.168.1.101", basePing: 2 },
  { id: "PC-02", host: "pos-main-02", distro: "Debian 12", ip: "192.168.1.102", basePing: 3 },
  { id: "PC-03", host: "kiosk-mall-01", distro: "Debian 12", ip: "192.168.1.103", basePing: 4 },
  { id: "PC-04", host: "kiosk-mall-02", distro: "Debian 12", ip: "192.168.1.104", basePing: 3 },
  { id: "PC-05", host: "signage-hall-1", distro: "Debian 12", ip: "192.168.1.105", basePing: 5 },
  { id: "PC-06", host: "signage-hall-2", distro: "Debian 12", ip: "192.168.1.106", basePing: 4 },
  { id: "PC-07", host: "display-lobby-a", distro: "Debian 12", ip: "192.168.1.107", basePing: 2 },
  { id: "PC-08", host: "display-lobby-b", distro: "Debian 12", ip: "192.168.1.108", basePing: 3 },
  { id: "PC-09", host: "screen-totem-01", distro: "Debian 12", ip: "192.168.1.109", basePing: 4 },
  { id: "PC-10", host: "screen-totem-02", distro: "Debian 12", ip: "192.168.1.110", basePing: 3 },
  { id: "PC-11", host: "iot-controller-1", distro: "Debian 12", ip: "192.168.1.111", basePing: 5 },
  { id: "PC-12", host: "iot-controller-2", distro: "Debian 12", ip: "192.168.1.112", basePing: 4 },
  { id: "PC-13", host: "mediabox-01", distro: "Debian 12", ip: "192.168.1.113", basePing: 2 },
  { id: "PC-14", host: "mediabox-02", distro: "Debian 12", ip: "192.168.1.114", basePing: 3 },
  { id: "PC-15", host: "billboard-ext-a", distro: "Debian 12", ip: "192.168.1.115", basePing: 6 },
  { id: "PC-16", host: "billboard-ext-b", distro: "Debian 12", ip: "192.168.1.116", basePing: 5 },
];

// 38 extended Linux nodes in cluster racks (totaling 54 devices)
const EXTENDED_NODES = Array.from({ length: 38 }, (_, i) => ({
  id: `PC-${String(i + 17).padStart(2, "0")}`,
}));

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPOKEN TIMELINES (Frames 0 - 165)
  // Line 1: "Bayangkan kamu harus mendistribusikan file multimedia ke puluhan perangkat,"
  // - F0 - F30: "Bayangkan"
  // - F30 - F55: "kamu harus"
  // - F55 - F95: "mendistribusikan" (Reveal Payload Central Node)
  // - F95 - F118: "file multimedia" (Reveal Video/Audio bundle tags)
  // - F118 - F165: "ke puluhan perangkat," (Expanding Linux PC Fleet Matrix)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F2 - F20)
  const spBadge = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F10 - F35)
  const spHeadline = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Central Payload Hub Spring (F55 - F85)
  const spPayload = spring({
    frame: Math.max(0, frame - 55),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 4. Connecting Conduits Spring (F105 - F125)
  const spConduits = spring({
    frame: Math.max(0, frame - 105),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 5. Multi-Device Network Grid Spring (F116 - F145)
  const spGrid = spring({
    frame: Math.max(0, frame - 116),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 120 },
  });

  // Active States
  const isPayloadActive = frame >= 55;
  const isGridActive = frame >= 116;

  // Counter: Puluhan Perangkat (0 -> 54 devices)
  const deviceCount = Math.floor(
    interpolate(frame, [118, 150], [0, 54], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  // Network pulse waves
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  // Scanner laser line across the device cluster (F120 - F158)
  const scanlineY = interpolate(frame, [120, 158], [-10, 110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContainer accentColor={RABBITMQ_COLORS.rabbitOrange}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_SANS,
        }}
      >
        {/* ═════════════════════════════════════════════════════════════════
            1. TOP CATEGORY BADGE & HEADLINE
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -25}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(35, 20, 10, 0.94)",
            border: "1.5px solid rgba(249, 115, 22, 0.65)",
            boxShadow: "0 0 25px rgba(249, 115, 22, 0.35)",
            marginBottom: 16,
          }}
        >
          <FaBroadcastTower size={15} color={RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: RABBITMQ_COLORS.rabbitOrange,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            REAL-WORLD CHALLENGE // ARSITEKTUR IOT & EDGE
          </span>
        </div>

        {/* Headline: "Bayangkan kamu harus mendistribusikan file multimedia ke puluhan perangkat," */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Bayangkan kamu harus
          </div>
          <h1
            style={{
              fontSize: 47,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.22,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(249, 115, 22, 0.45))",
              }}
            >
              Mendistribusikan File Multimedia
            </span>
            <br />
            <span
              style={{
                color: "#f8fafc",
              }}
            >
              ke{" "}
              <span
                style={{
                  color: RABBITMQ_COLORS.cloudCyan,
                  textShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                }}
              >
                Puluhan Perangkat
              </span>
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. CENTRAL VISUAL: MULTIMEDIA PAYLOAD BUNDLE (Width: 940px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spPayload})`,
            opacity: isPayloadActive ? Math.min(1, spPayload) : 0,
            width: 940,
            borderRadius: 22,
            backgroundColor: "rgba(15, 23, 42, 0.94)",
            border: "2px solid rgba(249, 115, 22, 0.6)",
            boxShadow:
              "0 18px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(249, 115, 22, 0.25)",
            padding: "18px 26px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* File Icon & Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 15,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                border: "1.5px solid rgba(249, 115, 22, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
            >
              <FaFileVideo size={26} color={RABBITMQ_COLORS.rabbitOrange} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontSize: 19,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  payload_bundle.tar.gz
                </span>
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 6,
                    backgroundColor: "rgba(249, 115, 22, 0.25)",
                    color: "#fbbf24",
                    fontSize: 10.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                  }}
                >
                  1.25 GB
                </span>
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FaFilm size={11} color="#38bdf8" /> 4K Video
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FaMusic size={11} color="#a855f7" /> Spatial Audio
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FaHdd size={11} color="#22c55e" /> App Assets
                </span>
              </div>
            </div>
          </div>

          {/* Broadcast Dispatch Status */}
          <div
            style={{
              padding: "7px 16px",
              borderRadius: 12,
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "1.2px solid rgba(56, 189, 248, 0.45)",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontFamily: FONT_MONO,
                color: "#38bdf8",
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              BROADCAST STREAMING
            </div>
            <div
              style={{
                fontSize: 16.5,
                fontWeight: 900,
                color: "#f8fafc",
                fontFamily: FONT_MONO,
                display: "flex",
                alignItems: "center",
                gap: 6,
                justifyContent: "flex-end",
              }}
            >
              <FaBolt size={13} color="#fbbf24" />
              <span>MASS DISPATCH</span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. ANIMATED CONDUITS / DATA FIBER BEAMS (Payload -> Cluster)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 900,
            height: 38,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
            opacity: spConduits,
            transform: `scaleY(${spConduits})`,
            zIndex: 5,
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((conduitIndex) => {
            const packetProgress =
              ((frame * 4.5 + conduitIndex * 15) % 100) / 100;
            return (
              <div
                key={conduitIndex}
                style={{
                  width: 2,
                  height: "100%",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  position: "relative",
                  boxShadow: "0 0 8px rgba(56, 189, 248, 0.15)",
                }}
              >
                {/* Moving Data Packet */}
                <div
                  style={{
                    position: "absolute",
                    top: `${packetProgress * 100}%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 6,
                    height: 10,
                    borderRadius: 4,
                    backgroundColor:
                      conduitIndex % 2 === 0 ? "#f97316" : "#22c55e",
                    boxShadow: `0 0 10px ${
                      conduitIndex % 2 === 0 ? "#f97316" : "#22c55e"
                    }`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. MULTI-DEVICE TOPOLOGY MATRIX (PULUHAN PERANGKAT LINUX)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spGrid})`,
            opacity: isGridActive ? Math.min(1, spGrid) : 0,
            width: 940,
            borderRadius: 24,
            backgroundColor: "rgba(6, 12, 24, 0.96)",
            border: "2px solid rgba(34, 197, 94, 0.55)",
            boxShadow:
              "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 40px rgba(34, 197, 94, 0.25)",
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginBottom: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Radar Scanline Beam sweeping across device fleet */}
          {frame >= 120 && frame <= 162 && (
            <div
              style={{
                position: "absolute",
                top: `${scanlineY}%`,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: "rgba(34, 197, 94, 0.8)",
                boxShadow:
                  "0 0 25px 8px rgba(34, 197, 94, 0.5), 0 0 50px 15px rgba(56, 189, 248, 0.3)",
                pointerEvents: "none",
                zIndex: 20,
              }}
            />
          )}

          {/* Header Bar: Fleet Status & Live Rolling Counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "rgba(34, 197, 94, 0.18)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiLinux size={17} color="#22c55e" />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13.5,
                      fontWeight: 800,
                      fontFamily: FONT_MONO,
                      color: "#f8fafc",
                      letterSpacing: 1,
                    }}
                  >
                    EDGE FLEET TOPOLOGY // LINUX PC HARDWARE
                  </span>
                  <FaNetworkWired size={12} color="#38bdf8" />
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: "#64748b",
                    fontFamily: FONT_MONO,
                  }}
                >
                  LOCAL DISTRIBUTED CLIENT APPLICATION
                </div>
              </div>
            </div>

            {/* Live Counter Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(34, 197, 94, 0.16)",
                border: "1.5px solid #22c55e",
                boxShadow: "0 0 22px rgba(34, 197, 94, 0.35)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 10px #22c55e",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: "#22c55e",
                  letterSpacing: 0.5,
                }}
              >
                {deviceCount >= 54
                  ? "54+ DEVICES ONLINE"
                  : `${deviceCount} DEVICES DETECTED`}
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              4A. 16 HIGH-FIDELITY LINUX PC CARDS (4x4 DENSE MATRIX)
             ═════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
            }}
          >
            {EDGE_DEVICES.map((node, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              const nodeStaggerStart = 118 + row * 4 + col * 1.5;
              const isNodeActive = frame >= nodeStaggerStart;

              // Node Entrance Spring
              const spNode = spring({
                frame: Math.max(0, frame - nodeStaggerStart),
                fps,
                config: { damping: 13, stiffness: 130, mass: 0.75 },
              });

              // Receiving Progress Bar Animation
              const rxProgress = interpolate(
                frame,
                [nodeStaggerStart + 4, nodeStaggerStart + 24],
                [0, 100],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.quad),
                }
              );
              const isSynced = rxProgress >= 100;

              // Animated RX/TX Data LED
              const isDataLedBlink =
                isNodeActive && !isSynced
                  ? Math.sin((frame + index * 4) * 0.9) > 0
                  : false;

              // Subtle dynamic ping fluctuation
              const currentPing = isNodeActive
                ? node.basePing + (frame % (index + 3) === 0 ? 1 : 0)
                : node.basePing;

              return (
                <div
                  key={node.id}
                  style={{
                    transform: `scale(${spNode}) translateY(${(1 - spNode) * 16}px)`,
                    opacity: isNodeActive ? Math.min(1, spNode) : 0,
                    padding: "10px 11px",
                    borderRadius: 14,
                    backgroundColor: isSynced
                      ? "rgba(34, 197, 94, 0.14)"
                      : isNodeActive
                        ? "rgba(56, 189, 248, 0.08)"
                        : "rgba(255, 255, 255, 0.02)",
                    border: isSynced
                      ? "1.5px solid rgba(34, 197, 94, 0.65)"
                      : isNodeActive
                        ? "1.2px solid rgba(56, 189, 248, 0.45)"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isSynced
                      ? "0 0 16px rgba(34, 197, 94, 0.25)"
                      : isNodeActive
                        ? "0 0 12px rgba(56, 189, 248, 0.15)"
                        : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxSizing: "border-box",
                  }}
                >
                  {/* Card Header: Node ID & LEDs */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <FaDesktop
                        size={12}
                        color={isSynced ? "#22c55e" : "#38bdf8"}
                      />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 900,
                          fontFamily: FONT_MONO,
                          color: isSynced ? "#f8fafc" : "#94a3b8",
                        }}
                      >
                        {node.id}
                      </span>
                    </div>

                    {/* Dual Status LEDs: Power (Green) + Activity (Cyan/Amber) */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      {/* Power LED */}
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          backgroundColor: isNodeActive ? "#22c55e" : "#475569",
                          boxShadow: isNodeActive ? "0 0 6px #22c55e" : "none",
                        }}
                      />
                      {/* RX Data Activity LED */}
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          backgroundColor: isSynced
                            ? "#22c55e"
                            : isDataLedBlink
                              ? "#fbbf24"
                              : "#334155",
                          boxShadow: isDataLedBlink
                            ? "0 0 8px #fbbf24"
                            : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Hostname & Distro */}
                  <div>
                    <div
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        fontFamily: FONT_MONO,
                        color: isNodeActive ? "#e2e8f0" : "#64748b",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {node.host}
                    </div>
                    <div
                      style={{
                        fontSize: 9.5,
                        color: "#64748b",
                        fontFamily: FONT_MONO,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 1,
                      }}
                    >
                      <span>{node.distro}</span>
                      <span
                        style={{
                          color: isSynced ? "#22c55e" : "#38bdf8",
                        }}
                      >
                        {currentPing}ms
                      </span>
                    </div>
                  </div>

                  {/* Mini Download / Synced Status Bar */}
                  <div style={{ marginTop: 2 }}>
                    {isSynced ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 9,
                          fontFamily: FONT_MONO,
                          fontWeight: 800,
                          color: "#22c55e",
                        }}
                      >
                        <FaCheckCircle size={9} color="#22c55e" />
                        <span>SYNCED (AMQP)</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: 5,
                          borderRadius: 3,
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${rxProgress}%`,
                            height: "100%",
                            background:
                              "linear-gradient(90deg, #38bdf8 0%, #22c55e 100%)",
                            boxShadow: "0 0 6px #38bdf8",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              4B. EXTENDED RACK FLEET CLUSTER (+38 LINUX HARDWARE NODES)
             ═════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              borderRadius: 14,
              backgroundColor: "rgba(10, 18, 32, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "10px 14px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 10.5,
                  fontWeight: 800,
                  fontFamily: FONT_MONO,
                  color: "#94a3b8",
                  letterSpacing: 0.8,
                }}
              >
                <FaServer size={11} color="#22c55e" />
                <span>
                  +38 ADDITIONAL LINUX NODES IN RACK FLEET (TOTAL: 54 DEPLOYED)
                </span>
              </div>
              <span
                style={{
                  fontSize: 9.5,
                  fontFamily: FONT_MONO,
                  color: "#22c55e",
                  fontWeight: 700,
                }}
              >
                CLUSTER SYNC: OK
              </span>
            </div>

            {/* High-density grid of 38 mini Linux server pods */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(19, 1fr)",
                gap: 5,
              }}
            >
              {EXTENDED_NODES.map((extNode, idx) => {
                const extDelay = 126 + idx * 0.65;
                const isExtActive = frame >= extDelay;
                const isExtBlink =
                  isExtActive && Math.sin(frame * 0.35 + idx) > 0;
                return (
                  <div
                    key={extNode.id}
                    style={{
                      height: 18,
                      borderRadius: 4,
                      backgroundColor: isExtActive
                        ? isExtBlink
                          ? "rgba(34, 197, 94, 0.35)"
                          : "rgba(34, 197, 94, 0.15)"
                        : "rgba(255, 255, 255, 0.04)",
                      border: isExtActive
                        ? "1px solid rgba(34, 197, 94, 0.55)"
                        : "1px solid rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isExtBlink
                        ? "0 0 6px rgba(34, 197, 94, 0.5)"
                        : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: isExtActive ? "#22c55e" : "#475569",
                        boxShadow: isExtActive ? "0 0 4px #22c55e" : "none",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            5. BOTTOM ARCHITECTURAL SUMMARY PILL
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: `0 0 ${16 + pulseWave * 10}px rgba(56, 189, 248, 0.25)`,
          }}
        >
          <FaWifi size={13} color="#38bdf8" />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            TANTANGAN:{" "}
            <span style={{ color: "#f8fafc" }}>
              DISTRIBUSI MASSAL SERENTAK &amp; OTOMATIS
            </span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
