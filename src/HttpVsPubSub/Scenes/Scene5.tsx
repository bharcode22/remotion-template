import React from "react";
import { useCurrentFrame } from "remotion";
import { ArrowLeft, ArrowRight, Laptop, Server } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 5: CARA KERJA HTTP
 * Naskah:
 * "Cara kerja http yaitu,"
 * - sub5.1: Client mengirim request ke server,
 * - sub5.2: kemudian server mengirim balasan sebagai response untuk client.
 * ========================================================
 */
export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif terhadap startFrame Scene 5 (470)
  const relFrame = Math.max(0, frame - 470);

  // Pemisahan Sub-Scene berdasarkan timing:
  // Sub 5.1: relFrame 0..85
  // Sub 5.2: relFrame 85..170
  const isSub52 = relFrame >= 85;

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="05"
        tag="MEKANISME // ALUR KERJA"
        title="CARA KERJA HTTP"
        subtitle={
          isSub52
            ? "Sub 5.2: Kemudian server mengirim balasan sebagai response."
            : "Sub 5.1: Client mengirim request ke server."
        }
        accentColor="#8b5cf6"
        icon={Server}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Visual Diagram Client <-> Server */}
          <div
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.08)",
              border: "1.5px solid rgba(139, 92, 246, 0.4)",
              borderRadius: 20,
              padding: "28px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Client */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Laptop size={42} color="#38bdf8" />
              <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 800, color: "#f8fafc" }}>
                CLIENT
              </span>
            </div>

            {/* Indicator Flow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              {!isSub52 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 16,
                    backgroundColor: "rgba(139, 92, 246, 0.25)",
                    border: "1px solid #8b5cf6",
                    color: "#c4b5fd",
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  REQUEST <ArrowRight size={16} />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                    border: "1px solid #10b981",
                    color: "#6ee7b7",
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  <ArrowLeft size={16} /> RESPONSE
                </div>
              )}
            </div>

            {/* Server */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Server size={42} color="#a78bfa" />
              <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 800, color: "#f8fafc" }}>
                SERVER
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
              color: isSub52 ? "#6ee7b7" : "#c4b5fd",
            }}
          >
            {isSub52
              ? "[SUB 5.2] Server memproses data & mengembalikan HTTP Response"
              : "[SUB 5.1] Client menginisiasi permintaan HTTP Request"}
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
