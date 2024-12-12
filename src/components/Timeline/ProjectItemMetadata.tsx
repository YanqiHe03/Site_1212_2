import { motion } from 'framer-motion';
import ProjectBadge from '../ProjectBadge';

interface ProjectItemMetadataProps {
  year: string;
  category: 'personal' | 'school' | 'work';
  formats: ('visual' | 'audio' | 'installation' | 'interactive' | 'film')[];
  isEven: boolean;
  isHighlighted: boolean;
}

export function ProjectItemMetadata({
  year,
  category,
  formats,
  isEven,
  isHighlighted
}: ProjectItemMetadataProps) {
  return (
    <motion.div
      animate={{ opacity: isHighlighted ? 1 : 0.6}}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 mb-2 ${
        isEven ? 'justify-end' : 'justify-start'
      }`}
    >
      {isEven ? (
        <>
          <ProjectBadge category={category} formats={formats} />
          <span className="font-chillpixels-mono text-[10px] text-white [image-rendering:pixelated] whitespace-nowrap">
            {year}
          </span>
        </>
      ) : (
        <>
          <span className="font-chillpixels-mono text-[10px] text-white [image-rendering:pixelated] whitespace-nowrap">
            {year}
          </span>
          <ProjectBadge category={category} formats={formats} />
        </>
      )}
    </motion.div>
  );
}