import { motion } from 'framer-motion';
import { UserCheck, Globe2, PackageCheck, HeadphonesIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    { title: "Personalized Medical Travel Assistance", icon: UserCheck },
    { title: "Global Network of Leading Hospitals", icon: Globe2 },
    { title: "High-Quality Medicine & Equipment Supply", icon: PackageCheck },
    { title: "End-to-End Patient Support Services", icon: HeadphonesIcon }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#0f766e] font-medium text-sm mb-6 border border-teal-100">
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-6 leading-tight"
          >
            Your Trusted Partner in Global Healthcare Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 leading-relaxed text-lg mb-4"
          >
            At Zeen Mediconnect, we make medical tourism and healthcare exports effortless. With a strong network of world-class hospitals, reliable pharmaceutical suppliers, and seamless patient assistance, we ensure quality, affordability, and convenience at every step of your healthcare journey.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-semibold text-[#0A2540]"
          >
            Get seamless access to world-class medical treatments, high-quality medicines, and advanced medical equipment through one trusted platform.
          </motion.p>
        </div>

        <div className="relative isolate">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {points.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -6 }}
                className="text-center bg-white group cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 mx-auto rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center text-[#0f766e] mb-6 relative">
                  <p.icon size={32} />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: idx * 0.15 + 0.3 }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    {idx + 1}
                  </motion.div>
                </motion.div>
                <h3 className="font-heading font-bold text-[#0A2540] px-4 leading-snug group-hover:text-[#0f766e] transition-colors duration-300">
                  {p.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
