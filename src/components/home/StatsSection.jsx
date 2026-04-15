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
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  const display = target.includes(',') ? count.toLocaleString() : count;
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: '2546', display: '2,546', suffix: '+', label: 'Satisfied Patients Worldwide' },
    { value: '1543', display: '1,543', suffix: '+', label: 'Successful Medical Journeys' },
    { value: '35', display: '35', suffix: '', label: 'Years of Expertise' },
    { value: '50', display: '50', suffix: '+', label: 'Global Healthcare Partners' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#0A2540] via-[#0d3060] to-[#0f766e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4 py-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3 tracking-tight">
                <Counter target={stat.display} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-blue-200 font-medium leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
