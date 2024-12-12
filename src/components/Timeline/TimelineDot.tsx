import { motion } from 'framer-motion';

interface TimelineDotProps {
  isHighlighted: boolean;
  hoverColor: string;
}

export function TimelineDot({ isHighlighted, hoverColor }: TimelineDotProps) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
      <motion.div
        className="w-2 h-2 bg-white rounded-full"
        animate={
          isHighlighted
            ? { 
                scale: 2,
                boxShadow: `0 0 20px ${hoverColor}80`
              }
            : { 
                scale: 1,
                boxShadow: 'none'
              }
        }
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}