import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Leaf, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #0f766e 100%)' }}>

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: [0, 30, 0], y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-rose-500/20 blur-3xl" />
        <motion.div animate={{ x: [0, -20, 0], y: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-3xl" />
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-200 text-sm font-medium mb-8">
              <Sparkles size={14} className="text-rose-300" />
              WELCOME TO ZEEN MEDICONNECT
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              <span className="text-white drop-shadow-lg">Premium Ayurvedic</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-200">
                Wellness
              </span>{' '}
              <span className="text-white">&</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                Global Healthcare
              </span>
            </h1>

            <p className="text-xl text-white/80 font-medium mb-4">
              Confidence. Vitality. World-Class Care.
            </p>
            <p className="text-base text-white/60 mb-10 max-w-xl leading-relaxed">
              Zeen Mediconnect brings you premium Ayurvedic wellness products — Play Tonight & Améora — alongside trusted global medical tourism services and world-class hospital connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/products/play-tonight">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-bold text-base shadow-xl hover:shadow-rose-500/30 transition-all">
                  Explore Products <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 backdrop-blur-sm transition-all">
                  Medical Consultation
                </motion.button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Leaf, text: '100% Ayurvedic', color: 'text-teal-300' },
                { icon: ShieldCheck, text: 'GMP Certified', color: 'text-rose-300' },
                { icon: CheckCircle2, text: 'FDA Approved', color: 'text-purple-300' },
                { icon: CheckCircle2, text: 'Accredited Hospitals', color: 'text-cyan-300' }
              ].map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-white/70 font-medium">
                  <b.icon size={15} className={b.color} /> {b.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product showcase */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[580px] hidden lg:flex items-center justify-center">

            {/* Central product image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <motion.img
                  src="/mix productsc.png"
                  alt="Play Tonight & Ameora"
                  className="w-full h-full object-contain p-8 drop-shadow-2xl"
                  animate={{ scale: [1, 1.06, 1.03, 1.06, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm leading-none">Play Tonight</div>
                  <div className="text-xs text-gray-400 mt-0.5">Men's Wellness</div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                  <Leaf size={18} />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm leading-none">Améora</div>
                  <div className="text-xs text-gray-400 mt-0.5">Feminine Wellness</div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-2xl border border-gray-100 flex items-center gap-4 z-20 whitespace-nowrap">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-bold text-gray-800">100% Ayurvedic & Natural</div>
                  <div className="text-xs text-gray-400">ISO · GMP · FDA Approved</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#FDF2F8" />
        </svg>
      </div>
    </section>
  );
}
