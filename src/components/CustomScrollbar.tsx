import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    setScrollProgress(0);

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
      setIsVisible(window.scrollY > 100);
    };

    const showTimeout = setTimeout(() => {
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      window.addEventListener('resize', updateScrollProgress, { passive: true });
      updateScrollProgress();
    }, 600);

    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 h-[60vh] w-1 bg-white/10 rounded-full z-50 pointer-events-none overflow-hidden"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full rounded-full bg-white/40 backdrop-blur-sm"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}