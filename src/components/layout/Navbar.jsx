import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Product',
    dropdown: [
      { name: 'Play Tonight', path: '/products/play-tonight', desc: "Men's Herbal Wellness" },
      { name: 'Améora', path: '/products/ameora', desc: 'Feminine Wellness Gel' }
    ]
  },
  {
    name: 'Service',
    dropdown: [
      { name: 'Partner Hospitals', path: '/services/partner-hospitals', desc: 'Accredited Global Network' },
      { name: 'Treatment', path: '/services/treatment', desc: 'Specialized Medical Care' }
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

const buyNowOptions = [
  { label: 'Play Tonight', desc: "Men's Wellness", href: 'https://playtonight.fun/', initials: 'PT', color: 'bg-blue-100 text-blue-600' },
  { label: 'Améora', desc: 'Feminine Wellness', href: 'https://ameora.fun/', initials: 'AM', color: 'bg-rose-100 text-rose-600' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [buyOpen, setBuyOpen] = useState(false);
  const [mobileBuyOpen, setMobileBuyOpen] = useState(false);
  const buyRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setBuyOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => { if (buyRef.current && !buyRef.current.contains(e.target)) setBuyOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo/zeen_medeconect copy.png" alt="Zeen Mediconnect Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}>
                {link.dropdown ? (
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${scrolled || !isHome ? 'text-gray-700 hover:text-[#0f766e] hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link to={link.path}
                    className={`block px-4 py-2 rounded-lg font-medium text-sm transition-colors ${scrolled || !isHome ? 'text-gray-700 hover:text-[#0f766e] hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'} ${location.pathname === link.path ? (scrolled || !isHome ? 'text-[#0f766e]' : 'text-white') : ''}`}>
                    {link.name}
                  </Link>
                )}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-56 rounded-2xl shadow-xl bg-white ring-1 ring-black/5 overflow-hidden">
                        <div className="py-2 px-2">
                          {link.dropdown.map((item) => (
                            <Link key={item.name} to={item.path}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group">
                              <span className="font-semibold text-[#0A2540] text-sm group-hover:text-[#0f766e] transition-colors">{item.name}</span>
                              <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA — Buy Now with dropdown */}
          <div className="hidden md:block relative" ref={buyRef}>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => setBuyOpen(!buyOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f766e] text-white rounded-full font-semibold text-sm shadow-md hover:bg-teal-700 transition-colors">
              Buy Now <ChevronDown size={14} className={`transition-transform duration-200 ${buyOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {buyOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl bg-white ring-1 ring-black/5 overflow-hidden z-50">
                  {buyNowOptions.map((opt, i) => (
                    <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-5 py-4 hover:bg-rose-50 transition-colors group ${i === 0 ? 'border-b border-gray-100' : ''}`}>
                      <div className={`w-8 h-8 rounded-full ${opt.color} flex items-center justify-center font-bold text-xs shrink-0`}>{opt.initials}</div>
                      <div>
                        <div className="font-bold text-[#0A2540] text-sm group-hover:text-rose-600 transition-colors">{opt.label}</div>
                        <div className="text-xs text-gray-400">{opt.desc}</div>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-rose-500 transition-colors" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'text-[#0A2540] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{link.name}</div>
                      <div className="pl-3 space-y-1 border-l-2 border-teal-100 ml-3">
                        {link.dropdown.map((item) => (
                          <Link key={item.name} to={item.path}
                            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0f766e] hover:bg-gray-50 rounded-lg transition-colors">
                            {item.name}
                            <span className="block text-xs text-gray-400">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path}
                      className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-[#0f766e] hover:bg-gray-50 rounded-lg transition-colors">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Buy Now dropdown */}
              <div className="pt-4 px-3">
                <button onClick={() => setMobileBuyOpen(!mobileBuyOpen)}
                  className="w-full py-3 bg-[#0f766e] text-white rounded-xl font-bold text-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                  Buy Now <ChevronDown size={16} className={`transition-transform duration-200 ${mobileBuyOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileBuyOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} className="mt-2 bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden">
                      {buyNowOptions.map((opt, i) => (
                        <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-4 py-3 hover:bg-rose-50 transition-colors ${i === 0 ? 'border-b border-gray-100' : ''}`}>
                          <div className={`w-8 h-8 rounded-full ${opt.color} flex items-center justify-center font-bold text-xs shrink-0`}>{opt.initials}</div>
                          <div>
                            <div className="font-bold text-[#0A2540] text-sm">{opt.label}</div>
                            <div className="text-xs text-gray-400">{opt.desc}</div>
                          </div>
                          <ArrowRight size={14} className="ml-auto text-gray-300" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
