import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronUp, ArrowRight } from 'lucide-react';

const buyNowOptions = [
  { label: 'Play Tonight', desc: "Men's Wellness", href: 'https://playtonight.fun/order?id=1034&clickid=a035526c-25bf-485c-941c-7ac17f907487' },
  { label: 'Améora', desc: 'Feminine Wellness', href: 'https://ameora.fun/checkout?id=1035&clickid=0000e07e84d4-23d8-424f-83bc-e03a6f72eef4' }
];

export default function FloatingBuyButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-2" ref={ref}>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }}
            className="bg-[#1A1A1A] rounded-2xl border border-[#C9A84C]/30 shadow-2xl overflow-hidden w-52">
            {buyNowOptions.map((opt, i) => (
              <a key={i} href={opt.href} onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-[#C9A84C]/10 transition-colors group ${i === 0 ? 'border-b border-[#C9A84C]/20' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-bold text-xs shrink-0">
                  {opt.label.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#FDF6E3] text-xs group-hover:text-[#C9A84C]">{opt.label}</div>
                  <div className="text-[#C9A84C]/40 text-xs">{opt.desc}</div>
                </div>
                <ArrowRight size={12} className="text-[#C9A84C]/30 group-hover:text-[#C9A84C]" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <div className="relative">
        {/* Outer ping rings — crimson */}
        <span className="absolute inset-0 rounded-full bg-[#DC2626] animate-ping opacity-25" />
        <span className="absolute -inset-2 rounded-full border border-[#DC2626]/30 animate-pulse" />
        <span className="absolute -inset-4 rounded-full border border-[#DC2626]/10 animate-pulse" style={{ animationDelay: '0.3s' }} />

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="relative w-20 h-20 rounded-full flex items-center justify-center z-10"
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)',
            boxShadow: '0 0 20px rgba(220,38,38,0.7), 0 0 40px rgba(220,38,38,0.3), 0 4px 20px rgba(0,0,0,0.5)'
          }}>
          {/* Inner shimmer */}
          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
          {open
            ? <ChevronUp size={30} className="text-white relative z-10" />
            : <ShoppingBag size={30} className="text-white relative z-10" />
          }
        </motion.button>

        {/* Blinking "Buy Now" label */}
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap">
            <motion.span
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.05, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-flex items-center gap-1 bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white text-sm font-extrabold px-4 py-2 rounded-full shadow-lg"
              style={{ boxShadow: '0 0 12px rgba(220,38,38,0.6)' }}>
              🔥 Buy Now
            </motion.span>
          </motion.div>
        )}
      </div>

    </div>
  );
}
