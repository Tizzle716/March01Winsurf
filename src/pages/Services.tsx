import React from 'react';
import { Bot, Code, Cpu, LineChart } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'AI Automation Solutions',
      description: 'Custom AI solutions to automate your business processes and increase efficiency.',
      icon: <Bot className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'Process Optimization',
      description: 'Streamline your workflows and eliminate bottlenecks with our optimization services.',
      icon: <LineChart className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business needs.',
      icon: <Code className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      icon: <Cpu className="h-6 w-6 text-indigo-600" />,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive suite of AI automation services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {service.icon}
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="/contact" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
