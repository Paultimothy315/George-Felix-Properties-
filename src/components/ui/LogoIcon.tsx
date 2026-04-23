export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 250" 
      className={className}
      fill="none"
    >
      {/* Bottom Swoosh */}
      <path 
        d="M 50 160 Q 250 140 450 160 Q 300 148 150 160 Z" 
        fill="#0A1428" 
      />
      <path 
        d="M 40 160 Q 250 135 460 160 Q 250 145 40 160 Z" 
        fill="#0A1428" 
      />

      {/* House Body (Dark Blue) */}
      <path 
        d="M 165 147 L 165 119 L 140 119 L 150 110 L 285 110 L 285 75 Z" 
        fill="#none"
      />
      <path 
        d="M 165 147 L 165 118 L 150 118 L 150 115 L 225 115 L 285 75 L 345 115 L 360 115 L 360 118 L 335 118 L 335 140 Z" 
        fill="#0A1428" 
      />
      
      {/* Window */}
      <rect x="275" y="95" width="20" height="24" fill="white" />
      <rect x="275" y="95" width="9" height="11" fill="white" />
      <rect x="286" y="95" width="9" height="11" fill="white" />
      <rect x="275" y="108" width="9" height="11" fill="white" />
      <rect x="286" y="108" width="9" height="11" fill="white" />
      <path d="M 284 95 L 284 119 M 275 107 L 295 107" stroke="#0A1428" strokeWidth="2" />

      {/* Red Roof */}
      <path 
        d="M 145 113 L 285 72 L 285 72 L 230 113 Z" 
        fill="#E60012" 
      />
      <path 
        d="M 195 75 L 285 72 L 220 113 L 145 113 Z" 
        fill="#E60012" 
      />
    </svg>
  );
}
