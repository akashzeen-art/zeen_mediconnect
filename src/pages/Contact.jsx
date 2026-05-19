import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16 bg-[#0D0D0D] min-h-screen">

      <section className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-10 sm:py-12 relative overflow-hidden border-b border-[#C9A84C]/20">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 text-[#FDF6E3]">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[#FDF6E3]/40 text-sm sm:text-lg max-w-xl mx-auto">We are here to assist you 24/7 with any product or healthcare inquiries.</motion.p>
        </div>
      </section>

      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Phone, title: 'Call Us', details: ['+91 92175 28957'] },
            { icon: Mail, title: 'Email Us', details: ['bd@zeenmediconnect.com'] },
            { icon: MapPin, title: 'Office Address', details: ['417, 4th Floor, Tower A1,', 'Spaze i Tech Park, Sohna Road,', 'Gurgaon, 122018, India'] }
          ].map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                className="bg-[#1A1A1A] rounded-2xl p-5 border border-[#C9A84C]/20 flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#C9A84C] mb-1 text-sm">{info.title}</h4>
                  {info.details.map((d, i) => <p key={i} className="text-sm text-[#FDF6E3]/50 leading-relaxed">{d}</p>)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-[#1A1A1A] rounded-3xl border border-[#C9A84C]/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-[#FDF6E3] mb-3">Send Us a Message</h3>
          <p className="text-[#FDF6E3]/40 mb-6 max-w-md mx-auto text-sm">Fill out our quick form and we'll get back to you as soon as possible.</p>
          <a href="https://forms.gle/PUNNjbXFEdHSf2NE8" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#C9A84C] text-[#0D0D0D] rounded-full font-bold shadow-lg hover:bg-[#E8C97A] transition-all text-base">
              Open Contact Form →
            </motion.button>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 bg-[#1A1A1A] rounded-3xl border border-[#C9A84C]/20 overflow-hidden h-48 flex items-center justify-center">
          <div className="text-center text-[#FDF6E3]/30 px-4">
            <MapPin size={32} className="mx-auto mb-2 text-[#C9A84C]/30" />
            <p className="text-sm">417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</p>
            <a href="https://maps.google.com/?q=Spaze+i+Tech+Park+Sohna+Road+Gurgaon" target="_blank" rel="noopener noreferrer"
              className="text-[#C9A84C] text-sm font-semibold mt-2 inline-block hover:underline">
              View on Google Maps →
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
