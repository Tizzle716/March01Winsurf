import React from 'react';
import { AnimatedTitle } from './AnimatedTitle';
import { Mail, Phone } from 'lucide-react';
import banner from '../assets/banner2.png';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 to-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <span className="text-sm text-indigo-400 font-medium mb-4 block">
          AI-Powered Business Automation
        </span>
        
        <AnimatedTitle 
          text="Transform Your Business with AI Automations"
          className="text-5xl md:text-6xl font-bold mb-8 text-white reveal-text"
        />
        
        <p className="text-xl text-indigo-200 mb-12 max-w-3xl mx-auto">
          Revolutionize your operations with our intelligent AI solutions. From 24/7 voice agents 
          to automated workflows, we're here to make your business truly unstoppable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ContactUs@aiautomationsunstoppable.com"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </a>
          <a
            href="tel:716-260-6436"
            className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            716-260-6436
          </a>
        </div>
      </div>
    </div>
  );
};