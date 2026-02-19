import React, { useState } from 'react';
import { Users, Shield, TrendingUp, CheckCircle, Loader2, Send, Clock, Globe, Briefcase, Star, Plane, File, Calendar, Calculator, User, X, MapPin, Download, Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Employers: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    hiringNeeds: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.target as HTMLFormElement;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  // Interactive States
  const [brochureStatus, setBrochureStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  // ROI Calculator State
  const [localSalary, setLocalSalary] = useState(45000);
  const [recruitmentTime, setRecruitmentTime] = useState(6); // months
  
  const estimatedSavings = Math.round((localSalary * 0.2) + (recruitmentTime * 2000) - 5000);

  const handleDownloadBrochure = () => {
    setBrochureStatus('loading');
    setTimeout(() => {
        setBrochureStatus('success');
        setTimeout(() => setBrochureStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-xs">For Employers</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Strategic Workforce Solutions for European Markets</h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Source pre-vetted, highly skilled professionals from our global network. We mitigate the complexities of international recruitment, allowing your organization to scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-rose-900/40"
              >
                Request Talent Profile
              </button>
              <button 
                onClick={handleDownloadBrochure}
                disabled={brochureStatus !== 'idle'}
                className="border border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
              >
                {brochureStatus === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Processing...</>
                ) : brochureStatus === 'success' ? (
                    <><Check size={18} /> Downloaded</>
                ) : (
                    <>Download Corporate Brochure <Download size={18} /></>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-rose-900/10 to-transparent"></div>
      </section>

      {/* Talent Pool Snapshot */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center shadow-sm">
                        <Users className="text-white" size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active Talent Pool</p>
                        <p className="text-2xl font-bold text-gray-900">1,250+ Candidates</p>
                    </div>
                </div>
                <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">500+</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Medical Staff</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">200+</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Skilled Trades</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">350+</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Logistics</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">100+</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Engineering</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Candidate Profiles */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">Qualified Professionals</h2>
                  <p className="text-gray-600 mt-4 max-w-xl mx-auto">Vetted individuals currently available for placement in high-demand European sectors.</p>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { role: "ICU Nurse", exp: "8 Years", lang: "German B2", origin: "Philippines", skills: ["Intensive Care", "Patient Safety", "Emergency"], availability: "1 Month", education: "BS Nursing, Manila Central Univ." },
                      { role: "Full Stack Dev", exp: "5 Years", lang: "English C1", origin: "India", skills: ["React", "Node.js", "AWS"], availability: "Immediate", education: "B.Tech Computer Science, IIT" },
                      { role: "TIG Welder", exp: "10 Years", lang: "English B1", origin: "Poland", skills: ["Pipe Welding", "Blueprint Reading", "Safety Cert"], availability: "2 Weeks", education: "Vocational Certification, Warsaw" }
                  ].map((profile, i) => (
                      <FadeIn key={i} delay={i * 150}>
                          <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group bg-white">
                              <div className="flex items-center gap-4 mb-6">
                                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                                      <User size={28} />
                                  </div>
                                  <div>
                                      <h3 className="font-bold text-gray-900">{profile.role}</h3>
                                      <p className="text-xs text-gray-500 uppercase font-medium">{profile.origin} • {profile.exp} Exp.</p>
                                  </div>
                              </div>
                              <div className="space-y-3 mb-6">
                                  <div className="flex justify-between text-xs">
                                      <span className="text-gray-500 font-medium">Language Level:</span>
                                      <span className="font-bold text-gray-900">{profile.lang}</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                      {profile.skills.map((skill, si) => (
                                          <span key={si} className="bg-gray-50 text-gray-600 text-[10px] font-bold uppercase px-2 py-1 rounded border border-gray-200">{skill}</span>
                                      ))}
                                  </div>
                              </div>
                              <button 
                                onClick={() => setSelectedProfile(profile)}
                                className="w-full border-2 border-rose-600 text-rose-600 font-bold py-2.5 rounded-xl hover:bg-rose-600 hover:text-white transition-all text-sm"
                              >
                                View Executive Summary
                              </button>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* Why EuroJobs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Enterprise-Grade Recruitment</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        We prioritize retention and compliance over volume. Our data-driven screening process ensures that every candidate is culturally aligned and technically proficient for their specific role.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "95% Retention rate over 12 months",
                            "Strict adherence to international labor standards",
                            "End-to-end relocation and compliance management",
                            "Dedicated senior account management"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="bg-rose-100 p-1 rounded-full">
                                    <CheckCircle className="text-rose-600 w-4 h-4 flex-shrink-0" />
                                </div>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { icon: Users, title: "Verified Talent", desc: "Professionals vetted by industry experts." },
                        { icon: Shield, title: "Risk Mitigation", desc: "Full legal and documentation compliance." },
                        { icon: TrendingUp, title: "Hiring Efficiency", desc: "Significant reduction in time-to-hire." },
                        { icon: Globe, title: "Global Access", desc: "Sourcing across 18+ emerging markets." }
                    ].map((feat, i) => (
                        <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${i % 2 !== 0 ? 'mt-8' : ''}`}>
                            <feat.icon className="w-8 h-8 text-rose-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-1">{feat.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight">Hiring Value Assessment</h2>
                  <p className="text-gray-400 mt-4">Evaluate the impact of international recruitment on your operational efficiency.</p>
              </FadeIn>
              
              <div className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2 space-y-8">
                      <div>
                          <div className="flex justify-between mb-4">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Local Annual Salary</label>
                            <span className="text-rose-400 font-bold">€{localSalary.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range" 
                            min="30000" 
                            max="100000" 
                            step="1000" 
                            value={localSalary} 
                            onChange={(e) => setLocalSalary(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
                          />
                      </div>
                      <div>
                          <div className="flex justify-between mb-4">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Months Vacant</label>
                            <span className="text-rose-400 font-bold">{recruitmentTime} Months</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="12" 
                            value={recruitmentTime} 
                            onChange={(e) => setRecruitmentTime(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
                          />
                      </div>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col justify-center bg-gray-900/40 p-10 rounded-2xl border border-gray-700">
                      <div className="flex items-center gap-3 mb-6">
                          <Calculator className="text-rose-500" size={24} />
                          <h3 className="font-bold text-lg uppercase tracking-wider">Estimated Annual Value</h3>
                      </div>
                      <div className="text-5xl font-bold text-white mb-4">
                          €{estimatedSavings.toLocaleString()}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed border-t border-gray-700 pt-4 italic">
                        * Value based on reduced local recruitment costs, lower attrition rates, and the elimination of critical vacancy overheads.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 p-8 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-tight">Submit Talent Request</h2>

            {isSubmitted ? (
              <div className="text-center py-12 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received</h3>
                <p className="text-gray-600 mb-8">Thank you for your request. Our partnership team will contact you within 24 business hours.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ companyName: '', contactPerson: '', email: '', hiringNeeds: '' });
                  }}
                  className="text-rose-600 font-bold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                name="employer-inquiry"
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="employer-inquiry" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company Name</label>
                        <input 
                            type="text" 
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                            placeholder="Registered Name" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Contact Officer</label>
                        <input 
                            type="text" 
                            name="contactPerson"
                            required
                            value={formData.contactPerson}
                            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                            placeholder="Full Name & Title" 
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Professional Email</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                        placeholder="office@company.com" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Staffing Requirements</label>
                    <textarea 
                        name="hiringNeeds"
                        required
                        value={formData.hiringNeeds}
                        onChange={(e) => setFormData({ ...formData, hiringNeeds: e.target.value })}
                        rows={4} 
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all resize-none" 
                        placeholder="Describe the specific roles, required skillsets, and volume needed..."
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold hover:bg-rose-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20"
                >
                    Submit Official Inquiry <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
        </div>
      </section>

      {/* Executive Summary Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative">
                <button 
                    onClick={() => setSelectedProfile(null)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="flex items-center gap-6 mb-8">
                     <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-rose-600 border border-gray-200">
                          <User size={40} />
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-gray-900">{selectedProfile.role}</h3>
                         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{selectedProfile.origin} • {selectedProfile.exp} Tenure</p>
                     </div>
                </div>
                
                <div className="space-y-6 mb-10">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <p className="text-[10px] text-gray-400 uppercase font-bold mb-3 tracking-widest">Core Competencies</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedProfile.skills.map((s: string, i: number) => (
                                <span key={i} className="bg-white border border-gray-200 px-2.5 py-1.5 rounded-lg text-xs font-bold text-gray-700 shadow-sm">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-widest">Education</p>
                            <p className="text-xs font-bold text-gray-900">{selectedProfile.education}</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-widest">Earliest Start</p>
                            <p className="text-xs font-bold text-rose-600">{selectedProfile.availability}</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={() => {
                        document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                        setSelectedProfile(null);
                    }}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                    Request Full Dossier <Briefcase size={18} />
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Employers;