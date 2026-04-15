import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  size = 'md'
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-[#0A2540] text-white hover:bg-[#1E3A8A] shadow-md hover:shadow-lg",
    secondary: "bg-[#0f766e] text-white hover:bg-[#0d9488] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white",
    wellness: "bg-[#fb7185] text-white hover:bg-[#e11d48] shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-[#0A2540] hover:bg-[#F3F4F6]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
          onClick={onClick}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
