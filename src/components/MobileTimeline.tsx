import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import ScrollIndicator from './ScrollIndicator';
import { useState, useRef, useEffect } from 'react';

export default function MobileTimeline() {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { isThresholdReached, progress } = useScrollNavigation({ 
    nextRoute: '/works',
    disabled: !isAtTop
  });

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollPosition = contentRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        setIsAtTop(scrollPosition === 0);
        
        // Calculate active project based on scroll position
        const newIndex = Math.floor(scrollPosition / viewportHeight);
        setActiveIndex(Math.min(newIndex, projects.length - 1));
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    
    if (isUpSwipe && isAtTop) {
      window.location.href = '/works';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Fixed Portfolio Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-8 pt-20 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
      >
        <h1 className="font-sans text-5xl text-white font-bold mb-2">
          Portfolio
        </h1>
        <p className="font-chillpixels-mono text-white [image-rendering:pixelated]">
          A collection of creative works
        </p>
      </motion.div>

      {/* Timeline Navigator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              contentRef.current?.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="group py-2 px-3 relative"
          >
            <div className="flex items-center gap-2">
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white scale-100' : 'bg-white/40 scale-75'
                }`}
              />
            </div>
          </button>
        ))}
      </div>

      <div
        ref={contentRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            className="h-screen snap-start relative flex items-center"
          >
            {/* Background Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Content */}
            <Link
              to={`/project/${project.id}`}
              className="relative z-10 w-full px-8 pt-32 pb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-chillpixels-mono text-sm text-white [image-rendering:pixelated]">
                    {project.year}
                  </span>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span className="text-white uppercase tracking-wider text-xs">
                      {project.formats[0]}
                    </span>
                    <span className="text-white">•</span>
                    <span className="text-white uppercase tracking-wider text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h2 
                  className="text-4xl font-bold text-white mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: project.timelineTitle }}
                />
              </motion.div>
            </Link>
          </div>
        ))}
      </div>

      {isAtTop && (
        <ScrollIndicator 
          message="Scroll or swipe up to view works"
          isThresholdReached={isThresholdReached}
          progress={progress}
        />
      )}
    </motion.div>
  );
}