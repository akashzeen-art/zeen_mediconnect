import { motion } from 'framer-motion';

const badges = [
  '✓ ISO Certified', '✓ FDA Approved', '✓ GMP Certified', '✓ 100% Herbal',
  '✓ Natural Pure Herbs', '✓ Specially Formulated', '✓ Free Shipping',
  '✓ 24x7 Support', '✓ 100% Genuine', '✓ Easy Return'
];

export default function ProductTransition() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-rose-200 text-rose-600 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
            Premium Herbal Wellness
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-rose-900 mb-4 leading-tight">
            Rediscover. Rejuvenate.
          </h2>
          <p className="text-xl md:text-2xl text-rose-700 font-medium">
            Pure Herbal Wellness for a Confident Life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {badges.map((badge, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-md text-rose-800 font-semibold text-sm border border-white hover:shadow-lg transition-all cursor-default">
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
