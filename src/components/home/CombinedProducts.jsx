import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CombinedProducts() {
  return (
    <section className="py-24 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
            Unlock Your True Confidence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-rose-300">
              Play Tonight & Améora
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted Ayurvedic wellness solutions designed to support intimate confidence, vitality, and well-being for both men and women.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Play Tonight card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/25 hover:border-teal-400/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-lg">
              PT
            </div>
            <h3 className="text-xl font-bold text-white mb-3">For Men: Play Tonight</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Supports stamina, vitality, and performance for an empowered wellness experience.
            </p>
            <Link to="/products/play-tonight" className="inline-flex items-center gap-2 text-teal-300 text-sm font-semibold group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Center highlight */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">✦</div>
            <h3 className="text-xl font-bold text-white mb-3">Together, They Work Better</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Support a more confident and satisfying wellness journey for both partners.
            </p>
            <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-[#0A2540] rounded-full font-bold text-sm shadow-xl hover:shadow-white/20 transition-all">
                Buy Now
              </motion.button>
            </a>
          </motion.div>

          {/* Ameora card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/25 hover:border-rose-400/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-lg">
              AM
            </div>
            <h3 className="text-xl font-bold text-white mb-3">For Women: Améora</h3>
            <p className="text-rose-200 text-sm leading-relaxed mb-6">
              Supports firmness, confidence, and feminine well-being gently and naturally.
            </p>
            <Link to="/products/ameora" className="inline-flex items-center gap-2 text-rose-300 text-sm font-semibold group-hover:gap-3 transition-all">
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
            <div key={i} className="flex items-start gap-3 bg-white/20 rounded-2xl p-4 border border-white/25 text-left">
              <span className="text-teal-400 font-bold text-lg shrink-0">✓</span>
              <p className="text-blue-200 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
