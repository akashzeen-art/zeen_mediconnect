import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, ShieldCheck, Heart, Star, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2563a8] to-[#0f766e] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-medium mb-6">
            About Zeen Mediconnect
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            Premium Wellness. Trusted Care.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Zeen Mediconnect is your trusted partner for premium Ayurvedic wellness products and world-class healthcare solutions.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#0f766e] font-medium text-sm mb-6 border border-teal-100">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-6 leading-tight">
                A Brand Built on Confidence & Natural Wellness
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                At Zeen Mediconnect, we believe that confidence and well-being are fundamental to a fulfilling life. We create premium Ayurvedic wellness products — Play Tonight and Améora — crafted with the finest natural ingredients to support vitality, intimacy, and self-assurance for both men and women.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our products are rooted in centuries-old Ayurvedic wisdom, modernized with scientific formulation to deliver safe, effective, and elegant wellness solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img src="/photo-1516841273335-e39b37888115.avif" alt="Wellness" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Play Tonight Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f7ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
              For Men
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-4">Play Tonight — Men's Ayurvedic Wellness</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A premium Ayurvedic formulation designed to support stamina, vitality, endurance, and confidence for men's wellness.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img src="/product images/WhatsApp Image 2026-04-14 at 6.26.23 PM.jpeg"
                alt="Play Tonight" className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Enhanced Vitality', icon: Leaf },
                  { title: 'Improved Endurance', icon: ShieldCheck },
                  { title: 'Performance Support', icon: Star },
                  { title: 'Boosted Confidence', icon: Heart }
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="font-semibold text-[#0A2540] text-sm">{b.title}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Key Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {['Maca Root Extract', 'Panax Ginseng', 'Tribulus Terrestris', 'Ashwagandha Extract'].map((ing, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">{ing}</span>
                  ))}
                </div>
              </div>
              <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white rounded-full font-bold shadow-lg hover:bg-[#1e3a5f] transition-all">
                  Buy Play Tonight <ArrowRight size={18} />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ameora Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF2F8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4 border border-rose-100">
              <Sparkles size={14} /> For Women
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-950 mb-4">Améora — Feminine Wellness Gel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A premium feminine wellness formulation designed to support firmness, comfort, elasticity, and renewed confidence.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Restored Tightness', icon: Heart },
                  { title: 'Increased Sensitivity', icon: Sparkles },
                  { title: 'Youthful Confidence', icon: Star },
                  { title: 'Better Intimacy', icon: ShieldCheck }
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-rose-100 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="font-semibold text-rose-950 text-sm">{b.title}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-rose-900 mb-3 text-sm uppercase tracking-wider">Key Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {['Quercus infectoria', 'Phyllanthus emblica', 'Saraca asoca', 'Alum'].map((ing, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-full text-sm font-medium italic">{ing}</span>
                  ))}
                </div>
              </div>
              <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 transition-all">
                  Buy Améora <ArrowRight size={18} />
                </motion.button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img src="/product images/WhatsApp Image 2026-04-14 at 6.27.56 PM.jpeg"
                alt="Améora" className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10 border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals with premium Ayurvedic wellness solutions that restore confidence, vitality, and well-being — naturally and safely.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-10 border border-rose-100">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted Ayurvedic wellness brand — where ancient herbal wisdom meets modern science to transform lives with confidence and care.
              </p>
            </motion.div>
          </div>

          {/* 10% Medical — compact single section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#1e3a5f] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold uppercase tracking-wider mb-4">Healthcare Services</div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Global Medical Tourism & Healthcare</h3>
                <p className="text-blue-200 leading-relaxed text-sm">
                  Beyond wellness products, Zeen Mediconnect also connects patients with world-class hospitals and medical specialists across India for affordable, high-quality treatments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Partner Hospitals', 'Medical Tourism', 'Treatment Support', 'Patient Assistance'].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 border border-white/10 text-center">
                    <span className="text-white/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Link to="/services/partner-hospitals">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e3a5f] rounded-full font-bold text-sm shadow-lg hover:shadow-white/20 transition-all">
                  View Healthcare Services <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Experience the Zeen Mediconnect Difference</h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">Discover our premium Ayurvedic wellness products and start your journey to confidence today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-rose-600 rounded-full font-bold shadow-lg hover:shadow-white/20 transition-all">
                Buy Now
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                Contact Us <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
