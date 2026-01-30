import React from 'react';
import { CheckCircle, Clock, FileText, Calendar, Bell, Download, Upload, AlertCircle, ChevronRight, MapPin } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Dashboard: React.FC = () => {
  const applicationStatus = 2; // 0: Applied, 1: Screening, 2: Interview, 3: Visa, 4: Deployment

  const steps = [
    { label: "Applied", date: "Oct 12" },
    { label: "Screening", date: "Oct 15" },
    { label: "Interview", date: "In Progress" },
    { label: "Visa Process", date: "Pending" },
    { label: "Deployment", date: "Pending" }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <FadeIn>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
                <p className="text-gray-600 mt-2">Candidate ID: <span className="font-mono font-medium text-gray-900">EP-88291</span></p>
            </FadeIn>
            <FadeIn delay={100}>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mt-4 md:mt-0">
                    <div className="relative">
                        <Bell className="text-gray-500" size={20} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">2 New Notifications</span>
                </div>
            </FadeIn>
        </div>

        {/* Application Tracker */}
        <FadeIn delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900">Application Status: <span className="text-rose-600">ICU Nurse (Munich)</span></h2>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Active</span>
                </div>
                
                <div className="relative">
                    {/* Progress Bar Background */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                    
                    {/* Active Progress */}
                    <div 
                        className="absolute top-1/2 left-0 h-1 bg-rose-600 -translate-y-1/2 rounded-full transition-all duration-1000"
                        style={{ width: `${(applicationStatus / (steps.length - 1)) * 100}%` }}
                    ></div>

                    <div className="relative flex justify-between">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div 
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-300 ${
                                        idx <= applicationStatus 
                                        ? 'bg-rose-600 border-rose-100 text-white' 
                                        : 'bg-white border-gray-100 text-gray-300'
                                    }`}
                                >
                                    {idx < applicationStatus ? <CheckCircle size={18} /> : idx === applicationStatus ? <Clock size={18} className="animate-pulse" /> : <div className="w-2 h-2 bg-gray-300 rounded-full" />}
                                </div>
                                <div className="mt-4 text-center">
                                    <p className={`text-sm font-bold ${idx <= applicationStatus ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</p>
                                    <p className="text-xs text-gray-500">{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Upcoming Interviews */}
                <FadeIn delay={300}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Calendar className="text-rose-600" size={20} /> Upcoming Interviews
                            </h3>
                        </div>
                        <div className="bg-rose-50 rounded-xl p-5 border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-lg text-center min-w-[70px] shadow-sm">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">OCT</span>
                                    <span className="block text-2xl font-bold text-rose-600">28</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Clinical Interview</h4>
                                    <p className="text-sm text-gray-600 mb-1">with Dr. Schmidt (University Hospital Munich)</p>
                                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-500 border border-gray-200">10:00 AM CET</span>
                                </div>
                            </div>
                            <button className="w-full md:w-auto bg-rose-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-rose-700 transition-colors">
                                Join Meeting
                            </button>
                        </div>
                    </div>
                </FadeIn>

                {/* Recommended Jobs */}
                <FadeIn delay={400}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                         <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <MapPin className="text-rose-600" size={20} /> Similar Opportunities
                        </h3>
                        <div className="space-y-4">
                            {[
                                { title: "Pediatric Nurse", loc: "Hamburg, DE", salary: "€3,800/mo" },
                                { title: "Senior Care Specialist", loc: "Berlin, DE", salary: "€3,500/mo" }
                            ].map((job, i) => (
                                <div key={i} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-50">
                                    <div>
                                        <h4 className="font-bold text-gray-900">{job.title}</h4>
                                        <p className="text-sm text-gray-500">{job.loc}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">{job.salary}</p>
                                        <button className="text-xs text-rose-600 font-bold hover:underline">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>

            {/* Right Column */}
            <div className="space-y-8">
                
                {/* Document Vault */}
                <FadeIn delay={300}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FileText className="text-rose-600" size={20} /> My Documents
                        </h3>
                        <div className="space-y-3 mb-6">
                            {[
                                { name: "CV_Alex_Doe.pdf", status: "Verified", color: "text-green-600", bg: "bg-green-50" },
                                { name: "Nursing_License.pdf", status: "Verified", color: "text-green-600", bg: "bg-green-50" },
                                { name: "B2_German_Cert.pdf", status: "Pending Review", color: "text-orange-600", bg: "bg-orange-50" },
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="bg-gray-100 p-2 rounded">
                                            <FileText size={16} className="text-gray-500" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 truncate">{doc.name}</span>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${doc.bg} ${doc.color}`}>
                                        {doc.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full border border-dashed border-gray-300 text-gray-500 py-3 rounded-xl hover:bg-gray-50 hover:border-rose-300 hover:text-rose-600 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                            <Upload size={16} /> Upload New Document
                        </button>
                    </div>
                </FadeIn>

                {/* Need Help? */}
                <FadeIn delay={500}>
                    <div className="bg-gray-900 rounded-2xl p-6 text-white text-center">
                        <AlertCircle className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Need Assistance?</h3>
                        <p className="text-sm text-gray-400 mb-4">Your dedicated case manager is available.</p>
                        <button className="bg-rose-600 hover:bg-rose-700 text-white w-full py-2 rounded-lg font-bold text-sm transition-colors">
                            Contact Support
                        </button>
                    </div>
                </FadeIn>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;