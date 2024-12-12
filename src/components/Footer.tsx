import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 flex justify-between items-center text-white/60 bg-gradient-to-t from-black/80 to-transparent"
    >
      <div>
        <div className="text-sm md:text-base text-white font-medium">Yanqi He</div>
        <div className="text-xs md:text-sm">Digital Media Art</div>
      </div>
      <div className="flex gap-3 md:gap-4">
        <motion.a
          href="https://www.instagram.com/gr4mdhe/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.2 }}
        >
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>
        <motion.a
          href="mailto:Yanqi.He03@gmail.com"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.2 }}
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>
      </div>
    </motion.footer>
  );
}