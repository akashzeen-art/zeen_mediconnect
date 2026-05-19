import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Product',
    dropdown: [
      { name: 'Play Tonight', path: '/products/play-tonight', desc: "Men's Herbal Wellness" },
      { name: 'Améora', path: '/products/ameora', desc: 'Feminine Wellness Gel' }
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

const buyNowOptions = [
  { label: 'Play Tonight', desc: "Men's Wellness", href: 'https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487', initials: 'PT' },
  { label: 'Améora', desc: 'Feminine Wellness', href: 'https://ameora.fun/checkout?id=1035&clickid=0000e07e84d4-23d8-424f-83bc-e03a6f72eef4', initials: 'AM' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [buyOpen, setBuyOpen] = useState(false);
  const [mobileBuyOpen, setMobileBuyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buyRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => { if (buyRef.current && !buyRef.current.contains(e.target)) setBuyOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        height: '64px',
        background: scrolled ? 'rgba(13,13,13,0.97)' : '#0D0D0D',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/logo/zeen_medeconect copy.png"
              alt="Zeen Mediconnect"
              className="h-12 w-auto object-contain brightness-0 invert sepia saturate-[3] hue-rotate-[5deg] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.6)]"
              whileHover={{ scale: 1.04 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = link.path === location.pathname;
              return (
                <div key={link.name} className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  {link.dropdown ? (
                    <button className={`relative flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 group
                      ${activeDropdown === link.name ? 'text-[#C9A84C]' : 'text-[#FDF6E3] hover:text-[#C9A84C]'}`}>
                      <span className="absolute inset-0 rounded-lg bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/8 transition-all duration-200" />
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-[#C9A84C]' : ''}`} />
                    </button>
                  ) : (
                    <Link to={link.path} className={`relative block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 group
                      ${isActive ? 'text-[#C9A84C]' : 'text-[#FDF6E3] hover:text-[#C9A84C]'}`}>
                      <span className="absolute inset-0 rounded-lg bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/8 transition-all duration-200" />
                      {link.name}
                      {isActive && (
                        <motion.span layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A84C] rounded-full" />
                      )}
                    </Link>
                  )}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-56 rounded-2xl shadow-2xl bg-[#1A1A1A] border border-[#C9A84C]/20 overflow-hidden"
                          style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.1)' }}>
                          <div className="py-2 px-2">
                            {link.dropdown.map((item) => (
                              <Link key={item.name} to={item.path}
                                className="flex flex-col px-4 py-3 rounded-xl hover:bg-[#C9A84C]/10 transition-all duration-200 group">
                                <span className="font-semibold text-[#FDF6E3] text-sm group-hover:text-[#C9A84C] transition-colors">{item.name}</span>
                                <span className="text-xs text-[#C9A84C]/50 mt-0.5">{item.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Buy Now */}
          <div className="hidden md:block relative" ref={buyRef}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(220,38,38,0.7)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setBuyOpen(!buyOpen)}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm overflow-hidden text-white"
              style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 15px rgba(220,38,38,0.5)' }}>
              <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
              <span className="relative z-10 flex items-center gap-2">🔥 Buy Now <ChevronDown size={14} className={`transition-transform duration-200 ${buyOpen ? 'rotate-180' : ''}`} /></span>
            </motion.button>
            <AnimatePresence>
              {buyOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl bg-[#1A1A1A] border border-[#C9A84C]/20 overflow-hidden z-50"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  {buyNowOptions.map((opt, i) => (
                    <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-5 py-4 hover:bg-[#C9A84C]/10 transition-all duration-200 group ${i === 0 ? 'border-b border-[#C9A84C]/20' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center font-bold text-xs text-[#C9A84C] shrink-0 group-hover:bg-[#C9A84C]/30 transition-colors">{opt.initials}</div>
                      <div>
                        <div className="font-bold text-[#FDF6E3] text-sm group-hover:text-[#C9A84C] transition-colors">{opt.label}</div>
                        <div className="text-xs text-[#C9A84C]/50">{opt.desc}</div>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-[#C9A84C]/30 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#FDF6E3] hover:bg-[#C9A84C]/10 transition-colors">
            <motion.span
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              className="block text-xl font-bold text-[#C9A84C]">
              {isOpen ? '✕' : '☰'}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0D0D]/98 border-t border-[#C9A84C]/20 overflow-hidden"
            style={{ backdropFilter: 'blur(12px)' }}>
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}>
                  {link.dropdown ? (
                    <div>
                      <div className="px-3 py-2 text-xs font-bold text-[#C9A84C]/60 uppercase tracking-wider">{link.name}</div>
                      <div className="pl-3 space-y-1 border-l-2 border-[#C9A84C]/20 ml-3">
                        {link.dropdown.map((item) => (
                          <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}
                            className="block px-3 py-2.5 text-sm font-medium text-[#FDF6E3] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 rounded-lg transition-all duration-200">
                            {item.name}
                            <span className="block text-xs text-[#C9A84C]/40">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path} onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200
                        ${location.pathname === link.path
                          ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                          : 'text-[#FDF6E3] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5'}`}>
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div className="pt-4 px-3 space-y-2"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <button onClick={() => setMobileBuyOpen(!mobileBuyOpen)}
                  className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 15px rgba(220,38,38,0.4)' }}>
                  🔥 Buy Now <ChevronDown size={16} className={`transition-transform duration-200 ${mobileBuyOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileBuyOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} className="bg-[#1A1A1A] rounded-xl border border-[#C9A84C]/20 overflow-hidden">
                      {buyNowOptions.map((opt, i) => (
                        <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-4 py-3.5 hover:bg-[#C9A84C]/10 transition-all duration-200 group ${i === 0 ? 'border-b border-[#C9A84C]/20' : ''}`}>
                          <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center font-bold text-xs text-[#C9A84C] shrink-0">{opt.initials}</div>
                          <div>
                            <div className="font-bold text-[#FDF6E3] text-sm group-hover:text-[#C9A84C] transition-colors">{opt.label}</div>
                            <div className="text-xs text-[#C9A84C]/50">{opt.desc}</div>
                          </div>
                          <ArrowRight size={14} className="ml-auto text-[#C9A84C]/30 group-hover:text-[#C9A84C] transition-colors" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
