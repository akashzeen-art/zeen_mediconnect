import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalPage({ title, intro, sections, contact = true }) {
  const navigate = useNavigate();
  return (
    <div className="pt-20 bg-[#0D0D0D] min-h-screen">
      <section className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-16 relative overflow-hidden border-b border-[#C9A84C]/20">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-[#FDF6E3] mb-4">{title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[#C9A84C]/60 text-lg">Zeen Mediconnect OPC Pvt. Ltd.</motion.p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#1A1A1A] rounded-3xl border border-[#C9A84C]/20 p-8 md:p-12 space-y-8">

          {intro && <p className="text-[#FDF6E3]/60 leading-relaxed text-sm">{intro}</p>}
          <hr className="border-[#C9A84C]/10" />

          {sections.map((s, i) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-xs font-extrabold shrink-0 border border-[#C9A84C]/20">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-heading font-bold text-[#C9A84C] mb-3">{s.title}</h2>
                  {s.intro && <p className="text-[#FDF6E3]/50 text-sm mb-2">{s.intro}</p>}
                  <ul className="space-y-2">
                    {s.points.map((p, j) => (
                      <li key={j} className="text-[#FDF6E3]/50 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-[#C9A84C] shrink-0 mt-1">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < sections.length - 1 && <hr className="border-[#C9A84C]/10 mt-6" />}
            </div>
          ))}

          {contact && (
            <>
              <hr className="border-[#C9A84C]/10" />
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-xs font-extrabold shrink-0 border border-[#C9A84C]/20">✉</span>
                <div>
                  <h2 className="text-base font-heading font-bold text-[#C9A84C] mb-3">Contact Us</h2>
                  <div className="space-y-1 text-sm text-[#FDF6E3]/50">
                    <p>417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</p>
                    <p>+91 92175 28957</p>
                    <a href="mailto:bd@zeenmediconnect.com" className="text-[#C9A84C] hover:underline">bd@zeenmediconnect.com</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
}
