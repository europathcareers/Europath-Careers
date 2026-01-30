import React, { useState } from 'react';
import { Stethoscope, HardHat, Truck, FileText, UserCheck, GraduationCap, Check, X, Building2, Hammer, Utensils, Download, Loader2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ServicesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('healthcare');
    const [dlStatus, setDlStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleDownload = () => {
        setDlStatus('loading');
        setTimeout(() => {
            setDlStatus('success');
            setTimeout(() => setDlStatus('idle'), 3000);
        }, 2000);
    };

    const services = [
        {
          title: "Overseas Job Placement",
          description: "We don't just fill vacancies; we find the right fit. Our placement services cover a wide range of industries including Healthcare, Construction, Hospitality, and Logistics. We ensure candidates are matched with roles that align with their skills and career goals.",
          icon: Truck,
        },
        {
          title: "Candidate Screening & Shortlisting",
          description: "Quality is our priority. Our rigorous screening process includes initial interviews, background checks, and detailed skills verification to ensure that only the most suitable candidates are presented to our partner employers.",
          icon: UserCheck,
        },
        {
          title: "Employer Recruitment Solutions",
          description: "For employers, we offer bespoke recruitment strategies. From mass hiring for construction projects to specialized headhunting for healthcare professionals, we provide pre-vetted, job-ready candidates tailored to your specific workforce needs.",
          icon: HardHat,
        },
        {
          title: "Documentation & Compliance",
          description: "Navigating international labor laws can be complex. We guide candidates and employers through the entire documentation process, including contracts, offer letters, and medical clearances, ensuring full legal compliance.",
          icon: FileText,
        },
        {
          title: "Visa & Relocation Guidance",
          description: "While we do not issue visas, we provide expert guidance on the application process, appointment scheduling, and document preparation. We also assist with flight bookings and relocation logistics to ensure a smooth transition.",
          icon: Stethoscope,
        },
        {
          title: "Pre-Departure Orientation",
          description: "We prepare candidates for success abroad through comprehensive orientation sessions. These cover cultural nuances, workplace expectations, safety standards, and employee rights in their destination country.",
          icon: GraduationCap,
        },
      ];

    const industryContent: any = {
        healthcare: {
            title: "Healthcare Recruitment",
            icon: Stethoscope,
            desc: "Specialized pathways for Nurses, Doctors, and Caregivers.",
            points: ["Credential Recognition Support", "Language Training Integration", "Shift-ready Candidates"]
        },
        construction: {
            title: "Construction & Trades",
            icon: Hammer,
            desc: "Sourcing certified welders, electricians, and site managers.",
            points: ["Skill Testing Verification", "Safety Certification Checks", "Project-based Hiring"]
        },
        hospitality: {
            title: "Hospitality Services",
            icon: Utensils,
            desc: "Staffing hotels and restaurants with seasonal and permanent talent.",
            points: ["Front-of-house training", "Culinary Specialists", "Rapid Deployment"]
        }
    };

  return (
    <div className="pt-20">
      <section className="bg-rose-600 text-white py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold mb-4">Our Core Services</h1>
              <p className="text-rose-100 text-xl max-w-2xl mx-auto">Comprehensive recruitment and placement solutions designed for global success.</p>
            </FadeIn>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, idx) => (
                    <FadeIn key={idx} delay={idx * 100}>
                      <div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 h-full">
                          <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0 text-rose-600">
                              <service.icon size={32} />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                          </div>
                      </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Industry Focus Tabs */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Specialized Industry Focus</h2>
                  <p className="text-gray-600 mt-2">Tailored recruitment strategies for key sectors.</p>
              </FadeIn>

              <div className="max-w-4xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                      {Object.keys(industryContent).map((key) => (
                          <button
                              key={key}
                              onClick={() => setActiveTab(key)}
                              className={`px-6 py-3 rounded-full font-bold transition-all ${
                                  activeTab === key 
                                  ? 'bg-rose-600 text-white shadow-lg' 
                                  : 'bg-white text-gray-600 hover:bg-gray-100'
                              }`}
                          >
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                          </button>
                      ))}
                  </div>

                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center animate-in fade-in zoom-in-95 duration-300 key={activeTab}">
                      <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 flex-shrink-0">
                          {React.createElement(industryContent[activeTab].icon, { size: 40 })}
                      </div>
                      <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{industryContent[activeTab].title}</h3>
                          <p className="text-gray-600 text-lg mb-6">{industryContent[activeTab].desc}</p>
                          <ul className="space-y-3">
                              {industryContent[activeTab].points.map((point: string, i: number) => (
                                  <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                                      <Check size={18} className="text-green-500" /> {point}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Process Flowchart */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Recruitment Lifecycle</h2>
                  <p className="text-gray-600">A systematic approach to ensuring quality and compliance.</p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                  {['Sourcing', 'Screening', 'Processing', 'Deployment'].map((step, i) => (
                      <div key={i} className="relative">
                          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm z-10 relative">
                              <span className="text-5xl font-bold text-rose-100 absolute top-2 right-4">0{i+1}</span>
                              <h3 className="text-xl font-bold text-gray-900 relative z-10">{step}</h3>
                          </div>
                          {i < 3 && (
                              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-white border-r border-t border-gray-300 transform rotate-45 z-0"></div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Standard vs Premium Comparison */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">Service Levels</h2>
                  <p className="text-gray-600 mt-2">Choose the engagement model that fits your needs.</p>
              </FadeIn>

              <div className="overflow-x-auto">
                  <table className="w-full max-w-4xl mx-auto border-collapse bg-white shadow-sm rounded-xl overflow-hidden">
                      <thead>
                          <tr>
                              <th className="p-4 text-left border-b-2 border-gray-100 w-1/3">Feature</th>
                              <th className="p-4 text-center border-b-2 border-gray-100 w-1/3 bg-gray-50 text-gray-900">Standard Placement</th>
                              <th className="p-4 text-center border-b-2 border-rose-600 w-1/3 bg-rose-50 text-rose-900">Premium RPO</th>
                          </tr>
                      </thead>
                      <tbody>
                          {[
                              { name: "Candidate Sourcing", std: true, prem: true },
                              { name: "Initial Screening", std: true, prem: true },
                              { name: "Skill Verification", std: false, prem: true },
                              { name: "Visa Processing Support", std: "Basic", prem: "Full" },
                              { name: "Dedicated Account Manager", std: false, prem: true },
                              { name: "Replacement Guarantee", std: "3 Months", prem: "6 Months" },
                          ].map((row, idx) => (
                              <tr key={idx} className="border-b border-gray-100">
                                  <td className="p-4 font-medium text-gray-700">{row.name}</td>
                                  <td className="p-4 text-center bg-gray-50/50">
                                      {row.std === true ? <Check size={20} className="mx-auto text-green-500" /> : 
                                       row.std === false ? <X size={20} className="mx-auto text-gray-300" /> : 
                                       <span className="text-sm font-medium">{row.std}</span>}
                                  </td>
                                  <td className="p-4 text-center bg-rose-50/30">
                                      {row.prem === true ? <Check size={20} className="mx-auto text-rose-600" /> : 
                                       <span className="text-sm font-bold text-rose-600">{row.prem}</span>}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* Download Brochure CTA */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                  <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                      <div className="relative z-10">
                          <h2 className="text-3xl font-bold text-white mb-6">Want all the details?</h2>
                          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                              Download our comprehensive Corporate Brochure to learn more about our methodologies, success rates, and compliance frameworks.
                          </p>
                          <button 
                            onClick={handleDownload}
                            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 mx-auto"
                            disabled={dlStatus !== 'idle'}
                          >
                              {dlStatus === 'loading' ? (
                                  <><Loader2 size={20} className="animate-spin" /> Downloading...</>
                              ) : dlStatus === 'success' ? (
                                  <><Check size={20} /> Downloaded</>
                              ) : (
                                  <>Download Corporate Brochure <Download size={20} /></>
                              )}
                          </button>
                      </div>
                      {/* Decorative Circles */}
                      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
                  </div>
              </FadeIn>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;