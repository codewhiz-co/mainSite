"use client";

import { useState, useEffect, useCallback } from "react";

const rotatingTexts = [
  "Digital Solutions",
  "Web Development",
  "App Innovation",
  "Software Solutions",
  "Social Media",
  "Content Creation",
  "E-Commerce Plus",
  "Restaurant Tools",
  "Cloud Systems",
  "Cybersecurity"
];

export default function RotatingText() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [backgroundFade, setBackgroundFade] = useState(false);

  const cycleText = useCallback(() => {
    setIsAnimating(true);
    setBackgroundFade(true);
    
    setTimeout(() => {
      setTextIndex((current) => (current + 1) % rotatingTexts.length);
      setIsAnimating(false);
      
      setTimeout(() => {
        setBackgroundFade(false);
      }, 100);
    }, 500);
  }, []);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, [cycleText]);

  if (!mounted) {
    return <span className="text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Digital Solutions</span>;
  }

  return (
    <div className="relative w-full">
      <div 
        className={`absolute inset-0 hero-gradient ${
          backgroundFade ? 'opacity-40' : 'opacity-80'
        } transition-opacity duration-500`} 
      />
      <div className="relative">
        <span
          className={`text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 block ${
            isAnimating ? "opacity-0 transform -translate-y-8" : "opacity-100 transform translate-y-0"
          }`}
        >
          {rotatingTexts[textIndex]}
        </span>
      </div>
    </div>
  );
}