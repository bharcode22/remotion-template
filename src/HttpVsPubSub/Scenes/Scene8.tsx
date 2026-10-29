import React from "react";
import { useCurrentFrame } from "remotion";
import { Bell, CheckCircle2, KeyRound, Sparkles, UserCheck, Zap } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 8: PERBANDINGAN & CONTOH KASUS
 * Naskah:
 * "lalu, bedanya apa.?"
 * - Sub8.1: HTTP ada proses request dari client sehingga mendapatkan response
 * - Sub8.2: Contohnya ketika login, get data profile, submit data diri ke sistem
 * - Sub8.3: Sedangkan Pub/Sub, client tidak perlu dan tidak pernah request
 * - Sub8.4: Contohnya: notifikasi, event trigger
 * ========================================================
 */
export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif terhadap startFrame Scene 8 (990)
  const relFrame = Math.max(0, frame - 990);

  // Fase 4 Sub-Scene:
  // Sub 8.1: 0..80 (Konsep HTTP)
  // Sub 8.2: 80..160 (Contoh HTTP)
  // Sub 8.3: 160..240 (Konsep Pub/Sub)
  // Sub 8.4: 240..330 (Contoh Pub/Sub & Outro)
  const isSub82 = relFrame >= 80;
  const isSub83 = relFrame >= 160;
  const isSub84 = relFrame >= 240;

  let currentSubtitle = "HTTP membutuhkan inisiatif request dari client untuk mendapatkan response.";

  if (isSub84) {
    currentSubtitle = "Contoh Pub/Sub: Push notifikasi smartphone, event webhook, sensor IoT.";
  } else if (isSub83) {
    currentSubtitle = "Sedangkan pada Pub/Sub, client tidak pernah dan tidak perlu mengirim request.";
  } else if (isSub82) {
    currentSubtitle = "Contoh HTTP: Proses login akun, mengambil data profil, submit formulir.";
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
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            width: "100%",
          }}
        >
          {/* Kolom Kiri: HTTP (Sub 8.1 & Sub 8.2) */}
          <div
            style={{
              backgroundColor: !isSub83 ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.05)",
              border: !isSub83 ? "1.5px solid #3b82f6" : "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: 18,
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#60a5fa" }}>
              <CheckCircle2 size={20} />
              <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 800 }}>
                HTTP MODEL
              </span>
            </div>

            <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.4 }}>
              Ada proses Request dari client sehingga server membalas Response.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: isSub82 ? "#93c5fd" : "#64748b" }}>
                <KeyRound size={15} /> Login Akun
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: isSub82 ? "#93c5fd" : "#64748b" }}>
                <UserCheck size={15} /> Get Data Profile
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: isSub82 ? "#93c5fd" : "#64748b" }}>
                <Sparkles size={15} /> Submit Data Diri
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Pub/Sub (Sub 8.3 & Sub 8.4) */}
          <div
            style={{
              backgroundColor: isSub83 ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.05)",
              border: isSub83 ? "1.5px solid #f59e0b" : "1px solid rgba(245, 158, 11, 0.2)",
              borderRadius: 18,
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fbbf24" }}>
              <Zap size={20} />
              <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 800 }}>
                PUB / SUB MODEL
              </span>
            </div>

            <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.4 }}>
              Client tidak perlu dan tidak pernah melakukan request langsung.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: isSub84 ? "#fcd34d" : "#64748b" }}>
                <Bell size={15} /> Push Notifikasi
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: isSub84 ? "#fcd34d" : "#64748b" }}>
                <Zap size={15} /> Event Trigger Realtime
              </div>
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
