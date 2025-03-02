import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { ParallaxSection } from '../components/ParallaxSection';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { Stats } from '../components/Stats';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ParallaxSection />
      <Services />
      <TechStack />
      <Testimonials />
      <ContactForm />
      <Stats />
    </div>
  );
};
