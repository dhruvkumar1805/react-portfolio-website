import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
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
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
