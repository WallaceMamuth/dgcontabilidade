import { useEffect, useState } from 'react'

const FOOTER_OBSERVE_ID = 'contato'

function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.123 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function WhatsAppFloatingButton({ href }) {
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const footer = document.getElementById(FOOTER_OBSERVE_ID)
    if (!footer) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title="WhatsApp"
      aria-label="Fale com a DG Contabilidade pelo WhatsApp"
      aria-hidden={footerInView}
      tabIndex={footerInView ? -1 : undefined}
      className={`group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45),0_2px_10px_rgba(0,0,0,0.18)] ring-[3px] ring-white/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.06] hover:bg-[#20bd5c] hover:shadow-[0_12px_36px_rgba(37,211,102,0.55),0_4px_14px_rgba(0,0,0,0.22)] hover:ring-white/40 active:scale-100 focus-visible:ring-4 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 ${
        footerInView
          ? 'pointer-events-none scale-90 opacity-0'
          : 'opacity-100'
      }`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
      <WhatsAppIcon className="relative h-[1.85rem] w-[1.85rem] drop-shadow-sm transition duration-300 group-hover:scale-105" />
    </a>
  )
}

export default WhatsAppFloatingButton
