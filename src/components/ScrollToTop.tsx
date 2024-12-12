import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (!(state as any)?.fromScroll) {
      window.scrollTo(0, 0); // Removed smooth behavior for instant scroll
    }
  }, [pathname, state]);

  return null;
}