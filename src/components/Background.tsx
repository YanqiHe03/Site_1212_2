import { motion } from 'framer-motion';

export default function Background() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/Background.webp)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
    </motion.div>
  );
}