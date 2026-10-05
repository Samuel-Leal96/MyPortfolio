import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { IconRenderer } from './IconRenderer';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="habilidades" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Stack Tecnológico
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Tecnologías y Herramientas Principalmente Utilizadas
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Dominio de frameworks modernos, lenguajes de programación y herramientas de desarrollo para crear aplicaciones ágiles y robustas.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800/40 border border-slate-700/80 shadow-lg' 
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {cat.category}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {cat.description}
                </p>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg ${
                          skill.highlight 
                            ? 'bg-indigo-600/20 text-indigo-400' 
                            : darkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <IconRenderer name={skill.icon} className="w-4 h-4" />
                        </div>
                        <span className={`font-semibold ${
                          skill.highlight 
                            ? darkMode ? 'text-indigo-300' : 'text-indigo-700' 
                            : darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                            Principal
                          </span>
                        )}
                      </div>
                      <span className={`text-xs font-mono font-bold ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-slate-700/60' : 'bg-slate-100'
                    }`}>
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-indigo-500 to-sky-400'
                            : darkMode ? 'bg-slate-400' : 'bg-slate-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
