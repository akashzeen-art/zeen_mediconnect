import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const slideLinks = [
  '/products/play-tonight',
  '/products/ameora',
  '/products/play-tonight',
  '/products/ameora'
];

const desktopSlides = [
  '/herosectionimg/8.png',
  '/herosectionimg/9.png',
  '/herosectionimg/10.png',
  '/herosectionimg/11.png'
];

const mobileSlides = [
  '/herosectionimg/8.png',
  '/herosectionimg/9.png',
  '/herosectionimg/10.png',
  '/herosectionimg/11.png'
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  useEffect(() => {
    const slides = isMobile ? mobileSlides : desktopSlides;
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const slides = isMobile ? mobileSlides : desktopSlides;
  const paddingTop = isMobile ? '55.81%' : 'min(56.25vw, 85vh)';

  return (
    <section className="relative w-full" style={{ marginTop: '64px' }}>
      <div className="relative w-full cursor-pointer" style={{ paddingTop }} onClick={() => navigate(slideLinks[current])}>
        <AnimatePresence>
          {slides.map((src, i) =>
            i === current ? (
              <motion.img
                key={src}
                src={src}
                alt={`Banner ${i + 1}`}
                className="absolute inset-0 w-full h-full object-fill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            ) : null
          )}
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
