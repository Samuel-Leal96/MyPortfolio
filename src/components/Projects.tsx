import React, { useState } from 'react';
import { ExternalLink, Download, Eye, Smartphone, Globe, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'all' | 'react-native' | 'angular' | 'android-native' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos', icon: Layers },
    { id: 'react-native', label: 'React Native', icon: Smartphone },
    { id: 'angular', label: 'Angular', icon: Globe },
    { id: 'android-native', label: 'Android Nativo', icon: Cpu },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="proyectos" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/40' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Portafolio Destacado
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Proyectos de Software & Aplicaciones
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explora una selección de proyectos reales desarrollados en React Native, Angular y Android Nativo con Kotlin.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                    : darkMode
                      ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/80'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComp className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-slate-800/60 border border-slate-700/80 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10' 
                  : 'bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-slate-900/80 text-indigo-300 backdrop-blur-md border border-indigo-500/30">
                    {project.categoryLabel}
                  </span>

                  {/* Featured pill if any */}
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-amber-500 text-slate-950 shadow-sm">
                      Destacado
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className={`text-xl font-bold group-hover:text-indigo-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-xs font-medium ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[11px] font-medium rounded-md border ${
                          darkMode 
                            ? 'bg-slate-900/60 text-slate-300 border-slate-700' 
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-md ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        +{project.tags.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`p-6 pt-4 border-t flex items-center justify-between gap-2 ${
                darkMode ? 'border-slate-700/40' : 'border-slate-100'
              }`}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Ver Detalles
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                      title="Ver en GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                      title="Ver Demo En Vivo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                      title="Descargar APK"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal display when project is selected */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />

      </div>
    </section>
  );
};
