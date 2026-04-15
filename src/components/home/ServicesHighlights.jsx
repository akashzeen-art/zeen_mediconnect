import { motion } from 'framer-motion';
import { Plane, Pill, Stethoscope, HeartHandshake } from 'lucide-react';

const services = [
  { title: 'Medical Tourism', desc: 'Hassle-free medical travel from consultation to post-treatment care.', icon: Plane, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Global Medicine Export', desc: 'High-quality pharmaceuticals to hospitals and distributors worldwide.', icon: Pill, color: 'text-teal-600', bg: 'bg-teal-50' },
  { title: 'Medical Equipment', desc: 'Cutting-edge devices to support top-tier patient care facilities.', icon: Stethoscope, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Patient Assistance', desc: 'Visa, accommodation, hospital coordination and follow-up care.', icon: HeartHandshake, color: 'text-rose-600', bg: 'bg-rose-50' }
];

export default function ServicesHighlights() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#0f766e] font-medium text-sm mb-3 border border-teal-100">
            Healthcare Services
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0A2540]">
            Global Medical Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-base font-heading font-bold text-[#0A2540] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
