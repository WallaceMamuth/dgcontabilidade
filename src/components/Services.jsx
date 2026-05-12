import { BriefcaseBusiness, Calculator, FileCheck2, Landmark } from 'lucide-react'

const services = [
  {
    title: 'Abertura de empresa',
    description:
      'Orientação completa para formalizar seu negócio com o enquadramento correto desde o início.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Contabilidade mensal',
    description:
      'Rotina fiscal, contábil e trabalhista organizada para sua empresa operar com tranquilidade.',
    icon: Calculator,
  },
  {
    title: 'Planejamento tributário',
    description:
      'Análise estratégica para reduzir riscos, melhorar previsibilidade e apoiar decisões financeiras.',
    icon: Landmark,
  },
  {
    title: 'Regularização de CNPJ',
    description:
      'Suporte para resolver pendências, reativar obrigações e manter sua empresa em conformidade.',
    icon: FileCheck2,
  },
]

function Services() {
  return (
    <section id="servicos" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">
            Serviços
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Soluções contábeis para cada fase da sua empresa
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Do primeiro CNPJ à rotina mensal, a DG Contabilidade combina
            clareza, tecnologia e atendimento humano.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group animate-fade-up rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-900/15 hover:bg-white hover:shadow-2xl hover:shadow-emerald-950/10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-900/10 text-[#064E3B] transition duration-300 group-hover:bg-[#064E3B] group-hover:text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
