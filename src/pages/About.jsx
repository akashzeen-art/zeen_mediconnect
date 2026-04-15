import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, ShieldPlus, Share2, Stethoscope, UserCheck, Globe2, PackageCheck, HeadphonesIcon } from 'lucide-react';

export default function About() {
  const highlights = [
    { text: 'Personalized medical travel assistance tailored to your needs', icon: Heart },
    { text: 'Trusted supplier of premium medicines and medical equipment', icon: ShieldPlus },
    { text: 'Strong partnerships with top hospitals and healthcare providers', icon: Share2 },
    { text: 'End-to-end support for a smooth and stress-free healthcare experience', icon: Stethoscope }
  ];

  const whyUs = [
    { title: 'Personalized Medical Travel Assistance', icon: UserCheck },
    { title: 'Global Network of Leading Hospitals', icon: Globe2 },
    { title: 'High-Quality Medicine & Equipment Supply', icon: PackageCheck },
    { title: 'End-to-End Patient Support Services', icon: HeadphonesIcon }
  ];

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A2540] via-[#0d3060] to-[#0f766e] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-medium mb-6">
            About Zeen Mediconnect
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            Connecting You to Quality Healthcare Worldwide
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering your health journey with world-class medical facilities, trusted pharmaceutical supply, and premium wellness solutions.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#0f766e] font-medium text-sm mb-6 border border-teal-100">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-6 leading-tight">
                Your Trusted Partner in Global Healthcare
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Zeen Mediconnect is a trusted partner in global healthcare. We offer seamless medical tourism services and premium healthcare exports — connecting patients with leading hospitals worldwide and supplying high-quality pharmaceuticals to eliminate friction in international healthcare.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We proudly extend our commitment to holistic wellness through our specialized premium Ayurvedic product lines, fostering a healthier, more confident life for our customers.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img src="/photo-1516841273335-e39b37888115.avif"
                alt="Healthcare Team" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10 border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To make global healthcare accessible, affordable, and hassle-free. We strive to provide transparent medical tourism solutions while ensuring uncompromised quality in medical exports and wellness products.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-10 border border-teal-100">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the world's most trusted medical connect hub — where state-of-the-art treatments meet traditional holistic wellness, transforming patient lives everywhere.
              </p>
            </motion.div>
          </div>

          {/* What We Provide */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2540] mb-4">What We Provide</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive ecosystem of healthcare services and wellness products under one trusted platform.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all text-center">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#0f766e] mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <p className="text-sm font-medium text-gray-700 leading-snug">{h.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#1e3a5f] rounded-3xl p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Choose Zeen Mediconnect</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">Your trusted partner in global healthcare solutions — quality, affordability, and convenience at every step.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/25 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <h4 className="font-bold text-white text-sm leading-snug">{item.title}</h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FCE7F3] text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-rose-950 mb-4">Experience Better Healthcare Today</h2>
          <p className="text-rose-800/70 mb-8 max-w-xl mx-auto">Connect with our team to start your healthcare journey or explore our wellness products.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 transition-all">
                Contact Our Team
              </motion.button>
            </Link>
            <Link to="/services/treatment">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-rose-600 text-rose-700 rounded-full font-bold hover:bg-rose-50 transition-all">
                View Treatments <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
