function GuardpotLogo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`guardpot-g-logo ${className}`}
    >
      <defs>
        <linearGradient id="guardpotRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E52E42" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#991124" />
        </linearGradient>
        <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C41E3A" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Polygon path for the stylized blocky Guardpot G */}
      <path
        d="M 32,15 
           L 78,15 
           L 78,32 
           L 38,32 
           L 38,68 
           L 62,68 
           L 62,50 
           L 48,50 
           L 48,36 
           L 80,36 
           L 80,75 
           L 68,85 
           L 28,85 
           L 15,72 
           L 15,32 
           Z"
        fill="url(#guardpotRedGrad)"
        filter="url(#redGlow)"
      />
    </svg>
  )
}

export default GuardpotLogo
