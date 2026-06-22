import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ptImages = [
  
  '/new_img/playtonight/1.png',
  '/new_img/playtonight/13.png',
  
  '/new_img/playtonight/12.png',
  '/new_img/playtonight/3.png',
  '/new_img/playtonight/8.png',
  '/new_img/playtonight/11.png',
  '/new_img/playtonight/2.png',
];

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div>
      <div className="relative h-[340px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 mb-3">
        <AnimatePresence mode="sync">
          <motion.img key={current} src={images[current]} alt="Play Tonight"
            className="absolute inset-0 w-full h-full object-contain sm:object-cover"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} />
        </AnimatePresence>
        <button onClick={() => setCurrent(p => (p - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0D0D0D]/60 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/20 transition z-10">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => setCurrent(p => (p + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0D0D0D]/60 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/20 transition z-10">
          <ChevronRight size={18} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-[#C9A84C]' : 'w-2 bg-[#C9A84C]/30'}`} />
          ))}
        </div>
      </div>
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-8">
        {images.map((img, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-14 h-14 sm:w-auto sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${i === current ? 'border-[#C9A84C]' : 'border-[#C9A84C]/10'}`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PlayTonight() {
  return (
    <div className="pt-16 bg-[#0D0D0D] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#6B3F1F]/30 py-12 sm:py-20 lg:py-24 overflow-hidden relative border-b border-[#C9A84C]/20">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-5">
              Premium Herbal Formulation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-5 leading-tight">
              <span className="text-[#FDF6E3]">Play Tonight</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]">
                Performer Wellness tablets
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#FDF6E3]/60 mb-6 max-w-lg leading-relaxed">
              A premium herbal formulation designed to support stamina, vitality, endurance, and confidence for men's wellness.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#C9A84C]">₹999</span>
            </div>
            <a href="https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-bold shadow-xl transition-all relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
                <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">🔥 Buy Now <ArrowRight size={18} /></span>
              </motion.button>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[280px] sm:h-[420px] lg:h-[600px] rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-[#C9A84C]/20">
            <motion.img src="/product images/WhatsApp Image 2026-04-14 at 6.26.23 PM.jpeg"
              alt="Play Tonight" className="w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 sm:py-16 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#FDF6E3] mb-2">Product Gallery</h2>
            <p className="text-[#C9A84C]/50 text-sm">See Play Tonight from every angle</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ImageGallery images={ptImages} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#6B3F1F] to-[#C9A84C]/80 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0D0D0D] mb-4">Ready to Experience Play Tonight?</h2>
        <p className="text-[#0D0D0D]/70 mb-8 max-w-xl mx-auto text-sm sm:text-base">Order now and start your wellness journey today.</p>
        <a href="https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-bold shadow-xl transition-all relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
            <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
            <span className="relative z-10 flex items-center gap-2">🔥 Buy Now <ArrowRight size={18} /></span>
          </motion.button>
        </a>
      </section>

      <div className="py-8 text-center max-w-4xl mx-auto px-4">
        <p className="text-xs text-[#FDF6E3]/20 leading-relaxed">
          Disclaimer: This product is a herbal formulation. Results may vary. Please consult your physician before use.
        </p>
      </div>
    </div>
  );
}
