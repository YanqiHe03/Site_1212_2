import { ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TouchNavigationWrapperProps {
  children: ReactNode;
  nextRoute?: string;
  previousRoute?: string;
  disabled?: boolean;
}

export default function TouchNavigationWrapper({
  children,
  nextRoute,
  previousRoute,
  disabled
}: TouchNavigationWrapperProps) {
  const navigate = useNavigate();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      // Reset after a short delay
      setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    if (disabled) return;
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (disabled) return;
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || disabled || isScrolling) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 100; // Increased threshold for more intentional swipes
    const isUpSwipe = distance > 0;
    const isDownSwipe = distance < 0;

    if (isSwipe) {
      if (isUpSwipe && nextRoute) {
        navigate(nextRoute);
      } else if (isDownSwipe && previousRoute) {
        navigate(previousRoute);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e.nativeEvent)}
      onTouchMove={(e) => handleTouchMove(e.nativeEvent)}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen touch-pan-y"
    >
      {children}
    </div>
  );
}