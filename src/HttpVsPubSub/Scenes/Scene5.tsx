import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Download,
  Filter,
  Globe,
  Loader2,
  Server,
  Upload,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 5: CARA KERJA HTTP (DEVTOOLS NETWORK TIMELINE)
 * Naskah:
 * "Cara kerja http yaitu,"
 * - sub5.1: Client mengirim request ke server,
 * - sub5.2: kemudian server mengirim balasan sebagai response untuk client.
 * ========================================================
 * Fitur:
 * 1. Live DevTools Network Tab Mockup (Chrome / Edge / Safari inspection UI)
 * 2. Multi-phase Waterfall Request Timeline Bar (0ms s/d 200ms ruler)
 * 3. Sub 5.1 (relFrame 0 - 85): Client Request Outbound (DNS, Connect, Request Sent)
 * 4. Sub 5.2 (relFrame 85 - 170): Server Response Inbound (TTFB, Download, 200 OK)
 * 5. Interactive Timing Breakdown & Live Response JSON Preview
 */
export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif terhadap startFrame Scene 5 (720 s/d 960, durasi 240 frame)
  const relFrame = Math.max(0, frame - 720);

  // Pemisahan Sub-Scene berdasarkan naskah voiceover:
  // Sub 5.1: relFrame 0..120  ("Client mengirim request ke server")
  // Sub 5.2: relFrame 120..240 ("Kemudian server mengirim balasan sebagai response")
  const isSub52 = relFrame >= 120;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. TIMELINE & WATERFALL PROGRESS CALCULATIONS
  // ─────────────────────────────────────────────────────────────────────────────
  // Progress scanner playhead (menyapu dari 0% s/d 100% pada timeline ruler 200ms)
  const scannerProgress = interpolate(relFrame, [15, 200], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Waterfall Phase 1: Request Sent (relFrame 15 - 60) -> Sub 5.1
  const reqSentWidth = interpolate(relFrame, [15, 60], [0, 42], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Waterfall Phase 2: Waiting for Server / TTFB (relFrame 60 - 130)
  const ttfbWidth = interpolate(relFrame, [60, 130], [0, 95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Waterfall Phase 3: Content Download / Response (relFrame 130 - 185) -> Sub 5.2
  const downloadWidth = interpolate(relFrame, [130, 185], [0, 68], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Counter milidetik dinamis (0ms -> 128ms)
  const liveDurationMs = Math.round(
    interpolate(relFrame, [15, 185], [0, 128], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Status Handshake
  const isResponseReceived = relFrame >= 155;

  // Spring bounce saat status 200 OK stamped in
  const okStampSpring = spring({
    frame: Math.max(0, relFrame - 155),
    fps,
    config: { damping: 11, mass: 0.45, stiffness: 200 },
  });
  const okStampScale = isResponseReceived
    ? interpolate(okStampSpring, [0, 1], [1.4, 1.0])
    : 1.0;

  // Blinking record dot di toolbar
  const recordBlink = Math.sin(relFrame * 0.25) > 0;

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="05"
        tag="MEKANISME // ALUR KERJA"
        title="CARA KERJA HTTP"
        subtitle={
          isSub52
            ? "Sub 5.2: Kemudian server mengirim balasan sebagai response untuk client."
            : "Sub 5.1: Client mengirim request ke server."
        }
        accentColor="#8b5cf6"
        icon={Server}
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
              MAIN DEVTOOLS WINDOW CONTAINER
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.95)",
              border: `2px solid ${isSub52 ? "rgba(16, 185, 129, 0.55)" : "rgba(139, 92, 246, 0.5)"}`,
              borderRadius: 24,
              padding: "20px 24px",
              boxShadow: isSub52
                ? "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)"
                : "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(139, 92, 246, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* 1. DEVTOOLS WINDOW TOP BAR & TABS */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 12,
              }}
            >
              {/* Left: Window Dots & Tabs */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* macOS Window Controls */}
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444", opacity: 0.85 }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b", opacity: 0.85 }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981", opacity: 0.85 }} />
                </div>

                {/* DevTools Tab Bar */}
                <div style={{ display: "flex", gap: 4, fontFamily: "monospace", fontSize: 11 }}>
                  <span style={{ padding: "4px 8px", borderRadius: 6, color: "#64748b" }}>Elements</span>
                  <span style={{ padding: "4px 8px", borderRadius: 6, color: "#64748b" }}>Console</span>
                  <span style={{ padding: "4px 8px", borderRadius: 6, color: "#64748b" }}>Sources</span>
                  {/* Active Tab: Network */}
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      border: "1px solid #8b5cf6",
                      color: "#c4b5fd",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Activity size={12} color="#a78bfa" />
                    Network
                  </span>
                  <span style={{ padding: "4px 8px", borderRadius: 6, color: "#64748b" }}>Performance</span>
                </div>
              </div>

              {/* Right: Record Indicator & Metrics */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: recordBlink ? "#ef4444" : "#7f1d1d",
                      boxShadow: recordBlink ? "0 0 10px #ef4444" : "none",
                    }}
                  />
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#94a3b8" }}>
                    RECORDING LIVE
                  </span>
                </div>

                <div
                  style={{
                    padding: "3px 8px",
                    borderRadius: 6,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#cbd5e1",
                  }}
                >
                  Throttling: Fast 4G
                </div>
              </div>
            </div>

            {/* 2. FILTER & STATS BAR */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: 10,
                padding: "8px 12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Filter size={12} color="#94a3b8" />
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b" }}>FILTER:</span>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8", padding: "2px 6px" }}>All</span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontWeight: 800,
                  }}
                >
                  Fetch/XHR
                </span>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b", padding: "2px 6px" }}>JS</span>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b", padding: "2px 6px" }}>CSS</span>
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b", padding: "2px 6px" }}>WS</span>
              </div>

              <div style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8", display: "flex", gap: 12 }}>
                <span>1 request</span>
                <span>•</span>
                <span>1.4 kB transferred</span>
                <span>•</span>
                <span style={{ color: isResponseReceived ? "#34d399" : "#fbbf24", fontWeight: 800 }}>
                  Finish: {liveDurationMs} ms
                </span>
              </div>
            </div>

            {/* 3. INTERACTIVE NETWORK WATERFALL TABLE (MAIN FOCUS) */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Table Header with 200ms Timeline Ruler */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 90px 70px 80px 1fr",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "8px 14px",
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#94a3b8",
                  letterSpacing: 0.5,
                  alignItems: "center",
                }}
              >
                <div>NAME</div>
                <div>STATUS</div>
                <div>TYPE</div>
                <div>TIME</div>
                {/* 200ms Timeline Ruler Marks */}
                <div style={{ position: "relative", width: "100%", height: 16 }}>
                  <div style={{ position: "absolute", left: "0%", top: 0 }}>0 ms</div>
                  <div style={{ position: "absolute", left: "25%", top: 0 }}>50 ms</div>
                  <div style={{ position: "absolute", left: "50%", top: 0 }}>100 ms</div>
                  <div style={{ position: "absolute", left: "75%", top: 0 }}>150 ms</div>
                  <div style={{ position: "absolute", right: "0%", top: 0 }}>200 ms</div>
                </div>
              </div>

              {/* Table Active Request Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 90px 70px 80px 1fr",
                  padding: "14px 14px",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                  backgroundColor: isSub52
                    ? "rgba(16, 185, 129, 0.06)"
                    : "rgba(139, 92, 246, 0.06)",
                }}
              >
                {/* Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Globe size={14} color="#38bdf8" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 900, color: "#f8fafc" }}>
                      users
                    </span>
                    <span style={{ fontFamily: "monospace", fontSize: 9, color: "#64748b" }}>
                      api.aplikasi.com/v1
                    </span>
                  </div>
                </div>

                {/* Status: (pending) vs 200 OK */}
                <div>
                  {!isResponseReceived ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontFamily: "monospace",
                        fontSize: 10,
                        fontWeight: 800,
                        color: "#fbbf24",
                      }}
                    >
                      <Loader2 size={11} color="#fbbf24" style={{ transform: `rotate(${relFrame * 8}deg)` }} />
                      (pending)
                    </div>
                  ) : (
                    <div
                      style={{
                        transform: `scale(${okStampScale})`,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "2px 6px",
                        borderRadius: 6,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid #10b981",
                        fontFamily: "monospace",
                        fontSize: 10,
                        fontWeight: 950,
                        color: "#34d399",
                        boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <CheckCircle2 size={10} color="#34d399" />
                      200 OK
                    </div>
                  )}
                </div>

                {/* Type */}
                <div style={{ fontFamily: "monospace", fontSize: 11, color: "#94a3b8" }}>
                  fetch
                </div>

                {/* Time */}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: isResponseReceived ? "#34d399" : "#cbd5e1",
                  }}
                >
                  {liveDurationMs} ms
                </div>

                {/* 🌊 THE ICONIC DEVTOOLS WATERFALL TIMELINE BAR */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 24,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderRadius: 6,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Vertical 50ms grid lines */}
                  <div style={{ position: "absolute", left: "25%", height: "100%", width: 1, backgroundColor: "rgba(255, 255, 255, 0.06)" }} />
                  <div style={{ position: "absolute", left: "50%", height: "100%", width: 1, backgroundColor: "rgba(255, 255, 255, 0.06)" }} />
                  <div style={{ position: "absolute", left: "75%", height: "100%", width: 1, backgroundColor: "rgba(255, 255, 255, 0.06)" }} />

                  {/* Waterfall Multi-Segment Bar */}
                  <div
                    style={{
                      position: "absolute",
                      left: "5%",
                      height: 14,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    {/* Segment 1: Request Sent (Sub 5.1: Client Outbound) — Cyan */}
                    {reqSentWidth > 0 && (
                      <div
                        style={{
                          width: reqSentWidth,
                          height: "100%",
                          backgroundColor: "#38bdf8",
                          boxShadow: !isSub52 ? "0 0 12px rgba(56, 189, 248, 0.6)" : "none",
                        }}
                      />
                    )}

                    {/* Segment 2: Waiting for Server / TTFB (Server Latency) — Striped Purple */}
                    {ttfbWidth > 0 && (
                      <div
                        style={{
                          width: ttfbWidth,
                          height: "100%",
                          backgroundColor: "#818cf8",
                          opacity: 0.85,
                        }}
                      />
                    )}

                    {/* Segment 3: Content Download (Sub 5.2: Server Inbound Response) — Emerald */}
                    {downloadWidth > 0 && (
                      <div
                        style={{
                          width: downloadWidth,
                          height: "100%",
                          backgroundColor: "#10b981",
                          boxShadow: "0 0 14px rgba(16, 185, 129, 0.7)",
                        }}
                      />
                    )}
                  </div>

                  {/* Playhead Scanner Line */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${scannerProgress}%`,
                      top: 0,
                      bottom: 0,
                      width: 2,
                      backgroundColor: "#f43f5e",
                      boxShadow: "0 0 8px #f43f5e",
                      zIndex: 5,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 4. SPLIT DETAILS: TIMING BREAKDOWN (KIRI) VS RESPONSE JSON (KANAN) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {/* KOLOM KIRI: TIMING BREAKDOWN (SUB 5.1 & 5.2 METRICS) */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Clock size={13} color="#818cf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f8fafc" }}>
                      TIMING BREAKDOWN
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8" }}>
                    TOTAL: {liveDurationMs} ms
                  </span>
                </div>

                {/* Timing Row 1: Request Sent (Sub 5.1) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 8px",
                    borderRadius: 6,
                    backgroundColor: !isSub52 ? "rgba(56, 189, 248, 0.15)" : "transparent",
                    border: !isSub52 ? "1px solid rgba(56, 189, 248, 0.3)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Upload size={12} color="#38bdf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1" }}>
                      Request Sent (Client ➔ Server)
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#38bdf8" }}>
                    14 ms
                  </span>
                </div>

                {/* Timing Row 2: Waiting for Server (TTFB) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Server size={12} color="#818cf8" />
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1" }}>
                      Waiting Server (TTFB)
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#818cf8" }}>
                    68 ms
                  </span>
                </div>

                {/* Timing Row 3: Content Download (Sub 5.2) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 8px",
                    borderRadius: 6,
                    backgroundColor: isSub52 ? "rgba(16, 185, 129, 0.15)" : "transparent",
                    border: isSub52 ? "1px solid rgba(16, 185, 129, 0.3)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Download size={12} color="#34d399" />
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1" }}>
                      Content Download (Server ➔ Client)
                    </span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#34d399" }}>
                    46 ms
                  </span>
                </div>
              </div>

              {/* KOLOM KANAN: LIVE RESPONSE PREVIEW (JSON DRAWER) */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: `1px solid ${isResponseReceived ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.08)"}`,
                  borderRadius: 14,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  boxShadow: isResponseReceived ? "0 0 20px rgba(16, 185, 129, 0.15)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Code2 size={13} color={isResponseReceived ? "#34d399" : "#94a3b8"} />
                    <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f8fafc" }}>
                      RESPONSE PREVIEW
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      fontWeight: 800,
                      color: isResponseReceived ? "#34d399" : "#fbbf24",
                    }}
                  >
                    {isResponseReceived ? "HTTP/2 200 OK" : "WAITING FOR RESPONSE..."}
                  </span>
                </div>

                {isResponseReceived ? (
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1", lineHeight: 1.6 }}>
                    <div>&#123;</div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: "#38bdf8" }}>"statusCode"</span>: <span style={{ color: "#34d399" }}>200</span>,
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: "#38bdf8" }}>"message"</span>: <span style={{ color: "#6ee7b7" }}>"Data users berhasil diterima!"</span>,
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: "#38bdf8" }}>"roundTrip"</span>: <span style={{ color: "#fbbf24" }}>"128ms"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 70, gap: 8 }}>
                    <Loader2 size={16} color="#818cf8" style={{ transform: `rotate(${relFrame * 6}deg)` }} />
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b" }}>
                      Client sedang mengirim request...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              5. STATUS HUD TELEMETRY BANNER (SINKRON VOICE-OVER)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: `1.5px solid ${isSub52 ? "#10b98180" : "#8b5cf680"}`,
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
                  backgroundColor: isSub52
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(139, 92, 246, 0.2)",
                  border: `1px solid ${isSub52 ? "#10b981" : "#8b5cf6"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isSub52 ? (
                  <CheckCircle2 size={20} color="#34d399" />
                ) : (
                  <Zap size={20} color="#a78bfa" />
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
                  {isSub52 ? "SUB 5.2 // SERVER RESPONSE" : "SUB 5.1 // CLIENT REQUEST"}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: isSub52 ? "#6ee7b7" : "#c4b5fd",
                  }}
                >
                  {isSub52
                    ? "➔ KEMUDIAN SERVER MENGIRIM BALASAN SEBAGAI RESPONSE UNTUK CLIENT."
                    : "➔ CLIENT MENGIRIM PERMINTAAN (REQUEST) KE SERVER."}
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
              <span>{isSub52 ? "RESPONSE OK" : "REQUEST ➔"}</span>
              <ArrowRight size={13} color={isSub52 ? "#34d399" : "#a78bfa"} />
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
