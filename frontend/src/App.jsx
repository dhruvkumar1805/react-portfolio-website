import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <Main />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
