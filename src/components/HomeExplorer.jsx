import { ArrowRight, Layers2, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Institucional',
    description:
      'Trajetória, propósito e cultura corporativa para quem busca relacionamento próximo e governança leve.',
    to: '/institucional',
    icon: UsersRound,
  },
  {
    title: 'Serviços e atuação',
    description:
      'Portfólio contábil completo mais segmentação (MEI, Simples Nacional, regimes) e regimes tributários em um só lugar.',
    to: '/servicos',
    icon: Layers2,
  },
]

function HomeExplorer() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
            Navegação institucional
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Quatro seções para conhecer a W.A.Techevoce
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Início, institucional, serviços (com segmentos e regimes) e contato — fluxo objetivo até
            falar com a equipe.
          </p>
        </div>

        <div className="mt-14 grid max-w-4xl mx-auto gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="group animate-fade-up flex flex-col rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50/70 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-900/15 hover:shadow-xl hover:shadow-emerald-950/10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-900/10 text-[#064E3B] transition duration-300 group-hover:bg-[#064E3B] group-hover:text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{card.description}</p>
                <Link
                  to={card.to}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] transition hover:gap-3 focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#064E3B]"
                >
                  Abrir página
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#064E3B] bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-[#064E3B] transition hover:bg-[#064E3B] hover:text-white focus-visible:ring-2 focus-visible:ring-[#064E3B] focus-visible:ring-offset-4"
          >
            Contato
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeExplorer
