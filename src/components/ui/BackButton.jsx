import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full font-semibold text-sm backdrop-blur-sm transition-all">
      <ArrowLeft size={16} /> Back
    </motion.button>
  );
}
