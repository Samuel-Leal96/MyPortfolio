import React from 'react';
import { Quote, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-100/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Recomendaciones & Opiniones
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Lo que dicen mis clientes y colaboradores
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Compromiso real con la excelencia técnica y la satisfacción en cada proyecto entregado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800/60 border border-slate-700/80' 
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-indigo-500/30 mb-2" />

                <p className={`text-xs sm:text-sm leading-relaxed italic ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/40">
                <h4 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {t.author}
                </h4>
                <p className="text-xs text-indigo-400 font-medium">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
