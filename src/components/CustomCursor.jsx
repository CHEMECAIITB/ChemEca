import React, { useEffect, useState } from 'react';
import 'ldrs/jellyTriangle';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile (no custom cursor needed)
    const checkIfMobile = () => {
      const isTouch = 'ontouchstart' in window || window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (isMobile) return null; // 🔇 Disable on mobile

  const cursorStyle = {
    position: 'fixed', // ✅ better than absolute when scrolling
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 9999,
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={cursorStyle}>
      <l-jelly-triangle size="20" speed="1.75" color="white"></l-jelly-triangle>
    </div>
  );
};

export default CustomCursor;
