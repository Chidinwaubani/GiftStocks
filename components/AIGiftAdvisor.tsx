import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Sparkles, Loader2, Send, Check } from 'lucide-react';

interface Recommendation {
  stockSymbol: string;
  companyName: string;
  reason: string;
  giftMessage: string;
}

export const AIGiftAdvisor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Recommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    if (!process.env.API_KEY) {
      setError("API Key is missing in environment variables.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Suggest a stock gift and a short message for this occasion/recipient: "${prompt}".`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    stockSymbol: { type: Type.STRING },
                    companyName: { type: Type.STRING },
                    reason: { type: Type.STRING },
                    giftMessage: { type: Type.STRING }
                },
                required: ["stockSymbol", "companyName", "reason", "giftMessage"]
            }
        }
      });
      
      if (response.text) {
        setResult(JSON.parse(response.text));
      } else {
        setError("No suggestion received. Try again.");
      }

    } catch (err) {
      console.error(err);
      setError("Failed to generate suggestion. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
      {/* Input Section */}
      <div className="p-8 md:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-4 text-brand-400">
            <Sparkles size={20} />
            <span className="font-bold tracking-wide text-sm uppercase">AI Advisor</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">Find the perfect stock gift instantly.</h3>
        <p className="text-slate-300 mb-6">
            Tell us who it's for and the occasion (e.g., "My 10-year-old niece who loves video games for her birthday").
        </p>
        
        <div className="relative">
            <textarea
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none h-32"
                placeholder="Describe the recipient..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={loading}
            />
            <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="absolute bottom-3 right-3 p-2 bg-brand-500 hover:bg-brand-400 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
        </div>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

      {/* Result Section */}
      <div className="p-8 md:w-1/2 bg-white flex items-center justify-center min-h-[300px]">
        {!result && !loading && (
            <div className="text-center text-slate-400">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={32} className="text-slate-300" />
                </div>
                <p>Your recommendation will appear here.</p>
            </div>
        )}

        {loading && (
            <div className="text-center">
                 <Loader2 size={48} className="animate-spin text-brand-500 mx-auto mb-4" />
                 <p className="text-slate-600 font-medium">Analyzing market data & interests...</p>
            </div>
        )}

        {result && (
            <div className="w-full space-y-6 animate-fade-in">
                <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended Stock</span>
                    <div className="flex items-center justify-between mt-1">
                        <div>
                            <h4 className="text-3xl font-bold text-slate-900">{result.stockSymbol}</h4>
                            <p className="text-slate-600">{result.companyName}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Check size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Why this stock?</span>
                    <p className="text-sm text-slate-700 leading-relaxed">{result.reason}</p>
                </div>

                <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Suggested Message Card</span>
                    <div className="bg-white border-2 border-brand-100 border-dashed p-5 rounded-xl relative">
                        <p className="font-handwriting text-slate-800 text-lg italic">"{result.giftMessage}"</p>
                    </div>
                </div>
                
                <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors">
                    Gift {result.stockSymbol} Now
                </button>
            </div>
        )}
      </div>
    </div>
  );
};