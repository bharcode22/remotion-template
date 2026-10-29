import React from "react";
import { Radio, Users } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 6: INTRO PUB/SUB
 * Naskah: "Lalu ada pub sub. Atau publisher dan subscriber"
 * ========================================================
 */
export const Scene6: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="06"
        tag="MODUL 2 // PARADIGMA KEDUA"
        title="PUBLISHER & SUBSCRIBER"
        subtitle="Lalu ada Pub/Sub — model komunikasi berbasis penerbitan dan langganan event."
        accentColor="#ec4899"
        icon={Radio}
      >
        <div
          style={{
            backgroundColor: "rgba(236, 72, 153, 0.08)",
            border: "1.5px dashed rgba(236, 72, 153, 0.45)",
            borderRadius: 20,
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <Users size={54} color="#ec4899" />
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              fontWeight: 800,
              color: "#f472b6",
            }}
          >
            PUB / SUB PATTERN
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "monospace",
              fontSize: 15,
              color: "#94a3b8",
            }}
          >
            [SLOT KONTEN SCENE 6 // SIAP DISUSUN]
          </p>
        </div>
      </SceneContainer>
    </div>
  );
};
