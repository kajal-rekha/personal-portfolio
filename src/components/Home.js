import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
