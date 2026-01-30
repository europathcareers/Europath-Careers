import React from 'react';
import { Stethoscope, HardHat, Truck, FileText, UserCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Overseas Job Placement",
      description: "Matching qualified candidates in Healthcare, Construction, Hospitality, Logistics, and General Labor.",
      icon: Truck,
    },
    {
      title: "Candidate Screening",
      description: "Rigorous interviews, document checks, and skills verification to ensure suitability.",
      icon: UserCheck,
    },
    {
      title: "Employer Solutions",
      description: "Providing pre-vetted, reliable, and job-ready candidates tailored to workforce needs.",
      icon: HardHat,
    },
    {
      title: "Compliance Support",
      description: "Guidance through contracts, offer letters, and pre-departure procedures.",
      icon: FileText,
    },
    {
      title: "Visa Guidance",
      description: "Assistance with application guidance, appointment preparation, and relocation readiness.",
      icon: Stethoscope,
    },
    {
      title: "Pre-Departure Orientation",
      description: "Cultural awareness, workplace expectations, and preparation for life abroad.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Recruitment Services</h2>
          <p className="text-lg text-gray-600">
            From sourcing to settlement, we handle every step of the international employment journey with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <Link to="/services" className="text-sm font-semibold text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 text-rose-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link to="/services" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                View All Services
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;