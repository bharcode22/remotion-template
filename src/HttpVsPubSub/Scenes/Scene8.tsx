import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  KeyRound,
  Radio,
  Send,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 8: KOMPARASI & CONTOH NYATA (BENTO BOX INTERAKTIF)
 * Naskah:
 * "lalu, bedanya apa.?"
 * - Sub8.1: HTTP ada proses request dari client sehingga mendapatkan response
 * - Sub8.2: Contohnya ketika login, get data profile, submit data diri ke sistem
 * - Sub8.3: Sedangkan Pub/Sub, client tidak perlu dan tidak pernah request
 * - Sub8.4: Contohnya: notifikasi, event trigger
 * ========================================================
 * Fitur Bento Box:
 * 1. Bento Card Kiri: HTTP Interactive (Klik Login ➔ Request meluncur ➔ 200 OK Token)
 * 2. Bento Card Kanan: Pub/Sub Interactive (Event masuk ➔ 3 ponsel bergetar & notif serentak)
 * 3. Bento Card Bawah: Matrix Perbandingan Komprehensif (Inisiator, Pola, Contoh Kasus)
 */
export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif terhadap startFrame Scene 8 (1440 s/d 1800, durasi 360 frame)
  const relFrame = Math.max(0, frame - 1440);

  // 4 Sub-Scene Stages berdasarkan naskah voiceover:
  // Sub 8.1: 0..90   (Konsep HTTP: Request-Response)
  // Sub 8.2: 90..180 (Contoh HTTP: Login, Profile, Form)
  // Sub 8.3: 180..270 (Konsep Pub/Sub: Client tidak pernah request)
  // Sub 8.4: 270..360 (Contoh Pub/Sub: Notifikasi, Event trigger & Outro)
  const isSub82 = relFrame >= 90;
  const isSub83 = relFrame >= 180;
  const isSub84 = relFrame >= 270;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. SIMULASI HTTP BENTO (KLIK LOGIN ➔ REQUEST ➔ RESPONSE TOKEN)
  // ─────────────────────────────────────────────────────────────────────────────
  const isHttpActive = !isSub83;

  // Klik tombol Login pada relFrame 30 - 45
  const httpClickSpring = spring({
    frame: Math.max(0, relFrame - 30),
    fps,
    config: { damping: 10, mass: 0.35, stiffness: 220 },
  });
  const httpButtonScale = relFrame >= 30
    ? interpolate(httpClickSpring, [0, 0.4, 1], [1.0, 0.93, 1.0])
    : 1.0;

  const isHttpTokenReturned = relFrame >= 75;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. SIMULASI PUB/SUB BENTO (BROADCAST EVENT ➔ 3 PONSEL NOTIF MASUK)
  // ─────────────────────────────────────────────────────────────────────────────
  const isPubSubActive = isSub83;

  // Event trigger memancar pada relFrame 200
  const isPubSubTriggered = relFrame >= 200;

  // Getar ponsel subscriber saat notif masuk
  const pubSubVibrate = isPubSubTriggered && relFrame < 320
    ? Math.sin((relFrame - 200) * 1.8) * 2.5
    : 0;

  // Pop-in spring untuk notifikasi masuk bersamaan
  const notifPopSpring = spring({
    frame: Math.max(0, relFrame - 205),
    fps,
    config: { damping: 10, mass: 0.4, stiffness: 200 },
  });
  const notifPopScale = isPubSubTriggered
    ? interpolate(notifPopSpring, [0, 1], [0.5, 1.0])
    : 0.5;
  const notifPopOpacity = isPubSubTriggered
    ? interpolate(notifPopSpring, [0, 0.5, 1], [0, 0.8, 1])
    : 0;

  // Dynamic HUD Subtitle
  let currentSubtitle = "HTTP membutuhkan inisiatif request dari client untuk mendapatkan response.";
  let hudStage = "SUB 8.1 // KONSEP HTTP";
  if (isSub84) {
    currentSubtitle = "Contoh Pub/Sub: Push notifikasi smartphone, event webhook, sensor IoT.";
    hudStage = "SUB 8.4 // CONTOH KASUS PUB/SUB";
  } else if (isSub83) {
    currentSubtitle = "Sedangkan pada Pub/Sub, client tidak pernah dan tidak perlu mengirim request.";
    hudStage = "SUB 8.3 // KONSEP PUB/SUB";
  } else if (isSub82) {
    currentSubtitle = "Contoh HTTP: Proses login akun, mengambil data profil, submit formulir.";
    hudStage = "SUB 8.2 // CONTOH KASUS HTTP";
  }

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="08"
        tag="KOMPARASI // KESIMPULAN & CONTOH"
        title="LALU, BEDANYA APA?"
        subtitle={currentSubtitle}
        accentColor="#f59e0b"
        icon={Sparkles}
        hideParentCard={true}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              UPPER BENTO BOX: SIMULASI LANGSUNG (HTTP VS PUB/SUB)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              width: "100%",
            }}
          >
            {/* ═══════════════════════════════════════════════════════════
                BENTO 1: HTTP MODEL (KLIK LOGIN ➔ REQUEST ➔ RESPONSE)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: `2px solid ${isHttpActive ? "#38bdf8" : "rgba(255, 255, 255, 0.12)"}`,
                borderRadius: 22,
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: isHttpActive
                  ? "0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.3)"
                  : "0 10px 25px rgba(0, 0, 0, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Header Box */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      backgroundColor: "rgba(56, 189, 248, 0.2)",
                      border: "1px solid #38bdf8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={15} color="#38bdf8" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 950, color: "#f8fafc" }}>
                      1. HTTP (1 KE 1)
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#38bdf8", fontWeight: 700 }}>
                      Request ➔ Response
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    fontWeight: 800,
                    color: isHttpActive ? "#38bdf8" : "#64748b",
                    backgroundColor: isHttpActive ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.05)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: `1px solid ${isHttpActive ? "rgba(56, 189, 248, 0.4)" : "transparent"}`,
                  }}
                >
                  HARUS REQUEST
                </span>
              </div>

              {/* Interactive Action: Tombol Login Diklik */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 12,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8" }}>
                    SIMULASI AKSI USER:
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#38bdf8" }}>
                    POST /api/login
                  </span>
                </div>

                {/* Tombol Login */}
                <div
                  style={{
                    transform: `scale(${httpButtonScale})`,
                    padding: "8px 12px",
                    borderRadius: 8,
                    backgroundColor: relFrame >= 30 ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: `1.5px solid ${relFrame >= 30 ? "#38bdf8" : "rgba(255, 255, 255, 0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <KeyRound size={14} color="#38bdf8" />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#ffffff" }}>
                    {relFrame >= 30 ? "✓ [ KLIK LOGIN AKUN ]" : "[ KLIK LOGIN AKUN ]"}
                  </span>
                </div>

                {/* Status Balasan Token */}
                <div
                  style={{
                    padding: "6px 10px",
                    borderRadius: 6,
                    backgroundColor: isHttpTokenReturned ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isHttpTokenReturned ? "#10b981" : "rgba(255, 255, 255, 0.06)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: isHttpTokenReturned ? "#34d399" : "#64748b" }}>
                    {isHttpTokenReturned ? "200 OK: Token Diterima!" : "Menunggu klik request..."}
                  </span>
                  {isHttpTokenReturned && <CheckCircle2 size={12} color="#34d399" />}
                </div>
              </div>

              {/* 3 Contoh Kasus Nyata HTTP (Sub 8.2) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                  CONTOH KASUS HTTP:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      backgroundColor: isSub82 ? "rgba(56, 189, 248, 0.18)" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isSub82 ? "#38bdf8" : "rgba(255, 255, 255, 0.1)"}`,
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: isSub82 ? 900 : 700,
                      color: isSub82 ? "#ffffff" : "#cbd5e1",
                    }}
                  >
                    🔑 1. Login Akun
                  </span>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      backgroundColor: isSub82 ? "rgba(56, 189, 248, 0.18)" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isSub82 ? "#38bdf8" : "rgba(255, 255, 255, 0.1)"}`,
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: isSub82 ? 900 : 700,
                      color: isSub82 ? "#ffffff" : "#cbd5e1",
                    }}
                  >
                    👤 2. Get Data Profile
                  </span>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      backgroundColor: isSub82 ? "rgba(56, 189, 248, 0.18)" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isSub82 ? "#38bdf8" : "rgba(255, 255, 255, 0.1)"}`,
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: isSub82 ? 900 : 700,
                      color: isSub82 ? "#ffffff" : "#cbd5e1",
                    }}
                  >
                    📝 3. Submit Formulir
                  </span>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                BENTO 2: PUB/SUB MODEL (EVENT MASUK ➔ 3 PONSEL NOTIF)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: `2px solid ${isPubSubActive ? "#f43f5e" : "rgba(255, 255, 255, 0.12)"}`,
                borderRadius: 22,
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: isPubSubActive
                  ? "0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(244, 63, 94, 0.3)"
                  : "0 10px 25px rgba(0, 0, 0, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Header Box */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      backgroundColor: "rgba(244, 63, 94, 0.2)",
                      border: "1px solid #f43f5e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Radio size={15} color="#f43f5e" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 950, color: "#f8fafc" }}>
                      2. PUB/SUB (1 KE BANYAK)
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#fda4af", fontWeight: 700 }}>
                      Event-Driven Broadcast
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    fontWeight: 800,
                    color: isPubSubActive ? "#fda4af" : "#64748b",
                    backgroundColor: isPubSubActive ? "rgba(244, 63, 94, 0.15)" : "rgba(255, 255, 255, 0.05)",
                    padding: "3px 8px",
                    borderRadius: 6,
                    border: `1px solid ${isPubSubActive ? "rgba(244, 63, 94, 0.4)" : "transparent"}`,
                  }}
                >
                  TANPA REQUEST!
                </span>
              </div>

              {/* Interactive Action: Event Masuk Otomatis */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 12,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8" }}>
                    EVENT DARI BROKER:
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#fda4af" }}>
                    topic: notif/promo
                  </span>
                </div>

                {/* 3 Ponsel Bergetar Serentak */}
                <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      style={{
                        flex: 1,
                        transform: `rotate(${pubSubVibrate}deg) translate(${pubSubVibrate}px, ${-pubSubVibrate}px)`,
                        padding: "6px 4px",
                        borderRadius: 8,
                        backgroundColor: isPubSubTriggered ? "rgba(244, 63, 94, 0.2)" : "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${isPubSubTriggered ? "#f43f5e" : "rgba(255, 255, 255, 0.1)"}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Smartphone size={14} color={isPubSubTriggered ? "#f43f5e" : "#64748b"} />
                      <span style={{ fontFamily: "monospace", fontSize: 9, color: "#f8fafc", fontWeight: 700 }}>
                        User {num}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badge Notifikasi Otomatis Masuk */}
                <div
                  style={{
                    transform: `scale(${notifPopScale})`,
                    opacity: notifPopOpacity,
                    padding: "6px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(244, 63, 94, 0.22)",
                    border: "1px solid #f43f5e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Bell size={12} color="#fda4af" />
                    <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 900, color: "#ffffff" }}>
                      🔔 3x NOTIFIKASI MASUK!
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#fda4af", fontWeight: 800 }}>
                    SERENTAK
                  </span>
                </div>
              </div>

              {/* 2 Contoh Kasus Nyata Pub/Sub (Sub 8.4) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                  CONTOH KASUS PUB/SUB:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      backgroundColor: isSub84 ? "rgba(244, 63, 94, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isSub84 ? "#f43f5e" : "rgba(255, 255, 255, 0.1)"}`,
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: isSub84 ? 900 : 700,
                      color: isSub84 ? "#ffffff" : "#cbd5e1",
                    }}
                  >
                    🔔 1. Push Notifikasi HP
                  </span>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      backgroundColor: isSub84 ? "rgba(244, 63, 94, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${isSub84 ? "#f43f5e" : "rgba(255, 255, 255, 0.1)"}`,
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: isSub84 ? 900 : 700,
                      color: isSub84 ? "#ffffff" : "#cbd5e1",
                    }}
                  >
                    ⚡ 2. Realtime Event Trigger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              LOWER BENTO BOX: DIRECT MATRIX COMPARISON TABLE
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 18,
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 6 }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f8fafc", letterSpacing: 1 }}>
                TABEL RINGKASAN PERBANDINGAN
              </span>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: "#f59e0b", fontWeight: 800 }}>
                SUMMARY MATRIX
              </span>
            </div>

            {/* Matrix Row 1: Pola */}
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 12, alignItems: "center", fontSize: 11, fontFamily: "monospace" }}>
              <span style={{ color: "#94a3b8" }}>Pola Komunikasi:</span>
              <span style={{ color: "#38bdf8", fontWeight: 700 }}>1 ke 1 (Point-to-Point)</span>
              <span style={{ color: "#f472b6", fontWeight: 700 }}>1 ke Banyak (Broadcast)</span>
            </div>

            {/* Matrix Row 2: Inisiator */}
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 12, alignItems: "center", fontSize: 11, fontFamily: "monospace" }}>
              <span style={{ color: "#94a3b8" }}>Inisiator Data:</span>
              <span style={{ color: "#38bdf8", fontWeight: 700 }}>Client (Harus Request)</span>
              <span style={{ color: "#f472b6", fontWeight: 700 }}>Broker (Tanpa Request)</span>
            </div>

            {/* Matrix Row 3: Karakteristik */}
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 12, alignItems: "center", fontSize: 11, fontFamily: "monospace" }}>
              <span style={{ color: "#94a3b8" }}>Karakteristik:</span>
              <span style={{ color: "#cbd5e1" }}>Synchronous Request-Reply</span>
              <span style={{ color: "#cbd5e1" }}>Asynchronous Event-Driven</span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER (SINKRON VOICE-OVER)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(245, 158, 11, 0.4)",
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
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  border: "1px solid #f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={20} color="#fbbf24" />
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
                  {hudStage}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: isSub83 ? "#fda4af" : "#38bdf8",
                  }}
                >
                  {currentSubtitle}
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
              <span>{isSub84 ? "TAMAT" : "KOMPARASI ➔"}</span>
              <ArrowRight size={13} color="#f59e0b" />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
