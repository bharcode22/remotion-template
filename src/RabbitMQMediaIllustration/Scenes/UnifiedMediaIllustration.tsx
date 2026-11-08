import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import {
  FaFileVideo,
  FaDatabase,
  FaDownload,
  FaUpload,
  FaServer,
  FaBell,
  FaNodeJs,
} from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { RABBITMQ_COLORS, FPS } from "../constants";

const FONT_MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';
const FONT_SANS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

interface OrthogonalConfig {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  yTurn: number;
  radius?: number;
}

function getOrthogonalPath({ x1, y1, x2, y2, yTurn, radius = 16 }: OrthogonalConfig): string {
  if (Math.abs(x1 - x2) < 1) {
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }
  const dir = x2 > x1 ? 1 : -1;
  const r = Math.min(radius, Math.abs(x2 - x1) / 2, Math.abs(yTurn - y1) / 2, Math.abs(y2 - yTurn) / 2);

  return [
    `M ${x1} ${y1}`,
    `L ${x1} ${yTurn - r}`,
    `Q ${x1} ${yTurn}, ${x1 + dir * r} ${yTurn}`,
    `L ${x2 - dir * r} ${yTurn}`,
    `Q ${x2} ${yTurn}, ${x2} ${yTurn + r}`,
    `L ${x2} ${y2}`,
  ].join(" ");
}

function getOrthogonalPoint(
  { x1, y1, x2, y2, yTurn, radius = 16 }: OrthogonalConfig,
  progress: number
): { x: number; y: number } {
  const p = Math.max(0, Math.min(1, progress));
  if (Math.abs(x1 - x2) < 1) {
    return {
      x: x1,
      y: y1 + p * (y2 - y1),
    };
  }
  const dir = x2 > x1 ? 1 : -1;
  const r = Math.min(radius, Math.abs(x2 - x1) / 2, Math.abs(yTurn - y1) / 2, Math.abs(y2 - yTurn) / 2);

  const l1 = Math.max(0, yTurn - y1 - r);
  const lArc1 = 0.5 * Math.PI * r;
  const l2 = Math.max(0, Math.abs(x2 - x1) - 2 * r);
  const lArc2 = 0.5 * Math.PI * r;
  const l3 = Math.max(0, y2 - yTurn - r);
  const totalLength = l1 + lArc1 + l2 + lArc2 + l3;

  if (totalLength <= 0) {
    return { x: x1, y: y1 };
  }

  const d = p * totalLength;

  if (d <= l1) {
    return {
      x: x1,
      y: y1 + d,
    };
  }
  if (d <= l1 + lArc1) {
    const angle = (d - l1) / r;
    return {
      x: x1 + dir * r * (1 - Math.cos(angle)),
      y: yTurn - r + r * Math.sin(angle),
    };
  }
  if (d <= l1 + lArc1 + l2) {
    const dHoriz = d - (l1 + lArc1);
    return {
      x: x1 + dir * (r + dHoriz),
      y: yTurn,
    };
  }
  if (d <= l1 + lArc1 + l2 + lArc2) {
    const angle = (d - (l1 + lArc1 + l2)) / r;
    return {
      x: x2 - dir * r * (1 - Math.sin(angle)),
      y: yTurn + r * (1 - Math.cos(angle)),
    };
  }
  const dVert = d - (l1 + lArc1 + l2 + lArc2);
  return {
    x: x2,
    y: yTurn + r + dVert,
  };
}

export const UnifiedMediaIllustration: React.FC = () => {
  const frame = useCurrentFrame();

  // ═════════════════════════════════════════════════════════════════════════
  // 📐 ENTRANCE SPRINGS (6 KARTU MANDIRI)
  // ═════════════════════════════════════════════════════════════════════════
  const spHeader = spring({ frame: frame - 2, fps: FPS, config: { damping: 15, stiffness: 140 } });
  const spCardCloud = spring({ frame: frame - 4, fps: FPS, config: { damping: 16, stiffness: 120 } });
  const spCardStorage = spring({ frame: frame - 8, fps: FPS, config: { damping: 16, stiffness: 120 } });
  const spCardTrigger = spring({ frame: frame - 12, fps: FPS, config: { damping: 16, stiffness: 120 } });
  const spCardC1 = spring({ frame: frame - 16, fps: FPS, config: { damping: 16, stiffness: 120 } });
  const spCardC2 = spring({ frame: frame - 20, fps: FPS, config: { damping: 16, stiffness: 120 } });
  const spCardC3 = spring({ frame: frame - 24, fps: FPS, config: { damping: 16, stiffness: 120 } });

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 1: UPLOAD DARI CLOUD KE STORAGE SERVER (F0 - F340)
  // ═════════════════════════════════════════════════════════════════════
  const isUploadClicked = frame >= 60;
  const uploadShockwave = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 1: UPLOAD DOKUMEN DARI CLOUD KE STORAGE SERVER (F0 - F220)
  // ═════════════════════════════════════════════════════════════════════
  const isCloudUploadActive = frame >= 60 && frame < 220;
  const isCloudUploadDone = frame >= 220;

  // Progress Bar Upload HANYA di Aplikasi Cloud (F80 - F220)
  const cloudUploadProgress = interpolate(frame, [80, 220], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Paket Upload meluncur di Gap 1 Kiri dari Cloud ke Storage (F80 - F220)
  const isUploadPacketActive = frame >= 80 && frame <= 220;
  const uploadPacketY = interpolate(frame, [80, 220], [500, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Storage Server seketika READY begitu upload cloud selesai di F220 (TANPA LOADING!)
  const isStorageReady = frame >= 220;
  const isStorageSaved = isStorageReady;
  const isStorageReadyActive = frame >= 220 && frame < 330;

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 2: CLOUD MEMBERIKAN TRIGGER KE MESSAGE BROKER (F220 - F340)
  // ═════════════════════════════════════════════════════════════════════
  const isCloudTriggeringActive = frame >= 220 && frame < 330;
  const isCloudToBrokerPacketActive = frame >= 230 && frame <= 330;
  const cloudToBrokerPacketY = interpolate(frame, [230, 330], [500, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Highlight gabungan Aplikasi Cloud:
  const isCloudActive = frame < 330;

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 3: MESSAGE BROKER DISPATCH EVENT KE 3 CONSUMER (F330 - F540)
  // ═════════════════════════════════════════════════════════════════════
  const isEventTriggerFired = frame >= 330;
  const isTriggerPhaseActive = frame >= 330 && frame < 540;
  const triggerPulse = interpolate(frame, [330, 360, 390], [1, 1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3 Paket Trigger meluncur turun dari Message Broker ke 3 Consumer (F370 - F460)
  const isTriggerPacketActive = frame >= 370 && frame <= 460;
  const triggerProgress = interpolate(frame, [370, 460], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3 Consumer menerima trigger (F460+)
  const areConsumersTriggered = frame >= 460;

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 3: CONSUMER DOWNLOAD FILE DARI STORAGE (F560 - F940)
  // ═════════════════════════════════════════════════════════════════════
  const isStreamActive = frame >= 560;
  const isDownloadPhaseActive = frame >= 560 && frame < 910;
  const isDownloadActive = frame >= 661;

  // 3 Aliran Paket Download meluncur dari Storage ke 3 Consumer (F560 - F660)
  const isDownloadPacketActive = frame >= 560 && frame <= 660;
  const downloadStreamProgress = interpolate(frame, [560, 660], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Progress Download 3 Consumer Diseragamkan (MULAI DARI FRAME 661 - F910)
  const downloadProgress = interpolate(frame, [661, 910], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═════════════════════════════════════════════════════════════════════════
  // 🎬 TAHAP 4: SELESAI & GRAND FINALE (F910 - F1200)
  // ═════════════════════════════════════════════════════════════════════
  const isDone = frame >= 910;

  // ═════════════════════════════════════════════════════════════════════════
  // 📍 KOORDINAT TATA LETAK ULTRA-KOMPAK & 6 JALUR ORTHOGONAL KAKU (R = 16)
  // ═════════════════════════════════════════════════════════════════════
  const storageCenterX = 292.5; // Left 60 + Width 465 / 2
  const storageBottomY = 880;   // Top 700 + Height 180

  const triggerCenterX = 787.5; // Left 555 + Width 465 / 2
  const triggerBottomY = 880;   // Top 700 + Height 180

  // Pin Outlet pada Storage Server (Y = 880)
  const storagePin1X = 230;     // Ke Consumer 1 DATA
  const storagePin2X = 292.5;   // Ke Consumer 2 DATA
  const storagePin3X = 355;     // Ke Consumer 3 DATA

  // Pin Outlet pada Message Broker (Y = 880)
  const brokerPin1X = 725;      // Ke Consumer 1 EVENT
  const brokerPin2X = 787.5;    // Ke Consumer 2 EVENT
  const brokerPin3X = 850;      // Ke Consumer 3 EVENT

  const c1DataPortX = 135;      // Consumer 1 Left 60 + 75
  const c1EventPortX = 285;     // Consumer 1 Left 60 + 225

  const c2DataPortX = 465;      // Consumer 2 Left 390 + 75
  const c2EventPortX = 615;     // Consumer 2 Left 390 + 225

  const c3DataPortX = 795;      // Consumer 3 Left 720 + 75
  const c3EventPortX = 945;     // Consumer 3 Left 720 + 225

  const consumerTopY = 1170;

  // ─── DEFINISI 6 JALUR KAKU (MELENGKUNG KAKU DENGAN FILLET 90 DERAJAT) ───
  // Jalur 1: Storage Pin 1 -> Consumer 1 DATA (Belok Y = 935)
  const lineStorageToC1: OrthogonalConfig = {
    x1: storagePin1X,
    y1: storageBottomY,
    x2: c1DataPortX,
    y2: consumerTopY,
    yTurn: 935,
    radius: 16,
  };

  // Jalur 2: Broker Pin 3 -> Consumer 3 EVENT (Belok Y = 935)
  const lineBrokerToC3: OrthogonalConfig = {
    x1: brokerPin3X,
    y1: triggerBottomY,
    x2: c3EventPortX,
    y2: consumerTopY,
    yTurn: 935,
    radius: 16,
  };

  // Jalur 3: Storage Pin 2 -> Consumer 2 DATA (Belok Y = 990)
  const lineStorageToC2: OrthogonalConfig = {
    x1: storagePin2X,
    y1: storageBottomY,
    x2: c2DataPortX,
    y2: consumerTopY,
    yTurn: 990,
    radius: 16,
  };

  // Jalur 4: Broker Pin 2 -> Consumer 2 EVENT (Belok Y = 990)
  const lineBrokerToC2: OrthogonalConfig = {
    x1: brokerPin2X,
    y1: triggerBottomY,
    x2: c2EventPortX,
    y2: consumerTopY,
    yTurn: 990,
    radius: 16,
  };

  // Jalur 5: Broker Pin 1 -> Consumer 1 EVENT (Belok Y = 1045)
  const lineBrokerToC1: OrthogonalConfig = {
    x1: brokerPin1X,
    y1: triggerBottomY,
    x2: c1EventPortX,
    y2: consumerTopY,
    yTurn: 1045,
    radius: 16,
  };

  // Jalur 6: Storage Pin 3 -> Consumer 3 DATA (Belok Y = 1100)
  const lineStorageToC3: OrthogonalConfig = {
    x1: storagePin3X,
    y1: storageBottomY,
    x2: c3DataPortX,
    y2: consumerTopY,
    yTurn: 1100,
    radius: 16,
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        fontFamily: FONT_SANS,
        color: RABBITMQ_COLORS.textPrimary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 🏷️ BANNER ATAS RINGKAS ($Y = 240$)                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 240,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "6px 18px",
          borderRadius: 999,
          backgroundColor: "rgba(15, 23, 42, 0.92)",
          border: `1.5px solid ${isDone
            ? RABBITMQ_COLORS.successGreen + "88"
            : isTriggerPhaseActive
              ? RABBITMQ_COLORS.rabbitOrange + "88"
              : RABBITMQ_COLORS.cloudCyan + "66"
            }`,
          boxShadow: `0 0 16px ${isDone
            ? RABBITMQ_COLORS.successGlow
            : isTriggerPhaseActive
              ? RABBITMQ_COLORS.rabbitGlow
              : RABBITMQ_COLORS.cloudGlow
            }`,
          transform: `scale(${spHeader})`,
          opacity: spHeader,
          zIndex: 50,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: isDone
              ? RABBITMQ_COLORS.successGreen
              : isTriggerPhaseActive
                ? RABBITMQ_COLORS.rabbitOrange
                : RABBITMQ_COLORS.cloudCyan,
            boxShadow: `0 0 8px ${isDone
              ? RABBITMQ_COLORS.successGreen
              : isTriggerPhaseActive
                ? RABBITMQ_COLORS.rabbitOrange
                : RABBITMQ_COLORS.cloudCyan
              }`,
          }}
        />
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 1.5,
            color: isDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.rabbitLight,
          }}
        >
          {isDone ? "DISTRIBUSI SELESAI" : "EVENT-DRIVEN ARCHITECTURE"}
        </span>
        <span style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: 12 }}>•</span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 12,
            fontWeight: 700,
            color: isDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.cloudCyan,
            letterSpacing: 1,
          }}
        >
          {isDone ? "ALL CONSUMERS SYNCED" : "MULTIMEDIA DISTRIBUTION"}
        </span>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 📦 KARTU 1: APLIKASI CLOUD (ULTRA-KOMPAK) ($Y = 320, H = 180)       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 320,
          left: 60,
          width: 960,
          height: 180,
          borderRadius: 18,
          backgroundColor: RABBITMQ_COLORS.surfaceCard,
          border: isCloudTriggeringActive
            ? `2px solid ${RABBITMQ_COLORS.rabbitOrange}`
            : isCloudUploadActive
              ? `2px solid ${RABBITMQ_COLORS.cloudCyan}`
              : isDone
                ? `1.5px solid rgba(255, 255, 255, 0.16)`
                : `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: isCloudTriggeringActive
            ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 32px ${RABBITMQ_COLORS.rabbitGlow}`
            : isCloudUploadActive
              ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 32px ${RABBITMQ_COLORS.cloudGlow}`
              : "0 10px 30px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(20px)",
          transform: `scale(${interpolate(spCardCloud, [0, 1], [0.95, 1])})`,
          opacity: spCardCloud * (isCloudActive || isDone ? 1 : 0.65),
          padding: "14px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "border 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
          zIndex: 10,
        }}
      >
        {/* Header Kartu 1: Aplikasi Cloud (Node.js) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: "rgba(104, 160, 99, 0.16)",
                border: "1.5px solid rgba(104, 160, 99, 0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#68a063",
              }}
            >
              <FaNodeJs size={22} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 19, fontWeight: 800 }}>APLIKASI CLOUD</div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#68a063",
                  backgroundColor: "rgba(104, 160, 99, 0.15)",
                  border: "1px solid rgba(104, 160, 99, 0.4)",
                  padding: "2px 8px",
                  borderRadius: 6,
                  letterSpacing: 0.5,
                }}
              >
                NODE.JS
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: isCloudTriggeringActive
                ? "rgba(255, 102, 0, 0.2)"
                : isCloudUploadActive
                  ? "rgba(56, 189, 248, 0.2)"
                  : "rgba(255, 255, 255, 0.06)",
              border: `1px solid ${isCloudTriggeringActive
                ? RABBITMQ_COLORS.rabbitOrange
                : isCloudUploadActive
                  ? RABBITMQ_COLORS.cloudCyan
                  : "rgba(255, 255, 255, 0.12)"
                }`,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: isCloudTriggeringActive
                ? RABBITMQ_COLORS.rabbitLight
                : isCloudUploadActive
                  ? RABBITMQ_COLORS.cloudCyan
                  : RABBITMQ_COLORS.textSecondary,
            }}
          >
            {isCloudTriggeringActive
              ? "● PICU MESSAGE BROKER"
              : isCloudUploadActive
                ? "● PROSES UPLOAD"
                : isCloudUploadDone
                  ? "✓ UPLOAD SELESAI"
                  : "PRODUCER"}
          </div>
        </div>

        {/* File & Upload Progress Row (Bar Dibuat Jauh Lebih Besar & Bertenaga) */}
        <div
          style={{
            borderRadius: 10,
            backgroundColor: "rgba(6, 9, 19, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaFileVideo size={18} color={RABBITMQ_COLORS.rabbitOrange} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800 }}>
              VIDEO_MULTIMEDIA_4K.mp4 (2.4 GB)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Progress Bar Besar (W = 340, H = 16, Rounded Pill + Shimmer) */}
            <div
              style={{
                width: 340,
                height: 16,
                borderRadius: 8,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: `1px solid ${isCloudUploadActive ? RABBITMQ_COLORS.cloudCyan + "55" : "rgba(255, 255, 255, 0.12)"}`,
                overflow: "hidden",
                position: "relative",
                boxShadow: isCloudUploadActive
                  ? `0 0 16px ${RABBITMQ_COLORS.cloudGlow}`
                  : "none",
              }}
            >
              <div
                style={{
                  width: `${cloudUploadProgress}%`,
                  height: "100%",
                  background: isCloudUploadDone
                    ? `linear-gradient(90deg, ${RABBITMQ_COLORS.successGreen}, #4ade80)`
                    : `linear-gradient(90deg, ${RABBITMQ_COLORS.cloudBlue}, ${RABBITMQ_COLORS.cloudCyan}, #818cf8)`,
                  boxShadow: isCloudUploadActive
                    ? `0 0 14px ${RABBITMQ_COLORS.cloudGlow}`
                    : isCloudUploadDone
                      ? `0 0 14px ${RABBITMQ_COLORS.successGlow}`
                      : "none",
                }}
              />
              {/* Shimmer Light Scanner berjalan melintasi bar upload saat aktif */}
              {isCloudUploadActive && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: 70,
                    left: `${(cloudUploadProgress * 3.4) - 35}px`,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                    opacity: 0.85,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 900,
                color: isCloudUploadDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.cloudCyan,
                minWidth: 48,
                textAlign: "right",
                textShadow: isCloudUploadActive ? `0 0 10px ${RABBITMQ_COLORS.cloudGlow}` : "none",
              }}
            >
              {Math.round(cloudUploadProgress)}%
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            position: "relative",
            width: "100%",
            padding: "10px",
            borderRadius: 10,
            background: isCloudTriggeringActive
              ? `linear-gradient(135deg, ${RABBITMQ_COLORS.rabbitOrange}, #d97706)`
              : isUploadClicked
                ? `linear-gradient(135deg, ${RABBITMQ_COLORS.rabbitOrange}, ${RABBITMQ_COLORS.rabbitAmber})`
                : "rgba(255, 102, 0, 0.18)",
            border: `1.5px solid ${RABBITMQ_COLORS.rabbitOrange}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            boxShadow: isUploadClicked ? `0 0 20px ${RABBITMQ_COLORS.rabbitGlow}` : "none",
          }}
        >
          {isUploadClicked && frame < 90 && (
            <div
              style={{
                position: "absolute",
                inset: -5,
                borderRadius: 14,
                border: `2px solid ${RABBITMQ_COLORS.rabbitOrange}`,
                transform: `scale(${1 + uploadShockwave * 0.35})`,
                opacity: 1 - uploadShockwave,
                pointerEvents: "none",
              }}
            />
          )}
          <FaUpload size={15} color={isUploadClicked ? "#ffffff" : RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 0.5,
              color: isUploadClicked ? "#ffffff" : RABBITMQ_COLORS.rabbitLight,
            }}
          >
            {isCloudTriggeringActive
              ? "✓ STORAGE OK • MEMICU RABBITMQ BROKER..."
              : isStorageSaved
                ? "✓ DOKUMEN TERSIMPAN DI STORAGE"
                : isUploadClicked
                  ? "UPLOADING FILE KE STORAGE SERVER..."
                  : "UPLOAD DOKUMEN KE STORAGE SERVER"}
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ⚡ GAP 1: DUA JALUR DARI APLIKASI CLOUD ($Y = 500 - 700)             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}

      {/* JALUR 1 (KIRI, $X = 292.5): CLOUD -> STORAGE SERVER (UPLOAD FILE) */}
      <div
        style={{
          position: "absolute",
          top: 500,
          left: storageCenterX,
          width: 3,
          height: 200,
          transform: "translateX(-50%)",
          backgroundColor: isUploadClicked
            ? isStorageSaved
              ? `${RABBITMQ_COLORS.successGreen}99`
              : `${RABBITMQ_COLORS.rabbitOrange}99`
            : "rgba(255, 255, 255, 0.18)",
          boxShadow: isUploadClicked ? `0 0 14px ${RABBITMQ_COLORS.rabbitGlow}` : "none",
          zIndex: 5,
        }}
      />

      {/* Dynamic Data Stream Photons (Jalur Kiri, F80 - F220) */}
      {isCloudUploadActive && (
        <>
          <div
            style={{
              position: "absolute",
              top: 500 + (((frame * 7) % 190)),
              left: storageCenterX,
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: `0 0 12px ${RABBITMQ_COLORS.cloudCyan}`,
              zIndex: 15,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 500 + ((((frame * 7) + 95) % 190)),
              left: storageCenterX,
              transform: "translate(-50%, -50%)",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: RABBITMQ_COLORS.cloudCyan,
              boxShadow: `0 0 10px ${RABBITMQ_COLORS.cloudGlow}`,
              zIndex: 15,
            }}
          />
        </>
      )}

      {/* In-Flight Packet 1: Upload File dari Cloud ke Storage (F80 - F220) */}
      {isUploadPacketActive && (
        <div
          style={{
            position: "absolute",
            top: uploadPacketY,
            left: storageCenterX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            backgroundColor: RABBITMQ_COLORS.bgDark,
            border: `2px solid ${RABBITMQ_COLORS.rabbitOrange}`,
            boxShadow: `0 0 20px ${RABBITMQ_COLORS.rabbitGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: RABBITMQ_COLORS.rabbitOrange,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: RABBITMQ_COLORS.rabbitLight,
            }}
          >
            UPLOAD: VIDEO_4K (2.4 GB) ↓
          </span>
        </div>
      )}

      {/* JALUR 2 (KANAN, $X = 787.5): CLOUD -> MESSAGE BROKER (KIRIM TRIGGER) */}
      <div
        style={{
          position: "absolute",
          top: 500,
          left: triggerCenterX,
          width: 2,
          height: 200,
          transform: "translateX(-50%)",
          backgroundImage: `repeating-linear-gradient(to bottom, ${isCloudTriggeringActive ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.3)"
            } 0, ${isCloudTriggeringActive ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.3)"
            } 8px, transparent 8px, transparent 16px)`,
          boxShadow: isCloudTriggeringActive ? `0 0 14px ${RABBITMQ_COLORS.rabbitGlow}` : "none",
          zIndex: 5,
        }}
      />

      {/* Dynamic Trigger Energy Pulse (Jalur Kanan, F230 - F330) */}
      {isCloudTriggeringActive && (
        <div
          style={{
            position: "absolute",
            top: 500 + (((frame * 8) % 190)),
            left: triggerCenterX,
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: `0 0 12px ${RABBITMQ_COLORS.rabbitOrange}`,
            zIndex: 15,
          }}
        />
      )}

      {/* In-Flight Packet 2: Publish Event dari Cloud ke Message Broker (F230 - F330) */}
      {isCloudToBrokerPacketActive && (
        <div
          style={{
            position: "absolute",
            top: cloudToBrokerPacketY,
            left: triggerCenterX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            backgroundColor: RABBITMQ_COLORS.bgDark,
            border: `2px solid ${RABBITMQ_COLORS.rabbitOrange}`,
            boxShadow: `0 0 20px ${RABBITMQ_COLORS.rabbitGlow}`,
            zIndex: 30,
          }}
        >
          <FaBell size={12} color={RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: RABBITMQ_COLORS.rabbitLight,
            }}
          >
            TRIGGER: MEDIA_READY ↓
          </span>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 🗄️ KARTU 2: STORAGE SERVER (ULTRA-KOMPAK) ($Y = 700, W = 465, H = 180) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 700,
          left: 60,
          width: 465,
          height: 180,
          borderRadius: 18,
          backgroundColor: RABBITMQ_COLORS.surfaceCard,
          border: isStorageReadyActive
            ? `2px solid ${RABBITMQ_COLORS.successGreen}`
            : isDownloadPhaseActive
              ? `2px solid ${RABBITMQ_COLORS.cloudCyan}`
              : isDone
                ? `1.5px solid rgba(34, 197, 94, 0.4)`
                : `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: isStorageReadyActive
            ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${RABBITMQ_COLORS.successGlow}`
            : isDownloadPhaseActive
              ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 26px ${RABBITMQ_COLORS.cloudGlow}`
              : "0 10px 30px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(20px)",
          transform: `scale(${interpolate(spCardStorage, [0, 1], [0.95, 1])})`,
          opacity: spCardStorage * (isStorageReadyActive || isDownloadPhaseActive || isDone ? 1 : 0.65),
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "border 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
          zIndex: 10,
        }}
      >
        {/* Header Storage Server */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                backgroundColor: `${RABBITMQ_COLORS.cloudCyan}1a`,
                border: `1px solid ${RABBITMQ_COLORS.cloudCyan}66`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: RABBITMQ_COLORS.cloudCyan,
              }}
            >
              <FaDatabase size={17} />
            </div>
            <div style={{ fontSize: 17, fontWeight: 800 }}>STORAGE SERVER</div>
          </div>

          <div
            style={{
              padding: "3px 9px",
              borderRadius: 6,
              backgroundColor: isStorageReadyActive || isStorageReady
                ? "rgba(34, 197, 94, 0.2)"
                : isDownloadPhaseActive
                  ? "rgba(56, 189, 248, 0.2)"
                  : "rgba(255, 255, 255, 0.06)",
              border: `1px solid ${isStorageReadyActive || isStorageReady
                ? RABBITMQ_COLORS.successGreen
                : isDownloadPhaseActive
                  ? RABBITMQ_COLORS.cloudCyan
                  : "rgba(255, 255, 255, 0.12)"
                }`,
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: isStorageReadyActive || isStorageReady
                ? RABBITMQ_COLORS.successGreen
                : isDownloadPhaseActive
                  ? RABBITMQ_COLORS.cloudCyan
                  : RABBITMQ_COLORS.textSecondary,
            }}
          >
            {isDownloadPhaseActive ? "● STREAMING" : isStorageReady ? "READY" : "WAITING"}
          </div>
        </div>

        {/* File State Box (Tanpa Loading di Storage Server, Langsung Ready Saat Cloud Selesai) */}
        <div
          style={{
            borderRadius: 8,
            backgroundColor: "rgba(6, 9, 19, 0.8)",
            border: `1px solid ${isStorageReady ? "rgba(34, 197, 94, 0.35)" : "rgba(255, 255, 255, 0.08)"}`,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaFileVideo size={16} color={isStorageReady ? RABBITMQ_COLORS.rabbitOrange : RABBITMQ_COLORS.textMuted} />
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 14,
                fontWeight: 800,
                color: isStorageReady ? RABBITMQ_COLORS.textPrimary : RABBITMQ_COLORS.textMuted,
              }}
            >
              {isStorageReady ? "VIDEO_4K.mp4 (2.4 GB)" : "Menunggu upload cloud..."}
            </span>
          </div>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: isStorageReady ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.textMuted,
            }}
          >
            {isStorageReady ? "TERSIMPAN" : "WAITING"}
          </span>
        </div>

        {/* Status Indicator Bar */}
        <div
          style={{
            borderRadius: 8,
            backgroundColor: isDownloadPhaseActive
              ? "rgba(56, 189, 248, 0.12)"
              : isStorageReady
                ? "rgba(34, 197, 94, 0.12)"
                : "rgba(255, 255, 255, 0.05)",
            border: `1px solid ${isDownloadPhaseActive
              ? RABBITMQ_COLORS.cloudCyan + "55"
              : isStorageReady
                ? RABBITMQ_COLORS.successGreen + "55"
                : "rgba(255, 255, 255, 0.08)"
              }`,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT_MONO,
            fontSize: 13,
            fontWeight: 800,
            color: isDownloadPhaseActive
              ? RABBITMQ_COLORS.cloudCyan
              : isStorageReady
                ? RABBITMQ_COLORS.successGreen
                : RABBITMQ_COLORS.textSecondary,
          }}
        >
          {isDownloadPhaseActive
            ? "STREAMING KE 3 CONSUMER"
            : isStorageReady
              ? "FILE READY DI STORAGE"
              : "MENUNGGU FILE DARI CLOUD"}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ⚡ KARTU 3: MESSAGE BROKER (ULTRA-KOMPAK) ($Y = 700, W = 465, H = 180) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 700,
          left: 555,
          width: 465,
          height: 180,
          borderRadius: 18,
          backgroundColor: RABBITMQ_COLORS.surfaceCard,
          border: isTriggerPhaseActive
            ? `2px solid ${RABBITMQ_COLORS.rabbitOrange}`
            : isDone
              ? `1.5px solid rgba(255, 255, 255, 0.16)`
              : `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: isTriggerPhaseActive
            ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 32px ${RABBITMQ_COLORS.rabbitGlow}`
            : "0 10px 30px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(20px)",
          transform: `scale(${interpolate(spCardTrigger, [0, 1], [0.95, 1]) * triggerPulse})`,
          opacity: spCardTrigger * (isTriggerPhaseActive || isDone ? 1 : 0.65),
          padding: "14px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "border 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
          zIndex: 10,
        }}
      >
        {/* Header Message Broker (RabbitMQ) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: "rgba(255, 102, 0, 0.16)",
                border: `1.5px solid ${RABBITMQ_COLORS.rabbitOrange}88`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: RABBITMQ_COLORS.rabbitOrange,
              }}
            >
              <SiRabbitmq size={22} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ fontSize: 17, fontWeight: 800 }}>MESSAGE BROKER</div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 800,
                  color: RABBITMQ_COLORS.rabbitLight,
                  backgroundColor: "rgba(255, 102, 0, 0.18)",
                  border: `1px solid ${RABBITMQ_COLORS.rabbitOrange}66`,
                  padding: "2px 7px",
                  borderRadius: 5,
                  letterSpacing: 0.5,
                }}
              >
                RABBITMQ
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "3px 9px",
              borderRadius: 6,
              backgroundColor: isTriggerPhaseActive ? "rgba(255, 102, 0, 0.2)" : "rgba(255, 255, 255, 0.06)",
              border: `1px solid ${isTriggerPhaseActive ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 255, 255, 0.12)"}`,
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: isTriggerPhaseActive ? RABBITMQ_COLORS.rabbitLight : RABBITMQ_COLORS.textSecondary,
            }}
          >
            {isTriggerPhaseActive ? "● MEMICU CONSUMER" : isEventTriggerFired ? "EVENT SENT" : "STANDBY"}
          </div>
        </div>

        {/* Event Info Box (Menerima Event dari Cloud App) */}
        <div
          style={{
            borderRadius: 8,
            backgroundColor: isEventTriggerFired ? "rgba(255, 102, 0, 0.15)" : "rgba(6, 9, 19, 0.8)",
            border: `1px solid ${isEventTriggerFired ? RABBITMQ_COLORS.rabbitOrange + "66" : "rgba(255, 255, 255, 0.08)"}`,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: FONT_MONO, fontSize: 14, fontWeight: 800, color: isEventTriggerFired ? RABBITMQ_COLORS.rabbitLight : RABBITMQ_COLORS.textSecondary }}>
            {isEventTriggerFired ? "EVENT: MEDIA_READY (DARI CLOUD)" : "Menunggu trigger dari cloud..."}
          </span>
        </div>

        {/* Target Box Rapi */}
        <div
          style={{
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "7px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: FONT_MONO,
            fontSize: 13,
          }}
        >
          <span style={{ color: RABBITMQ_COLORS.textSecondary, fontWeight: 700 }}>Target:</span>
          <span style={{ fontWeight: 800, color: isEventTriggerFired ? RABBITMQ_COLORS.rabbitLight : RABBITMQ_COLORS.textMuted }}>
            3 CONSUMER (BROADCAST)
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ⚡ GAP 2: DUAL CONDUIT SYSTEM (PEMISAHAN GARIS EVENT & DOWNLOAD)    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        <defs>
          <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── SET 1: GARIS ORANYE (EVENT TRIGGER KE CONSUMER EVENT PORTS) ─── */}
        <path
          d={getOrthogonalPath(lineBrokerToC1)}
          fill="none"
          stroke={areConsumersTriggered ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.3)"}
          strokeWidth={2}
          strokeDasharray="6 6"
          filter={areConsumersTriggered ? "url(#glow-orange)" : "none"}
        />
        <path
          d={getOrthogonalPath(lineBrokerToC2)}
          fill="none"
          stroke={areConsumersTriggered ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.3)"}
          strokeWidth={2}
          strokeDasharray="6 6"
          filter={areConsumersTriggered ? "url(#glow-orange)" : "none"}
        />
        <path
          d={getOrthogonalPath(lineBrokerToC3)}
          fill="none"
          stroke={areConsumersTriggered ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.3)"}
          strokeWidth={2}
          strokeDasharray="6 6"
          filter={areConsumersTriggered ? "url(#glow-orange)" : "none"}
        />

        {/* ─── SET 2: GARIS CYAN (STORAGE SERVER KE CONSUMER DATA PORTS) ─── */}
        <path
          d={getOrthogonalPath(lineStorageToC1)}
          fill="none"
          stroke={isStreamActive ? RABBITMQ_COLORS.cloudCyan : "rgba(56, 189, 248, 0.25)"}
          strokeWidth={2.5}
          filter={isStreamActive ? "url(#glow-cyan)" : "none"}
        />
        <path
          d={getOrthogonalPath(lineStorageToC2)}
          fill="none"
          stroke={isStreamActive ? RABBITMQ_COLORS.cloudCyan : "rgba(56, 189, 248, 0.25)"}
          strokeWidth={2.5}
          filter={isStreamActive ? "url(#glow-cyan)" : "none"}
        />
        <path
          d={getOrthogonalPath(lineStorageToC3)}
          fill="none"
          stroke={isStreamActive ? RABBITMQ_COLORS.cloudCyan : "rgba(56, 189, 248, 0.25)"}
          strokeWidth={2.5}
          filter={isStreamActive ? "url(#glow-cyan)" : "none"}
        />

        {/* ─── TERMINAL OUTLET PINS (STORAGE & BROKER BOTTOM) ─── */}
        {[storagePin1X, storagePin2X, storagePin3X].map((px, idx) => (
          <circle
            key={`storage-pin-${idx}`}
            cx={px}
            cy={storageBottomY}
            r={4}
            fill={RABBITMQ_COLORS.bgDark}
            stroke={isStreamActive ? RABBITMQ_COLORS.cloudCyan : "rgba(56, 189, 248, 0.4)"}
            strokeWidth={2}
          />
        ))}
        {[brokerPin1X, brokerPin2X, brokerPin3X].map((px, idx) => (
          <circle
            key={`broker-pin-${idx}`}
            cx={px}
            cy={triggerBottomY}
            r={4}
            fill={RABBITMQ_COLORS.bgDark}
            stroke={areConsumersTriggered ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 102, 0, 0.4)"}
            strokeWidth={2}
          />
        ))}

        {/* Dynamic Streaming Photons along the 3 Cyan Conduits (F560 - F910) */}
        {isDownloadPhaseActive && (() => {
          const p1 = (frame * 0.02) % 1;
          const p2 = ((frame * 0.02) + 0.5) % 1;
          const pt1a = getOrthogonalPoint(lineStorageToC1, p1);
          const pt1b = getOrthogonalPoint(lineStorageToC1, p2);
          const pt2a = getOrthogonalPoint(lineStorageToC2, p1);
          const pt2b = getOrthogonalPoint(lineStorageToC2, p2);
          const pt3a = getOrthogonalPoint(lineStorageToC3, p1);
          const pt3b = getOrthogonalPoint(lineStorageToC3, p2);
          return (
            <>
              {[pt1a, pt1b, pt2a, pt2b, pt3a, pt3b].map((pt, idx) => (
                <circle
                  key={`cyan-stream-photon-${idx}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={3.5}
                  fill="#ffffff"
                  filter="url(#glow-cyan)"
                />
              ))}
            </>
          );
        })()}

        {/* Dynamic Trigger Photons along the 3 Orange Conduits (F380 - F460) */}
        {isTriggerPacketActive && (() => {
          const p = (frame * 0.035) % 1;
          const pt1 = getOrthogonalPoint(lineBrokerToC1, p);
          const pt2 = getOrthogonalPoint(lineBrokerToC2, p);
          const pt3 = getOrthogonalPoint(lineBrokerToC3, p);
          return (
            <>
              {[pt1, pt2, pt3].map((pt, idx) => (
                <circle
                  key={`orange-trigger-photon-${idx}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={3.5}
                  fill="#ffffff"
                  filter="url(#glow-orange)"
                />
              ))}
            </>
          );
        })()}
      </svg>

      {/* ─── IN-FLIGHT PAKET TAHAP 2: EVENT TRIGGER (ORANYE) (F390 - F470) ─── */}
      {isTriggerPacketActive && (() => {
        const p1 = getOrthogonalPoint(lineBrokerToC1, triggerProgress);
        const p2 = getOrthogonalPoint(lineBrokerToC2, triggerProgress);
        const p3 = getOrthogonalPoint(lineBrokerToC3, triggerProgress);
        return (
          <>
            <div
              style={{
                position: "absolute",
                top: p1.y,
                left: p1.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.rabbitOrange}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.rabbitGlow}`,
                zIndex: 30,
              }}
            >
              <FaBell size={11} color={RABBITMQ_COLORS.rabbitOrange} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 12, fontWeight: 800, color: RABBITMQ_COLORS.rabbitLight }}>
                TRIGGER ↓
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: p2.y,
                left: p2.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.rabbitOrange}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.rabbitGlow}`,
                zIndex: 30,
              }}
            >
              <FaBell size={11} color={RABBITMQ_COLORS.rabbitOrange} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 12, fontWeight: 800, color: RABBITMQ_COLORS.rabbitLight }}>
                TRIGGER ↓
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: p3.y,
                left: p3.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.rabbitOrange}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.rabbitGlow}`,
                zIndex: 30,
              }}
            >
              <FaBell size={11} color={RABBITMQ_COLORS.rabbitOrange} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 12, fontWeight: 800, color: RABBITMQ_COLORS.rabbitLight }}>
                TRIGGER ↓
              </span>
            </div>
          </>
        );
      })()}

      {/* ─── IN-FLIGHT PAKET TAHAP 3: DOWNLOAD DARI STORAGE (CYAN) (F560 - F660) ─── */}
      {isDownloadPacketActive && (() => {
        const d1 = getOrthogonalPoint(lineStorageToC1, downloadStreamProgress);
        const d2 = getOrthogonalPoint(lineStorageToC2, downloadStreamProgress);
        const d3 = getOrthogonalPoint(lineStorageToC3, downloadStreamProgress);
        return (
          <>
            <div
              style={{
                position: "absolute",
                top: d1.y,
                left: d1.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.cloudCyan}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.cloudGlow}`,
                zIndex: 30,
              }}
            >
              <FaDownload size={11} color={RABBITMQ_COLORS.cloudCyan} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 800, color: RABBITMQ_COLORS.cloudCyan }}>
                2.4 GB STREAM ↓
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: d2.y,
                left: d2.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.cloudCyan}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.cloudGlow}`,
                zIndex: 30,
              }}
            >
              <FaDownload size={11} color={RABBITMQ_COLORS.cloudCyan} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 800, color: RABBITMQ_COLORS.cloudCyan }}>
                2.4 GB STREAM ↓
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: d3.y,
                left: d3.x,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 999,
                backgroundColor: RABBITMQ_COLORS.bgDark,
                border: `1.5px solid ${RABBITMQ_COLORS.cloudCyan}`,
                boxShadow: `0 0 16px ${RABBITMQ_COLORS.cloudGlow}`,
                zIndex: 30,
              }}
            >
              <FaDownload size={11} color={RABBITMQ_COLORS.cloudCyan} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 800, color: RABBITMQ_COLORS.cloudCyan }}>
                2.4 GB STREAM ↓
              </span>
            </div>
          </>
        );
      })()}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 🖥️ TIER 3: 3 KARTU CONSUMER SERAGAM & ULTRA-KOMPAK ($Y=1170, H=185) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {[
        { id: 1, name: "CONSUMER 1", product: "PRODUK 1", x: 60, sp: spCardC1 },
        { id: 2, name: "CONSUMER 2", product: "PRODUK 2", x: 390, sp: spCardC2 },
        { id: 3, name: "CONSUMER 3", product: "PRODUK 3", x: 720, sp: spCardC3 },
      ].map((consumer) => (
        <div
          key={`consumer-${consumer.id}`}
          style={{
            position: "absolute",
            top: 1170,
            left: consumer.x,
            width: 300,
            height: 185,
            borderRadius: 18,
            backgroundColor: RABBITMQ_COLORS.surfaceCard,
            border: isDone
              ? `2px solid ${RABBITMQ_COLORS.successGreen}`
              : isDownloadPhaseActive
                ? `2px solid ${RABBITMQ_COLORS.cloudCyan}`
                : areConsumersTriggered
                  ? `2px solid ${RABBITMQ_COLORS.rabbitOrange}`
                  : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: isDone
              ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 28px ${RABBITMQ_COLORS.successGlow}`
              : isDownloadPhaseActive
                ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 24px ${RABBITMQ_COLORS.cloudGlow}`
                : areConsumersTriggered
                  ? `0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px ${RABBITMQ_COLORS.rabbitGlow}`
                  : "0 10px 30px rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(20px)",
            transform: `scale(${interpolate(consumer.sp, [0, 1], [0.95, 1])})`,
            opacity: consumer.sp * (areConsumersTriggered || isDownloadPhaseActive || isDone ? 1 : 0.65),
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "border 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
            zIndex: 10,
          }}
        >
          {/* Dual Ports (Port Data & Port Event) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                padding: "2px 8px",
                borderRadius: 5,
                backgroundColor: isStreamActive ? "rgba(56, 189, 248, 0.18)" : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${isStreamActive ? RABBITMQ_COLORS.cloudCyan : "rgba(255, 255, 255, 0.1)"}`,
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 700,
                color: isStreamActive ? RABBITMQ_COLORS.cloudCyan : RABBITMQ_COLORS.textMuted,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FaDownload size={10} />
              <span>DATA</span>
            </div>

            <div
              style={{
                padding: "2px 8px",
                borderRadius: 5,
                backgroundColor: areConsumersTriggered ? "rgba(255, 102, 0, 0.18)" : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${areConsumersTriggered ? RABBITMQ_COLORS.rabbitOrange : "rgba(255, 255, 255, 0.1)"}`,
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 700,
                color: areConsumersTriggered ? RABBITMQ_COLORS.rabbitLight : RABBITMQ_COLORS.textMuted,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FaBell size={10} />
              <span>EVENT</span>
            </div>
          </div>

          {/* Header Consumer Seragam dengan Keterangan Produk */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: isDone
                    ? `${RABBITMQ_COLORS.successGreen}22`
                    : `${RABBITMQ_COLORS.cloudCyan}22`,
                  border: `1px solid ${isDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.cloudCyan}66`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.cloudCyan,
                }}
              >
                <FaServer size={15} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.15 }}>{consumer.name}</span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    color: RABBITMQ_COLORS.rabbitLight,
                    letterSpacing: 0.5,
                  }}
                >
                  {consumer.product}
                </span>
              </div>
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: 5,
                backgroundColor: isDone
                  ? `${RABBITMQ_COLORS.successGreen}25`
                  : isDownloadActive
                    ? `${RABBITMQ_COLORS.cloudCyan}25`
                    : areConsumersTriggered
                      ? `${RABBITMQ_COLORS.rabbitOrange}25`
                      : "rgba(255,255,255,0.06)",
                color: isDone
                  ? RABBITMQ_COLORS.successGreen
                  : isDownloadActive
                    ? RABBITMQ_COLORS.cloudCyan
                    : areConsumersTriggered
                      ? RABBITMQ_COLORS.rabbitLight
                      : RABBITMQ_COLORS.textSecondary,
              }}
            >
              {isDone
                ? "SELESAI"
                : isDownloadActive
                  ? `${Math.round(downloadProgress)}%`
                  : frame >= 560
                    ? "STREAM"
                    : areConsumersTriggered
                      ? "TRIGGER OK"
                      : "STANDBY"}
            </span>
          </div>

          {/* Status Box Seragam (Ringkas & Tegas) */}
          <div
            style={{
              borderRadius: 8,
              backgroundColor: "rgba(6, 9, 19, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "7px 10px",
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 700,
              color: isDone
                ? RABBITMQ_COLORS.successGreen
                : isDownloadActive
                  ? RABBITMQ_COLORS.cloudCyan
                  : areConsumersTriggered
                    ? RABBITMQ_COLORS.rabbitLight
                    : RABBITMQ_COLORS.textSecondary,
              textAlign: "center",
            }}
          >
            {isDone
              ? "✓ DOWNLOAD SELESAI (2.4 GB)"
              : isDownloadActive
                ? "DOWNLOAD FILE 2.4 GB..."
                : frame >= 560
                  ? "MENERIMA STREAM DATA..."
                  : areConsumersTriggered
                    ? "TRIGGER DITERIMA!"
                    : "MENUNGGU TRIGGER"}
          </div>

          {/* Download Progress Bar Seragam (Tanpa Teks Kecil Berlebih) */}
          <div
            style={{
              width: "100%",
              height: 8,
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${downloadProgress}%`,
                height: "100%",
                backgroundColor: isDone ? RABBITMQ_COLORS.successGreen : RABBITMQ_COLORS.cloudCyan,
                boxShadow: isDone ? `0 0 10px ${RABBITMQ_COLORS.successGlow}` : "none",
              }}
            />
          </div>
        </div>
      ))}

      {/* 🎉 Celebratory Emerald Shockwaves at 100% (F910 - F950) */}
      {frame >= 910 && frame <= 950 && (() => {
        const wave = interpolate(frame, [910, 950], [0, 1]);
        return (
          <>
            {[60, 390, 720].map((cx, idx) => (
              <div
                key={`victory-wave-${idx}`}
                style={{
                  position: "absolute",
                  top: 1170 - 8,
                  left: cx - 8,
                  width: 300 + 16,
                  height: 185 + 16,
                  borderRadius: 22,
                  border: `2.5px solid ${RABBITMQ_COLORS.successGreen}`,
                  transform: `scale(${1 + wave * 0.18})`,
                  opacity: 1 - wave,
                  pointerEvents: "none",
                  zIndex: 25,
                }}
              />
            ))}
          </>
        );
      })()}

      {/* 🎬 Cinematic Outro Fade to Black (Selesai Bersih di Frame 1043) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: RABBITMQ_COLORS.bgDark,
          opacity: interpolate(frame, [1025, 1043], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </div>
  );
};
