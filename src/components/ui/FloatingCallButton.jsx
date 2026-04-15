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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-[#0f766e] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-teal-400/40 transition-shadow"
      >
        <span className="absolute w-full h-full rounded-full bg-teal-400 animate-ping opacity-30" />
        <Phone size={22} className="relative z-10" />
      </motion.button>
    </Link>
  );
}
