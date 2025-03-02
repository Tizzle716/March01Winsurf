import React from 'react';
import { SERVICES } from '../constants';

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            AI-Powered Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your operations with our cutting-edge AI solutions. From intelligent voice agents 
            to automated workflows, we make your business truly unstoppable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-50"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};