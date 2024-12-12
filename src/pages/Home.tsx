import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import MobileTimeline from '../components/MobileTimeline';
import { useIsMobile } from '../hooks/useIsMobile';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import ScrollIndicator from '../components/ScrollIndicator';
import TouchNavigationWrapper from '../components/TouchNavigationWrapper';

export default function Home() {
  const isMobile = useIsMobile();
  const { isThresholdReached, progress } = useScrollNavigation({ 
    nextRoute: '/works'
  });

  if (isMobile) {
    return <MobileTimeline />;
  }

  return (
    <TouchNavigationWrapper nextRoute="/works">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative min-h-[150vh]"
      >
        <main className="relative z-10">
          <Timeline />
          <div className="mt-64">
            <ScrollIndicator 
              message="Scroll down to view works"
              isThresholdReached={isThresholdReached}
              progress={progress}
            />
          </div>
        </main>
      </motion.div>
    </TouchNavigationWrapper>
  );
}