import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from './useIsMobile';

interface UseScrollNavigationProps {
  nextRoute: string;
  previousRoute?: string;
  threshold?: number;
  disabled?: boolean;
}

export function useScrollNavigation({ 
  nextRoute, 
  previousRoute, 
  threshold = 98,
  disabled = false 
}: UseScrollNavigationProps) {
  const navigate = useNavigate();
  const [isThresholdReached, setIsThresholdReached] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const isMobile = useIsMobile();
  const REQUIRED_SCROLLS = isMobile ? 20 : 8; // Increase required scrolls on mobile

  const checkScroll = useCallback((e: WheelEvent) => {
    if (disabled) return;

    const container = document.documentElement;
    const scrollPosition = window.scrollY + window.innerHeight;
    const scrollHeight = container.scrollHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    const isAtBottom = scrollPercentage >= threshold;
    const isAtTop = window.scrollY === 0;

    // Only proceed if the scroll is significant enough
    if (Math.abs(e.deltaY) < 5) return;

    if (isAtBottom && e.deltaY > 0) { // Scrolling down at bottom
      setScrollCount(prev => {
        const newCount = Math.min(prev + 1, REQUIRED_SCROLLS);
        if (newCount >= REQUIRED_SCROLLS) {
          requestAnimationFrame(() => navigate(nextRoute));
          return 0;
        }
        return newCount;
      });
      setIsThresholdReached(true);
    } else if (isAtTop && e.deltaY < 0 && previousRoute) { // Scrolling up at top
      setScrollCount(prev => {
        const newCount = Math.min(prev + 1, REQUIRED_SCROLLS);
        if (newCount >= REQUIRED_SCROLLS) {
          requestAnimationFrame(() => navigate(previousRoute));
          return 0;
        }
        return newCount;
      });
      setIsThresholdReached(true);
    } else {
      setIsThresholdReached(false);
      setScrollCount(0);
    }
  }, [navigate, nextRoute, previousRoute, threshold, disabled, REQUIRED_SCROLLS]);

  useEffect(() => {
    if (!disabled) {
      window.addEventListener('wheel', checkScroll, { passive: true });
      return () => window.removeEventListener('wheel', checkScroll);
    }
  }, [checkScroll, disabled]);

  return {
    isThresholdReached,
    progress: (scrollCount / REQUIRED_SCROLLS) * 100
  };
}