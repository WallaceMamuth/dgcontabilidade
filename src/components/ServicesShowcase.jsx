import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

function ServicesShowcase({ limit = 3 }) {
  const items = typeof limit === 'number' ? services.slice(0, limit) : services

  return (
    <section className="border-y border-emerald-900/10 bg-[#f9fafc] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
              Serviços em destaque
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ciclo financeiro ponta-a-ponta com documentação sempre auditável
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Indicadores executivos sintetizam status das obrigações e eventos tributários prioritários —
              assim você ganha espaço estratégico sem perder tempo com planilhas manuais.
            </p>
          </div>
          <Link
            to="/servicos"
            className="rounded-full bg-[#064E3B] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/25 transition hover:-translate-y-0.5 hover:bg-[#0b624b] focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
          >
            Ver página completa
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group animate-fade-up rounded-[1.65rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-900/15 hover:shadow-xl"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-900/10 text-[#064E3B] transition group-hover:bg-[#064E3B] group-hover:text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase
