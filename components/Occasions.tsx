import React from 'react';
import { Cake, GraduationCap, Heart, Baby, Calendar, Star } from 'lucide-react';

const occasions = [
  { name: 'Birthday', icon: <Cake />, color: 'from-pink-500 to-rose-500' },
  { name: 'Graduation', icon: <GraduationCap />, color: 'from-blue-500 to-indigo-500' },
  { name: 'Anniversary', icon: <Heart />, color: 'from-red-500 to-pink-600' },
  { name: 'New Baby', icon: <Baby />, color: 'from-teal-400 to-emerald-500' },
  { name: 'Holidays', icon: <Star />, color: 'from-amber-400 to-orange-500' },
  { name: 'Just Because', icon: <Calendar />, color: 'from-violet-500 to-purple-600' },
];

export const Occasions: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-2xl font-display font-bold text-slate-900">
            Gifting for Every Moment
          </h2>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700 mt-2 md:mt-0">
            View all occasions &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map((occ) => (
            <div
              key={occ.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${occ.color}`} />
              <div className="flex flex-col items-center justify-center gap-3">
                <div className={`p-3 rounded-full bg-slate-50 text-slate-700 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors`}>
                  {React.cloneElement(occ.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="font-medium text-slate-800 text-sm">{occ.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};