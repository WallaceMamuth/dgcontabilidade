import { MessageCircle } from 'lucide-react'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'

function App() {
  const whatsappUrl =
    'https://wa.me/5571999632946?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20DG%20Contabilidade'
  const logoUrl = `${import.meta.env.BASE_URL}brand/logo-dg-contabilidade.png`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar logoUrl={logoUrl} whatsappUrl={whatsappUrl} />
      <main>
        <Hero logoUrl={logoUrl} whatsappUrl={whatsappUrl} />
        <Services />
        <About whatsappUrl={whatsappUrl} />
      </main>
      <Footer logoUrl={logoUrl} />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a DG Contabilidade pelo WhatsApp"
        className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/25 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fb85a] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4"
      >
        <MessageCircle
          aria-hidden="true"
          className="h-7 w-7 transition duration-300 group-hover:rotate-6"
        />
      </a>
    </div>
  )
}

export default App
