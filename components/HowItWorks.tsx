import React from 'react';
import { UserPlus, Search, PenTool, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    icon: <UserPlus size={28} />,
    title: 'Select Recipient & Occasion',
    description: 'Choose who you are gifting to and the special event, from birthdays to graduations.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    icon: <Search size={28} />,
    title: 'Choose a Stock or ETF',
    description: 'Pick from thousands of stocks. Buy a slice of Apple, Disney, or an S&P 500 ETF.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 3,
    icon: <PenTool size={28} />,
    title: 'Personalize Your Gift',
    description: 'Select a digital card design and write a heartfelt message to accompany the investment.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 4,
    icon: <TrendingUp size={28} />,
    title: 'They Claim & Grow',
    description: 'The recipient claims the stock easily and watches their wealth grow over time.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 sm:text-4xl">
            Giving wealth is easier than buying a toy.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            No complex paperwork. Just pick, personalize, and send.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm px-4">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};