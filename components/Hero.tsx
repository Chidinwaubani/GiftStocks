import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Gift, Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-gift-50/50 to-white">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gift-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30" />
      
      {/* Floating "Confetti" icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 left-[10%] text-gift-200 hidden lg:block"
      >
        <Gift size={48} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-[10%] text-brand-200 hidden lg:block"
      >
        <Heart size={40} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gift-50 border border-gift-100 text-gift-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>The perfect gift, every time</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Wrap Up <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gift-500 to-brand-600">
                Their Future.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Give the gift of ownership. Send beautiful digital stock envelopes for birthdays, weddings, and graduations in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#waitlist"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-xl shadow-slate-900/20"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>SEC Regulated</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>SIPC Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-auto flex justify-center"
          >
            {/* Main Gift Box Image */}
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square">
               <div className="absolute inset-0 bg-gradient-to-tr from-gift-200 to-brand-200 rounded-[2rem] rotate-3 opacity-50 blur-lg transform scale-95"></div>
               <img 
                 src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Elegant gift box" 
                 className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white"
               />
               
               {/* Floating Envelope/Card 1 */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 max-w-[200px]"
               >
                 <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center text-brand-500">
                        <Gift size={16} />
                    </div>
                    <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">DELIVERED</span>
                 </div>
                 <p className="text-xs text-slate-500 mb-1">You sent</p>
                 <p className="font-bold text-slate-900 text-lg">$50.00 <span className="text-sm font-normal text-slate-500">of AAPL</span></p>
               </motion.div>

               {/* Floating Message Card 2 */}
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-8 -left-4 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[220px] rotate-[-3deg]"
               >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gift-100 flex items-center justify-center text-gift-600 flex-shrink-0">
                        <Heart size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Message</p>
                        <p className="text-sm text-slate-800 italic font-medium leading-snug">"Happy Birthday! Start building your empire."</p>
                    </div>
                  </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};