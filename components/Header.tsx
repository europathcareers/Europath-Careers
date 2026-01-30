import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'For Candidates', path: '/candidates' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
        <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <Globe className="h-8 w-8 text-rose-600" />
                <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">
                    EuroJobs
                </span>
                <span className="text-xs font-medium text-rose-600 tracking-widest uppercase">
                    Careers
                </span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                    isActive(link.path) 
                        ? 'text-rose-600 font-semibold' 
                        : 'text-gray-600 hover:text-rose-600'
                    }`}
                >
                    {link.name}
                </Link>
                ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 z-40">
            {navLinks.map((link) => (
                <Link 
                key={link.name} 
                to={link.path}
                className="text-base font-medium text-gray-800 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                >
                {link.name}
                </Link>
            ))}
            </div>
        )}
        </header>
    </>
  );
};

export default Header;