import './css/index.css'
import Experience from "./components/Experience";
import Maincontent from "./components/Maincontent";
import Projects from './components/Projects';
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import About from './components/About';
import MouseGlow from './components/MouseGlow';
import LeftPanel from './components/LeftPanel';

export default function Home() {
  return (
    <div>
      <MouseGlow />
      {/* Mobile top nav */}
      <Header />
      {/* Desktop left panel */}
      <LeftPanel />
      {/* Content */}
      <div className="pt-16 lg:pt-0 lg:ml-[360px]">
        {/* Hero only visible on mobile */}
        <div className="lg:hidden">
          <Maincontent />
        </div>
        <About />
        <Experience />
        <Projects />
        <Bottom />
      </div>
    </div>
  );
}
