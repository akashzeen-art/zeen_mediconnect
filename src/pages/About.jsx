import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, ShieldCheck, Heart, Star, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16 bg-[#0D0D0D] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#6B3F1F]/20 py-16 sm:py-24 relative overflow-hidden border-b border-[#C9A84C]/20">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-6">
            About Zeen Mediconnect
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-[#FDF6E3]">
            Premium Wellness. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]">Trusted Care.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-[#FDF6E3]/50 max-w-3xl mx-auto leading-relaxed">
            Zeen Mediconnect is your trusted partner for premium herbal wellness products and world-class healthcare solutions.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 sm:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] font-medium text-sm mb-6 border border-[#C9A84C]/20">Who We Are</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#FDF6E3] mb-6 leading-tight">
                A Brand Built on Confidence & Natural Wellness
              </h2>
              <p className="text-[#FDF6E3]/60 leading-relaxed text-base sm:text-lg mb-6">
                At Zeen Mediconnect, we believe that confidence and well-being are fundamental to a fulfilling life. We create premium herbal wellness products — Play Tonight and Améora — crafted with the finest natural ingredients to support vitality, personal wellness, and self-assurance for both men and women.
              </p>
              <p className="text-[#FDF6E3]/60 leading-relaxed text-base sm:text-lg">
                Our products are rooted in centuries-old herbal wisdom, modernized with scientific formulation to deliver safe, effective, and elegant wellness solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[260px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A84C]/20">
              <img src="/mix productsc.png" alt="Wellness" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutra Zeen Brand */}
      <section className="py-14 sm:py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <img src="/img/nutrazeen.png" alt="Nutra Zeen" className="h-14 sm:h-16 w-auto object-contain mx-auto mb-4" />
            <p className="text-[#FDF6E3]/50 max-w-xl mx-auto text-sm sm:text-base">Our wellness product line — crafted for confidence and vitality.</p>
          </motion.div>

          {/* Play Tonight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[260px] sm:h-[340px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A84C]/20">
              <motion.img src="/product images/WhatsApp Image 2026-04-14 at 6.26.23 PM.jpeg"
                alt="Play Tonight" className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-sm font-medium mb-4">For Men</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#FDF6E3] mb-4">Play Tonight</h2>
              <p className="text-[#FDF6E3]/60 mb-6 text-sm sm:text-base">A premium herbal formulation designed to support stamina, vitality, endurance, and confidence.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ title: 'Enhanced Vitality', icon: Leaf }, { title: 'Improved Endurance', icon: ShieldCheck }, { title: 'Performance Support', icon: Star }, { title: 'Boosted Confidence', icon: Heart }].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="bg-[#1A1A1A] rounded-xl p-3 border border-[#C9A84C]/15 flex items-center gap-2">
                      <Icon size={16} className="text-[#C9A84C] shrink-0" />
                      <span className="text-[#FDF6E3] text-xs font-semibold">{b.title}</span>
                    </div>
                  );
                })}
              </div>
              <a href="https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-bold shadow-xl transition-all relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
                  <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
                  <span className="relative z-10 flex items-center gap-2">🔥 Buy Play Tonight <ArrowRight size={18} /></span>
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Ameora */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-sm font-medium mb-4"><Sparkles size={14} /> For Women</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#FDF6E3] mb-4">Améora</h2>
              <p className="text-[#FDF6E3]/60 mb-6 text-sm sm:text-base">A carefully crafted gel formula made with natural ingredients to help women feel their best — every day.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ title: 'Restored Firmness', icon: Heart }, { title: 'Increased Sensitivity', icon: Sparkles }, { title: 'Youthful Confidence', icon: Star }, { title: 'Better Connection', icon: ShieldCheck }].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="bg-[#1A1A1A] rounded-xl p-3 border border-[#C9A84C]/15 flex items-center gap-2">
                      <Icon size={16} className="text-[#C9A84C] shrink-0" />
                      <span className="text-[#FDF6E3] text-xs font-semibold">{b.title}</span>
                    </div>
                  );
                })}
              </div>
              <a href="https://ameora.fun/checkout?id=1035&clickid=0000e07e84d4-23d8-424f-83bc-e03a6f72eef4" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-bold shadow-xl transition-all relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
                  <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
                  <span className="relative z-10 flex items-center gap-2">🔥 Buy Améora <ArrowRight size={18} /></span>
                </motion.button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[260px] sm:h-[340px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 order-first lg:order-last">
              <motion.img src="/product images/WhatsApp Image 2026-04-14 at 6.27.56 PM.jpeg"
                alt="Améora" className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-3xl p-7 sm:p-10 border border-[#C9A84C]/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FDF6E3] mb-4">Our Mission</h3>
              <p className="text-[#FDF6E3]/50 leading-relaxed text-sm sm:text-base">
                To empower individuals with premium herbal wellness solutions that restore confidence, vitality, and well-being — naturally and safely.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A] rounded-3xl p-7 sm:p-10 border border-[#C9A84C]/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-6">
                <Eye size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FDF6E3] mb-4">Our Vision</h3>
              <p className="text-[#FDF6E3]/50 leading-relaxed text-sm sm:text-base">
                To be India's most trusted herbal wellness brand — where ancient wisdom meets modern science to transform lives with confidence and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#6B3F1F] to-[#C9A84C]/80 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0D0D0D] mb-4">Experience the Zeen Mediconnect Difference</h2>
          <p className="text-[#0D0D0D]/70 mb-8 max-w-xl mx-auto text-sm sm:text-base">Discover our premium herbal wellness products today.</p>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] text-[#C9A84C] rounded-full font-bold hover:bg-[#1A1A1A] transition-all">
              Contact Us <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
