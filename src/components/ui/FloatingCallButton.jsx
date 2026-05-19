import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCallButton() {
  return (
    <Link to="/contact">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(20,184,166,0.6)' }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-shadow"
        style={{ boxShadow: '0 0 20px rgba(20,184,166,0.4), 0 4px 20px rgba(0,0,0,0.4)' }}
      >
        <span className="absolute w-full h-full rounded-full bg-teal-400 animate-ping opacity-25" />
        <span className="absolute -inset-1 rounded-full border border-teal-400/30 animate-pulse" />
        <Phone size={26} className="relative z-10" />
      </motion.button>
    </Link>
  );
}
