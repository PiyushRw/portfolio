'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('visible');
    };

    const hide = () => glow.classList.remove('visible');

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef} />;
}
