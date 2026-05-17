import { useEffect, useRef } from 'react';
import { useIsMobile } from '@hooks/useIsMobile';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobileOrTablet = useIsMobile('(max-width: 1023px)');

  useEffect(() => {
    if (isMobileOrTablet) return;
    const el = cursorRef.current;
    if (!el) return;

    let rafId: number;
    let x = 0;
    let y = 0;

    const moveHandler = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const updatePosition = () => {
      el.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', moveHandler, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      cancelAnimationFrame(rafId);
    };
  }, [isMobileOrTablet]);

  if (isMobileOrTablet) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 will-change-transform"
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
    </div>
  );
};
