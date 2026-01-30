import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 relative">
        
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 max-w-4xl leading-tight">
            Building safe, legal, and <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-rose-600 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_auto]">sustainable</span> career pathways abroad.
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed mx-auto">
            We connect skilled and motivated job seekers with verified employers across Europe. 
            Zero tolerance for fraud. Full transparency.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Link to="/candidates" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-rose-600/20 hover:shadow-rose-600/30 hover:-translate-y-1 flex items-center justify-center gap-2">
              Find Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <Play className="w-3 h-3 text-gray-900 group-hover:text-rose-600 ml-0.5" fill="currentColor" />
              </div>
              How it works
            </Link>
          </div>
        </FadeIn>

        {/* Hero Image Group */}
        <FadeIn delay={400} className="relative w-full max-w-5xl group">
            {/* Animated Abstract Background Decoration */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-30 animate-blob mix-blend-multiply filter"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
            <div className="absolute -bottom-20 left-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>

            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Diverse group of professionals collaborating" 
              className="w-full h-auto rounded-2xl shadow-2xl object-cover object-center aspect-[16/9] md:aspect-[21/9] relative z-10 transition-transform duration-700 hover:scale-[1.01]"
            />

            {/* Floating Badges */}
            <div className="absolute -bottom-6 left-10 md:left-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float hidden md:flex z-20">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Verification Status</p>
                <p className="text-sm font-bold text-gray-900">100% Compliant</p>
              </div>
            </div>

             <div className="absolute -top-6 right-10 md:right-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float-delay hidden md:flex z-20">
              <div className="bg-blue-100 p-2 rounded-lg">
                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Global Reach</p>
                <p className="text-sm font-bold text-gray-900">Europe & Beyond</p>
              </div>
            </div>
        </FadeIn>
      </div>
      
      {/* Logos Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FadeIn delay={600}>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="Siemens" className="h-8 md:h-10 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" alt="DHL" className="h-6 md:h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Airbus_SVG_Logo_2021.svg" alt="Airbus" className="h-6 md:h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo_Iron_Mark.svg" alt="Volvo" className="h-10 md:h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Bosch" className="h-6 md:h-8 object-contain" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;