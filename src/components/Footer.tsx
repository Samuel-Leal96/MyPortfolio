import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { personalInfo } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-white text-lg tracking-tight block">
                {personalInfo.name} Portfolio
              </span>
              <span className="text-xs text-indigo-400 font-medium">
                React Native • Angular • Android Nativo
              </span>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#habilidades" className="hover:text-white transition-colors">Tecnologías</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            title="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-400 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Diseñado & Desarrollado con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> en React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
