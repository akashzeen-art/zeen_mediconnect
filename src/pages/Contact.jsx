import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#1a4a7a] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-blue-200 text-lg max-w-xl mx-auto">We are here to assist you 24/7 with any healthcare or product inquiries.</motion.p>
        </div>
      </section>

      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Phone, title: 'Call Us', color: 'bg-teal-50 text-[#0f766e]', details: ['+91 92175 28957'] },
            { icon: Mail, title: 'Email Us', color: 'bg-blue-50 text-blue-600', details: ['bd@zeenmediconnect.com'] },
            { icon: MapPin, title: 'Office Address', color: 'bg-rose-50 text-rose-600', details: ['417, 4th Floor, Tower A1,', 'Spaze i Tech Park, Sohna Road,', 'Gurgaon, 122018, India'] }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-md flex flex-col items-start gap-2">
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-2">{info.title}</h4>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-sm text-gray-500 leading-relaxed">{d}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Send Message Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 text-center">
          <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-3">Send Us a Message</h3>
          <p className="text-gray-500 mb-4 max-w-md mx-auto text-sm">Fill out our quick form and we'll get back to you as soon as possible.</p>
          <a href="https://forms.gle/PUNNjbXFEdHSf2NE8" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#0A2540] text-white rounded-full font-bold hover:bg-[#1e3a5f] transition-colors shadow-lg text-base">
              Open Contact Form →
            </motion.button>
          </a>
        </motion.div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden h-48 flex items-center justify-center">
          <div className="text-center text-gray-400 px-4">
            <MapPin size={40} className="mx-auto mb-3 text-gray-300" />
            <p className="font-medium text-sm">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</p>
            <a href="https://maps.google.com/?q=Spaze+i+Tech+Park+Sohna+Road+Gurgaon" target="_blank" rel="noopener noreferrer"
              className="text-[#0f766e] text-sm font-semibold mt-2 inline-block hover:underline">
              View on Google Maps →
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
