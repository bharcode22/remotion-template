import React from "react";
import { useCurrentFrame } from "remotion";
import { ArrowRight, Box, Send, Share2, Users } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 7: CARA KERJA PUB/SUB
 * Naskah:
 * "Cara kerjanya yaitu,"
 * - Sub7.1: Publisher mengirim pesan melalui topik,
 * - Sub7.2: Lalu subcriber yang berlangganan menerima topik tersebut.
 * ========================================================
 */
export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif terhadap startFrame Scene 7 (790)
  const relFrame = Math.max(0, frame - 790);

  // Pemisahan Sub-Scene berdasarkan timing:
  // Sub 7.1: relFrame 0..85
  // Sub 7.2: relFrame 85..170
  const isSub72 = relFrame >= 85;

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="07"
        tag="MEKANISME // EVENT-DRIVEN"
        title="CARA KERJA PUB/SUB"
        subtitle={
          isSub72
            ? "Sub 7.2: Lalu subscriber yang berlangganan menerima pesan tersebut."
            : "Sub 7.1: Publisher mengirim pesan melalui topik."
        }
        accentColor="#f43f5e"
        icon={Share2}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Visual Diagram Publisher -> Topic -> Subscribers */}
          <div
            style={{
              backgroundColor: "rgba(244, 63, 94, 0.08)",
              border: "1.5px solid rgba(244, 63, 94, 0.4)",
              borderRadius: 20,
              padding: "26px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Publisher */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Send size={38} color="#fb7185" />
              <span style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
                PUBLISHER
              </span>
            </div>

            {/* Panah ke Topik */}
            <ArrowRight size={24} color="#f43f5e" />

            {/* Topic Broker */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(244, 63, 94, 0.2)",
                border: "1px solid #f43f5e",
                borderRadius: 14,
                padding: "10px 16px",
              }}
            >
              <Box size={32} color="#fda4af" />
              <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 900, color: "#fda4af" }}>
                TOPIC
              </span>
            </div>

            {/* Panah ke Subscribers */}
            <ArrowRight size={24} color={isSub72 ? "#10b981" : "#475569"} />

            {/* Subscribers */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Users size={38} color={isSub72 ? "#34d399" : "#64748b"} />
              <span style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 800, color: isSub72 ? "#f8fafc" : "#64748b" }}>
                SUBSCRIBERS
              </span>
            </div>
          </div>

          {/* Sub-scene Status Badge */}
          <div
            style={{
              padding: "12px 18px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: 14,
              color: isSub72 ? "#6ee7b7" : "#fda4af",
            }}
          >
            {isSub72
              ? "[SUB 7.2] Pesan disalurkan otomatis ke semua subscriber yang aktif"
              : "[SUB 7.1] Publisher mengirim event/pesan ke Topic Broker"}
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
