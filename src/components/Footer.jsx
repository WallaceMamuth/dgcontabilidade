import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  ADDRESS_LINES,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SITE_NAME,
  WEBSITE_URL,
  WHATSAPP_URL,
} from '../constants/site.js'
import WATecLogo from './WATecLogo.jsx'

function Footer() {
  const addressText = ADDRESS_LINES.join(' — ')

  return (
    <footer id="rodape-contato" className="bg-slate-950 px-5 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-center md:gap-12 lg:gap-16">
        <div className="mx-auto w-full max-w-md md:mx-0 md:shrink-0">
          <div className="flex items-start gap-3">
            <WATecLogo variant="footer" />
            <div className="min-w-0">
              <p className="text-lg font-bold tracking-tight text-white">{SITE_NAME}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Contabilidade e consultoria tributária com linguagem simples,
                tecnologia e atendimento humano para o seu ecossistema
                empresarial.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Site W.A.Techevoce"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              <Globe aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp ${CONTACT_PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/15 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>

          <nav className="mt-8 grid gap-2 text-sm font-medium text-slate-400" aria-label="Mapa do site">
            <Link to="/" className="transition hover:text-sky-300">
              Início
            </Link>
            <Link to="/institucional" className="transition hover:text-sky-300">
              Institucional
            </Link>
            <Link to="/servicos" className="transition hover:text-sky-300">
              Serviços
            </Link>
            <Link to="/contato" className="transition hover:text-sky-300">
              Contato
            </Link>
          </nav>
        </div>

        <address className="mx-auto grid w-full max-w-md gap-5 not-italic md:mx-0 md:shrink-0 lg:max-w-lg">
          <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                WhatsApp e telefone
              </span>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="mt-1 block text-white transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-sky-300 underline-offset-4 hover:underline"
              >
                Abrir no WhatsApp
              </a>
            </span>
          </div>

          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-300/40 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <Globe aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Site institucional
              </span>
              <span className="mt-1 block text-white">www.watechevoce.com.br</span>
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-300/40 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Email
              </span>
              <span className="mt-1 block text-white">{CONTACT_EMAIL}</span>
            </span>
          </a>

          <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Endereço
              </span>
              <span className="mt-1 block leading-7 text-white">{addressText}</span>
            </span>
          </div>
        </address>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
        </p>
        <Link
          to="/contato"
          className="font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-sky-300 hover:decoration-sky-300 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Canal de contato
        </Link>
      </div>
    </footer>
  )
}

export default Footer
