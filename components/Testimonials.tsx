import React from 'react';

const partners = [
  { name: 'Fidelity', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fidelity_Investments_Logo.svg/512px-Fidelity_Investments_Logo.svg.png' },
  { name: 'Charles Schwab', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/512px-Charles_Schwab_Corporation_logo.svg.png' },
  { name: 'E*TRADE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/E-Trade_logo.svg/512px-E-Trade_logo.svg.png' },
  { name: 'Vanguard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Vanguard_Group_Logo.svg/512px-The_Vanguard_Group_Logo.svg.png' },
  { name: 'Robinhood', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Robinhood_Logo.svg/512px-Robinhood_Logo.svg.png' },
  { name: 'Chase', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chase_Bank_logo.svg/512px-Chase_Bank_logo.svg.png' },
  { name: 'Bank of America', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bank_of_America_logo.svg/512px-Bank_of_America_logo.svg.png' },
  { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wells_Fargo_Bank.svg/512px-Wells_Fargo_Bank.svg.png' },
];

export const TrustedPartners: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">
              Connects with your favorite brokerages
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Securely link your existing accounts to fund gifts instantly. 
              We support 12,000+ financial institutions, ensuring you can gift stock from anywhere.
            </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <div key={i} className="group h-24 rounded-2xl flex items-center justify-center p-6 bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-8 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  // Fallback if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = partner.name;
                  e.currentTarget.parentElement!.classList.add('text-white', 'font-bold', 'text-lg', 'font-display');
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-slate-600 text-sm">
                Securely connected via Plaid. All trademarks are property of their respective owners.
             </p>
        </div>
      </div>
    </section>
  );
};