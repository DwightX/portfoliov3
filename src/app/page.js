import './css/index.css'
import Experience from "./components/Experience";
import Maincontent from "./components/Maincontent";
import Projects from './components/Projects';
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Header />
      <Maincontent />
      <About />
      <Experience />
      <Projects />
      <Bottom />
    </div>

  );
}
