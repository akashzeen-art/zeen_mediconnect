import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const buyBtnStyle = {
  background: 'linear-gradient(135deg, #EF4444, #DC2626)',
  boxShadow: '0 0 12px rgba(220,38,38,0.5)'
};

export default function NutraZeenSection() {
  return (
    <section className="py-12 sm:py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#6B3F1F]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <img src="/img/nutrazeen.png" alt="Nutra Zeen" className="h-20 sm:h-24 w-auto object-contain mx-auto mb-6 drop-shadow-2xl" />
          </motion.div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
            <span className="text-[#C9A84C]/60 text-xs font-bold uppercase tracking-[0.3em]">A Brand by Zeen Mediconnect</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
          </div>
          <p className="text-[#FDF6E3]/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Premium herbal wellness products crafted for confidence, vitality, and well-being — for both men and women.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Play Tonight */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(201,168,76,0.15)' }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all duration-500 cursor-default"
            style={{ minHeight: '320px' }}>
            <div className="absolute inset-0">
              <img src="/img/7 (3).jpeg" alt="" className="w-full h-full object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/70 to-[#6B3F1F]/50" />
            </div>
            {/* Gold corner glow on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9A84C]/20 to-transparent group-hover:from-[#C9A84C]/40 transition-all duration-500" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#C9A84C] shadow-lg shadow-[#C9A84C]/50 group-hover:scale-150 transition-transform duration-300" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between" style={{ minHeight: '320px' }}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5 group-hover:bg-[#C9A84C]/25 transition-colors">✦ For Men</div>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#FDF6E3] mb-3 leading-tight group-hover:text-[#E8C97A] transition-colors duration-300">Play<br />Tonight</h3>
                <p className="text-[#FDF6E3]/50 text-sm leading-relaxed mb-5 max-w-xs">Premium herbal tablets to support stamina, vitality, endurance, and confidence.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Maca Root', 'Panax Ginseng', 'Ashwagandha', 'Tribulus'].map((ing, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/15 text-[#C9A84C]/70 text-xs rounded-full hover:bg-[#C9A84C]/20 hover:text-[#C9A84C] transition-all cursor-default">{ing}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#C9A84C]/40 uppercase tracking-wider mb-1">Price</div>
                  <span className="text-3xl font-extrabold text-[#C9A84C]">₹999</span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link to="/products/play-tonight" className="flex-1 sm:flex-none">
                    <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(201,168,76,0.25)' }} whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-2.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] rounded-full text-sm font-semibold transition-all duration-200">
                      Details
                    </motion.button>
                  </Link>
                  <a href="https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487" className="flex-1 sm:flex-none">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(220,38,38,0.7)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-white rounded-full text-sm font-bold relative overflow-hidden"
                      style={buyBtnStyle}>
                      <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
                      <span className="relative z-10 flex items-center gap-1">🔥 Buy Now <ArrowRight size={14} /></span>
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ameora */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(201,168,76,0.15)' }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all duration-500 cursor-default"
            style={{ minHeight: '320px' }}>
            <div className="absolute inset-0">
              <img src="/img/8.jpg.jpeg" alt="" className="w-full h-full object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/70 to-[#6B3F1F]/50" />
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#C9A84C]/20 to-transparent group-hover:from-[#C9A84C]/40 transition-all duration-500" />
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#C9A84C] shadow-lg shadow-[#C9A84C]/50 group-hover:scale-150 transition-transform duration-300" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between" style={{ minHeight: '320px' }}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5 group-hover:bg-[#C9A84C]/25 transition-colors">✦ For Women</div>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#FDF6E3] mb-3 leading-tight group-hover:text-[#E8C97A] transition-colors duration-300">Améora</h3>
                <p className="text-[#FDF6E3]/50 text-sm leading-relaxed mb-5 max-w-xs">Premium feminine wellness gel for firmness, comfort, elasticity, and renewed confidence.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Quercus infectoria', 'Phyllanthus emblica', 'Saraca asoca', 'Alum'].map((ing, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/15 text-[#C9A84C]/70 text-xs rounded-full italic hover:bg-[#C9A84C]/20 hover:text-[#C9A84C] transition-all cursor-default">{ing}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#C9A84C]/40 uppercase tracking-wider mb-1">Price</div>
                  <span className="text-3xl font-extrabold text-[#C9A84C]">₹1,099</span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link to="/products/ameora" className="flex-1 sm:flex-none">
                    <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(201,168,76,0.25)' }} whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-2.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] rounded-full text-sm font-semibold transition-all duration-200">
                      Details
                    </motion.button>
                  </Link>
                  <a href="https://ameora.fun/checkout?id=1035&clickid=0000e07e84d4-23d8-424f-83bc-e03a6f72eef4" className="flex-1 sm:flex-none">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(220,38,38,0.7)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-white rounded-full text-sm font-bold relative overflow-hidden"
                      style={buyBtnStyle}>
                      <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
                      <span className="relative z-10 flex items-center gap-1">🔥 Buy Now <ArrowRight size={14} /></span>
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
