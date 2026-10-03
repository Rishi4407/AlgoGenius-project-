import React from 'react';

interface AlgoGeniusLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
}

export const AlgoGeniusLogo: React.FC<AlgoGeniusLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  theme = 'dark'
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base', gap: 'gap-2' },
    md: { icon: 38, text: 'text-xl', gap: 'gap-3' },
    lg: { icon: 52, text: 'text-2xl', gap: 'gap-3.5' },
    xl: { icon: 68, text: 'text-4xl', gap: 'gap-4' }
  };

  const { icon, text, gap } = sizeMap[size];

  // SVG Mark representing the "AG" emblem with circuit traces and code bracket </>
  const MarkSVG = (
    <svg
      width={icon}
      height={icon}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="AlgoGenius Mark"
    >
      <defs>
        {/* Primary Blue Gradient for letter A */}
        <linearGradient id="agBlueGrad" x1="20" y1="180" x2="150" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Glow Filter for Circuit Highlights */}
        <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Circuit Traces extending from top-right of letter A */}
      <g stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        {/* Trace 1 */}
        <path d="M 112 55 L 145 55 L 158 45 L 180 45" />
        <circle cx="184" cy="45" r="5" fill="#38bdf8" />

        {/* Trace 2 */}
        <path d="M 120 70 L 155 70 L 170 60 L 190 60" />
        <circle cx="194" cy="60" r="5" fill="#38bdf8" />

        {/* Trace 3 */}
        <path d="M 128 85 L 150 85 L 165 95 L 182 95" />
        <circle cx="186" cy="95" r="5" fill="#38bdf8" />

        {/* Trace 4 */}
        <path d="M 134 98 L 158 98 L 170 112 L 180 112" />
        <circle cx="184" cy="112" r="5" fill="#38bdf8" />
      </g>

      {/* Interlinked Letter 'G' in Deep Navy / Slate */}
      <path
        d="M 135 105 
           C 152 105, 172 105, 172 105 
           L 172 125 
           L 142 125 
           C 142 135, 136 142, 126 148 
           C 114 154, 98 152, 85 142 
           C 72 132, 70 120, 75 106 
           C 72 104, 62 100, 52 105 
           C 44 122, 48 144, 65 160 
           C 82 176, 110 180, 134 172 
           C 155 165, 176 148, 178 122 
           L 178 95 
           L 125 95 
           Z"
        fill="#0f172a"
        stroke={theme === 'dark' ? '#334155' : '#0f172a'}
        strokeWidth="3"
      />

      {/* Stylized Letter 'A' (Primary Blue Gradient Backbone) */}
      <path
        d="M 92 25 
           C 96 18, 106 18, 110 25 
           L 155 125 
           C 158 132, 150 140, 142 138 
           L 115 138 
           L 98 90 
           L 68 155 
           C 65 162, 55 162, 50 155 
           L 30 115 
           Z"
        fill="url(#agBlueGrad)"
      />

      {/* Inner Aperture / Cutout Code Bracket </> */}
      <g transform="translate(68, 92) scale(0.65)" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left angle bracket < */}
        <path d="M 12 0 L 0 12 L 12 24" />
        {/* Slash / */}
        <path d="M 28 -4 L 18 28" />
        {/* Right angle bracket > */}
        <path d="M 34 0 L 46 12 L 34 24" />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSVG}</div>;
  }

  return (
    <div className={`inline-flex items-center ${gap} ${className}`}>
      {MarkSVG}
      <div className="flex items-baseline tracking-tight font-extrabold select-none">
        <span className={`${text} ${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-black tracking-tight`}>
          Algo
        </span>
        <span className={`${text} text-blue-500 font-extrabold tracking-tight`}>
          Genius
        </span>
      </div>
    </div>
  );
};
