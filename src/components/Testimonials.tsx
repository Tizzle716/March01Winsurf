import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    content: "The AI voice agent has transformed how I handle property inquiries. It's like having a 24/7 assistant that never misses a call!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    content: "Their social media automation has saved us countless hours. The AI-generated content is engaging and our followers love it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The custom text agents have streamlined our email management and document processing. It's like having an entire team in one solution.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-indigo-300">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-indigo-100 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
