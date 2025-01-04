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
    <div>
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
