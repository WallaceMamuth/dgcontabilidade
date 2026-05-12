import { Mail, MapPin } from 'lucide-react'
import BrandLogoMark from './BrandLogoMark.jsx'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Footer({ logoUrl }) {
  return (
    <footer id="contato" className="bg-slate-950 px-5 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.25fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogoMark logoUrl={logoUrl} variant="footer" />
            <span className="text-lg font-bold tracking-tight text-white">
              DG Contabilidade
            </span>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Contabilidade moderna, próxima e estratégica para empresas que
            querem crescer com segurança.
          </p>
          <a
            href="#"
            aria-label="Instagram da DG Contabilidade"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <InstagramIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>

        <address className="grid gap-5 not-italic">
          <a
            href="mailto:denilsongcontabilidade@gmail.com"
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/3 p-5 transition hover:border-sky-300/40 hover:bg-white/6 focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Email
              </span>
              <span className="mt-1 block text-white">
                denilsongcontabilidade@gmail.com
              </span>
            </span>
          </a>

          <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/3 p-5">
            <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Endereço
              </span>
              <span className="mt-1 block leading-7 text-white">
                Rua Freitas Henrique de Cima nº 07, 3ª Travessa - Caixa
                D&apos;Água - Salvador/BA, CEP 40320-150
              </span>
            </span>
          </div>
        </address>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} DG Contabilidade. Todos os direitos
        reservados.
      </div>
    </footer>
  )
}

export default Footer
