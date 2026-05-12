import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import BrandLogoMark from './BrandLogoMark.jsx'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Navbar({ logoUrl }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b-2 border-[#FFFFFF] bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto box-border flex min-h-[5.5rem] max-h-[5.5rem] max-w-7xl items-stretch justify-between px-5 py-4 sm:min-h-[5.75rem] sm:max-h-[5.75rem] sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex min-h-0 min-w-0 items-stretch gap-3 self-stretch rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
        >
          <BrandLogoMark logoUrl={logoUrl} variant="nav" />
          <span className="self-center min-w-0 truncate text-lg font-bold tracking-tight text-[#064E3B] sm:overflow-visible sm:whitespace-normal">
            DG Contabilidade
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-end self-stretch md:flex">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-sm font-medium whitespace-nowrap text-slate-600 transition hover:text-[#064E3B] focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center self-stretch md:hidden">
          <button
            type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-[#064E3B] transition hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
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
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
