import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileText,
  Laptop,
  Loader2,
  Repeat,
  Send,
  Server,
  Sparkles,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 4: REQUEST & RESPONSE (SIMULASI FORMULIR)
 * Naskah: "Di http ada istilah Request dan Response"
 * ========================================================
 * Simulasi Pengiriman Formulir:
 * 1. Tombol diklik (relFrame 16 s/d 22):
 *    - Efek click compression (scale down & shockwave ripple)
 * 2. Panah Request melesat ke server (relFrame 22 s/d 44):
 *    - Paket [ 📤 POST /submit ] meluncur dengan ekor laser cyan berkecepatan tinggi
 * 3. Server berputar memproses (relFrame 44 s/d 64):
 *    - Spinner processor berputar cepat, status CPU bar memproses validasi database
 * 4. Response JSON meluncur turun (relFrame 64 s/d 90):
 *    - Server menyala hijau 200 OK, card Response JSON slide down dengan spring bounce
 *    - Client menerima konfirmasi sukses
 */
export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif Scene 4 (Global frame 510 s/d 690, durasi 180 frame)
  const relFrame = Math.max(0, frame - 510);

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. FASE 1: TOMBOL DIKLIK (relFrame 25 - 35)
  // ─────────────────────────────────────────────────────────────────────────────
  const isButtonClicked = relFrame >= 25;
  const buttonClickSpring = spring({
    frame: Math.max(0, relFrame - 25),
    fps,
    config: { damping: 10, mass: 0.35, stiffness: 240 },
  });
  // Efek klik membal: 1.0 -> 0.92 -> 1.0
  const buttonScale = isButtonClicked
    ? interpolate(buttonClickSpring, [0, 0.4, 1], [1.0, 0.92, 1.0])
    : 1.0;

  // Gelombang getar klik (ripple)
  const clickRippleScale = interpolate(
    relFrame,
    [25, 38],
    [1, 1.8],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const clickRippleOpacity = interpolate(
    relFrame,
    [25, 38],
    [0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. FASE 2: PANAH REQUEST MELESAT KE SERVER (relFrame 30 - 78)
  // ─────────────────────────────────────────────────────────────────────────────
  const isRequestFlying = relFrame >= 30 && relFrame <= 80;
  const requestProgress = interpolate(relFrame, [30, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. FASE 3: SERVER BERPUTAR MEMPROSES (relFrame 78 - 125)
  // ─────────────────────────────────────────────────────────────────────────────
  const isServerProcessing = relFrame >= 78 && relFrame < 125;
  const isServerCompleted = relFrame >= 125;

  // Kecepatan putaran spinner processor
  const serverSpin = (relFrame - 78) * 16;

  // Impact flash saat request pertama kali menyentuh server
  const serverImpactFlash = interpolate(
    relFrame,
    [78, 81, 90],
    [0, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Progress CPU processing bar (0% s/d 100%)
  const cpuProgress = interpolate(relFrame, [78, 122], [15, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. FASE 4: RESPONSE JSON MELUNCUR TURUN (relFrame 125 - 180)
  // ─────────────────────────────────────────────────────────────────────────────
  const isResponseDelivered = relFrame >= 125;

  // Animasi spring meluncur turun (Slide Down Physics)
  const responseSlideSpring = spring({
    frame: Math.max(0, relFrame - 125),
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 180 },
  });
  const responseTranslateY = isResponseDelivered
    ? interpolate(responseSlideSpring, [0, 1], [-45, 0])
    : -45;
  const responseOpacity = isResponseDelivered
    ? interpolate(responseSlideSpring, [0, 0.4, 1], [0, 0.8, 1])
    : 0;

  // Status HUD dinamis
  let hudStep = "LANGKAH 1 // ISI FORMULIR";
  let hudDetail = "Client menyiapkan formulir pengiriman data (HTTP Request)...";
  if (isResponseDelivered) {
    hudStep = "LANGKAH 4 // RESPONSE BERHASIL";
    hudDetail = "Server sukses membalas dengan status 200 OK & payload data JSON!";
  } else if (isServerProcessing) {
    hudStep = "LANGKAH 3 // SERVER MEMPROSES";
    hudDetail = "Backend memvalidasi input, menjalankan query database & logic...";
  } else if (isRequestFlying || isButtonClicked) {
    hudStep = "LANGKAH 2 // REQUEST MELESAT";
    hudDetail = "Tombol diklik, paket data POST melesat menuju Server...";
  }

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="04"
        tag="KONSEP HTTP // DUA PILAR"
        title="REQUEST & RESPONSE"
        subtitle="Di HTTP selalu ada dua istilah kunci yang berpasangan: Permintaan & Jawaban."
        accentColor="#6366f1"
        icon={Repeat}
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
              MAIN INTERACTIVE STAGE: CLIENT ➔ PIPELINE ➔ SERVER
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.94)",
              border: `2px solid ${isServerCompleted ? "rgba(16, 185, 129, 0.6)" : "rgba(99, 102, 241, 0.45)"}`,
              borderRadius: 24,
              padding: "24px 24px",
              boxShadow: isServerCompleted
                ? "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.2)"
                : "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)",
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
                <Send size={16} color="#818cf8" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: 1,
                  }}
                >
                  SIMULASI PENGIRIMAN FORMULIR (HTTP CYCLE)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 12,
                  backgroundColor: isServerCompleted
                    ? "rgba(16, 185, 129, 0.15)"
                    : isServerProcessing
                      ? "rgba(245, 158, 11, 0.15)"
                      : "rgba(99, 102, 241, 0.15)",
                  border: `1px solid ${isServerCompleted
                    ? "#10b981"
                    : isServerProcessing
                      ? "#f59e0b"
                      : "#6366f1"
                    }`,
                }}
              >
                {isServerCompleted ? (
                  <CheckCircle2 size={13} color="#34d399" />
                ) : isServerProcessing ? (
                  <Loader2 size={13} color="#fbbf24" style={{ transform: `rotate(${serverSpin}deg)` }} />
                ) : (
                  <Sparkles size={13} color="#a5b4fc" />
                )}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 900,
                    color: isServerCompleted
                      ? "#34d399"
                      : isServerProcessing
                        ? "#fbbf24"
                        : "#a5b4fc",
                  }}
                >
                  {isServerCompleted
                    ? "200 OK // SUCCESS"
                    : isServerProcessing
                      ? "PROCESSING DATA..."
                      : "READY TO SEND"}
                </span>
              </div>
            </div>

            {/* UPPER ROW: CLIENT (FORM) ⟷ LASER BRIDGE ⟷ SERVER (PROCESSOR) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "360px 1fr 360px",
                gap: 16,
                alignItems: "center",
              }}
            >
              {/* ═══════════════════════════════════════════════════════════
                  SISI KIRI: CLIENT FORMULIR PENGIRIMAN
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: `1.5px solid ${isButtonClicked ? "#38bdf8" : "rgba(255, 255, 255, 0.12)"}`,
                  borderRadius: 18,
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: isButtonClicked ? "0 0 20px rgba(56, 189, 248, 0.25)" : "none",
                }}
              >
                {/* Client Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Laptop size={16} color="#38bdf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                      CLIENT (BROWSER)
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#94a3b8", fontWeight: 700 }}>
                    FORM DATA
                  </span>
                </div>

                {/* Form Fields Mockup */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 8,
                      padding: "6px 10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b" }}>Nama:</span>
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#e2e8f0", fontWeight: 700 }}>
                      Budi Santoso
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 8,
                      padding: "6px 10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b" }}>Pesanan:</span>
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#38bdf8", fontWeight: 700 }}>
                      1x Kopi Espresso ☕
                    </span>
                  </div>
                </div>

                {/* 🔘 TOMBOL DIKLIK (INTERACTIVE SUBMIT BUTTON) */}
                <div style={{ position: "relative" }}>
                  {/* Click Ripple Wave */}
                  {clickRippleOpacity > 0.02 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: -4,
                        borderRadius: 14,
                        border: "2px solid #38bdf8",
                        transform: `scale(${clickRippleScale})`,
                        opacity: clickRippleOpacity,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div
                    style={{
                      transform: `scale(${buttonScale})`,
                      padding: "10px 14px",
                      borderRadius: 12,
                      backgroundColor: isButtonClicked
                        ? "linear-gradient(135deg, #0284c7, #0369a1)"
                        : "rgba(56, 189, 248, 0.2)",
                      border: `1.5px solid ${isButtonClicked ? "#38bdf8" : "rgba(56, 189, 248, 0.6)"}`,
                      boxShadow: isButtonClicked
                        ? "0 0 24px rgba(56, 189, 248, 0.6), inset 0 0 10px rgba(56, 189, 248, 0.4)"
                        : "0 0 12px rgba(56, 189, 248, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <Send size={14} color="#38bdf8" />
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        fontWeight: 950,
                        color: "#ffffff",
                        letterSpacing: 0.5,
                      }}
                    >
                      {isButtonClicked ? "✓ REQUEST TERKIRIM!" : "🚀 KIRIM REQUEST (POST)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════
                  TENGAH: LASER FLIGHT TRACK (PANAH REQUEST MELESAT)
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  position: "relative",
                  height: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* SVG Laser Track */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 160 120"
                  style={{ position: "absolute", inset: 0, overflow: "visible" }}
                >
                  <defs>
                    <filter id="reqGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Base Track Line */}
                  <line
                    x1="0"
                    y1="60"
                    x2="160"
                    y2="60"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Active Laser Trail when Request is Flying */}
                  {isRequestFlying && (
                    <>
                      <line
                        x1="0"
                        y1="60"
                        x2={interpolate(requestProgress, [0, 1], [0, 160])}
                        y2="60"
                        stroke="#38bdf8"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        filter="url(#reqGlow)"
                      />
                      {/* Traveling High-Speed Comet Bead */}
                      <circle
                        cx={interpolate(requestProgress, [0, 1], [0, 160])}
                        cy="60"
                        r="5"
                        fill="#ffffff"
                        filter="url(#reqGlow)"
                      />
                    </>
                  )}
                </svg>

                {/* Flying Request Badge */}
                {isRequestFlying && (
                  <div
                    style={{
                      position: "absolute",
                      left: `${requestProgress * 70}%`,
                      transform: "translate(-50%, -50%)",
                      top: "35%",
                      padding: "4px 10px",
                      borderRadius: 10,
                      backgroundColor: "rgba(14, 165, 233, 0.95)",
                      border: "1.5px solid #38bdf8",
                      boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      zIndex: 10,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 950, color: "#ffffff" }}>
                      POST /pesanan
                    </span>
                    <ArrowRight size={11} color="#ffffff" />
                  </div>
                )}

                {/* Status Indicator text in center */}
                {!isRequestFlying && !isServerProcessing && !isServerCompleted && (
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b" }}>
                    SIAP MELUNCUR ➔
                  </span>
                )}
              </div>

              {/* ═══════════════════════════════════════════════════════════
                  SISI KANAN: SERVER BERPUTAR MEMPROSES
              ════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: `1.5px solid ${isServerCompleted
                    ? "#10b981"
                    : isServerProcessing
                      ? "#f59e0b"
                      : "rgba(255, 255, 255, 0.12)"
                    }`,
                  borderRadius: 18,
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: isServerCompleted
                    ? "0 0 24px rgba(16, 185, 129, 0.35)"
                    : isServerProcessing
                      ? "0 0 24px rgba(245, 158, 11, 0.35)"
                      : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Impact Flash saat paket menabrak server */}
                {serverImpactFlash > 0.01 && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(56, 189, 248, 0.4)",
                      opacity: serverImpactFlash,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Server Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Server
                      size={16}
                      color={isServerCompleted ? "#10b981" : isServerProcessing ? "#fbbf24" : "#818cf8"}
                    />
                    <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                      BACKEND SERVER
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      fontWeight: 800,
                      color: isServerCompleted ? "#34d399" : isServerProcessing ? "#fbbf24" : "#94a3b8",
                    }}
                  >
                    PORT 443
                  </span>
                </div>

                {/* Central Processing Visual */}
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: 12,
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* ⚙️ SERVER BERPUTAR MEMPROSES (SPINNER WHEEL) */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: isServerCompleted
                        ? "rgba(16, 185, 129, 0.2)"
                        : isServerProcessing
                          ? "rgba(245, 158, 11, 0.2)"
                          : "rgba(255, 255, 255, 0.05)",
                      border: `1.5px solid ${isServerCompleted
                        ? "#10b981"
                        : isServerProcessing
                          ? "#f59e0b"
                          : "rgba(255, 255, 255, 0.15)"
                        }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isServerCompleted ? (
                      <CheckCircle2 size={24} color="#34d399" />
                    ) : isServerProcessing ? (
                      <Loader2
                        size={24}
                        color="#fbbf24"
                        style={{ transform: `rotate(${serverSpin}deg)` }}
                      />
                    ) : (
                      <Cpu size={22} color="#64748b" />
                    )}
                  </div>

                  {/* Processing Text & CPU Load Bar */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f8fafc" }}>
                      {isServerCompleted
                        ? "PROSES SELESAI"
                        : isServerProcessing
                          ? "MEMPROSES DATA..."
                          : "STANDBY WAITING"}
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: 5,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${isServerCompleted ? 100 : isServerProcessing ? cpuProgress : 0}%`,
                          height: "100%",
                          backgroundColor: isServerCompleted ? "#10b981" : "#f59e0b",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Database Save Indicator */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Database size={12} color="#94a3b8" />
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8" }}>
                    {isServerCompleted ? "Tersimpan ke Database (ID: #4928)" : "Database Ready"}
                  </span>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                LOWER ROW: 📜 RESPONSE JSON MELUNCUR TURUN (SLIDE DOWN SPRING)
            ───────────────────────────────────────────────────────────── */}
            {isResponseDelivered && (
              <div
                style={{
                  transform: `translateY(${responseTranslateY}px)`,
                  opacity: responseOpacity,
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  border: "2px solid #10b981",
                  borderRadius: 18,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.3)",
                }}
              >
                {/* Response Card Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingBottom: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        padding: "3px 8px",
                        borderRadius: 6,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid #10b981",
                        fontFamily: "monospace",
                        fontSize: 11,
                        fontWeight: 950,
                        color: "#34d399",
                      }}
                    >
                      HTTP 200 OK
                    </div>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        fontWeight: 900,
                        color: "#f8fafc",
                        letterSpacing: 0.5,
                      }}
                    >
                      RESPONSE JSON BODY (DITERIMA CLIENT)
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Code2 size={14} color="#34d399" />
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6ee7b7" }}>
                      application/json
                    </span>
                  </div>
                </div>

                {/* Code JSON Block */}
                <div
                  style={{
                    backgroundColor: "rgba(10, 15, 29, 0.8)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    borderRadius: 10,
                    padding: "12px 16px",
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  <div>&#123;</div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#38bdf8" }}>"status"</span>: <span style={{ color: "#34d399" }}>"success"</span>,
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#38bdf8" }}>"code"</span>: <span style={{ color: "#34d399", fontWeight: 700 }}>200</span>,
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#38bdf8" }}>"message"</span>: <span style={{ color: "#6ee7b7" }}>"Pesanan Kopi Berhasil Dibuat!"</span>,
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#38bdf8" }}>"orderId"</span>: <span style={{ color: "#fcd34d" }}>"ORD-2026-X9"</span>
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Bottom Success Banner */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 12px",
                    borderRadius: 8,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1" }}>
                    Siklus Lengkap: Client Request ➔ Server Response
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#34d399" }}>
                    ✓ 1 SIKLUS TERSELESAIKAN
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: `1.5px solid ${isServerCompleted ? "#10b98180" : "#6366f180"}`,
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
                  backgroundColor: isServerCompleted
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(99, 102, 241, 0.2)",
                  border: `1px solid ${isServerCompleted ? "#10b981" : "#6366f1"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isServerCompleted ? (
                  <CheckCircle2 size={20} color="#6ee7b7" />
                ) : (
                  <FileText size={20} color="#a5b4fc" />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#94a3b8",
                    letterSpacing: 1,
                  }}
                >
                  {hudStep}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: isServerCompleted ? "#6ee7b7" : "#a5b4fc",
                  }}
                >
                  {hudDetail}
                </span>
              </div>
            </div>

            {/* Pill Indicator */}
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
              <span>{isServerCompleted ? "SIKLUS SELESAI" : "REQ ➔ RES"}</span>
              <ArrowRight size={13} color="#a5b4fc" />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
