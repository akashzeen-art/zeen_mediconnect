import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Heart, ShieldPlus, Share2, Stethoscope } from 'lucide-react';

export default function AboutPreview() {
  const highlights = [
    { text: "Personalized medical travel assistance tailored to your needs", icon: Heart },
    { text: "Trusted supplier of premium medicines and medical equipment", icon: ShieldPlus },
    { text: "Strong partnerships with top hospitals and healthcare providers", icon: Share2 },
    { text: "End-to-end support for a smooth and stress-free healthcare experience", icon: Stethoscope }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2FE] text-[#0A2540] font-medium text-sm mb-6">
              About Zeen Mediconnect
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0A2540] mb-6 leading-tight">
              Connecting You to Quality Healthcare Worldwide
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At Zeen Mediconnect, we bridge the gap between patients and world-class medical services while ensuring seamless access to high-quality medicines and medical equipment. Our mission is to make global healthcare accessible, affordable, and hassle-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((h, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm transition-all">
                  <motion.div className="text-[#0f766e] shrink-0"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}>
                    <h.icon size={24} />
                  </motion.div>
                  <p className="text-sm font-medium text-gray-700 leading-snug">{h.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button to="/about" variant="primary">Learn More</Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" alt="Medical team" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              </div>
              <div className="space-y-4">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600" alt="Global care" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0A2540] rounded-2xl p-6 shadow-lg text-white h-48 flex flex-col justify-center relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                      className="text-3xl font-bold mb-2">35+</motion.div>
                    <div className="text-sm text-blue-200">Years of Trusted Healthcare Expertise</div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -right-4 -bottom-4 text-[#1E3A8A] opacity-50">
                    <Stethoscope size={100} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
