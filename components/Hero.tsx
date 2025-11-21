import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-24 lg:pb-32">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>The smartest way to gift</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Gift Stocks for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
                Every Occasion.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Transform birthdays, anniversaries, and milestones into lasting investments. Send shares to loved ones quickly, easily, and securely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-xl shadow-slate-900/20">
                Start Gifting Stocks
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300">
                View Sample Gift
              </button>
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
              <div className="flex items-center gap-1">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Bank-level Security</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 aspect-square sm:aspect-[4/3] lg:aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/800/800" 
                 alt="Happy family looking at tablet" 
                 className="object-cover w-full h-full"
               />
               
               {/* Floating Card 1 */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl max-w-[180px] border border-slate-100"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                     DIS
                   </div>
                   <div>
                     <p className="text-xs text-slate-500">Gifted to</p>
                     <p className="font-bold text-slate-900">Emma</p>
                   </div>
                 </div>
                 <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-3/4"></div>
                 </div>
                 <p className="text-xs text-green-600 font-semibold mt-2">+$45.20 (12%)</p>
               </motion.div>

               {/* Floating Card 2 */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100"
               >
                  <p className="text-sm font-medium text-slate-800 mb-1">"Best Birthday Ever!"</p>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+3</div>
                  </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};