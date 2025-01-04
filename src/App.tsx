import {
  Footer,
  Question,
  Project,
  About,
  Persona,
  Work,
  Intro,
  Workstyle,
} from "./components";
import "./assets/font/font.css";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
      <Workstyle />
      <Intro />
      <About />
      <Work />
      <Question />
      <Project />
      <Persona />
      <Footer />
    </div>
  );
}

export default App;
