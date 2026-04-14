import './css/index.css'
import Experience from "./components/Experience";
import Maincontent from "./components/Maincontent";
import Projects from './components/Projects';
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import About from './components/About';
import MouseGlow from './components/MouseGlow';

export default function Home() {
  return (
    <div>
      <MouseGlow />
      <Header />
      <Maincontent />
      <About />
      <Experience />
      <Projects />
      <Bottom />
    </div>
  );
}
