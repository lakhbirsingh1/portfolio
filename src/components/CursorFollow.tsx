import React, { useState, useEffect } from 'react';
import styles from '@/components/CursorFollow.module.css'; // Import CSS module for styling

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 10, y: 10 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDelayOver, setIsDelayOver] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setCursorPosition({ x: window.innerWidth / 1, y: window.innerHeight / 1 });
    };

    setCursorPosition({ x: window.innerWidth / 1, y: window.innerHeight / 1 });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { // Explicitly type the 'e' parameter as MouseEvent
      if (isDelayOver) {
        setCursorPosition((prevPosition) => {
          const distX = e.clientX - prevPosition.x;
          const distY = e.clientY - prevPosition.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          // Adjust the distance threshold as needed
          if (distance > 5) { // Only move when the distance exceeds 5 pixels
            const lerpFactor = 0.3; // Adjust the lerp factor for smoother or faster movement
            const newX = prevPosition.x + distX * lerpFactor;
            const newY = prevPosition.y + distY * lerpFactor;
            return { x: newX, y: newY };
          } else {
            return prevPosition; // Maintain the same position
          }
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDelayOver]);

  const handleHover = () => {
    setIsHovered(true);
    setIsDelayOver(false);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setIsDelayOver(true);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('a, .swiper-pagination, .embla-thumbs__slide, button, .button, .btn');
    elements.forEach(element => {
      element.addEventListener('mouseenter', handleHover);
      element.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', handleHover);
        element.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="absolute z-50 pointer-events-none">
      <div className={`${styles.cursor} ${isHovered ? styles['cursor-zoom'] : ''}`} style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></div>
    </div>
  );
};

export default CursorFollow;
