import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion";
import { NETLIFY_COLORS, FONT_PRIMARY, FONT_MONO } from "../constants";
import {
  FaGlobe,
  FaCheckCircle,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaReact,
  FaSyncAlt,
  FaFolderOpen,
  FaFileCode,
  FaArrowRight,
  FaLightbulb,
  FaServer,
  FaLaptopCode,
  FaTimesCircle,
  FaRoute,
} from "react-icons/fa";
import { SiNetlify, SiHtml5 } from "react-icons/si";

export const UnifiedRedirectNetlify: React.FC = () => {
  const frame = useCurrentFrame();

  // Safe margin inset for Instagram Reels / Stories anti-crop
  const CONTENT_INSET_X = 96;

  // Continuous visual oscillations
  const reactSpin = (frame * 1.8) % 360;
  const radarPulse = interpolate(
    Math.sin((frame * Math.PI) / 18),
    [-1, 1],
    [0.92, 1.08]
  );
  const fastSpin = (frame * 12) % 360;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1 (F0 - F80)
  // Line 1: "Kamu deploy web app di Netlify?" (Audio F8 - F70)
  // ═══════════════════════════════════════════════════════════════════════════
  const s1Entrance = spring({
    frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s1ExitProgress = interpolate(frame, [72, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s1Opacity = (1 - s1ExitProgress) * Math.min(1, s1Entrance);
  const s1Y = (1 - s1Entrance) * 40 - s1ExitProgress * 50;

  const isKamuDeploy = frame >= 8;
  const kamuDeploySpring = spring({
    frame: frame - 8,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isWebApp = frame >= 26;
  const webAppSpring = spring({
    frame: frame - 26,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });
  const webAppScale = isWebApp ? 1 + (1 - Math.min(1, webAppSpring)) * 0.22 : 0.95;

  const isDiNetlify = frame >= 48;
  const netlifySpring = spring({
    frame: frame - 48,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const netlifyScale = isDiNetlify ? 1 + (1 - Math.min(1, netlifySpring)) * 0.25 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2 (F80 - F235)
  // Line 2: "Tapi ketika halaman di-reload, malah muncul pesan 404 Page Not Found?" (Audio F86 - F221)
  // ═══════════════════════════════════════════════════════════════════════════
  const s2Frame = frame - 80;
  const s2Entrance = spring({
    frame: s2Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s2ExitProgress = interpolate(frame, [226, 235], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s2Opacity = (1 - s2ExitProgress) * Math.min(1, s2Entrance);
  const s2Y = (1 - s2Entrance) * 40 - s2ExitProgress * 50;

  const isTapiKetika = frame >= 86;
  const tapiKetikaSpring = spring({
    frame: frame - 86,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isDiReload = frame >= 100;
  const diReloadSpring = spring({
    frame: frame - 100,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isMalahMuncul = frame >= 140;
  const malahMunculSpring = spring({
    frame: frame - 140,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });

  const is404Alert = frame >= 154;
  const alert404Spring = spring({
    frame: frame - 154,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });
  const alert404Scale = is404Alert ? 1 + (1 - Math.min(1, alert404Spring)) * 0.35 : 0.9;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3 (F235 - F285)
  // Line 3: "Kenapa ini bisa terjadi?" (Audio F245 - F274)
  // ═══════════════════════════════════════════════════════════════════════════
  const s3Frame = frame - 235;
  const s3Entrance = spring({
    frame: s3Frame,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 130 },
  });
  const s3ExitProgress = interpolate(frame, [278, 285], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s3Opacity = (1 - s3ExitProgress) * Math.min(1, s3Entrance);
  const s3Y = (1 - s3Entrance) * 40 - s3ExitProgress * 50;

  const isKenapaIni = frame >= 245;
  const kenapaSpring = spring({
    frame: frame - 245,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isBisaTerjadi = frame >= 256;
  const terjadiSpring = spring({
    frame: frame - 256,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const terjadiScale = isBisaTerjadi ? 1 + (1 - Math.min(1, terjadiSpring)) * 0.28 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4 (F285 - F495)
  // Line 4: "Karena kebanyakan Single Page Application atau SPA hanya menggunakan satu file HTML sebagai entry point." (Audio F300 - F479)
  // ═══════════════════════════════════════════════════════════════════════════
  const s4Frame = frame - 285;
  const s4Entrance = spring({
    frame: s4Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s4ExitProgress = interpolate(frame, [487, 495], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s4Opacity = (1 - s4ExitProgress) * Math.min(1, s4Entrance);
  const s4Y = (1 - s4Entrance) * 40 - s4ExitProgress * 50;

  const isKarenaKebanyakan = frame >= 300;
  const kebanyakanSpring = spring({
    frame: frame - 300,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isSpaTerm = frame >= 322;
  const spaTermSpring = spring({
    frame: frame - 322,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const spaTermScale = isSpaTerm ? 1 + (1 - Math.min(1, spaTermSpring)) * 0.25 : 0.95;

  const isAtauSpa = frame >= 356;
  const atauSpaSpring = spring({
    frame: frame - 356,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isSatuHtml = frame >= 396;
  const satuHtmlSpring = spring({
    frame: frame - 396,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });

  const isEntryPoint = frame >= 440;
  const entryPointSpring = spring({
    frame: frame - 440,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 5 (F495 - F640)
  // Line 5: "Ketika kamu berpindah halaman, routing ditangani oleh frontend, bukan server." (Audio F510 - F627)
  // ═══════════════════════════════════════════════════════════════════════════
  const s5Frame = frame - 495;
  const s5Entrance = spring({
    frame: s5Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s5ExitProgress = interpolate(frame, [632, 640], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s5Opacity = (1 - s5ExitProgress) * Math.min(1, s5Entrance);
  const s5Y = (1 - s5Entrance) * 40 - s5ExitProgress * 50;

  const isBerpindahHalaman = frame >= 510;
  const berpindahSpring = spring({
    frame: frame - 510,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isRoutingFrontend = frame >= 555;
  const frontendSpring = spring({
    frame: frame - 555,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const frontendScale = isRoutingFrontend ? 1 + (1 - Math.min(1, frontendSpring)) * 0.25 : 0.95;

  const isBukanServer = frame >= 600;
  const bukanServerSpring = spring({
    frame: frame - 600,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const bukanServerScale = isBukanServer ? 1 + (1 - Math.min(1, bukanServerSpring)) * 0.22 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6 (F640 - F795)
  // Line 6: "Nah, ketika halaman di-reload, browser akan meminta URL tersebut langsung ke server." (Audio F654 - F787)
  // ═══════════════════════════════════════════════════════════════════════════
  const s6Frame = frame - 640;
  const s6Entrance = spring({
    frame: s6Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s6ExitProgress = interpolate(frame, [787, 795], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s6Opacity = (1 - s6ExitProgress) * Math.min(1, s6Entrance);
  const s6Y = (1 - s6Entrance) * 40 - s6ExitProgress * 50;

  const isNahReload = frame >= 654;
  const nahReloadSpring = spring({
    frame: frame - 654,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isMemintaUrl = frame >= 710;
  const memintaUrlSpring = spring({
    frame: frame - 710,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isLangsungServer = frame >= 750;
  const langsungServerSpring = spring({
    frame: frame - 750,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const langsungServerScale = isLangsungServer ? 1 + (1 - Math.min(1, langsungServerSpring)) * 0.25 : 0.95;

  const requestBeamProgress = interpolate(frame, [690, 755], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 7 (F795 - F955)
  // Line 7: "Karena server tidak menemukan file atau route yang sesuai, akhirnya muncul 404." (Audio F810 - F938)
  // ═══════════════════════════════════════════════════════════════════════════
  const s7Frame = frame - 795;
  const s7Entrance = spring({
    frame: s7Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s7ExitProgress = interpolate(frame, [947, 955], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s7Opacity = (1 - s7ExitProgress) * Math.min(1, s7Entrance);
  const s7Y = (1 - s7Entrance) * 40 - s7ExitProgress * 50;

  const isTidakMenemukan = frame >= 810;
  const tidakMenemukanSpring = spring({
    frame: frame - 810,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isRouteSesuai = frame >= 850;
  const routeSesuaiSpring = spring({
    frame: frame - 850,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isAkhirnyaMuncul = frame >= 880;
  const akhirnyaSpring = spring({
    frame: frame - 880,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const is404Result = frame >= 898;
  const result404Spring = spring({
    frame: frame - 898,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });
  const result404Scale = is404Result ? 1 + (1 - Math.min(1, result404Spring)) * 0.35 : 0.9;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 8 (F955 - F1000)
  // Line 8: "Solusinya?" (Audio F977 - F995)
  // ═════════════════════════════════════════════════════════════════════
  const s8Frame = frame - 955;
  const s8Entrance = spring({
    frame: s8Frame,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 160 },
  });
  const s8ExitProgress = interpolate(frame, [993, 1000], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s8Opacity = (1 - s8ExitProgress) * Math.min(1, s8Entrance);
  const s8Y = (1 - s8Entrance) * 40 - s8ExitProgress * 50;

  const isSolusinya = frame >= 977;
  const solusinyaSpring = spring({
    frame: frame - 977,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 200 },
  });
  const solusinyaScale = isSolusinya ? 1 + (1 - Math.min(1, solusinyaSpring)) * 0.35 : 0.9;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 9 (F1000 - F1120)
  // Line 9: "Buat file bernama _redirects di folder public, lalu tambahkan konfigurasi berikut:" (Audio F1004 - F1108)
  // ═══════════════════════════════════════════════════════════════════════════
  const s9Frame = frame - 1000;
  const s9Entrance = spring({
    frame: s9Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s9ExitProgress = interpolate(frame, [1112, 1120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s9Opacity = (1 - s9ExitProgress) * Math.min(1, s9Entrance);
  const s9Y = (1 - s9Entrance) * 40 - s9ExitProgress * 50;

  const isBuatFile = frame >= 1004;
  const buatFileSpring = spring({
    frame: frame - 1004,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isRedirectsFile = frame >= 1022;
  const redirectsFileSpring = spring({
    frame: frame - 1022,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const redirectsFileScale = isRedirectsFile ? 1 + (1 - Math.min(1, redirectsFileSpring)) * 0.28 : 0.95;

  const isFolderPublic = frame >= 1050;
  const folderPublicSpring = spring({
    frame: frame - 1050,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isTambahkanKonfig = frame >= 1080;
  const konfigSpring = spring({
    frame: frame - 1080,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 155 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 10 (F1120 - F1350)
  // Line 10: "/* /index.html 200" (Audio F1129 - F1177, hold until F1350)
  // ═══════════════════════════════════════════════════════════════════════════
  const s10Frame = frame - 1120;
  const s10Entrance = spring({
    frame: s10Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s10ExitProgress = interpolate(frame, [1342, 1350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s10Opacity = (1 - s10ExitProgress) * Math.min(1, s10Entrance);
  const s10Y = (1 - s10Entrance) * 40 - s10ExitProgress * 50;

  const isCodeRule = frame >= 1129;
  const codeRuleSpring = spring({
    frame: frame - 1129,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const codeRuleScale = isCodeRule ? 1 + (1 - Math.min(1, codeRuleSpring)) * 0.25 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 11 (F1350 - F1530)
  // Line 11: "Dengan begitu, setiap request akan diarahkan ke index.html, dan routing kembali ditangani oleh frontend." (Audio F1212 - F1516, starts F1350)
  // ═══════════════════════════════════════════════════════════════════════════
  const s11Frame = frame - 1350;
  const s11Entrance = spring({
    frame: s11Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s11ExitProgress = interpolate(frame, [1515, 1530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s11Opacity = (1 - s11ExitProgress) * Math.min(1, s11Entrance);
  const s11Y = (1 - s11Entrance) * 40 - s11ExitProgress * 50;

  const isDenganBegitu = frame >= 1212;
  const denganBegituSpring = spring({
    frame: frame - 1212,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isKeIndexHtml = frame >= 1270;
  const keIndexSpring = spring({
    frame: frame - 1270,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const keIndexScale = isKeIndexHtml ? 1 + (1 - Math.min(1, keIndexSpring)) * 0.25 : 0.95;

  const isRoutingKembali = frame >= 1330;
  const routingKembaliSpring = spring({
    frame: frame - 1330,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 165 },
  });

  const isOlehFrontend = frame >= 1390;
  const olehFrontendSpring = spring({
    frame: frame - 1390,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const olehFrontendScale = isOlehFrontend ? 1 + (1 - Math.min(1, olehFrontendSpring)) * 0.28 : 0.95;

  return (
    <AbsoluteFill
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        fontFamily: FONT_PRIMARY,
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 1: DEPLOY INTRO (F0 - F80)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame < 80 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s1Opacity,
            transform: `translateY(${s1Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 320,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.12)",
                border: "1px solid rgba(0, 199, 183, 0.35)",
                marginBottom: 24,
                backdropFilter: "blur(12px)",
              }}
            >
              <SiNetlify size={22} color={NETLIFY_COLORS.netlifyTeal} />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NETLIFY_COLORS.netlifyAqua,
                  boxShadow: `0 0 8px ${NETLIFY_COLORS.netlifyAqua}`,
                }}
              />
              <span
                style={{
                  color: NETLIFY_COLORS.netlifyAqua,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                NETLIFY DEPLOY
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              {isKamuDeploy && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 44,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    opacity: Math.min(1, kamuDeploySpring),
                    transform: `translateY(${(1 - Math.min(1, kamuDeploySpring)) * 10}px)`,
                  }}
                >
                  Kamu deploy
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  minHeight: 64,
                }}
              >
                {isWebApp && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.16) 100%)",
                      border: "1.5px solid rgba(56, 189, 248, 0.75)",
                      boxShadow:
                        "0 0 32px rgba(56, 189, 248, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                      transform: `scale(${webAppScale})`,
                      opacity: Math.min(1, webAppSpring),
                    }}
                  >
                    <FaGlobe size={24} color={NETLIFY_COLORS.netlifyCyan} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.netlifyCyan,
                        fontSize: 42,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        textShadow:
                          "0 0 25px rgba(56, 189, 248, 0.9), 0 0 50px rgba(56, 189, 248, 0.4)",
                      }}
                    >
                      web app
                    </span>
                  </div>
                )}

                {isDiNetlify && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(0, 199, 183, 0.32) 0%, rgba(0, 147, 135, 0.2) 100%)",
                      border: "1.5px solid rgba(50, 230, 226, 0.85)",
                      boxShadow:
                        "0 0 35px rgba(0, 199, 183, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                      transform: `scale(${netlifyScale})`,
                      opacity: Math.min(1, netlifySpring),
                    }}
                  >
                    <SiNetlify size={26} color={NETLIFY_COLORS.netlifyAqua} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.netlifyAqua,
                        fontSize: 42,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        textShadow:
                          "0 0 25px rgba(50, 230, 226, 0.95), 0 0 50px rgba(0, 199, 183, 0.45)",
                      }}
                    >
                      di Netlify?
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 🖼️ ASSET CARD (STYLISH GLASS WINDOW AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 740,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isDiNetlify
                ? "1.5px solid rgba(0, 199, 183, 0.5)"
                : "1.5px solid rgba(56, 189, 248, 0.35)",
              borderRadius: 32,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow:
                "0 24px 60px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
            }}
          >
            {/* Traffic Lights & URL Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f43f5e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
              </div>

              <div
                style={{
                  flex: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 12,
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  color: NETLIFY_COLORS.textSecondary,
                }}
              >
                <FaGlobe size={14} color={NETLIFY_COLORS.netlifyTeal} />
                <span>https://app.netlify.app</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 12,
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  color: "#34d399",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <FaCheckCircle size={12} />
                <span>Online</span>
              </div>
            </div>

            {/* Body Preview */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    width: 260,
                    height: 18,
                    borderRadius: 6,
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 100%)",
                  }}
                />
                <div
                  style={{
                    width: 170,
                    height: 12,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
              </div>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "rgba(0, 199, 183, 0.15)",
                  border: "1.5px solid rgba(0, 199, 183, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiNetlify size={28} color={NETLIFY_COLORS.netlifyAqua} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 2: RELOAD 404 (F80 - F235)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 80 && frame < 235 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s2Opacity,
            transform: `translateY(${s2Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 300,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 410,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: is404Alert
                  ? "rgba(244, 63, 94, 0.16)"
                  : "rgba(245, 158, 11, 0.14)",
                border: is404Alert
                  ? "1px solid rgba(244, 63, 94, 0.45)"
                  : "1px solid rgba(245, 158, 11, 0.35)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              {is404Alert ? (
                <FaExclamationTriangle size={20} color={NETLIFY_COLORS.warningRose} />
              ) : (
                <FaSyncAlt
                  size={18}
                  color={NETLIFY_COLORS.questionAmber}
                  style={{ transform: `rotate(${fastSpin}deg)` }}
                />
              )}
              <span
                style={{
                  color: is404Alert
                    ? NETLIFY_COLORS.warningRose
                    : NETLIFY_COLORS.questionAmber,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {is404Alert ? "PAGE NOT FOUND" : "PAGE RELOAD"}
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isTapiKetika && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    opacity: Math.min(1, tapiKetikaSpring),
                    transform: `translateY(${(1 - Math.min(1, tapiKetikaSpring)) * 10}px)`,
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 40,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Tapi ketika halaman
                  </span>

                  {isDiReload && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 20px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.16) 100%)",
                        border: "1.5px solid rgba(251, 191, 36, 0.75)",
                        boxShadow: "0 0 24px rgba(245, 158, 11, 0.35)",
                        opacity: Math.min(1, diReloadSpring),
                      }}
                    >
                      <FaSyncAlt
                        size={20}
                        color={NETLIFY_COLORS.questionGold}
                        style={{ transform: `rotate(${fastSpin}deg)` }}
                      />
                      <span
                        style={{
                          color: NETLIFY_COLORS.questionGold,
                          fontSize: 38,
                          fontWeight: 800,
                        }}
                      >
                        di-reload,
                      </span>
                    </div>
                  )}
                </div>
              )}

              {isMalahMuncul && (
                <span
                  style={{
                    color: NETLIFY_COLORS.textSecondary,
                    fontSize: 34,
                    fontWeight: 500,
                    opacity: Math.min(1, malahMunculSpring),
                  }}
                >
                  malah muncul pesan:
                </span>
              )}

              {is404Alert && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "10px 28px",
                    borderRadius: 20,
                    background:
                      "linear-gradient(135deg, rgba(244, 63, 94, 0.36) 0%, rgba(225, 29, 72, 0.2) 100%)",
                    border: "2px solid rgba(244, 63, 94, 0.9)",
                    boxShadow:
                      "0 0 45px rgba(244, 63, 94, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                    transform: `scale(${alert404Scale})`,
                    opacity: Math.min(1, alert404Spring),
                  }}
                >
                  <FaExclamationTriangle size={32} color={NETLIFY_COLORS.warningRose} />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 42,
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 30px rgba(244, 63, 94, 0.9)",
                    }}
                  >
                    404 Page Not Found?
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (BROWSER WINDOW AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 750,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: is404Alert
                ? "1.5px solid rgba(244, 63, 94, 0.55)"
                : "1.5px solid rgba(255, 255, 255, 0.15)",
              borderRadius: 32,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: is404Alert
                ? "0 24px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(244, 63, 94, 0.25)"
                : "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* URL Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f43f5e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
              </div>

              <div
                style={{
                  flex: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 12,
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  color: is404Alert ? NETLIFY_COLORS.warningRose : NETLIFY_COLORS.textSecondary,
                }}
              >
                <FaGlobe size={14} color={is404Alert ? NETLIFY_COLORS.warningRose : NETLIFY_COLORS.netlifyTeal} />
                <span>https://app.netlify.app/dashboard</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 12,
                  background: is404Alert
                    ? "rgba(244, 63, 94, 0.2)"
                    : "rgba(245, 158, 11, 0.2)",
                  border: is404Alert
                    ? "1px solid rgba(244, 63, 94, 0.5)"
                    : "1px solid rgba(245, 158, 11, 0.4)",
                  color: is404Alert ? NETLIFY_COLORS.warningRose : NETLIFY_COLORS.questionGold,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {is404Alert ? "Error 404" : "Reloading..."}
              </div>
            </div>

            {/* Window Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px 20px",
                background: is404Alert
                  ? "rgba(244, 63, 94, 0.08)"
                  : "rgba(255, 255, 255, 0.03)",
                borderRadius: 20,
                gap: 12,
              }}
            >
              {is404Alert ? (
                <>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 64,
                      fontWeight: 900,
                      color: NETLIFY_COLORS.warningRose,
                      letterSpacing: "-0.03em",
                      textShadow: "0 0 25px rgba(244, 63, 94, 0.8)",
                    }}
                  >
                    404
                  </span>
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    Page Not Found
                  </span>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: NETLIFY_COLORS.textMuted,
                    fontSize: 20,
                  }}
                >
                  <FaSyncAlt
                    size={24}
                    color={NETLIFY_COLORS.questionGold}
                    style={{ transform: `rotate(${fastSpin}deg)` }}
                  />
                  <span>Reloading application...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 3: WHY QUESTION (F235 - F285)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 235 && frame < 285 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s3Opacity,
            transform: `translateY(${s3Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 340,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 340,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(245, 158, 11, 0.16)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                marginBottom: 24,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaQuestionCircle size={20} color={NETLIFY_COLORS.questionGold} />
              <span
                style={{
                  color: NETLIFY_COLORS.questionGold,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                PENYEBAB MASALAH
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              {isKenapaIni && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    opacity: Math.min(1, kenapaSpring),
                  }}
                >
                  Kenapa ini
                </span>
              )}

              {isBisaTerjadi && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "10px 32px",
                    borderRadius: 20,
                    background:
                      "linear-gradient(135deg, rgba(245, 158, 11, 0.32) 0%, rgba(217, 119, 6, 0.2) 100%)",
                    border: "2px solid rgba(251, 191, 36, 0.85)",
                    boxShadow:
                      "0 0 35px rgba(245, 158, 11, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                    transform: `scale(${terjadiScale})`,
                    opacity: Math.min(1, terjadiSpring),
                  }}
                >
                  <span
                    style={{
                      color: NETLIFY_COLORS.questionGold,
                      fontSize: 52,
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 30px rgba(245, 158, 11, 0.9)",
                    }}
                  >
                    bisa terjadi?
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (RADAR CENTERPIECE) */}
          <div
            style={{
              position: "absolute",
              top: 720,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 350,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Radar Rings */}
            <div
              style={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "1.5px solid rgba(245, 158, 11, 0.35)",
                transform: `scale(${radarPulse * 1.15})`,
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                transform: `scale(${radarPulse * 1.3})`,
                opacity: 0.4,
              }}
            />

            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(217, 119, 6, 0.15) 80%)",
                border: "2px solid rgba(251, 191, 36, 0.85)",
                boxShadow:
                  "0 0 45px rgba(245, 158, 11, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaQuestionCircle size={70} color={NETLIFY_COLORS.questionGold} />
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 4: SPA ARCHITECTURE (F285 - F495)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 285 && frame < 495 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s4Opacity,
            transform: `translateY(${s4Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 280,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 440,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(97, 218, 251, 0.14)",
                border: "1px solid rgba(97, 218, 251, 0.35)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaReact
                size={22}
                color={NETLIFY_COLORS.reactCyan}
                style={{ transform: `rotate(${reactSpin}deg)` }}
              />
              <span
                style={{
                  color: NETLIFY_COLORS.reactCyan,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                SPA ARCHITECTURE
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              {isKarenaKebanyakan && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 38,
                    fontWeight: 600,
                    opacity: Math.min(1, kebanyakanSpring),
                  }}
                >
                  Karena kebanyakan
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                {isSpaTerm && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 22px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(97, 218, 251, 0.28) 0%, rgba(14, 165, 233, 0.18) 100%)",
                      border: "1.5px solid rgba(97, 218, 251, 0.8)",
                      boxShadow: "0 0 30px rgba(97, 218, 251, 0.45)",
                      transform: `scale(${spaTermScale})`,
                      opacity: Math.min(1, spaTermSpring),
                    }}
                  >
                    <FaReact
                      size={24}
                      color={NETLIFY_COLORS.reactCyan}
                      style={{ transform: `rotate(${reactSpin}deg)` }}
                    />
                    <span
                      style={{
                        color: NETLIFY_COLORS.reactCyan,
                        fontSize: 38,
                        fontWeight: 900,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Single Page Application
                    </span>
                  </div>
                )}

                {isAtauSpa && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 20px",
                      borderRadius: 18,
                      background: "rgba(168, 85, 247, 0.2)",
                      border: "1.5px solid rgba(168, 85, 247, 0.6)",
                      opacity: Math.min(1, atauSpaSpring),
                    }}
                  >
                    <span
                      style={{
                        color: "#c084fc",
                        fontSize: 36,
                        fontWeight: 800,
                      }}
                    >
                      atau SPA
                    </span>
                  </div>
                )}
              </div>

              {isSatuHtml && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 6,
                    opacity: Math.min(1, satuHtmlSpring),
                  }}
                >
                  <span
                    style={{
                      color: NETLIFY_COLORS.textSecondary,
                      fontSize: 34,
                      fontWeight: 600,
                    }}
                  >
                    hanya menggunakan satu file HTML
                  </span>

                  {isEntryPoint && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 24px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(52, 211, 153, 0.28) 0%, rgba(16, 185, 129, 0.16) 100%)",
                        border: "1.5px solid rgba(52, 211, 153, 0.75)",
                        boxShadow: "0 0 28px rgba(52, 211, 153, 0.4)",
                        opacity: Math.min(1, entryPointSpring),
                      }}
                    >
                      <SiHtml5 size={22} color={NETLIFY_COLORS.freeMint} />
                      <span
                        style={{
                          color: NETLIFY_COLORS.freeMint,
                          fontSize: 34,
                          fontWeight: 800,
                        }}
                      >
                        sebagai entry point.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (SPA ARCHITECTURE DIAGRAM AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 760,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(255, 255, 255, 0.14)",
              borderRadius: 32,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Central Node: index.html */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 32px",
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(52, 211, 153, 0.24) 0%, rgba(16, 185, 129, 0.12) 100%)",
                border: "2px solid rgba(52, 211, 153, 0.8)",
                boxShadow:
                  "0 0 35px rgba(52, 211, 153, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
              }}
            >
              <SiHtml5 size={32} color={NETLIFY_COLORS.freeMint} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#ffffff",
                  }}
                >
                  index.html
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: NETLIFY_COLORS.freeMint,
                    fontWeight: 600,
                  }}
                >
                  Single Entry Point
                </span>
              </div>
            </div>

            {/* Branch Connectors */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 620,
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(97, 218, 251, 0.7) 100%)",
                }}
              />
              <div
                style={{
                  padding: "4px 14px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: 14,
                  color: NETLIFY_COLORS.textSecondary,
                }}
              >
                Memuat Script Bundle
              </div>
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(97, 218, 251, 0.7) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Child Nodes */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                width: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 18,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(97, 218, 251, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <FaReact size={24} color={NETLIFY_COLORS.reactCyan} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: "#ffffff", fontWeight: 700 }}>
                    bundle.js
                  </span>
                  <span style={{ fontSize: 13, color: NETLIFY_COLORS.textMuted }}>
                    Component & Logic
                  </span>
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 18,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <FaRoute size={24} color={NETLIFY_COLORS.purpleAccent} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: "#ffffff", fontWeight: 700 }}>
                    router.js
                  </span>
                  <span style={{ fontSize: 13, color: NETLIFY_COLORS.textMuted }}>
                    Client-side Routes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 5: CLIENT-SIDE ROUTING (F495 - F640)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 495 && frame < 640 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s5Opacity,
            transform: `translateY(${s5Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 320,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(56, 189, 248, 0.14)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaRoute size={20} color={NETLIFY_COLORS.netlifyCyan} />
              <span
                style={{
                  color: NETLIFY_COLORS.netlifyCyan,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                CLIENT-SIDE ROUTING
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isBerpindahHalaman && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 40,
                    fontWeight: 600,
                    opacity: Math.min(1, berpindahSpring),
                  }}
                >
                  Ketika kamu berpindah halaman,
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                {isRoutingFrontend && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.16) 100%)",
                      border: "1.5px solid rgba(56, 189, 248, 0.8)",
                      boxShadow: "0 0 30px rgba(56, 189, 248, 0.45)",
                      transform: `scale(${frontendScale})`,
                      opacity: Math.min(1, frontendSpring),
                    }}
                  >
                    <FaLaptopCode size={24} color={NETLIFY_COLORS.netlifyCyan} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.netlifyCyan,
                        fontSize: 38,
                        fontWeight: 900,
                      }}
                    >
                      routing ditangani oleh frontend,
                    </span>
                  </div>
                )}

                {isBukanServer && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 22px",
                      borderRadius: 18,
                      background: "rgba(244, 63, 94, 0.18)",
                      border: "1.5px solid rgba(244, 63, 94, 0.65)",
                      boxShadow: "0 0 25px rgba(244, 63, 94, 0.35)",
                      transform: `scale(${bukanServerScale})`,
                      opacity: Math.min(1, bukanServerSpring),
                    }}
                  >
                    <FaTimesCircle size={22} color={NETLIFY_COLORS.warningRose} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.warningRose,
                        fontSize: 38,
                        fontWeight: 900,
                      }}
                    >
                      bukan server.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 🖼️ ASSET CARD (COMPARISON CARDS AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 740,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {/* Frontend Card */}
            <div
              style={{
                flex: 1,
                background: "rgba(11, 26, 47, 0.75)",
                backdropFilter: NETLIFY_COLORS.glassBlur,
                WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
                border: "1.5px solid rgba(56, 189, 248, 0.45)",
                borderRadius: 28,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaLaptopCode size={22} color={NETLIFY_COLORS.netlifyCyan} />
                <span style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}>
                  Frontend (Browser)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  background: "rgba(56, 189, 248, 0.15)",
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  color: NETLIFY_COLORS.netlifyCyan,
                }}
              >
                <span>/</span>
                <FaArrowRight size={12} />
                <span>/about</span>
                <FaArrowRight size={12} />
                <span>/dashboard</span>
              </div>

              <span style={{ fontSize: 15, color: NETLIFY_COLORS.freeMint, fontWeight: 600 }}>
                ✓ Berganti tampilan di memori JS
              </span>
            </div>

            {/* Server Card */}
            <div
              style={{
                flex: 1,
                background: "rgba(11, 26, 47, 0.75)",
                backdropFilter: NETLIFY_COLORS.glassBlur,
                WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 28,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
                opacity: 0.8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaServer size={22} color={NETLIFY_COLORS.textMuted} />
                <span style={{ fontSize: 20, fontWeight: 700, color: NETLIFY_COLORS.textMuted }}>
                  Server (Netlify)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.05)",
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  color: NETLIFY_COLORS.textMuted,
                }}
              >
                <span>Idle / Bypassed</span>
              </div>

              <span style={{ fontSize: 15, color: NETLIFY_COLORS.textMuted, fontWeight: 500 }}>
                ✕ Tidak menerima request baru
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 6: DIRECT HTTP REQUEST (F640 - F795)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 640 && frame < 795 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s6Opacity,
            transform: `translateY(${s6Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 320,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(56, 189, 248, 0.14)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaGlobe size={20} color={NETLIFY_COLORS.netlifyCyan} />
              <span
                style={{
                  color: NETLIFY_COLORS.netlifyCyan,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                DIRECT HTTP REQUEST
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isNahReload && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    opacity: Math.min(1, nahReloadSpring),
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 38,
                      fontWeight: 600,
                    }}
                  >
                    Nah, ketika halaman
                  </span>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 18px",
                      borderRadius: 14,
                      background: "rgba(245, 158, 11, 0.25)",
                      border: "1.5px solid rgba(251, 191, 36, 0.7)",
                    }}
                  >
                    <FaSyncAlt
                      size={18}
                      color={NETLIFY_COLORS.questionGold}
                      style={{ transform: `rotate(${fastSpin}deg)` }}
                    />
                    <span
                      style={{
                        color: NETLIFY_COLORS.questionGold,
                        fontSize: 34,
                        fontWeight: 800,
                      }}
                    >
                      di-reload,
                    </span>
                  </div>
                </div>
              )}

              {isMemintaUrl && (
                <span
                  style={{
                    color: NETLIFY_COLORS.textSecondary,
                    fontSize: 34,
                    fontWeight: 600,
                    opacity: Math.min(1, memintaUrlSpring),
                  }}
                >
                  browser akan meminta URL tersebut
                </span>
              )}

              {isLangsungServer && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 28px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(56, 189, 248, 0.32) 0%, rgba(14, 165, 233, 0.18) 100%)",
                    border: "1.5px solid rgba(56, 189, 248, 0.85)",
                    boxShadow: "0 0 32px rgba(56, 189, 248, 0.45)",
                    transform: `scale(${langsungServerScale})`,
                    opacity: Math.min(1, langsungServerSpring),
                  }}
                >
                  <FaServer size={24} color={NETLIFY_COLORS.netlifyCyan} />
                  <span
                    style={{
                      color: NETLIFY_COLORS.netlifyCyan,
                      fontSize: 38,
                      fontWeight: 900,
                    }}
                  >
                    langsung ke server.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (NETWORK PIPELINE AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 740,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(255, 255, 255, 0.14)",
              borderRadius: 32,
              padding: "32px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Browser Node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "rgba(56, 189, 248, 0.2)",
                  border: "1.5px solid rgba(56, 189, 248, 0.55)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaGlobe size={34} color={NETLIFY_COLORS.netlifyCyan} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#ffffff" }}>
                Browser
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: NETLIFY_COLORS.textMuted }}>
                /dashboard
              </span>
            </div>

            {/* Pipeline Track & Traveling HTTP Packet */}
            <div
              style={{
                flex: 1,
                margin: "0 24px",
                position: "relative",
                height: 36,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 3,
                  background: "rgba(255, 255, 255, 0.12)",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  width: `${requestBeamProgress * 100}%`,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 1) 100%)",
                  boxShadow: "0 0 12px rgba(56, 189, 248, 0.8)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: `calc(${requestBeamProgress * 100}% - 70px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 12,
                  background: "rgba(56, 189, 248, 0.3)",
                  border: "1.5px solid rgba(56, 189, 248, 0.9)",
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                  fontFamily: FONT_MONO,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                <span>GET /dashboard</span>
              </div>
            </div>

            {/* Netlify Server Node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "rgba(0, 199, 183, 0.2)",
                  border: "1.5px solid rgba(0, 199, 183, 0.55)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiNetlify size={36} color={NETLIFY_COLORS.netlifyAqua} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#ffffff" }}>
                Netlify Server
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: NETLIFY_COLORS.netlifyTeal }}>
                Target
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 7: SERVER ROUTE MISS (F795 - F955)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 795 && frame < 955 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s7Opacity,
            transform: `translateY(${s7Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 310,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 390,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(244, 63, 94, 0.16)",
                border: "1px solid rgba(244, 63, 94, 0.45)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaTimesCircle size={20} color={NETLIFY_COLORS.warningRose} />
              <span
                style={{
                  color: NETLIFY_COLORS.warningRose,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                SERVER ROUTE MISS
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isTidakMenemukan && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 38,
                    fontWeight: 600,
                    opacity: Math.min(1, tidakMenemukanSpring),
                  }}
                >
                  Karena server tidak menemukan file
                </span>
              )}

              {isRouteSesuai && (
                <span
                  style={{
                    color: NETLIFY_COLORS.textSecondary,
                    fontSize: 36,
                    fontWeight: 600,
                    opacity: Math.min(1, routeSesuaiSpring),
                  }}
                >
                  atau route yang sesuai,
                </span>
              )}

              {isAkhirnyaMuncul && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginTop: 6,
                    opacity: Math.min(1, akhirnyaSpring),
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 38,
                      fontWeight: 600,
                    }}
                  >
                    akhirnya muncul
                  </span>

                  {is404Result && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 26px",
                        borderRadius: 18,
                        background:
                          "linear-gradient(135deg, rgba(244, 63, 94, 0.36) 0%, rgba(225, 29, 72, 0.22) 100%)",
                        border: "2px solid rgba(244, 63, 94, 0.9)",
                        boxShadow:
                          "0 0 35px rgba(244, 63, 94, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                        transform: `scale(${result404Scale})`,
                        opacity: Math.min(1, result404Spring),
                      }}
                    >
                      <FaExclamationTriangle size={24} color={NETLIFY_COLORS.warningRose} />
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: 44,
                          fontWeight: 900,
                          textShadow: "0 0 25px rgba(244, 63, 94, 0.9)",
                        }}
                      >
                        404.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (SERVER LOOKUP STATUS AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 750,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(244, 63, 94, 0.4)",
              borderRadius: 32,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 10,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaServer size={18} color={NETLIFY_COLORS.warningRose} />
                <span style={{ fontSize: 16, fontWeight: 700, color: "#ffffff" }}>
                  Server Static File Lookup
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 14,
                  color: NETLIFY_COLORS.warningRose,
                  fontWeight: 700,
                }}
              >
                Status: 404
              </span>
            </div>

            {/* File scan items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: FONT_MONO, fontSize: 16 }}>
                  <FaFileCode size={18} color={NETLIFY_COLORS.textMuted} />
                  <span style={{ color: NETLIFY_COLORS.textSecondary }}>/index.html</span>
                </div>
                <span style={{ color: NETLIFY_COLORS.freeMint, fontSize: 14, fontWeight: 600 }}>
                  Exists (200)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  borderRadius: 14,
                  background: "rgba(244, 63, 94, 0.12)",
                  border: "1px solid rgba(244, 63, 94, 0.4)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: FONT_MONO, fontSize: 16 }}>
                  <FaTimesCircle size={18} color={NETLIFY_COLORS.warningRose} />
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>/dashboard/index.html</span>
                </div>
                <span style={{ color: NETLIFY_COLORS.warningRose, fontSize: 14, fontWeight: 700 }}>
                  File Not Found ✕
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 8: SOLUTION INTRO (F955 - F1000)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 955 && frame < 1000 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s8Opacity,
            transform: `translateY(${s8Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 340,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 340,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(52, 211, 153, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                marginBottom: 26,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaLightbulb size={20} color={NETLIFY_COLORS.questionGold} />
              <span
                style={{
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                SOLUSI
              </span>
            </div>

            {/* Headline */}
            {isSolusinya && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 42px",
                  borderRadius: 24,
                  background:
                    "linear-gradient(135deg, rgba(52, 211, 153, 0.32) 0%, rgba(16, 185, 129, 0.2) 100%)",
                  border: "2px solid rgba(52, 211, 153, 0.9)",
                  boxShadow:
                    "0 0 40px rgba(52, 211, 153, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                  transform: `scale(${solusinyaScale})`,
                  opacity: Math.min(1, solusinyaSpring),
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 58,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 30px rgba(52, 211, 153, 0.9)",
                  }}
                >
                  Solusinya?
                </span>
              </div>
            )}
          </div>

          {/* 🖼️ ASSET CARD (LIGHTBULB CENTERPIECE) */}
          <div
            style={{
              position: "absolute",
              top: 720,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 350,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(52, 211, 153, 0.4)",
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "1.5px solid rgba(251, 191, 36, 0.35)",
                transform: `scale(${radarPulse * 1.15})`,
                opacity: 0.7,
              }}
            />
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(217, 119, 6, 0.15) 80%)",
                border: "2px solid rgba(251, 191, 36, 0.85)",
                boxShadow:
                  "0 0 45px rgba(251, 191, 36, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaLightbulb size={70} color={NETLIFY_COLORS.questionGold} />
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 9: CREATE REDIRECTS (F1000 - F1120)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 1000 && frame < 1120 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s9Opacity,
            transform: `translateY(${s9Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 300,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 420,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.14)",
                border: "1px solid rgba(0, 199, 183, 0.35)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <SiNetlify size={20} color={NETLIFY_COLORS.netlifyTeal} />
              <span
                style={{
                  color: NETLIFY_COLORS.netlifyAqua,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                NETLIFY CONFIGURATION
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isBuatFile && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    opacity: Math.min(1, buatFileSpring),
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 38,
                      fontWeight: 600,
                    }}
                  >
                    Buat file bernama
                  </span>

                  {isRedirectsFile && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 22px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(0, 199, 183, 0.32) 0%, rgba(0, 147, 135, 0.2) 100%)",
                        border: "1.5px solid rgba(50, 230, 226, 0.85)",
                        boxShadow: "0 0 30px rgba(0, 199, 183, 0.45)",
                        transform: `scale(${redirectsFileScale})`,
                        opacity: Math.min(1, redirectsFileSpring),
                      }}
                    >
                      <FaFileCode size={22} color={NETLIFY_COLORS.netlifyAqua} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          color: NETLIFY_COLORS.netlifyAqua,
                          fontSize: 36,
                          fontWeight: 800,
                        }}
                      >
                        _redirects
                      </span>
                    </div>
                  )}
                </div>
              )}

              {isFolderPublic && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "6px 20px",
                    borderRadius: 14,
                    background: "rgba(245, 158, 11, 0.16)",
                    border: "1.5px solid rgba(251, 191, 36, 0.6)",
                    opacity: Math.min(1, folderPublicSpring),
                  }}
                >
                  <FaFolderOpen size={20} color={NETLIFY_COLORS.questionGold} />
                  <span
                    style={{
                      color: NETLIFY_COLORS.questionGold,
                      fontSize: 34,
                      fontWeight: 700,
                    }}
                  >
                    di folder public,
                  </span>
                </div>
              )}

              {isTambahkanKonfig && (
                <span
                  style={{
                    color: NETLIFY_COLORS.textSecondary,
                    fontSize: 34,
                    fontWeight: 600,
                    marginTop: 4,
                    opacity: Math.min(1, konfigSpring),
                  }}
                >
                  lalu tambahkan konfigurasi berikut:
                </span>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (FOLDER TREE AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 750,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(255, 255, 255, 0.14)",
              borderRadius: 32,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              textAlign: "left",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* Root public folder */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 16px",
                borderRadius: 14,
                background: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
              }}
            >
              <FaFolderOpen size={22} color={NETLIFY_COLORS.questionGold} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  fontWeight: 700,
                  color: NETLIFY_COLORS.questionGold,
                }}
              >
                public/
              </span>
            </div>

            {/* Inside public/ folder */}
            <div
              style={{
                marginLeft: 28,
                paddingLeft: 16,
                borderLeft: "2px dashed rgba(255, 255, 255, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {/* _redirects file highlight */}
              {isRedirectsFile && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 18px",
                    borderRadius: 14,
                    background: "rgba(0, 199, 183, 0.16)",
                    border: "1.5px solid rgba(0, 199, 183, 0.65)",
                    boxShadow: "0 0 20px rgba(0, 199, 183, 0.3)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <FaFileCode size={20} color={NETLIFY_COLORS.netlifyAqua} />
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 20,
                        fontWeight: 800,
                        color: NETLIFY_COLORS.netlifyAqua,
                      }}
                    >
                      _redirects
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 8,
                      background: "rgba(0, 199, 183, 0.3)",
                      color: "#ffffff",
                    }}
                  >
                    FILE BARU
                  </span>
                </div>
              )}

              {/* index.html */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <SiHtml5 size={18} color={NETLIFY_COLORS.textMuted} />
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    color: NETLIFY_COLORS.textSecondary,
                  }}
                >
                  index.html
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 10: REDIRECT RULE (F1120 - F1350)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 1120 && frame < 1350 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s10Opacity,
            transform: `translateY(${s10Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 340,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 240,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(52, 211, 153, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                marginBottom: 16,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaFileCode size={20} color={NETLIFY_COLORS.freeMint} />
              <span
                style={{
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                REDIRECT RULE
              </span>
            </div>

            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Konfigurasi file _redirects:
            </span>
          </div>

          {/* 🖼️ ASSET CARD (CODE WINDOW AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 640,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(4, 9, 20, 0.85)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(52, 211, 153, 0.55)",
              borderRadius: 32,
              padding: "26px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow:
                "0 24px 60px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
              transform: `scale(${codeRuleScale})`,
              opacity: Math.min(1, codeRuleSpring),
            }}
          >
            {/* Editor Tab Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f43f5e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  borderRadius: 10,
                  background: "rgba(255, 255, 255, 0.08)",
                  fontFamily: FONT_MONO,
                  fontSize: 16,
                  color: NETLIFY_COLORS.textSecondary,
                }}
              >
                <FaFileCode size={14} color={NETLIFY_COLORS.netlifyAqua} />
                <span>public/_redirects</span>
              </div>

              <div style={{ width: 50 }} />
            </div>

            {/* Code Line Display: /* /index.html 200 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                padding: "22px 20px",
                borderRadius: 18,
                background: "rgba(0, 0, 0, 0.4)",
                border: "1.5px solid rgba(52, 211, 153, 0.4)",
                fontFamily: FONT_MONO,
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  color: NETLIFY_COLORS.questionGold,
                  textShadow: "0 0 25px rgba(251, 191, 36, 0.8)",
                }}
              >
                /*
              </span>

              <span
                style={{
                  color: NETLIFY_COLORS.netlifyCyan,
                  textShadow: "0 0 25px rgba(56, 189, 248, 0.8)",
                }}
              >
                /index.html
              </span>

              <span
                style={{
                  color: NETLIFY_COLORS.freeMint,
                  textShadow: "0 0 25px rgba(52, 211, 153, 0.8)",
                }}
              >
                200
              </span>
            </div>

            {/* 3 Explanation Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  borderRadius: 12,
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, color: NETLIFY_COLORS.questionGold, fontWeight: 800 }}>
                  /*
                </span>
                <span style={{ fontSize: 13, color: NETLIFY_COLORS.textSecondary }}>
                  Semua Route
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  borderRadius: 12,
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, color: NETLIFY_COLORS.netlifyCyan, fontWeight: 800 }}>
                  /index.html
                </span>
                <span style={{ fontSize: 13, color: NETLIFY_COLORS.textSecondary }}>
                  Entry Point
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  borderRadius: 12,
                  background: "rgba(52, 211, 153, 0.12)",
                  border: "1px solid rgba(52, 211, 153, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ fontFamily: FONT_MONO, color: NETLIFY_COLORS.freeMint, fontWeight: 800 }}>
                  200
                </span>
                <span style={{ fontSize: 13, color: NETLIFY_COLORS.textSecondary }}>
                  Status OK Rewrite
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          🎬 SCENE 11: RESOLUTION & OUTRO (F1350 - F1530)
          ═════════════════════════════════════════════════════════════════════ */}
      {frame >= 1350 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s11Opacity,
            transform: `translateY(${s11Y}px)`,
            pointerEvents: "none",
          }}
        >
          {/* 🏷️ TEXT AREA (FRAMELESS / ORGANIC KINETIC TYPOGRAPHY) */}
          <div
            style={{
              position: "absolute",
              top: 300,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              height: 420,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(52, 211, 153, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                marginBottom: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <FaCheckCircle size={20} color={NETLIFY_COLORS.freeMint} />
              <span
                style={{
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                MASALAH TERSELESAIKAN
              </span>
            </div>

            {/* Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isDenganBegitu && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 36,
                    fontWeight: 600,
                    opacity: Math.min(1, denganBegituSpring),
                  }}
                >
                  Dengan begitu, setiap request akan diarahkan ke
                </span>
              )}

              {isKeIndexHtml && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "6px 24px",
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg, rgba(52, 211, 153, 0.32) 0%, rgba(16, 185, 129, 0.18) 100%)",
                    border: "1.5px solid rgba(52, 211, 153, 0.85)",
                    boxShadow: "0 0 30px rgba(52, 211, 153, 0.45)",
                    transform: `scale(${keIndexScale})`,
                    opacity: Math.min(1, keIndexSpring),
                  }}
                >
                  <SiHtml5 size={22} color={NETLIFY_COLORS.freeMint} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      color: NETLIFY_COLORS.freeMint,
                      fontSize: 36,
                      fontWeight: 800,
                    }}
                  >
                    index.html,
                  </span>
                </div>
              )}

              {isRoutingKembali && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 4,
                    opacity: Math.min(1, routingKembaliSpring),
                  }}
                >
                  <span
                    style={{
                      color: NETLIFY_COLORS.textSecondary,
                      fontSize: 34,
                      fontWeight: 600,
                    }}
                  >
                    dan routing kembali ditangani oleh
                  </span>

                  {isOlehFrontend && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 22px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(56, 189, 248, 0.32) 0%, rgba(14, 165, 233, 0.18) 100%)",
                        border: "1.5px solid rgba(56, 189, 248, 0.85)",
                        boxShadow: "0 0 30px rgba(56, 189, 248, 0.45)",
                        transform: `scale(${olehFrontendScale})`,
                        opacity: Math.min(1, olehFrontendSpring),
                      }}
                    >
                      <FaCheckCircle size={22} color={NETLIFY_COLORS.netlifyCyan} />
                      <span
                        style={{
                          color: NETLIFY_COLORS.netlifyCyan,
                          fontSize: 36,
                          fontWeight: 800,
                        }}
                      >
                        frontend.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ ASSET CARD (RESOLVED BROWSER VERIFICATION AT FIXED POSITION) */}
          <div
            style={{
              position: "absolute",
              top: 760,
              left: CONTENT_INSET_X,
              right: CONTENT_INSET_X,
              background: "rgba(11, 26, 47, 0.75)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(52, 211, 153, 0.55)",
              borderRadius: 32,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
            }}
          >
            {/* URL Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f43f5e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
              </div>

              <div
                style={{
                  flex: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(52, 211, 153, 0.35)",
                  borderRadius: 12,
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: FONT_MONO,
                  fontSize: 18,
                  color: "#ffffff",
                }}
              >
                <FaGlobe size={14} color={NETLIFY_COLORS.freeMint} />
                <span>https://app.netlify.app/dashboard</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 12,
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <FaCheckCircle size={12} />
                <span>200 OK</span>
              </div>
            </div>

            {/* 3 Status Badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "14px 10px",
                  borderRadius: 16,
                  background: "rgba(52, 211, 153, 0.12)",
                  border: "1px solid rgba(52, 211, 153, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: NETLIFY_COLORS.freeMint,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <FaCheckCircle size={14} />
                <span>Rewrite Aktif</span>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "14px 10px",
                  borderRadius: 16,
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: NETLIFY_COLORS.netlifyCyan,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <FaSyncAlt size={14} />
                <span>Aman Di-reload</span>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "14px 10px",
                  borderRadius: 16,
                  background: "rgba(0, 199, 183, 0.12)",
                  border: "1px solid rgba(0, 199, 183, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: NETLIFY_COLORS.netlifyAqua,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <SiNetlify size={16} />
                <span>Netlify Ready</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
