import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: "95%", label: "Placement Rate", subLabel: "Verified Employers" },
    { value: "87%", label: "Retention Rate", subLabel: "Long-term success" },
    { value: "3k+", label: "Candidates Placed", subLabel: "Across 12 countries" },
    { value: "05", label: "Support Offices", subLabel: "Global Presence" }
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full border-2 border-gray-700 group-hover:border-rose-600 transition-colors duration-500 flex flex-col items-center justify-center mb-6 bg-gray-900/50">
                <span className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 max-w-[80%] leading-tight">
                  {stat.subLabel}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-2">{stat.label}</h3>
              <p className="text-sm text-gray-500">EuroPath Verified Data</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;