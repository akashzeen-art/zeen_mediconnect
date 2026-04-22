import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, Zap, Activity, Star } from 'lucide-react';

export default function PlayTonight() {
  const benefits = [
    { title: 'Enhanced Vitality', desc: 'Naturally boosts stamina and energy levels for daily performance.', icon: Zap },
    { title: 'Improved Endurance', desc: 'Supports longer-lasting performance and sustained energy.', icon: Activity },
    { title: 'Performance Support', desc: 'Helps you stay ready and confident whenever desired.', icon: ShieldCheck },
    { title: 'Boosted Confidence', desc: 'Restores self-assurance and promotes a positive mindset.', icon: Leaf }
  ];

  const ingredients = [
    { name: 'Maca Root Extract', desc: 'Traditionally used to support energy and stamina.' },
    { name: 'Panax Ginseng', desc: 'A revered adaptogen known for vitality support.' },
    { name: 'Tribulus Terrestris', desc: 'Supports natural testosterone balance.' },
    { name: 'Ashwagandha Extract', desc: 'Reduces stress and supports overall well-being.' }
  ];

  return (
    <div className="pt-20 bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a4a7a] via-[#2563a8] to-[#3b82c4] text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-300/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-medium mb-6">
              Premium Herbal Formulation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
              Play Tonight<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                Performer Virility Capsules
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
              A premium herbal formulation designed to support stamina, vitality, endurance, and confidence for men's wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://playtonight.fun/" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2540] rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all">
                  Buy Now <ArrowRight size={18} />
                </motion.button>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <motion.img
              src="/product images/WhatsApp Image 2026-04-14 at 6.26.23 PM.jpeg"
              alt="Play Tonight Capsules"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.08, 1.04, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm md:text-base font-bold tracking-widest text-[#aa1824] uppercase mb-4">For Him</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-[#b8424b] mb-4">Your Sexual Life Matters</h3>
            <p className="text-xl md:text-2xl text-gray-500 font-medium mb-8">So Take Matters Into Your Own Hand</p>
            
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-16">
              Did you know that most men face challenges in sexual <span className="font-bold text-gray-800">activity, even though they remain highly interested in sex?</span> In fact, studies have revealed the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { stat: "40%", text: "of men experience erectile dysfunction after the age of 40." },
              { stat: "75%", text: "avoid intercourse altogether due to a lack of confidence." },
              { stat: "50%", text: "of men over 60 are still highly interested in having sex." },
              { stat: "50%", text: "find that embarrassment prevents them from having sexual relations." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(170,24,36,0.12)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 group-hover:bg-red-100 transition-colors" />
                <h4 className="text-5xl lg:text-5xl xl:text-6xl font-heading font-black text-[#0A2540] mb-4 group-hover:text-[#b8424b] transition-colors relative z-10">{s.stat}</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base relative z-10">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-4">Empower Your Wellness Experience</h2>
            <p className="text-gray-600 text-lg">Formulated with potent herbal ingredients, Play Tonight focuses on natural support for male vitality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 text-center hover:shadow-xl hover:bg-blue-100 transition-all">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-3">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Natural Formulation', desc: 'Each capsule is crafted with time-tested herbal extracts known for their wellness properties.' },
                  { step: '02', title: 'Daily Support', desc: 'Consistent use supports gradual, natural improvement in stamina and vitality.' },
                  { step: '03', title: 'Holistic Wellness', desc: 'Addresses both physical energy and mental confidence for a complete wellness experience.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2540] to-[#0f766e] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a4a7a] to-[#2563a8] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Pure Herbal Ingredients</h3>
              <div className="space-y-4">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-300 font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <div className="font-semibold text-white">{ing.name}</div>
                      <div className="text-blue-200 text-sm">{ing.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#0A2540] mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Michael R.', text: 'Play Tonight dramatically improved my stamina and confidence. The natural formulation gives me peace of mind.', rating: 5 },
              { name: 'James T.', text: 'I noticed a real difference in my energy levels and overall vitality. Highly recommend this product.', rating: 5 }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left">
                <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-gray-600 text-sm italic mb-4">"{t.text}"</p>
                <div className="font-bold text-[#0A2540] text-sm">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#0f766e] text-center px-4">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Experience Play Tonight?</h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">Contact us to place your order or learn more about our premium herbal wellness products.</p>
        <a href="https://playtonight.fun/" target="_blank" rel="noopener noreferrer">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2540] rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all">
            Buy Now <ArrowRight size={18} />
          </motion.button>
        </a>
      </section>

      {/* Disclaimer */}
      <div className="py-8 text-center max-w-4xl mx-auto px-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          Disclaimer: This product is a herbal formulation. Results may vary from person to person. Please consult your physician before use, especially if you have pre-existing medical conditions. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </div>
  );
}
