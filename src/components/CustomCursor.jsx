import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, input, textarea, select, .interactive-hover');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    handleHoverEvents();
    const observer = new MutationObserver(handleHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Blue Center Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#2563EB] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-[0_0_10px_#2563EB]"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isHovered ? 2.5 : 1})`,
        }}
      />
      
      {/* Outer Glowing Ring */}
      <div
        className="fixed top-0 left-0 w-9 h-9 border border-[#2563EB]/60 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.12)' : 'transparent',
          borderColor: isHovered ? '#2563EB' : 'rgba(37, 99, 235, 0.4)',
        }}
      />
    </>
  );
}
