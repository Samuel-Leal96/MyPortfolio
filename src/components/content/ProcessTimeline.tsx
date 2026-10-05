import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

interface ProcessTimelineProps {
  darkMode: boolean;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  darkMode,
}) => {
  const { workProcess } = PORTFOLIO_DATA;

  return (
    <section id="metodologia" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Metodología de Trabajo
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Proceso de Desarrollo Transparente & Ágil
          </h2>
          <p
            className={`text-base sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Garantizando entregas a tiempo, comunicación fluida y altos
            estándares de calidad desde el día uno.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcess.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/40 border border-slate-700/80 hover:border-indigo-500/40"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Step Big Number */}
              <div className="text-4xl font-extrabold text-indigo-500/30 mb-4 font-mono">
                {item.step}
              </div>

              <h3
                className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {item.title}
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
