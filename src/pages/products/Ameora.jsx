import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Shield, Droplets, Star } from 'lucide-react';

export default function Ameora() {
  const benefits = [
    { title: 'Restored Tightness', desc: 'Natural astringent effects carefully balanced for comfort.', icon: Heart },
    { title: 'Increased Sensitivity', desc: 'Promotes healthy, supple dermal responses naturally.', icon: Droplets },
    { title: 'Youthful Confidence', desc: 'Feel reassured and comfortable in your own skin every day.', icon: Sparkles },
    { title: 'Safe & Gentle', desc: 'Formulated with natural extracts, free from harsh chemicals.', icon: Shield }
  ];

  const ingredients = [
    { name: 'Quercus infectoria', desc: 'Known for its natural astringent and toning properties.' },
    { name: 'Phyllanthus emblica', desc: 'Rich in antioxidants, supports skin health and elasticity.' },
    { name: 'Saraca asoca', desc: 'Traditionally used in feminine wellness formulations.' },
    { name: 'Alum', desc: 'A natural mineral with gentle toning and cleansing effects.' }
  ];

  return (
    <div className="pt-20 bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-rose-200 text-rose-600 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
              <Sparkles size={14} /> Premium Feminine Wellness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-rose-950 mb-6 leading-tight">
              Améora<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">
                Feminine Tightening Gel
              </span>
            </h1>
            <p className="text-xl text-rose-800/80 mb-8 max-w-lg leading-relaxed">
              A premium feminine wellness formulation designed to support firmness, comfort, elasticity, and renewed confidence.
            </p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-xl hover:bg-rose-700 transition-all">
                Experience Améora <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <motion.img
              src="/product images/WhatsApp Image 2026-04-14 at 6.27.56 PM.jpeg"
              alt="Améora"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.08, 1.04, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm md:text-base font-bold tracking-widest text-[#aa1824] uppercase mb-4">For Her</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-[#b8424b] mb-4">Your Intimate Health Matters</h3>
            <p className="text-xl md:text-2xl text-gray-500 font-medium mb-8">So Take Control of Your Feminine Well-Being</p>
            
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-16">
              Did you know that many women silently experience changes in <span className="font-bold text-gray-800">vaginal firmness</span>, even though they still desire closeness and satisfaction in their intimate life? Research indicates the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { stat: "40%", text: "of women notice a decline in vaginal tightness after childbirth or with age." },
              { stat: "70%", text: "avoid intimacy altogether due to a lack of confidence." },
              { stat: "55%", text: "feel reduced tightness affects their pleasure based on recent studies." },
              { stat: "35%", text: "report that self-consciousness prevents them from enjoying fulfilling intimacy." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-rose-50 hover:shadow-[0_8px_30px_rgb(225,29,72,0.1)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 group-hover:bg-rose-100 transition-colors" />
                <h4 className="text-5xl lg:text-5xl xl:text-6xl font-heading font-black text-[#0A2540] mb-4 group-hover:text-[#b8424b] transition-colors relative z-10">{s.stat}</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base relative z-10">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-950 mb-4">Renew Your Confidence</h2>
            <p className="text-gray-600 text-lg">Embrace natural care crafted with reverence for women's wellness. Améora provides gentle, effective support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-rose-50/50 p-8 rounded-3xl border border-rose-100 text-center hover:bg-rose-50 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-white text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-rose-950 mb-3">{b.title}</h3>
                  <p className="text-rose-700/70 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-950 mb-6">Nurturing Natural Ingredients</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Each ingredient in Améora is carefully selected from nature's finest botanical sources, known for centuries in traditional wellness practices.</p>
              <div className="space-y-4">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-2xl p-4 border border-rose-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <div className="font-semibold text-rose-950 italic">{ing.name}</div>
                      <div className="text-gray-500 text-sm">{ing.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-900 to-pink-800 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">The Améora Promise</h3>
              <div className="space-y-4">
                {['100% Natural Extracts', 'Dermatologically Considered', 'No Harsh Chemicals', 'Gentle & Effective', 'Premium Quality Assured'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 border border-white/10">
                    <span className="text-rose-300 font-bold">✓</span>
                    <span className="text-rose-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-rose-950 mb-12">What Women Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Sarah L.', text: 'Améora has helped me regain my feminine confidence and improved comfort naturally. The product is elegant, soothing, and truly effective.', rating: 5 },
              { name: 'Priya M.', text: 'I love how gentle yet effective Améora is. It feels luxurious and the natural ingredients give me complete confidence in using it.', rating: 5 }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-rose-50 rounded-2xl p-6 border border-rose-100 text-left">
                <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-rose-800/80 text-sm italic mb-4">"{t.text}"</p>
                <div className="font-bold text-rose-950 text-sm">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-center px-4">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Experience Améora?</h2>
        <p className="text-rose-100 mb-8 max-w-xl mx-auto">Contact us to place your order or learn more about our premium feminine wellness formulation.</p>
        <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all">
            Buy Now <ArrowRight size={18} />
          </motion.button>
        </a>
      </section>

      {/* Disclaimer */}
      <div className="py-8 text-center max-w-4xl mx-auto px-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          Disclaimer: This product is formulated with natural extracts. Results may vary. For external use only. If irritation occurs, discontinue use and consult a healthcare professional. Keep out of reach of children.
        </p>
      </div>
    </div>
  );
}
