import React, { useState, useEffect } from 'react';
import { Menu, X, Gift, TrendingUp } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-brand-500 text-white p-2 rounded-xl shadow-lg shadow-brand-500/20">
              <Gift size={24} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              GiftStocks
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm">
              How it Works
            </a>
            <a href="#occasions" className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm">
              Occasions
            </a>
            <a href="#why-giftstocks" className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm">
              Why Us
            </a>
            <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#how-it-works"
              className="block px-3 py-4 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#occasions"
              className="block px-3 py-4 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Occasions
            </a>
            <a
              href="#why-giftstocks"
              className="block px-3 py-4 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why GiftStocks
            </a>
            <div className="pt-4">
              <button className="w-full py-3.5 rounded-xl bg-brand-600 text-white font-semibold shadow-lg">
                Start Gifting
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};