import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PartnerHospitals from './pages/services/PartnerHospitals';
import Treatment from './pages/services/Treatment';
import PlayTonight from './pages/products/PlayTonight';
import Ameora from './pages/products/Ameora';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services/partner-hospitals" element={<PartnerHospitals />} />
          <Route path="services/treatment" element={<Treatment />} />
          <Route path="products/play-tonight" element={<PlayTonight />} />
          <Route path="products/ameora" element={<Ameora />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
