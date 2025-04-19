'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/CursorFollow.module.css';

interface Position {
  x: number;
  y: number;
}

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 10, y: 10 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDelayOver, setIsDelayOver] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setCursorPosition({ x: window.innerWidth, y: window.innerHeight });
    };

    handleResize(); // initialize position on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDelayOver) {
        setCursorPosition((prevPosition) => {
          const distX = e.clientX - prevPosition.x;
          const distY = e.clientY - prevPosition.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance > 5) {
            const lerpFactor = 0.3;
            const newX = prevPosition.x + distX * lerpFactor;
            const newY = prevPosition.y + distY * lerpFactor;
            return { x: newX, y: newY };
          }

          return prevPosition;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
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
    const elements = document.querySelectorAll<HTMLElement>('a, .swiper-pagination, .embla-thumbs__slide, button, .button, .btn');

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="absolute z-50 pointer-events-none">
      <div
        className={`${styles.cursor} ${isHovered ? styles['cursor-zoom'] : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </div>
  );
};

export default CursorFollow;
