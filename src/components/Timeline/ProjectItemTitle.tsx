import { motion } from 'framer-motion';

interface ProjectItemTitleProps {
  timelineTitle: string;
  isHighlighted: boolean;
  hoverColor: string;
  textShadow: string;
}

export function ProjectItemTitle({
  timelineTitle,
  isHighlighted,
  hoverColor,
  textShadow
}: ProjectItemTitleProps) {
  return (
    <motion.h3
      animate={
        isHighlighted
          ? { 
              scale: 1.05,
              color: hoverColor,
              textShadow,
              y: -5
            }
          : { 
              scale: 1,
              color: '#fff',
              textShadow: 'none',
              y: 0
            }
      }
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      className="text-5xl font-bold mb-6 cursor-pointer"
      dangerouslySetInnerHTML={{ __html: timelineTitle }}
    />
  );
}