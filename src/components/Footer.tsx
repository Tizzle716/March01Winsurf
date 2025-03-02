import React from 'react';
import { Instagram, Tiktok, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-indigo-200 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">AI Automations Unstoppable</h2>
            <p className="text-indigo-200 mb-6">
              Transforming businesses with intelligent AI solutions and automation.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.SOCIAL.INSTAGRAM.url} className="text-indigo-200 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={CONTACT_INFO.SOCIAL.TIKTOK.url} className="text-indigo-200 hover:text-white">
                <Tiktok className="w-6 h-6" />
              </a>
              <a href={CONTACT_INFO.SOCIAL.FACEBOOK.url} className="text-indigo-200 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={CONTACT_INFO.SOCIAL.YOUTUBE.url} className="text-indigo-200 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <FooterSection title="Services">
            <FooterLink href="#voice-agents">AI Voice Agents</FooterLink>
            <FooterLink href="#text-agents">Custom Text Agents</FooterLink>
            <FooterLink href="#social-media">Social Media Solutions</FooterLink>
            <FooterLink href="#workflow">Workflow Automation</FooterLink>
          </FooterSection>

          <FooterSection title="Contact">
            <FooterLink href={`mailto:${CONTACT_INFO.EMAIL}`}>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.EMAIL}</span>
              </div>
            </FooterLink>
            <FooterLink href={`tel:${CONTACT_INFO.PHONE}`}>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.PHONE}</span>
              </div>
            </FooterLink>
          </FooterSection>

          <FooterSection title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </FooterSection>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-200">
          <p>&copy; {currentYear} AI Automations Unstoppable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
