import { motion } from 'framer-motion';

export default function DevelopmentNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-2 text-center">
        <p className="text-white/70 text-sm">
          This website is currently under development, and the works and images might not be the final looks.
        </p>
      </div>
    </motion.div>
  );
}