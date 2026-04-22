import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

function BuyNowDropdown({ className = '' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <motion.button
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-full font-bold text-sm shadow-xl hover:bg-rose-700 transition-all">
        Buy Now <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            <a href="https://playtonight.fun/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 hover:bg-rose-50 transition-colors group border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">PT</div>
              <div>
                <div className="font-bold text-[#0A2540] text-sm group-hover:text-rose-600 transition-colors">Play Tonight</div>
                <div className="text-xs text-gray-400">Men's Wellness</div>
              </div>
              <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-rose-500 transition-colors" />
            </a>
            <a href="https://ameora.fun/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 hover:bg-rose-50 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs shrink-0">AM</div>
              <div>
                <div className="font-bold text-[#0A2540] text-sm group-hover:text-rose-600 transition-colors">Améora</div>
                <div className="text-xs text-gray-400">Feminine Wellness</div>
              </div>
              <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-rose-500 transition-colors" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CombinedProducts() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #be185d 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#0A2540] mb-6 leading-tight">
            Unlock Your True Confidence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">
              Play Tonight & Améora
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted Herbal wellness solutions designed to support intimate confidence, vitality, and well-being for both men and women.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Play Tonight card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg hover:border-teal-400/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-lg">PT</div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-3">For Men: Play Tonight</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Supports stamina, vitality, and performance for an empowered wellness experience.</p>
            <Link to="/products/play-tonight" className="inline-flex items-center gap-2 text-teal-600 text-sm font-semibold group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Center highlight */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-200 text-center flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">✦</div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-3">Together, They Work Better</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Support a more confident and satisfying wellness journey for both partners.</p>
            <BuyNowDropdown />
          </motion.div>

          {/* Ameora card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-rose-100 shadow-lg hover:border-rose-400/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-lg">AM</div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-3">For Women: Améora</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Supports firmness, confidence, and feminine well-being gently and naturally.</p>
            <Link to="/products/ameora" className="inline-flex items-center gap-2 text-rose-500 text-sm font-semibold group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom bullets */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            'For Men: Play Tonight Capsules — support stamina, vitality, and performance',
            'For Women: Améora Gel — support firmness, confidence, and feminine well-being',
            'Together, they support a more confident and satisfying wellness journey'
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-rose-100 shadow-sm text-left">
              <span className="text-rose-500 font-bold text-lg shrink-0">✓</span>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
