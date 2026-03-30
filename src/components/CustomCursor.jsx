import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Outer ring spring
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Inner crosshair spring (faster to create dynamic drag)
  const dotSpringConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        body, a, button, input {
          cursor: none !important;
        }
      `}</style>

      {/* Outer rotating dashed tech ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-dashed border-cyan-400 pointer-events-none z-[10000] mix-blend-screen hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1.2,
          rotate: isHovered ? 90 : 360,
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
          borderColor: isHovered ? 'transparent' : 'rgba(34,211,238,0.8)'
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 8, ease: "linear" },
          scale: { type: 'spring', stiffness: 300, damping: 20 },
        }}
      >
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full rounded-full border border-cyan-300 flex items-center justify-center backdrop-blur-sm shadow-[inset_0_0_10px_rgba(34,211,238,0.5)]"
          >
            <div className="w-2 h-2 bg-cyan-100 rounded-full animate-ping"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Inner sharp targeting crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-screen hidden md:flex items-center justify-center"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_8px_rgba(34,211,238,1)]"
          animate={{
            scale: isHovered ? 0 : 1,
            opacity: isHovered ? 0 : 1
          }}
        />
        {/* Horizontal crosshair */}
        <motion.div 
          className="absolute w-full h-[1px] bg-cyan-400/60" 
          animate={{ scaleX: isHovered ? 0 : 0.6 }} 
          transition={{ duration: 0.2 }}
        />
        {/* Vertical crosshair */}
        <motion.div 
          className="absolute h-full w-[1px] bg-cyan-400/60" 
          animate={{ scaleY: isHovered ? 0 : 0.6 }} 
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
