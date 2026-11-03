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
  FaExchangeAlt,
  FaFileVideo,
  FaGlobe,
  FaMousePointer,
  FaPaperPlane,
} from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 800 - 1000)
  // Line 12 & 13:
  // - "Konsepnya sederhana." (Voice: F805 - F845)
  // - "Web app bertindak sebagai Publisher yang mengirimkan event melalui RabbitMQ." (Voice: F850 - F995)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F802 - F825)
  const spBadge = spring({
    frame: Math.max(0, frame - 802),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring "Konsepnya Sederhana" (F806 - F835)
  const spHeadline = spring({
    frame: Math.max(0, frame - 806),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Web App (Publisher) Window Spring (F838 - F870)
  const spWebApp = spring({
    frame: Math.max(0, frame - 838),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // 4. RabbitMQ Broker Receiving Hub Spring (F860 - F895)
  const spBroker = spring({
    frame: Math.max(0, frame - 860),
    fps,
    config: { damping: 13, mass: 0.95, stiffness: 105 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 🖱️ MOUSE CLICK & EVENT PACKET DISPATCH ANIMATION (F870 - F960)
  // ─────────────────────────────────────────────────────────────────────────────
  // Mouse cursor moves to button
  const cursorX = interpolate(frame, [870, 892], [140, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const cursorY = interpolate(frame, [870, 892], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const isCursorVisible = frame >= 868 && frame <= 918;

  // Button click trigger
  const isButtonClicked = frame >= 892;
  const btnScale = isButtonClicked
    ? interpolate(frame, [892, 897, 906], [1, 0.88, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;

  // Click Shockwave Ripple
  const rippleScale = interpolate(frame, [892, 922], [0.6, 2.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [892, 922], [0.85, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Event Packet Travel (Web App -> Laser Conduit -> RabbitMQ)
  const packetY = interpolate(frame, [898, 955], [0, 215], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const packetOpacity = interpolate(
    frame,
    [896, 902, 950, 958],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const packetScale = interpolate(
    frame,
    [896, 906, 948, 956],
    [0.6, 1, 1, 1.25],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // RabbitMQ Ingestion Shockwave on Packet Arrival (F955 - F995)
  const isBrokerIngesting = frame >= 954;
  const rabbitShockScale = interpolate(frame, [955, 992], [0.8, 2.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rabbitShockOpacity = interpolate(frame, [955, 992], [0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ambient laser line packet pulse
  const laserPacket = ((frame * 6) % 100) / 100;

  return (
    <SceneContainer accentColor={RABBITMQ_COLORS.cloudCyan}>
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
            1. MINIMAL HEADER: "KONSEP SEDERHANA // PUBLISHER"
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
            backgroundColor: "rgba(10, 24, 40, 0.94)",
            border: "1.5px solid rgba(56, 189, 248, 0.65)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
            marginBottom: 12,
          }}
        >
          <FaBroadcastTower size={14} color={RABBITMQ_COLORS.cloudCyan} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: RABBITMQ_COLORS.cloudCyan,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            ARCHITECTURE FLOW // PART 1: PUBLISHER
          </span>
        </div>

        {/* Headline: "Konsepnya sederhana. Web app bertindak sebagai Publisher" */}
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
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Konsepnya Sederhana:
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(56, 189, 248, 0.5))",
              }}
            >
              Web App Bertindak Sebagai Publisher
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. UPPER MODULE: WEB APP (PUBLISHER) BROWSER MOCKUP (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spWebApp})`,
            opacity: spWebApp,
            width: 920,
            borderRadius: 22,
            backgroundColor: "rgba(10, 18, 34, 0.96)",
            border: isButtonClicked
              ? "2px solid rgba(34, 197, 94, 0.7)"
              : "2px solid rgba(56, 189, 248, 0.5)",
            boxShadow: isButtonClicked
              ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(34, 197, 94, 0.3)"
              : "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.2)",
            overflow: "hidden",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Browser Navigation Bar */}
          <div
            style={{
              height: 42,
              padding: "0 18px",
              backgroundColor: "rgba(15, 23, 42, 0.98)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 7 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              />
            </div>

            {/* URL bar */}
            <div
              style={{
                padding: "4px 20px",
                borderRadius: 999,
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: 11,
                fontFamily: FONT_MONO,
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FaGlobe size={11} color="#38bdf8" />
              <span>https://cloud-admin.internal/broadcast-hub</span>
            </div>

            {/* Role Badge */}
            <div
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#38bdf8",
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
              }}
            >
              ROLE: PUBLISHER
            </div>
          </div>

          {/* Browser Content: Interactive Publish Event Card */}
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* Left: Payload File Info */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(56, 189, 248, 0.18)",
                  border: "1.2px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 18px rgba(56, 189, 248, 0.3)",
                }}
              >
                <FaFileVideo size={24} color="#38bdf8" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f8fafc",
                    marginBottom: 2,
                  }}
                >
                  payload_bundle.tar.gz
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Size: 1.25 GB • Target: All 54 Edge Products
                </div>
              </div>
            </div>

            {/* Right: Interactive Trigger Button */}
            <div style={{ position: "relative" }}>
              {/* Click Shockwave Ring */}
              {isButtonClicked && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${rippleScale})`,
                    opacity: rippleOpacity,
                    width: "100%",
                    height: "100%",
                    borderRadius: 14,
                    border: "2px solid #22c55e",
                    boxShadow: "0 0 25px #22c55e",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* The Action Button */}
              <div
                style={{
                  transform: `scale(${btnScale})`,
                  padding: "12px 24px",
                  borderRadius: 14,
                  backgroundColor: isButtonClicked
                    ? "rgba(34, 197, 94, 0.25)"
                    : "rgba(56, 189, 248, 0.2)",
                  border: isButtonClicked
                    ? "2px solid #22c55e"
                    : "2px solid #38bdf8",
                  boxShadow: isButtonClicked
                    ? "0 0 25px rgba(34, 197, 94, 0.6)"
                    : "0 0 20px rgba(56, 189, 248, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {isButtonClicked ? (
                  <>
                    <FaCheckCircle size={16} color="#22c55e" />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 900,
                        fontFamily: FONT_MONO,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      EVENT DISPATCHED!
                    </span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={15} color="#38bdf8" />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 900,
                        fontFamily: FONT_MONO,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      PUBLISH EVENT
                    </span>
                  </>
                )}
              </div>

              {/* Animated Mouse Pointer */}
              {isCursorVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(${cursorX}px, ${cursorY}px)`,
                    filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.8))",
                    pointerEvents: "none",
                    zIndex: 40,
                  }}
                >
                  <FaMousePointer size={22} color="#f8fafc" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. MIDDLE MODULE: LASER DATA CONDUIT + EJECTED EVENT PACKET
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 920,
            height: 190,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Laser Conduit Rails */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 380,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {[0, 1, 2].map((railIdx) => (
              <div
                key={railIdx}
                style={{
                  width: 2,
                  height: "100%",
                  backgroundColor: "rgba(56, 189, 248, 0.25)",
                  position: "relative",
                  boxShadow: "0 0 10px rgba(56, 189, 248, 0.2)",
                }}
              >
                {/* Moving light pulse */}
                <div
                  style={{
                    position: "absolute",
                    top: `${((laserPacket + railIdx * 0.33) % 1) * 100}%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 6,
                    height: 14,
                    borderRadius: 3,
                    backgroundColor: "#38bdf8",
                    boxShadow: "0 0 10px #38bdf8",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Central Holographic Event Packet (Traveling downwards) */}
          <div
            style={{
              position: "absolute",
              top: packetY,
              transform: `scale(${packetScale})`,
              opacity: packetOpacity,
              padding: "10px 22px",
              borderRadius: 14,
              backgroundColor: "rgba(15, 23, 42, 0.98)",
              border: "2px solid #f97316",
              boxShadow:
                "0 0 35px rgba(249, 115, 22, 0.7), 0 10px 25px rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              zIndex: 30,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(249, 115, 22, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaBolt size={16} color="#f97316" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: "#f8fafc",
                }}
              >
                EVENT: &quot;NEW_MEDIA_PUBLISHED&quot;
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  color: "#fbbf24",
                }}
              >
                routing_key: &quot;media.broadcast&quot; • AMQP
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. LOWER MODULE: RABBITMQ BROKER HUB & INGESTION (Width: 920px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBroker})`,
            opacity: spBroker,
            width: 920,
            borderRadius: 22,
            backgroundColor: "rgba(18, 12, 10, 0.96)",
            border: isBrokerIngesting
              ? "2px solid rgba(249, 115, 22, 0.85)"
              : "2px solid rgba(249, 115, 22, 0.45)",
            boxShadow: isBrokerIngesting
              ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 45px rgba(249, 115, 22, 0.5)"
              : "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(249, 115, 22, 0.2)",
            padding: "20px 24px",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          {/* Broker Ingestion Shockwave */}
          {isBrokerIngesting && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 70,
                transform: `translate(-50%, -50%) scale(${rabbitShockScale})`,
                opacity: rabbitShockOpacity,
                width: 90,
                height: 90,
                borderRadius: "50%",
                border: "3px solid #f97316",
                boxShadow: "0 0 40px #f97316",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Broker Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: 12,
              marginBottom: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: "rgba(249, 115, 22, 0.2)",
                  border: "1.5px solid rgba(249, 115, 22, 0.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isBrokerIngesting
                    ? "0 0 25px #f97316"
                    : "0 0 15px rgba(249, 115, 22, 0.3)",
                }}
              >
                <SiRabbitmq size={28} color={RABBITMQ_COLORS.rabbitOrange} />
              </div>

              <div>
                <div
                  style={{
                    fontSize: 16.5,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  RabbitMQ Message Broker
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Exchange Type: Fanout // Central AMQP Core
                </div>
              </div>
            </div>

            {/* Ingestion Status Chip */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: isBrokerIngesting
                  ? "rgba(249, 115, 22, 0.25)"
                  : "rgba(56, 189, 248, 0.15)",
                border: isBrokerIngesting
                  ? "1.5px solid #f97316"
                  : "1px solid #38bdf8",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: isBrokerIngesting ? "#f97316" : "#38bdf8",
                  boxShadow: `0 0 8px ${
                    isBrokerIngesting ? "#f97316" : "#38bdf8"
                  }`,
                }}
              />
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: isBrokerIngesting ? "#f97316" : "#38bdf8",
                }}
              >
                {isBrokerIngesting ? "EVENT INGESTED" : "LISTENING"}
              </span>
            </div>
          </div>

          {/* Fanout Queues Grid Preview (Ready for Subscribers in Scene 6) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 8,
            }}
          >
            {[
              "Queue-01",
              "Queue-02",
              "Queue-03",
              "Queue-04",
              "Queue-05",
              "+49 Queues",
            ].map((queueId) => (
              <div
                key={queueId}
                style={{
                  padding: "8px 10px",
                  borderRadius: 10,
                  backgroundColor: isBrokerIngesting
                    ? "rgba(249, 115, 22, 0.16)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isBrokerIngesting
                    ? "1px solid rgba(249, 115, 22, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: isBrokerIngesting
                    ? "0 0 10px rgba(249, 115, 22, 0.2)"
                    : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                    color: isBrokerIngesting ? "#f8fafc" : "#64748b",
                  }}
                >
                  {queueId}
                </span>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: isBrokerIngesting ? "#22c55e" : "#475569",
                    boxShadow: isBrokerIngesting ? "0 0 6px #22c55e" : "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            5. MINIMAL BOTTOM SUMMARY PILL
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            marginTop: 18,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.25)",
          }}
        >
          <FaExchangeAlt size={12} color="#38bdf8" />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            ALUR:{" "}
            <span style={{ color: "#38bdf8" }}>WEB APP (PUBLISHER)</span>
            {" ➔ "}
            <span style={{ color: "#f97316" }}>RABBITMQ (BROKER)</span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
