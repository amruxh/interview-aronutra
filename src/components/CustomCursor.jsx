'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)');
    const checkVisibility = () => {
      setIsVisible(mql.matches && window.innerWidth >= 768);
    };

    checkVisibility();
    mql.addEventListener('change', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    const moveCursor = (e) => {
      if (!isVisible) return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (!isVisible) return;
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mql.removeEventListener('change', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37] rounded-full pointer-events-none z-9999 mix-blend-difference"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-[#D4AF37] rounded-full pointer-events-none z-9999"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
