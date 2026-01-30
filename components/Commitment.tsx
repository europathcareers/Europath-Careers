import React from 'react';
import { ShieldCheck, Scale, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Commitment: React.FC = () => {
  return (
    <section className="bg-gray-900 py-24 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Ethical, transparent, and <span className="text-rose-500">compliant</span> recruitment.
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At EuroJobs Careers, we don’t just place people in jobs — we build safe, legal, and sustainable career pathways abroad. We stand firmly against fraud and prioritize the well-being of every candidate.
            </p>
            <Link to="/resources" className="inline-block border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all">
              Our Code of Ethics
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700">
                <ShieldCheck className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Zero Tolerance</h3>
                <p className="text-gray-400 text-sm">Strict policy against fraud, hidden fees, or false promises.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700">
                <Heart className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Candidate First</h3>
                <p className="text-gray-400 text-sm">Your safety, rights, and career growth are our top priorities.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700">
                <Eye className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Full Transparency</h3>
                <p className="text-gray-400 text-sm">Clear communication about costs, contracts, and expectations.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700">
                <Scale className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Legal Compliance</h3>
                <p className="text-gray-400 text-sm">Adherence to international labor standards and laws.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Commitment;