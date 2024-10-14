import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
import MyServices from "./components/MyServices";
import ParticlesBackground from "./components/ParticlesBackground";
import './App.css';


function App() {
  return (
    <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 font-poppins">
      <ParticlesBackground />
      <NavBar />
      <HeroSection />
      <MyServices />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
