const variants = {
  /* 56–60px de altura, largura automática; barra do nav tem altura fixa em Navbar.jsx */
  nav: 'h-[56px] w-auto max-h-[56px] shrink-0 object-contain sm:h-[60px] sm:max-h-[60px]',
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
