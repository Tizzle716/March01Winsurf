import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      name: 'Phone',
      value: '716-260-6436',
      icon: <Phone className="h-6 w-6 text-indigo-600" />,
      href: 'tel:716-260-6436',
    },
    {
      name: 'Email',
      value: 'ContactUs@aiautomationsunstoppable.com',
      icon: <Mail className="h-6 w-6 text-indigo-600" />,
      href: 'mailto:ContactUs@aiautomationsunstoppable.com',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      value: '@ai_automations_716',
      icon: <Instagram className="h-6 w-6" />,
      href: 'https://www.instagram.com/ai_automations_716',
    },
    {
      name: 'Facebook',
      value: 'affiliatesanon',
      icon: <Facebook className="h-6 w-6" />,
      href: 'https://facebook.com/affiliatesanon',
    },
    {
      name: 'YouTube',
      value: '@AI_automationsunstoppable',
      icon: <Youtube className="h-6 w-6" />,
      href: 'https://youtube.com/@AI_automationsunstoppable',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:divide-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-4 leading-7 text-gray-600">
              We'd love to hear from you. Choose the most convenient way to reach us.
            </p>
            <div className="mt-10 space-y-8">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex gap-x-4">
                  <div className="flex-none">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <a href={item.href} className="text-gray-600 hover:text-indigo-600">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <h3 className="text-lg font-semibold text-gray-900">Follow us</h3>
              <div className="mt-6 space-y-6">
                {socialLinks.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 text-gray-600 hover:text-indigo-600"
                    >
                      {item.icon}
                      <span>{item.value}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-16 lg:pt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send us a message</h2>
            <form className="mt-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
