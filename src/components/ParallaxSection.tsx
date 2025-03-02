import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import banner from '../assets/banner2.png';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-indigo-900 text-white">
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h2 className="text-5xl font-bold mb-6 gradient-animate bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Your AI-Powered Business Revolution
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Experience the power of AI automation that works 24/7. From intelligent voice agents to 
            social media management, we're here to make your business truly unstoppable.
          </p>
          <a 
            href="mailto:ContactUs@aiautomationsunstoppable.com" 
            className="group px-8 py-4 bg-white text-indigo-900 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
          >
            Transform Your Business Today
          </a>
        </div>
      </div>
    </section>
  );
};