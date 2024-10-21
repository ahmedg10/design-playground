'use client';
//NOTE:
//this is using a lot of javascript to get the curos to work, which I really dont like, but it works for now
//TODO:
// - make more efficient 
// - understand javascript and css perforamnce
// - understand usuage of requestAnimationFrame
import React, { useEffect, useRef, useState } from 'react';
import styles from '@system/animations/BlobCursor.module.scss';

export default function BlobCursor() : JSX.Element {

  // ref for the cursor div -- used to access the DOM element to make changes to the cursor
  const cursorRef = useRef<HTMLDivElement>(null);
  // state to track if the cursor is over the hero
  const [isOverHero, setIsOverHero] = useState(false);


  //UseEffect to track mouse movemnt. 
  useEffect(() => {
    const cursor = cursorRef.current;
    // if the cursor is not in the DOM, return nothing. 
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
    // event listener object extracting the x and y coordinates of the mouse
      const { clientX, clientY } = e;
      cursor.style.setProperty('--mouse-x', `${clientX}px`);
      cursor.style.setProperty('--mouse-y', `${clientY}px`);

      const element = document.elementFromPoint(clientX, clientY);
    //? allows type safety allowing null to be accessed. 
      const isOverHero = element?.closest('.hero-element') !== null;
      
      setIsOverHero(isOverHero);
    };

    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  // useEffect to update the cursor styles based on the isOverHero state
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const opacity = isOverHero ? '0.5' : '1';
    const cursorBlur = isOverHero ? '25px' : '15px';
    const dropBlur = isOverHero ? '8px' : '5px';
    
    cursor.style.setProperty('--cursor-opacity', opacity);
    cursor.style.setProperty('--cursor-blur', cursorBlur);
    cursor.style.setProperty('--drop-opacity', opacity);
    cursor.style.setProperty('--drop-blur', dropBlur);
  }, [isOverHero]);

  return (
    <div ref={cursorRef} className={styles.cursor}>
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`${styles.drop} ${styles[`drop-${i + 1}`]}`} />
      ))}
    </div>
  );
};
