import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton.jsx'

function App() {
  const whatsappUrl =
    'https://wa.me/5571999632946?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20DG%20Contabilidade'
  const logoUrl = `${import.meta.env.BASE_URL}brand/logo-dg-contabilidade.png`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar logoUrl={logoUrl} />
      <main>
        <Hero logoUrl={logoUrl} whatsappUrl={whatsappUrl} />
        <Services />
        <About whatsappUrl={whatsappUrl} />
      </main>
      <Footer logoUrl={logoUrl} />
      <WhatsAppFloatingButton href={whatsappUrl} />
    </div>
  )
}

export default App
