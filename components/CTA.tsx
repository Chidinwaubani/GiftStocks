import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-600 shadow-2xl shadow-brand-500/30">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400 opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to make your next <br className="hidden md:block" /> gift an investment?
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of families building wealth for the next generation, one birthday at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-white text-brand-600 font-bold py-4 px-8 rounded-full hover:bg-brand-50 transition-colors flex items-center justify-center shadow-lg">
                 Get Started Free
                 <ArrowRight className="ml-2 w-5 h-5" />
               </button>
               <button className="bg-transparent border-2 border-brand-400 text-white font-bold py-4 px-8 rounded-full hover:bg-brand-500/20 transition-colors">
                 Download App
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};