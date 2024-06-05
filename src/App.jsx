import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="lg:h-screen lg:snap-y lg:snap-proximity scroll-smooth lg:overflow-y-scroll bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <DarkMode />
      <div id="Home" className="snap-start min-h-screen">
        <Home />
      </div>
      <div id="Projects" className="snap-start min-h-screen">
        <Projects />
      </div>
      <div className="snap-start min-h-fit">
        <Footer />
      </div>
    </div>
  );
}

export default App;
