import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const whatsappUrl = `https://wa.me/919217528957?text=${encodeURIComponent('Hello! I am interested in your products/services. Please help me.')}`;

const linkHover = "text-[#FDF6E3]/70 hover:text-[#C9A84C] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-[#FDF6E3] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center group">
              <motion.img
                src="/logo/zeen_medeconect copy.png"
                alt="Zeen Mediconnect"
                className="h-14 w-auto object-contain brightness-0 invert sepia saturate-[3] hue-rotate-[5deg] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]"
                whileHover={{ scale: 1.03 }}
              />
            </Link>
            <p className="text-xs text-[#C9A84C]/50 -mt-2">Nutra Zeen — A brand by Zeen Mediconnect</p>
            <p className="text-sm leading-relaxed text-[#FDF6E3]/60">
              Premium herbal wellness products crafted for confidence, vitality, and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9A84C] font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-[#C9A84C]/20 pb-2">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Play Tonight', to: '/products/play-tonight' },
                { label: 'Améora', to: '/products/ameora' },
                { label: 'Contact Us', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkHover}>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#C9A84C] font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-[#C9A84C]/20 pb-2">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Refund & Cancellation', to: '/refund-policy' },
                { label: 'Disclaimer', to: '/disclaimer' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkHover}>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A84C] font-heading font-extrabold text-sm mb-4 tracking-widest uppercase border-b border-[#C9A84C]/20 pb-2">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <MapPin className="text-[#C9A84C]" size={14} />
                </div>
                <span className="text-[#FDF6E3]/60 leading-relaxed text-xs">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Phone className="text-[#C9A84C]" size={14} />
                </div>
                <span className="text-[#FDF6E3]/60 text-xs group-hover:text-[#FDF6E3] transition-colors">+91 92175 28957</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#FDF6E3]/60 hover:text-green-400 transition-colors text-xs">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Mail className="text-[#C9A84C]" size={14} />
                </div>
                <a href="mailto:bd@zeenmediconnect.com" className="text-[#FDF6E3]/60 hover:text-[#C9A84C] transition-colors break-all text-xs">
                  bd@zeenmediconnect.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#C9A84C]/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FDF6E3]/40">
          <p>&copy; {year} Zeen Mediconnect. All rights reserved.</p>
          <p className="text-[#C9A84C]/30">Nutra Zeen — Premium Herbal Wellness</p>
        </div>
      </div>
    </footer>
  );
}
