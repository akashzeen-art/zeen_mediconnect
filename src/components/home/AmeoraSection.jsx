import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Shield, Droplets } from 'lucide-react';

const ameoraImages = [
  '/new_img/ameora/9.png',
  
  '/new_img/ameora/4.png',
  '/new_img/ameora/5.png',
  '/new_img/ameora/14.png',
  
];

const benefits = [
  { icon: Heart, title: 'Restored Firmness', desc: 'Natural astringent effects.' },
  { icon: Droplets, title: 'Increased Sensitivity', desc: 'Healthy, supple responses.' },
  { icon: Sparkles, title: 'Youthful Confidence', desc: 'Comfortable every day.' },
  { icon: Shield, title: 'Safe & Gentle', desc: 'Free from harsh chemicals.' }
];

export default function AmeoraSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % ameoraImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute inset-0 opacity-3" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]/50" />
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em]">✦ For Women</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#FDF6E3] mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]">Améora</span>
          </h2>
          <p className="text-[#FDF6E3]/40 text-sm sm:text-base max-w-md mx-auto">Premium Feminine Wellness Gel</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Images 60% */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 mb-3 group transition-all duration-300"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              <AnimatePresence mode="sync">
                <motion.img key={current} src={ameoraImages[current]} alt="Améora"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }} transition={{ duration: 0.8 }} />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {ameoraImages.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#C9A84C]' : 'w-1.5 bg-[#C9A84C]/30 hover:bg-[#C9A84C]/60'}`} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {ameoraImages.map((img, i) => (
                <motion.button key={i} onClick={() => setCurrent(i)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === current ? 'border-[#C9A84C] shadow-md shadow-[#C9A84C]/30' : 'border-[#C9A84C]/10 opacity-60 hover:opacity-100 hover:border-[#C9A84C]/40'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Text 40% */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-5">
            <p className="text-[#FDF6E3]/60 leading-relaxed text-base border-l-2 border-[#C9A84C]/30 pl-4 hover:border-[#C9A84C]/70 transition-colors duration-300">
              A carefully crafted gel formula made with natural ingredients to help women feel their best — every day.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(201,168,76,0.1)' }}
                    className="bg-[#111111] rounded-2xl p-3 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 group cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-2 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                      <Icon size={16} className="text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="font-bold text-[#FDF6E3] text-xs mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">{b.title}</div>
                    <div className="text-[#FDF6E3]/30 text-xs">{b.desc}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              whileHover={{ boxShadow: '0 0 30px rgba(201,168,76,0.08)' }}
              className="bg-[#111111] rounded-2xl p-5 border border-[#C9A84C]/15 hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="text-xs text-[#C9A84C]/40 uppercase tracking-wider mb-1">Price</div>
              <div className="text-3xl font-extrabold text-[#C9A84C] mb-4">₹1,099</div>
              <a href="https://ameora.fun/checkout?id=1035&clickid=0000e07e84d4-23d8-424f-83bc-e03a6f72eef4">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(220,38,38,0.7)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-xl font-bold relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 15px rgba(220,38,38,0.5)' }}>
                  <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent" />
                  <span className="relative z-10 flex items-center gap-2">🔥 Buy Now <ArrowRight size={16} /></span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
