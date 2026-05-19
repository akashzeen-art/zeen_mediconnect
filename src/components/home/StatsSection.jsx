import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const num = parseInt(target.replace(/\D/g, ''));
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, target]);
  const display = target.includes(',') ? count.toLocaleString() : count;
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: '2546', display: '2,546', suffix: '+', label: 'Satisfied Customers' },
    { value: '1543', display: '1,543', suffix: '+', label: 'Successful Orders' },
    { value: '35', display: '35', suffix: '', label: 'Years of Expertise' },
    { value: '50', display: '50', suffix: '+', label: 'Global Partners' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(201,168,76,0.12)' }}
              className="text-center px-3 sm:px-4 py-6 sm:py-8 rounded-2xl bg-[#0D0D0D] border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 group relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/50 transition-all duration-300" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#C9A84C] mb-2 tracking-tight relative z-10 group-hover:scale-110 transition-transform duration-300 origin-bottom">
                <Counter target={stat.display} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#FDF6E3]/30 font-medium uppercase tracking-wider relative z-10 group-hover:text-[#FDF6E3]/60 transition-colors duration-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
