import React from 'react';
import { TECH_STACK } from '../constants';
import { Database, Workflow, Bot, BookOpen, Server, BrainCircuit, Library } from 'lucide-react';

const CATEGORY_ICONS = {
  DATABASE: Database,
  AUTOMATIONS: Workflow,
  CRM: Server,
  CMS: BookOpen,
  AI_PHONE: Bot,
  LLM: BrainCircuit,
  LIBRARIES: Library
};

export const TechStack = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            We leverage the most advanced tools and technologies to deliver 
            exceptional AI automation solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(TECH_STACK).map(([category, tools]) => {
            const Icon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            return (
              <div 
                key={category}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {category.replace('_', ' ')}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-indigo-500/10 rounded-lg text-indigo-300 hover:bg-indigo-500/20 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
