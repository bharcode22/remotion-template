import React from "react";
import { useCurrentFrame } from "remotion";
import { STATIONS } from "../constants";

export const SpatialWorldBridges: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle moving dash animation along connectors
  const pulseDash = (frame * 6) % 60;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 8000,
        height: 4000,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {/* 1. BRIDGE 1 -> 2: Vertical Studio Track (0, 0) -> (0, 1400) */}
      <g opacity={frame >= 40 && frame <= 110 ? 0.65 : 0}>
        <line
          x1={STATIONS[0].x + 540}
          y1={STATIONS[0].y + 1350}
          x2={STATIONS[1].x + 540}
          y2={STATIONS[1].y + 270}
          stroke="#FF9500"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeDashoffset={-pulseDash}
        />
      </g>

      {/* 2. BRIDGE 2 -> 3: Diagonal Studio Track (0, 1400) -> (1400, 2400) */}
      <g opacity={frame >= 135 && frame <= 200 ? 0.7 : 0}>
        <path
          d={`M ${STATIONS[1].x + 750} ${STATIONS[1].y + 1100} Q ${STATIONS[1].x + 1100} ${STATIONS[1].y + 1400}, ${STATIONS[2].x + 350} ${STATIONS[2].y + 400}`}
          fill="none"
          stroke="#34C759"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeDashoffset={-pulseDash}
        />
      </g>

      {/* 3. BRIDGE 3 -> 4: Horizontal Track (1400, 2400) -> (2800, 2400) */}
      <g opacity={frame >= 215 && frame <= 280 ? 0.75 : 0}>
        <line
          x1={STATIONS[2].x + 850}
          y1={STATIONS[2].y + 960}
          x2={STATIONS[3].x + 230}
          y2={STATIONS[3].y + 960}
          stroke="#0071E3"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeDashoffset={-pulseDash}
        />
      </g>

      {/* 4. BRIDGE 4 -> 5: Triple Clean Bus (2800, 2400) -> (4200, 2400) */}
      <g opacity={frame >= 285 && frame <= 360 ? 0.7 : 0}>
        <line
          x1={STATIONS[3].x + 840}
          y1={STATIONS[3].y + 900}
          x2={STATIONS[4].x + 200}
          y2={STATIONS[4].y + 860}
          stroke="#E44D26"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeDashoffset={-pulseDash}
        />
        <line
          x1={STATIONS[3].x + 840}
          y1={STATIONS[3].y + 960}
          x2={STATIONS[4].x + 200}
          y2={STATIONS[4].y + 960}
          stroke="#0071E3"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeDashoffset={-pulseDash}
        />
        <line
          x1={STATIONS[3].x + 840}
          y1={STATIONS[3].y + 1020}
          x2={STATIONS[4].x + 200}
          y2={STATIONS[4].y + 1060}
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeDashoffset={-pulseDash}
        />
      </g>

      {/* 5. BRIDGE 5 -> 6: Diagonal Upward Track (4200, 2400) -> (5400, 1200) */}
      <g opacity={frame >= 490 && frame <= 560 ? 0.7 : 0}>
        <path
          d={`M ${STATIONS[4].x + 850} ${STATIONS[4].y + 900} Q ${STATIONS[4].x + 1100} ${STATIONS[4].y + 500}, ${STATIONS[5].x + 300} ${STATIONS[5].y + 960}`}
          fill="none"
          stroke="#0071E3"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeDashoffset={-pulseDash}
        />
      </g>

      {/* 6. BRIDGE 6 -> 7: Multi-OS Track (5400, 1200) -> (6800, 0) */}
      <g opacity={frame >= 670 && frame <= 745 ? 0.75 : 0}>
        <path
          d={`M ${STATIONS[5].x + 850} ${STATIONS[5].y + 960} C ${STATIONS[5].x + 1100} ${STATIONS[5].y + 600}, ${STATIONS[6].x + 100} ${STATIONS[6].y + 1100}, ${STATIONS[6].x + 300} ${STATIONS[6].y + 880}`}
          fill="none"
          stroke="#0071E3"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeDashoffset={-pulseDash}
        />
      </g>
    </svg>
  );
};
