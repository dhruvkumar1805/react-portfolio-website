import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Main />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">portfolio1</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
