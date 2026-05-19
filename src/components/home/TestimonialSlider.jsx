import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    type: 'Play Tonight User',
    text: 'Play Tonight ne meri stamina aur confidence mein kaafi sudhaar kiya. Natural herbal formulation se mujhe peace of mind milta hai, aur results genuinely impressive hain.',
    rating: 5,
    initials: 'RS',
    color: 'from-[#C9A84C] to-[#6B3F1F]'
  },
  {
    name: 'Priya Verma',
    type: 'Améora User',
    text: 'Améora ne mujhe apna feminine confidence wapas dilaya aur comfort naturally improve hua. Product elegant, soothing aur truly effective hai. Main phir se khud jaisi feel karti hoon.',
    rating: 5,
    initials: 'PV',
    color: 'from-[#C9A84C] to-[#A0522D]'
  },
  {
    name: 'Arjun & Neha',
    type: 'Couple',
    text: 'Play Tonight aur Améora dono hamare wellness routine mein wonderful additions hain. Inhone hamare connection aur overall satisfaction ko bahut meaningful tarike se improve kiya.',
    rating: 5,
    initials: 'AN',
    color: 'from-[#6B3F1F] to-[#C9A84C]'
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(p => (p + 1) % testimonials.length);

  return (
    <section className="py-14 sm:py-24 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Real Results, Real Confidence</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#FDF6E3] mb-4">What Our Customers Say</h2>
          <p className="text-[#FDF6E3]/40 text-lg">Discover what users are saying about our premium wellness products.</p>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-[#1A1A1A] rounded-3xl p-8 border shadow-lg transition-all duration-300 ${i === current ? 'border-[#C9A84C]/50 scale-105' : 'border-[#C9A84C]/10'}`}>
              <Quote className="text-[#C9A84C]/20 mb-4" size={32} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />)}
              </div>
              <p className="text-[#FDF6E3]/60 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-[#0D0D0D] font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#FDF6E3] text-sm">{t.name}</div>
                  <div className="text-xs text-[#C9A84C]/40">{t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative max-w-lg mx-auto">
          <div className="overflow-hidden px-2 py-4">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.35 }}
                className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#C9A84C]/10 shadow-xl">
                <Quote className="text-[#C9A84C]/20 mb-4" size={32} />
                <div className="flex mb-4">
                  {[...Array(testimonials[current].rating)].map((_, j) => <Star key={j} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />)}
                </div>
                <p className="text-[#FDF6E3]/60 leading-relaxed mb-6 italic">"{testimonials[current].text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-[#0D0D0D] font-bold`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#FDF6E3]">{testimonials[current].name}</div>
                    <div className="text-sm text-[#C9A84C]/40">{testimonials[current].type}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#C9A84C]' : 'w-2 bg-[#C9A84C]/20'}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
