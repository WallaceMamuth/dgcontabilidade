import { ClipboardList, Landmark, ShieldCheck } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import { services } from '../data/services.js'
import { SITE_NAME } from '../constants/site.js'

const segments = [
  {
    headline: 'MEI migrando para PJ',
    copy: 'Formalização gradual com simulações de carga tributária e onboarding documental rápido.',
  },
  {
    headline: 'Simples nacional em expansão',
    copy:
      'Acompanhamentos com leituras de NF-e, escriturações digitais e painéis tributários atualizados trimestralmente.',
  },
  {
    headline: 'Escritório de serviços & consultoria',
    copy:
      'Folha proporcional ao projeto, retenções e impostos explicados de forma objetiva aos gestores.',
  },
]

const regimes = [
  {
    nome: 'MEI complementar ao ecossistema',
    textos: ['Declarações anuais DASN-SIMEI sincronizadas', 'Painel de migrações com fiscal'],
  },
  {
    nome: 'Lucro presumido & real correlatos',
    textos: ['EFD contribuições automatizadas', 'Análises de créditos fiscais exequíveis'],
  },
]

function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow={SITE_NAME}
        title="Serviços, segmentação e regimes"
        subtitle="Pacotes contábeis combináveis, visão dos segmentos que mais acolhemos e regimes tributários alinhados à legislação — com método claro desde a constituição societária até governanças integradas."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                Ciclo vivo de entregáveis revisados continuamente
              </h2>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-slate-600">
                <li>• Inventário documental inicial e matriz de riscos fiscais</li>
                <li>
                  • Rituais diários automatizados (boletos, impostos, compensações quando permitido)
                </li>
                <li>• Reuniões de alinhamento comercial + financeira + tributária</li>
                <li>• Fechamentos mensais e diagnóstico de indicadores tributários líquidos</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-emerald-900/15 bg-emerald-50/80 p-8 text-emerald-950 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
                SLAs combinados por contrato
              </p>
              <p className="mt-5 text-xl font-bold leading-snug">
                SLA de resposta tático em até um dia útil para temas ordinários · SLA especial para
                processos extraordinários combinados caso a caso.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="animate-fade-up rounded-[1.85rem] border border-slate-200 bg-[#fafbfc] p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-900/20 hover:bg-white hover:shadow-lg"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-5 leading-8 text-slate-600">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#064E3B] via-teal-800 to-[#07617a] p-11 text-white shadow-2xl">
            <ShieldCheck aria-hidden="true" className="h-12 w-12 text-emerald-200" />
            <h2 className="mt-7 text-3xl font-bold leading-tight">
              Matriz tributária viva atualizada sempre que há reformas legais
            </h2>
            <p className="mt-6 leading-8 text-emerald-50">
              Acompanhamentos periódicos do Congresso nacional, Receita Federal e Fazendas estaduais
              garantem relatórios alinhados com o ambiente econômico vigente ao negócio.
            </p>
          </div>
          <article className="space-y-5 text-lg leading-relaxed text-slate-700">
            <p>
              Orientamos projetos SaaS internos ou tradicionais, serviços híbridos e empresários
              familiares. Nossos diagnósticos consideram tributação direta, indireta, parcelamentos e
              alternativas de caixa fiscal sempre que há margem dentro da legislação.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#fafbfc] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
                Ecossistema
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-[2.2rem]">
                Segmentos comuns em nosso pipeline
              </h2>
            </div>
            <Landmark aria-hidden="true" className="hidden h-12 w-12 text-emerald-800 md:block" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {segments.map((segment) => (
              <article
                key={segment.headline}
                className="rounded-3xl border border-white bg-white p-9 shadow-xl shadow-emerald-950/[0.045]"
              >
                <ClipboardList aria-hidden="true" className="h-9 w-9 text-sky-600" />
                <h3 className="mt-6 text-xl font-bold text-slate-950">{segment.headline}</h3>
                <p className="mt-4 leading-8 text-slate-600">{segment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {regimes.map((regime) => (
            <article
              key={regime.nome}
              className="rounded-[1.85rem] border border-slate-200 bg-[#fdfefe] px-10 py-9"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-800">{regime.nome}</p>
              <ul className="mt-6 space-y-4 text-lg text-slate-700">
                {regime.textos.map((txt) => (
                  <li key={txt}>{txt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
