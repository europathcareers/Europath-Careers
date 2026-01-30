import React from 'react';
import { Globe, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Brand CTA Section */}
        <div className="bg-rose-600 rounded-3xl p-8 md:p-16 text-center text-white mb-20 shadow-2xl shadow-rose-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-24 -mt-24 transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-16 -mb-16 transition-transform duration-1000 group-hover:scale-110"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to transcend borders?</h2>
                <p className="text-rose-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who have successfully built their careers in Europe with our ethical recruitment framework.
                </p>
                <div className="flex justify-center">
                  <Link to="/candidates" className="inline-block bg-white text-rose-600 hover:bg-gray-50 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg">
                      Apply as Candidate
                  </Link>
                </div>
            </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <Globe className="h-8 w-8 text-rose-600" />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">EuroPath</span>
                      <span className="text-[10px] font-bold text-rose-600 tracking-[0.2em] uppercase">Careers</span>
                    </div>
                </div>
                <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
                    An international recruitment leader dedicated to connecting global talent with verified European employers through safe, legal, and sustainable pathways.
                </p>
                <div className="flex gap-4">
                    {[
                      { icon: <Facebook size={18} />, label: 'Facebook' },
                      { icon: <Twitter size={18} />, label: 'Twitter' },
                      { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                      { icon: <Instagram size={18} />, label: 'Instagram' }
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href="#" 
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-rose-600 hover:border-rose-200 hover:shadow-md transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                </div>
            </div>
            
            {/* Services Column */}
            <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
                <ul className="space-y-4">
                    <li><Link to="/services" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Job Placement</Link></li>
                    <li><Link to="/services" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Employer Solutions</Link></li>
                    <li><Link to="/services" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Visa Guidance</Link></li>
                    <li><Link to="/services" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Relocation Support</Link></li>
                    <li><Link to="/resources" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Skills Testing</Link></li>
                </ul>
            </div>

            {/* Company Column */}
            <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Company</h4>
                <ul className="space-y-4">
                    <li><Link to="/about" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">About Our Mission</Link></li>
                    <li><Link to="/about" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Success Stories</Link></li>
                    <li><Link to="/candidates" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Job Board</Link></li>
                    <li><Link to="/resources" className="text-gray-500 hover:text-rose-600 transition-colors text-sm">Migration News</Link></li>
                </ul>
            </div>

            {/* Support Column */}
            <div className="lg:col-span-2">
                <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Contact & Offices</h4>
                <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Mail size={18} className="text-rose-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-gray-900">Email Support</p>
                        <a href="mailto:europathcareers@gmail.com" className="text-sm text-gray-500 hover:text-rose-600 transition-colors">europathcareers@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Phone size={18} className="text-rose-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-gray-900">Global Hotline</p>
                        <p className="text-sm text-gray-500">+4915210755401</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <MapPin size={18} className="text-rose-600 flex-shrink-0" />
                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <p className="text-xs font-bold text-gray-900">London (HQ)</p>
                          <p className="text-xs text-gray-500">123 Canary Wharf, E14 5AB</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">Munich</p>
                          <p className="text-xs text-gray-500">Maximilianstraße 45, 80538</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">Manila</p>
                          <p className="text-xs text-gray-500">BGC Corporate Center, Taguig</p>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Accreditations & Trust row */}
        <div className="border-t border-gray-200 py-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
              <Award className="text-rose-600" size={20} />
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
              <ShieldCheck className="text-blue-600" size={20} />
              REC Registered Member
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
              <CheckCircle2 className="text-green-600" size={20} />
              GLAA Licensed Recruiter
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
              <Globe className="text-orange-600" size={20} />
              ICO Data Protection Compliant
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-sm text-gray-400">&copy; {currentYear} EuroPath Careers. All rights reserved.</p>
              <nav className="flex gap-6">
                <Link to="/resources" className="text-xs text-gray-400 hover:text-rose-600 transition-colors">Privacy Policy</Link>
                <Link to="/resources" className="text-xs text-gray-400 hover:text-rose-600 transition-colors">Terms of Service</Link>
                <Link to="/resources" className="text-xs text-gray-400 hover:text-rose-600 transition-colors">Cookie Policy</Link>
                <Link to="/resources" className="text-xs text-gray-400 hover:text-rose-600 transition-colors">Ethics Code</Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Globe size={14} className="text-gray-400" />
                <span className="text-xs font-bold text-gray-700">English (Global)</span>
              </div>
              <p className="text-xs text-gray-300 italic hidden sm:block">Built with integrity for people.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;