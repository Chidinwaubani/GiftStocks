import React from 'react';

const reviews = [
  {
    text: "Instead of buying my nephew another plastic toy he'll break in a week, I gifted him Disney stock. He loves checking 'his company' on the app!",
    author: "Sarah J.",
    role: "Aunt of 3",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    text: "The setup was incredibly fast. I sent stock to my wife for our anniversary, and she thought it was the most thoughtful gift ever.",
    author: "Michael T.",
    role: "Active Investor",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    text: "GiftStocks makes financial literacy accessible. I'm using it to teach my teens about compound interest with real money.",
    author: "Elena R.",
    role: "Parent",
    image: "https://picsum.photos/id/129/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-16">Loved by families everywhere</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-500"
                />
                <div>
                  <p className="font-bold text-white">{review.author}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};