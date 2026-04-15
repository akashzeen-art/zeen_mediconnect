import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo/zeen_medeconect copy.png" alt="Zeen Mediconnect" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-white/80">
              Bridging the gap between patients and world-class medical services while ensuring seamless access to high-quality healthcare and premium wellness solutions globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-teal-300 font-heading font-bold text-base mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-teal-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-teal-300 transition-colors">About Us</Link></li>
              <li><Link to="/services/partner-hospitals" className="text-white/80 hover:text-teal-300 transition-colors">Partner Hospitals</Link></li>
              <li><Link to="/services/treatment" className="text-white/80 hover:text-teal-300 transition-colors">Treatments</Link></li>
              <li><Link to="/products/play-tonight" className="text-white/80 hover:text-teal-300 transition-colors">Play Tonight</Link></li>
              <li><Link to="/products/ameora" className="text-white/80 hover:text-teal-300 transition-colors">Améora</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-teal-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sky-300 font-heading font-bold text-base mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="text-white/80 hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-teal-300 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-white/80 hover:text-teal-300 transition-colors">Disclaimer</Link></li>
            </ul>
            <div className="mt-8">
              <h3 className="text-rose-300 font-heading font-bold text-base mb-4 tracking-wide">Products</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products/play-tonight" className="text-white/80 hover:text-teal-300 transition-colors">Play Tonight Capsules</Link></li>
                <li><Link to="/products/ameora" className="text-white/80 hover:text-teal-300 transition-colors">Améora Feminine Gel</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-300 font-heading font-bold text-base mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 shrink-0 mt-0.5" size={18} />
                <span className="text-white/80 leading-relaxed">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-teal-400 shrink-0 mt-0.5" size={18} />
                <span className="text-white/80">+91 92175 28957</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400 shrink-0" size={18} />
                <a href="mailto:bd@zeenmediconnect.com" className="text-white/80 hover:text-teal-300 transition-colors break-all">
                  bd@zeenmediconnect.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>&copy; {year} Zeen Mediconnect. All rights reserved.</p>
          <p className="text-xs text-white/50">Designed for global healthcare excellence.</p>
        </div>
      </div>
    </footer>
  );
}
