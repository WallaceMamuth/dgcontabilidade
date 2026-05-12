import { ArrowRight, Clock3, Headphones, ShieldCheck, Store } from 'lucide-react'

const differentials = [
  {
    title: 'Atendimento rápido',
    description: 'Retorno ágil para dúvidas, prazos e decisões do dia a dia.',
    icon: Clock3,
  },
  {
    title: 'Suporte personalizado',
    description: 'Acompanhamento próximo, com linguagem simples e orientação prática.',
    icon: Headphones,
  },
  {
    title: 'Especialização em pequenas empresas',
    description: 'Soluções pensadas para MEIs, prestadores de serviço e negócios locais.',
    icon: Store,
  },
]

function About({ whatsappUrl }) {
  return (
    <>
      <section id="sobre" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-sky-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl bg-[#064E3B] p-8 text-white shadow-2xl shadow-emerald-950/15 sm:p-10">
              <ShieldCheck aria-hidden="true" className="h-10 w-10 text-sky-200" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100">
                Sobre a DG
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Confiança, experiência e atendimento humano.
              </h2>
              <p className="mt-6 leading-8 text-emerald-50">
                A DG Contabilidade apoia empreendedores que precisam de uma
                contabilidade clara, responsável e próxima. Nosso compromisso é
                simplificar obrigações, antecipar riscos e oferecer orientação
                segura para que cada cliente tenha mais tempo para focar no
                crescimento do negócio.
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">
              Diferenciais
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Uma parceria contábil feita para facilitar sua rotina
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Atuamos com comunicação objetiva, processos organizados e foco no
              que realmente importa para pequenas empresas: previsibilidade,
              conformidade e suporte para tomar melhores decisões.
            </p>

            <div className="mt-8 grid gap-4">
              {differentials.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#064E3B_0%,#0f766e_62%,#0369a1_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">
            Pronto para começar?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Abra sua empresa hoje mesmo com a DG Contabilidade
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Fale com nossa equipe e receba orientação para abrir ou regularizar
            seu CNPJ com segurança.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#064E3B] shadow-xl shadow-emerald-950/20 transition duration-300 hover:-translate-y-1 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#064E3B]"
          >
            Falar com especialista
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </>
  )
}

export default About
