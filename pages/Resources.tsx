import React, { useState } from 'react';
import { FileText, HelpCircle, BookOpen, Download, Loader2, Check, Calculator, Calendar, ListTodo, Square, CheckSquare, Languages, ExternalLink, Scale, ArrowRightLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Resources: React.FC = () => {
    const [downloading, setDownloading] = useState<number | null>(null);
    const [downloaded, setDownloaded] = useState<number | null>(null);
    const [calcRole, setCalcRole] = useState('Nurse');
    const [calcDest, setCalcDest] = useState('Germany');
    
    // Compare Tool State
    const [compare1, setCompare1] = useState('Germany');
    const [compare2, setCompare2] = useState('UK');

    // Checklist State
    const [checklist, setChecklist] = useState([
        { id: 1, text: "Valid Passport (at least 6 months)", checked: false },
        { id: 2, text: "Translated Birth Certificate", checked: false },
        { id: 3, text: "Professional Certifications", checked: false },
        { id: 4, text: "Language Proficiency Certificate", checked: false },
        { id: 5, text: "Medical Clearance", checked: false },
        { id: 6, text: "Signed Employment Contract", checked: false },
    ]);

    const countryData: any = {
        Germany: { salary: "€45k - €60k", tax: "35% - 42%", col: "Medium", visa: "Hard (Language Req)", happiness: "7.0/10" },
        UK: { salary: "£30k - £45k", tax: "20% - 40%", col: "High", visa: "Medium (Points Based)", happiness: "6.8/10" },
        Netherlands: { salary: "€40k - €55k", tax: "37% - 49%", col: "High", visa: "Easy (Highly Skilled)", happiness: "7.5/10" },
        Poland: { salary: "€20k - €30k", tax: "12% - 32%", col: "Low", visa: "Easy (Work Permit)", happiness: "6.0/10" },
    };

    const toggleCheck = (id: number) => {
        setChecklist(checklist.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    };

    const handleDownload = (idx: number) => {
        setDownloading(idx);
        setTimeout(() => {
            setDownloading(null);
            setDownloaded(idx);
            setTimeout(() => setDownloaded(null), 3000);
        }, 1500);
    };

    const getEstimate = () => {
        if (calcDest === 'Germany' && calcRole === 'Nurse') return '€2,800 - €3,500';
        if (calcDest === 'Germany' && calcRole === 'Engineer') return '€4,000 - €5,500';
        if (calcDest === 'Netherlands' && calcRole === 'Nurse') return '€2,500 - €3,200';
        if (calcDest === 'Netherlands' && calcRole === 'Engineer') return '€3,800 - €5,000';
        return '€2,500+';
    };

    const faqs = [
        { q: "Are there any fees for candidates?", a: "EuroPath Careers maintains a strict ethical recruitment policy. We do not charge placement fees to candidates for standard job matching services. Any administrative costs (medical, visa) are transparently communicated." },
        { q: "Which countries do you recruit for?", a: "We primarily recruit for roles in Germany, Poland, the Netherlands, and the UK, but our network is expanding globally." },
        { q: "How long does the process take?", a: "Timelines vary by country and visa type, but typically range from 2 to 6 months from application to deployment." },
        { q: "Do you provide training?", a: "Yes, we partner with training centers to offer language courses and skill upgrades required for specific roles." },
    ];

  return (
    <div className="pt-20">
       <section className="bg-gray-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Resources & Support</h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Guides, FAQs, and information to help you navigate your international career journey.</p>
         </div>
      </section>

      {/* Compare Destinations Tool */}
      <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-12">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mx-auto mb-4">
                      <Scale size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Compare Destinations</h2>
                  <p className="text-gray-600 mt-2">Not sure where to go? Compare key metrics side-by-side.</p>
              </FadeIn>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 p-6 gap-4 items-center text-center">
                      <div className="font-bold text-gray-400 uppercase tracking-widest text-xs">Metric</div>
                      <div className="relative">
                          <select 
                            value={compare1} 
                            onChange={(e) => setCompare1(e.target.value)}
                            className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-2 px-4 font-bold text-gray-900 text-center focus:ring-2 focus:ring-rose-500 outline-none cursor-pointer"
                          >
                              {Object.keys(countryData).map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                      </div>
                      <div className="relative">
                           <select 
                            value={compare2} 
                            onChange={(e) => setCompare2(e.target.value)}
                            className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-2 px-4 font-bold text-gray-900 text-center focus:ring-2 focus:ring-rose-500 outline-none cursor-pointer"
                          >
                              {Object.keys(countryData).map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                      </div>
                  </div>
                  
                  {[
                      { label: "Avg. Skilled Salary", key: "salary" },
                      { label: "Income Tax Rate", key: "tax" },
                      { label: "Cost of Living", key: "col" },
                      { label: "Visa Difficulty", key: "visa" },
                      { label: "Quality of Life Index", key: "happiness" }
                  ].map((row, idx) => (
                      <div key={idx} className={`grid grid-cols-3 p-6 gap-4 text-center items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                          <div className="font-semibold text-gray-500 text-sm">{row.label}</div>
                          <div className="font-bold text-gray-900 text-lg">{countryData[compare1][row.key]}</div>
                          <div className="font-bold text-gray-900 text-lg">{countryData[compare2][row.key]}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                  <div className="bg-rose-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12">
                      <div className="md:w-1/2">
                          <div className="flex items-center gap-3 mb-4">
                              <div className="bg-rose-700 p-3 rounded-lg"><Calculator className="text-white" /></div>
                              <h2 className="text-3xl font-bold">Salary Estimator</h2>
                          </div>
                          <p className="text-rose-100 text-lg">Curious about your potential earnings abroad? Use our quick estimator to see average monthly salaries for top roles.</p>
                      </div>
                      <div className="md:w-1/2 w-full bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                              <div>
                                  <label className="block text-sm font-medium text-rose-200 mb-2">Destination</label>
                                  <select 
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-rose-500 outline-none"
                                    value={calcDest}
                                    onChange={(e) => setCalcDest(e.target.value)}
                                  >
                                      <option>Germany</option>
                                      <option>Netherlands</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-rose-200 mb-2">Role</label>
                                  <select 
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-rose-500 outline-none"
                                    value={calcRole}
                                    onChange={(e) => setCalcRole(e.target.value)}
                                  >
                                      <option>Nurse</option>
                                      <option>Engineer</option>
                                      <option>Welder</option>
                                  </select>
                              </div>
                          </div>
                          <div className="text-center pt-4 border-t border-white/10">
                              <p className="text-sm text-rose-200 uppercase tracking-wider mb-1">Estimated Monthly Salary</p>
                              <p className="text-4xl font-bold">{getEstimate()}</p>
                          </div>
                      </div>
                  </div>
              </FadeIn>
          </div>
      </section>
      
      {/* Interactive Relocation Checklist */}
      <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-10">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ListTodo size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Document Readiness Checklist</h2>
                  <p className="text-gray-600 mt-2">Track your progress for the visa application process.</p>
              </FadeIn>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {checklist.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => toggleCheck(item.id)}
                        className={`p-6 border-b border-gray-50 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors ${item.checked ? 'bg-green-50/50' : ''}`}
                      >
                          <div className={`text-2xl transition-all ${item.checked ? 'text-green-500 scale-110' : 'text-gray-300'}`}>
                              {item.checked ? <CheckSquare /> : <Square />}
                          </div>
                          <span className={`text-lg font-medium transition-all ${item.checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                              {item.text}
                          </span>
                      </div>
                  ))}
                  <div className="p-6 bg-gray-50 text-center">
                      <p className="text-sm text-gray-500">
                          {checklist.filter(i => i.checked).length} of {checklist.length} items completed
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                      <div className="bg-rose-100 text-rose-700 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold flex-shrink-0">
                          <span className="text-xs uppercase">OCT</span>
                          <span className="text-2xl">24</span>
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-gray-900">Working in Germany: Visa Workshop</h3>
                          <p className="text-gray-500 text-sm mt-1 mb-3">Live Q&A with immigration experts.</p>
                          <button className="text-rose-600 text-sm font-bold hover:underline">Register Free</button>
                      </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                      <div className="bg-rose-100 text-rose-700 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold flex-shrink-0">
                          <span className="text-xs uppercase">NOV</span>
                          <span className="text-2xl">05</span>
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-gray-900">Pre-Departure Orientation (Online)</h3>
                          <p className="text-gray-500 text-sm mt-1 mb-3">Essential tips for your first month abroad.</p>
                          <button className="text-rose-600 text-sm font-bold hover:underline">Register Free</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Language Learning Hub */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="text-center mb-12">
                  <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                      <Languages size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Language Learning Hub</h2>
                  <p className="text-gray-600 mt-2">Recommended resources to hit your target proficiency levels.</p>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                      { lang: "German", level: "A1-B2", resource: "Goethe Institut", type: "Official Course", color: "bg-yellow-500" },
                      { lang: "Dutch", level: "A1-A2", resource: "TaalThuis", type: "Online Practice", color: "bg-orange-500" },
                      { lang: "English", level: "IELTS/OET", resource: "British Council", type: "Exam Prep", color: "bg-blue-600" },
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <div className={`w-2 h-12 ${item.color} rounded-full mb-4`}></div>
                          <h3 className="text-xl font-bold text-gray-900">{item.lang}</h3>
                          <p className="text-gray-500 text-sm mb-4">Target: {item.level}</p>
                          <div className="border-t pt-4">
                              <p className="font-semibold text-gray-800 mb-1">{item.resource}</p>
                              <div className="flex justify-between items-center">
                                  <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.type}</span>
                                  <ExternalLink size={16} className="text-gray-400 hover:text-rose-600 cursor-pointer" />
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="text-rose-600" />
                  Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                  {faqs.map((item, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                          <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                          <p className="text-gray-600">{item.a}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10 text-center">Helpful Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                      { title: "Visa Application Guide", desc: "Step-by-step documentation checklist for Schengen visas." },
                      { title: "Living in Germany", desc: "Cultural tips, cost of living, and accommodation advice." },
                      { title: "Interview Preparation", desc: "How to ace your interview with European employers." },
                      { title: "Language Learning Tips", desc: "Best resources to master A1-B2 levels quickly." }
                  ].map((guide, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col h-full border border-gray-100">
                          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                              <BookOpen size={24} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                          <p className="text-gray-600 mb-6 flex-grow">{guide.desc}</p>
                          <button 
                            onClick={() => handleDownload(idx)}
                            className={`font-medium flex items-center gap-2 transition-colors ${
                                downloaded === idx ? 'text-green-600' : 'text-rose-600 hover:text-rose-700'
                            }`}
                          >
                             {downloading === idx ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" /> Downloading...
                                </>
                             ) : downloaded === idx ? (
                                <>
                                    <Check size={16} /> Downloaded
                                </>
                             ) : (
                                <>
                                    Download PDF <Download size={16} />
                                </>
                             )}
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default Resources;