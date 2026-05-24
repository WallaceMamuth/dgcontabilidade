import { useState } from 'react'
import { Globe, Mail, MapPin, Phone, PhoneForwarded } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import {
  ADDRESS_LINES,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SITE_NAME,
  WEBSITE_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_PREFILL_MESSAGE,
  WHATSAPP_URL,
} from '../constants/site.js'

function ContactPage({ whatsappUrl }) {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = `${WHATSAPP_PREFILL_MESSAGE}

Nome: ${nome || '—'}
Empresa ou CNPJ: ${empresa || '—'}

Mensagem:
${mensagem || 'Sem mensagem adicional'}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body.trim())}`, '_blank')
  }

  const addressJoined = ADDRESS_LINES.join(', ')

  return (
    <>
      <PageBanner
        eyebrow="Central de relacionamento"
        title="Canal institucional de contato"
        subtitle="Prefere WhatsApp, e-mail ou agendar visita? Usamos SLA combinado desde o primeiro atendimento e confirmamos agendas com até 48h de antecedência."
      />

      <section className="border-b border-slate-100 bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-10">
            <div className="rounded-[1.9rem] border border-slate-900/25 bg-white p-9 shadow-lg">
              <Phone aria-hidden="true" className="h-8 w-8 text-[#064E3B]" />
              <h2 className="mt-6 text-2xl font-bold text-slate-950">WhatsApp e telefone</h2>
              <a
                className="mt-4 block text-lg font-semibold text-emerald-800 hover:text-emerald-950"
                href={`tel:${CONTACT_PHONE_TEL}`}
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                className="mt-3 inline-flex text-sm font-bold text-sky-700 underline underline-offset-4 hover:text-emerald-800"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Conversar no WhatsApp →
              </a>
            </div>

            <div className="rounded-[1.9rem] border border-sky-200/80 bg-sky-50/90 p-9">
              <Globe aria-hidden="true" className="h-8 w-8 text-sky-700" />
              <h2 className="mt-6 text-2xl font-bold text-slate-950">Site e redes</h2>
              <a
                className="mt-4 inline-block text-lg font-semibold text-sky-800 underline underline-offset-4 hover:text-emerald-900"
                href={WEBSITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                www.watechevoce.com.br
              </a>
            </div>

            <div className="rounded-[1.9rem] border border-emerald-900/15 bg-emerald-50/80 p-9">
              <Mail aria-hidden="true" className="h-8 w-8 text-[#064E3B]" />
              <h2 className="mt-6 text-2xl font-bold text-emerald-950">E-mail corporativo</h2>
              <a
                className="mt-4 inline-block text-lg font-semibold text-sky-800 underline underline-offset-4 hover:text-emerald-900"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="rounded-[1.9rem] border border-slate-200 bg-slate-900 p-10 text-white shadow-2xl">
              <MapPin aria-hidden="true" className="h-8 w-8 text-sky-300" />
              <h3 className="mt-7 text-xl font-bold">Escritório {SITE_NAME}</h3>
              <p className="mt-5 leading-relaxed text-slate-200">{addressJoined}</p>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-slate-50/80 px-10 py-10 shadow-inner"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-600">
              WhatsApp rápido
            </p>
            <p className="mt-6 text-xl font-bold text-slate-950">
              Montamos mensagem inicial em um clique
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Preencha os campos (opcional) e clicamos na abertura do WhatsApp com contexto já
              preenchido.
            </p>

            <label className="mt-10 block" htmlFor="contato-nome">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Nome completo
              </span>
              <input
                id="contato-nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Maria Silva — Diretora"
                autoComplete="name"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm outline-none transition focus-visible:border-emerald-800 focus-visible:ring-4 focus-visible:ring-emerald-900/25"
              />
            </label>

            <label className="mt-6 block" htmlFor="contato-empresa">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Empresa / CNPJ
              </span>
              <input
                id="contato-empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Tech Solutions LTDA ou 40.063.954/0001-45"
                autoComplete="organization"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm outline-none transition focus-visible:border-emerald-800 focus-visible:ring-4 focus-visible:ring-emerald-900/25"
              />
            </label>

            <label className="mt-6 block" htmlFor="contato-mensagem">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Mensagem
              </span>
              <textarea
                id="contato-mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={5}
                placeholder="Precisamos reorganizar tributos antes do próximo fechamento…"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm outline-none transition focus-visible:border-emerald-800 focus-visible:ring-4 focus-visible:ring-emerald-900/25"
              />
            </label>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#064E3B] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#0b624b] focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              <PhoneForwarded aria-hidden="true" className="h-5 w-5" />
              Enviar via WhatsApp
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block text-center text-sm font-semibold text-sky-700 underline underline-offset-4 hover:text-emerald-800"
            >
              Abrir conversa sem formulário →
            </a>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
