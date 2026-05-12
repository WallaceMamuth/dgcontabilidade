const variants = {
  /* Caixa no fluxo compacta; scale amplia só o desenho (header mantém min/max-height). */
  nav: 'h-11 w-auto max-h-11 shrink-0 origin-left object-contain will-change-transform scale-[1.52] sm:scale-[1.62]',
  hero: 'h-28 w-28 shrink-0 object-contain sm:h-32 sm:w-32 lg:h-36 lg:w-36',
  footer: 'h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16',
}

function BrandLogoMark({ logoUrl, alt = '', variant = 'nav' }) {
  return (
    <img
      src={logoUrl}
      alt={alt}
      className={`inline-block ${variants[variant]}`}
    />
  )
}

export default BrandLogoMark
