import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const scrollAmount = 350;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  const handleExplore = (title: string) => {
      let industry = 'All';
      if (title.includes('Healthcare')) industry = 'Healthcare';
      else if (title.includes('Construction')) industry = 'Construction';
      else if (title.includes('Logistics')) industry = 'Logistics';
      else if (title.includes('Hospitality')) industry = 'Hospitality';
      else if (title.includes('Manufacturing')) industry = 'Construction'; // Maps to Construction & Trades

      navigate('/candidates', { state: { industry } });
  };

  return (
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-2xl">
                    <span className="text-rose-600 font-semibold tracking-wider text-sm uppercase">Industries</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Sectors We Serve</h2>
                    <p className="text-gray-600 mt-4">We specialize in high-demand industries across Europe, ensuring stable employment and growth opportunities.</p>
                </div>
                <div className="flex gap-2 mt-6 md:mt-0">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-colors"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
                {[
                    { title: "Healthcare & Caregiving", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "High Demand" },
                    { title: "Construction & Trades", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Skilled" },
                    { title: "Logistics & Transport", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Immediate" },
                    { title: "Hospitality Services", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Seasonal" },
                    { title: "Manufacturing", img: "https://images.unsplash.com/photo-1565514020176-db7159d33b3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Contract" },
                ].map((item, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => handleExplore(item.title)}
                        className="min-w-[300px] md:min-w-[350px] snap-center relative group rounded-2xl overflow-hidden h-[400px] cursor-pointer"
                    >
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">{item.tag}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <div className="flex items-center text-white/80 text-sm gap-2 group-hover:gap-4 transition-all">
                                <span>Explore Roles</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;