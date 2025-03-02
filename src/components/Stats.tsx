import React from 'react';
import { Instagram, Tiktok, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const SocialLink = ({ icon: Icon, href, label }: { icon: any; href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

export const Stats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us on social media and reach out to learn how we can transform your business with AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <SocialLink
                icon={Mail}
                href={`mailto:${CONTACT_INFO.EMAIL}`}
                label={CONTACT_INFO.EMAIL}
              />
              <SocialLink
                icon={Phone}
                href={`tel:${CONTACT_INFO.PHONE}`}
                label={CONTACT_INFO.PHONE}
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Social Media</h3>
            <div className="space-y-4">
              <SocialLink
                icon={Instagram}
                href={CONTACT_INFO.SOCIAL.INSTAGRAM.url}
                label={`@${CONTACT_INFO.SOCIAL.INSTAGRAM.handle}`}
              />
              <SocialLink
                icon={Tiktok}
                href={CONTACT_INFO.SOCIAL.TIKTOK.url}
                label={CONTACT_INFO.SOCIAL.TIKTOK.handle}
              />
              <SocialLink
                icon={Facebook}
                href={CONTACT_INFO.SOCIAL.FACEBOOK.url}
                label={CONTACT_INFO.SOCIAL.FACEBOOK.handle}
              />
              <SocialLink
                icon={Youtube}
                href={CONTACT_INFO.SOCIAL.YOUTUBE.url}
                label={CONTACT_INFO.SOCIAL.YOUTUBE.handle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};