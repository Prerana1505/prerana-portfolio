import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Github from "./sections/Github";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />
	
	      <Experience />

        <Certifications />

        <Github />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;