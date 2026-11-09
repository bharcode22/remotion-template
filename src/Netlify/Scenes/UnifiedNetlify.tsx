import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion";
import { NETLIFY_COLORS, FONT_PRIMARY, FONT_MONO } from "../constants";
import {
  FaReact,
  FaQuestionCircle,
  FaCloudUploadAlt,
  FaServer,
  FaGlobe,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaBolt,
  FaCogs,
  FaLink,
  FaShieldAlt,
  FaArrowRight,
  FaTerminal,
  FaLock,
  FaMousePointer,
  FaCheck,
  FaFileCode,
  FaCodeBranch,
  FaSyncAlt,
} from "react-icons/fa";
import { SiNetlify, SiGithub, SiGithubactions } from "react-icons/si";

export const UnifiedNetlify: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous visual oscillations
  const reactSpin = (frame * 1.8) % 360;
  const radarPulse = interpolate(
    Math.sin((frame * Math.PI) / 18),
    [-1, 1],
    [0.92, 1.08]
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1 (F0 - F72)
  // Line 1: "Mau pamerin website React kalian secara gratis?" (Audio F8 - F62)
  // ═══════════════════════════════════════════════════════════════════════════
  const s1Entrance = spring({
    frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s1ExitProgress = interpolate(frame, [65, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s1Opacity = (1 - s1ExitProgress) * Math.min(1, s1Entrance);
  const s1Y = (1 - s1Entrance) * 40 - s1ExitProgress * 50;

  const isMauPamerin = frame >= 6;
  const mauPamerinSpring = spring({
    frame: frame - 6,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isReact = frame >= 22;
  const reactSpring = spring({
    frame: frame - 22,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });
  const reactScale = isReact ? 1 + (1 - Math.min(1, reactSpring)) * 0.22 : 0.95;

  const isGratis = frame >= 40;
  const gratisSpring = spring({
    frame: frame - 40,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const gratisScale = isGratis ? 1 + (1 - Math.min(1, gratisSpring)) * 0.25 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2 (F72 - F144)
  // Line 2: "Tapi bingung mau deploy di mana?" (Audio F79 - F127)
  // ═══════════════════════════════════════════════════════════════════════════
  const s2Frame = frame - 72;
  const s2Entrance = spring({
    frame: s2Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s2ExitProgress = interpolate(frame, [138, 144], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s2Opacity = (1 - s2ExitProgress) * Math.min(1, s2Entrance);
  const s2Y = (1 - s2Entrance) * 40 - s2ExitProgress * 50;

  const isTapiBingung = frame >= 76;
  const bingungSpring = spring({
    frame: frame - 76,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isDeployDiMana = frame >= 96;
  const deploySpring = spring({
    frame: frame - 96,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const deployScale = isDeployDiMana ? 1 + (1 - Math.min(1, deploySpring)) * 0.24 : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3 (F144 - F186)
  // Line 3: "Netlify aja!" (Audio F148 - F173)
  // ═══════════════════════════════════════════════════════════════════════════
  const s3Frame = frame - 144;
  const s3Entrance = spring({
    frame: s3Frame,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 130 },
  });
  const s3ExitProgress = interpolate(frame, [180, 186], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s3Opacity = (1 - s3ExitProgress) * Math.min(1, s3Entrance);
  const s3Y = (1 - s3Entrance) * 40 - s3ExitProgress * 50;

  const isNetlifyHero = frame >= 148;
  const netlifyHeroSpring = spring({
    frame: frame - 148,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const netlifyHeroScale = isNetlifyHero
    ? 1 + (1 - Math.min(1, netlifyHeroSpring)) * 0.35
    : 0.9;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4 (F186 - F290)
  // Line 4: "Gratis untuk memulai dan gampang banget digunakan." (Audio F186 - F274)
  // ═══════════════════════════════════════════════════════════════════════════
  const s4Frame = frame - 186;
  const s4Entrance = spring({
    frame: s4Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s4ExitProgress = interpolate(frame, [283, 290], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s4Opacity = (1 - s4ExitProgress) * Math.min(1, s4Entrance);
  const s4Y = (1 - s4Entrance) * 40 - s4ExitProgress * 50;

  const isGratisMemulai = frame >= 186;
  const gratisMemulaiSpring = spring({
    frame: frame - 186,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isGampangBanget = frame >= 225;
  const gampangSpring = spring({
    frame: frame - 225,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 160 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 5 (F290 - F440)
  // Line 5: "Cukup build project React kalian, lalu drag and drop folder hasil build ke Netlify." (Audio F291 - F432)
  // ═══════════════════════════════════════════════════════════════════════════
  const s5Frame = frame - 290;
  const s5Entrance = spring({
    frame: s5Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s5ExitProgress = interpolate(frame, [432, 440], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s5Opacity = (1 - s5ExitProgress) * Math.min(1, s5Entrance);
  const s5Y = (1 - s5Entrance) * 40 - s5ExitProgress * 50;

  const isCukupBuild = frame >= 291;
  const cukupBuildSpring = spring({
    frame: frame - 291,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isDragDrop = frame >= 351;
  const dragDropSpring = spring({
    frame: frame - 351,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 160 },
  });

  const isHasilBuildKeNetlify = frame >= 380;
  const hasilBuildSpring = spring({
    frame: frame - 380,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 170 },
  });

  // Dynamic curved trajectory for build/ folder into Netlify dropzone (F352 - F382)
  const folderDragProgress = interpolate(frame, [352, 382], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const folderDragX = interpolate(folderDragProgress, [0, 1], [-210, 175]);
  const folderDragY = interpolate(folderDragProgress, [0, 0.45, 1], [0, -48, 0]);
  const folderDragRotate = interpolate(folderDragProgress, [0, 0.5, 1], [0, -7, 2]);
  const folderDragScale = interpolate(
    folderDragProgress,
    [0, 0.2, 0.8, 1],
    [1, 1.12, 1.08, 1]
  );

  // Pointer cursor: visible while dragging, releases upon landing
  const cursorOpacity = interpolate(frame, [350, 353, 382, 385], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Drop shockwave impact at F382
  const isDropped = frame >= 382;
  const shockwaveProgress = interpolate(frame, [382, 404], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveScale = interpolate(shockwaveProgress, [0, 1], [0.5, 2.4]);
  const shockwaveOpacity = interpolate(
    shockwaveProgress,
    [0, 0.2, 1],
    [0, 0.85, 0]
  );

  // Real-time Upload Progress (F386 - F428)
  const isUploading = frame >= 386;
  const uploadPct = interpolate(frame, [386, 428], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isUploadComplete = frame >= 428;
  const uploadCompleteSpring = spring({
    frame: Math.max(0, frame - 428),
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6 (F440 - F515)
  // Line 6: "Website kalian langsung online!" (Audio F444 - F496)
  // ═══════════════════════════════════════════════════════════════════════════
  const s6Frame = frame - 440;
  const s6Entrance = spring({
    frame: s6Frame,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 130 },
  });
  const s6ExitProgress = interpolate(frame, [508, 515], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s6Opacity = (1 - s6ExitProgress) * Math.min(1, s6Entrance);
  const s6Y = (1 - s6Entrance) * 40 - s6ExitProgress * 50;

  const isWebsiteKalian = frame >= 444;
  const websiteKalianSpring = spring({
    frame: frame - 444,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isLangsungOnline = frame >= 456;
  const langsungOnlineSpring = spring({
    frame: frame - 456,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const onlineScale = isLangsungOnline
    ? 1 + (1 - Math.min(1, langsungOnlineSpring)) * 0.3
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 7 (F515 - F570)
  // Line 7: "Atau mau lebih praktis?" (Audio F516 - F557)
  // ═══════════════════════════════════════════════════════════════════════════
  const s7Frame = frame - 515;
  const s7Entrance = spring({
    frame: s7Frame,
    fps: 30,
    config: { damping: 13, mass: 0.7, stiffness: 120 },
  });
  const s7ExitProgress = interpolate(frame, [563, 570], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s7Opacity = (1 - s7ExitProgress) * Math.min(1, s7Entrance);
  const s7Y = (1 - s7Entrance) * 40 - s7ExitProgress * 50;

  const isLebihPraktis = frame >= 516;
  const lebihPraktisSpring = spring({
    frame: frame - 516,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 160 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 8 (F570 - F755)
  // Line 8: "Bisa juga integrasikan project kalian dengan GitHub Actions untuk otomatisasi deployment menggunakan CI/CD." (Audio F570 - F741)
  // ═══════════════════════════════════════════════════════════════════════════
  const s8Frame = frame - 570;
  const s8Entrance = spring({
    frame: s8Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s8ExitProgress = interpolate(frame, [746, 755], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s8Opacity = (1 - s8ExitProgress) * Math.min(1, s8Entrance);
  const s8Y = (1 - s8Entrance) * 40 - s8ExitProgress * 50;

  const isIntegrasikan = frame >= 570;
  const integrasikanSpring = spring({
    frame: frame - 570,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isGithubActions = frame >= 630;
  const githubSpring = spring({
    frame: frame - 630,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 165 },
  });

  const isOtomatisasi = frame >= 675;
  const otomatisasiSpring = spring({
    frame: frame - 675,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isCiCd = frame >= 705;
  const cicdSpring = spring({
    frame: frame - 705,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });
  const cicdScale = isCiCd ? 1 + (1 - Math.min(1, cicdSpring)) * 0.25 : 0.95;

  // ── CI/CD Pipeline Detailed Interactive Animation (F638 - F747) ──
  // Stream 1: Code push energy beam from GitHub to Actions (F638 - F666)
  const cicdBeam1 = interpolate(frame, [638, 666], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shockwave 2 at GitHub Actions upon code arrival (F666 - F686)
  const isBeam1Arrived = frame >= 666;
  const shockwaveActionsProgress = interpolate(frame, [666, 686], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveActionsScale = interpolate(
    shockwaveActionsProgress,
    [0, 1],
    [0.6, 2.2]
  );
  const shockwaveActionsOpacity = interpolate(
    shockwaveActionsProgress,
    [0, 0.2, 1],
    [0, 0.8, 0]
  );

  // Actions Workflow Step Timers:
  const isStep1Done = frame >= 676; // Install deps & lint
  const isStep2Done = frame >= 690; // npm run build
  const isStep3Done = frame >= 702; // Automated test pass

  // Stream 2: Deploy energy beam from Actions to Netlify (F704 - F725)
  const cicdBeam2 = interpolate(frame, [704, 725], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shockwave 3 at Netlify upon deployment landing (F725 - F747)
  const isBeam2Arrived = frame >= 725;
  const shockwaveNetlifyProgress = interpolate(frame, [725, 747], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveNetlifyScale = interpolate(
    shockwaveNetlifyProgress,
    [0, 1],
    [0.6, 2.4]
  );
  const shockwaveNetlifyOpacity = interpolate(
    shockwaveNetlifyProgress,
    [0, 0.2, 1],
    [0, 0.85, 0]
  );

  // Actions gear continuous rotation
  const actionsGearSpin = (frame * 5) % 360;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 9 (F755 - F985)
  // Line 9: "Tapi," (Audio F759 - F782)
  // Line 10: "Kalau menggunakan subdomain gratis dari Netlify, alamat website kalian akan berakhiran .netlify.app." (Audio F789 - F973)
  // ═══════════════════════════════════════════════════════════════════════════
  const s9Frame = frame - 755;
  const s9Entrance = spring({
    frame: s9Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s9ExitProgress = interpolate(frame, [976, 985], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s9Opacity = (1 - s9ExitProgress) * Math.min(1, s9Entrance);
  const s9Y = (1 - s9Entrance) * 40 - s9ExitProgress * 50;

  const isTapiCaution = frame >= 759;
  const tapiSpring = spring({
    frame: frame - 759,
    fps: 30,
    config: { damping: 11, mass: 0.5, stiffness: 170 },
  });

  const isSubdomainGratis = frame >= 789;
  const subdomainSpring = spring({
    frame: frame - 789,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isAlamatWebsite = frame >= 864;
  const alamatSpring = spring({
    frame: frame - 864,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 155 },
  });

  const isNetlifyApp = frame >= 905;
  const netlifyAppSpring = spring({
    frame: frame - 905,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const netlifyAppScale = isNetlifyApp
    ? 1 + (1 - Math.min(1, netlifyAppSpring)) * 0.3
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 10 (F985 - F1115)
  // Line 11: "Jadi, kalau mau pakai domain sendiri, kalian bisa menghubungkan custom domain." (Audio F990 - F1104)
  // ═══════════════════════════════════════════════════════════════════════════
  const s10Frame = frame - 985;
  const s10Entrance = spring({
    frame: s10Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });
  const s10ExitProgress = interpolate(frame, [1108, 1115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s10Opacity = (1 - s10ExitProgress) * Math.min(1, s10Entrance);
  const s10Y = (1 - s10Entrance) * 40 - s10ExitProgress * 50;

  const isDomainSendiri = frame >= 990;
  const domainSendiriSpring = spring({
    frame: frame - 990,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });

  const isBisaMenghubungkan = frame >= 1040;
  const menghubungkanSpring = spring({
    frame: frame - 1040,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 155 },
  });

  const isCustomDomain = frame >= 1060;
  const customDomainSpring = spring({
    frame: frame - 1060,
    fps: 30,
    config: { damping: 9, mass: 0.5, stiffness: 190 },
  });
  const customDomainScale = isCustomDomain
    ? 1 + (1 - Math.min(1, customDomainSpring)) * 0.3
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 11 (F1115 - F1143)
  // Line 12: "Gampang, kan?" (Audio F1116 - F1142)
  // ═══════════════════════════════════════════════════════════════════════════
  const s11Frame = frame - 1115;
  const s11Entrance = spring({
    frame: s11Frame,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 160 },
  });
  const s11Opacity = Math.min(1, s11Entrance);
  const s11Scale = 0.9 + Math.min(1, s11Entrance) * 0.1;

  const isGampangKan = frame >= 1116;
  const gampangKanSpring = spring({
    frame: frame - 1116,
    fps: 30,
    config: { damping: 8, mass: 0.5, stiffness: 200 },
  });
  const gampangKanScale = isGampangKan
    ? 1 + (1 - Math.min(1, gampangKanSpring)) * 0.35
    : 0.9;

  return (
    <AbsoluteFill
      style={{
        width: 1080,
        height: 1920,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: FONT_PRIMARY,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 1: REACT SHOWCASE (F0 - F72)
          Line 1: "Mau pamerin website React kalian secara gratis?"
         ═══════════════════════════════════════════════════════════════════ */}
      {frame < 72 && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s1Opacity,
            transform: `translateY(${s1Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isReact
                ? "1.5px solid rgba(97, 218, 251, 0.55)"
                : NETLIFY_COLORS.glassBorder,
              borderRadius: 36,
              padding: "48px 42px",
              boxShadow: isReact
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(97, 218, 251, 0.3)"
                : NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(97, 218, 251, 0.12)",
                border: "1px solid rgba(97, 218, 251, 0.35)",
                marginBottom: 28,
              }}
            >
              <FaReact
                size={22}
                color={NETLIFY_COLORS.reactCyan}
                style={{ transform: `rotate(${reactSpin}deg)` }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NETLIFY_COLORS.netlifyTeal,
                  boxShadow: `0 0 8px ${NETLIFY_COLORS.netlifyTeal}`,
                }}
              />
              <SiNetlify size={20} color={NETLIFY_COLORS.netlifyTeal} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                marginBottom: 36,
              }}
            >
              {isMauPamerin && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 44,
                    fontWeight: 600,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    opacity: Math.min(1, mauPamerinSpring),
                    transform: `translateY(${(1 - Math.min(1, mauPamerinSpring)) * 10}px)`,
                  }}
                >
                  Mau pamerin
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
                {isReact && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(97, 218, 251, 0.28) 0%, rgba(14, 165, 233, 0.16) 100%)",
                      border: "1.5px solid rgba(97, 218, 251, 0.75)",
                      boxShadow:
                        "0 0 32px rgba(97, 218, 251, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                      transform: `scale(${reactScale})`,
                      opacity: Math.min(1, reactSpring),
                    }}
                  >
                    <FaReact
                      size={26}
                      color={NETLIFY_COLORS.reactCyan}
                      style={{ transform: `rotate(${reactSpin}deg)` }}
                    />
                    <span
                      style={{
                        color: NETLIFY_COLORS.reactCyan,
                        fontSize: 42,
                        fontWeight: 900,
                        fontFamily:
                          FONT_PRIMARY,
                        letterSpacing: "-0.02em",
                        textShadow:
                          "0 0 25px rgba(97, 218, 251, 0.9), 0 0 50px rgba(97, 218, 251, 0.4)",
                      }}
                    >
                      website React kalian
                    </span>
                  </div>
                )}

                {isGratis && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.32) 0%, rgba(5, 150, 105, 0.2) 100%)",
                      border: "1.5px solid rgba(52, 211, 153, 0.85)",
                      boxShadow:
                        "0 0 35px rgba(16, 185, 129, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                      transform: `scale(${gratisScale})`,
                      opacity: Math.min(1, gratisSpring),
                    }}
                  >
                    <FaCheckCircle size={22} color="#34d399" />
                    <span
                      style={{
                        color: "#34d399",
                        fontSize: 42,
                        fontWeight: 900,
                        fontFamily:
                          FONT_PRIMARY,
                        letterSpacing: "-0.02em",
                        textShadow:
                          "0 0 25px rgba(52, 211, 153, 0.95), 0 0 50px rgba(52, 211, 153, 0.45)",
                      }}
                    >
                      secara gratis?
                    </span>
                  </div>
                )}
              </div>
            </div>

            {isReact && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 840,
                  background: "rgba(11, 26, 47, 0.65)",
                  border: isGratis
                    ? "1.5px solid rgba(52, 211, 153, 0.5)"
                    : "1.5px solid rgba(97, 218, 251, 0.4)",
                  borderRadius: 22,
                  padding: "18px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  opacity: Math.min(1, reactSpring),
                  transform: `scale(${0.96 + Math.min(1, reactSpring) * 0.04})`,
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 14px 35px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#f43f5e",
                        boxShadow: "0 0 8px rgba(244, 63, 94, 0.5)",
                      }}
                    />
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#fbbf24",
                        boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)",
                      }}
                    />
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#10b981",
                        boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flex: 1,
                      maxWidth: 420,
                      margin: "0 20px",
                      height: 28,
                      borderRadius: 14,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "0 12px",
                    }}
                  >
                    <FaGlobe size={13} color="#94a3b8" />
                    <div
                      style={{
                        height: 4,
                        width: "60%",
                        borderRadius: 2,
                        background: isGratis
                          ? "rgba(52, 211, 153, 0.5)"
                          : "rgba(97, 218, 251, 0.5)",
                      }}
                    />
                  </div>

                  <FaExternalLinkAlt size={14} color="#94a3b8" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 2: DEPLOY DILEMMA (F72 - F144)
          Line 2: "Tapi bingung mau deploy di mana?"
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 72 && frame < 144 && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s2Opacity,
            transform: `translateY(${s2Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isDeployDiMana
                ? "1.5px solid rgba(245, 158, 11, 0.55)"
                : NETLIFY_COLORS.glassBorder,
              borderRadius: 36,
              padding: "48px 42px",
              boxShadow: isDeployDiMana
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(245, 158, 11, 0.35)"
                : NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(245, 158, 11, 0.14)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                marginBottom: 28,
              }}
            >
              <FaQuestionCircle size={20} color={NETLIFY_COLORS.questionGold} />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NETLIFY_COLORS.questionAmber,
                  boxShadow: `0 0 8px ${NETLIFY_COLORS.questionAmber}`,
                }}
              />
              <FaServer size={18} color="#94a3b8" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                marginBottom: 36,
              }}
            >
              {isTapiBingung && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 44,
                    fontWeight: 600,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    opacity: Math.min(1, bingungSpring),
                    transform: `translateY(${(1 - Math.min(1, bingungSpring)) * 10}px)`,
                  }}
                >
                  Tapi bingung
                </span>
              )}

              {isDeployDiMana && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 28px",
                    borderRadius: 20,
                    background:
                      "linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.2) 100%)",
                    border: "1.5px solid rgba(251, 191, 36, 0.85)",
                    boxShadow:
                      "0 0 35px rgba(245, 158, 11, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                    transform: `scale(${deployScale})`,
                    opacity: Math.min(1, deploySpring),
                  }}
                >
                  <FaCloudUploadAlt size={28} color={NETLIFY_COLORS.questionGold} />
                  <span
                    style={{
                      color: NETLIFY_COLORS.questionGold,
                      fontSize: 44,
                      fontWeight: 900,
                      fontFamily:
                        FONT_PRIMARY,
                      letterSpacing: "-0.02em",
                      textShadow:
                        "0 0 25px rgba(245, 158, 11, 0.95), 0 0 50px rgba(245, 158, 11, 0.45)",
                    }}
                  >
                    mau deploy di mana?
                  </span>
                </div>
              )}
            </div>

            {isDeployDiMana && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 840,
                  background: "rgba(11, 26, 47, 0.65)",
                  border: "1.5px solid rgba(245, 158, 11, 0.4)",
                  borderRadius: 22,
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  opacity: Math.min(1, deploySpring),
                  transform: `scale(${0.96 + Math.min(1, deploySpring) * 0.04})`,
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 14px 35px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 20px",
                    borderRadius: 16,
                    background: "rgba(97, 218, 251, 0.08)",
                    border: "1px solid rgba(97, 218, 251, 0.3)",
                  }}
                >
                  <FaReact
                    size={32}
                    color={NETLIFY_COLORS.reactCyan}
                    style={{ transform: `rotate(${reactSpin}deg)` }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff" }}>
                      React App
                    </div>
                    <div style={{ fontSize: 13, color: "#94a3b8" }}>Ready to Ship</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(245, 158, 11, 0.16)",
                    border: "1.5px solid rgba(245, 158, 11, 0.7)",
                    boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                    transform: `scale(${radarPulse})`,
                  }}
                >
                  <FaQuestionCircle size={26} color={NETLIFY_COLORS.questionGold} />
                </div>

                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  {[0, 1].map((idx) => (
                    <div
                      key={`server-cloud-${idx}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        padding: "14px 18px",
                        borderRadius: 16,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px dashed rgba(245, 158, 11, 0.4)",
                      }}
                    >
                      {idx === 0 ? (
                        <FaCloudUploadAlt size={28} color={NETLIFY_COLORS.questionGold} />
                      ) : (
                        <FaServer size={26} color="#94a3b8" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 3: NETLIFY HERO (F144 - F186)
          Line 3: "Netlify aja!" (Audio F148 - F173)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 144 && frame < 186 && (
        <div
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s3Opacity,
            transform: `translateY(${s3Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.netlifyGlassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: NETLIFY_COLORS.netlifyGlassBorder,
              borderRadius: 40,
              padding: "54px 44px",
              boxShadow: NETLIFY_COLORS.netlifyGlassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Luminous Diamond Halo behind Logo */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0, 199, 183, 0.35) 0%, rgba(50, 230, 226, 0.1) 50%, transparent 70%)",
                filter: "blur(24px)",
                pointerEvents: "none",
                transform: `scale(${radarPulse})`,
              }}
            />

            {/* Netlify Hero Diamond Emblem */}
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, rgba(0, 199, 183, 0.35) 0%, rgba(11, 26, 47, 0.8) 100%)",
                border: "2px solid rgba(50, 230, 226, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 50px rgba(0, 199, 183, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.5)",
                marginBottom: 32,
                transform: `scale(${netlifyHeroScale})`,
                opacity: Math.min(1, netlifyHeroSpring),
              }}
            >
              <SiNetlify size={64} color={NETLIFY_COLORS.netlifyAqua} />
            </div>

            {/* Line 3 Kinetic Title: "Netlify aja!" */}
            {isNetlifyHero && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  transform: `scale(${netlifyHeroScale})`,
                  opacity: Math.min(1, netlifyHeroSpring),
                }}
              >
                <span
                  style={{
                    color: NETLIFY_COLORS.netlifyAqua,
                    fontSize: 76,
                    fontWeight: 900,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.03em",
                    textShadow:
                      "0 0 35px rgba(50, 230, 226, 0.95), 0 0 70px rgba(0, 199, 183, 0.6)",
                  }}
                >
                  Netlify
                </span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 76,
                    fontWeight: 900,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.03em",
                    textShadow: "0 0 35px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  aja!
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 4: FREE & EASY (F186 - F290)
          Line 4: "Gratis untuk memulai dan gampang banget digunakan." (Audio F186 - F274)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 186 && frame < 290 && (
        <div
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s4Opacity,
            transform: `translateY(${s4Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: NETLIFY_COLORS.glassBorder,
              borderRadius: 36,
              padding: "48px 42px",
              boxShadow: NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            {/* Netlify Pill Header */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(0, 199, 183, 0.14)",
                border: "1px solid rgba(0, 199, 183, 0.4)",
              }}
            >
              <SiNetlify size={20} color={NETLIFY_COLORS.netlifyTeal} />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NETLIFY_COLORS.freeMint,
                  boxShadow: `0 0 8px ${NETLIFY_COLORS.freeMint}`,
                }}
              />
              <FaBolt size={16} color={NETLIFY_COLORS.netlifyAqua} />
            </div>

            {/* Part 1: "Gratis untuk memulai" */}
            {isGratisMemulai && (
              <div
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(11, 26, 47, 0.6) 100%)",
                  border: "1.5px solid rgba(52, 211, 153, 0.7)",
                  borderRadius: 24,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  boxShadow: "0 0 35px rgba(16, 185, 129, 0.35)",
                  opacity: Math.min(1, gratisMemulaiSpring),
                  transform: `scale(${0.96 + Math.min(1, gratisMemulaiSpring) * 0.04})`,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.25)",
                    border: "1px solid #34d399",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaCheckCircle size={26} color="#34d399" />
                </div>
                <span
                  style={{
                    color: "#34d399",
                    fontSize: 42,
                    fontWeight: 900,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 25px rgba(52, 211, 153, 0.8)",
                  }}
                >
                  Gratis untuk memulai
                </span>
              </div>
            )}

            {/* Part 2: "dan gampang banget digunakan." */}
            {isGampangBanget && (
              <div
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, rgba(0, 199, 183, 0.22) 0%, rgba(11, 26, 47, 0.6) 100%)",
                  border: "1.5px solid rgba(50, 230, 226, 0.7)",
                  borderRadius: 24,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  boxShadow: "0 0 35px rgba(0, 199, 183, 0.35)",
                  opacity: Math.min(1, gampangSpring),
                  transform: `scale(${0.96 + Math.min(1, gampangSpring) * 0.04})`,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(0, 199, 183, 0.25)",
                    border: "1px solid #32e6e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaBolt size={26} color="#32e6e2" />
                </div>
                <span
                  style={{
                    color: "#32e6e2",
                    fontSize: 42,
                    fontWeight: 900,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 25px rgba(50, 230, 226, 0.8)",
                  }}
                >
                  dan gampang banget digunakan.
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 5: DRAG & DROP (F290 - F440)
          Line 5: "Cukup build project React kalian, lalu drag and drop folder hasil build ke Netlify." (Audio F291 - F432)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 290 && frame < 440 && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s5Opacity,
            transform: `translateY(${s5Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isHasilBuildKeNetlify
                ? "1.5px solid rgba(0, 199, 183, 0.7)"
                : NETLIFY_COLORS.glassBorder,
              borderRadius: 36,
              padding: "44px 38px",
              boxShadow: isHasilBuildKeNetlify
                ? "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 45px rgba(0, 199, 183, 0.35)"
                : NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              textAlign: "center",
            }}
          >
            {/* Step 1 Speech: "Cukup build project React kalian," */}
            {isCukupBuild && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: Math.min(1, cukupBuildSpring),
                  transform: `translateY(${(1 - Math.min(1, cukupBuildSpring)) * 10}px)`,
                }}
              >
                <FaReact
                  size={28}
                  color={NETLIFY_COLORS.reactCyan}
                  style={{ transform: `rotate(${reactSpin}deg)` }}
                />
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 40,
                    fontWeight: 700,
                    fontFamily:
                      FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Cukup build project React kalian,
                </span>
              </div>
            )}

            {/* Terminal Preview Card */}
            {isCukupBuild && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 780,
                  background: "rgba(4, 9, 20, 0.85)",
                  border: "1px solid rgba(97, 218, 251, 0.3)",
                  borderRadius: 18,
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaTerminal size={18} color={NETLIFY_COLORS.reactCyan} />
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 24,
                      color: NETLIFY_COLORS.reactCyan,
                      fontWeight: 600,
                    }}
                  >
                    npm run build
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 12px",
                    borderRadius: 8,
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.5)",
                  }}
                >
                  <FaCheckCircle size={14} color="#34d399" />
                  <span style={{ fontSize: 14, color: "#34d399", fontWeight: 700 }}>
                    build/ created
                  </span>
                </div>
              </div>
            )}

            {/* Step 2 Speech: "lalu drag and drop" & "folder hasil build ke Netlify." */}
            {(isDragDrop || isHasilBuildKeNetlify) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                {isDragDrop && (
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 38,
                      fontWeight: 700,
                      fontFamily: FONT_PRIMARY,
                      letterSpacing: "-0.01em",
                      opacity: Math.min(1, dragDropSpring),
                    }}
                  >
                    lalu drag and drop
                  </span>
                )}
                {isHasilBuildKeNetlify && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 22px",
                      borderRadius: 18,
                      background: "rgba(0, 199, 183, 0.25)",
                      border: "1.5px solid rgba(50, 230, 226, 0.8)",
                      boxShadow: "0 0 25px rgba(0, 199, 183, 0.4)",
                      opacity: Math.min(1, hasilBuildSpring),
                    }}
                  >
                    <SiNetlify size={22} color={NETLIFY_COLORS.netlifyAqua} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.netlifyAqua,
                        fontSize: 38,
                        fontWeight: 900,
                        fontFamily: FONT_PRIMARY,
                        letterSpacing: "-0.02em",
                        textShadow: "0 0 20px rgba(50, 230, 226, 0.8)",
                      }}
                    >
                      folder hasil build ke Netlify.
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Animated Interactive Drag & Drop + Upload Center (F350 - F440) */}
            {isDragDrop && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 840,
                  minHeight: 230,
                  borderRadius: 26,
                  border: isDropped
                    ? "2px solid rgba(0, 199, 183, 0.9)"
                    : "2px dashed rgba(255, 255, 255, 0.3)",
                  background: isDropped
                    ? "linear-gradient(135deg, rgba(0, 199, 183, 0.16) 0%, rgba(11, 26, 47, 0.8) 100%)"
                    : "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: isDropped
                    ? "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 45px rgba(0, 199, 183, 0.4)"
                    : "0 10px 30px rgba(0, 0, 0, 0.3)",
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* ── STAGE 1: Dragging in flight (F350 - F386) ── */}
                {!isUploading && (
                  <div
                    style={{
                      width: "100%",
                      height: 180,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    {/* Left Source Zone: my-react-app/ */}
                    <div
                      style={{
                        width: 220,
                        padding: "14px 16px",
                        borderRadius: 18,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          paddingBottom: 6,
                        }}
                      >
                        <FaReact size={15} color={NETLIFY_COLORS.reactCyan} />
                        <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 700 }}>
                          my-react-app
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "4px 8px",
                          borderRadius: 8,
                          background: "rgba(245, 158, 11, 0.14)",
                          border: "1px solid rgba(251, 191, 36, 0.4)",
                        }}
                      >
                        <FaFolderOpen size={16} color={NETLIFY_COLORS.questionGold} />
                        <span
                          style={{
                            fontSize: 14,
                            color: NETLIFY_COLORS.questionGold,
                            fontWeight: 700,
                          }}
                        >
                          build/
                        </span>
                      </div>
                    </div>

                    {/* Center Dotted Guide Arc */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="240" height="50" style={{ overflow: "visible" }}>
                        <path
                          d="M 10 35 Q 120 -15 230 35"
                          fill="none"
                          stroke="rgba(0, 199, 183, 0.45)"
                          strokeWidth="2.5"
                          strokeDasharray="6,6"
                        />
                      </svg>
                    </div>

                    {/* Right Target Zone: Netlify Drop Receiver */}
                    <div
                      style={{
                        width: 240,
                        padding: "16px 18px",
                        borderRadius: 20,
                        background: isDropped
                          ? "rgba(0, 199, 183, 0.2)"
                          : "rgba(0, 199, 183, 0.08)",
                        border: isDropped
                          ? "2px solid #32e6e2"
                          : "1.5px dashed rgba(50, 230, 226, 0.6)",
                        boxShadow: isDropped
                          ? "0 0 30px rgba(0, 199, 183, 0.5)"
                          : "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        textAlign: "center",
                      }}
                    >
                      <SiNetlify size={36} color={NETLIFY_COLORS.netlifyAqua} />
                      <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>
                        {isDropped ? "build/ Received!" : "Drop folder here"}
                      </span>
                    </div>

                    {/* The In-Flight build/ folder */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(calc(-50% + ${folderDragX}px), calc(-50% + ${folderDragY}px)) rotate(${folderDragRotate}deg) scale(${folderDragScale})`,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 22px",
                        borderRadius: 18,
                        background: "rgba(245, 158, 11, 0.35)",
                        border: "1.5px solid rgba(251, 191, 36, 0.95)",
                        boxShadow:
                          "0 18px 40px rgba(0, 0, 0, 0.6), 0 0 28px rgba(245, 158, 11, 0.6)",
                        zIndex: 20,
                      }}
                    >
                      <FaFolderOpen size={28} color={NETLIFY_COLORS.questionGold} />
                      <span
                        style={{
                          color: NETLIFY_COLORS.questionGold,
                          fontWeight: 900,
                          fontSize: 22,
                        }}
                      >
                        build/
                      </span>
                    </div>

                    {/* Pointer Cursor tracking folder */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(calc(-50% + ${folderDragX + 28}px), calc(-50% + ${folderDragY + 24}px))`,
                        opacity: cursorOpacity,
                        pointerEvents: "none",
                        zIndex: 25,
                      }}
                    >
                      <FaMousePointer
                        size={22}
                        color="#32e6e2"
                        style={{ filter: "drop-shadow(0 0 8px #00c7b7)" }}
                      />
                    </div>

                    {/* Shockwave expanding ring upon impact at F382 */}
                    {isDropped && shockwaveProgress < 1 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: `translate(calc(-50% + 175px), -50%) scale(${shockwaveScale})`,
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          border: "2px solid rgba(50, 230, 226, 0.9)",
                          boxShadow: "0 0 35px rgba(0, 199, 183, 0.8)",
                          opacity: shockwaveOpacity,
                          pointerEvents: "none",
                          zIndex: 15,
                        }}
                      />
                    )}
                  </div>
                )}

                {/* ── STAGE 2: Live Netlify Upload Console (F386 - F440) ── */}
                {isUploading && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {/* Console Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <SiNetlify size={24} color={NETLIFY_COLORS.netlifyAqua} />
                        <span style={{ fontSize: 18, color: "#ffffff", fontWeight: 800 }}>
                          {isUploadComplete
                            ? "Deploy Selesai • Netlify Edge CDN"
                            : "Uploading build/ assets ke Netlify..."}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "4px 14px",
                          borderRadius: 9999,
                          background: isUploadComplete
                            ? "rgba(16, 185, 129, 0.25)"
                            : "rgba(0, 199, 183, 0.2)",
                          border: isUploadComplete
                            ? "1px solid rgba(52, 211, 153, 0.7)"
                            : "1px solid rgba(50, 230, 226, 0.6)",
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: isUploadComplete ? "#34d399" : "#32e6e2",
                            boxShadow: `0 0 8px ${isUploadComplete ? "#34d399" : "#32e6e2"}`,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 800,
                            color: isUploadComplete ? "#34d399" : "#32e6e2",
                            fontFamily: "monospace",
                          }}
                        >
                          {isUploadComplete ? "100% READY" : `${Math.floor(uploadPct)}%`}
                        </span>
                      </div>
                    </div>

                    {/* Glowing Progress Bar */}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: 16,
                          borderRadius: 9999,
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${uploadPct}%`,
                            background:
                              "linear-gradient(90deg, #00c7b7 0%, #32e6e2 65%, #38bdf8 100%)",
                            borderRadius: 9999,
                            boxShadow: "0 0 20px rgba(50, 230, 226, 0.85)",
                            transition: "width 0.1s linear",
                          }}
                        />
                      </div>

                      {/* Real-time stats text */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 13,
                          color: "#94a3b8",
                          fontFamily: "monospace",
                          fontWeight: 600,
                        }}
                      >
                        <span>
                          {Math.min(24, Math.floor((uploadPct / 100) * 24))} / 24 files uploaded
                        </span>
                        <span>{((uploadPct / 100) * 1.84).toFixed(2)} MB / 1.84 MB</span>
                      </div>
                    </div>

                    {/* Live Asset Streaming Matrix */}
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Asset 1 */}
                      <div
                        style={{
                          flex: 1,
                          padding: "10px 14px",
                          borderRadius: 14,
                          background:
                            frame >= 396
                              ? "rgba(16, 185, 129, 0.18)"
                              : "rgba(255, 255, 255, 0.04)",
                          border:
                            frame >= 396
                              ? "1px solid rgba(52, 211, 153, 0.7)"
                              : "1px solid rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <FaFileCode
                            size={14}
                            color={frame >= 396 ? "#34d399" : "#94a3b8"}
                          />
                          <span
                            style={{
                              fontSize: 13,
                              color: "#ffffff",
                              fontWeight: 700,
                              fontFamily: "monospace",
                            }}
                          >
                            index.html
                          </span>
                        </div>
                        {frame >= 396 ? (
                          <FaCheck size={12} color="#34d399" />
                        ) : (
                          <span style={{ fontSize: 11, color: "#94a3b8" }}>syncing</span>
                        )}
                      </div>

                      {/* Asset 2 */}
                      <div
                        style={{
                          flex: 1.2,
                          padding: "10px 14px",
                          borderRadius: 14,
                          background:
                            frame >= 410
                              ? "rgba(16, 185, 129, 0.18)"
                              : "rgba(255, 255, 255, 0.04)",
                          border:
                            frame >= 410
                              ? "1px solid rgba(52, 211, 153, 0.7)"
                              : "1px solid rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <FaFileCode
                            size={14}
                            color={frame >= 410 ? "#34d399" : "#94a3b8"}
                          />
                          <span
                            style={{
                              fontSize: 13,
                              color: "#ffffff",
                              fontWeight: 700,
                              fontFamily: "monospace",
                            }}
                          >
                            bundle.js
                          </span>
                        </div>
                        {frame >= 410 ? (
                          <FaCheck size={12} color="#34d399" />
                        ) : (
                          <span style={{ fontSize: 11, color: "#94a3b8" }}>
                            {frame >= 396 ? "uploading" : "queued"}
                          </span>
                        )}
                      </div>

                      {/* Asset 3 */}
                      <div
                        style={{
                          flex: 1,
                          padding: "10px 14px",
                          borderRadius: 14,
                          background:
                            frame >= 422
                              ? "rgba(16, 185, 129, 0.18)"
                              : "rgba(255, 255, 255, 0.04)",
                          border:
                            frame >= 422
                              ? "1px solid rgba(52, 211, 153, 0.7)"
                              : "1px solid rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <FaFileCode
                            size={14}
                            color={frame >= 422 ? "#34d399" : "#94a3b8"}
                          />
                          <span
                            style={{
                              fontSize: 13,
                              color: "#ffffff",
                              fontWeight: 700,
                              fontFamily: "monospace",
                            }}
                          >
                            main.css
                          </span>
                        </div>
                        {frame >= 422 ? (
                          <FaCheck size={12} color="#34d399" />
                        ) : (
                          <span style={{ fontSize: 11, color: "#94a3b8" }}>
                            {frame >= 410 ? "uploading" : "queued"}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 100% Deployed Banner */}
                    {isUploadComplete && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                          padding: "10px 20px",
                          borderRadius: 16,
                          background: "rgba(16, 185, 129, 0.25)",
                          border: "1.5px solid rgba(52, 211, 153, 0.8)",
                          boxShadow: "0 0 25px rgba(16, 185, 129, 0.45)",
                          transform: `scale(${0.96 + Math.min(1, uploadCompleteSpring) * 0.04})`,
                        }}
                      >
                        <FaCheckCircle size={18} color="#34d399" />
                        <span style={{ color: "#34d399", fontSize: 15, fontWeight: 800 }}>
                          100% Uploaded • Deployed to Netlify Global Edge CDN!
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 6: INSTANT ONLINE (F440 - F515)
          Line 6: "Website kalian langsung online!" (Audio F444 - F496)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 440 && frame < 515 && (
        <div
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s6Opacity,
            transform: `translateY(${s6Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(11, 26, 47, 0.6) 50%, rgba(4, 9, 20, 0.8) 100%)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "2px solid rgba(52, 211, 153, 0.8)",
              borderRadius: 38,
              padding: "48px 42px",
              boxShadow:
                "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 0 50px rgba(16, 185, 129, 0.45)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 24,
            }}
          >
            {/* Live Beacon Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(16, 185, 129, 0.25)",
                border: "1px solid rgba(52, 211, 153, 0.6)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 12px #34d399",
                  transform: `scale(${radarPulse})`,
                }}
              />
              <span
                style={{
                  color: "#34d399",
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Production Live
              </span>
            </div>

            {/* Kinetic Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isWebsiteKalian && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 44,
                    fontWeight: 700,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                    opacity: Math.min(1, websiteKalianSpring),
                  }}
                >
                  Website kalian
                </span>
              )}

              {isLangsungOnline && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "10px 32px",
                    borderRadius: 22,
                    background:
                      "linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.3) 100%)",
                    border: "2px solid rgba(52, 211, 153, 0.9)",
                    boxShadow:
                      "0 0 45px rgba(16, 185, 129, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                    transform: `scale(${onlineScale})`,
                    opacity: Math.min(1, langsungOnlineSpring),
                  }}
                >
                  <FaGlobe size={32} color="#34d399" />
                  <span
                    style={{
                      color: "#34d399",
                      fontSize: 50,
                      fontWeight: 900,
                      fontFamily: FONT_PRIMARY,
                      letterSpacing: "-0.02em",
                      textShadow:
                        "0 0 30px rgba(52, 211, 153, 0.95), 0 0 60px rgba(16, 185, 129, 0.5)",
                    }}
                  >
                    langsung online!
                  </span>
                </div>
              )}
            </div>

            {/* Live Browser Mockup Card with full React app preview */}
            {isLangsungOnline && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 840,
                  background: "rgba(11, 26, 47, 0.8)",
                  border: "1.5px solid rgba(52, 211, 153, 0.65)",
                  borderRadius: 24,
                  padding: "18px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  boxShadow:
                    "0 18px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(16, 185, 129, 0.3)",
                }}
              >
                {/* Browser Window Chrome */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 14,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Traffic Light Dots */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#f43f5e",
                        boxShadow: "0 0 8px rgba(244, 63, 94, 0.5)",
                      }}
                    />
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#fbbf24",
                        boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)",
                      }}
                    />
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#10b981",
                        boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
                      }}
                    />
                  </div>

                  {/* URL Bar */}
                  <div
                    style={{
                      flex: 1,
                      maxWidth: 480,
                      margin: "0 16px",
                      height: 32,
                      borderRadius: 16,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(52, 211, 153, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "0 14px",
                    }}
                  >
                    <FaLock size={13} color="#34d399" />
                    <span
                      style={{
                        fontSize: 16,
                        color: "#ffffff",
                        fontFamily: FONT_MONO,
                        fontWeight: 600,
                      }}
                    >
                      https://react-kalian.netlify.app
                    </span>
                  </div>

                  <FaCheckCircle size={18} color="#34d399" />
                </div>

                {/* Inner Website Page Mockup */}
                <div
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    background: "rgba(4, 9, 20, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {/* Website Mini Nav */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <FaReact
                        size={22}
                        color={NETLIFY_COLORS.reactCyan}
                        style={{ transform: `rotate(${reactSpin}deg)` }}
                      />
                      <span style={{ fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                        React Portfolio
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div
                        style={{
                          padding: "4px 12px",
                          borderRadius: 8,
                          background: "rgba(255, 255, 255, 0.06)",
                          fontSize: 12,
                          color: "#cbd5e1",
                        }}
                      >
                        Home
                      </div>
                      <div
                        style={{
                          padding: "4px 12px",
                          borderRadius: 8,
                          background: "rgba(0, 199, 183, 0.2)",
                          border: "1px solid rgba(50, 230, 226, 0.5)",
                          fontSize: 12,
                          color: "#32e6e2",
                          fontWeight: 700,
                        }}
                      >
                        Live
                      </div>
                    </div>
                  </div>

                  {/* Website Hero Card */}
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 14,
                      background:
                        "linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(0, 199, 183, 0.05) 100%)",
                      border: "1px solid rgba(97, 218, 251, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#ffffff",
                          marginBottom: 4,
                        }}
                      >
                        Welcome to React on Netlify
                      </div>
                      <div style={{ fontSize: 13, color: "#94a3b8" }}>
                        Fast, Serverless & Global Edge CDN
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px 16px",
                        borderRadius: 10,
                        background:
                          "linear-gradient(135deg, #00c7b7 0%, #32e6e2 100%)",
                        color: "#040914",
                        fontWeight: 900,
                        fontSize: 13,
                        boxShadow: "0 0 15px rgba(0, 199, 183, 0.5)",
                      }}
                    >
                      Get Started
                    </div>
                  </div>

                  {/* Latency & SSL Status Pill */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: 12,
                      color: "#94a3b8",
                      fontFamily: "monospace",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaBolt size={12} color="#34d399" />
                      <span style={{ color: "#34d399", fontWeight: 700 }}>
                        28ms Global Edge CDN
                      </span>
                    </div>
                    <span>SSL 256-bit Encrypted</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 7: MORE PRACTICAL (F515 - F570)
          Line 7: "Atau mau lebih praktis?" (Audio F516 - F557)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 515 && frame < 570 && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s7Opacity,
            transform: `translateY(${s7Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background:
                "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(11, 26, 47, 0.6) 50%, rgba(4, 9, 20, 0.8) 100%)",
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "1.5px solid rgba(168, 85, 247, 0.55)",
              borderRadius: 38,
              padding: "54px 44px",
              boxShadow:
                "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 45px rgba(168, 85, 247, 0.35)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 28,
            }}
          >
            {/* Question Gear Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(168, 85, 247, 0.2)",
                border: "1px solid rgba(168, 85, 247, 0.5)",
              }}
            >
              <FaCogs size={20} color={NETLIFY_COLORS.githubPurple} />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: NETLIFY_COLORS.netlifyAqua,
                  boxShadow: `0 0 8px ${NETLIFY_COLORS.netlifyAqua}`,
                }}
              />
              <SiGithub size={18} color="#ffffff" />
            </div>

            {/* Line 7 Title: "Atau mau lebih praktis?" */}
            {isLebihPraktis && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "10px 32px",
                  borderRadius: 22,
                  background: "rgba(168, 85, 247, 0.25)",
                  border: "1.5px solid rgba(168, 85, 247, 0.8)",
                  boxShadow: "0 0 35px rgba(168, 85, 247, 0.4)",
                  opacity: Math.min(1, lebihPraktisSpring),
                  transform: `scale(${0.95 + Math.min(1, lebihPraktisSpring) * 0.05})`,
                }}
              >
                <FaBolt size={30} color={NETLIFY_COLORS.githubPurple} />
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 48,
                    fontWeight: 900,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
                  }}
                >
                  Atau mau lebih praktis?
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 8: GITHUB ACTIONS CI/CD (F570 - F755)
          Line 8: "Bisa juga integrasikan project kalian dengan GitHub Actions untuk otomatisasi deployment menggunakan CI/CD." (Audio F570 - F741)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 570 && frame < 755 && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s8Opacity,
            transform: `translateY(${s8Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isCiCd
                ? "2px solid rgba(168, 85, 247, 0.75)"
                : NETLIFY_COLORS.glassBorder,
              borderRadius: 38,
              padding: "44px 38px",
              boxShadow: isCiCd
                ? "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)"
                : NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 22,
            }}
          >
            {/* Header Kinetic Typography */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {isIntegrasikan && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 38,
                    fontWeight: 700,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                    opacity: Math.min(1, integrasikanSpring),
                  }}
                >
                  Bisa juga integrasikan project kalian
                </span>
              )}

              {isGithubActions && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 24px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)",
                    border: "1.5px solid rgba(168, 85, 247, 0.8)",
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                    opacity: Math.min(1, githubSpring),
                  }}
                >
                  <SiGithubactions size={26} color={NETLIFY_COLORS.githubPurple} />
                  <span
                    style={{
                      color: NETLIFY_COLORS.githubPurple,
                      fontSize: 40,
                      fontWeight: 900,
                      fontFamily: FONT_PRIMARY,
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 25px rgba(168, 85, 247, 0.8)",
                    }}
                  >
                    dengan GitHub Actions
                  </span>
                </div>
              )}

              {(isOtomatisasi || isCiCd) && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  {isOtomatisasi && (
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 34,
                        fontWeight: 700,
                        fontFamily: FONT_PRIMARY,
                        letterSpacing: "-0.01em",
                        opacity: Math.min(1, otomatisasiSpring),
                      }}
                    >
                      untuk otomatisasi deployment
                    </span>
                  )}
                  {isCiCd && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 20px",
                        borderRadius: 14,
                        background: "rgba(0, 199, 183, 0.25)",
                        border: "1.5px solid rgba(50, 230, 226, 0.85)",
                        boxShadow: "0 0 25px rgba(0, 199, 183, 0.5)",
                        transform: `scale(${cicdScale})`,
                        opacity: Math.min(1, cicdSpring),
                      }}
                    >
                      <FaBolt size={18} color={NETLIFY_COLORS.netlifyAqua} />
                      <span
                        style={{
                          color: NETLIFY_COLORS.netlifyAqua,
                          fontSize: 36,
                          fontWeight: 900,
                          fontFamily: FONT_PRIMARY,
                          letterSpacing: "-0.02em",
                          textShadow: "0 0 20px rgba(50, 230, 226, 0.8)",
                        }}
                      >
                        menggunakan CI/CD.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Pipeline Visual Diagram (Animated CI/CD from F638 - F747) */}
            {isGithubActions && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 860,
                  background: "rgba(11, 26, 47, 0.85)",
                  border: isCiCd
                    ? "1.5px solid rgba(168, 85, 247, 0.6)"
                    : "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 28,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  position: "relative",
                  boxShadow: isCiCd
                    ? "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(168, 85, 247, 0.3)"
                    : "0 14px 40px rgba(0, 0, 0, 0.4)",
                  overflow: "hidden",
                }}
              >
                {/* ── TOP SECTION: 3 Connected Pipeline Nodes with Moving Laser Beams ── */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    width: "100%",
                    padding: "6px 0",
                  }}
                >
                  {/* ── Node 1: GitHub Repository ── */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: 20,
                        background:
                          frame >= 638
                            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(11, 26, 47, 0.8) 100%)"
                            : "rgba(255, 255, 255, 0.06)",
                        border:
                          frame >= 638
                            ? "1.5px solid rgba(255, 255, 255, 0.6)"
                            : "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow:
                          frame >= 638
                            ? "0 0 25px rgba(255, 255, 255, 0.35)"
                            : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <SiGithub size={36} color="#ffffff" />
                      {/* Commit Push Signal Indicator */}
                      {frame >= 638 && (
                        <div
                          style={{
                            position: "absolute",
                            top: -4,
                            right: -4,
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: "#a855f7",
                            border: "2px solid #040914",
                            boxShadow: "0 0 8px #a855f7",
                          }}
                        />
                      )}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <span
                        style={{
                          fontSize: 14,
                          color: "#ffffff",
                          fontWeight: 700,
                          display: "block",
                        }}
                      >
                        GitHub
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: frame >= 638 ? "#c084fc" : "#94a3b8",
                          fontFamily: "monospace",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <FaCodeBranch
                          size={10}
                          color={frame >= 638 ? "#c084fc" : "#94a3b8"}
                        />
                        {frame >= 638 ? "push main" : "repository"}
                      </span>
                    </div>
                  </div>

                  {/* ── Highway 1: Laser Track & Pulse (GitHub ➔ Actions) ── */}
                  <div
                    style={{
                      flex: 1,
                      height: 4,
                      margin: "0 12px",
                      background: "rgba(255, 255, 255, 0.12)",
                      borderRadius: 2,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Glowing Progress Laser Fill */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${cicdBeam1 * 100}%`,
                        background:
                          "linear-gradient(90deg, #ffffff, #a855f7, #c084fc)",
                        boxShadow: "0 0 14px rgba(168, 85, 247, 0.9)",
                        borderRadius: 2,
                      }}
                    />

                    {/* Animated Moving Laser Photon */}
                    {frame >= 638 && frame <= 668 && (
                      <div
                        style={{
                          position: "absolute",
                          left: `calc(${cicdBeam1 * 100}% - 10px)`,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#ffffff",
                          boxShadow:
                            "0 0 16px #ffffff, 0 0 24px rgba(168, 85, 247, 0.9)",
                          zIndex: 5,
                        }}
                      />
                    )}

                    <FaArrowRight
                      size={14}
                      color={frame >= 666 ? "#a855f7" : "rgba(255, 255, 255, 0.3)"}
                      style={{
                        position: "absolute",
                        right: -6,
                        zIndex: 6,
                      }}
                    />
                  </div>

                  {/* ── Node 2: GitHub Actions Workflow ── */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      zIndex: 10,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 22,
                        background: isBeam1Arrived
                          ? "linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(11, 26, 47, 0.85) 100%)"
                          : "rgba(168, 85, 247, 0.12)",
                        border: isBeam1Arrived
                          ? "2px solid rgba(168, 85, 247, 0.9)"
                          : "1.5px solid rgba(168, 85, 247, 0.4)",
                        boxShadow: isBeam1Arrived
                          ? "0 0 35px rgba(168, 85, 247, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
                          : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <SiGithubactions
                        size={38}
                        color={NETLIFY_COLORS.githubPurple}
                      />

                      {/* Rotating Automation Gear Badge */}
                      {isBeam1Arrived && !isStep3Done && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: -6,
                            right: -6,
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "#a855f7",
                            border: "2px solid #040914",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 8px #a855f7",
                            transform: `rotate(${actionsGearSpin}deg)`,
                          }}
                        >
                          <FaCogs size={12} color="#ffffff" />
                        </div>
                      )}

                      {/* Success Checkmark Badge when workflow finishes */}
                      {isStep3Done && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: -6,
                            right: -6,
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "#10b981",
                            border: "2px solid #040914",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px #10b981",
                          }}
                        >
                          <FaCheck size={11} color="#ffffff" />
                        </div>
                      )}
                    </div>

                    {/* Expanding shockwave upon beam 1 arrival */}
                    {isBeam1Arrived && shockwaveActionsProgress < 1 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: `translateX(-50%) scale(${shockwaveActionsScale})`,
                          width: 72,
                          height: 72,
                          borderRadius: 22,
                          border: "2px solid rgba(168, 85, 247, 0.9)",
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
                          opacity: shockwaveActionsOpacity,
                          pointerEvents: "none",
                          zIndex: 5,
                        }}
                      />
                    )}

                    <div style={{ textAlign: "center" }}>
                      <span
                        style={{
                          fontSize: 14,
                          color: NETLIFY_COLORS.githubPurple,
                          fontWeight: 800,
                          display: "block",
                        }}
                      >
                        GitHub Actions
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: isStep3Done ? "#34d399" : "#c084fc",
                          fontFamily: "monospace",
                          fontWeight: 700,
                        }}
                      >
                        {isStep3Done
                          ? "Checks Passed"
                          : isBeam1Arrived
                            ? "Auto Build & Test"
                            : "CI Pipeline"}
                      </span>
                    </div>
                  </div>

                  {/* ── Highway 2: Laser Track & Pulse (Actions ➔ Netlify) ── */}
                  <div
                    style={{
                      flex: 1,
                      height: 4,
                      margin: "0 12px",
                      background: "rgba(255, 255, 255, 0.12)",
                      borderRadius: 2,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Glowing Progress Laser Fill */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${cicdBeam2 * 100}%`,
                        background:
                          "linear-gradient(90deg, #a855f7, #00c7b7, #32e6e2)",
                        boxShadow: "0 0 14px rgba(50, 230, 226, 0.9)",
                        borderRadius: 2,
                      }}
                    />

                    {/* Animated Moving Laser Photon */}
                    {frame >= 704 && frame <= 726 && (
                      <div
                        style={{
                          position: "absolute",
                          left: `calc(${cicdBeam2 * 100}% - 10px)`,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#32e6e2",
                          boxShadow:
                            "0 0 16px #32e6e2, 0 0 24px rgba(0, 199, 183, 0.9)",
                          zIndex: 5,
                        }}
                      />
                    )}

                    <FaArrowRight
                      size={14}
                      color={isBeam2Arrived ? "#32e6e2" : "rgba(255, 255, 255, 0.3)"}
                      style={{
                        position: "absolute",
                        right: -6,
                        zIndex: 6,
                      }}
                    />
                  </div>

                  {/* ── Node 3: Netlify Production ── */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      zIndex: 10,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: 20,
                        background: isBeam2Arrived
                          ? "linear-gradient(135deg, rgba(0, 199, 183, 0.35) 0%, rgba(11, 26, 47, 0.85) 100%)"
                          : "rgba(0, 199, 183, 0.1)",
                        border: isBeam2Arrived
                          ? "2px solid #32e6e2"
                          : "1.5px solid rgba(0, 199, 183, 0.4)",
                        boxShadow: isBeam2Arrived
                          ? "0 0 35px rgba(0, 199, 183, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
                          : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <SiNetlify size={36} color={NETLIFY_COLORS.netlifyAqua} />

                      {/* Live Deploy Pulse Beacon */}
                      {isBeam2Arrived && (
                        <div
                          style={{
                            position: "absolute",
                            top: -4,
                            right: -4,
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: "#34d399",
                            border: "2px solid #040914",
                            boxShadow: "0 0 10px #34d399",
                          }}
                        />
                      )}
                    </div>

                    {/* Expanding shockwave upon beam 2 arrival */}
                    {isBeam2Arrived && shockwaveNetlifyProgress < 1 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: `translateX(-50%) scale(${shockwaveNetlifyScale})`,
                          width: 68,
                          height: 68,
                          borderRadius: 20,
                          border: "2px solid rgba(50, 230, 226, 0.9)",
                          boxShadow: "0 0 35px rgba(0, 199, 183, 0.8)",
                          opacity: shockwaveNetlifyOpacity,
                          pointerEvents: "none",
                          zIndex: 5,
                        }}
                      />
                    )}

                    <div style={{ textAlign: "center" }}>
                      <span
                        style={{
                          fontSize: 14,
                          color: NETLIFY_COLORS.netlifyAqua,
                          fontWeight: 800,
                          display: "block",
                        }}
                      >
                        Netlify
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: isBeam2Arrived ? "#34d399" : "#94a3b8",
                          fontFamily: "monospace",
                          fontWeight: 700,
                        }}
                      >
                        {isBeam2Arrived ? "Live Deployed" : "Continuous CD"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── BOTTOM SECTION: Live CI/CD Job Runner Terminal Drawer (F666 - F747) ── */}
                {isBeam1Arrived && (
                  <div
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      background: "rgba(4, 9, 20, 0.85)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      padding: "16px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {/* Drawer Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <FaTerminal size={14} color={NETLIFY_COLORS.githubPurple} />
                        <span
                          style={{
                            fontSize: 13,
                            color: "#ffffff",
                            fontWeight: 700,
                            fontFamily: "monospace",
                          }}
                        >
                          .github/workflows/deploy.yml
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 12,
                          color: isBeam2Arrived ? "#34d399" : "#c084fc",
                          fontFamily: "monospace",
                          fontWeight: 700,
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: isBeam2Arrived ? "#34d399" : "#a855f7",
                            boxShadow: `0 0 6px ${isBeam2Arrived ? "#34d399" : "#a855f7"}`,
                          }}
                        />
                        <span>
                          {isBeam2Arrived
                            ? "All Jobs Succeeded (4.2s)"
                            : "Running Automated Pipeline..."}
                        </span>
                      </div>
                    </div>

                    {/* 3 Sequential CI/CD Job Steps */}
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Step 1: Install & Lint */}
                      <div
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          borderRadius: 12,
                          background: isStep1Done
                            ? "rgba(16, 185, 129, 0.16)"
                            : "rgba(255, 255, 255, 0.04)",
                          border: isStep1Done
                            ? "1px solid rgba(52, 211, 153, 0.6)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: "#ffffff",
                            fontFamily: "monospace",
                            fontWeight: 600,
                          }}
                        >
                          1. Install Deps
                        </span>
                        {isStep1Done ? (
                          <FaCheck size={11} color="#34d399" />
                        ) : (
                          <FaSyncAlt
                            size={10}
                            color="#a855f7"
                            style={{ transform: `rotate(${actionsGearSpin}deg)` }}
                          />
                        )}
                      </div>

                      {/* Step 2: Build */}
                      <div
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          borderRadius: 12,
                          background: isStep2Done
                            ? "rgba(16, 185, 129, 0.16)"
                            : "rgba(255, 255, 255, 0.04)",
                          border: isStep2Done
                            ? "1px solid rgba(52, 211, 153, 0.6)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: "#ffffff",
                            fontFamily: "monospace",
                            fontWeight: 600,
                          }}
                        >
                          2. Build React
                        </span>
                        {isStep2Done ? (
                          <FaCheck size={11} color="#34d399" />
                        ) : isStep1Done ? (
                          <FaSyncAlt
                            size={10}
                            color="#a855f7"
                            style={{ transform: `rotate(${actionsGearSpin}deg)` }}
                          />
                        ) : (
                          <span style={{ fontSize: 10, color: "#64748b" }}>wait</span>
                        )}
                      </div>

                      {/* Step 3: Deploy */}
                      <div
                        style={{
                          flex: 1.2,
                          padding: "8px 12px",
                          borderRadius: 12,
                          background: isBeam2Arrived
                            ? "rgba(16, 185, 129, 0.22)"
                            : "rgba(255, 255, 255, 0.04)",
                          border: isBeam2Arrived
                            ? "1px solid rgba(52, 211, 153, 0.8)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: isBeam2Arrived ? "#34d399" : "#ffffff",
                            fontFamily: "monospace",
                            fontWeight: 700,
                          }}
                        >
                          3. Netlify Deploy
                        </span>
                        {isBeam2Arrived ? (
                          <FaCheckCircle size={12} color="#34d399" />
                        ) : isStep2Done ? (
                          <FaSyncAlt
                            size={10}
                            color="#32e6e2"
                            style={{ transform: `rotate(${actionsGearSpin}deg)` }}
                          />
                        ) : (
                          <span style={{ fontSize: 10, color: "#64748b" }}>wait</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 9: SUBDOMAIN .NETLIFY.APP (F755 - F985)
          Line 9: "Tapi," (Audio F759 - F782)
          Line 10: "Kalau menggunakan subdomain gratis dari Netlify, alamat website kalian akan berakhiran .netlify.app." (Audio F789 - F973)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 755 && frame < 985 && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s9Opacity,
            transform: `translateY(${s9Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isNetlifyApp
                ? "2px solid rgba(0, 199, 183, 0.75)"
                : "1.5px solid rgba(244, 63, 94, 0.5)",
              borderRadius: 38,
              padding: "44px 38px",
              boxShadow: isNetlifyApp
                ? "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 45px rgba(0, 199, 183, 0.35)"
                : "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(244, 63, 94, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 22,
            }}
          >
            {/* Part 1 Speech: "Tapi," */}
            {isTapiCaution && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 26px",
                  borderRadius: 9999,
                  background: "rgba(244, 63, 94, 0.25)",
                  border: "1.5px solid rgba(244, 63, 94, 0.7)",
                  boxShadow: "0 0 25px rgba(244, 63, 94, 0.4)",
                  opacity: Math.min(1, tapiSpring),
                  transform: `scale(${0.92 + Math.min(1, tapiSpring) * 0.08})`,
                }}
              >
                <span
                  style={{
                    color: "#f43f5e",
                    fontSize: 36,
                    fontWeight: 900,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                    textShadow: "0 0 20px rgba(244, 63, 94, 0.8)",
                  }}
                >
                  Tapi,
                </span>
              </div>
            )}

            {/* Part 2 Speech: "Kalau menggunakan subdomain gratis dari Netlify," */}
            {isSubdomainGratis && (
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 38,
                  fontWeight: 700,
                  fontFamily: FONT_PRIMARY,
                  letterSpacing: "-0.01em",
                  opacity: Math.min(1, subdomainSpring),
                  transform: `translateY(${(1 - Math.min(1, subdomainSpring)) * 10}px)`,
                }}
              >
                Kalau menggunakan subdomain gratis dari Netlify,
              </span>
            )}

            {/* Part 3 Speech: "alamat website kalian akan berakhiran .netlify.app." */}
            {(isAlamatWebsite || isNetlifyApp) && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                {isAlamatWebsite && (
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 36,
                      fontWeight: 600,
                      fontFamily: FONT_PRIMARY,
                      letterSpacing: "-0.01em",
                      opacity: Math.min(1, alamatSpring),
                    }}
                  >
                    alamat website kalian akan berakhiran
                  </span>
                )}

                {isNetlifyApp && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 32px",
                      borderRadius: 22,
                      background: "rgba(0, 199, 183, 0.3)",
                      border: "2px solid rgba(50, 230, 226, 0.9)",
                      boxShadow:
                        "0 0 45px rgba(0, 199, 183, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                      transform: `scale(${netlifyAppScale})`,
                      opacity: Math.min(1, netlifyAppSpring),
                    }}
                  >
                    <SiNetlify size={32} color={NETLIFY_COLORS.netlifyAqua} />
                    <span
                      style={{
                        color: NETLIFY_COLORS.netlifyAqua,
                        fontSize: 52,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        fontFamily: FONT_PRIMARY,
                        textShadow:
                          "0 0 30px rgba(50, 230, 226, 0.95), 0 0 60px rgba(0, 199, 183, 0.5)",
                      }}
                    >
                      .netlify.app.
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* URL Bar Visual Card */}
            {isNetlifyApp && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 820,
                  background: "rgba(11, 26, 47, 0.75)",
                  border: "1.5px solid rgba(0, 199, 183, 0.5)",
                  borderRadius: 22,
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  fontFamily: FONT_MONO,
                  fontSize: 26,
                }}
              >
                <FaGlobe size={20} color="#94a3b8" />
                <span style={{ color: "#94a3b8" }}>https://</span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>project-kalian</span>
                <span
                  style={{
                    color: NETLIFY_COLORS.netlifyAqua,
                    fontWeight: 900,
                    textShadow: "0 0 15px rgba(50, 230, 226, 0.8)",
                  }}
                >
                  .netlify.app
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 10: CUSTOM DOMAIN (F985 - F1115)
          Line 11: "Jadi, kalau mau pakai domain sendiri, kalian bisa menghubungkan custom domain." (Audio F990 - F1104)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 985 && frame < 1115 && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s10Opacity,
            transform: `translateY(${s10Y}px)`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.glassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: isCustomDomain
                ? "2px solid rgba(56, 189, 248, 0.75)"
                : NETLIFY_COLORS.glassBorder,
              borderRadius: 38,
              padding: "44px 38px",
              boxShadow: isCustomDomain
                ? "0 28px 70px rgba(0, 0, 0, 0.6), 0 0 50px rgba(56, 189, 248, 0.4)"
                : NETLIFY_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 22,
            }}
          >
            {/* Header Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 24px",
                borderRadius: 9999,
                background: "rgba(56, 189, 248, 0.16)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
              }}
            >
              <FaGlobe size={18} color="#38bdf8" />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 8px #38bdf8",
                }}
              />
              <FaShieldAlt size={16} color="#34d399" />
            </div>

            {/* Part 1 Speech: "Jadi, kalau mau pakai domain sendiri," */}
            {isDomainSendiri && (
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 38,
                  fontWeight: 700,
                  fontFamily: FONT_PRIMARY,
                  letterSpacing: "-0.01em",
                  opacity: Math.min(1, domainSendiriSpring),
                  transform: `translateY(${(1 - Math.min(1, domainSendiriSpring)) * 10}px)`,
                }}
              >
                Jadi, kalau mau pakai domain sendiri,
              </span>
            )}

            {/* Part 2 Speech: "kalian bisa menghubungkan" */}
            {isBisaMenghubungkan && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  opacity: Math.min(1, menghubungkanSpring),
                }}
              >
                <FaLink size={20} color="#38bdf8" />
                <span
                  style={{
                    color: "#cbd5e1",
                    fontSize: 36,
                    fontWeight: 600,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.01em",
                  }}
                >
                  kalian bisa menghubungkan
                </span>
              </div>
            )}

            {/* Part 3 Speech: "custom domain." */}
            {isCustomDomain && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "10px 32px",
                  borderRadius: 22,
                  background:
                    "linear-gradient(135deg, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.2) 100%)",
                  border: "2px solid rgba(56, 189, 248, 0.9)",
                  boxShadow:
                    "0 0 45px rgba(56, 189, 248, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                  transform: `scale(${customDomainScale})`,
                  opacity: Math.min(1, customDomainSpring),
                }}
              >
                <FaGlobe size={30} color="#38bdf8" />
                <span
                  style={{
                    color: "#38bdf8",
                    fontSize: 50,
                    fontWeight: 900,
                    fontFamily: FONT_PRIMARY,
                    letterSpacing: "-0.02em",
                    textShadow:
                      "0 0 30px rgba(56, 189, 248, 0.95), 0 0 60px rgba(56, 189, 248, 0.5)",
                  }}
                >
                  custom domain.
                </span>
              </div>
            )}

            {/* Custom Domain Transformation Visual Card */}
            {isCustomDomain && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 820,
                  background: "rgba(11, 26, 47, 0.75)",
                  border: "1.5px solid rgba(56, 189, 248, 0.5)",
                  borderRadius: 22,
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  fontFamily: FONT_MONO,
                  fontSize: 28,
                }}
              >
                <FaLock size={20} color="#34d399" />
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: 800,
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  projectkalian.com
                </span>
                <FaCheckCircle size={22} color="#34d399" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 11: GRAND FINALE CLIMAX (F1115 - F1143)
          Line 12: "Gampang, kan?" (Audio F1116 - F1142)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1115 && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s11Opacity,
            transform: `scale(${s11Scale})`,
            padding: "0 48px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: NETLIFY_COLORS.netlifyGlassBg,
              backdropFilter: NETLIFY_COLORS.glassBlur,
              WebkitBackdropFilter: NETLIFY_COLORS.glassBlur,
              border: "2px solid rgba(50, 230, 226, 0.9)",
              borderRadius: 42,
              padding: "54px 44px",
              boxShadow:
                "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 2px 2px rgba(255, 255, 255, 0.5), 0 0 60px rgba(0, 199, 183, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 28,
            }}
          >
            {/* Climax Netlify Diamond Emblem */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 26,
                background:
                  "linear-gradient(135deg, rgba(0, 199, 183, 0.4) 0%, rgba(11, 26, 47, 0.8) 100%)",
                border: "2px solid rgba(50, 230, 226, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 45px rgba(0, 199, 183, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.5)",
                transform: `scale(${radarPulse})`,
              }}
            >
              <SiNetlify size={58} color={NETLIFY_COLORS.netlifyAqua} />
            </div>

            {/* Line 12 Finale Title: "Gampang, kan?" */}
            {isGampangKan && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 42px",
                  borderRadius: 26,
                  background:
                    "linear-gradient(135deg, rgba(0, 199, 183, 0.4) 0%, rgba(50, 230, 226, 0.25) 100%)",
                  border: "2px solid rgba(50, 230, 226, 0.95)",
                  boxShadow:
                    "0 0 50px rgba(0, 199, 183, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                  transform: `scale(${gampangKanScale})`,
                  opacity: Math.min(1, gampangKanSpring),
                }}
              >
                <FaCheckCircle size={40} color={NETLIFY_COLORS.netlifyAqua} />
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 68,
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    fontFamily:
                      FONT_PRIMARY,
                    textShadow:
                      "0 0 35px rgba(50, 230, 226, 0.95), 0 0 70px rgba(0, 199, 183, 0.6)",
                  }}
                >
                  Gampang, kan?
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
