import { motion } from 'framer-motion';
import { Building2, Globe, Medal, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

export default function PartnerHospitalsPreview() {
  const points = [
    { text: "Partnerships with top-tier hospitals for world-class treatments", icon: Building2 },
    { text: "Comprehensive healthcare solutions across multiple specialties", icon: Globe },
    { text: "Accredited and internationally recognized medical institutions", icon: Medal },
    { text: "Seamless coordination for a stress-free patient experience", icon: ShieldCheck }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#E0F2FE] opacity-30 rounded-l-[100px] pointer-events-none -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/hospital - Copy.png" 
                alt="Modern Hospital Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent"></div>
            </div>
            
            {/* Dots pattern */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-dots pattern-dots opacity-20 -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#0f766e] font-medium text-sm mb-6 border border-teal-100">
              Partner Hospitals
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0A2540] mb-6 leading-tight">
              Trusted Healthcare Institutions at Your Service
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At Zeen Mediconnect, we collaborate with leading hospitals to provide patients with exceptional medical care and advanced treatment options. Our network ensures access to accredited healthcare facilities known for their expertise, innovation, and patient-centric approach.
            </p>

            <ul className="space-y-5 mb-10">
              {points.map((pt, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 text-[#0f766e]">
                    <pt.icon size={18} />
                  </div>
                  <span className="text-gray-700 font-medium">{pt.text}</span>
                </motion.li>
              ))}
            </ul>

            <Button to="/services/partner-hospitals" variant="primary">
              View Partner Hospitals
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
