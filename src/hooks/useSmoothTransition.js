import { useEffect } from 'react';

export function useSmoothTransition() {
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setTimeout(() => {
        document.body.classList.add('body_visible');
      }, 100);
    };

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);
}
