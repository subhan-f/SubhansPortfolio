import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useIsMobile = (query = '(max-width: 630px)') => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener('change', handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return isMobile;
};

function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);
  
  return <section id="Projects" className="relative text-white"></section>;
}

export default Projects;
