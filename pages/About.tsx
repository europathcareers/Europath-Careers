import React from 'react';
import { Globe, Heart, ShieldCheck, Linkedin, Award, History, MapPin, Briefcase } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="About Us"
        description="Learn about EuroPath Careers' mission to bridge the gap between global talent and European opportunities through ethical and transparent recruitment."
      />
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <FadeIn>
                      <img 
                          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                          alt="Team Meeting" 
                          className="rounded-3xl shadow-2xl hover:scale-[1.01] transition-transform duration-500"
                      />
                    </FadeIn>
                </div>
                <div className="md:w-1/2">
                    <FadeIn delay={200}>
                      <span className="text-rose-600 font-bold uppercase tracking-wider text-sm">Our Story</span>
                      <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Building Bridges Across Borders</h1>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          EuroPath Careers was founded on a simple belief: Talent is universal, but opportunity is not. We exist to bridge that gap. 
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          As an international recruitment agency, we specialize in connecting skilled professionals with verified employers in Europe. Our mission is to facilitate ethical, safe, and transparent migration pathways that benefit both the candidate and the employer.
                      </p>
                    </FadeIn>
                    <FadeIn delay={400}>
                      <div className="flex gap-4">
                          <div className="bg-gray-50 p-4 rounded-xl text-center w-1/3 hover-scale-sm">
                              <span className="block text-3xl font-bold text-rose-600 mb-1">10+</span>
                              <span className="text-xs text-gray-500 uppercase">Years Exp</span>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl text-center w-1/3 hover-scale-sm">
                              <span className="block text-3xl font-bold text-rose-600 mb-1">12</span>
                              <span className="text-xs text-gray-500 uppercase">Countries</span>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl text-center w-1/3 hover-scale-sm">
                              <span className="block text-3xl font-bold text-rose-600 mb-1">3k+</span>
                              <span className="text-xs text-gray-500 uppercase">Placed</span>
                          </div>
                      </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                      <History className="text-rose-600" /> Our Journey
                  </h2>
              </FadeIn>
              
              <div className="relative border-l-2 border-rose-200 ml-4 md:ml-0 md:pl-0 space-y-12">
                  {[
                      { year: "2014", title: "Foundation", desc: "Established in London with a focus on Healthcare recruitment." },
                      { year: "2017", title: "Expansion to Germany", desc: "Opened Munich office to support the 'Triple Win' nursing program." },
                      { year: "2020", title: "Digital Transformation", desc: "Launched our fully digital candidate screening portal." },
                      { year: "2023", title: "Global Reach", desc: "Crossed 3,000 successful placements across 12 countries." },
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 100}>
                          <div className="relative pl-8 md:pl-0 flex flex-col md:flex-row md:items-center md:justify-between group">
                              <div className="absolute -left-[9px] top-0 md:left-1/2 md:-ml-[9px] w-5 h-5 bg-white border-4 border-rose-600 rounded-full z-10"></div>
                              <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                                  <span className="text-rose-600 font-bold text-xl">{item.year}</span>
                                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                  <p className="text-gray-600 mt-1">{item.desc}</p>
                              </div>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership</h2>
                  <p className="text-gray-600 mt-2">The people dedicated to your global success.</p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { name: "Sarah Meyer", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                      { name: "James Wilson", role: "Head of Recruitment", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                      { name: "Anita Singh", role: "Compliance Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                      { name: "David Kim", role: "Operations Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                  ].map((member, idx) => (
                      <FadeIn key={idx} delay={idx * 100}>
                          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100">
                              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-100 group-hover:border-rose-200">
                                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                              </div>
                              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                              <p className="text-sm text-rose-600 font-medium mb-3">{member.role}</p>
                              <div className="flex justify-center">
                                  <Linkedin size={16} className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                              </div>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <FadeIn className="text-center mb-16">
                  <h2 className="text-3xl font-bold">Our Global Offices</h2>
                  <p className="text-gray-400 mt-2">Visit us at one of our international hubs.</p>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { city: "London, UK", address: "123 Canary Wharf, E14 5AB", type: "HQ" },
                      { city: "Munich, DE", address: "Maximilianstraße 45, 80538", type: "Operations" },
                      { city: "Manila, PH", address: "BGC Corporate Center, Taguig", type: "Sourcing" },
                  ].map((office, i) => (
                      <FadeIn key={i} delay={i * 150}>
                          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-rose-500 transition-colors text-center">
                              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <MapPin className="text-rose-500" />
                              </div>
                              <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                              <p className="text-gray-400 mb-4">{office.address}</p>
                              <span className="text-xs font-bold uppercase tracking-wider bg-gray-900 px-3 py-1 rounded text-gray-300">{office.type}</span>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* Global Presence Map Representation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-no-repeat bg-contain"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Network</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['Germany', 'Netherlands', 'UK', 'Poland', 'Philippines', 'India', 'UAE'].map((country) => (
                        <span key={country} className="px-6 py-2 bg-gray-100 text-gray-800 rounded-full border border-gray-200 text-sm font-semibold">{country}</span>
                    ))}
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Internal Hiring / Join Our Team */}
      <section className="py-24 bg-rose-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FadeIn>
                  <Briefcase className="w-12 h-12 text-rose-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Internal Team</h2>
                  <p className="text-gray-600 mb-8">
                      We are always looking for passionate recruiters and operations specialists to join our mission.
                  </p>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 text-left">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                          <div>
                              <h4 className="font-bold text-lg">Senior Recruiter (Healthcare)</h4>
                              <p className="text-sm text-gray-500">Remote / Munich</p>
                          </div>
                      </div>
                      <div className="flex justify-between items-center">
                          <div>
                              <h4 className="font-bold text-lg">Operations Manager</h4>
                              <p className="text-sm text-gray-500">London, UK</p>
                          </div>
                      </div>
                  </div>
              </FadeIn>
          </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-16 text-gray-900">Our Core Values</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <FadeIn delay={100} className="h-full">
                  <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-rose-200 transition-colors h-full">
                      <ShieldCheck className="w-12 h-12 text-rose-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Integrity</h3>
                      <p className="text-gray-600">We operate with complete honesty. No hidden costs, no fake jobs, and full transparency in every interaction.</p>
                  </div>
                </FadeIn>
                <FadeIn delay={200} className="h-full">
                  <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-rose-200 transition-colors h-full">
                      <Heart className="w-12 h-12 text-rose-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Empathy</h3>
                      <p className="text-gray-600">We understand that working abroad is a life-changing decision. We support our candidates emotionally and professionally.</p>
                  </div>
                </FadeIn>
                <FadeIn delay={300} className="h-full">
                  <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-rose-200 transition-colors h-full">
                      <Globe className="w-12 h-12 text-rose-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
                      <p className="text-gray-600">We strive for the highest standards in recruitment, ensuring the best match for both employers and employees.</p>
                  </div>
                </FadeIn>
            </div>

            {/* Certifications */}
            <div className="border-t border-gray-100 pt-16">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Accredited & Member Of</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                     <div className="flex items-center gap-2 font-bold text-gray-800 text-xl"><Award className="text-rose-600" /> ISO 9001:2015</div>
                     <div className="flex items-center gap-2 font-bold text-gray-800 text-xl"><ShieldCheck className="text-blue-600" /> REC Member</div>
                     <div className="flex items-center gap-2 font-bold text-gray-800 text-xl"><Globe className="text-green-600" /> GLAA Licensed</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;