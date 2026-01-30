import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight, Lock, User, LayoutDashboard } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Login State
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setTimeout(() => {
        setIsLoggedIn(true);
        setLoginLoading(false);
        setShowLoginModal(false);
        navigate('/dashboard');
    }, 1500);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

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
                    EuroPath
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

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
                {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        <Link to="/dashboard" className="text-sm font-medium text-gray-900 hover:text-rose-600 flex items-center gap-2">
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                        </Link>
                        <button 
                            onClick={handleSignOut}
                            className="text-sm font-medium text-gray-500 hover:text-rose-600"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={() => setShowLoginModal(true)}
                        className="text-sm font-medium text-gray-900 hover:text-rose-600"
                    >
                        Log in
                    </button>
                )}
                {!isLoggedIn && (
                    <Link to="/candidates" className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-rose-600/20 flex items-center gap-2">
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

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
            <div className="flex flex-col gap-3 mt-2">
                <button 
                    onClick={() => {
                        setMobileMenuOpen(false);
                        if(isLoggedIn) handleSignOut();
                        else setShowLoginModal(true);
                    }}
                    className="w-full text-center py-2 text-gray-900 font-medium border rounded-full"
                >
                    {isLoggedIn ? 'Sign Out' : 'Log in'}
                </button>
                {isLoggedIn && (
                     <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="w-full bg-gray-100 text-gray-900 py-3 rounded-full font-medium text-center">
                        Go to Dashboard
                     </Link>
                )}
                {!isLoggedIn && (
                    <Link to="/candidates" onClick={() => setMobileMenuOpen(false)} className="w-full bg-rose-600 text-white py-3 rounded-full font-medium text-center">
                    Apply Now
                    </Link>
                )}
            </div>
            </div>
        )}
        </header>

        {/* Login Modal */}
        {showLoginModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl w-full max-w-sm p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
                    <button 
                        onClick={() => setShowLoginModal(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                        <X size={20} />
                    </button>
                    
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-600">
                            <Lock size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="text-sm text-gray-500 mt-1">Enter your credentials to access your portal</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</label>
                            <input type="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-gray-900" placeholder="user@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Password</label>
                            <input type="password" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-gray-900" placeholder="••••••••" />
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded text-rose-600 focus:ring-rose-500" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-rose-600 font-medium hover:underline">Forgot?</a>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loginLoading}
                            className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors flex justify-center items-center gap-2"
                        >
                            {loginLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                    
                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account? <Link to="/candidates" onClick={() => setShowLoginModal(false)} className="text-rose-600 font-bold hover:underline">Register</Link>
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default Header;