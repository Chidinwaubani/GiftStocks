import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-600 shadow-2xl shadow-brand-500/30">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400 opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Get early access to <br className="hidden md:block" /> the future of gifting.
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              We're launching soon! Join the waitlist today to be the first to know when we go live and receive $5 towards your first stock gift.
            </p>
            
            {status === 'success' ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-auto text-white animate-fade-in">
                <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-900 shadow-lg">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-brand-100 text-sm">We'll notify you as soon as GiftStocks is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto relative">
                 <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-400/50 placeholder:text-slate-400 shadow-xl"
                      required
                    />
                 </div>
                 <button 
                   type="submit"
                   disabled={status === 'loading'}
                   className="bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                 >
                   {status === 'loading' ? (
                     <Loader2 className="animate-spin w-5 h-5" />
                   ) : (
                     <>
                       Join Waitlist
                       <ArrowRight className="ml-2 w-5 h-5" />
                     </>
                   )}
                 </button>
              </form>
            )}
             
             {status !== 'success' && (
               <p className="mt-6 text-sm text-brand-200/80">
                 Limited spots available for early access beta.
               </p>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};