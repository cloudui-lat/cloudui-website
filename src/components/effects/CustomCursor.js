import React, { useEffect, useState } from 'react';
import cursorImage from '../../assets/cursor.png';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (isCoarsePointer) {
      return undefined;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handlePointerDown = () => {
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setIsPressed(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('blur', handlePointerLeave);
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('blur', handlePointerLeave);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <img
      src={cursorImage}
      alt="Custom cursor"
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '48px',
        height: '48px',
        transform: `translate(-12px, -8px) scale(${isPressed ? 0.92 : 1})`,
        transformOrigin: 'top left',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 9999,
        transition: 'transform 120ms ease'
      }}
    />
  );
};

export default CustomCursor;

