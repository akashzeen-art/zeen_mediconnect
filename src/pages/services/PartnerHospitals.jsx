import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Award, Star } from 'lucide-react';

const hospitals = [
  {
    name: 'Medanta — The Medicity',
    location: 'Gurugram, India',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'],
    accreditations: ['JCI', 'NABH', 'NABL'],
    desc: 'One of India\'s largest multi-super-speciality institutes, known for cutting-edge technology and world-class patient care.',
    image: '/1.png'
  },
  {
    name: 'Apollo Hospitals',
    location: 'New Delhi, India',
    specialties: ['Transplants', 'Cardiology', 'Gastroenterology', 'Oncology'],
    accreditations: ['JCI', 'NABH'],
    desc: 'A pioneer in private healthcare in India, Apollo Hospitals is synonymous with clinical excellence and patient-centric care.',
    image: '/2.png'
  },
  {
    name: 'Fortis Memorial Research Institute',
    location: 'Gurugram, India',
    specialties: ['Oncology', 'Hematology', 'Robotic Surgery', 'Neurosciences'],
    accreditations: ['JCI', 'NABH'],
    desc: 'A quaternary care hospital offering advanced robotic surgery, complex oncology, and comprehensive multi-specialty care.',
    image: '/3.png'
  },
  {
    name: 'Max Super Speciality Hospital',
    location: 'Saket, New Delhi, India',
    specialties: ['Neurosciences', 'Orthopedics', 'Cardiac Sciences', 'Nephrology'],
    accreditations: ['NABH', 'NABL'],
    desc: 'A leading tertiary care hospital with state-of-the-art infrastructure and a team of highly experienced specialists.',
    image: '/4.png'
  }
];

export default function PartnerHospitals() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563a8] text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-medium mb-6">
            <ShieldCheck size={14} /> Trusted Healthcare Network
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 max-w-3xl leading-tight">
            Partner Hospitals
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Collaborating with internationally accredited medical institutions to provide world-class healthcare tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50+', label: 'Partner Hospitals' },
              { value: 'JCI', label: 'Accredited Facilities' },
              { value: '20+', label: 'Medical Specialties' },
              { value: '15+', label: 'Countries Served' }
            ].map((s, i) => (
              <div key={i} className="py-2">
                <div className="text-2xl font-extrabold text-[#0A2540]">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {hospitals.map((hospital, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden relative">
                  <img src={hospital.image} alt={hospital.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex gap-2 flex-wrap">
                    {hospital.accreditations.map((acc, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-md text-white text-xs font-bold border border-white/30">
                        <Award size={10} /> {acc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#0f766e] font-medium text-sm mb-3">
                    <MapPin size={14} /> {hospital.location}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-3 group-hover:text-[#0f766e] transition-colors">
                    {hospital.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{hospital.desc}</p>
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((spec, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full py-3 border-2 border-[#0A2540] text-[#0A2540] rounded-xl font-bold hover:bg-[#0A2540] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                      Request Consultation <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2563a8] text-center px-4">
        <h2 className="text-3xl font-bold font-heading text-white mb-4">Don't See Your Preferred Hospital?</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">Our network extends beyond this list. Contact us and we'll connect you with the right specialist and facility for your specific medical needs.</p>
        <Link to="/contact">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2540] rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all">
            Contact Our Team <ArrowRight size={18} />
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
