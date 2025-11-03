"use client";

import { useEffect, useRef } from 'react';

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;
    Array.from(elements).forEach((element) => {
      const width = Math.random() * 100 + 50;
      const height = Math.random() * 100 + 50;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = -Math.random() * 10;

      (element as HTMLElement).style.setProperty('--element-width', `${width}px`);
      (element as HTMLElement).style.setProperty('--element-height', `${height}px`);
      (element as HTMLElement).style.setProperty('--element-left', `${left}%`);
      (element as HTMLElement).style.setProperty('--element-top', `${top}%`);
      (element as HTMLElement).style.setProperty('--float-duration', `${duration}s`);
      (element as HTMLElement).style.setProperty('--float-delay', `${delay}s`);
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="floating-element opacity-50" />
      ))}
    </div>
  );
}