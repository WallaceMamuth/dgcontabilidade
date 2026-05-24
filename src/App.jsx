import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { WHATSAPP_URL } from './constants/site.js'
import SiteLayout from './layouts/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import InstitutionalPage from './pages/InstitutionalPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage whatsappUrl={WHATSAPP_URL} />} />
          <Route path="/institucional" element={<InstitutionalPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/atuacao" element={<Navigate to="/servicos" replace />} />
          <Route path="/contato" element={<ContactPage whatsappUrl={WHATSAPP_URL} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
