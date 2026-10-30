import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Loader2,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  Unlock,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 3: INTRO HTTP (URL TYPING, SSL LOCK & 200 OK DENTANG)
 * Naskah: "Kita mulai dari HTTP"
 * ========================================================
 * 1. URL Bar yang benar-benar mengetik alamat web:
 *    - Karakter "api.aplikasi.com/v1/users" diketik satu per satu (relFrame 6 s/d 30)
 *    - Kursor berkedip realistis di ujung teks
 * 2. Gembok HTTPS yang mengunci dengan kilatan cahaya hijau:
 *    - Bermula dari status terbuka (Unlock / amber)
 *    - Di relFrame 34: Gembok SNAP mengunci (Lock / emerald)
 *    - Disertai kilatan cahaya hijau (green lens flare burst) yang memancar terang
 * 3. Status 200 OK yang berdentang:
 *    - Di relFrame 44: Badge 200 OK STAMP IN dengan efek dentang (spring overshoot scale)
 *    - Gelombang cincin resonansi (shockwave ripple) memancar keluar
 *    - Response body JSON dan kartu HTTP GET menyala terang
 */
export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif Scene 3 (Global frame 330 s/d 480, durasi 150 frame)
  const relFrame = Math.max(0, frame - 330);

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. EFEK MENGETIK URL (REALISTIC TYPEWRITER)
  // ─────────────────────────────────────────────────────────────────────────────
  const fullUrl = "api.aplikasi.com/v1/users";
  // Mengetik mulai relFrame 10 s/d 65 (55 frame untuk 25 karakter)
  const typingCharCount = Math.floor(
    interpolate(relFrame, [10, 65], [0, fullUrl.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedUrl = fullUrl.slice(0, typingCharCount);
  const remainingPlaceholder = fullUrl.slice(typingCharCount);
  const isTyping = relFrame >= 10 && relFrame < 65;

  // Blinking cursor
  const cursorBlink = Math.sin(relFrame * 0.35) > 0;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. GEMBOK HTTPS SNAP & KILATAN CAHAYA HIJAU (relFrame >= 75)
  // ─────────────────────────────────────────────────────────────────────────────
  const isLocked = relFrame >= 75;

  // Snap spring mekanis saat gembok mengunci
  const lockSnapSpring = spring({
    frame: Math.max(0, relFrame - 75),
    fps,
    config: { damping: 11, mass: 0.45, stiffness: 220 },
  });
  const lockScale = isLocked
    ? interpolate(lockSnapSpring, [0, 1], [1.45, 1.0])
    : 1.0;

  // Kilatan cahaya hijau (radial lens flare & aura burst)
  const greenFlashOpacity = interpolate(
    relFrame,
    [74, 76, 88],
    [0, 0.95, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const greenFlashScale = interpolate(
    relFrame,
    [74, 88],
    [0.3, 2.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. STATUS 200 OK BERDENTANG (SPRING IMPACT OVERSHOOT) (relFrame >= 95)
  // ─────────────────────────────────────────────────────────────────────────────
  const isOkStamp = relFrame >= 95;

  const dentangSpring = spring({
    frame: Math.max(0, relFrame - 95),
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 190 },
  });
  const dentangScale = isOkStamp
    ? interpolate(dentangSpring, [0, 1], [1.75, 1.0])
    : 1.0;

  // Gelombang getar / cincin resonansi dentang
  const ringScale = isOkStamp
    ? interpolate(dentangSpring, [0, 1], [0.8, 2.3])
    : 1.0;
  const ringOpacity = isOkStamp
    ? interpolate(dentangSpring, [0, 0.25, 1], [0, 0.85, 0])
    : 0;

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. METODE UTAMA HTTP (GET, POST, PUT, DELETE)
  // ─────────────────────────────────────────────────────────────────────────────
  const httpMethods = [
    { name: "GET", desc: "Ambil Data (Read)", color: "#38bdf8", isUsed: true },
    { name: "POST", desc: "Kirim Data (Create)", color: "#10b981", isUsed: false },
    { name: "PUT", desc: "Update Data (Update)", color: "#f59e0b", isUsed: false },
    { name: "DELETE", desc: "Hapus Data (Delete)", color: "#ef4444", isUsed: false },
  ];

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="03"
        tag="MODUL 1 // PENGENALAN"
        title="KITA MULAI DARI HTTP"
        subtitle="Hypertext Transfer Protocol — protokol komunikasi standar dunia web."
        accentColor="#3b82f6"
        icon={Globe}
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
              BAGIAN 1: CYBER URL ADDRESS BAR (TYPING + SSL LOCK + 200 OK)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.94)",
              border: `2px solid ${isLocked ? "rgba(16, 185, 129, 0.6)" : "rgba(59, 130, 246, 0.4)"}`,
              borderRadius: 22,
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: isLocked
                ? "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.25)"
                : "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(59, 130, 246, 0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Kilatan Cahaya Hijau saat Gembok Mengunci (Radial Flash Burst) */}
            {greenFlashOpacity > 0.01 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 170,
                  transform: `translate(-50%, -50%) scale(${greenFlashScale})`,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.55) 45%, transparent 75%)",
                  opacity: greenFlashOpacity,
                  pointerEvents: "none",
                  zIndex: 20,
                  filter: "blur(4px)",
                }}
              />
            )}

            {/* Sisi Kiri: Mac Window Dots & Gembok HTTPS */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Window Controls */}
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#ef4444", opacity: 0.85 }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#f59e0b", opacity: 0.85 }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#10b981", opacity: 0.85 }} />
              </div>

              {/* 🔒 Gembok HTTPS Pill dengan Animasi Snap & Kilatan */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 12,
                  backgroundColor: isLocked ? "rgba(16, 185, 129, 0.18)" : "rgba(245, 158, 11, 0.12)",
                  border: `1.5px solid ${isLocked ? "#10b981" : "rgba(245, 158, 11, 0.4)"}`,
                  boxShadow: isLocked ? "0 0 20px rgba(16, 185, 129, 0.45)" : "none",
                  transform: `scale(${lockScale})`,
                }}
              >
                {isLocked ? (
                  <Lock size={15} color="#34d399" />
                ) : (
                  <Unlock size={15} color="#fbbf24" />
                )}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 900,
                    color: isLocked ? "#34d399" : "#fbbf24",
                    letterSpacing: 0.5,
                  }}
                >
                  {isLocked ? "HTTPS // SECURE" : "HTTP // CONNECTING"}
                </span>
              </div>
            </div>

            {/* ⌨️ Sisi Tengah: URL Address Input yang Sedang Mengetik */}
            <div
              style={{
                flex: 1,
                maxWidth: 440,
                margin: "0 18px",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: `1.5px solid ${isTyping ? "#38bdf8" : "rgba(255, 255, 255, 0.12)"}`,
                boxShadow: isTyping ? "0 0 16px rgba(56, 189, 248, 0.3)" : "none",
                borderRadius: 12,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                fontFamily: "monospace",
                fontSize: 14,
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {/* Protocol scheme */}
              <span style={{ color: "#38bdf8", fontWeight: 900 }}>https://</span>

              {/* Teks yang sedang diketik huruf demi huruf */}
              <span style={{ color: "#ffffff", fontWeight: 800, marginLeft: 2 }}>
                {typedUrl}
              </span>

              {/* Blinking Cursor */}
              <span
                style={{
                  width: 2.5,
                  height: 17,
                  backgroundColor: cursorBlink ? "#38bdf8" : "transparent",
                  display: "inline-block",
                  marginLeft: 2,
                  boxShadow: cursorBlink ? "0 0 8px #38bdf8" : "none",
                }}
              />

              {/* Dim Placeholder sisa karakter (autocomplete effect) */}
              <span style={{ color: "rgba(255, 255, 255, 0.18)", marginLeft: 1 }}>
                {remainingPlaceholder}
              </span>
            </div>

            {/* 🔔 Sisi Kanan: Status 200 OK yang Berdentang */}
            <div style={{ position: "relative", minWidth: 120, display: "flex", justifyContent: "flex-end" }}>
              {!isOkStamp ? (
                // State Menunggu (Pending Handshake)
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Loader2 size={13} color="#94a3b8" style={{ transform: `rotate(${frame * 7}deg)` }} />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>
                    WAITING
                  </span>
                </div>
              ) : (
                // State 200 OK Berdentang (Resonant Spring Stamp)
                <div style={{ position: "relative" }}>
                  {/* Gelombang Cincin Resonansi Dentang */}
                  {ringOpacity > 0.02 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: -4,
                        borderRadius: 14,
                        border: "2px solid #22c55e",
                        transform: `scale(${ringScale})`,
                        opacity: ringOpacity,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  {/* Stamp Badge */}
                  <div
                    style={{
                      transform: `scale(${dentangScale})`,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 16px",
                      borderRadius: 14,
                      backgroundColor: "rgba(34, 197, 94, 0.22)",
                      border: "2px solid #22c55e",
                      boxShadow: "0 0 25px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    <CheckCircle2 size={16} color="#4ade80" />
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 14,
                        fontWeight: 950,
                        color: "#ffffff",
                        letterSpacing: 1,
                        textShadow: "0 0 12px rgba(74, 222, 128, 0.9)",
                      }}
                    >
                      200 OK
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              BAGIAN 2: PROTOKOL ANATOMY (INSPECTOR CARD)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.92)",
              border: "1.5px solid rgba(59, 130, 246, 0.35)",
              borderRadius: 22,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Inspector Header Bar */}
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
                <Terminal size={18} color="#60a5fa" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: 1,
                  }}
                >
                  HTTP PROTOCOL INSPECTOR
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Server size={14} color="#3b82f6" />
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>
                  PORT: 443 (HTTPS // TLS v1.3)
                </span>
              </div>
            </div>

            {/* Split Visual: Headers vs JSON Response Body */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {/* Kolom Kiri: Request Headers */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: 14,
                  padding: "16px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#38bdf8",
                      letterSpacing: 1,
                    }}
                  >
                    REQUEST HEADERS
                  </span>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      color: "#38bdf8",
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      padding: "2px 6px",
                      borderRadius: 4,
                      fontWeight: 800,
                    }}
                  >
                    OUTBOUND
                  </span>
                </div>

                <div style={{ fontFamily: "monospace", fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
                  <div>
                    <span style={{ color: "#38bdf8", fontWeight: 700 }}>GET</span>{" "}
                    <span style={{ color: "#ffffff" }}>/v1/users HTTP/2</span>
                  </div>
                  <div>
                    <span style={{ color: "#64748b" }}>Host:</span> api.aplikasi.com
                  </div>
                  <div>
                    <span style={{ color: "#64748b" }}>Accept:</span> application/json
                  </div>
                  <div>
                    <span style={{ color: "#64748b" }}>Security:</span> TLS 1.3 (Encrypted)
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Response Body JSON */}
              <div
                style={{
                  backgroundColor: isOkStamp ? "rgba(15, 23, 42, 0.85)" : "rgba(15, 23, 42, 0.5)",
                  border: `1px solid ${isOkStamp ? "rgba(34, 197, 94, 0.45)" : "rgba(255, 255, 255, 0.08)"}`,
                  boxShadow: isOkStamp ? "0 0 20px rgba(34, 197, 94, 0.15)" : "none",
                  borderRadius: 14,
                  padding: "16px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      color: isOkStamp ? "#4ade80" : "#94a3b8",
                      letterSpacing: 1,
                    }}
                  >
                    RESPONSE BODY (JSON)
                  </span>
                  <Code2 size={13} color={isOkStamp ? "#4ade80" : "#94a3b8"} />
                </div>

                {isOkStamp ? (
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
                    <div>&#123;</div>
                    <div style={{ paddingLeft: 14 }}>
                      <span style={{ color: "#38bdf8" }}>"status"</span>: <span style={{ color: "#4ade80", fontWeight: 700 }}>200</span>,
                    </div>
                    <div style={{ paddingLeft: 14 }}>
                      <span style={{ color: "#38bdf8" }}>"message"</span>: <span style={{ color: "#4ade80" }}>"OK // Success"</span>,
                    </div>
                    <div style={{ paddingLeft: 14 }}>
                      <span style={{ color: "#38bdf8" }}>"protocol"</span>: <span style={{ color: "#fbbf24" }}>"HTTP/2 (SSL)"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 80 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b" }}>
                      Menunggu balasan 200 OK server...
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                BAGIAN 3: 4 METODE UTAMA HTTP (GET, POST, PUT, DELETE)
            ────────────────────────────────────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: 1 }}>
                  4 METODE UTAMA HTTP
                </span>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#38bdf8", fontWeight: 800 }}>
                  METHOD AKTIF: [ GET ]
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 12,
                }}
              >
                {httpMethods.map((method) => {
                  return (
                    <div
                      key={method.name}
                      style={{
                        backgroundColor: method.isUsed ? "rgba(56, 189, 248, 0.16)" : "rgba(255, 255, 255, 0.04)",
                        border: `1.5px solid ${method.isUsed ? "#38bdf8" : "rgba(255, 255, 255, 0.1)"}`,
                        borderRadius: 14,
                        padding: "12px 10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        textAlign: "center",
                        boxShadow: method.isUsed ? "0 0 20px rgba(56, 189, 248, 0.3)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: 15,
                          fontWeight: 950,
                          color: method.isUsed ? "#ffffff" : method.color,
                          letterSpacing: 1,
                        }}
                      >
                        {method.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          color: method.isUsed ? "#38bdf8" : "#94a3b8",
                        }}
                      >
                        {method.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              BAGIAN 4: TELEMETRY HUD BRIDGE MENUJU SCENE 4
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(59, 130, 246, 0.4)",
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
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  border: "1px solid #3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShieldCheck size={20} color="#60a5fa" />
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
                  HTTP PROTOCOL FOUNDATION
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: isOkStamp ? "#38bdf8" : "#fbbf24",
                  }}
                >
                  {isOkStamp
                    ? "➔ BERIKUTNYA: DUA ISTILAH UTAMA (REQUEST & RESPONSE)"
                    : "MEMBANGUN KONEKSI AMAN HTTPS & HANDSHAKE 200 OK..."}
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
              <span>SCENE 04</span>
              <ArrowRight size={13} color="#60a5fa" />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
