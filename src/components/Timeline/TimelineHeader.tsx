import { motion } from 'framer-motion';

export default function TimelineHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center pt-32 pb-16 relative z-10"
    >
      <h1 className="font-sans text-7xl text-white font-bold mb-4">Portfolio</h1>
      <p className="font-chillpixels-mono text-xl text-white [image-rendering:pixelated]">
        A collection of my creative works and experiments
      </p>
    </motion.div>
  );
}