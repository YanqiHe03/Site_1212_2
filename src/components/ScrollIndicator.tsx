import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  message: string;
  isThresholdReached?: boolean;
  progress?: number;
}

export default function ScrollIndicator({ message, isThresholdReached, progress = 0 }: ScrollIndicatorProps) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: isThresholdReached ? progress : 0
      }}
      transition={{ 
        delay: 0.1, 
        duration: 0.2,
        y: { duration: 0.1 }
      }}
      className="text-center py-16 relative"
    >
      <motion.p 
        animate={{ 
          opacity: isThresholdReached ? 0.9 : 0.6,
          y: isThresholdReached ? progress * 0.5 : 0
        }}
        transition={{ 
          duration: 0.2,
          y: { duration: 0.1 }
        }}
        className="text-white mb-4"
      >
        {isThresholdReached ? "Keep scrolling to continue..." : message}
      </motion.p>
      <motion.div 
        animate={{ 
          y: isThresholdReached ? progress * 0.75 : [0, 5, 0],
          opacity: isThresholdReached ? 0.9 : 0.6,
          scaleY: isThresholdReached ? 1 + (progress / 200) : 1
        }}
        transition={{ 
          y: isThresholdReached ? 
            { duration: 0.1 } : 
            { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.2 },
          scaleY: { duration: 0.1 }
        }}
        className="inline-block origin-top"
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </motion.div>
    </motion.footer>
  );
}