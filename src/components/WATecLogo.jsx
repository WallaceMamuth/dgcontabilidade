const variantClasses = {
  nav: 'h-11 w-11 shrink-0 sm:h-12 sm:w-12',
  hero: 'h-28 w-28 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36',
  footer: 'h-14 w-14 shrink-0 sm:h-16 sm:w-16',
}

/**
 * Marca gráfica vetorial institucional (sem raster).
 */
function WATecLogo({ variant = 'nav', className = '', title }) {
  const label = title ?? 'Logotipo W.A.Techevoce Contabilidade'

  return (
    <svg
      className={`${variantClasses[variant]} ${className}`.trim()}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="wa-logo-title"
    >
      <title id="wa-logo-title">{label}</title>

      <defs>
        <linearGradient id="wa-logo-surface" x1="10" y1="8" x2="78" y2="74" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="0.55" stopColor="#0f766e" />
          <stop offset="1" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="wa-logo-glow" x1="52" y1="20" x2="72" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="68" height="68" rx="21" fill="url(#wa-logo-surface)" />

      <g opacity="0.9">
        <rect x="50" y="22" width="12" height="30" rx="3" fill="url(#wa-logo-glow)" />
        <rect x="36" y="32" width="10" height="20" rx="2.5" fill="white" />
        <rect x="54" y="40" width="8" height="12" rx="2" fill="white" opacity="0.85" />
      </g>

      <text
        x="39"
        y="51"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="26"
        fontWeight="850"
        letterSpacing="-3"
      >
        WA
      </text>
    </svg>
  )
}

export default WATecLogo
