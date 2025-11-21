import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const STOCKS = [
  { symbol: 'AAPL', price: '178.32', change: '+1.2%', up: true },
  { symbol: 'TSLA', price: '245.67', change: '+2.4%', up: true },
  { symbol: 'MSFT', price: '321.50', change: '+0.8%', up: true },
  { symbol: 'AMZN', price: '135.20', change: '-0.5%', up: false },
  { symbol: 'GOOGL', price: '138.90', change: '+1.1%', up: true },
  { symbol: 'NVDA', price: '460.10', change: '+3.2%', up: true },
  { symbol: 'DIS', price: '85.40', change: '-0.2%', up: false },
  { symbol: 'VTI', price: '224.10', change: '+0.4%', up: true },
];

export const StockTicker: React.FC = () => {
  // Duplicate list for seamless infinite scroll
  const displayStocks = [...STOCKS, ...STOCKS, ...STOCKS];

  return (
    <div className="w-full bg-slate-900 text-white py-3 overflow-hidden border-y border-slate-800">
      <div className="flex animate-ticker space-x-12 w-max">
        {displayStocks.map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-3">
            <span className="font-bold tracking-wider text-sm">{stock.symbol}</span>
            <span className="text-slate-400 text-sm">${stock.price}</span>
            <span
              className={`flex items-center text-xs font-medium px-1.5 py-0.5 rounded ${
                stock.up ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {stock.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};