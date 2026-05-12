const variants = {
  /* Ocupa a altura útil da barra (entre os py-4); nav usa items-stretch + self-stretch no link. */
  nav: 'h-full max-h-full w-auto min-h-0 shrink-0 self-stretch object-contain',
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
