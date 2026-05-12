const variants = {
  nav: 'h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36',
  hero: 'h-32 w-32 sm:h-36 sm:w-36 lg:h-44 lg:w-44',
  footer: 'h-16 w-16 sm:h-20 sm:w-20',
}

/** Borda branca nítida (box-shadow), sem drop-shadow — evita halo escuro em fundo verde/preto. */
function BrandLogoMark({ logoUrl, alt = '', variant = 'nav' }) {
  const size = variants[variant]
  const ring =
    variant === 'nav'
      ? 'shadow-[0_0_0_3px_#fff,0_0_0_4px_rgba(6,78,59,0.12)]'
      : 'shadow-[0_0_0_3px_#fff]'

  return (
    <img
      src={logoUrl}
      alt={alt}
      className={`inline-block shrink-0 rounded-full object-contain ${size} ${ring}`}
    />
  )
}

export default BrandLogoMark
