import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import ProjectSection from '../components/ProjectSection';
import VideoEmbed from '../components/VideoEmbed';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);
  const fromWorks = location.state?.from === 'works';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-white hover:text-white/80">
            Return home
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleClose = () => {
    navigate(fromWorks ? '/works' : '/', { 
      state: { scrollToTimeline: !fromWorks }
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/95"
        onClick={handleClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="bg-black w-full h-[95vh] overflow-y-auto rounded-t-[2rem] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="sticky top-0 z-50 bg-black">
            {/* Drag Handle */}
            <div className="pt-3 pb-2 text-center">
              <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto" />
            </div>

            {/* Back Button */}
            <div className="px-8 py-4 border-b border-white/10">
              <button 
                onClick={handleClose}
                className="inline-flex items-center text-white hover:text-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {fromWorks ? "works" : "portfolio"}
              </button>
            </div>
          </div>

          <div className="px-8 py-12 space-y-16">
            {/* Project Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-white text-lg mb-4">{project.year}</p>
                <h1 className="text-6xl font-sans font-bold text-white">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-white text-xl leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-white/80 underline text-lg"
                >
                  Visit Project →
                </a>
              )}
            </motion.div>

            {/* Video Embed (if available) */}
            {project.video && (
              <VideoEmbed src={project.video} title={project.title} />
            )}

            {/* Project Sections */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-32"
            >
              <ProjectSection
                title="Description"
                content={project.sections.description.content}
                images={project.sections.description.images}
              />

              {project.sections.inspiration && (
                <ProjectSection
                  title="Inspiration"
                  content={project.sections.inspiration.content}
                  images={project.sections.inspiration.images}
                />
              )}

              {project.sections.workflow && (
                <ProjectSection
                  title="Workflow"
                  content={project.sections.workflow.content}
                  images={project.sections.workflow.images}
                />
              )}

              {project.sections.process && (
                <ProjectSection
                  title="Creation Process"
                  content={project.sections.process.content}
                  images={project.sections.process.images}
                />
              )}

              {project.sections.outcomes && (
                <ProjectSection
                  title="Project Outcomes"
                  content={project.sections.outcomes.content}
                  images={project.sections.outcomes.images}
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}