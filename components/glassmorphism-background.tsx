export function GlassmorphismBackground() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0f0a1e]">
      {/* Abstract purple gradient shapes */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Large abstract curved shape */}
        <path
          d="M-50 300 Q100 200, 200 350 T450 280 Q550 350, 650 250 L650 750 L-50 750Z"
          fill="url(#grad1)"
          opacity="0.95"
        />

        {/* Overlapping shape for depth */}
        <path
          d="M-50 400 Q150 300, 300 420 T600 350 L650 750 L-50 750Z"
          fill="url(#grad2)"
          opacity="0.8"
        />

        {/* Curved accent */}
        <ellipse
          cx="180"
          cy="280"
          rx="160"
          ry="80"
          fill="#a855f7"
          opacity="0.5"
        />

        {/* Glow effects */}
        <circle cx="300" cy="350" r="200" fill="url(#glow1)" />
      </svg>
    </div>
  );
}
