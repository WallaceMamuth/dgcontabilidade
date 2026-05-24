import { Outlet } from 'react-router-dom'
import { WHATSAPP_URL } from '../constants/site.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton.jsx'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar />
      <main id="conteudo-principal">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton href={WHATSAPP_URL} />
    </div>
  )
}

export default SiteLayout
