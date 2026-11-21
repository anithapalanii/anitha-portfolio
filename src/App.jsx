import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal"; // TODO: adjust path if you save Reveal.jsx elsewhere
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero already has its own entrance animation, so it is not wrapped */}

        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Project />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
