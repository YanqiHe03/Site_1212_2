import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectBadge from '../components/ProjectBadge';
import { useIsMobile } from '../hooks/useIsMobile';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import ScrollIndicator from '../components/ScrollIndicator';
import TouchNavigationWrapper from '../components/TouchNavigationWrapper';

export default function Works() {
  const isMobile = useIsMobile();
  
  const { isThresholdReached, progress } = useScrollNavigation({ 
    nextRoute: '/bio',
    previousRoute: '/',
    disabled: isMobile
  });

  // Sort projects by date (assuming year format is "MMM YYYY")
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.year);
    const dateB = new Date(b.year);
    return dateB.getTime() - dateA.getTime();
  });

  // Group sorted projects by category
  const groupedProjects = sortedProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <TouchNavigationWrapper nextRoute="/bio" previousRoute="/">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-[150vh] bg-black"
      >
        <div className="pt-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              <h1 className="font-sans text-4xl md:text-6xl text-white font-bold">Works</h1>

              {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                <div key={category} className="space-y-6">
                  <h2 className="text-xl md:text-2xl text-white capitalize font-bold">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categoryProjects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        state={{ from: 'works' }}
                        className="group block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          className="relative aspect-[16/9] mb-4 bg-black overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </motion.div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-chillpixels-mono text-[10px] text-white [image-rendering:pixelated] whitespace-nowrap">
                              {project.year}
                            </span>
                            <ProjectBadge
                              category={project.category}
                              formats={project.formats}
                            />
                          </div>
                          <h3 className="font-sans text-xl md:text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div className="mt-32 mb-16">
              <ScrollIndicator
                message="Scroll down to view bio"
                isThresholdReached={isThresholdReached}
                progress={progress}
              />
            </div>
          )}
        </div>
      </motion.div>
    </TouchNavigationWrapper>
  );
}