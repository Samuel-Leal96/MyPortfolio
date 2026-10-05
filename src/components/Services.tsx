import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { IconRenderer } from './IconRenderer';

interface ServicesProps {
  darkMode: boolean;
}

export const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="servicios" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Especialidades & Servicios
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Soluciones Tecnológicas a Medida
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Ofrezco desarrollo de software de punta a punta, adaptado a los requerimientos de tu negocio en ecosistemas móviles y web.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-800/60 border border-slate-700/80 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10' 
                  : 'bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              <div className="space-y-6">
                
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl transition-all ${
                    darkMode 
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:text-white' 
                      : 'bg-indigo-50 text-indigo-600 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white'
                  }`}>
                    <IconRenderer name={service.iconName} className="w-7 h-7" />
                  </div>
                  
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                    darkMode 
                      ? 'bg-slate-900/60 text-slate-300 border-slate-700' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-2">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Lo que incluye:
                  </h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-8 mt-6 border-t border-slate-700/40">
                <a
                  href={`#contacto?servicio=${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Solicitar cotización para este servicio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
