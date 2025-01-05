import {
  Contact,
  Question,
  Project,
  About,
  Persona,
  Work,
  Intro,
  Workstyle,
  Header,
} from "./components";
import "./assets/font/font.css";
import { useRef } from "react";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="m-0 p-0 w-full ">
      {/* <div className="h-screen overflow-y-scroll snap-mandatory snap-y m-0 p-0 w-full overflow-x-hidden"> */}
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        workRef={workRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Workstyle />
      {/* <Intro sectionRef={homeRef} /> */}
      <About sectionRef={aboutRef} />
      <Work sectionRef={workRef} />
      <Question />
      <Project sectionRef={projectRef} />
      <Persona />
      <Contact sectionRef={contactRef} />
    </div>
  );
}

export default App;
