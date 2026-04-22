import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const whatsappUrl = `https://wa.me/919217528957?text=${encodeURIComponent('Hello! I am interested in your products/services. Please help me.')}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #2d3a8c 0%, #4a2d8c 30%, #0f766e 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo/zeen_medeconect copy.png" alt="Zeen Mediconnect" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-white">
              Bridging the gap between patients and world-class medical services while ensuring seamless access to high-quality healthcare and premium wellness solutions globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-white/30 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white hover:text-yellow-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-yellow-200 transition-colors">About Us</Link></li>
              <li><Link to="/services/partner-hospitals" className="text-white hover:text-yellow-200 transition-colors">Partner Hospitals</Link></li>
              <li><Link to="/services/treatment" className="text-white hover:text-yellow-200 transition-colors">Treatments</Link></li>
              <li><Link to="/products/play-tonight" className="text-white hover:text-yellow-200 transition-colors">Play Tonight</Link></li>
              <li><Link to="/products/ameora" className="text-white hover:text-yellow-200 transition-colors">Améora</Link></li>
              <li><Link to="/contact" className="text-white hover:text-yellow-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-white/30 pb-2">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="text-white hover:text-yellow-200 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-yellow-200 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-white hover:text-yellow-200 transition-colors">Refund & Cancellation Policy</Link></li>
              <li><Link to="/disclaimer" className="text-white hover:text-yellow-200 transition-colors">Disclaimer</Link></li>
            </ul>
            <div className="mt-8">
              <h3 className="text-white font-heading font-extrabold text-sm mb-3 tracking-widest uppercase border-b border-white/30 pb-2">Products</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products/play-tonight" className="text-white hover:text-yellow-200 transition-colors">Play Tonight Capsules</Link></li>
                <li><Link to="/products/ameora" className="text-white hover:text-yellow-200 transition-colors">Améora Feminine Gel</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-white/30 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 shrink-0 mt-0.5" size={18} />
                <span className="text-white leading-relaxed">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-400 shrink-0 mt-0.5" size={18} />
                <span className="text-white">+91 92175 28957</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400 shrink-0" size={18} />
                <a href="mailto:bd@zeenmediconnect.com" className="text-white hover:text-yellow-200 transition-colors break-all">
                  bd@zeenmediconnect.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/30 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <p>&copy; {year} Zeen Mediconnect. All rights reserved.</p>
          <p className="text-xs text-white/80">Designed for global healthcare excellence.</p>
        </div>
      </div>
    </footer>
  );
}
