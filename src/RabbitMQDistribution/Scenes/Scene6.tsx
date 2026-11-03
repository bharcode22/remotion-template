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
  FaExchangeAlt,
  FaInbox,
  FaServer,
  FaTv,
  FaWifi,
} from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 1000 - 1205)
  // Line 15:
  // "Kemudian, aplikasi yang berjalan di masing-masing produk bertindak sebagai Subscriber yang menunggu event tersebut."
  // - Voice: F1002 - F1190
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F1002 - F1025)
  const spBadge = spring({
    frame: Math.max(0, frame - 1002),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F1006 - F1035)
  const spHeadline = spring({
    frame: Math.max(0, frame - 1006),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Top Emitter Hub (RabbitMQ Fanout Exchange) Spring (F1020 - F1055)
  const spEmitter = spring({
    frame: Math.max(0, frame - 1020),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 4. Subscriber Products Grid Spring (F1040 - F1075)
  const spSubscribers = spring({
    frame: Math.max(0, frame - 1040),
    fps,
    config: { damping: 13, mass: 0.95, stiffness: 105 },
  });

  // 5. Fleet Cluster Bar Spring (F1115 - F1150)
  const spFleet = spring({
    frame: Math.max(0, frame - 1115),
    fps,
    config: { damping: 13, stiffness: 110 },
  });

  // Active States
  const isEmitterActive = frame >= 1020;
  const isSubscribersActive = frame >= 1040;
  const isFleetActive = frame >= 1115;

  // ─────────────────────────────────────────────────────────────────────────────
  // ⚡ FANOUT BROADCAST PACKET ANIMATION (F1090 - F1145)
  // Packets simultaneously shoot from RabbitMQ to the 3 Subscriber Products!
  // ─────────────────────────────────────────────────────────────────────────────
  const isFanoutFiring = frame >= 1090;

  // Packet Y coordinate from Emitter (top) down to Subscribers (bottom)
  const fanoutPacketY = interpolate(frame, [1092, 1138], [0, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  const packetOpacity = interpolate(
    frame,
    [1090, 1096, 1134, 1142],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Impact trigger when packets reach subscribers (F1138+)
  const isEventConsumed = frame >= 1138;

  // Impact Shockwave Scale on Subscriber Cards
  const impactShockScale = interpolate(frame, [1138, 1175], [0.8, 2.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const impactShockOpacity = interpolate(frame, [1138, 1175], [0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ambient listening radar wave (continuous pulsating ring on each subscriber)
  const radarWave = (frame % 30) / 30;
  const radarOpacity = (1 - radarWave) * 0.7;

  return (
    <SceneContainer accentColor={RABBITMQ_COLORS.linuxGreen}>
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
            1. MINIMAL HEADER: "SUBSCRIBERS MENUNGGU EVENT"
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 30, 20, 0.94)",
            border: "1.5px solid rgba(34, 197, 94, 0.65)",
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.35)",
            marginBottom: 12,
          }}
        >
          <FaBroadcastTower size={14} color={RABBITMQ_COLORS.linuxGreen} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: RABBITMQ_COLORS.linuxGreen,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            ARCHITECTURE FLOW // PART 2: SUBSCRIBER
          </span>
        </div>

        {/* Headline: "Aplikasi pada produk bertindak sebagai Subscriber" */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Kemudian di masing-masing produk:
          </div>
          <h1
            style={{
              fontSize: 47,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #22c55e 0%, #38bdf8 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(34, 197, 94, 0.5))",
              }}
            >
              Bertindak Sebagai Subscriber
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. TOP EMITTER HUB: RABBITMQ FANOUT EXCHANGE (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spEmitter})`,
            opacity: isEmitterActive ? Math.min(1, spEmitter) : 0,
            width: 920,
            borderRadius: 20,
            backgroundColor: "rgba(18, 12, 10, 0.95)",
            border: "1.8px solid rgba(249, 115, 22, 0.65)",
            boxShadow:
              "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 30px rgba(249, 115, 22, 0.3)",
            padding: "14px 24px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                border: "1.2px solid rgba(249, 115, 22, 0.65)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(249, 115, 22, 0.4)",
              }}
            >
              <SiRabbitmq size={24} color={RABBITMQ_COLORS.rabbitOrange} />
            </div>
            <div>
              <div
                style={{
                  fontSize: 15.5,
                  fontWeight: 900,
                  color: "#f8fafc",
                  fontFamily: FONT_MONO,
                }}
              >
                RabbitMQ // Fanout Exchange
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  fontFamily: FONT_MONO,
                }}
              >
                1-to-Many Event Broadcast Engine
              </div>
            </div>
          </div>

          {/* Broadcast Trigger Indicator */}
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 10,
              backgroundColor: isFanoutFiring
                ? "rgba(34, 197, 94, 0.2)"
                : "rgba(249, 115, 22, 0.15)",
              border: isFanoutFiring
                ? "1.2px solid #22c55e"
                : "1px solid #f97316",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: isFanoutFiring ? "#22c55e" : "#f97316",
                boxShadow: `0 0 8px ${
                  isFanoutFiring ? "#22c55e" : "#f97316"
                }`,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: isFanoutFiring ? "#22c55e" : "#f97316",
              }}
            >
              {isFanoutFiring
                ? "FANOUT BROADCAST ACTIVE"
                : "AWAITING SUBSCRIBERS"}
            </span>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. MIDDLE MODULE: 3 DIVERGENT LASER CONDUITS + 3 FLYING PACKETS
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 920,
            height: 140,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 110px",
            boxSizing: "border-box",
          }}
        >
          {/* 3 Laser Beams */}
          {[0, 1, 2].map((channelIdx) => (
            <div
              key={channelIdx}
              style={{
                width: 2,
                height: "100%",
                backgroundColor: isEventConsumed
                  ? "rgba(34, 197, 94, 0.5)"
                  : "rgba(56, 189, 248, 0.3)",
                position: "relative",
                boxShadow: isEventConsumed
                  ? "0 0 10px rgba(34, 197, 94, 0.4)"
                  : "0 0 8px rgba(56, 189, 248, 0.2)",
              }}
            >
              {/* Flying Fanout Packet */}
              {isFanoutFiring && (
                <div
                  style={{
                    position: "absolute",
                    top: fanoutPacketY,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: packetOpacity,
                    padding: "4px 10px",
                    borderRadius: 8,
                    backgroundColor: "#f97316",
                    color: "#030712",
                    fontSize: 9,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    whiteSpace: "nowrap",
                    boxShadow: "0 0 16px #f97316",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    zIndex: 25,
                  }}
                >
                  <FaBolt size={8} />
                  <span>EVENT</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. LOWER MODULE: 3 SUBSCRIBER PRODUCT CARDS (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spSubscribers})`,
            opacity: isSubscribersActive ? Math.min(1, spSubscribers) : 0,
            width: 920,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            marginBottom: 16,
            boxSizing: "border-box",
            position: "relative",
            zIndex: 10,
          }}
        >
          {[
            {
              id: "SUB #1",
              title: "Kiosk Display",
              queue: "q.kiosk.events",
              icon: <FaDesktop size={24} color="#38bdf8" />,
              accent: "#38bdf8",
              delay: 1042,
            },
            {
              id: "SUB #2",
              title: "Digital Signage",
              queue: "q.signage.events",
              icon: <FaTv size={24} color="#22c55e" />,
              accent: "#22c55e",
              delay: 1054,
            },
            {
              id: "SUB #3",
              title: "Retail Box",
              queue: "q.retail.events",
              icon: <FaServer size={24} color="#a855f7" />,
              accent: "#a855f7",
              delay: 1066,
            },
          ].map((sub) => {
            const spCard = spring({
              frame: Math.max(0, frame - sub.delay),
              fps,
              config: { damping: 13, stiffness: 120 },
            });
            return (
              <div
                key={sub.id}
                style={{
                  transform: `scale(${spCard}) translateY(${(1 - spCard) * 18}px)`,
                  opacity: Math.min(1, spCard),
                  borderRadius: 20,
                  backgroundColor: isEventConsumed
                    ? "rgba(10, 30, 20, 0.96)"
                    : "rgba(10, 18, 32, 0.94)",
                  border: isEventConsumed
                    ? "1.8px solid rgba(34, 197, 94, 0.7)"
                    : `1.5px solid ${sub.accent}55`,
                  boxShadow: isEventConsumed
                    ? "0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(34, 197, 94, 0.35)"
                    : `0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px ${sub.accent}20`,
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Impact Shockwave on Event Arrival */}
                {isEventConsumed && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) scale(${impactShockScale})`,
                      opacity: impactShockOpacity,
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      border: "2px solid #22c55e",
                      boxShadow: "0 0 30px #22c55e",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Sub ID & Queue Name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: `${sub.accent}18`,
                      border: `1px solid ${sub.accent}45`,
                      fontSize: 10,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: sub.accent,
                      letterSpacing: 1,
                    }}
                  >
                    {sub.id}
                  </span>
                  <span
                    style={{
                      fontSize: 9.5,
                      fontFamily: FONT_MONO,
                      color: "#64748b",
                    }}
                  >
                    {sub.queue}
                  </span>
                </div>

                {/* Hardware Icon with Animated Sonar Ripple */}
                <div style={{ position: "relative", marginBottom: 10 }}>
                  {/* Radar Ripple Circle */}
                  {!isEventConsumed && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) scale(${
                          1 + radarWave * 1.5
                        })`,
                        opacity: radarOpacity,
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        border: `1.5px solid ${sub.accent}`,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      backgroundColor: isEventConsumed
                        ? "rgba(34, 197, 94, 0.2)"
                        : `${sub.accent}15`,
                      border: isEventConsumed
                        ? "1.5px solid #22c55e"
                        : `1.5px solid ${sub.accent}45`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isEventConsumed
                        ? "0 0 20px #22c55e"
                        : `0 0 15px ${sub.accent}30`,
                    }}
                  >
                    {isEventConsumed ? (
                      <FaCheckCircle size={22} color="#22c55e" />
                    ) : (
                      sub.icon
                    )}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 900,
                    color: "#f8fafc",
                    marginBottom: 2,
                  }}
                >
                  {sub.title}
                </div>

                {/* Status: WAITING EVENT vs EVENT CONSUMED */}
                <div style={{ width: "100%", marginTop: 8 }}>
                  {isEventConsumed ? (
                    <div
                      style={{
                        padding: "6px 8px",
                        borderRadius: 8,
                        backgroundColor: "rgba(34, 197, 94, 0.18)",
                        border: "1px solid rgba(34, 197, 94, 0.5)",
                        fontSize: 10,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                        color: "#22c55e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      <FaBolt size={10} color="#22c55e" />
                      <span>EVENT RECEIVED</span>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "6px 8px",
                        borderRadius: 8,
                        backgroundColor: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        fontSize: 9.5,
                        fontFamily: FONT_MONO,
                        fontWeight: 800,
                        color: "#38bdf8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      <FaWifi size={9} color="#38bdf8" />
                      <span>LISTENING...</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            5. FLEET SYNCHRONIZATION BAR (+51 OTHER LINUX PRODUCTS)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spFleet})`,
            opacity: isFleetActive ? Math.min(1, spFleet) : 0,
            width: 920,
            borderRadius: 16,
            backgroundColor: "rgba(10, 18, 30, 0.8)",
            border: isEventConsumed
              ? "1.2px solid rgba(34, 197, 94, 0.5)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaInbox
              size={14}
              color={isEventConsumed ? "#22c55e" : "#38bdf8"}
            />
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: isEventConsumed ? "#f8fafc" : "#94a3b8",
                letterSpacing: 0.8,
              }}
            >
              ENTIRE FLEET // +51 OTHER LINUX PRODUCTS
            </span>
          </div>

          <div style={{ display: "flex", gap: 5 }}>
            {Array.from({ length: 18 }, (_, idx) => {
              const nodeActive = isEventConsumed;
              return (
                <div
                  key={idx}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: nodeActive ? "#22c55e" : "#475569",
                    boxShadow: nodeActive ? "0 0 6px #22c55e" : "none",
                  }}
                />
              );
            })}
          </div>

          <span
            style={{
              fontSize: 10,
              fontFamily: FONT_MONO,
              fontWeight: 800,
              color: isEventConsumed ? "#22c55e" : "#64748b",
            }}
          >
            {isEventConsumed ? "ALL 54 SUBSCRIBERS SYNCED" : "54 SUBSCRIBERS ACTIVE"}
          </span>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            6. MINIMAL BOTTOM SUMMARY PILL
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
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.25)",
          }}
        >
          <FaExchangeAlt size={12} color="#22c55e" />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            POLA:{" "}
            <span style={{ color: "#f97316" }}>RABBITMQ (FANOUT)</span>
            {" ➔ "}
            <span style={{ color: "#22c55e" }}>54 SUBSCRIBERS SERENTAK</span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
