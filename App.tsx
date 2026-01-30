import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import ServicesPage from './pages/ServicesPage';
import Resources from './pages/Resources';
import About from './pages/About';

function Layout() {
  const location = useLocation();
  
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* The key prop forces the div to remount on route change, triggering the animation */}
        <div key={location.pathname} className="page-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;