import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

export default function ProductOverview() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* ── PLAY TONIGHT ── */}
      <section className="py-24 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Feature banner */}
          <motion.div {...fadeUp()} className="bg-[#1e3a5f] rounded-3xl p-8 md:p-12 mb-16 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
                  Men's Wellness
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4 leading-tight">
                  2 Capsules at a Time for Maximum Performance
                </h2>
                <p className="text-blue-200 leading-relaxed mb-6">
                  Play Tonight capsules are crafted to support stamina, vitality, and confidence — helping men enjoy a more empowered wellness experience.
                </p>
                {/* Price + Offer */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-extrabold text-white">₹699</span>
                  <span className="text-lg text-blue-300 line-through">₹999</span>
                  <span className="px-2 py-1 bg-green-400 text-green-900 text-xs font-extrabold rounded-full">30% OFF</span>
                </div>
                <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  🔥 Limited Time Offer — Hurry!
                </motion.div>
              </div>
              <div className="flex justify-center">
                <img src="/Capsules.png" alt="Play Tonight Capsules" className="h-72 object-contain drop-shadow-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Benefits grid around product */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            {/* Left benefits */}
            <div className="space-y-6">
              {[
                { title: 'Enhanced Vitality', desc: 'Naturally boosts stamina and energy levels.' },
                { title: 'Improved Endurance', desc: 'Supports longer-lasting performance.' }
              ].map((b, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] mb-1">{b.title}</h4>
                      <p className="text-sm text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center product image */}
            <motion.div {...fadeUp(0.2)} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-60 scale-110" />
                <img src="/Capsules.png" alt="Play Tonight" className="relative w-64 h-64 object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* Right benefits */}
            <div className="space-y-6">
              {[
                { title: 'Stronger Performance Support', desc: 'Helps you stay ready whenever desired.' },
                { title: 'Boosted Confidence', desc: 'Restores self-assurance and comfort.' }
              ].map((b, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm shrink-0">{i + 3}</div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] mb-1">{b.title}</h4>
                      <p className="text-sm text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Numbered benefits block */}
          <motion.div {...fadeUp(0.1)} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg mb-10">
            <h3 className="text-2xl font-heading font-bold text-[#0A2540] mb-8 text-center">Why Play Tonight Works</h3>
            <div className="space-y-6">
              {[
                'Helps improve stamina and endurance for more powerful performance.',
                'Supports natural vitality and energy for deeper satisfaction.',
                'Boosts confidence and well-being, allowing you to connect at your best.'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2540] to-[#0f766e] flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ingredients + CTA */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h4 className="font-heading font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Key Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {['Maca Root Extract', 'Panax Ginseng', 'Tribulus Terrestris', 'Ashwagandha Extract'].map((ing, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">{ing}</span>
                ))}
              </div>
            </div>
            <Link to="/products/play-tonight">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white rounded-full font-bold shadow-lg hover:bg-[#1E3A8A] transition-colors whitespace-nowrap">
                View Play Tonight <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── AMEORA ── */}
      <section className="py-24 bg-gradient-to-b from-[#FDF2F8] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose-50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Feature banner */}
          <motion.div {...fadeUp()} className="bg-gradient-to-r from-rose-900 to-pink-800 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-800/50 border border-rose-300/30 text-rose-200 text-xs font-bold uppercase tracking-widest mb-4">
                  Feminine Wellness
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4 leading-tight">
                  Améora — Elegance Meets Natural Wellness
                </h2>
                <p className="text-rose-200 leading-relaxed mb-6">
                  A premium feminine wellness formulation crafted with natural extracts to support comfort, elasticity, and renewed confidence.
                </p>
                {/* Price + Offer */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-extrabold text-white">₹799</span>
                  <span className="text-lg text-rose-300 line-through">₹1,142</span>
                  <span className="px-2 py-1 bg-green-400 text-green-900 text-xs font-extrabold rounded-full">30% OFF</span>
                </div>
                <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  🔥 Limited Time Offer — Hurry!
                </motion.div>
              </div>
              <div className="flex justify-center">
                <img src="/WomenCapsules.png" alt="Ameora" className="h-72 object-contain drop-shadow-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="space-y-6">
              {[
                { title: 'Restored Tightness', desc: 'Natural astringent effects, carefully balanced.' },
                { title: 'Increased Sensitivity', desc: 'Promotes healthy, supple responses.' }
              ].map((b, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-rose-950 mb-1">{b.title}</h4>
                      <p className="text-sm text-rose-700/70">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.2)} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl opacity-60 scale-110" />
                <img src="/WomenCapsules.png" alt="Ameora" className="relative w-64 h-64 object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: 'Youthful Confidence', desc: 'Feel reassured and comfortable every day.' },
                { title: 'Better Intimacy', desc: 'Supports a more fulfilling wellness journey.' }
              ].map((b, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm shrink-0">{i + 3}</div>
                    <div>
                      <h4 className="font-bold text-rose-950 mb-1">{b.title}</h4>
                      <p className="text-sm text-rose-700/70">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ingredients + CTA */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h4 className="font-heading font-bold text-rose-900 mb-3 text-sm uppercase tracking-wider">Key Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {['Quercus infectoria', 'Phyllanthus emblica', 'Saraca asoca', 'Alum'].map((ing, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-rose-200 text-rose-700 rounded-full text-sm font-medium italic">{ing}</span>
                ))}
              </div>
            </div>
            <Link to="/products/ameora">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 transition-colors whitespace-nowrap">
                View Améora <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
