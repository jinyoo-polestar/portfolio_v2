import {
  Footer,
  Question,
  Project,
  About,
  Persona,
  Work,
  Intro,
} from "./components";
import "./assets/font/font.css";

function App() {
  return (
    <div>
      <Intro />
      <Work />
      <Persona />
      <Question />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
