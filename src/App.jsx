
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <section id="skills" className="scroll-mt-28" />
        <section id="projects" className="scroll-mt-28" />
        <section id="contact" className="scroll-mt-28" />

      </main>

      <Footer />

    </div>
  );
}

export default App;
