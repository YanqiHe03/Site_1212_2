import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseTouchNavigationProps {
  nextRoute?: string;
  previousRoute?: string;
  disabled?: boolean;
  threshold?: number;
}

export function useTouchNavigation({
  nextRoute,
  previousRoute,
  disabled = false,
  threshold = 50
}: UseTouchNavigationProps) {
  const navigate = useNavigate();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    if (disabled) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (disabled) return;
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || disabled) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > threshold;
    const isDownSwipe = distance < -threshold;
    
    if (isUpSwipe && nextRoute) {
      navigate(nextRoute);
    } else if (isDownSwipe && previousRoute) {
      navigate(previousRoute);
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [touchStart, touchEnd, disabled, nextRoute, previousRoute]);

  return {
    touchStart,
    touchEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}