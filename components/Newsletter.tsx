import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import FadeIn from './FadeIn';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.target as HTMLFormElement;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail('');
      })
      .catch((error) => alert(error));
  };

  return (
    <section className="bg-rose-600 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <Mail className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest job alerts, migration policy updates, and career tips for international professionals delivered directly to your inbox.
            </p>
            
            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-rose-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-rose-100">You've successfully subscribed to our newsletter.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-white text-sm font-medium hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                name="newsletter"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-rose-500/50 shadow-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Subscribe <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
            <p className="text-rose-200 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Newsletter;