import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 font-poppins">
      <NavBar />
      <CustomCursor />
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
