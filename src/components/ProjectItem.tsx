import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectItemTitle } from './ProjectItemTitle';
import { ProjectItemMetadata } from './ProjectItemMetadata';
import { useProjectStyles } from '../hooks/useProjectStyles';

interface ProjectItemProps {
  id: string;
  title: string;
  timelineTitle: string;
  year: string;
  description: string;
  category: 'personal' | 'school' | 'work';
  formats: ('visual' | 'audio' | 'installation' | 'interactive' | 'film')[];
  onHover: () => void;
  onLeave: () => void;
  isActive: boolean;
  index: number;
  isAutoPreviewActive?: boolean;
}

export default function ProjectItem({
  id,
  timelineTitle,
  year,
  description,
  category,
  formats,
  onHover,
  onLeave,
  isActive,
  index,
  isAutoPreviewActive = false
}: ProjectItemProps) {
  const isEven = index % 2 === 0;
  const { getHoverColor, getTextShadow } = useProjectStyles(id);
  const isHighlighted = isActive || (isAutoPreviewActive && isActive);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div 
        animate={{ opacity: isHighlighted ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={
              isHighlighted
                ? { 
                    scale: 2,
                    boxShadow: `0 0 20px ${getHoverColor()}80`
                  }
                : { 
                    scale: 1,
                    boxShadow: 'none'
                  }
            }
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className={`relative ${isEven ? 'mr-[calc(50%+2rem)]' : 'ml-[calc(50%+2rem)]'}`}>
          <Link to={`/project/${id}`}>
            <div className={`${isEven ? 'text-right' : 'text-left'}`}>
              <ProjectItemMetadata
                year={year}
                category={category}
                formats={formats}
                isEven={isEven}
                isHighlighted={isHighlighted}
              />
              
              <ProjectItemTitle
                timelineTitle={timelineTitle}
                isHighlighted={isHighlighted}
                hoverColor={getHoverColor()}
                textShadow={getTextShadow()}
              />

              <motion.p
                animate={{ opacity: isHighlighted ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
                className={`font-chillpixels-mono text-white font-normal max-w-sm [image-rendering:pixelated] ${
                  isEven ? 'ml-auto' : ''
                }`}
              >
                {description}
              </motion.p>
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}