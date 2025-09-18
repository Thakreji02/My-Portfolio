import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackGround from "./components/Particals";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <BackGround />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
