import React from "react";
import {
  ArrowRight,
  Download,
  Smartphone,
  Globe,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

interface HeroProps {
  darkMode: boolean;
}

export const MainInfo: React.FC<HeroProps> = ({ darkMode }) => {
  const { personalInfo } = PORTFOLIO_DATA;

  const mainTechPills = [
    {
      name: "React Native",
      icon: Smartphone,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      name: "Angular 17+",
      icon: Globe,
      color: "text-red-400 bg-red-500/10 border-red-500/20",
    },
    {
      name: "Android Nativo (Kotlin)",
      icon: Cpu,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "TypeScript & Web",
      icon: Layers,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.location}
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Desarrollo Software <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Multiplataforma, Nativo & Web
              </span>
            </h1>

            {/* Tagline */}
            <p
              className={`text-lg sm:text-xl max-w-2xl leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {personalInfo.tagline}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              {mainTechPills.map((pill) => {
                const IconComponent = pill.icon;
                return (
                  <span
                    key={pill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${pill.color}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {pill.name}
                  </span>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95"
              >
                Ver Mis Proyectos
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contacto"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all duration-200 ${
                  darkMode
                    ? "border-slate-700 hover:border-slate-500 text-slate-200 bg-slate-800/40 hover:bg-slate-800"
                    : "border-slate-300 hover:border-slate-400 text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Cotizar un Proyecto
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            {/* Trust points */}
            <div
              className={`pt-4 border-t flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium ${
                darkMode
                  ? "border-slate-800 text-slate-400"
                  : "border-slate-200 text-slate-500"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Código Limpio & Escalable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Arquitectura MVVM / Clean</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Soporte Multiplataforma</span>
              </div>
            </div>
          </div>

          {/* Right Card / Stats Showcase */}
          <div className="lg:col-span-5">
            <div
              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/60 border border-slate-700/80 shadow-2xl backdrop-blur-xl"
                  : "bg-white border border-slate-200 shadow-xl"
              }`}
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/40">
                <div>
                  <h3
                    className={`font-bold text-xl ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-lg">
                  V
                </div>
              </div>

              {/* Description */}
              <p
                className={`py-5 text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                {personalInfo.about}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {personalInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border ${
                      darkMode
                        ? "bg-slate-900/50 border-slate-700/60"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="text-indigo-400 font-extrabold text-lg sm:text-xl">
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs font-medium mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer contact info */}
              <div className="mt-6 pt-4 border-t border-slate-700/40 flex items-center justify-between text-xs">
                <span
                  className={darkMode ? "text-slate-400" : "text-slate-500"}
                >
                  {personalInfo.email}
                </span>
                <a
                  href="#contacto"
                  className="text-indigo-400 font-semibold hover:underline"
                >
                  Enviar Mensaje →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
