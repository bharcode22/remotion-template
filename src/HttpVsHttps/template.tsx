import React from "react";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { GlassBackground } from "./Background/GlassBackground";
import { SoundEffectsManager } from "./Audio/SoundEffectsManager";
import { InfiniteCameraRig, useCameraTimeline } from "./Camera";
import {
  Scene1,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Scene7,
  Scene8,
  Scene9,
} from "./Scenes";
import { HTTP_HTTPS_COLORS } from "./constants";
import { HttpVsHttpsProps } from "./types";

export const HttpVsHttps: React.FC<HttpVsHttpsProps> = ({
  enableVoiceover = true,
  enableSfx = true,
  sfxVolume = 1.0,
}) => {
  const frame = useCurrentFrame();
  const camera = useCameraTimeline();

  // Scene 1: Line 1 - "Katanya https lebih aman dari http.?" (Frames 0 - 86)
  const showScene1 = frame < 86;

  // Scene 2: Line 2 - "Jangan salah persepsi." (Frames 86 - 147)
  const showScene2 = frame >= 86 && frame < 147;

  // Scene 3: Line 4 - "Aman dari sisi siapa.?" (Frames 147 - 206)
  const showScene3 = frame >= 147 && frame < 206;

  // Scene 4: Lines 6-7 - "Apakah sisi orang yang mengakses, atau dari sisi developer yang mengelola website tersebut?" (Frames 206 - 370)
  const showScene4 = frame >= 206 && frame < 370;

  // Scene 5: Lines 9-11 - "Dari sisi developer, HTTPS memang memberikan keamanan lebih karena data yang dikirimkan antara browser dan server dienkripsi." (Frames 370 - 604)
  const showScene5 = frame >= 370 && frame < 604;

  // Scene 6: Lines 13-14 - "Jadi, pihak lain tidak bisa dengan mudah membaca atau memodifikasi data selama proses pengiriman." (Frames 604 - 774)
  const showScene6 = frame >= 604 && frame < 774;

  // Scene 7: Lines 16-17 - "Tapi kalau dari sisi orang yang mengaksesnya, belum tentu, link pishing atau scam juga ada yang menggunakan https." (Frames 774 - 990)
  const showScene7 = frame >= 774 && frame < 990;

  // Scene 8: Lines 19-21 - "Jadi, mau HTTP atau HTTPS, sebagai orang yang sering berselancar di internet, jangan hanya melihat ikon gembok di browser." (Frames 990 - 1230)
  const showScene8 = frame >= 990 && frame < 1230;

  // Scene 9: Line 23 - "Tetap periksa alamat website dan pastikan kamu tahu siapa yang sedang kamu percaya." (Frames 1230 - 1375)
  const showScene9 = frame >= 1230 && frame <= 1375;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: HTTP_HTTPS_COLORS.bgDark,
        overflow: "hidden",
      }}
    >
      {/* 1. Global Frosted Glass Gradient Background */}
      <GlassBackground />

      {/* 2. Voiceover Track (public/http vs https.wav) */}
      {enableVoiceover && (
        <Audio
          src={staticFile("http vs https.wav")}
          volume={1.0}
        />
      )}

      {/* 3. Smooth SFX Manager */}
      {enableSfx && <SoundEffectsManager volume={sfxVolume} />}

      {/* 4. Scene 1: Hook Comparison (Line 1) */}
      {showScene1 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene1 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 5. Scene 2: Caution Pivot (Line 2) */}
      {showScene2 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene2 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 6. Scene 3: Perspective Hook (Line 4) */}
      {showScene3 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene3 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 7. Scene 4: Perspective Interrogation (Lines 6-7) */}
      {showScene4 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene4 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 8. Scene 5: Developer TLS Encryption Tunnel (Lines 9-11) */}
      {showScene5 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene5 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 9. Scene 6: Man-in-the-Middle Deflection & Tamper Shield (Lines 13-14) */}
      {showScene6 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene6 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 10. Scene 7: The Phishing / Scam HTTPS Paradox (Lines 16-17) */}
      {showScene7 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene7 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 11. Scene 8: Padlock Caution (Lines 19-21) */}
      {showScene8 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene8 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}

      {/* 12. Scene 9: Grand Finale - Domain Verification & Trust (Line 23) */}
      {showScene9 && (
        <AbsoluteFill>
          <InfiniteCameraRig camera={camera}>
            <Scene9 />
          </InfiniteCameraRig>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

