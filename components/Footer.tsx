import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe, Shield, Briefcase, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-rose-600 p-2 rounded-lg group-hover:bg-rose-500 transition-colors">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">EuroJobs<span className="text-rose-500">.</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Leading the way in ethical international recruitment. We bridge the gap between global talent and European opportunity with transparency and integrity.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Candidates', 'Employers', 'Services', 'Resources', 'About'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-rose-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-rose-500 group-hover:w-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Specializations</h3>
            <ul className="space-y-4">
              {[
                { label: 'Healthcare Recruitment', icon: Heart },
                { label: 'Skilled Trades', icon: Briefcase },
                { label: 'IT & Engineering', icon: Globe },
                { label: 'Logistics & Supply', icon: Users }
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <service.icon size={16} className="text-rose-500" />
                  <span>{service.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Global Hotline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold">+21 68 676 2831</p>
                  <p className="text-white font-bold">+1 774 373 9285</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-tighter">Available 24/7 • WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                <p className="font-medium">eurojobscareers@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm">Central Hub: London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} EuroJobs Careers. All rights reserved.
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </p>
          <div className="flex items-center gap-4 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50">
             <Shield size={14} className="text-rose-500" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Verified Recruitment Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;