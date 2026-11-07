import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheckCircle,
  FaDatabase,
  FaNetworkWired,
  FaPaperPlane,
  FaPen,
  FaServer,
  FaTrashAlt,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { GET_POST_COLORS, REST_API_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

export const UnifiedRestApiIllustration: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & DATA FLOW ORCHESTRATION (UNIFIED GET & POST)
  //
  // Total Frames: 600 (20.0s @ 30fps)
  //
  // ── ACT 1: GET METHOD (F0 - F265) ──
  // F0  - F25  : Symmetrical Idle State (All 3 tiers online in GET mode)
  // F25 - F32  : Client triggers FETCH() button (Click + Radial Shockwave)
  // F32 - F75  : STAGE 1A: Client sends Request to Backend (GET /api/users ↓)
  // F75 - F88  : Backend receives request, invokes app.get handler
  // F88 - F110 : STAGE 2A: Backend queries Database (SELECT * FROM users ↓)
  // F110 - F135: Database reads 3 user records sequentially
  // F125 - F150: STAGE 2B: Database returns 3 rows back to Backend (3 Data User ↑)
  // F150 - F165: Backend serializes and prepares res.json(data)
  // F165 - F208: STAGE 3A: Backend returns Response to Frontend (200 OK • JSON DATA ↑)
  // F208 - F265: Frontend UI Hydration & User Cards Cascade Animation
  //
  // ── TRANSITION: SWITCH TO POST (F265 - F305) ──
  // F265 - F305: Phase transition - URL, method badge, code & UI morph into POST mode!
  //
  // ── ACT 2: POST METHOD (F305 - F600) ──
  // F305 - F315: Client triggers KIRIM DATA button (Click + Radial Shockwave)
  // F315 - F360: STAGE 1B: Client sends POST payload to Backend (POST /api/users ↓)
  // F360 - F375: Backend receives payload, invokes app.post handler
  // F375 - F395: STAGE 2C: Backend executes db.insert laser down to Database
  // F395 - F420: Database inserts Row 4 (Dewi Sartika) with live spring entrance!
  // F410 - F435: STAGE 2D: Database returns success confirmation (ID: 4) up to Backend
  // F435 - F455: Backend serializes res.status(201).json(newUser)
  // F455 - F498: STAGE 3B: Backend returns 201 Created Response to Frontend (Line B ↑)
  // F498 - F570: Frontend UI Success Celebration (User Card 4 Hydration)
  // F570 - F600: Grand finale hold (All tiers lit)
  // ─────────────────────────────────────────────────────────────────────────────

  // Stable scene entrance fade
  const sceneOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Current Act Check
  const isAct1Get = frame < 280;
  const isAct2Post = frame >= 280 && frame < 560;
  const isAct3Put = frame >= 560 && frame < 850;
  const isAct4Delete = frame >= 850;

  // Crossfade between Act 1, Act 2, Act 3, and Act 4 content
  const act1Opacity = interpolate(frame, [260, 280], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2Opacity = interpolate(
    frame,
    [265, 285, 545, 565],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const act3Opacity = interpolate(
    frame,
    [550, 570, 835, 855],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const act4Opacity = interpolate(frame, [840, 860], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 1️⃣ ACT 1: GET TIMING VALUES
  // ═══════════════════════════════════════════════════════════════════════════
  // Button Click (F25)
  const spGetClick = spring({
    frame: Math.max(0, frame - 25),
    fps,
    config: { damping: 10, stiffness: 240, mass: 0.6 },
  });
  const getButtonScale = interpolate(spGetClick, [0, 0.3, 1], [1, 0.9, 1]);

  const getShockwaveScale = interpolate(frame, [25, 48], [0.8, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const getShockwaveOpacity = interpolate(frame, [25, 32, 48], [0, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage 1A: GET Request Flow (Client -> Backend)
  const isGetReqActive = frame >= 25 && frame < 76;
  const getReqProgress = interpolate(frame, [30, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Stage 2A: Backend Processing & DB Query
  const isGetBackendActive = frame >= 75 && frame < 165;
  const isGetDbQueryActive = frame >= 88 && frame < 114;
  const getDbQueryProgress = interpolate(frame, [88, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Database Row Scanning (F110 - F135)
  const isGetDbActive = frame >= 105 && frame < 145;
  const getDbRow1Active = frame >= 112;
  const getDbRow2Active = frame >= 120;
  const getDbRow3Active = frame >= 128;

  // DB Data Return (Database -> Backend, F125 - F150)
  const isGetDbReturnActive = frame >= 125 && frame < 155;
  const getDbReturnProgress = interpolate(frame, [125, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Stage 3A: Response Flow (Backend -> Frontend)
  const isGetRespActive = frame >= 165 && frame < 212;
  const getRespProgress = interpolate(frame, [165, 208], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Frontend Cards Cascade (F208+)
  const isGetHydrated = frame >= 208;
  const spGetCard1 = spring({
    frame: Math.max(0, frame - 208),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });
  const spGetCard2 = spring({
    frame: Math.max(0, frame - 215),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });
  const spGetCard3 = spring({
    frame: Math.max(0, frame - 222),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ═══════════════════════════════════════════════════════════════════════════
  // 2️⃣ ACT 2: POST TIMING & LIVE TYPING INSERTION VALUES
  // ═══════════════════════════════════════════════════════════════════════════
  // Form Live Typing / Data Insertion
  const targetNama = "Dewi Sartika";
  const targetRole = "Product Manager";

  // Field 1: nama (F286 - F314)
  const isNamaFocused = frame >= 286 && frame < 318;
  const namaCharCount = Math.floor(
    interpolate(frame, [290, 314], [0, targetNama.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedNama = targetNama.slice(0, namaCharCount);
  const isNamaDone = frame >= 314;

  // Field 2: role (F318 - F348)
  const isRoleFocused = frame >= 318 && frame < 350;
  const roleCharCount = Math.floor(
    interpolate(frame, [322, 346], [0, targetRole.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedRole = targetRole.slice(0, roleCharCount);
  const isRoleDone = frame >= 346;

  // Blinking cursor
  const cursorBlink = Math.floor(frame / 6) % 2 === 0;

  // 1. Client Button Click (F360)
  const spPostClick = spring({
    frame: Math.max(0, frame - 360),
    fps,
    config: { damping: 10, stiffness: 240, mass: 0.6 },
  });
  const postButtonScale = interpolate(spPostClick, [0, 0.3, 1], [1, 0.9, 1]);

  const postShockwaveScale = interpolate(frame, [360, 383], [0.8, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const postShockwaveOpacity = interpolate(frame, [360, 367, 383], [0, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage 1B: POST Request Flow (Client -> Backend)
  const isPostReqActive = frame >= 360 && frame < 415;
  const postReqProgress = interpolate(frame, [365, 412], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Stage 2C: Backend Processing & DB Insert
  const isPostBackendActive = frame >= 415 && frame < 490;
  const isPostDbInsertActive = frame >= 425 && frame < 448;
  const postDbInsertProgress = interpolate(frame, [425, 445], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Database Row 4 Insertion (F445+)
  const isPostDbActive = frame >= 435 && frame < 485;
  const dbRow4Inserted = frame >= 445;
  const spRow4 = spring({
    frame: Math.max(0, frame - 445),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // DB Confirmation Return (Database -> Backend, F458 - F482)
  const isPostDbReturnActive = frame >= 458 && frame < 482;
  const postDbReturnProgress = interpolate(frame, [458, 480], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Stage 3B: Response Flow (Backend -> Frontend)
  const isPostRespActive = frame >= 485 && frame < 530;
  const postRespProgress = interpolate(frame, [485, 524], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Frontend 201 Created Card Celebration (F525+)
  const isPostHydrated = frame >= 525 && frame < 560;
  const spPostUserCard = spring({
    frame: Math.max(0, frame - 525),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 3️⃣ ACT 3: PUT TIMING & LIVE ROLE UPDATE VALUES (F560 - F900)
  // ═══════════════════════════════════════════════════════════════════════════
  const targetPutRole = "Lead UI/UX Designer";
  const isPutRoleFocused = frame >= 600 && frame < 642;
  const putRoleCharCount = Math.floor(
    interpolate(frame, [600, 638], [0, targetPutRole.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const displayedPutRole = targetPutRole.slice(0, putRoleCharCount);
  const isPutRoleDone = frame >= 638;

  // 1. Client Button Click (F650)
  const spPutClick = spring({
    frame: Math.max(0, frame - 650),
    fps,
    config: { damping: 10, stiffness: 240, mass: 0.6 },
  });
  const putButtonScale = interpolate(spPutClick, [0, 0.3, 1], [1, 0.9, 1]);

  const putShockwaveScale = interpolate(frame, [650, 673], [0.8, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const putShockwaveOpacity = interpolate(frame, [650, 657, 673], [0, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage 1C: PUT Request Flow (Client -> Backend, F650 - F705)
  const isPutReqActive = frame >= 650 && frame < 705;
  const putReqProgress = interpolate(frame, [655, 700], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Stage 2E: Backend Processing & DB Update Query (F700 - F775)
  const isPutBackendActive = frame >= 700 && frame < 780;
  const isPutDbQueryActive = frame >= 705 && frame < 738;
  const putDbQueryProgress = interpolate(frame, [708, 735], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Database Row 2 Update (F740+)
  const isPutDbActive = frame >= 735 && frame < 785;
  const dbRow2Updated = frame >= 740;
  const spRow2Update = spring({
    frame: Math.max(0, frame - 740),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // DB Confirmation Return (Database -> Backend, F748 - F775)
  const isPutDbReturnActive = frame >= 748 && frame < 775;
  const putDbReturnProgress = interpolate(frame, [748, 772], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Stage 3C: Response Flow (Backend -> Frontend, F775 - F820)
  const isPutRespActive = frame >= 775 && frame < 820;
  const putRespProgress = interpolate(frame, [775, 814], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Frontend Hydration (F815+)
  const isPutHydrated = frame >= 815 && frame < 850;
  const spPutUserCard = spring({
    frame: Math.max(0, frame - 815),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 4️⃣ ACT 4: DELETE TIMING & RESOURCE REMOVAL VALUES (F850 - F1200)
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. Client Button Click (F940)
  const spDeleteClick = spring({
    frame: Math.max(0, frame - 940),
    fps,
    config: { damping: 10, stiffness: 240, mass: 0.6 },
  });
  const deleteButtonScale = interpolate(spDeleteClick, [0, 0.3, 1], [1, 0.9, 1]);

  const deleteShockwaveScale = interpolate(frame, [940, 963], [0.8, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const deleteShockwaveOpacity = interpolate(frame, [940, 947, 963], [0, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage 1D: DELETE Request Flow (Client -> Backend, F940 - F990)
  const isDeleteReqActive = frame >= 940 && frame < 990;
  const deleteReqProgress = interpolate(frame, [945, 986], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Stage 2G: Backend Processing & DB Delete Query (F985 - F1060)
  const isDeleteBackendActive = frame >= 985 && frame < 1060;
  const isDeleteDbQueryActive = frame >= 995 && frame < 1028;
  const deleteDbQueryProgress = interpolate(frame, [998, 1025], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Database Row 4 Deletion (F1030+)
  const isDeleteDbActive = frame >= 1025 && frame < 1075;
  const dbRow4Deleted = frame >= 1030;
  const spRow4Delete = spring({
    frame: Math.max(0, frame - 1030),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // DB Confirmation Return (Database -> Backend, F1048 - F1075)
  const isDeleteDbReturnActive = frame >= 1048 && frame < 1075;
  const deleteDbReturnProgress = interpolate(frame, [1048, 1072], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });

  // Stage 3D: Response Flow (Backend -> Frontend, F1075 - F1120)
  const isDeleteRespActive = frame >= 1075 && frame < 1120;
  const deleteRespProgress = interpolate(frame, [1075, 1114], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Frontend Hydration (F1115+)
  const isDeleteHydrated = frame >= 1115;
  const spDeleteUserCard = spring({
    frame: Math.max(0, frame - 1115),
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.6 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 📐 GEOMETRY & CONDUIT POSITIONS
  // ═══════════════════════════════════════════════════════════════════════════
  // Symmetrical horizontal conduit axes (Center x = 540)
  // Distance from center = 220px: Left = 540 - 220 = 320, Right = 540 + 220 = 760
  const conduitLeftX = 320;
  const conduitRightX = 760;

  const lineAYStart = 750; // Frontend bottom
  const lineAYEnd = 880;   // Backend top
  const lineBYStart = 880; // Backend top
  const lineBYEnd = 750;   // Frontend bottom

  const lineCYStart = 1220; // Backend bottom
  const lineCYEnd = 1350;  // Database top
  const lineDYStart = 1350; // Database top
  const lineDYEnd = 1220;  // Backend bottom

  // Packet coordinates
  const packetGetReqY = interpolate(getReqProgress, [0, 1], [lineAYStart, lineAYEnd]);
  const packetGetDbY = interpolate(getDbQueryProgress, [0, 1], [lineCYStart, lineCYEnd]);
  const packetGetDbRetY = interpolate(getDbReturnProgress, [0, 1], [lineDYStart, lineDYEnd]);
  const packetGetRespY = interpolate(getRespProgress, [0, 1], [lineBYStart, lineBYEnd]);

  const packetPostReqY = interpolate(postReqProgress, [0, 1], [lineAYStart, lineAYEnd]);
  const packetPostDbY = interpolate(postDbInsertProgress, [0, 1], [lineCYStart, lineCYEnd]);
  const packetPostDbRetY = interpolate(postDbReturnProgress, [0, 1], [lineDYStart, lineDYEnd]);
  const packetPostRespY = interpolate(postRespProgress, [0, 1], [lineBYStart, lineBYEnd]);

  const packetPutReqY = interpolate(putReqProgress, [0, 1], [lineAYStart, lineAYEnd]);
  const packetPutDbY = interpolate(putDbQueryProgress, [0, 1], [lineCYStart, lineCYEnd]);
  const packetPutDbRetY = interpolate(putDbReturnProgress, [0, 1], [lineDYStart, lineDYEnd]);
  const packetPutRespY = interpolate(putRespProgress, [0, 1], [lineBYStart, lineBYEnd]);

  const packetDeleteReqY = interpolate(deleteReqProgress, [0, 1], [lineAYStart, lineAYEnd]);
  const packetDeleteDbY = interpolate(deleteDbQueryProgress, [0, 1], [lineCYStart, lineCYEnd]);
  const packetDeleteDbRetY = interpolate(deleteDbReturnProgress, [0, 1], [lineDYStart, lineDYEnd]);
  const packetDeleteRespY = interpolate(deleteRespProgress, [0, 1], [lineBYStart, lineBYEnd]);

  // Active Glow States
  const isClientActive =
    (frame >= 25 && frame < 76) ||
    (frame >= 208 && frame < 265) ||
    (frame >= 286 && frame < 415) ||
    (frame >= 525 && frame < 560) ||
    (frame >= 575 && frame < 705) ||
    (frame >= 815 && frame < 850) ||
    (frame >= 850 && frame < 990) ||
    frame >= 1115;

  const isBackendActive =
    (frame >= 75 && frame < 165) ||
    (frame >= 415 && frame < 490) ||
    (frame >= 700 && frame < 780) ||
    (frame >= 985 && frame < 1060);

  const isDbActive = isGetDbActive || isPostDbActive || isPutDbActive || isDeleteDbActive;

  // Dynamic Theme Color (Cyan in GET, Emerald in POST, Amber in PUT, Rose in DELETE)
  const themeColor = isAct1Get
    ? GET_POST_COLORS.cyanPrimary
    : isAct2Post
      ? GET_POST_COLORS.emeraldPrimary
      : isAct3Put
        ? REST_API_COLORS.amberPrimary
        : REST_API_COLORS.rosePrimary;
  const themeGlow = isAct1Get
    ? GET_POST_COLORS.cyanGlow
    : isAct2Post
      ? GET_POST_COLORS.emeraldGlow
      : isAct3Put
        ? REST_API_COLORS.amberGlow
        : REST_API_COLORS.roseGlow;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        fontFamily: FONT_DISPLAY,
        color: GET_POST_COLORS.textPrimary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {/* ───────────────────────────────────────────────────────────────────
          TOP TITLE HEADER: PROMINENT METHOD DISPLAY (GET / POST)
          ─────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 190,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 940,
          zIndex: 40,
        }}
      >
        {/* GET TITLE (F0 - F290) */}
        {frame < 290 && (
          <div
            style={{
              position: "absolute",
              opacity: act1Opacity,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(11, 23, 44, 0.88)",
              border: `1.5px solid ${REST_API_COLORS.cyanPrimary}`,
              boxShadow: `0 0 32px ${REST_API_COLORS.cyanGlow}, 0 8px 24px rgba(0, 0, 0, 0.5)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                fontWeight: 900,
                color: REST_API_COLORS.cyanPrimary,
                letterSpacing: 2,
                textShadow: `0 0 16px ${REST_API_COLORS.cyanGlow}`,
              }}
            >
              GET
            </div>
            <div
              style={{
                width: 2,
                height: 32,
                backgroundColor: "rgba(56, 189, 248, 0.35)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                MENGAMBIL DATA (READ)
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 600,
                  color: REST_API_COLORS.cyanPrimary,
                  letterSpacing: 1,
                }}
              >
                HTTP REQUEST METHOD
              </div>
            </div>
          </div>
        )}

        {/* POST TITLE (F280 - F570) */}
        {frame >= 280 && frame < 570 && (
          <div
            style={{
              position: "absolute",
              opacity: act2Opacity,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(6, 32, 22, 0.88)",
              border: `1.5px solid ${REST_API_COLORS.emeraldPrimary}`,
              boxShadow: `0 0 32px ${REST_API_COLORS.emeraldGlow}, 0 8px 24px rgba(0, 0, 0, 0.5)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                fontWeight: 900,
                color: REST_API_COLORS.emeraldMint,
                letterSpacing: 2,
                textShadow: `0 0 16px ${REST_API_COLORS.emeraldGlow}`,
              }}
            >
              POST
            </div>
            <div
              style={{
                width: 2,
                height: 32,
                backgroundColor: "rgba(16, 185, 129, 0.35)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                MENAMBAH DATA BARU (CREATE)
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 600,
                  color: REST_API_COLORS.emeraldMint,
                  letterSpacing: 1,
                }}
              >
                HTTP REQUEST METHOD
              </div>
            </div>
          </div>
        )}

        {/* PUT TITLE (F550 - F860) */}
        {frame >= 550 && frame < 860 && (
          <div
            style={{
              position: "absolute",
              opacity: act3Opacity,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(45, 20, 2, 0.88)",
              border: `1.5px solid ${REST_API_COLORS.amberPrimary}`,
              boxShadow: `0 0 32px ${REST_API_COLORS.amberGlow}, 0 8px 24px rgba(0, 0, 0, 0.5)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                fontWeight: 900,
                color: REST_API_COLORS.amberPrimary,
                letterSpacing: 2,
                textShadow: `0 0 16px ${REST_API_COLORS.amberGlow}`,
              }}
            >
              PUT
            </div>
            <div
              style={{
                width: 2,
                height: 32,
                backgroundColor: "rgba(245, 158, 11, 0.35)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                MEMPERBARUI DATA (UPDATE)
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 600,
                  color: REST_API_COLORS.amberPrimary,
                  letterSpacing: 1,
                }}
              >
                HTTP REQUEST METHOD
              </div>
            </div>
          </div>
        )}

        {/* DELETE TITLE (F840 - F1200) */}
        {frame >= 840 && (
          <div
            style={{
              position: "absolute",
              opacity: act4Opacity,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(40, 10, 20, 0.88)",
              border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
              boxShadow: `0 0 32px ${REST_API_COLORS.roseGlow}, 0 8px 24px rgba(0, 0, 0, 0.5)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                fontWeight: 900,
                color: REST_API_COLORS.rosePrimary,
                letterSpacing: 2,
                textShadow: `0 0 16px ${REST_API_COLORS.roseGlow}`,
              }}
            >
              DELETE
            </div>
            <div
              style={{
                width: 2,
                height: 32,
                backgroundColor: "rgba(244, 63, 94, 0.35)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                MENGHAPUS DATA (DELETE)
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  fontWeight: 600,
                  color: REST_API_COLORS.rosePrimary,
                  letterSpacing: 1,
                }}
              >
                HTTP REQUEST METHOD
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          TIER 1 (TOP): FRONTEND (CLIENT)
          ─────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 280,
          width: 940,
          height: 470,
          backgroundColor: GET_POST_COLORS.surfaceCard,
          border: `1.5px solid ${isClientActive ? themeColor : "rgba(255, 255, 255, 0.12)"}`,
          boxShadow: isClientActive
            ? `0 0 45px ${themeGlow}, 0 20px 40px rgba(0,0,0,0.6)`
            : "0 20px 40px rgba(0,0,0,0.5)",
          borderRadius: 24,
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px",
          zIndex: 10,
        }}
      >
        {/* Client Topbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: GET_POST_COLORS.textPrimary,
                marginLeft: 8,
              }}
            >
              FRONTEND (CLIENT)
            </span>
          </div>

          {/* Top Status Pill */}
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 700,
              color: isDeleteHydrated
                ? REST_API_COLORS.rosePrimary
                : isPutHydrated
                  ? REST_API_COLORS.amberPrimary
                  : isPostHydrated
                    ? GET_POST_COLORS.emeraldMint
                    : isGetHydrated
                      ? GET_POST_COLORS.cyanPrimary
                      : isClientActive
                        ? themeColor
                        : GET_POST_COLORS.textMuted,
            }}
          >
            {isAct4Delete
              ? isDeleteHydrated
                ? "● BERHASIL DIHAPUS (200 OK / 204)"
                : isDeleteReqActive
                  ? "● MENGIRIM REQUEST DELETE..."
                  : frame >= 850 && frame < 940
                    ? "● KONFIRMASI HAPUS USER ID #4"
                    : "● STANDBY / SIAP"
              : isAct3Put
                ? isPutHydrated
                  ? "● BERHASIL DIUPDATE (200 OK)"
                  : isPutReqActive
                    ? "● MENGIRIM PAYLOAD UPDATE (PUT)..."
                    : isPutRoleFocused
                      ? `● MEMPERBARUI ROLE: ${displayedPutRole}`
                      : isPutRoleDone && frame < 650
                        ? "● DATA SIAP DIUPDATE (PUT)"
                        : frame >= 560 && frame < 600
                          ? "● MEMILIH USER ID #2 (Siti Rahma)"
                          : "● STANDBY / SIAP"
                : isPostHydrated
                  ? "● BERHASIL DIBUAT (201 CREATED)"
                  : isAct2Post && isPostReqActive
                    ? "● MENGIRIM PAYLOAD KE SERVER..."
                    : isAct2Post && isNamaFocused
                      ? `● MENGISI NAMA: ${displayedNama}`
                      : isAct2Post && isRoleFocused
                        ? `● MENGISI ROLE: ${displayedRole}`
                        : isAct2Post && isNamaDone && isRoleDone && frame < 360
                          ? "● DATA SIAP DIKIRIM (POST)"
                          : isAct2Post
                            ? "● MENYIAPKAN FORM INPUT..."
                            : isGetHydrated
                              ? "● DATA DITERIMA (200 OK)"
                              : isGetReqActive
                                ? "● MEMINTA DATA KE SERVER..."
                                : "● STANDBY / SIAP"}
          </div>
        </div>

        {/* URL Bar & Action Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            border: `1px solid ${isClientActive ? themeColor + "66" : "rgba(255, 255, 255, 0.1)"}`,
            borderRadius: 14,
            padding: "10px 18px",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* HTTP Method Badge */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                backgroundColor: isAct1Get
                  ? "rgba(56, 189, 248, 0.18)"
                  : isAct2Post
                    ? "rgba(16, 185, 129, 0.22)"
                    : isAct3Put
                      ? "rgba(245, 158, 11, 0.22)"
                      : "rgba(244, 63, 94, 0.22)",
                border: `1px solid ${
                  isAct1Get
                    ? GET_POST_COLORS.cyanPrimary
                    : isAct2Post
                      ? GET_POST_COLORS.emeraldPrimary
                      : isAct3Put
                        ? REST_API_COLORS.amberPrimary
                        : REST_API_COLORS.rosePrimary
                }`,
                fontFamily: FONT_MONO,
                fontSize: 15,
                fontWeight: 900,
                color: isAct1Get
                  ? GET_POST_COLORS.cyanPrimary
                  : isAct2Post
                    ? GET_POST_COLORS.emeraldMint
                    : isAct3Put
                      ? REST_API_COLORS.amberPrimary
                      : REST_API_COLORS.rosePrimary,
                letterSpacing: 1,
              }}
            >
              {isAct1Get ? "GET" : isAct2Post ? "POST" : isAct3Put ? "PUT" : "DELETE"}
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 19,
                fontWeight: 600,
                color: GET_POST_COLORS.textPrimary,
                letterSpacing: 0.5,
              }}
            >
              {isAct4Delete ? "/api/users/4" : isAct3Put ? "/api/users/2" : "/api/users"}
            </div>
          </div>

          {/* Action Trigger Button */}
          <div
            style={{
              position: "relative",
              transform: `scale(${isAct1Get ? getButtonScale : isAct2Post ? postButtonScale : isAct3Put ? putButtonScale : deleteButtonScale})`,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 22px",
              borderRadius: 10,
              backgroundColor: isAct1Get
                ? "rgba(56, 189, 248, 0.15)"
                : isAct2Post
                  ? "rgba(16, 185, 129, 0.2)"
                  : isAct3Put
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(244, 63, 94, 0.2)",
              border: `1.5px solid ${themeColor}`,
              boxShadow: `0 0 16px ${themeGlow}`,
              cursor: "pointer",
            }}
          >
            {/* Shockwave circle */}
            {isAct1Get && frame >= 25 && frame <= 48 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 10,
                  border: `2px solid ${GET_POST_COLORS.cyanPrimary}`,
                  transform: `scale(${getShockwaveScale})`,
                  opacity: getShockwaveOpacity,
                  pointerEvents: "none",
                }}
              />
            )}
            {isAct2Post && frame >= 305 && frame <= 328 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 10,
                  border: `2px solid ${GET_POST_COLORS.emeraldPrimary}`,
                  transform: `scale(${postShockwaveScale})`,
                  opacity: postShockwaveOpacity,
                  pointerEvents: "none",
                }}
              />
            )}
            {isAct3Put && frame >= 650 && frame <= 673 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 10,
                  border: `2px solid ${REST_API_COLORS.amberPrimary}`,
                  transform: `scale(${putShockwaveScale})`,
                  opacity: putShockwaveOpacity,
                  pointerEvents: "none",
                }}
              />
            )}
            {isAct4Delete && frame >= 940 && frame <= 963 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 10,
                  border: `2px solid ${REST_API_COLORS.rosePrimary}`,
                  transform: `scale(${deleteShockwaveScale})`,
                  opacity: deleteShockwaveOpacity,
                  pointerEvents: "none",
                }}
              />
            )}

            {isAct4Delete ? (
              <FaTrashAlt size={15} color={themeColor} />
            ) : (
              <FaPaperPlane size={15} color={themeColor} />
            )}
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: 1,
                color: themeColor,
              }}
            >
              {isAct1Get ? "FETCH()" : isAct2Post ? "KIRIM DATA" : isAct3Put ? "UPDATE DATA" : "HAPUS DATA"}
            </span>
          </div>
        </div>

        {/* Client Dynamic Content Window */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              VIEW A: ACT 1 (GET DATA CARDS)
              ───────────────────────────────────────────────────────────── */}
          {frame < 290 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: act1Opacity,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                justifyContent: "center",
              }}
            >
              {/* Skeletons before F208 */}
              {!isGetHydrated && (
                <>
                  {[1, 2, 3].map((idx) => {
                    const shimmer = (Math.sin(frame / 6 + idx * 1.5) + 1) / 2;
                    return (
                      <div
                        key={`skel-${idx}`}
                        style={{
                          height: 60,
                          borderRadius: 12,
                          backgroundColor: `rgba(255, 255, 255, ${0.03 + shimmer * 0.04})`,
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 18px",
                          gap: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                          }}
                        />
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                          <div
                            style={{
                              width: "45%",
                              height: 12,
                              borderRadius: 4,
                              backgroundColor: "rgba(255, 255, 255, 0.09)",
                            }}
                          />
                          <div
                            style={{
                              width: "25%",
                              height: 9,
                              borderRadius: 4,
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* Hydrated Cards after F208 */}
              {isGetHydrated && (
                <>
                  {/* Card 1 */}
                  <div
                    style={{
                      height: 60,
                      borderRadius: 12,
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 20px",
                      transform: `scale(${interpolate(spGetCard1, [0, 1], [0.92, 1])}) translateY(${interpolate(spGetCard1, [0, 1], [15, 0])}px)`,
                      opacity: interpolate(spGetCard1, [0, 0.4, 1], [0, 1, 1]),
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          backgroundColor: "rgba(56, 189, 248, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: GET_POST_COLORS.cyanPrimary,
                        }}
                      >
                        <FaUser size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700 }}>Budi Pratama</div>
                        <div style={{ fontSize: 13, color: GET_POST_COLORS.textSecondary }}>Frontend Dev</div>
                      </div>
                    </div>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: GET_POST_COLORS.cyanPrimary, fontWeight: 700 }}>
                      ID: #1
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div
                    style={{
                      height: 60,
                      borderRadius: 12,
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 20px",
                      transform: `scale(${interpolate(spGetCard2, [0, 1], [0.92, 1])}) translateY(${interpolate(spGetCard2, [0, 1], [15, 0])}px)`,
                      opacity: interpolate(spGetCard2, [0, 0.4, 1], [0, 1, 1]),
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          backgroundColor: "rgba(56, 189, 248, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: GET_POST_COLORS.cyanPrimary,
                        }}
                      >
                        <FaUser size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700 }}>Siti Rahma</div>
                        <div style={{ fontSize: 13, color: GET_POST_COLORS.textSecondary }}>UI/UX Designer</div>
                      </div>
                    </div>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: GET_POST_COLORS.cyanPrimary, fontWeight: 700 }}>
                      ID: #2
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div
                    style={{
                      height: 60,
                      borderRadius: 12,
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 20px",
                      transform: `scale(${interpolate(spGetCard3, [0, 1], [0.92, 1])}) translateY(${interpolate(spGetCard3, [0, 1], [15, 0])}px)`,
                      opacity: interpolate(spGetCard3, [0, 0.4, 1], [0, 1, 1]),
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          backgroundColor: "rgba(56, 189, 248, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: GET_POST_COLORS.cyanPrimary,
                        }}
                      >
                        <FaUser size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700 }}>Rian Hidayat</div>
                        <div style={{ fontSize: 13, color: GET_POST_COLORS.textSecondary }}>Backend Dev</div>
                      </div>
                    </div>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: GET_POST_COLORS.cyanPrimary, fontWeight: 700 }}>
                      ID: #3
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              VIEW B: ACT 2 (POST FORM & 201 CREATED CELEBRATION)
              ───────────────────────────────────────────────────────────── */}
          {frame >= 280 && frame < 570 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: act2Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {!isPostHydrated ? (
                // Interactive Data Insertion Form
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                    border: `1px solid ${
                      isNamaDone && isRoleDone
                        ? "rgba(16, 185, 129, 0.45)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    borderRadius: 16,
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    boxShadow:
                      isNamaDone && isRoleDone
                        ? "0 0 24px rgba(16, 185, 129, 0.15)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: FONT_MONO,
                      fontSize: 13,
                      letterSpacing: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: GET_POST_COLORS.textMuted,
                      }}
                    >
                      <FaPen size={12} color={GET_POST_COLORS.emeraldMint} />
                      <span>ILUSTRASI INSERT DATA FORM</span>
                    </div>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor:
                          isNamaDone && isRoleDone
                            ? "rgba(16, 185, 129, 0.2)"
                            : "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${
                          isNamaDone && isRoleDone
                            ? "rgba(16, 185, 129, 0.4)"
                            : "rgba(255, 255, 255, 0.1)"
                        }`,
                        color:
                          isNamaDone && isRoleDone
                            ? GET_POST_COLORS.emeraldMint
                            : GET_POST_COLORS.textMuted,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {isNamaDone && isRoleDone
                        ? "JSON PAYLOAD READY"
                        : "INPUTTING DATA..."}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: 16 }}>
                    {/* Input Field: nama */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: isNamaFocused
                          ? "rgba(16, 185, 129, 0.09)"
                          : "rgba(255, 255, 255, 0.04)",
                        border: `1.5px solid ${
                          isNamaFocused
                            ? GET_POST_COLORS.emeraldPrimary
                            : isNamaDone
                              ? "rgba(16, 185, 129, 0.55)"
                              : "rgba(255, 255, 255, 0.12)"
                        }`,
                        borderRadius: 12,
                        padding: "14px 18px",
                        boxShadow: isNamaFocused
                          ? `0 0 18px ${GET_POST_COLORS.emeraldGlow}`
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                          color: GET_POST_COLORS.textMuted,
                          marginBottom: 6,
                        }}
                      >
                        <span>nama:</span>
                        {isNamaDone ? (
                          <span
                            style={{
                              color: GET_POST_COLORS.emeraldMint,
                              fontWeight: 800,
                            }}
                          >
                            ✓ VALID
                          </span>
                        ) : isNamaFocused ? (
                          <span style={{ color: GET_POST_COLORS.emeraldMint }}>
                            ● MENGETIK...
                          </span>
                        ) : (
                          <span>[ WAITING ]</span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          minHeight: 24,
                          display: "flex",
                          alignItems: "center",
                          color: GET_POST_COLORS.textPrimary,
                        }}
                      >
                        {displayedNama.length === 0 ? (
                          <span
                            style={{
                              color: "rgba(255,255,255,0.22)",
                              fontSize: 15,
                            }}
                          >
                            contoh: Dewi Sartika
                          </span>
                        ) : (
                          displayedNama
                        )}
                        {isNamaFocused && cursorBlink && (
                          <span
                            style={{
                              color: GET_POST_COLORS.emeraldPrimary,
                              marginLeft: 2,
                              fontWeight: 900,
                            }}
                          >
                            |
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Input Field: role */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: isRoleFocused
                          ? "rgba(16, 185, 129, 0.09)"
                          : "rgba(255, 255, 255, 0.04)",
                        border: `1.5px solid ${
                          isRoleFocused
                            ? GET_POST_COLORS.emeraldPrimary
                            : isRoleDone
                              ? "rgba(16, 185, 129, 0.55)"
                              : "rgba(255, 255, 255, 0.12)"
                        }`,
                        borderRadius: 12,
                        padding: "14px 18px",
                        boxShadow: isRoleFocused
                          ? `0 0 18px ${GET_POST_COLORS.emeraldGlow}`
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                          color: GET_POST_COLORS.textMuted,
                          marginBottom: 6,
                        }}
                      >
                        <span>role:</span>
                        {isRoleDone ? (
                          <span
                            style={{
                              color: GET_POST_COLORS.emeraldMint,
                              fontWeight: 800,
                            }}
                          >
                            ✓ VALID
                          </span>
                        ) : isRoleFocused ? (
                          <span style={{ color: GET_POST_COLORS.emeraldMint }}>
                            ● MENGETIK...
                          </span>
                        ) : (
                          <span>[ WAITING ]</span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          minHeight: 24,
                          display: "flex",
                          alignItems: "center",
                          color: GET_POST_COLORS.textPrimary,
                        }}
                      >
                        {displayedRole.length === 0 ? (
                          <span
                            style={{
                              color: "rgba(255,255,255,0.22)",
                              fontSize: 15,
                            }}
                          >
                            contoh: Product Manager
                          </span>
                        ) : (
                          displayedRole
                        )}
                        {isRoleFocused && cursorBlink && (
                          <span
                            style={{
                              color: GET_POST_COLORS.emeraldPrimary,
                              marginLeft: 2,
                              fontWeight: 900,
                            }}
                          >
                            |
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Hydrated 201 Created User Card #4
                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: `1.5px solid ${GET_POST_COLORS.emeraldPrimary}`,
                    boxShadow: `0 0 35px ${GET_POST_COLORS.emeraldGlow}`,
                    borderRadius: 16,
                    padding: "24px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transform: `scale(${interpolate(spPostUserCard, [0, 1], [0.9, 1])}) translateY(${interpolate(spPostUserCard, [0, 1], [20, 0])}px)`,
                    opacity: interpolate(spPostUserCard, [0, 0.4, 1], [0, 1, 1]),
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        backgroundColor: "rgba(16, 185, 129, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: GET_POST_COLORS.emeraldMint,
                      }}
                    >
                      <FaUserPlus size={24} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          letterSpacing: 0.5,
                        }}
                      >
                        Dewi Sartika
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: GET_POST_COLORS.textSecondary,
                          marginTop: 3,
                        }}
                      >
                        Product Manager • User #4
                      </div>
                    </div>
                  </div>

                  {/* 201 Created Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 16px",
                      borderRadius: 999,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: `1px solid ${GET_POST_COLORS.emeraldMint}`,
                      color: GET_POST_COLORS.emeraldMint,
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    <FaCheckCircle size={15} />
                    <span>201 CREATED</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              VIEW C: ACT 3 (PUT DATA: EDIT FORM & HYDRATED RESULT)
              ───────────────────────────────────────────────────────────── */}
          {frame >= 550 && frame < 860 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: act3Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {!isPutHydrated ? (
                // Interactive Edit Form for User ID: 2
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: `1.5px solid ${REST_API_COLORS.amberPrimary}`,
                    boxShadow: `0 0 25px ${REST_API_COLORS.amberGlow}`,
                    borderRadius: 16,
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {/* Form Header Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingBottom: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FaPen size={13} color={REST_API_COLORS.amberPrimary} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: 1,
                          color: REST_API_COLORS.amberPrimary,
                        }}
                      >
                        ILUSTRASI UPDATE DATA (ID: 2)
                      </span>
                    </div>

                    <div
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(245, 158, 11, 0.15)",
                        border: `1px solid ${REST_API_COLORS.amberPrimary}`,
                        fontFamily: FONT_MONO,
                        fontSize: 11,
                        fontWeight: 700,
                        color: REST_API_COLORS.amberPrimary,
                      }}
                    >
                      {isPutRoleDone ? "JSON PAYLOAD READY" : "EDIT MODE (PUT)"}
                    </div>
                  </div>

                  {/* Form Fields Side-by-Side */}
                  <div style={{ display: "flex", gap: 14 }}>
                    {/* Field 1: Target ID & Nama (Pre-existing/Locked) */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1.5px solid rgba(245, 158, 11, 0.4)",
                        borderRadius: 12,
                        padding: "14px 18px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                          color: GET_POST_COLORS.textMuted,
                          marginBottom: 6,
                        }}
                      >
                        <span>target_user:</span>
                        <span
                          style={{
                            color: REST_API_COLORS.amberPrimary,
                            fontWeight: 800,
                          }}
                        >
                          ID: 2 (TERPILIH)
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          minHeight: 24,
                          display: "flex",
                          alignItems: "center",
                          color: GET_POST_COLORS.textPrimary,
                        }}
                      >
                        Siti Rahma
                      </div>
                    </div>

                    {/* Field 2: Role (Live Dynamic Update Typing) */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: isPutRoleFocused
                          ? "rgba(245, 158, 11, 0.1)"
                          : "rgba(255, 255, 255, 0.04)",
                        border: `1.5px solid ${
                          isPutRoleFocused
                            ? REST_API_COLORS.amberPrimary
                            : isPutRoleDone
                              ? REST_API_COLORS.amberPrimary
                              : "rgba(255, 255, 255, 0.12)"
                        }`,
                        borderRadius: 12,
                        padding: "14px 18px",
                        boxShadow: isPutRoleFocused
                          ? `0 0 18px ${REST_API_COLORS.amberGlow}`
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                          color: GET_POST_COLORS.textMuted,
                          marginBottom: 6,
                        }}
                      >
                        <span>role (update):</span>
                        {isPutRoleDone ? (
                          <span
                            style={{
                              color: REST_API_COLORS.amberPrimary,
                              fontWeight: 800,
                            }}
                          >
                            ✓ SIAP UPDATE
                          </span>
                        ) : isPutRoleFocused ? (
                          <span style={{ color: REST_API_COLORS.amberPrimary }}>
                            ● MEMPERBARUI...
                          </span>
                        ) : (
                          <span>[ SIAP ]</span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          minHeight: 24,
                          display: "flex",
                          alignItems: "center",
                          color: GET_POST_COLORS.textPrimary,
                        }}
                      >
                        {displayedPutRole.length === 0 ? (
                          <span
                            style={{
                              color: "rgba(255,255,255,0.22)",
                              fontSize: 15,
                            }}
                          >
                            UI/UX Designer
                          </span>
                        ) : (
                          displayedPutRole
                        )}
                        {isPutRoleFocused && cursorBlink && (
                          <span
                            style={{
                              color: REST_API_COLORS.amberPrimary,
                              marginLeft: 2,
                              fontWeight: 900,
                            }}
                          >
                            |
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Hydrated 200 OK Updated User Card #2
                <div
                  style={{
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: `1.5px solid ${REST_API_COLORS.amberPrimary}`,
                    boxShadow: `0 0 35px ${REST_API_COLORS.amberGlow}`,
                    borderRadius: 16,
                    padding: "24px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transform: `scale(${interpolate(spPutUserCard, [0, 1], [0.9, 1])}) translateY(${interpolate(spPutUserCard, [0, 1], [20, 0])}px)`,
                    opacity: interpolate(spPutUserCard, [0, 0.4, 1], [0, 1, 1]),
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        backgroundColor: "rgba(245, 158, 11, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: REST_API_COLORS.amberPrimary,
                      }}
                    >
                      <FaUser size={24} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          letterSpacing: 0.5,
                        }}
                      >
                        Siti Rahma
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: REST_API_COLORS.amberPrimary,
                          marginTop: 3,
                          fontWeight: 600,
                        }}
                      >
                        Lead UI/UX Designer • User #2
                      </div>
                    </div>
                  </div>

                  {/* 200 OK Updated Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 16px",
                      borderRadius: 999,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      border: `1px solid ${REST_API_COLORS.amberPrimary}`,
                      color: REST_API_COLORS.amberPrimary,
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    <FaCheckCircle size={15} />
                    <span>200 OK • UPDATED</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              VIEW D: ACT 4 (DELETE CONFIRMATION & 200/204 SUCCESS)
              ───────────────────────────────────────────────────────────── */}
          {frame >= 840 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: act4Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {!isDeleteHydrated ? (
                // Target Confirmation Dialog Card for User ID: 4
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
                    boxShadow: `0 0 25px ${REST_API_COLORS.roseGlow}`,
                    borderRadius: 16,
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {/* Card Header Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingBottom: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FaTrashAlt size={13} color={REST_API_COLORS.rosePrimary} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: 1,
                          color: REST_API_COLORS.rosePrimary,
                        }}
                      >
                        KONFIRMASI HAPUS DATA (ID: 4)
                      </span>
                    </div>

                    <div
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(244, 63, 94, 0.15)",
                        border: `1px solid ${REST_API_COLORS.rosePrimary}`,
                        fontFamily: FONT_MONO,
                        fontSize: 11,
                        fontWeight: 700,
                        color: REST_API_COLORS.rosePrimary,
                      }}
                    >
                      {frame >= 940 ? "REQUEST SENT (DELETE)" : "TARGET SELECTED"}
                    </div>
                  </div>

                  {/* Target User Details & Warning Callout */}
                  <div style={{ display: "flex", gap: 14 }}>
                    {/* User Details Box */}
                    <div
                      style={{
                        flex: 1.2,
                        backgroundColor: "rgba(244, 63, 94, 0.08)",
                        border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
                        borderRadius: 12,
                        padding: "14px 18px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                          color: GET_POST_COLORS.textMuted,
                          marginBottom: 6,
                        }}
                      >
                        <span>target_resource:</span>
                        <span
                          style={{
                            color: REST_API_COLORS.rosePrimary,
                            fontWeight: 800,
                          }}
                        >
                          USER #4 (DEWI SARTIKA)
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          minHeight: 24,
                          display: "flex",
                          alignItems: "center",
                          color: GET_POST_COLORS.textPrimary,
                        }}
                      >
                        Dewi Sartika
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontFamily: FONT_MONO,
                          color: REST_API_COLORS.rosePrimary,
                          marginTop: 4,
                        }}
                      >
                        Product Manager • ID: 4
                      </div>
                    </div>

                    {/* Warning Callout Box */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px dashed rgba(244, 63, 94, 0.4)",
                        borderRadius: 12,
                        padding: "14px 18px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: REST_API_COLORS.rosePrimary,
                          marginBottom: 4,
                        }}
                      >
                        ⚠️ PERINGATAN
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: GET_POST_COLORS.textSecondary,
                          lineHeight: 1.4,
                        }}
                      >
                        Data user akan dihapus permanen dari basis data server.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Hydrated 200 OK / 204 Deleted Celebration Card
                <div
                  style={{
                    backgroundColor: "rgba(244, 63, 94, 0.12)",
                    border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
                    boxShadow: `0 0 35px ${REST_API_COLORS.roseGlow}`,
                    borderRadius: 16,
                    padding: "24px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transform: `scale(${interpolate(spDeleteUserCard, [0, 1], [0.9, 1])}) translateY(${interpolate(spDeleteUserCard, [0, 1], [20, 0])}px)`,
                    opacity: interpolate(spDeleteUserCard, [0, 0.4, 1], [0, 1, 1]),
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        backgroundColor: "rgba(244, 63, 94, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: REST_API_COLORS.rosePrimary,
                      }}
                    >
                      <FaTrashAlt size={22} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          letterSpacing: 0.5,
                        }}
                      >
                        User #4 Berhasil Dihapus!
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: REST_API_COLORS.rosePrimary,
                          marginTop: 3,
                          fontWeight: 600,
                        }}
                      >
                        Dewi Sartika (Product Manager) telah dibersihkan
                      </div>
                    </div>
                  </div>

                  {/* 200 OK / 204 DELETED Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 16px",
                      borderRadius: 999,
                      backgroundColor: "rgba(244, 63, 94, 0.2)",
                      border: `1px solid ${REST_API_COLORS.rosePrimary}`,
                      color: REST_API_COLORS.rosePrimary,
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    <FaCheckCircle size={15} />
                    <span>200 OK • 204 DELETED</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          GAP 1: CONDUIT LINES & PACKET STREAM (CLIENT ↔ BACKEND)
          Symmetrical Conduits (Left: 320, Right: 760) with Clean Precision Labels
          ─────────────────────────────────────────────────────────────────── */}
      {/* Line A (Left): Request / Payload Conduit */}
      <div
        style={{
          position: "absolute",
          top: lineAYStart,
          left: conduitLeftX,
          width: 2,
          height: lineAYEnd - lineAYStart,
          backgroundColor:
            isGetReqActive || isPostReqActive || isPutReqActive || isDeleteReqActive
              ? themeColor
              : "rgba(255, 255, 255, 0.12)",
          boxShadow:
            isGetReqActive || isPostReqActive || isPutReqActive || isDeleteReqActive
              ? `0 0 12px ${themeGlow}`
              : "none",
          zIndex: 5,
        }}
      />

      {/* Line B (Right): Response Conduit */}
      <div
        style={{
          position: "absolute",
          top: lineBYEnd,
          left: conduitRightX,
          width: 2,
          height: lineBYStart - lineBYEnd,
          backgroundColor:
            isGetRespActive || isPostRespActive || isPutRespActive || isDeleteRespActive
              ? themeColor
              : "rgba(255, 255, 255, 0.12)",
          boxShadow:
            isGetRespActive || isPostRespActive || isPutRespActive || isDeleteRespActive
              ? `0 0 12px ${themeGlow}`
              : "none",
          zIndex: 5,
        }}
      />

      {/* Central Network Bus Status Pill */}
      <div
        style={{
          position: "absolute",
          top: 798,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "5px 16px",
          borderRadius: 999,
          backgroundColor: "rgba(6, 9, 19, 0.9)",
          border: `1px solid ${
            isClientActive
              ? themeColor + "66"
              : "rgba(255, 255, 255, 0.14)"
          }`,
          boxShadow: isClientActive ? `0 0 16px ${themeGlow}` : "none",
          fontFamily: FONT_MONO,
          fontSize: 12,
          fontWeight: 700,
          color: isClientActive ? themeColor : GET_POST_COLORS.textMuted,
          zIndex: 20,
        }}
      >
        <FaNetworkWired size={12} />
        <span>HTTP NETWORK BUS</span>
      </div>

      {/* Flowing Packets (Gap 1) */}
      {/* 1. GET Request Packet (Client -> Backend) */}
      {isGetReqActive && (
        <div
          style={{
            position: "absolute",
            top: packetGetReqY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${GET_POST_COLORS.cyanPrimary}`,
            boxShadow: `0 0 16px ${GET_POST_COLORS.cyanGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.cyanPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: GET_POST_COLORS.cyanPrimary,
            }}
          >
            GET /api/users ↓
          </span>
        </div>
      )}

      {/* 2. GET Response Packet (Backend -> Client) */}
      {isGetRespActive && (
        <div
          style={{
            position: "absolute",
            top: packetGetRespY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${GET_POST_COLORS.emeraldMint}`,
            boxShadow: `0 0 16px ${GET_POST_COLORS.emeraldGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.emeraldMint,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: GET_POST_COLORS.emeraldMint,
            }}
          >
            200 OK ↑
          </span>
        </div>
      )}

      {/* 3. POST Request Packet (Client -> Backend) */}
      {isPostReqActive && (
        <div
          style={{
            position: "absolute",
            top: packetPostReqY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${GET_POST_COLORS.emeraldPrimary}`,
            boxShadow: `0 0 16px ${GET_POST_COLORS.emeraldGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.emeraldPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: GET_POST_COLORS.emeraldMint,
            }}
          >
            POST /api/users ↓
          </span>
        </div>
      )}

      {/* 4. POST Response Packet (Backend -> Client) */}
      {isPostRespActive && (
        <div
          style={{
            position: "absolute",
            top: packetPostRespY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${GET_POST_COLORS.emeraldMint}`,
            boxShadow: `0 0 16px ${GET_POST_COLORS.emeraldGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.emeraldMint,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: GET_POST_COLORS.emeraldMint,
            }}
          >
            201 CREATED ↑
          </span>
        </div>
      )}

      {/* 5. PUT Request Packet (Client -> Backend) */}
      {isPutReqActive && (
        <div
          style={{
            position: "absolute",
            top: packetPutReqY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${REST_API_COLORS.amberPrimary}`,
            boxShadow: `0 0 16px ${REST_API_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: REST_API_COLORS.amberPrimary,
            }}
          >
            PUT /api/users/2 ↓
          </span>
        </div>
      )}

      {/* 6. PUT Response Packet (Backend -> Client) */}
      {isPutRespActive && (
        <div
          style={{
            position: "absolute",
            top: packetPutRespY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${REST_API_COLORS.amberPrimary}`,
            boxShadow: `0 0 16px ${REST_API_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: REST_API_COLORS.amberPrimary,
            }}
          >
            200 OK ↑
          </span>
        </div>
      )}

      {/* 7. DELETE Request Packet (Client -> Backend) */}
      {isDeleteReqActive && (
        <div
          style={{
            position: "absolute",
            top: packetDeleteReqY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
            boxShadow: `0 0 16px ${REST_API_COLORS.roseGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.rosePrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: REST_API_COLORS.rosePrimary,
            }}
          >
            DELETE /api/users/4 ↓
          </span>
        </div>
      )}

      {/* 8. DELETE Response Packet (Backend -> Client) */}
      {isDeleteRespActive && (
        <div
          style={{
            position: "absolute",
            top: packetDeleteRespY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1.5px solid ${REST_API_COLORS.rosePrimary}`,
            boxShadow: `0 0 16px ${REST_API_COLORS.roseGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.rosePrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 12,
              fontWeight: 800,
              color: REST_API_COLORS.rosePrimary,
            }}
          >
            200 OK ↑
          </span>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          TIER 2 (MIDDLE): BACKEND (API SERVER)
          Enlarged 22px Monospace Code for Superb Smartphone Legibility!
          ─────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 880,
          width: 940,
          height: 340,
          backgroundColor: GET_POST_COLORS.surfaceCard,
          border: `1.5px solid ${isBackendActive ? GET_POST_COLORS.violetPrimary : "rgba(255, 255, 255, 0.12)"}`,
          boxShadow: isBackendActive
            ? `0 0 45px ${GET_POST_COLORS.violetGlow}, 0 20px 40px rgba(0,0,0,0.6)`
            : "0 20px 40px rgba(0,0,0,0.5)",
          borderRadius: 24,
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px",
          zIndex: 10,
        }}
      >
        {/* Backend Topbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: GET_POST_COLORS.violetPrimary,
              }}
            >
              <FaServer size={18} />
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: GET_POST_COLORS.textPrimary,
              }}
            >
              BACKEND (API SERVER)
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 700,
              color: isBackendActive
                ? GET_POST_COLORS.violetPrimary
                : GET_POST_COLORS.textMuted,
            }}
          >
            {isAct4Delete
              ? isDeleteBackendActive
                ? "● PROSES DELETE (HAPUS DI DB)..."
                : "● STANDBY"
              : isAct3Put
                ? isPutBackendActive
                  ? "● PROSES PUT (UPDATE DI DB)..."
                  : "● STANDBY"
                : isAct2Post
                  ? isPostBackendActive
                    ? "● PROSES POST (SIMPAN KE DB)..."
                    : "● STANDBY"
                  : isGetBackendActive
                    ? "● PROSES GET (AMBIL DARI DB)..."
                    : "● STANDBY"}
          </div>
        </div>

        {/* Code Editor Container */}
        <div
          style={{
            position: "relative",
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 14,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: FONT_MONO,
            fontSize: 22,
            lineHeight: 1.6,
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              BACKEND CODE A: GET ROUTE HANDLER
              ───────────────────────────────────────────────────────────── */}
          {frame < 290 && (
            <div
              style={{
                position: "absolute",
                inset: "20px 24px",
                opacity: act1Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Line 1: Route Signature */}
              <div style={{ color: "#f43f5e" }}>
                app.get(
                <span style={{ color: GET_POST_COLORS.cyanPrimary }}>
                  &apos;/api/users&apos;
                </span>
                , <span style={{ color: "#a855f7" }}>async</span> (req, res) =&gt;{" "}
                &#123;
              </div>

              {/* Line 2: DB Query */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 88 && frame < 150
                      ? "rgba(245, 158, 11, 0.15)"
                      : "transparent",
                  borderLeft:
                    frame >= 88 && frame < 150
                      ? `3px solid ${GET_POST_COLORS.amberPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f59e0b" }}>const</span> data ={" "}
                <span style={{ color: "#a855f7" }}>await</span>{" "}
                <span style={{ color: GET_POST_COLORS.amberPrimary, fontWeight: 700 }}>
                  db.users.findAll()
                </span>
                ;
              </div>

              {/* Line 3: Return Response */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 150 && frame < 212
                      ? "rgba(56, 189, 248, 0.15)"
                      : "transparent",
                  borderLeft:
                    frame >= 150 && frame < 212
                      ? `3px solid ${GET_POST_COLORS.cyanPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f43f5e" }}>return</span> res.
                <span style={{ color: GET_POST_COLORS.cyanPrimary, fontWeight: 700 }}>
                  json(data)
                </span>
                ;
              </div>

              {/* Line 4: Closing Bracket */}
              <div style={{ color: "#f43f5e", marginTop: 6 }}>&#125;);</div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              BACKEND CODE B: POST ROUTE HANDLER
              ───────────────────────────────────────────────────────────── */}
          {frame >= 280 && frame < 570 && (
            <div
              style={{
                position: "absolute",
                inset: "20px 24px",
                opacity: act2Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Line 1: Route Signature */}
              <div style={{ color: "#f43f5e" }}>
                app.post(
                <span style={{ color: GET_POST_COLORS.emeraldMint }}>
                  &apos;/api/users&apos;
                </span>
                , <span style={{ color: "#a855f7" }}>async</span> (req, res) =&gt;{" "}
                &#123;
              </div>

              {/* Line 2: DB Insert */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 425 && frame < 475
                      ? "rgba(245, 158, 11, 0.15)"
                      : "transparent",
                  borderLeft:
                    frame >= 425 && frame < 475
                      ? `3px solid ${GET_POST_COLORS.amberPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f59e0b" }}>const</span> newUser ={" "}
                <span style={{ color: "#a855f7" }}>await</span>{" "}
                <span style={{ color: GET_POST_COLORS.amberPrimary, fontWeight: 700 }}>
                  db.insert(req.body)
                </span>
                ;
              </div>

              {/* Line 3: Return 201 Response */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 475 && frame < 530
                      ? "rgba(16, 185, 129, 0.18)"
                      : "transparent",
                  borderLeft:
                    frame >= 475 && frame < 530
                      ? `3px solid ${GET_POST_COLORS.emeraldPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f43f5e" }}>return</span> res.
                <span style={{ color: "#f59e0b" }}>status</span>(
                <span style={{ color: GET_POST_COLORS.cyanPrimary }}>201</span>
                ).
                <span style={{ color: GET_POST_COLORS.emeraldMint, fontWeight: 700 }}>
                  json(newUser)
                </span>
                ;
              </div>

              {/* Line 4: Closing Bracket */}
              <div style={{ color: "#f43f5e", marginTop: 6 }}>&#125;);</div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              BACKEND CODE C: PUT ROUTE HANDLER
              ───────────────────────────────────────────────────────────── */}
          {frame >= 550 && frame < 860 && (
            <div
              style={{
                position: "absolute",
                inset: "20px 24px",
                opacity: act3Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Line 1: Route Signature */}
              <div style={{ color: "#f43f5e" }}>
                app.put(
                <span style={{ color: REST_API_COLORS.amberPrimary }}>
                  &apos;/api/users/:id&apos;
                </span>
                , <span style={{ color: "#a855f7" }}>async</span> (req, res) =&gt;{" "}
                &#123;
              </div>

              {/* Line 2: DB Update */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 705 && frame < 775
                      ? "rgba(245, 158, 11, 0.15)"
                      : "transparent",
                  borderLeft:
                    frame >= 705 && frame < 775
                      ? `3px solid ${REST_API_COLORS.amberPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f59e0b" }}>const</span> updated ={" "}
                <span style={{ color: "#a855f7" }}>await</span>{" "}
                <span style={{ color: REST_API_COLORS.amberPrimary, fontWeight: 700 }}>
                  db.update(req.params.id, req.body)
                </span>
                ;
              </div>

              {/* Line 3: Return 200 Response */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 775 && frame < 830
                      ? "rgba(245, 158, 11, 0.18)"
                      : "transparent",
                  borderLeft:
                    frame >= 775 && frame < 830
                      ? `3px solid ${REST_API_COLORS.amberPrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f43f5e" }}>return</span> res.
                <span style={{ color: REST_API_COLORS.amberPrimary, fontWeight: 700 }}>
                  json(updated)
                </span>
                ;
              </div>

              {/* Line 4: Closing Bracket */}
              <div style={{ color: "#f43f5e", marginTop: 6 }}>&#125;);</div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              BACKEND CODE D: DELETE ROUTE HANDLER
              ───────────────────────────────────────────────────────────── */}
          {frame >= 840 && (
            <div
              style={{
                position: "absolute",
                inset: "20px 24px",
                opacity: act4Opacity,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Line 1: Route Signature */}
              <div style={{ color: "#f43f5e" }}>
                app.delete(
                <span style={{ color: REST_API_COLORS.rosePrimary }}>
                  &apos;/api/users/:id&apos;
                </span>
                , <span style={{ color: "#a855f7" }}>async</span> (req, res) =&gt;{" "}
                &#123;
              </div>

              {/* Line 2: DB Delete */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 995 && frame < 1060
                      ? "rgba(244, 63, 94, 0.18)"
                      : "transparent",
                  borderLeft:
                    frame >= 995 && frame < 1060
                      ? `3px solid ${REST_API_COLORS.rosePrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f59e0b" }}>const</span> deleted ={" "}
                <span style={{ color: "#a855f7" }}>await</span>{" "}
                <span style={{ color: REST_API_COLORS.rosePrimary, fontWeight: 700 }}>
                  db.delete(req.params.id)
                </span>
                ;
              </div>

              {/* Line 3: Return Response */}
              <div
                style={{
                  paddingLeft: 32,
                  marginTop: 6,
                  backgroundColor:
                    frame >= 1060 && frame < 1120
                      ? "rgba(244, 63, 94, 0.18)"
                      : "transparent",
                  borderLeft:
                    frame >= 1060 && frame < 1120
                      ? `3px solid ${REST_API_COLORS.rosePrimary}`
                      : "3px solid transparent",
                }}
              >
                <span style={{ color: "#f43f5e" }}>return</span> res.
                <span style={{ color: "#f59e0b" }}>status</span>(
                <span style={{ color: GET_POST_COLORS.cyanPrimary }}>200</span>
                ).
                <span style={{ color: REST_API_COLORS.rosePrimary, fontWeight: 700 }}>
                  json(&#123; success: <span style={{ color: GET_POST_COLORS.cyanPrimary }}>true</span>, id: req.params.id &#125;)
                </span>
                ;
              </div>

              {/* Line 4: Closing Bracket */}
              <div style={{ color: "#f43f5e", marginTop: 6 }}>&#125;);</div>
            </div>
          )}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          GAP 2: CONDUIT LINES & INTERNAL BUS (BACKEND ↔ DATABASE)
          Symmetrical Conduits (Left: 320, Right: 760) Matching Gap 1
          ─────────────────────────────────────────────────────────────────── */}
      {/* Line C (Left): DB Query Conduit */}
      <div
        style={{
          position: "absolute",
          top: lineCYStart,
          left: conduitLeftX,
          width: 2,
          height: lineCYEnd - lineCYStart,
          backgroundColor:
            isGetDbQueryActive || isPostDbInsertActive || isPutDbQueryActive || isDeleteDbQueryActive
              ? (isAct4Delete ? REST_API_COLORS.rosePrimary : GET_POST_COLORS.amberPrimary)
              : "rgba(255, 255, 255, 0.12)",
          boxShadow:
            isGetDbQueryActive || isPostDbInsertActive || isPutDbQueryActive || isDeleteDbQueryActive
              ? `0 0 12px ${isAct4Delete ? REST_API_COLORS.roseGlow : GET_POST_COLORS.amberGlow}`
              : "none",
          zIndex: 5,
        }}
      />

      {/* Line D (Right): DB Return Conduit */}
      <div
        style={{
          position: "absolute",
          top: lineDYEnd,
          left: conduitRightX,
          width: 2,
          height: lineDYStart - lineDYEnd,
          backgroundColor:
            isGetDbReturnActive || isPostDbReturnActive || isPutDbReturnActive || isDeleteDbReturnActive
              ? (isAct4Delete ? REST_API_COLORS.rosePrimary : GET_POST_COLORS.amberPrimary)
              : "rgba(255, 255, 255, 0.12)",
          boxShadow:
            isGetDbReturnActive || isPostDbReturnActive || isPutDbReturnActive || isDeleteDbReturnActive
              ? `0 0 12px ${isAct4Delete ? REST_API_COLORS.roseGlow : GET_POST_COLORS.amberGlow}`
              : "none",
          zIndex: 5,
        }}
      />

      {/* Central Database Bus Status Pill */}
      <div
        style={{
          position: "absolute",
          top: 1268,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "5px 16px",
          borderRadius: 999,
          backgroundColor: "rgba(6, 9, 19, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          fontFamily: FONT_MONO,
          fontSize: 12,
          fontWeight: 700,
          color: isDbActive
            ? GET_POST_COLORS.amberPrimary
            : GET_POST_COLORS.textMuted,
          zIndex: 20,
        }}
      >
        <FaDatabase size={12} />
        <span>INTERNAL DATABASE BUS</span>
      </div>

      {/* Flowing Packets (Gap 2) */}
      {/* 1. GET SQL Query Packet (Backend -> DB) */}
      {isGetDbQueryActive && (
        <div
          style={{
            position: "absolute",
            top: packetGetDbY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${GET_POST_COLORS.amberPrimary}`,
            boxShadow: `0 0 12px ${GET_POST_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: GET_POST_COLORS.amberPrimary,
            }}
          >
            SELECT * FROM users ↓
          </span>
        </div>
      )}

      {/* 2. GET DB Return Packet (DB -> Backend) */}
      {isGetDbReturnActive && (
        <div
          style={{
            position: "absolute",
            top: packetGetDbRetY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${GET_POST_COLORS.amberPrimary}`,
            boxShadow: `0 0 12px ${GET_POST_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: GET_POST_COLORS.amberPrimary,
            }}
          >
            3 Rows Returned ↑
          </span>
        </div>
      )}

      {/* 3. POST SQL Insert Packet (Backend -> DB) */}
      {isPostDbInsertActive && (
        <div
          style={{
            position: "absolute",
            top: packetPostDbY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${GET_POST_COLORS.amberPrimary}`,
            boxShadow: `0 0 12px ${GET_POST_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: GET_POST_COLORS.amberPrimary,
            }}
          >
            INSERT INTO users ↓
          </span>
        </div>
      )}

      {/* 4. POST DB Confirmation Packet (DB -> Backend) */}
      {isPostDbReturnActive && (
        <div
          style={{
            position: "absolute",
            top: packetPostDbRetY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${GET_POST_COLORS.emeraldMint}`,
            boxShadow: `0 0 12px ${GET_POST_COLORS.emeraldGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: GET_POST_COLORS.emeraldMint,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: GET_POST_COLORS.emeraldMint,
            }}
          >
            1 Row Inserted (ID: 4) ↑
          </span>
        </div>
      )}

      {/* 5. PUT SQL Update Packet (Backend -> DB) */}
      {isPutDbQueryActive && (
        <div
          style={{
            position: "absolute",
            top: packetPutDbY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${REST_API_COLORS.amberPrimary}`,
            boxShadow: `0 0 12px ${REST_API_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: REST_API_COLORS.amberPrimary,
            }}
          >
            UPDATE users WHERE id = 2 ↓
          </span>
        </div>
      )}

      {/* 6. PUT DB Return Packet (DB -> Backend) */}
      {isPutDbReturnActive && (
        <div
          style={{
            position: "absolute",
            top: packetPutDbRetY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${REST_API_COLORS.amberPrimary}`,
            boxShadow: `0 0 12px ${REST_API_COLORS.amberGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.amberPrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: REST_API_COLORS.amberPrimary,
            }}
          >
            1 Row Updated (ID: 2) ↑
          </span>
        </div>
      )}

      {/* 7. DELETE SQL Delete Packet (Backend -> DB) */}
      {isDeleteDbQueryActive && (
        <div
          style={{
            position: "absolute",
            top: packetDeleteDbY,
            left: conduitLeftX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${REST_API_COLORS.rosePrimary}`,
            boxShadow: `0 0 12px ${REST_API_COLORS.roseGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.rosePrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: REST_API_COLORS.rosePrimary,
            }}
          >
            DELETE FROM users WHERE id = 4 ↓
          </span>
        </div>
      )}

      {/* 8. DELETE DB Return Packet (DB -> Backend) */}
      {isDeleteDbReturnActive && (
        <div
          style={{
            position: "absolute",
            top: packetDeleteDbRetY,
            left: conduitRightX,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 999,
            backgroundColor: GET_POST_COLORS.bgDark,
            border: `1px solid ${REST_API_COLORS.rosePrimary}`,
            boxShadow: `0 0 12px ${REST_API_COLORS.roseGlow}`,
            zIndex: 30,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: REST_API_COLORS.rosePrimary,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 800,
              color: REST_API_COLORS.rosePrimary,
            }}
          >
            1 Row Deleted (ID: 4) ↑
          </span>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          TIER 3 (BOTTOM): DATABASE (POSTGRESQL)
          Real Column-Based Table with Live Dynamic Row 4 Insertion, Row 2 Update & Row 4 Deletion!
          ─────────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 1350,
          width: 940,
          height: 380,
          backgroundColor: GET_POST_COLORS.surfaceCard,
          border: `1.5px solid ${
            isDbActive
              ? isAct4Delete
                ? REST_API_COLORS.rosePrimary
                : isAct3Put
                  ? REST_API_COLORS.amberPrimary
                  : isAct2Post
                    ? GET_POST_COLORS.emeraldPrimary
                    : GET_POST_COLORS.amberPrimary
              : "rgba(255, 255, 255, 0.12)"
          }`,
          boxShadow: isDbActive
            ? `0 0 45px ${
                isAct4Delete
                  ? REST_API_COLORS.roseGlow
                  : isAct3Put
                    ? REST_API_COLORS.amberGlow
                    : isAct2Post
                      ? GET_POST_COLORS.emeraldGlow
                      : GET_POST_COLORS.amberGlow
              }, 0 20px 40px rgba(0,0,0,0.6)`
            : "0 20px 40px rgba(0,0,0,0.5)",
          borderRadius: 24,
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px",
          zIndex: 10,
        }}
      >
        {/* Database Topbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: GET_POST_COLORS.amberPrimary,
              }}
            >
              <FaDatabase size={18} />
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: GET_POST_COLORS.textPrimary,
              }}
            >
              DATABASE (POSTGRESQL)
            </span>
          </div>

          <div
            style={{
              padding: "4px 14px",
              borderRadius: 999,
              backgroundColor: isAct4Delete
                ? "rgba(244, 63, 94, 0.15)"
                : "rgba(245, 158, 11, 0.15)",
              border: `1px solid ${
                isAct4Delete
                  ? dbRow4Deleted
                    ? REST_API_COLORS.rosePrimary
                    : "rgba(244, 63, 94, 0.5)"
                  : isAct3Put
                    ? dbRow2Updated
                      ? REST_API_COLORS.amberPrimary
                      : "rgba(255, 255, 255, 0.2)"
                    : dbRow4Inserted
                      ? GET_POST_COLORS.emeraldMint
                      : GET_POST_COLORS.amberPrimary
              }`,
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: isAct4Delete
                ? dbRow4Deleted
                  ? REST_API_COLORS.rosePrimary
                  : GET_POST_COLORS.textPrimary
                : isAct3Put
                  ? dbRow2Updated
                    ? REST_API_COLORS.amberPrimary
                    : GET_POST_COLORS.textPrimary
                  : dbRow4Inserted
                    ? GET_POST_COLORS.emeraldMint
                    : GET_POST_COLORS.amberPrimary,
            }}
          >
            {isAct4Delete
              ? dbRow4Deleted
                ? "TABEL: users (-1 DIHAPUS)"
                : "TABEL: users (TARGET ID: 4)"
              : isAct3Put
                ? dbRow2Updated
                  ? "TABEL: users (ROW #2 UPDATED)"
                  : "TABEL: users (4 ROWS)"
                : dbRow4Inserted
                  ? "TABEL: users (+1 BARU)"
                  : "TABEL: users (3 ROWS)"}
          </div>
        </div>

        {/* Database Table Container */}
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 14,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Table Header Columns */}
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "12px 20px",
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: GET_POST_COLORS.amberPrimary,
              letterSpacing: 1,
            }}
          >
            <div style={{ width: "10%" }}>#ID</div>
            <div style={{ width: "38%" }}>NAMA</div>
            <div style={{ width: "34%" }}>ROLE</div>
            <div style={{ width: "18%", textAlign: "right" }}>STATUS</div>
          </div>

          {/* Table Rows Container */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "4px 10px",
            }}
          >
            {/* Row 1 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 8,
                backgroundColor:
                  isAct1Get && getDbRow1Active
                    ? "rgba(56, 189, 248, 0.15)"
                    : "transparent",
                border:
                  isAct1Get && getDbRow1Active
                    ? "1px solid rgba(56, 189, 248, 0.3)"
                    : "1px solid transparent",
                fontFamily: FONT_MONO,
                fontSize: 14,
              }}
            >
              <div style={{ width: "10%", color: GET_POST_COLORS.textMuted }}>1</div>
              <div style={{ width: "38%", fontWeight: 700 }}>Budi Pratama</div>
              <div style={{ width: "34%", color: GET_POST_COLORS.textSecondary }}>Frontend Dev</div>
              <div style={{ width: "18%", textAlign: "right", color: GET_POST_COLORS.textMuted, fontSize: 11 }}>
                READY
              </div>
            </div>

            {/* Row 2: Live Morph / Update in PUT (No highlight in DELETE) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 8,
                backgroundColor:
                  isAct3Put && dbRow2Updated
                    ? "rgba(245, 158, 11, 0.22)"
                    : isAct1Get && getDbRow2Active
                      ? "rgba(56, 189, 248, 0.15)"
                      : "transparent",
                border:
                  isAct3Put && dbRow2Updated
                    ? `1.5px solid ${REST_API_COLORS.amberPrimary}`
                    : isAct1Get && getDbRow2Active
                      ? "1px solid rgba(56, 189, 248, 0.3)"
                      : "1px solid transparent",
                boxShadow:
                  isAct3Put && dbRow2Updated
                    ? `0 0 16px ${REST_API_COLORS.amberGlow}`
                    : "none",
                transform:
                  isAct3Put && dbRow2Updated
                    ? `scale(${interpolate(spRow2Update, [0, 1], [0.95, 1])})`
                    : "scale(1)",
                fontFamily: FONT_MONO,
                fontSize: 14,
              }}
            >
              <div
                style={{
                  width: "10%",
                  color: isAct3Put && dbRow2Updated ? REST_API_COLORS.amberPrimary : GET_POST_COLORS.textMuted,
                  fontWeight: isAct3Put && dbRow2Updated ? 800 : 400,
                }}
              >
                2
              </div>
              <div style={{ width: "38%", fontWeight: 700 }}>Siti Rahma</div>
              <div
                style={{
                  width: "34%",
                  color:
                    isAct3Put && dbRow2Updated
                      ? REST_API_COLORS.amberPrimary
                      : GET_POST_COLORS.textSecondary,
                  fontWeight: isAct3Put && dbRow2Updated ? 700 : 400,
                }}
              >
                {isAct3Put || isAct4Delete ? "Lead UI/UX Designer" : "UI/UX Designer"}
              </div>
              <div
                style={{
                  width: "18%",
                  textAlign: "right",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: isAct3Put && dbRow2Updated ? 800 : 400,
                }}
              >
                {isAct3Put && dbRow2Updated ? (
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: "rgba(245, 158, 11, 0.25)",
                      border: "1px solid rgba(245, 158, 11, 0.6)",
                      color: REST_API_COLORS.amberPrimary,
                    }}
                  >
                    UPDATED
                  </span>
                ) : (
                  <span style={{ color: GET_POST_COLORS.textMuted }}>READY</span>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 8,
                backgroundColor:
                  isAct1Get && getDbRow3Active
                    ? "rgba(56, 189, 248, 0.15)"
                    : "transparent",
                border:
                  isAct1Get && getDbRow3Active
                    ? "1px solid rgba(56, 189, 248, 0.3)"
                    : "1px solid transparent",
                fontFamily: FONT_MONO,
                fontSize: 14,
              }}
            >
              <div style={{ width: "10%", color: GET_POST_COLORS.textMuted }}>3</div>
              <div style={{ width: "38%", fontWeight: 700 }}>Rian Hidayat</div>
              <div style={{ width: "34%", color: GET_POST_COLORS.textSecondary }}>Backend Dev</div>
              <div style={{ width: "18%", textAlign: "right", color: GET_POST_COLORS.textMuted, fontSize: 11 }}>
                READY
              </div>
            </div>

            {/* Row 4: Dynamic Live Insertion (POST), Active in PUT, and Live Deletion in DELETE */}
            {(() => {
              const isRow4Active = (dbRow4Inserted && isAct2Post) || isAct3Put || isAct4Delete;
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 10px",
                    borderRadius: 8,
                    backgroundColor: isAct4Delete
                      ? dbRow4Deleted
                        ? "rgba(244, 63, 94, 0.12)"
                        : "rgba(244, 63, 94, 0.08)"
                      : isAct3Put
                        ? "rgba(255, 255, 255, 0.03)"
                        : isRow4Active
                          ? "rgba(16, 185, 129, 0.18)"
                          : "transparent",
                    border: isAct4Delete
                      ? dbRow4Deleted
                        ? `1.5px dashed ${REST_API_COLORS.rosePrimary}`
                        : `1px solid ${REST_API_COLORS.rosePrimary}`
                      : isAct3Put
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : isRow4Active
                          ? `1px solid ${GET_POST_COLORS.emeraldMint}`
                          : "1px solid transparent",
                    boxShadow: isAct4Delete
                      ? dbRow4Deleted
                        ? `0 0 18px ${REST_API_COLORS.roseGlow}`
                        : `0 0 12px ${REST_API_COLORS.roseGlow}`
                      : isAct2Post && isRow4Active
                        ? `0 0 16px ${GET_POST_COLORS.emeraldGlow}`
                        : "none",
                    fontFamily: FONT_MONO,
                    fontSize: 14,
                    transform: isAct4Delete && dbRow4Deleted
                      ? `scale(${interpolate(spRow4Delete, [0, 0.2, 1], [1, 0.96, 1])})`
                      : isRow4Active
                        ? `scale(${interpolate(spRow4, [0, 1], [0.95, 1])})`
                        : "scale(1)",
                    opacity: isAct4Delete
                      ? dbRow4Deleted
                        ? interpolate(spRow4Delete, [0, 1], [1, 0.45])
                        : 1
                      : isAct3Put
                        ? 1
                        : isRow4Active
                          ? interpolate(spRow4, [0, 0.3, 1], [0, 1, 1])
                          : 0,
                    pointerEvents: isRow4Active ? "auto" : "none",
                  }}
                >
                  {isRow4Active ? (
                    <>
                      <div
                        style={{
                          width: "10%",
                          color: isAct4Delete
                            ? REST_API_COLORS.rosePrimary
                            : isAct3Put
                              ? GET_POST_COLORS.textPrimary
                              : GET_POST_COLORS.emeraldMint,
                          fontWeight: 800,
                          textDecoration: isAct4Delete && dbRow4Deleted ? "line-through" : "none",
                        }}
                      >
                        4
                      </div>
                      <div
                        style={{
                          width: "38%",
                          fontWeight: 700,
                          color: isAct4Delete
                            ? dbRow4Deleted
                              ? "rgba(255, 255, 255, 0.5)"
                              : "#ffffff"
                            : GET_POST_COLORS.textPrimary,
                          textDecoration: isAct4Delete && dbRow4Deleted ? "line-through" : "none",
                        }}
                      >
                        Dewi Sartika
                      </div>
                      <div
                        style={{
                          width: "34%",
                          color: isAct4Delete
                            ? dbRow4Deleted
                              ? "rgba(255, 255, 255, 0.4)"
                              : REST_API_COLORS.rosePrimary
                            : GET_POST_COLORS.textSecondary,
                          textDecoration: isAct4Delete && dbRow4Deleted ? "line-through" : "none",
                        }}
                      >
                        Product Manager
                      </div>
                      <div
                        style={{
                          width: "18%",
                          textAlign: "right",
                          fontFamily: FONT_MONO,
                          fontSize: 11,
                          fontWeight: 800,
                          color: isAct4Delete
                            ? REST_API_COLORS.rosePrimary
                            : isAct3Put
                              ? GET_POST_COLORS.textMuted
                              : GET_POST_COLORS.emeraldMint,
                        }}
                      >
                        {isAct4Delete ? (
                          dbRow4Deleted ? (
                            <span
                              style={{
                                padding: "2px 8px",
                                borderRadius: 4,
                                backgroundColor: "rgba(244, 63, 94, 0.25)",
                                border: "1px solid rgba(244, 63, 94, 0.6)",
                                color: REST_API_COLORS.rosePrimary,
                              }}
                            >
                              DIHAPUS
                            </span>
                          ) : (
                            <span
                              style={{
                                padding: "2px 8px",
                                borderRadius: 4,
                                backgroundColor: "rgba(244, 63, 94, 0.15)",
                                border: "1px dashed rgba(244, 63, 94, 0.4)",
                                color: REST_API_COLORS.rosePrimary,
                              }}
                            >
                              TARGET
                            </span>
                          )
                        ) : isAct3Put ? (
                          <span style={{ color: GET_POST_COLORS.textMuted }}>READY</span>
                        ) : (
                          <span
                            style={{
                              padding: "2px 8px",
                              borderRadius: 4,
                              backgroundColor: "rgba(16, 185, 129, 0.2)",
                              border: "1px solid rgba(16, 185, 129, 0.4)",
                            }}
                          >
                            TERSIMPAN
                          </span>
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UnifiedGetPostIllustration = UnifiedRestApiIllustration;
