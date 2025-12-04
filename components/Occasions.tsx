import React from 'react';
import { Cake, GraduationCap, Heart, Baby, Calendar, Star } from 'lucide-react';

const occasions = [
  { name: 'Birthday', icon: <Cake />, color: 'bg-pink-50 text-pink-500 border-pink-100' },
  { name: 'Graduation', icon: <GraduationCap />, color: 'bg-blue-50 text-blue-500 border-blue-100' },
  { name: 'Anniversary', icon: <Heart />, color: 'bg-red-50 text-red-500 border-red-100' },
  { name: 'New Baby', icon: <Baby />, color: 'bg-emerald-50 text-emerald-500 border-emerald-100' },
  { name: 'Holidays', icon: <Star />, color: 'bg-amber-50 text-amber-500 border-amber-100' },
  { name: 'Just Because', icon: <Calendar />, color: 'bg-purple-50 text-purple-500 border-purple-100' },
];

export const Occasions: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900">
            Perfect for Every Celebration
          </h2>
          <p className="mt-3 text-slate-600">Select an occasion to see curated stock collections and card designs.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {occasions.map((occ) => (
            <div
              key={occ.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-gift-200 hover:shadow-xl hover:shadow-gift-100/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${occ.color}`}>
                {React.cloneElement(occ.icon as React.ReactElement<any>, { size: 24, strokeWidth: 2.5 })}
              </div>
              <span className="font-semibold text-slate-800 text-sm group-hover:text-gift-600 transition-colors">{occ.name}</span>
              
              {/* Decorative "Envelope flap" hint */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-100 rounded-b-lg group-hover:bg-gift-200 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};