import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '../constants/site.js'
import WATecLogo from './WATecLogo.jsx'

function Hero({ whatsappUrl }) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#ecfdf5_48%,#ffffff_100%)] px-5 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(6,78,59,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.05)_1px,transparent_1px)] bg-size-[44px_44px]" />
      <div className="absolute top-28 right-0 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#064E3B] shadow-sm backdrop-blur">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-sky-600" />
            Institucional especializado em contabilidade estratégica
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Gestão financeira e fiscal sob medida para crescer com segurança
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A {SITE_NAME} combina método, transparência e proximidade para
            apoiar empreendedores, empresas e profissionais em Saquarema, região dos Lagos/RJ,
            também em regimes digitais (e-CAC / e-processos / eSocial).
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#064E3B] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-950/20 transition duration-300 hover:-translate-y-1 hover:bg-[#0b624b] focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
            >
              Falar com especialista
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition group-hover:translate-x-1"
              />
            </a>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4"
            >
              Ver serviços
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {['Atendimento humano', 'Rotina mensal sob controle', 'Visão fiscal clara'].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#064E3B]"
                  />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="animate-fade-up rounded-4xl border-2 border-white bg-white/80 p-5 shadow-none backdrop-blur lg:p-7">
          <div className="rounded-3xl border-2 border-white bg-[#064E3B] p-6 text-white shadow-none">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
                <WATecLogo variant="hero" />
                <div className="min-w-0 text-center sm:text-left">
                  <p className="text-sm text-emerald-100">Escritório contábil</p>
                  <p className="mt-1 text-2xl font-bold leading-snug">{SITE_NAME}</p>
                </div>
              </div>
              <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 sm:grid">
                <BarChart3 aria-hidden="true" className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                ['Empresas acompanhadas', '+120'],
                ['Primeira resposta', 'até 24h úteis'],
                ['Expertise regional', 'Saquarema / RJ'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white bg-white/10 p-4 shadow-none"
                >
                  <p className="text-sm text-emerald-100">{label}</p>
                  <p className="mt-1 text-2xl font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-none">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Gestão institucional
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              KPIs tributários claros para governança mais simples e decisões rápidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
