import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Commitment from '../components/Commitment';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FadeIn from '../components/FadeIn';
import { Play, MapPin, TrendingUp, DollarSign, Newspaper, ArrowRight, Globe, Mail, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="EuroPath Careers connects skilled job seekers with verified employers across Europe. Build your safe, legal, and sustainable career pathway today."
      />
      <Hero />
      
      {/* Latest Jobs Ticker */}
      <div className="bg-rose-900 text-white py-3 overflow-hidden whitespace-nowrap relative">
        <div className="inline-block animate-[marquee_30s_linear_infinite] hover:pause">
            <span className="mx-8 font-medium text-sm uppercase tracking-wider"><span className="text-rose-400 font-bold mr-2">NEW</span> JUST ADDED: ICU Nurse (Munich, €4,200/mo)</span>
            <span className="mx-8 text-rose-400 opacity-50">•</span>
            <span className="mx-8 font-medium text-sm uppercase tracking-wider"><span className="text-rose-400 font-bold mr-2">URGENT</span> Mig/Tig Welders (Poland, Competitive)</span>
            <span className="mx-8 text-rose-400 opacity-50">•</span>
            <span className="mx-8 font-medium text-sm uppercase tracking-wider"><span className="text-rose-400 font-bold mr-2">NEW</span> Warehouse Supervisors (Rotterdam, €3,100/mo)</span>
            <span className="mx-8 text-rose-400 opacity-50">•</span>
            <span className="mx-8 font-medium text-sm uppercase tracking-wider"><span className="text-rose-400 font-bold mr-2">OPEN</span> Senior Java Developer (Berlin, €75k/yr)</span>
            <span className="mx-8 text-rose-400 opacity-50">•</span>
            <span className="mx-8 font-medium text-sm uppercase tracking-wider"><span className="text-rose-400 font-bold mr-2">NEW</span> Geriatric Caregiver (UK, £24k/yr)</span>
            <span className="mx-8 text-rose-400 opacity-50">•</span>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hover\:pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      <Stats />
      
      {/* Video Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to EuroPath Careers</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Discover how we bridge the gap between talent and opportunity. Our comprehensive support system ensures your journey to working in Europe is smooth, legal, and life-changing.
              </p>
              <ul className="space-y-4 mb-8">
                {["Personalized Career Coaching", "Legal & Visa Assistance", "Post-Arrival Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-rose-600 font-bold hover:text-rose-700 hover:underline">Read more about our mission &rarr;</Link>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Interactive Impact Map */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Global Impact</h2>
                <p className="text-gray-400 mt-4">Connecting talent from 18+ countries across Africa, Asia, and South America to Europe.</p>
            </FadeIn>
            
            <div className="relative h-[400px] w-full max-w-5xl mx-auto bg-gray-800/50 rounded-3xl border border-gray-700 p-8 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-no-repeat bg-center"></div>
                
                {/* Map Pins */}
                {[
                  { top: '35%', left: '48%', label: 'Germany', count: '1.2k Placed' },
                  { top: '32%', left: '45%', label: 'UK', count: '850 Placed' },
                  { top: '36%', left: '52%', label: 'Poland', count: '400 Placed' },
                  { top: '45%', left: '65%', label: 'UAE', count: 'Source Hub' },
                  { top: '55%', left: '70%', label: 'India', count: 'Source Hub' },
                  { top: '60%', left: '80%', label: 'Philippines', count: 'Source Hub' },
                  // Africa
                  { top: '53%', left: '47%', label: 'Ghana', count: 'Source Hub' },
                  { top: '58%', left: '57%', label: 'Kenya', count: 'Source Hub' },
                  { top: '58%', left: '55%', label: 'Uganda', count: 'Source Hub' },
                  { top: '60%', left: '52%', label: 'DRC', count: 'Source Hub' },
                  // South America
                  { top: '70%', left: '32%', label: 'Brazil', count: 'Source Hub' },
                  { top: '58%', left: '27%', label: 'Colombia', count: 'Source Hub' }
                ].map((pin, i) => (
                   <div key={i} className="absolute group" style={{ top: pin.top, left: pin.left }}>
                      <div className="relative flex items-center justify-center">
                          <span className="w-4 h-4 bg-rose-500 rounded-full animate-ping absolute opacity-75"></span>
                          <span className="w-3 h-3 bg-rose-600 rounded-full relative z-10 border-2 border-gray-900"></span>
                          
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                              {pin.label}
                              <div className="text-[10px] text-rose-600 font-normal">{pin.count}</div>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                          </div>
                      </div>
                   </div> 
                ))}
                
                <div className="absolute bottom-8 left-8 bg-gray-900/80 backdrop-blur border border-gray-700 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <Globe className="text-rose-500" />
                        <div>
                            <p className="text-white font-bold">18 Countries</p>
                            <p className="text-xs text-gray-400">Active Recruitment Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Commitment />
      
      {/* Featured Destination */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-rose-600 font-bold uppercase tracking-wider text-sm">Destination in Focus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Work in Germany</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Europe's largest economy is actively seeking skilled professionals. High quality of life, excellent social security, and competitive salaries await.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Germany Landscape" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={20} className="text-rose-500" />
                        <span className="font-bold uppercase tracking-wider">Germany</span>
                      </div>
                      <h3 className="text-3xl font-bold">The Opportunity Hub</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <DollarSign size={18} className="text-rose-600" />
                        <span className="text-sm font-medium">Avg. Salary (Skilled)</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">€45k - €85k</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <TrendingUp size={18} className="text-rose-600" />
                        <span className="text-sm font-medium">Top Demand</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">Healthcare & IT</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Germany has introduced the "Chancenkarte" (Opportunity Card) to make it easier for skilled non-EU nationals to enter the country and look for work. We support you through the entire recognition and visa process.
                  </p>
                  <Link 
                    to="/candidates" 
                    state={{ location: 'Germany' }}
                    className="inline-flex items-center justify-center bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors w-fit"
                  >
                    View Jobs in Germany
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Features />
      
      {/* Blog/News Snippets */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-rose-600 font-bold uppercase tracking-wider text-sm">Stay Informed</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Migration News & Insights</h2>
                </div>
                <Link to="/resources" className="hidden md:flex items-center gap-2 text-rose-600 font-bold hover:underline">
                    View All News <ArrowRight size={20} />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Germany's New Opportunity Card Explained", date: "Oct 12, 2024", cat: "Visa Update", img: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "Top 5 In-Demand Skills in the Netherlands", date: "Oct 08, 2024", cat: "Career Tips", img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "UK Healthcare Visa: Changes for 2025", date: "Sep 28, 2024", cat: "Policy", img: "https://images.unsplash.com/photo-1576091160550-21878bf01ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                ].map((post, i) => (
                    <FadeIn key={i} delay={i * 150}>
                        <div className="group cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4 relative h-56">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">{post.cat}</div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                                <Newspaper size={14} /> {post.date}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors leading-tight">{post.title}</h3>
                        </div>
                    </FadeIn>
                ))}
            </div>
            <div className="mt-8 md:hidden">
                <Link to="/resources" className="flex items-center gap-2 text-rose-600 font-bold hover:underline">
                    View All News <ArrowRight size={20} />
                </Link>
            </div>
          </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Decorative background */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>
               
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">Let's start a conversation</h2>
                 <p className="text-gray-300 mb-8">Whether you are a candidate looking for opportunities or an employer seeking talent, we are here to help.</p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <Mail size={20} className="text-rose-400" />
                     </div>
                     <div>
                       <p className="text-sm text-gray-400">Email us</p>
                       <p className="font-semibold">europathcareers@gmail.com</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <MapPin size={20} className="text-rose-400" />
                     </div>
                     <div>
                       <p className="text-sm text-gray-400">Headquarters</p>
                       <p className="font-semibold">London, UK</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="relative z-10 mt-12">
                 <p className="text-sm text-gray-400">"EuroPath connected us with exceptional nursing talent in record time."</p>
                 <p className="text-xs text-rose-400 mt-2 font-bold">- Berlin Charity Hospital</p>
               </div>
            </div>

            <div className="md:w-1/2 p-12">
              <form 
                  action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" 
                  method="POST" 
                  target="_blank"
                  className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">I am a...</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="entry.USER_TYPE" value="Candidate" className="peer sr-only" defaultChecked />
                      <div className="text-center py-3 border border-gray-200 rounded-xl peer-checked:bg-rose-50 peer-checked:border-rose-500 peer-checked:text-rose-700 font-medium transition-all">
                        Candidate
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="entry.USER_TYPE" value="Employer" className="peer sr-only" />
                      <div className="text-center py-3 border border-gray-200 rounded-xl peer-checked:bg-rose-50 peer-checked:border-rose-500 peer-checked:text-rose-700 font-medium transition-all">
                        Employer
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" name="entry.NAME_ID" placeholder="John Doe" required className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="email" name="entry.EMAIL_ID" placeholder="john@example.com" required className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea name="entry.MESSAGE_ID" rows={4} placeholder="How can we help you?" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;