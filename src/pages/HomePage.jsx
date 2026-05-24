import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '../constants/site.js'
import Hero from '../components/Hero.jsx'
import HomeExplorer from '../components/HomeExplorer.jsx'
import ServicesShowcase from '../components/ServicesShowcase.jsx'

function HomePage({ whatsappUrl }) {
  return (
    <>
      <Hero whatsappUrl={whatsappUrl} />
      <ServicesShowcase limit={3} />
      <HomeExplorer />
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[linear-gradient(125deg,#064E3B_0%,#0f766e_55%,#075985_100%)] p-12 text-white shadow-[0_38px_80px_-24px_rgba(6,78,59,0.55)] sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.42em] text-emerald-100 sm:text-sm">
            Pronto para iniciar uma parceria
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-[2.65rem] sm:leading-tight">
            Fale diretamente com o time institucional da {SITE_NAME}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50">
            Responderemos com próximos passos, modelo de onboarding e roadmap documental dentro do
            cenário tributário atual.
          </p>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#064E3B] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#064E3B]"
            >
              Iniciar conversa
              <ArrowRight aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#064E3B]"
            >
              Dados institucionais
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
