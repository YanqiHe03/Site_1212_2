import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const threshold = 50;
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? 'down' : 'up';

      if (Math.abs(currentScroll - prevScroll) < threshold) {
        return;
      }

      setVisible(currentScroll < prevScroll || currentScroll < threshold);
      setPrevScroll(currentScroll);
      setScrollDirection(direction);
      lastScroll = currentScroll > 0 ? currentScroll : 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return { scrollDirection, visible };
}