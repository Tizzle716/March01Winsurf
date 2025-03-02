import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { supabase } from '../lib/supabase';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'voice-agent'
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Insert into Supabase contacts table
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            service_interest: formData.service,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'voice-agent'
      });

      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with our AI automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
                    <XCircle className="w-5 h-5" />
                    <span>{status.error}</span>
                  </div>
                )}

                {status.success && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! We'll be in touch soon.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                      disabled={status.loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                      disabled={status.loading}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={status.loading}
                      pattern="[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}"
                      title="Please enter a valid phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={status.loading}
                    >
                      <option value="voice-agent">AI Voice Agent</option>
                      <option value="text-agent">Custom Text Agent</option>
                      <option value="social-media">Social Media Automation</option>
                      <option value="workflow">Workflow Automation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                    disabled={status.loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    status.loading ? 'opacity-75 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'
                  }`}
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>{CONTACT_INFO.EMAIL}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>{CONTACT_INFO.PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
