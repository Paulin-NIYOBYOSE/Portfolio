
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 font-poppins">

      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
