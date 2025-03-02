import React from 'react';
import { SERVICES } from '../constants';

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered services can revolutionize your business operations
            and drive growth through intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      </div>
                      <p className="ml-4 text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
