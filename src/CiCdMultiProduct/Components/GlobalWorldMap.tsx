import React from "react";
import { useCurrentFrame } from "remotion";
import { FaGlobeAmericas } from "react-icons/fa";

const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// ─────────────────────────────────────────────────────────────────────────────
// 🗺️ CONTINENT SVG PATH DATA (920 x 460 Standard Equirectangular Projection)
// ─────────────────────────────────────────────────────────────────────────────
const CONTINENTS = {
  // North America
  na: "M 38,48 L 128,41 L 243,48 L 294,79 L 319,117 L 294,130 L 256,174 L 256,190 L 212,200 L 222,219 L 243,238 L 261,244 L 225,225 L 192,206 L 161,168 L 146,149 L 141,117 L 107,86 L 77,79 L 38,79 L 31,60 Z",
  // Greenland
  greenland: "M 345,35 L 420,30 L 405,75 L 340,70 Z",
  // South America
  sa: "M 276,232 L 302,238 L 327,254 L 358,279 L 371,295 L 355,339 L 319,381 L 294,412 L 286,444 L 273,438 L 273,397 L 281,349 L 279,327 L 253,286 L 263,254 L 268,238 Z",
  // Europe
  eu: "M 532,44 L 575,54 L 588,79 L 562,95 L 567,111 L 532,136 L 532,155 L 516,149 L 498,155 L 437,149 L 437,130 L 450,117 L 480,98 L 491,86 L 491,63 L 511,48 Z",
  // UK & Ireland
  uk: "M 458,95 L 485,90 L 480,115 L 455,115 Z",
  // Africa
  af: "M 447,155 L 486,152 L 524,168 L 542,174 L 567,222 L 590,232 L 567,270 L 562,308 L 544,349 L 526,378 L 506,378 L 498,358 L 491,317 L 486,286 L 465,254 L 447,254 L 419,232 L 417,200 L 437,168 Z",
  // Madagascar
  madagascar: "M 588,320 L 608,320 L 598,365 L 583,355 Z",
  // Asia
  as: "M 728,32 L 818,48 L 910,48 L 894,79 L 869,79 L 818,102 L 792,143 L 787,159 L 754,200 L 728,238 L 726,263 L 716,238 L 705,222 L 685,200 L 664,232 L 634,190 L 606,190 L 583,174 L 588,136 L 613,105 L 613,79 L 652,48 Z",
  // Japan
  japan: "M 835,135 L 855,150 L 845,185 L 830,175 Z",
  // Indonesia & Malaysia
  indonesia: "M 720,275 L 785,295 L 770,315 L 710,290 Z",
  borneo: "M 760,255 L 790,255 L 785,285 L 755,280 Z",
  philippines: "M 795,215 L 815,230 L 810,260 L 790,245 Z",
  // Australia
  au: "M 797,308 L 823,308 L 843,339 L 851,371 L 838,390 L 818,390 L 797,371 L 767,371 L 751,339 L 772,320 L 787,314 Z",
};

// ─────────────────────────────────────────────────────────────────────────────
// 📍 GLOBAL SERVER CLUSTER NODES (Coordinates on 920 x 460 viewBox)
// ─────────────────────────────────────────────────────────────────────────────
const SERVER_NODES = [
  // US Americas
  { id: "us-west", name: "Silicon Valley", x: 148, y: 152, region: "Americas", color: "#fc6d26" },
  { id: "us-east", name: "N. Virginia", x: 272, y: 146, region: "Americas", color: "#fc6d26" },
  { id: "us-central", name: "Chicago", x: 225, y: 140, region: "Americas", color: "#fc6d26" },
  { id: "sa-brazil", name: "São Paulo", x: 356, y: 350, region: "Americas", color: "#fc6d26" },

  // Europe
  { id: "eu-london", name: "London", x: 474, y: 108, region: "Europe", color: "#c084fc" },
  { id: "eu-frankfurt", name: "Frankfurt", x: 512, y: 116, region: "Europe", color: "#c084fc" },
  { id: "eu-amsterdam", name: "Amsterdam", x: 494, y: 106, region: "Europe", color: "#c084fc" },
  { id: "eu-stockholm", name: "Stockholm", x: 532, y: 84, region: "Europe", color: "#c084fc" },

  // Middle East & Africa
  { id: "me-dubai", name: "Dubai", x: 615, y: 196, region: "Middle East", color: "#38bdf8" },
  { id: "af-capetown", name: "Cape Town", x: 526, y: 388, region: "Africa", color: "#38bdf8" },

  // Asia-Pacific
  { id: "in-mumbai", name: "Mumbai", x: 682, y: 216, region: "Asia", color: "#38bdf8" },
  { id: "sea-singapore", name: "Singapore", x: 755, y: 276, region: "Asia", color: "#38bdf8" },
  { id: "sea-jakarta", name: "Jakarta", x: 765, y: 304, region: "Asia", color: "#38bdf8" },
  { id: "jp-tokyo", name: "Tokyo", x: 845, y: 160, region: "Asia", color: "#38bdf8" },
  { id: "kr-seoul", name: "Seoul", x: 815, y: 154, region: "Asia", color: "#38bdf8" },
  { id: "au-sydney", name: "Sydney", x: 878, y: 388, region: "Oceania", color: "#10b981" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 GEODESIC CONNECTING ARCS (Bézier curves between hubs)
// ─────────────────────────────────────────────────────────────────────────────
const CONNECTING_ARCS = [
  // Trans-Atlantic: Virginia -> London
  { from: [272, 146], to: [474, 108], cp: [360, 70], color: "#fc6d26" },
  // Europe Core: London -> Frankfurt
  { from: [474, 108], to: [512, 116], cp: [493, 100], color: "#c084fc" },
  // Euro-Asian Highway: Frankfurt -> Dubai -> Mumbai
  { from: [512, 116], to: [615, 196], cp: [570, 130], color: "#38bdf8" },
  { from: [615, 196], to: [682, 216], cp: [650, 190], color: "#38bdf8" },
  // Asian Backbone: Mumbai -> Singapore -> Tokyo
  { from: [682, 216], to: [755, 276], cp: [710, 260], color: "#38bdf8" },
  { from: [755, 276], to: [845, 160], cp: [820, 230], color: "#38bdf8" },
  // Pan-American: Virginia -> São Paulo
  { from: [272, 146], to: [356, 350], cp: [330, 240], color: "#fc6d26" },
  // Trans-Pacific Edge: Singapore -> Sydney
  { from: [755, 276], to: [878, 388], cp: [820, 350], color: "#10b981" },
];

export interface GlobalWorldMapProps {
  serverCount: number;
}

export const GlobalWorldMap: React.FC<GlobalWorldMapProps> = ({
  serverCount,
}) => {
  const frame = useCurrentFrame();

  // Radar scanner laser sweep across the map (left to right)
  const scanlineX = ((frame * 7) % 920);

  // Pulse oscillation
  const pulse = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  return (
    <div
      style={{
        width: 960,
        borderRadius: 24,
        backgroundColor: "rgba(10, 18, 36, 0.96)",
        border: "2px solid rgba(56, 189, 248, 0.65)",
        boxShadow:
          "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(56, 189, 248, 0.3)",
        padding: "22px 24px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. MAP HEADER & ROLLING COUNTER
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: "rgba(56, 189, 248, 0.2)",
              border: "1.5px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)",
            }}
          >
            <FaGlobeAmericas size={20} color="#38bdf8" />
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#f8fafc" }}>
              Peta Distribusi Global
            </div>
          </div>
        </div>

        {/* Big Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            backgroundColor: "rgba(252, 109, 38, 0.18)",
            padding: "8px 18px",
            borderRadius: 12,
            border: "1.5px solid rgba(252, 109, 38, 0.6)",
            boxShadow: `0 0 ${15 + pulse * 15}px rgba(252, 109, 38, 0.4)`,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              fontFamily: FONT_MONO,
              color: "#fc6d26",
            }}
          >
            {serverCount}+
          </span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 900,
              fontFamily: FONT_MONO,
              color: "#f8fafc",
              letterSpacing: 1,
            }}
          >
            SERVERS
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HOLOGRAPHIC CYBER WORLD MAP SVG (912 x 460)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 460,
          backgroundColor: "rgba(6, 12, 26, 0.95)",
          borderRadius: 18,
          border: "1.5px solid rgba(56, 189, 248, 0.35)",
          overflow: "hidden",
          boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.8)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 920 460"
          fill="none"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="gridBeam" x1="0" y1="0" x2="0" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.05)" />
              <stop offset="50%" stopColor="rgba(56, 189, 248, 0.15)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.05)" />
            </linearGradient>
            <linearGradient id="scanGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
              <stop offset="50%" stopColor="rgba(56, 189, 248, 0.35)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </linearGradient>
          </defs>

          {/* Latitude & Longitude Coordinate Grid */}
          <line x1="0" y1="115" x2="920" y2="115" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
          <line x1="0" y1="230" x2="920" y2="230" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1.2" strokeDasharray="6 6" />
          <line x1="0" y1="345" x2="920" y2="345" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
          <line x1="230" y1="0" x2="230" y2="460" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
          <line x1="460" y1="0" x2="460" y2="460" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1.2" strokeDasharray="6 6" />
          <line x1="690" y1="0" x2="690" y2="460" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />

          {/* Continents Landmass Shapes */}
          {Object.entries(CONTINENTS).map(([key, pathData]) => (
            <path
              key={key}
              d={pathData}
              fill="rgba(56, 189, 248, 0.09)"
              stroke="rgba(56, 189, 248, 0.55)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.25))",
              }}
            />
          ))}

          {/* Geodesic Flight/Data Arcs connecting Global Hubs */}
          {CONNECTING_ARCS.map((arc, i) => {
            const arcPath = `M ${arc.from[0]},${arc.from[1]} Q ${arc.cp[0]},${arc.cp[1]} ${arc.to[0]},${arc.to[1]}`;
            // Moving light packet along the arc
            const packetT = ((frame * 0.04 + i * 0.2) % 1);
            // Quadratic bezier formula: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
            const packetX =
              (1 - packetT) * (1 - packetT) * arc.from[0] +
              2 * (1 - packetT) * packetT * arc.cp[0] +
              packetT * packetT * arc.to[0];
            const packetY =
              (1 - packetT) * (1 - packetT) * arc.from[1] +
              2 * (1 - packetT) * packetT * arc.cp[1] +
              packetT * packetT * arc.to[1];

            return (
              <g key={i}>
                {/* Arc Track */}
                <path
                  d={arcPath}
                  stroke={arc.color}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.45"
                  fill="none"
                />
                {/* Traveling Energy Packet */}
                <circle
                  cx={packetX}
                  cy={packetY}
                  r="3.5"
                  fill="#ffffff"
                  style={{
                    filter: `drop-shadow(0 0 6px ${arc.color}) drop-shadow(0 0 12px #ffffff)`,
                  }}
                />
              </g>
            );
          })}

          {/* Holographic Radar Scanner Laser Sweep Line */}
          <rect
            x={scanlineX - 40}
            y="0"
            width="80"
            height="460"
            fill="url(#scanGlow)"
            pointerEvents="none"
          />
          <line
            x1={scanlineX}
            y1="0"
            x2={scanlineX}
            y2="460"
            stroke="rgba(56, 189, 248, 0.85)"
            strokeWidth="1.5"
            style={{
              filter: "drop-shadow(0 0 8px #38bdf8)",
            }}
          />

          {/* Server Nodes (Pins & Animated Radar Waves) */}
          {SERVER_NODES.map((node, i) => {
            const nodePulse = ((frame + i * 7) % 25) / 25;
            const ringRadius = 5 + nodePulse * 16;
            const ringOpacity = 1 - nodePulse;

            return (
              <g key={node.id}>
                {/* Expanding Radar Ping Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={ringRadius}
                  stroke={node.color}
                  strokeWidth="1.5"
                  fill="none"
                  opacity={ringOpacity}
                />
                {/* Outer Glow Halo */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="7"
                  fill={node.color}
                  opacity="0.25"
                />
                {/* Solid Core Dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="#ffffff"
                  stroke={node.color}
                  strokeWidth="2"
                  style={{
                    filter: `drop-shadow(0 0 8px ${node.color})`,
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
