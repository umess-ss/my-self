import React from "react";

/**
 * Subtle decorative background with abstract wave lines and arrow patterns.
 * Place behind content with position: relative on the parent + z-index layering.
 *
 * Props:
 *  - variant: "waves" | "arrows" | "both" (default: "both")
 *  - opacity: 0–1 (default: 0.07)
 *  - colorClass: tailwind text color for strokes (default: "text-sky-400")
 *  - flip: flip vertically (default: false)
 */
const AbstractBackground = React.memo(function AbstractBackground({
  variant = "both",
  opacity = 0.07,
  colorClass = "text-sky-400",
  flip = false,
}) {
  const showWaves = variant === "waves" || variant === "both";
  const showArrows = variant === "arrows" || variant === "both";

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 0,
        opacity,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      {/* ── Wave Lines ─────────────────────────────────── */}
      {showWaves && (
        <svg
          className={`absolute w-full h-full ${colorClass}`}
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave 1 — sweeping top-left to bottom-right */}
          <path
            d="M-50 280 C200 180, 400 420, 720 320 S1100 180, 1500 300"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Wave 2 — lower, wider */}
          <path
            d="M-80 520 C180 420, 500 620, 780 500 S1150 380, 1520 540"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Wave 3 — gentle arc across top */}
          <path
            d="M-30 120 C300 60, 600 200, 900 140 S1200 60, 1500 160"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Wave 4 — bottom area */}
          <path
            d="M0 750 C280 680, 560 800, 840 720 S1120 640, 1440 780"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* ── Arrow / Chevron Patterns ──────────────────── */}
      {showArrows && (
        <svg
          className={`absolute w-full h-full ${colorClass}`}
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scattered arrow-chevrons */}
          {/* Top-left cluster */}
          <g strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="80,100 95,85 110,100" />
            <polyline points="80,115 95,100 110,115" />
          </g>
          <g strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="60,180 75,165 90,180" />
            <polyline points="60,195 75,180 90,195" />
          </g>

          {/* Top-right cluster */}
          <g strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="rotate(45, 1320, 120)">
            <polyline points="1305,120 1320,105 1335,120" />
            <polyline points="1305,135 1320,120 1335,135" />
          </g>
          <g strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-30, 1380, 200)">
            <polyline points="1365,200 1380,185 1395,200" />
          </g>

          {/* Middle-left scattered */}
          <g strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="40,450 55,435 70,450" />
            <polyline points="40,465 55,450 70,465" />
            <polyline points="40,480 55,465 70,480" />
          </g>

          {/* Middle-right */}
          <g strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90, 1380, 450)">
            <polyline points="1365,450 1380,435 1395,450" />
            <polyline points="1365,465 1380,450 1395,465" />
          </g>

          {/* Bottom-left */}
          <g strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="130,750 145,735 160,750" />
          </g>
          <g strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="100,800 115,785 130,800" />
            <polyline points="100,815 115,800 130,815" />
          </g>

          {/* Bottom-right cluster */}
          <g strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45, 1300, 780)">
            <polyline points="1285,780 1300,765 1315,780" />
            <polyline points="1285,795 1300,780 1315,795" />
            <polyline points="1285,810 1300,795 1315,810" />
          </g>

          {/* Dot accents — small circles */}
          <circle cx="200" cy="300" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="1250" cy="350" r="2.5" fill="currentColor" opacity="0.4" />
          <circle cx="700" cy="150" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="950" cy="700" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="300" cy="650" r="2" fill="currentColor" opacity="0.3" />

          {/* Diagonal dash lines */}
          <line x1="180" y1="400" x2="220" y2="360" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          <line x1="1200" y1="500" x2="1250" y2="460" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          <line x1="350" y1="700" x2="390" y2="660" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="1050" y1="200" x2="1090" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        </svg>
      )}
    </div>
  );
});

export default AbstractBackground;
