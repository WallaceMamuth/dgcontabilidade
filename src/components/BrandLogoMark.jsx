const variants = {
  /* Mesma ideia do hero: scale na img só aumenta o desenho; origin-right evita invadir o texto ao lado. */
  nav: 'h-full max-h-full w-auto min-h-0 shrink-0 origin-right self-stretch object-contain scale-[1.14]',
  /* Só a img: scale aumenta o desenho sem mudar a caixa no layout (card não cresce). */
  hero: 'h-28 w-28 shrink-0 origin-center scale-[1.22] object-contain sm:h-32 sm:w-32 sm:scale-[1.18] lg:h-36 lg:w-36 lg:scale-[1.14]',
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
