const variants = {
  /* Layout ~44px (h-11): scale não altera box no fluxo; header não cresce. */
  nav: 'h-11 w-11 shrink-0 origin-left scale-[1.14] object-contain sm:scale-[1.18]',
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
