import React, { useState, useEffect } from 'react';
import { ClipboardList, UserCheck, Plane, Briefcase, X, Upload, Check, Loader2, Heart, Home, DollarSign, ChevronDown, ChevronUp, ArrowRight, FileDown, Bell, PlayCircle, Star, Search, MapPin, Filter, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLocation } from 'react-router-dom';

const Candidates: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [jobAlertEmail, setJobAlertEmail] = useState('');

  // Eligibility Check State
  const [showEligibility, setShowEligibility] = useState(false);
  const [eligibilityStep, setEligibilityStep] = useState(0);
  const [eligibilityAnswers, setEligibilityAnswers] = useState<any>({});

  // Job Board State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterIndustry, setFilterIndustry] = useState('All');
  
  const location = useLocation();

  useEffect(() => {
    if (location.state?.industry) {
        setFilterIndustry(location.state.industry);
        setTimeout(() => {
            document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    if (location.state?.location) {
        setFilterLocation(location.state.location);
        setTimeout(() => {
            document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  }, [location]);

  const jobs = [
    { id: 1, title: "Registered ICU Nurse", location: "Munich, Germany", salary: "€3,800 - €4,500/mo", type: "Full-time", industry: "Healthcare", posted: "2 days ago", featured: true },
    { id: 2, title: "MIG/TIG Welder", location: "Gdansk, Poland", salary: "€2,500 - €3,200/mo", type: "Contract", industry: "Construction", posted: "1 week ago", featured: true },
    { id: 3, title: "Warehouse Supervisor", location: "Rotterdam, Netherlands", salary: "€3,100/mo", type: "Full-time", industry: "Logistics", posted: "3 days ago", featured: false },
    { id: 4, title: "Senior Java Developer", location: "Berlin, Germany", salary: "€75,000/yr", type: "Full-time", industry: "IT", posted: "5 hours ago", featured: true },
    { id: 5, title: "Geriatric Caregiver", location: "London, UK", salary: "£24,000/yr", type: "Full-time", industry: "Healthcare", posted: "1 day ago", featured: false },
    { id: 6, title: "Industrial Electrician", location: "Cork, Ireland", salary: "€45,000/yr", type: "Full-time", industry: "Construction", posted: "3 days ago", featured: false },
    { id: 7, title: "Operating Theatre Nurse", location: "Hamburg, Germany", salary: "€4,200/mo", type: "Full-time", industry: "Healthcare", posted: "Just now", featured: false },
    { id: 8, title: "Head Chef", location: "Paris, France", salary: "€3,200/mo", type: "Full-time", industry: "Hospitality", posted: "4 days ago", featured: true },
    { id: 9, title: "HGV Class 1 Driver", location: "Utrecht, Netherlands", salary: "€2,900/mo", type: "Contract", industry: "Logistics", posted: "1 day ago", featured: false },
    { id: 10, title: "Civil Engineer", location: "Stuttgart, Germany", salary: "€55,000/yr", type: "Full-time", industry: "Construction", posted: "6 hours ago", featured: true },
    { id: 11, title: "Radiographer", location: "Dublin, Ireland", salary: "€42,000/yr", type: "Full-time", industry: "Healthcare", posted: "3 days ago", featured: false },
    { id: 12, title: "Hotel General Manager", location: "Barcelona, Spain", salary: "€3,500/mo", type: "Full-time", industry: "Hospitality", posted: "1 week ago", featured: false },
    { id: 13, title: "CNC Machinist", location: "Brno, Czech Republic", salary: "€2,200/mo", type: "Contract", industry: "Construction", posted: "2 days ago", featured: false },
    { id: 14, title: "Cloud Architect", location: "Tallinn, Estonia", salary: "€60,000/yr", type: "Full-time", industry: "IT", posted: "Just now", featured: true },
    { id: 15, title: "Physiotherapist", location: "Zurich, Switzerland", salary: "CHF 85,000/yr", type: "Full-time", industry: "Healthcare", posted: "5 days ago", featured: true }
  ];

  const filteredJobs = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = filterLocation === 'All' || job.location.includes(filterLocation);
      const matchesIndustry = filterIndustry === 'All' || job.industry === filterIndustry;
      return matchesSearch && matchesLocation && matchesIndustry;
  });

  const steps = [
    { icon: ClipboardList, title: "1. Apply Online", desc: "Submit your profile and CV through our secure portal." },
    { icon: UserCheck, title: "2. Screening", desc: "Our team verifies your skills, credentials, and experience." },
    { icon: Briefcase, title: "3. Interview", desc: "Connect with verified employers for interviews." },
    { icon: Plane, title: "4. Relocate", desc: "Visa support and pre-departure orientation." }
  ];

  const countries = [
    { name: "Germany", role: "Nurses", salary: "€2,800 - €4,200/mo", img: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Netherlands", role: "Logistics", salary: "€2,100 - €3,000/mo", img: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "UK", role: "Caregivers", salary: "£21,000 - £26,000/yr", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  const candidateFaqs = [
    { q: "Do I have to pay for the visa?", a: "In most cases, the employer covers the visa sponsorship costs. However, some administrative fees (like embassy appointment fees) might initially be borne by the candidate and reimbursed later. We clarify this before you sign anything." },
    { q: "Is housing provided?", a: "Many of our employer partners provide subsidized housing for the first 3-6 months to help you settle in. If not, our local support team assists you in finding affordable accommodation near your workplace." },
    { q: "Can I bring my family?", a: "Yes! Most skilled worker visas in Europe allow for family reunification. Typically, you can apply for your spouse and children to join you once you have settled and passed the probationary period (usually 3-6 months)." },
    { q: "Do I need to speak the language?", a: "It depends on the role. For healthcare roles in Germany, B2 German is usually required. For IT or warehousing in the Netherlands, English is often sufficient. We provide access to language training partners." }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleEligibilityAnswer = (key: string, value: string) => {
      setEligibilityAnswers({...eligibilityAnswers, [key]: value});
      setEligibilityStep(eligibilityStep + 1);
  };

  const getEligibilityResult = () => {
      if (eligibilityAnswers.profession === 'Healthcare' && eligibilityAnswers.language === 'B2') {
          return { title: "Likely Eligible: Blue Card / Recognition", desc: "Your profile strongly matches current shortage demands in Germany." };
      }
      if (eligibilityAnswers.experience === '5+') {
          return { title: "Likely Eligible: Skilled Worker Visa", desc: "Your extensive experience qualifies you for accelerated programs." };
      }
      return { title: "Consultation Recommended", desc: "We need to assess your specific qualifications further. Please submit your CV." };
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="bg-rose-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Gateway to Global Opportunities</h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl text-gray-600 mb-8">
                We help skilled professionals find safe, legal, and rewarding careers in Europe. No hidden fees, no false promises.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-rose-700 transition-all hover:scale-105"
              >
                Submit Your CV
              </button>
            </FadeIn>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-rose-100/50 skew-x-12 transform origin-top hidden lg:block"></div>
      </section>

      {/* Interactive Job Board */}
      <section id="jobs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900">Explore Open Roles</h2>
                  <p className="text-gray-600 mt-2">Find the perfect position that matches your skills and migration goals.</p>
              </FadeIn>

              {/* Filters & Search */}
              <FadeIn delay={100}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-10">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="md:col-span-2 relative">
                              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input 
                                  type="text" 
                                  placeholder="Search by job title or keyword..." 
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                              />
                          </div>
                          <div className="relative">
                               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                               <select 
                                  value={filterLocation}
                                  onChange={(e) => setFilterLocation(e.target.value)}
                                  className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none appearance-none bg-white cursor-pointer"
                               >
                                   <option value="All">All Locations</option>
                                   <option value="Germany">Germany</option>
                                   <option value="UK">United Kingdom</option>
                                   <option value="Netherlands">Netherlands</option>
                                   <option value="Poland">Poland</option>
                                   <option value="Ireland">Ireland</option>
                                   <option value="France">France</option>
                                   <option value="Spain">Spain</option>
                                   <option value="Switzerland">Switzerland</option>
                                   <option value="Estonia">Estonia</option>
                               </select>
                               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                          </div>
                          <div className="relative">
                               <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                               <select 
                                  value={filterIndustry}
                                  onChange={(e) => setFilterIndustry(e.target.value)}
                                  className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none appearance-none bg-white cursor-pointer"
                               >
                                   <option value="All">All Industries</option>
                                   <option value="Healthcare">Healthcare</option>
                                   <option value="Construction">Construction</option>
                                   <option value="IT">IT & Tech</option>
                                   <option value="Logistics">Logistics</option>
                                   <option value="Hospitality">Hospitality</option>
                               </select>
                               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                          </div>
                      </div>
                  </div>
              </FadeIn>

              {/* Job Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.length > 0 ? (
                      filteredJobs.map((job, idx) => (
                          <FadeIn key={job.id} delay={idx * 50}>
                              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-rose-100 transition-all group h-full flex flex-col">
                                  <div className="flex justify-between items-start mb-4">
                                      <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${job.featured ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-600'}`}>
                                          {job.industry}
                                      </span>
                                      {job.featured && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{job.title}</h3>
                                  <div className="space-y-2 mb-6 flex-grow">
                                      <div className="flex items-center text-gray-500 text-sm gap-2">
                                          <MapPin size={16} className="text-rose-500" /> {job.location}
                                      </div>
                                      <div className="flex items-center text-gray-500 text-sm gap-2">
                                          <DollarSign size={16} className="text-rose-500" /> {job.salary}
                                      </div>
                                      <div className="flex items-center text-gray-500 text-sm gap-2">
                                          <Briefcase size={16} className="text-rose-500" /> {job.type}
                                      </div>
                                  </div>
                                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                                      <span className="text-xs text-gray-400">{job.posted}</span>
                                      <button 
                                          onClick={() => setIsModalOpen(true)}
                                          className="text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                                      >
                                          Apply Now <ArrowRight size={16} />
                                      </button>
                                  </div>
                              </div>
                          </FadeIn>
                      ))
                  ) : (
                      <div className="col-span-full text-center py-12">
                          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search className="text-gray-400" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">No jobs found</h3>
                          <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                      </div>
                  )}
              </div>
          </div>
      </section>

      {/* Life Abroad Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Life Abroad: What to Expect</h2>
                <p className="text-gray-600 mt-4">Explore opportunities in top destinations.</p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {countries.map((country, idx) => (
                    <FadeIn key={idx} delay={idx * 150}>
                        <div className="rounded-2xl overflow-hidden shadow-lg group relative h-80">
                            <img src={country.img} alt={country.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl font-bold mb-1">{country.name}</h3>
                                <p className="text-rose-300 font-medium mb-4">{country.role}</p>
                                <div className="space-y-2 text-sm bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                                    <div className="flex items-center gap-2">
                                        <DollarSign size={14} />
                                        <span>Avg: {country.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Home size={14} />
                                        <span>High Standard of Living</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart size={14} />
                                        <span>Full Social Benefits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* CV Template Section */}
      <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-gray-700">
                  <div className="md:w-1/2">
                      <div className="inline-flex items-center gap-2 bg-rose-900/50 text-rose-300 px-3 py-1 rounded-full text-sm font-bold mb-4 border border-rose-800">
                          <FileDown size={16} /> Free Resource
                      </div>
                      <h2 className="text-3xl font-bold mb-4">ATS-Friendly Europass CV Template</h2>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                          European employers prefer the Europass format. Download our free, optimized template to ensure your application passes automated screening systems and gets noticed by recruiters.
                      </p>
                      <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-colors">
                          Download Template <FileDown size={20} />
                      </button>
                  </div>
                  <div className="md:w-1/2 relative">
                      <div className="absolute -inset-4 bg-rose-500/20 blur-xl rounded-full"></div>
                      <img 
                          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="CV Template Preview" 
                          className="relative rounded-lg shadow-2xl border border-gray-600 rotate-2 hover:rotate-0 transition-transform duration-500"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-4">A transparent path to your new career.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="h-full">
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-rose-100 transition-all h-full bg-white hover:bg-white">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Success Story */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-900">Real Success Stories</h2>
              </FadeIn>
              <FadeIn>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto group cursor-pointer aspect-[21/9]">
                      <img 
                          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                          alt="Success Story Video" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-rose-600 shadow-lg group-hover:scale-110 transition-transform">
                              <PlayCircle size={40} fill="currentColor" className="bg-white rounded-full" />
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white text-2xl font-bold">From Manila to Munich: Maria's Journey</h3>
                          <p className="text-gray-200">See how Maria navigated the recognition process to become a Head Nurse in Germany.</p>
                      </div>
                  </div>
              </FadeIn>
          </div>
      </section>

      {/* Job Alert Signup */}
      <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                  <div className="bg-gradient-to-r from-rose-50 to-white border border-rose-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bell className="text-rose-600 w-8 h-8" />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Never Miss an Opportunity</h3>
                          <p className="text-gray-600 mb-4">Get notified instantly when new jobs match your skills and preferred destination.</p>
                          <form action="https://formsubmit.co/europathcareers@gmail.com" method="POST" className="flex gap-2">
                              <input type="hidden" name="_subject" value="Job Alert Subscription" />
                              <input type="hidden" name="_captcha" value="false" />
                              <input 
                                  type="email" 
                                  name="email"
                                  placeholder="Your email address" 
                                  required
                                  value={jobAlertEmail}
                                  onChange={(e) => setJobAlertEmail(e.target.value)}
                                  className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
                              />
                              <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                                  Alert Me
                              </button>
                          </form>
                      </div>
                  </div>
              </FadeIn>
          </div>
      </section>

      {/* Candidate FAQs */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Candidate Questions</h2>
                <div className="space-y-4">
                    {candidateFaqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <button 
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                {faq.q}
                                {openFaq === idx ? <ChevronUp size={20} className="text-rose-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </button>
                            {openFaq === idx && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-in slide-in-from-top-2">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </FadeIn>
          </div>
      </section>

      {/* Skill Assessment CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which visa you qualify for?</h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Take our free, 2-minute eligibility assessment to find out which European work visa matches your profile.
                        </p>
                        <button 
                          onClick={() => { setShowEligibility(true); setEligibilityStep(0); }}
                          className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-rose-900/50 flex items-center gap-2 mx-auto"
                        >
                            Check Your Eligibility <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* CV Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl scale-100 animate-in zoom-in-95 duration-200 relative">
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Your CV</h2>
                <p className="text-gray-500 mb-6">Upload your resume to join our talent pool.</p>

                <form action="https://formsubmit.co/europathcareers@gmail.com" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="_subject" value="New CV Application" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" required placeholder="John Doe" />
                    </div>
                    
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resume (PDF/Doc)</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                            <input 
                                type="file" 
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                required 
                            />
                            {fileName ? (
                                <div className="flex items-center justify-center gap-2 text-rose-600 font-medium">
                                    <Briefcase size={20} />
                                    {fileName}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-gray-400">
                                    <Upload size={32} className="mb-2" />
                                    <span className="text-sm">Click to upload or drag and drop</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={!fileName}
                        className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
      )}

      {/* Eligibility Modal */}
      {showEligibility && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative">
                <button onClick={() => setShowEligibility(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={24} /></button>
                
                {eligibilityStep === 0 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl font-bold mb-6">Step 1: What is your primary profession?</h3>
                        <div className="space-y-3">
                            {['Healthcare', 'Engineering/IT', 'Trades/Construction', 'Other'].map(opt => (
                                <button key={opt} onClick={() => handleEligibilityAnswer('profession', opt)} className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-rose-500 hover:bg-rose-50 font-medium transition-colors">{opt}</button>
                            ))}
                        </div>
                    </div>
                )}
                {eligibilityStep === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl font-bold mb-6">Step 2: Years of professional experience?</h3>
                        <div className="space-y-3">
                            {['Less than 2 years', '2-5 years', '5+ years'].map(opt => (
                                <button key={opt} onClick={() => handleEligibilityAnswer('experience', opt)} className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-rose-500 hover:bg-rose-50 font-medium transition-colors">{opt}</button>
                            ))}
                        </div>
                    </div>
                )}
                {eligibilityStep === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl font-bold mb-6">Step 3: German Language Proficiency?</h3>
                        <div className="space-y-3">
                            {['None / A1', 'A2 / B1', 'B2 or Higher'].map(opt => (
                                <button key={opt} onClick={() => handleEligibilityAnswer('language', opt.split(' ')[0])} className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-rose-500 hover:bg-rose-50 font-medium transition-colors">{opt}</button>
                            ))}
                        </div>
                    </div>
                )}
                {eligibilityStep === 3 && (
                    <div className="text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-600 w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{getEligibilityResult().title}</h3>
                        <p className="text-gray-600 mb-8">{getEligibilityResult().desc}</p>
                        <button 
                            onClick={() => { setShowEligibility(false); setIsModalOpen(true); }}
                            className="bg-rose-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors"
                        >
                            Proceed to Application
                        </button>
                    </div>
                )}
                
                {eligibilityStep < 3 && (
                    <div className="mt-8 flex gap-2 justify-center">
                        {[0,1,2].map(i => (
                            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i <= eligibilityStep ? 'w-8 bg-rose-600' : 'w-2 bg-gray-200'}`}></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;