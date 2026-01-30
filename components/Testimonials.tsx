import React from 'react';
import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "ICU Nurse, Munich",
      quote: "EuroPath made my dream of working in Germany a reality. The visa support was incredible, and they even helped me find an apartment.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Software Engineer, Amsterdam",
      quote: "Professional from start to finish. I felt prepared for my interviews and the relocation process was smooth thanks to their guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "HR Director, Construction Co.",
      quote: "We've hired over 20 skilled welders through EuroPath. The quality of candidates is consistently high, and retention rates are excellent.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Marcus Weber",
      role: "Site Manager, Berlin",
      quote: "Efficiency and compliance were our top concerns. EuroPath handled everything seamlessly, delivering candidates who were ready to work.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people and companies we've connected across borders.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={testimonial.id} delay={idx * 150} className="h-full">
              <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col relative group hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Quote className="absolute top-8 right-8 text-rose-100 w-10 h-10 group-hover:text-rose-200 transition-colors" />
                
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-700 mb-8 italic flex-grow relative z-10 leading-relaxed">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-rose-600 text-xs font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;