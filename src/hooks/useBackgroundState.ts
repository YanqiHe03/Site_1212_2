import { useState, useEffect } from 'react';

export function useBackgroundState() {
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if the mouse is over any interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"]');
      setShowBackground(!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return showBackground;
}