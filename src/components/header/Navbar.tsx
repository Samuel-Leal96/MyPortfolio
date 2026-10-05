import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Code2, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Tecnologías", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-xl transition-transform group-hover:scale-105 ${
                darkMode
                  ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                  : "bg-indigo-50 text-indigo-600 border border-indigo-200"
              }`}
            >
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span
                className={`font-bold text-lg tracking-tight block ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-xs text-indigo-500 font-medium block">
                Dev Multiplataforma
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-slate-800 text-amber-400 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              title={
                darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow-indigo-500/25 transition-all duration-200 active:scale-95"
            >
              Contactar
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-slate-800 text-amber-400"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "text-slate-300 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b shadow-xl ${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  darkMode
                    ? "text-slate-200 hover:bg-slate-800"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 px-4 font-semibold text-white bg-indigo-600 rounded-lg shadow-md"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
