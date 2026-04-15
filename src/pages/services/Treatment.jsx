import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, HeartPulse, Activity, Stethoscope, Scissors, Bone } from 'lucide-react';

const treatments = [
  {
    title: 'Neurological Treatments',
    desc: 'Comprehensive care for brain, spine, and nervous system disorders. Includes deep brain stimulation, neurosurgery, and advanced neurological therapies.',
    icon: Brain, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100'
  },
  {
    title: 'Cardiology',
    desc: 'Advanced treatments for heart health and vascular conditions, from minimally invasive interventions to complex cardiovascular surgery.',
    icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100'
  },
  {
    title: 'Nephrology',
    desc: 'Specialized kidney care encompassing dialysis options, chronic kidney disease management, and complete transplant coordination and support.',
    icon: Activity, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100'
  },
  {
    title: 'Oncology',
    desc: 'Cutting-edge cancer treatments with expert oncologists utilizing targeted therapy, immunotherapy, and advanced radiation techniques.',
    icon: Stethoscope, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100'
  },
  {
    title: 'Gastroenterology',
    desc: 'Expert solutions for digestive system disorders, liver diseases, and advanced endoscopic procedures performed by leading specialists.',
    icon: Scissors, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100'
  },
  {
    title: 'Orthopedics',
    desc: 'Advanced treatments for bone and joint conditions including joint replacement, sports medicine, and reconstructive surgery.',
    icon: Bone, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100'
  }
];

export default function Treatment() {
  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f766e] via-teal-800 to-[#0A2540] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-medium mb-6">
            Expert Medical Care
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 max-w-3xl leading-tight">
            Specialized Medical Treatments
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-teal-100 max-w-2xl leading-relaxed">
            Access top-tier medical expertise and cutting-edge treatments across diverse specialties through our trusted global network.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0A2540] mb-4">
            Expert Care for Your Health & Well-Being
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Zeen Mediconnect connects you with top medical experts and world-class hospitals, offering advanced treatments across multiple specialties. Our trusted network ensures personalized care and cutting-edge medical solutions for a seamless healthcare experience.
          </p>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`bg-white rounded-3xl p-8 border ${t.border} shadow-lg hover:shadow-xl transition-all group`}>
                  <div className={`w-16 h-16 rounded-2xl ${t.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${t.color}`} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-4">{t.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm">{t.desc}</p>
                  <Link to="/contact"
                    className={`inline-flex items-center gap-2 ${t.color} text-sm font-semibold hover:gap-3 transition-all`}>
                    Get Consultation <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#0A2540] mb-4">How We Support Your Treatment Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'Share your medical reports and requirements with our team.' },
              { step: '02', title: 'Hospital Matching', desc: 'We identify the best hospital and specialist for your condition.' },
              { step: '03', title: 'Travel & Logistics', desc: 'We handle visa, accommodation, and airport coordination.' },
              { step: '04', title: 'Post-Treatment Care', desc: 'Ongoing follow-up and support after your treatment.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2540] to-[#0f766e] text-white font-extrabold flex items-center justify-center mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h4 className="font-bold text-[#0A2540] mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2540] text-center px-4">
        <h2 className="text-3xl font-bold font-heading text-white mb-4">Need a Specialized Medical Opinion?</h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">Let our team coordinate with global experts to analyze your condition and provide the best treatment plan tailored to your needs.</p>
        <Link to="/contact">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2540] rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all">
            Order Now <ArrowRight size={18} />
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
