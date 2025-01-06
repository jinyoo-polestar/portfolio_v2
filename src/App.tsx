import { useRef } from "react";
import {
  Contact,
  Project,
  About,
  Persona,
  Work,
  Intro,
  Workstyle,
  Header,
} from "./components";
import "./assets/font/font.css";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="m-0 p-0 w-full">
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
