import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
