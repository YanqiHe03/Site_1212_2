import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectPreviewProps {
  project: Project | null;
  showDefaultBackground: boolean;
}

export default function ProjectPreview({ project, showDefaultBackground }: ProjectPreviewProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <AnimatePresence>
        {showDefaultBackground ? (
          <motion.div
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
              style={{ backgroundImage: 'url(/Background.webp)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </motion.div>
        ) : project && (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}