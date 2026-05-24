import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SITE_NAME_NAV } from '../constants/site.js'
import WATecLogo from './WATecLogo.jsx'

const navLinkClass =
  'shrink-0 text-sm font-medium whitespace-nowrap text-slate-600 transition hover:text-[#064E3B] focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  const links = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? '!text-[#064E3B] font-semibold' : ''}`
        }
        onClick={closeMenu}
      >
        Início
      </NavLink>
      <NavLink
        to="/institucional"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? '!text-[#064E3B] font-semibold' : ''}`
        }
        onClick={closeMenu}
      >
        Institucional
      </NavLink>
      <NavLink
        to="/servicos"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? '!text-[#064E3B] font-semibold' : ''}`
        }
        onClick={closeMenu}
      >
        Serviços
      </NavLink>
      <NavLink
        to="/contato"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? '!text-[#064E3B] font-semibold' : ''}`
        }
        onClick={closeMenu}
      >
        Contato
      </NavLink>
    </>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b-2 border-white bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto box-border flex min-h-[5.5rem] max-h-[5.5rem] max-w-7xl items-stretch justify-between px-5 py-4 sm:min-h-[5.75rem] sm:max-h-[5.75rem] sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex min-h-0 min-w-0 items-center gap-2.5 self-stretch rounded-xl focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4 sm:gap-3"
        >
          <WATecLogo variant="nav" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-base font-bold tracking-tight text-[#064E3B] sm:text-lg">
              {SITE_NAME_NAV}
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:block">
              Contabilidade
            </span>
          </span>
        </NavLink>

        <div className="hidden min-w-0 flex-1 items-center justify-end self-stretch md:flex md:gap-6 lg:gap-8">
          <div className="flex flex-wrap items-center justify-end gap-4 lg:gap-6 xl:gap-8">
            {links}
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
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-emerald-50 text-[#064E3B]'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-[#064E3B]'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/institucional"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-emerald-50 text-[#064E3B]'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-[#064E3B]'
                }`
              }
            >
              Institucional
            </NavLink>
            <NavLink
              to="/servicos"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-emerald-50 text-[#064E3B]'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-[#064E3B]'
                }`
              }
            >
              Serviços
            </NavLink>
            <NavLink
              to="/contato"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-emerald-50 text-[#064E3B]'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-[#064E3B]'
                }`
              }
            >
              Contato
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
