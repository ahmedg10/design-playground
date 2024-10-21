import React, { useEffect } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import styles from './GravityCursor.module.scss';

const GravityCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorControls = useAnimation();

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleClick = (e) => {
      if (e.target !== document.body && e.target !== document.documentElement) {
        cursorControls.start({
          scale: [1, 0.9, 1.1, 1],
          transition: { duration: 0.3 }
        });
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [cursorControls]);

  return (
    <motion.div 
      className={styles.cursor}
      style={{
        left: cursorX,
        top: cursorY,
      }}
      animate={cursorControls}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <rect 
          className={styles.cursorRect} 
          x="0" 
          y="0" 
          width="10" 
          height="10" 
        />
      </svg>
    </motion.div>
  );
};

export default GravityCursor;
