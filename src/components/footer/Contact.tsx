import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../helper/SocialIcons";

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { personalInfo } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "react-native",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "react-native",
        message: "",
      });
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola ${personalInfo.name}, me gustaría cotizar un proyecto de software.`,
  );
  const whatsappUrl = `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Hablemos de tu Idea
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p
            className={`text-base sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Envíame un mensaje o contáctame directamente por WhatsApp o Email
            para coordinar una reunión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-3xl block transition-all group ${
                darkMode
                  ? "bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/50"
                  : "bg-white border border-slate-200 shadow-md hover:border-emerald-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      WhatsApp Directo
                    </h3>
                    <p
                      className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      Respuesta rápida por chat
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}?subject=Cotizacion%20de%20Proyecto`}
              className={`p-6 rounded-3xl block transition-all group ${
                darkMode
                  ? "bg-slate-800/60 border border-slate-700/80 hover:border-indigo-500/50"
                  : "bg-white border border-slate-200 shadow-md hover:border-indigo-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      Correo Electrónico
                    </h3>
                    <p
                      className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Social Buttons */}
            <div
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800/40 border border-slate-700/80"
                  : "bg-slate-50 border border-slate-200"
              }`}
            >
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Redes & Perfiles Profesionales
              </h4>

              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-semibold text-xs border transition-all ${
                    darkMode
                      ? "border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-200"
                      : "border-slate-300 hover:border-slate-400 bg-white text-slate-700"
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-semibold text-xs border transition-all ${
                    darkMode
                      ? "border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-200"
                      : "border-slate-300 hover:border-slate-400 bg-white text-slate-700"
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 rounded-3xl transition-all ${
                darkMode
                  ? "bg-slate-800/60 border border-slate-700/80 shadow-xl"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p
                    className={`text-sm max-w-md mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Gracias por ponerte en contacto. Te responderé a la brevedad
                    posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Enviarme un Mensaje Directo
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                          darkMode
                            ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                            : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Tu Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                          darkMode
                            ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                            : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Tecnología / Tipo de Proyecto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        darkMode
                          ? "bg-slate-900 border-slate-700 text-white"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    >
                      <option value="react-native">
                        App Móvil (React Native)
                      </option>
                      <option value="angular">
                        Aplicación Web Enterprise (Angular)
                      </option>
                      <option value="android-native">
                        App Móvil Nativa (Android Kotlin)
                      </option>
                      <option value="web-fullstack">
                        Desarrollo Web Fullstack
                      </option>
                      <option value="otro">Otro / Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Detalles del Proyecto o Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Cuéntame sobre el objetivo del proyecto, funciones deseadas y fechas estimadas..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        darkMode
                          ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                          : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Formulario de Cotización
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
