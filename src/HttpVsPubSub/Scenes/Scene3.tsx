import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  CheckCircle2,
  Code2,
  Globe,
  Lock,
  Server,
  Terminal,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 3: INTRO HTTP (PROTOKOL ANATOMY & INSPECTOR)
 * Naskah: "Kita mulai dari HTTP"
 * ========================================================
 * - Desain solid tanpa pop-up entrance
 * - Simulasi modern HTTP Address Bar & SSL Lock
 * - Inspeksi Header & JSON Payload interaktif
 * - 4 HTTP Methods (GET, POST, PUT, DELETE)
 * - Transisi visual halus menuju Scene 4 (Request & Response)
 */
export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif Scene 3 (Global frame 240 - 320)
  const relFrame = Math.max(0, frame - 240);

  // 1. Blinking cursor untuk address bar
  const cursorBlink = Math.sin(relFrame * 0.35) > 0;

  // 2. Pulse SSL Lock & Status 200 OK
  const lockGlow = 0.4 + Math.sin(relFrame * 0.2) * 0.2;
  const statusGlow = 0.5 + Math.sin(relFrame * 0.25) * 0.3;

  // 3. Highlight cycle untuk 4 HTTP Method (GET -> POST -> PUT -> DELETE)
  const activeMethodIndex = Math.floor(interpolate(relFrame, [0, 80], [0, 4], {
    extrapolateRight: "clamp",
  })) % 4;

  const httpMethods = [
    { name: "GET", desc: "Ambil Data", color: "#38bdf8" },
    { name: "POST", desc: "Kirim Data", color: "#10b981" },
    { name: "PUT", desc: "Update Data", color: "#f59e0b" },
    { name: "DELETE", desc: "Hapus Data", color: "#ef4444" },
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
              BAGIAN 1: BROWSER / API ENDPOINT ADDRESS BAR (CYBER DOCK)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.92)",
              border: "1.5px solid rgba(59, 130, 246, 0.45)",
              borderRadius: 20,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(59, 130, 246, 0.15)",
            }}
          >
            {/* Window Dots & SSL Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444", opacity: 0.8 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b", opacity: 0.8 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981", opacity: 0.8 }} />
              </div>

              {/* Secure SSL Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 10,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  boxShadow: `0 0 12px rgba(16, 185, 129, ${lockGlow})`,
                }}
              >
                <Lock size={12} color="#10b981" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#34d399",
                    letterSpacing: 0.5,
                  }}
                >
                  HTTPS // SECURE
                </span>
              </div>
            </div>

            {/* URL Text with Blinking Cursor */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "monospace",
                fontSize: 14,
                color: "#f8fafc",
              }}
            >
              <span style={{ color: "#38bdf8", fontWeight: 800 }}>https://</span>
              <span style={{ color: "#94a3b8" }}>api.aplikasi.com/</span>
              <span style={{ color: "#f8fafc", fontWeight: 700 }}>v1/users</span>
              <span
                style={{
                  width: 2,
                  height: 16,
                  backgroundColor: cursorBlink ? "#38bdf8" : "transparent",
                  display: "inline-block",
                  marginLeft: 2,
                }}
              />
            </div>

            {/* Status 200 OK Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 12,
                backgroundColor: "rgba(16, 185, 129, 0.14)",
                border: "1px solid #10b981",
                boxShadow: `0 0 16px rgba(16, 185, 129, ${statusGlow})`,
              }}
            >
              <CheckCircle2 size={13} color="#10b981" />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  fontWeight: 900,
                  color: "#6ee7b7",
                }}
              >
                200 OK
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              BAGIAN 2: PROTOKOL ANATOMY (INSPECTOR CARD)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.88)",
              border: "1.5px solid rgba(59, 130, 246, 0.35)",
              borderRadius: 22,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Inspector Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Terminal size={17} color="#60a5fa" />
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

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Server size={14} color="#3b82f6" />
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>
                  PORT: 443 (HTTPS)
                </span>
              </div>
            </div>

            {/* Split Visual: Headers vs JSON Response Body */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {/* Header Details */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 14,
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#60a5fa",
                    letterSpacing: 1,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                    paddingBottom: 4,
                  }}
                >
                  REQUEST HEADERS
                </span>

                <div style={{ fontFamily: "monospace", fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                  <div><span style={{ color: "#38bdf8" }}>Host:</span> api.aplikasi.com</div>
                  <div><span style={{ color: "#38bdf8" }}>Accept:</span> application/json</div>
                  <div><span style={{ color: "#38bdf8" }}>User-Agent:</span> MobileClient/2.0</div>
                </div>
              </div>

              {/* Response Body JSON */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: 14,
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#34d399",
                      letterSpacing: 1,
                    }}
                  >
                    RESPONSE BODY
                  </span>
                  <Code2 size={13} color="#34d399" />
                </div>

                <div style={{ fontFamily: "monospace", fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                  <div>&#123;</div>
                  <div style={{ paddingLeft: 12 }}>
                    <span style={{ color: "#38bdf8" }}>"status"</span>: <span style={{ color: "#34d399" }}>"success"</span>,
                  </div>
                  <div style={{ paddingLeft: 12 }}>
                    <span style={{ color: "#38bdf8" }}>"protocol"</span>: <span style={{ color: "#fcd34d" }}>"HTTP/2"</span>
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                BAGIAN 3: 4 METODE UTAMA HTTP (GET, POST, PUT, DELETE)
            ────────────────────────────────────────────────────────── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
                marginTop: 4,
              }}
            >
              {httpMethods.map((method, idx) => {
                const isActive = activeMethodIndex === idx;
                return (
                  <div
                    key={method.name}
                    style={{
                      backgroundColor: isActive ? `${method.color}25` : "rgba(255, 255, 255, 0.04)",
                      border: `1.5px solid ${isActive ? method.color : "rgba(255, 255, 255, 0.1)"}`,
                      borderRadius: 12,
                      padding: "10px 8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      textAlign: "center",
                      boxShadow: isActive ? `0 0 16px ${method.color}35` : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 14,
                        fontWeight: 900,
                        color: isActive ? "#ffffff" : method.color,
                        letterSpacing: 1,
                      }}
                    >
                      {method.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        color: isActive ? "#f8fafc" : "#94a3b8",
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
      </SceneContainer>
    </div>
  );
};
