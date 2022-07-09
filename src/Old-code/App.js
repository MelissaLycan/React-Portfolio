import "./App.css";
import Footer from "./components/Footer";
import NavTabs from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    (
      <div>
        <Header>
          <NavTabs />
        </Header>
      </div>
    ),
    (
      <div>
        <About />
      </div>
    ),
    (
      <div>
        <Contact />
      </div>
    ),
    (
      <div>
        <Resume />
      </div>
    ),
    (
      <div>
        <Projects />
      </div>
    ),
    (
      <div>
        <Footer />
      </div>
    )
  );
}

export default App;
