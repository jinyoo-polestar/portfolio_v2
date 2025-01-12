import { useRef } from "react";

import Contact from "../src/components/contact";
import Project from "../src/components/project";
import About from "../src/components/about";
import Persona from "../src/components/persona";
import Work from "../src/components/work";
import Intro from "../src/components/intro";
import Workstyle from "../src/components/workstyle";
import Header from "../src/components/header";

import "./assets/font/font.css";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="m-0 w-full p-0 font-sans">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        workRef={workRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Intro sectionRef={homeRef} />
      <About sectionRef={aboutRef} />
      <Work sectionRef={workRef} />
      <Project sectionRef={projectRef} />
      <Persona />
      <Workstyle />
      <Contact sectionRef={contactRef} />
    </div>
  );
}

export default App;
