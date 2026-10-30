import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  Bell,
  Database,
  Radio,
  Send,
  Share2,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 7: CARA KERJA PUB/SUB (MENARA RADAR & VIBRATING CLIENTS)
 * Naskah:
 * "Cara kerjanya yaitu,"
 * - Sub7.1: Publisher mengirim pesan melalui topik,
 * - Sub7.2: Lalu subscriber yang berlangganan menerima topik tersebut.
 * ========================================================
 * Fitur Utama:
 * 1. Publisher mengirim event payload [ Flash Sale ] ke Topik Broker (Sub 7.1)
 * 2. Menara Radar Pemancar memancarkan gelombang suara / shockwave ripples
 * 3. Tiga ponsel subscriber bergetar secara serempak saat gelombang mengenai mereka
 * 4. Badge notifikasi [ 🔔 FLASH SALE 50% ] menyala BERSAMAAN di ketiga ponsel (Sub 7.2)
 */
export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif Scene 7 (Global frame 1170 s/d 1410, durasi 240 frame)
  const relFrame = Math.max(0, frame - 1170);

  // Pemisahan Sub-Scene berdasarkan naskah voiceover:
  // Sub 7.1: relFrame 0..110   ("Publisher mengirim pesan melalui topik")
  // Sub 7.2: relFrame 110..240 ("Lalu subscriber yang berlangganan menerima topik tersebut")
  const isSub72 = relFrame >= 110;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. SUB 7.1: PUBLISHER MENGIRIM PESAN KE TOPIK (relFrame 15 - 65)
  // ─────────────────────────────────────────────────────────────────────────────
  const pubSendProgress = interpolate(relFrame, [15, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isPacketFlyingToBroker = relFrame >= 15 && relFrame <= 68;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. MENARA RADAR MEMANCARKAN GELOMBANG SUARA (SHOCKWAVE RIPPLES)
  // ─────────────────────────────────────────────────────────────────────────────
  const isTowerBroadcasting = relFrame >= 65;

  // Denyut antena menara
  const antennaPulse = isTowerBroadcasting
    ? 1 + Math.sin((relFrame - 65) * 0.4) * 0.12
    : 1;

  // 3 Lapisan Gelombang Suara Radar Merambat ke Arah Kanan
  const waveCycle1 = ((relFrame - 65) * 0.05) % 1;
  const waveScale1 = interpolate(waveCycle1, [0, 1], [0.4, 2.5]);
  const waveOpacity1 = isTowerBroadcasting
    ? interpolate(waveCycle1, [0, 0.3, 1], [0, 0.85, 0])
    : 0;

  const waveCycle2 = ((relFrame - 55) * 0.05) % 1;
  const waveScale2 = interpolate(waveCycle2, [0, 1], [0.4, 2.5]);
  const waveOpacity2 = isTowerBroadcasting
    ? interpolate(waveCycle2, [0, 0.3, 1], [0, 0.85, 0])
    : 0;

  const waveCycle3 = ((relFrame - 45) * 0.05) % 1;
  const waveScale3 = interpolate(waveCycle3, [0, 1], [0.4, 2.5]);
  const waveOpacity3 = isTowerBroadcasting
    ? interpolate(waveCycle3, [0, 0.3, 1], [0, 0.85, 0])
    : 0;

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. SUB 7.2: 3 PONSEL SUBSCRIBER BERGETAR & NOTIFIKASI MENYALA BERSAMAAN
  // ─────────────────────────────────────────────────────────────────────────────
  const isNotifArrived = relFrame >= 110;

  // Efek Getar Bersamaan (Tactile Vibration Shake)
  const phoneVibrate = isNotifArrived && relFrame < 210
    ? Math.sin((relFrame - 110) * 1.8) * 3
    : 0;

  // Spring pop-in untuk badge notifikasi yang menyala bersamaan
  const notifSpring = spring({
    frame: Math.max(0, relFrame - 110),
    fps,
    config: { damping: 10, mass: 0.4, stiffness: 220 },
  });
  const notifScale = isNotifArrived
    ? interpolate(notifSpring, [0, 1], [0.4, 1.0])
    : 0.4;
  const notifOpacity = isNotifArrived
    ? interpolate(notifSpring, [0, 0.5, 1], [0, 0.8, 1])
    : 0;

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="07"
        tag="MEKANISME // EVENT-DRIVEN"
        title="CARA KERJA PUB/SUB"
        subtitle={
          isSub72
            ? "Sub 7.2: Lalu subscriber yang berlangganan menerima topik tersebut."
            : "Sub 7.1: Publisher mengirim pesan melalui topik."
        }
        accentColor="#f43f5e"
        icon={Share2}
        hideParentCard={true}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              MAIN RADAR BROADCAST STAGE
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.94)",
              border: `2px solid ${isSub72 ? "rgba(244, 63, 94, 0.65)" : "rgba(244, 63, 94, 0.4)"}`,
              borderRadius: 24,
              padding: "24px 24px",
              boxShadow: isSub72
                ? "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(244, 63, 94, 0.25)"
                : "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(244, 63, 94, 0.15)",
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
                <Radio size={16} color="#f43f5e" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: 1,
                  }}
                >
                  BROADCAST TOPIC TRANSMISSION (MENARA RADAR)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 12,
                  backgroundColor: isSub72 ? "rgba(244, 63, 94, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${isSub72 ? "#f43f5e" : "rgba(255, 255, 255, 0.12)"}`,
                }}
              >
                {isSub72 ? (
                  <Zap size={14} color="#f43f5e" />
                ) : (
                  <Send size={14} color="#fb7185" />
                )}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 900,
                    color: isSub72 ? "#f43f5e" : "#fda4af",
                  }}
                >
                  {isSub72 ? "3 PONSEL BERGETAR (NOTIFIKASI MASUK)" : "PENGIRIMAN KE TOPIK..."}
                </span>
              </div>
            </div>

            {/* THREE-SECTION STAGE: PUBLISHER ➔ RADAR TOWER ➔ 3 SUBSCRIBER PHONES */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "260px 240px 1fr",
                gap: 16,
                alignItems: "center",
                minHeight: 290,
                position: "relative",
              }}
            >
              {/* ═══════════════════════════════════════════════════════════
                  SISI KIRI: PUBLISHER (PENGIRIM EVENT TOPIK)
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: `1.5px solid ${relFrame >= 15 ? "#f43f5e" : "rgba(255, 255, 255, 0.12)"}`,
                  borderRadius: 18,
                  padding: "16px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: relFrame >= 15 ? "0 0 20px rgba(244, 63, 94, 0.25)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Database size={16} color="#fb7185" />
                    <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                      PUBLISHER
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#fda4af", fontWeight: 700 }}>
                    PRODUCER
                  </span>
                </div>

                {/* Event Payload Card */}
                <div
                  style={{
                    backgroundColor: "rgba(244, 63, 94, 0.1)",
                    border: "1px dashed rgba(244, 63, 94, 0.35)",
                    borderRadius: 10,
                    padding: "10px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#fda4af", fontWeight: 800 }}>
                    TOPIC EVENT:
                  </span>
                  <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                    "flash-sale"
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                    Payload: Diskon 50% Aktif!
                  </div>
                </div>

                {/* Broadcast Trigger Button Status */}
                <div
                  style={{
                    padding: "8px 12px",
                    borderRadius: 10,
                    backgroundColor: relFrame >= 15 ? "rgba(244, 63, 94, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${relFrame >= 15 ? "#f43f5e" : "rgba(255, 255, 255, 0.1)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <Send size={13} color="#fb7185" />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#ffffff" }}>
                    {relFrame >= 15 ? "✓ PUBLISH EVENT!" : "SIAP PUBLISH"}
                  </span>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════
                  TENGAH: MENARA RADAR PEMANCAR & GELOMBANG SUARA
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  position: "relative",
                  height: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* 🌊 GELOMBANG SUARA RADAR (SHOCKWAVE RIPPLES) */}
                {isTowerBroadcasting && (
                  <div
                    style={{
                      position: "absolute",
                      top: "42%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  >
                    {/* Ripple Ring 1 */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 90,
                        height: 90,
                        transform: `translate(-50%, -50%) scale(${waveScale1})`,
                        borderRadius: "50%",
                        border: "2px solid #f43f5e",
                        boxShadow: "0 0 16px rgba(244, 63, 94, 0.6)",
                        opacity: waveOpacity1,
                      }}
                    />
                    {/* Ripple Ring 2 */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 90,
                        height: 90,
                        transform: `translate(-50%, -50%) scale(${waveScale2})`,
                        borderRadius: "50%",
                        border: "2px solid #fda4af",
                        boxShadow: "0 0 16px rgba(253, 164, 175, 0.6)",
                        opacity: waveOpacity2,
                      }}
                    />
                    {/* Ripple Ring 3 */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 90,
                        height: 90,
                        transform: `translate(-50%, -50%) scale(${waveScale3})`,
                        borderRadius: "50%",
                        border: "2px solid #ec4899",
                        boxShadow: "0 0 16px rgba(236, 72, 153, 0.6)",
                        opacity: waveOpacity3,
                      }}
                    />
                  </div>
                )}

                {/* Packet Flight dari Publisher ke Menara Radar */}
                {isPacketFlyingToBroker && (
                  <div
                    style={{
                      position: "absolute",
                      left: `${pubSendProgress * 45 - 20}%`,
                      top: "42%",
                      transform: "translate(-50%, -50%)",
                      padding: "3px 8px",
                      borderRadius: 8,
                      backgroundColor: "#f43f5e",
                      boxShadow: "0 0 16px #f43f5e",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      zIndex: 10,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 9, fontWeight: 900, color: "#ffffff" }}>
                      EVENT ➔
                    </span>
                  </div>
                )}

                {/* 📡 MENARA RADAR CHASSIS */}
                <div
                  style={{
                    transform: `scale(${antennaPulse})`,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    backgroundColor: isTowerBroadcasting
                      ? "rgba(244, 63, 94, 0.3)"
                      : "rgba(255, 255, 255, 0.05)",
                    border: `2px solid ${isTowerBroadcasting ? "#f43f5e" : "rgba(255, 255, 255, 0.2)"}`,
                    boxShadow: isTowerBroadcasting
                      ? "0 0 35px rgba(244, 63, 94, 0.7), inset 0 0 15px rgba(244, 63, 94, 0.4)"
                      : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 4,
                  }}
                >
                  <Wifi size={36} color={isTowerBroadcasting ? "#ffffff" : "#64748b"} />
                </div>

                {/* Menara Tiang Pancar Base */}
                <div
                  style={{
                    width: 6,
                    height: 48,
                    backgroundColor: isTowerBroadcasting ? "#f43f5e" : "#475569",
                    boxShadow: isTowerBroadcasting ? "0 0 10px #f43f5e" : "none",
                    borderRadius: 3,
                    marginTop: -4,
                    zIndex: 3,
                  }}
                />

                {/* Menara Radar Label */}
                <div style={{ textAlign: "center", marginTop: 8, zIndex: 4 }}>
                  <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 950, color: "#f8fafc" }}>
                    MENARA TOPIK
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 10, color: "#fda4af" }}>
                    {isTowerBroadcasting ? "MEMANCARKAN SINYAL..." : "STANDBY LISTENING"}
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════
                  SISI KANAN: 3 PONSEL SUBSCRIBER (BERGETAR & BADGE NOTIF)
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  zIndex: 5,
                }}
              >
                {[
                  { id: 1, role: "User Mobile App", user: "Budi Santoso 📱" },
                  { id: 2, role: "Driver Partner", user: "Driver Ojol 🛵" },
                  { id: 3, role: "Merchant Outlet", user: "Toko Kopi 🏪" },
                ].map((item) => (
                  <div
                    key={item.id}
                    style={{
                      transform: `rotate(${phoneVibrate}deg) translate(${phoneVibrate}px, ${-phoneVibrate}px)`,
                      backgroundColor: isNotifArrived
                        ? "rgba(15, 23, 42, 0.95)"
                        : "rgba(15, 23, 42, 0.7)",
                      border: `1.5px solid ${isNotifArrived ? "#f43f5e" : "rgba(255, 255, 255, 0.12)"}`,
                      boxShadow: isNotifArrived
                        ? "0 0 25px rgba(244, 63, 94, 0.4), 0 8px 20px rgba(0, 0, 0, 0.6)"
                        : "none",
                      borderRadius: 14,
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Phone Icon & Role */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          backgroundColor: isNotifArrived
                            ? "rgba(244, 63, 94, 0.25)"
                            : "rgba(255, 255, 255, 0.05)",
                          border: `1px solid ${isNotifArrived ? "#f43f5e" : "rgba(255, 255, 255, 0.1)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Smartphone size={16} color={isNotifArrived ? "#f43f5e" : "#64748b"} />
                      </div>

                      <div>
                        <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                          {item.user}
                        </div>
                        <div style={{ fontFamily: "monospace", fontSize: 9, color: "#94a3b8" }}>
                          {item.role}
                        </div>
                      </div>
                    </div>

                    {/* 🔔 FLOATING NOTIFICATION BADGE MENYALA BERSAMAAN */}
                    {isNotifArrived ? (
                      <div
                        style={{
                          transform: `scale(${notifScale})`,
                          opacity: notifOpacity,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "4px 10px",
                          borderRadius: 10,
                          backgroundColor: "rgba(244, 63, 94, 0.25)",
                          border: "1px solid #f43f5e",
                          boxShadow: "0 0 12px rgba(244, 63, 94, 0.5)",
                        }}
                      >
                        <Bell size={12} color="#fda4af" />
                        <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 950, color: "#ffffff" }}>
                          FLASH SALE 50%!
                        </span>
                      </div>
                    ) : (
                      <span style={{ fontFamily: "monospace", fontSize: 9, color: "#64748b" }}>
                        Menunggu Event...
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Live Broadcast Alert */}
            {isSub72 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(244, 63, 94, 0.12)",
                  border: "1px solid rgba(244, 63, 94, 0.35)",
                  borderRadius: 12,
                  padding: "10px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Bell size={14} color="#f43f5e" />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#f8fafc" }}>
                    3x Notifikasi Berdering Bersamaan: Client TIDAK PERNAH mengirim request!
                  </span>
                </div>
                <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 900, color: "#fda4af" }}>
                  ✓ BROADCAST 100% SUKSES
                </span>
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER (SINKRON VOICE-OVER)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: `1.5px solid ${isSub72 ? "#f43f5e80" : "#fb718580"}`,
              borderRadius: 18,
              padding: "16px 22px",
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
                  backgroundColor: "rgba(244, 63, 94, 0.2)",
                  border: "1px solid #f43f5e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isSub72 ? (
                  <Bell size={20} color="#fda4af" />
                ) : (
                  <Send size={20} color="#fb7185" />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    letterSpacing: 1,
                  }}
                >
                  {isSub72 ? "SUB 7.2 // SUBSCRIBERS RECEIVE" : "SUB 7.1 // PUBLISHER EMIT"}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: isSub72 ? "#fda4af" : "#f43f5e",
                  }}
                >
                  {isSub72
                    ? "➔ LALU SUBSCRIBER YANG BERLANGGANAN MENERIMA TOPIK TERSEBUT BERSAMAAN."
                    : "➔ PUBLISHER MENGIRIM PESAN MELALUI TOPIK."}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
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
              <span>{isSub72 ? "BROADCAST OK" : "SUB 7.1 ➔"}</span>
              <ArrowRight size={13} color="#f43f5e" />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
