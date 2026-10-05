import React, { useState, useEffect } from "react";
import { Navbar } from "./components/header/Navbar";
import { MainInfo } from "./components/content/MainInfo";
import { Services } from "./components/content/Services";
import { Skills } from "./components/content/Skills";
import { Projects } from "./components/content/Projects";
import { ProcessTimeline } from "./components/content/ProcessTimeline";
import { Testimonials } from "./components/content/Testimonials";
import { Contact } from "./components/footer/Contact";
import { Footer } from "./components/footer/Footer";

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <MainInfo darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <ProcessTimeline darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
