import { motion } from 'framer-motion';
import { Brain, HeartPulse, Activity, Stethoscope, Scissors, Bone } from 'lucide-react';
import Button from '../ui/Button';

export default function SpecializedTreatments() {
  const treatments = [
    {
      title: "Neurological Treatments",
      desc: "Comprehensive care for brain and nervous system disorders.",
      icon: Brain,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Cardiology",
      desc: "Advanced treatments for heart health and vascular conditions.",
      icon: HeartPulse,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Nephrology",
      desc: "Specialized kidney care, from diagnosis to transplant support.",
      icon: Activity,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Oncology",
      desc: "Cutting-edge cancer treatments with expert oncologists.",
      icon: Stethoscope,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Gastroenterology",
      desc: "Expert solutions for digestive system disorders.",
      icon: Scissors,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Orthopedics",
      desc: "Advanced treatments for bone, joint, and musculoskeletal conditions.",
      icon: Bone,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-4"
          >
            Specialized Treatments at Zeen Mediconnect<br/>
            <span className="text-[#0f766e]">Expert Care for Your Health & Well-Being</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 leading-relaxed"
          >
            Zeen Mediconnect connects you with top medical experts and world-class hospitals, offering advanced treatments across multiple specialties. Our trusted network ensures personalized care and cutting-edge medical solutions for a seamless healthcare experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${t.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${t.color}`} />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0A2540] mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button to="/contact" variant="primary">
            Get Free Consultation
          </Button>
        </div>

      </div>
    </section>
  );
}
