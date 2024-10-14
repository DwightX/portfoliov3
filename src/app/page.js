import './css/index.css'
import Experience from "./components/Experience";
import Maincontent from "./components/Maincontent";
import Projects from './components/Projects';
import Bottom from "./components/Bottom";

export default function Home() {
  return (
    <div>
      <Maincontent />
      <Experience />
      <Projects />
      <Bottom />
    </div>

  );
}
