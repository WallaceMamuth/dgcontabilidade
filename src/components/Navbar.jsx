import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import BrandLogoMark from './BrandLogoMark.jsx'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Navbar({ logoUrl, whatsappUrl }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-950/10 bg-white/90 shadow-sm shadow-emerald-950/5 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3.5 rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4 sm:gap-4"
        >
          <BrandLogoMark logoUrl={logoUrl} variant="nav" />
          <span className="text-lg font-bold tracking-tight text-[#064E3B]">
            DG Contabilidade
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#064E3B] focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#064E3B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b624b] focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4 md:inline-flex"
        >
          Fale conosco
        </a>

        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-[#064E3B] transition hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4 md:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-[#064E3B] focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-[#064E3B] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-950/15 transition hover:bg-[#0b624b] focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2"
            >
              Fale conosco
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
