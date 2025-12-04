import React from 'react';
import { Gift, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-500 text-white p-1.5 rounded-lg">
                 <Gift size={20} strokeWidth={2.5} />
               </div>
               <span className="font-display font-bold text-lg text-slate-900">
                 GiftingStocks
               </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The easiest way to gift fractional shares and build generational wealth. Safe, secure, and simple.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Stock List</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">For Kids</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Disclosures</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} GiftingStocks, Inc. All rights reserved. Investing involves risk, including loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
};