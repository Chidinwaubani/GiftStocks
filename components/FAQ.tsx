import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does gifting stocks work?",
    answer: "You choose a stock and an amount (e.g., $50 of Apple). You pay securely, and we send a digital notification to the recipient. They create a free account to claim the stock, which is then transferred to their name."
  },
  {
    question: "Is it safe for kids?",
    answer: "Absolutely. For minors, the account is a custodial account (UTMA/UGMA) managed by a parent or guardian until the child reaches adulthood."
  },
  {
    question: "Can I gift stocks I already own?",
    answer: "Currently, GiftingStocks facilitates the purchase of new fractional shares to ensure easy transfer and tax basis tracking. Direct transfer of existing assets is coming in V2."
  },
  {
    question: "Are there fees?",
    answer: "We charge a small transaction fee ($0.99) for gifts under $100. Gifts over $100 have a 1% fee. The recipient pays nothing to claim or hold the stock."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-slate-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand-500" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};