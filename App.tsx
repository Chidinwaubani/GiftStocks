import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StockTicker } from './components/StockTicker';
import { HowItWorks } from './components/HowItWorks';
import { Occasions } from './components/Occasions';
import { AIGiftAdvisor } from './components/AIGiftAdvisor';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CTA } from './components/CTA';

const App: React.FC = () => {
  // Smooth scroll handling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <main className="pt-20">
        <Hero />
        <StockTicker />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="occasions">
          <Occasions />
        </div>
        <div className="bg-brand-50 py-20 border-y border-brand-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-display font-bold text-slate-900 sm:text-4xl">
                        Not sure what to gift?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Use our Gemini AI-powered advisor to find the perfect stock and message for any occasion.
                    </p>
                </div>
                <AIGiftAdvisor />
            </div>
        </div>
        <div id="why-giftstocks">
          <Features />
        </div>
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;