import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#1a4a7a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-blue-200 text-lg max-w-xl mx-auto">We are here to assist you 24/7 with any healthcare or product inquiries.</motion.p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Info Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1 space-y-6">
            {[
              { icon: Phone, title: 'Call Us', color: 'bg-teal-50 text-[#0f766e]', details: ['+91 92175 28957'] },
              { icon: Mail, title: 'Email Us', color: 'bg-blue-50 text-blue-600', details: ['bd@zeenmediconnect.com'] },
              { icon: MapPin, title: 'Office Address', color: 'bg-rose-50 text-rose-600', details: ['417, 4th Floor, Tower A1,', 'Spaze i Tech Park, Sohna Road,', 'Gurgaon, 122018, India'] }
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2540] mb-2">{info.title}</h4>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-sm text-gray-500 leading-relaxed">{d}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Form Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-8">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent outline-none transition text-sm" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent outline-none transition text-sm" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent outline-none transition text-sm" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent outline-none transition text-sm" placeholder="Your country" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent outline-none transition resize-none text-sm" placeholder="How can we help you? Please share any relevant details..."></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2540] text-white rounded-xl font-bold hover:bg-[#1E3A8A] transition-colors w-full sm:w-auto shadow-lg">
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Map placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden h-64 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <MapPin size={40} className="mx-auto mb-3 text-gray-300" />
            <p className="font-medium">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</p>
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
