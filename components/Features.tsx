import React from 'react';
import { PieChart, Shield, Mail, Zap } from 'lucide-react';

const features = [
  {
    title: 'Fractional Shares',
    description: 'Budget is never an issue. Gift $5 of Amazon or $500 of Berkshire Hathaway. Every dollar works.',
    icon: <PieChart className="text-brand-500" />,
  },
  {
    title: 'Secure & Regulated',
    description: 'We use bank-level encryption and are fully SIPC insured. Your gifts are safe with us.',
    icon: <Shield className="text-emerald-500" />,
  },
  {
    title: 'Themed Delivery',
    description: 'Send your gift via email or text with a beautiful, animated digital card customized for the occasion.',
    icon: <Mail className="text-gift-500" />,
  },
  {
    title: 'Instant Claiming',
    description: 'Recipients can claim their stock in under 2 minutes. Perfect for getting kids started with investing.',
    icon: <Zap className="text-amber-500" />,
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-base text-gift-600 font-semibold tracking-wide uppercase">Why Choose GiftingStocks</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            More than a gift card. A piece of the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-gift-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};