import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  Bell,
  CheckCircle2,
  Coffee,
  GitFork,
  Radio,
  Send,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * SCENE 2: OVERVIEW (METAFORA NYATA: HTTP VS PUB/SUB)
 * Naskah: "Secara umum, ada 2 cara, yaitu HTTP dan Pub/Sub."
 * ========================================================
 * - Tanpa card induk (Clean Modern Layout)
 * - Staggered entrance simetris
 * - METAFORA NYATA:
 *   • HTTP: Simulasi tombol "Pesan Kopi" ➔ Server membalas "200 OK"
 *   • Pub/Sub: Menara pemancar broadcast ➔ 3 smartphone berdering notifikasi serentak
 * - Sorotan dinamis mengikuti jalannya voiceover
 */
export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif Scene 2 (Global frame 120 - 210, durasi 90 frame)
  const relFrame = Math.max(0, frame - 120);

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. STAGGERED CASCADING ENTRANCE SPRINGS
  // ─────────────────────────────────────────────────────────────────────────────
  const springConfig = { damping: 16, mass: 0.6, stiffness: 110 };

  // Card HTTP (Kiri)
  const sHttp = spring({ frame: relFrame, fps, config: springConfig });
  const httpTranslateX = interpolate(sHttp, [0, 1], [-45, 0]);
  const httpTranslateY = interpolate(sHttp, [0, 1], [25, 0]);
  const httpOpacity = sHttp;

  // Card Pub/Sub (Kanan) — Jeda 5 frame
  const sPubSub = spring({ frame: Math.max(0, relFrame - 5), fps, config: springConfig });
  const pubSubTranslateX = interpolate(sPubSub, [0, 1], [45, 0]);
  const pubSubTranslateY = interpolate(sPubSub, [0, 1], [25, 0]);
  const pubSubOpacity = sPubSub;

  // Bottom HUD Telemetry — Jeda 12 frame
  const sHud = spring({ frame: Math.max(0, relFrame - 12), fps, config: springConfig });
  const hudTranslateY = interpolate(sHud, [0, 1], [30, 0]);
  const hudOpacity = sHud;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. SINKRONISASI FASE SOROTAN NARASI (VOICEOVER)
  // ─────────────────────────────────────────────────────────────────────────────
  const isHttpFocus = relFrame >= 30 && relFrame < 60;
  const isPubSubFocus = relFrame >= 60;

  const httpBorderColor = isHttpFocus ? "#06b6d4" : "rgba(6, 182, 212, 0.4)";
  const httpGlow = isHttpFocus ? "0 0 35px rgba(6, 182, 212, 0.45)" : "0 10px 30px rgba(0, 0, 0, 0.5)";

  const pubSubBorderColor = isPubSubFocus ? "#ec4899" : "rgba(236, 72, 153, 0.4)";
  const pubSubGlow = isPubSubFocus ? "0 0 35px rgba(236, 72, 153, 0.45)" : "0 10px 30px rgba(0, 0, 0, 0.5)";

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. SIMULASI NYATA HTTP (KLIK PESAN KOPI ➔ REQUEST ➔ RESPONSE 200 OK)
  // ─────────────────────────────────────────────────────────────────────────────
  // Tombol "Pesan Kopi" tertekan di relFrame 20..26
  const isBtnPressed = relFrame >= 20 && relFrame <= 26;
  const btnScale = isBtnPressed ? 0.92 : 1.0;

  // Paket Request meluncur dari Phone (kiri) ke Server (kanan): relFrame 22..42
  const reqProgress = interpolate(relFrame, [22, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const reqX = interpolate(reqProgress, [0, 1], [35, 145]);
  const reqOpacity = reqProgress > 0 && reqProgress < 1 ? 1 : 0;

  // Server LED berkedip saat memproses: relFrame 40..50
  const serverProcessing = relFrame >= 40 && relFrame <= 50;

  // Paket Response meluncur dari Server (kanan) ke Phone (kiri): relFrame 48..68
  const resProgress = interpolate(relFrame, [48, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const resX = interpolate(resProgress, [0, 1], [145, 35]);
  const resOpacity = resProgress > 0 && resProgress < 1 ? 1 : 0;

  // Pop-up Struk Sukses muncul di smartphone setelah Response tiba (relFrame >= 66)
  const isHttpSuccess = relFrame >= 66;

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. SIMULASI NYATA PUB/SUB (MENARA EVENT MEMANCARKAN KE 3 SMARTPHONE)
  // ─────────────────────────────────────────────────────────────────────────────
  // Menara Broadcast memancarkan gelombang radar berulang
  const waveCycle = (relFrame * 0.05) % 1;
  const waveScale = 1 + waveCycle * 1.8;
  const waveOpacity = interpolate(waveCycle, [0, 0.7, 1], [0.8, 0.3, 0]);

  const waveCycle2 = ((relFrame + 10) * 0.05) % 1;
  const waveScale2 = 1 + waveCycle2 * 1.8;
  const waveOpacity2 = interpolate(waveCycle2, [0, 0.7, 1], [0.8, 0.3, 0]);

  // Notifikasi muncul serentak di ketiga smartphone penerima (relFrame >= 45)
  const isNotifRinging = relFrame >= 45;
  const notifBellShake = isNotifRinging ? Math.sin(relFrame * 0.8) * 8 : 0;

  // Dynamic HUD Status Text
  let hudTitle = "DUAL PARADIGM OVERVIEW";
  let hudSubtitle = "Secara umum, komunikasi aplikasi terbagi menjadi 2 cara utama:";
  let hudBadge = "2 METODE";

  if (isPubSubFocus) {
    hudTitle = "CARA 2: MODEL PUB/SUB (BROADCAST)";
    hudSubtitle = "Satu sumber menyiarkan event ➔ Semua subscriber menerima notifikasi otomatis!";
    hudBadge = "PUB / SUB";
  } else if (isHttpFocus) {
    hudTitle = "CARA 1: PROTOKOL HTTP (REQUEST-RESPONSE)";
    hudSubtitle = "Client harus meminta terlebih dahulu ➔ Server baru mengirimkan balasan!";
    hudBadge = "HTTP";
  }

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="02"
        tag="OVERVIEW // 2 METODE UTAMA"
        title="SECARA UMUM, ADA 2 CARA"
        subtitle="Yaitu protokol HTTP dan arsitektur Pub/Sub."
        accentColor="#06b6d4"
        icon={GitFork}
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
              DUAL INTERACTIVE CARDS: HTTP (KIRI) VS PUB/SUB (KANAN)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              width: "100%",
            }}
          >
            {/* ═══════════════════════════════════════════════════════════
                KARTU 1: HTTP — SIMULASI "ORDER KOPI" (1-to-1 Req/Res)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: `2px solid ${httpBorderColor}`,
                borderRadius: 24,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxShadow: httpGlow,
                position: "relative",
                overflow: "hidden",
                transform: `translate3d(${httpTranslateX}px, ${httpTranslateY}px, 0)`,
                opacity: httpOpacity,
              }}
            >
              {/* Header Pill */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(6, 182, 212, 0.15)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#38bdf8",
                  }}
                >
                  CARA 01
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#06b6d4",
                    letterSpacing: 1,
                  }}
                >
                  1-TO-1 DIRECT
                </div>
              </div>

              {/* Title & Concept */}
              <div>
                <div style={{ fontFamily: "monospace", fontSize: 24, fontWeight: 950, color: "#f8fafc" }}>
                  HTTP
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: "#38bdf8" }}>
                  Request & Response
                </div>
              </div>

              {/* ☕ METAFORA NYATA: Interactive Coffee Order Stage */}
              <div
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.06)",
                  border: "1.5px solid rgba(6, 182, 212, 0.25)",
                  borderRadius: 18,
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  minHeight: 140,
                }}
              >
                {/* Visual Interaksi: Smartphone ⟷ Laser Line ⟷ Server */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                  {/* Client Smartphone */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(6, 182, 212, 0.2)",
                        border: "1.5px solid #06b6d4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Smartphone size={22} color="#38bdf8" />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                      CLIENT
                    </span>
                  </div>

                  {/* SVG Transit Laser Line with Comet Particles */}
                  <svg
                    width="180"
                    height="40"
                    viewBox="0 0 180 40"
                    style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
                  >
                    <line x1="20" y1="20" x2="160" y2="20" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
                    {/* Outbound Request Comet */}
                    {reqOpacity > 0 && (
                      <g transform={`translate(${reqX}, 14)`}>
                        <circle r="4" fill="#38bdf8" />
                        <line x1="-12" y1="0" x2="0" y2="0" stroke="#38bdf8" strokeWidth="2.5" opacity="0.6" />
                      </g>
                    )}
                    {/* Inbound Response Comet */}
                    {resOpacity > 0 && (
                      <g transform={`translate(${resX}, 26)`}>
                        <circle r="4" fill="#22d3ee" />
                        <line x1="0" y1="0" x2="12" y2="0" stroke="#22d3ee" strokeWidth="2.5" opacity="0.6" />
                      </g>
                    )}
                  </svg>

                  {/* Server Node */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: serverProcessing ? "rgba(16, 185, 129, 0.3)" : "rgba(6, 182, 212, 0.2)",
                        border: `1.5px solid ${serverProcessing ? "#10b981" : "#06b6d4"}`,
                        boxShadow: serverProcessing ? "0 0 16px #10b981" : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Server size={22} color={serverProcessing ? "#34d399" : "#06b6d4"} />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                      SERVER
                    </span>
                  </div>
                </div>

                {/* Interactive Action Button: "Pesan Kopi" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 12px",
                    borderRadius: 12,
                    backgroundColor: isBtnPressed ? "rgba(6, 182, 212, 0.35)" : "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                    transform: `scale(${btnScale})`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Coffee size={16} color="#38bdf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 800, color: "#f8fafc" }}>
                      KLIK: PESAN KOPI
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Send size={12} color="#38bdf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#38bdf8", fontWeight: 700 }}>
                      REQUEST
                    </span>
                  </div>
                </div>

                {/* Result Pill: 200 OK Struk Pesanan */}
                <div
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    backgroundColor: isHttpSuccess ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isHttpSuccess ? "#10b981" : "rgba(255, 255, 255, 0.08)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <CheckCircle2 size={13} color={isHttpSuccess ? "#10b981" : "#64748b"} />
                    <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: isHttpSuccess ? "#6ee7b7" : "#64748b" }}>
                      {isHttpSuccess ? "RESPONSE: 200 OK (SUKSES)" : "MENUNGGU BALASAN..."}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tag Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ padding: "4px 8px", borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                  👉 Harus Request Dulu
                </span>
                <span style={{ padding: "4px 8px", borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                  1 Client ➔ 1 Server
                </span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                KARTU 2: PUB/SUB — SIMULASI "SIARAN NOTIFIKASI" (1-to-Many)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: `2px solid ${pubSubBorderColor}`,
                borderRadius: 24,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxShadow: pubSubGlow,
                position: "relative",
                overflow: "hidden",
                transform: `translate3d(${pubSubTranslateX}px, ${pubSubTranslateY}px, 0)`,
                opacity: pubSubOpacity,
              }}
            >
              {/* Header Pill */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(236, 72, 153, 0.15)",
                    border: "1px solid rgba(236, 72, 153, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#f472b6",
                  }}
                >
                  CARA 02
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#ec4899",
                    letterSpacing: 1,
                  }}
                >
                  1-TO-MANY ASYNC
                </div>
              </div>

              {/* Title & Concept */}
              <div>
                <div style={{ fontFamily: "monospace", fontSize: 24, fontWeight: 950, color: "#f8fafc" }}>
                  PUB / SUB
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: "#f472b6" }}>
                  Publisher & Subscriber
                </div>
              </div>

              {/* 📡 METAFORA NYATA: Interactive Broadcast Tower & 3 Phones */}
              <div
                style={{
                  backgroundColor: "rgba(236, 72, 153, 0.06)",
                  border: "1.5px solid rgba(236, 72, 153, 0.25)",
                  borderRadius: 18,
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  minHeight: 140,
                }}
              >
                {/* Central Broadcast Tower + Waves */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {/* Menara Pemancar */}
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                    {/* Shockwave Rings */}
                    <div
                      style={{
                        position: "absolute",
                        top: "22px",
                        left: "50%",
                        transform: `translate(-50%, -50%) scale(${waveScale})`,
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1.5px solid #ec4899",
                        opacity: waveOpacity,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "22px",
                        left: "50%",
                        transform: `translate(-50%, -50%) scale(${waveScale2})`,
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1.5px solid #f472b6",
                        opacity: waveOpacity2,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: "rgba(236, 72, 153, 0.2)",
                        border: "1.5px solid #ec4899",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Radio size={22} color="#f472b6" />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#f472b6" }}>
                      PUBLISHER
                    </span>
                  </div>

                  {/* Radio Broadcast Waves Indicator */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                      <Zap size={14} color="#f472b6" />
                      <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f472b6" }}>
                        SIARKAN
                      </span>
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 9, color: "#cbd5e1" }}>
                      TOPIC EVENT
                    </span>
                  </div>

                  {/* Cluster 3 Penerima Smartphone */}
                  <div style={{ display: "flex", gap: 6, alignItems: "center", zIndex: 2 }}>
                    {[1, 2, 3].map((idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <div
                          style={{
                            width: 28,
                            height: 38,
                            borderRadius: 8,
                            backgroundColor: isNotifRinging ? "rgba(236, 72, 153, 0.3)" : "rgba(255, 255, 255, 0.05)",
                            border: `1px solid ${isNotifRinging ? "#f472b6" : "rgba(255, 255, 255, 0.15)"}`,
                            boxShadow: isNotifRinging ? "0 0 10px rgba(236, 72, 153, 0.5)" : "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Smartphone size={15} color={isNotifRinging ? "#f472b6" : "#64748b"} />
                        </div>
                        <span style={{ fontFamily: "monospace", fontSize: 8, color: "#94a3b8" }}>
                          SUB {idx}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pop-up Live Notifikasi Berdering Bersamaan */}
                <div
                  style={{
                    padding: "8px 12px",
                    borderRadius: 12,
                    backgroundColor: isNotifRinging ? "rgba(236, 72, 153, 0.22)" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${isNotifRinging ? "#ec4899" : "rgba(255, 255, 255, 0.08)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: isNotifRinging ? "0 0 16px rgba(236, 72, 153, 0.3)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ transform: `rotate(${notifBellShake}deg)` }}>
                      <Bell size={16} color={isNotifRinging ? "#f472b6" : "#64748b"} />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: isNotifRinging ? "#f8fafc" : "#64748b" }}>
                      {isNotifRinging ? "3x NOTIFIKASI MASUK!" : "MENUNGGU EVENT..."}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: 800,
                      color: isNotifRinging ? "#f472b6" : "#64748b",
                    }}
                  >
                    {isNotifRinging ? "INSTANT ⚡" : "STANDBY"}
                  </span>
                </div>

                {/* Result Pill */}
                <div
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                    Tanpa perlu request satu-satu!
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#f472b6" }}>
                    1 Sinyal ➔ Banyak
                  </span>
                </div>
              </div>

              {/* Tag Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ padding: "4px 8px", borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                  📡 Broadcast Sekali
                </span>
                <span style={{ padding: "4px 8px", borderRadius: 8, backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "monospace", fontSize: 10, color: "#cbd5e1" }}>
                  ⚡ Terima Bersama
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER (SINKRON VOICE-OVER)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: `1.5px solid ${isPubSubFocus ? "#ec489980" : "#06b6d480"}`,
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(16px)",
              transform: `translate3d(0, ${hudTranslateY}px, 0)`,
              opacity: hudOpacity,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: isPubSubFocus ? "rgba(236, 72, 153, 0.2)" : "rgba(6, 182, 212, 0.2)",
                  border: `1px solid ${isPubSubFocus ? "#ec4899" : "#06b6d4"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isPubSubFocus ? (
                  <Radio size={20} color="#f472b6" />
                ) : (
                  <Zap size={20} color="#38bdf8" />
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
                  {hudTitle}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 15,
                    fontWeight: 800,
                    color: isPubSubFocus ? "#f472b6" : "#38bdf8",
                  }}
                >
                  {hudSubtitle}
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
              {hudBadge}
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
