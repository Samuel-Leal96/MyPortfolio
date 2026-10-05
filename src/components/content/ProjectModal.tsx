import React from "react";
import { X, ExternalLink, Download, CheckCircle2, Cpu } from "lucide-react";
import { Project } from "../../data/portfolioData";
import { GithubIcon } from "../helper/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  darkMode,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className={`relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 transition-all my-8 ${
          darkMode
            ? "bg-slate-900 border border-slate-700/80 text-white"
            : "bg-white border border-slate-200 text-slate-900"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2.5 rounded-full transition-colors ${
            darkMode
              ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              : "bg-white/80 text-slate-700 hover:bg-slate-100"
          }`}
          title="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-indigo-600 text-white shadow-md mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Detailed description */}
          <div>
            <h4
              className={`text-sm font-bold uppercase tracking-wider mb-2 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
            >
              Descripción General & Propósito
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4
                className={`text-sm font-bold uppercase tracking-wider mb-3 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
              >
                Funcionalidades Clave
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-slate-300" : "text-slate-700"}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture / Technical Specs */}
          {project.architecture && (
            <div
              className={`p-4 rounded-2xl border ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/60"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <h5
                  className={`text-xs font-bold uppercase tracking-wider ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                >
                  Arquitectura Técnica
                </h5>
              </div>
              <p
                className={`text-xs sm:text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                {project.architecture}
              </p>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${
                    darkMode
                      ? "bg-slate-800 text-indigo-300 border-slate-700"
                      : "bg-slate-100 text-indigo-700 border-slate-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          className={`p-6 border-t flex flex-wrap items-center justify-between gap-4 ${
            darkMode
              ? "bg-slate-900/90 border-slate-800"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all ${
                  darkMode
                    ? "border-slate-700 hover:border-slate-500 text-slate-200 bg-slate-800 hover:bg-slate-700"
                    : "border-slate-300 hover:border-slate-400 text-slate-700 bg-white hover:bg-slate-100"
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                Ver Código GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Demo En Vivo
              </a>
            )}

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                Descargar APK
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm ${
              darkMode
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
