import { Cpu, Compass, Eye, Gauge } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { SITE_NAME } from '../constants/site.js'

const pillars = [
  {
    title: 'Transparência',
    description:
      'Decisões explicadas com narrativas tributárias, sem jargões inacessíveis e com relatórios prontos para gestores.',
    icon: Eye,
  },
  {
    title: 'Ritmo estratégico',
    description:
      'Cronograma anual combinado ao calendário do Simples Nacional, DCTFWeb, EFD-Reinf e demais regimes aplicáveis.',
    icon: Gauge,
  },
  {
    title: 'Orientação ativa',
    description:
      'Equipe próxima com canais rápidos, documentação vivo em nuvem e checkpoints trimestrais de governança.',
    icon: Compass,
  },
  {
    title: 'Stack integrado',
    description:
      'Processos revisados continuamente conforme atualizações legais, economia digital e exigências dos órgãos.',
    icon: Cpu,
  },
]

function InstitutionalPage() {
  return (
    <>
      <PageBanner
        eyebrow={SITE_NAME}
        title="Institucional & cultura corporativa"
        subtitle="Construímos relacionamentos de longo prazo com comunicação objetiva e documentação sempre verificável — ideais para quem quer crescer com consistência tributária."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="space-y-6 text-lg leading-relaxed text-slate-600">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Quem somos</h2>
            <p>
              A {SITE_NAME} nasce como resposta institucional a empresários que pedem segurança
              jurídica e agilidade prática ao mesmo tempo. Alinhamos rotina mensal ao planejamento
              estratégico para que tributos não sejam surpresas, mas métricas de gestão cotidiana.
            </p>
            <p>
              Atuamos com squads enxutos, combinando tecnologias próprias, checklists atualizados e
              atendimento humano — inclusive presencial sempre que necessário em Salvador ou regiões
              atendidas com logística combinada previamente.
            </p>
            <blockquote className="rounded-3xl border border-emerald-900/15 bg-emerald-50/60 px-8 py-6 text-xl font-semibold leading-snug text-[#064E3B]">
              “Credibilidade tributária se constrói com consistência mensal.”
              <cite className="mt-5 block text-sm font-medium not-italic text-slate-500">
                — Direção executiva · {SITE_NAME}
              </cite>
            </blockquote>
          </article>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-emerald-900/15 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 p-[1px] shadow-lg shadow-emerald-950/25">
              <div className="rounded-[1.7rem] bg-slate-950 p-10 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">Propósito</p>
                <p className="mt-6 text-2xl font-bold leading-snug">
                  Libertar líderes de burocracias paralelas ao core business através de governança
                  contábil integrada ao planejamento.
                </p>
              </div>
            </div>
            <Link
              to="/servicos"
              className="rounded-3xl border border-slate-200 bg-slate-50 px-10 py-6 text-lg font-semibold text-slate-800 transition hover:border-sky-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Conheça o portfólio detalhado de serviços →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#fafafa] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
              Pilares
            </p>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              Governança leve inspirada nas melhores práticas de mercado
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-900/25 hover:shadow-lg"
                >
                  <Icon className="h-10 w-10 text-sky-600" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-bold text-slate-950">{pillar.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default InstitutionalPage
